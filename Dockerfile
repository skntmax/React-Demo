FROM node:20.0.0
WORKDIR /blog-ui
COPY package*.json .
RUN npm install
COPY . .
ENTRYPOINT [ "npm" ,"start" ]