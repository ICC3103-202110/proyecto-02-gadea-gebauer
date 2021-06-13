const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')



async function app(state, update, view){
    while(true){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    
    console.log(title)
    printTable(table)
    const {answer} = await listForm(model)
    
    const {name} = await inputForm(state)
    
    const updatedModel = update(answer, name, model)
    

    state = {
        ...state,
        model: updatedModel,
        currentView: view(updatedModel)

    }}
}

module.exports = {
    app
}