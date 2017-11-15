// Greeter component
var Greeter = React.createClass({
  // Default props
  getDefaultProps: function () {
    return {
      name: "React",
      message: "This is the default message!"
    };
  },

  render: function () {
    var name = this.props.name; //props
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message +'!!'}</p>
      </div>
    );
  }
});

var firstName = "Jayesh";
var message = "Message from Prop"

// Render the dom elements or components
ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
