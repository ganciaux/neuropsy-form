const express = require('express');
const router = express.Router();
const { getClients, setClient } = require('../controllers/clientController');

router.route('/').get(getClients).post(setClient);

module.exports = router;
