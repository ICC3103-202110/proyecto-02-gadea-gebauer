const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')



async function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    
    console.log(title)
    printTable(table)
    const {answer} = await listForm(model)
}

module.exports = {
    app
}