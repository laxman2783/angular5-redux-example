# FROM johnpapa/angular-cli as angular-built
# Using the above image allows us toskip the angular-cli install
FROM node:8.9-alpine as angular-built
WORKDIR /usr/src/app
RUN npm i -g @angular/cli
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod --build-optimizer

FROM nginx:alpine
LABEL author="myname"
COPY --from=angular-built /usr/src/app/dist/myapp /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]