# Local setup (for dev)

```
yarn install
yarn run serve // to run web version
yarn run electron:serve // to run native version
```

# Docker

## Run development web version

From project root:

- `-f docker/docker-compose.yml` — Uses this compose file instead of the default one.
- `up` — Creates and starts all services defined in this file (builds images if needed).
```bash
docker compose -f docker/docker-compose.yml up
```

**Quicker if container already exists:** just start the existing container (no rebuild):

```bash
docker start basi-tay
```

If you use Docker Engine in WSL (without Docker Desktop), start the daemon first:

```bash
sudo service docker start
```

## View running services

- **Running containers only:**

```bash
docker ps
```

- **This project's compose services:**

```bash
docker compose -f docker/docker-compose.yml ps
```

- **All containers (including stopped):**

```bash
docker ps -a
```

## Fix "container name already in use" (e.g. basi-tay)

Remove existing container:
```bash
docker rm basi-tay
```

Or stop:
```bash
docker stop basi-tay 
```

---

# How the default 5-day view is built

The 5-day view is **not** implemented with a third-party calendar library. It is built inside the project using **Vue**, **Moment.js**, and **Bootstrap**.

## How it works

### 1. Day list (`App.vue` – `dates_array` computed)

- **Column count:** `config.columns` (from settings, range 1–12) defines how many columns are shown. "5 days" means `columns` is set to 5.
- **Dates:** Computed with **Moment.js** (yesterday + today + following days).

### 2. Layout (one column per day)

- Each date in `dates_array` is rendered as one **to-do-list** component via `v-for="date in dates_array"`.
- Column width is set in `toDoList.vue` with `flex: 0 0 ${100/columns}%` — a simple CSS flex-based N-column grid.

### 3. Headers (e.g. "Saturday", "February 14, 2026") – `listHeader.vue`

- Day name: `moments(id).locale(language).format("dddd")`
- Date: `moments(id).locale(language).format("LL")`
- Both use **Moment.js** for formatting.

### 4. Left/right arrows – `App.vue`

- Icons: **Bootstrap Icons** (`bi-chevron-left` / `bi-chevron-right`).
- Clicks call `weekMoveLeft` / `weekMoveRight`, which update `selected_date` and thus recompute `dates_array`.

## Tools used

| Purpose            | Tool                          |
|--------------------|-------------------------------|
| Date calculations  | **moment** (^2.29.1)          |
| UI / columns       | **Vue 3** (components, v-for, computed) |
| Styling / icons    | **Bootstrap 5**, **bootstrap-icons**    |
| Date picker        | **vue3-datepicker** (only in task detail modal) |

## Summary

No ready-made calendar component (e.g. FullCalendar, vue-calendar) is used. The 5-day (or N-day) view is implemented with custom Vue components, Moment.js, and Bootstrap. The number of visible days is controlled by the "columns" setting (1–12) in the app configuration.
