(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),c=a.n(i),o=(a(14),a(1)),s=a.n(o),l=a(4),h=a(5),m=a(6),u=a(8),p=a(7);a(16);var d=function(e){return r.a.createElement("div",{style:{textAlign:"center",color:"black"},className:"container"},r.a.createElement("div",{className:"place"},r.a.createElement("h1",{style:{fontSize:"50px"}},e.city),r.a.createElement("h5",null,r.a.createElement("i",{style:{fontSize:"70px"},className:"wi ".concat(e.weathericon)})),e.celsius?r.a.createElement("h1",{style:{fontSize:"50px"}},e.celsius,"\xb0"):null,function(e,t){if(t)return r.a.createElement("h3",null,r.a.createElement("span",{style:{fontSize:"40px",margin:"20px"}},"MIN- ",e,"\xb0"),r.a.createElement("span",{style:{fontSize:"40px",margin:"20px"}},"MAX- ",t,"\xb0"))}(e.temp_min,e.temp_max),r.a.createElement("h4",{style:{fontSize:"40px"}},e.description)))};a(17);var w=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,e.error?r.a.createElement("div",{style:{color:"white",textAlign:"center"},role:"alert"},"Please Enter City And Country Both"):null),r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("input",{type:"text",name:"city",placeholder:"city",autoComplete:"off"}),r.a.createElement("input",{type:"text",name:"country",placeholder:"country",autoComplete:"off"}),r.a.createElement("button",null,"Get Weather")))},f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).getWeather=function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r,i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements.city.value,r=a.target.elements.country.value,!n||!r){t.next=15;break}return t.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat("d60365d22a1b13f1ff3799c5341c4a68"));case 6:return i=t.sent,t.next=9,i.json();case 9:c=t.sent,console.log(c),e.setState({city:"".concat(c.name,",").concat(c.sys.country),celsius:e.calcelsius(c.main.temp),temp_max:e.calcelsius(c.main.temp_max),temp_min:e.calcelsius(c.main.temp_min),description:c.weather[0].description,error:!1}),e.get_weathericon(e.weathericon,c.weather[0].id),t.next=16;break;case 15:e.setState({error:!0});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1},e.weathericon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(m.a)(a,[{key:"calcelsius",value:function(e){return Math.floor(e-273.15)}},{key:"get_weathericon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:this.weathericon.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:this.weathericon.Drizzle});break;case t>=500&&t<=531:this.setState({icon:this.weathericon.Rain});break;case t>=600&&t<=622:this.setState({icon:this.weathericon.Snow});break;case t>=701&&t<=781:this.setState({icon:this.weathericon.Atmosphere});break;case 800===t:this.setState({icon:this.weathericon.Clear});break;case t>=801&&t<=804:this.setState({icon:this.weathericon.Clouds});break;default:this.setState({icon:this.weathericon.Clouds})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,{loadweather:this.getWeather,error:this.state.error}),r.a.createElement(d,{city:this.state.city,country:this.state.country,celsius:this.state.celsius,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weathericon:this.state.icon}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.fac77451.chunk.js.map