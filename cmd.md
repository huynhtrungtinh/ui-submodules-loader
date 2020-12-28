sudo nano /etc/hosts
cd /etc/nginx
sudo code . --user-data-dir

sudo systemctl reload nginx
systemctl status nginx.service
sudo cat /var/log/nginx/error.log
sudo vim /etc/resolv.conf (set DSN local)
nameserver 10.1.1.220
nameserver 10.1.1.221
!wp

+ liet ke danh sach image
docker images

+ xoa image
docker rmi <your-image-id> <your-image-id>

+ check image docker
sudo docker ps -a

+ xoa container docker
sudo docker rm ui-one

+ build docker local
sudo docker build . -t app2:v0.0.1
docker build . -t ui-app-test:v0.0.1 --add-host=nexus.digi-texx.vn:10.1.4.20

+ start docker image
sudo docker run -it --name ui-one --env API_ENDPOINT="sit-apollo.digi-texx.vn" app2:v0.0.1
docker run -it -p 3001:5000 --name ui-one --env API_ENDPOINT="sit-apollo.digi-texx.vn" app2:v0.0.1

+ sh xem cay thu muc image
sudo docker run -it --name ui-one --env API_ENDPOINT="sit-apollo.digi-texx.vn" app2:v0.0.1 sh

https://awesomeopensource.com/

"micro frontend", structure, open source
https://awesomeopensource.com/projects/microfrontends
https://survivejs.com/webpack/output/module-federation/
https://blog.bitsrc.io/revolutionizing-micro-frontends-with-webpack-5-module-federation-and-bit-99ff81ceb0
https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5.md
