class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello React Students!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    } 
}

ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
);
