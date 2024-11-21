function mostRevenueByMonth(rows) {
    const monthWiseRevenue = {};
    rows.forEach(row => {
        const month = row['Month'];
        const item = row['Item'];
        const revenue = parseFloat(row['Revenue']);

        if (!monthWiseRevenue[month]) monthWiseRevenue[month] = {};
        if (!monthWiseRevenue[month][item]) monthWiseRevenue[month][item] = 0;
        monthWiseRevenue[month][item] += revenue;
    });

    const result = {};
    for (const month in monthWiseRevenue) {
        const items = monthWiseRevenue[month];
        let maxItem = null;
        let maxRevenue = 0;

        for (const item in items) {
            if (items[item] > maxRevenue) {
                maxRevenue = items[item];
                maxItem = item;
            }
        }
        result[month] = { item: maxItem, revenue: maxRevenue };
    }
    return result;
}

module.exports = { mostRevenueByMonth };
