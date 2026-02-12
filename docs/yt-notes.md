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

```bash
docker compose -f docker/docker-compose.yml up
```

If you use Docker Engine in WSL (without Docker Desktop), start the daemon first:

```bash
sudo service docker start
```

### View running services

- **Running containers only:** `docker ps`
- **This project's compose services:** `docker compose -f docker/docker-compose.yml ps`
- **All containers (including stopped):** `docker ps -a`

### Fix "container name already in use" (e.g. basi-tay)

Remove existing container:
```bash
docker rm basi-tay
```

Or stop then remove:
```bash
docker stop basi-tay && docker rm basi-tay
```
