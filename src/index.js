const parseCSV = require('./helpers/csvParser');
const { calculateTotalSales, calculateMonthlySales } = require('./helpers/salesCalculator');
const { mostPopularItemByMonth, popularItemStats } = require('./helpers/popularItems');
const { mostRevenueByMonth } = require('./helpers/revenueCalculator');

const filePath = './data/data.csv';

const rows = parseCSV(filePath);

const totalSales = calculateTotalSales(rows);
console.log('Total Sales:', totalSales);

const monthlySales = calculateMonthlySales(rows);
console.log('Month-wise Sales:', monthlySales);

const popularItems = mostPopularItemByMonth(rows);
console.log('Most Popular Items by Month:', popularItems);

const revenueItems = mostRevenueByMonth(rows);
console.log('Items Generating Most Revenue by Month:', revenueItems);

const popularItemStatistics = popularItemStats(rows, popularItems);
console.log('Statistics for Popular Items:', popularItemStatistics);
