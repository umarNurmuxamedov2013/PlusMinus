let buttonPlus = document.getElementById("plus");
let buttonMinus = document.getElementById("minus")
let wrapper = document.getElementById("wrapper")
let wrapper2 = document.getElementById("wrapper2")
let number = document.getElementById("numberText")
let return = document.getElementById("return")
let a = 0

buttonPlus.style.width = '100px'
buttonPlus.style.height = '70px'
buttonPlus.style.background = 'green'
buttonPlus.style.border = 'none'
buttonPlus.style.borderRadius = '15px'
buttonPlus.style.fontSize = '40px'
buttonPlus.style.color = 'white'
wrapper.style.marginTop = '50vh'
wrapper.style.alignItems = 'center'
wrapper2.style.gap = '80px'
wrapper2.style.display = 'flex'
wrapper2.style.justifyContent = 'center'
buttonMinus.style.width = '100px'
buttonMinus.style.height = '70px'
buttonMinus.style.background = 'red'
buttonMinus.style.border = 'none'
buttonMinus.style.borderRadius = '15px'
buttonMinus.style.fontSize = '40px'
buttonMinus.style.color = 'white'

buttonPlus.addEventListener('click',()=>{
    a++
    number.innerHTML = a;
})

buttonMinus.addEventListener("click" , ()=>{
    a--
    number.innerHTML = a;
})