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