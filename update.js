  
function update(answer,name,model){
    
    if (answer == "Add City"){
        var cantidad = model[0].cant + 1
        model[0].cant = cantidad
        const list = {'name': name, 'temp': 0, 'max': 0, 'min': 0}
        model.push(list)
    }

    else if(answer == "Delete City"){
        update_delete(model, name)
    }
    return model



}

function update_delete(model,name2){
    const names = model
    for(var i = 0; i<model[0].cant;i++){
        if(names[i].name == name2){
            break

        }

    }
    let pos = model.splice(i,1)
    
    
    var cantidad = model[0].cant - 1
    model[0].cant = cantidad


}

module.exports = {
    update,
    update_delete
}