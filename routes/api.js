// import PatientController
const PatientController = require("../controllers/PatientController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
router.get("/patients", PatientController.index); // Get All Resource
router.post("/patients", PatientController.store); // Add resource
router.put("/patients/:id", PatientController.update); // Edit resource
router.delete("/patients/:id", PatientController.destroy); // Delete resource
router.get("/patients/:id", PatientController.show); // Get One Resource
router.get("/patients/search/:name", PatientController.search); // Search Resource by name
router.get("/patients/status/positive", PatientController.positive); // Get Positive Resource
router.get("/patients/status/recovered", PatientController.recovered); // Get Recovered Resource
router.get("/patients/status/dead", PatientController.dead); // Get Dead Resource

// export router
module.exports = router;
