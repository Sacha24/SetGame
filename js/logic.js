function isMatch(card1, card2, card3) {
    var diffShape = 0;
    var diffSymbol = 0;
    var diffColor = 0;
    var diffShading = 0;

    card1.shapeNumber != card2.shapeNumber ? null : diffShape++;
    card1.shapeNumber != card3.shapeNumber ? null : diffShape++;
    card1.shapeNumber != card3.shapeNumber ? null : diffShape++;

    card1.symbol != card2.symbol ? null : diffSymbol++;
    card2.symbol != card3.symbol ? null : diffSymbol++;
    card1.symbol != card3.symbol ? null : diffSymbol++;

    card1.color != card2.color ? null : diffColor++;
    card2.color != card3.color ? null : diffColor++;
    card1.color != card3.color ? null : diffColor++;

    card1.diffShading != card2.diffShading ? null : diffShading++;
    card2.diffShading != card3.diffShading ? null : diffShading++;
    card1.diffShading != card3.diffShading ? null : diffShading++;

    return diffColor + diffSymbol + diffShape +diffShading == 0 ? true : false;
}