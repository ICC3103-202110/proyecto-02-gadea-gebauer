const {inputForm, listForm, locations_list} = require('./view')
const {printTable} = require('console-table-printer')

const {update,update_delete} = require('./update')

async function app(state, update, view){

    while(true){
    const {model, currentView} = await state
    const {title, table} = await currentView
    console.clear()
    
    console.log(title)
    const amount =await model[0].cant
    if (await amount == 0){
        console.log('NO CITYES')
    }else{
        printTable(await table)
    }

    
    const {answer} = await listForm(model)
    
   
    if(answer == "Add City"){
        const {name} = await inputForm(await state)
        const updatedModel = await update(await answer,await name,await model)
        state = await{
            ...state,
            model: await updatedModel,
            currentView: await view(await updatedModel)
    
        }
    }

   else if(answer == "Delete City"){
        const amount1 =await model[0].cant
        if(await amount1!=0){
            const {answer2} = await locations_list(await model)
            const updatedModel = await update(await answer,await answer2,await model)
            state = await {
                ...state,
                model: await updatedModel,
                currentView: await view(await updatedModel)
        
            }
        }

    }
    else if(answer == "Update City"){
        const amount1 =await model[0].cant
        if(await amount1!=0){
            const {answer2} = await locations_list(await model)
            const updatedModel = await update(await answer,await answer2,await model)
            state = await {
                ...state,
                model: await updatedModel,
                currentView: await view(await updatedModel)
        
            }
        }   
    }
    


}
}

module.exports = {
    app
}