var setGame = {};
var shapeNumber = [1,2,3,1,2,3,1,2,3,1,2,3];
var symbol=['menorah','snowman','deer','menorah','snowman','deer','menorah','snowman','deer','menorah','snowman','deer'];
var color=['red','green','purple','red','green','purple','red','green','purple','red','green','purple'];
var shading=['solid','striped','open']

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
function isMatch(card1, card2, card3) {
    var diffShape = 0;
    var diffSymbol = 0;
    var diffColor = 0;
    var diffShading = 0;

    card1.shapeNumber != card2.shapeNumber ? null : diffShape++;
    card1.shapeNumber != card3.shapeNumber ? null : diffShape++;
    card2.shapeNumber != card3.shapeNumber ? null : diffShape++;

    card1.symbol != card2.symbol ? null : diffSymbol++;
    card2.symbol != card3.symbol ? null : diffSymbol++;
    card1.symbol != card3.symbol ? null : diffSymbol++;

    card1.color != card2.color ? null : diffColor++;
    card2.color != card3.color ? null : diffColor++;
    card1.color != card3.color ? null : diffColor++;

    card1.shading != card2.shading ? null : diffShading++;
    card2.shading != card3.shading ? null : diffShading++;
    card1.shading != card3.shading ? null : diffShading++;

    if((diffColor + diffSymbol + diffShape +diffShading == 0 || diffSymbol ==3) || (diffShape == 3 || diffColor ==3)) {
        return true;
    } else {
        return false;
    }
}
