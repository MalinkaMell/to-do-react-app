(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(8),o=n.n(c),r=n(5),u=n(6),d=n(19),m=n(20),i=n(21),s=(n(16),n(9)),p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:e.type,className:e.class,value:e.value,onClick:function(t){return e.args?e.clickHandler.apply(e,Object(r.a)(e.args).concat([t])):e.clickHandler(t)}}))},f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-group mb-3 mx-2",key:e.todo.id},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("input",{type:"checkbox",onChange:function(t){return e.switchCheckbox(e.todo.id,t)},value:e.todo.id,checked:e.todo.completed}))),l.a.createElement("input",{type:"text",className:"form-control "+(e.todo.completed?"completed ":"uncompleted"),disabled:!0,value:e.todo.title}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement(p,{todo:e.todo,clickHandler:e.deleteHandler,type:"button",value:"\u2717",class:"btn btn-delete",args:[e.todo.id]}))))},E=function(e){return l.a.createElement(l.a.Fragment,null,e.todos.map((function(t){return l.a.createElement(f,{key:t.id,todo:t,switchCheckbox:e.switchCheckbox,deleteHandler:e.deleteHandler})})))},b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"w-100 mx-2"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{className:"form-control",type:"text",name:"newtodo",value:e.newtodo,onChange:e.inputHandler,ref:e.todoInput,placeholder:"Add new to-do"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement(p,{newtodo:e.newtodo,clickHandler:e.submitHandler,type:"submit",value:"\u2713",class:"btn btn-add"})))))},h=function(){return l.a.createElement("h1",{className:"mt-2 title"},"React To-do App")},g=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(s),p=Object(u.a)(o,2),f=p[0],g=p[1],v=Object(a.useRef)(null);return l.a.createElement(d.a,null,l.a.createElement(m.a,{className:"justify-content-center my-2"},l.a.createElement(h,null)),l.a.createElement(m.a,{className:"justify-content-center"},l.a.createElement(i.a,{md:6,className:"jumbotron mx-2"},l.a.createElement(m.a,null,l.a.createElement(b,{newtodo:n,inputHandler:function(e){c(e.target.value)},submitHandler:function(e){e.preventDefault();var t={id:f.length+1,title:n,completed:!1};""!==n&&(g((function(e){return[].concat(Object(r.a)(e),[t])})),c("")),v.current.focus()},todoInput:v})),l.a.createElement(m.a,null,l.a.createElement(E,{todos:f,switchCheckbox:function(e,t){g(f.map((function(t){return e===t.id&&(t.completed=!t.completed),t})))},deleteHandler:function(e,t){t.preventDefault(),g(f.filter((function(t){return t.id!==e})))}})))))};o.a.render(l.a.createElement(g,null),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":1,"title":"Grocery shopping -.-","completed":true},{"id":2,"title":"Clean the house ;-(","completed":false},{"id":3,"title":"Look for job! ^_^","completed":false}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.d9f4b2a1.chunk.js.map