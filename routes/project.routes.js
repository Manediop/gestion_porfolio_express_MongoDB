const express = require('express');
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require('../controllers/project.controller');

router.route('/')
  .get(getAllProjects)    // GET  /api/projects
  .post(createProject);  // POST /api/projects

router.route('/:id')
  .get(getProjectById)   // GET    /api/projects/:id
  .put(updateProject)    // PUT    /api/projects/:id
  .delete(deleteProject);// DELETE /api/projects/:id

module.exports = router;