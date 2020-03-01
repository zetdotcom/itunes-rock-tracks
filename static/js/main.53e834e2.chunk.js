(this["webpackJsonpitunes-rock-tracks"]=this["webpackJsonpitunes-rock-tracks"]||[]).push([[0],{28:function(e,t,a){e.exports=a(52)},33:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),l=a.n(c),i=(a(33),a(7)),o=a(15),s=a(10);a(38);var u=Object(r.memo)((function(e){var t=e.element,a=e.children,r=e.className,c=Object(o.a)(e,["element","children","className"]);return"a"===t?n.a.createElement("a",Object.assign({className:"mz-button-link ".concat(r||"")},c),a):"Link"===t?n.a.createElement(s.b,Object.assign({className:"mz-button-link ".concat(r||"")},c),a):void 0}));a(40);function m(e){var t=e.children,a=Object(o.a)(e,["children"]);return n.a.createElement("div",Object.assign({className:"mz-paper"},a),t)}var d=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)};a(41);function k(e){var t=e.trackName,a=e.artist,r=e.price,c=e.artworkUrl,l=e.id;return n.a.createElement(m,{"data-testid":"track-card"},n.a.createElement("div",null,n.a.createElement("img",{width:"100%",height:"100%",src:c,alt:t})),n.a.createElement("div",null,t),n.a.createElement("div",null,a),n.a.createElement("div",null,d(r)),n.a.createElement("div",null,n.a.createElement(u,{element:"Link",to:"/".concat(l)},"See more")))}a(42);function f(){var e=Object(i.c)((function(e){return e.tracks})),t=e.tracksList,a=e.loading,r=e.error;return console.log(r),n.a.createElement("div",null,r?n.a.createElement("div",null,"Sorry, there was an error"):a?n.a.createElement("div",null,"Loading ..."):n.a.createElement("ul",{className:"track-list"},t.map((function(e){return n.a.createElement("li",{className:"track-list__item",key:e.trackId},n.a.createElement(k,{id:e.trackId,trackName:e.trackName,artist:e.artistName,price:e.trackPrice,artworkUrl:e.artworkUrl100}))}))))}var E=a(8),v=a(54);a(43);function h(){var e=Object(E.g)().trackId,t=Object(i.c)((function(t){return t.tracks.tracksList.find((function(t){return t.trackId===Number(e)}))||{}})),a=t.artworkUrl100,r=t.trackName,c=t.artistName,l=t.trackPrice,o=t.trackTimeMillis,s=t.releaseDate,k=!isNaN(new Date(s).getTime())&&Object(v.a)(new Date(s),"EEEE k:mm, dd MMMM yyyy");return n.a.createElement("div",{className:"track-details-page"},n.a.createElement(m,null,Object.keys(t).length?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("img",{width:"100%",height:"100%",src:a,alt:r})),n.a.createElement("div",null,r),n.a.createElement("div",null,c),n.a.createElement("div",null,"Price: ",d(l)),n.a.createElement("div",null,"Duration: ",function(e){var t=Math.floor(e/1e3%60),a=Math.floor(e/6e4%60),r=Math.floor(e/36e5%24);return a=a<10?"0"+a:a,t=t<10?"0"+t:t,"".concat(r=r<10?"0"+r:r,":").concat(a,":").concat(t)}(o)),n.a.createElement("div",null,"Release Date: ",k),n.a.createElement(u,{element:"a",href:t.trackViewUrl,target:"blank",rel:"noopoener noreferrer"},"More details")):n.a.createElement("div",null,"Soory, no details find for this track")))}var p=a(16),b=a(21),g=a.n(b),w=a(26),N="https://itunes.apple.com/search?term=rock&media=music";function j(){return(j=Object(w.a)(g.a.mark((function e(){var t,a,r,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://cors-anywhere.herokuapp.com","/").concat(N));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,a;case 8:return r=e.sent,n=r.results,e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=Object(p.b)({name:"tracks",initialState:{tracksList:[],loading:!1,error:null},reducers:{requestTracks:function(e){e.loading=!0},receiveTracks:function(e,t){e.tracksList=t.payload,e.loading=!1},failedReceiveTracks:function(e,t){e.error=t.payload}}}),O=y.actions,M=y.reducer,T=O.requestTracks,x=O.receiveTracks,I=O.failedReceiveTracks,L=M;function S(){return function(e){return e(T()),function(){return j.apply(this,arguments)}().then((function(t){return e(x(t))})).catch((function(t){return e(I(t))}))}}a(51);var U=function(){var e=Object(i.b)();return Object(r.useEffect)((function(){e(S())}),[e]),n.a.createElement(s.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(E.d,null,n.a.createElement(E.b,{exact:!0,path:"/itunes-rock-tracks"},n.a.createElement(f,null)),n.a.createElement(E.a,{exact:!0,from:"/",to:"/itunes-rock-tracks"}),n.a.createElement(E.b,{path:"/:trackId"},n.a.createElement(h,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(4),R=Object(D.combineReducers)({tracks:L}),z=function(e){return Object(p.a)({reducer:R,preloadedState:e})};l.a.render(n.a.createElement(i.a,{store:z()},n.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.53e834e2.chunk.js.map