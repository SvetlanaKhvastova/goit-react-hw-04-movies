(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[9],{34:function(e,t,n){"use strict";n.r(t);var r=n(89),a=n.n(r),s=n(90),c=n(91),u=n.n(c),i="ca68a7af060f5e9f7b7eefce94561f3e";function o(){return(o=Object(s.a)(a.a.mark((function e(){var t,n,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/week?api_key=".concat(i),e.next=3,u.a.get(t);case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.next=9,r.results;case 9:return s=e.sent,e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?query=".concat(t,"&api_key=").concat(i),e.next=3,u.a.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,e.next=9,s.results;case 9:return c=e.sent,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(s.a)(a.a.mark((function e(t){var n,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"?api_key=").concat(i),e.next=3,u.a.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/credits?api_key=").concat(i),e.next=3,u.a.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,e.next=9,s.cast;case 9:return c=e.sent,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/reviews?api_key=").concat(i),e.next=3,u.a.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,e.next=9,s.results;case 9:return c=e.sent,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.defaults.baseURL="https://api.themoviedb.org/3/";var x={getTrending:function(){return o.apply(this,arguments)},searchMovies:function(e){return p.apply(this,arguments)},getMovieDetails:function(e){return f.apply(this,arguments)},getMovieCredits:function(e){return v.apply(this,arguments)},getMovieReviews:function(e){return h.apply(this,arguments)}};t.default=x}}]);
//# sourceMappingURL=9.f7f71603.chunk.js.map