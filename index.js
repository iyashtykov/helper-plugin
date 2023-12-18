console.log("all")

window.codioIDE.menu.addItem(
  {id: 'customId', title: 'Custom button!!', callback: () => console.log('custom btn clicked')}
)
