const secondArrow = document.querySelector('.clock__secondArrow');
const minuteArrow = document.querySelector('.clock__minuteArrow');
const hourArrow = document.querySelector('.clock__hourArrow');
const clockDial = document.querySelector('.clock__dial');
const dialChangeButton = document.querySelector('.clock__dialChangeButton');
const arrows = document.querySelectorAll('.arrow');

let offsetX = 0;
let offsetY = -7.5;

let prevAmountSeconds = 0;


// function shadowOffset () {
//     if ((0 <= presentTime.getSeconds() <= 15) && prevAmountSeconds != presentTime.getSeconds())  {
//         arrows.forEach(item => {
//             item.style.filter = `drop-shadow(${offsetX}px ${offsetY}px 4px #000)`;
//         })
        
//         offsetX = offsetX - (presentTime.getSeconds() - prevAmountSeconds)/2;
//         offsetY = offsetY + (presentTime.getSeconds() - prevAmountSeconds)/2;
//         prevAmountSeconds = presentTime.getSeconds();
//     }
// }
let isTheTimeRight = "no";
let presentTimes;
let second = 0;
let presentTime2 = new Date;
presentTime2.setSeconds(0);

function rotateArrow () {
    let time = new Date;
    
    
    if (isTheTimeRight === "no") {
        if(time.getSeconds() != presentTime2.getSeconds()) {
            presentTime2.setSeconds(second);
            presentTime = presentTime2;
            ++second;
        } else {
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

    console.log(presentTime.getSeconds());
    if (prevAmountSeconds != presentTime.getSeconds()) {
        console.log(`offsetX = ${offsetX}`);
        console.log(`offsetY = ${offsetY}`);
        
        if (0 <= presentTime.getSeconds() && presentTime.getSeconds() <= 15)  {
            arrows.forEach(item => {
                item.style.filter = `drop-shadow(${offsetX}px ${offsetY}px 4px #000)`;
            })
            console.log(15);
            offsetX = offsetX - 0.5;
            offsetY = offsetY + 0.5;
        } else if (16 <= presentTime.getSeconds() && presentTime.getSeconds() <= 30)  {
            arrows.forEach(item => {
                item.style.filter = `drop-shadow(${offsetX}px ${offsetY}px 4px #000)`;
            })
            console.log(30);
            offsetX = offsetX + 0.5;
            offsetY = offsetY + 0.5;
        } else if (31 <= presentTime.getSeconds() && presentTime.getSeconds() <= 45)  {
            arrows.forEach(item => {
                item.style.filter = `drop-shadow(${offsetX}px ${offsetY}px 4px #000)`;
            })
            console.log(45);
            offsetX = offsetX + 0.5;
            offsetY = offsetY - 0.5;
        } else if (46 <= presentTime.getSeconds() && presentTime.getSeconds() <= 60)  {
            arrows.forEach(item => {
                item.style.filter = `drop-shadow(${offsetX}px ${offsetY}px 4px #000)`;
            })
            console.log(59);
            offsetX = offsetX - 0.5;
            offsetY = offsetY - 0.5; 
        }
        if (presentTime.getSeconds() >= 59) {
            prevAmountSeconds = 0;
            console.log("reset");
            offsetX = 0;
            offsetY = -7.5;
        } else {
            prevAmountSeconds = presentTime.getSeconds();
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