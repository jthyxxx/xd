const container = document.querySelector('.container')
const addRow = document.querySelector('button')
const tbody = document.querySelector('tbody')
const popLast = document.querySelector('.popbutton')
let newRow;

addRow.addEventListener('click', () => {
    newRow = document.createElement('tr')
    tbody.appendChild(newRow)
    for(let i = 0; i < 4; i++){
        let info = prompt('enter')
        let columns = document.createElement('td')
        columns.innerHTML = info
        newRow.appendChild(columns)
    }
})

 popLast.addEventListener('click', () => {
    tbody.removeChild(tbody.lastChild)
})
 