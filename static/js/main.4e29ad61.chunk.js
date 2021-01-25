(this["webpackJsonpcrossover-show"]=this["webpackJsonpcrossover-show"]||[]).push([[0],{26:function(e,r,t){},34:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t(0),c=t.n(a),i=t(9),s=t.n(i),o=(t(26),t(12)),h=t(2),d=t(5),u=t(6),p=t(8),b=t(7),g=t(3),l={characters:{"character-1":{id:"character-1",name:"Steven Universe",picture:"images/steven_universe.png",showTag:"SU"},"character-2":{id:"character-2",name:"Rose Quartz",picture:"crossover-episode/images/rose_quartz.png",showTag:"SU"},"character-3":{id:"character-3",name:"Pearl",picture:"crossover-episode/images/pearl.png",showTag:"SU"},"character-4":{id:"character-4",name:"Garnet",picture:"crossover-episode/images/garnet.png",showTag:"SU"},"character-5":{id:"character-5",name:"Amethyst",picture:"crossover-episode/images/amethyst.png",showTag:"SU"},"character-6":{id:"character-6",name:"Mordecai",picture:"crossover-episode/images/mordecai.png",showTag:"RS"},"character-7":{id:"character-7",name:"Rigby",picture:"crossover-episode/images/rigby.png",showTag:"RS"},"character-8":{id:"character-8",name:"Margaret Smith",picture:"crossover-episode/images/margaret.png",showTag:"RS"},"character-9":{id:"character-9",name:"Benson",picture:"crossover-episode/images/benson.png",showTag:"RS"},"character-10":{id:"character-10",name:"Skips",picture:"crossover-episode/images/skips.png",showTag:"RS"}},shows:{"show-1":{id:"show-1",title:"Steven Universe",showTag:"SU",characterIds:["character-1","character-2","character-3","character-4","character-5"]},"show-2":{id:"show-2",title:"My Episode's",showTag:null,characterIds:[]},"show-3":{id:"show-3",title:"Regular Show",showTag:"RS",characterIds:["character-6","character-7","character-8","character-9","character-10"]}},showsOrder:["show-1","show-2","show-3"]},j=t(4),m=t(11);function f(){var e=Object(g.a)(["\n  height: 5rem;\n  width: 5rem;\n  border: solid 2px rgb(61, 61, 61);\n  background-color: white;\n"]);return f=function(){return e},e}function O(){var e=Object(g.a)(["\n  overflow: hidden;\n  display: block;\n  padding: .5rem;\n  margin-right: 2rem;\n  height: auto;\n  width: auto;\n"]);return O=function(){return e},e}function v(){var e=Object(g.a)(["\n  color: rgb(61, 61, 61);\n  margin: 1rem;\n  height: auto;\n  display: flex;\n  align-items: center;\n  padding: .5rem;\n  border: solid 2px rgb(61, 61, 61);\n  border-radius: 4px;\n  transition: box-shadow .2s;\n  font-weight: bold;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n"]);return v=function(){return e},e}var w=j.a.div(v(),(function(e){return e.isDragging?"rgb(124, 236, 201)":"rgb(230, 231, 138)"})),x=j.a.div(O()),S=j.a.img(f()),y=function(e){Object(p.a)(t,e);var r=Object(b.a)(t);function t(){return Object(d.a)(this,t),r.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(n.jsx)(m.b,{draggableId:this.props.id,index:this.props.index,children:function(r,t){return Object(n.jsxs)(w,Object(h.a)(Object(h.a)(Object(h.a)({},r.draggableProps),r.dragHandleProps),{},{ref:r.innerRef,isDragging:t.isDragging,className:"character",children:[Object(n.jsx)(x,{className:"character-picture",children:Object(n.jsx)(S,{src:e.props.picture,alt:"".concat(e.props.name," thumbnail")})}),Object(n.jsx)("p",{children:e.props.name})]}))}})}}]),t}(c.a.Component);function I(){var e=Object(g.a)(["\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 1rem 0rem;\n"]);return I=function(){return e},e}function k(){var e=Object(g.a)(["\n  padding: 0rem 1rem 1rem 1rem;\n  border: solid 2px rgb(61, 61, 61);\n  min-height: 100px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n"]);return k=function(){return e},e}function D(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  width: auto;\n"]);return D=function(){return e},e}var T=j.a.div(D()),C=j.a.div(k(),(function(e){return e.isDraggingOver?"rgb(61, 113, 255);":"rgb(93, 225, 243);"})),R=j.a.h3(I()),A=function(e){Object(p.a)(t,e);var r=Object(b.a)(t);function t(){return Object(d.a)(this,t),r.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(T,{className:"Character-list",children:[Object(n.jsx)("header",{children:Object(n.jsx)(R,{children:"".concat(this.props.show.title," Characters")})}),Object(n.jsx)(m.c,{droppableId:this.props.show.id,isDropDisabled:this.props.isDropDisabled,children:function(r,t){return Object(n.jsxs)(C,Object(h.a)(Object(h.a)({ref:r.innerRef},r.droppableProps),{},{isDraggingOver:t.isDraggingOver,children:[e.props.characters.map((function(e,r){return Object(n.jsx)(y,{id:e.id,name:e.name,picture:e.picture,index:r},e.id)})),r.placeholder]}))}})]})}}]),t}(c.a.Component);function U(){var e=Object(g.a)(["\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: wrap;\n  flex 1 0 30%;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: rgb(61, 61, 61);\n"]);return U=function(){return e},e}var z=j.a.div(U()),N=function(e){Object(p.a)(t,e);var r=Object(b.a)(t);function t(){return Object(d.a)(this,t),r.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.showsOrder.map((function(r,t){var a=e.props.shows[r],c=a.characterIds.map((function(r){return e.props.characters[r]})),i=1!==t;return Object(n.jsx)(z,{children:Object(n.jsx)(A,{show:a,characters:c,isDropDisabled:i},a.id)})}))}}]),t}(c.a.Component);function E(){var e=Object(g.a)(["\n  width: 100%;\n  padding: 3rem 0rem;\n  background-color: rgb(93, 225, 243);\n  border-top: solid 2px rgb(61, 61, 61);\n  margin-top: 4rem;\n"]);return E=function(){return e},e}function P(){var e=Object(g.a)(["\n  color: #11637a;\n  margin: 3rem;\n"]);return P=function(){return e},e}function F(){var e=Object(g.a)(["\n  margin: 2 rem;\n  padding: 1rem;\n  width: 20%;\n  background-color: rgb(93, 225, 243);\n  border-radius: 12px;\n  font-size: 2rem;\n  font-weight: bold;\n  color: rgb(61, 61, 61);\n"]);return F=function(){return e},e}function M(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n"]);return M=function(){return e},e}function B(){var e=Object(g.a)(["\n  font-size: 4.5rem;\n  font-weight: bold;\n  padding: 2rem;\n  margin: 0;\n"]);return B=function(){return e},e}function L(){var e=Object(g.a)(["\n  text-align: center;\n  background-color: rgb(152, 235, 157);\n  width: 100%;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: rgb(61, 61, 61);\n"]);return L=function(){return e},e}var _=j.a.div(L()),J=j.a.h1(B()),q=j.a.div(M()),G=j.a.button(F()),H=j.a.a(P()),Q=j.a.div(E()),K=function(e){Object(p.a)(t,e);var r=Object(b.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=r.call(this,e)).onDragStart=function(e){var r=n.state.showsOrder.indexOf(e.source.droppableId);console.log(r),n.setState({homeIndex:r})},n.onDragEnd=function(e){var r,t=e.destination,a=e.source,c=e.draggableId;if(n.setState({homeIndex:null}),t&&(t.droppableId!==a.droppableId||t.index!==a.index)){var i=n.state.shows[a.droppableId],s=n.state.shows[t.droppableId];if(i!==s){var d=Array.from(i.characterIds);d.splice(a.index,1);var u=Object(h.a)(Object(h.a)({},i),{},{characterIds:d}),p=Array.from(s.characterIds);p.splice(t.index,0,c);var b=Object(h.a)(Object(h.a)({},s),{},{characterIds:p}),g=Object(h.a)(Object(h.a)({},n.state),{},{shows:Object(h.a)(Object(h.a)({},n.state.shows),{},(r={},Object(o.a)(r,u.id,u),Object(o.a)(r,b.id,b),r))});n.setState(g)}else{var l=Array.from(i.characterIds);l.splice(a.index,1),l.splice(t.index,0,c);var j=Object(h.a)(Object(h.a)({},i),{},{characterIds:l}),m=Object(h.a)(Object(h.a)({},n.state),{},{shows:Object(h.a)(Object(h.a)({},n.state.shows),{},Object(o.a)({},j.id,j))});n.setState(m)}}},n.initialState=l,n.state=n.initialState,n}return Object(u.a)(t,[{key:"onReset",value:function(e){e.preventDefault(),this.setState(this.initialState)}},{key:"render",value:function(){return Object(n.jsxs)(_,{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(J,{children:"Crossover Episode!"})}),Object(n.jsx)(q,{children:Object(n.jsx)(m.a,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd,children:Object(n.jsx)(N,{showsOrder:this.state.showsOrder,shows:this.state.shows,characters:this.state.characters,homeIndex:this.state.homeIndex})})}),Object(n.jsx)(G,{type:"button",onClick:this.onReset.bind(this),children:"Start Over!"}),Object(n.jsx)(Q,{className:"App-footer",children:Object(n.jsx)(H,{className:"App-link",href:"https://steven-universe.fandom.com/wiki/Category:Characters",target:"_blank",rel:"noopener noreferrer",children:"Learn more about these characters here."})})]})}}]),t}(c.a.Component),V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(r){var t=r.getCLS,n=r.getFID,a=r.getFCP,c=r.getLCP,i=r.getTTFB;t(e),n(e),a(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(K,{})}),document.getElementById("root")),V()}},[[34,1,2]]]);
//# sourceMappingURL=main.4e29ad61.chunk.js.map