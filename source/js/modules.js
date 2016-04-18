// ANIMATION CONTROLS MODULE
function ControlModule () {
  const listen = (el, handler) => el.addEventListener("click", handler);
  const animationControls = document.getElementById("animationControls");
  const btnTypes = ['play', 'pause', 'resume', 'reverse', 'restart'];
  const btns = btnTypes.map(createBtn);


  // function to be mapped to btns array
  function createBtn(btnTxt){
    const newBtn = document.createElement("button");
    const t = document.createTextNode(btnTxt);
    newBtn.appendChild(t)
    newBtn.setAttribute("id", `${btnTxt}_btn`);
    return animationControls.appendChild(newBtn);
  }

  // listen to all the buttons
  listen(play_btn, playHandler);
  listen(pause_btn, pauseHandler);
  listen(resume_btn, resumeHandler);
  listen(reverse_btn, reverseHandler);
  listen(restart_btn, restartHandler);



  // control timeline with all the buttons
  function playHandler(){ animation.tlMain.play();}
  function pauseHandler(){ animation.tlMain.pause();}
  function resumeHandler(){ animation.tlMain.resume();}
  function reverseHandler(){ animation.tlMain.reverse();}
  function restartHandler(){ animation.tlMain.restart();}
}
