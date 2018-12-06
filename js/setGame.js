<<<<<<< HEAD
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
                <Shape/>
            </div>
        )
    }
}
function render() {
    ReactDOM.render(
        <Header />,
        document.getElementById("root")
    );
}
render();
=======
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeNumber: this.props.shapeNumber
        }
    }
    render() {
        // const shapes = this.props.
        return (
            <Shape symbol={this.props.symbol} color={this.props.color} shading={this.props.shading}></Shape>
        );
    }

}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfCards: 12
        }
    }
    render() {
        const cards = this.props.cardArray.map(
            (card) => <Card key={card} id={card} shapeNumber={} symbol={} color={} shading={} />
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

        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Board></Board>
                <CompletedSets></CompletedSets>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
>>>>>>> b2798bcd5afcebba3ffce89f698c7ddf3dc35fa0
