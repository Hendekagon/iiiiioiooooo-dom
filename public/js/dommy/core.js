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
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like(elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like(elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var or__3943__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like(elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.value = value;
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
var append_BANG___2 = (function (parent,child){var G__5390 = dommy.template.__GT_node_like(parent);G__5390.appendChild(dommy.template.__GT_node_like(child));
return G__5390;
});
var append_BANG___3 = (function() { 
var G__5395__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__5391_5396 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__5392_5397 = null;var count__5393_5398 = 0;var i__5394_5399 = 0;while(true){
if((i__5394_5399 < count__5393_5398))
{var c_5400 = chunk__5392_5397.cljs$core$IIndexed$_nth$arity$2(chunk__5392_5397,i__5394_5399);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_5400);
{
var G__5401 = seq__5391_5396;
var G__5402 = chunk__5392_5397;
var G__5403 = count__5393_5398;
var G__5404 = (i__5394_5399 + 1);
seq__5391_5396 = G__5401;
chunk__5392_5397 = G__5402;
count__5393_5398 = G__5403;
i__5394_5399 = G__5404;
continue;
}
} else
{var temp__4092__auto___5405 = cljs.core.seq(seq__5391_5396);if(temp__4092__auto___5405)
{var seq__5391_5406__$1 = temp__4092__auto___5405;if(cljs.core.chunked_seq_QMARK_(seq__5391_5406__$1))
{var c__3561__auto___5407 = cljs.core.chunk_first(seq__5391_5406__$1);{
var G__5408 = cljs.core.chunk_rest(seq__5391_5406__$1);
var G__5409 = c__3561__auto___5407;
var G__5410 = cljs.core.count(c__3561__auto___5407);
var G__5411 = 0;
seq__5391_5396 = G__5408;
chunk__5392_5397 = G__5409;
count__5393_5398 = G__5410;
i__5394_5399 = G__5411;
continue;
}
} else
{var c_5412 = cljs.core.first(seq__5391_5406__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_5412);
{
var G__5413 = cljs.core.next(seq__5391_5406__$1);
var G__5414 = null;
var G__5415 = 0;
var G__5416 = 0;
seq__5391_5396 = G__5413;
chunk__5392_5397 = G__5414;
count__5393_5398 = G__5415;
i__5394_5399 = G__5416;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__5395 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5395__delegate.call(this,parent,child,more_children);};
G__5395.cljs$lang$maxFixedArity = 2;
G__5395.cljs$lang$applyTo = (function (arglist__5417){
var parent = cljs.core.first(arglist__5417);
arglist__5417 = cljs.core.next(arglist__5417);
var child = cljs.core.first(arglist__5417);
var more_children = cljs.core.rest(arglist__5417);
return G__5395__delegate(parent,child,more_children);
});
G__5395.cljs$core$IFn$_invoke$arity$variadic = G__5395__delegate;
return G__5395;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
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
var prepend_BANG___2 = (function (parent,child){var G__5423 = dommy.template.__GT_node_like(parent);G__5423.insertBefore(dommy.template.__GT_node_like(child),parent.firstChild);
return G__5423;
});
var prepend_BANG___3 = (function() { 
var G__5428__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__5424_5429 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__5425_5430 = null;var count__5426_5431 = 0;var i__5427_5432 = 0;while(true){
if((i__5427_5432 < count__5426_5431))
{var c_5433 = chunk__5425_5430.cljs$core$IIndexed$_nth$arity$2(chunk__5425_5430,i__5427_5432);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_5433);
{
var G__5434 = seq__5424_5429;
var G__5435 = chunk__5425_5430;
var G__5436 = count__5426_5431;
var G__5437 = (i__5427_5432 + 1);
seq__5424_5429 = G__5434;
chunk__5425_5430 = G__5435;
count__5426_5431 = G__5436;
i__5427_5432 = G__5437;
continue;
}
} else
{var temp__4092__auto___5438 = cljs.core.seq(seq__5424_5429);if(temp__4092__auto___5438)
{var seq__5424_5439__$1 = temp__4092__auto___5438;if(cljs.core.chunked_seq_QMARK_(seq__5424_5439__$1))
{var c__3561__auto___5440 = cljs.core.chunk_first(seq__5424_5439__$1);{
var G__5441 = cljs.core.chunk_rest(seq__5424_5439__$1);
var G__5442 = c__3561__auto___5440;
var G__5443 = cljs.core.count(c__3561__auto___5440);
var G__5444 = 0;
seq__5424_5429 = G__5441;
chunk__5425_5430 = G__5442;
count__5426_5431 = G__5443;
i__5427_5432 = G__5444;
continue;
}
} else
{var c_5445 = cljs.core.first(seq__5424_5439__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_5445);
{
var G__5446 = cljs.core.next(seq__5424_5439__$1);
var G__5447 = null;
var G__5448 = 0;
var G__5449 = 0;
seq__5424_5429 = G__5446;
chunk__5425_5430 = G__5447;
count__5426_5431 = G__5448;
i__5427_5432 = G__5449;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__5428 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5428__delegate.call(this,parent,child,more_children);};
G__5428.cljs$lang$maxFixedArity = 2;
G__5428.cljs$lang$applyTo = (function (arglist__5450){
var parent = cljs.core.first(arglist__5450);
arglist__5450 = cljs.core.next(arglist__5450);
var child = cljs.core.first(arglist__5450);
var more_children = cljs.core.rest(arglist__5450);
return G__5428__delegate(parent,child,more_children);
});
G__5428.cljs$core$IFn$_invoke$arity$variadic = G__5428__delegate;
return G__5428;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))], 0)))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___5451 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___5451))
{var next_5452 = temp__4090__auto___5451;parent.insertBefore(actual_node,next_5452);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like(new$);var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))], 0)))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__5454 = dommy.template.__GT_node_like(parent);G__5454.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__5454,node_like);
return G__5454;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__5456 = elem__$1.parentNode;G__5456.removeChild(elem__$1);
return G__5456;
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_(data))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else
{if((function (){var or__3943__auto__ = typeof data === 'string';if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (data instanceof cljs.core.Keyword);
}
})())
{return cljs.core.name(data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__5457_SHARP_){return p1__5457_SHARP_.parentNode;
}),dommy.template.__GT_node_like(elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array(dommy.template.__GT_node_like(dommy.template.__GT_node_like(base)).querySelectorAll(dommy.core.selector(selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
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
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1(selector),dommy.core.ancestor_nodes(dommy.template.__GT_node_like(elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__5458_SHARP_){return !((p1__5458_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes(elem__$1))));
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
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like(descendant);var ancestor__$1 = dommy.template.__GT_node_like(ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5459){var vec__5460 = p__5459;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5460,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5460,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_(related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$90,cljs.core.constant$keyword$92,cljs.core.constant$keyword$91,cljs.core.constant$keyword$93], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var temp__4092__auto__ = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),event.target,selector);if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;event.selectedTarget = selected_target;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3943__auto__ = dommy.template.__GT_node_like(elem).dommyEventListeners;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like(elem);return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5461){
var elem = cljs.core.first(arglist__5461);
arglist__5461 = cljs.core.next(arglist__5461);
var f = cljs.core.first(arglist__5461);
var args = cljs.core.rest(arglist__5461);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_(elem_sel))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__5462_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__5462_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like(elem_sel),null], true);
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
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__5486_5509 = dommy.core.elem_and_selector(elem_sel);var elem_5510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5486_5509,0,null);var selector_5511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5486_5509,1,null);var seq__5487_5512 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__5494_5513 = null;var count__5495_5514 = 0;var i__5496_5515 = 0;while(true){
if((i__5496_5515 < count__5495_5514))
{var vec__5503_5516 = chunk__5494_5513.cljs$core$IIndexed$_nth$arity$2(chunk__5494_5513,i__5496_5515);var orig_type_5517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5503_5516,0,null);var f_5518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5503_5516,1,null);var seq__5497_5519 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_5517,cljs.core.PersistentArrayMap.fromArray([orig_type_5517,cljs.core.identity], true)));var chunk__5499_5520 = null;var count__5500_5521 = 0;var i__5501_5522 = 0;while(true){
if((i__5501_5522 < count__5500_5521))
{var vec__5504_5523 = chunk__5499_5520.cljs$core$IIndexed$_nth$arity$2(chunk__5499_5520,i__5501_5522);var actual_type_5524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5504_5523,0,null);var factory_5525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5504_5523,1,null);var canonical_f_5526 = (cljs.core.truth_(selector_5511)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_5510,selector_5511):cljs.core.identity).call(null,(factory_5525.cljs$core$IFn$_invoke$arity$1 ? factory_5525.cljs$core$IFn$_invoke$arity$1(f_5518) : factory_5525.call(null,f_5518)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_5510,cljs.core.assoc_in,cljs.core.array_seq([cljs.core.PersistentVector.fromArray([selector_5511,actual_type_5524,f_5518], true),canonical_f_5526], 0));
if(cljs.core.truth_(elem_5510.addEventListener))
{elem_5510.addEventListener(cljs.core.name(actual_type_5524),canonical_f_5526);
} else
{elem_5510.attachEvent(cljs.core.name(actual_type_5524),canonical_f_5526);
}
{
var G__5527 = seq__5497_5519;
var G__5528 = chunk__5499_5520;
var G__5529 = count__5500_5521;
var G__5530 = (i__5501_5522 + 1);
seq__5497_5519 = G__5527;
chunk__5499_5520 = G__5528;
count__5500_5521 = G__5529;
i__5501_5522 = G__5530;
continue;
}
} else
{var temp__4092__auto___5531 = cljs.core.seq(seq__5497_5519);if(temp__4092__auto___5531)
{var seq__5497_5532__$1 = temp__4092__auto___5531;if(cljs.core.chunked_seq_QMARK_(seq__5497_5532__$1))
{var c__3561__auto___5533 = cljs.core.chunk_first(seq__5497_5532__$1);{
var G__5534 = cljs.core.chunk_rest(seq__5497_5532__$1);
var G__5535 = c__3561__auto___5533;
var G__5536 = cljs.core.count(c__3561__auto___5533);
var G__5537 = 0;
seq__5497_5519 = G__5534;
chunk__5499_5520 = G__5535;
count__5500_5521 = G__5536;
i__5501_5522 = G__5537;
continue;
}
} else
{var vec__5505_5538 = cljs.core.first(seq__5497_5532__$1);var actual_type_5539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5505_5538,0,null);var factory_5540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5505_5538,1,null);var canonical_f_5541 = (cljs.core.truth_(selector_5511)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_5510,selector_5511):cljs.core.identity).call(null,(factory_5540.cljs$core$IFn$_invoke$arity$1 ? factory_5540.cljs$core$IFn$_invoke$arity$1(f_5518) : factory_5540.call(null,f_5518)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_5510,cljs.core.assoc_in,cljs.core.array_seq([cljs.core.PersistentVector.fromArray([selector_5511,actual_type_5539,f_5518], true),canonical_f_5541], 0));
if(cljs.core.truth_(elem_5510.addEventListener))
{elem_5510.addEventListener(cljs.core.name(actual_type_5539),canonical_f_5541);
} else
{elem_5510.attachEvent(cljs.core.name(actual_type_5539),canonical_f_5541);
}
{
var G__5542 = cljs.core.next(seq__5497_5532__$1);
var G__5543 = null;
var G__5544 = 0;
var G__5545 = 0;
seq__5497_5519 = G__5542;
chunk__5499_5520 = G__5543;
count__5500_5521 = G__5544;
i__5501_5522 = G__5545;
continue;
}
}
} else
{}
}
break;
}
{
var G__5546 = seq__5487_5512;
var G__5547 = chunk__5494_5513;
var G__5548 = count__5495_5514;
var G__5549 = (i__5496_5515 + 1);
seq__5487_5512 = G__5546;
chunk__5494_5513 = G__5547;
count__5495_5514 = G__5548;
i__5496_5515 = G__5549;
continue;
}
} else
{var temp__4092__auto___5550 = cljs.core.seq(seq__5487_5512);if(temp__4092__auto___5550)
{var seq__5487_5551__$1 = temp__4092__auto___5550;if(cljs.core.chunked_seq_QMARK_(seq__5487_5551__$1))
{var c__3561__auto___5552 = cljs.core.chunk_first(seq__5487_5551__$1);{
var G__5553 = cljs.core.chunk_rest(seq__5487_5551__$1);
var G__5554 = c__3561__auto___5552;
var G__5555 = cljs.core.count(c__3561__auto___5552);
var G__5556 = 0;
seq__5487_5512 = G__5553;
chunk__5494_5513 = G__5554;
count__5495_5514 = G__5555;
i__5496_5515 = G__5556;
continue;
}
} else
{var vec__5506_5557 = cljs.core.first(seq__5487_5551__$1);var orig_type_5558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5506_5557,0,null);var f_5559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5506_5557,1,null);var seq__5488_5560 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_5558,cljs.core.PersistentArrayMap.fromArray([orig_type_5558,cljs.core.identity], true)));var chunk__5490_5561 = null;var count__5491_5562 = 0;var i__5492_5563 = 0;while(true){
if((i__5492_5563 < count__5491_5562))
{var vec__5507_5564 = chunk__5490_5561.cljs$core$IIndexed$_nth$arity$2(chunk__5490_5561,i__5492_5563);var actual_type_5565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5507_5564,0,null);var factory_5566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5507_5564,1,null);var canonical_f_5567 = (cljs.core.truth_(selector_5511)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_5510,selector_5511):cljs.core.identity).call(null,(factory_5566.cljs$core$IFn$_invoke$arity$1 ? factory_5566.cljs$core$IFn$_invoke$arity$1(f_5559) : factory_5566.call(null,f_5559)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_5510,cljs.core.assoc_in,cljs.core.array_seq([cljs.core.PersistentVector.fromArray([selector_5511,actual_type_5565,f_5559], true),canonical_f_5567], 0));
if(cljs.core.truth_(elem_5510.addEventListener))
{elem_5510.addEventListener(cljs.core.name(actual_type_5565),canonical_f_5567);
} else
{elem_5510.attachEvent(cljs.core.name(actual_type_5565),canonical_f_5567);
}
{
var G__5568 = seq__5488_5560;
var G__5569 = chunk__5490_5561;
var G__5570 = count__5491_5562;
var G__5571 = (i__5492_5563 + 1);
seq__5488_5560 = G__5568;
chunk__5490_5561 = G__5569;
count__5491_5562 = G__5570;
i__5492_5563 = G__5571;
continue;
}
} else
{var temp__4092__auto___5572__$1 = cljs.core.seq(seq__5488_5560);if(temp__4092__auto___5572__$1)
{var seq__5488_5573__$1 = temp__4092__auto___5572__$1;if(cljs.core.chunked_seq_QMARK_(seq__5488_5573__$1))
{var c__3561__auto___5574 = cljs.core.chunk_first(seq__5488_5573__$1);{
var G__5575 = cljs.core.chunk_rest(seq__5488_5573__$1);
var G__5576 = c__3561__auto___5574;
var G__5577 = cljs.core.count(c__3561__auto___5574);
var G__5578 = 0;
seq__5488_5560 = G__5575;
chunk__5490_5561 = G__5576;
count__5491_5562 = G__5577;
i__5492_5563 = G__5578;
continue;
}
} else
{var vec__5508_5579 = cljs.core.first(seq__5488_5573__$1);var actual_type_5580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5508_5579,0,null);var factory_5581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5508_5579,1,null);var canonical_f_5582 = (cljs.core.truth_(selector_5511)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_5510,selector_5511):cljs.core.identity).call(null,(factory_5581.cljs$core$IFn$_invoke$arity$1 ? factory_5581.cljs$core$IFn$_invoke$arity$1(f_5559) : factory_5581.call(null,f_5559)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_5510,cljs.core.assoc_in,cljs.core.array_seq([cljs.core.PersistentVector.fromArray([selector_5511,actual_type_5580,f_5559], true),canonical_f_5582], 0));
if(cljs.core.truth_(elem_5510.addEventListener))
{elem_5510.addEventListener(cljs.core.name(actual_type_5580),canonical_f_5582);
} else
{elem_5510.attachEvent(cljs.core.name(actual_type_5580),canonical_f_5582);
}
{
var G__5583 = cljs.core.next(seq__5488_5573__$1);
var G__5584 = null;
var G__5585 = 0;
var G__5586 = 0;
seq__5488_5560 = G__5583;
chunk__5490_5561 = G__5584;
count__5491_5562 = G__5585;
i__5492_5563 = G__5586;
continue;
}
}
} else
{}
}
break;
}
{
var G__5587 = cljs.core.next(seq__5487_5551__$1);
var G__5588 = null;
var G__5589 = 0;
var G__5590 = 0;
seq__5487_5512 = G__5587;
chunk__5494_5513 = G__5588;
count__5495_5514 = G__5589;
i__5496_5515 = G__5590;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__5591){
var elem_sel = cljs.core.first(arglist__5591);
var type_fs = cljs.core.rest(arglist__5591);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__5615_5638 = dommy.core.elem_and_selector(elem_sel);var elem_5639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615_5638,0,null);var selector_5640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615_5638,1,null);var seq__5616_5641 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__5623_5642 = null;var count__5624_5643 = 0;var i__5625_5644 = 0;while(true){
if((i__5625_5644 < count__5624_5643))
{var vec__5632_5645 = chunk__5623_5642.cljs$core$IIndexed$_nth$arity$2(chunk__5623_5642,i__5625_5644);var orig_type_5646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5632_5645,0,null);var f_5647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5632_5645,1,null);var seq__5626_5648 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_5646,cljs.core.PersistentArrayMap.fromArray([orig_type_5646,cljs.core.identity], true)));var chunk__5628_5649 = null;var count__5629_5650 = 0;var i__5630_5651 = 0;while(true){
if((i__5630_5651 < count__5629_5650))
{var vec__5633_5652 = chunk__5628_5649.cljs$core$IIndexed$_nth$arity$2(chunk__5628_5649,i__5630_5651);var actual_type_5653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5633_5652,0,null);var __5654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5633_5652,1,null);var keys_5655 = cljs.core.PersistentVector.fromArray([selector_5640,actual_type_5653,f_5647], true);var canonical_f_5656 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_5639),keys_5655);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_5639,dommy.utils.dissoc_in,cljs.core.array_seq([keys_5655], 0));
if(cljs.core.truth_(elem_5639.removeEventListener))
{elem_5639.removeEventListener(cljs.core.name(actual_type_5653),canonical_f_5656);
} else
{elem_5639.detachEvent(cljs.core.name(actual_type_5653),canonical_f_5656);
}
{
var G__5657 = seq__5626_5648;
var G__5658 = chunk__5628_5649;
var G__5659 = count__5629_5650;
var G__5660 = (i__5630_5651 + 1);
seq__5626_5648 = G__5657;
chunk__5628_5649 = G__5658;
count__5629_5650 = G__5659;
i__5630_5651 = G__5660;
continue;
}
} else
{var temp__4092__auto___5661 = cljs.core.seq(seq__5626_5648);if(temp__4092__auto___5661)
{var seq__5626_5662__$1 = temp__4092__auto___5661;if(cljs.core.chunked_seq_QMARK_(seq__5626_5662__$1))
{var c__3561__auto___5663 = cljs.core.chunk_first(seq__5626_5662__$1);{
var G__5664 = cljs.core.chunk_rest(seq__5626_5662__$1);
var G__5665 = c__3561__auto___5663;
var G__5666 = cljs.core.count(c__3561__auto___5663);
var G__5667 = 0;
seq__5626_5648 = G__5664;
chunk__5628_5649 = G__5665;
count__5629_5650 = G__5666;
i__5630_5651 = G__5667;
continue;
}
} else
{var vec__5634_5668 = cljs.core.first(seq__5626_5662__$1);var actual_type_5669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634_5668,0,null);var __5670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634_5668,1,null);var keys_5671 = cljs.core.PersistentVector.fromArray([selector_5640,actual_type_5669,f_5647], true);var canonical_f_5672 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_5639),keys_5671);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_5639,dommy.utils.dissoc_in,cljs.core.array_seq([keys_5671], 0));
if(cljs.core.truth_(elem_5639.removeEventListener))
{elem_5639.removeEventListener(cljs.core.name(actual_type_5669),canonical_f_5672);
} else
{elem_5639.detachEvent(cljs.core.name(actual_type_5669),canonical_f_5672);
}
{
var G__5673 = cljs.core.next(seq__5626_5662__$1);
var G__5674 = null;
var G__5675 = 0;
var G__5676 = 0;
seq__5626_5648 = G__5673;
chunk__5628_5649 = G__5674;
count__5629_5650 = G__5675;
i__5630_5651 = G__5676;
continue;
}
}
} else
{}
}
break;
}
{
var G__5677 = seq__5616_5641;
var G__5678 = chunk__5623_5642;
var G__5679 = count__5624_5643;
var G__5680 = (i__5625_5644 + 1);
seq__5616_5641 = G__5677;
chunk__5623_5642 = G__5678;
count__5624_5643 = G__5679;
i__5625_5644 = G__5680;
continue;
}
} else
{var temp__4092__auto___5681 = cljs.core.seq(seq__5616_5641);if(temp__4092__auto___5681)
{var seq__5616_5682__$1 = temp__4092__auto___5681;if(cljs.core.chunked_seq_QMARK_(seq__5616_5682__$1))
{var c__3561__auto___5683 = cljs.core.chunk_first(seq__5616_5682__$1);{
var G__5684 = cljs.core.chunk_rest(seq__5616_5682__$1);
var G__5685 = c__3561__auto___5683;
var G__5686 = cljs.core.count(c__3561__auto___5683);
var G__5687 = 0;
seq__5616_5641 = G__5684;
chunk__5623_5642 = G__5685;
count__5624_5643 = G__5686;
i__5625_5644 = G__5687;
continue;
}
} else
{var vec__5635_5688 = cljs.core.first(seq__5616_5682__$1);var orig_type_5689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5635_5688,0,null);var f_5690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5635_5688,1,null);var seq__5617_5691 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_5689,cljs.core.PersistentArrayMap.fromArray([orig_type_5689,cljs.core.identity], true)));var chunk__5619_5692 = null;var count__5620_5693 = 0;var i__5621_5694 = 0;while(true){
if((i__5621_5694 < count__5620_5693))
{var vec__5636_5695 = chunk__5619_5692.cljs$core$IIndexed$_nth$arity$2(chunk__5619_5692,i__5621_5694);var actual_type_5696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5636_5695,0,null);var __5697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5636_5695,1,null);var keys_5698 = cljs.core.PersistentVector.fromArray([selector_5640,actual_type_5696,f_5690], true);var canonical_f_5699 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_5639),keys_5698);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_5639,dommy.utils.dissoc_in,cljs.core.array_seq([keys_5698], 0));
if(cljs.core.truth_(elem_5639.removeEventListener))
{elem_5639.removeEventListener(cljs.core.name(actual_type_5696),canonical_f_5699);
} else
{elem_5639.detachEvent(cljs.core.name(actual_type_5696),canonical_f_5699);
}
{
var G__5700 = seq__5617_5691;
var G__5701 = chunk__5619_5692;
var G__5702 = count__5620_5693;
var G__5703 = (i__5621_5694 + 1);
seq__5617_5691 = G__5700;
chunk__5619_5692 = G__5701;
count__5620_5693 = G__5702;
i__5621_5694 = G__5703;
continue;
}
} else
{var temp__4092__auto___5704__$1 = cljs.core.seq(seq__5617_5691);if(temp__4092__auto___5704__$1)
{var seq__5617_5705__$1 = temp__4092__auto___5704__$1;if(cljs.core.chunked_seq_QMARK_(seq__5617_5705__$1))
{var c__3561__auto___5706 = cljs.core.chunk_first(seq__5617_5705__$1);{
var G__5707 = cljs.core.chunk_rest(seq__5617_5705__$1);
var G__5708 = c__3561__auto___5706;
var G__5709 = cljs.core.count(c__3561__auto___5706);
var G__5710 = 0;
seq__5617_5691 = G__5707;
chunk__5619_5692 = G__5708;
count__5620_5693 = G__5709;
i__5621_5694 = G__5710;
continue;
}
} else
{var vec__5637_5711 = cljs.core.first(seq__5617_5705__$1);var actual_type_5712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5637_5711,0,null);var __5713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5637_5711,1,null);var keys_5714 = cljs.core.PersistentVector.fromArray([selector_5640,actual_type_5712,f_5690], true);var canonical_f_5715 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_5639),keys_5714);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_5639,dommy.utils.dissoc_in,cljs.core.array_seq([keys_5714], 0));
if(cljs.core.truth_(elem_5639.removeEventListener))
{elem_5639.removeEventListener(cljs.core.name(actual_type_5712),canonical_f_5715);
} else
{elem_5639.detachEvent(cljs.core.name(actual_type_5712),canonical_f_5715);
}
{
var G__5716 = cljs.core.next(seq__5617_5705__$1);
var G__5717 = null;
var G__5718 = 0;
var G__5719 = 0;
seq__5617_5691 = G__5716;
chunk__5619_5692 = G__5717;
count__5620_5693 = G__5718;
i__5621_5694 = G__5719;
continue;
}
}
} else
{}
}
break;
}
{
var G__5720 = cljs.core.next(seq__5616_5682__$1);
var G__5721 = null;
var G__5722 = 0;
var G__5723 = 0;
seq__5616_5641 = G__5720;
chunk__5623_5642 = G__5721;
count__5624_5643 = G__5722;
i__5625_5644 = G__5723;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5724){
var elem_sel = cljs.core.first(arglist__5724);
var type_fs = cljs.core.rest(arglist__5724);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__5732_5739 = dommy.core.elem_and_selector(elem_sel);var elem_5740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5732_5739,0,null);var selector_5741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5732_5739,1,null);var seq__5733_5742 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__5734_5743 = null;var count__5735_5744 = 0;var i__5736_5745 = 0;while(true){
if((i__5736_5745 < count__5735_5744))
{var vec__5737_5746 = chunk__5734_5743.cljs$core$IIndexed$_nth$arity$2(chunk__5734_5743,i__5736_5745);var type_5747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5737_5746,0,null);var f_5748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5737_5746,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_5747,((function (seq__5733_5742,chunk__5734_5743,count__5735_5744,i__5736_5745,vec__5737_5746,type_5747,f_5748){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_5747,this_fn], 0));
return (f_5748.cljs$core$IFn$_invoke$arity$1 ? f_5748.cljs$core$IFn$_invoke$arity$1(e) : f_5748.call(null,e));
});})(seq__5733_5742,chunk__5734_5743,count__5735_5744,i__5736_5745,vec__5737_5746,type_5747,f_5748))
], 0));
{
var G__5749 = seq__5733_5742;
var G__5750 = chunk__5734_5743;
var G__5751 = count__5735_5744;
var G__5752 = (i__5736_5745 + 1);
seq__5733_5742 = G__5749;
chunk__5734_5743 = G__5750;
count__5735_5744 = G__5751;
i__5736_5745 = G__5752;
continue;
}
} else
{var temp__4092__auto___5753 = cljs.core.seq(seq__5733_5742);if(temp__4092__auto___5753)
{var seq__5733_5754__$1 = temp__4092__auto___5753;if(cljs.core.chunked_seq_QMARK_(seq__5733_5754__$1))
{var c__3561__auto___5755 = cljs.core.chunk_first(seq__5733_5754__$1);{
var G__5756 = cljs.core.chunk_rest(seq__5733_5754__$1);
var G__5757 = c__3561__auto___5755;
var G__5758 = cljs.core.count(c__3561__auto___5755);
var G__5759 = 0;
seq__5733_5742 = G__5756;
chunk__5734_5743 = G__5757;
count__5735_5744 = G__5758;
i__5736_5745 = G__5759;
continue;
}
} else
{var vec__5738_5760 = cljs.core.first(seq__5733_5754__$1);var type_5761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5738_5760,0,null);var f_5762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5738_5760,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_5761,((function (seq__5733_5742,chunk__5734_5743,count__5735_5744,i__5736_5745,vec__5738_5760,type_5761,f_5762,seq__5733_5754__$1,temp__4092__auto___5753){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_5761,this_fn], 0));
return (f_5762.cljs$core$IFn$_invoke$arity$1 ? f_5762.cljs$core$IFn$_invoke$arity$1(e) : f_5762.call(null,e));
});})(seq__5733_5742,chunk__5734_5743,count__5735_5744,i__5736_5745,vec__5738_5760,type_5761,f_5762,seq__5733_5754__$1,temp__4092__auto___5753))
], 0));
{
var G__5763 = cljs.core.next(seq__5733_5754__$1);
var G__5764 = null;
var G__5765 = 0;
var G__5766 = 0;
seq__5733_5742 = G__5763;
chunk__5734_5743 = G__5764;
count__5735_5744 = G__5765;
i__5736_5745 = G__5766;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5767){
var elem_sel = cljs.core.first(arglist__5767);
var type_fs = cljs.core.rest(arglist__5767);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
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
var fire_BANG___delegate = function (node,event_type,p__5768){var vec__5770 = p__5768;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5770,0,null);if(dommy.core.descendant_QMARK_(node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))], 0)))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name(event_type),true,true);
return node.dispatchEvent((update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(event) : update_event_BANG___$1.call(null,event)));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name(event_type))].join(''),(update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(document.createEventObject()) : update_event_BANG___$1.call(null,document.createEventObject())));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__5768 = null;if (arguments.length > 2) {
  p__5768 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__5768);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__5771){
var node = cljs.core.first(arglist__5771);
arglist__5771 = cljs.core.next(arglist__5771);
var event_type = cljs.core.first(arglist__5771);
var p__5768 = cljs.core.rest(arglist__5771);
return fire_BANG___delegate(node,event_type,p__5768);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
