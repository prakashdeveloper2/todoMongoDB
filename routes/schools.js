const express = require('express');
const router = express.Router();
const schoolsController = require('../controllers/schools');

router.get('/', schoolsController.getSchool);

router.post('/createSchool',schoolsController.createSchool);

router.put('/updateSchool', schoolsController.updateSchool);

router.delete('/deleteSchool', schoolsController.deleteSchool);

module.exports = router;