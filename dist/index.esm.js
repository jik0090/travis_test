import React from 'react';
import styled from 'styled-components';

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  border-top: 1px solid red\n  height: 200px\n\n  display: flex\n  align-items: center\n\n  span {\n    padding-left: 30px\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute\n  bottom: 0\n  height: 100px\n  padding: 0 30px\n  width: 100%\n  box-sizing: border-box\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Footer = styled.footer(_templateObject());
var FooterBox = styled.div(_templateObject2(), font.Text);
var Footer$1 = (function (_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return React.createElement(Footer, {
    style: style
  }, React.createElement(FooterBox, {
    opacity: "6"
  }, React.createElement("span", null, "\xA9 2019 linewalks. All rights reserved.")));
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  height: 70px\n  background-color: white\n  padding: 0 30px\n  display: flex\n  align-items: center\n  margin-bottom: 40px\n\n  a:active, a:hover {\n    text-decoration: none\n  }\n  \n  border-bottom: 1px solid grey\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var NavBar = styled.nav(_templateObject$1());
var NavBar$1 = (function (_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children;
  return React.createElement(NavBar, {
    style: style
  }, children);
});

export { Footer$1 as Footer, NavBar$1 as NavBar };
