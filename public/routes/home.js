const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.sendFile(process.cwd() + "/public/views/index.html");
});

router.get('/programs', function(req, res) {
    res.sendFile(process.cwd() + "/public/views/programs.html");
});

module.exports = router;