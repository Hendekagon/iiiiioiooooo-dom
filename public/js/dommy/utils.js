goog.provide('dommy.utils');
goog.require('cljs.core');
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
dommy.utils.dissoc_in = (function dissoc_in(m,p__5345){
var vec__5347 = p__5345;
var k = cljs.core.nth.call(null,vec__5347,0,null);
var ks = cljs.core.nthnext.call(null,vec__5347,1);
if(cljs.core.truth_(m))
{var temp__4090__auto__ = (function (){var and__3941__auto__ = ks;
if(cljs.core.truth_(and__3941__auto__))
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto__))
{var res = temp__4090__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
dommy.utils.__GT_Array = (function __GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"dommy.utils"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__5348__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__5348 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5348__delegate.call(this, m);
};
G__5348.cljs$lang$maxFixedArity = 0;
G__5348.cljs$lang$applyTo = (function (arglist__5349){
var m = cljs.core.seq(arglist__5349);;
return G__5348__delegate(m);
});
G__5348.cljs$lang$arity$variadic = G__5348__delegate;
return G__5348;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"->Array")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"array-like"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"array-like")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.utils/->Array")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",14,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/utils.cljs"),(new cljs.core.Symbol(null,"dissoc-in")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"m")),cljs.core.vec([(new cljs.core.Symbol(null,"k")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"ks"))])]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p__5345")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.utils/dissoc-in")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Dissociate this keyseq from m, removing any empty maps created as a result\n   (including at the top-level).","\uFDD0'line",3,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/utils.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",null,"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.utils"))),old);
}));
