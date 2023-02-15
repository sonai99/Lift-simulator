let simulate = document.querySelector('.createLiftFloorButton');
let disable = document.querySelector('.disable');
let disableLiftInput = document.querySelector('#disable-lift-no').value;

disable.addEventListener("click",()=>{
    let disableLiftInput = document.querySelector('#disable-lift-no').value;
    // console.log(disableLiftInput);
})

simulate.addEventListener("click", (e)=>{
    e.preventDefault();
    let floorInputValue = document.querySelector('#floorNumber').value;
    let liftInputValue = document.querySelector('#liftNumber').value;
    document.querySelector('.firstPage').style.display = 'none';
    document.querySelector('.secondPage').style.display = 'block';
    generateFloors();
})

function generateFloors() {
    let floorInput = document.querySelector('#floorNumber').value;
    let liftInput = document.querySelector('#liftNumber').value;

    for(let i=floorInput; i>0; i--){
        let floor = document.createElement('div');
        floor.className = 'floor';

        let buttonLift = document.createElement('div');
        buttonLift.className = 'buttonLift';

        let buttonDiv1 = document.createElement('div');
        buttonDiv1.className = 'button';

        let button1 = document.createElement('button');
        let text1 = document.createTextNode('Up');
        button1.className = "up";
        button1.setAttribute('id', `up${i}`);
        button1.appendChild(text1);

        let button2 = document.createElement('button');
        let text2 = document.createTextNode('Down');
        button2.className = "down";
        button2.setAttribute('id', `down${i}`);
        button2.appendChild(text2);

        buttonDiv1.appendChild(button1);
        buttonDiv1.appendChild(button2);

        buttonLift.appendChild(buttonDiv1);
        floor.appendChild(buttonLift);


        let hrdiv = document.createElement('div');
        hrdiv.className = 'FloorName';

        let hr = document.createElement('hr');
        
        let spanFloorNo = document.createElement('span');
        spanFloorNo.innerText = `Floor ${i}`;

        hrdiv.appendChild(hr);
        hrdiv.appendChild(spanFloorNo);
        floor.appendChild(hrdiv);
 
        document.querySelector('.secondPage').appendChild(floor);
        if(i==floorInput){
            button1.style.display ='none';
        }
        if(i==1){
            button2.style.display='none'
        }
    }

let mainLift = document.createElement('div');
mainLift.className = 'mainLift';

for(let j=0;j<liftInput;j++) {
    let liftDiv = document.createElement('div');
    liftDiv.className = 'lift';
    liftDiv.setAttribute('id', `lift${j}`);

    liftDiv.setAttribute('status', 'idle');

    let gates = document.createElement('div');
    gates.className = 'gates';
    gates.setAttribute('id','gates');

    let gate1 = document.createElement('div');
    gate1.className = 'gate1';
    gates.appendChild(gate1);


    liftDiv.appendChild(gates);
    mainLift.appendChild(liftDiv);
}

const mainbuttonlift = document.querySelectorAll('.buttonLift');
const lastBox = mainbuttonlift[mainbuttonlift.length - 1];

lastBox.appendChild(mainLift);

let allLift = document.querySelectorAll('.lift');
let up = document.querySelectorAll('.up');
let nUp=up.length;
let down = document.querySelectorAll('.down');

let oldFloor = [];
for(let j=0;j<allLift.length;j++){
    oldFloor.push(1);
}

up.forEach((e,i)=>{
    e.addEventListener("click", ()=>{
        let currentFloorValue = (nUp - i);
        for(let i=0;i<allLift.length;i++){

            let currentMovingLift = allLift[i];
            let disableLiftInput = document.querySelector('#disable-lift-no').value;
            if(currentMovingLift == allLift[disableLiftInput]){
                // console.log("Yes its 1");
                currentMovingLift.className = "disabled-lift";
                setTimeout(()=>{
                    let gates = currentMovingLift.firstChild;

                    let gate1 = document.querySelector('.gate1');
                
                    setTimeout(()=>{
                        gates.children[0].style.width = '3px';
                    },1000);
                },1000)
                currentMovingLift.setAttribute('status','moving');
            }
            if(currentMovingLift.getAttribute('status') === 'idle'){
                currentMovingLift.setAttribute('status','moving');

                moveLift(currentMovingLift,currentFloorValue,oldFloor[i]);
                oldFloor[i] = currentFloorValue;
                break;
            }
            
        }
    });
})
down.forEach((e,i)=>{
    e.addEventListener("click", ()=>{
        let currentFloorValue = (nUp - i);
        for(let i=0;i<allLift.length;i++){
            let currentMovingLift = allLift[i];
            let disableLiftInput = document.querySelector('#disable-lift-no').value;
            if(currentMovingLift == allLift[disableLiftInput]){
                // console.log("Yes its 1");
                console.log(disableLiftInput);
                currentMovingLift.className = "disabled-lift";
                currentMovingLift.setAttribute('status','moving');
            }
            if(currentMovingLift.getAttribute('status') === 'idle'){
                currentMovingLift.setAttribute('status','moving');
                moveLift(currentMovingLift,currentFloorValue,oldFloor[i]);
                oldFloor[i] = currentFloorValue;
                break;
            }
        }
    });
})
function moveLift(currentLiftNo,floorNo,oldFloorValue){

    currentLiftNo.style.transform = `translateY(${-85 * (floorNo - 1)}px)`;
    currentLiftNo.style.transitionDuration = '2s';

    setTimeout(()=>{
        gateopenclose(currentLiftNo);
        setTimeout(()=>{
            currentLiftNo.setAttribute('status','idle');
        },5500);
    },1000);
}
function gateopenclose(currentLiftNo){
    let gates = currentLiftNo.firstChild;

    let gate1 = document.querySelector('.gate1');

    setTimeout(()=>{
        gates.children[0].style.width = '3px';
    },1000);
    setTimeout(()=>{
        gates.children[0].style.width = '50px';
    },3000);
}

// function disableLift(currentLift,currentFloor,prevFloor){
//     console.log(currentLift);
//     currentLift.className = "disabled-lift";
//     currentLift.setAttribute('status','moving');
//     currentLift.style.transform = "none";
// }
}
