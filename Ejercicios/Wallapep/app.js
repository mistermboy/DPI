// Módulos
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const routes = require("./routes.js");
// Servidor
const server = Hapi.server({
    port: 8080,
    host: 'localhost',
});

const iniciarServer = async () => {
    try {
        // Registrar el Inter antes de usar directory en routes
        await server.register(Inert);
        await server.register(Vision);
        await server.register(routes);
        await server.views({
            engines: {
                html: require('handlebars')
            },
            relativeTo: __dirname,
            path: './views',
            context : {
                sitioWeb: "wallapep"
            }
        });
        await server.start();
        console.log('Servidor localhost:8080');
    } catch (error) {
        console.log('Error '+error);
    }
};
iniciarServer();