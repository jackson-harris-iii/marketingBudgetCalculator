$(document).ready( function () {    
    console.log('ready')



function getStarted() {
    //begins question sequence
    console.log('getstarted')
    //clears left panel contents
    $('#welcomeDiv').remove()
    //show contact form
    $('#contactForm').show()
    //changes leftPanelTrigger button to nextButton
    $('#startButton').text('Next').attr('id', 'nextButton').attr('class', 'btn btn-outline-danger btn-lg mt-4')
    var skip = $('<button>')
    skip.text('Skip').attr('class', 'btn btn-outline-danger btn-lg mt-4').attr('id', 'skipButton')
    $('#leftPanelStuff').append(skip)

}

function welcomePanels() {
    $('#contactForm').hide()
    // changes leftPanel Trigger button to startbutton
    $('#leftPanelTrigger').text('Start').attr('id', 'startButton')
    console.log('welcome')

    //create welcome message
    var starterItems = $('<div>').attr('id', 'welcomeDiv')
    starterItems.append('<h1>Press Start To Begin</h1>')
    starterItems.append('<p>This Marketing Calculator will help you determine your marketing budget</p>')
    
    //display welcome message
    $('#leftItems').append(starterItems)
}

function toolTip(infoField) {
    console.log(infoField)
}

function changeDisplay() {
    console.log('next item')
}

//default calculator data is displayed
welcomePanels()

//triggers next panel
$('#nextButton').click(changeDisplay)

$('#startButton').click(getStarted)
//displays info about question when a user mouses over it.
$('body').on('mouseover','.infoField', toolTip);
})