const fs = require('fs');

function parseCSV(filePath) {
    // Read the file and remove extra spaces or newlines
    const data = fs.readFileSync(filePath, 'utf-8').trim();

    // Split the data into rows (lines)
    const rows = data.split('\n');

    // The first row contains the headers (column names)
    const headers = rows[0].split(',').map(header => header.trim());

    // Process each row after the header
    const parsedData = rows.slice(1).map(row => {
        const values = row.split(',').map(value => value.trim()); // Split the row into values
        const rowObject = {};

        // Map each value to its corresponding header
        headers.forEach((header, index) => {
            rowObject[header] = values[index];
        });

        return rowObject;
    });

    return parsedData;
}

module.exports = parseCSV;
