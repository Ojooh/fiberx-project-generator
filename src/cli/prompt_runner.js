// src/cli/prompt_runner.js

const inquirer = require('inquirer');
const { APP_TYPES, DEFAULT_LICENSE, DEFAULT_AUTHOR, GITHUB_BASE_URL } = require("../enums/constants");

class PromptRunner {
    constructor() {
        this.project_name   = "";
        this.project_type   = "";
        this.metadata       = {};
        this.prompt         = inquirer.createPromptModule();
    }

    // Method to oonvert to pascal
    #toPascalCase = (str) => {
        return str.replace(/[-_\s]+/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    }

    // Method to run interactive prompts for user input
    runPrompts = async () => {
        this.project_name   = await this.getProjectName();
        this.project_type   = await this.getProjectType();
        this.metadata       = await this.collectMetadata();
        return {
            project_name: this.project_name,
            project_type: this.project_type,
            metadata: this.metadata
        };
    }

    // Method to prompt for and validate project name
    getProjectName = async () => {
        const { project_name } = await this.prompt([
            {
                type: "input",
                name: "project_name",
                message: "Enter the project name (lowercase, use dashes instead of spaces):",
                validate: (input) => {
                    const regex = /^[a-z0-9\-]+$/;
                    if (!regex.test(input)) {
                        return "Only lowercase letters, numbers and dashes are allowed. No spaces.";
                    }
                    return true;
                }
            }
        ]);
        return project_name;
    }

    // Method to prompt for project type (web-server, etc.)
    getProjectType = async () => {
        const { project_type } = await this.prompt([
            {
                type: "list",
                name: "project_type",
                message: "Select the type of project to scaffold:",
                choices: [
                    { name: "Web Server App", value: APP_TYPES.WEB_SERVER },
                    { name: "Web Client App", value: APP_TYPES.WEB_CLIENT },
                    { name: "Background Processor", value: APP_TYPES.BACKGROUND_PROCESSOR }
                ],
                default: APP_TYPES.WEB_SERVER
            }
        ]);
        return project_type;
    }

    // Method to gather package.json metadata (description, author, license, etc.)
    collectMetadata = async () =>  {
        let full_project_name;

        if(this.project_type === APP_TYPES.WEB_SERVER) { full_project_name = `${this.project_name}-server-app` }

        else if (this.project_type === APP_TYPES.WEB_CLIENT) { full_project_name = `${this.project_name}-client-app` }

        else if (this.project_type === APP_TYPES.BACKGROUND_PROCESSOR) { full_project_name = `${this.project_name}-processor-app` }


        const default_repo                  = `${GITHUB_BASE_URL}${full_project_name}.git`;

        const default_project_live_base_url = `https://${this.project_name.toLowerCase()}.com`;

        const prompt_response_array = [
            {
                type: "input",
                name: "version",
                message: "Enter project version:",
                default: "0.0.1"
            },
            {
                type: "input",
                name: "description",
                message: "Enter project description:"
            },
            {
                type: "input",
                name: "repository",
                message: "Repository URL:",
                default: default_repo
            },
            {
                type: "input",
                name: "keywords",
                message: "Enter keywords (comma-separated):",
                filter: input => input.split(",").map(k => k.trim()).filter(Boolean)
            },
            {
                type: "input",
                name: "author",
                message: "Author name:",
                default: DEFAULT_AUTHOR
            },
            {
                type: "input",
                name: "license",
                message: "License:",
                default: DEFAULT_LICENSE
            },
            {
                type: "confirm",
                name: "requires_file_upload_download",
                message: "Does this app require file uploading or downloading?",
                default: false
            },
            {
                type: "input",
                name: "port",
                message: "Server port number?",
                default: 3000
            }
            
        ]

        if(this.project_type === APP_TYPES.WEB_CLIENT) {
            prompt_response_array.push(
                {
                    type: "input",
                    name: "project_passphrase",
                    message: "Enter project passphrase:"
                },
            );

            prompt_response_array.push(
                {
                    type: "input",
                    name: "project_live_base_url",
                    message: "Enter project live base url:",
                    default: default_project_live_base_url
                },
            )
        }

        const responses = await this.prompt(prompt_response_array);

        return { 
            full_project_name, 
            ...responses, 
            project_name: this.project_name,
            project_name_pascal: this.#toPascalCase(this.project_name)
        };
    }
}

module.exports = PromptRunner;
