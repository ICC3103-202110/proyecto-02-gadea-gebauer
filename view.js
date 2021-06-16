const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Weather app',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}


async function listForm(model){
    const {input} = await model
    const message = 'Select action: '
    const choices = ['Add City', 'Update City','Delete City']
    return inquirer.prompt([{
        name: 'answer',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    }])

}

async function getTable(model){
    values_1 = []
    const cantidad = await model[0].cant
    for (var i = 0;i<cantidad;i++){
        var name = await model[i+1].name
        const temp = await model[i+1].temp
        const min = await model[i+1].min
        const max = await model[i+1].max
        const list_1 = await {'name': name, 'temp': temp, 'min': min, 'max': max}
        values_1.push(await list_1)
    }
    return await values_1
}

async function locations_list(model){
    const {input} = await model
    const choices = []
    const cantidad = await model[0].cant
    for (var i = 0;i<await cantidad;i++){
        const name = await model[i+1].name
        await choices.push(await name)
        
    }
    return  await inquirer.prompt([{
        name: 'answer2',
        message: "List of locations",
        type: 'list',
        default: input,
        choices: choices
    }])

}

async function inputForm(model){
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Location?',
            validate: function(value){
                return true
            }
        }
        
    ])
}

async function view(model){
    table_1=await getTable(await model)
    return {
        title: await getTitle(),
        table: await table_1
    }
}
module.exports = {
    view,
    listForm,
    inputForm,
    locations_list
}