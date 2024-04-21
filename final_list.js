// Mock data for cocktails
const cocktails = [
    { name: "Маргарита", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Джин с тоник", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Мохито", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Ягодово дайкири", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Пина Колада", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Космополитън", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Май тай", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Негрони", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Уиски сауър", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Сангрия", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Мимоза", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Блъди Мери", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Лонг Айлънд", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Еспресо мартини", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Уиски смаш", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Секс на плажа", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Синя лагуна", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Текила сънрайз", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Аперол шприц", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
    { name: "Уайт Лейди", ingredients: ["Rum", "Mint", "Lime", "Soda Water"] },
];

// Function to handle search
function handleSearch() {
    // Get the search input element
    const searchInput = document.getElementById("searchInput");
    // Get the value of the search input
    let searchTerm = searchInput.value;
    
    // Convert Bulgarian characters to English using transliteration library
    searchTerm = he.decode(searchTerm);
    
    // Convert the search term to lowercase
    searchTerm = searchTerm.toLowerCase();
    
    // Find exact match first
    const exactMatch = cocktails.find(cocktail => cocktail.name.toLowerCase() === searchTerm);
    
    // If exact match is found, redirect to its page
    if (exactMatch) {
        window.location.href = `${encodeURIComponent(exactMatch.name)}.html`;
        return; // Exit the function
    }
    
    // If no exact match is found, find partial match
    const partialMatch = cocktails.find(cocktail => cocktail.name.toLowerCase().includes(searchTerm));
    
    // If partial match is found, redirect to its page
    if (partialMatch) {
        window.location.href = `${encodeURIComponent(partialMatch.name)}.html`;
    } else {
        // If no match is found, display an alert
        alert("Коктейлът не беше намерен!");
    }
}


// Event listener for search input
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize counter with total quantity of cocktails in localStorage
    updateCounter();

    const addButton = document.getElementById('addToListButton');
    const counter = document.getElementById('cocktailCounter');

    addButton.addEventListener('click', function() {
        let count = parseInt(counter.innerText);
        count++;
        counter.innerText = count;
    });
});

// Function to calculate total quantity of cocktails and update the counter
function updateCounter() {
    const counter = document.getElementById('cocktailCounter');
    let cocktailsQuantity = 0;

    // Iterate through localStorage and sum up the quantities
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const cocktail = JSON.parse(localStorage.getItem(key));

        cocktailsQuantity += cocktail.quantity;
    }

    // Update the counter with the total quantity
    counter.innerText = cocktailsQuantity;
}




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
            updateCounter(); // Update the counter
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
            updateCounter(); // Update the counter
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

    // Define Bulgarian names for cocktails
    const bulgarianNames = {
			"margarita": "Маргарита",
			"Ginandtonic": "Джин с тоник",
			"Mojito": "Мохито",
			"Strawberrydaiquiri": "Ягодово дайкири",
			"pinacolada": "Пина Колада",
			"cosmopolitan": "Космополитън",
			"maitai": "Май тай",
			"negroni": "Негрони",
			"whiskeysour": "Уиски сауър",
			"sangria": "Сангрия",
			"mimosa": "Мимоза",
			"bloodymary": "Блъди мери",
			"longisland": "Лонг Айлънд",
			"espressomartini": "Еспресо мартини",
			"whiskeysmash": "Уиски смаш",
			"sexonthebeach": "Секс на плажа",
			"bluelagoon": "Синя Лагуна",
			"tequilasunrise": "Текила сънрайз",
			"aperolspritz": "Аперол шприц",
			"whitelady": "Уайт Лейди"
        // Add Bulgarian names for other cocktails as needed
    };

    // Get the Bulgarian name based on the English name
    const bulgarianName = bulgarianNames[cocktail.cocktailName];

    tempContainer.innerHTML = `<img src="${cocktail.cocktailName}.png" alt="Cocktail image">
                <p>${bulgarianName}</p>
                <span class="quantity">${cocktail.quantity}</span>
                <button class="plus-button" value=${cocktail.cocktailName}>+</button>
                <button class="minus-button" value=${cocktail.cocktailName}>-</button>`;
    
    newItem.appendChild(tempContainer);
        
    const cocktailList = document.getElementById('cocktailList');
    cocktailList.appendChild(newItem);
}


function updateCounter() {
    const counter = document.getElementById('cocktailCounter');
    let cocktailsQuantity = 0;
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const cocktail = JSON.parse(localStorage.getItem(key));

        cocktailsQuantity += cocktail.quantity;
    }

    counter.innerText = cocktailsQuantity;
}