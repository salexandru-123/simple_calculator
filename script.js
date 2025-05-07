// Get references to DOM elements
const resultLabel = document.querySelector('.result');
const btnsContainer = document.querySelector('.buttons--container');

// Initialize calculator display
resultLabel.textContent = 0;

// Define valid input values and operations
const values = ['0','1','2','3','4','5','6','7','8','9']
const operations = ['+','-','x','/','=','.']

// Initialize calculator state variables
let number = total = 0.0;
let operation;

// Main calculator function that handles all button clicks
const calculator = function(e){
    const value = e.target.textContent;
    
    if (value === 'C') {
        number = total = 0;
        operation = null;
        resultLabel.textContent = '0';
        return;
    }

    if (value === 'Undo') {
        if (resultLabel.textContent.length > 1) {
            resultLabel.textContent = resultLabel.textContent.slice(0, -1);
        } else {
            resultLabel.textContent = '0';
        }
        number = parseFloat(resultLabel.textContent) || 0;
        return;
    }

    // Handle display reset and decimal point logic
    if(value != '.'){
        if(resultLabel.textContent === '0' || operation === '=') resultLabel.textContent = '';
        if(operation === '=') operation = null;
    }
    
    // Handle numeric input
    if(values.includes(value)){
        resultLabel.textContent = resultLabel.textContent + value 
        number = Number.parseFloat(resultLabel.textContent)
    }
    
    // Handle operations (+, -, x, /, =, .)
    if(operations.includes(value)){
        // Handle decimal point input
        if(value === '.' ) {
            if(!String(resultLabel.textContent).includes('.'))
            resultLabel.textContent = resultLabel.textContent+'.';
        }
        // Handle equals operation and perform calculation
        else if(value === '='){
            if(operation === '+') total += number
            if(operation === '-') total -= number
            if(operation === '/') total /= number
            if(operation === 'x') total *= number
            resultLabel.textContent = String(Number.parseFloat(total)).padEnd(4);
            operation = value
            number = total
        }
        // Handle other operations (+, -, x, /)
        else{
            operation = value;
            resultLabel.textContent = '0';
            total = number;
        }
    }
    
    // Debug logging
    console.log('Operation:'+operation);
    console.log('Value:'+value);
    console.log('Number:'+number)
    console.log('total:'+total);
}

// Add click event listener to the calculator buttons container
btnsContainer.addEventListener('click', calculator)