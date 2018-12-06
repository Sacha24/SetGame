var setGame = {};
var shapeNumber = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
var symbol = ['menorah', 'snowman', 'deer', 'menorah', 'snowman', 'deer', 'menorah', 'snowman', 'deer', 'menorah', 'snowman', 'deer'];
var color = ['red', 'green', 'purple', 'red', 'green', 'purple', 'red', 'green', 'purple', 'red', 'green', 'purple'];
var shading = ['solid', 'striped', 'open', 'solid', 'striped', 'open', 'solid', 'striped', 'open', 'solid', 'striped', 'open']


var Cards = dispatch();

function dispatch() {
    var cardRet = [];
    while (symbol.length > 0) {
        for (var i = 12; i > 0; i--) {
            var cardN = {};
            cardN.shapeNumber = shapeNumber[Math.floor(Math.random() * shapeNumber.length)];
            var indexShape = shapeNumber.indexOf(cardN.shapeNumber);
            shapeNumber.splice(indexShape, 1);
            cardN.shading = shading[Math.floor(Math.random() * shading.length)];
            var indexborder = shading.indexOf(cardN.shading);
            shading.splice(indexborder, 1);
            cardN.symbol = symbol[Math.floor(Math.random() * symbol.length)];
            var indexSymbol = symbol.indexOf(cardN.symbol);
            symbol.splice(indexSymbol, 1);
            cardN.color = color[Math.floor(Math.random() * color.length)];
            var indexColor = color.indexOf(cardN.color);
            color.splice(indexColor, 1);
            if (cardRet.indexOf(cardN) < 0) {
                cardRet.push(cardN);
            }
        }
    }
    return cardRet;
}
function isMatch(card1, card2, card3) {
    var counter = 0;
    if ((card1.color === card2.color && card2.color === card3.color) || (card1.color !== card2.color && card1.color !== card3.color && card2.color !== card3.color)) {
        counter++;
    }
    if ((card1.symbol === card2.symbol && card2.symbol === card3.symbol) || (card1.symbol !== card2.symbol && card1.symbol !== card3.symbol && card2.symbol !== card3.symbol)) {
        counter++;
    }
    if ((card1.shapeNumber === card2.shapeNumber && card2.shapeNumber === card3.shapeNumber) || (card1.shapeNumber !== card2.shapeNumber && card1.shapeNumber !== card3.shapeNumber && card2.shapeNumber !== card3.shapeNumber)) {
        counter++;
    }
    if ((card1.shading === card2.shading && card2.shading === card3.shading) || (card1.shading !== card2.shading && card1.shading !== card3.shading && card2.shading !== card3.shading)) {
        counter++;
    }
    return counter === 4;
}
