goog.provide('iiiiioiooooo.core.macros');
goog.require('cljs.core');
goog.require('clojure.zip');
cljs.core.defmacro.call(null,iiiiioiooooo.core.macros.r,cljs.core.PersistentVector.fromArray([iiiiioiooooo.core.macros.x], true),iiiiioiooooo.core.macros.x);
cljs.core.defmacro.call(null,iiiiioiooooo.core.macros.add_context,cljs.core.PersistentVector.fromArray([iiiiioiooooo.core.macros.s], true),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"G__42/assoc"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"G__42/second"))),cljs.core.list.call(null,iiiiioiooooo.core.macros.s)))),cljs.core.list.call(null,"\uFDD0'context"),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"zip/node"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"zip/down"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"zip/vector-zip"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"zip/seq-zip"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"G__42/seq"))),cljs.core.list.call(null,iiiiioiooooo.core.macros.s)))))))))))))))))))))));

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"iiiiioiooooo.core.macros"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__2797__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__2797 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2797__delegate.call(this, m);
};
G__2797.cljs$lang$maxFixedArity = 0;
G__2797.cljs$lang$applyTo = (function (arglist__2798){
var m = cljs.core.seq(arglist__2798);;
return G__2797__delegate(m);
});
G__2797.cljs$lang$arity$variadic = G__2797__delegate;
return G__2797;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//")))),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"zip")),(new cljs.core.Symbol(null,"clojure.zip"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.macros"))),old);
}));
