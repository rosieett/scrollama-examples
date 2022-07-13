// using d3 for convenience
var main = d3.select("main");

//sideByside Config
var scrolly_side = main.select(".scrolly_side");
var figure_side = scrolly_side.select(".figure_sideBySide");
var article_side = scrolly_side.select(".step_sideBySide");
var image_side = scrolly_side.selectAll(".img_sideBySide")
var step_side = article_side.selectAll(".step_side");

//overlay config
var scrolly_overlay = main.select(".scrolly_overlay");
var figure_overlay = scrolly_overlay.select(".figure_overlay");
var article_overlay = scrolly_overlay.select(".step_overlay");
var image_overlay = scrolly_overlay.selectAll(".img_overlay")
var step_overlay = article_overlay.selectAll(".step_center");

var scrolly_side2 = main.select(".scrolly_side2");
var figure_side2 = scrolly_side2.select(".figure_sideBySide2");
var article_side2 = scrolly_side2.select(".step_sideBySide2");
var image_side2 = scrolly_side2.selectAll(".img_sideBySide2")
var step_side2 = article_side2.selectAll(".step_side2");

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResizeSidebySide() {

    // 2. update the height of the figure
    var figureHeight = window.innerHeight * .8;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure_side
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px")
        .style("margin-bottom", figureMarginTop + "px")

    scroller.resize();
}

function handleResizeSidebySide2() {

    // 2. update the height of the figure
    var figureHeight = window.innerHeight * .8;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure_side2
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px")
        .style("margin-bottom", figureMarginTop + "px")

    scroller.resize();
}

function handleResizeOverlay() {
    // 2. update the height of the figure
    var figureHeight = window.innerHeight
    var figureMarginTop = 0

    figure_overlay
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px")
        .style("margin-bottom", 0 + "px")

    article_overlay
        .style("margin-bottom", 0 + "px")

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    document.getElementById(response.element.dataset.target).classList.add('active');
}

function reset(response) {
    if (response.direction === 'up') {
        document.getElementById(response.element.dataset.target).classList.remove('active');
    }
}

function initSideBySide() {

    handleResizeSidebySide();

    scroller
        .setup({
            step: ".scrolly_side .step_sideBySide .step_side",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(reset)
}

function initSideBySide2() {

    handleResizeSidebySide2();

    scroller
        .setup({
            step: ".scrolly_side2 .step_sideBySide2 .step_side2",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(reset)

    console.log('working?')
}

function initOverlay() {

    handleResizeOverlay();

    scroller
        .setup({
            step: ".scrolly_overlay .step_overlay .step_center",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(reset)
}


initSideBySide();
initOverlay();
initSideBySide2();