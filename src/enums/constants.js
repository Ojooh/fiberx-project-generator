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

const SERVER_STATIC_FILES = [".env.yaml", ".env_sample.yaml", ".gitignore"]


const SERVER_FOLDER_STRUCTURE = [
    "api_v1/client/assets/img",
    "api_v1/client/views",
    "api_v1/controllers",
    "api_v1/routes",
    "bin",
    "configs",
    "database/models",
    "database/schemas",
    "database/seeders",
    "development_scripts",
    "enums",
    "external_services",
    "local_uploads/emails",
    "local_uploads/storage",
    "logs",
    "middle_wares",
    "modules/auth",
    "utils",
];

const UI_FOLDER_STRUCTURE = [
    "public",
    "public/assets/img",
    "public/assets/img/ico",
    "public/assets/css",
    "src/api",
    "src/modules/base_app/views",
    "src/modules/base_app/controllers",
    "src/modules/base_app/components",
    "src/modules/base_app/validators",
    "src/resources",
    "src/utils",
];

const SERVER_GENERATED_FILES = [
    { template: "api_v1/client/views/index.ejs", output: "api_v1/client/views/index.ejs" },
    { template: "api_v1/routes/index.js.ejs", output: "api_v1/routes/index.js" },
    { template: "bin/www.ejs", output: "bin/www" },
    { template: "configs/gcs_config.json.ejs", output: "configs/gcs_config.json" },
    { template: "development_scripts/create_new_module.js.ejs", output: "development_scripts/create_new_module.js" },
    { template: "development_scripts/seeder_manager.js.ejs", output: "development_scripts/seeder_manager.js" },
    { template: "development_scripts/code_content_templates.js.ejs", output: "development_scripts/code_content_templates.js" },
    { template: "enums/constants.enums.js.ejs", output: "enums/constants.enums.js" },
    { template: "middle_wares/authenticator_middle_ware.js.ejs", output: "middle_wares/authenticator_middle_ware.js" },
    { template: "middle_wares/cors_manager_middle_ware.js.ejs", output: "middle_wares/cors_manager_middle_ware.js" },
    { template: "middle_wares/cookie_manager_middle_ware.js.ejs", output: "middle_wares/cookie_manager_middle_ware.js" },
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
    { template: "utils/index_util.js.ejs", output: "utils/index_util.js" },
    { template: "README.md.ejs", output: "README.md" },
    { template: "package.json.ejs", output: "package.json" },
    { template: "app.js.ejs", output: "app.js" }, 
];

const UI_GENERATED_FILES = [
    { template: ".env.ejs", output: ".env" },
    { template: ".env_sample.ejs", output: ".env_sample" },
    { template: ".gitignore.ejs", output: ".gitignore" },
    { template: "README.md.ejs", output: "README.md" },
    { template: "package.json.ejs", output: "package.json" },
    { template: "tailwind.config.js.ejs", output: "tailwind.config.js" },
    { template: "vite.config.js.ejs", output: "vite.config.js" },
    { template: "public/index.html.ejs", output: "public/index.html" },
    { template: "public/assets/img/ico/logo.ico.ejs", output: "public/assets/img/logo.ico" },
    { template: "public/assets/css/input.css.ejs", output: "public/assets/css/input.css" },
    { template: "public/assets/css/output.css.ejs", output: "public/assets/css/output.css" },
    { template: "src/api/base_api.js.ejs", output: "src/api/base_api.js" },
    { template: "src/utils/global_variable_manager_util.js.ejs", output: "src/utils/global_variable_manager_util.js" },
    { template: "src/utils/event_system_util.js.ejs", output: "src/utils/event_system_util.js.ejs" },
    { template: "src/utils/encryptor_decryptor_util.js.ejs", output: "src/utils/encryptor_decryptor_util.js.ejs" },
    { template: "src/utils/input_validation_util.js.ejs", output: "src/utils/input_validation_util.js" },
    { template: "src/utils/input_transformer_util.js.ejs", output: "src/utils/input_transformer_util.js" },
    { template: "src/utils/device_fingerprint_util.js.ejs", output: "src/utils/device_fingerprint_util.js" },
    { template: "src/utils/meta_data_util.js.ejs", output: "src/utils/meta_data_util.js" },
    { template: "src/utils/socket_manager_util.js.ejs", output: "src/utils/socket_manager_util.js" },
    { template: "src/utils/index_util.js.ejs", output: "src/utils/index_util.js" },
    { template: "src/modules/base_app/controllers/base_app_controller.js.ejs", output: "src/modules/base_app/controllers/base_app_controller.js.ejs" },
    { template: "src/router.js.ejs", output: "src/router.js" },
    { template: "src/App.vue.ejs", output: "src/App.vue" },
    { template: "src/main.js.ejs", output: "src/main.js" },
];
  
module.exports = {
    APP_TYPES,
    DEFAULT_LICENSE,
    DEFAULT_AUTHOR,
    DEFAULT_VERSION,
    GITHUB_BASE_URL,
    VALID_PROJECT_NAME_REGEX,
    SERVER_FOLDER_STRUCTURE,
    UI_FOLDER_STRUCTURE,
    SERVER_STATIC_FILES,
    SERVER_GENERATED_FILES,
    UI_GENERATED_FILES,
    SERVER_GENERATED_FILES,
};
  