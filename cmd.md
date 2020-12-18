sudo nano /etc/hosts
cd /etc/nginx
sudo code . --user-data-dir

sudo systemctl reload nginx
systemctl status nginx.service
sudo cat /var/log/nginx/error.log
sudo vim /etc/resolv.conf (set DSN local)

+ liet ke danh sach image
docker images

+ xoa image
docker rmi <your-image-id> <your-image-id>

+ build docker local
sudo docker build . -t app2:v0.0.1

+ check image docker
sudo docker ps -a

+ xoa container docker
sudo docker rm ui-one

+ start docker image
sudo docker run -it --name ui-one --env API_ENDPOINT="sit-apollo.digi-texx.vn" app2:v0.0.1
docker run -it -p 3001:5000 --name ui-one --env API_ENDPOINT="sit-apollo.digi-texx.vn" app2:v0.0.1

+ sh xem cay thu muc image
sudo docker run -it --name ui-one --env API_ENDPOINT="sit-apollo.digi-texx.vn" app2:v0.0.1 sh

https://awesomeopensource.com/

"micro frontend", structure, open source
https://awesomeopensource.com/projects/microfrontends
