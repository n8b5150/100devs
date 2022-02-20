const menuArrow = document.querySelectorAll('.menuExpand')
// const menuItems = document.querySelectorAll('.menuLinkList')

Array.from(menuArrow).forEach(element => element.addEventListener('click', expandMenu))

// document.querySelector('.menuExpand').addEventListener('click',expandMenu)

function expandMenu(click) {
    click.target.classList.toggle('rotateArrow')
    click.target.nextElementSibling.classList.toggle('hide')
}

// document.addEventListener("click", e => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
//     let currentDropdown
//     if (isDropdownButton) {
//       currentDropdown = e.target.closest("[data-dropdown]")
//       currentDropdown.classList.toggle("active")
//     }
  
//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//       if (dropdown === currentDropdown) return
//       dropdown.classList.remove("active")
//     })
//   })