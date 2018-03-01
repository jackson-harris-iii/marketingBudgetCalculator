$(document).ready( function () {    
    console.log('ready')



function getStarted() {
    //begins question sequence
    console.log('getstarted')

    //changes leftPanelTrigger button to nextButton
    $('#leftPanelTrigger').text('Next').attr('id', 'nextButton')


}

function welcomePanels() {
    // changes leftPanel Trigger button to startbutton
    $('#leftPanelTrigger').text('Start').attr('id', 'startButton')
    console.log('welcome')

    //create welcome message
    var starterItems = $('<div>')
    starterItems.append('<h1>Press Start To Begin</h1>')
    starterItems.append('<p>This Marketing Calculator will help you determine your marketing budget</p>')
    
    //display welcome message
    $('#leftItems').append(starterItems)
}

function toolTip(infoField) {
    console.log(target)
}

function changeDisplay() {
    console.log('next item')
}

//triggers next panel
$('#nextButton').click(changeDisplay)

$('#startButton').click(getStarted)
//displays info about question when a user mouses over it.
$('body').mouseover('.infoField', toolTip)
//default calculator data is displayed
welcomePanels()
})