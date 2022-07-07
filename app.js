// using d3 for convenience
var main = d3.select("main");

//sideByside Config
var scrolly_side = main.select(".scrolly_side");
var figure_side = scrolly_side.select(".figure_sideBySide");
var article_side = scrolly_side.select(".step_sideBySide");
var image_side = scrolly_side.selectAll(".img_sideBySide")
var step_side = article_side.selectAll(".step");

//overlay config
var scrolly_overlay = main.select(".scrolly_overlay");
var figure_overlay = scrolly_overlay.select(".figure_overlay");
var article_overlay = scrolly_overlay.select(".step_overlay");
var image_overlay = scrolly_overlay.selectAll(".img_overlay")
var step_overlay = article_overlay.selectAll(".step_center");



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

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

function handleResizeOverlay() {
    // 2. update the height of the figure
    var figureHeight = window.innerHeight
    var figureMarginTop = 0
    var articleMarginButton = window.innerHeight * .02
    console.log(window.innerHeight, figureHeight * 1)

    figure_overlay
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px")

    article_overlay
        .style("margin-bottom", articleMarginButton + "px")

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    //adding in active class to
    document.getElementById(response.element.dataset.target).classList.add('active');
}

function reset(response) {
    if (response.direction == 'up') {
        document.getElementById(response.element.dataset.target).classList.remove('active');
    }
}

function initSideBySide() {

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResizeSidebySide();

    scroller
        .setup({
            step: ".scrolly_side .step_sideBySide .step",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(reset)
}

function initOverlay() {

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
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

// var page = document.getElementById(body);

// function handleForm(event) {
//     event.preventDefault();
// }
// body.addEventListener('scroll', handleForm);


initSideBySide();
initOverlay();