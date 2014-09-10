// Compiled by ClojureScript 0.0-2322
goog.provide('iiiiioiooooo.style');
goog.require('cljs.core');
iiiiioiooooo.style.rule = (function() {
var rule = null;
var rule__0 = (function (){return new cljs.core.PersistentArrayMap(null, 1, ["li",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"display","display",242065432),"-webkit-flex -moz-flex -ms-flex -o-flex flex",new cljs.core.Keyword(null,"-moz-border-radius","-moz-border-radius",-651781103),"4px",new cljs.core.Keyword(null,"-webkit-border-radius","-webkit-border-radius",1497080378),"4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),"1px dotted invisible"], null)], null);
});
var rule__1 = (function (v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cljs.core.first.call(null,v)))+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p__4955){var vec__4956 = p__4955;var k = cljs.core.nth.call(null,vec__4956,(0),null);var v__$1 = cljs.core.nth.call(null,vec__4956,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1));
}),cljs.core.val.call(null,cljs.core.first.call(null,v)))))+"}");
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
var make_stylesheet_BANG___0 = (function (){return make_stylesheet_BANG_.call(null,document.createElement("style"));
});
var make_stylesheet_BANG___1 = (function (e){console.log(iiiiioiooooo.style.rule.call(null));
e.type = "text/css";
e.rel = "stylesheet";
e.media = "screen";
e.title = "ui";
(document.styleSheets[(0)]).insertRule(iiiiioiooooo.style.rule.call(null),(0));
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

//# sourceMappingURL=style.js.map