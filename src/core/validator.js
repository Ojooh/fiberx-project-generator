// src/core/validator.js

const fs        = require("fs");
const path      = require("path");

const { VALID_PROJECT_NAME_REGEX } = require("../enums/constants");

// Method to handle validation logic for project scaffolding
class Validator {
    // Method to validate project name format
    isValidProjectName(name) { return VALID_PROJECT_NAME_REGEX.test(name); }

    // Method to check if directory exists or is empty
    isValidTargetDirectory = async (target_path) => {
        if (!fs.existsSync(target_path)) { return true; }

        const files = fs.readdirSync(target_path);

        return files.length === 0;
    }

    // Method to create directory if it doesn't exist
    ensureDirectoryExists = async (target_path) => {
        if (!fs.existsSync(target_path)) { fs.mkdirSync(target_path, { recursive: true }); }
    }
}

module.exports = Validator;
