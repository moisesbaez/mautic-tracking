const mautic = {
  initialize: (mtcPath) => {
    if (!mtcPath) {
      return console.warn('[mt]', 'Unable to resolve mautic script'); // eslint-disable-line no-console
    }

    /* eslint-disable */
    (function(w, d, t, u, n, a, m) {
      w['MauticTrackingObject'] = n;
      w[n] = w[n] || function() {
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

  pageView: (options) => {
    if (!window.mt) {
      return console.warn('[mt]', 'Unable to send page view, mautic not initialized'); // eslint-disable-line no-console
    }

    window.mt('send', 'pageview', { ...options });

    return true;
  },
};

export default mautic;
