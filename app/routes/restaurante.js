const application = require('../../config/server.js').app;
//const restauranteService = require('../services/restaurante.js');

application.post('/restaurante', (req, res, next) => {
	res.send('Rota POST de restaurante funcionando.');

    // restauranteService.salvar(req, res).then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.send(err);
    // })
    // next();
});

application.get('/restaurante', (req, res, next) => {
	res.send('Rota GET de restaurante funcionando.');

    // restauranteService.buscarTodos().then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.send(err);
    // })
    // next();
});

module.exports = application;