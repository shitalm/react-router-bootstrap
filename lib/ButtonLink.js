var ADDITIONAL_RESERVED_PROPS, Button, ButtonLink, React, RouteToMixin;

React = require('react');

Button = require('react-bootstrap/Button');

RouteToMixin = require('./RouteToMixin');

ADDITIONAL_RESERVED_PROPS = {
  key: true,
  ref: true
};

ButtonLink = React.createClass({
  displayName: 'ButtonLink',
  mixins: [RouteToMixin],
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS,
  render: function() {
    return this.transferPropsTo(Button({
      "href": this.getHref(),
      "onClick": this.handleRouteTo
    }, this.props.children));
  }
});

module.exports = ButtonLink;
