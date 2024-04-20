document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addToListButton');
    const counter = document.getElementById('cocktailCounter');
    
    addButton.addEventListener('click', function() {
		let cocktail = addButton.getAttribute("value");
		var existingCocktail = JSON.parse(localStorage.getItem(cocktail));
		
		if(existingCocktail) {
			existingCocktail.quantity++;
			localStorage.setItem(existingCocktail.cocktailName, JSON.stringify(existingCocktail));
		} else {
			var newCocktail = 
				{
					cocktailName: cocktail, 
					quantity:1
				}
				
			localStorage.setItem(newCocktail.cocktailName, JSON.stringify(newCocktail));
		}
		
		setCounterValue();
    });
});

function setCounterValue() {
	const counter = document.getElementById('cocktailCounter');
	var cocktailsQuantity = 0;
	for(let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		const cocktail = JSON.parse(localStorage.getItem(key));
		
		cocktailsQuantity += cocktail.quantity;
	}
	
	counter.innerText = cocktailsQuantity;
}

setCounterValue();

const glassIcon = document.querySelector('.counter a'); // Select the anchor tag within the counter

glassIcon.addEventListener('click', () => {
  window.location.href = "FinalList.html"; // Change the URL to your actual FinalList page
});