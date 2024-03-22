//creat array to sotre names

const namesArray =[]

function addName() {
    const nameInput= document.getElementById('nameInput') //storing name input element
    const name = nameInput.value.trim() //get trimmed value of the inout box and store in the bar (Kilgore can't type)

    namesArray.push(name)//add the name at the end of the Array (if it works)
    displayNames()// Call the  displayNames function to update the list

    nameInput.value=' ' // clear the input field after adding the name
    if (name === null) {
        document.getElementById('response-text').innerText = 'Enater a name, please and thank you'
        document.getElementById('response-text').classList = 'display text-danger'
        document.getElementById('response-image').src = '#BADIMAGE' //fix this shit later//
        return
    }
}
function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '' //clear out the previous list items

    for (let i = 0; i < namesAraay.length; i++){
        const name = namesArray[i]

        const li =document.createElement('li')
        li.className='list-group-item'
        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)
    }
}
document.getElementById('addNameBtn').addEventListener('click', addName)