"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mautic = {
  initialize: function initialize(mtcPath) {
    if (!mtcPath) {
      return console.warn('[mt]', 'Unable to resolve mautic script'); // eslint-disable-line no-console
    }
    /* eslint-disable */


    (function (w, d, t, u, n, a, m) {
      w['MauticTrackingObject'] = n;

      w[n] = w[n] || function () {
        (w[n].q = w[n].q || []).push(arguments);
      };

      a = d.createElement(t);
      m = d.getElementsByTagName(t)[0];
      a.async = 1;
      a.src = u;
      m.parentNode.insertBefore(a, m);
    })(window, document, 'script', mtcPath, 'mt');
    /* eslint-enable */


    if (!window.mt) {
      console.warn('[mt]', 'Unable to initialize mautic'); // eslint-disable-line no-console
    }

    return true;
  },
  pageView: function pageView(options) {
    window.mt('send', 'pageview', _objectSpread({}, options));
  }
};
var _default = mautic;
exports.default = _default;