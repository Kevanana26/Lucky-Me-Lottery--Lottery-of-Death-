//creat array to sotre names

const namesArray =[]

function addName() {
    const nameInput= document.getElementById('nameInput') //storing name input element
    const name = nameInput.value.trim() //get trimmed value of the inout box and store in the bar (Kilgore can't type)

    namesArray.push(name)//add the name at the end of the Array (if it works)
    displayNames()// Call the  displayNames function to update the list

    nameInput.value=' ' // clear the input field after adding the name
    if (!name.trim()) {
        alert('Buddy, please enter an actual question that can be answered')
        return
    }
}