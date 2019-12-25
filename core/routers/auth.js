const express = require('express');
const router = express.Router();
const {SignupSerializer, SigninSerializer} = require('../serializers/auth');
const {login_required} = require("../utils");


// Регистрация
router.post('/signup', async (request, response) => {
    const serializer = new SignupSerializer(request.body);
    const validation = await serializer.is_valid();
    if (validation) await response.json(validation, status=400);
    const user = await serializer.create();
    await response.json(user);
});


// Вход в приложение
router.post('/signin', async (request, response) => {
    const serializer = new SigninSerializer(request.body);
    const validation = await serializer.is_valid();
    if (validation) await response.json(validation, status=400);
    const user = await serializer.auth();
    await response.json(user);
});


// Выход
router.post('/signout', async (request, response) => {
    await login_required(request, response).catch(null);
    await response.json({});
});


// Swagger
/**
 * @swagger
 * /auth/signup:
 *    post:
 *     description: Регистрация аккаунта
 *
 * @swagger
 * /auth/signin:
 *   post:
 *     description: Вход в аккаунт
 *
 * @swagger
 * /auth/signout:
    *   post:
    *     description: Выход из аккаунта
 */

module.exports = router;