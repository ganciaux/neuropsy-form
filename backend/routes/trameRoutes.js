const express = require('express');
const { getTrame } = require('../controllers/trameController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getTrame);

module.exports = router;
