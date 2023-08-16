const quotes = {
    science: [
        "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson",
        "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
        "Until man duplicates a blade of grass, nature can laugh at his so-called scientific knowledge.– Thomas Edison",
        "Science is magic that works. – Kurt Vonnegut",
        "Science is just pure empiricism, and by virtue of its method, it excludes metaphysics. – Steve Martin",
        "Rockets are cool. There’s no getting around that. – Elon Musk"
    ],
    environment: [
        "The greatest threat to our planet is the belief that someone else will save it.— Robert Swan",
        "I only feel angry when I see waste. When I see people throwing away things we could use.— Mother Teresa",
        "You are not Atlas carrying the world on your shoulder. It is good to remember that the planet is carrying you.— Vandana Shiva",
        "Land really is the best art. —Andy Warhol",
        "Nature does not hurry yet everything is accomplished. —Lao Tzu"   
    ]
};
let currentCategory = 'science';
let currentQuoteIndex = 0;
let fontSize = 16;

const categorySelect = document.getElementById('category');
const quoteDisplay = document.getElementById('quote');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const decreaseFontBtn = document.getElementById('decreaseFont');
const increaseFontBtn = document.getElementById('increaseFont');

categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    currentQuoteIndex = 0;
    displayQuote();
});

prevBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    displayQuote();
});

nextBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    displayQuote();
});

randomBtn.addEventListener('click', () => {
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote();
});

 decreaseFontBtn.addEventListener('click', () => {
    fontSize = Math.max(fontSize - 5, 6);
    quoteDisplay.style.fontSize = `${fontSize}px`;
});

increaseFontBtn.addEventListener('click', () => {
    fontSize = Math.min(fontSize + 5, 250);
    quoteDisplay.style.fontSize = `${fontSize}px`;
});
function displayQuote() {
    quoteDisplay.textContent = quotes[currentCategory][currentQuoteIndex];
}
displayQuote();