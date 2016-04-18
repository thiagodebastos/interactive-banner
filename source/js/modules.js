// ANIMATION CONTROLS MODULE
function ControlModule (tl) {
  const listen = (el, handler) => el.addEventListener("click", handler);
  const animationControls = document.getElementById("animationControls");
  const btnTypes = ['play', 'pause', 'resume', 'reverse', 'restart'];
  const btns = btnTypes.map(createBtn);
  const expData = document.getElementById("expand-data");
  const expCalls = document.querySelector(".bluetooth");
  const expInt = document.getElementById("expand-int");
  const colBtn = document.getElementById("collapse-button");

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
  listen(colBtn, collapseHandler);


  // control timeline with all the buttons
  function playHandler(){ tl.play();}
  function pauseHandler(){ tl.pause();}
  function resumeHandler(){ tl.resume();}
  function reverseHandler(){ tl.reverse();}
  function restartHandler(){ tl.restart();}

}
