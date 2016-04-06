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
  const tlCalls = new TimelineMax();
    // CONTROL MODULE FUNCTIOn
  ControlModule(tl, tlCalls);
  const timeBetweenFrames = "+=2";

  tl.addLabel("collapsed_frame01")

  // pop all objects into frame
  .set('.objects', {opacity: 1})
  .from('.feature-collapsed .headphones, .passport, .popcorn, .ticket, .coins', 0.5, {y:-150, rotation:-45}, "collapsed_frame01")
  .from('.feature-collapsed .coffee', 0.5, {x:-150, rotation:-45}, "collapsed_frame01")
  .from('.feature-collapsed .bluetooth', 0.5, {x:150, rotation:-45}, "collapsed_frame01")
  .from('.feature-collapsed .postcard', 0.5, {x:150, y:100, rotation:-45}, "collapsed_frame01")
  .from('.feature-collapsed .camera', 0.5, {y:150, rotation:-45}, "collapsed_frame01")
  .from('.feature-collapsed .chopsticks_single--1', 0.5, {y:150, rotation:-45}, "collapsed_frame01")
  .from('.feature-collapsed .chopsticks_single--2', 0.5, {y:150, rotation:-65}, "collapsed_frame01")
  .from('.feature-collapsed .spoon', 0.5, {y:150, rotation:75}, "collapsed_frame01")

  .to(".collapsed .vf_logo", 0.5, {opacity: 1 }, "-=0.4")

  .to('.collapsed .f1_c1', 0.5, {opacity: 1})
  .to('.collapsed .f1_c1', 0.5, {opacity: 0}, timeBetweenFrames)

  .addLabel("collapsed_frame02")
  .to('.collapsed .f2_c1', 0.5, {opacity: 1})

  // phone slides up
  .to(".phone-collapsed", 0.5, {top: -5}, "+=0.5")
  .to(".phone-collapsed .rhombus", 0.5, {
    ease: Power1.easeInOut,
    opacity: 1,
    boxShadow:"0px 0px 5px 5px #E30613",
    rotation: "+=450deg",
  })
  .to('.phone-collapsed .rhombus', 0.5, {boxShadow:"0px 0px 0px 0px #E30613"}, '-=0.25')
  .to('.phone-collapsed .mask', 0.5, {backgroundColor: '#E30613'}, '+=0.5')
  .to('.phone-collapsed .vf_logo', 0.25, {opacity: 0}, "+=0.5")
  .to('.phone-collapsed .mm_print', 0.25, {opacity: 1}, "+=0.5")
  .to('.phone-collapsed .mask .mm_results', 0.5, {opacity: 1}, "+=1")

  .to('.collapsed .f2_c1', 0.5, {opacity: 0})

  .addLabel("collapsed_frame03")
  .to('.collapsed .f3_c1', 0.5, {opacity: 1})
  .to('.will-zoom', 0.5, {scale: 1.25, x: -90, y:-5})
  .to('.collapsed .f3_c1', 0.5, {opacity: 0}, "+=2")
  .addLabel('collapsed_frame03_a')
  .to('.feature-collapsed>.rhombus', 0.5, {css:{'mix-blend-mode':"normal", backgroundColor: 'white', opacity: '0.9'}})
  .to('.feature-collapsed .vf_tagline>img:nth-of-type(1)', 0.5, {opacity:0}, 'collapsed_frame03_a')
  .to('.feature-collapsed .vf_tagline>img:nth-of-type(2)', 0.5, {opacity:1}, 'collapsed_frame03_a')
  .to('.will-zoom .mask', 0.5, {opacity: 1}, '-=0.5')
  .to('.collapsed .mm_personal', 0.5, {opacity: 1})
  .to('.collapsed .mm_cta', 0.5, {opacity: 1})


  .addLabel("collapse_endFrame")

  console.log(`[custom] loop duration: ${tl.duration()}s`);
  console.log(`[custom] total duration: ${tl.totalDuration()}s`);

  // tl.seek("endFrame")
  // .pause();

  // EXPANDED CALLS
  tlCalls.from(".expanded-calls .phone", 0.5, {x: 100 });




}
