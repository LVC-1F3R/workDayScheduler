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

    if (localStorage.getItem('hrinput' + i) !== null) {
        hoursInput.value = (localStorage.getItem('hrinput' + i))
    } 
}


// event listeners for buttons saving text to local storage when the corresponding save button is clicked
$("button").on("click", function () {
    var key = $(this).prev().attr("id");
    var value = $(this).parent().find("input").val();
    localStorage.setItem(key, value);
  });




