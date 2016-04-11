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

  // Declare timelines to export as params in ControlModule
  const tlCalls = new TimelineMax({paused: true});
  const tlData = new TimelineMax({paused: true});
  const tlInternational = new TimelineMax({paused: true});
    // CONTROL MODULE FUNCTIOn
  ControlModule(tl, tlCalls, tlData, tlInternational);
  const timeBetweenFrames = "+=2";

  const objectInteractionWiggles = [
    '.feature-collapsed .headphones',
    '.feature-collapsed .passport',
    // '.feature-collapsed .popcorn',
    '.feature-collapsed .ticket',
    '.feature-collapsed .coins',
    '.feature-collapsed .bluetooth',
  ];


  tl.addLabel("objectsPop")
  // pop all objects into frame
  .set('.objects', {opacity: 1})
  .from('.feature-collapsed .headphones, .feature-collapsed .passport, .feature-collapsed .ticket, .feature-collapsed .coins', 0.5, {y:-150, rotation:-45}, "objectsPop")
  .from('.feature-collapsed .coffee', 0.5, {x:-150, rotation:-45}, "objectsPop")
  .from('.feature-collapsed .bluetooth', 0.5, {x:150, rotation:-45}, "objectsPop")
  .from('.feature-collapsed .postcard', 0.5, {x:150, y:100, rotation:-45}, "objectsPop")
  .from('.feature-collapsed .camera', 0.5, {y:150, rotation:-45}, "objectsPop")
  .from('.feature-collapsed .chopsticks_single--1', 0.5, {y:150, rotation:-45}, "objectsPop")
  .from('.feature-collapsed .chopsticks_single--2', 0.5, {y:150, rotation:-65}, "objectsPop")
  .from('.feature-collapsed .spoon', 0.5, {y:150, rotation:75}, "objectsPop")

  .to('.collapsed .f1_c1', 0.5, {opacity: 1})

  // pause and await user interaction
  .addLabel('waitForUser')
  .to(objectInteractionWiggles,0.5,{rotation:'-=1', repeat: 3, yoyo: true})
  .to('.collapsed .f1_c1', 0.5, {opacity: 0}, '+=1')

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
  // .to('.phone-collapsed .mm_print', 0.25, {opacity: 1}, "+=0.5")
  .to('.phone-collapsed .mask .mm_results', 0.5, {opacity: 1})

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

function expand(mix, timeline) {
  const dataObjects = [];
  const callsObjects = [];
  const intObjects = [];

  timeline
    .addLabel(`expanded-${mix}`)
    .from(`.phone-expanded`, 0.5, {x: 100 })
    .to(".phone-expanded .rhombus", 0.5, {
      ease: Power1.easeInOut,
      opacity: 1,
      boxShadow:"0px 0px 5px 5px #E30613",
      rotation: "+=405deg",
    }, '-=0.5')
    .to('.phone-expanded .rhombus', 0.5, {boxShadow:"0px 0px 0px 0px #E30613"}, '-=0.25')
    .to('.phone-expanded .mask', 0.5, {backgroundColor: '#E30613'}, '+=0.5')
    .to('.phone-expanded .mask .mm_results', 0.5, {opacity: 1})

    .fromTo(`.expanded .mm_f1_c1`, 0.5, {opacity: 0}, {opacity: 1, yoyo:true, repeat:1, repeatDelay: 2}, `expanded-${mix}`)
    .fromTo(`.expanded-${mix} .mm_f2_c1`, 0.5, {opacity: 0}, {opacity: 1, yoyo:true, repeat:1, repeatDelay: 2}, `expanded-${mix}+=4`)
    .fromTo(`.expanded .mm_f3_c1`, 0.5, {opacity: 0}, {opacity: 1, yoyo:true, repeat:1, repeatDelay: 3}, `expanded-${mix}+=7`)

    .addLabel('expanded_frame03_a')
    .to('.feature-expanded>.rhombus', 0.5, {css:{'mix-blend-mode':"normal", backgroundColor: 'white', opacity: '0.9'}})
    .to('.feature-expanded .vf_tagline>img:nth-of-type(1)', 0.5, {opacity:0}, 'expanded_frame03_a')
    .to('.feature-expanded .vf_tagline>img:nth-of-type(2)', 0.5, {opacity:1}, 'expanded_frame03_a')
    .to('.feature-expanded .mask', 0.5, {opacity: 1}, '-=0.5')
    .to('.feature-expanded .mm_personal', 0.5, {opacity: 1})
    .to('.feature-expanded .mm_cta', 0.5, {opacity: 1})

  console.log(`[custom] MyMix: ${mix}`);
}

  // EXPANDED CALLS
expand('calls', tlCalls);
expand('data', tlData);
expand('int', tlInternational);

  // tl.seek("expanded-calls+=2.5")
  // .pause();
}
