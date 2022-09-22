// BOOLEAN
const isLegalAge = true
console.log(isLegalAge)
console.log(isLegalAge.toString())


// NUMBER
// Pratimas1
// const milkPrice = 3.5
// if (Number.isInteger(milkPrice)) {
//     alert ('Nerekia cent7')
// } else {
//     alert('Prireiks')
// }
//Pratimas2
// const milkPrice = 3
// const newPrice = milkPrice.toFixed(2)
// if (Number.isInteger(milkPrice)) {
//     alert (`Nerekia cent7, kaina yra ${newPrice}`)
// } else {
//     alert(`Prireiks, kaina yra ${newPrice}`)
// }
//Pratimas3
// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const price = Number(document.getElementById('price').value)
//     const petrol = Number(document.getElementById('petrol').value)

//     const totalPrice = price * petrol
//     const totalPriceDisplay = document.querySelector('h1')
//     totalPriceDisplay.textContent = totalPrice.toFixed(2)
//     document.body.append(totalPriceDisplay)
// })


// STRING
// Pratimas 1
// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const myName = document.getElementById('name').value
//     const myNumber = Number(document.getElementById('myNumber').value)

//     if (Number.isInteger(myNumber)) {
//         const h1 = document.createElement('h1')
//         h1.textContent = myName.repeat(myNumber)
//         document.body.append(h1)
//     } else {
//         alert('skaicius nera sveikas')
//     }
// })

// Pratimas 2
// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()

//     const myName = document.getElementById('myName').value.trim()
//     alert(myName.length)
// })

// Pratimas 3
// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()

//     const myName = document.getElementById('fullName').value.trim().split(" ")
    
//     const name = document.createElement('h1')
//     name.textContent = myName[0]

//     const surname = document.createElement('h1')
//     surname.textContent = myName[1]

//     document.body.append(name, surname)
// })

// Pratimas 4
document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
    
        const myName = document.getElementById('fullName').value.trim()

        const name = document.createElement('h1')
        name.textContent = myName.split(" ")[0]

        const surname = document.createElement('h1')
        //Vardą+Pavardę paėmus, pakeičiame vardą - tarpeliu (ir nutriname vieną tarpelį).
        //Paliekame visą kitą.
        surname.textContent = myName.replace(name, "").slice(1)
        document.body.append(name, surname)
})