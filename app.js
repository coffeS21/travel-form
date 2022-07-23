const travelForm = document.boardingPass

const createBoardingPass = ()=>{
    const destination = document.getElementById("location").value
    const fName = travelForm.firstName.value
    const lName = travelForm.lastName.value
    const age = travelForm.age.value
    const passangerDiscription = travelForm.passanger.value
    const food = []
    
    for(let i = 0; i < travelForm.dite.length; i++){
        if(travelForm.dite[i].checked){
            food.push(travelForm.dite[i].value)
        }
    }
    console.log(checkedInputs)

   alert(   `first name: ${fName}
            last name: ${lName}
            age: ${age}
            landing: ${destination}
            discription: ${passangerDiscription}
            dite: ${food}`
            )

}
travelForm.addEventListener("submit", e =>{
    e.preventDefault()
    createBoardingPass()
    
})
