(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),l=(a(37),a(38),a(7)),i=a(6);a(39);var s=function(e){return o.a.createElement("div",{className:"image-bg bg-dark"},o.a.createElement("div",{className:"heads-bg d-flex align-items-center"},o.a.createElement("div",{className:"mx-auto stickyDiv"},o.a.createElement("h1",{className:"text-center"},"Search..."))))};a(40);var m=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Google Book Search Engine"),o.a.createElement("div",null,o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{to:"/",className:"/"===window.location.pathname||"/"===window.location.pathname?"nav-link active":"nav-link"},"Search ...")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{to:"/checksaved",className:"/checksaved"===window.location.pathname?"nav-link active":"nav-link"},"Saved Book")))))};a(46);var u=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))};a(47);var d=function(){return o.a.createElement("footer",{className:"mt-5 text-center footer "},o.a.createElement("span",null,"Google Book Search Engine @2019 by Esther Yating Su"))},h=a(10),v=a(11),p=a(13),b=a(12),f=a(14),g=a(15),E=a.n(g),k={getBook:function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&key=AIzaSyD704Ec8vHv-OJJHKhaHFj8Pfe_fin7orw")},saveBook:function(e){return E.a.post("/api/books",e)},checkSaved:function(){return E.a.get("/api/books")}};var N=function(e){return o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{type:"text",onChange:e.handleInputChange,className:"form-control",placeholder:"Book Name or Author Name ","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",onClick:e.handleFormSubmit,type:"button",id:"button-addon2"},"Search"),o.a.createElement("button",{className:"btn btn-outline-secondary",onClick:e.handleFormSave,type:"button",id:"button-addon2"},"Save")))};var w=function(e){return o.a.createElement("div",{className:"col12 card mb-3"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-4"},o.a.createElement("img",{src:e.image,className:"card-img",alt:e.title})),o.a.createElement("div",{className:"col-8"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},e.authors),o.a.createElement("p",{className:"card-text"},e.description),o.a.createElement("a",{href:e.link,className:"btn btn-primary"},"Check The Book"),o.a.createElement("botton",{href:e.link,className:"btn btn-primary",onClick:function(){e.value(e.index)}},"Save This Book")))))},y=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",books:"",results:[],error:""},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),k.getBook(a.state.search.trim()).then((function(e){if("error"===e.data.status)throw new Error(e.data.message);console.log(e.data.items[1].volumeInfo);for(var t=[],n=0;n<e.data.items.length;n++)t.push({title:e.data.items[n].volumeInfo.title,authors:e.data.items[n].volumeInfo.authors.toString(),description:e.data.items[n].volumeInfo.description,image:e.data.items[n].volumeInfo.imageLinks.smallThumbnail,link:e.data.items[n].volumeInfo.infoLink});console.log(t),a.setState({results:t})})).catch((function(e){return a.setState({error:e.message})}))},a.handleFormSave=function(e){console.log(e,a.state.results[e]),k.saveBook(a.state.results[e]).then((function(e){if("error"===e.data.status)throw new Error(e.data.message)}))},a.displayCards=function(){return a.state.results.map((function(e,t){return o.a.createElement(w,{title:e.title,link:e.link,description:e.description,image:e.image,authors:e.authors,value:a.handleFormSave,index:t})}))},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u,{style:{minHeight:"80%"}},o.a.createElement("h1",{className:"text-center"},"Search By Book!"),o.a.createElement(N,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,handleFormSave:this.handleFormSave}),this.displayCards()))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a.getBook=function(){console.log("geting the book"),k.checkSaved().then((function(e){a.setState({books:e.data})}))},a.displayCards=function(){return a.state.books.map((function(e){return o.a.createElement(w,{title:e.title,link:e.link,description:e.description,image:e.image,authors:e.authors})}))},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getBook()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u,{style:{minHeight:"80%"}},o.a.createElement("h1",{className:"text-center"},"Saved Book!"),this.displayCards()))}}]),t}(n.Component);var B=function(){return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(m,null),o.a.createElement(u,null,o.a.createElement(i.a,{exact:!0,path:"/",component:y}),o.a.createElement(i.a,{exact:!0,path:"/checksaved",component:S})),o.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.4f962d62.chunk.js.map