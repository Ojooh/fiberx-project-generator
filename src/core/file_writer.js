// src/core/file_writer.js

const fs        = require("fs");
const path      = require("path");
const ejs       = require("ejs");

const { 
    FOLDER_STRUCTURE,
    STATIC_FILES,
    GENERATED_FILES
} = require("../enums/constants");

// Method to handle file and folder creation for project scaffolding
class FileWriter {
    constructor() {
        this.template_root      = path.join(__dirname, "..", "templates");
        this.folders            = FOLDER_STRUCTURE;
        this.static_files       = STATIC_FILES;
        this.files_to_generate  = GENERATED_FILES
    }

    // Method to create the full folder structure
    createFolderStructure = (context) => {
        this.folders.forEach(folder => {
            const full_path = path.join(context.target_dir, folder);
            if (!fs.existsSync(full_path)) {
                fs.mkdirSync(full_path, { recursive: true });
            }
        });
    }

    // Method to copy static files (like .env, .gitignore)
    copyStaticFiles = (context) => {
        this.static_files.forEach(file_name => {
            const src   = path.join(this.template_root, "static_files", file_name);
            const dest  = path.join(context.target_dir, file_name);

            if (fs.existsSync(src)) { fs.copyFileSync(src, dest); }
        });
    }

    // Method to generate files with dynamic placeholders (e.g., README, package.json)
    generateTemplatedFiles = async (context) => {
        console.log({ context })
        for (const file of this.files_to_generate) {
            const target_path   = path.join(context.target_dir, file.output);
            const template_path = path.join(this.template_root, "content_files", file.template);
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
