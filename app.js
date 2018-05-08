var fs = require('fs');
const path = require('path');

fs.readFile('./challenge1/info.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

let text = fs.readFileSync('./challenge2/info.txt', 'utf-8');
let names = ['Anthony Borel', 'Alec Featherston', 'Chris Hawks', 'Chris Hervois', 'Erik Taylor', 'John Savone', 'Luke Montoya', 'MIchael Sommerfeld', 'Nisha Bharti'];
names.forEach(name => {
    text += '\n' + name;
});

fs.writeFileSync('./challenge2/info.txt', text);

try { fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt'); }
catch(error) {console.log('You did this already!')}

try {fs.mkdirSync('./challenge4/copyfolder');}
catch(error) {}

try {fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');}
catch(error) {}

text = fs.readFileSync('./challenge5/info.txt', 'utf-8');

text = text.replace(/-/g, ' ');

fs.writeFileSync('./challenge5/info.txt', text);

let pathName = './challenge6';
fs.readdir('./challenge6', (err, filenames) => {
    if(err) throw err;
    filenames.forEach(file => {
        const splitFile = file.split('.');
        if(splitFile[splitFile.length - 1] === 'txt') {
            fs.readFile(path.join(pathName,file), 'utf-8', (err, data) => {
                console.log(data);
            })
        }
    })
})