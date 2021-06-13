function update(answer,location, model){
    if(answer == "Add City"){
        return {
            ...model,
            name: location
        }
    }



}
module.exports = {
    update
}