"use strict";(self.webpackChunkgetfit=self.webpackChunkgetfit||[]).push([[955],{160:function(e,t,r){r(791);var n=r(636),o=r(184);t.Z=function(e){return(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)(n.Z,{id:"exercise".concat(e.inputNumber,"-name"),label:"Exercise Name",type:"text",placeholder:"Enter a name.",errorText:"Please enter a name!",value:e.exerciseName||null}),(0,o.jsxs)("div",{className:"flex justify-between max-w-2xl mb-4",children:[(0,o.jsx)(n.Z,{id:"exercise".concat(e.inputNumber,"-sets"),label:"Sets",type:"number",placeholder:"1",errorText:"Please enter a set count!",value:e.exerciseSets||null}),(0,o.jsx)(n.Z,{id:"exercise".concat(e.inputNumber,"-reps"),label:"Reps",type:"number",placeholder:"1",errorText:"Please enter a rep count!",value:e.exerciseReps||null}),(0,o.jsx)(n.Z,{id:"exercise".concat(e.inputNumber,"-weight"),label:"Weight",type:"number",placeholder:"1",errorText:"Please enter the weight you used!",value:e.exerciseWeightUsed||null})]})]})}},955:function(e,t,r){r.r(t);var n=r(214),o=r(861),s=r(982),a=r(885),u=r(791),i=r(348),c=r(871),l=r(306),h=r(636),x=r(947),p=r(160),d=r(891),m=r(493),f=r(184);t.default=function(){var e=(0,u.useContext)(m.V),t=[(0,f.jsx)(p.Z,{inputNumber:1},1),(0,f.jsx)(p.Z,{inputNumber:2},2),(0,f.jsx)(p.Z,{inputNumber:3},3)],r=(0,u.useState)(t),b=(0,a.Z)(r,2),v=b[0],w=b[1],y=(0,u.useState)(1),Z=(0,a.Z)(y,2),k=Z[0],g=Z[1],j=(0,f.jsx)(p.Z,{inputNumber:t.length+k},t.length+k),N=(0,c.s0)(),T=(0,i.i)(),P=T.hasError,S=T.sendRequest,C=T.clearError,E=(0,u.useState)(!1),A=(0,a.Z)(E,2),W=A[0],U=A[1],R=function(){var r=(0,o.Z)((0,n.Z)().mark((function r(o){var s,a,u,i,c,l,h,x;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(o.preventDefault(),s=[],a=o.target,u={exerciseName:"",sets:0,reps:0,weightUsed:[]},i={workoutTitle:"",exercises:[]},a[0].value?i.workoutTitle=a[0].value:s.push("Please enter a title for your workout!"),c=1,l=1;l<a.length-3;l++)l%4===1?a[l].value?u.exerciseName=a[l].value:s.push("Please enter a name for exercise ".concat(c,"!")):l%4===2?a[l].value?u.sets=a[l].value:s.push("Please enter the set count for exercise ".concat(c,"!")):l%4===3?a[l].value?u.reps=a[l].value:s.push("Please enter the rep count for exercise ".concat(c,"!")):(a[l].value?u.weightUsed.push(a[l].value):s.push("Please enter the weight you used for exercise ".concat(c,"!")),i.exercises.push(u),c++,u={exerciseName:"",sets:0,reps:0,weightUsed:[]});if(!(s.length>0)){r.next=11;break}return U(!0),r.abrupt("return");case 11:return r.prev=11,r.next=14,S("".concat("https://mcghee-getfit.herokuapp.com","/workout"),"POST",{"Content-Type":"application/json",Authorization:"Bearer "+e.token},JSON.stringify({workoutTitle:i.workoutTitle,exercises:i.exercises}));case 14:h=r.sent,r.next=19;break;case 17:r.prev=17,r.t0=r.catch(11);case 19:w(t),g(1),x=h.workout.id,setTimeout((function(){return N("/workout/".concat(x,"/view"))}),500);case 24:case"end":return r.stop()}}),r,null,[[11,17]])})));return function(e){return r.apply(this,arguments)}}(),D=(0,f.jsxs)("div",{children:[(0,f.jsx)(l.Z,{onClick:function(){N(-1)},type:"button",text:"Discard",className:"bg-red-500 text-white/75 hover:text-white hover:bg-red-600 button rounded-md shadow hover:cursor-pointer ml-2 hover:scale-105"}),(0,f.jsx)(l.Z,{type:"submit",text:"Create Workout",className:"ml-2 button border border-gray-1 rounded-md shadow hover:cursor-pointer hover:scale-105"})]});return(0,f.jsxs)(u.Fragment,{children:[(0,f.jsx)(d.Z,{error:P,onClear:C}),W&&(0,f.jsx)(d.Z,{error:"Could not create workout! Please make sure the form is filled out correctly.",onClear:function(){U(!1)}}),(0,f.jsx)("form",{onSubmit:R,children:(0,f.jsxs)(x.Z,{header:"New Workout",footer:D,children:[(0,f.jsx)(h.Z,{id:"workoutTitle",label:"Workout Title",type:"text",placeholder:"Enter a title.",errorText:"Please enter a title!"}),v,v.length<10&&(0,f.jsx)(l.Z,{type:"button",onClick:function(){w([].concat((0,s.Z)(v),[j])),g(k+1)},text:"Add Another Exercise",className:"max-w-xs button border border-gray-1 rounded-md shadow hover:cursor-pointer hover:scale-105 mb-4"})]})})]})}},982:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(907);var o=r(181);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=955.d50d15b6.chunk.js.map