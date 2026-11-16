function check(){
    let userInput = document.getElementById('input').value
    let displayArea = document.getElementById('display')

    if (userInput == ''){
        alert('Input your Age')
    }

    let age = Number(userInput)

    if (age >= 18){
        displayArea.innerHTML = `<p>You are eligible</p>`
    }else if (age < 18){
        displayArea.innerHTML = `<p>Grow up</p>`
    }
}