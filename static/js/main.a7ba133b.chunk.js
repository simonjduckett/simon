(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(51)},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/lds.3575b896.png"},42:function(e,t,a){e.exports=a.p+"static/media/artistbox.c9836211.png"},43:function(e,t,a){e.exports=a.p+"static/media/IMG_1485.979d19cb.JPG"},44:function(e,t,a){e.exports=a.p+"static/media/simonsbox.76046fb0.png"},45:function(e,t,a){e.exports=a.p+"static/media/dance.a9dd62e6.png"},46:function(e,t,a){e.exports=a.p+"static/media/mystery.bb39a6de.png"},47:function(e,t,a){e.exports=a.p+"static/media/simonguitarbox.e93717bb.png"},48:function(e,t,a){e.exports=a.p+"static/media/follow.bca76834.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/parade.d3ce9564.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/ruos.b74ec750.jpg"},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(22),l=a.n(o),i=(a(31),a(6)),r=a(7),m=a(9),s=a(8),u=a(12),d=a(10),p=(a(32),a(2)),h=a(11),b=(a(33),a(34),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"topbar"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"brand"},c.a.createElement(p.b,{className:"light",to:"/"},"Simon")),c.a.createElement("div",{className:"menu"},c.a.createElement("span",{id:"ham",onClick:this.props.toggleMenu},c.a.createElement("div",{className:"bar1"}),c.a.createElement("div",{className:"bar2"}),c.a.createElement("div",{className:"bar3"})))))}}]),t}(n.Component)),E=function(){return c.a.createElement("div",{id:"mini-nav"},c.a.createElement(p.b,{className:"mini-nav-link",to:"/projects/web"},"Web"),c.a.createElement(p.b,{className:"mini-nav-link",to:"/projects/music"},"Music"))},g=function(){return c.a.createElement("div",{id:"intro-text",align:"left"},c.a.createElement("h1",null,"Welcome"),c.a.createElement("p",null,"I make web apps and music, feel free to browse my projects to see what I've been up to."),c.a.createElement(E,null))},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).move=a.move.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){0==this.props.firstload?this.move():(document.getElementById("topbar").style.opacity="0",document.getElementById("topbar").style.visibility="hidden")}},{key:"move",value:function(){this.props.logfirstload(),this.props.x.matches?(console.log("match"),document.getElementById("hero-image").style.float="none",document.getElementById("hero-image").style.height="200px",document.getElementById("introtextcontainer").style.width="100%",document.getElementById("hero-image").style.width="100%"):(document.getElementById("introtextcontainer").style.width="50%",document.getElementById("hero-image").style.width="50%"),document.getElementById("hero-image").style.backgroundPosition="0px 100px",document.getElementById("intro-text").style.opacity="1",document.getElementById("mini-nav").style.opacity="1",document.getElementById("htext").style.opacity="0",document.getElementById("topbar").style.visibility="visible",document.getElementById("topbar").style.opacity="1"}},{key:"render",value:function(){return c.a.createElement("div",{"data-aos":"fade-in"},c.a.createElement("header",{id:"header",onClick:this.move},c.a.createElement("div",{id:"hero-image"},c.a.createElement("div",{id:"htext",className:"hero-text"},c.a.createElement("h1",null,"Hi, I'm Simon"),c.a.createElement("p",null,"Click to enter."))),c.a.createElement("div",{id:"introtextcontainer"},c.a.createElement(g,null))))}}]),t}(n.Component),f=a(25),v=a.n(f),k=(a(39),a(15)),w=a.n(k),j=function(){return c.a.createElement("div",{id:"social"},c.a.createElement("a",{target:"_blank",href:"https://soundcloud.com/simon-duckett"},c.a.createElement(w.a,{name:"soundcloud"})),c.a.createElement("a",{target:"_blank",href:"https://github.com/simonjduckett"},c.a.createElement(w.a,{name:"github"})),c.a.createElement("a",{target:"_blank",href:"https://www.youtube.com/channel/UCNVM5x5uQ8hBM6wN_xLlomA"},c.a.createElement(w.a,{name:"youtube"})),c.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/simon-duckett/"},c.a.createElement(w.a,{name:"linkedin"})))},N=function(e){return c.a.createElement("div",{id:"menu",className:"padding-top"},c.a.createElement("div",{className:"min-height container menu-container"},c.a.createElement("div",{className:"row text-left"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("p",null,c.a.createElement(p.b,{className:"menu-link",to:"/",onClick:e.toggleMenu},"Home"),c.a.createElement("br",null),c.a.createElement(p.b,{className:"menu-link",to:"/projects/web",onClick:e.toggleMenu},"Projects"))),c.a.createElement("div",{className:"col-md"},c.a.createElement("span",null,"Phone"),c.a.createElement("br",null),c.a.createElement("p",null,"+44 7794 445214")),c.a.createElement("div",{className:"col-md"},c.a.createElement("span",null,"Email"),c.a.createElement("br",null),c.a.createElement("p",null,c.a.createElement("a",{href:"mailto:simonjduckett@hotmail.co.uk"},"simon@simonduckett.com")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(j,null)))))},x=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"link",value:function(e){window.location=e}},{key:"render",value:function(){return c.a.createElement("div",{className:"","data-aos":"fade-up"},c.a.createElement("table",{className:"project-table"},c.a.createElement("tbody",null,this.props.data.map(function(e,t){return c.a.createElement("tr",{className:"project-row",key:t,"data-aos":"fade-up",onClick:function(){return window.open(e.link)}},c.a.createElement("td",null,c.a.createElement("div",{className:"project-img"},c.a.createElement("img",{alt:"project-img",src:e.img}))),c.a.createElement("td",{className:"project-text"},c.a.createElement("h2",null,c.a.createElement("strong",null,e.name)),c.a.createElement("span",null,e.tech)),c.a.createElement("td",null,c.a.createElement("strong",null,e.type)))}))))}}]),t}(n.Component),O={projects:[{web:[{name:"London Dentistry Show",tech:"wordpress",type:"Website",img:a(41),link:"https://www.londondentistryshow.co.uk/"},{name:"Artist Template",tech:"php",type:"Website",img:a(42),link:"https://www.simonduckett.com/Artist/"},{name:"Ai drone",tech:"wordpress",type:"Website",img:a(43),link:"https://aidronebeats.com/"},{name:"Simon's store",tech:"React.js",type:"Web app",img:a(44),link:"https://simonjduckett.github.io/simons-store/"},{name:"Katy's Dance Academy",tech:"wordpress",type:"Website",img:a(45),link:"https://www.katysdanceacademy.co.uk/"},{name:"Mystery Box 3",tech:"Javascript",type:"Video game",img:a(46),link:"https://www.simonduckett.com/Mystery/"},{name:"Simon Guitar",tech:"php",type:"Web app",img:a(47),link:"https://www.simonguitar.co.uk/"}],music:[{name:"Follow my lead",tech:"Music",type:"broken beat",img:a(48),link:"https://duckett.bandcamp.com/album/follow-my-lead"},{name:"Parade",tech:"Music",type:"footwork",img:a(49),link:"https://duckett.bandcamp.com/album/parade"},{name:"Responsible Use Of Synthesizers EP",tech:"Ground Mass Music",type:"footwork",img:a(50),link:"https://groundmassmusic.bandcamp.com/album/responsible-use-of-synthesizers-ep"}]}]},M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("topbar").style.visibility="visible",document.getElementById("topbar").style.opacity="1"}},{key:"render",value:function(){var e=O.projects[0].web.length,t=O.projects[0].music.length;return c.a.createElement("div",{id:"projects",className:"padding-top"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("h1",null,"Projects"),c.a.createElement("div",{id:"subnav"},c.a.createElement(p.c,{activeClassName:"activeNavLink",className:"proj-menu-link",to:"/projects/web"},"Web (",e,")"),c.a.createElement(p.c,{activeClassName:"activeNavLink",className:"proj-menu-link",to:"/projects/music"},"Music (",t,")"),c.a.createElement("hr",null),c.a.createElement(h.a,{path:"/projects/web",render:function(){return c.a.createElement(x,{data:O.projects[0].web})}}),c.a.createElement(h.a,{path:"/projects/music",render:function(){return c.a.createElement(x,{data:O.projects[0].music})}}))))}}]),t}(n.Component),I=function(){return c.a.createElement("div",{className:"padding-top"},c.a.createElement(b,{color:"topbar topbar__dark"}),c.a.createElement("div",{id:"page-not-found",className:"min-height"},c.a.createElement("h2",null,"Oh no.. page not found. 404")))},B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={firstload:!0},a.logfirstload=a.logfirstload.bind(Object(u.a)(a)),a.toggleMenu=a.toggleMenu.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){v.a.init()}},{key:"toggleMenu",value:function(){var e=document.getElementById("menu"),t=document.getElementById("ham");e.classList.toggle("show"),t.classList.toggle("change")}},{key:"logfirstload",value:function(){this.setState({firstload:!1})}},{key:"render",value:function(){var e=this,t=window.matchMedia("(max-width: 600px)");return c.a.createElement("div",{className:"App"},c.a.createElement(p.a,null,c.a.createElement(b,{toggleMenu:this.toggleMenu}),c.a.createElement(N,{toggleMenu:this.toggleMenu}),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",render:function(){return c.a.createElement(y,{logfirstload:e.logfirstload,firstload:e.state.firstload,x:t})}}),c.a.createElement(h.a,{path:"/projects",render:function(){return c.a.createElement(M,null)}}),c.a.createElement(h.a,{component:I}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.a7ba133b.chunk.js.map