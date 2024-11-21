function calculateTotalSales(rows) {
    return rows.reduce((total, row) => {
        const totalPrice = parseFloat(row['Total Price']); // Use 'Total Price' for summing
        if (!isNaN(totalPrice)) {
            return total + totalPrice;
        }
        return total; // Skip invalid entries
    }, 0);
}

function calculateMonthlySales(rows) {
    const monthlySales = {};

    rows.forEach(row => {
        const date = row['Date'];
        if (!date) return; // Skip rows without a valid Date

        const month = date.split('-')[1]; // Extract month (e.g., '01' for January)
        const totalPrice = parseFloat(row['Total Price']);
        
        if (!isNaN(totalPrice)) {
            if (!monthlySales[month]) monthlySales[month] = 0;
            monthlySales[month] += totalPrice;
        }
    });

    // Debugging log
    console.log('Monthly Sales:', monthlySales);

    return monthlySales;
}

module.exports = { calculateTotalSales, calculateMonthlySales };
