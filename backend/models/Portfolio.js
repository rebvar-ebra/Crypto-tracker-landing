const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  assets: [{ symbol: String, amount: Number }],
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
