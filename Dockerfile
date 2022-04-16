FROM node:14.17.2
RUN apt-get update 
WORKDIR /app
COPY . .
RUN npm install 
CMD [ "npm","start" ]