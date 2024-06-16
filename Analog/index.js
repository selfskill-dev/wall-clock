let hr= document.getElementById ("hour");
let min= document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date= new Date();
    //Getting hour min sec from the date function 
    let hh= date.getHours();
    let mm= date.getMinutes();
    let ss= date.getSeconds();

    let hRotation= 30*hh+mm/2;
    let mRotation= 6*mm;
    let sRotation= 6*ss;
    

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;

}



setInterval(displayTime,1000);













































//12hour = 360deg
//1hour = 360/12= 30deg
//hhour = 30h
//60min= 30deg
//1min= =30/60=1/2deg
//mmin= (1/2)m
//second will be neglected in hour rotating sui just we take hour and min sui for cal the hour angle in Analog Clock because both hour and min sui are moved  in  making movement in rotation 
//Total= 30h + m/2
//60min=360deg
//1min=360/60=6deg
//m min = 6m
//60sec= 360deg
//1sec= 6deg
//m sec = 6m 
