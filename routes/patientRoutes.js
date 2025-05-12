const express = require('express');
const router = express.Router();
const {
  getPatientDetails,
  updatePatient,
  getHealthRecords,
  getCarePlan
} = require('../controllers/patientController');
const { verifyRole } = require('../middleware/authMiddleware');

router.get('/:patientId', getPatientDetails);
router.put('/:patientId', verifyRole(['nurse', 'admin']), updatePatient);
router.get('/:patientId/health-records', getHealthRecords);
router.get('/:patientId/care-plan', getCarePlan);

module.exports = router;
