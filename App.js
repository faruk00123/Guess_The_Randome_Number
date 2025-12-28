const Value = document.getElementById('value')

let randomNumber = Math.ceil(Math.random()*20)
let RandomValue =  Value.textContent = randomNumber
console.log(RandomValue)

const InputFild = document.querySelector('#inputFild')


const CleckBtn = document.getElementById('cleckBtn')
const Cruct = document.getElementById('cruct')
const Result = document.getElementById('result')
const Attampt = document.getElementById('attampt')
const Maxatm = document.getElementById('maxatm')
const Again = document.getElementById('again')

Again.addEventListener('click',()=>{
    location.reload();
})

let MaxatmCounte = 7;
Maxatm.textContent = MaxatmCounte;

let AttamptCounte = 0;
Attampt.textContent = AttamptCounte;
let change = 7;

CleckBtn.addEventListener('click', ()=>{
    let InputValue = InputFild.value;
    let convateNumber = parseFloat(InputValue)
    
    MaxatmCounte--;
    Maxatm.textContent = MaxatmCounte;

    AttamptCounte++;
    Attampt.textContent = AttamptCounte;

    if(randomNumber === convateNumber){
        Result.style.display = 'block'
        Result.innerText = '🥇 Correct Number'
        Cruct.style.display = 'none'
        Value.style.display = 'block'
        Value.textContent = RandomValue
    }
    else if(randomNumber > convateNumber){
        Cruct.innerText = '😒 Its Low Number'
        Result.style.display = 'none'
        Value.style.display = 'block'
        Value.textContent = '❌'
    }
    else if(randomNumber < convateNumber){
        Cruct.innerText = '🥱 Its High Number'
        Value.style.display = 'block'
        Value.textContent = '❌'
        Result.style.display = 'none'
    }
    else if(AttamptCounte === change){
       alert("Your failed! Try again")
       location.reload();
    }
})