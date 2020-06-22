import json
import config
from flask import Flask, render_template, request, jsonify
from itertools import groupby
from sodapy import Socrata
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("map.html")

@app.route("/filter", methods=["POST"])
def refresh():

	filterText = request.form.get("filterOn").upper().strip()
	#print(filterText)
	client = Socrata("data.cityofnewyork.us",config.access_token)
	results = client.get("43nn-pn8j", 
					select="dba, camis,latitude,longitude,building,street,boro,inspection_date,violation_code,coalesce(grade,''),coalesce(score,-1) as score",
					where="upper(dba) like '%" + filterText + "%' AND coalesce(latitude,0) != 0 AND coalesce(longitude,0) != 0 and coalesce(violation_code,'') != '' ",
					order="camis,inspection_date DESC ,violation_code ASC",
					limit = 2000)

	groups = []
	camis = set()
	
	for key1, group1 in groupby(results, lambda r: (r['dba'], r['camis'],r['latitude'],r['longitude'],r['building'],r['street'],r['boro'])):
		z = list(group1)
		codes = []
		inspections = []
		
		if key1[1] in camis:
			continue
		else:	
			for key2, group2 in groupby(z, lambda v: (v['inspection_date'],v['score'])):
				q = list(group2)
				codes = [{k: v for k, v in d.items() if k in ['violation_code'] and v != '' } for d in q]		
					
				if (q[0]['coalesce_grade']) == '':
					grade = 'Ungraded'
				else:
					grade = (q[0]['coalesce_grade'])
				
				if key2[1] == '-1': 
					score = '' 
				else:
					score = key2[1]
					
				dtGrade = (datetime.strptime(key2[0], "%Y-%m-%dT%H:%M:%S.%f")).strftime("%m/%d/%Y")
				inspections.append({'DATE': dtGrade ,'CODES': codes, 'GRADE': grade,'SCORE': score })
				
			groups.append({
					'DBA': key1[0],
					'CAMIS': key1[1],
					'Latitude': key1[2],
					'Longitude': key1[3],
					'BUILDING': key1[4],
					'STREET': key1[5],
					'BORO': key1[6],
					"GRADE HISTORY": inspections
			})

			camis.add(key1[1])

	return jsonify(groups)

if __name__ == "__main__":
    app.run(debug=True)