const axios= require('axios')
const url='http://api.openweathermap.org/data/2.5/weather?q='
const key='20357abb535e856115b64311202ebe9d'

const getName =async function (){
    const resPost= await axios(`${url}santiago&appid=${key}`)
    const city = resPost.data.name
    //console.log(city)
    return city
}
getName()
//const a= getName().then(val=>a=val)

async function convertir(){
    await getName().then(val=>console.log(val))

}

initModel={
    name: convertir()
}

module.exports = {
    initModel
}