# Patient API

A basic REST API for managing patients, their health records, and care plans. Uses mock data (no DB).

## Endpoints

- GET /patients/:patientId
- PUT /patients/:patientId (Roles: nurse, admin)
- GET /patients/:patientId/health-records
- GET /patients/:patientId/care-plan

Use header `x-user-role` to simulate role-based access.

## Run Locally

```bash
npm install
node app.js
