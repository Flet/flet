
var chalk = require('chalk')
var boxen = require('boxen')
var gradientString = require('gradient-string')
var widestLine  = require('widest-line')

var name = 'Dan Flettre'
var handle = 'Flet'
var title = 'Principal Applications Engineer'
var work = 'Coffee & Bagel Brands (coffeeandbagels.com)'
var twitter = 'https://twitter.com/flettre'
var github = 'https://github.com/Flet'
var email = 'flettre@gmail.com'
var card = 'npx flet'

let outputText = chalk`{bold {white ${name} / ${handle}}}
{bold {green ${title}}}
{bold {green ${work}}}

{bold {white Twitter:}} {blueBright ${twitter}}
 {bold {white GitHub:}} {blueBright ${github}}
  {bold {white Email:}} {blueBright ${email}}

   {bold {white Card:}} {bold {yellowBright ${card}}}`

var opts = {
    borderStyle: 'double',
    padding: 1, 
    margin: 1
}

var card = boxen(outputText, opts)

// gettin' fancy with a gradient boxen
var width = widestLine(card)
card = gradientString.retro(card.slice(0, width + 1)) + card.slice(width+1)
card = card.slice(0, -1 * width + 1) + gradientString.retro(card.slice(-1 * width + 1)) 

card = card.replace(/\n\s\s\s║/g, '\n' + chalk.hex('#3f51b1')('   ║'))
card = card.replace(/║\n/g, chalk.hex('#f7c978')('║ \n'))

module.exports = card
