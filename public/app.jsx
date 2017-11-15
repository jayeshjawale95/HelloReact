// Greeter component
var Greeter = React.createClass({
  // Default props
  getDefaultProps: function () {
    return {
      name: "React",
      message: "This is the default message!"
    };
  },

  // onSubmit action invoke onButtonClick, e = eventhandler
  onButtonClick: function (e) {
    e.preventDefault(); // since it is form, will prevent form from submitting on page refresh
    var name = this.refs.name.value;
    alert(name);
  },

  render: function () {
    var name = this.props.name; //props
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message +'!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

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
