module.exports = (componentName) => `import React from 'react';
import style from './${componentName}.module.css';

interface I${componentName}Props {}

const ${componentName} = (props: I${componentName}Props) => {
    return <div>${componentName}</div>
}

export default ${componentName}
`
