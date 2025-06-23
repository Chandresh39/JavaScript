const form = document.querySelector('form');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const height = document.querySelector('.height').value;
    const convert = document.querySelector('.convert').value;
    const weight = document.querySelector('.weight').value;
    // console.log(height);
    // console.log(convert);
    // console.log(weight);
    
    if (height == '' || height < 0 || isNaN(height)){
        alert('Enter valid height');
        return;
    }else if (weight == '' || weight < 0 || isNaN(weight)){
        alert('Enter valid weight');
        return;
    }else {
        let bmi;
        if(convert == 'cm'){
            bmi =  ((weight / (height * height)) * 10000).toFixed(2);
        }
        if(convert == 'meter'){
            bmi = (weight / (height * height)).toFixed(2);
        }
        // if(convert == 'inch'){

        // }
        if(bmi < 25){
            result.innerHTML = `Your BMI count is ${bmi} is TOO LOW`;
        } else if (bmi > 70){
            result.innerHTML = `Your BMI count is ${bmi} is TOO HIGH`;
        } else {
            result.innerHTML = `Your BMI count is ${bmi} is Normal`;
        }
        
    }
    
    const clearbtn = document.createElement('button');
    clearbtn.className = 'clearbtn';
    clearbtn.textContent = 'Clear';

    clearbtn.addEventListener('click', (e) => {
        form.reset();
        result.textContent = '';
        height.textContent = '';
        weight.textContent = '';
    });
    result.appendChild(clearbtn);

});
