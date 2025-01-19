let list = document.querySelectorAll('.item')
let next = document.getElementById ('next')
let prev = document.getElementById ('prev')

let count = list.length // 3
let active = 0

next.onclick = () => {
    let active0old = document.querySelector ('.active')
    active0old.classList.remove('active')
    console.log('next')


    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')
}


prev.onclick = () => {
    let active0old = document.querySelector ('.active')
        active0old.classList.remove('active')
    console.log("prev")

    active = active <= 0 ? count -1 : active - 1
    list[active].classList.add('active')
}

