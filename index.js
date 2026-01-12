const fs = require('fs');

const nameFile = process.argv[process.argv.length - 1];

if (fs.existsSync(`./outputFromShowcase/${nameFile}.json`)) {
    fs.readFile(`./outputFromShowcase/${nameFile}.json`, function (err, data) {

        if (err) throw err;

        const output = JSON.parse(data);
        const properties = output.pages[0].keyValueElements;
        let dataToWrite = "{";
        properties.forEach(prp => {

            console.log("------------------------------------------");
            console.log('\x1b[45m Property \x1b[0m')
            console.log("------------------------------------------");
            console.log('\x1b[41m Key \x1b[0m')
            let key = "";
            let value = "";
            prp.key.words.forEach(w => key += (w.content + " "));
            console.log(key);
            console.log('\x1b[41m Value \x1b[0m')
            prp.words.forEach(w => value += (w.content + " "));
            console.log(value)
            const finalValue = `"${key.replace(":", "").trim()}": { "value": "${value.trim()}", "confidence": "${prp.confidence}"}, `
            dataToWrite += finalValue;
            console.log(finalValue);
            console.log("------------------------------------------");
            console.log("\x1b[42m ****************************************** \x1b[0m");
        });

        dataToWrite = dataToWrite.split("");
        dataToWrite.pop();
        dataToWrite = dataToWrite.join("");

        try {
            fs.writeFile(`outputFromCode/${nameFile}.json`, dataToWrite + "}", (err) => {
                console.log(err);
            });
            console.log('Files created successfully');
        } catch (err) {
            console.error('Error writing files:', err);
        }
    });
} else {
    console.log('File does not exist.');
}
