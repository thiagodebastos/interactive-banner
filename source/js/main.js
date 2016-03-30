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
      onCompleteParams:["end"]
    }
  );

    // CONTROL MODULE FUNCTIOn
    ControlModule(tl);
  const timeBetweenFrames = "+=3";

  tl.addLabel("frame01")
  // .set(".rhombus", {opacity: 0.9, top:97, left:613, borderRadius: 26})
  .to(".rhombus", 0.5, {
    ease: Power1.easeInOut,
    boxShadow:"0px 0px 10px 10px #E30613",
    rotation: "+=360deg",
    transformOrigin: "30px 30px",
  })
  .to(".rhombus", 0.1, {boxShadow: "0px 0px 0px 0px"}, "-=0.125")
  .to(".vf_logo", 0.5, {opacity: 1 }, "-=0.4")

  .addLabel("frame02")
  .to(".f1", 0.5, {opacity: 1 })
  .to(".f1", 0.5, {opacity: 0 }, "+=2")

  .addLabel("frame03")
  .to(".f2", 0.5, {opacity: 1 })
  .to(".f2", 0.5, {opacity: 0 }, "+=2")

  .addLabel("frame04")
  .to(".f3", 0.5, {opacity: 1 })
  .addLabel("frame04Pause+=1.5")
  .to(".f3", 0.5, {opacity: 0 }, "+=2")

  .addLabel("frame05")
  .to("video", 0.5, {opacity: 0 })
  .to(".f4:not(.gs7)", 0.5, {opacity: 1 })
  .staggerTo(".gs7", 2, {opacity: 1 }, 0.5)
  .addLabel("endFrame")

  console.log(`[custom] loop duration: ${tl.duration()}s`);
  console.log(`[custom] total duration: ${tl.totalDuration()}s`);

  tl.seek("frame01")
  .pause();


}
