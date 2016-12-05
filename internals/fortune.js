var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

/*module.exports= {
    "getfortune": function (cb) {
        mongoClient.connect("mongodb://aledan:metallica1994@ds115918.mlab.com:15918/fortuneitgam",
        function(err, db){
            var papers = db.collection("paper");
            var consulta = papers.find({});
            consulta.toArray(function(err, data){
                var selector = Math.round(Math.random(0)* data.length);
                console.log("El numero de tu fortuna es: "+ selector);
                var fortunePaperObj = JSON.stringify(data[selector]);
                db.close();
                cb(fortunePaperObj);
            });
        });
    }
};*/

module.exports = {
    "getFortune" : function(cb){
        //mongoClient.connect("mongodb://127.0.0.1:27017/fortuneapp",
        mongoClient.connect("mongodb://aledan:metallica1994@ds115918.mlab.com:15918/fortuneitgam",
        function(err, db){
            if(err){
                console.log("> ERROR al conectarse a" +
                " la base de datos:"+
                " mongodb://127.0.0.1:27017/fortuneapp");
                //Armando el documento 

                var fortunePaper = {
                    "mensaje":
                    "en todo  tiempo ama el amigo"
                };
                var respuesta = JSON.stringify(fortunePaper);
                cb(respuesta);
            }else{
                var papersCollection = 
                db.collection("paper");
                var objetoRestultado = 
                papersCollection.find({});

                objetoRestultado.toArray(function(err, paper){
                    // Arreglo
                    var randomIndex = 
                    Math.round(Math.random(0)* paper.length);
                    var fortunePaperObj = 
                    JSON.stringify(paper[randomIndex]);
                    db.close()
                    console.log("> La fortuna es: " + fortunePaperObj);
                    cb(fortunePaperObj);
                });
            }
        });
    }
};

