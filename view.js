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


function listForm(model){
    const {input} = model
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

function getTable(model){
    const values_1 = []
    var cantidad = model[0].cant
    console.log(cantidad)
    for (var i = 0;i<cantidad;i++){
        var name = model[i].name
        var temp = model[i].temp
        var min = model[i].min
        var max = model[i].max
        var list_1 = {'name': name, 'temp': temp, 'min': min, 'max': max}
        values_1.push(list_1)
    }
    return values_1
}
function inputForm(model){
    //const{input} = update
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

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
module.exports = {
    view,
    listForm,
    inputForm
}