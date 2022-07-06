// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var image = scrolly.selectAll(".img")
var step = article.selectAll(".step");

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {

    // 2. update the height of the figure
    var figureHeight = window.innerHeight * .8;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px")
        .style("margin-bottom", figureMarginTop + "px")

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    console.log(response);
    // response = { element, direction, index }

    //changing colors of active step 
    // step.classed("is-active", function (d, i) {
    //     return i === response.index;
    // });

    //adding in active class to
    document.getElementById(response.element.dataset.target).classList.add('active');

}

function reset(response) {
    if (response.direction == 'up') {
        document.getElementById(response.element.dataset.target).classList.remove('active');
    }
}

function init() {

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(reset)
}

// kick things off
init();