goog.provide('iiiiioiooooo.style');
goog.require('cljs.core');
iiiiioiooooo.style.rule = (function() {
var rule = null;
var rule__0 = (function (){return cljs.core.PersistentArrayMap.fromArray(["li",cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$14,"none",cljs.core.constant$keyword$15,"-webkit-flex -moz-flex -ms-flex -o-flex flex",cljs.core.constant$keyword$16,"4px",cljs.core.constant$keyword$17,"4px",cljs.core.constant$keyword$18,"4px",cljs.core.constant$keyword$19,"1px dotted invisible"], true)], true);
});
var rule__1 = (function (v){return [cljs.core.str(cljs.core.key(cljs.core.first(v))),cljs.core.str("{"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5383){var vec__5384 = p__5383;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5384,0,null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5384,1,null);return [cljs.core.str([cljs.core.str(cljs.core.name(k)),cljs.core.str(":")].join('')),cljs.core.str(v__$1)].join('');
}),cljs.core.val(cljs.core.first(v))))),cljs.core.str("}")].join('');
});
rule = function(v){
switch(arguments.length){
case 0:
return rule__0.call(this);
case 1:
return rule__1.call(this,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rule.cljs$core$IFn$_invoke$arity$0 = rule__0;
rule.cljs$core$IFn$_invoke$arity$1 = rule__1;
return rule;
})()
;
iiiiioiooooo.style.make_stylesheet_BANG_ = (function() {
var make_stylesheet_BANG_ = null;
var make_stylesheet_BANG___0 = (function (){return make_stylesheet_BANG_.cljs$core$IFn$_invoke$arity$1(document.createElement("style"));
});
var make_stylesheet_BANG___1 = (function (e){console.log(iiiiioiooooo.style.rule.cljs$core$IFn$_invoke$arity$0());
e.type = "text/css";
e.rel = "stylesheet";
e.media = "screen";
e.title = "ui";
(document.styleSheets[0]).insertRule(iiiiioiooooo.style.rule.cljs$core$IFn$_invoke$arity$0(),0);
return e;
});
make_stylesheet_BANG_ = function(e){
switch(arguments.length){
case 0:
return make_stylesheet_BANG___0.call(this);
case 1:
return make_stylesheet_BANG___1.call(this,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_stylesheet_BANG_.cljs$core$IFn$_invoke$arity$0 = make_stylesheet_BANG___0;
make_stylesheet_BANG_.cljs$core$IFn$_invoke$arity$1 = make_stylesheet_BANG___1;
return make_stylesheet_BANG_;
})()
;
