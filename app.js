const {inputForm, listForm, locations_list} = require('./view')
const {printTable} = require('console-table-printer')

const {update,update_delete} = require('./update')

async function app(state, update, view){

    while(true){
    const {model, currentView} = state
    const {title, table} = currentView
    //console.clear()
    
    console.log(title)
    printTable(table)
    
    
    const {answer} = await listForm(model)
    
   
    if(answer == "Add City"){
        const {name} = await inputForm(state)
        const updatedModel = update(answer,name,model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
    
        }
    }
    
   else if(answer == "Delete City"){

        const {answer2} = await locations_list(model)
        const updatedModel = update(answer,answer2,model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
    
        }

    }
    


 }
}

module.exports = {
    app
}