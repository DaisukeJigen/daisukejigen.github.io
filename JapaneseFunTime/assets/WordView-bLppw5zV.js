import{B as z,l as V,i as s,c as i,m as A,n as b,p as N,q as v,t as K,a as n,v as e,d as y,x as B,o as k,u as r,e as l,y as D,F as h,z as j,A as _,C as x,D as E,E as q,_ as F,r as G,G as H,H as L,I as R}from"./index-DtIWcosX.js";import{c as I}from"./conjugate-i1AHIhxI.js";var W=function(t){var o=t.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(o("tag.primary.background"),`;
    color: `).concat(o("tag.primary.color"),`;
    font-size: `).concat(o("tag.font.size"),`;
    font-weight: `).concat(o("tag.font.weight"),`;
    padding: `).concat(o("tag.padding"),`;
    border-radius: `).concat(o("tag.border.radius"),`;
    gap: `).concat(o("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(o("tag.icon.size"),`;
    width: `).concat(o("tag.icon.size"),`;
    height:`).concat(o("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(o("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(o("tag.success.background"),`;
    color: `).concat(o("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(o("tag.info.background"),`;
    color: `).concat(o("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(o("tag.warn.background"),`;
    color: `).concat(o("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(o("tag.danger.background"),`;
    color: `).concat(o("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(o("tag.secondary.background"),`;
    color: `).concat(o("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(o("tag.contrast.background"),`;
    color: `).concat(o("tag.contrast.color"),`;
}
`)},M={root:function(t){var o=t.props;return["p-tag p-component",{"p-tag-info":o.severity==="info","p-tag-success":o.severity==="success","p-tag-warn":o.severity==="warn","p-tag-danger":o.severity==="danger","p-tag-secondary":o.severity==="secondary","p-tag-contrast":o.severity==="contrast","p-tag-rounded":o.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},U=z.extend({name:"tag",theme:W,classes:M}),Q={name:"BaseTag",extends:V,props:{value:null,severity:null,rounded:Boolean,icon:String},style:U,provide:function(){return{$pcTag:this,$parentInstance:this}}},O={name:"Tag",extends:Q,inheritAttrs:!1};function X(a,t,o,d,p,m){return s(),i("span",b({class:a.cx("root")},a.ptmi("root")),[a.$slots.icon?(s(),A(N(a.$slots.icon),b({key:0,class:a.cx("icon")},a.ptm("icon")),null,16,["class"])):a.icon?(s(),i("span",b({key:1,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):v("",!0),a.value!=null||a.$slots.default?K(a.$slots,"default",{key:2},function(){return[n("span",b({class:a.cx("label")},a.ptm("label")),e(a.value),17)]}):v("",!0)],16)}O.render=X;const Y=n("br",null,null,-1),Z={class:"kanji"},nn={class:"kana"},tn=n("br",null,null,-1),on=n("br",null,null,-1),P=y({__name:"Kanji",props:{kanji:{type:Object,default:null},kana:{type:Object,default:null}},setup(a){const t=B();return k(()=>{}),(o,d)=>(s(),i(h,null,[Y,n("span",Z,e(a.kanji[r(t).uglyJmdict.text]),1),n("span",nn,"["+e(a.kana.map(p=>p[r(t).uglyJmdict.text]).join("; "))+"]",1),tn,l(r(O),{class:D(["tag",a.kanji[r(t).uglyJmdict.common]?"common":"uncommon"]),value:a.kanji[r(t).uglyJmdict.common]?"common":"uncommon"},null,8,["class","value"]),on,(s(!0),i(h,null,j(a.kanji[r(t).uglyJmdict.tags],p=>(s(),A(r(O),{key:p,value:r(t).findTag(p)},null,8,["value"]))),128))],64))}}),an={key:0},en=n("th",null,[n("span",null,"Positive")],-1),sn=n("th",null,"Negative",-1),ln={key:0},cn=n("th",null,[n("span",null,"Plain")],-1),rn={key:1},un=n("th",null,[n("span",null,"Polite")],-1),dn={key:2},pn=n("th",null,[n("span",null,"Honorific")],-1),vn={key:3},mn=n("th",null,[n("span",null,"Abrupt")],-1),_n={key:4},gn=n("th",null,[n("span",null,"Abrupt")],-1),c=y({__name:"FormTable",props:{form:{type:Object,default:null},type:{type:String,default:""}},setup(a){const t=a;return k(()=>{t.form}),(o,d)=>t.form!=null?(s(),i("table",an,[n("thead",null,[n("tr",null,[n("th",null,[n("span",null,e(t.type),1)]),en,sn])]),n("tbody",null,["plain"in t.form?(s(),i("tr",ln,[cn,n("td",null,[n("span",null,e(t.form.plain.positive.kanji),1),n("span",null,"("+e(t.form.plain.positive.kana)+")",1)]),n("td",null,[n("span",null,e(t.form.plain.negative.kanji),1),n("span",null,"("+e(t.form.plain.negative.kana)+")",1)])])):v("",!0),"polite"in t.form?(s(),i("tr",rn,[un,n("td",null,[n("span",null,e(t.form.polite.positive.kanji),1),n("span",null,"("+e(t.form.polite.positive.kana)+")",1)]),n("td",null,[n("span",null,e(t.form.polite.negative.kanji),1),n("span",null,"("+e(t.form.polite.negative.kana)+")",1)])])):v("",!0),"honorific"in t.form?(s(),i("tr",dn,[pn,n("td",null,[n("span",null,e(t.form.honorific.positive.kanji),1),n("span",null,"("+e(t.form.honorific.positive.kana)+")",1)]),n("td",null,[n("span",null,e(t.form.honorific.negative.kanji),1),n("span",null,"("+e(t.form.honorific.negative.kana)+")",1)])])):v("",!0),"abrupt"in t.form?(s(),i("tr",vn,[mn,n("td",null,[n("span",null,e(t.form.abrupt.positive.kanji),1),n("span",null,"("+e(t.form.abrupt.positive.kana)+")",1)]),n("td",null,[n("span",null,e(t.form.abrupt.negative.kanji),1),n("span",null,"("+e(t.form.abrupt.negative.kana)+")",1)])])):v("",!0),"abrupt"in t.form?(s(),i("tr",_n,[gn,n("td",null,[n("span",null,e(t.form.abrupt.positive.kanji),1),n("span",null,"("+e(t.form.abrupt.positive.kana)+")",1)]),n("td",null,[n("span",null,e(t.form.abrupt.negative.kanji),1),n("span",null,"("+e(t.form.abrupt.negative.kana)+")",1)])])):v("",!0)])])):v("",!0)}}),fn={class:"container"},hn=n("div",{class:"row"},[n("div",{class:"col"},"Conjugations")],-1),yn={class:"row"},kn={class:"col"},bn={class:"row"},jn={class:"col"},wn={class:"row"},$n={class:"col"},Jn={class:"row"},Sn={class:"col"},Tn={class:"row"},xn={class:"col"},In={class:"row"},On={class:"col"},An={class:"row"},Bn={class:"col"},Cn={class:"row"},Pn={class:"col"},zn={class:"row"},Vn={class:"col"},Nn={class:"row"},Kn={class:"col"},Dn={class:"row"},En={class:"col"},qn={class:"row"},Fn={class:"col"},Gn={class:"row"},Hn={class:"col"},Ln={class:"row"},Rn={class:"col"},Wn={class:"row"},Mn={class:"col"},Un={class:"row"},Qn={class:"col"},Xn={class:"row"},Yn={class:"col"},Zn={class:"row"},nt={class:"col"},tt=y({__name:"Conjugations",props:{kanji:{type:String,default:null},kana:{type:String,default:null},conjType:{type:String,default:"verb"}},setup(a){const t=a;k(()=>{});const o=_(()=>{const d={verb:t.kanji,reading:t.kana};switch(t.conjType){case"verb":return I.verb(d);case"iAdjective":return I.i_adjective(d);case"naAdjective":return I.na_adjective(d);default:return null}});return(d,p)=>(s(),i("div",fn,[hn,n("div",yn,[n("div",kn,[l(c,{type:"Indicative",form:o.value.indicative},null,8,["form"])])]),n("div",bn,[n("div",jn,[l(c,{type:"Presumptive",form:o.value.presumptive},null,8,["form"])])]),n("div",wn,[n("div",$n,[l(c,{type:"Progressive",form:o.value.progressive},null,8,["form"])])]),n("div",Jn,[n("div",Sn,[l(c,{type:"Imperative",form:o.value.imperative},null,8,["form"])])]),n("div",Tn,[n("div",xn,[l(c,{type:"Request",form:o.value.request},null,8,["form"])])]),n("div",In,[n("div",On,[l(c,{type:"Potential",form:o.value.potential},null,8,["form"])])]),n("div",An,[n("div",Bn,[l(c,{type:"Volitional",form:o.value.volitional},null,8,["form"])])]),n("div",Cn,[n("div",Pn,[l(c,{type:"Causitive",form:o.value.causative},null,8,["form"])])]),n("div",zn,[n("div",Vn,[l(c,{type:"Passive",form:o.value.passive},null,8,["form"])])]),n("div",Nn,[n("div",Kn,[l(c,{type:"Provisional",form:o.value.provisional},null,8,["form"])])]),n("div",Dn,[n("div",En,[l(c,{type:"Conditional",form:o.value.conditional},null,8,["form"])])]),n("div",qn,[n("div",Fn,[l(c,{type:"Adverb",form:o.value.adverb},null,8,["form"])])]),n("div",Gn,[n("div",Hn,[l(c,{type:"atrributive",form:o.value.attributive},null,8,["form"])])]),n("div",Ln,[n("div",Rn,[l(c,{type:"Become",form:o.value.become},null,8,["form"])])]),n("div",Wn,[n("div",Mn,[l(c,{type:"Looks",form:o.value.looks},null,8,["form"])])]),n("div",Un,[n("div",Qn,[l(c,{type:"Noun",form:o.value.noun},null,8,["form"])])]),n("div",Xn,[n("div",Yn,[l(c,{type:"Too",form:o.value.too},null,8,["form"])])]),n("div",Zn,[n("div",nt,[l(c,{type:"Unbearably",form:o.value.unbearably},null,8,["form"])])])]))}}),ot=a=>(E("data-v-5c9904fe"),a=a(),q(),a),at={class:"container"},et={class:"row"},st={class:"col kanjis"},lt={class:"main"},it={key:0,class:"additional"},ct={class:"col definitions"},rt={class:"col"},ut=ot(()=>n("br",null,null,-1)),dt={class:"pos"},pt={key:0,class:"col conjugations"},vt=y({__name:"DictionaryEntry",props:{word:{type:Object,default:null}},setup(a){const t=B(),o=a;k(()=>{});const d=_(()=>o.word[t.uglyJmdict.kanji][0]),p=_(()=>x.tail(o.word[t.uglyJmdict.kanji])),m=u=>o.word[t.uglyJmdict.kana].filter(S=>S[t.uglyJmdict.appliesToKanji].includes("*")||S[t.uglyJmdict.appliesToKanji].includes(u)),f=_(()=>t.findTags(x.uniq(x.flatten(o.word[t.uglyJmdict.sense].map(u=>u[t.uglyJmdict.partOfSpeech]))))),w=_(()=>f.value.map(u=>u.indexOf("Godan verb")>-1||u.indexOf("Ichidan verb")>-1).filter(u=>u).length>0),$=_(()=>f.value.map(u=>u.indexOf("i-adjective")>-1).filter(u=>u).length>0),J=_(()=>f.value.map(u=>u.indexOf("na-adjective")>-1).filter(u=>u).length>0);return(u,S)=>(s(),i("div",at,[n("div",et,[n("div",st,[n("div",lt,[l(P,{kanji:d.value,kana:m(d.value[r(t).uglyJmdict.text])},null,8,["kanji","kana"])]),p.value.length>0?(s(),i("div",it,[(s(!0),i(h,null,j(p.value,g=>(s(),A(P,{key:g.id,kanji:g,kana:m(g[r(t).uglyJmdict.text])},null,8,["kanji","kana"]))),128))])):v("",!0)]),n("div",ct,[(s(!0),i(h,null,j(a.word[r(t).uglyJmdict.sense],(g,C)=>(s(),i("div",{class:"row",key:C},[n("div",rt,[n("span",null,e(C+1)+": "+e(g[r(t).uglyJmdict.gloss].map(T=>T[r(t).uglyJmdict.text]).join("; ")),1),ut,n("span",dt,e(g[r(t).uglyJmdict.partOfSpeech].map(T=>r(t).findTag(T)).join("; ")),1)])]))),128))]),w.value||$.value||J.value?(s(),i("div",pt,[l(tt,{kanji:d.value[r(t).uglyJmdict.text],kana:m([r(t).uglyJmdict.text])[0][r(t).uglyJmdict.text]},null,8,["kanji","kana"])])):v("",!0)])]))}}),mt=F(vt,[["__scopeId","data-v-5c9904fe"]]),_t={class:"container"},gt={class:"col"},yt=y({__name:"WordView",setup(a){const t=B(),o=L(),d=G([]),p=R("notify");k(()=>{m()}),H(()=>o.params.word,(f,w)=>{m()},{deep:!0});const m=()=>{d.value=t.findWord(o.params.word.toString()),d.value.length==0&&p.error("Nothing found for "+o.params.word.toString())};return(f,w)=>(s(),i("div",_t,[(s(!0),i(h,null,j(d.value,($,J)=>(s(),i("div",{class:"row",key:J},[n("div",gt,[l(mt,{word:$},null,8,["word"])])]))),128))]))}});export{yt as default};
//# sourceMappingURL=WordView-bLppw5zV.js.map
