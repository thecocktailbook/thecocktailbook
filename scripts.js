// Mock data for cocktails
const cocktails = [
    { name: "Margarita", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Gin and tonic", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Mojito", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Strawberry daiquiri", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Pina colada", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Cosmopolitan", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Mai tai", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Negroni", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Whiskey sour", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Sangria", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Mimosa", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Bloody Mary", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Long island", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Espresso martini", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Whiskey smash", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Sex on the beach", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Blue lagoon", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Tequila sunrise", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "Aperol spritz", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
	{ name: "White lady", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
];

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    
    const cocktail = cocktails.find(cocktail => cocktail.name.toLowerCase() === searchTerm);
    
    if (cocktail) {
		//var theURL = window.location.pathname;
		//theURL = theURL.replace("/index.html", "/"+searchTerm+"html");
        // Redirect to cocktail details page with selected cocktail name as URL parameter
        //window.location.href = `cocktail_details.html?cocktail=${encodeURIComponent(cocktail.name)}`;
        window.location.href = `${searchTerm}.html`;
    } else {
        alert("Cocktail not found!");
    }
}

// Event listener for search input
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});