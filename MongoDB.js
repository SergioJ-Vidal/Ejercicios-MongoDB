// 1.1. Desarrollar el Proyecto

// A continuación, creará su propia base de datos de red social con las siguientes colecciones:

"use SocialNetwork"

// Users

db.createCollection('Users')

// Posts

db.createCollection('Posts')

// 1.2. Ejecute las siguientes consulta

// A continuación tendrás que realizar las siguientes consultas MongoDB:

// 1.2.1 INSERTAR DATOS

// Insertar al menos 15 publicaciones nuevas con almenos 2 comentarios por publicación:
// Title, Body, Username, Comments, Username, Body

db.Posts.insertMany([

    {
        Title: "Espanya ens roba", Body: "Visca Catalunya", Username: "Pep Guardiola",
        comments: [{ body: 'Eso es mentira', username: 'Albert Rivera' }, { body: 'Estos nacionalistas', username: 'Feijo PP' }]
    },

    {
        Title: "Valencia C.F juega mal", Body: "No dan pie con bola", Username: "Sergio",
        comments: [{ body: 'No es problema de Gattuso', username: 'Che fanatic' }, { body: 'Mañana ganamos', username: 'Positivo' }]
    },

    {
        Title: "Mañana llueve", Body: "Asco de tiempo", Username: "Sofía",
        comments: [{ body: 'Ya te digo', username: 'Sophie Supporter' }, { body: 'Pero pasado hará sol', username: 'Meteorólogo' }]
    },

    {
        Title: "Esta ruta es la hostia", Body: "Hice la ruta con dos amigos", Username: "Germán",
        comments: [{ body: '¿Se puede hacer en bici?', username: 'Biker' }, { body: 'Yo la hice y es genial', username: 'Caminante' }]
    },

    {
        Title: "Estoy cansado todo el día", Body: "No sé que me pasa", Username: "Apático",
        comments: [{ body: 'Hay que comer bien', username: 'Nutricionista' }, { body: 'Intenta desconectar', username: 'Psicólogo' }]
    },

    {
        Title: "Los trenes no dan a basto", Body: "Que vergüenza", Username: "Quejica",
        comments: [{ body: 'Al ser grautito es lo que hay', username: 'Conformista' }, { body: '¿Y los retrasos que hay?', username: 'Amargado' }]
    },

    {
        Title: "Rutina de gym", Body: "¿Qué rutina hacéis?", Username: "Chico Fitness",
        comments: [{ body: 'Acuerdate de suplementarte', username: 'Dopado' }, { body: '4 días por semana', username: 'Natural' }]
    },

    {
        Title: "Precio de los pisos", Body: "Están bajando", Username: "Especulador",
        comments: [{ body: 'Los adosados los están regalando', username: 'Sin vecinos' }, { body: 'Será por tu zona', username: 'Negativo' }]
    },

    {
        Title: "Gandía en verano", Body: "Está llenísima", Username: "Gandia City",
        comments: [{ body: 'Es horrible', username: 'Veranito' }, { body: 'Yo me voy a Cullera', username: 'Aislado' }]
    },

    {
        Title: "Test 1", Body: "Testing", Username: "Test User",
        comments: [{ body: 'Test', username: 'Test22' }, { body: 'Test', username: 'Test23' }]
    },

    {
        Title: "Test 2", Body: "Testing", Username: "Test User2",
        comments: [{ body: 'Test', username: 'Test32' }, { body: 'Test', username: 'Test33' }]
    },

    {
        Title: "Test 3", Body: "Testing", Username: "Test User3",
        comments: [{ body: 'Test', username: 'Test42' }, { body: 'Test', username: 'Test43' }]
    },

    {
        Title: "Test 4", Body: "Testing", Username: "Test User4",
        comments: [{ body: 'Test', username: 'Test52' }, { body: 'Test', username: 'Test53' }]
    },

    {
        Title: "Test 5", Body: "Testing", Username: "Test User5",
        comments: [{ body: 'Test', username: 'Test62' }, { body: 'Test', username: 'Test63' }]
    },

    {
        Title: "Test 6", Body: "Testing", Username: "Test User6",
        comments: [{ body: 'Test', username: 'Test72' }, { body: 'Test', username: 'Test73' }]
    },

    {
        Title: "Test 7", Body: "Testing", Username: "Test User7",
        comments: [{ body: 'Test', username: 'Test82' }, { body: 'Test', username: 'Test83' }]
    },

])

// Insertar al menos 10 nuevos usuarios:
// Username, Email, Age

db.Users.insertMany([

    { Username: "Paco", Email: "Paco@gmail.com", Age: 35 },

    { Username: "Matías", Email: "Matias@gmail.com", Age: 22 },

    { Username: "Arévalo", Email: "Arevalo@gmail.com", Age: 18 },

    { Username: "Sergio", Email: "Sergio@gmail.com", Age: 47 },

    { Username: "Daniel", Email: "Daniel@gmail.com", Age: 24 },

    { Username: "María", Email: "Maria@gmail.com", Age: 61 },

    { Username: "Jose", Email: "Jose@gmail.com", Age: 27 },

    { Username: "Marcos", Email: "Marcos@gmail.com", Age: 39 },

    { Username: "Enrique", Email: "Enrique@gmail.com", Age: 42 },

    { Username: "Esteban", Email: "Esteban@gmail.com", Age: 55 }

])

// 1.2.2 ACTUALIZAR DATOS

// Actualizar publicaciones:
// Actualiza todos los campos de una publicación

db.Posts.updateOne({ Title: 'Espanya ens roba' },

    { $set: { Title: "Europa", Body: "Bla bla", Username: "Leopoldo" } })

// Cambiar el body de una publicación.

db.Posts.updateOne({ Title: 'Europa' },

    { $set: { Body: "Europa no va bien" } })

// Actualiza el comentario de una publicación.

db.Posts.updateOne({ Title: 'Europa' },

    {
        $set: {
            comments: [{ body: 'Comment One', username: 'Mary Williams' },

            { body: 'Comment Two', username: 'Harry White' }]
        }

    })

// Actualizar usuarios:
// Actualiza todos los campos de un usuario

db.Users.updateOne({ Username: 'Paco' },

    { $set: { Username: "Pedro", Email: "Pedro@gmail.com", Age: 31 } })

// Cambiar el email de dos usuarios es decir hacer la query dos veces.

db.Users.updateOne({ Username: 'Pedro' },

    { $set: { Email: "pedro200@gmail.com" } })

db.Users.updateOne({ Username: 'Sergio' },

    { $set: { Email: "sergio400@gmail.com" } })

// Aumenta en 5 años la edad de un usuario

db.Users.updateOne({ Username: 'Pedro' },

    { $inc: { Age: 5 } })

// 1.2.3 OBTENER DATOS

// Seleccionar todas las publicaciones

db.Posts.find()

// Selecciona las publicaciones que coincidan con el username indicado

db.Posts.find({ Username: 'Sergio' })

// Seleccione todos los usuarios con una edad mayor a 20

db.Users.find({ Age: { $gt: 20 } })

// Seleccione todos los usuarios con una edad inferior a 23

db.Users.find({ Age: { $lt: 23 } })

// Seleccione todos los usuarios que tengan una edad entre 25 y 30 años

db.Users.find({ $and: [{ Age: { $gt: 25 } }, { Age: { $lt: 30 } }] })

// Muestra los usuarios de edad menor a mayor y viceversa

db.Users.find().sort({ Age: 1 })

db.Users.find().sort({ Age: -1 })

// Seleccione el número total de usuarios

db.Users.find().count()

// Seleccione todas las publicaciones y haz que se muestren con la siguiente estructura: Título de la publicación: "title one"

db.Posts.find().forEach((doc) => {

    print("Título de las publicaciones: " + doc.Title)

})

// Selecciona solo 2 usuarios

db.Users.find().limit(2)

// Busca por title 2 publicaciones

db.Posts.find().limit(2).forEach((doc) => {

    print("Title: " + doc.Title)

})

// 1.2.4 BORRAR DATOS

// Elimina a todos los usuarios con una edad mayor a 30

db.Users.deleteMany({ Age: { $gt: 30 } })

// 1.3 Extra

// Seleccione el número total de publicaciones que tienen más de un comentario

db.Posts.find({comments : {$exists:true}, $where:'this.comments.length>1'}).count()

// Seleccione la última publicación creada

db.Posts.find().sort({ _id: -1 }).limit(1)

// Selecciona 5 publicaciones y que sean las últimas creadas

db.Posts.find().sort({ _id: -1 }).limit(5)

// Elimina todas las publicaciones que tengan más de un comentario

db.Posts.deleteMany({comments : {$exists:true}, $where:'this.comments.length>1'})

