FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN ls -la /usr/src/app


RUN npm install

COPY . .

EXPOSE 1337
CMD ["npm", "run", "dev"]