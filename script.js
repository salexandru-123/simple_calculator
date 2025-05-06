const resultLabel = document.querySelector('.result');
const btnsContainer = document.querySelector('.buttons--container');
const scientificButtons = document.querySelector('.scientific-buttons');
const modeToggle = document.getElementById('mode-toggle');

resultLabel.textContent = '0';
const values = ['0','1','2','3','4','5','6','7','8','9'];
const operations = ['+','-','x','/','=','.'];
const scientificOps = ['√', 'x²', 'sin', 'cos', 'tan', 'log', 'π', '(', ')'];
let number = 0.0;
let total = 0.0;
let operation = null;
let isScientificMode = false;

// Toggle scientific mode
modeToggle.addEventListener('click', () => {
    isScientificMode = !isScientificMode;
    scientificButtons.classList.toggle('hidden');
    modeToggle.textContent = isScientificMode ? 'Simple Mode' : 'Scientific Mode';
});

const calculator = function(e) {
    const value = e.target.textContent;
    
    if(value !== '.') {
        if(resultLabel.textContent === '0' || operation === '=') resultLabel.textContent = '';
        if(operation === '=') operation = null;
    }

    if(values.includes(value)) {
        resultLabel.textContent = resultLabel.textContent + value;
        number = Number.parseFloat(resultLabel.textContent);
    }

    if(operations.includes(value)) {
        if(value === '.') {
            if(!String(resultLabel.textContent).includes('.'))
                resultLabel.textContent = resultLabel.textContent + '.';
        }
        else if(value === '=') {
            if(operation === '+') total += number;
            if(operation === '-') total -= number;
            if(operation === '/') total /= number;
            if(operation === 'x') total *= number;
            resultLabel.textContent = String(Number.parseFloat(total.toFixed(8)));
            operation = value;
            number = total;
        }
        else {
            operation = value;
            resultLabel.textContent = '0';
            total = number;
        }
    }

    if(scientificOps.includes(value)) {
        switch(value) {
            case '√':
                number = Math.sqrt(parseFloat(resultLabel.textContent));
                resultLabel.textContent = String(number);
                break;
            case 'x²':
                number = Math.pow(parseFloat(resultLabel.textContent), 2);
                resultLabel.textContent = String(number);
                break;
            case 'sin':
                number = Math.sin(parseFloat(resultLabel.textContent) * Math.PI / 180);
                resultLabel.textContent = String(number.toFixed(8));
                break;
            case 'cos':
                number = Math.cos(parseFloat(resultLabel.textContent) * Math.PI / 180);
                resultLabel.textContent = String(number.toFixed(8));
                break;
            case 'tan':
                number = Math.tan(parseFloat(resultLabel.textContent) * Math.PI / 180);
                resultLabel.textContent = String(number.toFixed(8));
                break;
            case 'log':
                number = Math.log10(parseFloat(resultLabel.textContent));
                resultLabel.textContent = String(number.toFixed(8));
                break;
            case 'π':
                resultLabel.textContent = String(Math.PI);
                number = Math.PI;
                break;
        }
    }
};

btnsContainer.addEventListener('click', calculator);
scientificButtons.addEventListener('click', calculator);