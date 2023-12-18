console.log("no init params")

window.codioIDE.menu.addItem(
  {id: 'education'},
  {id: 'customId', title: 'Custom button!!', callback: () => console.log('custom btn clicked')}
)
