// src/core/file_writer.js

const fs        = require("fs");
const path      = require("path");
const ejs       = require("ejs");

const { 
    APP_TYPES, SERVER_FOLDER_STRUCTURE, UI_FOLDER_STRUCTURE,
    SERVER_STATIC_FILES, SERVER_GENERATED_FILES, UI_GENERATED_FILES
} = require("../enums/constants");

const { 
    FOLDER_STRUCTURE,
    STATIC_FILES,
    GENERATED_FILES
} = require("../enums/constants");

// Method to handle file and folder creation for project scaffolding
class FileWriter {
    constructor() {
        this.template_root      = path.join(__dirname, "..", "templates");
        this.files_to_generate  = GENERATED_FILES
    }

    // Method to create the full folder structure
    createFolderStructure = (context) => {
        const { project_type } = context;

        let folders = [];

        if(project_type === APP_TYPES.WEB_SERVER) { folders = SERVER_FOLDER_STRUCTURE }

        else if (project_type === APP_TYPES.WEB_CLIENT) { folders = UI_FOLDER_STRUCTURE }

        folders.forEach(folder => {
            const full_path = path.join(context.target_dir, folder);
            if (!fs.existsSync(full_path)) {
                fs.mkdirSync(full_path, { recursive: true });
            }
        });
    }

    // Method to copy static files (like .env, .gitignore)
    copyStaticFiles = (context) => {
        const { project_type } = context;

        let static_files    = [];
        const app_type      = APP_TYPES.WEB_SERVER

        if(project_type === app_type) { static_files = SERVER_STATIC_FILES }


        static_files.forEach(file_name => {
            const src   = path.join(this.template_root, "static_files", app_type,   file_name);
            const dest  = path.join(context.target_dir, file_name);

            if (fs.existsSync(src)) { fs.copyFileSync(src, dest); }
        });
    }

    // Method to generate files with dynamic placeholders (e.g., README, package.json)
    generateTemplatedFiles = async (context) => {
        const { project_type } = context;

        let files_to_generate       = [];
        let app_type                = "";

        if(project_type === APP_TYPES.WEB_SERVER) { 
            app_type = APP_TYPES.WEB_SERVER;
            files_to_generate = SERVER_GENERATED_FILES 
        }

        else if (project_type === APP_TYPES.WEB_CLIENT) { 
            app_type = APP_TYPES.WEB_CLIENT;
            files_to_generate = UI_GENERATED_FILES 
        }

        for (const file of files_to_generate) {
            const target_path   = path.join(context.target_dir, file.output);
            const template_path = path.join(this.template_root, "content_files", app_type, file.template);
            await this.writeContentFile(target_path, template_path, context);
        }
    }

    // Method to write raw content into files
    writeContentFile = async (target_path, template_path, context) => {
        try {
            const content = await ejs.renderFile(template_path, context, { async: true });
            fs.writeFileSync(target_path, content, "utf8");
        } 
        catch (err) {
            console.error(`❌ Failed to write file: ${target_path}`, err);
        }
    }
}

module.exports = FileWriter;
