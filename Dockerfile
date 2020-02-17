FROM node:12.16.0

COPY . .

RUN npm i

ENTRYPOINT ["/entrypoint.sh"]