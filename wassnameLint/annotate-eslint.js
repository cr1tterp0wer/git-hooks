/**
 * This file generates an annotated eslint from the docs.
 *
 * It also assumes the eslint repo has been cloned into ./vendor e.g. run:
 * - `git clone https://github.com/eslint/eslint.git vendor/eslint`
 * - `git clone https://github.com/eslint/eslint.github.io.git vendor/eslint.github.io`
 *
 * @website https://gist.github.com/wassname/4693303388396c5f074b10865a969b43
 * @license: MIT
 **/
'use strict';

var fs = require('fs');

var rulesDoc = fs.readFileSync('./vendor/eslint.github.io/docs/rules/README.md', 'utf8')
var configDoc = fs.readFileSync('./vendor/eslint/docs/user-guide/configuring.md', 'utf8')
var version = JSON.parse(fs.readFileSync('./vendor/eslint/package.json')).version;
var defaults = require('./vendor/eslint/conf/eslint-recommended.js')


function toMultiLineComment(s) {
  return s.replace(/\n/g, '\n * ')
    .replace('#', ' * ')
    .replace(/^/, '/**\n')
    .replace(/$/, '\n**//')
}

function align(s, n) {
  return s.split('\n')
    .map(ss => ' '.repeat(n) + ss)
    .join('\n').slice(0, -1) + '\n'
}


var output = `/**
 * eslint.recommended (annotated)
 * ================
 * Annotated defaults based on eslint.recommended
 *
 * @author: wassname
 * @license: MIT
 * @website https://gist.github.com/wassname/4693303388396c5f074b10865a969b43
 * @date ${new Date().toJSON().slice(0,-8)}
 * @eslint-version: ${version}
 */

module.exports = {
    "plugins": [
        // e.g. "react"
    ],
    "globals": {
        // e.g "jquery": true,
    },
`


function parseRules(rulesDoc, output, defaults) {

  var s = rulesDoc.split('##')
  var header = s[0]
  var sections = s.slice(1);

  output += '    "rules": {\n'
  output += align(toMultiLineComment(header), 8)

  sections.forEach(section => {
    var subheader = section.slice(0, section.indexOf('*'))
    var subrules = section.split('* ')
      .slice(1)
    output += align(toMultiLineComment(subheader), 8)

    subrules.forEach(rule => {
      rule = rule.replace('\n', '')
      var s = rule.split(': ')
      var link = s[0] // .e.g "[comma-dangle](comma-dangle.md): require or disallow trailing commas (recommended)\n"
      var comment = s[1]
      var s = link.match(/\[(.+)\]\((.+)\)/)
      var link2 = s[0]
      var name = s[1]
      var ruleDoc = s[2]

      comment = comment.replace('`', "'")

      var val = defaults.rules[name] !== undefined ? defaults.rules[name] : 'off'

      output += `        "${name}": ${JSON.stringify(val)}, // ${comment}\n`
    })
  })

  output += '    },\n'

  return output
}


output = parseRules(rulesDoc, output, defaults)



function parseEnvs(configDoc, output) {

  var parserOptionsDoc = configDoc.split('##')[1]
  var parserHead = parserOptionsDoc.split('* ')[0]
  var parserOpts = parserOptionsDoc.split('\n').filter(s => s.indexOf('* ') !== -1).join('\n')
  var opts = parserOpts.split(/(\n|^)\* /).filter(s => s.replace('\n', ''))

  output += '    "parserOpts":{\n'
  output += align(toMultiLineComment(parserHead), 8)
  opts.forEach(opt => { // e.g. "`ecmaVersion` - set to 3, 5 (default), 6, or 7 to specify the version of ECMAScript you want to use."
    var mainOpt = opt.split('\n    * ')[0]
    var subOpts = opt.split('\n    * ').slice(1)
    var toss = mainOpt.match(/`(.+)` - (.+)/)[0]
    var name = mainOpt.match(/`(.+)` - (.+)/)[1]
    var comment = mainOpt.match(/`(.+)` - (.+)/)[2]
    output += `        // ${name}: undefined, // ${comment}\n`
    if (subOpts.length) output += '        // {\n'
    subOpts.forEach(subOpt => {
      var s = subOpt.match(/`(.+)` - (.+)/)
      var toss = s[0]
      var name = s[1]
      var comment = s[2]
      output += `            // ${name}: undefined, // ${comment}\n`

    })
    if (subOpts.length) output += '        // }\n'
  })
  output += '    },\n'


  var envHeader = configDoc.split('##')[3].split('*')[0]
  var envOptions = configDoc.split('##')[3].split('\n').filter(s => s.indexOf('* `') !== -1)

  output += '    "env": {\n'
  output += align(toMultiLineComment(envHeader), 8)
  envOptions.forEach(opt => { // e.g. "* 'browser' - browser global variables."
    var s = opt.match(/\* `(.+)` - (.+)/)
    // var [toss, name, comment] = opt.match(/\* `(.+)` - (.+)/)
    var toss = s[0]
    var name = s[1]
    var comment = s[2]
    output += `        "${name}": "false", // ${comment}\n`
  })

  output += '    },\n'

  return output
}

output = parseEnvs(configDoc, output)

output += '}\n'

fs.writeFileSync('dist/.eslintrc.js', output)