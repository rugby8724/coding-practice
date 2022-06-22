const cocktailsList = document.getElementById('cocktailsList');
const searchBar = document.getElementById('searchBar');
let newCocktails = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCocktails = newCocktails.filter((cocktail) => {
        return (
            cocktail.name.toLowerCase().includes(searchString) ||
            cocktail.house.toLowerCase().includes(searchString)
        );
    });
    displayCocktails(filteredCocktails);
});

const loadCocktails = async () => {
    try {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        newCocktails = await res.json();
        console.log(newCocktails.drinks);
        displayCocktails(newCocktails.drinks);
    } catch (err) {
        console.error(err);
    }
};

const displayCocktails = (cocktails) => {
    const htmlString = cocktails
        .map((drinks) => {
            return `
            <li class="cocktail">
                <h2>${drinks.strDrink}</h2>
                <p>House: ${drinks.idDrink}</p>
                <img src="${drinks.strDrinkThumb}"></img>
            </li>
        `;
        })
        .join('');
    cocktailsList.innerHTML = htmlString;
};

loadCocktails();
