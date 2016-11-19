var fortunes = [
"En todo tiempo ama el amigo.",
"Hijo de Irving que nace torcido.",
"El matrimonio es bueno para aquellos que tienen miedo a dormir solos.",
"Algunas veces el perder una batalla es la forma de encontrar un camino para ganar la guerra.",
"El mayor acto de amor hacia una persona es dejarla ir."];

function getIntRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
    "getFortune" : function(cb){
        var selector = getIntRandomNumber(0, fortunes.length - 1);
        //Construyendo un obejto respuesta
        var fortuneMessage = fortunes[selector];
        var fortunePaperObject = {
            "paper" : fortuneMessage
        };
        cb(JSON.stringify(fortunePaperObject));
    }
};