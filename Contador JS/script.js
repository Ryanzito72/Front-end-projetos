var currentNumberWrapper = document.getElementById('currentNumber')
count = 0;
var increment = document.getElementById('increment')
var decrement = document.getElementById('decrement')
// pega o elemento no HTML
currentNumberWrapper.style = "color: green;"
increment.addEventListener("click", //addevent list adiciona o evento que queremos, no caso é o click
  function increment(){
    if (Number(currentNumber.textContent) < 10) {
      count ++;
      currentNumber.textContent = count;
      if (count > 0){
        currentNumberWrapper.style = "color: blue;"
      }
      else if(count < 0){
        currentNumberWrapper.style = "color: red;"
      }
      else{
        currentNumberWrapper.style = "color: green;"
      }
    }
  }
);

decrement.addEventListener("click",
  function decrement(){
    if (Number(currentNumber.textContent) > -10) {
      count --;
      currentNumber.textContent = count;
      if (count > 0){
        currentNumberWrapper.style = "color: blue;"
      }
      else if(count < 0){
        currentNumberWrapper.style = "color: red;"
      }
      else{
        currentNumberWrapper.style = "color: green;"
      }
    }
  }
);



