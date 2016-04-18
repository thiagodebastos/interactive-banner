const creative = {};

/**
 * Window onload handler.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Initializes the ad components
 */
const expandableObjects = {
  data1 : '.headphones',
  data2 : '.camera',
  calls : '.bluetooth',
  int1 : '.passport',
  int2 : '.ticket',
  int3 : '.coins',
  int4 : '.chopsticks',
}

function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('animation');
  creative.dom.expandedExit = document.getElementById('expanded-exit');
  creative.dom.expandedContent = document.getElementById('expanded-content');
  creative.dom.collapsedExit = document.getElementById('collapsed-exit');
  creative.dom.collapsedContent = document.getElementById('collapsed-content');
  creative.dom.collapseButton = document.getElementById('collapse-button');
  creative.dom.expandCalls = document.querySelector(expandableObjects.calls);
  creative.dom.expandData1 = document.querySelector(expandableObjects.data1);
  creative.dom.expandData2 = document.querySelector(expandableObjects.data2);
  creative.dom.expandInternational1 = document.querySelector(expandableObjects.int1);
  creative.dom.expandInternational2 = document.querySelector(expandableObjects.int2);
  creative.dom.expandInternational3 = document.querySelector(expandableObjects.int3);
  creative.dom.expandInternational4 = document.querySelector(expandableObjects.int4);
  creative.dom.animationControls = document.getElementById('animationControls');
}

/**
 * Ad initialisation.
 */
function init(e, tl, tlData, tlInt, tlCalls) {
  Enabler.setStartExpanded(false);

  addListeners();

  // Polite loading
  if (Enabler.isPageLoaded()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
  creative.dom.expandCalls.addEventListener('click', function(){onExpandHandler('calls');}, false);
  creative.dom.expandData1.addEventListener('click', function(){onExpandHandler('data');}, false);
  creative.dom.expandData2.addEventListener('click', function(){onExpandHandler('data');}, false);
  creative.dom.expandInternational1.addEventListener('click', function(){onExpandHandler('int');}, false);
  creative.dom.expandInternational2.addEventListener('click', function(){onExpandHandler('int');}, false);
  creative.dom.expandInternational3.addEventListener('click', function(){onExpandHandler('int');}, false);
  creative.dom.expandInternational4.addEventListener('click', function(){onExpandHandler('int');}, false);
  creative.dom.collapseButton.addEventListener('click', onCollapseClickHandler, false);
  creative.dom.expandedExit.addEventListener('click', exitClickHandler);
  creative.dom.collapsedExit.addEventListener('click', collapsedExitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.collapseButton.style.display = 'none';
  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  animation.playMain();
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------


function expandStartHandler() {
  // Show expand over the top
  creative.dom.expandedContent.style.display = 'block';
  creative.dom.expandedExit.style.display = 'block';
  creative.dom.collapseButton.style.display = 'block';
  creative.dom.mainContainer.style.width = '970px';
  creative.dom.mainContainer.style.height = '500px';
  creative.dom.collapsedContent.style.display = 'none';
  creative.dom.collapsedExit.style.display = 'none';
  animation.tlMain.pause();
  Enabler.finishExpand();
}

function expandFinishHandler() {
  creative.isExpanded = true;
  creative.dom.animationControls.style.top= "500px";
}

function collapseStartHandler() {
  // Perform collapse animation.
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.collapseButton.style.display = 'none';
  creative.dom.mainContainer.style.width = '970px';
  creative.dom.mainContainer.style.height = '250px';
  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  // When animation finished must call
  Enabler.finishCollapse();
}

function collapseFinishHandler() {
  creative.isExpanded = false;
  // pause and clear all expanded timelines
  animation.tlCalls.pause(0);
  animation.tlCalls.clear();
  animation.tlData.pause(0);
  animation.tlData.clear();
  animation.tlInternational.pause(0);
  animation.tlInternational.clear();
  animation.tlMain.resume();
  creative.dom.animationControls.style.top= "250px";
}

function onCollapseClickHandler(){
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
}

function onExpandHandler(mix){
  switch (mix) {
    case 'calls':
      Enabler.requestExpand();
      Enabler.startTimer('Panel Expansion');
      animation.playCalls();
      animation.tlCalls.restart();
      break;
    case 'data':
      Enabler.requestExpand();
      Enabler.startTimer('Panel Expansion');
      animation.playData();
      animation.tlData.restart();
      break;
    case 'int':
      Enabler.requestExpand();
      Enabler.startTimer('Panel Expansion');
      animation.playInt();
      animation.tlInternational.restart();
      break;
  }
}

function exitClickHandler() {
  Enabler.requestCollapse();
  animation.tlMain.seek('collapse_endFrame').pause();
  Enabler.stopTimer('Panel Expansion');
  Enabler.exit('BackgroundExit');
}

function collapsedExitClickHandler() {
  animation.tlMain.seek('collapse_endFrame').pause();
  Enabler.exit('CollapsedExit');
}


/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);
