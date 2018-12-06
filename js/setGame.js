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
            <div symbol = {this.props.symbol} color = {this.props.color} shading = {this.props.shading}></div>
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
class CompletedSets extends React.Component {
    constructor (props) {
        super (props)
    }
    
    render () {
        return (
            <div>
                <span attributes = {this.props.done[0]}></span>
                <span attributes = {this.props.done[1]}></span>
                <span attributes = {this.props.done[2]}></span>
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
        const shapes = this.props.shapeNumber.map(
            () => <Shape symbol={this.props.symbol} color={this.props.color} shading={this.props.shading}></Shape>
        );
        return (
            <div>
                {shapes}
            </div>
        );
    }

}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardArray: this.props.cardArray
        }
    }
    render() {
        const cards = this.props.cardArray.map(
            (card) => <Card key={card} id={card} shapeNumber={this.state.cardArray} symbol={"diamonds"} color={"purple"} shading={"striped"}/>
        )
        return (
            <div id="board">
                {cards}
            </div>
        );
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardArray: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            doneSet: {}
        }
    }
    storeCardArray (completedSet) {
        this.setState ({
            doneSet: completedSet
        })

    }
    render() {
        return (
            <div>
                <Header></Header>
                <Board cardArray={this.state.cardArray} handleClick = {this.storeCardArray}></Board>
                <CompletedSets done = {this.state.doneSet}></CompletedSets>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
