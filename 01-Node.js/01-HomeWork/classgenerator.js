const fs = require('fs')

class ClassGenerator {
    classString = '';
    params = process.argv.splice(2, process.argv.length - 1);
    className;
    constructor(className) {
        this.className = className;
    }
    Generate() {
        for (const p of this.params) {
            if (p.startsWith('class=')) {
                this.className = p.split('=')[1];
                this.classString += `class ${this.className}{\n`
            }
            if (p == '-ctor') {
                this.classString += `constructor(){\n}\n`
            } else if (p.startsWith('method='))
                this.classString += `${p.split('method=')[1]}(){\n}\n`
        }

        this.classString += '}\n'

        this.SaveClass();
    }

    SaveClass = function() {
        fs.writeFile(`${this.className}.js`, this.classString, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    }
}

module.exports = ClassGenerator;