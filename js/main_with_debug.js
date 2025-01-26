// Initialize everything
function initialize() {
    createTable(cityPop); // Create the table
    addColumns(cityPop); // Add columns
    addEvents(); // Attach events
}

// Array of city objects
var cityPop = [
    { city: "Madison", population: 233209 },
    { city: "Milwaukee", population: 594833 },
    { city: "Green Bay", population: 104057 },
    { city: "Superior", population: 27244 },
];

// Function to create the table dynamically
function createTable(cityPop) {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    // Create headers
    headerRow.innerHTML = "<th>City</th><th>Population</th>";
    table.appendChild(headerRow);

    // Add city data
    cityPop.forEach(city => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${city.city}</td><td>${city.population}</td>`;
        table.appendChild(row);
    });

    // Append the table to the body
    document.body.appendChild(table);
}

// Adds a new column to the table
function addColumns(cityPop) {
    const rows = document.querySelectorAll("tr");

    if (!rows.length) {
        console.error("No rows found in the table.");
        return;
    }

    rows.forEach(function (row, i) {
        if (i === 0) {
            row.insertAdjacentHTML("beforeend", "<th>City Size</th>");
        } else {
            let citySize = "Small";

            if (cityPop[i - 1].population >= 100000 && cityPop[i - 1].population < 500000) {
                citySize = "Medium";
            } else if (cityPop[i - 1].population >= 500000) {
                citySize = "Large";
            }

            row.insertAdjacentHTML("beforeend", `<td>${citySize}</td>`);
        }
    });
}

// Adds hover and click events
function addEvents() {
    const table = document.querySelector("table");

    if (!table) {
        console.error("Table not found. Cannot add events.");
        return;
    }

    table.addEventListener("mouseover", function () {
        let color = "rgb(";

        for (let i = 0; i < 3; i++) {
            let random = Math.round(Math.random() * 255);
            color += random;

            if (i < 2) {
                color += ",";
            } else {
                color += ")";
            }
        }

        table.style.backgroundColor = color;
    });

    table.addEventListener("click", function () {
        alert("Hey, you clicked me!");
    });
}


// Run initialize when the DOM is ready
document.addEventListener("DOMContentLoaded", initialize);
