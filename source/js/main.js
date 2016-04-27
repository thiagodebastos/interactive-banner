// call animation function below
const animation = (() => {

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

  const timeBetweenFrames = "+=2";

  const objectInteractionWiggles = [
    '.feature-collapsed .objects .headphones',
    '.feature-collapsed .objects .passport',
    '.feature-collapsed .objects .ticket',
    '.feature-collapsed .objects .coins',
    '.feature-collapsed .objects .bluetooth',
    '.feature-collapsed .objects .chopsticks',
    '.feature-collapsed .objects .spoon',
    '.feature-collapsed .objects .camera',
    '.feature-collapsed .objects .postcard',
  ];
  function playMain() {
    tl.addLabel("objectsPop")
    // make objects clickable
    .set('.objects, .feature-collapsed>.rhombus, .feature-collapsed .vf_logo, .feature-collapsed .vf_tagline', {opacity: 1})
    // pop all objects into frame
    .set(objectInteractionWiggles, {zIndex: 11})
    .set('#collapsed-exit', {zIndex: 0})
    .set('.feature-collapsed>.rhombus', {rotation: 45})
    .from('.feature-collapsed .objects .headphones, .feature-collapsed .objects .passport, .feature-collapsed .objects .ticket, .feature-collapsed .objects .coins', 0.5, {y:-150, rotation:-45}, "objectsPop")
    .from('.feature-collapsed .objects .coffee', 0.5, {x:-150, rotation:-45}, "objectsPop")
    .from('.feature-collapsed .objects .bluetooth', 0.5, {x:150, rotation:-45}, "objectsPop")
    .from('.feature-collapsed .objects .postcard', 0.5, {x:150, y:100, rotation:-45}, "objectsPop")
    .from('.feature-collapsed .objects .camera', 0.5, {y:150, rotation:-45}, "objectsPop")
    .from('.feature-collapsed .objects .chopsticks_single--1', 0.5, {y:150, rotation:-45}, "objectsPop")
    .from('.feature-collapsed .objects .chopsticks_single--2', 0.5, {y:150, rotation:-65}, "objectsPop")
    .from('.feature-collapsed .objects .spoon', 0.5, {y:150, rotation:75}, "objectsPop")

    .to('.collapsed .f1_c1', 0.5, {opacity: 1})
    .to('.pulses', 0.5, {opacity: 1})
    // pause and await user interaction
    .addLabel('waitForUser')
    // .to(objectInteractionWiggles,0.5,{rotation:'-=1', repeat: 3, yoyo: true})
    .staggerTo('.pulse', 1, {boxShadow: '0px 0px 0px 20px rgba(227, 6, 19, 0.0)', repeat: 6}, 0.5)
    .to('.collapsed .f1_c1', 0.5, {opacity: 0}, '-=1')

    .addLabel("collapsed_frame02")
    .to('.collapsed .f2_c1', 0.5, {opacity: 1})


    // phone slides up
    .set('.phone-collapsed .mask .mm_placeholder', {opacity: 1})
    .to(".phone-collapsed", 0.5, {top: -10}, "+=0.5")

    // ******************************************************
    // NOTE: REPLACED RHOMBUS WITH HOLDING SCREEN
    // .to(".phone-collapsed .rhombus", 0.5, {
    //   ease: Power1.easeInOut,
    //   opacity: 1,
    //   boxShadow:"0px 0px 5px 5px #E30613",
    //   rotation: "+=450deg",
    // })
    // .to('.phone-collapsed .rhombus', 0.5, {boxShadow:"0px 0px 0px 0px #E30613"}, '-=0.25')
    // .to('.phone-collapsed .mask', 0.5, {backgroundColor: '#E30613'}, '+=0.5')
    // .to('.phone-collapsed .vf_logo', 0.25, {opacity: 0}, "+=0.5")
    // .to('.phone-collapsed .mask .mm_results', 0.5, {opacity: 1})
    // ******************************************************

    .to('.collapsed .f2_c1', 0.5, {opacity: 0})

    // make objects unclickable
    .set(objectInteractionWiggles, {zIndex: 9})
    .to('.pulses', 0.5, {opacity: 0}, '-=1')
    .set('#collapsed-exit', {zIndex: 400})

    .addLabel("collapsed_frame03")
    .to('.collapsed .f3_c1', 0.5, {opacity: 1})
    .to('.will-zoom', 0.5, {scale: 1.25, x: -90, y:-5})
    .to('.phone-collapsed .mask .mm_results_data', 0.5, {opacity: 1}, '-=0.5')
    .to('.collapsed .vf_tcs_white, .collapsed .vf_tcs_bg', 0.5, {opacity: 1})
    .to('.collapsed .f3_c1', 0.5, {opacity: 0}, "+=2")
    .addLabel('collapsed_frame03_a')
    .to('.feature-collapsed>.rhombus', 0.5, {css:{'mix-blend-mode':"normal", backgroundColor: 'white', opacity: '0.9'}})

    .to('.feature-collapsed>.rhombus', 0.75, {
      ease: Power1.easeInOut,
      opacity: 1,
      rotation: 405,
    }, '-=0.5')
    // .to('.feature-collapsed>.rhombus',0.75,{boxShadow:"0px 0px 10px 10px #E30613"}, '-=0.75')


    .to('.collapsed .vf_tcs_bg', 0.5, {opacity: 0}, '-=0.5')
    .to('.feature-collapsed .vf_tagline>img:nth-of-type(1)', 0.5, {opacity:0}, 'collapsed_frame03_a')
    .to('.feature-collapsed .vf_tagline>img:nth-of-type(2)', 0.5, {opacity:1}, 'collapsed_frame03_a+=0.5')
    .to('.will-zoom .mask', 0.5, {opacity: 1}, '-=0.5')
    .to('.collapsed .mm_personal', 0.5, {opacity: 1})
    .to('.collapsed .mm_cta', 0.5, {opacity: 1})

    .addLabel("collapse_endFrame")

    console.log(`[custom] loop duration: ${tl.duration()}s`);
    console.log(`[custom] total duration: ${tl.totalDuration()}s`);
    // tl.seek('collapsed_frame03');
  } // end playMain


  const tlCalls = new TimelineMax({paused: true});
  const tlData = new TimelineMax({paused: true});
  const tlInternational = new TimelineMax({paused: true});

  function expand(mix, timeline) {
    var objects = [];
    function playExpanded(){
      switch(mix) {
        case 'calls':
        var objects = ['.feature-expanded .bluetooth, .feature-expanded .glasses, .feature-expanded .pen, .feature-expanded .diary, .feature-expanded .coffee'];
        break;
        case 'int':
        var objects = ['.feature-expanded .passport, .feature-expanded .coins, .feature-expanded .chopsticks, .feature-expanded .postcard, .feature-expanded .ticket'];
        break;
        case 'data':
        var objects = ['.feature-expanded .headphones, .feature-expanded .camera, .feature-expanded .coffee, .feature-expanded .usb, .feature-expanded .popcorn'];
        break;
      }
      timeline
      .addLabel(`expanded-${mix}`)
      // set all direct children of objects to opacity 0 on each run (tl.clear() doesn't seem to work)
      .set('.feature-expanded .objects > *', {opacity: 0})
      .set(objects, {opacity: 1})
      .set('.feature-expanded > .rhombus', {rotation: 45})
      .set('.feature-expanded > .rhombus, .feature-expanded .vf_logo, .feature-expanded .vf_tagline', {y: 210, x: 20, opacity: 1})
      .to('.phone-expanded', 0.5, {x: -100 })

      // ******************************************************
      // NOTE: REPLACED RHOMBUS WITH HOLDING SCREEN
      // .to(".phone-expanded .rhombus", 0.5, {
      //   ease: Power1.easeInOut,
      //   opacity: 1,
      //   boxShadow:"0px 0px 5px 5px #E30613",
      //   rotation: "405deg",
      // }, '-=0.5')
      // .to('.phone-expanded .rhombus', 0.5, {boxShadow:"0px 0px 0px 0px #E30613"}, '-=0.25')
      // .to('.phone-expanded .mask', 0.5, {backgroundColor: '#E30613'})
      // ******************************************************

      .to('.phone-expanded .mask .mm_placeholder', 0.5, {opacity: 1})

      .fromTo(`.feature-expanded .mm_${mix}_f1_c1`, 0.5, {opacity: 0}, {opacity: 1, yoyo:true, repeat:1, repeatDelay: 2}, `expanded-${mix}`)
      .fromTo(`.feature-expanded .mm_f2_c1`, 0.5, {opacity: 0}, {opacity: 1, yoyo:true, repeat:1, repeatDelay: 2}, `expanded-${mix}+=4`)
      .to(`.phone-expanded .mask .mm_results_${mix}, .feature-expanded .vf_tcs_white, .feature-expanded .vf_tcs_bg`, 0.5, {opacity: 1}, `expanded-${mix}+=4`)
      .fromTo(`.feature-expanded .mm_f3_c1`, 0.5, {opacity: 0}, {opacity: 1, yoyo:true, repeat:1, repeatDelay: 3}, `expanded-${mix}+=7`)

      .addLabel('expanded_frame03_a')
      .to('.feature-expanded>.rhombus', 0.5, {css:{'mix-blend-mode':"normal", backgroundColor: 'white', opacity: '0.9'}})
      .to('.feature-expanded>.rhombus', 0.75, {
        ease: Power1.easeInOut,
        opacity: 1,
        rotation: 405,
      }, '-=0.5')
      // .to('.phone-expanded .rhombus', 0.5, {boxShadow:"0px 0px 0px 0px #E30613"}, '-=0.25')
      // .to('.phone-expanded .mask', 0.5, {backgroundColor: '#E30613'})

      .to('.feature-expanded .vf_tcs_bg', 0.5, {opacity: 0})
      .to('.feature-expanded .vf_tagline>img:nth-of-type(1)', 0.5, {opacity:0}, 'expanded_frame03_a')
      .to('.feature-expanded .vf_tagline>img:nth-of-type(2)', 0.5, {opacity:1}, 'expanded_frame03_a+=0.5')
      .addLabel('expanded_final')
      .to('.feature-expanded .mask', 0.5, {opacity: 1}, 'expanded_final-=0.75')
      .to('.feature-expanded .mm_personal', 0.5, {opacity: 1}, 'expanded_final-=0.75')
      .to('.feature-expanded .mm_cta', 0.5, {opacity: 1}, 'expanded_final-=0.75')

      console.log(`[custom] MyMix: ${mix} - Objects: ${objects}`);
    }
    return playExpanded;
  }

  // Expose animation API
  return {
    tlMain : tl,
    tlCalls : tlCalls,
    tlData : tlData,
    tlInternational : tlInternational,
    playMain : playMain,
    playCalls : expand('calls', tlCalls),
    playData : expand('data', tlData),
    playInt : expand('int', tlInternational),
  }
})();
