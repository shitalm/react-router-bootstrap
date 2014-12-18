var ADDITIONAL_RESERVED_PROPS, IsActiveMixin, NavItem, NavItemLink, React, RouteToMixin;

React = require('react');

NavItem = require('react-bootstrap/NavItem');

IsActiveMixin = require('./IsActiveMixin');

RouteToMixin = require('./RouteToMixin');

ADDITIONAL_RESERVED_PROPS = {
  active: true,
  activeHref: true,
  activeKey: true,
  key: true,
  navItem: true,
  onSelect: true,
  ref: true
};

NavItemLink = React.createClass({
  displayName: 'NavItemLink',
  mixins: [IsActiveMixin],
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS,
  render: function() {
    return this.transferPropsTo(NavItem({
      "href": this.getHref(),
      "active": this.state.isActive,
      "onClick": this.handleRouteTo
    }, this.props.children));
  }
});

module.exports = NavItemLink;
