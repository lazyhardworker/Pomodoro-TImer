let taskTitle = document.getElementById('task');
let breakTitle = document.getElementById('break')

let taskTime = 25;
let breakTime = 5;

let seconds = "00"
// display
window.onload =()=> {
    document.getElementById('minutes').innerHTML = taskTime.toString().padStart(2,'0');
    document.getElementById('seconds').innerHTML = seconds;
    taskTtile.classList.add('active');
}
// start timer
function start() {
    //change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let taskMinutes = taskTime -1;
    let breakMinutes = breakTime -1;

    breakCount = 0;
    //countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = taskMinutes.toString().padStart(2,'0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2,'0');

        // start
        seconds = seconds - 1;
        if (seconds === 0){
            taskMinutes = taskMinutes - 1;
            if(taskMinutes === -1){
                if(breakCount % 2 === 0){
                    //start break
                    taskMinutes = breakMinutes;
                    breakCount++;
                    //change the panel
                    taskTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                    
                }else{
                    //continue
                    taskMinutes = taskTime;
                    breakCount++;

                    //change the panel
                    breakTitle.classList.remove('active');
                    taskTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }
    //start countdown
    setInterval(timerFunction, 1000); //1000 = 1s
}