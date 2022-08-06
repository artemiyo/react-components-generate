module.exports = (
    componentName
) => `import ${componentName} from './${componentName}';

export { ${componentName} }
`
