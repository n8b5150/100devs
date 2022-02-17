const menuArrow = document.querySelectorAll('.menuExpand')
const menuItems = document.querySelectorAll('.menuLinkList')

Array.from(menuArrow).forEach(element => element.addEventListener('click', expandMenu))

// document.querySelector('.menuExpand').addEventListener('click',expandMenu)

function expandMenu(click) {
    click.target.classList.toggle('rotateArrow')
    // This doesn't work
    document.querySelector('.menuLinkList').classList.toggle('hide')
}