var Navigation, RESERVED_PROPS, React, RouteToMixin, copyProperties, getUnreservedProps, isLeftClick, isModifiedEvent, withoutProperties;

React = require('react');

withoutProperties = require('react-router/modules/utils/withoutProperties');

copyProperties = require('react/lib/copyProperties');

Navigation = require('react-router').Navigation;

RESERVED_PROPS = {
  to: true,
  className: true,
  activeClassName: true,
  query: true,
  children: true
};

isLeftClick = function(event) {
  return event.button === 0;
};

isModifiedEvent = function(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

getUnreservedProps = function(props, additionalReservedProps) {
  var reservedProps;
  if (additionalReservedProps) {
    reservedProps = copyProperties({}, RESERVED_PROPS);
    reservedProps = copyProperties(reservedProps, additionalReservedProps);
  } else {
    reservedProps = RESERVED_PROPS;
  }
  return withoutProperties(props, reservedProps);
};

RouteToMixin = {
  mixins: [Navigation],
  getUnreservedProps: getUnreservedProps,
  propTypes: {
    to: React.PropTypes.string.isRequired,
    query: React.PropTypes.object
  },
  getParams: function() {
    return getUnreservedProps(this.props, this.additionalReservedProps);
  },
  getHref: function() {
    return this.makeHref(this.props.to, this.getParams(), this.props.query);
  },
  handleRouteTo: function(event) {
    if (isModifiedEvent(event) || !isLeftClick(event)) {
      return;
    }
    event.preventDefault();
    return this.transitionTo(this.props.to, this.getParams(), this.props.query);
  }
};

module.exports = RouteToMixin;
