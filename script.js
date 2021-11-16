const countdownTxt = document.querySelector("#countdowntxt")


var countDownDate = new Date("Jan 2 2022 00:00:00").getTime()
//countdownTxt.innerHTML = countDownDate ;

var updateCounter = setInterval(function () {
    var todayDate = new Date().getTime();
    var distance = countDownDate - todayDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
    var seconds = Math.floor(distance % (1000 * 60) / (1000))

    countdownTxt.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s"
})


