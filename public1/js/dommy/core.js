// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
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
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3534__auto__ = elem.textContent;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
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
var append_BANG___2 = (function (parent,child){var G__8423 = dommy.template.__GT_node_like.call(null,parent);G__8423.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8423;
});
var append_BANG___3 = (function() { 
var G__8428__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8424_8429 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8425_8430 = null;var count__8426_8431 = (0);var i__8427_8432 = (0);while(true){
if((i__8427_8432 < count__8426_8431))
{var c_8433 = cljs.core._nth.call(null,chunk__8425_8430,i__8427_8432);append_BANG_.call(null,parent__$1,c_8433);
{
var G__8434 = seq__8424_8429;
var G__8435 = chunk__8425_8430;
var G__8436 = count__8426_8431;
var G__8437 = (i__8427_8432 + (1));
seq__8424_8429 = G__8434;
chunk__8425_8430 = G__8435;
count__8426_8431 = G__8436;
i__8427_8432 = G__8437;
continue;
}
} else
{var temp__4126__auto___8438 = cljs.core.seq.call(null,seq__8424_8429);if(temp__4126__auto___8438)
{var seq__8424_8439__$1 = temp__4126__auto___8438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8424_8439__$1))
{var c__4290__auto___8440 = cljs.core.chunk_first.call(null,seq__8424_8439__$1);{
var G__8441 = cljs.core.chunk_rest.call(null,seq__8424_8439__$1);
var G__8442 = c__4290__auto___8440;
var G__8443 = cljs.core.count.call(null,c__4290__auto___8440);
var G__8444 = (0);
seq__8424_8429 = G__8441;
chunk__8425_8430 = G__8442;
count__8426_8431 = G__8443;
i__8427_8432 = G__8444;
continue;
}
} else
{var c_8445 = cljs.core.first.call(null,seq__8424_8439__$1);append_BANG_.call(null,parent__$1,c_8445);
{
var G__8446 = cljs.core.next.call(null,seq__8424_8439__$1);
var G__8447 = null;
var G__8448 = (0);
var G__8449 = (0);
seq__8424_8429 = G__8446;
chunk__8425_8430 = G__8447;
count__8426_8431 = G__8448;
i__8427_8432 = G__8449;
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
var G__8428 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8428__delegate.call(this,parent,child,more_children);};
G__8428.cljs$lang$maxFixedArity = 2;
G__8428.cljs$lang$applyTo = (function (arglist__8450){
var parent = cljs.core.first(arglist__8450);
arglist__8450 = cljs.core.next(arglist__8450);
var child = cljs.core.first(arglist__8450);
var more_children = cljs.core.rest(arglist__8450);
return G__8428__delegate(parent,child,more_children);
});
G__8428.cljs$core$IFn$_invoke$arity$variadic = G__8428__delegate;
return G__8428;
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
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__8459__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8455_8460 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8456_8461 = null;var count__8457_8462 = (0);var i__8458_8463 = (0);while(true){
if((i__8458_8463 < count__8457_8462))
{var c_8464 = cljs.core._nth.call(null,chunk__8456_8461,i__8458_8463);prepend_BANG_.call(null,parent__$1,c_8464);
{
var G__8465 = seq__8455_8460;
var G__8466 = chunk__8456_8461;
var G__8467 = count__8457_8462;
var G__8468 = (i__8458_8463 + (1));
seq__8455_8460 = G__8465;
chunk__8456_8461 = G__8466;
count__8457_8462 = G__8467;
i__8458_8463 = G__8468;
continue;
}
} else
{var temp__4126__auto___8469 = cljs.core.seq.call(null,seq__8455_8460);if(temp__4126__auto___8469)
{var seq__8455_8470__$1 = temp__4126__auto___8469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8455_8470__$1))
{var c__4290__auto___8471 = cljs.core.chunk_first.call(null,seq__8455_8470__$1);{
var G__8472 = cljs.core.chunk_rest.call(null,seq__8455_8470__$1);
var G__8473 = c__4290__auto___8471;
var G__8474 = cljs.core.count.call(null,c__4290__auto___8471);
var G__8475 = (0);
seq__8455_8460 = G__8472;
chunk__8456_8461 = G__8473;
count__8457_8462 = G__8474;
i__8458_8463 = G__8475;
continue;
}
} else
{var c_8476 = cljs.core.first.call(null,seq__8455_8470__$1);prepend_BANG_.call(null,parent__$1,c_8476);
{
var G__8477 = cljs.core.next.call(null,seq__8455_8470__$1);
var G__8478 = null;
var G__8479 = (0);
var G__8480 = (0);
seq__8455_8460 = G__8477;
chunk__8456_8461 = G__8478;
count__8457_8462 = G__8479;
i__8458_8463 = G__8480;
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
var G__8459 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8459__delegate.call(this,parent,child,more_children);};
G__8459.cljs$lang$maxFixedArity = 2;
G__8459.cljs$lang$applyTo = (function (arglist__8481){
var parent = cljs.core.first(arglist__8481);
arglist__8481 = cljs.core.next(arglist__8481);
var child = cljs.core.first(arglist__8481);
var more_children = cljs.core.rest(arglist__8481);
return G__8459__delegate(parent,child,more_children);
});
G__8459.cljs$core$IFn$_invoke$arity$variadic = G__8459__delegate;
return G__8459;
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
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___8482 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___8482))
{var next_8483 = temp__4124__auto___8482;parent.insertBefore(actual_node,next_8483);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8485 = dommy.template.__GT_node_like.call(null,parent);G__8485.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8485,node_like);
return G__8485;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8487 = elem__$1.parentNode;G__8487.removeChild(elem__$1);
return G__8487;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__8493){var vec__8494 = p__8493;var k = cljs.core.nth.call(null,vec__8494,(0),null);var v = cljs.core.nth.call(null,vec__8494,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t8495 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t8495 = (function (v,k,vec__8494,p__8493,container,key_selectors_map,template,selector_map,meta8496){
this.v = v;
this.k = k;
this.vec__8494 = vec__8494;
this.p__8493 = p__8493;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta8496 = meta8496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t8495.cljs$lang$type = true;
dommy.core.t8495.cljs$lang$ctorStr = "dommy.core/t8495";
dommy.core.t8495.cljs$lang$ctorPrWriter = ((function (vec__8494,k,v,container){
return (function (this__4101__auto__,writer__4102__auto__,opt__4103__auto__){return cljs.core._write.call(null,writer__4102__auto__,"dommy.core/t8495");
});})(vec__8494,k,v,container))
;
dommy.core.t8495.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__8494,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__8494,k,v,container))
;
dommy.core.t8495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__8494,k,v,container){
return (function (_8497){var self__ = this;
var _8497__$1 = this;return self__.meta8496;
});})(vec__8494,k,v,container))
;
dommy.core.t8495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__8494,k,v,container){
return (function (_8497,meta8496__$1){var self__ = this;
var _8497__$1 = this;return (new dommy.core.t8495(self__.v,self__.k,self__.vec__8494,self__.p__8493,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta8496__$1));
});})(vec__8494,k,v,container))
;
dommy.core.__GT_t8495 = ((function (vec__8494,k,v,container){
return (function __GT_t8495(v__$1,k__$1,vec__8494__$1,p__8493__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta8496){return (new dommy.core.t8495(v__$1,k__$1,vec__8494__$1,p__8493__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta8496));
});})(vec__8494,k,v,container))
;
}
return (new dommy.core.t8495(v,k,vec__8494,p__8493,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8498_SHARP_){return p1__8498_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
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
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__8499_SHARP_){return !((p1__8499_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
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
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8500){var vec__8501 = p__8500;var special_mouse_event = cljs.core.nth.call(null,vec__8501,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__8501,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__8501,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__8501,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3534__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3522__auto__ = related_target;if(cljs.core.truth_(and__3522__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3522__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__8501,special_mouse_event,real_mouse_event))
});})(vec__8501,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3522__auto__ = selected_target;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3522__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3534__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8502){
var elem = cljs.core.first(arglist__8502);
arglist__8502 = cljs.core.next(arglist__8502);
var f = cljs.core.first(arglist__8502);
var args = cljs.core.rest(arglist__8502);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8503_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8503_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
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
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__8527_8550 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8551 = cljs.core.nth.call(null,vec__8527_8550,(0),null);var selector_8552 = cljs.core.nth.call(null,vec__8527_8550,(1),null);var seq__8528_8553 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8535_8554 = null;var count__8536_8555 = (0);var i__8537_8556 = (0);while(true){
if((i__8537_8556 < count__8536_8555))
{var vec__8544_8557 = cljs.core._nth.call(null,chunk__8535_8554,i__8537_8556);var orig_type_8558 = cljs.core.nth.call(null,vec__8544_8557,(0),null);var f_8559 = cljs.core.nth.call(null,vec__8544_8557,(1),null);var seq__8538_8560 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8558,new cljs.core.PersistentArrayMap.fromArray([orig_type_8558,cljs.core.identity], true, false)));var chunk__8540_8561 = null;var count__8541_8562 = (0);var i__8542_8563 = (0);while(true){
if((i__8542_8563 < count__8541_8562))
{var vec__8545_8564 = cljs.core._nth.call(null,chunk__8540_8561,i__8542_8563);var actual_type_8565 = cljs.core.nth.call(null,vec__8545_8564,(0),null);var factory_8566 = cljs.core.nth.call(null,vec__8545_8564,(1),null);var canonical_f_8567 = (cljs.core.truth_(selector_8552)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8551,selector_8552):cljs.core.identity).call(null,factory_8566.call(null,f_8559));dommy.core.update_event_listeners_BANG_.call(null,elem_8551,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8552,actual_type_8565,f_8559], null),canonical_f_8567);
if(cljs.core.truth_(elem_8551.addEventListener))
{elem_8551.addEventListener(cljs.core.name.call(null,actual_type_8565),canonical_f_8567);
} else
{elem_8551.attachEvent(cljs.core.name.call(null,actual_type_8565),canonical_f_8567);
}
{
var G__8568 = seq__8538_8560;
var G__8569 = chunk__8540_8561;
var G__8570 = count__8541_8562;
var G__8571 = (i__8542_8563 + (1));
seq__8538_8560 = G__8568;
chunk__8540_8561 = G__8569;
count__8541_8562 = G__8570;
i__8542_8563 = G__8571;
continue;
}
} else
{var temp__4126__auto___8572 = cljs.core.seq.call(null,seq__8538_8560);if(temp__4126__auto___8572)
{var seq__8538_8573__$1 = temp__4126__auto___8572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8538_8573__$1))
{var c__4290__auto___8574 = cljs.core.chunk_first.call(null,seq__8538_8573__$1);{
var G__8575 = cljs.core.chunk_rest.call(null,seq__8538_8573__$1);
var G__8576 = c__4290__auto___8574;
var G__8577 = cljs.core.count.call(null,c__4290__auto___8574);
var G__8578 = (0);
seq__8538_8560 = G__8575;
chunk__8540_8561 = G__8576;
count__8541_8562 = G__8577;
i__8542_8563 = G__8578;
continue;
}
} else
{var vec__8546_8579 = cljs.core.first.call(null,seq__8538_8573__$1);var actual_type_8580 = cljs.core.nth.call(null,vec__8546_8579,(0),null);var factory_8581 = cljs.core.nth.call(null,vec__8546_8579,(1),null);var canonical_f_8582 = (cljs.core.truth_(selector_8552)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8551,selector_8552):cljs.core.identity).call(null,factory_8581.call(null,f_8559));dommy.core.update_event_listeners_BANG_.call(null,elem_8551,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8552,actual_type_8580,f_8559], null),canonical_f_8582);
if(cljs.core.truth_(elem_8551.addEventListener))
{elem_8551.addEventListener(cljs.core.name.call(null,actual_type_8580),canonical_f_8582);
} else
{elem_8551.attachEvent(cljs.core.name.call(null,actual_type_8580),canonical_f_8582);
}
{
var G__8583 = cljs.core.next.call(null,seq__8538_8573__$1);
var G__8584 = null;
var G__8585 = (0);
var G__8586 = (0);
seq__8538_8560 = G__8583;
chunk__8540_8561 = G__8584;
count__8541_8562 = G__8585;
i__8542_8563 = G__8586;
continue;
}
}
} else
{}
}
break;
}
{
var G__8587 = seq__8528_8553;
var G__8588 = chunk__8535_8554;
var G__8589 = count__8536_8555;
var G__8590 = (i__8537_8556 + (1));
seq__8528_8553 = G__8587;
chunk__8535_8554 = G__8588;
count__8536_8555 = G__8589;
i__8537_8556 = G__8590;
continue;
}
} else
{var temp__4126__auto___8591 = cljs.core.seq.call(null,seq__8528_8553);if(temp__4126__auto___8591)
{var seq__8528_8592__$1 = temp__4126__auto___8591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8528_8592__$1))
{var c__4290__auto___8593 = cljs.core.chunk_first.call(null,seq__8528_8592__$1);{
var G__8594 = cljs.core.chunk_rest.call(null,seq__8528_8592__$1);
var G__8595 = c__4290__auto___8593;
var G__8596 = cljs.core.count.call(null,c__4290__auto___8593);
var G__8597 = (0);
seq__8528_8553 = G__8594;
chunk__8535_8554 = G__8595;
count__8536_8555 = G__8596;
i__8537_8556 = G__8597;
continue;
}
} else
{var vec__8547_8598 = cljs.core.first.call(null,seq__8528_8592__$1);var orig_type_8599 = cljs.core.nth.call(null,vec__8547_8598,(0),null);var f_8600 = cljs.core.nth.call(null,vec__8547_8598,(1),null);var seq__8529_8601 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8599,new cljs.core.PersistentArrayMap.fromArray([orig_type_8599,cljs.core.identity], true, false)));var chunk__8531_8602 = null;var count__8532_8603 = (0);var i__8533_8604 = (0);while(true){
if((i__8533_8604 < count__8532_8603))
{var vec__8548_8605 = cljs.core._nth.call(null,chunk__8531_8602,i__8533_8604);var actual_type_8606 = cljs.core.nth.call(null,vec__8548_8605,(0),null);var factory_8607 = cljs.core.nth.call(null,vec__8548_8605,(1),null);var canonical_f_8608 = (cljs.core.truth_(selector_8552)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8551,selector_8552):cljs.core.identity).call(null,factory_8607.call(null,f_8600));dommy.core.update_event_listeners_BANG_.call(null,elem_8551,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8552,actual_type_8606,f_8600], null),canonical_f_8608);
if(cljs.core.truth_(elem_8551.addEventListener))
{elem_8551.addEventListener(cljs.core.name.call(null,actual_type_8606),canonical_f_8608);
} else
{elem_8551.attachEvent(cljs.core.name.call(null,actual_type_8606),canonical_f_8608);
}
{
var G__8609 = seq__8529_8601;
var G__8610 = chunk__8531_8602;
var G__8611 = count__8532_8603;
var G__8612 = (i__8533_8604 + (1));
seq__8529_8601 = G__8609;
chunk__8531_8602 = G__8610;
count__8532_8603 = G__8611;
i__8533_8604 = G__8612;
continue;
}
} else
{var temp__4126__auto___8613__$1 = cljs.core.seq.call(null,seq__8529_8601);if(temp__4126__auto___8613__$1)
{var seq__8529_8614__$1 = temp__4126__auto___8613__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8529_8614__$1))
{var c__4290__auto___8615 = cljs.core.chunk_first.call(null,seq__8529_8614__$1);{
var G__8616 = cljs.core.chunk_rest.call(null,seq__8529_8614__$1);
var G__8617 = c__4290__auto___8615;
var G__8618 = cljs.core.count.call(null,c__4290__auto___8615);
var G__8619 = (0);
seq__8529_8601 = G__8616;
chunk__8531_8602 = G__8617;
count__8532_8603 = G__8618;
i__8533_8604 = G__8619;
continue;
}
} else
{var vec__8549_8620 = cljs.core.first.call(null,seq__8529_8614__$1);var actual_type_8621 = cljs.core.nth.call(null,vec__8549_8620,(0),null);var factory_8622 = cljs.core.nth.call(null,vec__8549_8620,(1),null);var canonical_f_8623 = (cljs.core.truth_(selector_8552)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8551,selector_8552):cljs.core.identity).call(null,factory_8622.call(null,f_8600));dommy.core.update_event_listeners_BANG_.call(null,elem_8551,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8552,actual_type_8621,f_8600], null),canonical_f_8623);
if(cljs.core.truth_(elem_8551.addEventListener))
{elem_8551.addEventListener(cljs.core.name.call(null,actual_type_8621),canonical_f_8623);
} else
{elem_8551.attachEvent(cljs.core.name.call(null,actual_type_8621),canonical_f_8623);
}
{
var G__8624 = cljs.core.next.call(null,seq__8529_8614__$1);
var G__8625 = null;
var G__8626 = (0);
var G__8627 = (0);
seq__8529_8601 = G__8624;
chunk__8531_8602 = G__8625;
count__8532_8603 = G__8626;
i__8533_8604 = G__8627;
continue;
}
}
} else
{}
}
break;
}
{
var G__8628 = cljs.core.next.call(null,seq__8528_8592__$1);
var G__8629 = null;
var G__8630 = (0);
var G__8631 = (0);
seq__8528_8553 = G__8628;
chunk__8535_8554 = G__8629;
count__8536_8555 = G__8630;
i__8537_8556 = G__8631;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8632){
var elem_sel = cljs.core.first(arglist__8632);
var type_fs = cljs.core.rest(arglist__8632);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__8656_8679 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8680 = cljs.core.nth.call(null,vec__8656_8679,(0),null);var selector_8681 = cljs.core.nth.call(null,vec__8656_8679,(1),null);var seq__8657_8682 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8664_8683 = null;var count__8665_8684 = (0);var i__8666_8685 = (0);while(true){
if((i__8666_8685 < count__8665_8684))
{var vec__8673_8686 = cljs.core._nth.call(null,chunk__8664_8683,i__8666_8685);var orig_type_8687 = cljs.core.nth.call(null,vec__8673_8686,(0),null);var f_8688 = cljs.core.nth.call(null,vec__8673_8686,(1),null);var seq__8667_8689 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8687,new cljs.core.PersistentArrayMap.fromArray([orig_type_8687,cljs.core.identity], true, false)));var chunk__8669_8690 = null;var count__8670_8691 = (0);var i__8671_8692 = (0);while(true){
if((i__8671_8692 < count__8670_8691))
{var vec__8674_8693 = cljs.core._nth.call(null,chunk__8669_8690,i__8671_8692);var actual_type_8694 = cljs.core.nth.call(null,vec__8674_8693,(0),null);var __8695 = cljs.core.nth.call(null,vec__8674_8693,(1),null);var keys_8696 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8681,actual_type_8694,f_8688], null);var canonical_f_8697 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8680),keys_8696);dommy.core.update_event_listeners_BANG_.call(null,elem_8680,dommy.utils.dissoc_in,keys_8696);
if(cljs.core.truth_(elem_8680.removeEventListener))
{elem_8680.removeEventListener(cljs.core.name.call(null,actual_type_8694),canonical_f_8697);
} else
{elem_8680.detachEvent(cljs.core.name.call(null,actual_type_8694),canonical_f_8697);
}
{
var G__8698 = seq__8667_8689;
var G__8699 = chunk__8669_8690;
var G__8700 = count__8670_8691;
var G__8701 = (i__8671_8692 + (1));
seq__8667_8689 = G__8698;
chunk__8669_8690 = G__8699;
count__8670_8691 = G__8700;
i__8671_8692 = G__8701;
continue;
}
} else
{var temp__4126__auto___8702 = cljs.core.seq.call(null,seq__8667_8689);if(temp__4126__auto___8702)
{var seq__8667_8703__$1 = temp__4126__auto___8702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8667_8703__$1))
{var c__4290__auto___8704 = cljs.core.chunk_first.call(null,seq__8667_8703__$1);{
var G__8705 = cljs.core.chunk_rest.call(null,seq__8667_8703__$1);
var G__8706 = c__4290__auto___8704;
var G__8707 = cljs.core.count.call(null,c__4290__auto___8704);
var G__8708 = (0);
seq__8667_8689 = G__8705;
chunk__8669_8690 = G__8706;
count__8670_8691 = G__8707;
i__8671_8692 = G__8708;
continue;
}
} else
{var vec__8675_8709 = cljs.core.first.call(null,seq__8667_8703__$1);var actual_type_8710 = cljs.core.nth.call(null,vec__8675_8709,(0),null);var __8711 = cljs.core.nth.call(null,vec__8675_8709,(1),null);var keys_8712 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8681,actual_type_8710,f_8688], null);var canonical_f_8713 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8680),keys_8712);dommy.core.update_event_listeners_BANG_.call(null,elem_8680,dommy.utils.dissoc_in,keys_8712);
if(cljs.core.truth_(elem_8680.removeEventListener))
{elem_8680.removeEventListener(cljs.core.name.call(null,actual_type_8710),canonical_f_8713);
} else
{elem_8680.detachEvent(cljs.core.name.call(null,actual_type_8710),canonical_f_8713);
}
{
var G__8714 = cljs.core.next.call(null,seq__8667_8703__$1);
var G__8715 = null;
var G__8716 = (0);
var G__8717 = (0);
seq__8667_8689 = G__8714;
chunk__8669_8690 = G__8715;
count__8670_8691 = G__8716;
i__8671_8692 = G__8717;
continue;
}
}
} else
{}
}
break;
}
{
var G__8718 = seq__8657_8682;
var G__8719 = chunk__8664_8683;
var G__8720 = count__8665_8684;
var G__8721 = (i__8666_8685 + (1));
seq__8657_8682 = G__8718;
chunk__8664_8683 = G__8719;
count__8665_8684 = G__8720;
i__8666_8685 = G__8721;
continue;
}
} else
{var temp__4126__auto___8722 = cljs.core.seq.call(null,seq__8657_8682);if(temp__4126__auto___8722)
{var seq__8657_8723__$1 = temp__4126__auto___8722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8657_8723__$1))
{var c__4290__auto___8724 = cljs.core.chunk_first.call(null,seq__8657_8723__$1);{
var G__8725 = cljs.core.chunk_rest.call(null,seq__8657_8723__$1);
var G__8726 = c__4290__auto___8724;
var G__8727 = cljs.core.count.call(null,c__4290__auto___8724);
var G__8728 = (0);
seq__8657_8682 = G__8725;
chunk__8664_8683 = G__8726;
count__8665_8684 = G__8727;
i__8666_8685 = G__8728;
continue;
}
} else
{var vec__8676_8729 = cljs.core.first.call(null,seq__8657_8723__$1);var orig_type_8730 = cljs.core.nth.call(null,vec__8676_8729,(0),null);var f_8731 = cljs.core.nth.call(null,vec__8676_8729,(1),null);var seq__8658_8732 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8730,new cljs.core.PersistentArrayMap.fromArray([orig_type_8730,cljs.core.identity], true, false)));var chunk__8660_8733 = null;var count__8661_8734 = (0);var i__8662_8735 = (0);while(true){
if((i__8662_8735 < count__8661_8734))
{var vec__8677_8736 = cljs.core._nth.call(null,chunk__8660_8733,i__8662_8735);var actual_type_8737 = cljs.core.nth.call(null,vec__8677_8736,(0),null);var __8738 = cljs.core.nth.call(null,vec__8677_8736,(1),null);var keys_8739 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8681,actual_type_8737,f_8731], null);var canonical_f_8740 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8680),keys_8739);dommy.core.update_event_listeners_BANG_.call(null,elem_8680,dommy.utils.dissoc_in,keys_8739);
if(cljs.core.truth_(elem_8680.removeEventListener))
{elem_8680.removeEventListener(cljs.core.name.call(null,actual_type_8737),canonical_f_8740);
} else
{elem_8680.detachEvent(cljs.core.name.call(null,actual_type_8737),canonical_f_8740);
}
{
var G__8741 = seq__8658_8732;
var G__8742 = chunk__8660_8733;
var G__8743 = count__8661_8734;
var G__8744 = (i__8662_8735 + (1));
seq__8658_8732 = G__8741;
chunk__8660_8733 = G__8742;
count__8661_8734 = G__8743;
i__8662_8735 = G__8744;
continue;
}
} else
{var temp__4126__auto___8745__$1 = cljs.core.seq.call(null,seq__8658_8732);if(temp__4126__auto___8745__$1)
{var seq__8658_8746__$1 = temp__4126__auto___8745__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8658_8746__$1))
{var c__4290__auto___8747 = cljs.core.chunk_first.call(null,seq__8658_8746__$1);{
var G__8748 = cljs.core.chunk_rest.call(null,seq__8658_8746__$1);
var G__8749 = c__4290__auto___8747;
var G__8750 = cljs.core.count.call(null,c__4290__auto___8747);
var G__8751 = (0);
seq__8658_8732 = G__8748;
chunk__8660_8733 = G__8749;
count__8661_8734 = G__8750;
i__8662_8735 = G__8751;
continue;
}
} else
{var vec__8678_8752 = cljs.core.first.call(null,seq__8658_8746__$1);var actual_type_8753 = cljs.core.nth.call(null,vec__8678_8752,(0),null);var __8754 = cljs.core.nth.call(null,vec__8678_8752,(1),null);var keys_8755 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8681,actual_type_8753,f_8731], null);var canonical_f_8756 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8680),keys_8755);dommy.core.update_event_listeners_BANG_.call(null,elem_8680,dommy.utils.dissoc_in,keys_8755);
if(cljs.core.truth_(elem_8680.removeEventListener))
{elem_8680.removeEventListener(cljs.core.name.call(null,actual_type_8753),canonical_f_8756);
} else
{elem_8680.detachEvent(cljs.core.name.call(null,actual_type_8753),canonical_f_8756);
}
{
var G__8757 = cljs.core.next.call(null,seq__8658_8746__$1);
var G__8758 = null;
var G__8759 = (0);
var G__8760 = (0);
seq__8658_8732 = G__8757;
chunk__8660_8733 = G__8758;
count__8661_8734 = G__8759;
i__8662_8735 = G__8760;
continue;
}
}
} else
{}
}
break;
}
{
var G__8761 = cljs.core.next.call(null,seq__8657_8723__$1);
var G__8762 = null;
var G__8763 = (0);
var G__8764 = (0);
seq__8657_8682 = G__8761;
chunk__8664_8683 = G__8762;
count__8665_8684 = G__8763;
i__8666_8685 = G__8764;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__8765){
var elem_sel = cljs.core.first(arglist__8765);
var type_fs = cljs.core.rest(arglist__8765);
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
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__8773_8780 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8781 = cljs.core.nth.call(null,vec__8773_8780,(0),null);var selector_8782 = cljs.core.nth.call(null,vec__8773_8780,(1),null);var seq__8774_8783 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8775_8784 = null;var count__8776_8785 = (0);var i__8777_8786 = (0);while(true){
if((i__8777_8786 < count__8776_8785))
{var vec__8778_8787 = cljs.core._nth.call(null,chunk__8775_8784,i__8777_8786);var type_8788 = cljs.core.nth.call(null,vec__8778_8787,(0),null);var f_8789 = cljs.core.nth.call(null,vec__8778_8787,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_8788,((function (seq__8774_8783,chunk__8775_8784,count__8776_8785,i__8777_8786,vec__8778_8787,type_8788,f_8789,vec__8773_8780,elem_8781,selector_8782){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8788,this_fn);
return f_8789.call(null,e);
});})(seq__8774_8783,chunk__8775_8784,count__8776_8785,i__8777_8786,vec__8778_8787,type_8788,f_8789,vec__8773_8780,elem_8781,selector_8782))
);
{
var G__8790 = seq__8774_8783;
var G__8791 = chunk__8775_8784;
var G__8792 = count__8776_8785;
var G__8793 = (i__8777_8786 + (1));
seq__8774_8783 = G__8790;
chunk__8775_8784 = G__8791;
count__8776_8785 = G__8792;
i__8777_8786 = G__8793;
continue;
}
} else
{var temp__4126__auto___8794 = cljs.core.seq.call(null,seq__8774_8783);if(temp__4126__auto___8794)
{var seq__8774_8795__$1 = temp__4126__auto___8794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8774_8795__$1))
{var c__4290__auto___8796 = cljs.core.chunk_first.call(null,seq__8774_8795__$1);{
var G__8797 = cljs.core.chunk_rest.call(null,seq__8774_8795__$1);
var G__8798 = c__4290__auto___8796;
var G__8799 = cljs.core.count.call(null,c__4290__auto___8796);
var G__8800 = (0);
seq__8774_8783 = G__8797;
chunk__8775_8784 = G__8798;
count__8776_8785 = G__8799;
i__8777_8786 = G__8800;
continue;
}
} else
{var vec__8779_8801 = cljs.core.first.call(null,seq__8774_8795__$1);var type_8802 = cljs.core.nth.call(null,vec__8779_8801,(0),null);var f_8803 = cljs.core.nth.call(null,vec__8779_8801,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_8802,((function (seq__8774_8783,chunk__8775_8784,count__8776_8785,i__8777_8786,vec__8779_8801,type_8802,f_8803,seq__8774_8795__$1,temp__4126__auto___8794,vec__8773_8780,elem_8781,selector_8782){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8802,this_fn);
return f_8803.call(null,e);
});})(seq__8774_8783,chunk__8775_8784,count__8776_8785,i__8777_8786,vec__8779_8801,type_8802,f_8803,seq__8774_8795__$1,temp__4126__auto___8794,vec__8773_8780,elem_8781,selector_8782))
);
{
var G__8804 = cljs.core.next.call(null,seq__8774_8795__$1);
var G__8805 = null;
var G__8806 = (0);
var G__8807 = (0);
seq__8774_8783 = G__8804;
chunk__8775_8784 = G__8805;
count__8776_8785 = G__8806;
i__8777_8786 = G__8807;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__8808){
var elem_sel = cljs.core.first(arglist__8808);
var type_fs = cljs.core.rest(arglist__8808);
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
var fire_BANG___delegate = function (node,event_type,p__8809){var vec__8811 = p__8809;var update_event_BANG_ = cljs.core.nth.call(null,vec__8811,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3534__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__8809 = null;if (arguments.length > 2) {
  p__8809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__8809);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__8812){
var node = cljs.core.first(arglist__8812);
arglist__8812 = cljs.core.next(arglist__8812);
var event_type = cljs.core.first(arglist__8812);
var p__8809 = cljs.core.rest(arglist__8812);
return fire_BANG___delegate(node,event_type,p__8809);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map