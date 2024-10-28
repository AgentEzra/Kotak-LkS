const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const sumElement = document.getElementById('sum');
let sum = 0;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const value = parseInt(checkbox.getAttribute('data-value'));
        
        if (checkbox.checked) {
            sum += value; // Add the value if checked
        } else {
            sum -= value; // Subtract the value if unchecked
        }
        
        sumElement.textContent = sum; // Update the displayed sum
    });
});