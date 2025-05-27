# ⚡ fiberx-project-generator

🚀 **fiberx-project-generator** is a simple CLI tool to scaffold starter templates for your projects. It helps you quickly set up consistent boilerplate for three types of applications:

1. **Web Server App** (e.g. Node.js, Express, etc.)
2. **Web Client App** (e.g. React, Vue, etc.)
3. **Background Processor** (e.g. worker processes, cron jobs)

This tool is ideal for rapidly starting projects with predefined structures and clean code separation.

---

## ✨ Features

- 🔧 Fast project bootstrapping with a single command
- 📁 Opinionated and consistent folder structures
- 📦 Modular template system for easy extension
- ⚙️ Interactive CLI prompts (project name, type, metadata)
- ✅ Defaults to **Web Server App**
- 🧩 Easily extensible to support new templates

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g https://github.com/Ojooh/fiberx-project-generator.git
````

Update global via npm:

```bash
npm cache clean --force
npm install -g https://github.com/Ojooh/fiberx-project-generator.git
````

Once installed, the `fiberx_project_generator` command becomes available globally.

---

## 🚀 Usage

```bash
fiberx_project_generator [target-directory]
```

* If no directory is specified (`.`), the current directory is used.
* You will be prompted interactively for:

  * Project name (kebab-case recommended)
  * Type of project to create (`web-server`, `web-client`, `background-processor`)
  * Optional metadata for `package.json` (description, author, license, etc.)

---

### 🧪 Examples

```bash
# Scaffold in current folder
fiberx_project_generator .

# Scaffold a new web server app in 'my-api'
fiberx_project_generator my-api

# Scaffold a background processor
fiberx_project_generator task-runner
```

You will be prompted to pick the project type interactively.

---

## 🗂️ Project Structure

Each project type comes with a fully structured boilerplate:

### ✅ Web Server App

```
my-api/
├── api_v1/
├── bin/
├── development_scripts/
├── local_uploads/
├── logs/
├── middleware/
├── models/
├── utils/
├── .env.yaml
├── .env_ample.yaml
├── .gitignore
├── app.js
├── package.json
└── README.md
```

### ✅ Web Client App

```
dashboard-ui/
├── src/
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── README.md
```

### ✅ Background Processor

```
task-runner/
├── src/
│   └── worker.js
├── jobs/
├── package.json
└── README.md
```

---

## 🛠 Development & Testing

Clone and link locally if you're working on the generator itself:

```bash
git clone https://github.com/yourusername/fiberx-project-generator.git
cd fiberx-project-generator
npm install
npm link
```

Now you can test it anywhere using:

```bash
fiberx test-project
```

To unlink:

```bash
npm unlink
```

---

## 🧩 Roadmap

* [ ] Custom user templates support
* [ ] Template versioning and updates
* [ ] Optional TypeScript generation
* [ ] Command-line flags for silent mode (`--yes`, `--type`, etc.)

---

## 🙌 Contributing

Contributions, ideas, and pull requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a pull request 🎉

---

## 📄 License

This project is licensed under the **MIT License**.

---

Built with ❤️ by **FiberX Innovations**

