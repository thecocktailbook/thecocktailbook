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

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addToListButton');
    const counter = document.getElementById('cocktailCounter');
    
    addButton.addEventListener('click', function() {
		// let buttonValue = addButton.getAttribute("value");
		// addedCocktails.push({cocktailName:buttonValue, quantity:1});
        let count = parseInt(counter.innerText);
        count++;
        counter.innerText = count;
    });
	
});

function addListenersToCocktailButtons() {
	const plusButtons = document.querySelectorAll('.plus-button');
	const minusButtons = document.querySelectorAll('.minus-button');
	
	plusButtons.forEach(plusButton => {
		 plusButton.addEventListener('click', function() {
			let cocktail = plusButton.getAttribute("value");
			var existingCocktail = JSON.parse(localStorage.getItem(cocktail));
			
			if(existingCocktail) {
				existingCocktail.quantity++;
				localStorage.setItem(existingCocktail.cocktailName, JSON.stringify(existingCocktail));
			}
			
			generateCocktails();
		});
	});
	
	minusButtons.forEach(minusButton => {
		 minusButton.addEventListener('click', function() {
			let cocktail = minusButton.getAttribute("value");
			var existingCocktail = JSON.parse(localStorage.getItem(cocktail));
			
			if(existingCocktail) {
				existingCocktail.quantity--;
			
				if(existingCocktail.quantity == 0) {
					localStorage.removeItem(existingCocktail.cocktailName);
				} else {
					localStorage.setItem(existingCocktail.cocktailName, JSON.stringify(existingCocktail));
				}
			}
			
			generateCocktails();
		});
	});
}

function generateCocktails (){
	const cocktailList = document.getElementById('cocktailList');
	cocktailList.innerHTML = '';
	for(let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		const cocktail = JSON.parse(localStorage.getItem(key));
		
		addCocktailToPage(cocktail);
	}
	
	addListenersToCocktailButtons();
}

generateCocktails();

function addCocktailToPage(cocktail) {
	const newItem = document.createElement('li');
	
	const tempContainer = document.createElement('div');

	tempContainer.innerHTML = `<img src="${cocktail.cocktailName}.png" alt="Cocktail image">
				<p>${cocktail.cocktailName}</p>
				<span class="quantity">${cocktail.quantity}</span>
				<button class="plus-button" value=${cocktail.cocktailName}>+</button>
				<button class="minus-button" value=${cocktail.cocktailName}>-</button>`;
	
	// let cocktailTemplate = 
		// `
			// <li class="cocktail-item">
				// <img src="${cocktail.cocktailName}.png" alt="Cocktail image">
				// <p>${cocktail.cocktailName}</p>
				// <span class="quantity">${cocktail.quantity}</span>
				// <button id="plus-button" value=${cocktail.cocktailName}>+</button>
				// <button id="minus-button" value=${cocktail.cocktailName}>-</button>
			// </li>
		// `
	 newItem.appendChild(tempContainer);
		
	const cocktailList = document.getElementById('cocktailList');
	cocktailList.appendChild(newItem);
}