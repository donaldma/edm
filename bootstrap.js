const shell = require('shelljs')

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

shell.cp('-R', './.env.example', './.env')
shell.rm('-rf', '.git')
shell.exec('git init')
shell.exec('npm i -g knex')
shell.cd('./client')
shell.exec('npm install')
shell.echo('Bootstrap complete')
shell.exit(0)
