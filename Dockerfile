FROM node:12.16.0

COPY . .

RUN npm i
RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]