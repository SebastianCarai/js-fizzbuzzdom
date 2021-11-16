let boxContainer = document.querySelector('.container');

for (i=1; i<=100; i++) {
    let iValue;
    let setBoxColor;

    if (i%3==0 && i%5==0){
        iValue='FizzBuzz';
        setBoxColor='fizzbuzz';
    } else if (i%3==0){
        iValue='Fizz';
        setBoxColor='fizz';
    } else if (i%5==0){
        iValue='Buzz';
        setBoxColor='buzz';
    } else{
        iValue=i;
    }

    boxContainer.innerHTML +=`<div class="box ${setBoxColor}">${iValue}</div>`
}