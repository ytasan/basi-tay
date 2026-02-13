# Notes

## Local setup (from README)

```
git clone https://github.com/ytasan/basi-tay
cd basi-tay
yarn install
yarn run serve // to run web version
yarn run electron:serve // to run native version
```

## Docker

### Run development web version

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

### View running services

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

### Fix "container name already in use" (e.g. basi-tay)

Remove existing container:
```bash
docker rm basi-tay
```

Or stop:
```bash
docker stop basi-tay 
```
