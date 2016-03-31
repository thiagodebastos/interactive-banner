// call animation function below
const animation = () => {

  const timelineProgress = (position) => {
      console.log(`[custom] animation ${position}`);
  }

  const tl = new TimelineMax(
    {
      repeat:0,
      yoyo:false,
      repeatDelay: 0,
      onStart:timelineProgress,
      onStartParams:["start"],
      onComplete:timelineProgress,
      onCompleteParams:["end"],
    }
  );

    // CONTROL MODULE FUNCTIOn
    ControlModule(tl);
  const timeBetweenFrames = "+=2";

  tl.addLabel("collapsed_frame01")
  // .set(".rhombus", {opacity: 0.9, top:97, left:613, borderRadius: 26})
  .to(".collapsed.rhombus", 0.5, {
    ease: Power1.easeInOut,
    boxShadow:"0px 0px 10px 10px #E30613",
    rotation: "+=360deg",
    transformOrigin: "30px 30px",
  })
  .to(".collapsed .rhombus", 0.1, {boxShadow: "0px 0px 0px 0px"}, "-=0.125")
  .to(".collapsed .vf_logo", 0.5, {opacity: 1 }, "-=0.4")

  .to('.collapsed .f1_c1', 0.5, {opacity: 1})
  .to('.collapsed .f1_c1', 0.5, {opacity: 0}, timeBetweenFrames)

  // phone slides up
  .addLabel("collapsed_frame02")
  .to('.collapsed .f2_c1', 0.5, {opacity: 1})
  .to(".phone", 0.5, {top: -5})

  .to(".phone .rhombus", 0.5, {
    ease: Power1.easeInOut,
    boxShadow:"0px 0px 5px 5px #E30613",
    rotation: "+=360deg",
    transformOrigin: "-20px -20px",
  })

  .addLabel("endFrame")

  console.log(`[custom] loop duration: ${tl.duration()}s`);
  console.log(`[custom] total duration: ${tl.totalDuration()}s`);

  tl.seek("collapsed_frame02+=1")
  .pause();


}
