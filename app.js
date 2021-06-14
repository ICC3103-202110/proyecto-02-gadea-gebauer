const {inputForm, listForm, locations_list} = require('./view')
const {printTable} = require('console-table-printer')



async function app(state, update, view){
    while(true){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    
    console.log(title)
    printTable(table)
    
    var type = 22
    const {answer} = await listForm(model)
    
   
    
    const {name} = await inputForm(state)
    
    
    

    const {answer2} = await locations_list(model)
    
    
    const updatedModel = update(answer,name,model)
    
    
    

    state = {
        ...state,
        model: updatedModel,
        currentView: view(updatedModel)

    }}
}

module.exports = {
    app
}