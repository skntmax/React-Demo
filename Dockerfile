FROM node
WORKDIR /blog-ui
COPY package*.json .
RUN npm i 
COPY . .
ENTRYPOINT [ "npm" ,"start" ]