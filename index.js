console.log("ready")

// this is for 24 hours timer
// function displayTime() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var timeString = hours + ':' + minutes + ':' + seconds;
//     document.getElementById('time').innerHTML = timeString;
//     console.log(timeString)
// }
// // Call displayTime() function every second
// setInterval(displayTime, 1000);


// JavaScript code to get current time in IST with AM/PM format
function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ':' + minutes + ':' + seconds;
    var ampm = (hours >= 12) ? 'PM' : 'AM';
    hours = (hours > 12) ? hours - 12 : hours;
    timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('time').innerHTML = timeString;
}
// Call displayTime() function every second
setInterval(displayTime, 1000);

// var btn = $('#btn');

var btn = document.querySelector("#btn")
var alarm = document.querySelector(".alarm")

btn.addEventListener("click", function () {
    var hour = parseInt(document.querySelector("#hour").value);
    var minute = parseInt(document.querySelector("#minutes").value);
    var pa = document.querySelector("#pa").value;

    console.log(hour)
    console.log(minute)
    console.log(pa)

    if (hour === "" || minute === "") {
        alert("set the time!")
    } else {
        var item = document.createElement('ul');
        item.innerHTML = '<li><span>' + hour + '</span>:<spna>' + minute + '</spna>:<span>' + pa + '</span></li>';
        alarm.append(item);

        // alarm.innerHTML = '<li><span>' + hour + '</span>:<spna>' + minute + '</spna>:<span>' + pa + '</span></li>';

        // hour.innerHTML = "";
        // minute.innerHTML = " ";




    }




});
