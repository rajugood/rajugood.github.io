(this["webpackJsonpstar-war-search"]=this["webpackJsonpstar-war-search"]||[]).push([[0],{34:function(e,t,a){e.exports=a(47)},39:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),l=a.n(s),i=(a(39),a(40),a(25)),o=a(22),c=a(12),u=a(23),p=a(14),d=a(15),m=a(18),h=a(16),g=a(6),E=a(19),b=a(13),v=a(8),f=a.n(v),L=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={name:"",password:""},a.handleLogin=a.handleLogin.bind(Object(g.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(g.a)(a)),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"handleLogin",value:function(e){e.preventDefault(),this.props.doLogin(this.state.name,this.state.password)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"render",value:function(){var e=this.props.user.isLoggedIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidenav"},r.a.createElement("div",{className:"login-main-text"},r.a.createElement("h2",null,"Application Login Page"),r.a.createElement("p",null,"Login from here to access."))),!1===e?r.a.createElement("div",{className:"main"},r.a.createElement("div",{class:"login-form"},r.a.createElement("form",null,r.a.createElement("label",{className:"login-label"},"User Name: "),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.name,onChange:this.handleInputChange,name:"name"}),r.a.createElement("label",{className:"login-label"},"Password: "),r.a.createElement("input",{className:"form-control",type:"password",value:this.state.password,onChange:this.handleInputChange,name:"password"}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:this.handleLogin},"Submit"),this.props.user.isLoginError?r.a.createElement("span",null,"Please provide valid username and password!"):""))):r.a.createElement(c.a,{to:"/dashboard"}))}}]),t}(n.Component);var O=Object(b.b)((function(e){return{user:e.userState}}),{doLogin:function(e,t){return function(a){var n,r;return f.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,f.a.awrap(fetch("https://swapi.co/api/people/?search="+e));case 3:return n=s.sent,s.next=6,f.a.awrap(n.json());case 6:1===(r=s.sent).count&&r.results[0].birth_year===t?(sessionStorage.setItem("name",e),sessionStorage.setItem("login",!0),a({type:"LOGIN_SUCCESS",payload:r.results[0]})):a({type:"LOGIN_FAIL"}),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),a({type:"LOGIN_FAIL"});case 13:case"end":return s.stop()}}),null,null,[[0,10]])}}})(L),w=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={name:"",planetDetails:""},a.handleInputChange=a.handleInputChange.bind(Object(g.a)(a)),a.handleLogOut=a.handleLogOut.bind(Object(g.a)(a)),a.handlePlanetSelection=a.handlePlanetSelection.bind(Object(g.a)(a)),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({name:t}),this.props.searchPlanets(t)}},{key:"handlePlanetSelection",value:function(e){this.props.planetDetails(e)}},{key:"handleLogOut",value:function(){this.props.doLogout()}},{key:"render",value:function(){var e=this,t=this.props.user.isLoggedIn;return r.a.createElement("div",{className:"dashboard"},t?r.a.createElement("div",null,r.a.createElement("div",{className:"logout"},r.a.createElement("label",{className:"login-label"},this.props.user.name," ",r.a.createElement("button",{className:"btn btn-secondary",onClick:this.handleLogOut},"LogOut"))),r.a.createElement("div",{className:"search-list"},r.a.createElement("div",{class:"input-group input-group-lg"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text",id:"inputGroup-sizing-lg"},"Search Planets")),r.a.createElement("input",{type:"text",name:"planet",value:this.state.name,onChange:this.handleInputChange,class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-lg"})),r.a.createElement("ul",{className:"list-group"},this.props.planets.map((function(t){return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center",onClick:e.handlePlanetSelection.bind(e,t.url),key:t.name},t.name,r.a.createElement("span",{class:"badge badge-primary badge-pill"},t.population))})))),r.a.createElement("br",null),r.a.createElement(y,{hideDetails:this.props.hideDetails,showDetails:this.props.showDetails,details:this.props.details})):r.a.createElement(c.a,{to:"/login"}))}}]),t}(n.Component);var y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleHideDetails=a.handleHideDetails.bind(Object(g.a)(a)),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"handleHideDetails",value:function(){this.props.hideDetails()}},{key:"render",value:function(){var e=this.props.showDetails?"overlay-show":"overlay-hidden";return r.a.createElement("div",null,this.props.showDetails?r.a.createElement("div",null,this.props.details.name):"",r.a.createElement("div",{id:"popup2",className:"overlay light ".concat(e)},r.a.createElement("div",{className:"popup"},r.a.createElement("h2",null,this.props.details.name),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,r.a.createElement("strong",null,"Rotation period: ")," ",this.props.details.rotation_period," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Orbital period: ")," ",this.props.details.orbital_period," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Diameter: ")," ",this.props.details.diameter," "),r.a.createElement("p",null,r.a.createElement("strong",null,"climate: ")," ",this.props.details.climate," "),r.a.createElement("p",null,r.a.createElement("strong",null,"gravity: ")," ",this.props.details.gravity," "),r.a.createElement("p",null,r.a.createElement("strong",null,"terrain: ")," ",this.props.details.terrain," "),r.a.createElement("p",null,r.a.createElement("strong",null,"surface_water: ")," ",this.props.details.surface_water," "),r.a.createElement("p",null,r.a.createElement("strong",null,"population: ")," ",this.props.details.population," ")),r.a.createElement("br",null),r.a.createElement("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:this.handleHideDetails},"Close"))))}}]),t}(n.Component),I=Object(b.b)((function(e){return{planets:e.swState.planets,user:e.userState,details:e.swState.details,showDetails:e.swState.showDetails}}),{searchPlanets:function(e){return function(t){var a,n;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.awrap(fetch("https://swapi.co/api/planets/?search="+e));case 3:return a=r.sent,r.next=6,f.a.awrap(a.json());case 6:n=r.sent,t({type:"FETCH_PLANETS",payload:n.results}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),t({type:"FETCH_PLANETS_FAILED"});case 13:case"end":return r.stop()}}),null,null,[[0,10]])}},doLogout:function(e,t){return function(e){sessionStorage.removeItem("login"),sessionStorage.removeItem("name"),e({type:"LOGOUT"})}},planetDetails:function(e){return function(t){var a,n;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.awrap(fetch(e));case 3:return a=r.sent,r.next=6,f.a.awrap(a.json());case 6:n=r.sent,t({type:"GET_PLANET_DETAILS",payload:n}),t({type:"SHOW_PLANET_DETAILS"}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),t({type:"GET_PLANET_DETAILS_FAILED"});case 14:case"end":return r.stop()}}),null,null,[[0,11]])}},hideDetails:function(){return function(e){e({type:"HIDE_PLANET_DETAILS"})}}})(w);function S(e){var t=e.children,a=Object(i.a)(e,["children"]);return r.a.createElement(c.b,Object.assign({},a,{render:function(){return"true"!==sessionStorage.getItem("login")?t:r.a.createElement(c.a,{to:{pathname:"/dashboard"}})}}))}function j(e){var t=e.children,a=Object(i.a)(e,["children"]);return r.a.createElement(c.b,Object.assign({},a,{render:function(){return"true"===sessionStorage.getItem("login")?t:r.a.createElement(c.a,{to:{pathname:"/login"}})}}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(11),_=a(33),D=a(10),T={planets:[],details:{},showDetails:!1},C={isLoggedIn:!1,isLoginError:!1,name:""},A=Object(N.c)({swState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PLANETS":return Object(D.a)({},e,{planets:t.payload});case"GET_PLANET_DETAILS":return Object(D.a)({},e,{details:t.payload});case"SHOW_PLANET_DETAILS":return Object(D.a)({},e,{showDetails:!0});case"HIDE_PLANET_DETAILS":return Object(D.a)({},e,{showDetails:!1});default:return e}},userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return Object(D.a)({},e,{isLoggedIn:!0,isLoginError:!1,name:t.payload.name});case"LOGOUT":return Object(D.a)({},e,{isLoggedIn:!1,isLoginError:!1,name:""});case"LOGIN_FAIL":return Object(D.a)({},e,{isLoggedIn:!1,isLoginError:!0});default:return e}}});var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userState:{isLoggedIn:"true"===sessionStorage.getItem("login"),name:sessionStorage.getItem("name")||""}},t=[_.a],a=Object(N.e)(A,e,Object(N.d)(N.a.apply(void 0,t),window.devToolsExtension?window.devToolsExtension():function(e){return e}));return a}(window.__INITIAL_STATE__);l.a.render(r.a.createElement(b.a,{store:k},r.a.createElement((function(){return r.a.createElement(o.a,null,r.a.createElement(c.d,null,r.a.createElement(S,{path:"/login"},r.a.createElement(O,null)),r.a.createElement(j,{path:"/dashboard"},r.a.createElement(I,null))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.4db3cb53.chunk.js.map