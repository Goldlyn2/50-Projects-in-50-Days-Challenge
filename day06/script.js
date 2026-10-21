let counter = 0;
const counterElement = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');

decreaseButton.addEventListener('click', function () {
    counter--;
    counterElement.textContent = counter;
});

resetButton.addEventListener('click', function () {
    counter = 0;
    counterElement.textContent = counter;
});

increaseButton.addEventListener('click', function () {
    counter++;
    counterElement.textContent = counter;
});