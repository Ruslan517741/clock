const secondArrow = document.querySelector('.clock__secondArrow');
const minuteArrow = document.querySelector('.clock__minuteArrow');
const hourArrow = document.querySelector('.clock__hourArrow');
const clockDial = document.querySelector('.clock__dial');
const dialChangeButton = document.querySelector('.clock__dialChangeButton');
const arrows = document.querySelectorAll('.arrow');
const secondArrowImg = document.querySelector('.clock__secondArrow-img');
const minuteArrowImg = document.querySelector('.clock__minuteArrow-img');
const hourArrowImg = document.querySelector('.clock__hourArrow-img');

// let offsetX = 0;
// let offsetY = -7.5;

let secondsOffsetX = 0;
let secondsOffsetY = -7.5;
let prevAmountSeconds = 0;

let minutesOffsetX = 0;
let minutesOffsetY = -7.5;
let prevAmountMinutes = 0;

let hoursOffsetX = 0;
let hoursOffsetY = -7.5;
let prevAmountPartOfHours = 4;
let hoursInDifferentFormat = 0;


let isTheTimeRight = "no";
let presentTime;
let second = 0;
let minutes = 0;
let hours = 0;
let presentTime2 = new Date;
presentTime2.setSeconds(0);
presentTime2.setMinutes(0);
presentTime2.setHours(0);

function rotateArrow () {
    let time = new Date;
    
    if (isTheTimeRight === "no") {
        
        // if(time.getMinutes() != presentTime2.getMinutes()) {
        //     if (minutes == 60) {
        //         minutes = 0;
        //     }
        //     presentTime2.setMinutes(minutes);
        //     presentTime = presentTime2;
        //     ++minutes;
        //     // if (minutes == 60) {
        //     //     minutes = 0;
        //     // }
        //     if(time.getMinutes() == presentTime2.getMinutes() && time.getHours() != presentTime2.getHours()) {
        //         ++hours;
        //         ++minutes;
        //         presentTime2.setHours(hours);             
        //         presentTime2.setMinutes(minutes);
        //         presentTime = presentTime2;
                
        //     }
        // } 
        if(time.getHours() != presentTime2.getHours()) {
            if (minutes == 60) {
                minutes = 0;
                ++hours;
            }
            presentTime2.setMinutes(minutes);
            presentTime2.setHours(hours); 
            presentTime = presentTime2;
            ++minutes;
        }
        if(time.getMinutes() != presentTime2.getMinutes() && time.getHours() == presentTime2.getHours()) {
            ++minutes;          
            presentTime2.setMinutes(minutes);
            presentTime = presentTime2;     
        }
         
        
        if (time.getSeconds() != presentTime2.getSeconds()) {
            presentTime2.setSeconds(second);
            presentTime = presentTime2;
            ++second;
        } 
        if (time.getMinutes() == presentTime2.getMinutes() && time.getSeconds() == presentTime2.getSeconds() && time.getHours() == presentTime2.getHours()) {
            presentTime = time;
            isTheTimeRight = "yes"
        }
    }
    if (isTheTimeRight === "yes") {
        presentTime = time;
    }

    // let presentTime = new Date('December 17, 1995 03:30:50');
    secondArrow.style.rotate = presentTime.getSeconds() * 6 + "deg";
    minuteArrow.style.rotate = presentTime.getSeconds() * 360/(60*60) + presentTime.getMinutes() * 6 + "deg";
    hourArrow.style.rotate = presentTime.getMinutes() * 0.5 + presentTime.getHours() * 30 + "deg";

    // console.log(presentTime.getSeconds());
    if (prevAmountSeconds != presentTime.getSeconds()) {
        // console.log(presentTime.getSeconds());
        // console.log(`secondsOffsetX = ${secondsOffsetX}`);
        // console.log(`secondsOffsetY = ${secondsOffsetY}`);
        // console.log(`getMilliseconds = ${presentTime.getMilliseconds()}`);
        if (presentTime.getSeconds() == 0)  {
            secondsOffsetX = 0;
            secondsOffsetY = -7.5;
        }
        if (0 < presentTime.getSeconds() && presentTime.getSeconds() <= 15)  {
            
            // console.log(15);
            secondsOffsetX = secondsOffsetX - 0.5;
            secondsOffsetY = secondsOffsetY + 0.5;
            // console.log(`secondsOffsetX = ${secondsOffsetX}`);
            // console.log(`secondsOffsetY = ${secondsOffsetY}`);
            secondArrowImg.style.filter = `drop-shadow(${secondsOffsetX}px ${secondsOffsetY}px 4px #000)`;
        } else if (15 < presentTime.getSeconds() && presentTime.getSeconds() <= 30)  {
            
            // console.log(30);
            secondsOffsetX = secondsOffsetX + 0.5;
            secondsOffsetY = secondsOffsetY + 0.5;
            // console.log(`secondsOffsetX = ${secondsOffsetX}`);
            // console.log(`secondsOffsetY = ${secondsOffsetY}`);
            secondArrowImg.style.filter = `drop-shadow(${secondsOffsetX}px ${secondsOffsetY}px 4px #000)`;
            
        } else if (30 < presentTime.getSeconds() && presentTime.getSeconds() <= 45)  {
            
            // console.log(45);
            secondsOffsetX = secondsOffsetX + 0.5;
            secondsOffsetY = secondsOffsetY - 0.5;
            // console.log(`secondsOffsetX = ${secondsOffsetX}`);
            // console.log(`secondsOffsetY = ${secondsOffsetY}`);
            secondArrowImg.style.filter = `drop-shadow(${secondsOffsetX}px ${secondsOffsetY}px 4px #000)`;
        } else if (45 < presentTime.getSeconds() && presentTime.getSeconds() < 60)  {
            
            // console.log(60);
            secondsOffsetX = secondsOffsetX - 0.5;
            secondsOffsetY = secondsOffsetY - 0.5; 
            // console.log(`secondsOffsetX = ${secondsOffsetX}`);
            // console.log(`secondsOffsetY = ${secondsOffsetY}`);
            secondArrowImg.style.filter = `drop-shadow(${secondsOffsetX}px ${secondsOffsetY}px 4px #000)`;
            
            if (presentTime.getSeconds() === 59) {
                secondsOffsetX = secondsOffsetX - 0.5;
                secondsOffsetY = secondsOffsetY - 0.5; 
            }
        }
        prevAmountSeconds = presentTime.getSeconds();
        // if (presentTime.getSeconds() >= 59) {
        //     prevAmountSeconds = 0;
        //     console.log("reset");
        //     secondsOffsetX = 0;
        //     secondsOffsetY = -7.5;
        // } else {
        //     prevAmountSeconds = presentTime.getSeconds();
        // }
        
    }




////////////////////////////////////////minutes


    if (prevAmountMinutes != presentTime.getMinutes()) {
        // console.log(`minutesOffsetX = ${minutesOffsetX}`);
        // console.log(`minutesOffsetY = ${minutesOffsetY}`);

        if (presentTime.getMinutes() == 0)  {
            minutesOffsetX = 0;
            minutesOffsetY = -7.5;
        }
        
        if (0 <= presentTime.getMinutes() && presentTime.getMinutes() <= 15)  {
            
            console.log(15);
            minutesOffsetX = minutesOffsetX - 0.5;
            minutesOffsetY = minutesOffsetY + 0.5;
            minuteArrowImg.style.filter = `drop-shadow(${minutesOffsetX}px ${minutesOffsetY}px 4px #000)`;
        } else if (15 < presentTime.getMinutes() && presentTime.getMinutes() <= 30)  {
            
            console.log(30);
            minutesOffsetX = minutesOffsetX + 0.5;
            minutesOffsetY = minutesOffsetY + 0.5;
            minuteArrowImg.style.filter = `drop-shadow(${minutesOffsetX}px ${minutesOffsetY}px 4px #000)`;
        } else if (30 < presentTime.getMinutes() && presentTime.getMinutes() <= 45)  {
           
            console.log(45);
            minutesOffsetX = minutesOffsetX + 0.5;
            minutesOffsetY = minutesOffsetY - 0.5;
            minuteArrowImg.style.filter = `drop-shadow(${minutesOffsetX}px ${minutesOffsetY}px 4px #000)`;
        } else if (45 < presentTime.getMinutes() && presentTime.getMinutes() <= 60)  {
            
            console.log(59);
            minutesOffsetX = minutesOffsetX - 0.5;
            minutesOffsetY = minutesOffsetY - 0.5; 
            minuteArrowImg.style.filter = `drop-shadow(${minutesOffsetX}px ${minutesOffsetY}px 4px #000)`;
            if (presentTime.getMinutes() === 59) {
                minutesOffsetX = minutesOffsetX - 0.5;
                minutesOffsetY = minutesOffsetY - 0.5; 
            }
        }
        prevAmountMinutes = presentTime.getMinutes();

        ////////////////////////////hours
        let AmountPartOfHours = Math.trunc(presentTime.getMinutes()/12);
       
        if (prevAmountPartOfHours != AmountPartOfHours) {
            console.log(`AmountPartOfHours= ${AmountPartOfHours}`);
            console.log(`presentTime.getHours() = ${presentTime.getHours()}`);
            // console.log(`hoursOffsetX = ${hoursOffsetX}`);
            // console.log(`hoursOffsetY = ${hoursOffsetY}`);

            hoursInDifferentFormat = presentTime.getHours();
            // if (hoursInDifferentFormat >= 12) {
            //     hoursInDifferentFormat = hoursInDifferentFormat - 12;
            // }

            if (presentTime.getHours() == 0 && AmountPartOfHours == 0)  {
                hoursOffsetX = 0;
                hoursOffsetY = -7.5;
            }
            
            if (0 <= presentTime.getHours() && presentTime.getHours() < 3 || 12 <= presentTime.getHours() && presentTime.getHours() < 15)  {
                
                console.log(3);

                hoursOffsetX = hoursOffsetX - 0.5;
                hoursOffsetY = hoursOffsetY + 0.5;
                hourArrowImg.style.filter = `drop-shadow(${hoursOffsetX}px ${hoursOffsetY}px 4px #000)`;
                console.log(`hoursOffsetX11 = ${hoursOffsetX}`);
                console.log(`hoursOffsetY11 = ${hoursOffsetY}`);
            } else if (3 <= presentTime.getHours() && presentTime.getHours() < 6 || 15 <= presentTime.getHours() && presentTime.getHours() < 18)  {
                
                console.log(6);
                hoursOffsetX = hoursOffsetX + 0.5;
                hoursOffsetY = hoursOffsetY + 0.5;
                hourArrowImg.style.filter = `drop-shadow(${hoursOffsetX}px ${hoursOffsetY}px 4px #000)`;
                console.log(`hoursOffsetX11 = ${hoursOffsetX}`);
                console.log(`hoursOffsetY11 = ${hoursOffsetY}`);
            } else if (6 <= presentTime.getHours() && presentTime.getHours() < 9 || 18 <= presentTime.getHours() && presentTime.getHours() < 21)  {
                
                console.log(9);
                hoursOffsetX = hoursOffsetX + 0.5;
                hoursOffsetY = hoursOffsetY - 0.5;
                hourArrowImg.style.filter = `drop-shadow(${hoursOffsetX}px ${hoursOffsetY}px 4px #000)`;
                console.log(`hoursOffsetX11 = ${hoursOffsetX}`);
                console.log(`hoursOffsetY11 = ${hoursOffsetY}`);
            } else if (9 <= presentTime.getHours() && presentTime.getHours() < 12 || 21 <= presentTime.getHours() && presentTime.getHours() < 24)  {
                
                console.log(12);
                // console.log(`hoursInDifferentFormat= ${hoursInDifferentFormat}`);
                hoursOffsetX = hoursOffsetX - 0.5;
                hoursOffsetY = hoursOffsetY - 0.5; 
                hourArrowImg.style.filter = `drop-shadow(${hoursOffsetX}px ${hoursOffsetY}px 4px #000)`;
                console.log(`hoursOffsetX11 = ${hoursOffsetX}`);
                console.log(`hoursOffsetY11 = ${hoursOffsetY}`);
            }
            if (presentTime.getSeconds() === 59) {
                secondsOffsetX = secondsOffsetX - 0.5;
                secondsOffsetY = secondsOffsetY - 0.5; 
            }

            prevAmountPartOfHours = Math.trunc(presentTime.getMinutes()/12);
            
        }
    }


    

    
    requestAnimationFrame(rotateArrow);
}

requestAnimationFrame(rotateArrow);

const dialsName = ['dial0', 'dial1', 'dial2'];
let activeDial = 0;

function changeDials () {
    ++activeDial;
    if (activeDial >= dialsName.length) {
        activeDial = 0;
    }
    clockDial.style.backgroundImage = `url(../img/dials/${dialsName[activeDial]}.png)`;
    console.log(clockDial.style.backgroundImage);
}

dialChangeButton.addEventListener('click', changeDials);

// function rotateArrow () {
//     let enteredTime = new Date('December 17, 1995 03:30:50');




//     secondArrow.style.rotate = enteredTime.getSeconds() * 6 + "deg";
//     minuteArrow.style.rotate = enteredTime.getSeconds() * 360/(60*60) + enteredTime.getMinutes() * 6 + "deg";
//     hourArrow.style.rotate = enteredTime.getMinutes() * 0.5 + enteredTime.getHours() * 30 + "deg";

//     // console.log(presentTime);

//     requestAnimationFrame(rotateArrow);
// }

// requestAnimationFrame(rotateArrow);







//360/(60*60*24)