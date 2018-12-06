class Shape extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            symbol: this.props.symbol,
            color: this.props.color,
            shading: this.props.shading
        }
    }
    render () {
        return (
            <div className={`shape ${this.state.symbol} ${this.state.color} ${this.state.shading}`} symbol = {this.state.symbol} color = {this.state.color} shading = {this.state.shading}></div>
        )
    }
}
class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>Hanuka Set Game</h1>
            </div>
        )
    }
}
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeNumber: this.props.shapeNumber,
            cardInformation: {
                shapeNumber: this.props.shapeNumber,
                symbol: this.props.symbol,
                color: this.props.color,
                shading: this.props.shading
            },
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            isClicked: true
        }, function() {
            this.props.handleClick(this.state.cardInformation);    
        });
    }
    componentWillReceiveProps(newProps) {
        if(newProps.isClicked === 'clear') {
            this.setState({
                isClicked: false
            });
        }
    }
    render() {
        var shapesArray = new Array(this.state.shapeNumber);
        for(var i=0; i < this.state.shapeNumber; i++) {
            shapesArray[i] = i;
        }
        const shapes =shapesArray.map(
            (content) => <Shape key={content} symbol={this.props.symbol} color={this.props.color} shading={this.props.shading}></Shape>
        );
        return (
            <div onClick={this.handleClick} className={`card ${this.state.isClicked === true ? 'clicked' : ''}`}>
                {shapes}
            </div>
        );
    }

}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.generated = Cards;
        this.state = {
            cardArray: this.generated,
            clickedCards: 0,
            clickedCardsArray: [],
            isClicked: ''
        }
    }
    handleClick(cardInformation) {
        var newArray = this.state.clickedCardsArray.slice();
        var newCard = cardInformation;
        newArray.push(newCard);
        this.setState({
            clickedCards: this.state.clickedCards + 1,
            clickedCardsArray: newArray,
            isClicked: 'process'
        });
    }
    componentDidUpdate() {
        if(this.state.clickedCards === 3) {
            var wasMatch =isMatch(this.state.clickedCardsArray[0], this.state.clickedCardsArray[1], this.state.clickedCardsArray[2] );
            if(wasMatch) {
                this.props.handleMatch(this.state.clickedCardsArray);
            }
            this.setState({
                clickedCards: 0,
                clickedCardsArray: [],
                isClicked: 'clear'
            });
        }
    }
    render() {
        const cards = this.state.cardArray.map(
            (card, index) => <Card isClicked={this.state.isClicked} handleClick={this.handleClick} key={index} objId={card} shapeNumber={card.shapeNumber} symbol={card.symbol} color={card.color} shading={card.shading} />
        )
        return (
            <div id="board">
                {cards}
            </div>
        );
    }
}
class CompletedSets extends React.Component {
    constructor (props) {
        super (props)
    }
    render () {
        const matchedSets = this.props.set.map(
            (cardSet, index) =>
            <div key={index}>
                <Card shapeNumber={cardSet[0].shapeNumber} symbol={cardSet[0].symbol} color={cardSet[0].color} shading={cardSet[0].shading} />
                <Card shapeNumber={cardSet[1].shapeNumber} symbol={cardSet[1].symbol} color={cardSet[1].color} shading={cardSet[1].shading} />
                <Card shapeNumber={cardSet[2].shapeNumber} symbol={cardSet[2].symbol} color={cardSet[2].color} shading={cardSet[2].shading} />
            </div>
        )
        return (
            <div>
                {matchedSets}
            </div>
        )
    }

}
class WinDiv extends React.Component {
    render() {
        return(
            <div>You won! you discovered 4 sets</div>
        );
    }
}
class App extends React.Component {
    constructor (props) {
        super (props)
        this.copyCompleted = this.copyCompleted.bind(this);
        this.setArray = [];
        this.state = {
            completed: []
        }
    }
    copyCompleted (completedSet) {
        var newArray = this.state.completed.slice();
        newArray.push(completedSet);
        this.setState ( {
            completed: newArray
        });
    }
    render() {
        return (
            <div>
                <Header></Header>
                { this.state.completed.length === 4 &&
                <WinDiv/>
                }
                <Board handleMatch={this.copyCompleted}></Board>
                <CompletedSets set={this.state.completed}></CompletedSets>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
