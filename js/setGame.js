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
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            isClicked: !this.state.isClicked
        }, function() {
            this.props.handleClick(this);    
        });
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
            <div onClick={this.handleClick} className={`card ${this.props.color} ${this.state.isClicked === true ? 'clicked' : ''}`}>
                {shapes}
            </div>
        );
    }

}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            cardArray: [{
                shapeNumber: 1,
                symbol: 'menorah',
                color: 'purple',
                shading: 'solid'
            }, {
                shapeNumber: 2,
                symbol: 'snowman',
                color: 'green',
                shading: 'striped'
            }, {
                shapeNumber: 3,
                symbol: 'deer',
                color: 'red',
                shading: 'open'
            }, {
                shapeNumber: 1,
                symbol: 'deer',
                color: 'green',
                shading: 'striped'
            }, {
                shapeNumber: 3,
                symbol: 'snowman',
                color: 'purple',
                shading: 'solid'
            }, {
                shapeNumber: 2,
                symbol: 'deer',
                color: 'purple',
                shading: 'open'
            }, {
                shapeNumber: 3,
                symbol: 'menorah',
                color: 'green',
                shading: 'striped'
            }, {
                shapeNumber: 1,
                symbol: 'snowman',
                color: 'red',
                shading: 'open'
            }, {
                shapeNumber: 2,
                symbol: 'menorah',
                color: 'purple',
                shading: 'striped'
            }, {
                shapeNumber: 3,
                symbol: 'deer',
                color: 'green',
                shading: 'solid'
            }, {
                shapeNumber: 2,
                symbol: 'snowman',
                color: 'purple',
                shading: 'open'
            }, {
                shapeNumber: 1,
                symbol: 'menorah',
                color: 'purple',
                shading: 'solid'
            }],

            clickedCards: 0,
            clickedCardsArray: []
        }
    }
    handleClick(card) {
        var newArray = this.state.clickedCardsArray.slice();
        var newCard = card;
        newArray.push(newCard);
        this.setState({
            clickedCards: this.state.clickedCards + 1,
            clickedCardsArray: newArray
        });
    }
    componentDidUpdate() {
        if(this.state.clickedCards === 3) {
            console.log(this.state.clickedCardsArray[0]);
            console.log(this.state.clickedCardsArray[1]);
            console.log(this.state.clickedCardsArray[2]);
            var wasMatch =isMatch(this.state.clickedCardsArray[0], this.state.clickedCardsArray[1], this.state.clickedCardsArray[2] );
            console.log(wasMatch);
            if(true) {
                this.props.handleMatch(this.state.clickedCardsArray);
            }
            this.setState({
                clickedCards: 0,
                clickedCardsArray: []
            });
        }
    }
    render() {
        const cards = this.state.cardArray.map(
            (card, index) => <Card handleClick={this.handleClick} key={index} objId={card} shapeNumber={card.shapeNumber} symbol={card.symbol} color={card.color} shading={card.shading} />
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
            (card) => <span key = {card}>{card}</span>
        )
        return (
            <div>
                {matchedSets}
            </div>
        )
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
        newArray.push(completedSet)
        this.setState ( {
            completed: newArray
        })
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Board handleMatch = {this.copyCompleted}></Board>
                <CompletedSets set = {this.state.completed}></CompletedSets>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
