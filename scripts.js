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

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});
