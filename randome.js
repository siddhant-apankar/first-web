document.querySelector('#btn1').disabled = true
document.querySelector('#btn2').disabled = true
document.querySelector('#btn3').disabled = true

let count = 0;


document.querySelector('#btn').
addEventListener('click',function(){
    
    let x = parseInt( Math.floor(Math.random()*5+1))
    document.querySelector('.number').textContent = x;
    document.querySelector('#btn1').disabled = false;
    document.querySelector('#btn').disabled = true
    
})




document.querySelector('#btn1').
addEventListener('click',function(){
    count++
    document.getElementById('count').textContent = count;
    
    let y =parseInt( Math.floor(Math.random()*5+1))
    document.querySelector('.number1').textContent = y ;
    

    if (x==y){
        document.getElementById('#btn1').disabled = true;
        document.getElementById('#btn2').disabled = false
    }
  

})





 

