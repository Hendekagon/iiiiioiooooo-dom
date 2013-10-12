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
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([root,null], true),cljs.core.ObjMap.fromObject(["\uFDD0'zip/make-node","\uFDD0'zip/children","\uFDD0'zip/branch?"],{"\uFDD0'zip/make-node":make_node,"\uFDD0'zip/children":children,"\uFDD0'zip/branch?":branch_QMARK_}));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){
return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){
return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){
return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,"\uFDD0'content"),(function (node,children){
return cljs.core.assoc.call(null,node,"\uFDD0'content",(function (){var and__3941__auto__ = children;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3941__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){
return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){
return (new cljs.core.Keyword("\uFDD0'zip/branch?")).call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return (new cljs.core.Keyword("\uFDD0'zip/children")).call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){
return (new cljs.core.Keyword("\uFDD0'zip/make-node")).call(null,cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){
return (new cljs.core.Keyword("\uFDD0'pnodes")).call(null,loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){
return cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0'l")).call(null,loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){
return (new cljs.core.Keyword("\uFDD0'r")).call(null,loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__5103 = loc;
var node = cljs.core.nth.call(null,vec__5103,0,null);
var path = cljs.core.nth.call(null,vec__5103,1,null);
var vec__5104 = clojure.zip.children.call(null,loc);
var c = cljs.core.nth.call(null,vec__5104,0,null);
var cnext = cljs.core.nthnext.call(null,vec__5104,1);
var cs = vec__5104;
if(cljs.core.truth_(cs))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([c,cljs.core.ObjMap.fromObject(["\uFDD0'l","\uFDD0'pnodes","\uFDD0'ppath","\uFDD0'r"],{"\uFDD0'l":cljs.core.PersistentVector.EMPTY,"\uFDD0'pnodes":(cljs.core.truth_(path)?cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0'pnodes")).call(null,path),node):cljs.core.PersistentVector.fromArray([node], true)),"\uFDD0'ppath":path,"\uFDD0'r":cnext})], true),cljs.core.meta.call(null,loc));
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
clojure.zip.up = (function up(loc){
var vec__5107 = loc;
var node = cljs.core.nth.call(null,vec__5107,0,null);
var map__5108 = cljs.core.nth.call(null,vec__5107,1,null);
var map__5108__$1 = ((cljs.core.seq_QMARK_.call(null,map__5108))?cljs.core.apply.call(null,cljs.core.hash_map,map__5108):map__5108);
var path = map__5108__$1;
var l = cljs.core._lookup.call(null,map__5108__$1,"\uFDD0'l",null);
var ppath = cljs.core._lookup.call(null,map__5108__$1,"\uFDD0'ppath",null);
var pnodes = cljs.core._lookup.call(null,map__5108__$1,"\uFDD0'pnodes",null);
var r = cljs.core._lookup.call(null,map__5108__$1,"\uFDD0'r",null);
var changed_QMARK_ = cljs.core._lookup.call(null,map__5108__$1,"\uFDD0'changed?",null);
if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);
return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?cljs.core.PersistentVector.fromArray([clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__3941__auto__ = ppath;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.assoc.call(null,ppath,"\uFDD0'changed?",true);
} else
{return and__3941__auto__;
}
})()], true):cljs.core.PersistentVector.fromArray([pnode,ppath], true)),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){
while(true){
if(cljs.core._EQ_.call(null,"\uFDD0'end",loc.call(null,1)))
{return clojure.zip.node.call(null,loc);
} else
{var p = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(p))
{{
var G__5109 = p;
loc = G__5109;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){
var vec__5113 = loc;
var node = cljs.core.nth.call(null,vec__5113,0,null);
var map__5114 = cljs.core.nth.call(null,vec__5113,1,null);
var map__5114__$1 = ((cljs.core.seq_QMARK_.call(null,map__5114))?cljs.core.apply.call(null,cljs.core.hash_map,map__5114):map__5114);
var path = map__5114__$1;
var l = cljs.core._lookup.call(null,map__5114__$1,"\uFDD0'l",null);
var vec__5115 = cljs.core._lookup.call(null,map__5114__$1,"\uFDD0'r",null);
var r = cljs.core.nth.call(null,vec__5115,0,null);
var rnext = cljs.core.nthnext.call(null,vec__5115,1);
var rs = vec__5115;
if(cljs.core.truth_((function (){var and__3941__auto__ = path;
if(cljs.core.truth_(and__3941__auto__))
{return rs;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([r,cljs.core.assoc.call(null,path,"\uFDD0'l",cljs.core.conj.call(null,l,node),"\uFDD0'r",rnext)], true),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__5118 = loc;
var node = cljs.core.nth.call(null,vec__5118,0,null);
var map__5119 = cljs.core.nth.call(null,vec__5118,1,null);
var map__5119__$1 = ((cljs.core.seq_QMARK_.call(null,map__5119))?cljs.core.apply.call(null,cljs.core.hash_map,map__5119):map__5119);
var path = map__5119__$1;
var l = cljs.core._lookup.call(null,map__5119__$1,"\uFDD0'l",null);
var r = cljs.core._lookup.call(null,map__5119__$1,"\uFDD0'r",null);
if(cljs.core.truth_((function (){var and__3941__auto__ = path;
if(cljs.core.truth_(and__3941__auto__))
{return r;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([cljs.core.last.call(null,r),cljs.core.assoc.call(null,path,"\uFDD0'l",cljs.core.apply.call(null,cljs.core.conj,l,node,cljs.core.butlast.call(null,r)),"\uFDD0'r",null)], true),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__5122 = loc;
var node = cljs.core.nth.call(null,vec__5122,0,null);
var map__5123 = cljs.core.nth.call(null,vec__5122,1,null);
var map__5123__$1 = ((cljs.core.seq_QMARK_.call(null,map__5123))?cljs.core.apply.call(null,cljs.core.hash_map,map__5123):map__5123);
var path = map__5123__$1;
var l = cljs.core._lookup.call(null,map__5123__$1,"\uFDD0'l",null);
var r = cljs.core._lookup.call(null,map__5123__$1,"\uFDD0'r",null);
if(cljs.core.truth_((function (){var and__3941__auto__ = path;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,"\uFDD0'l",cljs.core.pop.call(null,l),"\uFDD0'r",cljs.core.cons.call(null,node,r))], true),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__5126 = loc;
var node = cljs.core.nth.call(null,vec__5126,0,null);
var map__5127 = cljs.core.nth.call(null,vec__5126,1,null);
var map__5127__$1 = ((cljs.core.seq_QMARK_.call(null,map__5127))?cljs.core.apply.call(null,cljs.core.hash_map,map__5127):map__5127);
var path = map__5127__$1;
var l = cljs.core._lookup.call(null,map__5127__$1,"\uFDD0'l",null);
var r = cljs.core._lookup.call(null,map__5127__$1,"\uFDD0'r",null);
if(cljs.core.truth_((function (){var and__3941__auto__ = path;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,l),cljs.core.assoc.call(null,path,"\uFDD0'l",cljs.core.PersistentVector.EMPTY,"\uFDD0'r",cljs.core.concat.call(null,cljs.core.rest.call(null,l),cljs.core.PersistentVector.fromArray([node], true),r))], true),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__5130 = loc;
var node = cljs.core.nth.call(null,vec__5130,0,null);
var map__5131 = cljs.core.nth.call(null,vec__5130,1,null);
var map__5131__$1 = ((cljs.core.seq_QMARK_.call(null,map__5131))?cljs.core.apply.call(null,cljs.core.hash_map,map__5131):map__5131);
var path = map__5131__$1;
var l = cljs.core._lookup.call(null,map__5131__$1,"\uFDD0'l",null);
if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.call(null,path,"\uFDD0'l",cljs.core.conj.call(null,l,item),"\uFDD0'changed?",true)], true),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__5134 = loc;
var node = cljs.core.nth.call(null,vec__5134,0,null);
var map__5135 = cljs.core.nth.call(null,vec__5134,1,null);
var map__5135__$1 = ((cljs.core.seq_QMARK_.call(null,map__5135))?cljs.core.apply.call(null,cljs.core.hash_map,map__5135):map__5135);
var path = map__5135__$1;
var r = cljs.core._lookup.call(null,map__5135__$1,"\uFDD0'r",null);
if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.call(null,path,"\uFDD0'r",cljs.core.cons.call(null,item,r),"\uFDD0'changed?",true)], true),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__5137 = loc;
var _ = cljs.core.nth.call(null,vec__5137,0,null);
var path = cljs.core.nth.call(null,vec__5137,1,null);
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.call(null,path,"\uFDD0'changed?",true)], true),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){
return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return edit__delegate.call(this, loc, f, args);
};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__5138){
var loc = cljs.core.first(arglist__5138);
var f = cljs.core.first(cljs.core.next(arglist__5138));
var args = cljs.core.rest(cljs.core.next(arglist__5138));
return edit__delegate(loc, f, args);
});
edit.cljs$lang$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),cljs.core.PersistentVector.fromArray([item], true))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){
if(cljs.core._EQ_.call(null,"\uFDD0'end",loc.call(null,1)))
{return loc;
} else
{var or__3943__auto__ = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_.call(null,loc);
if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = clojure.zip.right.call(null,loc);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__3943__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{{
var G__5139 = clojure.zip.up.call(null,p);
p = G__5139;
continue;
}
}
} else
{return cljs.core.PersistentVector.fromArray([clojure.zip.node.call(null,p),"\uFDD0'end"], true);
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
clojure.zip.prev = (function prev(loc){
var temp__4090__auto__ = clojure.zip.left.call(null,loc);
if(cljs.core.truth_(temp__4090__auto__))
{var lloc = temp__4090__auto__;
var loc__$1 = lloc;
while(true){
var temp__4090__auto____$1 = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;
{
var G__5140 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__5140;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){
return cljs.core._EQ_.call(null,"\uFDD0'end",loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){
var vec__5143 = loc;
var node = cljs.core.nth.call(null,vec__5143,0,null);
var map__5144 = cljs.core.nth.call(null,vec__5143,1,null);
var map__5144__$1 = ((cljs.core.seq_QMARK_.call(null,map__5144))?cljs.core.apply.call(null,cljs.core.hash_map,map__5144):map__5144);
var path = map__5144__$1;
var l = cljs.core._lookup.call(null,map__5144__$1,"\uFDD0'l",null);
var ppath = cljs.core._lookup.call(null,map__5144__$1,"\uFDD0'ppath",null);
var pnodes = cljs.core._lookup.call(null,map__5144__$1,"\uFDD0'pnodes",null);
var rs = cljs.core._lookup.call(null,map__5144__$1,"\uFDD0'r",null);
if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,"\uFDD0'l",cljs.core.pop.call(null,l),"\uFDD0'changed?",true)], true),cljs.core.meta.call(null,loc));
while(true){
var temp__4090__auto__ = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;
{
var G__5145 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__5145;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__3941__auto__ = ppath;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.assoc.call(null,ppath,"\uFDD0'changed?",true);
} else
{return and__3941__auto__;
}
})()], true),cljs.core.meta.call(null,loc));
}
}
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([cljs.core.hash_map("\uFDD0'author","Rich Hickey","\uFDD0'doc","Functional hierarchical zipper, with navigation, editing,\n  and enumeration.  See Huet")(new cljs.core.Symbol(null,"clojure.zip"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__5146__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__5146 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5146__delegate.call(this, m);
};
G__5146.cljs$lang$maxFixedArity = 0;
G__5146.cljs$lang$applyTo = (function (arglist__5147){
var m = cljs.core.seq(arglist__5147);;
return G__5146__delegate(m);
});
G__5146.cljs$lang$arity$variadic = G__5146__delegate;
return G__5146;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"lefts")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/lefts")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a seq of the left siblings of this loc","\uFDD0'line",87,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"down")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/down")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns the loc of the leftmost child of the node at this loc, or\n  nil if no children","\uFDD0'line",98,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"insert-left")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"item"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"item")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/insert-left")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Inserts the item as the left sibling of the node at this loc,\n without moving","\uFDD0'line",165,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"up")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/up")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns the loc of the parent of the node at this loc, or nil if at\n  the top","\uFDD0'line",111,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"next")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/next")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Moves to the next loc in the hierarchy, depth-first. When reaching\n  the end, returns a distinguished loc detectable via end?. If already\n  at the end, stays there.","\uFDD0'line",206,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"path")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/path")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a seq of nodes leading to this loc","\uFDD0'line",82,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"children")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/children")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a seq of the children of node at loc, which must be a branch","\uFDD0'line",69,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"vector-zip")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"root"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"root")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/vector-zip")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a zipper for nested vectors, given a root vector","\uFDD0'line",42,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"append-child")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"item"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"item")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/append-child")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Inserts the item as the rightmost child of the node at this loc,\n  without moving","\uFDD0'line",200,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"zipper")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"branch?")),(new cljs.core.Symbol(null,"children")),(new cljs.core.Symbol(null,"make-node")),(new cljs.core.Symbol(null,"root"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"branch?")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"children")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"make-node")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"root")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/zipper")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Creates a new zipper structure. \n\n  branch? is a fn that, given a node, returns true if can have\n  children, even if it currently doesn't.\n\n  children is a fn that, given a branch node, returns a seq of its\n  children.\n\n  make-node is a fn that, given an existing node and a seq of\n  children, returns a new branch node with the supplied children.\n  root is the root node.","\uFDD0'line",18,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"branch?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/branch?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns true if the node at loc is a branch","\uFDD0'line",64,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"end?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/end?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns true if loc represents the end of a depth-first walk","\uFDD0'line",232,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"leftmost")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/leftmost")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns the loc of the leftmost sibling of the node at this loc, or self","\uFDD0'line",157,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"edit")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"f")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"args"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"args")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/edit")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","Replaces the node at this loc with the value of (f node args)","\uFDD0'line",189,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"replace")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"node"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"node")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/replace")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Replaces the node at this loc, without moving","\uFDD0'line",183,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"insert-right")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"item"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"item")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/insert-right")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Inserts the item as the right sibling of the node at this loc,\n  without moving","\uFDD0'line",174,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"root")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/root")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","zips all the way up and returns the root node, reflecting any\n changes.","\uFDD0'line",124,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"insert-child")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"item"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"item")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/insert-child")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Inserts the item as the leftmost child of the node at this loc,\n  without moving","\uFDD0'line",194,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"prev")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/prev")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Moves to the previous loc in the hierarchy, depth-first. If already\n  at the root, returns nil.","\uFDD0'line",221,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"seq-zip")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"root"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"root")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/seq-zip")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a zipper for nested sequences, given a root sequence","\uFDD0'line",34,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"xml-zip")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"root"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"root")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/xml-zip")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a zipper for xml elements (as from xml/parse),\n  given a root element","\uFDD0'line",50,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"make-node")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"node")),(new cljs.core.Symbol(null,"children"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"node")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"children")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/make-node")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a new branch node, given an existing node and new\n  children. The loc is only used to supply the constructor.","\uFDD0'line",76,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"rights")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/rights")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a seq of the right siblings of this loc","\uFDD0'line",92,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"node")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/node")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns the node at loc","\uFDD0'line",60,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"right")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/right")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns the loc of the right sibling of the node at this loc, or nil","\uFDD0'line",135,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"left")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/left")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns the loc of the left sibling of the node at this loc, or nil","\uFDD0'line",150,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"remove")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/remove")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes the node at loc, returning the loc that would have preceded\n  it in a depth-first walk.","\uFDD0'line",237,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs"),(new cljs.core.Symbol(null,"rightmost")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip/rightmost")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns the loc of the rightmost sibling of the node at this loc, or self","\uFDD0'line",142,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/clojurescript/src/cljs/clojure/zip.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",null,"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([(new cljs.core.Symbol(null,"next")),(new cljs.core.Symbol(null,"replace")),(new cljs.core.Symbol(null,"remove"))]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"clojure.zip"))),old);
}));
