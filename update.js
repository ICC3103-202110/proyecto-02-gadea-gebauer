  
function update(answer,name,model){
    
    if (answer == "Add City"){
        var cantidad = model[0].cant + 1
        model[0].cant = cantidad
        const list = {'name': name, 'temp': 0, 'max': 0, 'min': 0}
        model.push(list)
    }
    else{
        var cantidad = model[0].cant - 1
        model[0].cant = cantidad
        
    }
    return model



}

function update_delete(){
    

}

module.exports = {
    update,
    update_delete
}