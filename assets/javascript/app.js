$(document).ready( function () {    
    console.log('ready')

var contactCaptured = false;

function getStarted() {
    //begins question sequence
    console.log('getstarted')
    //clears left panel contents
    $('#welcomeDiv').remove()
    //show contact form if contact is not already captured
    if (contactCaptured != true){
    $('#contactForm').show()
    //changes leftPanelTrigger button to nextButton
    $('#startButton').text('Next').attr('id', 'formSubmit').attr('class', 'btn btn-outline-danger btn-lg mt-4 nextButton')
    var skip = $('<button>')
    skip.text('Skip').attr('class', 'btn btn-outline-danger btn-lg mt-4').attr('id', 'skipButton')
    $('#leftPanelStuff').append(skip)
    }
    else {
        questionsForm()
    }

}

function welcomePanels() {
    $('#contactForm').hide()
    $('#questionsForm').hide()
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

function questionsForm() {
    console.log('nextItem')
    $('#contactForm').hide()
    $('#questionsForm').show()

    
}

function contactInfo() {
    var name = $('#contactName').val().trim()
    var email = $('#contactEmail').val().trim()
    var businessName = $('#businessName').val().trim()
    var phone = $('#contactPhone').val().trim()
    console.log(name)
    console.log(email)
    console.log(businessName)
    console.log(phone)
    contactCaptured = true
    questionsForm()
}

//default calculator data is displayed
welcomePanels()

//triggers next panel
    $('body').on('click', '#skipButton', questionsForm)

//collects contact information 
$('body').on('click', '#formSubmit', contactInfo)

//Loads contact collection form
$('body').on('click', '#startButton' , getStarted)
//displays info about question when a user mouses over it.
$('body').on('mouseover','.infoField', toolTip);
})