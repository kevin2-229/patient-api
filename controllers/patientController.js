const patients = require('../data/mockPatients');

exports.getPatientDetails = (req, res) => {
  const patient = patients[req.params.patientId];
  if (!patient) return res.status(404).json({ error: 'Patient not found' });
  res.json(patient);
};

exports.updatePatient = (req, res) => {
  const { patientId } = req.params;
  const updatedData = req.body;
  if (!patients[patientId]) return res.status(404).json({ error: 'Patient not found' });

  patients[patientId] = { ...patients[patientId], ...updatedData };
  res.json(patients[patientId]);
};

exports.getHealthRecords = (req, res) => {
  const patient = patients[req.params.patientId];
  if (!patient) return res.status(404).json({ error: 'Patient not found' });

  res.json(patient.healthRecords || []);
};

exports.getCarePlan = (req, res) => {
  const patient = patients[req.params.patientId];
  if (!patient) return res.status(404).json({ error: 'Patient not found' });

  res.json(patient.carePlan || {});
};
