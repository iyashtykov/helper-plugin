console.log("all")

const MENU_ID = 'custom_menu_id'
const OPEN_MODAL_ID = 'open_modal_id'
const HIDE_MODAL_ID = 'hide_modal_id'

const addMenuItem = (parentDescriptor, item) => {
  window.codioIDE.menu.addItem(parentDescriptor, item)
}

const updateMenuItem = (itemDescriptor, item) => {
  window.codioIDE.menu.updateItem(itemDescriptor, item)
}

const removeMenuItem = (itemDescriptor) => {
  window.codioIDE.menu.removeItem(itemDescriptor)
}

const style = `
    width: 500px;
    height: 100px;
    z-index: 10000;
    position: absolute;
    left: 600px;
    top: 100px;
    background-color: white;
    border: 2px solid red;
    padding: 20px;
`
const visibility = `
    visibility: visible;
`
const invisibility = `
    visibility: hidden;
`

const initFunc = () => {
  console.log('init!!!')
  const modal = document.createElement('div')
  modal.id = 'customModalId'
  modal.style = style
  const title = document.createElement('h2')
  title.innerHTML = 'Modal title'
  modal.append(title)
  const buttonAdd = document.createElement('button')
  buttonAdd.type = 'button'
  buttonAdd.innerHTML = 'Add custom menu item to Tools'
  const changeButtonBgCallback = () => {
    buttonAdd.style = `background-color: #${Math.floor(Math.random()*16777215).toString(16)}`
  }
  buttonAdd.onclick = () => {
    addMenuItem({title: 'Tools'}, {id: MENU_ID, title: 'Change button bg', callback: changeButtonBgCallback})
  }
  modal.append(buttonAdd)
  const buttonRename = document.createElement('button')
  buttonRename.type = 'button'
  buttonRename.innerHTML = 'Rename custom menu item'
  buttonRename.onclick = () => updateMenuItem({id: MENU_ID}, {title: 'new custom title'})
  modal.append(buttonRename)
  const buttonDelete = document.createElement('button')
  buttonDelete.type = 'button'
  buttonDelete.innerHTML = 'Delete custom menu item'
  buttonDelete.onclick = () => removeMenuItem({id: MENU_ID})
  modal.append(buttonDelete)
  document.querySelector('body').append(modal)
  const showModalCallback = () => {
    modal.style = visibility
    modal.style = style
  }
  const hideModalCallback = () => {
    modal.style = invisibility
  }
  addMenuItem({title: 'Codio'}, {id: OPEN_MODAL_ID, title: 'Show modal', callback: showModalCallback})
  addMenuItem({title: 'Codio'}, {id: HIDE_MODAL_ID, title: 'Hide modal', callback: hideModalCallback})
}

setTimeout(initFunc, 3000)

