goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([root,null], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$20,make_node,cljs.core.constant$keyword$21,children,cljs.core.constant$keyword$22,branch_QMARK_], true));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){return clojure.zip.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){return clojure.zip.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.constant$keyword$23),(function (node,children){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$23,(function (){var and__3941__auto__ = children;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else
{return and__3941__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(0) : loc.call(null,0));
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){return cljs.core.constant$keyword$22.call(null,cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc)))
{return cljs.core.constant$keyword$21.call(null,cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){return cljs.core.constant$keyword$20.call(null,cljs.core.meta(loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){return cljs.core.constant$keyword$24.call(null,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){return cljs.core.seq(cljs.core.constant$keyword$25.call(null,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){return cljs.core.constant$keyword$26.call(null,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc)))
{var vec__5338 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5338,0,null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5338,1,null);var vec__5339 = clojure.zip.children(loc);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5339,0,null);var cnext = cljs.core.nthnext(vec__5339,1);var cs = vec__5339;if(cljs.core.truth_(cs))
{return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([c,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$25,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$24,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24.call(null,path),node):cljs.core.PersistentVector.fromArray([node], true)),cljs.core.constant$keyword$27,path,cljs.core.constant$keyword$26,cnext], true)], true),cljs.core.meta(loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){var vec__5342 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5342,0,null);var map__5343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5342,1,null);var map__5343__$1 = ((cljs.core.seq_QMARK_(map__5343))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5343):map__5343);var path = map__5343__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5343__$1,cljs.core.constant$keyword$25);var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5343__$1,cljs.core.constant$keyword$27);var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5343__$1,cljs.core.constant$keyword$24);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5343__$1,cljs.core.constant$keyword$26);var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5343__$1,cljs.core.constant$keyword$28);if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek(pnodes);return cljs.core.with_meta((cljs.core.truth_(changed_QMARK_)?cljs.core.PersistentVector.fromArray([clojure.zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.cons(node,r))),(function (){var and__3941__auto__ = ppath;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.constant$keyword$28,true);
} else
{return and__3941__auto__;
}
})()], true):cljs.core.PersistentVector.fromArray([pnode,ppath], true)),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))))
{return clojure.zip.node(loc);
} else
{var p = clojure.zip.up(loc);if(cljs.core.truth_(p))
{{
var G__5344 = p;
loc = G__5344;
continue;
}
} else
{return clojure.zip.node(loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){var vec__5348 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5348,0,null);var map__5349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5348,1,null);var map__5349__$1 = ((cljs.core.seq_QMARK_(map__5349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5349):map__5349);var path = map__5349__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5349__$1,cljs.core.constant$keyword$25);var vec__5350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5349__$1,cljs.core.constant$keyword$26);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5350,0,null);var rnext = cljs.core.nthnext(vec__5350,1);var rs = vec__5350;if(cljs.core.truth_((function (){var and__3941__auto__ = path;if(cljs.core.truth_(and__3941__auto__))
{return rs;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$25,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,node),cljs.core.array_seq([cljs.core.constant$keyword$26,rnext], 0))], true),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){var vec__5353 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5353,0,null);var map__5354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5353,1,null);var map__5354__$1 = ((cljs.core.seq_QMARK_(map__5354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5354):map__5354);var path = map__5354__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5354__$1,cljs.core.constant$keyword$25);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5354__$1,cljs.core.constant$keyword$26);if(cljs.core.truth_((function (){var and__3941__auto__ = path;if(cljs.core.truth_(and__3941__auto__))
{return r;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([cljs.core.last(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$25,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,node,cljs.core.butlast(r)),cljs.core.array_seq([cljs.core.constant$keyword$26,null], 0))], true),cljs.core.meta(loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){var vec__5357 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5357,0,null);var map__5358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5357,1,null);var map__5358__$1 = ((cljs.core.seq_QMARK_(map__5358))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5358):map__5358);var path = map__5358__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5358__$1,cljs.core.constant$keyword$25);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5358__$1,cljs.core.constant$keyword$26);if(cljs.core.truth_((function (){var and__3941__auto__ = path;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.seq(l);
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$25,cljs.core.pop(l),cljs.core.array_seq([cljs.core.constant$keyword$26,cljs.core.cons(node,r)], 0))], true),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){var vec__5361 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5361,0,null);var map__5362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5361,1,null);var map__5362__$1 = ((cljs.core.seq_QMARK_(map__5362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5362):map__5362);var path = map__5362__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5362__$1,cljs.core.constant$keyword$25);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5362__$1,cljs.core.constant$keyword$26);if(cljs.core.truth_((function (){var and__3941__auto__ = path;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.seq(l);
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([cljs.core.first(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$25,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.constant$keyword$26,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest(l),cljs.core.PersistentVector.fromArray([node], true),cljs.core.array_seq([r], 0))], 0))], true),cljs.core.meta(loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){var vec__5365 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5365,0,null);var map__5366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5365,1,null);var map__5366__$1 = ((cljs.core.seq_QMARK_(map__5366))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5366):map__5366);var path = map__5366__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5366__$1,cljs.core.constant$keyword$25);if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$25,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,item),cljs.core.array_seq([cljs.core.constant$keyword$28,true], 0))], true),cljs.core.meta(loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__5369 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5369,0,null);var map__5370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5369,1,null);var map__5370__$1 = ((cljs.core.seq_QMARK_(map__5370))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5370):map__5370);var path = map__5370__$1;var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5370__$1,cljs.core.constant$keyword$26);if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$26,cljs.core.cons(item,r),cljs.core.array_seq([cljs.core.constant$keyword$28,true], 0))], true),cljs.core.meta(loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__5372 = loc;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5372,0,null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5372,1,null);return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,cljs.core.constant$keyword$28,true)], true),cljs.core.meta(loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){return clojure.zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,clojure.zip.node(loc),args));
};
var edit = function (loc,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return edit__delegate.call(this,loc,f,args);};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__5373){
var loc = cljs.core.first(arglist__5373);
arglist__5373 = cljs.core.next(arglist__5373);
var f = cljs.core.first(arglist__5373);
var args = cljs.core.rest(arglist__5373);
return edit__delegate(loc,f,args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.cons(item,clojure.zip.children(loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.zip.children(loc),cljs.core.PersistentVector.fromArray([item], true))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))))
{return loc;
} else
{var or__3943__auto__ = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_(loc);if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down(loc);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = clojure.zip.right(loc);if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up(p)))
{var or__3943__auto____$2 = clojure.zip.right(clojure.zip.up(p));if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{{
var G__5374 = clojure.zip.up(p);
p = G__5374;
continue;
}
}
} else
{return cljs.core.PersistentVector.fromArray([clojure.zip.node(p),cljs.core.constant$keyword$29], true);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){var temp__4090__auto__ = clojure.zip.left(loc);if(cljs.core.truth_(temp__4090__auto__))
{var lloc = temp__4090__auto__;var loc__$1 = lloc;while(true){
var temp__4090__auto____$1 = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_(loc__$1);if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down(loc__$1);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;{
var G__5375 = clojure.zip.rightmost(child);
loc__$1 = G__5375;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up(loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){var vec__5378 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5378,0,null);var map__5379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5378,1,null);var map__5379__$1 = ((cljs.core.seq_QMARK_(map__5379))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5379):map__5379);var path = map__5379__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5379__$1,cljs.core.constant$keyword$25);var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5379__$1,cljs.core.constant$keyword$27);var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5379__$1,cljs.core.constant$keyword$24);var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5379__$1,cljs.core.constant$keyword$26);if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count(l) > 0))
{var loc__$1 = cljs.core.with_meta(cljs.core.PersistentVector.fromArray([cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$25,cljs.core.pop(l),cljs.core.array_seq([cljs.core.constant$keyword$28,true], 0))], true),cljs.core.meta(loc));while(true){
var temp__4090__auto__ = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_(loc__$1);if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down(loc__$1);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__5380 = clojure.zip.rightmost(child);
loc__$1 = G__5380;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__3941__auto__ = ppath;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.constant$keyword$28,true);
} else
{return and__3941__auto__;
}
})()], true),cljs.core.meta(loc));
}
}
});
