goog.provide('iiiiioiooooo.ui');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.browser.event');
goog.require('iiiiioiooooo.core.structure');
goog.require('clojure.zip');
goog.require('goog.events.KeyCodes');
goog.require('iiiiioiooooo.core.structure');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('iiiiioiooooo.style');
goog.require('iiiiioiooooo.style');
goog.require('cljs.core.match');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('goog.events.KeyHandler');
iiiiioiooooo.ui.mouse = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([0,0], true));
iiiiioiooooo.ui.events = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"submit","submit",4417336202),new cljs.core.Keyword(null,"dragstart","dragstart",721070880),new cljs.core.Keyword(null,"cut","cut",1014003124),new cljs.core.Keyword(null,"losecapture","losecapture",2957427203),new cljs.core.Keyword(null,"touchmove","touchmove",1378440962),new cljs.core.Keyword(null,"touchcancel","touchcancel",3141883371),new cljs.core.Keyword(null,"paste","paste",1120342533),new cljs.core.Keyword(null,"pageshow","pageshow",1874284926),new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),new cljs.core.Keyword(null,"mouseout","mouseout",894298107),new cljs.core.Keyword(null,"dragover","dragover",4468024186),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,"load","load",1017231448),new cljs.core.Keyword(null,"touchend","touchend",4489339054),new cljs.core.Keyword(null,"hashchange","hashchange",2126071216),new cljs.core.Keyword(null,"focus","focus",1111509066),new cljs.core.Keyword(null,"keydown","keydown",4493897459),new cljs.core.Keyword(null,"connect","connect",1965255772),new cljs.core.Keyword(null,"drop","drop",1016996449),new cljs.core.Keyword(null,"pagehide","pagehide",1873957827),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"copy","copy",1016963815),new cljs.core.Keyword(null,"DOMFocusIn","DOMFocusIn",1506926605),new cljs.core.Keyword(null,"dragenter","dragenter",707980694)],[new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),new cljs.core.Keyword(null,"popstate","popstate",1685049426),new cljs.core.Keyword(null,"resize","resize",4374433830),new cljs.core.Keyword(null,"keypress","keypress",1530666166),new cljs.core.Keyword(null,"touchstart","touchstart",3730278389),new cljs.core.Keyword(null,"keyup","keyup",1115849900),new cljs.core.Keyword(null,"propertychange","propertychange",3876155703),new cljs.core.Keyword(null,"scroll","scroll",4401191487),new cljs.core.Keyword(null,"help","help",1017103027),new cljs.core.Keyword(null,"DOMFocusOut","DOMFocusOut",3412701706),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),new cljs.core.Keyword(null,"dblclick","dblclick",3463991820),new cljs.core.Keyword(null,"blur","blur",1016931289),new cljs.core.Keyword(null,"readystatechange","readystatechange",3888786800),new cljs.core.Keyword(null,"unload","unload",4468429425),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"deactivate","deactivate",3312108518),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"dragleave","dragleave",714159477),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"selectstart","selectstart",1247821912)]);
iiiiioiooooo.ui.alphabet = cljs.core.PersistentHashMap.fromArrays([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"c","c",1013904341),new cljs.core.Keyword(null,"d","d",1013904342),new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"f","f",1013904344),new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"h","h",1013904346),new cljs.core.Keyword(null,"i","i",1013904347),new cljs.core.Keyword(null,"j","j",1013904348),new cljs.core.Keyword(null,"k","k",1013904349),new cljs.core.Keyword(null,"l","l",1013904350),new cljs.core.Keyword(null,"m","m",1013904351),new cljs.core.Keyword(null,"n","n",1013904352),new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"q","q",1013904355),new cljs.core.Keyword(null,"r","r",1013904356),new cljs.core.Keyword(null,"s","s",1013904357),new cljs.core.Keyword(null,"t","t",1013904358),new cljs.core.Keyword(null,"u","u",1013904359),new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"z","z",1013904364)]);
iiiiioiooooo.ui.numbers = cljs.core.PersistentHashMap.fromArrays([48,49,50,51,52,53,54,55,56,57],[new cljs.core.Keyword(null,"0","0",1013904290),new cljs.core.Keyword(null,"1","1",1013904291),new cljs.core.Keyword(null,"2","2",1013904292),new cljs.core.Keyword(null,"3","3",1013904293),new cljs.core.Keyword(null,"4","4",1013904294),new cljs.core.Keyword(null,"5","5",1013904295),new cljs.core.Keyword(null,"6","6",1013904296),new cljs.core.Keyword(null,"7","7",1013904297),new cljs.core.Keyword(null,"8","8",1013904298),new cljs.core.Keyword(null,"9","9",1013904299)]);
iiiiioiooooo.ui.keycode_to_keyword = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([32,192,33,34,35,36,37,38,39,8,40,9,107,13,45,109,46,16,144,17,145,18,19,20,186,27,59,91,187,219,188,220,93,189,221,190,222,191],[new cljs.core.Keyword(null,"space","space",1123542136),new cljs.core.Keyword(null,"tilde","tilde",1124267722),new cljs.core.Keyword(null,"pageup","pageup",4313119964),new cljs.core.Keyword(null,"pagedown","pagedown",1873845027),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"home","home",1017112657),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"backspace","backspace",2367412209),new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"tab","tab",1014018823),new cljs.core.Keyword(null,"equals","equals",4013388593),new cljs.core.Keyword(null,"enter","enter",1110571594),new cljs.core.Keyword(null,"insert","insert",4125079083),new cljs.core.Keyword(null,"minus","minus",1117805538),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"shift","shift",1123311604),new cljs.core.Keyword(null,"numlock","numlock",3308663075),new cljs.core.Keyword(null,"ctrl","ctrl",1016968669),new cljs.core.Keyword(null,"scrolllock","scrolllock",1080914154),new cljs.core.Keyword(null,"alt","alt",1014000923),new cljs.core.Keyword(null,"break","break",1107905649),new cljs.core.Keyword(null,"capslock","capslock",962976510),new cljs.core.Keyword(null,"semicolon","semicolon",4594780195),new cljs.core.Keyword(null,"esc","esc",1014004967),new cljs.core.Keyword(null,"semicolon","semicolon",4594780195),new cljs.core.Keyword(null,"leftmeta","leftmeta",2733067774),new cljs.core.Keyword(null,"equals","equals",4013388593),new cljs.core.Keyword(null,"leftbracket","leftbracket",2606840371),new cljs.core.Keyword(null,"comma","comma",1108747847),new cljs.core.Keyword(null,"backslash","backslash",2367293544),new cljs.core.Keyword(null,"rightmeta","rightmeta",3740491155),new cljs.core.Keyword(null,"minus","minus",1117805538),new cljs.core.Keyword(null,"rightbracket","rightbracket",1525319294),new cljs.core.Keyword(null,"dot","dot",1014003899),new cljs.core.Keyword("iiiiioiooooo.ui","apostrophe","iiiiioiooooo.ui/apostrophe",3789673868),new cljs.core.Keyword(null,"forwardslash","forwardslash",753431882)]),iiiiioiooooo.ui.alphabet,iiiiioiooooo.ui.numbers);
iiiiioiooooo.ui.keycode_to_keyword_up = cljs.core.zipmap.call(null,cljs.core.keys.call(null,iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.call(null,(function (k){return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-up")].join(''));
}),cljs.core.vals.call(null,iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.keycode_to_keyword_down = cljs.core.zipmap.call(null,cljs.core.keys.call(null,iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.call(null,(function (k){return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-down")].join(''));
}),cljs.core.vals.call(null,iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.is_modifier = (function is_modifier(keycode){return cljs.core.PersistentHashSet.fromArray([16,null,17,null,18,null,20,null,91,null,93,null], true).call(null,keycode);
});
iiiiioiooooo.ui.isnt_modifier = cljs.core.complement.call(null,iiiiioiooooo.ui.is_modifier);
iiiiioiooooo.ui.if_firefox = (function if_firefox(a,b){try{if(cljs.core.truth_(KeyEvent))
{return a;
} else
{return null;
}
}catch (e10322){if((e10322 instanceof Error))
{var er = e10322;return b;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10322;
} else
{return null;
}
}
}});
iiiiioiooooo.ui.log = (function() {
var log = null;
var log__1 = (function (m){return console.log(m);
});
var log__2 = (function (m1,m2){return console.log(m1,m2);
});
var log__3 = (function (m1,m2,m3){return console.log(m1,m2,m3);
});
var log__4 = (function (m1,m2,m3,m4){return console.log(m1,m2,m3,m4);
});
log = function(m1,m2,m3,m4){
switch(arguments.length){
case 1:
return log__1.call(this,m1);
case 2:
return log__2.call(this,m1,m2);
case 3:
return log__3.call(this,m1,m2,m3);
case 4:
return log__4.call(this,m1,m2,m3,m4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$core$IFn$_invoke$arity$1 = log__1;
log.cljs$core$IFn$_invoke$arity$2 = log__2;
log.cljs$core$IFn$_invoke$arity$3 = log__3;
log.cljs$core$IFn$_invoke$arity$4 = log__4;
return log;
})()
;
/**
* Do the function f at regular intervals and send the results to g, starting with x
*/
iiiiioiooooo.ui.thread_STAR_ = (function() {
var thread_STAR_ = null;
var thread_STAR___3 = (function (f,x,n){return window.setTimeout((function (x__$1){return thread_STAR_.call(null,f,f.call(null,x__$1),n);
}),n,x);
});
var thread_STAR___4 = (function (g,f,x,n){return window.setTimeout((function (x__$1){g.call(null,x__$1);
return thread_STAR_.call(null,g,f,f.call(null,x__$1),n);
}),n,x);
});
thread_STAR_ = function(g,f,x,n){
switch(arguments.length){
case 3:
return thread_STAR___3.call(this,g,f,x);
case 4:
return thread_STAR___4.call(this,g,f,x,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thread_STAR_.cljs$core$IFn$_invoke$arity$3 = thread_STAR___3;
thread_STAR_.cljs$core$IFn$_invoke$arity$4 = thread_STAR___4;
return thread_STAR_;
})()
;
/**
* Do the function f at regular intervals and send the results to g, starting with x
*/
iiiiioiooooo.ui.repeat_STAR_ = (function repeat_STAR_(f,x,n){return window.setInterval(f,n,x);
});
iiiiioiooooo.ui.to_str = (function to_str(n){if((cljs.core.fn_QMARK_.call(null,n)) && (!(cljs.core.associative_QMARK_.call(null,n))))
{return n.name.replace("_","-");
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return [cljs.core.str(n)].join('');
} else
{return null;
}
}
});
iiiiioiooooo.ui.to_svg = (function() {
var to_svg = null;
var to_svg__0 = (function (){return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"g","g",1013904345),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"sexp",new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(50,50) scale(0.5)"], true)], true);
});
var to_svg__1 = (function (n){return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"g","g",1013904345),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"leaf",new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(0,0) scale(0.9)"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"circle","circle",3948654658),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"stroke","stroke",4416891306),"blue",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),20,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"r","r",1013904356),100], true)], true)], true);
});
var to_svg__2 = (function (n,c){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"g","g",1013904345),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"branch",new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(50,100) scale(0.9) "], true)], true),c);
});
var to_svg__3 = (function (n,oiuoi,c){return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"g","g",1013904345),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("branch folded "),cljs.core.str(n)].join('')], true)], true);
});
to_svg = function(n,oiuoi,c){
switch(arguments.length){
case 0:
return to_svg__0.call(this);
case 1:
return to_svg__1.call(this,n);
case 2:
return to_svg__2.call(this,n,oiuoi);
case 3:
return to_svg__3.call(this,n,oiuoi,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_svg.cljs$core$IFn$_invoke$arity$0 = to_svg__0;
to_svg.cljs$core$IFn$_invoke$arity$1 = to_svg__1;
to_svg.cljs$core$IFn$_invoke$arity$2 = to_svg__2;
to_svg.cljs$core$IFn$_invoke$arity$3 = to_svg__3;
return to_svg;
})()
;
iiiiioiooooo.ui.to_html = (function() {
var to_html = null;
var to_html__0 = (function (){return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"sexp"], true)], true);
});
var to_html__1 = (function (n){return cljs.core.conj.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("leaf "),cljs.core.str(((cljs.core.fn_QMARK_.call(null,n))?"fn ":((typeof n === 'string')?"string ":null)))].join('')], true)], true),iiiiioiooooo.ui.to_str.call(null,n));
});
var to_html__2 = (function (n,c){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("branch "),cljs.core.str(n)].join('')], true)], true),c);
});
var to_html__3 = (function (n,oiuoi,c){return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("branch folded "),cljs.core.str(n)].join('')], true)], true);
});
to_html = function(n,oiuoi,c){
switch(arguments.length){
case 0:
return to_html__0.call(this);
case 1:
return to_html__1.call(this,n);
case 2:
return to_html__2.call(this,n,oiuoi);
case 3:
return to_html__3.call(this,n,oiuoi,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_html.cljs$core$IFn$_invoke$arity$0 = to_html__0;
to_html.cljs$core$IFn$_invoke$arity$1 = to_html__1;
to_html.cljs$core$IFn$_invoke$arity$2 = to_html__2;
to_html.cljs$core$IFn$_invoke$arity$3 = to_html__3;
return to_html;
})()
;
iiiiioiooooo.ui.make_id = (function make_id(p){return [cljs.core.str("n"),cljs.core.str((cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,p))?cljs.core.hash.call(null,p):cljs.core.hash.call(null,clojure.zip.node.call(null,p))))].join('');
});
iiiiioiooooo.ui.maybe = (function maybe(f,x){if(cljs.core.truth_(x))
{return f.call(null,x);
} else
{return x;
}
});
iiiiioiooooo.ui.selector = (function selector(p){return [cljs.core.str("#root > div:first-child "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"down","down",1016993812)," > div:first-child ",new cljs.core.Keyword(null,"right","right",1122416014)," + div"], true),p)))].join('');
});
iiiiioiooooo.ui.replacement_selector = (function() {
var replacement_selector = null;
var replacement_selector__1 = (function (p){return replacement_selector.call(null,"#root > div:first-child ",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"down","down",1016993812)," > div:first-child ",new cljs.core.Keyword(null,"right","right",1122416014)," + div"], true),p)));
});
var replacement_selector__2 = (function (s,ps){return [cljs.core.str(s),cljs.core.str(ps)].join('');
});
replacement_selector = function(s,ps){
switch(arguments.length){
case 1:
return replacement_selector__1.call(this,s);
case 2:
return replacement_selector__2.call(this,s,ps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replacement_selector.cljs$core$IFn$_invoke$arity$1 = replacement_selector__1;
replacement_selector.cljs$core$IFn$_invoke$arity$2 = replacement_selector__2;
return replacement_selector;
})()
;
iiiiioiooooo.ui.set_attrs_BANG_ = (function set_attrs_BANG_(s,a){var seq__10327 = cljs.core.seq.call(null,s);var chunk__10328 = null;var count__10329 = 0;var i__10330 = 0;while(true){
if((i__10330 < count__10329))
{var e = cljs.core._nth.call(null,chunk__10328,i__10330);cljs.core.apply.call(null,cljs.core.partial.call(null,dommy.core.set_attr_BANG_,e),a);
{
var G__10331 = seq__10327;
var G__10332 = chunk__10328;
var G__10333 = count__10329;
var G__10334 = (i__10330 + 1);
seq__10327 = G__10331;
chunk__10328 = G__10332;
count__10329 = G__10333;
i__10330 = G__10334;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10327);if(temp__4092__auto__)
{var seq__10327__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10327__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__10327__$1);{
var G__10335 = cljs.core.chunk_rest.call(null,seq__10327__$1);
var G__10336 = c__3668__auto__;
var G__10337 = cljs.core.count.call(null,c__3668__auto__);
var G__10338 = 0;
seq__10327 = G__10335;
chunk__10328 = G__10336;
count__10329 = G__10337;
i__10330 = G__10338;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__10327__$1);cljs.core.apply.call(null,cljs.core.partial.call(null,dommy.core.set_attr_BANG_,e),a);
{
var G__10339 = cljs.core.next.call(null,seq__10327__$1);
var G__10340 = null;
var G__10341 = 0;
var G__10342 = 0;
seq__10327 = G__10339;
chunk__10328 = G__10340;
count__10329 = G__10341;
i__10330 = G__10342;
continue;
}
}
} else
{return null;
}
}
break;
}
});
iiiiioiooooo.ui.update_element_BANG_ = (function() {
var update_element_BANG_ = null;
var update_element_BANG___1 = (function (context){return update_element_BANG_.call(null,context,context,context);
});
var update_element_BANG___3 = (function (context,new$,old){iiiiioiooooo.ui.log.call(null,"  replace: ",cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,16,[cljs.core.str(old)].join(''))));
iiiiioiooooo.ui.log.call(null,"  replace ",document.querySelector(dommy.core.selector.call(null,iiiiioiooooo.ui.replacement_selector.call(null,iiiiioiooooo.core.structure.path.call(null,context,old)))));
iiiiioiooooo.ui.log.call(null,"  with ",cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,16,[cljs.core.str(new$)].join(''))));
dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,iiiiioiooooo.ui.replacement_selector.call(null,iiiiioiooooo.core.structure.path.call(null,context,old)))),cljs.core.first.call(null,iiiiioiooooo.core.structure.translate.call(null,64,64,iiiiioiooooo.ui.to_html,new$)));
return iiiiioiooooo.ui.s;
});
update_element_BANG_ = function(context,new$,old){
switch(arguments.length){
case 1:
return update_element_BANG___1.call(this,context);
case 3:
return update_element_BANG___3.call(this,context,new$,old);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_element_BANG_.cljs$core$IFn$_invoke$arity$1 = update_element_BANG___1;
update_element_BANG_.cljs$core$IFn$_invoke$arity$3 = update_element_BANG___3;
return update_element_BANG_;
})()
;
iiiiioiooooo.ui.select_state = (function() {
var select_state = null;
var select_state__1 = (function (s){return select_state.call(null,s,cljs.core.map.call(null,cljs.core.comp.call(null,iiiiioiooooo.ui.selector,cljs.core.partial.call(null,iiiiioiooooo.core.structure.path,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(s))),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(s)));
});
var select_state__2 = (function (s,paths){return select_state.call(null,s,paths,dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,paths))),document.querySelector(dommy.core.selector.call(null,iiiiioiooooo.ui.selector.call(null,iiiiioiooooo.core.structure.path.call(null,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(s))))));
});
var select_state__4 = (function (s,paths,selections,focus){iiiiioiooooo.ui.log.call(null,"  focus: ",focus);
iiiiioiooooo.ui.log.call(null,"  node: ",cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,64,[cljs.core.str(clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(s)))].join(''))),[cljs.core.str(cljs.core.meta.call(null,clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(s))))].join(''));
cljs.core.last.call(null,cljs.core.map.call(null,(function (q){return dommy.core.remove_class_BANG_.call(null,q,"selected");
}),dommy.utils.__GT_Array.call(null,document.getElementsByClassName("selected"))));
cljs.core.last.call(null,cljs.core.map.call(null,(function (q){return dommy.core.remove_class_BANG_.call(null,q,"selected-parent");
}),dommy.utils.__GT_Array.call(null,document.getElementsByClassName("selected-parent"))));
var seq__10347_10351 = cljs.core.seq.call(null,selections);var chunk__10348_10352 = null;var count__10349_10353 = 0;var i__10350_10354 = 0;while(true){
if((i__10350_10354 < count__10349_10353))
{var selection_10355 = cljs.core._nth.call(null,chunk__10348_10352,i__10350_10354);if(cljs.core.truth_(selection_10355))
{dommy.core.add_class_BANG_.call(null,selection_10355,"selected");
} else
{}
{
var G__10356 = seq__10347_10351;
var G__10357 = chunk__10348_10352;
var G__10358 = count__10349_10353;
var G__10359 = (i__10350_10354 + 1);
seq__10347_10351 = G__10356;
chunk__10348_10352 = G__10357;
count__10349_10353 = G__10358;
i__10350_10354 = G__10359;
continue;
}
} else
{var temp__4092__auto___10360 = cljs.core.seq.call(null,seq__10347_10351);if(temp__4092__auto___10360)
{var seq__10347_10361__$1 = temp__4092__auto___10360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10347_10361__$1))
{var c__3668__auto___10362 = cljs.core.chunk_first.call(null,seq__10347_10361__$1);{
var G__10363 = cljs.core.chunk_rest.call(null,seq__10347_10361__$1);
var G__10364 = c__3668__auto___10362;
var G__10365 = cljs.core.count.call(null,c__3668__auto___10362);
var G__10366 = 0;
seq__10347_10351 = G__10363;
chunk__10348_10352 = G__10364;
count__10349_10353 = G__10365;
i__10350_10354 = G__10366;
continue;
}
} else
{var selection_10367 = cljs.core.first.call(null,seq__10347_10361__$1);if(cljs.core.truth_(selection_10367))
{dommy.core.add_class_BANG_.call(null,selection_10367,"selected");
} else
{}
{
var G__10368 = cljs.core.next.call(null,seq__10347_10361__$1);
var G__10369 = null;
var G__10370 = 0;
var G__10371 = 0;
seq__10347_10351 = G__10368;
chunk__10348_10352 = G__10369;
count__10349_10353 = G__10370;
i__10350_10354 = G__10371;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(focus))
{return dommy.core.add_class_BANG_.call(null,focus,"selected");
} else
{return null;
}
});
select_state = function(s,paths,selections,focus){
switch(arguments.length){
case 1:
return select_state__1.call(this,s);
case 2:
return select_state__2.call(this,s,paths);
case 4:
return select_state__4.call(this,s,paths,selections,focus);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_state.cljs$core$IFn$_invoke$arity$1 = select_state__1;
select_state.cljs$core$IFn$_invoke$arity$2 = select_state__2;
select_state.cljs$core$IFn$_invoke$arity$4 = select_state__4;
return select_state;
})()
;
iiiiioiooooo.ui.keydown = (function keydown(state,e){e.preventDefault();
return iiiiioiooooo.core.structure.update_BANG_.call(null,state,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",1014010321),iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",4493867070),e.keyCode,new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"keydown","keydown",4493897459)], true));
});
iiiiioiooooo.ui.keyup = (function keyup(state,e){return iiiiioiooooo.core.structure.update_BANG_.call(null,state,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",1014010321),iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",4493867070),e.keyCode,new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"keyup","keyup",1115849900)], true));
});
iiiiioiooooo.ui.update_ui_fn = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"select","select",4402849902),iiiiioiooooo.ui.select_state,new cljs.core.Keyword(null,"modify","modify",4240075820),(function (s){iiiiioiooooo.ui.log.call(null,"  modifying ",cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,16,[cljs.core.str(new cljs.core.Keyword(null,"modified","modified",4693358139).cljs$core$IFn$_invoke$arity$1(s))].join(''))));
iiiiioiooooo.ui.update_element_BANG_.call(null,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(s),(cljs.core.truth_(new cljs.core.Keyword(null,"modified","modified",4693358139).cljs$core$IFn$_invoke$arity$1(s))?new cljs.core.Keyword(null,"modified","modified",4693358139).cljs$core$IFn$_invoke$arity$1(s):new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(s)));
return iiiiioiooooo.ui.select_state.call(null,s);
})], true);
iiiiioiooooo.ui.display_with_latest = (function display_with_latest(n){return new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(n).call(null,iiiiioiooooo.ui.update_ui_fn).call(null,n);
});
iiiiioiooooo.ui.add_eval = (function add_eval(s){return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),null,(function (s__$1,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc_in.call(null,x,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"keymap","keymap",4174211599),new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"e","e",1013904343)], true),(function (s__$2,x__$1){return iiiiioiooooo.core.structure.modified.call(null,x__$1,(function (l){iiiiioiooooo.ui.log.call(null,"evaluating! ",[cljs.core.str(clojure.zip.node.call(null,l))].join(''));
return clojure.zip.insert_right.call(null,l,"qwe");
}));
})),s__$1);
}));
});
iiiiioiooooo.ui.add_info = (function add_info(s){return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),null,(function (s__$1,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc_in.call(null,x,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"keymap","keymap",4174211599),new cljs.core.Keyword(null,"shift","shift",1123311604),new cljs.core.Keyword(null,"forwardslash","forwardslash",753431882),new cljs.core.Keyword(null,"forwardslash","forwardslash",753431882)], true),(function (s__$2,x__$1){iiiiioiooooo.ui.log.call(null,"meta: ",[cljs.core.str(cljs.core.meta.call(null,clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(x__$1))))].join(''));
return x__$1;
})),s__$1);
}));
});
iiiiioiooooo.ui.make_ui = (function() {
var make_ui = null;
var make_ui__1 = (function (e){return make_ui.call(null,e,cljs.core.atom.call(null,iiiiioiooooo.ui.add_eval.call(null,iiiiioiooooo.ui.add_info.call(null,iiiiioiooooo.core.structure.default_state.call(null)))));
});
var make_ui__2 = (function (e,state){iiiiioiooooo.ui.log.call(null,"make ui");
window.onkeydown = (function (e__$1){return iiiiioiooooo.ui.keydown.call(null,state,e__$1);
});
window.onkeyup = (function (e__$1){return iiiiioiooooo.ui.keyup.call(null,state,e__$1);
});
iiiiioiooooo.ui.update_element_BANG_.call(null,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,cljs.core.deref.call(null,state))));
return cljs.core.add_watch.call(null,state,new cljs.core.Keyword(null,"update-display","update-display",4608249648),(function (k,r,o,n){return iiiiioiooooo.ui.display_with_latest.call(null,iiiiioiooooo.core.structure.latest_state.call(null,n));
}));
});
make_ui = function(e,state){
switch(arguments.length){
case 1:
return make_ui__1.call(this,e);
case 2:
return make_ui__2.call(this,e,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_ui.cljs$core$IFn$_invoke$arity$1 = make_ui__1;
make_ui.cljs$core$IFn$_invoke$arity$2 = make_ui__2;
return make_ui;
})()
;
iiiiioiooooo.ui.log.call(null,"huhhh");
window.onload = iiiiioiooooo.ui.make_ui;

//@ sourceMappingURL=ui.js.map