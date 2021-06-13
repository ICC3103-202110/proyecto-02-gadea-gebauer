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
    const {name,temp,max,min} = model
    return [{
        'name': name, 'temp': temp , 'max': max, 'min': min
    }]
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