// Greeter component
var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello React</h1>
        <p>This is from a component</p>
      </div>
    );
  }
});

// Render the dom elements or components
ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
