const axios= require('axios')
const url='http://api.openweathermap.org/data/2.5/weather?q='
const key='20357abb535e856115b64311202ebe9d'  

async function getData(city){
    const resPost = await axios.get(`${url}${city}&appid=${key}`)
    const data = resPost.data
    const main = data.main
    const sys = data.sys
    const country = sys.country
    const name =data.name
    const temp= (main.temp - 273.15).toFixed(2)
    const max= (main.temp_max - 273.15).toFixed(2)
    const min= (main.temp_min - 273.15).toFixed(2)
    const lista=await {'name':`${name},${country}`, 'temp':`${temp} °C`, 'max':`${max} °C`, 'min':`${min} °C`}
    return await lista   
}

async function update(answer,name,model){
    if (answer == "Add City"){
        const amount = await model[0].cant + 1
        model[0].cant = await amount
        const list = await getData(name)
        model.push(await list)
    }

    else if(answer == "Delete City"){
        model=await update_delete(await model, await name)
    }
    else if(answer == "Update City"){
        model=await update_city(await model, await name)
    }
    return await model
    


}

async function update_delete(model,name2){
    const names = await model
    const amount1 = await model[0].cant

    for(var i = 0; i<amount1;i++){
        if(names[i].name == name2){
            break

        }

    }
    await model.splice(i,1)
    
    
    const amount = await model[0].cant - 1
    model[0].cant = await amount
    return await model

}

async function update_city(model,name2){
    const amount1 = await model[0].cant
    for(var i = 0; i<amount1;i++){
        if(await model[i].name == name2){
            model[i] = await getData(await name2)
            break
        }
    }
    return await model
}

module.exports = {
    update,
    update_delete
}