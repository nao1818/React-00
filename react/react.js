var Evaluator = React.createClass({
  getInitialState: function() {
    return {
      expresstion: ''
    };
  },

  reCalcValue: function(e) {
    if (e.key === 'Enter')
      this.setState({
        expresstion: e.target.value
      });
    },

  render: function() {
    return React.DOM.div(
      null,
      React.DOM.input({
        type: 'text',
        onKeyPress: this.reCalcValue
      }),
      React.DOM.h2(null,eval(this.state.expresstion))
    );
  }
});


ReactDOM.render(
  React.createElement(Evaluator),
  document.getElementById('content')
);
