FROM node:12.16.0

WORKDIR /src/github.com/

COPY . .

RUN npm i
RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]