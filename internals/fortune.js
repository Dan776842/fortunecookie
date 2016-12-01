var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

module.exports= {
    "getfortune": function (cb) {
        mongoClient.connect("mongodb:// 127.0.0.1:27017/aledan",
        function(err, db){
            var papers = db.collection("papers");
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
};
