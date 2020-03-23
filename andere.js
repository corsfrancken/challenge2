var today = new Date();

document.getElementById('year').innerHTML = today.getFullYear();

var maanden = new Array('januari', 'februari', 'march', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('month').innerHTML = maanden[today.getMonth()]

var dagen = new Array('unknown', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st');
document.getElementById('day').innerHTML = dagen[today.getDate()]


function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 500);

}

showTime();


//function getTimeOfDay() {
    //var date = new Date();
    //var n = 20//today.getHours();
    
    //if (n > 19 || n < 6) {document.getElementById("zonmaan").style.backgroundColor = "yellow";}
        //else {document.getElementById("zonmaan").style.backgroundColor = "white";
        //}
//}

//getTimeOfDay();

//function getTimeOfDay() {
    //var n = today.getHours();
    //if (n > 19 || n < 6) { document.getElementById("clock").style.backgroundColor = "white";}
        //else { document.getElementById("clock").style.backgroundColor = "black";}
    //});

//document.getElementById('clock').innerHTML = today.getTime();
