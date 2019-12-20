## Запуск
#### Продакшн
`docker-compose up`
#### Локально
###### Для того, чтобы видеть изменения при написании кода со включенным сервером
`npm run dev`
#### Если появляются ошибки, при запуске локального сервера:
`rm -rf node_modules/ && npm i`

## Envs
#### NodeJS
PORT=<Порт>
MONGO_USER=<Пользователь>
MONGO_PASSWORD=<Пароль>
MONGO_COLLECTION=<База данных>

