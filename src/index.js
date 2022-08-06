const { program } = require('commander')
const fs = require('fs')
const { Chalk } = require('chalk')
const chalk = new Chalk()

program
    .command('<path> <name>', 'Path to component folder and component name')
    .option('--withTest [type]', 'Create test file for component', false)
    .action(async (str, opt) => {
        const [path, componentName] = opt.args
        const pathToComponents = path === 'components' ? `src/components` : path
        const pathForStoreComponent = `${pathToComponents}/${componentName}`
        const exportFile = require('./templates/exportFile')(componentName)
        const componentTemplate = require('./templates/component')(
            componentName
        )

        const componentFiles = [
            {
                path: `${pathForStoreComponent}/index.ts`,
                template: exportFile,
            },
            {
                path: `${pathForStoreComponent}/${componentName}.tsx`,
                template: componentTemplate,
            },
            {
                path: `${pathForStoreComponent}/${componentName}.module.css`,
                template: '',
            },
        ]

        fs.readdir(pathForStoreComponent, (err, files) => {
            if (!files) {
                fs.mkdir(pathForStoreComponent, { recursive: true }, () => {
                    componentFiles.forEach(({ path, template }) => {
                        fs.writeFile(path, template, (err) => {
                            console.log(err);
                        })
                    })
                })
            } else {
                console.log(
                    chalk.red(
                        `Component with name ${chalk.underline(
                            componentName
                        )} is already exists!`
                    )
                )
                process.exit(1)
            }
        })
    })

program.parse(process.argv)
