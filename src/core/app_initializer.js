// src/core/app_initializer.js

const path          = require("path");
const fs            = require("fs");
const PromptRunner  = require("../cli/prompt_runner");
const Validator     = require("./validator");
const FileWriter    = require("./file_writer");

// Method to orchestrate the initialization and generation process
class AppInitializer {
    constructor(base_dir) {
        this.base_dir       = base_dir || process.cwd();
        this.context        = {};
        this.prompt_runner  = new PromptRunner();
        this.validator      = new Validator();
        this.file_writer    = new FileWriter();
    }

    // Method to initialize the project generation process
    initialize = async () => {
        try {
            await this.validateAndPrepareDirectory();
            const prompt_data = await this.prompt_runner.runPrompts();

            const { metadata, project_type } = prompt_data

            this.context = {...metadata, project_type, target_dir: this.base_dir };

            await this.generateProjectFiles();
            console.log("✅ Project scaffold generated successfully. \n");
        } 
        catch (error) {
            console.log({ error })
            console.error("❌ Error initializing project:", error.message);
        }
    }

    // Method to validate or create target directory
    validateAndPrepareDirectory = async () => {
        const is_valid = await this.validator.isValidTargetDirectory(this.base_dir);

        if (!is_valid) { throw new Error("Directory must be empty or non-existent."); }

        await this.validator.ensureDirectoryExists(this.base_dir);
    }

    // Method to call the file writer and pass it context
    generateProjectFiles = async () =>  {
        this.file_writer.createFolderStructure(this.context);
        this.file_writer.copyStaticFiles(this.context);
        await this.file_writer.generateTemplatedFiles(this.context);
    }
}

module.exports = AppInitializer;
