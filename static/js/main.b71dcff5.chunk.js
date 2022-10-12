(this.webpackJsonpjeeann=this.webpackJsonpjeeann||[]).push([[0],{151:function(e,t,a){e.exports=a(299)},156:function(e,t,a){},157:function(e,t,a){},283:function(e,t,a){},286:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){e.exports=a.p+"static/media/me.504f5b7c.jpg"},289:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(26),r=a.n(i),l=(a(156),a(1)),o=a(2),s=a(14),d=a(4),u=a(5),m=a(323),h=a(65),p=a.n(h),v=a(138),b=a.n(v),f=a(47),y=a.n(f),E=(a(157),a(97),a(37));function g(e){var t=c.a.useState(!1),a=Object(E.a)(t,2),n=a[0],i=a[1],r=c.a.useRef();return c.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&i(e.isIntersecting)}))}));return e.observe(r.current),function(){return e.unobserve(r.current)}}),[]),c.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:r},e.children)}var k=window.innerWidth<600,S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state.expanded,t=[c.a.createElement("a",{href:"#intro"},"/home"),c.a.createElement("a",{href:"#about"},"/about"),c.a.createElement("a",{href:"#experience"},"/experience"),c.a.createElement("a",{href:"#projects"},"/software-creations")];return c.a.createElement("div",{className:"sidebar-nav"},!k&&c.a.createElement(m.a,{expanded:e,defaultOpenKeys:["3","4"],activeKey:this.state.activeKey,onSelect:this.handleSelect,appearance:"subtle"},c.a.createElement(m.a.Body,null,c.a.createElement("div",{className:"sidebar-links"},t.map((function(e,t){return c.a.createElement(g,{delay:"".concat(t+1,"00ms")},c.a.createElement("div",null,e))}))))),c.a.createElement("div",{className:"sidebar-logos",href:"/"},c.a.createElement("a",{href:"mailto:jeeann.kim@gmail.com"},c.a.createElement(p.a,{style:{fontSize:25}})),c.a.createElement("a",{href:"https://github.com/jeeannyy"},c.a.createElement(y.a,{style:{fontSize:24}})),c.a.createElement("a",{href:"https://www.linkedin.com/in/jeeanny/"},c.a.createElement(b.a,{style:{fontSize:26}}))))}}]),a}(c.a.Component),j=(a(283),a(139)),w=a.n(j),N=a(6),O=a(140),T=(n.Component,function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1",visible:!0},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return c.a.createElement("div",{id:"intro"},c.a.createElement(w.a,{avgTypingDelay:120},c.a.createElement("span",{className:"intro-title"},"Hi, ",c.a.createElement("span",{className:"intro-name"},"Jeeann")," here!")),c.a.createElement(g,null,c.a.createElement("div",{className:"intro-subtitle"},"I create stuff sometimes."),c.a.createElement("div",{className:"intro-desc"},"I'm a Software Engineer and artist based in London \ud83c\uddec\ud83c\udde7 (but made in Korea \ud83c\uddf0\ud83c\uddf7). I have great interest in full-stack development, human-computer interactions, artificial intelligence, and everything in between."),c.a.createElement("a",{href:"mailto:jeeann.kim@gmail.com",className:"intro-contact"},c.a.createElement(p.a,null),"  Say hi!")))}}]),a}(c.a.Component)),C=a(144),x=a(321),K=a(325),I=a(322),L=a(320),A=a(324),R=["children","value","index"],M=window.innerWidth<600;function B(e){var t=e.children,a=e.value,n=e.index,i=Object(C.a)(e,R);return M?c.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},i),a===n&&c.a.createElement(A.a,{p:3},c.a.createElement(L.a,null,t))):c.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel"},i),a===n&&c.a.createElement(A.a,{p:3},c.a.createElement(L.a,null,t)))}var D=Object(x.a)((function(e){return{root:{flexGrow:1,backgroundColor:"theme.palette.background.paper",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),J=function(){var e=D(),t=c.a.useState(0),a=Object(E.a)(t,2),n=a[0],i=a[1],r={"Pocket Forest":{jobTitle:"Full Stack Software Engineer @",duration:"2022",desc:["Facilitated discussions with the team to access users' expectations and constructed wireframe","Developed front-end skeleton using modular, reusable React Native components and made final calls for production-level UI changes","Tech Stack: React Native, MongoDB"]},NewNew:{jobTitle:"Full Stack Software Engineer @",duration:"2022",desc:["Architected a service of a ratings and reviews system to allow users to post reviews, view ratings, choose articles by categories and sort by likes, comments, date, and votes for a specific article","Built a news API with Node.js trying to mimic the real-world backend service which should provide information to the front-end architecture","Tech Stack: React.js, Node.js, Express, PSQL, CSS"]},TikTok:{jobTitle:"AI Data Operator Specialist @",duration:"SEP 2020 - FEB 2022",desc:["Machine Translation Project with AI-Lab-NLP-Machine Learning team","Worked cooperatively with the internal and global team to build QA policies and created documentation related to Korean trends","Identified controversial cases and errors using the content review & discussion set-up within the team and to be updated stakeholders","Created an onboarding guide for newbies and trained them to onboard","Led and supported team-building activities in Korea"]}};return c.a.createElement("div",{className:e.root},c.a.createElement(K.a,{orientation:M?null:"vertical",variant:M?"fullWidth":"scrollable",value:n,onChange:function(e,t){i(t)},className:e.tabs},Object.keys(r).map((function(e,t){return c.a.createElement(I.a,Object.assign({label:M?"0".concat(t,"."):e},(a=t,M?{id:"full-width-tab-".concat(a),"aria-controls":"full-width-tabpanel-".concat(a)}:{id:"vertical-tab-".concat(a)})));var a}))),Object.keys(r).map((function(e,t){return c.a.createElement(B,{value:n,index:t},c.a.createElement("span",{className:"joblist-job-title"},r[e].jobTitle+" "),c.a.createElement("span",{className:"joblist-job-company"},e),c.a.createElement("div",{className:"joblist-duration"},r[e].duration),c.a.createElement("ul",{className:"job-description"},r[e].desc.map((function(e,t){return c.a.createElement(g,{delay:"".concat(t+1,"00ms")},c.a.createElement("li",{key:t},e))}))))})))},H=(a(286),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return c.a.createElement("div",{id:"experience"},c.a.createElement(g,null,c.a.createElement("div",{className:"section-header "},c.a.createElement("span",{className:"section-title"},"/ experience")),c.a.createElement(J,null)))}}]),a}(c.a.Component)),P=(a(287),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=c.a.createElement("p",null,"I am currently a ",c.a.createElement("b",null,"trainee software developer")," at "," ",c.a.createElement("a",{href:"https://northcoders.com/"},"Northcoders"),". I studied "," ",c.a.createElement("a",{href:"https://eng.ssu.ac.kr/"},"Media Arts and Computer Science")," at ",c.a.createElement("b",null,"Soongsil University")," in Seoul, South Korea. Before I started on this journey, I worked as a marketer and data operator. These experiences gave me a unique perspective on solving complex problems and a strong background in design, communication and knowledge of the technology industry."),t=c.a.createElement("p",null,"Outside of work, I'm interested in editing videos, painting, traveling, going to the art museum and studying English."),n=["Javascript ES6+","React.js","Node.js","Express.js","MongoDB","HTML & CSS"];n.map((function(e){return c.a.createElement("li",null,e)}));return c.a.createElement("div",{id:"about"},c.a.createElement(g,null,c.a.createElement("div",{className:"section-header "},c.a.createElement("span",{className:"section-title"},"/ about me")),c.a.createElement("div",{className:"about-content"},c.a.createElement("div",{className:"about-description"},[e],"Here are some technologies I have been working with:",c.a.createElement("ul",{className:"tech-stack"},n.map((function(e,t){return c.a.createElement(g,{delay:"".concat(t+1,"00ms")},c.a.createElement("li",null,e))}))),[t]),c.a.createElement("div",{className:"about-image"},c.a.createElement("img",{src:a(288)})))))}}]),n}(c.a.Component)),W=(a(289),a(141)),z=a.n(W),F=(a(290),a(94)),G=a.n(F),Q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return c.a.createElement("span",{className:"external-links"},c.a.createElement("a",{className:"github-icon",href:this.props.githubLink},c.a.createElement(y.a,{style:{fontSize:20,color:"var(--lightest-slate)"}})),this.props.openLink&&c.a.createElement("a",{className:"open-icon",href:this.props.openLink},c.a.createElement(G.a,{style:{fontSize:25,color:"var(--lightest-slate)"}})))}}]),a}(c.a.Component),U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e={"News app":{desc:"This is a News app that user can view, discuss, rate articles. It interacts with an API which was developed during my News Backend project.",techStack:"React, React Router, Axios, CSS",link:"https://github.com/jeeannyy/News-app",open:"https://jeeannyy.github.io/News-app"},"Coin Tracker":{desc:"A coin tracker application that you can find the real-time cryptos' ranking, price chart, and history",techStack:"React, TypeScript, Styled-components",link:"https://github.com/jeeannyy/Coin-Tracker",open:"https://jeeannyy.github.io/Coin-Tracker/"},"Pocket Forest":{desc:"A location-based tree capture application. The user can take a picture of the tree using the map and tree marker. If the species is a match with our database, the tree has been added to user's pocket forest page.",techStack:"React Native, Expo, MongoDB, Jest, Heroku",link:"https://github.com/jeeannyy/News-app",open:"https://jeeannyy.github.io/News-app"},"Weather app":{desc:"This is an application that informs the weather based on the user's real-time location",techStack:"React Native",link:"https://github.com/jeeannyy/Weather-app",open:""},Trello:{desc:"Cloned basic features of Trello application. You can add and delete boards and tasks",techStack:"React, TypeScript, Styled-components",link:"https://github.com/jeeannyy/Trello-Clone",open:"https://jeeannyy.github.io/Trello-Clone"},"Paint app":{desc:"A paint app for all age of people.",techStack:"JavaScript, HTML5 / CSS",link:"https://github.com/jeeannyy/Paint-app",open:"https://painting-jeeann.netlify.app"},"Real Time Chat":{desc:"A simple chat app that multiple people can join and chat in real time.",techStack:"socket.io, Javascript",link:"https://github.com/jeeannyy/Real-Time-Chat",open:""},Kokoatalk:{desc:"Cloned Korean messanger application, Kakaotalk.",techStack:"HTML5, CSS",link:"https://github.com/jeeannyy/Kokoatalk",open:"https://kokoatalk-jeeann.netlify.app/"},"Drum Kit":{desc:"A drum application that everyone can play it.",techStack:"JavaScript, HTML5, CSS",link:"https://drumkit-jeeann.netlify.app",open:"https://github.com/jeeannyy/Drum-Kit"},"Todo Todo":{desc:"Simple design To do list application.",techStack:"React, CSS",link:"https://github.com/jeeannyy/TodoTodo",open:"https://jeeannyy.github.io/TodoTodo/"},London:{desc:"A poster for practicing CSS grid and flex.",techStack:"HTML5, CSS",link:"https://github.com/jeeannyy/London",open:""},"Bad Religion":{desc:"A poster for practicing CSS grid and flex.",techStack:"HTML5, CSS",link:"https://github.com/jeeannyy/Bad-Religion",open:""},"Dice game":{desc:"A dice game made with Vanilla JS.",techStack:"JavaScript, HTML5, CSS",link:"https://github.com/jeeannyy/Dice-Game",open:"https://dicegame-jeeann.netlify.app"}};return c.a.createElement("div",{id:"projects"},c.a.createElement("div",{className:"section-header "},c.a.createElement("span",{className:"section-title"},"/ software-creations")),c.a.createElement("div",{className:"project-container"},c.a.createElement("ul",{className:"projects-grid"},Object.keys(e).map((function(t,a){return c.a.createElement(g,{delay:"".concat(a+1,"00ms")},c.a.createElement("li",{className:"projects-card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"folder-icon"},c.a.createElement(z.a,{style:{fontSize:35}})),c.a.createElement(Q,{githubLink:e[t].link,openLink:e[t].open})),c.a.createElement("div",{className:"card-title"},t),c.a.createElement("div",{className:"card-desc"},e[t].desc),c.a.createElement("div",{className:"card-tech"},e[t].techStack)))})))))}}]),a}(c.a.Component),q=(a(291),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return c.a.createElement(g,null,c.a.createElement("div",{id:"credits"},c.a.createElement("div",{className:"ending-credits"},c.a.createElement("div",null,"Copyright \xa9 2022 Jeeanny\ud83e\udd95. All rights reserved."))))}}]),a}(c.a.Component));a(292),a(293),a(294);var V=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{id:"content"},c.a.createElement(T,null),c.a.createElement(P,null),c.a.createElement(H,null),c.a.createElement(U,null),c.a.createElement(q,null)),c.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(295);var Y=a(143);r.a.render(c.a.createElement(Y.a,null,c.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.b71dcff5.chunk.js.map