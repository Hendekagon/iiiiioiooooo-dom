goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var or__3943__auto__ = elem__$1.textContent;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__5245 = dommy.template.__GT_node_like.call(null,parent);
G__5245.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__5245;
});
var append_BANG___3 = (function() { 
var G__5247__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var G__5246_5248 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
while(true){
if(G__5246_5248)
{var c_5249 = cljs.core.first.call(null,G__5246_5248);
append_BANG_.call(null,parent__$1,c_5249);
{
var G__5250 = cljs.core.next.call(null,G__5246_5248);
G__5246_5248 = G__5250;
continue;
}
} else
{}
break;
}
return parent__$1;
};
var G__5247 = function (parent,child,var_args){
var more_children = null;
if (goog.isDef(var_args)) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5247__delegate.call(this, parent, child, more_children);
};
G__5247.cljs$lang$maxFixedArity = 2;
G__5247.cljs$lang$applyTo = (function (arglist__5251){
var parent = cljs.core.first(arglist__5251);
var child = cljs.core.first(cljs.core.next(arglist__5251));
var more_children = cljs.core.rest(cljs.core.next(arglist__5251));
return G__5247__delegate(parent, child, more_children);
});
G__5247.cljs$lang$arity$variadic = G__5247__delegate;
return G__5247;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$lang$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$lang$arity$2 = append_BANG___2;
append_BANG_.cljs$lang$arity$variadic = append_BANG___3.cljs$lang$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__5254 = dommy.template.__GT_node_like.call(null,parent);
G__5254.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__5254;
});
var prepend_BANG___3 = (function() { 
var G__5256__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var G__5255_5257 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
while(true){
if(G__5255_5257)
{var c_5258 = cljs.core.first.call(null,G__5255_5257);
prepend_BANG_.call(null,parent__$1,c_5258);
{
var G__5259 = cljs.core.next.call(null,G__5255_5257);
G__5255_5257 = G__5259;
continue;
}
} else
{}
break;
}
return parent__$1;
};
var G__5256 = function (parent,child,var_args){
var more_children = null;
if (goog.isDef(var_args)) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5256__delegate.call(this, parent, child, more_children);
};
G__5256.cljs$lang$maxFixedArity = 2;
G__5256.cljs$lang$applyTo = (function (arglist__5260){
var parent = cljs.core.first(arglist__5260);
var child = cljs.core.first(cljs.core.next(arglist__5260));
var more_children = cljs.core.rest(cljs.core.next(arglist__5260));
return G__5256__delegate(parent, child, more_children);
});
G__5256.cljs$lang$arity$variadic = G__5256__delegate;
return G__5256;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$lang$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$lang$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$lang$arity$variadic = prepend_BANG___3.cljs$lang$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,".-parentNode")),(new cljs.core.Symbol(null,"other"))),cljs.core.hash_map("\uFDD0'line",102,"\uFDD0'column",13))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4090__auto___5261 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4090__auto___5261))
{var next_5262 = temp__4090__auto___5261;
parent.insertBefore(actual_node,next_5262);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,".-parentNode")),(new cljs.core.Symbol(null,"elem"))),cljs.core.hash_map("\uFDD0'line",124,"\uFDD0'column",13))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){
var G__5264 = dommy.template.__GT_node_like.call(null,parent);
G__5264.innerHTML = "";
dommy.core.append_BANG_.call(null,G__5264,node_like);
return G__5264;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5266 = elem__$1.parentNode;
G__5266.removeChild(elem__$1);
return G__5266;
});
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((function (){var or__3943__auto__ = cljs.core.string_QMARK_.call(null,data);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,data);
}
})())
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__5267_SHARP_){
return p1__5267_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$lang$arity$1 = matches_pred__1;
matches_pred.cljs$lang$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__5268_SHARP_){
return !((p1__5268_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$lang$arity$2 = closest__2;
closest.cljs$lang$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__5269){
var vec__5270 = p__5269;
var special_mouse_event = cljs.core.nth.call(null,vec__5270,0,null);
var real_mouse_event = cljs.core.nth.call(null,vec__5270,1,null);
return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArrays([real_mouse_event],[(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;
if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})])], true);
}),cljs.core.ObjMap.fromObject(["\uFDD0'mouseenter","\uFDD0'mouseleave"],{"\uFDD0'mouseenter":"\uFDD0'mouseover","\uFDD0'mouseleave":"\uFDD0'mouseout"})));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;
event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3943__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this, elem, f, args);
};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5272){
var elem = cljs.core.first(arglist__5272);
var f = cljs.core.first(cljs.core.next(arglist__5272));
var args = cljs.core.rest(cljs.core.next(arglist__5272));
return update_event_listeners_BANG___delegate(elem, f, args);
});
update_event_listeners_BANG_.cljs$lang$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__5271_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__5271_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"even?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"count")),(new cljs.core.Symbol(null,"type-fs"))),cljs.core.hash_map("\uFDD0'line",256,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",256,"\uFDD0'column",11))))].join('')));
}
var vec__5278_5283 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5284 = cljs.core.nth.call(null,vec__5278_5283,0,null);
var selector_5285 = cljs.core.nth.call(null,vec__5278_5283,1,null);
var G__5279_5286 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
while(true){
if(G__5279_5286)
{var vec__5281_5287 = cljs.core.first.call(null,G__5279_5286);
var orig_type_5288 = cljs.core.nth.call(null,vec__5281_5287,0,null);
var f_5289 = cljs.core.nth.call(null,vec__5281_5287,1,null);
var G__5280_5290 = cljs.core.seq.call(null,cljs.core._lookup.call(null,dommy.core.special_listener_makers,orig_type_5288,cljs.core.PersistentArrayMap.fromArrays([orig_type_5288],[cljs.core.identity])));
while(true){
if(G__5280_5290)
{var vec__5282_5291 = cljs.core.first.call(null,G__5280_5290);
var actual_type_5292 = cljs.core.nth.call(null,vec__5282_5291,0,null);
var factory_5293 = cljs.core.nth.call(null,vec__5282_5291,1,null);
var canonical_f_5294 = (cljs.core.truth_(selector_5285)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5284,selector_5285):cljs.core.identity).call(null,factory_5293.call(null,f_5289));
dommy.core.update_event_listeners_BANG_.call(null,elem_5284,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5285,actual_type_5292,f_5289], true),canonical_f_5294);
if(cljs.core.truth_(elem_5284.addEventListener))
{elem_5284.addEventListener(cljs.core.name.call(null,actual_type_5292),canonical_f_5294);
} else
{elem_5284.attachEvent(cljs.core.name.call(null,actual_type_5292),canonical_f_5294);
}
{
var G__5295 = cljs.core.next.call(null,G__5280_5290);
G__5280_5290 = G__5295;
continue;
}
} else
{}
break;
}
{
var G__5296 = cljs.core.next.call(null,G__5279_5286);
G__5279_5286 = G__5296;
continue;
}
} else
{}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (goog.isDef(var_args)) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__5297){
var elem_sel = cljs.core.first(arglist__5297);
var type_fs = cljs.core.rest(arglist__5297);
return listen_BANG___delegate(elem_sel, type_fs);
});
listen_BANG_.cljs$lang$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"even?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"count")),(new cljs.core.Symbol(null,"type-fs"))),cljs.core.hash_map("\uFDD0'line",285,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",285,"\uFDD0'column",11))))].join('')));
}
var vec__5303_5308 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5309 = cljs.core.nth.call(null,vec__5303_5308,0,null);
var selector_5310 = cljs.core.nth.call(null,vec__5303_5308,1,null);
var G__5304_5311 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
while(true){
if(G__5304_5311)
{var vec__5306_5312 = cljs.core.first.call(null,G__5304_5311);
var orig_type_5313 = cljs.core.nth.call(null,vec__5306_5312,0,null);
var f_5314 = cljs.core.nth.call(null,vec__5306_5312,1,null);
var G__5305_5315 = cljs.core.seq.call(null,cljs.core._lookup.call(null,dommy.core.special_listener_makers,orig_type_5313,cljs.core.PersistentArrayMap.fromArrays([orig_type_5313],[cljs.core.identity])));
while(true){
if(G__5305_5315)
{var vec__5307_5316 = cljs.core.first.call(null,G__5305_5315);
var actual_type_5317 = cljs.core.nth.call(null,vec__5307_5316,0,null);
var __5318 = cljs.core.nth.call(null,vec__5307_5316,1,null);
var keys_5319 = cljs.core.PersistentVector.fromArray([selector_5310,actual_type_5317,f_5314], true);
var canonical_f_5320 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5309),keys_5319);
dommy.core.update_event_listeners_BANG_.call(null,elem_5309,dommy.utils.dissoc_in,keys_5319);
if(cljs.core.truth_(elem_5309.removeEventListener))
{elem_5309.removeEventListener(cljs.core.name.call(null,actual_type_5317),canonical_f_5320);
} else
{elem_5309.detachEvent(cljs.core.name.call(null,actual_type_5317),canonical_f_5320);
}
{
var G__5321 = cljs.core.next.call(null,G__5305_5315);
G__5305_5315 = G__5321;
continue;
}
} else
{}
break;
}
{
var G__5322 = cljs.core.next.call(null,G__5304_5311);
G__5304_5311 = G__5322;
continue;
}
} else
{}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (goog.isDef(var_args)) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this, elem_sel, type_fs);
};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5323){
var elem_sel = cljs.core.first(arglist__5323);
var type_fs = cljs.core.rest(arglist__5323);
return unlisten_BANG___delegate(elem_sel, type_fs);
});
unlisten_BANG_.cljs$lang$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"even?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"count")),(new cljs.core.Symbol(null,"type-fs"))),cljs.core.hash_map("\uFDD0'line",300,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",300,"\uFDD0'column",11))))].join('')));
}
var vec__5327_5330 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5331 = cljs.core.nth.call(null,vec__5327_5330,0,null);
var selector_5332 = cljs.core.nth.call(null,vec__5327_5330,1,null);
var G__5328_5333 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
while(true){
if(G__5328_5333)
{var vec__5329_5334 = cljs.core.first.call(null,G__5328_5333);
var type_5335 = cljs.core.nth.call(null,vec__5329_5334,0,null);
var f_5336 = cljs.core.nth.call(null,vec__5329_5334,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_5335,((function (G__5328_5333,vec__5329_5334,type_5335,f_5336){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_5335,this_fn);
return f_5336.call(null,e);
});})(G__5328_5333,vec__5329_5334,type_5335,f_5336))
);
{
var G__5337 = cljs.core.next.call(null,G__5328_5333);
G__5328_5333 = G__5337;
continue;
}
} else
{}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (goog.isDef(var_args)) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5338){
var elem_sel = cljs.core.first(arglist__5338);
var type_fs = cljs.core.rest(arglist__5338);
return listen_once_BANG___delegate(elem_sel, type_fs);
});
listen_once_BANG_.cljs$lang$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__5339){
var vec__5341 = p__5339;
var update_event_BANG_ = cljs.core.nth.call(null,vec__5341,0,null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"descendant?")),(new cljs.core.Symbol(null,"node")),(new cljs.core.Symbol(null,"js/document.documentElement"))),cljs.core.hash_map("\uFDD0'line",319,"\uFDD0'column",11))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__5339 = null;
if (goog.isDef(var_args)) {
  p__5339 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fire_BANG___delegate.call(this, node, event_type, p__5339);
};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__5342){
var node = cljs.core.first(arglist__5342);
var event_type = cljs.core.first(cljs.core.next(arglist__5342));
var p__5339 = cljs.core.rest(cljs.core.next(arglist__5342));
return fire_BANG___delegate(node, event_type, p__5339);
});
fire_BANG_.cljs$lang$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"dommy.core"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__5343__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__5343 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5343__delegate.call(this, m);
};
G__5343.cljs$lang$maxFixedArity = 0;
G__5343.cljs$lang$applyTo = (function (arglist__5344){
var m = cljs.core.seq(arglist__5344);;
return G__5343__delegate(m);
});
G__5343.cljs$lang$arity$variadic = G__5343__delegate;
return G__5343;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"event-listeners")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/event-listeners")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a nested map of event listeners on `nodes`","\uFDD0'line",213,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"toggle!")),cljs.core.hash_map("\uFDD0'line",32,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/toggle!"))),(new cljs.core.Symbol(null,"live-listener")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"selector")),(new cljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/live-listener")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","fires f if event.target is found with `selector`","\uFDD0'line",205,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"attr")),cljs.core.hash_map("\uFDD0'line",30,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/attr"))),(new cljs.core.Symbol(null,"set-value!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"value"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"value")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/set-value!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",62,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"value")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/value")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",59,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"bounding-client-rect")),cljs.core.hash_map("\uFDD0'line",35,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/bounding-client-rect"))),(new cljs.core.Symbol(null,"set-attr!")),cljs.core.hash_map("\uFDD0'line",23,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/set-attr!"))),(new cljs.core.Symbol(null,"fire!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"node")),(new cljs.core.Symbol(null,"event-type")),(new cljs.core.Symbol(null,"&")),cljs.core.vec([(new cljs.core.Symbol(null,"update-event!"))])]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"node")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"event-type")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p__5339")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/fire!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many\n   event types or their bubbling behaviours\n\n   Creates an event of type `event-type`, optionally having\n   `update-event!` mutate and return an updated event object,\n   and fires it on `node`.\n   Only works when `node` is in the DOM","\uFDD0'line",310,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"html")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/html")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",45,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"set-html!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"html"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"html")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/set-html!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",39,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"text")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/text")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",55,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"set-px!")),cljs.core.hash_map("\uFDD0'line",25,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/set-px!"))),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"style-str")),cljs.core.hash_map("\uFDD0'line",27,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/style-str"))),(new cljs.core.Symbol(null,"toggle-class!")),cljs.core.hash_map("\uFDD0'line",22,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/toggle-class!"))),(new cljs.core.Symbol(null,"->Array")),cljs.core.hash_map("\uFDD0'line",37,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/->Array"))),(new cljs.core.Symbol(null,"matches-pred")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"base")),(new cljs.core.Symbol(null,"selector"))]),cljs.core.vec([(new cljs.core.Symbol(null,"selector"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"base")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/matches-pred")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","returns a predicate on nodes that match `selector` at the\n   time of this `matches-pred` call (may return outdated results\n   if you fuck with the DOM)","\uFDD0'line",153,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"append!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"parent")),(new cljs.core.Symbol(null,"child"))]),cljs.core.vec([(new cljs.core.Symbol(null,"parent")),(new cljs.core.Symbol(null,"child")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"more-children"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"parent")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"child")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"parent")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"child")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"more-children")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/append!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","append `child` to `parent`. 'parent' and 'child' should be node-like\n   (work with dommy.template/->node-like). The node-like projection\n   of parent is returned after appending child.","\uFDD0'line",68,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"remove-attr!")),cljs.core.hash_map("\uFDD0'line",29,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/remove-attr!"))),(new cljs.core.Symbol(null,"elem-and-selector")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem-sel"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem-sel")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/elem-and-selector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",224,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"show!")),cljs.core.hash_map("\uFDD0'line",34,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/show!"))),(new cljs.core.Symbol(null,"selector")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"data"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"data")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/selector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",141,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"remove-class!")),cljs.core.hash_map("\uFDD0'line",21,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/remove-class!"))),(new cljs.core.Symbol(null,"ancestor-nodes")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/ancestor-nodes")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","a lazy seq of the ancestors of `node`","\uFDD0'line",146,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"descendant?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"descendant")),(new cljs.core.Symbol(null,"ancestor"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"descendant")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"ancestor")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/descendant?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","is `descendant` a descendant of `ancestor`?","\uFDD0'line",177,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'tag",(new cljs.core.Symbol(null,"boolean"))),(new cljs.core.Symbol(null,"px")),cljs.core.hash_map("\uFDD0'line",26,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/px"))),(new cljs.core.Symbol(null,"style")),cljs.core.hash_map("\uFDD0'line",28,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/style"))),(new cljs.core.Symbol(null,"set-style!")),cljs.core.hash_map("\uFDD0'line",24,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/set-style!"))),(new cljs.core.Symbol(null,"has-class?")),cljs.core.hash_map("\uFDD0'line",19,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/has-class?"))),(new cljs.core.Symbol(null,"insert-after!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"other"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"other")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/insert-after!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","insert `node` after `other`, both node-like,\n   `other` must have a parent. return `node`","\uFDD0'line",106,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"closest")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"base")),(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"selector"))]),cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"selector"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"base")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/closest")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","closest ancestor of `node` (up to `base`, if provided)\n   that matches `selector`","\uFDD0'line",164,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"update-event-listeners!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"f")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"args"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"args")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/update-event-listeners!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",218,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"unlisten!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem-sel")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"type-fs"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem-sel")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type-fs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/unlisten!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","Removes event listener for the element defined in `elem-sel`,\n   which is the same format as listen!.\n\n  The following forms are allowed, and will remove all handlers\n  that match the parameters passed in:\n\n      (unlisten! [elem :.selector] :click event-listener)\n\n      (unlisten! [elem :.selector]\n        :click event-listener\n        :mouseover other-event-listener)","\uFDD0'line",272,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"replace!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"new"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"new")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/replace!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","replace `elem` with `new`, both node-like, return node-like projection of new.\n   node-like projection of elem must have parent.","\uFDD0'line",118,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"replace-contents!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"parent")),(new cljs.core.Symbol(null,"node-like"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"parent")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"node-like")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/replace-contents!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",128,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"set-text!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"text"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"text")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/set-text!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",48,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"special-listener-makers")),cljs.core.hash_map("\uFDD0'line",189,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/special-listener-makers"))),(new cljs.core.Symbol(null,"insert-before!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"other"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"other")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/insert-before!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","insert `node` before `other`, both node-like,\n   `other` must have a parent. return `node`","\uFDD0'line",96,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"hidden?")),cljs.core.hash_map("\uFDD0'line",31,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/hidden?"))),(new cljs.core.Symbol(null,"add-class!")),cljs.core.hash_map("\uFDD0'line",20,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/add-class!"))),(new cljs.core.Symbol(null,"listen!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem-sel")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"type-fs"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem-sel")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type-fs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/listen!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","Adds `f` as a listener for events of type `event-type` on\n   `elem-sel`, which must either be a DOM node, or a sequence\n   whose first item is a DOM node.\n\n   In other words, the call to `listen!` can take two forms:\n\n   If `elem-sel` is a DOM node, i.e., you're doing something like:\n\n       (listen! elem :click click-handler)\n\n   then `click-handler` will be set as a listener for `click` events\n   on the `elem`.\n\n   If `elem-sel` is a sequence:\n\n       (listen! [elem :.selector.for :.some.descendants] :click click-handler)\n\n   then `click-handler` will be set as a listener for `click` events\n   on descendants of `elem` that match the selector\n\n   Also accepts any number of event-type and handler pairs for setting\n   multiple listeners at once:\n\n       (listen! some-elem :click click-handler :hover hover-handler)","\uFDD0'line",230,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"listen-once!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem-sel")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"type-fs"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem-sel")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"type-fs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/listen-once!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",298,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"remove!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/remove!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","remove node-like `elem` from parent, return node-like projection of elem","\uFDD0'line",134,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"prepend!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"parent")),(new cljs.core.Symbol(null,"child"))]),cljs.core.vec([(new cljs.core.Symbol(null,"parent")),(new cljs.core.Symbol(null,"child")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"more-children"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"parent")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"child")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"parent")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"child")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"more-children")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/prepend!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","prepend `child` to `parent`, both node-like\n   return ->node-like projection of `parent`","\uFDD0'line",82,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/core.cljs"),(new cljs.core.Symbol(null,"dissoc-in")),cljs.core.hash_map("\uFDD0'line",36,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/dissoc-in"))),(new cljs.core.Symbol(null,"hide!")),cljs.core.hash_map("\uFDD0'line",33,"\uFDD0'file","out/dommy/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core/hide!")))),"\uFDD0'imports",null,"\uFDD0'uses-macros",cljs.core.hash_map((new cljs.core.Symbol(null,"sel")),(new cljs.core.Symbol(null,"dommy.macros"))),"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"template")),(new cljs.core.Symbol(null,"dommy.template")),(new cljs.core.Symbol(null,"attrs")),(new cljs.core.Symbol(null,"dommy.attrs")),(new cljs.core.Symbol(null,"utils")),(new cljs.core.Symbol(null,"dommy.utils")),(new cljs.core.Symbol(null,"str")),(new cljs.core.Symbol(null,"clojure.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc","Core DOM manipulaiton function\n\n   Many of these functions take something which is node-like. Node-like\n   refers to the result of calling `dommy.template/->node-like` on the object. For\n   any DOM node, ->node-like returns the same reference equals object. When it gets\n   passed nested data structure it converts to a fresh DOM node. It falls back to the PElement\n   protocol (see dommy.template) so is extensible.","\uFDD0'name",(new cljs.core.Symbol(null,"dommy.core"))),old);
}));
