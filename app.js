const {getTitle} = require('./view')
const {view} = require('./view')
const {printTable} = require('console-table-printer')

function app(state, update, view){
    const {model,currentView} = state
    const {title, table} = currentView
    //console.clear()
    console.log(title)
    printTable(table)
}

module.exports = {
    app
}