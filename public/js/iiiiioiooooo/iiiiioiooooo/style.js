goog.provide('iiiiioiooooo.style');
goog.require('cljs.core');
iiiiioiooooo.style.rule = (function() {
var rule = null;
var rule__0 = (function (){
return cljs.core.ObjMap.fromObject(["li"],{"li":cljs.core.ObjMap.fromObject(["\uFDD0'list-style-type","\uFDD0'display","\uFDD0'-moz-border-radius","\uFDD0'-webkit-border-radius","\uFDD0'border-radius","\uFDD0'border"],{"\uFDD0'list-style-type":"none","\uFDD0'display":"-webkit-flex -moz-flex -ms-flex -o-flex flex","\uFDD0'-moz-border-radius":"4px","\uFDD0'-webkit-border-radius":"4px","\uFDD0'border-radius":"4px","\uFDD0'border":"1px dotted invisible"})});
});
var rule__1 = (function (v){
return [cljs.core.str(cljs.core.key.call(null,cljs.core.first.call(null,v))),cljs.core.str("{"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p__2805){
var vec__2806 = p__2805;
var k = cljs.core.nth.call(null,vec__2806,0,null);
var v__$1 = cljs.core.nth.call(null,vec__2806,1,null);
return [cljs.core.str([cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":")].join('')),cljs.core.str(v__$1)].join('');
}),cljs.core.val.call(null,cljs.core.first.call(null,v))))),cljs.core.str("}")].join('');
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
rule.cljs$lang$arity$0 = rule__0;
rule.cljs$lang$arity$1 = rule__1;
return rule;
})()
;
iiiiioiooooo.style.make_stylesheet_BANG_ = (function() {
var make_stylesheet_BANG_ = null;
var make_stylesheet_BANG___0 = (function (){
return make_stylesheet_BANG_.call(null,document.createElement("style"));
});
var make_stylesheet_BANG___1 = (function (e){
console.log(iiiiioiooooo.style.rule.call(null));
e.type = "text/css";
e.rel = "stylesheet";
e.media = "screen";
e.title = "ui";
(document.styleSheets[0]).insertRule(iiiiioiooooo.style.rule.call(null),0);
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
make_stylesheet_BANG_.cljs$lang$arity$0 = make_stylesheet_BANG___0;
make_stylesheet_BANG_.cljs$lang$arity$1 = make_stylesheet_BANG___1;
return make_stylesheet_BANG_;
})()
;

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"iiiiioiooooo.style"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__2807__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__2807 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2807__delegate.call(this, m);
};
G__2807.cljs$lang$maxFixedArity = 0;
G__2807.cljs$lang$applyTo = (function (arglist__2808){
var m = cljs.core.seq(arglist__2808);;
return G__2807__delegate(m);
});
G__2807.cljs$lang$arity$variadic = G__2807__delegate;
return G__2807;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"make-stylesheet!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]),cljs.core.vec([(new cljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.style/make-stylesheet!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",28,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/style.cljs"),(new cljs.core.Symbol(null,"rule")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]),cljs.core.vec([(new cljs.core.Symbol(null,"v"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"v")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.style/rule")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",10,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/style.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",null,"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.style"))),old);
}));
