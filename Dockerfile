FROM node:17.8-alpine

WORKDIR /app

COPY package*.json ./

RUN apk --no-cache add curl

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "sh", "-c", "npm run prestart:prod && npm run start:prod" ]
