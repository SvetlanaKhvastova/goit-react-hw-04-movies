(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3,1,9,18],{34:function(e,t,n){"use strict";n.r(t);var r=n(84),a=n.n(r),s=n(85),c=n(86),i=n.n(c),o="ca68a7af060f5e9f7b7eefce94561f3e";function u(){return(u=Object(s.a)(a.a.mark((function e(){var t,n,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/all/day?api_key=".concat(o),e.next=3,i.a.get(t);case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.next=9,r.results;case 9:return s=e.sent,console.log(s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?query=".concat(t,"&api_key=").concat(o),e.next=3,i.a.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,e.next=9,s.results;case 9:return c=e.sent,console.log(c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"?api_key=").concat(o),console.log(n),e.next=4,i.a.get(n);case 4:return r=e.sent,e.next=7,r.data;case 7:return s=e.sent,console.log(s),e.next=11,s.results;case 11:return c=e.sent,console.log(c),e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/credits?api_key=").concat(o),e.next=3,i.a.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,e.next=9,s.results;case 9:return c=e.sent,console.log(c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/reviews?api_key=").concat(o),e.next=3,i.a.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,e.next=9,s.results;case 9:return c=e.sent,console.log(c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.defaults.baseURL="https://api.themoviedb.org/3/";var g={getTrending:function(){return u.apply(this,arguments)},searchMovies:function(e){return l.apply(this,arguments)},getMovieDetails:function(e){return p.apply(this,arguments)},getMovieCredits:function(e){return f.apply(this,arguments)},getMovieReviews:function(e){return m.apply(this,arguments)}};t.default=g},35:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(77),s=n.n(a),c=n(1);t.default=function(e){var t=e.films,n=e.location;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:s.a.ImageGallery,children:t&&t.map((function(e){var t=e.id,a=e.original_name,i=e.original_title,o=e.poster_path;return Object(c.jsx)("li",{className:s.a.ImageGalleryItem,children:Object(c.jsxs)(r.b,{to:{pathname:"/movies/".concat(t),state:{from:n}},children:[Object(c.jsx)("img",{src:o?"".concat("https://image.tmdb.org/t/p/w300").concat(o):"placeholder",alt:a,className:s.a.ImageGalleryItem_image}),Object(c.jsx)("p",{children:a||i})]})},t)}))})})}},40:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n(26),s=n(27),c=n(29),i=n(28),o=n(0),u=n(35),l=n(34),p=n(1),f=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={results:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;(0,l.default.getTrending)().then((function(t){e.setState({results:t})}))}},{key:"render",value:function(){var e=this.state.results;return Object(p.jsx)("div",{children:Object(p.jsx)(u.default,Object(r.a)({films:e},this.props))})}}]),n}(o.Component);t.default=f},77:function(e,t,n){e.exports={ImageGallery:"ListFilms_ImageGallery__16qFo",ImageGalleryItem:"ListFilms_ImageGalleryItem__17FbF",ImageGalleryItem_image:"ListFilms_ImageGalleryItem_image__2k87F"}}}]);
//# sourceMappingURL=3.59a0fa96.chunk.js.map