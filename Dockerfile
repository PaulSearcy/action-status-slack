FROM node:12.16.0

COPY . .

RUN npm i

RUN printenv

RUN node index.js