// src/constants.js

// Method to export all constants used across the generator

const APP_TYPES = {
    WEB_SERVER: "web-server",
    WEB_CLIENT: "web-client",
    BACKGROUND_PROCESSOR: "background-processor"
};
  
const DEFAULT_LICENSE = "MIT";
const DEFAULT_AUTHOR = "FiberX Innovations";
const DEFAULT_VERSION = "0.0.1";
const GITHUB_BASE_URL = "https://github.com/fiberx-innovations/";
  
const VALID_PROJECT_NAME_REGEX = /^[a-z0-9\-]+$/;

const STATIC_FILES = [".env.yaml", ".env_ample.yaml", ".gitignore"]

const FOLDER_STRUCTURE = [
    "api_v1/client/assets/img",
    "api_v1/client/views",
    "api_v1/controllers",
    "api_v1/enums",
    "api_v1/routes",
    "modules/auth",
    "external_services",
    "database/models",
    "seeders",
    "bin",
    "development_scripts",
    "local_uploads/emails",
    "local_uploads/storage",
    "logs",
    "middle_wares",
    "utils",
    "configs"
];

const GENERATED_FILES = [
    { template: "README.md.ejs", output: "README.md" },
    { template: "package.json.ejs", output: "package.json" },
    { template: "app.js.ejs", output: "app.js" },
    { template: "bin/www.ejs", output: "bin/www" },
    { template: "configs/gcs_config.json.ejs", output: "configs/gcs_config.json" },
    { template: "database/models/index.js.ejs", output: "models/index.js" },
    { template: "api_v1/client/views/index.ejs", output: "api_v1/client/views/index.ejs" },
    { template: "api_v1/routes/index.js.ejs", output: "api_v1/routes/index.js" },
    { template: "development_scripts/create_new_module.js.ejs", output: "development_scripts/create_new_module.js" },
    { template: "development_scripts/seeder_manager.js.ejs", output: "development_scripts/seeder_manager.js" },
    { template: "development_scripts/code_content_templates.js.ejs", output: "development_scripts/code_content_templates.js" },
    { template: "middle_wares/authenticator_middle_ware.js.ejs", output: "middle_wares/authenticator_middle_ware.js" },
    { template: "middle_wares/cors_manager_middle_ware.js.ejs", output: "middle_wares/cors_manager_middle_ware.js" },
    { template: "middle_wares/permission_verifier_middle_ware.js.ejs", output: "middle_wares/permission_verifier_middle_ware.js" },
    { template: "middle_wares/responder_middle_ware.js.ejs", output: "middle_wares/responder_middle_ware.js" },
    { template: "utils/app_initializer_util.js.ejs", output: "utils/app_initializer_util.js" },
    { template: "utils/activity_service_util.js.ejs", output: "utils/activity_service_util.js" },
    { template: "utils/global_variable_manager_util.js.ejs", output: "utils/global_variable_manager_util.js" },
    { template: "utils/event_system_util.js.ejs", output: "utils/event_system_util.js" },
    { template: "utils/encryptor_decryptor_util.js.ejs", output: "utils/encryptor_decryptor_util.js" },
    { template: "utils/env_manager_util.js.ejs", output: "utils/env_manager_util.js" },
    { template: "utils/input_validation_util.js.ejs", output: "utils/input_validation_util.js" },
    { template: "utils/gcs_util.js.ejs", output: "utils/gcs_util.js" },
    { template: "utils/logger_util.js.ejs", output: "utils/logger_util.js" },
    { template: "utils/uuid_gen_util.js.ejs", output: "utils/uuid_gen_util.js" },
    { template: "utils/input_transformer_util.js.ejs", output: "utils/input_transformer_util.js" },
    { template: "utils/device_fingerprint_util.js.ejs", output: "utils/device_fingerprint_util.js" },
    { template: "utils/server_util.js.ejs", output: "utils/server_util.js" },
    { template: "utils/database_manager_util.js.ejs", output: "utils/database_manager_util.js" },
    { template: "utils/index_util.js.ejs", output: "utils/index_util.js" }
];
  
module.exports = {
    APP_TYPES,
    DEFAULT_LICENSE,
    DEFAULT_AUTHOR,
    DEFAULT_VERSION,
    GITHUB_BASE_URL,
    VALID_PROJECT_NAME_REGEX,
    FOLDER_STRUCTURE,
    STATIC_FILES,
    GENERATED_FILES,
};
  