const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Get user's portfolio
router.get('/:userId', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ userId: req.params.userId });
    res.json(portfolio || {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add assets to portfolio
router.post('/:userId', async (req, res) => {
  const { symbol, amount } = req.body;
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      { userId: req.params.userId },
      { $push: { assets: { symbol, amount } } },
      { new: true, upsert: true }
    );
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove assets from portfolio (optional)
router.delete('/:userId/:symbol', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      { userId: req.params.userId },
      { $pull: { assets: { symbol: req.params.symbol } } },
      { new: true }
    );
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
