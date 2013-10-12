goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');
goog.require('goog.events');
clojure.browser.event.EventType = {};
clojure.browser.event.event_types = (function event_types(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.clojure$browser$event$EventType$event_types$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.clojure$browser$event$EventType$event_types$arity$1(this$);
} else
{var x__2048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__2048__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (clojure.browser.event.event_types["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"EventType.event-types",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.clojure$browser$event$EventType$ = true;
Element.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__4561){
var vec__4562 = p__4561;
var k = cljs.core.nth.call(null,vec__4562,0,null);
var v = cljs.core.nth.call(null,vec__4562,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k.toLowerCase()),v], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
goog.events.EventTarget.prototype.clojure$browser$event$EventType$ = true;
goog.events.EventTarget.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__4563){
var vec__4564 = p__4563;
var k = cljs.core.nth.call(null,vec__4564,0,null);
var v = cljs.core.nth.call(null,vec__4564,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k.toLowerCase()),v], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
clojure.browser.event.listen = (function() {
var listen = null;
var listen__3 = (function (src,type,fn){
return listen.call(null,src,type,fn,false);
});
var listen__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.listen(src,cljs.core._lookup.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen__3.call(this,src,type,fn);
case 4:
return listen__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$lang$arity$3 = listen__3;
listen.cljs$lang$arity$4 = listen__4;
return listen;
})()
;
clojure.browser.event.listen_once = (function() {
var listen_once = null;
var listen_once__3 = (function (src,type,fn){
return listen_once.call(null,src,type,fn,false);
});
var listen_once__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.listenOnce(src,cljs.core._lookup.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen_once__3.call(this,src,type,fn);
case 4:
return listen_once__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once.cljs$lang$arity$3 = listen_once__3;
listen_once.cljs$lang$arity$4 = listen_once__4;
return listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var unlisten = null;
var unlisten__3 = (function (src,type,fn){
return unlisten.call(null,src,type,fn,false);
});
var unlisten__4 = (function (src,type,fn,capture_QMARK_){
return goog.events.unlisten(src,cljs.core._lookup.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return unlisten__3.call(this,src,type,fn);
case 4:
return unlisten__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$lang$arity$3 = unlisten__3;
unlisten.cljs$lang$arity$4 = unlisten__4;
return unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function unlisten_by_key(key){
return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function expose(e){
return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function remove_all(opt_obj,opt_type,opt_capt){
return null;
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([cljs.core.hash_map("\uFDD0'author","Bobby Calderwood","\uFDD0'doc","This namespace contains functions to work with browser\nevents.  It is based on the Google Closure Library event system.")(new cljs.core.Symbol(null,"clojure.browser.event"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__4565__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__4565 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4565__delegate.call(this, m);
};
G__4565.cljs$lang$maxFixedArity = 0;
G__4565.cljs$lang$applyTo = (function (arglist__4566){
var m = cljs.core.seq(arglist__4566);;
return G__4565__delegate(m);
});
G__4565.cljs$lang$arity$variadic = G__4565__delegate;
return G__4565;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"get-listener")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"src")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"listener")),(new cljs.core.Symbol(null,"opt_capt")),(new cljs.core.Symbol(null,"opt_handler"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"listener")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"opt_capt")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"opt_handler")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/get-listener")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",5,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",89,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"unlisten")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"src")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"fn"))]),cljs.core.vec([(new cljs.core.Symbol(null,"src")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"fn")),(new cljs.core.Symbol(null,"capture?"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"fn")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"fn")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"capture?")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/unlisten")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",62,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"unique-event-id")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"event-type"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"event-type")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/unique-event-id")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",92,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"listen")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"src")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"fn"))]),cljs.core.vec([(new cljs.core.Symbol(null,"src")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"fn")),(new cljs.core.Symbol(null,"capture?"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"fn")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"fn")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"capture?")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/listen")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",44,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"listen-once")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"src")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"fn"))]),cljs.core.vec([(new cljs.core.Symbol(null,"src")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"fn")),(new cljs.core.Symbol(null,"capture?"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"fn")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"fn")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"capture?")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/listen-once")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",53,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"expose")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/expose")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",79,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"all-listeners")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"obj")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"capture"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"obj")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"capture")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/all-listeners")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",90,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"total-listener-count")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/total-listener-count")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",85,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"unlisten-by-key")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"key"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"key")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/unlisten-by-key")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",71,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"remove-all")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"opt_obj")),(new cljs.core.Symbol(null,"opt_type")),(new cljs.core.Symbol(null,"opt_capt"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"opt_obj")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"opt_type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"opt_capt")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/remove-all")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",98,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"EventType")),cljs.core.hash_map("\uFDD0'line",17,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/EventType"))),(new cljs.core.Symbol(null,"fire-listeners")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"obj")),(new cljs.core.Symbol(null,"type")),(new cljs.core.Symbol(null,"capture")),(new cljs.core.Symbol(null,"event"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"obj")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"capture")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"event")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/fire-listeners")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",82,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"event-types")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"this"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"this")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new cljs.core.Symbol(null,"clojure.browser.event/EventType")),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/event-types")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",17,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"has-listener")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"obj")),(new cljs.core.Symbol(null,"opt_type")),(new cljs.core.Symbol(null,"opt_capture"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"obj")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"opt_type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"opt_capture")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/has-listener")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",94,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs"),(new cljs.core.Symbol(null,"dispatch-event")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"src")),(new cljs.core.Symbol(null,"event"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"event")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event/dispatch-event")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",75,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/browser/event.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"gevent-type")),(new cljs.core.Symbol(null,"goog.events.EventType")),(new cljs.core.Symbol(null,"gevent-target")),(new cljs.core.Symbol(null,"goog.events.EventTarget")),(new cljs.core.Symbol(null,"events")),(new cljs.core.Symbol(null,"goog.events"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.browser.event"))),old);
}));
