(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/zarzeczny_maciej_cv_eng.d19d309c.pdf"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/html.0d88aa02.svg"},function(e,t,a){e.exports=a.p+"static/media/css.b1b10588.svg"},function(e,t,a){e.exports=a.p+"static/media/xd.283027b8.svg"},function(e,t,a){e.exports=a.p+"static/media/wordpress.a4294037.svg"},function(e,t,a){e.exports=a.p+"static/media/anim.bf75476f.svg"},function(e,t,a){e.exports=a.p+"static/media/dimension.ed89e8e8.svg"},function(e,t,a){e.exports=a.p+"static/media/il.7ccace60.svg"},function(e,t,a){e.exports=a.p+"static/media/indesign.b5c548ba.svg"},function(e,t,a){e.exports=a.p+"static/media/ps.e8a671a1.svg"},function(e,t,a){e.exports=a.p+"static/media/pp.d111f6c1.svg"},function(e,t,a){e.exports=a.p+"static/media/app.06fd0dd1.jpg"},function(e,t,a){e.exports=a.p+"static/media/vc.9478ef6e.jpg"},function(e,t,a){e.exports=a.p+"static/media/other.edcbf9b3.jpg"},function(e,t,a){e.exports=a.p+"static/media/app-web.760b8b6a.zip"},function(e,t,a){e.exports=a.p+"static/media/vc.e692b2ca.zip"},function(e,t,a){e.exports=a.p+"static/media/other.d266d7c7.zip"},function(e,t,a){e.exports=a.p+"static/media/all.200b3057.zip"},,,function(e,t,a){e.exports=a(67)},,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/landing-video.be0237a4.mp4"},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),s=(a(46),a(3)),m=a(4),c=a(6),o=a(5),d=a(7),h=(a(21),a(57),a(58),a(2));a(59);var f=function(e){var t=e.darkTheme,a=e.handleThemeChange,n=t?"":"active",l=t?"active":"";return r.a.createElement("div",{className:"toggle-parent"},r.a.createElement(h.f,{className:"toggle-icon "+n}),r.a.createElement("div",{className:"toggle"},r.a.createElement("input",{type:"checkbox",id:"switch",onChange:a,checked:t}),r.a.createElement("label",{htmlFor:"switch"},"Toggle")),r.a.createElement(h.d,{className:"toggle-icon "+l}))},E=(a(15),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={mobileMenuActive:!1,showMinifiedMenu:!1,hamburgerClass:""},e.handleScroll=function(){window.scrollY>=100&&!e.state.showMinifiedMenu?(e.setState({showMinifiedMenu:!0}),setTimeout((function(){e.setState({hamburgerClass:"animate"})}),10),setTimeout((function(){e.setState({hamburgerClass:""})}),2e3)):window.scrollY<100&&e.state.showMinifiedMenu&&e.setState({showMinifiedMenu:!1})},e.showMobileMenu=function(){e.setState({mobileMenuActive:!0})},e.hideMobileMenu=function(){e.setState({mobileMenuActive:!1})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.handleThemeChange,a=e.darkTheme,n=this.state.mobileMenuActive?"hidden":"active",l=this.state.mobileMenuActive?"active":"hidden",i=this.state.showMinifiedMenu?"mobile":"";return r.a.createElement("nav",{className:i},r.a.createElement(f,{handleThemeChange:t,darkTheme:a}),r.a.createElement(h.a,{className:"hamburger-icon "+n+" "+this.state.hamburgerClass+" "+i,onClick:this.showMobileMenu}),r.a.createElement(h.g,{className:"hamburger-icon "+l,onClick:this.hideMobileMenu}),r.a.createElement("ul",{className:"nav-links "+l},r.a.createElement("li",null,r.a.createElement(d.Link,{to:"about-section",smooth:!0,duration:500,onClick:this.hideMobileMenu},"ABOUT ME")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"skills-section",smooth:!0,duration:500,onClick:this.hideMobileMenu},"SKILLS")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"projects-section",smooth:!0,duration:500,onClick:this.hideMobileMenu},"PROJECTS")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"contact-section",smooth:!0,duration:500,onClick:this.hideMobileMenu},"CONTACT"))))}}]),a}(r.a.Component)),k=(a(60),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleThemeChange,a=e.darkTheme;return r.a.createElement("div",{className:"landing-page",name:"about-section"},r.a.createElement("section",{className:"navbar"},r.a.createElement(E,{handleThemeChange:t,darkTheme:a})),r.a.createElement("header",null,r.a.createElement("h3",null,"Sara Brzostek"),r.a.createElement("h1",null,"I apply to Academy of Art"),r.a.createElement("h1",null,"Visual Communication"),r.a.createElement(d.Link,{to:"skills-section",smooth:!0,duration:500},r.a.createElement("div",{className:"button"},"Learn more"))),r.a.createElement("svg",{id:"landing-illustration",xmlns:"http://www.w3.org/2000/svg",width:"433.183",height:"572.709",viewBox:"0 0 433.183 572.709"},r.a.createElement("g",{id:"Me",transform:"translate(0.04 -0.009)"},r.a.createElement("g",{id:"Layer_1","data-name":"Layer 1",transform:"translate(0.46 0.46)"},r.a.createElement("g",{id:"Me-2","data-name":"Me"},r.a.createElement("path",{id:"Path_329","data-name":"Path 329",d:"M599.383,454.448v169.2c0,77.747-52.606,141.336-116.9,141.336H284.12c-64.3,0-116.92-63.588-116.92-141.336v-169.2c0-104.486,51.445-195.135,125.225-236.806a187.958,187.958,0,0,1,56.17-20.965,179.007,179.007,0,0,1,58.75-1.758h0a180.941,180.941,0,0,1,40.14,10.208,193.2,193.2,0,0,1,27.3,12.9h.081a222.84,222.84,0,0,1,61.04,51.928q6.564,7.934,12.531,16.5C580.192,331.965,599.383,390.618,599.383,454.448Z",transform:"translate(-167.2 -193.226)",fill:"#3a2719",stroke:"#a57e6e","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("rect",{id:"Rectangle_240","data-name":"Rectangle 240",width:"48.251",height:"98.793",rx:"12",transform:"translate(194.344 407.122)",fill:"#f4b486",stroke:"#f4b486","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_330","data-name":"Path 330",d:"M151.717,53.12h88.311A113.017,113.017,0,0,1,353.044,166.136v74.539A157.172,157.172,0,0,1,195.872,397.847h0A157.172,157.172,0,0,1,38.7,240.675V166.137A113.017,113.017,0,0,1,151.717,53.12Z",transform:"translate(22.969 31.804)",fill:"#fac696"}),r.a.createElement("path",{id:"Path_331","data-name":"Path 331",d:"M240.86,345.132a28.432,28.432,0,1,1,56.864,0",transform:"translate(-122.07 -117.614)",fill:"#fac696",stroke:"#885543","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_332","data-name":"Path 332",d:"M329.22,344.592a28.432,28.432,0,1,1,56.863,0",transform:"translate(-67.933 -117.945)",fill:"#fac696",stroke:"#885543","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("circle",{id:"Ellipse_54","data-name":"Ellipse 54",cx:"14.724",cy:"14.724",r:"14.724",transform:"translate(85.569 257.287)",fill:"#e8a17b",stroke:"#e8a17b","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("circle",{id:"Ellipse_55","data-name":"Ellipse 55",cx:"14.724",cy:"14.724",r:"14.724",transform:"translate(322.343 257.287)",fill:"#e8a17b",stroke:"#e8a17b","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_333","data-name":"Path 333",d:"M360.13,202.564a212.875,212.875,0,0,0-40.075-8.434h0a16.369,16.369,0,0,0-4.838,3.371c-12.3,12.3-3.1,43.349,21.158,81.07,16.046,25,38.7,52.912,66.039,80.263,38.7,38.7,78.618,68.039,109.662,82.553v-32.56a214.979,214.979,0,0,0-50.953-138.978c-25.553-23.726-51-43.11-73.578-56.576h-.081Z",transform:"translate(-79.846 -192.711)",fill:"#3a2718"}),r.a.createElement("path",{id:"Path_334","data-name":"Path 334",d:"M421.524,234.777c0,18.643-16.965,35.011-42.478,44.268a149.093,149.093,0,0,1-98.567-.726C256.127,269.014,240,253,240,234.777a34.576,34.576,0,0,1,7.918-21.384A214.874,214.874,0,0,1,362.838,194.6h0a212.872,212.872,0,0,1,40.043,8.5C414.589,211.909,421.524,222.907,421.524,234.777Z",transform:"translate(-122.597 -193.25)",fill:"#3a2718"}),r.a.createElement("path",{id:"Path_335","data-name":"Path 335",d:"M325.057,277.247a510.078,510.078,0,0,1-56.605,78.344c-34.947,40.317-71.635,71.748-101.212,88.7v-36c0-86.44,51.445-161.43,125.225-195.909A213.939,213.939,0,0,1,348.635,195C355.1,210.611,345.861,241.091,325.057,277.247Z",transform:"translate(-167.176 -192.178)",fill:"#3a2718"}),r.a.createElement("rect",{id:"Rectangle_241","data-name":"Rectangle 241",width:"6.999",height:"29.496",rx:"2.17",transform:"translate(218.519 277.881)",fill:"#f4b486",stroke:"#f4b486","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_336","data-name":"Path 336",d:"M285.908,479.289l58.266,15.25-.062-36.25s-28.039,6.089-58.2-.141",transform:"translate(-96.564 -31.251)",fill:"#d69b73"}))),r.a.createElement("g",{id:"C_D_G_K_N_S_T_X_Z_Y","data-name":"C,D,G,K,N,S,T,X,Z,Y",transform:"translate(176.113 340.43)"},r.a.createElement("g",{id:"C_D_G_K_N_S_T_X_Z_Y-2","data-name":"C,D,G,K,N,S,T,X,Z,Y"},r.a.createElement("path",{id:"Path_337","data-name":"Path 337",d:"M367.511,404.06a35.3,35.3,0,0,1-13.385,27.061,42.814,42.814,0,0,1-5.822,4.1,52.993,52.993,0,0,1-53.638-.387c-11.289-6.967-18.546-18.143-18.546-30.77Z",transform:"translate(-276.12 -404.06)",fill:"#961b1e"}),r.a.createElement("path",{id:"Path_338","data-name":"Path 338",d:"M366.471,404.19c0,9.466-20.126,17.127-44.945,17.127s-44.945-7.66-44.945-17.127",transform:"translate(-275.838 -403.98)",fill:"#fff"}),r.a.createElement("path",{id:"Path_339","data-name":"Path 339",d:"M341.258,424.893a52.993,52.993,0,0,1-53.638-.387c4.467-2.129,14.627-3.6,26.464-3.6C326.6,420.91,337.275,422.571,341.258,424.893Z",transform:"translate(-269.074 -393.736)",fill:"#fff"}))))))}}]),a}(r.a.Component)),p=(a(61),a(22)),u=a.n(p),g=a(23),w=a.n(g),_=a(24),v=a.n(_),b=a(25),M=a.n(b),P=a(26),C=a.n(P),L=a(27),y=a.n(L),N=a(28),x=a.n(N),R=a(29),S=a.n(R),j=a(30),T=a.n(j),A=a(31),Z=a.n(A),O=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={webCard:"",mobileCard:"",otherCard:"",adobeSkills:["Photoshop","XD","Illustrator","Animate","InDesign","Premiere Pro","Dimension"],adobeIcons:[T.a,v.a,x.a,C.a,S.a,Z.a,y.a],otherSkills:["Wordpress","HTML5","CSS3"],otherIcons:[M.a,u.a,w.a]},e.handleCardClick=function(t){switch(t.currentTarget.id){case"adobe":""===e.state.webCard?e.setState({webCard:"active",mobileCard:"",otherCard:""}):e.setState({webCard:""});break;case"other":""===e.state.otherCard?e.setState({otherCard:"active",webCard:"",mobileCard:""}):e.setState({otherCard:""})}},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.adobeSkills.map((function(t,a){return r.a.createElement("div",{className:"skill",key:a},r.a.createElement("img",{src:e.state.adobeIcons[a],alt:"Adobe skill icon",className:"skill-icon"}),r.a.createElement("span",{className:"skill-description"},t))})),a=this.state.otherSkills.map((function(t,a){return r.a.createElement("div",{className:"skill",key:a},r.a.createElement("img",{src:e.state.otherIcons[a],alt:"Other skill icon",className:"skill-icon"}),r.a.createElement("span",{className:"skill-description"},t))}));return r.a.createElement("div",{className:"skills-page",name:"skills-section"},r.a.createElement("h1",{className:"title"},"Skills"),r.a.createElement("div",{className:"cards"},r.a.createElement("div",{id:"adobe",className:"card "+this.state.webCard,onClick:this.handleCardClick},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Adobe"),r.a.createElement(h.b,{className:"more-icon"})),r.a.createElement("div",{className:"card-content"},t)),r.a.createElement("div",{id:"other",className:"card "+this.state.otherCard,onClick:this.handleCardClick},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Other"),r.a.createElement(h.b,{className:"more-icon"})),r.a.createElement("div",{className:"card-content"},a))),r.a.createElement(d.Link,{id:"projects-btn",to:"projects-section",smooth:!0,duration:500,onClick:this.hideMobileMenu},r.a.createElement("div",{className:"button"},"See projects")),r.a.createElement("svg",{id:"skills-illustration",xmlns:"http://www.w3.org/2000/svg",width:"137.73",height:"558.975",viewBox:"0 0 137.73 558.975"},r.a.createElement("g",{id:"skills-illustration",transform:"translate(0 0.005)"},r.a.createElement("rect",{id:"Rectangle_192","data-name":"Rectangle 192",width:"20.67",height:"258.46",transform:"translate(72.14 289.99)",fill:"#fac696"}),r.a.createElement("rect",{id:"Rectangle_193","data-name":"Rectangle 193",width:"20.67",height:"258.46",transform:"translate(67.55 548.45) rotate(180)",fill:"#fac696"}),r.a.createElement("rect",{id:"Rectangle_194","data-name":"Rectangle 194",width:"11.35",height:"120.55",transform:"translate(15.23 196.13)",fill:"#fac696"}),r.a.createElement("rect",{id:"Rectangle_195","data-name":"Rectangle 195",width:"11.35",height:"120.55",transform:"translate(107.92 194.22)",fill:"#fac696"}),r.a.createElement("g",{id:"Me"},r.a.createElement("path",{id:"Path_295","data-name":"Path 295",d:"M353.11,185.05v53.54c0,24.6-16.64,44.72-37,44.72H253.38c-20.35,0-37-20.12-37-44.72V185.05c0-33.06,16.28-61.74,39.63-74.93a59.531,59.531,0,0,1,17.77-6.63,56.191,56.191,0,0,1,18.59-.56h0a57.789,57.789,0,0,1,12.69,3.23,60.621,60.621,0,0,1,8.63,4.08h0A70.47,70.47,0,0,1,333,126.69q2.09,2.51,4,5.21C347,146.3,353.11,164.86,353.11,185.05Z",transform:"translate(-215.88 -101.91)",fill:"#3a2719",stroke:"#a57e6e","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("rect",{id:"Rectangle_196","data-name":"Rectangle 196",width:"15.27",height:"31.26",rx:"7.63",transform:"translate(61.98 129.3)",fill:"#f4b486",stroke:"#f4b486","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_296","data-name":"Path 296",d:"M55.75,27.35H83.7a35.76,35.76,0,0,1,35.76,35.76V86.7a49.73,49.73,0,0,1-49.73,49.73h0A49.73,49.73,0,0,1,20,86.7V63.11A35.76,35.76,0,0,1,55.75,27.35Z",fill:"#fac696"}),r.a.createElement("path",{id:"Path_297","data-name":"Path 297",d:"M254,174.39a9,9,0,0,1,18,0",transform:"translate(-215.88 -101.91)",fill:"#fac696",stroke:"#885543","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_298","data-name":"Path 298",d:"M299,174.11a9,9,0,1,1,18,0",transform:"translate(-215.88 -101.91)",fill:"#fac696",stroke:"#885543","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("circle",{id:"Ellipse_46","data-name":"Ellipse 46",cx:"4.66",cy:"4.66",r:"4.66",transform:"translate(27.56 81.89)",fill:"#e8a17b",stroke:"#e8a17b","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("circle",{id:"Ellipse_47","data-name":"Ellipse 47",cx:"4.66",cy:"4.66",r:"4.66",transform:"translate(102.47 81.89)",fill:"#e8a17b",stroke:"#e8a17b","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_299","data-name":"Path 299",d:"M305.06,105.51a68.26,68.26,0,0,0-12.69-2.67h0a5.48,5.48,0,0,0-1.56,1.07c-3.89,3.89-1,13.72,6.7,25.65A157.828,157.828,0,0,0,318.4,155c12.26,12.26,24.88,21.53,34.71,26.12v-10.3a68,68,0,0,0-16.11-44,142.711,142.711,0,0,0-23.28-17.91h0Z",transform:"translate(-215.88 -101.91)",fill:"#3a2718"}),r.a.createElement("path",{id:"Path_300","data-name":"Path 300",d:"M311,115.55c0,5.9-5.37,11.08-13.44,14a47.15,47.15,0,0,1-31.19-.23c-7.73-3-12.82-8-12.82-13.78a10.89,10.89,0,0,1,2.51-6.76,67.863,67.863,0,0,1,36.36-5.95h0a68.261,68.261,0,0,1,12.69,2.67C308.75,108.3,311,111.78,311,115.55Z",transform:"translate(-215.88 -101.91)",fill:"#3a2718"}),r.a.createElement("path",{id:"Path_301","data-name":"Path 301",d:"M266.32,129.33a161.281,161.281,0,0,1-17.91,24.77c-11.06,12.75-22.67,22.7-32,28.08v-11.4a68.59,68.59,0,0,1,39.63-62,67.729,67.729,0,0,1,17.77-5.49C275.83,108.23,272.9,117.87,266.32,129.33Z",transform:"translate(-215.88 -101.91)",fill:"#3a2718"}),r.a.createElement("rect",{id:"Rectangle_197","data-name":"Rectangle 197",width:"2.21",height:"9.33",rx:"1.105",transform:"translate(69.62 88.41)",fill:"#f4b486",stroke:"#f4b486","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_302","data-name":"Path 302",d:"M275.19,244.16l20.45,4.94V237.32s-11,2.28-20.45.17",transform:"translate(-215.88 -101.91)",fill:"#d69b73"})),r.a.createElement("path",{id:"Path_303","data-name":"Path 303",d:"M226.95,268.13h3.28a26.36,26.36,0,0,1,26.36,26.36v3.28H226.95Z",transform:"translate(-257.07 422.8) rotate(-90)",fill:"#fff"}),r.a.createElement("rect",{id:"Rectangle_198","data-name":"Rectangle 198",width:"29.78",height:"3.25",transform:"translate(8.93 193.07)",fill:"#283368"}),r.a.createElement("path",{id:"Path_304","data-name":"Path 304",d:"M96.56,165.6h3.28A26.36,26.36,0,0,1,126.2,192v6.53H96.56Z",fill:"#fff"}),r.a.createElement("path",{id:"Smile",d:"M297.93,209.49c0,7.69-5.6,13.92-12.51,13.92s-12.51-6.23-12.51-13.92",transform:"translate(-215.88 -101.91)",fill:"#fff",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_305","data-name":"Path 305",d:"M52.31,157.88H84.25a19.58,19.58,0,0,1,19.58,19.58V214H32.73V177.45a19.58,19.58,0,0,1,19.58-19.57Z",fill:"#283368"}),r.a.createElement("rect",{id:"Rectangle_199","data-name":"Rectangle 199",width:"46.38",height:"10.64",transform:"translate(44.81 149.02)",fill:"#fff"}),r.a.createElement("path",{id:"Path_306","data-name":"Path 306",d:"M55,202.36H81a36.07,36.07,0,0,1,36.07,36.07v64.89H18.93V238.43A36.07,36.07,0,0,1,55,202.36Z",fill:"#283368"}),r.a.createElement("path",{id:"Path_307","data-name":"Path 307",d:"M36.26,202.36h64a3.53,3.53,0,0,1,3.53,3.53v4.62H32.73v-4.62A3.53,3.53,0,0,1,36.26,202.36Z",fill:"#fff"}),r.a.createElement("rect",{id:"Rectangle_200","data-name":"Rectangle 200",width:"29.78",height:"3.25",transform:"translate(93.21 195.24)",fill:"#283368"}),r.a.createElement("rect",{id:"Rectangle_201","data-name":"Rectangle 201",width:"20.67",height:"16.34",transform:"translate(72.14 303.32)",fill:"#fab178"}),r.a.createElement("rect",{id:"Rectangle_202","data-name":"Rectangle 202",width:"20.67",height:"184.46",transform:"translate(72.14 363.99)",fill:"#283368"}),r.a.createElement("path",{id:"Path_308","data-name":"Path 308",d:"M72.14,548.45h36.65a2.63,2.63,0,0,1,2.63,2.63v5.26a2.63,2.63,0,0,1-2.63,2.63H72.14Z",fill:"#283368"}),r.a.createElement("rect",{id:"Rectangle_203","data-name":"Rectangle 203",width:"20.67",height:"16.34",transform:"translate(67.55 319.65) rotate(180)",fill:"#fab178"}),r.a.createElement("rect",{id:"Rectangle_204","data-name":"Rectangle 204",width:"20.67",height:"184.46",transform:"translate(67.55 548.45) rotate(180)",fill:"#283368"}),r.a.createElement("path",{id:"Path_309","data-name":"Path 309",d:"M244.16,650.36H280.8a2.63,2.63,0,0,1,2.63,2.63v5.26a2.63,2.63,0,0,1-2.63,2.63H244.16Z",transform:"translate(311.7 1209.32) rotate(180)",fill:"#283368"}),r.a.createElement("circle",{id:"Ellipse_48","data-name":"Ellipse 48",cx:"10.58",cy:"10.58",r:"10.58",transform:"translate(10.33 307.51)",fill:"#fac696"}),r.a.createElement("circle",{id:"Ellipse_49","data-name":"Ellipse 49",cx:"10.58",cy:"10.58",r:"10.58",transform:"translate(103.02 307.51)",fill:"#fac696"}),r.a.createElement("line",{id:"Line_1","data-name":"Line 1",y2:"86.77",transform:"translate(109.12 216.55)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_2","data-name":"Line 2",y2:"92.86",transform:"translate(96.38 210.51)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_3","data-name":"Line 3",y2:"92.86",transform:"translate(83.36 210.51)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_4","data-name":"Line 4",y2:"106.83",transform:"translate(68.91 209.77)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_5","data-name":"Line 5",y2:"92.81",transform:"translate(55.6 210.51)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_6","data-name":"Line 6",y2:"92.81",transform:"translate(42.43 210.51)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_7","data-name":"Line 7",y2:"91.27",transform:"translate(30.41 212.05)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_8","data-name":"Line 8",x1:"97.45",transform:"translate(18.93 300.83)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_9","data-name":"Line 9",x1:"97.19",transform:"translate(19.19 288.09)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_10","data-name":"Line 10",x1:"97.19",transform:"translate(19.19 275.07)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_11","data-name":"Line 11",x1:"98.18",transform:"translate(18.93 260.62)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_12","data-name":"Line 12",x1:"97.45",transform:"translate(18.93 247.31)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_13","data-name":"Line 13",x1:"97.19",transform:"translate(19.19 234.14)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_14","data-name":"Line 14",x1:"89.6",transform:"translate(23.57 222.12)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}))))}}]),a}(r.a.Component),H=(a(62),a(32)),V=a.n(H),I=a(33),D=a.n(I),z=a(34),B=a.n(z),F=a(35),X=a.n(F),U=a(36),W=a.n(U),Y=a(37),q=a.n(Y),K=a(38),G=a.n(K),J=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={projects:[{name:"Websites and mobile apps",downloadUrl:X.a,image:V.a},{name:"Visual communication",downloadUrl:W.a,image:D.a},{name:"Other",downloadUrl:q.a,image:B.a}]},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.projects.map((function(e,t){return r.a.createElement("div",{className:"project-card",key:t},r.a.createElement("img",{src:e.image,className:"project-image",alt:e.name}),r.a.createElement("div",{className:"details"},r.a.createElement("h2",{className:"project-name"},e.name)),r.a.createElement("div",{className:"project-card-overflow"},r.a.createElement("a",{href:e.downloadUrl,className:"button",download:!0},"Download")))}));return r.a.createElement("div",{className:"projects-page",name:"projects-section"},r.a.createElement("h1",{className:"title"},"Projects"),r.a.createElement("section",{className:"projects"},e),r.a.createElement("a",{href:G.a,download:!0},r.a.createElement("div",{className:"button"},"Download all")))}}]),a}(r.a.Component),$=a(39),Q=(a(63),a(40)),ee=a.n(Q),te=a(16),ae=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={from_name:"",reply_to:"",message_html:"",email_result:"",errors:{name:"",email:"",message:""},isLoading:!1},e.validateForm=function(t){var a=e.state,n=a.from_name,r=a.reply_to,l=a.message_html;if(""===n||""===r||""===l)return!1;var i=!0;return Object.values(t).forEach((function(e){return e.length>0&&(i=!1)})),i},e.handleInputChange=function(t){t.preventDefault();var a=t.target,n=a.name,r=a.value,l=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),i=e.state.errors;switch(n){case"from_name":i.name=0===r.length?"Name can't be empty":"";break;case"reply_to":i.email=l.test(r)?"":"Email address is invalid";break;case"message_html":i.message=0===r.length?"Message can't be empty":""}e.setState(Object($.a)({errors:i},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state;e.validateForm(e.state.errors)&&(e.setState({isLoading:!0}),ee.a.send("gmail","template_VpT67hCH",a,"user_5eqT4qFZxf6XOlOpNNXA3").then((function(t){e.setState({from_name:"",reply_to:"",message_html:"",email_result:"Message was sent successfully",isLoading:!1}),setTimeout((function(){e.setState({email_result:""})}),2e3)}),(function(e){alert("There was an error while sending email, please try again later")})))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.email_result.length>0?r.a.createElement("p",{className:"alert success"},this.state.email_result):r.a.createElement("div",null),t=this.state.isLoading?r.a.createElement(te.Preloader,{className:"preloader",use:te.TailSpin,size:20,strokeWidth:10,strokeColor:"#613dc1",duration:1e3}):"Send",a=this.state.errors;return r.a.createElement("div",{className:"contact-page",id:"contact-section"},r.a.createElement("section",{className:"contact-info"},r.a.createElement("h1",{className:"title"},"Contact me"),r.a.createElement("div",{className:"email"},r.a.createElement(h.c,{className:"icon"}),r.a.createElement("p",null,"sarabrzostek@wp.pl")),r.a.createElement("div",{className:"phone"},r.a.createElement(h.e,{className:"icon"}),r.a.createElement("p",null,"+48 796 434 087")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"from_name"},"Name"),r.a.createElement("input",{type:"text",name:"from_name",id:"name",onChange:this.handleInputChange,value:this.state.from_name}),a.name.length>0&&r.a.createElement("span",{className:"error-msg"},a.name),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"reply_to",id:"email",onChange:this.handleInputChange,value:this.state.reply_to}),a.email.length>0&&r.a.createElement("span",{className:"error-msg"},a.email),r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"message_html",id:"message",onChange:this.handleInputChange,value:this.state.message_html}),a.message.length>0&&r.a.createElement("span",{className:"error-msg"},a.message),e,r.a.createElement("button",{type:"submit",className:"sendButton button"},t))),r.a.createElement("svg",{id:"contact-illustration",xmlns:"http://www.w3.org/2000/svg",width:"179.3",height:"558.975",viewBox:"0 0 179.3 558.975"},r.a.createElement("g",{id:"contact-illustration",transform:"translate(0.02 0.005)"},r.a.createElement("rect",{id:"Rectangle_192","data-name":"Rectangle 192",width:"20.67",height:"258.46",transform:"translate(88.66 289.99)",fill:"#fac696"}),r.a.createElement("path",{id:"Path_295","data-name":"Path 295",d:"M273.1,391.91h0a10.33,10.33,0,0,1,10.33,10.33V543.72H262.76V402.24a10.33,10.33,0,0,1,10.34-10.33Z",transform:"translate(346.83 833.71) rotate(180)",fill:"#fac696"}),r.a.createElement("rect",{id:"Rectangle_193","data-name":"Rectangle 193",width:"11.35",height:"120.55",transform:"translate(31.75 196.13)",fill:"#fac696"}),r.a.createElement("g",{id:"Me"},r.a.createElement("path",{id:"Path_296","data-name":"Path 296",d:"M353.11,185.05v53.54c0,24.6-16.64,44.72-37,44.72H253.38c-20.35,0-37-20.12-37-44.72V185.05c0-33.06,16.28-61.74,39.63-74.93a59.531,59.531,0,0,1,17.77-6.63,56.191,56.191,0,0,1,18.59-.56h0a57.789,57.789,0,0,1,12.69,3.23,60.621,60.621,0,0,1,8.63,4.08h0A70.47,70.47,0,0,1,333,126.69q2.09,2.51,4,5.21C347,146.3,353.11,164.86,353.11,185.05Z",transform:"translate(-199.36 -101.91)",fill:"#3a2719",stroke:"#a57e6e","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("rect",{id:"Rectangle_194","data-name":"Rectangle 194",width:"15.27",height:"31.26",rx:"7.63",transform:"translate(78.5 129.3)",fill:"#f4b486",stroke:"#f4b486","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_297","data-name":"Path 297",d:"M72.28,27.35h27.94A35.76,35.76,0,0,1,136,63.11V86.7a49.73,49.73,0,0,1-49.73,49.73h0A49.73,49.73,0,0,1,36.52,86.7V63.11A35.76,35.76,0,0,1,72.28,27.35Z",fill:"#fac696"}),r.a.createElement("path",{id:"Path_298","data-name":"Path 298",d:"M254,174.39a9,9,0,0,1,18,0",transform:"translate(-199.36 -101.91)",fill:"#fac696",stroke:"#885543","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_299","data-name":"Path 299",d:"M299,174.11a9,9,0,1,1,18,0",transform:"translate(-199.36 -101.91)",fill:"#fac696",stroke:"#885543","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("circle",{id:"Ellipse_46","data-name":"Ellipse 46",cx:"4.66",cy:"4.66",r:"4.66",transform:"translate(44.08 81.89)",fill:"#e8a17b",stroke:"#e8a17b","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("circle",{id:"Ellipse_47","data-name":"Ellipse 47",cx:"4.66",cy:"4.66",r:"4.66",transform:"translate(119 81.89)",fill:"#e8a17b",stroke:"#e8a17b","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_300","data-name":"Path 300",d:"M305.06,105.51a68.26,68.26,0,0,0-12.69-2.67h0a5.48,5.48,0,0,0-1.56,1.07c-3.89,3.89-1,13.72,6.7,25.65A157.828,157.828,0,0,0,318.4,155c12.26,12.26,24.88,21.53,34.71,26.12v-10.3a68,68,0,0,0-16.11-44,142.711,142.711,0,0,0-23.28-17.91h0Z",transform:"translate(-199.36 -101.91)",fill:"#3a2718"}),r.a.createElement("path",{id:"Path_301","data-name":"Path 301",d:"M311,115.55c0,5.9-5.37,11.08-13.44,14a47.15,47.15,0,0,1-31.19-.23c-7.73-3-12.82-8-12.82-13.78a10.89,10.89,0,0,1,2.51-6.76,67.863,67.863,0,0,1,36.36-5.95h0a68.261,68.261,0,0,1,12.69,2.67C308.75,108.3,311,111.78,311,115.55Z",transform:"translate(-199.36 -101.91)",fill:"#3a2718"}),r.a.createElement("path",{id:"Path_302","data-name":"Path 302",d:"M266.32,129.33a161.281,161.281,0,0,1-17.91,24.77c-11.06,12.75-22.67,22.7-32,28.08v-11.4a68.59,68.59,0,0,1,39.63-62,67.729,67.729,0,0,1,17.77-5.49C275.83,108.23,272.9,117.87,266.32,129.33Z",transform:"translate(-199.36 -101.91)",fill:"#3a2718"}),r.a.createElement("rect",{id:"Rectangle_195","data-name":"Rectangle 195",width:"2.21",height:"9.33",rx:"1.105",transform:"translate(86.15 88.41)",fill:"#f4b486",stroke:"#f4b486","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_303","data-name":"Path 303",d:"M275.19,244.16l20.45,4.94V237.32s-11,2.28-20.45.17",transform:"translate(-199.36 -101.91)",fill:"#d69b73"})),r.a.createElement("path",{id:"Path_304","data-name":"Path 304",d:"M226.95,268.13h3.28a26.36,26.36,0,0,1,26.36,26.36v3.28H226.95Z",transform:"translate(-240.54 422.8) rotate(-90)",fill:"#fff"}),r.a.createElement("rect",{id:"Rectangle_196","data-name":"Rectangle 196",width:"29.78",height:"3.25",transform:"translate(25.45 193.07)",fill:"#283368"}),r.a.createElement("path",{id:"Path_305","data-name":"Path 305",d:"M113.08,165.6h3.28A26.36,26.36,0,0,1,142.72,192v6.53H113.08Z",fill:"#fff"}),r.a.createElement("path",{id:"Smile",d:"M297.93,209.49c0,7.69-5.6,13.92-12.51,13.92s-12.51-6.23-12.51-13.92",transform:"translate(-199.36 -101.91)",fill:"#fff",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"10"}),r.a.createElement("path",{id:"Path_306","data-name":"Path 306",d:"M68.83,157.88h31.94a19.58,19.58,0,0,1,19.58,19.58V214H49.26V177.45A19.58,19.58,0,0,1,68.83,157.88Z",fill:"#283368"}),r.a.createElement("rect",{id:"Rectangle_197","data-name":"Rectangle 197",width:"46.38",height:"10.64",transform:"translate(61.34 149.02)",fill:"#fff"}),r.a.createElement("path",{id:"Path_307","data-name":"Path 307",d:"M71.53,202.36h26a36.07,36.07,0,0,1,36.07,36.07v64.89H35.46V238.43a36.07,36.07,0,0,1,36.07-36.07Z",fill:"#283368"}),r.a.createElement("path",{id:"Path_308","data-name":"Path 308",d:"M52.79,202.36h64a3.53,3.53,0,0,1,3.53,3.53v4.62H49.26v-4.62A3.53,3.53,0,0,1,52.79,202.36Z",fill:"#fff"}),r.a.createElement("rect",{id:"Rectangle_198","data-name":"Rectangle 198",width:"29.78",height:"3.25",transform:"translate(109.74 195.24)",fill:"#283368"}),r.a.createElement("rect",{id:"Rectangle_199","data-name":"Rectangle 199",width:"20.67",height:"16.34",transform:"translate(88.66 303.32)",fill:"#fab178"}),r.a.createElement("rect",{id:"Rectangle_200","data-name":"Rectangle 200",width:"20.67",height:"184.46",transform:"translate(88.66 363.99)",fill:"#283368"}),r.a.createElement("path",{id:"Path_309","data-name":"Path 309",d:"M88.66,548.45h36.65a2.63,2.63,0,0,1,2.63,2.63v5.26a2.63,2.63,0,0,1-2.63,2.63H88.66Z",fill:"#283368"}),r.a.createElement("rect",{id:"Rectangle_201","data-name":"Rectangle 201",width:"20.67",height:"16.34",transform:"translate(84.07 319.65) rotate(180)",fill:"#fab178"}),r.a.createElement("path",{id:"Path_310","data-name":"Path 310",d:"M273.1,465.9h0a10.33,10.33,0,0,1,10.33,10.33v67.48H262.76V476.23A10.33,10.33,0,0,1,273.1,465.9Z",transform:"translate(346.83 907.7) rotate(180)",fill:"#283368"}),r.a.createElement("path",{id:"Path_311","data-name":"Path 311",d:"M202,456.12h31.39a5.26,5.26,0,0,1,5.26,5.26h0a5.26,5.26,0,0,1-5.26,5.26H202a2.63,2.63,0,0,1-2.63-2.63v-5.26a2.63,2.63,0,0,1,2.63-2.63Z",transform:"translate(238.63 820.83) rotate(180)",fill:"#283368"}),r.a.createElement("circle",{id:"Ellipse_48","data-name":"Ellipse 48",cx:"10.58",cy:"10.58",r:"10.58",transform:"translate(26.85 307.51)",fill:"#fac696"}),r.a.createElement("circle",{id:"Ellipse_49","data-name":"Ellipse 49",cx:"10.58",cy:"10.58",r:"10.58",transform:"translate(158.12 143.76)",fill:"#fac696"}),r.a.createElement("line",{id:"Line_1","data-name":"Line 1",y2:"86.77",transform:"translate(125.64 216.55)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_2","data-name":"Line 2",y2:"92.86",transform:"translate(112.9 210.51)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_3","data-name":"Line 3",y2:"92.86",transform:"translate(99.88 210.51)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_4","data-name":"Line 4",y2:"106.83",transform:"translate(85.43 209.77)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_5","data-name":"Line 5",y2:"92.81",transform:"translate(72.12 210.51)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_6","data-name":"Line 6",y2:"92.81",transform:"translate(58.96 210.51)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_7","data-name":"Line 7",y2:"91.27",transform:"translate(46.93 212.05)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_8","data-name":"Line 8",x1:"97.44",transform:"translate(35.46 300.83)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_9","data-name":"Line 9",x1:"97.19",transform:"translate(35.71 288.09)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_10","data-name":"Line 10",x1:"97.19",transform:"translate(35.71 275.07)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_11","data-name":"Line 11",x1:"98.18",transform:"translate(35.46 260.62)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_12","data-name":"Line 12",x1:"97.44",transform:"translate(35.46 247.31)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_13","data-name":"Line 13",x1:"97.19",transform:"translate(35.71 234.14)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("line",{id:"Line_14","data-name":"Line 14",x1:"89.61",transform:"translate(40.09 222.12)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"1"}),r.a.createElement("path",{id:"Path_312","data-name":"Path 312",d:"M341.79,249.5h12.47v87.28a5.8,5.8,0,0,1-5.8,5.8h-.87a5.8,5.8,0,0,1-5.8-5.8V249.5Z",transform:"matrix(0.893, 0.45, -0.45, 0.893, -28.99, -226.82)",fill:"#fac696"}),r.a.createElement("rect",{id:"Rectangle_202","data-name":"Rectangle 202",width:"11.53",height:"37.78",transform:"translate(124.45 194.22)",fill:"#fac696"}),r.a.createElement("path",{id:"Path_313","data-name":"Path 313",d:"M249.19,452.42h7.51a5.81,5.81,0,0,1,5.81,5.81v84.24a7,7,0,0,1-7,7h-5.1a7,7,0,0,1-7-7V458.23a5.81,5.81,0,0,1,5.78-5.81Z",transform:"translate(-415.95 91.67) rotate(-30)",fill:"#283368"}))))}}]),a}(r.a.Component);a(66);var ne=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Sara Brzostek 2020"))},re=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={darkTheme:"true"===localStorage.getItem("darkTheme")},e.handleThemeChange=function(){e.setState({darkTheme:!e.state.darkTheme}),localStorage.setItem("darkTheme",!e.state.darkTheme)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!this.state.darkTheme?(console.log("dark"),this.setState({darkTheme:!0})):window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&this.state.darkTheme&&this.setState({darkTheme:!1})}},{key:"render",value:function(){var e=this.state.darkTheme?"theme-dark":"theme-light";return r.a.createElement("div",{className:e},r.a.createElement("div",{className:"App"},r.a.createElement(k,{handleThemeChange:this.handleThemeChange,darkTheme:this.state.darkTheme}),r.a.createElement(O,null),r.a.createElement(J,null),r.a.createElement(ae,null),r.a.createElement(ne,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.aa93a86c.chunk.js.map