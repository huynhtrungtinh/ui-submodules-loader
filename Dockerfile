FROM node:12.16.0-alpine AS  release

MAINTAINER X-Men x@digi-texx.vn

EXPOSE 5000

RUN npm config set registry "https://nexus.digi-texx.vn/repository/npm/" && mkdir -p /usr/src/app  

# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Install app dependencies
RUN mv -f /usr/src/app/src/config.ts.tmpl /usr/src/app/src/config.ts
RUN yarn 

COPY package.json /usr/src/app/


RUN  rm -rf release \
    &&  yarn build && yarn build:gpkg

FROM node:12.16.0-alpine
EXPOSE 5000
WORKDIR /usr/src/app/

COPY --from=release /usr/src/app/serve/ /usr/src/app/ 
COPY --from=release /usr/src/app/build /usr/src/app/public


RUN apk add --no-cache bash && \
    npm install -g envsub && \
    npm install && \
    chmod +x ./configure-and-run.sh

CMD [ "./configure-and-run.sh" ]