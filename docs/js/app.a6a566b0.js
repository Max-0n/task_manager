(function(t){function e(e){for(var a,n,i=e[0],o=e[1],d=e[2],l=0,f=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&f.push(c[n][0]),c[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var o=s[i];0!==c[o]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},c={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"181b":function(t,e,s){},"210c":function(t,e,s){"use strict";s("8cb3")},2546:function(t,e,s){},"2fc4":function(t,e,s){},"3b90":function(t,e,s){"use strict";s("181b")},"3d8f":function(t,e,s){"use strict";s("d2b7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),c=Object(a["r"])("data-v-29aff392");Object(a["j"])("data-v-29aff392");var r={key:0,class:"banner"},n=Object(a["e"])("↑"),i=Object(a["f"])("br",null,null,-1),o=Object(a["e"])("Add first card.");Object(a["i"])();var d=c((function(t,e,s,c,d,u){var l=Object(a["m"])("TheHeader"),f=Object(a["m"])("Card");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["f"])(l),Object(a["f"])("section",null,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(u.cards,(function(t){return Object(a["h"])(),Object(a["c"])("div",{class:"wrapper",key:t.id},[Object(a["f"])(f,{card:t},null,8,["card"])])})),128)),0==u.cards.length?(Object(a["h"])(),Object(a["c"])("div",r,[n,i,o])):Object(a["d"])("",!0)])],64)})),u=(s("c1f9"),s("07ac"),s("2909")),l=Object(a["r"])("data-v-45898cdf"),f=l((function(t,e,s,c,r,n){return Object(a["h"])(),Object(a["c"])("nav",null,[Object(a["f"])("button",{onClick:e[1]||(e[1]=function(){return n.addCard.apply(n,arguments)})},"Add card")])})),h={name:"TheHeader",methods:{addCard:function(){this.$store.dispatch("setCard",{})}}};s("210c");h.render=f,h.__scopeId="data-v-45898cdf";var b=h,p=Object(a["r"])("data-v-4ff28de5");Object(a["j"])("data-v-4ff28de5");var O={key:0,class:"card__menu"},j={key:2,class:"card__editor"},v={class:"card__tasks"};Object(a["i"])();var k=p((function(t,e,s,c,r,n){var i=Object(a["m"])("Task");return Object(a["h"])(),Object(a["c"])("div",{class:["card",{card_inprogress:"0%"!=n.inProgress&&"0%"==n.todo,card_review:"0%"!=n.review&&"0%"==n.todo&&"0%"==n.inProgress,card_done:"0%"!=n.done&&"0%"==n.review&&"0%"==n.todo&&"0%"==n.inProgress}]},[r.showEditor?Object(a["d"])("",!0):(Object(a["h"])(),Object(a["c"])("div",O,[Object(a["f"])("button",{class:"sm",onClick:e[1]||(e[1]=function(t){return r.showEditor=!0})},"Edit"),Object(a["f"])("button",{class:"sm cancel",onClick:e[2]||(e[2]=function(){return n.delete.apply(n,arguments)})},"Delete")])),r.showEditor?(Object(a["h"])(),Object(a["c"])("div",j,[Object(a["q"])(Object(a["f"])("input",{ref:"title",type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.title=t}),placeholder:"Title of card"},null,512),[[a["o"],r.title]]),Object(a["f"])("button",{class:"save",onClick:e[5]||(e[5]=function(){return n.save.apply(n,arguments)})},"Save"),Object(a["f"])("button",{class:"cancel",onClick:e[6]||(e[6]=function(){return n.close.apply(n,arguments)})},"Cancel")])):(Object(a["h"])(),Object(a["c"])("div",{key:1,class:"card__title",onClick:e[3]||(e[3]=function(t){return r.showEditor=!0})},Object(a["n"])(s.card.title),1)),Object(a["f"])("div",{class:"card__progress",onClick:e[7]||(e[7]=function(t){return r.showEditor=!0})},[Object(a["f"])("div",{class:"card__progress__done",style:{width:n.done}},null,4),Object(a["f"])("div",{class:"card__progress__review",style:{width:n.review}},null,4),Object(a["f"])("div",{class:"card__progress__inprogress",style:{width:n.inProgress}},null,4),Object(a["f"])("div",{class:"card__progress__todo",style:{width:n.todo}},null,4)]),Object(a["f"])("div",v,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(s.card.taskList,(function(t,e){return Object(a["h"])(),Object(a["c"])(i,{key:t,taskId:t,card:s.card},null,8,["taskId","card"])})),128)),r.newTask?(Object(a["h"])(),Object(a["c"])(i,{key:0,card:s.card,onSave:e[8]||(e[8]=function(t){return r.newTask=!1})},null,8,["card"])):(Object(a["h"])(),Object(a["c"])("button",{key:1,onClick:e[9]||(e[9]=function(t){return r.newTask=!0})},"Add subtask"))])],2)})),g=(s("4160"),s("159b"),Object(a["r"])("data-v-436e8778")),_=g((function(t,e,s,c,r,n){return Object(a["q"])((Object(a["h"])(),Object(a["c"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.value=t}),type:"range",min:"1",max:"4",class:{todo:"1"===r.value,inprogress:"2"===r.value,review:"3"===r.value,done:"4"===r.value}},null,2)),[[a["o"],r.value]])})),m={name:"Range",props:{val:String},data:function(){return{value:this.val}}};s("3b90");m.render=_,m.__scopeId="data-v-436e8778";var w=m,y=(s("a4d3"),s("e01a"),Object(a["r"])("data-v-42a15f97"));Object(a["j"])("data-v-42a15f97");var I={key:0,class:"task__menu"},S={key:2,class:"task__actions"},C={class:"task__actions__status"};Object(a["i"])();var E=y((function(t,e,s,c,r,n){var i=Object(a["m"])("UIRange");return Object(a["h"])(),Object(a["c"])("div",{class:["task",{task_edit:r.showEditor,task_todo:"1"===r.status,task_inprogress:"2"===r.status,task_review:"3"===r.status,task_done:"4"===r.status}]},[r.showEditor?Object(a["d"])("",!0):(Object(a["h"])(),Object(a["c"])("div",I,[Object(a["f"])("button",{class:"sm",onClick:e[1]||(e[1]=function(t){return r.showEditor=!0})},"Edit"),Object(a["f"])("button",{class:"sm cancel",onClick:e[2]||(e[2]=function(){return n.delete.apply(n,arguments)})},"Delete")])),r.showEditor?(Object(a["h"])(),Object(a["c"])("div",S,[Object(a["q"])(Object(a["f"])("textarea",{ref:"description","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.description=t}),placeholder:"Task description..."},null,512),[[a["o"],r.description]]),Object(a["f"])("div",C,[Object(a["f"])("label",null,Object(a["n"])(n.statusName),1),Object(a["f"])(i,{modelValue:r.status,"onUpdate:modelValue":e[5]||(e[5]=function(t){return r.status=t}),val:r.status},null,8,["modelValue","val"])]),Object(a["f"])("button",{class:"save",onClick:e[6]||(e[6]=function(){return n.save.apply(n,arguments)})},"Save"),Object(a["f"])("button",{class:"cancel",onClick:e[7]||(e[7]=function(){return n.cancel.apply(n,arguments)})},"Cancel")])):(Object(a["h"])(),Object(a["c"])("div",{key:1,class:"task__title",onClick:e[3]||(e[3]=function(t){return r.showEditor=!0}),innerHTML:r.description},null,8,["innerHTML"]))],2)})),T={name:"Task",components:{UIRange:w},props:{taskId:String,card:Object},mounted:function(){this.taskId?(this.description=this.$store.state.tasks.get(this.taskId).description,this.status=this.$store.state.tasks.get(this.taskId).status):this.showEditor=!0},data:function(){return{showEditor:!1,description:"",status:"1"}},methods:{save:function(){var t={cardId:this.card.id,description:this.description,taskId:this.taskId||null,status:this.status};this.$store.dispatch("setTask",t),this.$emit("save"),this.showEditor=!1},cancel:function(){this.$emit("save"),this.description=this.$store.state.tasks.get(this.taskId).description,this.showEditor=!1},delete:function(){var t={cardId:this.card.id,taskId:this.taskId};this.$store.dispatch("deleteTask",t),this.$emit("save"),this.showEditor=!1}},computed:{desc:function(){var t=this.$store.state.tasks.get(this.taskId);return t&&t.description?t.description:""},task:function(){return this.taskId?this.$store.state.tasks.get(this.taskId):void 0},statusName:function(){switch(this.status){case"2":return"In progress";case"3":return"Review";case"4":return"Done";default:return"Todo"}}},watch:{showEditor:function(t){var e=this;t&&this.$nextTick((function(){e.$refs.description.focus()}))}}};s("d720");T.render=E,T.__scopeId="data-v-42a15f97";var $=T,M={name:"Card",components:{UIRange:w,Task:$},props:{card:Object},mounted:function(){var t=this;null===this.card.title&&(this.showEditor=!0,this.$nextTick((function(){t.$refs.title.focus()})))},data:function(){return{showEditor:!1,newTask:!1,title:this.card.title}},methods:{save:function(){this.$store.dispatch("setCard",{title:this.title,cardId:this.card.id}),this.showEditor=!1},close:function(){this.showEditor=!1,this.title=this.card.title},delete:function(){this.$store.dispatch("deleteCard",this.card.id)},countHandler:function(t){var e=this,s=0;return this.card.taskList.forEach((function(a){e.$store.state.tasks.get(a).status===t&&(s+=1)})),0===this.card.taskList.length||0===s?"0%":"".concat(100/this.card.taskList.length*s,"%")}},computed:{todo:function(){return this.countHandler("1")},inProgress:function(){return this.countHandler("2")},review:function(){return this.countHandler("3")},done:function(){return this.countHandler("4")}}};s("3d8f");M.render=k,M.__scopeId="data-v-4ff28de5";var x=M,P={name:"App",components:{TheHeader:b,Card:x},mounted:function(){this.$store.dispatch("getCards"),this.$store.dispatch("getTasks")},computed:{cards:function(){return Object.values(Object.fromEntries(Object(u["a"])(this.$store.state.cards)))}}};s("ad20");P.render=d,P.__scopeId="data-v-29aff392";var J=P,L=(s("c975"),s("a434"),s("4ec9"),s("d3b7"),s("3ca3"),s("ddb0"),s("5502")),N=Object(L["a"])({state:{cards:new Map,tasks:new Map},actions:{getCards:function(t){var e=t.state,s=localStorage.getItem("cards");e.cards=s?new Map(JSON.parse(s)):new Map},setCard:function(t,e){var s=t.state,a=e.cardId,c=e.title;if(a&&s.cards.has(a))s.cards.get(a).title=c||null;else{var r;do{r="".concat(Math.random())}while(s.cards.has(r));s.cards.set(r,{id:r,title:c||null,taskList:[]})}localStorage.setItem("cards",JSON.stringify(Object(u["a"])(s.cards)))},deleteCard:function(t,e){var s=t.state;e&&s.cards.has(e)&&(s.cards.get(e).taskList.forEach((function(t){return s.tasks.delete(t)})),s.cards.delete(e)),localStorage.setItem("cards",JSON.stringify(Object(u["a"])(s.cards))),localStorage.setItem("tasks",JSON.stringify(Object(u["a"])(s.tasks)))},getTasks:function(t){var e=t.state,s=localStorage.getItem("tasks");e.tasks=s?new Map(JSON.parse(s)):new Map},setTask:function(t,e){var s=t.state,a=e.cardId,c=e.taskId,r=e.description,n=e.status;if(c&&s.tasks.has(c))s.tasks.get(c).description=r,s.tasks.get(c).status=n;else{var i;do{i="".concat(Math.random())}while(s.tasks.has(i));s.cards.get(a).taskList.push(i),localStorage.setItem("cards",JSON.stringify(Object(u["a"])(s.cards))),s.tasks.set(i,{id:i,description:r,status:n})}localStorage.setItem("tasks",JSON.stringify(Object(u["a"])(s.tasks)))},deleteTask:function(t,e){var s=t.state,a=e.cardId,c=e.taskId;if(c&&s.tasks.has(c)&&s.tasks.delete(c),s.cards.has(a)){var r=s.cards.get(a).taskList.indexOf(c);r>=0&&s.cards.get(a).taskList.splice(r,1)}localStorage.setItem("cards",JSON.stringify(Object(u["a"])(s.cards))),localStorage.setItem("tasks",JSON.stringify(Object(u["a"])(s.tasks)))}}});s("2fc4");Object(a["b"])(J).use(N).mount("#app")},"647d":function(t,e,s){},"8cb3":function(t,e,s){},ad20:function(t,e,s){"use strict";s("647d")},d2b7:function(t,e,s){},d720:function(t,e,s){"use strict";s("2546")}});
//# sourceMappingURL=app.a6a566b0.js.map