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

  // pop all objects into frame
  .set('.objects', {opacity: 1})
  .from('.headphones, .passport, .popcorn, .ticket, .coins', 0.5, {y:-150, rotation:-45}, "collapsed_frame01")
  .from('.coffee', 0.5, {x:-150, rotation:-45}, "collapsed_frame01")
  .from('.bluetooth', 0.5, {x:150, rotation:-45}, "collapsed_frame01")
  .from('.postcard', 0.5, {x:150, y:100, rotation:-45}, "collapsed_frame01")
  .from('.camera', 0.5, {y:150, rotation:-45}, "collapsed_frame01")
  .from('.chopsticks_single--1', 0.5, {y:150, rotation:-45}, "collapsed_frame01")
  .from('.chopsticks_single--2', 0.5, {y:150, rotation:-45}, "collapsed_frame01+=0.25")
  .from('.spoon', 0.5, {y:150, rotation:-45}, "collapsed_frame01+=0.25")

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
    opacity: 1,
    boxShadow:"0px 0px 5px 5px #E30613",
    rotation: "+=450deg",
  })
  .to('.phone .rhombus', 0.5, {boxShadow:"0px 0px 0px 0px #E30613"}, '-=0.25')
  .to('.phone .mask', 0.5, {backgroundColor: '#E30613'})
  .to('.phone .vf_logo', 0.25, {opacity: 0})
  .to('.phone .mm_print', 0.25, {opacity: 1})
  .to('.collapsed .f2_c1', 0.5, {opacity: 0})

  .addLabel("collapsed_frame03")
  .to('.collapsed .f3_c1', 0.5, {opacity: 1})
  .to('.will-zoom', 0.5, {scale: 1.25, x: -90, y:-5})
  .to('.collapsed .f3_c1', 0.5, {opacity: 0})
  // TODO: add frame wipe
.to('.collapsed>.rhombus', 0.5, {backgroundColor: 'white'})
  .to('.will-zoom .mask', 0.5, {opacity: 1})
  .to('.collapsed .mm_personal', 0.5, {opacity: 1})
  .to('.collapsed .mm_cta', 0.5, {opacity: 1})


  .addLabel("endFrame")

  console.log(`[custom] loop duration: ${tl.duration()}s`);
  console.log(`[custom] total duration: ${tl.totalDuration()}s`);

  // tl.seek("collapsed_frame03")
  // .pause();


}
