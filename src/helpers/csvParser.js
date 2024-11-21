const fs = require('fs');

function parseCSV(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8').trim();

    const rows = data.split('\n');

    const headers = rows[0].split(',').map(header => header.trim());

    const parsedData = rows.slice(1).map(row => {
        const values = row.split(',').map(value => value.trim()); 
        const rowObject = {};

        headers.forEach((header, index) => {
            rowObject[header] = values[index];
        });

        return rowObject;
    });

    return parsedData;
}

module.exports = parseCSV;
