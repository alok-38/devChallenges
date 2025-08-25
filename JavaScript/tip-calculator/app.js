const billInputEl = document.getElementById('bill');
const percentInputEl = document.getElementById('percent');
const pEl = document.querySelector('p');
const calculateBtn = document.querySelector('button');

function tipCalculator() {
    const billAmount = parseFloat(billInputEl.value);
    const tipPercent = parseFloat(percentInputEl.value);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
        return 'Please enter valid numbers';
    }

    const tipRate = tipPercent / 100;
    const tipAmount = billAmount * tipRate;
    const totalAmount = billAmount + tipAmount;

    return totalAmount.toFixed(2); // returns a string with 2 decimal places
}

calculateBtn.addEventListener('click', () => {
    const totalAmount = tipCalculator();
    pEl.textContent = isNaN(totalAmount)
        ? 'Invalid input.'
        : `Total Amount (with tip): $${totalAmount}`;
});
