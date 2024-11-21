function mostPopularItemByMonth(rows) {
    const monthWiseItems = {};

    rows.forEach(row => {
        if (!row['Date'] || !row['SKU'] || isNaN(parseInt(row['Quantity'], 10))) return;

        const month = row['Date'].split('-')[1];
        const item = row['SKU'];
        const quantity = parseInt(row['Quantity'], 10);

        if (!monthWiseItems[month]) monthWiseItems[month] = {};
        if (!monthWiseItems[month][item]) monthWiseItems[month][item] = 0;

        monthWiseItems[month][item] += quantity;
    });

    const result = {};
    for (const month in monthWiseItems) {
        const items = monthWiseItems[month];
        let maxItem = null;
        let maxQuantity = 0;

        for (const item in items) {
            if (items[item] > maxQuantity) {
                maxQuantity = items[item];
                maxItem = item;
            }
        }
        result[month] = { item: maxItem, quantity: maxQuantity };
    }

    console.log('Most Popular Items by Month:', result);
    return result;
}




function popularItemStats(rows, popularItems) {
    const result = {};

    console.log('Input Popular Items:', popularItems);
    console.log('Rows (Sample):', rows.slice(0, 5)); 

    rows.forEach(row => {
        if (!row['Date'] || !row['SKU'] || isNaN(parseInt(row['Quantity'], 10))) return;

        const month = row['Date'].split('-')[1];

        if (!popularItems[month]) return;

        const item = popularItems[month].item;

        if (row['SKU'] === item) {
            const quantity = parseInt(row['Quantity'], 10);
            if (!result[month]) result[month] = [];
            result[month].push(quantity);
        }
    });

    const stats = {};
    for (const month in result) {
        const quantities = result[month];
        const min = Math.min(...quantities);
        const max = Math.max(...quantities);
        const avg = quantities.reduce((sum, qty) => sum + qty, 0) / quantities.length;

        stats[month] = { min, max, avg };
    }

    console.log('Popular Item Statistics:', stats);
    return stats;
}

module.exports = { mostPopularItemByMonth, popularItemStats };