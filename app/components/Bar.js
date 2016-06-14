var React = require('react');
var styles = require('../styles');

var Bar = React.createClass({
  render: function () {
    return (
      <div id="progress" style={styles.progress}>
        <div id="bar" style={styles.bar}></div>
      </div>
    )
  }
})

module.exports = Bar;
