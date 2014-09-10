// Compiled by ClojureScript 0.0-2322
goog.provide('iiiiioiooooo.ui');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('dommy.core');
goog.require('dommy.template');
goog.require('goog.events.KeyHandler');
goog.require('dommy.template');
goog.require('dommy.core');
goog.require('iiiiioiooooo.style');
goog.require('iiiiioiooooo.core.structure');
goog.require('clojure.zip');
goog.require('iiiiioiooooo.style');
goog.require('cljs.core.match');
goog.require('goog.events.KeyCodes');
goog.require('iiiiioiooooo.core.structure');
goog.require('clojure.browser.event');
iiiiioiooooo.ui.mouse = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
iiiiioiooooo.ui.events = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"dragover","dragover",-1169536926),new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.Keyword(null,"touchmove","touchmove",1885249923),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),new cljs.core.Keyword(null,"connect","connect",1232828233),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"touchcancel","touchcancel",-669291029),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"pagehide","pagehide",-250178324),new cljs.core.Keyword(null,"dragenter","dragenter",-237546900),new cljs.core.Keyword(null,"DOMFocusIn","DOMFocusIn",170177329),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"hashchange","hashchange",1795201042),new cljs.core.Keyword(null,"touchend","touchend",-1574059019),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"losecapture","losecapture",-1246437481),new cljs.core.Keyword(null,"dragstart","dragstart",955864218),new cljs.core.Keyword(null,"pageshow","pageshow",908411642),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"cut","cut",-1042666209)],[new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),new cljs.core.Keyword(null,"dragleave","dragleave",-624601572),new cljs.core.Keyword(null,"touchstart","touchstart",369858804),new cljs.core.Keyword(null,"deactivate","deactivate",-1313810707),new cljs.core.Keyword(null,"help","help",-439233446),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"DOMFocusOut","DOMFocusOut",1299651608),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),new cljs.core.Keyword(null,"propertychange","propertychange",-290217588),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),new cljs.core.Keyword(null,"selectstart","selectstart",779267126),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"dblclick","dblclick",-1821330376),new cljs.core.Keyword(null,"unload","unload",-1943436244),new cljs.core.Keyword(null,"readystatechange","readystatechange",-392377168),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"keypress","keypress",1625181642),new cljs.core.Keyword(null,"popstate","popstate",942216014),new cljs.core.Keyword(null,"scroll","scroll",971553779),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"resize","resize",297367086)]);
iiiiioiooooo.ui.alphabet = cljs.core.PersistentHashMap.fromArrays([(65),(70),(74),(86),(72),(69),(85),(88),(77),(75),(90),(89),(66),(82),(76),(68),(83),(78),(81),(79),(87),(73),(67),(71),(80),(84)],[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"t","t",-1397832519)]);
iiiiioiooooo.ui.numbers = cljs.core.PersistentHashMap.fromArrays([(55),(54),(48),(50),(56),(51),(57),(53),(52),(49)],[new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"6","6",-1107752709),new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"1","1",-521621649)]);
iiiiioiooooo.ui.keycode_to_keyword = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([(186),(188),(59),(20),(27),(39),(46),(222),(144),(192),(221),(32),(40),(91),(33),(13),(109),(191),(36),(187),(219),(93),(189),(220),(34),(17),(107),(35),(19),(9),(145),(45),(16),(38),(18),(37),(8),(190)],[new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"capslock","capslock",442493366),new cljs.core.Keyword(null,"esc","esc",-1671924121),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword("iiiiioiooooo.ui","apostrophe","iiiiioiooooo.ui/apostrophe",-1585468518),new cljs.core.Keyword(null,"numlock","numlock",-1383996470),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"rightbracket","rightbracket",1179726122),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"leftmeta","leftmeta",-352234749),new cljs.core.Keyword(null,"pageup","pageup",1714543403),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"forwardslash","forwardslash",-1708238052),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"leftbracket","leftbracket",-1642269680),new cljs.core.Keyword(null,"rightmeta","rightmeta",-1579889813),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"backslash","backslash",1790786526),new cljs.core.Keyword(null,"pagedown","pagedown",-2069718984),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"scrolllock","scrolllock",-960203019),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"dot","dot",1442709401)]),iiiiioiooooo.ui.alphabet,iiiiioiooooo.ui.numbers);
iiiiioiooooo.ui.keycode_to_keyword_up = cljs.core.zipmap.call(null,cljs.core.keys.call(null,iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.call(null,(function (k){return cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"-up"));
}),cljs.core.vals.call(null,iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.keycode_to_keyword_down = cljs.core.zipmap.call(null,cljs.core.keys.call(null,iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.call(null,(function (k){return cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"-down"));
}),cljs.core.vals.call(null,iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.f = cljs.core.partial;
iiiiioiooooo.ui.k = cljs.core.comp;
iiiiioiooooo.ui.is_modifier = (function is_modifier(keycode){return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(20),null,(91),null,(93),null,(17),null,(16),null,(18),null], null), null).call(null,keycode);
});
iiiiioiooooo.ui.isnt_modifier = cljs.core.complement.call(null,iiiiioiooooo.ui.is_modifier);
iiiiioiooooo.ui.if_firefox = (function if_firefox(a,b){try{if(cljs.core.truth_(KeyEvent))
{return a;
} else
{return null;
}
}catch (e6666){if((e6666 instanceof Error))
{var er = e6666;return b;
} else
{throw e6666;

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
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));

}
});
iiiiioiooooo.ui.to_svg = (function() {
var to_svg = null;
var to_svg__0 = (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"sexp",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(50,50) scale(0.5)"], null)], null);
});
var to_svg__1 = (function (n){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"leaf",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,0) scale(0.9)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"blue",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),(100)], null)], null)], null);
});
var to_svg__2 = (function (n,c){return cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"branch",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(50,100) scale(0.9) "], null)], null),c);
});
var to_svg__3 = (function (n,oiuoi,c){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("branch folded "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))], null)], null);
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
var to_html__0 = (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sexp"], null)], null);
});
var to_html__1 = (function (n){return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("leaf "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.fn_QMARK_.call(null,n))?"fn ":((typeof n === 'string')?"string ":(((n instanceof cljs.core.Keyword))?"keyword ":null)))))], null)], null),iiiiioiooooo.ui.to_str.call(null,n));
});
var to_html__2 = (function (n,c){return cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("branch "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))], null)], null),c);
});
var to_html__3 = (function (n,oiuoi,c){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("branch folded "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))], null)], null);
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
iiiiioiooooo.ui.make_id = (function make_id(p){return ("n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,p))?cljs.core.hash.call(null,p):cljs.core.hash.call(null,clojure.zip.node.call(null,p)))));
});
iiiiioiooooo.ui.maybe = (function maybe(f,x){if(cljs.core.truth_(x))
{return f.call(null,x);
} else
{return x;
}
});
iiiiioiooooo.ui.selector = (function selector(p){return ("#root "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059)," > div:first-child ",new cljs.core.Keyword(null,">",">",-555517146)," + div"], null),p))));
});
iiiiioiooooo.ui.replacement_selector = (function() {
var replacement_selector = null;
var replacement_selector__1 = (function (p){return replacement_selector.call(null,"#root ",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059)," > div:first-child ",new cljs.core.Keyword(null,">",">",-555517146)," + div"], null),p)));
});
var replacement_selector__2 = (function (s,ps){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ps));
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
iiiiioiooooo.ui.set_attrs_BANG_ = (function set_attrs_BANG_(s,a){var seq__6671 = cljs.core.seq.call(null,s);var chunk__6672 = null;var count__6673 = (0);var i__6674 = (0);while(true){
if((i__6674 < count__6673))
{var e = cljs.core._nth.call(null,chunk__6672,i__6674);cljs.core.apply.call(null,iiiiioiooooo.ui.f.call(null,dommy.core.set_attr_BANG_,e),a);
{
var G__6675 = seq__6671;
var G__6676 = chunk__6672;
var G__6677 = count__6673;
var G__6678 = (i__6674 + (1));
seq__6671 = G__6675;
chunk__6672 = G__6676;
count__6673 = G__6677;
i__6674 = G__6678;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6671);if(temp__4126__auto__)
{var seq__6671__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6671__$1))
{var c__4290__auto__ = cljs.core.chunk_first.call(null,seq__6671__$1);{
var G__6679 = cljs.core.chunk_rest.call(null,seq__6671__$1);
var G__6680 = c__4290__auto__;
var G__6681 = cljs.core.count.call(null,c__4290__auto__);
var G__6682 = (0);
seq__6671 = G__6679;
chunk__6672 = G__6680;
count__6673 = G__6681;
i__6674 = G__6682;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__6671__$1);cljs.core.apply.call(null,iiiiioiooooo.ui.f.call(null,dommy.core.set_attr_BANG_,e),a);
{
var G__6683 = cljs.core.next.call(null,seq__6671__$1);
var G__6684 = null;
var G__6685 = (0);
var G__6686 = (0);
seq__6671 = G__6683;
chunk__6672 = G__6684;
count__6673 = G__6685;
i__6674 = G__6686;
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
var update_element_BANG___3 = (function (context,new$,old){dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,iiiiioiooooo.ui.replacement_selector.call(null,iiiiioiooooo.core.structure.path.call(null,context,old)))),cljs.core.first.call(null,iiiiioiooooo.core.structure.translate.call(null,(64),(64),iiiiioiooooo.ui.to_html,new$)));
return new$;
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
iiiiioiooooo.ui.select_state_BANG_ = (function() {
var select_state_BANG_ = null;
var select_state_BANG___1 = (function (s){return select_state_BANG_.call(null,s,cljs.core.map.call(null,cljs.core.comp.call(null,iiiiioiooooo.ui.selector,cljs.core.partial.call(null,iiiiioiooooo.core.structure.path,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(s))),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(s)));
});
var select_state_BANG___2 = (function (s,paths){return select_state_BANG_.call(null,s,paths,dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,paths))),document.querySelector(dommy.core.selector.call(null,iiiiioiooooo.ui.selector.call(null,iiiiioiooooo.core.structure.path.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(s))))));
});
var select_state_BANG___4 = (function (s,paths,selections,focus){cljs.core.last.call(null,cljs.core.map.call(null,(function (q){return dommy.core.remove_class_BANG_.call(null,q,"selected");
}),dommy.utils.__GT_Array.call(null,document.getElementsByClassName("selected"))));
cljs.core.last.call(null,cljs.core.map.call(null,(function (q){return dommy.core.remove_class_BANG_.call(null,q,"selected-parent");
}),dommy.utils.__GT_Array.call(null,document.getElementsByClassName("selected-parent"))));
var seq__6691_6695 = cljs.core.seq.call(null,selections);var chunk__6692_6696 = null;var count__6693_6697 = (0);var i__6694_6698 = (0);while(true){
if((i__6694_6698 < count__6693_6697))
{var selection_6699 = cljs.core._nth.call(null,chunk__6692_6696,i__6694_6698);if(cljs.core.truth_(selection_6699))
{dommy.core.add_class_BANG_.call(null,selection_6699,"selected");
} else
{}
{
var G__6700 = seq__6691_6695;
var G__6701 = chunk__6692_6696;
var G__6702 = count__6693_6697;
var G__6703 = (i__6694_6698 + (1));
seq__6691_6695 = G__6700;
chunk__6692_6696 = G__6701;
count__6693_6697 = G__6702;
i__6694_6698 = G__6703;
continue;
}
} else
{var temp__4126__auto___6704 = cljs.core.seq.call(null,seq__6691_6695);if(temp__4126__auto___6704)
{var seq__6691_6705__$1 = temp__4126__auto___6704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6691_6705__$1))
{var c__4290__auto___6706 = cljs.core.chunk_first.call(null,seq__6691_6705__$1);{
var G__6707 = cljs.core.chunk_rest.call(null,seq__6691_6705__$1);
var G__6708 = c__4290__auto___6706;
var G__6709 = cljs.core.count.call(null,c__4290__auto___6706);
var G__6710 = (0);
seq__6691_6695 = G__6707;
chunk__6692_6696 = G__6708;
count__6693_6697 = G__6709;
i__6694_6698 = G__6710;
continue;
}
} else
{var selection_6711 = cljs.core.first.call(null,seq__6691_6705__$1);if(cljs.core.truth_(selection_6711))
{dommy.core.add_class_BANG_.call(null,selection_6711,"selected");
} else
{}
{
var G__6712 = cljs.core.next.call(null,seq__6691_6705__$1);
var G__6713 = null;
var G__6714 = (0);
var G__6715 = (0);
seq__6691_6695 = G__6712;
chunk__6692_6696 = G__6713;
count__6693_6697 = G__6714;
i__6694_6698 = G__6715;
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
select_state_BANG_ = function(s,paths,selections,focus){
switch(arguments.length){
case 1:
return select_state_BANG___1.call(this,s);
case 2:
return select_state_BANG___2.call(this,s,paths);
case 4:
return select_state_BANG___4.call(this,s,paths,selections,focus);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_state_BANG_.cljs$core$IFn$_invoke$arity$1 = select_state_BANG___1;
select_state_BANG_.cljs$core$IFn$_invoke$arity$2 = select_state_BANG___2;
select_state_BANG_.cljs$core$IFn$_invoke$arity$4 = select_state_BANG___4;
return select_state_BANG_;
})()
;
iiiiioiooooo.ui.update_ui_fn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select","select",1147833503),iiiiioiooooo.ui.select_state_BANG_,new cljs.core.Keyword(null,"modify","modify",-1261040869),(function (s){iiiiioiooooo.ui.update_element_BANG_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(s),(cljs.core.truth_(new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(s))?new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(s):new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(s)));
return iiiiioiooooo.ui.select_state_BANG_.call(null,s);
})], null);
iiiiioiooooo.ui.display_with_latest = (function display_with_latest(n){return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(n).call(null,iiiiioiooooo.ui.update_ui_fn).call(null,n);
});
iiiiioiooooo.ui.add_eval = (function add_eval(s){return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),null,(function (s__$1,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc_in.call(null,x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null),(function (s__$2,x__$1){return iiiiioiooooo.core.structure.modified.call(null,x__$1,(function (l){iiiiioiooooo.ui.log.call(null,"evaluating! ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,l))));
return clojure.zip.insert_right.call(null,l,"qwe");
}));
})),s__$1);
}));
});
iiiiioiooooo.ui.add_info = (function add_info(s){return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),null,(function (s__$1,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc_in.call(null,x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"forwardslash","forwardslash",-1708238052),new cljs.core.Keyword(null,"forwardslash","forwardslash",-1708238052)], null),(function (s__$2,x__$1){iiiiioiooooo.ui.log.call(null,"meta: ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(x__$1))))));
return x__$1;
})),s__$1);
}));
});
iiiiioiooooo.ui.keydown = (function keydown(state,e){e.preventDefault();
return iiiiioiooooo.core.structure.update_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186)], null));
});
iiiiioiooooo.ui.keyup = (function keyup(state,e){return iiiiioiooooo.core.structure.update_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keyup","keyup",-794526927)], null));
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
iiiiioiooooo.ui.update_element_BANG_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,cljs.core.deref.call(null,state))));
return cljs.core.add_watch.call(null,state,new cljs.core.Keyword(null,"update-display","update-display",502964647),(function (k,r,o,n){return iiiiioiooooo.ui.display_with_latest.call(null,iiiiioiooooo.core.structure.latest_state.call(null,n));
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
iiiiioiooooo.ui.make_ui.call(null,null);

//# sourceMappingURL=ui.js.map