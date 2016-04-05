const camera = document.querySelector('.camera');

function objHover(el){
  if(document.querySelector(el))
  TweenMax.to(el, 0.5, {left: 50});
}
