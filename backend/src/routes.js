const express = require('express');

const routes = express.Router();

const ongCtrl = require('./controllers/ongControllers');
const incidentCtrl = require('./controllers/incidentController');
const profileCtrl = require('./controllers/profileController');
const sessionCtrl = require('./controllers/sessionController');

routes.post('/session', sessionCtrl.create);

routes.get('/ongs', ongCtrl.index);
routes.post('/ongs', ongCtrl.create);

routes.get('/incidents', incidentCtrl.index);
routes.post('/incidents', incidentCtrl.create);
routes.delete('/incidents/:id', incidentCtrl.delete);

routes.get('/profile', profileCtrl.index);

module.exports = routes;