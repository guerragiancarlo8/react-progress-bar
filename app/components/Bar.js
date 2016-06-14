var React = require('react');
var styles = require('../styles');

var Bar = React.createClass({
  render: function () {
    return (
      <div styles={styles.progress}>
        <div styles={styles.bar}></div>
      </div>
    )
  }
})

module.exports = Bar;
