(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[13,15],{36:function(t,e,c){"use strict";c.r(e);var a=c(26),n=c(27),r=c(29),i=c(28),s=c(0),o=c(34),h=(c(75),c(1)),u=function(t){Object(r.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={cast:[]},t}return Object(n.a)(c,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.movieId;(0,o.default.getMovieCredits)(e).then((function(e){t.setState({cast:e})}))}},{key:"render",value:function(){var t=this.state.cast;return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:t.map((function(t){var e=t.id,c=t.name,a=t.character,n=t.profile_path;return Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{src:n,alt:c}),Object(h.jsx)("h4",{children:c}),Object(h.jsx)("p",{children:a})]},e)}))})})}}]),c}(s.Component);e.default=u},75:function(t,e,c){}}]);
//# sourceMappingURL=13.4adc9556.chunk.js.map