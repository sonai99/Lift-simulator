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
        
        document.querySelector('.second-page').appendChild(floorDiv);

        if(i==floorInput){
            button1.style.display ='none';
        }
        if(i==1){
            button2.style.display='none'
        }
    }


let mainLift = document.createElement('div');
mainLift.className = 'mainLift';

for(let j=1;j<liftInput;j++) {
    let liftDiv = document.createElement('div');
    liftDiv.className = 'lift';
    liftDiv.setAttribute('id', `lift${j}`);

    //adding a flag initially set to free
    liftDiv.setAttribute('flag', 'free');

    let gates = document.createElement('div');
    gates.className = 'gates';
    gates.setAttribute('id','gates');

    let gate1 = document.createElement('div');
    gate1.className = 'gate1';
    gates.appendChild(gate1);

    let gate2 = document.createElement('div');
    gate2.className = 'gate2';
    gates.appendChild(gate2);

    liftDiv.appendChild(gates);
    mainLift.appendChild(liftDiv);
}

const mainbuttonlift = document.querySelectorAll('.buttonLift');
const lastBox = mainbuttonlift[mainbuttonlift.length - 1];
// console.log(mainbuttonlift.length);
// console.log(lastBox);
lastBox.appendChild(mainLift);













}