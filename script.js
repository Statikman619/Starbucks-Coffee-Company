const btn = document.getElementById('menu-btn')
cons nav = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)