const content = document.querySelector('.content');
const increase = document.querySelector('.plus');
const decrease = document.querySelector('.minus');
const reset = document.querySelector('.reset');

let counter = 0;

increase.addEventListener('click', () => {
  counter++;
  content.innerHTML = counter;
  color()
});

decrease.addEventListener('click', () => {
  counter--;
  content.innerHTML = counter;
  color()
});

reset.addEventListener('click', () => {
    counter=0;
  content.innerHTML = counter;
  color()
});

function color(){
    if(counter>0){
        content.style.color = " rgb(13, 255, 0)"
      }else if(counter<0){
        content.style.color = "red"
      }else{
        content.style.color = "rgb(241, 255, 240)"
      }
}