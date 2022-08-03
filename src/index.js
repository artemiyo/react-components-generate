const { program } = require('commander');
const fs = require('fs-extra');

program
    .command('<path> <name>', 'Path and component')
    .action((str, opt) => {
        const [path, componentName] = opt.args;
        const files =  [`${componentName}.tsx`, `${componentName}.module.css`, 'index.ts'];
        const pathToComponent = path === 'components' ? `src/components` : path

        fs.ensureDirSync(`${pathToComponent}/${componentName}`);
        files.forEach(file => {
           fs.ensureFileSync(`${pathToComponent}/${componentName}/${file}`)
        })
    })

program.parse(process.argv);
