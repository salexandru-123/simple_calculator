const resultLabel = document.querySelector('.result');
const btnsContainer = document.querySelector('.buttons--container');
resultLabel.textContent = 0;
const values = ['0','1','2','3','4','5','6','7','8','9']
const operations = ['+','-','x','/','=','.']
let number = total = 0.0;
let operation;
const calculator = function(e){
    const value = e.target.textContent;
    if(value != '.'){
        if(resultLabel.textContent === '0' || operation === '=') resultLabel.textContent = '';
        if(operation === '=') operation = null;
    }
    if(values.includes(value)){
    
        resultLabel.textContent = resultLabel.textContent + value 
        number = Number.parseFloat(resultLabel.textContent)
        
    }
    if(operations.includes(value)){
        if(value === '.' ) {
            if(!String(resultLabel.textContent).includes('.'))
            resultLabel.textContent = resultLabel.textContent+'.';
        }
        else if(value === '='){
            if(operation === '+') total += number
            if(operation === '-') total -= number
            if(operation === '/') total /= number
            if(operation === 'x') total *= number
            resultLabel.textContent = String(Number.parseFloat(total)).padEnd(4);
            operation = value
            number = total
        }
        else{
            operation = value;
            resultLabel.textContent = '0';
            total = number;
        }
        
        
    }
    console.log('Operation:'+operation);
    console.log('Value:'+value);
    console.log('Number:'+number)
    console.log('total:'+total);
}


btnsContainer.addEventListener('click', calculator)