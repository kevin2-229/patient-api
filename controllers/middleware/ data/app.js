const express = require('express');
const app = express();
const patientRoutes = require('./routes/patientRoutes');

app.use(express.json());
app.use('/patients', patientRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
