let boxContainer = document.querySelector('.container');

for (i=1; i<=100; i++) {
    let iValue;

    if (i%3==0 && i%5==0){
        iValue='FizzBuzz';
    } else if (i%3==0){
        iValue='Fizz';
    } else if (i%5==0){
        iValue='Buzz';
    } else{
        iValue=i;
    }

    boxContainer.innerHTML +=`<div class="box">${iValue}</div>`
}