// services/Validation.js

export function validateProject(data) {

  const errors = [];

  if (!data.service) {
    errors.push("Service is required");
  }

  if (!data.projectType) {
    errors.push("Project type is required");
  }

  if (!data.location) {
    errors.push("Location is required");
  }

  return {
    valid: errors.length === 0,
    errors
  };

}
