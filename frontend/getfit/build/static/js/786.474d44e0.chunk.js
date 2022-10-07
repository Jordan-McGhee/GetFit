"use strict";(self.webpackChunkgetfit=self.webpackChunkgetfit||[]).push([[786],{160:function(e,t,r){r(791);var n=r(636),o=r(184);t.Z=function(e){return(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)(n.Z,{id:"exercise".concat(e.inputNumber,"-name"),label:"Exercise Name",type:"text",placeholder:"Enter a name.",errorText:"Please enter a name!",value:e.exerciseName||null}),(0,o.jsxs)("div",{className:"flex justify-between max-w-2xl mb-4",children:[(0,o.jsx)(n.Z,{id:"exercise".concat(e.inputNumber,"-sets"),label:"Sets",type:"number",placeholder:"1",errorText:"Please enter a set count!",value:e.exerciseSets||null}),(0,o.jsx)(n.Z,{id:"exercise".concat(e.inputNumber,"-reps"),label:"Reps",type:"number",placeholder:"1",errorText:"Please enter a rep count!",value:e.exerciseReps||null}),(0,o.jsx)(n.Z,{id:"exercise".concat(e.inputNumber,"-weight"),label:"Weight",type:"number",placeholder:"1",errorText:"Please enter the weight you used!",value:e.exerciseWeightUsed||null})]})]})}},786:function(e,t,r){r.r(t);var n=r(982),o=r(214),s=r(861),a=r(885),u=r(791),c=r(871),i=r(348),l=r(306),h=r(636),x=r(160),p=r(947),d=r(353),f=r(891),m=r(493),v=r(184);t.default=function(e){var t=(0,u.useContext)(m.V),r=(0,c.s0)(),w=[],b=(0,u.useState)(null),k=(0,a.Z)(b,2),g=k[0],Z=k[1],y=(0,u.useState)(null),j=(0,a.Z)(y,2),N=(j[0],j[1]),T=(0,u.useState)(w),S=(0,a.Z)(T,2),P=S[0],C=S[1],E=(0,u.useState)(0),A=(0,a.Z)(E,2),U=A[0],W=A[1],R=(0,i.i)(),D=R.isLoading,I=R.hasError,O=R.sendRequest,z=R.clearError,B=(0,c.UO)().workoutID;(0,u.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("".concat("https://mcghee-getfit.herokuapp.com","/workout/").concat(B,"/view"),"GET",{Authorization:"Bearer "+t.token});case 3:r=e.sent,Z(r.workout),N(r.workout.exercises),W(r.workout.exercises.length),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[O,B,t.token]);var q=(0,v.jsx)(x.Z,{inputNumber:w.length+U+1},w.length+U+1),F=(0,u.useState)(!1),G=(0,a.Z)(F,2),H=G[0],J=G[1],L=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var s,a,u,c,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n.preventDefault(),s=[],a=n.target,u={exerciseName:"",sets:0,reps:0,weightUsed:[]},c={workoutTitle:"",exercises:[]},a[0].value?c.workoutTitle=a[0].value:s.push("Please enter a title for your workout!"),i=1,l=1;l<a.length-3;l++)l%4===1?a[l].value?u.exerciseName=a[l].value:s.push("Please enter a name for exercise ".concat(i,"!")):l%4===2?a[l].value?u.sets=a[l].value:s.push("Please enter the set count for exercise ".concat(i,"!")):l%4===3?a[l].value?u.reps=a[l].value:s.push("Please enter the rep count for exercise ".concat(i,"!")):(a[l].value?u.weightUsed.push(a[l].value):s.push("Please enter the weight you used for exercise ".concat(i,"!")),c.exercises.push(u),i++,u={exerciseName:"",sets:0,reps:0,weightUsed:[]});if(!(s.length>0)){e.next=11;break}return J(!0),e.abrupt("return");case 11:return e.prev=11,e.next=14,O("".concat("https://mcghee-getfit.herokuapp.com","/workout/").concat(B),"PATCH",{"Content-Type":"application/json",Authorization:"Bearer "+t.token},JSON.stringify({workoutTitle:c.workoutTitle,exercises:c.exercises}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(11),console.log("Error updating workout"),console.log(e.t0);case 20:r("/workout/".concat(B,"/view"));case 21:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t){return e.apply(this,arguments)}}(),V=g&&(0,v.jsxs)("h2",{className:"truncate",children:["Editing Workout: ",g.workoutTitle]}),K=(0,v.jsxs)("footer",{children:[(0,v.jsx)(l.Z,{link:"/workout/".concat(B,"/view"),type:"text",text:"Discard",className:"bg-red-500 text-white/75 hover:text-white hover:bg-red-600 button rounded-md shadow hover:cursor-pointer mr-2 border-none hover:scale-105"}),(0,v.jsx)(l.Z,{type:"submit",text:"Save Changes",className:"ml-2 button border border-gray-1 rounded-md shadow hover:cursor-pointer hover:scale-105"})]});return(0,v.jsxs)(u.Fragment,{children:[(0,v.jsx)(f.Z,{error:I,onClear:z}),D&&(0,v.jsx)("div",{children:(0,v.jsx)(d.Z,{asOverlay:!0})}),!D&&H&&(0,v.jsx)(f.Z,{error:"Could not update workout! Please make sure the form is filled out correctly.",onClear:function(){J(!1)}}),!D&&g&&(0,v.jsx)("form",{onSubmit:L,children:(0,v.jsxs)(p.Z,{header:V,footer:K,children:[g&&(0,v.jsx)(h.Z,{id:"workoutTitle",label:"Workout Title",type:"text",value:g.workoutTitle}),(0,v.jsx)("ul",{children:g&&g.exercises.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(x.Z,{exerciseName:e.exerciseName,exerciseSets:e.sets,exerciseReps:e.reps,exerciseWeightUsed:e.weightUsed})},e.id)}))}),P,U<10&&(0,v.jsx)(l.Z,{type:"button",onClick:function(){C([].concat((0,n.Z)(P),[q])),W(U+1)},text:"Add Another Exercise",className:"button border border-gray-1 rounded-md shadow hover:cursor-pointer hover:scale-105 mb-4"})]})})]})}},982:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(907);var o=r(181);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=786.474d44e0.chunk.js.map