const celsius =document.querySelector('#celsius')
const fahrenheit =document.querySelector('#fahrenheit')


celsius.oninput =()=>{
    let output =(parseFloat(celsius.value)* 9)/5 + 32;
    fahrenheit.value =parseFloat(output.toFixed(3));

}

fahrenheit.oninput =()=>{
    let output = ((parseFloat(fahrenheit.value)-32)* 5)/9;
    celsius.value =parseFloat(output.toFixed(3));

}
