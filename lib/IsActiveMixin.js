var ActiveState, IsActiveMixin, React, RouteToMixin;

React = require('react');

ActiveState = require('react-router/modules/mixins/ActiveState');

RouteToMixin = require('./RouteToMixin');

IsActiveMixin = {
  mixins: [ActiveState, RouteToMixin],
  getInitialState: function() {
    return {
      isActive: this.isActive(this.props.to, this.getParams(), this.props.query)
    };
  },
  componentWillReceiveProps: function(nextProps) {
    var params;
    params = this.getUnreservedProps(nextProps, this.additionalReservedProps);
    return this.setState({
      isActive: this.isActive(nextProps.to, params, nextProps.query)
    });
  },
  updateActiveState: function() {
    return this.setState({
      isActive: this.isActive(this.props.to, this.getParams(), this.props.query)
    });
  }
};

module.exports = IsActiveMixin;
