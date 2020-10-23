module.exports = {
    name: 'MiRouter',
    register: async (server, options) => {
        server.route([
            {
                method: 'GET',
                path: '/base',
                handler: {
                    view: 'layout/base'
                }
            },
            {
                method: 'GET',
                path: '/anuncios',
                handler: async (req, h) => {
                    anunciosEjemplo = [
                        {titulo: "iphone", precio: 400},
                        {titulo: "xBox", precio: 300},
                        {titulo: "teclado", precio: 30},
                    ]
                    return h.view('anuncios',
                        {
                            usuario: 'jordan',
                            anuncios: anunciosEjemplo
                        });
                }
            },
            {
                method: 'GET',
                path: '/{param*}',
                handler: {
                    directory: {
                        path: './public'
                    }
                }
            },
            {
                method: 'GET',
                path: '/anuncio/{id}',
                handler: async (req, h) => {
                    return 'Anuncio id: ' + req.params.id;
                }
            },
            {
                method: 'GET',
                path: '/',
                handler: async (req, h) => {
                    respuesta = "Hola "
                    if (req.query.nombre != null)
                        respuesta+=req.query.nombre
                    if (req.query.apellido != null)
                        respuesta+=" "+req.query.apellido
                    return respuesta;
                }
            }
        ])
    }
}