function calculateTotalSales(rows) {
    return rows.reduce((total, row) => {
        const totalPrice = parseFloat(row['Total Price']); 
        if (!isNaN(totalPrice)) {
            return total + totalPrice;
        }
        return total; 
    }, 0);
}

function calculateMonthlySales(rows) {
    const monthlySales = {};

    rows.forEach(row => {
        const date = row['Date'];
        if (!date) return; 

        const month = date.split('-')[1]; 
        const totalPrice = parseFloat(row['Total Price']);
        
        if (!isNaN(totalPrice)) {
            if (!monthlySales[month]) monthlySales[month] = 0;
            monthlySales[month] += totalPrice;
        }
    });

    console.log('Monthly Sales:', monthlySales);

    return monthlySales;
}

module.exports = { calculateTotalSales, calculateMonthlySales };
