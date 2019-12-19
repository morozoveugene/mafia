FROM node:9-alpine
RUN apk update && apk add --no-cache make git
COPY . /app
WORKDIR /app
EXPOSE 4444
CMD ["node", "run.js"]
