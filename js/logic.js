var setGame = {};
var shapeNumber = [1,2,3,1,2,3,1,2,3,1,2,3];
var symbol=['menorah','snowman','deer','menorah','snowman','deer','menorah','snowman','deer','menorah','snowman','deer'];
var color=['red','green','purple','red','green','purple','red','green','purple','red','green','purple'];

var Cards= dispatch()

function dispatch () {
    var cardRet=[];
    for(var i=12;i>0;i--){
        var cardN = {};
        cardN.shape = shapeNumber[Math.floor(Math.random() * shapeNumber.length)];
        var indexShape=shapeNumber.indexOf(cardN.shape);
        shapeNumber.splice(indexShape, 1);
        cardN.symbol= symbol[Math.floor(Math.random()*symbol.length)];
        var indexSymbol=symbol.indexOf(cardN.symbol);
        symbol.splice(indexSymbol, 1);
        cardN.color= color[Math.floor(Math.random()*color.length)];
        var indexColor=color.indexOf(cardN.color);
        color.splice(indexColor, 1);
        cardRet.push(cardN);
    }return cardRet;

}
