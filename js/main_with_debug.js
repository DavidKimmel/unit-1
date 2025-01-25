// Array of city objects, each with a name and population property
var cityPop = [
    {
        city: "Madison",
        population: 233209,
    },
    {
        city: "Milwaukee",
        population: 594833,
    },
    {
        city: "Green Bay",
        population: 104057,
    },
    {
        city: "Superior",
        population: 27244,
    },
];

// Adds a new column to the table, indicating the size of the city based on population
function addColumns(cityPop) {
    // Loop through all table rows
    document.querySelectorAll("tr").forEach(function (row, i) {
        if (i === 0) {
            // For the first row (header), add a new column titled "City Size"
            row.insertAdjacentHTML("beforeend", "<th>City Size</th>");
        } else {
            // For other rows, determine the city size based on population
            let citySize;

            if (cityPop[i - 1].population < 100000) {
                citySize = "Small";
            } else if (cityPop[i - 1].population < 500000) {
                citySize = "Medium";
            } else {
                citySize = "Large";
            }

            // Add the city size to the corresponding row in the table
            row.insertAdjacentHTML("beforeend", `<td>${citySize}</td>`);
        }
    });
}

// Adds hover and click interactions to the table
function addEvents() {
    // Add a hover interaction that changes the background color of the table
    document.querySelector("table").addEventListener("mouseover", function () {
        let color = "rgb(";

        // Generate random RGB color values
        for (let i = 0; i < 3; i++) {
            let random = Math.round(Math.random() * 255);
            color += random;

            if (i < 2) {
                color += ",";
            } else {
                color += ")";
            }
        }

        // Set the background color of the table to the generated color
        document.querySelector("table").style.backgroundColor = color;
    });

    // Add a click interaction that displays an alert message
    function clickme() {
        alert("Hey, you clicked me!");
    }

    // Add the click event listener to the table
    document.querySelector("table").addEventListener("click", clickme);
}

// Example usage: Call the functions when the page loads
document.addEventListener("DOMContentLoaded", function () {
    addColumns(cityPop); // Add the "City Size" column
    addEvents(); // Add hover and click interactions to the table
});
document.addEventListener('DOMContentLoaded',initialize)