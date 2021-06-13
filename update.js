  
function update(answer,name,model){
    if (answer == "Add City"){
        return{
            ...model,
            name: name
        }
    }



}
module.exports = {
    update
}