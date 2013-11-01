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
dommy.core.text = (function text(elem){var or__2959__auto__ = elem.textContent;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
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
var append_BANG___2 = (function (parent,child){var G__8755 = dommy.template.__GT_node_like.call(null,parent);G__8755.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8755;
});
var append_BANG___3 = (function() { 
var G__8760__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8756_8761 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8757_8762 = null;var count__8758_8763 = 0;var i__8759_8764 = 0;while(true){
if((i__8759_8764 < count__8758_8763))
{var c_8765 = cljs.core._nth.call(null,chunk__8757_8762,i__8759_8764);append_BANG_.call(null,parent__$1,c_8765);
{
var G__8766 = seq__8756_8761;
var G__8767 = chunk__8757_8762;
var G__8768 = count__8758_8763;
var G__8769 = (i__8759_8764 + 1);
seq__8756_8761 = G__8766;
chunk__8757_8762 = G__8767;
count__8758_8763 = G__8768;
i__8759_8764 = G__8769;
continue;
}
} else
{var temp__4092__auto___8770 = cljs.core.seq.call(null,seq__8756_8761);if(temp__4092__auto___8770)
{var seq__8756_8771__$1 = temp__4092__auto___8770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8756_8771__$1))
{var c__3668__auto___8772 = cljs.core.chunk_first.call(null,seq__8756_8771__$1);{
var G__8773 = cljs.core.chunk_rest.call(null,seq__8756_8771__$1);
var G__8774 = c__3668__auto___8772;
var G__8775 = cljs.core.count.call(null,c__3668__auto___8772);
var G__8776 = 0;
seq__8756_8761 = G__8773;
chunk__8757_8762 = G__8774;
count__8758_8763 = G__8775;
i__8759_8764 = G__8776;
continue;
}
} else
{var c_8777 = cljs.core.first.call(null,seq__8756_8771__$1);append_BANG_.call(null,parent__$1,c_8777);
{
var G__8778 = cljs.core.next.call(null,seq__8756_8771__$1);
var G__8779 = null;
var G__8780 = 0;
var G__8781 = 0;
seq__8756_8761 = G__8778;
chunk__8757_8762 = G__8779;
count__8758_8763 = G__8780;
i__8759_8764 = G__8781;
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
var G__8760 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8760__delegate.call(this,parent,child,more_children);};
G__8760.cljs$lang$maxFixedArity = 2;
G__8760.cljs$lang$applyTo = (function (arglist__8782){
var parent = cljs.core.first(arglist__8782);
arglist__8782 = cljs.core.next(arglist__8782);
var child = cljs.core.first(arglist__8782);
var more_children = cljs.core.rest(arglist__8782);
return G__8760__delegate(parent,child,more_children);
});
G__8760.cljs$core$IFn$_invoke$arity$variadic = G__8760__delegate;
return G__8760;
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
var G__8791__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8787_8792 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8788_8793 = null;var count__8789_8794 = 0;var i__8790_8795 = 0;while(true){
if((i__8790_8795 < count__8789_8794))
{var c_8796 = cljs.core._nth.call(null,chunk__8788_8793,i__8790_8795);prepend_BANG_.call(null,parent__$1,c_8796);
{
var G__8797 = seq__8787_8792;
var G__8798 = chunk__8788_8793;
var G__8799 = count__8789_8794;
var G__8800 = (i__8790_8795 + 1);
seq__8787_8792 = G__8797;
chunk__8788_8793 = G__8798;
count__8789_8794 = G__8799;
i__8790_8795 = G__8800;
continue;
}
} else
{var temp__4092__auto___8801 = cljs.core.seq.call(null,seq__8787_8792);if(temp__4092__auto___8801)
{var seq__8787_8802__$1 = temp__4092__auto___8801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8787_8802__$1))
{var c__3668__auto___8803 = cljs.core.chunk_first.call(null,seq__8787_8802__$1);{
var G__8804 = cljs.core.chunk_rest.call(null,seq__8787_8802__$1);
var G__8805 = c__3668__auto___8803;
var G__8806 = cljs.core.count.call(null,c__3668__auto___8803);
var G__8807 = 0;
seq__8787_8792 = G__8804;
chunk__8788_8793 = G__8805;
count__8789_8794 = G__8806;
i__8790_8795 = G__8807;
continue;
}
} else
{var c_8808 = cljs.core.first.call(null,seq__8787_8802__$1);prepend_BANG_.call(null,parent__$1,c_8808);
{
var G__8809 = cljs.core.next.call(null,seq__8787_8802__$1);
var G__8810 = null;
var G__8811 = 0;
var G__8812 = 0;
seq__8787_8792 = G__8809;
chunk__8788_8793 = G__8810;
count__8789_8794 = G__8811;
i__8790_8795 = G__8812;
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
var G__8791 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8791__delegate.call(this,parent,child,more_children);};
G__8791.cljs$lang$maxFixedArity = 2;
G__8791.cljs$lang$applyTo = (function (arglist__8813){
var parent = cljs.core.first(arglist__8813);
arglist__8813 = cljs.core.next(arglist__8813);
var child = cljs.core.first(arglist__8813);
var more_children = cljs.core.rest(arglist__8813);
return G__8791__delegate(parent,child,more_children);
});
G__8791.cljs$core$IFn$_invoke$arity$variadic = G__8791__delegate;
return G__8791;
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___8814 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___8814))
{var next_8815 = temp__4090__auto___8814;parent.insertBefore(actual_node,next_8815);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8817 = dommy.template.__GT_node_like.call(null,parent);G__8817.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8817,node_like);
return G__8817;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8819 = elem__$1.parentNode;G__8819.removeChild(elem__$1);
return G__8819;
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
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8825){var vec__8826 = p__8825;var k = cljs.core.nth.call(null,vec__8826,0,null);var v = cljs.core.nth.call(null,vec__8826,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t8827 !== 'undefined')
{} else
{goog.provide('dommy.core.t8827');

/**
* @constructor
*/
dommy.core.t8827 = (function (v,k,vec__8826,p__8825,container,key_selectors_map,template,selector_map,meta8828){
this.v = v;
this.k = k;
this.vec__8826 = vec__8826;
this.p__8825 = p__8825;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta8828 = meta8828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t8827.cljs$lang$type = true;
dommy.core.t8827.cljs$lang$ctorStr = "dommy.core/t8827";
dommy.core.t8827.cljs$lang$ctorPrWriter = (function (this__3495__auto__,writer__3496__auto__,opt__3497__auto__){return cljs.core._write.call(null,writer__3496__auto__,"dommy.core/t8827");
});
dommy.core.t8827.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t8827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8829){var self__ = this;
var _8829__$1 = this;return self__.meta8828;
});
dommy.core.t8827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8829,meta8828__$1){var self__ = this;
var _8829__$1 = this;return (new dommy.core.t8827(self__.v,self__.k,self__.vec__8826,self__.p__8825,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta8828__$1));
});
dommy.core.__GT_t8827 = (function __GT_t8827(v__$1,k__$1,vec__8826__$1,p__8825__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta8828){return (new dommy.core.t8827(v__$1,k__$1,vec__8826__$1,p__8825__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta8828));
});
}
return (new dommy.core.t8827(v,k,vec__8826,p__8825,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8830_SHARP_){return p1__8830_SHARP_.parentNode;
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
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
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
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8831_SHARP_){return !((p1__8831_SHARP_ === base__$1));
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
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8832){var vec__8833 = p__8832;var special_mouse_event = cljs.core.nth.call(null,vec__8833,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__8833,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__2959__auto__ = event.selectedTarget;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__2950__auto__ = related_target;if(cljs.core.truth_(and__2950__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__2950__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__2950__auto__ = selected_target;if(cljs.core.truth_(and__2950__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__2950__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__2959__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8834){
var elem = cljs.core.first(arglist__8834);
arglist__8834 = cljs.core.next(arglist__8834);
var f = cljs.core.first(arglist__8834);
var args = cljs.core.rest(arglist__8834);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8835_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8835_SHARP_));
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
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__8859_8882 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8883 = cljs.core.nth.call(null,vec__8859_8882,0,null);var selector_8884 = cljs.core.nth.call(null,vec__8859_8882,1,null);var seq__8860_8885 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8867_8886 = null;var count__8868_8887 = 0;var i__8869_8888 = 0;while(true){
if((i__8869_8888 < count__8868_8887))
{var vec__8876_8889 = cljs.core._nth.call(null,chunk__8867_8886,i__8869_8888);var orig_type_8890 = cljs.core.nth.call(null,vec__8876_8889,0,null);var f_8891 = cljs.core.nth.call(null,vec__8876_8889,1,null);var seq__8870_8892 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8890,cljs.core.PersistentArrayMap.fromArray([orig_type_8890,cljs.core.identity], true)));var chunk__8872_8893 = null;var count__8873_8894 = 0;var i__8874_8895 = 0;while(true){
if((i__8874_8895 < count__8873_8894))
{var vec__8877_8896 = cljs.core._nth.call(null,chunk__8872_8893,i__8874_8895);var actual_type_8897 = cljs.core.nth.call(null,vec__8877_8896,0,null);var factory_8898 = cljs.core.nth.call(null,vec__8877_8896,1,null);var canonical_f_8899 = (cljs.core.truth_(selector_8884)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8883,selector_8884):cljs.core.identity).call(null,factory_8898.call(null,f_8891));dommy.core.update_event_listeners_BANG_.call(null,elem_8883,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_8884,actual_type_8897,f_8891], true),canonical_f_8899);
if(cljs.core.truth_(elem_8883.addEventListener))
{elem_8883.addEventListener(cljs.core.name.call(null,actual_type_8897),canonical_f_8899);
} else
{elem_8883.attachEvent(cljs.core.name.call(null,actual_type_8897),canonical_f_8899);
}
{
var G__8900 = seq__8870_8892;
var G__8901 = chunk__8872_8893;
var G__8902 = count__8873_8894;
var G__8903 = (i__8874_8895 + 1);
seq__8870_8892 = G__8900;
chunk__8872_8893 = G__8901;
count__8873_8894 = G__8902;
i__8874_8895 = G__8903;
continue;
}
} else
{var temp__4092__auto___8904 = cljs.core.seq.call(null,seq__8870_8892);if(temp__4092__auto___8904)
{var seq__8870_8905__$1 = temp__4092__auto___8904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8870_8905__$1))
{var c__3668__auto___8906 = cljs.core.chunk_first.call(null,seq__8870_8905__$1);{
var G__8907 = cljs.core.chunk_rest.call(null,seq__8870_8905__$1);
var G__8908 = c__3668__auto___8906;
var G__8909 = cljs.core.count.call(null,c__3668__auto___8906);
var G__8910 = 0;
seq__8870_8892 = G__8907;
chunk__8872_8893 = G__8908;
count__8873_8894 = G__8909;
i__8874_8895 = G__8910;
continue;
}
} else
{var vec__8878_8911 = cljs.core.first.call(null,seq__8870_8905__$1);var actual_type_8912 = cljs.core.nth.call(null,vec__8878_8911,0,null);var factory_8913 = cljs.core.nth.call(null,vec__8878_8911,1,null);var canonical_f_8914 = (cljs.core.truth_(selector_8884)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8883,selector_8884):cljs.core.identity).call(null,factory_8913.call(null,f_8891));dommy.core.update_event_listeners_BANG_.call(null,elem_8883,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_8884,actual_type_8912,f_8891], true),canonical_f_8914);
if(cljs.core.truth_(elem_8883.addEventListener))
{elem_8883.addEventListener(cljs.core.name.call(null,actual_type_8912),canonical_f_8914);
} else
{elem_8883.attachEvent(cljs.core.name.call(null,actual_type_8912),canonical_f_8914);
}
{
var G__8915 = cljs.core.next.call(null,seq__8870_8905__$1);
var G__8916 = null;
var G__8917 = 0;
var G__8918 = 0;
seq__8870_8892 = G__8915;
chunk__8872_8893 = G__8916;
count__8873_8894 = G__8917;
i__8874_8895 = G__8918;
continue;
}
}
} else
{}
}
break;
}
{
var G__8919 = seq__8860_8885;
var G__8920 = chunk__8867_8886;
var G__8921 = count__8868_8887;
var G__8922 = (i__8869_8888 + 1);
seq__8860_8885 = G__8919;
chunk__8867_8886 = G__8920;
count__8868_8887 = G__8921;
i__8869_8888 = G__8922;
continue;
}
} else
{var temp__4092__auto___8923 = cljs.core.seq.call(null,seq__8860_8885);if(temp__4092__auto___8923)
{var seq__8860_8924__$1 = temp__4092__auto___8923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8860_8924__$1))
{var c__3668__auto___8925 = cljs.core.chunk_first.call(null,seq__8860_8924__$1);{
var G__8926 = cljs.core.chunk_rest.call(null,seq__8860_8924__$1);
var G__8927 = c__3668__auto___8925;
var G__8928 = cljs.core.count.call(null,c__3668__auto___8925);
var G__8929 = 0;
seq__8860_8885 = G__8926;
chunk__8867_8886 = G__8927;
count__8868_8887 = G__8928;
i__8869_8888 = G__8929;
continue;
}
} else
{var vec__8879_8930 = cljs.core.first.call(null,seq__8860_8924__$1);var orig_type_8931 = cljs.core.nth.call(null,vec__8879_8930,0,null);var f_8932 = cljs.core.nth.call(null,vec__8879_8930,1,null);var seq__8861_8933 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8931,cljs.core.PersistentArrayMap.fromArray([orig_type_8931,cljs.core.identity], true)));var chunk__8863_8934 = null;var count__8864_8935 = 0;var i__8865_8936 = 0;while(true){
if((i__8865_8936 < count__8864_8935))
{var vec__8880_8937 = cljs.core._nth.call(null,chunk__8863_8934,i__8865_8936);var actual_type_8938 = cljs.core.nth.call(null,vec__8880_8937,0,null);var factory_8939 = cljs.core.nth.call(null,vec__8880_8937,1,null);var canonical_f_8940 = (cljs.core.truth_(selector_8884)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8883,selector_8884):cljs.core.identity).call(null,factory_8939.call(null,f_8932));dommy.core.update_event_listeners_BANG_.call(null,elem_8883,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_8884,actual_type_8938,f_8932], true),canonical_f_8940);
if(cljs.core.truth_(elem_8883.addEventListener))
{elem_8883.addEventListener(cljs.core.name.call(null,actual_type_8938),canonical_f_8940);
} else
{elem_8883.attachEvent(cljs.core.name.call(null,actual_type_8938),canonical_f_8940);
}
{
var G__8941 = seq__8861_8933;
var G__8942 = chunk__8863_8934;
var G__8943 = count__8864_8935;
var G__8944 = (i__8865_8936 + 1);
seq__8861_8933 = G__8941;
chunk__8863_8934 = G__8942;
count__8864_8935 = G__8943;
i__8865_8936 = G__8944;
continue;
}
} else
{var temp__4092__auto___8945__$1 = cljs.core.seq.call(null,seq__8861_8933);if(temp__4092__auto___8945__$1)
{var seq__8861_8946__$1 = temp__4092__auto___8945__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8861_8946__$1))
{var c__3668__auto___8947 = cljs.core.chunk_first.call(null,seq__8861_8946__$1);{
var G__8948 = cljs.core.chunk_rest.call(null,seq__8861_8946__$1);
var G__8949 = c__3668__auto___8947;
var G__8950 = cljs.core.count.call(null,c__3668__auto___8947);
var G__8951 = 0;
seq__8861_8933 = G__8948;
chunk__8863_8934 = G__8949;
count__8864_8935 = G__8950;
i__8865_8936 = G__8951;
continue;
}
} else
{var vec__8881_8952 = cljs.core.first.call(null,seq__8861_8946__$1);var actual_type_8953 = cljs.core.nth.call(null,vec__8881_8952,0,null);var factory_8954 = cljs.core.nth.call(null,vec__8881_8952,1,null);var canonical_f_8955 = (cljs.core.truth_(selector_8884)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8883,selector_8884):cljs.core.identity).call(null,factory_8954.call(null,f_8932));dommy.core.update_event_listeners_BANG_.call(null,elem_8883,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_8884,actual_type_8953,f_8932], true),canonical_f_8955);
if(cljs.core.truth_(elem_8883.addEventListener))
{elem_8883.addEventListener(cljs.core.name.call(null,actual_type_8953),canonical_f_8955);
} else
{elem_8883.attachEvent(cljs.core.name.call(null,actual_type_8953),canonical_f_8955);
}
{
var G__8956 = cljs.core.next.call(null,seq__8861_8946__$1);
var G__8957 = null;
var G__8958 = 0;
var G__8959 = 0;
seq__8861_8933 = G__8956;
chunk__8863_8934 = G__8957;
count__8864_8935 = G__8958;
i__8865_8936 = G__8959;
continue;
}
}
} else
{}
}
break;
}
{
var G__8960 = cljs.core.next.call(null,seq__8860_8924__$1);
var G__8961 = null;
var G__8962 = 0;
var G__8963 = 0;
seq__8860_8885 = G__8960;
chunk__8867_8886 = G__8961;
count__8868_8887 = G__8962;
i__8869_8888 = G__8963;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__8964){
var elem_sel = cljs.core.first(arglist__8964);
var type_fs = cljs.core.rest(arglist__8964);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__8988_9011 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9012 = cljs.core.nth.call(null,vec__8988_9011,0,null);var selector_9013 = cljs.core.nth.call(null,vec__8988_9011,1,null);var seq__8989_9014 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__8996_9015 = null;var count__8997_9016 = 0;var i__8998_9017 = 0;while(true){
if((i__8998_9017 < count__8997_9016))
{var vec__9005_9018 = cljs.core._nth.call(null,chunk__8996_9015,i__8998_9017);var orig_type_9019 = cljs.core.nth.call(null,vec__9005_9018,0,null);var f_9020 = cljs.core.nth.call(null,vec__9005_9018,1,null);var seq__8999_9021 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9019,cljs.core.PersistentArrayMap.fromArray([orig_type_9019,cljs.core.identity], true)));var chunk__9001_9022 = null;var count__9002_9023 = 0;var i__9003_9024 = 0;while(true){
if((i__9003_9024 < count__9002_9023))
{var vec__9006_9025 = cljs.core._nth.call(null,chunk__9001_9022,i__9003_9024);var actual_type_9026 = cljs.core.nth.call(null,vec__9006_9025,0,null);var __9027 = cljs.core.nth.call(null,vec__9006_9025,1,null);var keys_9028 = cljs.core.PersistentVector.fromArray([selector_9013,actual_type_9026,f_9020], true);var canonical_f_9029 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9012),keys_9028);dommy.core.update_event_listeners_BANG_.call(null,elem_9012,dommy.utils.dissoc_in,keys_9028);
if(cljs.core.truth_(elem_9012.removeEventListener))
{elem_9012.removeEventListener(cljs.core.name.call(null,actual_type_9026),canonical_f_9029);
} else
{elem_9012.detachEvent(cljs.core.name.call(null,actual_type_9026),canonical_f_9029);
}
{
var G__9030 = seq__8999_9021;
var G__9031 = chunk__9001_9022;
var G__9032 = count__9002_9023;
var G__9033 = (i__9003_9024 + 1);
seq__8999_9021 = G__9030;
chunk__9001_9022 = G__9031;
count__9002_9023 = G__9032;
i__9003_9024 = G__9033;
continue;
}
} else
{var temp__4092__auto___9034 = cljs.core.seq.call(null,seq__8999_9021);if(temp__4092__auto___9034)
{var seq__8999_9035__$1 = temp__4092__auto___9034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8999_9035__$1))
{var c__3668__auto___9036 = cljs.core.chunk_first.call(null,seq__8999_9035__$1);{
var G__9037 = cljs.core.chunk_rest.call(null,seq__8999_9035__$1);
var G__9038 = c__3668__auto___9036;
var G__9039 = cljs.core.count.call(null,c__3668__auto___9036);
var G__9040 = 0;
seq__8999_9021 = G__9037;
chunk__9001_9022 = G__9038;
count__9002_9023 = G__9039;
i__9003_9024 = G__9040;
continue;
}
} else
{var vec__9007_9041 = cljs.core.first.call(null,seq__8999_9035__$1);var actual_type_9042 = cljs.core.nth.call(null,vec__9007_9041,0,null);var __9043 = cljs.core.nth.call(null,vec__9007_9041,1,null);var keys_9044 = cljs.core.PersistentVector.fromArray([selector_9013,actual_type_9042,f_9020], true);var canonical_f_9045 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9012),keys_9044);dommy.core.update_event_listeners_BANG_.call(null,elem_9012,dommy.utils.dissoc_in,keys_9044);
if(cljs.core.truth_(elem_9012.removeEventListener))
{elem_9012.removeEventListener(cljs.core.name.call(null,actual_type_9042),canonical_f_9045);
} else
{elem_9012.detachEvent(cljs.core.name.call(null,actual_type_9042),canonical_f_9045);
}
{
var G__9046 = cljs.core.next.call(null,seq__8999_9035__$1);
var G__9047 = null;
var G__9048 = 0;
var G__9049 = 0;
seq__8999_9021 = G__9046;
chunk__9001_9022 = G__9047;
count__9002_9023 = G__9048;
i__9003_9024 = G__9049;
continue;
}
}
} else
{}
}
break;
}
{
var G__9050 = seq__8989_9014;
var G__9051 = chunk__8996_9015;
var G__9052 = count__8997_9016;
var G__9053 = (i__8998_9017 + 1);
seq__8989_9014 = G__9050;
chunk__8996_9015 = G__9051;
count__8997_9016 = G__9052;
i__8998_9017 = G__9053;
continue;
}
} else
{var temp__4092__auto___9054 = cljs.core.seq.call(null,seq__8989_9014);if(temp__4092__auto___9054)
{var seq__8989_9055__$1 = temp__4092__auto___9054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8989_9055__$1))
{var c__3668__auto___9056 = cljs.core.chunk_first.call(null,seq__8989_9055__$1);{
var G__9057 = cljs.core.chunk_rest.call(null,seq__8989_9055__$1);
var G__9058 = c__3668__auto___9056;
var G__9059 = cljs.core.count.call(null,c__3668__auto___9056);
var G__9060 = 0;
seq__8989_9014 = G__9057;
chunk__8996_9015 = G__9058;
count__8997_9016 = G__9059;
i__8998_9017 = G__9060;
continue;
}
} else
{var vec__9008_9061 = cljs.core.first.call(null,seq__8989_9055__$1);var orig_type_9062 = cljs.core.nth.call(null,vec__9008_9061,0,null);var f_9063 = cljs.core.nth.call(null,vec__9008_9061,1,null);var seq__8990_9064 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9062,cljs.core.PersistentArrayMap.fromArray([orig_type_9062,cljs.core.identity], true)));var chunk__8992_9065 = null;var count__8993_9066 = 0;var i__8994_9067 = 0;while(true){
if((i__8994_9067 < count__8993_9066))
{var vec__9009_9068 = cljs.core._nth.call(null,chunk__8992_9065,i__8994_9067);var actual_type_9069 = cljs.core.nth.call(null,vec__9009_9068,0,null);var __9070 = cljs.core.nth.call(null,vec__9009_9068,1,null);var keys_9071 = cljs.core.PersistentVector.fromArray([selector_9013,actual_type_9069,f_9063], true);var canonical_f_9072 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9012),keys_9071);dommy.core.update_event_listeners_BANG_.call(null,elem_9012,dommy.utils.dissoc_in,keys_9071);
if(cljs.core.truth_(elem_9012.removeEventListener))
{elem_9012.removeEventListener(cljs.core.name.call(null,actual_type_9069),canonical_f_9072);
} else
{elem_9012.detachEvent(cljs.core.name.call(null,actual_type_9069),canonical_f_9072);
}
{
var G__9073 = seq__8990_9064;
var G__9074 = chunk__8992_9065;
var G__9075 = count__8993_9066;
var G__9076 = (i__8994_9067 + 1);
seq__8990_9064 = G__9073;
chunk__8992_9065 = G__9074;
count__8993_9066 = G__9075;
i__8994_9067 = G__9076;
continue;
}
} else
{var temp__4092__auto___9077__$1 = cljs.core.seq.call(null,seq__8990_9064);if(temp__4092__auto___9077__$1)
{var seq__8990_9078__$1 = temp__4092__auto___9077__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8990_9078__$1))
{var c__3668__auto___9079 = cljs.core.chunk_first.call(null,seq__8990_9078__$1);{
var G__9080 = cljs.core.chunk_rest.call(null,seq__8990_9078__$1);
var G__9081 = c__3668__auto___9079;
var G__9082 = cljs.core.count.call(null,c__3668__auto___9079);
var G__9083 = 0;
seq__8990_9064 = G__9080;
chunk__8992_9065 = G__9081;
count__8993_9066 = G__9082;
i__8994_9067 = G__9083;
continue;
}
} else
{var vec__9010_9084 = cljs.core.first.call(null,seq__8990_9078__$1);var actual_type_9085 = cljs.core.nth.call(null,vec__9010_9084,0,null);var __9086 = cljs.core.nth.call(null,vec__9010_9084,1,null);var keys_9087 = cljs.core.PersistentVector.fromArray([selector_9013,actual_type_9085,f_9063], true);var canonical_f_9088 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9012),keys_9087);dommy.core.update_event_listeners_BANG_.call(null,elem_9012,dommy.utils.dissoc_in,keys_9087);
if(cljs.core.truth_(elem_9012.removeEventListener))
{elem_9012.removeEventListener(cljs.core.name.call(null,actual_type_9085),canonical_f_9088);
} else
{elem_9012.detachEvent(cljs.core.name.call(null,actual_type_9085),canonical_f_9088);
}
{
var G__9089 = cljs.core.next.call(null,seq__8990_9078__$1);
var G__9090 = null;
var G__9091 = 0;
var G__9092 = 0;
seq__8990_9064 = G__9089;
chunk__8992_9065 = G__9090;
count__8993_9066 = G__9091;
i__8994_9067 = G__9092;
continue;
}
}
} else
{}
}
break;
}
{
var G__9093 = cljs.core.next.call(null,seq__8989_9055__$1);
var G__9094 = null;
var G__9095 = 0;
var G__9096 = 0;
seq__8989_9014 = G__9093;
chunk__8996_9015 = G__9094;
count__8997_9016 = G__9095;
i__8998_9017 = G__9096;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9097){
var elem_sel = cljs.core.first(arglist__9097);
var type_fs = cljs.core.rest(arglist__9097);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__9105_9112 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9113 = cljs.core.nth.call(null,vec__9105_9112,0,null);var selector_9114 = cljs.core.nth.call(null,vec__9105_9112,1,null);var seq__9106_9115 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9107_9116 = null;var count__9108_9117 = 0;var i__9109_9118 = 0;while(true){
if((i__9109_9118 < count__9108_9117))
{var vec__9110_9119 = cljs.core._nth.call(null,chunk__9107_9116,i__9109_9118);var type_9120 = cljs.core.nth.call(null,vec__9110_9119,0,null);var f_9121 = cljs.core.nth.call(null,vec__9110_9119,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9120,((function (seq__9106_9115,chunk__9107_9116,count__9108_9117,i__9109_9118,vec__9110_9119,type_9120,f_9121){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9120,this_fn);
return f_9121.call(null,e);
});})(seq__9106_9115,chunk__9107_9116,count__9108_9117,i__9109_9118,vec__9110_9119,type_9120,f_9121))
);
{
var G__9122 = seq__9106_9115;
var G__9123 = chunk__9107_9116;
var G__9124 = count__9108_9117;
var G__9125 = (i__9109_9118 + 1);
seq__9106_9115 = G__9122;
chunk__9107_9116 = G__9123;
count__9108_9117 = G__9124;
i__9109_9118 = G__9125;
continue;
}
} else
{var temp__4092__auto___9126 = cljs.core.seq.call(null,seq__9106_9115);if(temp__4092__auto___9126)
{var seq__9106_9127__$1 = temp__4092__auto___9126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9106_9127__$1))
{var c__3668__auto___9128 = cljs.core.chunk_first.call(null,seq__9106_9127__$1);{
var G__9129 = cljs.core.chunk_rest.call(null,seq__9106_9127__$1);
var G__9130 = c__3668__auto___9128;
var G__9131 = cljs.core.count.call(null,c__3668__auto___9128);
var G__9132 = 0;
seq__9106_9115 = G__9129;
chunk__9107_9116 = G__9130;
count__9108_9117 = G__9131;
i__9109_9118 = G__9132;
continue;
}
} else
{var vec__9111_9133 = cljs.core.first.call(null,seq__9106_9127__$1);var type_9134 = cljs.core.nth.call(null,vec__9111_9133,0,null);var f_9135 = cljs.core.nth.call(null,vec__9111_9133,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9134,((function (seq__9106_9115,chunk__9107_9116,count__9108_9117,i__9109_9118,vec__9111_9133,type_9134,f_9135,seq__9106_9127__$1,temp__4092__auto___9126){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9134,this_fn);
return f_9135.call(null,e);
});})(seq__9106_9115,chunk__9107_9116,count__9108_9117,i__9109_9118,vec__9111_9133,type_9134,f_9135,seq__9106_9127__$1,temp__4092__auto___9126))
);
{
var G__9136 = cljs.core.next.call(null,seq__9106_9127__$1);
var G__9137 = null;
var G__9138 = 0;
var G__9139 = 0;
seq__9106_9115 = G__9136;
chunk__9107_9116 = G__9137;
count__9108_9117 = G__9138;
i__9109_9118 = G__9139;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9140){
var elem_sel = cljs.core.first(arglist__9140);
var type_fs = cljs.core.rest(arglist__9140);
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
var fire_BANG___delegate = function (node,event_type,p__9141){var vec__9143 = p__9141;var update_event_BANG_ = cljs.core.nth.call(null,vec__9143,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__2959__auto__ = update_event_BANG_;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__9141 = null;if (arguments.length > 2) {
  p__9141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9141);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9144){
var node = cljs.core.first(arglist__9144);
arglist__9144 = cljs.core.next(arglist__9144);
var event_type = cljs.core.first(arglist__9144);
var p__9141 = cljs.core.rest(arglist__9144);
return fire_BANG___delegate(node,event_type,p__9141);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//@ sourceMappingURL=core.js.map