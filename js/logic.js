var setGame = {};
var shapeNumber = [1,2,3];
var symbol=['menorah','snowman','deer'];
var color=['red','green','purple'];

var Cards= dispatch()

function dispatch () {
    var cardN=[];
    for(var i=0;i<shapeNumber.length;i++){
        cardN[i].shape = shapeNumber[Math.floor(Math.random() * shapeNumber.length)];
        var indexShape=shapeNumber.indexOf(cardN.shape);
        shapeNumber.splice(indexShape, 1);
        cardN[i].symbol= symbol[Math.floor(Math.random()*symbol.length)];
        var indexSymbol=symbol.indexOf(cardN.symbol);
        symbol.splice(indexSymbol, 1);
        cardN[i].color= color[Math.floor(Math.random()*color.length)];
        var indexColor=color.indexOf(cardN.color);
        color.splice(indexColor, 1);
    }return cardN;

}
