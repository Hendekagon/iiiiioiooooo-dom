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
var append_BANG___2 = (function (parent,child){var G__8559 = dommy.template.__GT_node_like.call(null,parent);G__8559.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8559;
});
var append_BANG___3 = (function() { 
var G__8564__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8560_8565 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8561_8566 = null;var count__8562_8567 = (0);var i__8563_8568 = (0);while(true){
if((i__8563_8568 < count__8562_8567))
{var c_8569 = cljs.core._nth.call(null,chunk__8561_8566,i__8563_8568);append_BANG_.call(null,parent__$1,c_8569);
{
var G__8570 = seq__8560_8565;
var G__8571 = chunk__8561_8566;
var G__8572 = count__8562_8567;
var G__8573 = (i__8563_8568 + (1));
seq__8560_8565 = G__8570;
chunk__8561_8566 = G__8571;
count__8562_8567 = G__8572;
i__8563_8568 = G__8573;
continue;
}
} else
{var temp__4126__auto___8574 = cljs.core.seq.call(null,seq__8560_8565);if(temp__4126__auto___8574)
{var seq__8560_8575__$1 = temp__4126__auto___8574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8560_8575__$1))
{var c__4290__auto___8576 = cljs.core.chunk_first.call(null,seq__8560_8575__$1);{
var G__8577 = cljs.core.chunk_rest.call(null,seq__8560_8575__$1);
var G__8578 = c__4290__auto___8576;
var G__8579 = cljs.core.count.call(null,c__4290__auto___8576);
var G__8580 = (0);
seq__8560_8565 = G__8577;
chunk__8561_8566 = G__8578;
count__8562_8567 = G__8579;
i__8563_8568 = G__8580;
continue;
}
} else
{var c_8581 = cljs.core.first.call(null,seq__8560_8575__$1);append_BANG_.call(null,parent__$1,c_8581);
{
var G__8582 = cljs.core.next.call(null,seq__8560_8575__$1);
var G__8583 = null;
var G__8584 = (0);
var G__8585 = (0);
seq__8560_8565 = G__8582;
chunk__8561_8566 = G__8583;
count__8562_8567 = G__8584;
i__8563_8568 = G__8585;
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
var G__8564 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8564__delegate.call(this,parent,child,more_children);};
G__8564.cljs$lang$maxFixedArity = 2;
G__8564.cljs$lang$applyTo = (function (arglist__8586){
var parent = cljs.core.first(arglist__8586);
arglist__8586 = cljs.core.next(arglist__8586);
var child = cljs.core.first(arglist__8586);
var more_children = cljs.core.rest(arglist__8586);
return G__8564__delegate(parent,child,more_children);
});
G__8564.cljs$core$IFn$_invoke$arity$variadic = G__8564__delegate;
return G__8564;
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
var G__8595__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8591_8596 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8592_8597 = null;var count__8593_8598 = (0);var i__8594_8599 = (0);while(true){
if((i__8594_8599 < count__8593_8598))
{var c_8600 = cljs.core._nth.call(null,chunk__8592_8597,i__8594_8599);prepend_BANG_.call(null,parent__$1,c_8600);
{
var G__8601 = seq__8591_8596;
var G__8602 = chunk__8592_8597;
var G__8603 = count__8593_8598;
var G__8604 = (i__8594_8599 + (1));
seq__8591_8596 = G__8601;
chunk__8592_8597 = G__8602;
count__8593_8598 = G__8603;
i__8594_8599 = G__8604;
continue;
}
} else
{var temp__4126__auto___8605 = cljs.core.seq.call(null,seq__8591_8596);if(temp__4126__auto___8605)
{var seq__8591_8606__$1 = temp__4126__auto___8605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8591_8606__$1))
{var c__4290__auto___8607 = cljs.core.chunk_first.call(null,seq__8591_8606__$1);{
var G__8608 = cljs.core.chunk_rest.call(null,seq__8591_8606__$1);
var G__8609 = c__4290__auto___8607;
var G__8610 = cljs.core.count.call(null,c__4290__auto___8607);
var G__8611 = (0);
seq__8591_8596 = G__8608;
chunk__8592_8597 = G__8609;
count__8593_8598 = G__8610;
i__8594_8599 = G__8611;
continue;
}
} else
{var c_8612 = cljs.core.first.call(null,seq__8591_8606__$1);prepend_BANG_.call(null,parent__$1,c_8612);
{
var G__8613 = cljs.core.next.call(null,seq__8591_8606__$1);
var G__8614 = null;
var G__8615 = (0);
var G__8616 = (0);
seq__8591_8596 = G__8613;
chunk__8592_8597 = G__8614;
count__8593_8598 = G__8615;
i__8594_8599 = G__8616;
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
var G__8595 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8595__delegate.call(this,parent,child,more_children);};
G__8595.cljs$lang$maxFixedArity = 2;
G__8595.cljs$lang$applyTo = (function (arglist__8617){
var parent = cljs.core.first(arglist__8617);
arglist__8617 = cljs.core.next(arglist__8617);
var child = cljs.core.first(arglist__8617);
var more_children = cljs.core.rest(arglist__8617);
return G__8595__delegate(parent,child,more_children);
});
G__8595.cljs$core$IFn$_invoke$arity$variadic = G__8595__delegate;
return G__8595;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___8618 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___8618))
{var next_8619 = temp__4124__auto___8618;parent.insertBefore(actual_node,next_8619);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8621 = dommy.template.__GT_node_like.call(null,parent);G__8621.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8621,node_like);
return G__8621;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8623 = elem__$1.parentNode;G__8623.removeChild(elem__$1);
return G__8623;
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
return (function (p__8629){var vec__8630 = p__8629;var k = cljs.core.nth.call(null,vec__8630,(0),null);var v = cljs.core.nth.call(null,vec__8630,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t8631 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t8631 = (function (v,k,vec__8630,p__8629,container,key_selectors_map,template,selector_map,meta8632){
this.v = v;
this.k = k;
this.vec__8630 = vec__8630;
this.p__8629 = p__8629;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta8632 = meta8632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t8631.cljs$lang$type = true;
dommy.core.t8631.cljs$lang$ctorStr = "dommy.core/t8631";
dommy.core.t8631.cljs$lang$ctorPrWriter = ((function (vec__8630,k,v,container){
return (function (this__4101__auto__,writer__4102__auto__,opt__4103__auto__){return cljs.core._write.call(null,writer__4102__auto__,"dommy.core/t8631");
});})(vec__8630,k,v,container))
;
dommy.core.t8631.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__8630,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__8630,k,v,container))
;
dommy.core.t8631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__8630,k,v,container){
return (function (_8633){var self__ = this;
var _8633__$1 = this;return self__.meta8632;
});})(vec__8630,k,v,container))
;
dommy.core.t8631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__8630,k,v,container){
return (function (_8633,meta8632__$1){var self__ = this;
var _8633__$1 = this;return (new dommy.core.t8631(self__.v,self__.k,self__.vec__8630,self__.p__8629,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta8632__$1));
});})(vec__8630,k,v,container))
;
dommy.core.__GT_t8631 = ((function (vec__8630,k,v,container){
return (function __GT_t8631(v__$1,k__$1,vec__8630__$1,p__8629__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta8632){return (new dommy.core.t8631(v__$1,k__$1,vec__8630__$1,p__8629__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta8632));
});})(vec__8630,k,v,container))
;
}
return (new dommy.core.t8631(v,k,vec__8630,p__8629,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8634_SHARP_){return p1__8634_SHARP_.parentNode;
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
return (function (p1__8635_SHARP_){return !((p1__8635_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8636){var vec__8637 = p__8636;var special_mouse_event = cljs.core.nth.call(null,vec__8637,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__8637,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__8637,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__8637,special_mouse_event,real_mouse_event){
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
;})(vec__8637,special_mouse_event,real_mouse_event))
});})(vec__8637,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8638){
var elem = cljs.core.first(arglist__8638);
arglist__8638 = cljs.core.next(arglist__8638);
var f = cljs.core.first(arglist__8638);
var args = cljs.core.rest(arglist__8638);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8639_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8639_SHARP_));
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
var vec__8663_8686 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8687 = cljs.core.nth.call(null,vec__8663_8686,(0),null);var selector_8688 = cljs.core.nth.call(null,vec__8663_8686,(1),null);var seq__8664_8689 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8671_8690 = null;var count__8672_8691 = (0);var i__8673_8692 = (0);while(true){
if((i__8673_8692 < count__8672_8691))
{var vec__8680_8693 = cljs.core._nth.call(null,chunk__8671_8690,i__8673_8692);var orig_type_8694 = cljs.core.nth.call(null,vec__8680_8693,(0),null);var f_8695 = cljs.core.nth.call(null,vec__8680_8693,(1),null);var seq__8674_8696 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8694,new cljs.core.PersistentArrayMap.fromArray([orig_type_8694,cljs.core.identity], true, false)));var chunk__8676_8697 = null;var count__8677_8698 = (0);var i__8678_8699 = (0);while(true){
if((i__8678_8699 < count__8677_8698))
{var vec__8681_8700 = cljs.core._nth.call(null,chunk__8676_8697,i__8678_8699);var actual_type_8701 = cljs.core.nth.call(null,vec__8681_8700,(0),null);var factory_8702 = cljs.core.nth.call(null,vec__8681_8700,(1),null);var canonical_f_8703 = (cljs.core.truth_(selector_8688)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8687,selector_8688):cljs.core.identity).call(null,factory_8702.call(null,f_8695));dommy.core.update_event_listeners_BANG_.call(null,elem_8687,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8688,actual_type_8701,f_8695], null),canonical_f_8703);
if(cljs.core.truth_(elem_8687.addEventListener))
{elem_8687.addEventListener(cljs.core.name.call(null,actual_type_8701),canonical_f_8703);
} else
{elem_8687.attachEvent(cljs.core.name.call(null,actual_type_8701),canonical_f_8703);
}
{
var G__8704 = seq__8674_8696;
var G__8705 = chunk__8676_8697;
var G__8706 = count__8677_8698;
var G__8707 = (i__8678_8699 + (1));
seq__8674_8696 = G__8704;
chunk__8676_8697 = G__8705;
count__8677_8698 = G__8706;
i__8678_8699 = G__8707;
continue;
}
} else
{var temp__4126__auto___8708 = cljs.core.seq.call(null,seq__8674_8696);if(temp__4126__auto___8708)
{var seq__8674_8709__$1 = temp__4126__auto___8708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8674_8709__$1))
{var c__4290__auto___8710 = cljs.core.chunk_first.call(null,seq__8674_8709__$1);{
var G__8711 = cljs.core.chunk_rest.call(null,seq__8674_8709__$1);
var G__8712 = c__4290__auto___8710;
var G__8713 = cljs.core.count.call(null,c__4290__auto___8710);
var G__8714 = (0);
seq__8674_8696 = G__8711;
chunk__8676_8697 = G__8712;
count__8677_8698 = G__8713;
i__8678_8699 = G__8714;
continue;
}
} else
{var vec__8682_8715 = cljs.core.first.call(null,seq__8674_8709__$1);var actual_type_8716 = cljs.core.nth.call(null,vec__8682_8715,(0),null);var factory_8717 = cljs.core.nth.call(null,vec__8682_8715,(1),null);var canonical_f_8718 = (cljs.core.truth_(selector_8688)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8687,selector_8688):cljs.core.identity).call(null,factory_8717.call(null,f_8695));dommy.core.update_event_listeners_BANG_.call(null,elem_8687,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8688,actual_type_8716,f_8695], null),canonical_f_8718);
if(cljs.core.truth_(elem_8687.addEventListener))
{elem_8687.addEventListener(cljs.core.name.call(null,actual_type_8716),canonical_f_8718);
} else
{elem_8687.attachEvent(cljs.core.name.call(null,actual_type_8716),canonical_f_8718);
}
{
var G__8719 = cljs.core.next.call(null,seq__8674_8709__$1);
var G__8720 = null;
var G__8721 = (0);
var G__8722 = (0);
seq__8674_8696 = G__8719;
chunk__8676_8697 = G__8720;
count__8677_8698 = G__8721;
i__8678_8699 = G__8722;
continue;
}
}
} else
{}
}
break;
}
{
var G__8723 = seq__8664_8689;
var G__8724 = chunk__8671_8690;
var G__8725 = count__8672_8691;
var G__8726 = (i__8673_8692 + (1));
seq__8664_8689 = G__8723;
chunk__8671_8690 = G__8724;
count__8672_8691 = G__8725;
i__8673_8692 = G__8726;
continue;
}
} else
{var temp__4126__auto___8727 = cljs.core.seq.call(null,seq__8664_8689);if(temp__4126__auto___8727)
{var seq__8664_8728__$1 = temp__4126__auto___8727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8664_8728__$1))
{var c__4290__auto___8729 = cljs.core.chunk_first.call(null,seq__8664_8728__$1);{
var G__8730 = cljs.core.chunk_rest.call(null,seq__8664_8728__$1);
var G__8731 = c__4290__auto___8729;
var G__8732 = cljs.core.count.call(null,c__4290__auto___8729);
var G__8733 = (0);
seq__8664_8689 = G__8730;
chunk__8671_8690 = G__8731;
count__8672_8691 = G__8732;
i__8673_8692 = G__8733;
continue;
}
} else
{var vec__8683_8734 = cljs.core.first.call(null,seq__8664_8728__$1);var orig_type_8735 = cljs.core.nth.call(null,vec__8683_8734,(0),null);var f_8736 = cljs.core.nth.call(null,vec__8683_8734,(1),null);var seq__8665_8737 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8735,new cljs.core.PersistentArrayMap.fromArray([orig_type_8735,cljs.core.identity], true, false)));var chunk__8667_8738 = null;var count__8668_8739 = (0);var i__8669_8740 = (0);while(true){
if((i__8669_8740 < count__8668_8739))
{var vec__8684_8741 = cljs.core._nth.call(null,chunk__8667_8738,i__8669_8740);var actual_type_8742 = cljs.core.nth.call(null,vec__8684_8741,(0),null);var factory_8743 = cljs.core.nth.call(null,vec__8684_8741,(1),null);var canonical_f_8744 = (cljs.core.truth_(selector_8688)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8687,selector_8688):cljs.core.identity).call(null,factory_8743.call(null,f_8736));dommy.core.update_event_listeners_BANG_.call(null,elem_8687,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8688,actual_type_8742,f_8736], null),canonical_f_8744);
if(cljs.core.truth_(elem_8687.addEventListener))
{elem_8687.addEventListener(cljs.core.name.call(null,actual_type_8742),canonical_f_8744);
} else
{elem_8687.attachEvent(cljs.core.name.call(null,actual_type_8742),canonical_f_8744);
}
{
var G__8745 = seq__8665_8737;
var G__8746 = chunk__8667_8738;
var G__8747 = count__8668_8739;
var G__8748 = (i__8669_8740 + (1));
seq__8665_8737 = G__8745;
chunk__8667_8738 = G__8746;
count__8668_8739 = G__8747;
i__8669_8740 = G__8748;
continue;
}
} else
{var temp__4126__auto___8749__$1 = cljs.core.seq.call(null,seq__8665_8737);if(temp__4126__auto___8749__$1)
{var seq__8665_8750__$1 = temp__4126__auto___8749__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8665_8750__$1))
{var c__4290__auto___8751 = cljs.core.chunk_first.call(null,seq__8665_8750__$1);{
var G__8752 = cljs.core.chunk_rest.call(null,seq__8665_8750__$1);
var G__8753 = c__4290__auto___8751;
var G__8754 = cljs.core.count.call(null,c__4290__auto___8751);
var G__8755 = (0);
seq__8665_8737 = G__8752;
chunk__8667_8738 = G__8753;
count__8668_8739 = G__8754;
i__8669_8740 = G__8755;
continue;
}
} else
{var vec__8685_8756 = cljs.core.first.call(null,seq__8665_8750__$1);var actual_type_8757 = cljs.core.nth.call(null,vec__8685_8756,(0),null);var factory_8758 = cljs.core.nth.call(null,vec__8685_8756,(1),null);var canonical_f_8759 = (cljs.core.truth_(selector_8688)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8687,selector_8688):cljs.core.identity).call(null,factory_8758.call(null,f_8736));dommy.core.update_event_listeners_BANG_.call(null,elem_8687,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8688,actual_type_8757,f_8736], null),canonical_f_8759);
if(cljs.core.truth_(elem_8687.addEventListener))
{elem_8687.addEventListener(cljs.core.name.call(null,actual_type_8757),canonical_f_8759);
} else
{elem_8687.attachEvent(cljs.core.name.call(null,actual_type_8757),canonical_f_8759);
}
{
var G__8760 = cljs.core.next.call(null,seq__8665_8750__$1);
var G__8761 = null;
var G__8762 = (0);
var G__8763 = (0);
seq__8665_8737 = G__8760;
chunk__8667_8738 = G__8761;
count__8668_8739 = G__8762;
i__8669_8740 = G__8763;
continue;
}
}
} else
{}
}
break;
}
{
var G__8764 = cljs.core.next.call(null,seq__8664_8728__$1);
var G__8765 = null;
var G__8766 = (0);
var G__8767 = (0);
seq__8664_8689 = G__8764;
chunk__8671_8690 = G__8765;
count__8672_8691 = G__8766;
i__8673_8692 = G__8767;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8768){
var elem_sel = cljs.core.first(arglist__8768);
var type_fs = cljs.core.rest(arglist__8768);
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
var vec__8792_8815 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8816 = cljs.core.nth.call(null,vec__8792_8815,(0),null);var selector_8817 = cljs.core.nth.call(null,vec__8792_8815,(1),null);var seq__8793_8818 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8800_8819 = null;var count__8801_8820 = (0);var i__8802_8821 = (0);while(true){
if((i__8802_8821 < count__8801_8820))
{var vec__8809_8822 = cljs.core._nth.call(null,chunk__8800_8819,i__8802_8821);var orig_type_8823 = cljs.core.nth.call(null,vec__8809_8822,(0),null);var f_8824 = cljs.core.nth.call(null,vec__8809_8822,(1),null);var seq__8803_8825 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8823,new cljs.core.PersistentArrayMap.fromArray([orig_type_8823,cljs.core.identity], true, false)));var chunk__8805_8826 = null;var count__8806_8827 = (0);var i__8807_8828 = (0);while(true){
if((i__8807_8828 < count__8806_8827))
{var vec__8810_8829 = cljs.core._nth.call(null,chunk__8805_8826,i__8807_8828);var actual_type_8830 = cljs.core.nth.call(null,vec__8810_8829,(0),null);var __8831 = cljs.core.nth.call(null,vec__8810_8829,(1),null);var keys_8832 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8817,actual_type_8830,f_8824], null);var canonical_f_8833 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8816),keys_8832);dommy.core.update_event_listeners_BANG_.call(null,elem_8816,dommy.utils.dissoc_in,keys_8832);
if(cljs.core.truth_(elem_8816.removeEventListener))
{elem_8816.removeEventListener(cljs.core.name.call(null,actual_type_8830),canonical_f_8833);
} else
{elem_8816.detachEvent(cljs.core.name.call(null,actual_type_8830),canonical_f_8833);
}
{
var G__8834 = seq__8803_8825;
var G__8835 = chunk__8805_8826;
var G__8836 = count__8806_8827;
var G__8837 = (i__8807_8828 + (1));
seq__8803_8825 = G__8834;
chunk__8805_8826 = G__8835;
count__8806_8827 = G__8836;
i__8807_8828 = G__8837;
continue;
}
} else
{var temp__4126__auto___8838 = cljs.core.seq.call(null,seq__8803_8825);if(temp__4126__auto___8838)
{var seq__8803_8839__$1 = temp__4126__auto___8838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8803_8839__$1))
{var c__4290__auto___8840 = cljs.core.chunk_first.call(null,seq__8803_8839__$1);{
var G__8841 = cljs.core.chunk_rest.call(null,seq__8803_8839__$1);
var G__8842 = c__4290__auto___8840;
var G__8843 = cljs.core.count.call(null,c__4290__auto___8840);
var G__8844 = (0);
seq__8803_8825 = G__8841;
chunk__8805_8826 = G__8842;
count__8806_8827 = G__8843;
i__8807_8828 = G__8844;
continue;
}
} else
{var vec__8811_8845 = cljs.core.first.call(null,seq__8803_8839__$1);var actual_type_8846 = cljs.core.nth.call(null,vec__8811_8845,(0),null);var __8847 = cljs.core.nth.call(null,vec__8811_8845,(1),null);var keys_8848 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8817,actual_type_8846,f_8824], null);var canonical_f_8849 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8816),keys_8848);dommy.core.update_event_listeners_BANG_.call(null,elem_8816,dommy.utils.dissoc_in,keys_8848);
if(cljs.core.truth_(elem_8816.removeEventListener))
{elem_8816.removeEventListener(cljs.core.name.call(null,actual_type_8846),canonical_f_8849);
} else
{elem_8816.detachEvent(cljs.core.name.call(null,actual_type_8846),canonical_f_8849);
}
{
var G__8850 = cljs.core.next.call(null,seq__8803_8839__$1);
var G__8851 = null;
var G__8852 = (0);
var G__8853 = (0);
seq__8803_8825 = G__8850;
chunk__8805_8826 = G__8851;
count__8806_8827 = G__8852;
i__8807_8828 = G__8853;
continue;
}
}
} else
{}
}
break;
}
{
var G__8854 = seq__8793_8818;
var G__8855 = chunk__8800_8819;
var G__8856 = count__8801_8820;
var G__8857 = (i__8802_8821 + (1));
seq__8793_8818 = G__8854;
chunk__8800_8819 = G__8855;
count__8801_8820 = G__8856;
i__8802_8821 = G__8857;
continue;
}
} else
{var temp__4126__auto___8858 = cljs.core.seq.call(null,seq__8793_8818);if(temp__4126__auto___8858)
{var seq__8793_8859__$1 = temp__4126__auto___8858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8793_8859__$1))
{var c__4290__auto___8860 = cljs.core.chunk_first.call(null,seq__8793_8859__$1);{
var G__8861 = cljs.core.chunk_rest.call(null,seq__8793_8859__$1);
var G__8862 = c__4290__auto___8860;
var G__8863 = cljs.core.count.call(null,c__4290__auto___8860);
var G__8864 = (0);
seq__8793_8818 = G__8861;
chunk__8800_8819 = G__8862;
count__8801_8820 = G__8863;
i__8802_8821 = G__8864;
continue;
}
} else
{var vec__8812_8865 = cljs.core.first.call(null,seq__8793_8859__$1);var orig_type_8866 = cljs.core.nth.call(null,vec__8812_8865,(0),null);var f_8867 = cljs.core.nth.call(null,vec__8812_8865,(1),null);var seq__8794_8868 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8866,new cljs.core.PersistentArrayMap.fromArray([orig_type_8866,cljs.core.identity], true, false)));var chunk__8796_8869 = null;var count__8797_8870 = (0);var i__8798_8871 = (0);while(true){
if((i__8798_8871 < count__8797_8870))
{var vec__8813_8872 = cljs.core._nth.call(null,chunk__8796_8869,i__8798_8871);var actual_type_8873 = cljs.core.nth.call(null,vec__8813_8872,(0),null);var __8874 = cljs.core.nth.call(null,vec__8813_8872,(1),null);var keys_8875 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8817,actual_type_8873,f_8867], null);var canonical_f_8876 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8816),keys_8875);dommy.core.update_event_listeners_BANG_.call(null,elem_8816,dommy.utils.dissoc_in,keys_8875);
if(cljs.core.truth_(elem_8816.removeEventListener))
{elem_8816.removeEventListener(cljs.core.name.call(null,actual_type_8873),canonical_f_8876);
} else
{elem_8816.detachEvent(cljs.core.name.call(null,actual_type_8873),canonical_f_8876);
}
{
var G__8877 = seq__8794_8868;
var G__8878 = chunk__8796_8869;
var G__8879 = count__8797_8870;
var G__8880 = (i__8798_8871 + (1));
seq__8794_8868 = G__8877;
chunk__8796_8869 = G__8878;
count__8797_8870 = G__8879;
i__8798_8871 = G__8880;
continue;
}
} else
{var temp__4126__auto___8881__$1 = cljs.core.seq.call(null,seq__8794_8868);if(temp__4126__auto___8881__$1)
{var seq__8794_8882__$1 = temp__4126__auto___8881__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8794_8882__$1))
{var c__4290__auto___8883 = cljs.core.chunk_first.call(null,seq__8794_8882__$1);{
var G__8884 = cljs.core.chunk_rest.call(null,seq__8794_8882__$1);
var G__8885 = c__4290__auto___8883;
var G__8886 = cljs.core.count.call(null,c__4290__auto___8883);
var G__8887 = (0);
seq__8794_8868 = G__8884;
chunk__8796_8869 = G__8885;
count__8797_8870 = G__8886;
i__8798_8871 = G__8887;
continue;
}
} else
{var vec__8814_8888 = cljs.core.first.call(null,seq__8794_8882__$1);var actual_type_8889 = cljs.core.nth.call(null,vec__8814_8888,(0),null);var __8890 = cljs.core.nth.call(null,vec__8814_8888,(1),null);var keys_8891 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8817,actual_type_8889,f_8867], null);var canonical_f_8892 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8816),keys_8891);dommy.core.update_event_listeners_BANG_.call(null,elem_8816,dommy.utils.dissoc_in,keys_8891);
if(cljs.core.truth_(elem_8816.removeEventListener))
{elem_8816.removeEventListener(cljs.core.name.call(null,actual_type_8889),canonical_f_8892);
} else
{elem_8816.detachEvent(cljs.core.name.call(null,actual_type_8889),canonical_f_8892);
}
{
var G__8893 = cljs.core.next.call(null,seq__8794_8882__$1);
var G__8894 = null;
var G__8895 = (0);
var G__8896 = (0);
seq__8794_8868 = G__8893;
chunk__8796_8869 = G__8894;
count__8797_8870 = G__8895;
i__8798_8871 = G__8896;
continue;
}
}
} else
{}
}
break;
}
{
var G__8897 = cljs.core.next.call(null,seq__8793_8859__$1);
var G__8898 = null;
var G__8899 = (0);
var G__8900 = (0);
seq__8793_8818 = G__8897;
chunk__8800_8819 = G__8898;
count__8801_8820 = G__8899;
i__8802_8821 = G__8900;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__8901){
var elem_sel = cljs.core.first(arglist__8901);
var type_fs = cljs.core.rest(arglist__8901);
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
var vec__8909_8916 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8917 = cljs.core.nth.call(null,vec__8909_8916,(0),null);var selector_8918 = cljs.core.nth.call(null,vec__8909_8916,(1),null);var seq__8910_8919 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8911_8920 = null;var count__8912_8921 = (0);var i__8913_8922 = (0);while(true){
if((i__8913_8922 < count__8912_8921))
{var vec__8914_8923 = cljs.core._nth.call(null,chunk__8911_8920,i__8913_8922);var type_8924 = cljs.core.nth.call(null,vec__8914_8923,(0),null);var f_8925 = cljs.core.nth.call(null,vec__8914_8923,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_8924,((function (seq__8910_8919,chunk__8911_8920,count__8912_8921,i__8913_8922,vec__8914_8923,type_8924,f_8925,vec__8909_8916,elem_8917,selector_8918){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8924,this_fn);
return f_8925.call(null,e);
});})(seq__8910_8919,chunk__8911_8920,count__8912_8921,i__8913_8922,vec__8914_8923,type_8924,f_8925,vec__8909_8916,elem_8917,selector_8918))
);
{
var G__8926 = seq__8910_8919;
var G__8927 = chunk__8911_8920;
var G__8928 = count__8912_8921;
var G__8929 = (i__8913_8922 + (1));
seq__8910_8919 = G__8926;
chunk__8911_8920 = G__8927;
count__8912_8921 = G__8928;
i__8913_8922 = G__8929;
continue;
}
} else
{var temp__4126__auto___8930 = cljs.core.seq.call(null,seq__8910_8919);if(temp__4126__auto___8930)
{var seq__8910_8931__$1 = temp__4126__auto___8930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8910_8931__$1))
{var c__4290__auto___8932 = cljs.core.chunk_first.call(null,seq__8910_8931__$1);{
var G__8933 = cljs.core.chunk_rest.call(null,seq__8910_8931__$1);
var G__8934 = c__4290__auto___8932;
var G__8935 = cljs.core.count.call(null,c__4290__auto___8932);
var G__8936 = (0);
seq__8910_8919 = G__8933;
chunk__8911_8920 = G__8934;
count__8912_8921 = G__8935;
i__8913_8922 = G__8936;
continue;
}
} else
{var vec__8915_8937 = cljs.core.first.call(null,seq__8910_8931__$1);var type_8938 = cljs.core.nth.call(null,vec__8915_8937,(0),null);var f_8939 = cljs.core.nth.call(null,vec__8915_8937,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_8938,((function (seq__8910_8919,chunk__8911_8920,count__8912_8921,i__8913_8922,vec__8915_8937,type_8938,f_8939,seq__8910_8931__$1,temp__4126__auto___8930,vec__8909_8916,elem_8917,selector_8918){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8938,this_fn);
return f_8939.call(null,e);
});})(seq__8910_8919,chunk__8911_8920,count__8912_8921,i__8913_8922,vec__8915_8937,type_8938,f_8939,seq__8910_8931__$1,temp__4126__auto___8930,vec__8909_8916,elem_8917,selector_8918))
);
{
var G__8940 = cljs.core.next.call(null,seq__8910_8931__$1);
var G__8941 = null;
var G__8942 = (0);
var G__8943 = (0);
seq__8910_8919 = G__8940;
chunk__8911_8920 = G__8941;
count__8912_8921 = G__8942;
i__8913_8922 = G__8943;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__8944){
var elem_sel = cljs.core.first(arglist__8944);
var type_fs = cljs.core.rest(arglist__8944);
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
var fire_BANG___delegate = function (node,event_type,p__8945){var vec__8947 = p__8945;var update_event_BANG_ = cljs.core.nth.call(null,vec__8947,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__8945 = null;if (arguments.length > 2) {
  p__8945 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__8945);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__8948){
var node = cljs.core.first(arglist__8948);
arglist__8948 = cljs.core.next(arglist__8948);
var event_type = cljs.core.first(arglist__8948);
var p__8945 = cljs.core.rest(arglist__8948);
return fire_BANG___delegate(node,event_type,p__8945);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map