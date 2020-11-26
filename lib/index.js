"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    if (!window.mt) {
      return console.warn('[mt]', 'Unable to send page view, mautic not initialized'); // eslint-disable-line no-console
    }

    window.mt('send', 'pageview', _objectSpread({}, options));
    return true;
  }
};
var _default = mautic;
exports["default"] = _default;