const codes = {
    "02A": "Food not cooked to required minimum temperature.",
    "02B": "Hot food item not held at or above 140ºF.",
    "02C": "Hot food item that has been cooked and refrigerated is being held for service without first being reheated to 165ºF or above within 2 hours.",
    "02D": "Precooked potentially hazardous food from commercial food processing establishment that is supposed to be heated, but is not heated to 140ºF within 2 hours.",
    "02E": "Whole frozen poultry or poultry breasts, other than a single portion, is being cooked frozen or partially thawed.",
    "02F": "Meat, fish or molluscan shellfish served raw or undercooked without prior notification to customer.",
    "02G": "Cold food item held above 41º F (smoked fish and reduced oxygen packaged foods above 38ºF) except during necessary preparation.",
    "02H": "Food not cooled by an approved method whereby the internal product temperature is reduced from 140ºF to 70ºF or less within 2 hours, and from 70º F to 41º F or less within 4 additional hours.",
    "02I": "Food prepared from ingredients at ambient temperature not cooled to 41º F or below within 4 hours.",
    "02J": "Reduced oxygen packaged (ROP) foods not cooled by an approved method whereby the internal food temperature is reduced to 38ºF within two hours of cooking and if necessary further cooled to a temperature of 34ºF within six hours of reaching 38ºF.",
    "03A": "Food from unapproved or unknown source or home canned. Reduced oxygen packaged (ROP) fish not frozen before processing; or ROP foods prepared on premises transported to another site.",
    "03B": "Shellfish not from approved source, improperly tagged/labeled; tags not retained for 90 days.",
    "03C": "Eggs found dirty/cracked; liquid, frozen or powdered eggs not pasteurized.",
    "03D": "Canned food product observed swollen, leaking or rusted, and not segregated from other consumable food items .",
    "03E": "Potable water supply inadequate. Water or ice not potable or from unapproved source.  Cross connection in potable water supply system observed.",
    "03F": "Unpasteurized milk or milk product present.",
    "03G": "Raw food not properly washed prior to serving.",
    "04A": "Food Protection Certificate not held by supervisor of food operations.",
    "04B": "Food worker prepares food or handles utensil when ill with a disease transmissible by food, or have exposed infected cut or burn on hand.",
    "04C": "Food worker does not use proper utensil to eliminate bare hand contact with food that will not receive adequate additional heat treatment.",
    "04D": "Food worker does not wash hands thoroughly after using the toilet, coughing, sneezing, smoking, eating, preparing raw foods or otherwise contaminating hands.",
    "04E": "Toxic chemical improperly labeled, stored or used such that food contamination may occur.",
    "04F": "Food, food preparation area, food storage area, area used by employees or patrons, contaminated by sewage or liquid waste.",
    "04G": "Unprotected potentially hazardous food re-served.",
    "04H": "Raw, cooked or prepared food is adulterated, contaminated, cross-contaminated, or not discarded in accordance with HACCP plan.",
    "04I": "Unprotected food re-served.",
    "04J": "Appropriately scaled metal stem-type thermometer or thermocouple not provided or used to evaluate temperatures of potentially hazardous foods during cooking, cooling, reheating and holding.",
    "04K": "Evidence of rats or live rats present in facility food and/or non-food areas.",
    "04L": "Evidence of mice or live mice present in facility food and/or non-food areas.",
    "04M": "Live roaches present in facility food and/or non-food areas.",
    "04N": "Filth flies or food/refuse/sewage-associated (FRSA) flies present in facility's food and/or non-food areas.",
    "04O": "Live animals other than fish in tank or service animal present in facility food and/or non-food areas.",
    "05A": "Sewage disposal system improper or unapproved.",
    "05B": "Harmful, noxious gas or vapor detected. CO ~1 3 ppm.",
    "05C": "Food contact surface improperly constructed or located. Unacceptable material used.",
    "05D": "Hand washing facility not provided in or near food preparation area and toilet room. Hot and cold running water at adequate pressure to enable cleanliness of employees not provided at facility. Soap and an acceptable hand-drying device not provided.",
    "05E": "Toilet facility not provided for employees or for patrons when required.",
    "05F": "Insufficient or no refrigerated or hot holding equipment to keep potentially hazardous foods at required temperatures.",
    "05H": "No facilities available to wash, rinse and sanitize utensils and/or equipment.",
    "06A": "Personal cleanliness inadequate. Outer garment soiled with possible contaminant.  Effective hair restraint not worn in an area where food is prepared.",
    "06B": "Tobacco use, eating, or drinking from open container in food preparation, food storage or dishwashing area observed.",
    "06C": "Food not protected from potential source of contamination during storage, preparation, transportation, display or service.",
    "06D": "Food contact surface not properly washed, rinsed and sanitized after each use and following any activity when contamination may have occurred.",
    "06E": "Sanitized equipment or utensil, including in-use food dispensing utensil, improperly used or stored.",
    "06F": "Wiping cloths soiled or not stored in sanitizing solution.",
    "06G": "HACCP plan not approved or approved HACCP plan not maintained on premises.",
    "06H": "Records and logs not maintained to demonstrate that HACCP plan has been properly implemented.",
    "06I": "Food not labeled in accordance with HACCP plan.",
    "07A": "Duties of an officer of the Department interfered with or obstructed.",
    "08A": "Facility not vermin proof. Harborage or conditions conducive to attracting vermin to the premises and/or allowing vermin to exist.",
    "08B": "Covered garbage receptacle not provided or inadequate, except that garbage receptacle may be uncovered during active use. Garbage storage area not properly constructed or maintained; grinder or compactor dirty.",
    "08C": "Pesticide use not in accordance with label or applicable laws. Prohibited chemical used/stored. Open bait station used.",
    "09A": "Canned food product observed dented and not segregated from other consumable food items.",
    "09B": "Thawing procedures improper.",
    "09C": "Food contact surface not properly maintained.",
    "10A": "Toilet facility not maintained and provided with toilet paper, waste receptacle and self-closing door.",
    "10B": "Plumbing not properly installed or maintained; anti-siphonage or backflow prevention device not provided where required; equipment or floor not properly drained; sewage disposal system in disrepair or not functioning properly.",
    "10C": "Lighting inadequate; permanent lighting not provided in food preparation areas, ware washing areas, and storage rooms.",
    "10D": "Mechanical or natural ventilation system not provided, improperly installed, in disrepair and/or fails to prevent excessive build-up of grease, heat, steam condensation vapors, odors, smoke, and fumes.",
    "10E": "Accurate thermometer not provided in refrigerated or hot holding equipment.",
    "10F": "Non-food contact surface improperly constructed. Unacceptable material used. Non-food contact surface or equipment improperly maintained and/or not properly sealed, raised, spaced or movable to allow accessibility for cleaning on all sides, above and underneath the unit.",
    "10G": "Food service operation occurring in room used as living or sleeping quarters.",
    "10H": "Proper sanitization not provided for utensil ware washing operation.",
    "10I": "Single service item reused, improperly stored, dispensed; not used when required.",
    "10J": "Wash hands sign not posted at hand wash facility.",
    "15I": "No Smoking and/or Smoking Permitted sign not conspicuously posted. Health warning not present on Smoking Permitted",
    "15J": "Ashtray present in smoke-free area.",
    "15K": "Operator failed to make good faith effort to inform smokers of the Smoke-free Act prohibition of smoking.",
    "15L": "Smoke free workplace smoking policy inadequate, not posted, not provided to employees.",
    "15S": "Flavored tobacco products sold or offered for sale.",
    "15T": "Original label for tobacco products sold or offered for sale.",
    "16A": "A food containing artificial trans fat, with 0.5 grams or more of trans fat per serving, is being stored, distributed, held for service, used in preparation of a menu item, or served.",
    "16B": "The original nutritional fact labels and/or ingredient label for a cooking oil, shortening or margarine or food item sold in bulk, or acceptable manufactures documentation not maintained on site.",
    "16C": "Caloric content not posted on menus, menu boards or food tags, in a food service establishment that is 1 of 15 or more outlets operating the same type of business nationally under common ownership or control, or as a franchise or doing business under the same name, for each menu item that is served in portions, the size and content of which are standardized.",
    "16D": "Posted caloric content on the menu(s), menu board(s), food tag(s) or stanchions adjacent to menu boards for drive-through windows deficient, in that the size and/or font for posted calories is not as prominent as the name of the menu item or its price.",
    "16E": "Caloric content range (minimum to maximum) not posted on menus and or menu boards for each flavor, variety and size of each menu item that is offered for sale in different flavors, varieties and sizes.",
    "18B": "Document issued by the Board of Health, Commissioner or Department unlawfully reproduced or altered.",
    "18C": "Notice of the Department of Board of Health mutilated, obstructed, or removed.",
    "18D": "Failure to comply with an Order of the Board of Health, Commissioner, or Department.",
    "18F": "Permit not conspicuously displayed.",
    "18G": "Manufacture of frozen dessert not authorized on Food Service Establishment permit.",
    "20A": "Food allergy information poster not conspicuously posted where food is being prepared or processed by food workers.",
    "20D": "Choking first aid poster not posted.Alcohol and pregnancy warning sign not posted. Resuscitation equipment: exhaled air resuscitation masks (adult & pediatric), latex gloves, sign not posted. Inspection report sign not posted.",
    "20E": "Letter Grade or Grade Pending card not conspicuously posted and visible to passersby.",
    "20F": "Current letter grade card not posted.",
    "22A": "Nuisance created or allowed to exist. Facility not free from unsafe, hazardous, offensive or annoying conditions.",
    "22B": "Toilet facility used by women does not have at least one covered garbage receptacle.",
    "22C": "Bulb not shielded or shatterproof, in areas where there is extreme heat, temperature changes, or where accidental contact may occur.",
    "22E": "ROP processing equipment not approved by DOHMH."
}
const colors = { "A": "#2ca02c", "B": "#ff7f0e", "C": "#d62728", "N": "#9467bd", "Z": "#9467bd", "P": "#000000" }

function frmsubmit() {
    const request = new XMLHttpRequest();
    var letters = document.querySelector('#filterOn').value;
    request.open('POST', '/filter');
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            filteredData = JSON.parse(request.responseText);
            filteredData = filteredData.sort((a, b) => a.DBA.localeCompare(b.DBA))
            filteredData.forEach(function (d, i) {
                var c = L.marker([d.Latitude, d.Longitude], { title: d.DBA, DBA: d.DBA, CAMIS: d.CAMIS, LATITUDE: d.Latitude, LONGITUDE: d.Longitude, GRADES: d['GRADE HISTORY'] })
                    .bindPopup(getPopUp, { autoPanPaddingTopLeft: [32.5, 100] })
                filteredData[i]['MARKER'] = c
            });
            drawTable(filteredData);
            drawMarkers();
        }
    };

    var data = new FormData();
    data.append('filterOn', letters);

    request.send(data);
    return false;
};

function getPopUp(e) {

    var div = d3.create('div').attr("class", "container-fluid")

    div.append("text")
        .style("font-size", ".8rem")
        .text(e.options.DBA)
        .attr("text-anchor", "middle");

    var divRow = div.append("div").attr("class", "row")
    var divLine = divRow.append("div").attr("class", "col-4")
    divLine.node().appendChild(getLineChart(e));
    var divPie = divRow.append("div").attr("class", "col-4").attr("id", "pieDiv");
    divPie.node().appendChild(getPie(e));
    var divTable = divRow.append("div").attr("class", "col-4").attr("id", "gradeTable")
    divTable.node().appendChild(getGradeTable(e));

    return div.node()

}

function getGradeTable(e) {

    var tbl = d3.create('table');
    var thead = tbl.append("thead").append("tr");
    thead.append("th").text("Grade");
    thead.append("th").text("Date");
    thead.append("th").text("Score");
    var tbody = tbl.append("tbody").attr("class", "table table-sm");

    var tr = tbody.selectAll("tr").data(e.options.GRADES)
    var trExit = tr.exit().remove();
    var trEnter = tr.enter().append('tr');
    tr = trEnter.merge(tr).on("mouseover", drawInspections).on("mouseout", function () { d3.select("#inspections").remove() })

    var td = tr.selectAll("td")
        .data(function (d) { return [{ column: 'Grade', value: d.GRADE }, { column: 'Date', value: d['DATE'] }, { column: 'Score', value: d.SCORE }] });

    var tdExit = td.exit().remove();
    var tdEnter = td.enter().append("td");
    td = tdEnter.merge(td).text(d => d.value)

    return tbl.node()
}

function getPie(e) {

    var width = 150,
        height = 150
    var radius = Math.min(width, height) / 2;
    var data = {}
    var totalDays = 0

    var grades = e.options.GRADES.filter(function (item) {
        return item.GRADE != 'Ungraded'
    });

    for (var i = grades.length - 1; i >= 0; i--) {
        var day2
        if (i == 0) {
            day2 = new Date();
        }
        else {
            day2 = new Date(grades[i - 1]['DATE']);
        }
        var day1 = new Date(grades[i]['DATE'])
        var diffTime = Math.abs(day2 - day1);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        totalDays += diffDays;

        if (data[grades[i].GRADE]) {
            data[grades[i].GRADE] = data[grades[i].GRADE] + diffDays
        } else {
            data[grades[i].GRADE] = diffDays
        }
    }

    var div = d3.create('div')

    var svg = div.append('svg')
        .attr('width', '200px')
        .attr('height', '200px')
        .append('g')
        .attr('transform', 'translate(' + 100 + ',' + 100 + ')');

    var pie = d3.pie()
        .sort(null)
        .value(function (d) {
            return d.value;
        });
    var data_ready = pie(d3.entries(data))

    var arc = d3.arc()
        .innerRadius(radius - 60)
        .outerRadius(radius);

    var g = svg.selectAll("path")
        .data(data_ready)
        .enter().append("g").attr("class", "arc");
    var path = g.append("path")
        .attr("fill", function (d, i) {
            return colors[d.data.key];
        })
        .attr('stroke', 'white')
        .attr('pointer-events', 'none')
        .on("mouseover", function (d) {
            d3.select(this).transition()
                .duration(200)
                .ease(d3.easeLinear)
                .attr('d', d3.arc()
                    .innerRadius(radius - 60)
                    .outerRadius(radius * 1.1))

            let g = d3.select(this).node().parentNode
            d3.select(g).select(".pieLabel").text((parseFloat((d.data.value / totalDays) * 100).toFixed(1) + "%")).transition().attr("transform", function (d) {
                let _d = arc.centroid(d)
                _d[0] = _d[0] * 1.2
                _d[1] = _d[1] * 1.2

                return "translate(" + _d + ")";
            })
                .duration(200)
        })
        .on("mouseout", function () {
            d3.select(this).transition()
                .duration(200)
                .ease(d3.easeLinear)
                .attr('d', d3.arc()
                    .innerRadius(radius - 60)
                    .outerRadius(radius))

            let text = d3.select(this).node()
            let g = text.parentNode
            d3.select(g).select(".pieLabel").text(function (d) {
                return d.data.key;
            })
                .transition().attr("transform", function (d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .duration(200)
        })
        .transition()
        .duration(function (d, i) {
            return 1000;
        })
        .attrTween('d', function (d) {
            var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
            return function (t) {
                d.endAngle = i(t);
                return arc(d);
            }
        })
        .transition().attr('pointer-events', 'auto')

    svg.selectAll(".arc").append("text")
        .attr("transform", function (d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("class", "pieLabel")
        .text(function (d) {
            return d.data.key;
        });

    return div.node();
}

function clickTable(e) {
    mymap.flyTo([e.Latitude, e.Longitude], 15, {
        animate: true,
        duration: .5
    })
    mymap.once('zoomend', function () {
        drawMarkers();
        e.MARKER.openPopup()
    });
}


function throttleFunction(func, delay) {

    if (timerId) {
        return
    }
    // Schedule a setTimeout after delay seconds
    timerId = setTimeout(function () {
        func()
        timerId = undefined;
    }, delay)
}

function filtered() {
    throttleFunction(filterChange, 300)
}

function mapMove() {
    throttleFunction(mapChange, 300)
}

function drawMarkers() {
    filteredData.forEach(function (d, i) {

        d.Latitude = +d.Latitude;
        d.Longitude = +d.Longitude;

        if (mymap.getBounds().contains([d.Latitude, d.Longitude])) {
            d.MARKER.addTo(layerGroup)
        }
    });
}

function mapChange() {
    d3.select("#inspections").remove();

    for (var i in layerGroup._layers)
        if (!mymap.getBounds().contains(layerGroup._layers[i]._latlng)) {
            layerGroup.removeLayer(i);
        }
    drawMarkers();
}

function filterChange() {
    layerGroup.clearLayers();
    filterText = d3.select('#filterOn').property('value').toLowerCase()

    if (filterText !== "" && filterText.length > 2) {
        frmsubmit();
    }
    else {
        d3.selectAll("tbody > tr").remove()
        filteredData = [];
    }
}

function drawTable() {

    var table = d3.select("tbody");
    var tr = table.selectAll("tr").data(filteredData);
    var trExit = tr.exit().remove();
    var trEnter = tr.enter().append('tr');
    tr = trEnter.merge(tr).on('click', clickTable)

    var td = tr.selectAll("td")
        .data(function (d) { return [{ column: 'DBA', value: d.DBA }, { column: 'GRADE', value: d['GRADE HISTORY'][0]['GRADE'] }, { column: 'GRADEDATE', value: d['GRADE HISTORY'][0]['DATE'] }, { column: 'LOCATION', value: d["BUILDING"] + " " + d["STREET"] + "," + d["BORO"] }] });

    var tdExit = td.exit().remove();
    var tdEnter = td.enter().append("td");
    td = tdEnter.merge(td).text(d => d.value);
};


function drawInspections(d) {

    let posX = d3.select(".leaflet-popup-content-wrapper").node().getBoundingClientRect().x;
    let posY = d3.select(".leaflet-popup-content-wrapper").node().getBoundingClientRect().bottom + 40;
    let width = d3.select(".leaflet-popup-content-wrapper").node().getBoundingClientRect().width;

    var inspections = d3.select("body").append("div").attr("id", "inspections")
        .style("left", (posX + 'px'))
        .style("top", (posY + 'px'))
        .style("display", "block")
        .style("max-width", width + 'px')
        .style("width", width + 'px');

    var table = inspections.append("table").attr("class", "table table-sm").append("tbody");

    var tr = table.selectAll("tr").data(d.CODES)
    var trExit = tr.exit().remove()
    var trEnter = tr.enter().append('tr')
    tr = trEnter.merge(tr)

    var td = tr.selectAll("td")
        .data(function (d, i) {
            return [{ column: 'CODE', value: codes[d['violation_code']] }]
        });

    var tdExit = td.exit().remove();
    var tdEnter = td.enter().append("td");
    td = tdEnter.merge(td).text(d => d.value);
};

function getLineChart(e) {

    var margin = { top: 20, right: 20, bottom: 20, left: 20 },
        w = 220 - margin.left - margin.right,
        h = 220 - margin.top - margin.bottom;

    var ungraded = e.options.GRADES.filter(function (item) {
        return item.SCORE != '';
    });

    var data = ungraded.map(function (item) {
        return ({ x: new Date(item['DATE']), y: +item['SCORE'], CODES: item['CODES'] });
    });

    data.sort(function (a, b) {
        return new Date(a.x) - new Date(b.x);
    });

    var svg = d3.create("div")

    var g = svg.append("svg")
        .attr("height", 250).attr("width", 205).append('g').attr("transform", "translate(" + margin.left + ",5)");

    var x = d3.scaleTime().domain(d3.extent(data, function (d) { return d.x; })).range([0, w]);
    var y = d3.scaleLinear().domain([0, d3.max(data, function (d) { return d.y; }) + 5]).range([h, 0]);

    ticks = y.ticks();
    ticks.push(14);
    if (d3.max(ticks) > 27) {
        ticks.push(28);
    };

    var maxPoint = d3.max(data, function (d) { return d.y; }) + 5;

    g.append("rect")
        .attr("x", 0)
        .attr("y", y(14))
        .attr("width", w)
        .attr("height", h - y(14))
        .style("fill", '#2ca02c');

    if (maxPoint > 14) {
        g.append("rect")
            .attr("x", 0)
            .attr("y", y(d3.min([28, maxPoint])))
            .attr("width", w)
            .attr("height", y(14) - y(d3.min([28, maxPoint])))
            .style("fill", '#ff7f0e');
    };

    if (maxPoint > 28) {
        g.append("rect")
            .attr("x", 0)
            .attr("y", y(maxPoint))
            .attr("width", w)
            .attr("height", y(28) - y(maxPoint))
            .style("fill", '#d62728');
    };

    var line = d3.line()
        .curve(d3.curveMonotoneY)
        .x(function (d) { return x(d.x); })
        .y(function (d) { return y(d.y); });

    g.append("g")
        .attr("class", "axisBottom")
        .attr("transform", "translate(" + (0) + " ," + (h) + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0 ,0)")
        .call(d3.axisLeft(y)
            .tickFormat(function (d) { if (d == 0) { return "A" } else if (d == 14) { return "B" } else if (d == 28) { return "C" } else { return d } })
            .tickValues(ticks));

    var tickB = svg.selectAll("g > text")
        .filter(function () {
            return d3.select(this).text() == "B"
        }).attr("color", "#ff7f0e");

    B = tickB.select(function () { return this.parentNode; });
    B.select("line").attr("x2", w).attr("color", "#ff7f0e");

    var tickC = svg.selectAll("g > text")
        .filter(function () {
            return d3.select(this).text() == "C"
        }).attr("color", "#d62728");

    C = tickC.select(function () { return this.parentNode; });
    C.select("line").attr("x2", w).attr("color", "#d62728");

    svg.selectAll("g > text")
        .filter(function () {
            return d3.select(this).text() == "A"
        }).attr("color", "#2ca02c");

    svg.selectAll(".axisBottom > .domain")
        .style("stroke", "#2ca02c");

    var path = g.insert("svg:path")
        .data([data])
        .attr("d", line)
        .attr("stroke", "steelblue")
        .attr("stroke-width", "2")
        .attr("fill", "none");

    var circles = g.selectAll(null)
        .data(data)
        .enter().append("svg:circle")
        .attr('class', 'circ')
        .attr("r", 4)
        .attr("cx", function (d) { return x(d.x); })
        .attr("cy", function (d) { return y(d.y); })
        .style('fill', 'lightsteelblue')
        .on("mouseover", function (d) {
            d3.select(this).attr("r", 6);
            drawInspections(d)
        })
        .on("mouseout", function () {
            d3.select(this).attr("r", 4);
            d3.select("#inspections").remove()
        });

    var totalLength = path.node().getTotalLength();

    path
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(1000)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);

    return svg.node();
}

L.Marker.extend({
    options: {
        CAMIS: '',
        DBA: '',
        LATITUDE: '',
        LONGITUDE: '',
        GRADES: ''
    }
});

var filterText = '';
var filteredData = [];
var timerId;
var layerGroup = L.layerGroup()
var basetiles = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL. &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    minZoom: 13,
    maxZoom: 17
});

var mymap = L.map('mapid', { layers: [basetiles, layerGroup] })
    .setView([40.7128, -74.0060], 14);

mymap.on('resize moveend zoomend', mapMove);
d3.select('#filterOn').on('keyup', filtered);

