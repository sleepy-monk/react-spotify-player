(this["webpackJsonpreact-spotify-player"]=this["webpackJsonpreact-spotify-player"]||[]).push([[0],{36:function(e,t,a){e.exports=a(78)},47:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),c=a(15),s=a.n(c),o=a(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(11),u=a(10),p=Object(l.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"GET_USER"===t.type?Object(u.a)(Object(u.a)({},e),t.payload):"LOGOUT"===t.type?{}:e},logged:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"ISLOGGED"===t.type||"LOGIN"===t.type||"LOGOUT"===t.type?t.payload:e},playlists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"GET_PLAYLISTS"===t.type?Object(u.a)(Object(u.a)({},e),t.payload):"LOGOUT"===t.type?{}:e},device_id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"SET_DEVICE_ID"===t.type?t.payload:e},home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"GET_HOME"===t.type?Object(u.a)(Object(u.a)({},e),t.payload):e},uri:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home",t=arguments.length>1?arguments[1]:void 0;return"SET_VIEW"===t.type?t.payload:e},view:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"GET_VIEW"===t.type?t.payload:e},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"GET_PLAYER"===t.type?t.payload:e},featured_paylists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"GET_FEATURED_PLAYLISTS"===t.type?Object(u.a)(Object(u.a)({},e),t.payload):e},current_state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENT_STATE"===t.type?t.payload:e},grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"GET_SAVED_TRACKS"===t.type?t.payload:e}}),m=a(2),d=a(3),f=a(5),v=a(4),h=(a(47),a(6)),y=a.n(h),g=a(13),b=a(9),k=function(){return{access_token:localStorage.getItem("access_token"),token_type:localStorage.getItem("token_type")}},E=function(){var e=JSON.parse(localStorage.getItem("expires_at"));return e&&(new Date).valueOf()<e},_=function(e,t){var a=t.indexOf(e),n=[],r=[],i=!1;return t.forEach((function(e,t){t===a&&(i=!0),i?r.includes(e)||r.push(e):n.push(e)})),n.forEach((function(e){r.push(e)})),r},w=function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return"".concat(t,":").concat(a<10?"0":"").concat(a)},O=a(7),j=a.n(O),x=function(){return j.a.get("https://api.spotify.com/v1/browse/featured-playlists?country=CA&limit=4",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})},N=function(e){var t=e.uri.split(":");return j.a.get("https://api.spotify.com/v1/albums/"+t[t.length-1],{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})},S=function(e){var t=e.uri.split(":");return j.a.get("https://api.spotify.com/v1/artists/".concat(t[t.length-1],"/albums"),{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})},T=function(e){var t=e.uri.split(":");return j.a.get("https://api.spotify.com/v1/playlists/".concat(t[t.length-1],"/images"),{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})},I=function(e){var t=e.uri.split(":");return j.a.get("https://api.spotify.com/v1/playlists/".concat(t[t.length-1],"/tracks"),{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})},C=function(e){var t=e.uri.split(":");return j.a.get("https://api.spotify.com/v1/playlists/"+t[t.length-1],{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})},z=function(e){var t=e.uri.split(":");return j.a.get("https://api.spotify.com/v1/artists/".concat(t[t.length-1],"/top-tracks?country=BR"),{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})},A=function(e){var t=e.uri.split(":");return j.a.get("https://api.spotify.com/v1/artists/"+t[t.length-1],{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})},P=function(e){if(!e)return!1;var t=e.reduce((function(e,t){return e+t.duration_ms}),0);return w(t)},V=function(){var e=Object(b.a)(y.a.mark((function e(t){var a,n,r,i,c,s,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},n={playlist:I({uri:t}),playlistInfo:C({uri:t}),playlistCover:T({uri:t})},e.next=4,Promise.all(Object.values(n));case 4:return r=e.sent,i=Object(g.a)(r,3),c=i[0],s=i[1],o=i[2],a.type="playlist",a.images=o.data,a.id=c.data.id,a.tracks=c.data.items.map((function(e){return e.track})).filter((function(e){return e})),a.total_duration=P(a.tracks),a.owner=s.data.owner,a.followers=s.data.followers.total,a.name=s.data.name,a.description=s.data.description,a.public=s.data.public,a.tracks=a.tracks.map((function(e){return{id:e.id,name:e.name,duration_ms:w(e.duration_ms),album:e.album,artists:e.artists,uri:e.uri}})),a.table={head:["name","artist","album","duration"],body:a.tracks},e.abrupt("return",a);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(y.a.mark((function e(t){var a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,N({uri:t});case 3:return n=e.sent,r=n.data,a.type="album",a.name=r.name,a.tracks=r.tracks.items.map((function(e){return{id:e.id,name:e.name,duration_ms:w(e.duration_ms),uri:e.uri,artists:e.artists}})),a.images=r.images,a.table={head:["name","artist","duration"],body:a.tracks},e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(y.a.mark((function e(t){var a,n,r,i,c,s,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],a={},e.next=4,A({uri:t});case 4:return n=e.sent,r=n.data,e.next=8,z({uri:t});case 8:return i=e.sent,c=i.data,e.next=12,S({uri:t});case 12:return s=e.sent,o=s.data,a.type="artist",a.name=r.name,a.images=r.images,a.tracks||(a.tracks=c.tracks,a.total_duration=P(a.tracks)),a.tracks=a.tracks.map((function(e){return{id:e.id,name:e.name,duration_ms:w(e.duration_ms),uri:e.uri}})),a.albums={artistAlbums:{message:"Albums",type:"artist",items:o.items.filter((function(e){return"album"===e.album_type}))},artistSingles:{message:"Singles",type:"artist",items:o.items.filter((function(e){return"single"===e.album_type}))}},a.table={head:["name","duration"],body:a.tracks},e.abrupt("return",a);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(b.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((a=t.uri).split(":").indexOf("album")>=0)){e.next=7;break}return e.next=4,L(a);case 4:n=e.sent,e.next=17;break;case 7:if(!(a.split(":").indexOf("playlist")>=0)){e.next=13;break}return e.next=10,V(a);case 10:n=e.sent,e.next=17;break;case 13:if(!(a.split(":").indexOf("artist")>=0)){e.next=17;break}return e.next=16,D(a);case 16:n=e.sent;case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){console.log(e);try{fetch("https://api.spotify.com/v1/me/player/previous",{method:"POST",headers:{"content-type":"application/json",authorization:"".concat(k().token_type," ").concat(k().access_token)}})}catch(t){M({uri:e})}},R=function(){fetch("https://api.spotify.com/v1/me/player/next",{method:"POST",headers:{"content-type":"application/json",authorization:"".concat(k().token_type," ").concat(k().access_token)}})},U=function(){fetch("https://api.spotify.com/v1/me/player/pause",{method:"PUT",headers:{"content-type":"application/json",authorization:"".concat(k().token_type," ").concat(k().access_token)}})},F=function(){var e=Object(b.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.device_id,console.log("resume"),fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(a),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(k().access_token)}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(b.a)(y.a.mark((function e(t){var a,n,r,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.uri,n=t.uris,r=t.device_id,console.log("play"),i=_(a,(n||[]).map((function(e){return e.uri}))),fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(r),{method:"PUT",body:JSON.stringify({uris:i.length?i:[a]}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(k().access_token)}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W={init:function(e){var t=e.setDeviceId;console.log("____init___");var a=new window.Spotify.Player({playerInstance:new window.Spotify.Player({name:"Kenjicas Player"}),name:"Kenjicas Player",getOAuthToken:function(e){return e(k().access_token)}});return a.setDeviceId=t,a.play=M,a.next=R,a.previous=G,a.pause=U,a.resume=F,a},getView:B},Y=function(e){return function(){var t=Object(b.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e||{}).uri&&window.localStorage.setItem("last_uri",e.uri),a({type:"SET_VIEW",payload:(e||{}).uri||"home"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},H=function(e){var t=e.uri;return function(){var e=Object(b.a)(y.a.mark((function e(a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getView({uri:t});case 2:n=e.sent,a({type:"GET_VIEW",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){return function(e){localStorage.removeItem("access_token"),localStorage.removeItem("token_type"),localStorage.removeItem("expires_in"),localStorage.removeItem("expires_at"),console.log("removesession"),e({type:"LOGOUT",payload:{status:!1,access_token:!1}})}},J=(a(65),a(66),a(67),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loading"},r.a.createElement("p",null,"Loading...")))}),$=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getHome()}},{key:"renderAlbums",value:function(e){var t=this;return r.a.createElement("div",{className:"album col-sm-3",onClick:function(){t.props.setView({uri:e.uri})},key:e.id},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(e.images.length&&e.images[0].url,")"),backgroundSize:"cover",backgroundPosition:"center center"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-title"},e.name),r.a.createElement("small",{className:"card-text"},e.description)))}},{key:"renderRow",value:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," ",e.message," "),r.a.createElement("div",{className:"albums-row",key:e.type},e.items.map(this.renderAlbums.bind(this))))}},{key:"render",value:function(){return Object.keys(this.props.home).length?r.a.createElement("div",{className:"home"},Object.values(this.props.home).map(this.renderRow.bind(this))):r.a.createElement(J,null)}}]),a}(r.a.Component),q=Object(o.b)((function(e){return{home:e.home}}),{getHome:function(){return function(){var e=Object(b.a)(y.a.mark((function e(t){var a,n,r,i,c,s,o,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[j.a.get("https://api.spotify.com/v1/me/player/recently-played",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}}),x(),j.a.get("https://api.spotify.com/v1/me/top/artists",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}})],e.next=3,Promise.all(Object.values(a));case 3:n=e.sent,r=Object(g.a)(n,3),i=r[0].data,c=r[1].data,s=r[2].data,o=function(e){return{message:e.message,items:e.playlists.items,type:"playlists"}},l=function(e){return{message:"Top Artists",items:e.items,type:"top-artists"}},t({type:"GET_HOME",payload:{recentlyTracks:function(e){var t=[],a=e.items.map((function(e){return e.track.album}));return a=a.filter((function(e){return!t.includes(e.id)&&(t.push(e.id),e)})),{next:e.next,limit:e.limit,href:e.href,message:"Recently Played",items:a,type:"recently-played"}}(i),featuredPlaylists:o(c),top_artists:l(s)}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setView:Y})($),Q=(a(68),a(16)),X=a(17);function Z(){var e=Object(Q.a)(['\n        padding: 0 32px 24px;\n        margin-bottom: 15px;\n        display: flex;\n    align-items: center;\n        img {\n            width: 220px;\n        }\n\n        .info {\n            align-self: flex-end;\n            padding: 0 10px;\n            p { margin: 0; }\n            .info-type {\n                position: relative;\n                top: 5px;\n                text-transform: uppercase;\n                font-weight: 300;\n                font-size: 15px;\n            }\n            .info-name {\n                font-size: 82px;\n                line-height: 82px;\n                padding: 0.08em 0px;\n                font-weight: 600;\n                margin-bottom: 0;\n            }\n            .info-description {\n                max-width: 500px;\n            }\n            .info-details {\n                padding: 14px 0;\n            }\n            .info-tracks {\n                margin-right: 4px;\n            }\n            .info-owner {\n                &:after {\n                    content:"*";\n                    padding: 0 6px;\n                }\n            }\n        }\n\n        .info-interactive {\n            .play {\n                cursor: pointer;\n                background: #1DB954;\n                border-radius: 15px;\n                font-size: 11px;\n                letter-spacing: 2px;\n                font-weight: bold;\n                width: 106px;\n                padding: 4px;\n                text-align: center;\n            }\n        }\n']);return Z=function(){return e},e}var ee=X.a.div(Z()),te=function(e){var t=e.props,a=t.tracks,n=t.images,i=t.name,c=t.description,s=t.owner,o=t.total_duration,l=t.type;return r.a.createElement(ee,{className:"row"},n.length&&n[0].url&&r.a.createElement("div",{className:"artwork col-auto d-none d-lg-block"},r.a.createElement("img",{src:n[0].url,alt:i||""})),r.a.createElement("div",{className:"col info d-flex flex-column"},r.a.createElement("strong",{className:"info-type"},l),r.a.createElement("h3",{className:"info-name"},i),r.a.createElement("span",{className:"info-description"},c),r.a.createElement("div",{className:"info-details"},(s||{}).display_name&&r.a.createElement("span",{className:"info-owner"},"Created by ",r.a.createElement("strong",null,(s||{}).display_name)),r.a.createElement("span",{className:"info-tracks"},(a||[]).length," songs"),r.a.createElement("span",{className:"info-duration"},o)),r.a.createElement("div",{className:"info-interactive"},r.a.createElement("div",{className:"play"}," PLAY "))))},ae=(a(69),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={filteredItems:[],limit:e.limit||null},n}return Object(d.a)(a,[{key:"setArtist",value:function(e){var t=this,a=e.artist,n=e.total,i=e.index,c=a.id,s=a.uri,o=a.name;return r.a.createElement("span",{key:c+"#"+i,onClick:function(e){e.stopPropagation(),t.props.setView({uri:s})}},n>1&&i!==n-1?"".concat(o,", "):o)}},{key:"setAlbum",value:function(e,t){e.stopPropagation(),this.props.setView({uri:t.album.uri})}},{key:"renderList",value:function(e,t){var a=this;return r.a.createElement("tr",{key:e.id+"#"+t,onClick:function(){a.props.device_id&&a.props.player.play({uri:e.uri,uris:a.props.view.tracks,device_id:a.props.device_id})}},r.a.createElement("td",null,r.a.createElement("span",null,r.a.createElement("i",{className:"play fas fa-play"}))),e.name&&r.a.createElement("td",null,r.a.createElement("span",null,e.name)),e.artists&&r.a.createElement("td",null,r.a.createElement("span",{className:"link"},e.artists&&Object.values(e.artists).map((function(t,n){return a.setArtist({artist:t,total:(e.artists||[]).length,index:n})})))),e.album&&r.a.createElement("td",null,r.a.createElement("span",{className:"link",onClick:function(t){return a.setAlbum(t,e)}}," ",e.album.name," ")),e.duration_ms&&r.a.createElement("td",null,r.a.createElement("span",null," ",e.duration_ms," ")))}},{key:"onFilter",value:function(e){this.setState({filteredItems:this.props.view.table.body.filter((function(t){return t.name.toLowerCase().replace("\xe3","a").indexOf(e.target.value.toLowerCase())>-1}))})}},{key:"showMore",value:function(){this.setState({limit:5===+this.state.limit?10:5})}},{key:"render",value:function(){var e=this;if(this.props.view.tracks)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tracklist"},r.a.createElement("div",{className:"filter"},r.a.createElement("input",{type:"text",placeholder:"Filter",onChange:function(t){e.onFilter(t)}})),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"header"},r.a.createElement("th",{scope:"col"}),this.props.view.table.head.map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,((this.state.filteredItems||[]).length>0?this.state.filteredItems:this.props.view.table.body).map((function(t,a){return e.state.limit?a<+e.state.limit&&e.renderList(t,a):e.renderList(t,a)})))),this.props.limit&&r.a.createElement("button",{class:"toggleShow",onClick:this.showMore.bind(this)},"show ",5===+this.state.limit?"more":"less")))}}]),a}(r.a.Component)),ne=Object(o.b)((function(e){return{player:e.player}}),{setView:Y})(ae),re=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentWillMount",value:function(){this.props.getView({uri:this.props.uri})}},{key:"UNSAFE_componentWillUpdate",value:function(e){((e.view||{}).tracks||[]).length&&((this.props.view||{}).tracks||[]).length&&this.props.uri!==e.uri&&this.props.getView({uri:e.uri})}},{key:"render",value:function(){var e=this.props.view.tracks,t=this.props,a=t.view,n=t.device_id;return e?r.a.createElement("div",{className:"playlist"},r.a.createElement(te,{props:a}),r.a.createElement(ne,{view:a,device_id:n})):r.a.createElement(J,null)}}]),a}(r.a.Component),ie=Object(o.b)((function(e){return{uri:e.uri,view:e.view,device_id:e.device_id}}),{getView:H,setView:Y})(re),ce=(a(70),a(71),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"renderAlbums",value:function(e){var t=this;return r.a.createElement("div",{className:"album col-sm-3",onClick:function(a){a.stopPropagation(),t.props.setView({uri:e.uri})},key:e.id},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(e.images.length&&e.images[0].url,")"),backgroundSize:"cover",backgroundPosition:"center center"}}),r.a.createElement("div",{className:"card-body",onClick:function(a){a.stopPropagation(),t.props.player.play({uri:e.uri,device_id:t.props.device_id})}},r.a.createElement("p",null,"PLAY"),r.a.createElement("p",{className:"card-title"},e.name),r.a.createElement("small",{className:"card-text",onClick:function(a){a.stopPropagation(),t.props.setView({uri:e.artists[0].uri})}},e.artists[0].name)))}},{key:"renderRow",value:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," ",e.message," "),r.a.createElement("div",{className:"albums-row",key:e.type},e.items.map(this.renderAlbums.bind(this))))}},{key:"render",value:function(){return this.props.grid&&Object.keys(this.props.grid).length&&this.props.device_id?r.a.createElement("div",{className:"grid"},Object.values(this.props.grid).map(this.renderRow.bind(this))):r.a.createElement(J,null)}}]),a}(r.a.Component)),se=Object(o.b)((function(e){return{player:e.player,device_id:e.device_id}}),{setView:Y})(ce),oe=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentWillMount",value:function(){this.props.getView({uri:this.props.uri})}},{key:"componentDidUpdate",value:function(e){((e.view||{}).tracks||[]).length&&((this.props.view||{}).tracks||[]).length&&this.props.uri!==e.uri&&this.props.getView({uri:e.uri})}},{key:"render",value:function(){var e=this.props.view.tracks,t=this.props,a=t.view,n=t.device_id;return e?r.a.createElement("div",{className:"artist"},r.a.createElement(te,{props:a}),r.a.createElement(ne,{view:a,limit:"5",device_id:n}),r.a.createElement(se,{grid:a.albums})):r.a.createElement(J,null)}}]),a}(r.a.Component),le=Object(o.b)((function(e){return{uri:e.uri,view:e.view,device_id:e.device_id}}),{getView:H,setView:Y})(oe),ue=(a(72),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getSavedTracks()}},{key:"render",value:function(){return Object.keys(this.props.grid).length&&this.props.device_id?r.a.createElement(se,{grid:this.props.grid}):r.a.createElement(J,null)}}]),a}(r.a.Component)),pe=Object(o.b)((function(e){return{grid:e.grid,player:e.player,device_id:e.device_id}}),{getSavedTracks:function(){return function(e){j.a.get("https://api.spotify.com/v1/me/tracks?limit=30",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}}).then((function(t){var a=t.data;e({type:"GET_SAVED_TRACKS",payload:{savedTracks:function(e){var t=e.items.map((function(e){return e.track}));return t=t.map((function(e){return e.images=e.album.images,{images:e.album.images,name:e.name,uri:e.uri,album:{uri:e.album.uri},artists:e.artists}})),console.log(t),{next:e.next,limit:e.limit,message:"Saved Tracks",items:t,type:"saved-tracks"}}(a)}})}))}},setView:Y})(ue),me=(a(73),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentWillMount",value:function(){this.props.getView({uri:this.props.uri})}},{key:"render",value:function(){var e=this.props.view.tracks,t=this.props,a=t.view,n=t.device_id;return e?r.a.createElement("div",{className:"playlist"},r.a.createElement(te,{props:a}),r.a.createElement(ne,{view:a,device_id:n})):r.a.createElement(J,null)}}]),a}(r.a.Component)),de=Object(o.b)((function(e){return{uri:e.uri,view:e.view,device_id:e.device_id}}),{getView:H,setView:Y})(me),fe=function(e){var t=e.uri;return r.a.createElement(r.a.Fragment,null,e.uri.indexOf("album")>=0?r.a.createElement(de,null):t.indexOf("artist")>=0?r.a.createElement(le,null):t.indexOf("playlist")>=0?r.a.createElement(ie,null):t.indexOf("home")>=0?r.a.createElement(q,null):t.indexOf("saved-tracks")>=0?r.a.createElement(pe,null):"TRISTE")},ve=a(35),he=a.n(ve);function ye(){var e=Object(Q.a)(["\n    @font-face {\n        font-family: 'Cooper Black';\n        src: url(",'/assets/cooper_black.ttf);\n    }\n\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    font-family: "Cooper Black";\n    background: rgba(28,28,28);\n    border: 2em solid #ffffff;\n    color: #fff;\n    overflow: none;\n    height: 100vh;\n    text-align: center;\n\n    .title {\n        padding: 20px;\n        font-size: 2em;\n        p {\n            font-size: 22px;\n        }\n    }\n\n    .btn {\n        border: 1px solid #ffffff;\n        font-size: 17px;\n        color: #ffffff;\n    }\n']);return ye=function(){return e},e}var ge=X.a.div(ye(),"."),be=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"onSuccess",value:function(e){this.props.login(e)}},{key:"onFailure",value:function(e){console.log("fail",e)}},{key:"logout",value:function(){this.props.logout()}},{key:"render",value:function(){var e=this;return r.a.createElement(ge,{style:{backgroundImage:"url('".concat(".","/assets/background.jpg')"),backgroundSize:"cover"}},r.a.createElement("div",{className:"login container"},r.a.createElement(he.a,{className:"btn",clientId:"38a9d82012ce4dcc81269de4479a74fa",redirectUri:"https://kenjikatahira.github.io/react-spotify-player/",onSuccess:function(t){e.onSuccess(t)},onFailure:this.onFailure,scope:"user-read-private user-library-read user-read-playback-state user-read-playback-position user-modify-playback-state user-top-read user-read-recently-played streaming user-read-email"})))}}]),a}(r.a.Component),ke=Object(o.b)((function(e){return{user:e.user}}),{login:function(e){return function(t){!function(e){var t=e.access_token,a=e.token_type,n=e.expires_in,r=(new Date).valueOf()+36e5;localStorage.setItem("access_token",t),localStorage.setItem("token_type",a),localStorage.setItem("expires_in",n),localStorage.setItem("expires_at",r),console.log("setsession")}(e),t({type:"LOGIN",payload:{status:!0,access_token:k().access_token}})}},logout:K})(be),Ee=(a(74),function(e){var t=e.playlists,a=e.setView,n=e.uri,i=(e.logout,e.getPlaylists);!Object.keys(t).length&&i&&i();var c=[{name:"Home",uri:"home",icon:r.a.createElement("i",{className:"fas fa-home"},"home")},{el:r.a.createElement("li",{key:"your-library",className:"lead"}," Your Library ")},{name:"Saved",uri:"saved-tracks"},{el:r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{className:"separator"}),r.a.createElement("li",{key:"lead-playlists",className:"lead"}," Playlists "))}],s=function(e){var t=(e||{}.owner).display_name;return e.el?e.el:r.a.createElement("li",{key:e.uri,className:n===e.uri?"active":"","data-owner":t?"* by ".concat(t):"",id:e.uri,onClick:function(){return a({uri:e.uri})}},e.icon?e.icon:""," ",e.name)};return(t.items||[]).length?r.a.createElement("ul",{className:"menu"},r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement("span",{className:"made"},"learning porpouse"),r.a.createElement("svg",{viewBox:"0 0 1134 340",class:"spotify-logo"},r.a.createElement("path",{fill:"currentColor",d:"M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"})),r.a.createElement("span",{className:"made"},"made with react")),r.a.createElement("hr",{className:"separator"}),r.a.createElement("div",{className:"fixed-pages"},c.map((function(e){return s(e)}))),t.items.map((function(e){return s(e)}))):r.a.createElement("ul",{className:"menu"},r.a.createElement("div",{className:"fixed-pages"},c.map((function(e){return s(e)}))))}),_e=(a(75),a(76),function(e){var t=e.current_state.current_track,a=((((t||{}).album||{}).images||[])[0]||{}).url,n=(t||{}).name,i=(((t||{}).artists||[])[0]||{}).name;return r.a.createElement("div",{className:"playing"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:a,alt:a})),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"track"},r.a.createElement("b",null,n)),r.a.createElement("div",{className:"playing-artist"},i)))}),we=(a(77),function(e){var t=e.count,a=e.fixed;return r.a.createElement("div",{className:"timer"},w(a||t))}),Oe=function(e){var t=e.current_state,a=e.fixed,i=t.paused,c=t.position,s=t.current_track,o=Object(n.useState)({count:0,current_track:s}),l=Object(g.a)(o,2),u=l[0],p=l[1];(s||{}).id!==(u.current_track||{}).id&&p({count:0,current_track:s});var m=function(e){({start:function(){return setTimeout((function(){p({count:u.count+1e3,current_track:s})}),1e3)},stop:function(){({}).start&&clearTimeout((void 0).start)}})[e]()};return Object(n.useEffect)((function(){i||void 0===c?i&&m("stop"):m("start")})),r.a.createElement(we,{count:u.count,fixed:a})},je=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){this.props.player&&this.props.player.addListener&&!this.connected&&this.configurePlayer(this.props.player)}},{key:"onChange",value:function(e){this.props.setCurrentState(e)}},{key:"configurePlayer",value:function(e){e&&(e.addListener("ready",(function(t){var a=t.device_id;console.log("Ready - Device ID",a),e.setDeviceId(a)})),e.addListener("player_state_changed",this.onChange.bind(this)),e.connect(),this.connected=!0)}},{key:"togglePlayButton",value:function(){var e=this,t=this.props.current_state.paused;return void 0===t||t?r.a.createElement("button",{className:"btn btn-outline-secondary control-button play",onClick:function(){e.props.player.resume({device_id:e.props.device_id||""})}},r.a.createElement("i",{className:"fas fa-play"})):r.a.createElement("button",{className:"btn btn-outline-secondary control-button play",onClick:this.props.player.pause},r.a.createElement("i",{className:"fas fa-pause",onClick:this.props.player.pause}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,n=t.current_state,i=n.current_track;if(this.props.device_id)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"now-playing"},r.a.createElement("div",{className:"playing-wrapper"},r.a.createElement(_e,{current_state:n})),r.a.createElement("div",{className:"inner-now-playing"},r.a.createElement("div",{className:"controls-buttons"},r.a.createElement("button",{className:"btn control-button",onClick:function(){a.previous(e.teste)}},r.a.createElement("i",{className:"fas fa-backward"})),this.togglePlayButton(),r.a.createElement("button",{className:"btn control-button",onClick:a.next},r.a.createElement("i",{className:"fas fa-forward"}))),r.a.createElement("div",{className:"playback-bar"},r.a.createElement(Oe,{current_state:n}),r.a.createElement("div",{className:"playback-progress-bar"},r.a.createElement("div",{className:"progress-bar-inner"})),(i||{}).duration_ms&&r.a.createElement(we,{fixed:(i||{}).duration_ms})))))}}]),a}(r.a.Component),xe=Object(o.b)((function(e){return{device_id:e.device_id,player:e.player,current_state:e.current_state}}),{setCurrentState:function(e){return function(t){var a=e.position,n=e.duration,r=e.paused,i=e.shuffle,c=e.repeat_mode,s=e.track_window,o=s.current_track,l=s.next_tracks,u=s.previous_tracks;console.log(e),t({type:"SET_CURRENT_STATE",payload:{position:a,duration:n,paused:r,shuffle:i,repeat_mode:c,current_track:o,next_tracks:l,previous_tracks:u}})}}})(je),Ne=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).initiated=!1,e}return Object(d.a)(a,[{key:"run",value:function(){var e=this.props.setDeviceId;this.props.getPlayer({setDeviceId:e}),this.initiated=!0}},{key:"UNSAFE_componentWillUpdate",value:function(){!this.initiated&&!0===this.props.logged.status&&this.run()}},{key:"componentDidMount",value:function(){var e=this;window.onSpotifyWebPlaybackSDKReady=function(){var t=window.localStorage.getItem("last_uri");e.props.setView(t?{uri:t}:"")}}},{key:"onSearchChange",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.props,t=e.logged,a=e.uri,n=e.tracks,i=e.getPlaylists,c=e.logout,s=e.setView,o=e.playlists;return t.status?r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"menu-wrapper"},r.a.createElement(Ee,{getPlaylists:i,logout:c,setView:s,playlists:o,uri:a})),r.a.createElement("div",{className:"browser-wrapper"},r.a.createElement("a",{class:"github",href:"https://github.com/kenjikatahira/react-spotify-player",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{loading:"lazy",width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149",class:"attachment-full size-full",alt:"Fork me on GitHub","data-recalc-dims":"1"})),r.a.createElement("div",{className:"browser-inner-wrapper"},r.a.createElement(fe,{uri:a,tracks:n}))),r.a.createElement("div",{className:"now-playing-wrapper"},r.a.createElement(xe,null))):r.a.createElement(ke,null)}}]),a}(r.a.Component),Se=Object(o.b)((function(e){return{user:e.user,logged:e.logged,playlists:e.playlists,uri:e.uri,device_id:e.device_id}}),{logout:K,getUser:function(){return function(e){j.a.get("https://api.spotify.com/v1/me",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}}).then((function(t){e({type:"GET_USER",payload:t.data})}))}},getPlaylists:function(){return function(e){j.a.get("https://api.spotify.com/v1/me/playlists?limit=30&offset=0",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(k().access_token)}}).then((function(t){var a=t.data;e({type:"GET_PLAYLISTS",payload:a})}))}},setView:Y,setDeviceId:function(e){return function(t){t({type:"SET_DEVICE_ID",payload:e})}},getPlayer:function(e){var t=e.setDeviceId;return function(e){e({type:"GET_PLAYER",payload:W.init({setDeviceId:t})})}}})(Ne),Te=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.isLogged()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(Se,null))}}]),a}(r.a.Component),Ie=Object(o.b)((function(e){return{logged:e.logged}}),{isLogged:function(){return function(e){e({type:"ISLOGGED",payload:{status:E(),access_token:k().access_token}})}}})(Te),Ce=Object(l.d)(p,Object(l.a)(i.a));s.a.render(r.a.createElement(o.a,{store:Ce},r.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.6cd04206.chunk.js.map