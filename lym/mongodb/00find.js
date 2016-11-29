//Cargando el paquete mongobd
var mongodb = require("mongodb");

//Extrayendo el cliente que trae el paquete mongodb
var client = mongodb.MongoClient;

//1.- ¿A donde me voy a conectar?
// R. URL de conexión, 'string de conexion'
var url ='mongodb://localhost:27017/learnyoumongo';

//Conectando al cliente
client.connect(url, function(err, db){
    //Verificar si hubo un error
    if(err){
        console.log("> Error en la conexión.");
        throw err;
    }
    //Extrayendo la colección de trabajo
    var collection = db.collection("parrots");
    //Rescatando el primer argunmento
    var firstArg = process.argv[2];
    //Aplicando una operación sobre la colleción de trabajo
    collection.find({
        age : { $gt : +firstArg}
    }).toArray(function(err, documents){
      //Transformando la consulta en un arreglo
      if (err){
          console.log("> Error al convertir la consulta a un entero.");
          throw err;
      }  
      console.log(documents);
      db.close();
    });
});