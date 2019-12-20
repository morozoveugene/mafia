# Пиздим ноду с докер репозитория
FROM node:13.5.0-alpine
# Название папки
ARG APP_DIR=app
# Создание папки
RUN mkdir -p ${APP_DIR}
# Делаем папку основной для контейнера
WORKDIR ${APP_DIR}
# Копируем package в корень
COPY package*.json ./
# Устанавливаем модули
RUN npm install
# Копируем установленное
COPY . .
# Биндим порт
EXPOSE 4444
# Запускаем сервис
CMD ["node", "run.js"]
