webpackJsonp([11], {
  './node_modules/babel-loader/lib/index.js?{"presets":["/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-react/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-es2015/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-stage-0/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-env/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-stage-0/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/iwa/Documents/gatsby-starter-bootstrap/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/profile/index.jsx': function(
    e,
    t,
    a
  ) {
    'use strict'
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function s(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
    }
    function n(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      ;(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t))
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var c = (function() {
        function e(e, t) {
          for (var a = 0; a < t.length; a++) {
            var l = t[a]
            ;(l.enumerable =
              l.enumerable || !1), (l.configurable = !0), 'value' in l &&
              (l.writable = !0), Object.defineProperty(e, l.key, l)
          }
        }
        return function(t, a, l) {
          return a && e(t.prototype, a), l && e(t, l), t
        }
      })(),
      r = a('./node_modules/react/react.js'),
      d = l(r),
      i = (function(e) {
        function t() {
          return s(this, t), o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        }
        return n(t, e), c(t, [
          {
            key: 'render',
            value: function() {
              return d.default.createElement(
                'div',
                null,
                d.default.createElement(
                  'section',
                  { className: 'text-center' },
                  d.default.createElement(
                    'div',
                    { className: 'container' },
                    d.default.createElement('img', {
                      src: '/img/profile.jpg',
                      alt: 'jaxx2104',
                      className: 'rounded-circle mx-auto d-block',
                      width: '120px',
                    }),
                    d.default.createElement('h1', null, 'jaxx2104'),
                    d.default.createElement(
                      'p',
                      { className: 'lead text-muted' },
                      'I love bug'
                    ),
                    d.default.createElement(
                      'div',
                      null,
                      d.default.createElement(
                        'a',
                        {
                          ref: 'ghButton',
                          className: 'github-button',
                          href: 'https://github.com/jaxx2104',
                          'aria-label': 'Follow @jaxx2104 on GitHub',
                        },
                        'Follow @jaxx2104'
                      ),
                      ' ',
                      d.default.createElement(
                        'a',
                        {
                          ref: 'twButton',
                          href: 'https://twitter.com/jaxx2104',
                          className: 'twitter-follow-button',
                          'data-show-count': 'false',
                        },
                        'Follow @jaxx2104'
                      )
                    )
                  )
                ),
                d.default.createElement(
                  'section',
                  { id: 'features', className: 'bg-danger text-center' },
                  d.default.createElement(
                    'div',
                    { className: 'container' },
                    d.default.createElement(
                      'div',
                      { className: 'row' },
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-12 ' },
                        d.default.createElement(
                          'h2',
                          { className: 'section-heading' },
                          'SKIL'
                        ),
                        d.default.createElement('hr', { className: 'primary' })
                      )
                    )
                  ),
                  d.default.createElement(
                    'div',
                    { className: 'container' },
                    d.default.createElement(
                      'div',
                      { className: 'row justify-content-md-center' },
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'HTML',
                          },
                          d.default.createElement('i', {
                            className: 'devicon-html5-plain wow bounceIn',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'Sass',
                          },
                          d.default.createElement('i', {
                            className: 'devicon-sass-original wow bounceIn',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'JavaScript',
                          },
                          d.default.createElement('i', {
                            className: 'devicon-javascript-plain wow bounceIn',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'React.js',
                          },
                          d.default.createElement('i', {
                            className: 'devicon-react-original wow bounceIn',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'Vue.js',
                          },
                          d.default.createElement('i', {
                            className: 'devicon-vuejs-plain wow bounceIn',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      )
                    ),
                    d.default.createElement(
                      'div',
                      { className: 'row justify-content-md-center' },
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'Node.js',
                          },
                          d.default.createElement('i', {
                            className:
                              'devicon-nodejs-plain-wordmark wow bounceIn',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6 ' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'PHP',
                          },
                          d.default.createElement('i', {
                            className: 'devicon-php-plain wow bounceIn',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6 ' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'Swift',
                          },
                          d.default.createElement('i', {
                            className:
                              'devicon-swift-plain-wordmark wow bounceIn',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6 ' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'AWS',
                          },
                          d.default.createElement('i', {
                            className:
                              'devicon-amazonwebservices-plain-wordmark',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-2 col-6 ' },
                        d.default.createElement(
                          'div',
                          {
                            className: 'service-box',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'Nginx',
                          },
                          d.default.createElement('i', {
                            className: 'devicon-nginx-original',
                            'data-wow-duration': '2.0s',
                          })
                        )
                      )
                    )
                  )
                ),
                d.default.createElement(
                  'section',
                  { id: 'features', className: 'text-center' },
                  d.default.createElement(
                    'div',
                    { className: 'container' },
                    d.default.createElement(
                      'div',
                      { className: 'row' },
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-12' },
                        d.default.createElement(
                          'h2',
                          { className: 'section-heading' },
                          'Features '
                        ),
                        d.default.createElement('hr', { className: 'primary' })
                      )
                    )
                  ),
                  d.default.createElement(
                    'div',
                    { className: 'container' },
                    d.default.createElement(
                      'div',
                      { className: 'service-box' },
                      d.default.createElement('p', null, 'sample text :D')
                    )
                  )
                ),
                d.default.createElement(
                  'section',
                  { className: 'bg-danger text-center', id: 'concept' },
                  d.default.createElement(
                    'div',
                    { className: 'container' },
                    d.default.createElement(
                      'div',
                      { className: 'row' },
                      d.default.createElement(
                        'div',
                        { className: 'col-lg-12' },
                        d.default.createElement(
                          'h2',
                          { className: 'section-heading' },
                          'WORKS '
                        ),
                        d.default.createElement('hr', { className: 'light' })
                      )
                    )
                  ),
                  d.default.createElement(
                    'div',
                    { className: 'container' },
                    d.default.createElement(
                      'div',
                      { className: 'row' },
                      d.default.createElement(
                        'div',
                        {
                          className: 'col-md-6 wow slideInLeft',
                          'data-wow-duration': '1.0s',
                        },
                        d.default.createElement('img', {
                          src: '/img/work1.png',
                          alt: 'work1',
                          className: 'rounded-circle mx-auto',
                        }),
                        d.default.createElement('p', null, 'work1')
                      ),
                      d.default.createElement(
                        'div',
                        {
                          className: 'col-md-6 wow slideInRight',
                          'data-wow-duration': '1.0s',
                        },
                        d.default.createElement('img', {
                          src: '/img/work2.png',
                          alt: 'work2',
                          className: 'rounded-circle mx-auto',
                        }),
                        d.default.createElement('p', null, 'work2')
                      )
                    )
                  )
                ),
                d.default.createElement(
                  'section',
                  { id: 'repos' },
                  d.default.createElement(
                    'div',
                    { className: 'container' },
                    d.default.createElement(
                      'div',
                      { className: 'row' },
                      d.default.createElement(
                        'div',
                        { className: 'col-md-6 ' },
                        d.default.createElement(
                          'h2',
                          { className: 'section-heading' },
                          'Repositories'
                        )
                      ),
                      d.default.createElement(
                        'div',
                        { className: 'col-md-6 text-xs-left' },
                        d.default.createElement(
                          'li',
                          null,
                          d.default.createElement('a', { href: '' }, 'sample')
                        ),
                        d.default.createElement(
                          'li',
                          null,
                          d.default.createElement('a', { href: '' }, 'sample')
                        ),
                        d.default.createElement(
                          'li',
                          null,
                          d.default.createElement('a', { href: '' }, 'sample')
                        )
                      )
                    )
                  )
                )
              )
            },
          },
        ]), t
      })(d.default.Component)
    ;(t.default = i), (e.exports = t.default)
  },
})
//# sourceMappingURL=page-component---src-pages-profile-index-jsx-8ad2808eb192728f6e4f.js.map
