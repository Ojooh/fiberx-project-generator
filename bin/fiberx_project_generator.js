#!/usr/bin/env node

const path              = require("path");
const process           = require("process");
const AppInitializer    = require("../src/core/app_initializer");

class FiberxProjectGeneratorCLI {
    constructor() {
        // Method to extract CLI arguments
        this.project_path   = this.extractTargetPath();
        this.initializer    = new AppInitializer(this.project_path);
    }

    // Method to extract and normalize the target path
    extractTargetPath() {
        const args          = process.argv.slice(2);
        const input_path    = args[0] || ".";

        return path.resolve(process.cwd(), input_path);
    }

    // Method to start the initialization process
    run = async () => {
        try {
            await this.initializer.initialize();
        } 
        catch (err) {
            console.error("❌ Error while generating project:", err.message);
            process.exit(1);
        }
    }
}

// Method to bootstrap the CLI tool
(async () => {
    const cli = new FiberxProjectGeneratorCLI();
    
    await cli.run();
})();
