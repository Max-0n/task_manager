(function(t){function e(e){for(var a,r,i=e[0],o=e[1],d=e[2],l=0,h=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var o=s[i];0!==c[o]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},c={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"126e":function(t,e,s){"use strict";s("de7f")},"181b":function(t,e,s){},"18ca":function(t,e,s){},"2e7c":function(t,e,s){"use strict";s("f27c")},"2fc4":function(t,e,s){},"3b90":function(t,e,s){"use strict";s("181b")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),c=Object(a["q"])("data-v-079645d8"),n=c((function(t,e,s,c,n,r){var i=Object(a["l"])("TheHeader"),o=Object(a["l"])("Card");return Object(a["g"])(),Object(a["c"])(a["a"],null,[Object(a["e"])(i),Object(a["e"])("section",null,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(r.cards,(function(t){return Object(a["g"])(),Object(a["c"])("div",{class:"card_wrapper",key:t.id},[Object(a["e"])(o,{card:t},null,8,["card"])])})),128))])],64)})),r=(s("c1f9"),s("07ac"),s("2909")),i=Object(a["q"])("data-v-56932ec0"),o=i((function(t,e,s,c,n,r){return Object(a["g"])(),Object(a["c"])("nav",null,[Object(a["e"])("button",{onClick:e[1]||(e[1]=function(){return r.addCard.apply(r,arguments)})},"Add card")])})),d={name:"TheHeader",methods:{addCard:function(){this.$store.dispatch("setCard",{title:"Title of Card"})}}};s("126e");d.render=o,d.__scopeId="data-v-56932ec0";var u=d,l=Object(a["q"])("data-v-6958fef0");Object(a["i"])("data-v-6958fef0");var h={class:"card"},f={key:0,class:"card__menu"},b={key:2,class:"card__editor"},p={class:"card__tasks"};Object(a["h"])();var k=l((function(t,e,s,c,n,r){var i=Object(a["l"])("Task");return Object(a["g"])(),Object(a["c"])("div",h,[n.showEditor?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])("div",f,[Object(a["e"])("button",{class:"sm",onClick:e[1]||(e[1]=function(t){return n.showEditor=!0})},"Edit"),Object(a["e"])("button",{class:"sm cancel",onClick:e[2]||(e[2]=function(){return r.delete.apply(r,arguments)})},"Delete")])),n.showEditor?(Object(a["g"])(),Object(a["c"])("div",b,[Object(a["p"])(Object(a["e"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.title=t})},null,512),[[a["n"],n.title]]),Object(a["e"])("button",{class:"save",onClick:e[5]||(e[5]=function(){return r.save.apply(r,arguments)})},"Save"),Object(a["e"])("button",{class:"cancel",onClick:e[6]||(e[6]=function(){return r.close.apply(r,arguments)})},"Cancel")])):(Object(a["g"])(),Object(a["c"])("div",{key:1,class:"card__title",onClick:e[3]||(e[3]=function(t){return n.showEditor=!0})},Object(a["m"])(s.card.title),1)),Object(a["e"])("div",{class:"card__progress",onClick:e[7]||(e[7]=function(t){return n.showEditor=!0})},[Object(a["e"])("div",{class:"card__progress__done",style:{width:r.done}},null,4),Object(a["e"])("div",{class:"card__progress__review",style:{width:r.review}},null,4),Object(a["e"])("div",{class:"card__progress__inprogress",style:{width:r.inProgress}},null,4),Object(a["e"])("div",{class:"card__progress__todo",style:{width:r.todo}},null,4)]),Object(a["e"])("div",p,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(s.card.taskList,(function(t,e){return Object(a["g"])(),Object(a["c"])(i,{key:t,taskId:t,card:s.card},null,8,["taskId","card"])})),128)),n.newTask?(Object(a["g"])(),Object(a["c"])(i,{key:0,card:s.card,onSave:e[8]||(e[8]=function(t){return n.newTask=!1})},null,8,["card"])):(Object(a["g"])(),Object(a["c"])("button",{key:1,onClick:e[9]||(e[9]=function(t){return n.newTask=!0})},"Add subtask"))])])})),O=(s("4160"),s("159b"),Object(a["q"])("data-v-436e8778")),v=O((function(t,e,s,c,n,r){return Object(a["p"])((Object(a["g"])(),Object(a["c"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return n.value=t}),type:"range",min:"1",max:"4",class:{todo:"1"===n.value,inprogress:"2"===n.value,review:"3"===n.value,done:"4"===n.value}},null,2)),[[a["n"],n.value]])})),j={name:"Range",props:{val:String},data:function(){return{value:this.val}}};s("3b90");j.render=v,j.__scopeId="data-v-436e8778";var g=j,_=(s("a4d3"),s("e01a"),Object(a["q"])("data-v-53a79a76"));Object(a["i"])("data-v-53a79a76");var m={key:0,class:"task__menu"},w={key:2,class:"task__actions"},y={class:"task__actions__status"};Object(a["h"])();var I=_((function(t,e,s,c,n,r){var i=Object(a["l"])("UIRange");return Object(a["g"])(),Object(a["c"])("div",{class:["task",{task_edit:n.showEditor,task_todo:"1"===n.status,task_inprogress:"2"===n.status,task_review:"3"===n.status,task_done:"4"===n.status}]},[n.showEditor?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])("div",m,[Object(a["e"])("button",{class:"sm",onClick:e[1]||(e[1]=function(t){return n.showEditor=!0})},"Edit"),Object(a["e"])("button",{class:"sm cancel",onClick:e[2]||(e[2]=function(){return r.delete.apply(r,arguments)})},"Delete")])),n.showEditor?(Object(a["g"])(),Object(a["c"])("div",w,[Object(a["p"])(Object(a["e"])("textarea",{ref:"description","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.description=t})},null,512),[[a["n"],n.description]]),Object(a["e"])("div",y,[Object(a["e"])("label",null,Object(a["m"])(r.statusName),1),Object(a["e"])(i,{modelValue:n.status,"onUpdate:modelValue":e[5]||(e[5]=function(t){return n.status=t}),val:n.status},null,8,["modelValue","val"])]),Object(a["e"])("button",{class:"save",onClick:e[6]||(e[6]=function(){return r.save.apply(r,arguments)})},"Save"),Object(a["e"])("button",{class:"cancel",onClick:e[7]||(e[7]=function(){return r.cancel.apply(r,arguments)})},"Cancel")])):(Object(a["g"])(),Object(a["c"])("div",{key:1,class:"task__title",onClick:e[3]||(e[3]=function(t){return n.showEditor=!0}),innerHTML:n.description},null,8,["innerHTML"]))],2)})),C={name:"Task",components:{UIRange:g},props:{taskId:String,card:Object},mounted:function(){this.taskId?(this.description=this.$store.state.tasks.get(this.taskId).description,this.status=this.$store.state.tasks.get(this.taskId).status):this.showEditor=!0},data:function(){return{showEditor:!1,description:"",status:"1"}},methods:{save:function(){var t={cardId:this.card.id,description:this.description,taskId:this.taskId||null,status:this.status};this.$store.dispatch("setTask",t),this.$emit("save"),this.showEditor=!1},cancel:function(){this.$emit("save"),this.description=this.$store.state.tasks.get(this.taskId).description,this.showEditor=!1},delete:function(){var t={cardId:this.card.id,taskId:this.taskId};this.$store.dispatch("deleteTask",t),this.$emit("save"),this.showEditor=!1}},computed:{desc:function(){var t=this.$store.state.tasks.get(this.taskId);return t&&t.description?t.description:""},task:function(){return this.taskId?this.$store.state.tasks.get(this.taskId):void 0},statusName:function(){switch(this.status){case"2":return"In progress";case"3":return"Review";case"4":return"Done";default:return"Todo"}}},watch:{showEditor:function(t){var e=this;t&&this.$nextTick((function(){e.$refs.description.focus()}))}}};s("a241");C.render=I,C.__scopeId="data-v-53a79a76";var E=C,S={name:"Card",components:{UIRange:g,Task:E},props:{card:Object},data:function(){return{showEditor:!1,newTask:!1,title:this.card.title}},methods:{save:function(){this.$store.dispatch("setCard",{title:this.title,cardId:this.card.id}),this.showEditor=!1},close:function(){this.showEditor=!1,this.title=this.card.title},delete:function(){this.$store.dispatch("deleteCard",this.card.id)}},computed:{todo:function(){var t=this,e=0;return this.card.taskList.forEach((function(s){"1"===t.$store.state.tasks.get(s).status&&(e+=1)})),0===this.card.taskList.length||0===e?"0%":"".concat(100/this.card.taskList.length*e,"%")},inProgress:function(){var t=this,e=0;return this.card.taskList.forEach((function(s){"2"===t.$store.state.tasks.get(s).status&&(e+=1)})),0===this.card.taskList.length||0===e?"0%":"".concat(100/this.card.taskList.length*e,"%")},review:function(){var t=this,e=0;return this.card.taskList.forEach((function(s){"3"===t.$store.state.tasks.get(s).status&&(e+=1)})),0===this.card.taskList.length||0===e?"0%":"".concat(100/this.card.taskList.length*e,"%")},done:function(){var t=this,e=0;return this.card.taskList.forEach((function(s){"4"===t.$store.state.tasks.get(s).status&&(e+=1)})),0===this.card.taskList.length||0===e?"0%":"".concat(100/this.card.taskList.length*e,"%")}}};s("2e7c");S.render=k,S.__scopeId="data-v-6958fef0";var T=S,$={name:"App",components:{TheHeader:u,Card:T},mounted:function(){this.$store.dispatch("getCards"),this.$store.dispatch("getTasks")},computed:{cards:function(){return Object.values(Object.fromEntries(Object(r["a"])(this.$store.state.cards)))}}};s("c096");$.render=n,$.__scopeId="data-v-079645d8";var L=$,M=(s("c975"),s("a434"),s("4ec9"),s("d3b7"),s("3ca3"),s("ddb0"),s("5502")),x=Object(M["a"])({state:{cards:new Map,tasks:new Map},actions:{getCards:function(t){var e=t.state,s=localStorage.getItem("cards");e.cards=s?new Map(JSON.parse(s)):new Map},setCard:function(t,e){var s=t.state,a=e.cardId,c=e.title;if(a&&s.cards.has(a))s.cards.get(a).title=c;else{var n;do{n="".concat(Math.random())}while(s.cards.has(n));s.cards.set(n,{id:n,title:c||"Empty",taskList:[]})}localStorage.setItem("cards",JSON.stringify(Object(r["a"])(s.cards)))},deleteCard:function(t,e){var s=t.state;e&&s.cards.has(e)&&(s.cards.get(e).taskList.forEach((function(t){return s.tasks.delete(t)})),s.cards.delete(e)),localStorage.setItem("cards",JSON.stringify(Object(r["a"])(s.cards))),localStorage.setItem("tasks",JSON.stringify(Object(r["a"])(s.tasks)))},getTasks:function(t){var e=t.state,s=localStorage.getItem("tasks");e.tasks=s?new Map(JSON.parse(s)):new Map},setTask:function(t,e){var s=t.state,a=e.cardId,c=e.taskId,n=e.description,i=e.status;if(c&&s.tasks.has(c))s.tasks.get(c).description=n,s.tasks.get(c).status=i;else{var o;do{o="".concat(Math.random())}while(s.tasks.has(o));s.cards.get(a).taskList.push(o),localStorage.setItem("cards",JSON.stringify(Object(r["a"])(s.cards))),s.tasks.set(o,{id:o,description:n,status:i})}localStorage.setItem("tasks",JSON.stringify(Object(r["a"])(s.tasks)))},deleteTask:function(t,e){var s=t.state,a=e.cardId,c=e.taskId;if(c&&s.tasks.has(c)&&s.tasks.delete(c),s.cards.has(a)){var n=s.cards.get(a).taskList.indexOf(c);n>=0&&s.cards.get(a).taskList.splice(n,1)}localStorage.setItem("cards",JSON.stringify(Object(r["a"])(s.cards))),localStorage.setItem("tasks",JSON.stringify(Object(r["a"])(s.tasks)))}}});s("2fc4");Object(a["b"])(L).use(x).mount("#app")},"5b54":function(t,e,s){},a241:function(t,e,s){"use strict";s("5b54")},c096:function(t,e,s){"use strict";s("18ca")},de7f:function(t,e,s){},f27c:function(t,e,s){}});
//# sourceMappingURL=app.f75029f7.js.map