const toggle_btn = document.querySelector('.toggle-btn');
const menu = document.querySelector('header .list')

toggle_btn.addEventListener('click', () => {
    toggle_btn.classList.toggle('active')
    menu.classList.toggle('active')
})