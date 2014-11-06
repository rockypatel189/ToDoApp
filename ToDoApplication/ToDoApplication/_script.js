var spaceDockApp = {};
spaceDockApp.dockedShips = [];
spaceDockApp.DockingShip = function (fueltype, capacity, crew, name) {
    this.fueltype = fueltype;
    this.capacity = capacity;
    this.crew = crew;
    this.name = name;
}
spaceDockApp.addShip = function () {
    "use strict"
    var fueltype = document.getElementById("fueltype").value;
    var capacity = document.getElementById("capacity").value;
    var crew = document.getElementById("crew").value;
    var name = document.getElementById("name").value;
    var newShip = new spaceDockApp.DockingShip(fueltype, capacity, crew, name);
    spaceDockApp.dockedShips.push(newShip);
    document.getElementById("fueltype").value = "";
    document.getElementById("capacity").value = "";
    document.getElementById("crew").value = "";
    document.getElementById("name").value = "";
    spaceDockApp.drawTable();
}

spaceDockApp.drawTable = function () {
    var h = "";
    for (var i in spaceDockApp.dockedShips) {
        h += "<tr>";
        h += "<td>" + spaceDockApp.dockedShips[i].fueltype + "</td>";
        h += "<td>" + spaceDockApp.dockedShips[i].capacity + "</td>";
        h += "<td>" + spaceDockApp.dockedShips[i].crew + "</td>";
        h += "<td>" + spaceDockApp.dockedShips[i].name + "</td>";
        h += "</tr>";
    }
    document.getElementById("someshit").innerHTML = h;
}
spaceDockApp.delBtn = function () {
    var h = "";
    for (var i in spaceDockApp.dockedShips) {
        h += "<tr>";
        h += "<td>" + spaceDockApp.dockedShips[i].fueltype + "</td>";
        h += "<td>" + spaceDockApp.dockedShips[i].capacity + "</td>";
        h += "<td>" + spaceDockApp.dockedShips[i].crew + "</td>";
        h += "<td>" + spaceDockApp.dockedShips[i].name + "</td>";
        h += "</tr>";
    }
    document.getElementById("someshit").innerHTML = h;
    delete spaceDockApp.dockedShips[i];
}