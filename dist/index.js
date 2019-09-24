'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 70px\n  background-color: white\n  padding: 0 30px\n  display: flex\n  align-items: center\n  margin-bottom: 40px\n  a:active, a:hover {\n    text-decoration: none\n  }\n  \n  border-bottom: 1px solid grey\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var NavBar = styled.nav(_templateObject());
var NavBar$1 = (function (_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children;
  return React.createElement(NavBar, {
    style: style
  }, children);
});

exports.NavBar = NavBar$1;
