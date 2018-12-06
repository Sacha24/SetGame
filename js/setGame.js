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
        console.log(this.state.symbol);
        return (
            <div className={`shape ${this.state.symbol} ${this.state.color} ${this.state.shading}`} symbol = {this.state.symbol} color = {this.state.color} shading = {this.state.shading}></div>
        )
    }
}
class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>Welcome to the Set Game</h1>
            </div>
        )
    }
}
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeNumber: this.props.shapeNumber
        }
    }
    render() {
        var i =0;
        var shapeArr = Array(this.state.shapeNumber).fill(<Shape key={i++} symbol={this.props.symbol} color={this.props.color} shading={this.props.shading}></Shape>);
        return (
            <div className='card'>
                {shapeArr}
            </div>
        );
    }

}
class Board extends React.Component {
    constructor(props) {
        super(props);
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
            }]
        }
    }
    render() {
        const cards = this.state.cardArray.map(
            (card, index) => <Card key={index} objId={card} shapeNumber={[card.shapeNumber]} symbol={card.symbol} color={card.color} shading={card.shading} />
        )
        return (
            <div id="board">
                {cards}
            </div>
        );
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Board></Board>
                {/* <CompletedSets></CompletedSets> */}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
