# Basi-Tay | FOSS Minimalist Planner
---
![GitHub all releases](https://img.shields.io/github/downloads/manuelernestog/basi-tay/total) 
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)

Basi-Tay is a free minimalist planner app focused on privacy. Schedule your tasks and projects with to do lists and a calendar. Available for Windows, Mac, Linux or online.

## Philosophy

basi-tay is a program that imposes its own rules on the user. It offers a fixed, opinionated workflow. 
a bit hard to learn, easy to use.

## Features

- Cross platform
- Light/dark mode toggle
- Custom To-do Lists
- Drag and Drop
- Multi-language
- Sub-tasks
- Markdown Support
- Customizable user interface
- Local Storage
- Task Colors
- Task Time
- Recurring Tasks
- Notifications and reminders
- Inline commands (slash commands in task titles to set date and color)

## Inline Commands

You can type slash commands in a task title to change the task's date or color. The command text is removed from the title when you finish editing (Enter or blur).

**Date commands** (move the task to that day; the command is removed from the title):

| Command | Meaning |
|---------|--------|
| `/tod` | Today — sets the task date to today and color to green |
| `/yes` | Yesterday |
| `/tom` | Tomorrow |
| `/tom+1` | Day after tomorrow (2 days from today) |
| `/yes-1` | Two days ago |

**Color commands** (set the task color only):

| Command | Meaning |
|---------|--------|
| `/green` | Default todo (green) |
| `/gray`, `/cancel`, `/cancelled` | Cancelled (gray) |
| `/red` | Needs to be done that day (red) |
| `/blue`, `/ok`, `/done` | Done (blue); also marks the task as completed (checked, title strikethrough) |

**Example:** For a task titled "review the documents", add ` /tod` to the title. When you finish editing, the task moves to today, its color becomes green, and the title is left as "review the documents".

Inline commands work both when editing the title in the list view and in the task detail modal.

## Roadmap

- Touch mode
- Mobile Version
- Sync across devices
- Workspaces
- Themes

## Future Plans

- [The issue list on WeekToDo](https://github.com/manuelernestog/weektodo/issues) will be reviewed and filtered for relevant features and improvements.

## Installation

#### Linux 

Snapd can be installed from the command line:

```bash
sudo apt update
sudo apt install snapd
```
To install Basi-Tay, simply use the following command:
```bash
sudo snap install basi-tay
```    

## Build and Run From Source

If you want to understand how Basi-Tay works or want to debug an issue, you'll want to get the source, build it, and run it locally.

### Installing Prerequisites

You'll need git, a recent version of [Node.JS](https://nodejs.org/en/) (currently v16.X is recommended), [Yarn](https://yarnpkg.com/) and [Electron](https://www.electronjs.org/).

```
git clone https://github.com/ytasan/basi-tay
cd basi-tay
yarn install
yarn run serve // to run web version
yarn run electron:serve // to run native version
```

### Docker

To run the development web version from the project root:

```bash
docker compose -f docker/docker-compose.yml up
```

If you use Docker Engine in WSL (without Docker Desktop), start the daemon first:

```bash
sudo service docker start
```

### Translations

Currently the system is developed in multiple languages, you can send me a correction of any error or you can add your language if it's not available.

You can find the base file with all the used words in english [here](src/assets/languages/en.json)

For add a new language Fork the repo and create a Pull Request creating a new file of the `translations/en.json` and name the file according the [language code](https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469). 

If this is to difficult, you can download this [file](src/assets/languages/en.json/), translate it and send the file to the email contact@basi-tay.me
 

