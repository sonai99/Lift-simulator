let simulate = document.querySelector('.createLiftFloorButton');
// console.log(simulate);

simulate.addEventListener("click", (e)=>{
    e.preventDefault();
    let floorInputValue = document.querySelector('#floorNumber').value;
    let liftInputValue = document.querySelector('#liftNumber').value;
    // console.log(floorInputValue,liftInputValue);
    document.querySelector('.first-page').style.display = 'none';
    document.querySelector('.second-page').style.display = 'block';
    generateFloors();
})

//function to generate floors,lifts,buttons ->
function generateFloors() {
    let floorInput = document.querySelector('#floorNumber').value;
    let liftInput = document.querySelector('#liftNumber').value;

    for(let i=floorInput; i>0; i--){
        let floorDiv = document.createElement('div');
        floorDiv.className = 'floorDiv';

        let buttonLift = document.createElement('div');
        buttonLift.className = 'buttonLift';

        let buttonDiv1 = document.createElement('div');
        buttonDiv1.className = 'button';

        //button1
        let button1 = document.createElement('button');
        let text1 = document.createTextNode('Up');
        button1.className = "up";
        button1.setAttribute('id', `up${i}`);
        button1.appendChild(text1);

        //button2
        let button2 = document.createElement('button');
        let text2 = document.createTextNode('Down');
        button2.className = "down";
        button2.setAttribute('id', `down${i}`);
        button2.appendChild(text2);

        buttonDiv1.appendChild(button1);
        buttonDiv1.appendChild(button2);

        buttonLift.appendChild(buttonDiv1);
        floorDiv.appendChild(buttonLift);

        //create horizontal lines for floors
        let hrdiv = document.createElement('div');
        hrdiv.className = 'hrfloorName';

        let hr = document.createElement('hr');
        
        let spanFloorNo = document.createElement('span');
        spanFloorNo.innerText = `Floor ${i}`;

        hrdiv.appendChild(hr);
        hrdiv.appendChild(spanFloorNo);
        floorDiv.appendChild(hrdiv);
        
        // console.log(buttonDiv1.parentNode);
        // button1.addEventListener("click", function(){
        //     console.log("button clicked", button1.id);
        // })

        document.querySelector('.second-page').appendChild(floorDiv);
        // let example = document.querySelector('up2');
        // console.log(example);
        // const mainbuttonlift = document.querySelectorAll('.buttonLift');
        // button1.addEventListener("click", function(){
        //     // moveLift();
        //     console.log("button clicked", button1.id, button1.parentElement.parentElement,mainbuttonlift);
        // });

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

    //adding a status initially set to free
    liftDiv.setAttribute('status', 'idle');

    let gates = document.createElement('div');
    gates.className = 'gates';
    gates.setAttribute('id','gates');

    let gate1 = document.createElement('div');
    gate1.className = 'gate1';
    gates.appendChild(gate1);

    // let gate2 = document.createElement('div');
    // gate2.className = 'gate2';
    // gates.appendChild(gate2);

    // console.log(gates.children);
    // console.log(gates.firstChild);
    // console.log(gate1[0].tagName);
    // console.log(gate1.offsetWidth);
    // console.log("Before", gate1.className);  
    // console.log(gates.children[0]); 
    // console.log(gates.children[1]); 
    // console.log(gate1);
    //logic to open and close gates
    // setTimeout(() => {
    //     gate1.style.width = '3px';
    //     gate2.style.width = '0px';
    //     liftDiv.classList.add("move");
    // }, 1000);
    
    liftDiv.appendChild(gates);
    mainLift.appendChild(liftDiv);
    // let floorDiv = document.querySelector('.floorDiv');
    // function moveLift() {
    //     console.log(floorDiv);
    //     // liftDiv.classList.add("move");
    //     // console.log('function is working');
    // }
    // console.log(gates.children[0]);
    // console.log(gates.children[1]);

    
}

const mainbuttonlift = document.querySelectorAll('.buttonLift');
const lastBox = mainbuttonlift[mainbuttonlift.length - 1];
// console.log(mainbuttonlift[0]);
// console.log(mainbuttonlift.length);
// console.log(lastBox);
lastBox.appendChild(mainLift);
// let button1 = document.querySelectorAll('.up');
// console.log(button1);
// console.log(allLift);
let allLift = document.querySelectorAll('.lift');
let up = document.querySelectorAll('.up');
let down = document.querySelectorAll('.down');
// console.log(allLift);

let oldFloor = [];
for(let j=0;j<allLift.length;j++){
    oldFloor.push(1);
}
// console.log(oldFloor);

up.forEach((e,i)=>{
    e.addEventListener("click", ()=>{
        let currentFloorValue = (up.length - i);
        for(let i=0;i<allLift.length;i++){
            // console.log(mainLift);
            // let currentLift = document.getElementById("lift${j}");
            // console.log(currentLift);
            // mainLift[i].style.transform = `translateY(${-100 * (currentFloorValue - 1)}px)`;
            // console.log(allLift[0]);
            let currentMovingLift = allLift[i];
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
        let currentFloorValue = (up.length - i);
        for(let i=0;i<allLift.length;i++){
            // console.log(mainLift);
            // let currentLift = document.getElementById("lift${j}");
            // console.log(currentLift);
            // mainLift[i].style.transform = `translateY(${-100 * (currentFloorValue - 1)}px)`;
            // console.log(allLift[0]);
            let currentMovingLift = allLift[i];
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
    console.log("Current Lift",currentLiftNo);
    console.log("Current Floor",floorNo);
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
    // console.log(gates);
    let gate1 = document.querySelector('.gate1');
    // let gate2 = document.querySelector('.gate2');

    setTimeout(()=>{
        gates.children[0].style.width = '3px';
        // gates.children[1].style.width = '3px';
    },1000);
    setTimeout(()=>{
        gates.children[0].style.width = '50px';
        // gates.children[1].style.width = '25px';
    },3000);
}

// console.log(up);
// let lift1 =document.querySelector('#lift0');
// console.log(lift1);
// lift1.style.transitionDuration  = '4s';
// up.forEach((e,i) => {
//     e.addEventListener("click", ()=> {
//         // let currentFloorValue = (up.length - i);
//         // console.log(i);
//         // console.log(currentFloorValue);
//         // console.log(lift1);
//         // lift1.style.transform = `translateY(${-100 * (currentFloorValue - 1)}px)`;
//         // lift1.style.transitionDuration  = '2.5s';
//         // let gates = lift1.firstChild;
//         // console.log(gates.children[0]);
//         //gates opening
//         // setTimeout(()=>{
//         //     gates.children[0].style.width='3px';
//         //     gates.children[1].style.width='3px';
//         // },1000);

//         // //gates close
//         // setTimeout(() => {
//         //     gates.children[0].style.width = '25px';
//         //     gates.children[1].style.width = '25px';
//         // }, 3500)
//         movelift();
//     })
// })
// down.forEach((e,i)=>{
//     e.addEventListener("click", ()=> {
//         // console.log('button clicked', i);
//         // let currentFloorValue = (up.length - i);
//         // lift1.style.transform = `translateY(${-100 * (currentFloorValue - 1)}px)`;
//         // lift1.style.transitionDuration  = '2.5s';
//         movelift();
//     })
// })

// // up.forEach((e,i)=>{
// //     e.addEventListener("click", ()=>{
// //     console.log(i);
// //     })
// // })
// }
// function movelift(){
//     let up = document.querySelectorAll('.up');
//     let down = document.querySelectorAll('.down');
//     let currentFloorValue = (up.length - 0);
//     lift1.style.transform = lift1.style.transform = `translateY(${-100 * (currentFloorValue - 1)}px)`;
//     setTimeout(()=>{
//         gates.children[0].style.width='3px';
//         gates.children[1].style.width='3px';
//     },1000);

//     //gates close
//     setTimeout(() => {
//         gates.children[0].style.width = '25px';
//         gates.children[1].style.width = '25px';
//     }, 3500)
// }
}
