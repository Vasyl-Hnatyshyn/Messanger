(this.webpackJsonpmessanger=this.webpackJsonpmessanger||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),o=(a(24),a(25),a(5)),i=a(6),l=a(9),A=a(8);a(26);var g=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20px",viewBox:"0 0 512 512",width:"20px"},c.a.createElement("g",null,c.a.createElement("path",{d:"m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:"#17A30C"}),c.a.createElement("path",{d:"m232 341.332031c-4.097656 0-8.191406-1.554687-11.308594-4.691406l-69.332031-69.332031c-6.25-6.253906-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l58.023437 58.027344 127.363281-127.359375c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.632812l-138.667969 138.667969c-3.15625 3.136719-7.25 4.691406-11.347656 4.691406zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:"#17A30C"})))},m=a(7);var d=function(e){var t=e.MessageFolder,a=e.changeActiveContact,n=e.searchText,r=n?t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):t;return c.a.createElement(m.Scrollbars,{style:{width:"100%",height:"75vh"}},r.map((function(e){var t=+e.message.length-1,n=e.message[t].date;return c.a.createElement("div",{className:"contact-profile",key:e.id,onClick:function(){a(e.name)}},c.a.createElement("div",{className:"logo"},c.a.createElement("div",{className:"logo-img"},c.a.createElement("img",{src:e.img,alt:e.name})),c.a.createElement("div",{className:"checked-icon"},c.a.createElement(g,null))),c.a.createElement("div",{className:"profile-text-block"},c.a.createElement("p",{className:"contact-name"},e.name," "),c.a.createElement("p",{className:"last-message"},e.message[t].text)),c.a.createElement("div",{className:"last-message-date"},"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.slice(3,4)-1],"  ").concat(n.slice(0,2),",  ").concat("20"+n.slice(5,7))))})))},u=a(2),h=a(3),E=function(e){return{type:"ACTION_CHANGE_ACTIVE_CONTACT",payload:e}},N=function(e){return{type:"ACTION_CHANGE_NEW_MESSAGE",payload:e}},p=function(e){return{type:"ACTION_CHANGE_TEXT_NEW_MESSAGE",payload:e}},w=function(e,t){return{type:"ADD_NEW_MESSAGE",payload:{folderName:e,message:t}}},b=function(e){Object(l.a)(a,e);var t=Object(A.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).searchFieldText=function(t){e.setState({searchText:t.target.value})},e.state={searchText:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.MessageFolder,a=e.changeActiveContact;return c.a.createElement("div",{className:"contact-block"},c.a.createElement("div",{className:"search-block"},c.a.createElement("div",{className:"logo"},c.a.createElement("div",{className:"logo-img"},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSin-Oq8qcKN7sGLnEkgUpWQWUgCyQmK1Y7HHY5R6Lt-N-PQ-ZO&usqp=CAU",alt:"default-user-logo"})),c.a.createElement("div",{className:"checked-icon"},c.a.createElement(g,null))),c.a.createElement("div",{className:"search-wrapper"},c.a.createElement("i",{className:"material-icons",id:"search-icon"},"search"),c.a.createElement("input",{type:"text",id:"contact-search",placeholder:"Search or start new chart",onChange:this.searchFieldText}))),c.a.createElement("div",{className:"contact-list"},c.a.createElement("p",{id:"chats"},"Chats"),c.a.createElement(d,{MessageFolder:t,changeActiveContact:a,searchText:this.state.searchText})))}}]),a}(c.a.Component),y=Object(h.b)((function(e){return{MessageFolder:e.MessageFolder}}),(function(e){return{changeActiveContact:Object(u.a)(E,e)}}))(b);a(47);var x=function(e){var t=e.NewMessageText,a=e.sendNewMessage,n=e.newMessageToState;return c.a.createElement("div",{className:"new-message-block"},c.a.createElement("form",{id:"new-message-wrapper",onSubmit:function(e){a(e)}},c.a.createElement("input",{type:"text",id:"new-message",value:t,onChange:function(e){n(e)},placeholder:"Type your message"}),c.a.createElement("button",{id:"send-message",type:"submit"},c.a.createElement("i",{className:"material-icons",id:"send-button"},"send"))))};var D=function(e){var t=e.ActiveContact;return c.a.createElement(m.Scrollbars,{style:{width:"100%",height:"76vh"}},c.a.createElement("div",{className:"chat"},t.message.map((function(e){return c.a.createElement("div",null,"you"===e.author?c.a.createElement("div",{className:"my-message-wrapper"},c.a.createElement("p",{className:"my-message"},e.text),c.a.createElement("span",{className:"date-my"},e.date)):c.a.createElement("div",{className:"contact-message-wrapper"},c.a.createElement("div",{className:"logo"},c.a.createElement("div",{className:"logo-img"},c.a.createElement("img",{src:t.img,alt:t.name}))),c.a.createElement("p",{className:"contact-message"}," ",e.text," "),c.a.createElement("span",{className:"date-contact"},e.date)))}))," "))},O=function(e){Object(l.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).newMessageToState=function(t){var a=t.target.value;e.props.changeNewMessageText(a)},e.getDate=function(){var e=new Date;return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear(),",   ").concat(e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())},e.getAnswerFromChak=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){var a=+"".concat(Math.floor(1e3*Math.random())),n=e.props.ActiveContact.name,c=t.value,r={date:e.getDate(),text:c,id:a,author:n};e.props.addNewMessage(e.props.ActiveContact.name,r)}))},e.sendNewMessage=function(t){if(t.preventDefault(),""===e.props.NewMessageText)return null;var a=+"".concat(Math.floor(1e3*Math.random())),n={date:e.getDate(),text:e.props.NewMessageText,id:a,author:"you"};e.props.addNewMessage(e.props.ActiveContact.name,n),e.getAnswerFromChak(),e.props.changeNewMessageText("")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.ActiveContact,a=e.NewMessageText,n=e.addNewMessage;return c.a.createElement("div",{className:"chat-block"},t?c.a.createElement("div",null,c.a.createElement("div",{className:"current-contact"},c.a.createElement("div",{className:"logo"},c.a.createElement("div",{className:"logo-img"},c.a.createElement("img",{src:t.img,alt:t.name})),c.a.createElement("div",{className:"checked-icon"},c.a.createElement(g,null))),c.a.createElement("div",{className:"name"}," ",t.name," ")),c.a.createElement(D,{ActiveContact:t}),c.a.createElement(x,{NewMessageText:a,sendNewMessage:this.sendNewMessage,newMessageToState:this.newMessageToState,addNewMessage:n})):c.a.createElement("div",{className:"select-message"}," ",c.a.createElement("p",null,"Please select a chat to start messaging... ")," "))}}]),a}(c.a.Component),M=Object(h.b)((function(e){return{ActiveContact:e.MessageFolder.find((function(t){return t.name===e.ActiveContact})),newMessage:e.newMessage,NewMessageText:e.NewMessageText}}),(function(e){return{changeNewMessage:Object(u.a)(N,e),changeNewMessageText:Object(u.a)(p,e),addNewMessage:Object(u.a)(w,e)}}))(O);var C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,null),c.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(18),H=a(1),v={MessageFolder:[{name:"Richard ",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITiVjtIXfOYwCNvyhWj9d1LtbJbdu9eSg8O_gk1fKpVQTbkx-&usqp=CAU",message:[{date:"11/6/20, 4:30",text:"hi there ",id:1231,author:"Richard "},{date:"12/6/20, 4:40",text:"hi there ",id:121,author:"you"},{date:"12/6/20, 4:55",text:"hello ",id:1123,author:"Richard"}]},{name:"Jet  Lee",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIbG63feLqNXCa4QHl_TcqjGRv4nfXrPqY-pj_40ve3NZf7P4I&usqp=CAU",message:[{date:"11/5/20, 7:40",text:"hi",id:120,author:"Jackie Chan "},{date:"11/5/20, 7:40",text:"hello what did you want ",id:1e21,author:"you"},{date:"11/5/20, 7:40",text:"what time will you be at work ",id:11233,author:"Jackie Chan"}]},{name:"Mary",img:"https://s2.funon.cc/img/orig/201711/02/59fb2e5070eff.jpg",message:[{date:"13/4/2020, 7:40",text:"how are you",id:120,author:"Mary "},{date:"13/4/2020, 7:40",text:"im fine ",id:1e21,author:"you"},{date:"13/4/2020, 7:40",text:"you look great",id:11233,author:"mary"}]},{name:"Bob Robinson",img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",message:[{date:"13/4/2020, 7:40",text:"see you soon ",id:120,author:"Mary "},{date:"13/4/2020, 7:40",text:"ok, i will call you ",id:1e21,author:"you"},{date:"13/4/2020, 7:40",text:"its looks  greate ... ",id:11233,author:"mary"}]},{name:"Anna Grant",img:"data:image/jpeg;base64,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",message:[{date:"13/4/2020, 7:40",text:"hello!",id:120,author:"Mary "},{date:"13/4/2020, 7:40",text:"hi, what are you doing ",id:1e21,author:"you"},{date:"13/4/2020, 7:40",text:"When Chuck Norris breathes there are hurricane warnings ",id:11233,author:"mary"}]},{name:"Fredy",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQh4nxO6j2i3Cn6pFLb8Ohx67_wUL4IndFjL2jHcG0cEFCcAYh&usqp=CAU",message:[{date:"13/4/2020, 7:40",text:"Good day. I have  a deal for you ",id:12881,author:"Mary "},{date:"13/4/2020, 7:40",text:"can we meet someware ",id:1e21,author:"you"},{date:"13/4/2020, 7:40",text:"Chuck Norris did not call the wrong number.You answered the wrong phone ",id:11233,author:"mary"}]},{name:"Lukas",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPFE9F1TDsusyk1jxCZSnTpxaMKp0QRSGetwTWgOciWqiJPn_0&usqp=CAU",message:[{date:"13/4/2020, 7:40",text:"Chuck Norris isn't gay, he's just run out of women ",id:12211,author:"Mary "},{date:"13/4/2020, 7:40",text:"it that true ",id:8823,author:"you"},{date:"13/4/2020, 7:40",text:"Chuck Norris does not hang ductwork. Ductwork hang itself when it encounters Chuck Norris.",id:11233,author:"mary"}]}],ActiveContact:[],newMessage:null,NewMessageText:""},f=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_CHANGE_MESSAGEFOLDER":return Object(H.a)(Object(H.a)({},e),{},{MessageFolder:t.payload});case"ACTION_CHANGE_ACTIVE_CONTACT":return Object(H.a)(Object(H.a)({},e),{},{ActiveContact:t.payload});case"ACTION_CHANGE_NEW_MESSAGE":return Object(H.a)(Object(H.a)({},e),{},{newMessage:t.payload});case"ACTION_CHANGE_TEXT_NEW_MESSAGE":return Object(H.a)(Object(H.a)({},e),{},{NewMessageText:t.payload});case"ADD_NEW_MESSAGE":return Object(H.a)(Object(H.a)({},e),{},{MessageFolder:e.MessageFolder.map((function(e){return e.name===t.payload.folderName?Object(H.a)(Object(H.a)({},e),{},{message:[].concat(Object(B.a)(e.message),[t.payload.message])}):e}))})}return e}));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h.a,{store:f},c.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.161e90eb.chunk.js.map