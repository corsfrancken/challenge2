function getTimeOfDay() {
    var today = new Date();
    var n = today.getHours();

    if (n >= 19 || n < 6) {
        document.getElementById("zonmaan").style.backgroundColor = "white";
    } else {
        document.getElementById("zonmaan").style.backgroundColor = "#FAE675";
        
        document.getElementById("zonmaan").style.filter = "blur(0px)"
        document.getElementById("alles").style.backgroundImage = "linear-gradient(to bottom right, #cbf1ff, #cbf1ff)";
        
        document.getElementById("circle").style.backgroundImage = "linear-gradient(to bottom right, #cbf1ff, #cbf1ff)";
        
        document.getElementById("circle").style.boxShadow = "20px 20px 60px #adcdd9, -20px -20px 60px #e9ffff";
        
        document.getElementById("clock").style.color = "black";
        
        document.getElementById("titel").style.color = "black";
    }
}

getTimeOfDay();
