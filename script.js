let currentIndex = 0;
let character = [];

// Realizo solicitud a la API de Rick and Morty
fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        characters = data.results;
        displayCharacter();
    })
    .catch(error => console.error('Error: ', error));

// Muestro el personaje en pantalla
function displayCharacter() {
    if (characters.length > 0) {
        const character = characters[currentIndex];
        document.getElementById('character-name').textContent = character.name;
        document.getElementById('character-image').src = character.image;
        document.getElementById('character-status').textContent = `Estado: ${character.status}`;
    }
}

// Cambio de personaje al hacer click en el boton
function nextCharacter() {
    currentIndex = (currentIndex + 1) % characters.length;
    displayCharacter();
}
