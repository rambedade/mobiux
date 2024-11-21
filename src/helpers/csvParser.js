const fs = require('fs');

function parseCSV(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8').trim();
    const [header, ...lines] = data.split('\n');
    const headers = header.split(',').map(h => h.trim().replace('\r', '')); // Clean header names

    const parsedData = lines.map(line => {
        const values = line.split(',').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index]; // Map each value to the cleaned header
        });
        return row;
    });

    return parsedData;
}

module.exports = parseCSV;


