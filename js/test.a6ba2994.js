(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test"],{"18f0":function(e,t,s){},"25a4":function(e,t,s){},"78c1":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-container",[null!=e.currentQuestion?t("b-row",[t("b-col",[t("span",[e._v("Answered: ")]),t("span",[e._v(e._s(e.progress)+" / "+e._s(e.questions.length))])])],1):e._e(),t("b-row",[t("b-col",[0==e.progress&&0==e.questions.length?[t("span",{staticClass:"error"},[e._v("No questions returned for criteria")]),t("br"),t("b-button",{on:{click:function(t){t.preventDefault(),e.progress=-1}}},[e._v("Retry")])]:e._e(),-1==e.progress?t("options",{attrs:{type:e.questionType},on:{optionsSet:e.start}}):e.progress>-1&&0==e.questions.length||e.EarlyFinish?t("results",{attrs:{type:e.questionType}}):t("question",{attrs:{question:e.currentQuestion,type:e.questionType},on:{next:e.nextQuestion,"update:question":function(t){e.currentQuestion=t},"early-finish":()=>{e.EarlyFinish=!0}}})],2)],1)],1)},o=[],r=s("9ab4"),i=s("1b40"),c=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-container",[t("b-row",[t("b-col",[t("ul",[t("li",[t("span",[e._v("Verb: ")]),t("span",[e._v(e._s(e.pathPieces[0]))]),t("span",{staticClass:"originalKana"},[e._v(" ("+e._s(e.fullQuestion.originalKana)+")")])]),t("li",[t("span",[e._v("Form: ")]),t("span",[e._v(e._s(e.pathPieces[1]))])]),t("li",[t("span",[e._v("Politeness: ")]),e._v(e._s(e.pathPieces[2])),t("span")]),t("li",[t("span",[e._v("Positivitiy: ")]),t("span",[e._v(e._s(e.pathPieces[3]))])])])])],1),t("b-row",[t("b-col",[t("b-form-input",{ref:"input",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter.apply(null,arguments)}},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}}),e.answered?[t("span",{class:e.correct?"correct":"incorrect"},[e._v(e._s(e.correct?"Correct":"Incorrect"))]),t("span",{staticClass:"correctAnswer"},[e._v(" - "+e._s(e.fullQuestion.kanji)+" ("+e._s(e.fullQuestion.kana)+")")])]:e._e()],2)],1),t("b-row",[t("b-col",[e.answered?t("b-button",{on:{click:function(t){return t.preventDefault(),e.$emit("next",!0)}}},[e._v("Next")]):t("b-button",{on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e._v("Submit")]),t("b-button",{on:{click:function(t){return t.preventDefault(),e.$emit("early-finish",!0)}}},[e._v("Done")])],1)],1)],1)},a=[],l=s("2f62"),u=s("6034");let p=class extends i["c"]{mounted(){const e=this;Object(u["a"])(e.$refs["input"].$el)}get pathPieces(){const e=this;return e.fullQuestion.path.split(".")}get fullQuestion(){const e=this;return e.getQuestion()(e.question,e.type)}submit(){const e=this;e.correct=e.answer==e.fullQuestion.kana||e.answer==e.fullQuestion.kanji,e.answered=!0,e.updateAnswer({path:e.fullQuestion.path,answer:e.correct?(void 0).Correct:(void 0).Incorrect})}enter(){const e=this;e.answered?e.$emit("next",e.correct?(void 0).Correct:(void 0).Incorrect):e.submit()}questionChange(){const e=this;e.answer="",e.answered=!1}};Object(r["a"])([Object(i["b"])()],p.prototype,"question",void 0),Object(r["a"])([Object(i["b"])()],p.prototype,"type",void 0),Object(r["a"])([Object(i["d"])("question")],p.prototype,"questionChange",null),p=Object(r["a"])([Object(i["a"])({components:{},methods:{...Object(l["c"])("subjects",["getQuestions","getQuestion"]),...Object(l["b"])("subjects",["updateAnswer"])},data(){return{answer:"",answered:!1}}})],p);var d=p,b=d,v=(s("fbd8"),s("2877")),f=Object(v["a"])(b,c,a,!1,null,"9d8b0ab2",null),_=f.exports,y=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function({invalid:s}){return[t("b-container",[t("b-row",[t("b-col",[t("ValidationProvider",{attrs:{name:"Levels",rules:"required",mode:"eager"},scopedSlots:e._u([{key:"default",fn:function({errors:s,classes:n}){return[t("b-form-group",{attrs:{label:"Levels","label-for":"chkLevels"}},[t("b-form-checkbox-group",{class:["chk",n],attrs:{id:"chkLevels",name:"Levels",options:e.levels},model:{value:e.selectedLevels,callback:function(t){e.selectedLevels=t},expression:"selectedLevels"}})],1),t("span",{staticClass:"error"},[e._v(e._s(s[0]))])]}}],null,!0)})],1),t("b-col",[t("ValidationProvider",{attrs:{name:"Positivity",rules:"required",mode:"eager"},scopedSlots:e._u([{key:"default",fn:function({errors:s,classes:n}){return[t("b-form-group",{attrs:{label:"Positivity","label-for":"chkPositivity"}},[t("b-form-checkbox-group",{class:["chk",n],attrs:{id:"chkPositivity",name:"Positivity",options:e.ops.positivity},model:{value:e.selectedPositivity,callback:function(t){e.selectedPositivity=t},expression:"selectedPositivity"}})],1),t("span",{staticClass:"error"},[e._v(e._s(s[0]))])]}}],null,!0)})],1),t("b-col",[t("ValidationProvider",{attrs:{name:"Politeness",rules:"required",mode:"eager"},scopedSlots:e._u([{key:"default",fn:function({errors:s,classes:n}){return[t("b-form-group",{attrs:{label:"Politeness","label-for":"chkPoliteness"}},[t("b-form-checkbox-group",{class:["chk",n],attrs:{id:"chkPoliteness",name:"Politeness",options:e.ops.politeness},model:{value:e.selectedPoliteness,callback:function(t){e.selectedPoliteness=t},expression:"selectedPoliteness"}})],1),t("span",{staticClass:"error"},[e._v(e._s(s[0]))])]}}],null,!0)})],1),t("b-col",[t("ValidationProvider",{attrs:{name:"Form",rules:"required",mode:"eager"},scopedSlots:e._u([{key:"default",fn:function({errors:s,classes:n}){return[t("b-form-group",{attrs:{label:"Form","label-for":"chkForm"}},[t("b-form-checkbox-group",{class:["chk",n],attrs:{id:"chkForm",name:"Form"},model:{value:e.selectedForm,callback:function(t){e.selectedForm=t},expression:"selectedForm"}},[e._l(e.ops.form,(function(s){return[t("div",{key:s.text,staticClass:"formDiv"},[t("b-form-checkbox",{attrs:{value:s.value}},[e._v(" "+e._s(s.text)+" ")]),t("hover-help",{attrs:{title:s.text,body:s.help}})],1)]}))],2)],1),t("span",{staticClass:"error"},[e._v(e._s(s[0]))])]}}],null,!0)})],1)],1),t("b-row",[t("b-col",[t("b-button",{on:{click:function(t){return t.preventDefault(),e.setOptions.apply(null,arguments)}}},[e._v("Go")])],1)],1)],1)]}}])})},h=[],m=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("font-awesome-icon",{attrs:{icon:"circle-question",id:e._uid+"help"}}),t("b-popover",{attrs:{target:e._uid+"help",triggers:"hover",placement:"top"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.title))]},proxy:!0}])},[t("span",[e._v(e._s(e.body))])])],1)},k=[];let g=class extends i["c"]{};Object(r["a"])([Object(i["b"])()],g.prototype,"title",void 0),Object(r["a"])([Object(i["b"])()],g.prototype,"body",void 0),g=Object(r["a"])([Object(i["a"])({name:"HoverHelp",components:{}})],g);var j=g,w=j,O=Object(v["a"])(w,m,k,!1,null,"3d715fe3",null),P=O.exports;let x=class extends i["c"]{async setOptions(){const e=this,t=await this.$refs.observer.validate();t&&e.$emit("optionsSet",!0)}get ops(){const e=this;return"verb"==e.type?e.verbOptions:e.adjectiveOptions}get levels(){const e=this;return e.getLevels()}get selectedPositivity(){const e=this;return e.selected.positivity}set selectedPositivity(e){const t=this;t.updateSelectedPositivity(e)}get selectedPoliteness(){const e=this;return e.selected.politeness}set selectedPoliteness(e){const t=this;t.updateSelectedPoliteness(e)}get selectedForm(){const e=this;return e.selected.form}set selectedForm(e){const t=this;t.updateSelectedForm(e)}get selectedLevels(){const e=this;return e.selected.levels}set selectedLevels(e){const t=this;t.updateSelectedLevels(e)}};Object(r["a"])([Object(i["b"])()],x.prototype,"type",void 0),x=Object(r["a"])([Object(i["a"])({components:{"hover-help":P},computed:{...Object(l["d"])("options",["verbOptions","adjectiveOptions","selected"])},methods:{...Object(l["b"])("options",["updateSelectedPositivity","updateSelectedPoliteness","updateSelectedForm","updateSelectedLevels"]),...Object(l["c"])("userData",["getLevels"])},data(){return{}}})],x);var q=x,Q=q,C=(s("fae1"),Object(v["a"])(Q,y,h,!1,null,"a22e59ce",null)),S=C.exports,F=s("2ef0"),L=s("c7a2"),A=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-container",[t("b-row",[t("b-col",[t("span",{attrs:{id:"correct"}},[e._v("Correct")])])],1),t("b-row",e._l(e.correctlyAnswered,(function(s){return t("b-col",{key:s.kanji+"_correct",staticClass:"question"},[t("span",{staticClass:"kanji"},[e._v(e._s(s.kanji))]),t("span",{staticClass:"kana"},[e._v("("+e._s(s.kana)+")")])])})),1),t("b-row",[t("b-col",[t("span",{attrs:{id:"incorrect"}},[e._v("Incorrect")])])],1),t("b-row",e._l(e.incorrectlyAnswered,(function(s){return t("b-col",{key:s.kanji+"_incorrect",staticClass:"question"},[t("span",{staticClass:"kanji"},[e._v(e._s(s.kanji))]),t("br"),t("span",{staticClass:"kana"},[e._v("("+e._s(s.kana)+")")])])})),1),t("b-row",[t("b-col",[t("span",{attrs:{id:"unanswered"}},[e._v("Unanswered")])])],1),t("b-row",e._l(e.unanswered,(function(s){return t("b-col",{key:s.kanji+"_unanswered",staticClass:"question"},[t("span",{staticClass:"kanji"},[e._v(e._s(s.kanji))]),t("br"),t("span",{staticClass:"kana"},[e._v("("+e._s(s.kana)+")")])])})),1)],1)},D=[];let $=class extends i["c"]{get questions(){const e=this;return e.getQuestions()(e.type)}get correctlyAnswered(){const e=this;return e.getAnsweredCorrectly()(e.type)}get incorrectlyAnswered(){const e=this;return e.getAnsweredIncorrectly()(e.type)}get unanswered(){const e=this;return e.getUnanswered()(e.type)}};Object(r["a"])([Object(i["b"])()],$.prototype,"type",void 0),$=Object(r["a"])([Object(i["a"])({components:{},methods:{...Object(l["c"])("subjects",["getQuestions","getAnsweredCorrectly","getAnsweredIncorrectly","getUnanswered"])}})],$);var I=$,V=I,T=(s("bb05"),Object(v["a"])(V,A,D,!1,null,"e8b0584c",null)),E=T.exports;let U=class extends i["c"]{get questionType(){const e=this;return e.$route.params.type}start(){const e=this;e.progress=0,e.questions=e.getQuestions()(e.questionType),e.totalQuestions=e.questions.length,e.currentQuestion=e.randomQuestion()}nextQuestion(e=L["a"].Incorrect){const t=this;e==L["a"].Correct&&(t.progress=t.progress+1,t.questions.pop(t.currentQuestion)),t.currentQuestion=t.randomQuestion()}randomQuestion(){const e=this;return e.questions.filter(e=>e.answered!=L["a"].Correct)[Object(F["random"])(0,e.questions.length-1)]}};U=Object(r["a"])([Object(i["a"])({components:{question:_,options:S,results:E},methods:{...Object(l["c"])("subjects",["getQuestions"])},data(){return{questions:[],currentQuestion:null,totalQuestions:0,progress:-1,EarlyFinish:!1}}})],U);var H=U,J=H,K=Object(v["a"])(J,n,o,!1,null,"1cfdf89b",null);t["default"]=K.exports},bb05:function(e,t,s){"use strict";s("25a4")},f6a0:function(e,t,s){},fae1:function(e,t,s){"use strict";s("f6a0")},fbd8:function(e,t,s){"use strict";s("18f0")}}]);
//# sourceMappingURL=test.a6ba2994.js.map