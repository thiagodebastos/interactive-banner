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
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('animation');
  creative.dom.expandedExit = document.getElementById('expanded-exit');
  creative.dom.expandedContent = document.getElementById('expanded-content');
  creative.dom.collapsedExit = document.getElementById('collapsed-exit');
  creative.dom.collapsedContent = document.getElementById('collapsed-content');
  creative.dom.collapseButton = document.getElementById('collapse-button');
  creative.dom.expandData = document.getElementById('expand-data');
  creative.dom.expandCalls = document.getElementById('expand-calls');
  creative.dom.expandInternational = document.getElementById('expand-int');
  creative.dom.animationControls = document.getElementById('animationControls');
  // creative.dom.image0 = document.getElementById('main-img-0');
  // creative.dom.image1 = document.getElementById('main-img-1');
}

/**
 * Ad initialisation.
 */
function init(e, tl) {
  Enabler.setStartExpanded(false);

  addListeners();

  // Polite loading
  if (Enabler.isPageLoaded()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, show);
  }
	animation();
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
  creative.dom.expandData.addEventListener('click', onExpandHandler, false);
  creative.dom.expandCalls.addEventListener('click', onExpandHandler, false);
  creative.dom.expandInternational.addEventListener('click', onExpandHandler, false);
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
  TweenMax.staggerFromTo('#expand-data, #expand-calls, #expand-int', 0.6, {x:100}, {x:0, opacity:1}, 0.2);
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
  TweenMax.staggerFromTo('#expand-data, #expand-calls, #expand-int', 0.6, {x:0, opacity:1}, {x:100, opacity:0}, 0.2);
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
  TweenMax.staggerFromTo('#expand-data, #expand-calls, #expand-int', 0.6, {x:100}, {x:0, opacity:1}, 0.2);

  // When animation finished must call
  Enabler.finishCollapse();
}

function collapseFinishHandler() {
  creative.isExpanded = false;
  creative.dom.animationControls.style.top= "250px";
}

function onCollapseClickHandler(){
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
}

function onExpandHandler(){
  Enabler.requestExpand();
  Enabler.startTimer('Panel Expansion');
}

function exitClickHandler() {
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
  Enabler.exit('BackgroundExit');
}

function collapsedExitClickHandler() {
  Enabler.exit('CollapsedExit');
}


/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);
