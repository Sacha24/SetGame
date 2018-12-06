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
            <div className="shape" symbol = {this.props.symbol} color = {this.props.color} shading = {this.props.shading}></div>
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
        const shapes = this.props.shapeNumber.map(
            () => <Shape symbol={this.props.symbol} color={this.props.color} shading={this.props.shading}></Shape>
        );
        return (
            <div className='card'>
                {shapes}
            </div>
        );
    }

}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardArray: this.props.cardArray,
        }
    }
    render() {
        const cards = this.props.cardArray.map(
            (card) => <Card key={card} id={card} shapeNumber={['1']} symbol={"diamonds"} color={"purple"} shading={"striped"} />
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
            cardArray: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Board cardArray={this.state.cardArray}></Board>
                {/* <CompletedSets></CompletedSets> */}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
