(this.webpackJsonpcovidinindia=this.webpackJsonpcovidinindia||[]).push([[0],{28:function(e,t,a){e.exports=a(61)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),o=(a(33),a(11)),s=(a(34),a(35),a(5)),i=a(26),u=(a(36),a(9)),m=a.n(u),d=(a(54),a(27)),E=a(10);function h(e){return new Date(e).toLocaleDateString([],{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}var p=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),u=Object(o.a)(c,2),p=u[0],g=u[1],f=Object(n.useState)(""),x=Object(o.a)(f,2),y=x[0],v=x[1];Object(n.useEffect)((function(){m.a.all([m.a.get("https://corona.lmao.ninja/v2/countries/India"),m.a.get("https://api.rootnet.in/covid19-in/stats/latest")]).then((function(e){r(e[0].data),g(e[1].data.data.regional)})).catch((function(e){console.log(e)}))}),[]);var T=p.filter((function(e){return""!==y?e.loc.toLowerCase().includes(y.toLowerCase()):e})).map((function(e,t){return l.a.createElement(s.a,{key:t,bg:"light",text:"dark",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Img,{variant:"top",src:a.countryInfo.flag}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,e.loc.toUpperCase()),l.a.createElement(s.a.Text,null,"Total Cases: ",e.totalConfirmed),l.a.createElement(s.a.Text,null,"Confirmed Cases: ",e.confirmedCasesIndian),l.a.createElement(s.a.Text,null,"Recovered cases: ",e.discharged),l.a.createElement(s.a.Text,null,"Total Deaths: ",e.deaths),l.a.createElement(s.a.Text,null,"Confirmed Cases with foreign nationals: ",e.confirmedCasesForeign)))}));return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h2",{style:{textAlign:"center"}},"Covid-19 Live report for India"),l.a.createElement(i.a,null,l.a.createElement(s.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"India Cases"),l.a.createElement(s.a.Text,null,"Total: ",a.cases),l.a.createElement(s.a.Text,null,"Today's Cases Resported: ",a.todayCases)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated: ",h(a.updated),"."))),l.a.createElement(s.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"India Deaths"),l.a.createElement(s.a.Text,null,"Total Deaths: ",a.deaths),l.a.createElement(s.a.Text,null,"Today's Deaths Resported: ",a.todayDeaths)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated: ",h(a.updated),"."))),l.a.createElement(s.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Recovered cases in India"),l.a.createElement(s.a.Text,null,"Total Recovered cases: ",a.recovered)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",h(a.updated),".")))),l.a.createElement("br",null),l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"formGroupSearch"},l.a.createElement(E.a.Control,{type:"text",placeholder:"Filter by State's name",onChange:function(e){return v(e.target.value.toLowerCase())},style:{width:"230px"}}))),l.a.createElement("br",null),l.a.createElement(d.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},T))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.038904d1.chunk.js.map