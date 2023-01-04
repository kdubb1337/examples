docker run --restart=always -d --name uptime-kuma \
  -p 3001:3001 \
  -v /your_local_folder/uptime-kuma:/app/data \
  louislam/uptime-kuma:1
  