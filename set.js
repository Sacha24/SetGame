class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeNumber: this.props.shapeNumber
        }
    }
    render() {
        // const shapes = this.props.
        return(
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
        return(
            <div id="board">
                {cards}
            </div>
        );
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() {
        return(
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