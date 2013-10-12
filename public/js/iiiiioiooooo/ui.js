goog.provide('iiiiioiooooo.ui');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.zip');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('clojure.browser.event');
goog.require('iiiiioiooooo.style');
goog.require('iiiiioiooooo.core.structure');
iiiiioiooooo.ui.mouse = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.fromArray([0,0], true));
iiiiioiooooo.ui.events = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$94,cljs.core.constant$keyword$95,cljs.core.constant$keyword$96,cljs.core.constant$keyword$97,cljs.core.constant$keyword$98,cljs.core.constant$keyword$99,cljs.core.constant$keyword$100,cljs.core.constant$keyword$101,cljs.core.constant$keyword$102,cljs.core.constant$keyword$93,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104,cljs.core.constant$keyword$105,cljs.core.constant$keyword$106,cljs.core.constant$keyword$107,cljs.core.constant$keyword$45,cljs.core.constant$keyword$71,cljs.core.constant$keyword$108,cljs.core.constant$keyword$109,cljs.core.constant$keyword$110,cljs.core.constant$keyword$111,cljs.core.constant$keyword$112,cljs.core.constant$keyword$113,cljs.core.constant$keyword$114],[cljs.core.constant$keyword$115,cljs.core.constant$keyword$116,cljs.core.constant$keyword$117,cljs.core.constant$keyword$118,cljs.core.constant$keyword$119,cljs.core.constant$keyword$72,cljs.core.constant$keyword$120,cljs.core.constant$keyword$121,cljs.core.constant$keyword$64,cljs.core.constant$keyword$122,cljs.core.constant$keyword$123,cljs.core.constant$keyword$124,cljs.core.constant$keyword$125,cljs.core.constant$keyword$126,cljs.core.constant$keyword$127,cljs.core.constant$keyword$92,cljs.core.constant$keyword$128,cljs.core.constant$keyword$129,cljs.core.constant$keyword$130,cljs.core.constant$keyword$131,cljs.core.constant$keyword$132,cljs.core.constant$keyword$133,cljs.core.constant$keyword$47,cljs.core.constant$keyword$134]);
iiiiioiooooo.ui.alphabet = cljs.core.PersistentHashMap.fromArrays([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],[cljs.core.constant$keyword$135,cljs.core.constant$keyword$136,cljs.core.constant$keyword$74,cljs.core.constant$keyword$137,cljs.core.constant$keyword$138,cljs.core.constant$keyword$139,cljs.core.constant$keyword$140,cljs.core.constant$keyword$58,cljs.core.constant$keyword$141,cljs.core.constant$keyword$80,cljs.core.constant$keyword$142,cljs.core.constant$keyword$25,cljs.core.constant$keyword$143,cljs.core.constant$keyword$78,cljs.core.constant$keyword$77,cljs.core.constant$keyword$144,cljs.core.constant$keyword$145,cljs.core.constant$keyword$26,cljs.core.constant$keyword$79,cljs.core.constant$keyword$146,cljs.core.constant$keyword$147,cljs.core.constant$keyword$148,cljs.core.constant$keyword$149,cljs.core.constant$keyword$150,cljs.core.constant$keyword$151,cljs.core.constant$keyword$152]);
iiiiioiooooo.ui.numbers = cljs.core.PersistentHashMap.fromArrays([48,49,50,51,52,53,54,55,56,57],[cljs.core.constant$keyword$56,cljs.core.constant$keyword$153,cljs.core.constant$keyword$154,cljs.core.constant$keyword$155,cljs.core.constant$keyword$156,cljs.core.constant$keyword$157,cljs.core.constant$keyword$158,cljs.core.constant$keyword$159,cljs.core.constant$keyword$160,cljs.core.constant$keyword$161]);
iiiiioiooooo.ui.keycode_to_keyword = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([32,192,33,34,35,36,37,38,39,8,40,9,107,13,45,109,46,16,144,17,145,18,19,20,186,27,59,91,187,219,188,220,93,189,221,190,222,191],[cljs.core.constant$keyword$60,cljs.core.constant$keyword$162,cljs.core.constant$keyword$163,cljs.core.constant$keyword$164,cljs.core.constant$keyword$29,cljs.core.constant$keyword$165,cljs.core.constant$keyword$61,cljs.core.constant$keyword$62,cljs.core.constant$keyword$36,cljs.core.constant$keyword$53,cljs.core.constant$keyword$35,cljs.core.constant$keyword$55,cljs.core.constant$keyword$166,cljs.core.constant$keyword$167,cljs.core.constant$keyword$168,cljs.core.constant$keyword$169,cljs.core.constant$keyword$170,cljs.core.constant$keyword$59,cljs.core.constant$keyword$171,cljs.core.constant$keyword$57,cljs.core.constant$keyword$172,cljs.core.constant$keyword$54,cljs.core.constant$keyword$173,cljs.core.constant$keyword$174,cljs.core.constant$keyword$175,cljs.core.constant$keyword$84,cljs.core.constant$keyword$175,cljs.core.constant$keyword$176,cljs.core.constant$keyword$166,cljs.core.constant$keyword$177,cljs.core.constant$keyword$178,cljs.core.constant$keyword$179,cljs.core.constant$keyword$180,cljs.core.constant$keyword$169,cljs.core.constant$keyword$181,cljs.core.constant$keyword$182,cljs.core.constant$keyword$183,cljs.core.constant$keyword$184]),iiiiioiooooo.ui.alphabet,iiiiioiooooo.ui.numbers], 0));
iiiiioiooooo.ui.keycode_to_keyword_up = cljs.core.zipmap(cljs.core.keys(iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(k)),cljs.core.str("-up")].join(''));
}),cljs.core.vals(iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.keycode_to_keyword_down = cljs.core.zipmap(cljs.core.keys(iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(k)),cljs.core.str("-down")].join(''));
}),cljs.core.vals(iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.is_modifier = (function is_modifier(keycode){return cljs.core.PersistentHashSet.fromArray([16,null,17,null,18,null,20,null,91,null,93,null], true).call(null,keycode);
});
iiiiioiooooo.ui.isnt_modifier = cljs.core.complement(iiiiioiooooo.ui.is_modifier);
iiiiioiooooo.ui.if_firefox = (function if_firefox(a,b){try{if(cljs.core.truth_(KeyEvent))
{return a;
} else
{return null;
}
}catch (e4451){if((e4451 instanceof Error))
{var er = e4451;return b;
} else
{if(cljs.core.constant$keyword$5)
{throw e4451;
} else
{return null;
}
}
}});
/**
* @param {...*} var_args
*/
iiiiioiooooo.ui.log = (function() {
var log = null;
var log__1 = (function() { 
var G__4452__delegate = function (m){return console.log(m);
};
var G__4452 = function (var_args){
var m = null;if (arguments.length > 0) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__4452__delegate.call(this,m);};
G__4452.cljs$lang$maxFixedArity = 0;
G__4452.cljs$lang$applyTo = (function (arglist__4453){
var m = cljs.core.seq(arglist__4453);
return G__4452__delegate(m);
});
G__4452.cljs$core$IFn$_invoke$arity$variadic = G__4452__delegate;
return G__4452;
})()
;
var log__2 = (function (m1,m2){return console.log(m1,m2);
});
var log__3 = (function (m1,m2,m3){return console.log(m1,m2,m3);
});
var log__4 = (function (m1,m2,m3,m4){return console.log(m1,m2,m3,m4);
});
log = function(m1,m2,m3,var_args){
var m4 = var_args;
switch(arguments.length){
default:
return log__1.cljs$core$IFn$_invoke$arity$variadic(m1,m2,m3, cljs.core.array_seq(arguments, 4));
case 2:
return log__2.call(this,m1,m2);
case 3:
return log__3.call(this,m1,m2,m3);
case 4:
return log__4.call(this,m1,m2,m3,m4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$lang$maxFixedArity = 4;
log.cljs$lang$applyTo = log__1.cljs$lang$applyTo;
log.cljs$core$IFn$_invoke$arity$variadic = log__1.cljs$core$IFn$_invoke$arity$variadic;
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
var thread_STAR___3 = (function (f,x,n){return window.setTimeout((function (x__$1){return thread_STAR_.cljs$core$IFn$_invoke$arity$3(f,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x__$1) : f.call(null,x__$1)),n);
}),n,x);
});
var thread_STAR___4 = (function (g,f,x,n){return window.setTimeout((function (x__$1){(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x__$1) : g.call(null,x__$1));
return thread_STAR_.cljs$core$IFn$_invoke$arity$4(g,f,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x__$1) : f.call(null,x__$1)),n);
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
iiiiioiooooo.ui.to_str = (function to_str(n){if((function (){var and__3941__auto__ = cljs.core.fn_QMARK_(n);if(and__3941__auto__)
{return !(cljs.core.associative_QMARK_(n));
} else
{return and__3941__auto__;
}
})())
{return n.name.replace("_","-");
} else
{if(cljs.core.constant$keyword$40)
{return [cljs.core.str(n)].join('');
} else
{return null;
}
}
});
iiiiioiooooo.ui.to_svg = (function() {
var to_svg = null;
var to_svg__0 = (function (){return cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$140,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,"sexp"], true)], true);
});
var to_svg__1 = (function (n){return cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$140,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,"leaf"], true),cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$185,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$150,0,cljs.core.constant$keyword$151,0,cljs.core.constant$keyword$26,16], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$186,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$187,"red"], true),[cljs.core.str(n)].join('')], true)], true);
});
var to_svg__2 = (function (n,c){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$140,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,"branch"], true)], true),c);
});
to_svg = function(n,c){
switch(arguments.length){
case 0:
return to_svg__0.call(this);
case 1:
return to_svg__1.call(this,n);
case 2:
return to_svg__2.call(this,n,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_svg.cljs$core$IFn$_invoke$arity$0 = to_svg__0;
to_svg.cljs$core$IFn$_invoke$arity$1 = to_svg__1;
to_svg.cljs$core$IFn$_invoke$arity$2 = to_svg__2;
return to_svg;
})()
;
iiiiioiooooo.ui.to_html = (function() {
var to_html = null;
var to_html__0 = (function (){return cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$32,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,"sexp"], true)], true);
});
var to_html__1 = (function (n){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$32,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,[cljs.core.str("leaf "),cljs.core.str(((cljs.core.fn_QMARK_(n))?"fn ":((typeof n === 'string')?"string ":null)))].join('')], true)], true),iiiiioiooooo.ui.to_str(n));
});
var to_html__2 = (function (n,c){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$32,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,[cljs.core.str("branch "),cljs.core.str(n)].join('')], true)], true),c);
});
var to_html__3 = (function (n,oiuoi,c){return cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$32,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,[cljs.core.str("branch folded "),cljs.core.str(n)].join('')], true)], true);
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
iiiiioiooooo.ui.make_id = (function make_id(p){return [cljs.core.str("n"),cljs.core.str((cljs.core.truth_(clojure.zip.branch_QMARK_(p))?cljs.core.hash.cljs$core$IFn$_invoke$arity$1(p):cljs.core.hash.cljs$core$IFn$_invoke$arity$1(clojure.zip.node(p))))].join('');
});
iiiiioiooooo.ui.maybe = (function maybe(f,x){if(cljs.core.truth_(x))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else
{return x;
}
});
iiiiioiooooo.ui.selector = (function selector(p){return [cljs.core.str("#root > div:first-child "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$35," > div:first-child ",cljs.core.constant$keyword$36," + div"], true),p)))].join('');
});
iiiiioiooooo.ui.replacement_selector = (function() {
var replacement_selector = null;
var replacement_selector__1 = (function (p){return replacement_selector.cljs$core$IFn$_invoke$arity$2("#root > div:first-child ",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$35," > div:first-child ",cljs.core.constant$keyword$36," + div"], true),p)));
});
var replacement_selector__2 = (function (s,ps){iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$2(">>> ",ps);
return [cljs.core.str(s),cljs.core.str(ps)].join('');
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
iiiiioiooooo.ui.update_element_BANG_ = (function() {
var update_element_BANG_ = null;
var update_element_BANG___1 = (function (context){return update_element_BANG_.cljs$core$IFn$_invoke$arity$2(context,context);
});
var update_element_BANG___2 = (function (context,s){iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$2("replace: ",iiiiioiooooo.ui.replacement_selector.cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.path.cljs$core$IFn$_invoke$arity$2(context,s)));
dommy.core.replace_BANG_(document.querySelector(dommy.core.selector(iiiiioiooooo.ui.replacement_selector.cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.path.cljs$core$IFn$_invoke$arity$2(context,s)))),cljs.core.first(iiiiioiooooo.core.structure.translate(64,64,iiiiioiooooo.ui.to_html,s)));
return s;
});
update_element_BANG_ = function(context,s){
switch(arguments.length){
case 1:
return update_element_BANG___1.call(this,context);
case 2:
return update_element_BANG___2.call(this,context,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_element_BANG_.cljs$core$IFn$_invoke$arity$1 = update_element_BANG___1;
update_element_BANG_.cljs$core$IFn$_invoke$arity$2 = update_element_BANG___2;
return update_element_BANG_;
})()
;
iiiiioiooooo.ui.select_state = (function() {
var select_state = null;
var select_state__1 = (function (s){return select_state.cljs$core$IFn$_invoke$arity$2(s,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(iiiiioiooooo.ui.selector,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(iiiiioiooooo.core.structure.path,cljs.core.constant$keyword$65.call(null,s))),cljs.core.constant$keyword$50.call(null,s)));
});
var select_state__2 = (function (s,paths){return select_state.cljs$core$IFn$_invoke$arity$4(s,paths,dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(paths))),document.querySelector(dommy.core.selector(iiiiioiooooo.ui.selector(iiiiioiooooo.core.structure.path.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65.call(null,s),cljs.core.constant$keyword$45.call(null,s))))));
});
var select_state__4 = (function (s,paths,selections,focus){iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$3("selectors: ",paths,selections);
iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$3("  node: ",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take(64,[cljs.core.str(clojure.zip.node(cljs.core.constant$keyword$45.call(null,s)))].join(''))),[cljs.core.str(cljs.core.meta(clojure.zip.node(cljs.core.constant$keyword$45.call(null,s))))].join(''));
cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (q){return (dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 ? dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(q,"selected") : dommy.core.remove_class_BANG_.call(null,q,"selected"));
}),dommy.utils.__GT_Array(document.getElementsByClassName("selected"))));
cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (q){return (dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 ? dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(q,"selected-parent") : dommy.core.remove_class_BANG_.call(null,q,"selected-parent"));
}),dommy.utils.__GT_Array(document.getElementsByClassName("selected-parent"))));
var seq__4458_4462 = cljs.core.seq(selections);var chunk__4459_4463 = null;var count__4460_4464 = 0;var i__4461_4465 = 0;while(true){
if((i__4461_4465 < count__4460_4464))
{var selection_4466 = chunk__4459_4463.cljs$core$IIndexed$_nth$arity$2(chunk__4459_4463,i__4461_4465);if(cljs.core.truth_(selection_4466))
{(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 ? dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(selection_4466,"selected") : dommy.core.add_class_BANG_.call(null,selection_4466,"selected"));
} else
{}
{
var G__4467 = seq__4458_4462;
var G__4468 = chunk__4459_4463;
var G__4469 = count__4460_4464;
var G__4470 = (i__4461_4465 + 1);
seq__4458_4462 = G__4467;
chunk__4459_4463 = G__4468;
count__4460_4464 = G__4469;
i__4461_4465 = G__4470;
continue;
}
} else
{var temp__4092__auto___4471 = cljs.core.seq(seq__4458_4462);if(temp__4092__auto___4471)
{var seq__4458_4472__$1 = temp__4092__auto___4471;if(cljs.core.chunked_seq_QMARK_(seq__4458_4472__$1))
{var c__3561__auto___4473 = cljs.core.chunk_first(seq__4458_4472__$1);{
var G__4474 = cljs.core.chunk_rest(seq__4458_4472__$1);
var G__4475 = c__3561__auto___4473;
var G__4476 = cljs.core.count(c__3561__auto___4473);
var G__4477 = 0;
seq__4458_4462 = G__4474;
chunk__4459_4463 = G__4475;
count__4460_4464 = G__4476;
i__4461_4465 = G__4477;
continue;
}
} else
{var selection_4478 = cljs.core.first(seq__4458_4472__$1);if(cljs.core.truth_(selection_4478))
{(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 ? dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(selection_4478,"selected") : dommy.core.add_class_BANG_.call(null,selection_4478,"selected"));
} else
{}
{
var G__4479 = cljs.core.next(seq__4458_4472__$1);
var G__4480 = null;
var G__4481 = 0;
var G__4482 = 0;
seq__4458_4462 = G__4479;
chunk__4459_4463 = G__4480;
count__4460_4464 = G__4481;
i__4461_4465 = G__4482;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(focus))
{return (dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 ? dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(focus,"selected") : dommy.core.add_class_BANG_.call(null,focus,"selected"));
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
return iiiiioiooooo.core.structure.update_BANG_(state,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$52,(iiiiioiooooo.ui.keycode_to_keyword.cljs$core$IFn$_invoke$arity$1 ? iiiiioiooooo.ui.keycode_to_keyword.cljs$core$IFn$_invoke$arity$1(e.keyCode) : iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode)),cljs.core.constant$keyword$188,e.keyCode,cljs.core.constant$keyword$87,cljs.core.constant$keyword$71], true));
});
iiiiioiooooo.ui.keyup = (function keyup(state,e){return iiiiioiooooo.core.structure.update_BANG_(state,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$52,(iiiiioiooooo.ui.keycode_to_keyword.cljs$core$IFn$_invoke$arity$1 ? iiiiioiooooo.ui.keycode_to_keyword.cljs$core$IFn$_invoke$arity$1(e.keyCode) : iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode)),cljs.core.constant$keyword$188,e.keyCode,cljs.core.constant$keyword$87,cljs.core.constant$keyword$72], true));
});
iiiiioiooooo.ui.update_ui_fn = cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$47,iiiiioiooooo.ui.select_state,cljs.core.constant$keyword$48,(function (s){iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$3("modified: ",clojure.zip.node(cljs.core.constant$keyword$49.call(null,s)),[cljs.core.str(iiiiioiooooo.core.structure.path.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65.call(null,s),cljs.core.constant$keyword$49.call(null,s)))].join(''));
iiiiioiooooo.ui.update_element_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65.call(null,s),(cljs.core.truth_(cljs.core.constant$keyword$49.call(null,s))?cljs.core.constant$keyword$49.call(null,s):cljs.core.constant$keyword$65.call(null,s)));
return iiiiioiooooo.ui.select_state.cljs$core$IFn$_invoke$arity$1(s);
})], true);
iiiiioiooooo.ui.display_with_latest = (function display_with_latest(n){return cljs.core.constant$keyword$46.call(null,n).call(null,iiiiioiooooo.ui.update_ui_fn).call(null,n);
});
iiiiioiooooo.ui.add_eval = (function add_eval(s){return iiiiioiooooo.core.structure.update.cljs$core$IFn$_invoke$arity$4(s,iiiiioiooooo.core.structure.latest_state(s),null,(function (s__$1,x){return iiiiioiooooo.core.structure.push_history(cljs.core.assoc_in(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$44,cljs.core.constant$keyword$138,cljs.core.constant$keyword$138], true),(function (s__$2,x__$1){return iiiiioiooooo.core.structure.modified.cljs$core$IFn$_invoke$arity$2(x__$1,(function (l){iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$2("evaluating! ",[cljs.core.str(clojure.zip.node(l))].join(''));
return clojure.zip.insert_right(l,"qwe");
}));
})),s__$1);
}));
});
iiiiioiooooo.ui.add_info = (function add_info(s){return iiiiioiooooo.core.structure.update.cljs$core$IFn$_invoke$arity$4(s,iiiiioiooooo.core.structure.latest_state(s),null,(function (s__$1,x){return iiiiioiooooo.core.structure.push_history(cljs.core.assoc_in(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$44,cljs.core.constant$keyword$59,cljs.core.constant$keyword$184,cljs.core.constant$keyword$184], true),(function (s__$2,x__$1){iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$2("meta: ",[cljs.core.str(cljs.core.meta(clojure.zip.node(cljs.core.constant$keyword$45.call(null,x__$1))))].join(''));
return x__$1;
})),s__$1);
}));
});
iiiiioiooooo.ui.make_ui = (function() {
var make_ui = null;
var make_ui__1 = (function (e){return make_ui.cljs$core$IFn$_invoke$arity$2(e,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.ui.add_eval(iiiiioiooooo.ui.add_info(iiiiioiooooo.core.structure.default_state.cljs$core$IFn$_invoke$arity$0()))));
});
var make_ui__2 = (function (e,state){iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$1("make ui");
window.onkeydown = (function (e__$1){return iiiiioiooooo.ui.keydown(state,e__$1);
});
window.onkeyup = (function (e__$1){return iiiiioiooooo.ui.keyup(state,e__$1);
});
iiiiioiooooo.ui.update_element_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$65.call(null,iiiiioiooooo.core.structure.latest_state(cljs.core.deref(state))));
return cljs.core.add_watch(state,cljs.core.constant$keyword$189,(function (k,r,o,n){return iiiiioiooooo.ui.display_with_latest(iiiiioiooooo.core.structure.latest_state(n));
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
iiiiioiooooo.ui.log.cljs$core$IFn$_invoke$arity$1("huhhh");
window.onload = iiiiioiooooo.ui.make_ui;
