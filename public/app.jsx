// Greeter component
var Greeter = React.createClass({
  // Default props
  getDefaultProps: function () {
    return {
      name: "React",
      message: "This is the default message!"
    };
  },

  // method available in react, give initial state of the property
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },

  // onSubmit action invoke onButtonClick, e = eventhandler
  onButtonClick: function (e) {
    e.preventDefault(); // since it is form, will prevent form from submitting on page refresh

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = "";

    if (typeof name == 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },

  render: function () {
    var name = this.state.name; //props
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message +'!!'}</p>
        <GreeterMessage/>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
        <GreeterForm/>
      </div>
    );
  }
});

// GreeterMessage component
var GreeterMessage = React.createClass({
  render: function () {
      return (
        <div>
          <h1>Some H1</h1>
          <p>Some Paragraph</p>
        </div>
      );
  }
});

// Greeter form
var GreeterForm = React.createClass({
  render: function () {
    return (
      <form>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
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
