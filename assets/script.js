// grabs current date and appends into header
var dateDisplay = document.getElementById("currentDay")

var currentDate = dateDisplay.append(moment().format("LLL"))

// current time in military format for comparisons
var currentTime = moment().format("HH00")

// loop to change color of input box for past present and future
for (var i = 1; i <= 9 ; i++) {
    var hours = document.getElementById("hour" + i).textContent
    var hoursInput = document.getElementById("hrinput" + i)

    if (hours == currentTime) {
        $(hoursInput).css({"background-color": "red"})
    } else if (hours > currentTime)  {
        $(hoursInput).css({"background-color": "darkseagreen"})
    } 
}

//get item from localstorage corresponding to input item
for (var i = 1; i <= 9 ; i++) {
    var hours = document.getElementById("hour" + i).textContent
    var hoursInput = document.getElementById("hrinput" + i)

    if (localStorage.getItem('input' + i) !== null) {
        hoursInput.value = (localStorage.getItem('input' + i))
    } 
}


// event listeners for buttons saving text to local storage when the corresponding save button is clicked
$("#save1").click(function(){
    var input = document.getElementById("hrinput1")
    localStorage.setItem("input1", $(input).val());
});

$("#save2").click(function(){
    var input = document.getElementById("hrinput2")
    localStorage.setItem("input2", $(input).val());
});

$("#save3").click(function(){
    var input = document.getElementById("hrinput3")
    localStorage.setItem("input3", $(input).val());
});

$("#save4").click(function(){
    var input = document.getElementById("hrinput4")
    localStorage.setItem("input4", $(input).val());
});

$("#save5").click(function(){
    var input = document.getElementById("hrinput5")
    localStorage.setItem("input5", $(input).val());
});

$("#save6").click(function(){
    var input = document.getElementById("hrinput6")
    localStorage.setItem("input6", $(input).val());
});


$("#save7").click(function(){
    var input = document.getElementById("hrinput7")
    localStorage.setItem("input7", $(input).val());
});


$("#save8").click(function(){
    var input = document.getElementById("hrinput8")
    localStorage.setItem("input8", $(input).val());
});


$("#save9").click(function(){
    var input = document.getElementById("hrinput9")
    localStorage.setItem("input9", $(input).val());
});







