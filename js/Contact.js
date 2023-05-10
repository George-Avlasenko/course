
const toggleBth = document.querySelector('.toggle_bth')
const toggleBthIcon = document.querySelector('.toggle_bth i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBth.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBthIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}