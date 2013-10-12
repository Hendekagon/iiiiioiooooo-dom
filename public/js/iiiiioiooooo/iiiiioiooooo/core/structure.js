goog.provide('iiiiioiooooo.core.structure');
goog.require('cljs.core');
goog.require('iiiiioiooooo.core.test');
goog.require('clojure.zip');
iiiiioiooooo.core.structure.maybe = (function maybe(f,x){
if(cljs.core.truth_(x))
{return f.call(null,x);
} else
{return x;
}
});
iiiiioiooooo.core.structure.peek_first = (function peek_first(p){
return [cljs.core.str(cljs.core.partial.call(null,clojure.zip.down.call(null,p),iiiiioiooooo.core.structure.maybe,clojure.zip.node))].join('');
});
iiiiioiooooo.core.structure.make_id = (function make_id(h){
return [cljs.core.str("id"),cljs.core.str(h)].join('');
});
iiiiioiooooo.core.structure.to_html = (function() {
var to_html = null;
var to_html__0 = (function (){
return cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"branch "})], true);
});
var to_html__1 = (function (n){
return cljs.core.conj.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("leaf "),cljs.core.str(((cljs.core.fn_QMARK_.call(null,n))?"fn ":null)),cljs.core.str((cljs.core.truth_((new cljs.core.Keyword("\uFDD0'open")).call(null,cljs.core.meta.call(null,n)))?"open":"closed"))].join('')})], true),[cljs.core.str(n)].join(''));
});
var to_html__2 = (function (n,c){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("branch open "),cljs.core.str(n)].join('')})], true),c);
});
var to_html__3 = (function (n,n__$1,c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("branch folded")].join('')})], true);
});
to_html = function(n,n__$1,c){
switch(arguments.length){
case 0:
return to_html__0.call(this);
case 1:
return to_html__1.call(this,n);
case 2:
return to_html__2.call(this,n,n__$1);
case 3:
return to_html__3.call(this,n,n__$1,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_html.cljs$lang$arity$0 = to_html__0;
to_html.cljs$lang$arity$1 = to_html__1;
to_html.cljs$lang$arity$2 = to_html__2;
to_html.cljs$lang$arity$3 = to_html__3;
return to_html;
})()
;
iiiiioiooooo.core.structure.selector = (function selector(p){
return [cljs.core.str("#root > li:first-child "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'down","\uFDD0'right"],{"\uFDD0'down":" > ul:first-child > li:first-child","\uFDD0'right":" + li"}),p)))].join('');
});
iiiiioiooooo.core.structure.replacement_selector = (function() {
var replacement_selector = null;
var replacement_selector__1 = (function (p){
return replacement_selector.call(null,"#root > li:first-child ",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'down","\uFDD0'right"],{"\uFDD0'down":" > ul:first-child > li:first-child","\uFDD0'right":" + li"}),p)));
});
var replacement_selector__2 = (function (s,ps){
return [cljs.core.str(s),cljs.core.str(((cljs.core._EQ_.call(null,ps,""))?"> ul:first-child":ps))].join('');
});
replacement_selector = function(s,ps){
switch(arguments.length){
case 1:
return replacement_selector__1.call(this,s);
case 2:
return replacement_selector__2.call(this,s,ps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replacement_selector.cljs$lang$arity$1 = replacement_selector__1;
replacement_selector.cljs$lang$arity$2 = replacement_selector__2;
return replacement_selector;
})()
;
iiiiioiooooo.core.structure.type_str = (function type_str(b){
if(cljs.core.list_QMARK_.call(null,b))
{return "\uFDD0'list";
} else
{if(cljs.core.symbol_QMARK_.call(null,b))
{return [cljs.core.str(b)].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,b))
{return "\uFDD0'vector";
} else
{if(cljs.core.map_QMARK_.call(null,b))
{return "\uFDD0'map";
} else
{if("\uFDD0'default")
{return "\uFDD0'unknown";
} else
{return null;
}
}
}
}
}
});
iiiiioiooooo.core.structure.translate = (function translate(maxx,maxy,f,p){
return cljs.core.reduce.call(null,(function (r,c){
if((maxy > 0))
{return cljs.core.conj.call(null,r,(cljs.core.truth_((function (){var and__3941__auto__ = c;
if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.branch_QMARK_.call(null,c);
} else
{return and__3941__auto__;
}
})())?(cljs.core.truth_((function (){var and__3941__auto__ = (function (){var or__3943__auto__ = (cljs.core.meta.call(null,clojure.zip.node.call(null,c)) == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (new cljs.core.Keyword("\uFDD0'open")).call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,c)));
}
})();
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'zip/make-node")).call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,c))));
} else
{return and__3941__auto__;
}
})())?f.call(null,iiiiioiooooo.core.structure.type_str.call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,c))),translate.call(null,maxx,(maxy - 1),f,clojure.zip.down.call(null,c))):f.call(null,iiiiioiooooo.core.structure.type_str.call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,c))),null,null)):f.call(null,clojure.zip.node.call(null,c))));
} else
{return r;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,maxx,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.right,p))));
});
iiiiioiooooo.core.structure.seq_map_zip = (function seq_map_zip(x){
return clojure.zip.zipper.call(null,(function (n){
var or__3943__auto__ = cljs.core.seq_QMARK_.call(null,n);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core.map_QMARK_.call(null,n);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljs.core.vector_QMARK_.call(null,n);
}
}
}),(function (b){
if(cljs.core.map_QMARK_.call(null,b))
{return cljs.core.seq.call(null,b);
} else
{return b;
}
}),(function (node,children){
return cljs.core.with_meta.call(null,children,cljs.core.merge.call(null,(function (){var or__3943__auto__ = cljs.core.meta.call(null,node);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.ObjMap.fromObject(["\uFDD0'open"],{"\uFDD0'open":true})));
}),x);
});
iiiiioiooooo.core.structure.path = (function() {
var path = null;
var path__2 = (function (c,t){
return path.call(null,t,clojure.zip.up.call(null,t),clojure.zip.left.call(null,t),cljs.core.PersistentVector.EMPTY,c);
});
var path__3 = (function (t,p,c){
return path.call(null,t,clojure.zip.up.call(null,t),clojure.zip.left.call(null,t),p,c);
});
var path__5 = (function (t,u,l,p,c){
if((function (){var or__3943__auto__ = (u == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,clojure.zip.node.call(null,t),clojure.zip.node.call(null,c));
}
})())
{return p;
} else
{return path.call(null,(cljs.core.truth_(l)?l:u),cljs.core.cons.call(null,(cljs.core.truth_(l)?"\uFDD0'right":"\uFDD0'down"),p),c);
}
});
path = function(t,u,l,p,c){
switch(arguments.length){
case 2:
return path__2.call(this,t,u);
case 3:
return path__3.call(this,t,u,l);
case 5:
return path__5.call(this,t,u,l,p,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
path.cljs$lang$arity$2 = path__2;
path.cljs$lang$arity$3 = path__3;
path.cljs$lang$arity$5 = path__5;
return path;
})()
;
iiiiioiooooo.core.structure.top = (function() {
var top = null;
var top__1 = (function (z){
return top.call(null,z,clojure.zip.up.call(null,z));
});
var top__2 = (function (z,up){
if(cljs.core.truth_(up))
{return top.call(null,up);
} else
{return z;
}
});
top = function(z,up){
switch(arguments.length){
case 1:
return top__1.call(this,z);
case 2:
return top__2.call(this,z,up);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
top.cljs$lang$arity$1 = top__1;
top.cljs$lang$arity$2 = top__2;
return top;
})()
;
iiiiioiooooo.core.structure.nodes = (function nodes(n){
return cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,n));
});
iiiiioiooooo.core.structure.climb = (function climb(p){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,p)))
{return cljs.core.map.call(null,climb,cljs.core.take_while.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,clojure.zip.right,clojure.zip.down.call(null,p))));
} else
{return clojure.zip.node.call(null,p);
}
});
iiiiioiooooo.core.structure.push_history = (function push_history(x,h){
return iiiiioiooooo.core.structure.top.call(null,(cljs.core.truth_(x)?clojure.zip.append_child.call(null,h,cljs.core.with_meta.call(null,x,cljs.core.merge.call(null,cljs.core.meta.call(null,x),cljs.core.ObjMap.fromObject(["\uFDD0'open","\uFDD0'version"],{"\uFDD0'open":false,"\uFDD0'version":(cljs.core.count.call(null,h) + 1)})))):h));
});
iiiiioiooooo.core.structure.kop = (function kop(x){
return cljs.core.update_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'keypath"], true),(function (p){
return cljs.core.subvec.call(null,p,0,(cljs.core.count.call(null,p) - 1));
}));
});
iiiiioiooooo.core.structure.safe = (function safe(s,x){
return cljs.core.assoc.call(null,x,"\uFDD0'keypath",cljs.core.PersistentVector.fromArray(["\uFDD0'keymap"], true));
});
iiiiioiooooo.core.structure.nop = (function nop(s,x){
return x;
});
iiiiioiooooo.core.structure.descendents = (function descendents(loc){
return cljs.core.mapcat.call(null,(function (r){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,r)))
{return descendents.call(null,r);
} else
{return cljs.core.PersistentVector.fromArray([r], true);
}
}),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.right,(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))?clojure.zip.down.call(null,loc):loc))));
});
iiiiioiooooo.core.structure.maybe_open = (function() {
var maybe_open = null;
var maybe_open__1 = (function (loc){
return maybe_open.call(null,loc,cljs.core.meta.call(null,clojure.zip.node.call(null,loc)));
});
var maybe_open__2 = (function (loc,meta){
if(cljs.core.truth_(meta))
{return clojure.zip.replace.call(null,loc,cljs.core.with_meta.call(null,clojure.zip.node.call(null,loc),cljs.core.update_in.call(null,meta,cljs.core.PersistentVector.fromArray(["\uFDD0'open"], true),cljs.core.not)));
} else
{return loc;
}
});
maybe_open = function(loc,meta){
switch(arguments.length){
case 1:
return maybe_open__1.call(this,loc);
case 2:
return maybe_open__2.call(this,loc,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
maybe_open.cljs$lang$arity$1 = maybe_open__1;
maybe_open.cljs$lang$arity$2 = maybe_open__2;
return maybe_open;
})()
;
iiiiioiooooo.core.structure.maybe_open_fn = (function maybe_open_fn(loc){
if(cljs.core._EQ_.call(null,clojure.zip.node.call(null,clojure.zip.next.call(null,loc)),(new cljs.core.Symbol(null,"defn"))))
{return cljs.core.last.call(null,cljs.core.map.call(null,iiiiioiooooo.core.structure.maybe_open,cljs.core.take.call(null,3,cljs.core.reverse.call(null,iiiiioiooooo.core.structure.descendents.call(null,loc)))));
} else
{return loc;
}
});
iiiiioiooooo.core.structure.carefull = (function carefull(f){
return (function (x){
var temp__4090__auto__ = f.call(null,x);
if(cljs.core.truth_(temp__4090__auto__))
{var nx = temp__4090__auto__;
return nx;
} else
{return x;
}
});
});
iiiiioiooooo.core.structure.stop_at_closed = (function stop_at_closed(f){
return (function (x){
if(cljs.core.truth_((function (){var or__3943__auto__ = (cljs.core.meta.call(null,clojure.zip.node.call(null,x)) == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (new cljs.core.Keyword("\uFDD0'open")).call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,x)));
}
})()))
{return f.call(null,x);
} else
{return x;
}
});
});
iiiiioiooooo.core.structure.forward_zipper = (function forward_zipper(f){
return (function (x){
if(cljs.core.truth_((function (){var and__3941__auto__ = x;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,x)),"\uFDD0'zip/branch?");
} else
{return and__3941__auto__;
}
})()))
{return f.call(null,clojure.zip.node.call(null,x));
} else
{return f.call(null,x);
}
});
});
iiiiioiooooo.core.structure.maybe_select = (function maybe_select(x,y){
if(cljs.core._EQ_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,(new cljs.core.Keyword("\uFDD0'focus")).call(null,x))),cljs.core.meta.call(null,clojure.zip.node.call(null,(new cljs.core.Keyword("\uFDD0'focus")).call(null,y)))))
{return cljs.core.assoc.call(null,x,"\uFDD0'action","\uFDD0'select");
} else
{return cljs.core.assoc.call(null,x,"\uFDD0'action","\uFDD0'modify","\uFDD0'modified",(new cljs.core.Keyword("\uFDD0'focus")).call(null,x));
}
});
iiiiioiooooo.core.structure.selected = (function selected(s,f){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,s,cljs.core.PersistentVector.fromArray(["\uFDD0'focus"], true),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.forward_zipper.call(null,f))),"\uFDD0'action","\uFDD0'select");
});
iiiiioiooooo.core.structure.modified = (function() {
var modified = null;
var modified__1 = (function (x){
return cljs.core.assoc.call(null,x,"\uFDD0'modified",(new cljs.core.Keyword("\uFDD0'focus")).call(null,x));
});
var modified__2 = (function (s,f){
return modified.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,s,cljs.core.PersistentVector.fromArray(["\uFDD0'focus"], true),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.forward_zipper.call(null,f))),"\uFDD0'action","\uFDD0'modify"));
});
modified = function(s,f){
switch(arguments.length){
case 1:
return modified__1.call(this,s);
case 2:
return modified__2.call(this,s,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modified.cljs$lang$arity$1 = modified__1;
modified.cljs$lang$arity$2 = modified__2;
return modified;
})()
;
iiiiioiooooo.core.structure.left = (function left(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.left);
});
iiiiioiooooo.core.structure.right = (function right(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.right);
});
iiiiioiooooo.core.structure.out = (function out(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.up);
});
iiiiioiooooo.core.structure.in$ = (function in$(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.stop_at_closed.call(null,clojure.zip.down));
});
iiiiioiooooo.core.structure.depth_first_next = (function depth_first_next(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.stop_at_closed.call(null,clojure.zip.next));
});
iiiiioiooooo.core.structure.depth_first_previous = (function depth_first_previous(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.prev);
});
iiiiioiooooo.core.structure.expand = (function expand(s,x){
return iiiiioiooooo.core.structure.maybe_select.call(null,cljs.core.update_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'focus"], true),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.maybe_open)),x);
});
iiiiioiooooo.core.structure.delete$ = (function delete$(s,x){
return iiiiioiooooo.core.structure.modified.call(null,x,clojure.zip.remove);
});
iiiiioiooooo.core.structure.insert_left = (function insert_left(s,x){
return iiiiioiooooo.core.structure.modified.call(null,x,(function (c){
return clojure.zip.insert_left.call(null,c,"node");
}));
});
iiiiioiooooo.core.structure.insert_right = (function insert_right(s,x){
return iiiiioiooooo.core.structure.modified.call(null,x,(function (c){
return clojure.zip.insert_right.call(null,c,"node");
}));
});
iiiiioiooooo.core.structure.rightmost = (function rightmost(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.rightmost);
});
iiiiioiooooo.core.structure.leftmost = (function leftmost(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.leftmost);
});
iiiiioiooooo.core.structure.add_keybinding = (function add_keybinding(x,path,f){
return cljs.core.assoc_in.call(null,x,cljs.core.cons.call(null,"\uFDD0'keymap",path),f);
});
iiiiioiooooo.core.structure.root = (function root(s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.top);
});
iiiiioiooooo.core.structure.replace_parent = (function replace_parent(s,x){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'focus"], true),(function (n){
return clojure.zip.replace.call(null,clojure.zip.up.call(null,n),clojure.zip.node.call(null,n));
})),"\uFDD0'action","\uFDD0'modify","\uFDD0'modified",clojure.zip.up.call(null,(new cljs.core.Keyword("\uFDD0'focus")).call(null,x)));
});
iiiiioiooooo.core.structure.split_into_children = (function split_into_children(s,x){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'focus"], true),(function (n){
return clojure.zip.replace.call(null,n,clojure.zip.make_node.call(null,n,clojure.zip.node.call(null,n),clojure.zip.children.call(null,clojure.zip.vector_zip.call(null,cljs.core.vec.call(null,cljs.core.name.call(null,clojure.zip.node.call(null,n)))))));
})),"\uFDD0'action","\uFDD0'modify");
});
iiiiioiooooo.core.structure.fuse_into_parent = (function fuse_into_parent(s,x){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'focus"], true),(function (n){
return clojure.zip.replace.call(null,n,cljs.core.symbol.call(null,cljs.core.apply.call(null,cljs.core.str,clojure.zip.children.call(null,n))));
})),"\uFDD0'action","\uFDD0'modify");
});
iiiiioiooooo.core.structure.home = (function home(s,x){
return cljs.core.update_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'focus"], true),iiiiioiooooo.core.structure.top);
});
iiiiioiooooo.core.structure.hfn = (function hfn(s,x){
return cljs.core.assoc.call(null,x,"\uFDD0'focus",s);
});
iiiiioiooooo.core.structure.next_at = (function next_at(i,c){
return (function (loc){
var or__3943__auto__ = loc;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.first.call(null,cljs.core.filter.call(null,(function (l){
return cljs.core._EQ_.call(null,c,cljs.core.nth.call(null,clojure.zip.node.call(null,l),i));
}),cljs.core.iterate.call(null,clojure.zip.right,loc)));
}
});
});
iiiiioiooooo.core.structure.next_starting_with = (function next_starting_with(c){
return (function (s,x){
return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.next_at.call(null,(cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'keypath")).call(null,x)) - 1),c));
});
});
iiiiioiooooo.core.structure.default_keymap = (function default_keymap(){
return cljs.core.ObjMap.fromObject(["\uFDD0'backspace","\uFDD0'default","\uFDD0'alt","\uFDD0'tab","\uFDD0'0","\uFDD0'ctrl","\uFDD0'h","\uFDD0'shift","\uFDD0'space","\uFDD0'right","\uFDD0'left","\uFDD0'down","\uFDD0'up"],{"\uFDD0'backspace":cljs.core.ObjMap.fromObject(["\uFDD0'backspace"],{"\uFDD0'backspace":iiiiioiooooo.core.structure.delete$}),"\uFDD0'default":iiiiioiooooo.core.structure.nop,"\uFDD0'alt":cljs.core.ObjMap.fromObject(["\uFDD0'left","\uFDD0'right","\uFDD0'up","\uFDD0'down","\uFDD0'alt"],{"\uFDD0'left":cljs.core.ObjMap.fromObject(["\uFDD0'left"],{"\uFDD0'left":iiiiioiooooo.core.structure.left}),"\uFDD0'right":cljs.core.ObjMap.fromObject(["\uFDD0'right"],{"\uFDD0'right":iiiiioiooooo.core.structure.right}),"\uFDD0'up":cljs.core.ObjMap.fromObject(["\uFDD0'up"],{"\uFDD0'up":iiiiioiooooo.core.structure.fuse_into_parent}),"\uFDD0'down":cljs.core.ObjMap.fromObject(["\uFDD0'down"],{"\uFDD0'down":iiiiioiooooo.core.structure.split_into_children}),"\uFDD0'alt":iiiiioiooooo.core.structure.nop}),"\uFDD0'tab":cljs.core.ObjMap.fromObject(["\uFDD0'tab"],{"\uFDD0'tab":iiiiioiooooo.core.structure.hfn}),"\uFDD0'0":cljs.core.ObjMap.fromObject(["\uFDD0'0"],{"\uFDD0'0":iiiiioiooooo.core.structure.home}),"\uFDD0'ctrl":cljs.core.ObjMap.fromObject(["\uFDD0'left","\uFDD0'right","\uFDD0'alt","\uFDD0'up","\uFDD0'ctrl"],{"\uFDD0'left":cljs.core.ObjMap.fromObject(["\uFDD0'left"],{"\uFDD0'left":iiiiioiooooo.core.structure.insert_left}),"\uFDD0'right":cljs.core.ObjMap.fromObject(["\uFDD0'right"],{"\uFDD0'right":iiiiioiooooo.core.structure.insert_right}),"\uFDD0'alt":cljs.core.ObjMap.fromObject(["\uFDD0'right","\uFDD0'left","\uFDD0'up","\uFDD0'alt"],{"\uFDD0'right":cljs.core.ObjMap.fromObject(["\uFDD0'right"],{"\uFDD0'right":iiiiioiooooo.core.structure.rightmost}),"\uFDD0'left":cljs.core.ObjMap.fromObject(["\uFDD0'left"],{"\uFDD0'left":iiiiioiooooo.core.structure.leftmost}),"\uFDD0'up":cljs.core.ObjMap.fromObject(["\uFDD0'up"],{"\uFDD0'up":iiiiioiooooo.core.structure.root}),"\uFDD0'alt":iiiiioiooooo.core.structure.nop}),"\uFDD0'up":cljs.core.ObjMap.fromObject(["\uFDD0'up"],{"\uFDD0'up":iiiiioiooooo.core.structure.replace_parent}),"\uFDD0'ctrl":iiiiioiooooo.core.structure.nop}),"\uFDD0'h":cljs.core.ObjMap.fromObject(["\uFDD0'h"],{"\uFDD0'h":iiiiioiooooo.core.structure.hfn}),"\uFDD0'shift":cljs.core.ObjMap.fromObject(["\uFDD0'shift"],{"\uFDD0'shift":iiiiioiooooo.core.structure.nop}),"\uFDD0'space":cljs.core.ObjMap.fromObject(["\uFDD0'space"],{"\uFDD0'space":iiiiioiooooo.core.structure.expand}),"\uFDD0'right":cljs.core.ObjMap.fromObject(["\uFDD0'right","\uFDD0'space"],{"\uFDD0'right":iiiiioiooooo.core.structure.depth_first_next,"\uFDD0'space":cljs.core.ObjMap.fromObject(["\uFDD0'space"],{"\uFDD0'space":iiiiioiooooo.core.structure.depth_first_next})}),"\uFDD0'left":cljs.core.ObjMap.fromObject(["\uFDD0'left"],{"\uFDD0'left":iiiiioiooooo.core.structure.depth_first_previous}),"\uFDD0'down":cljs.core.ObjMap.fromObject(["\uFDD0'down"],{"\uFDD0'down":iiiiioiooooo.core.structure.in$}),"\uFDD0'up":cljs.core.ObjMap.fromObject(["\uFDD0'up"],{"\uFDD0'up":iiiiioiooooo.core.structure.out})});
});
iiiiioiooooo.core.structure.find_first = (function find_first(loc,x){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x),clojure.zip.node),cljs.core.iterate.call(null,clojure.zip.next,loc)));
});
iiiiioiooooo.core.structure.latest_state = (function latest_state(history){
return clojure.zip.node.call(null,clojure.zip.rightmost.call(null,clojure.zip.down.call(null,iiiiioiooooo.core.structure.top.call(null,history))));
});
iiiiioiooooo.core.structure.default_state = (function() {
var default_state = null;
var default_state__0 = (function (){
return default_state.call(null,iiiiioiooooo.core.structure.seq_map_zip.call(null,cljs.core.PersistentVector.fromArray([cljs.core.with_meta.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'qwe","\uFDD0'help","\uFDD0'context","\uFDD0'namespaces","\uFDD0'test","\uFDD0'test1","\uFDD0'action","\uFDD0'test2","\uFDD0'focus","\uFDD0'keydown","\uFDD0'keymap","\uFDD0'keyup","\uFDD0'keypath","\uFDD0'selected"],{"\uFDD0'qwe":9,"\uFDD0'help":cljs.core.PersistentVector.fromArray(["iiiiioiooooo Clojure structure editor (barely functioning sketch of)","This is an experiment in making a functional code editor.","https://www.youtube.com/watch?v=2Op3QLzMgSY&feature=player_detailpage#t=2077s","Lecture 1A | MIT 6.001 Structure and Interpretation, 1986 - 35m25s","\n          The idea here is to manipulate code\n          at the expression level, not at the text level.\n          This is very primitive right now,\n          it doesn't do much yet, just testing ideas, everything will change, or it will be abandoned.\n          Works best in Chrome, keyboard-only! doesn't work on mobile browsers.\n          Plan: SVG view,\n          make as front-end for Session REPL. What can you do now ? Navigate the code and do basic editing.\n          "], true),"\uFDD0'context":"poi","\uFDD0'namespaces":cljs.core.ObjMap.fromObject(["\uFDD0'clojure.core"],{"\uFDD0'clojure.core":cljs.core.ObjMap.fromObject(["\uFDD0'c","\uFDD0'inc","\uFDD0'dec"],{"\uFDD0'c":cljs.core.ObjMap.fromObject(["\uFDD0'o"],{"\uFDD0'o":cljs.core.ObjMap.fromObject(["\uFDD0'n"],{"\uFDD0'n":cljs.core.ObjMap.fromObject(["\uFDD0's","\uFDD0'c","\uFDD0'j"],{"\uFDD0's":"\uFDD0'cons","\uFDD0'c":"\uFDD0'juxt","\uFDD0'j":"\uFDD0'conj"})})}),"\uFDD0'inc":cljs.core.inc,"\uFDD0'dec":cljs.core.dec})}),"\uFDD0'test":cljs.core.with_meta.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"+")),1,3),cljs.core.hash_map("\uFDD0'line",325,"\uFDD0'column",29)),cljs.core.ObjMap.fromObject(["\uFDD0'open"],{"\uFDD0'open":true})),"\uFDD0'test1":cljs.core.with_meta.call(null,cljs.core.with_meta(cljs.core.list(cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"fn")),cljs.core.vec([(new cljs.core.Symbol(null,"x"))]),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"list")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"rest")),(new cljs.core.Symbol(null,"x"))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",45)),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"cons")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"first")),(new cljs.core.Symbol(null,"x"))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",73))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",60)),cljs.core.vec([(new cljs.core.Symbol(null,"x"))])),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",54))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",39))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",31)),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.vec(["quote",(new cljs.core.Symbol(null,"fn")),cljs.core.vec([(new cljs.core.Symbol(null,"x"))]),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"list")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"rest")),(new cljs.core.Symbol(null,"x"))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",120)),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"cons")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"first")),(new cljs.core.Symbol(null,"x"))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",148))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",135)),cljs.core.vec([(new cljs.core.Symbol(null,"x"))])),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",129))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",114))])),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",91))),cljs.core.hash_map("\uFDD0'line",327,"\uFDD0'column",30)),cljs.core.ObjMap.fromObject(["\uFDD0'open"],{"\uFDD0'open":true})),"\uFDD0'action":"\uFDD0'select","\uFDD0'test2":cljs.core.with_meta.call(null,iiiiioiooooo.core.test.test_exp.call(null),cljs.core.ObjMap.fromObject(["\uFDD0'open"],{"\uFDD0'open":true})),"\uFDD0'focus":"hi","\uFDD0'keydown":cljs.core.ObjMap.fromObject(["\uFDD0'default"],{"\uFDD0'default":(function keydown(s,x){
return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.update_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'keypath"], true),(function (kp){
return cljs.core.conj.call(null,kp,(new cljs.core.Keyword("\uFDD0'key")).call(null,x));
})),s);
})}),"\uFDD0'keymap":iiiiioiooooo.core.structure.default_keymap.call(null),"\uFDD0'keyup":cljs.core.ObjMap.fromObject(["\uFDD0'esc","\uFDD0'default"],{"\uFDD0'esc":iiiiioiooooo.core.structure.safe,"\uFDD0'default":(function keyup(s,x){
return iiiiioiooooo.core.structure.push_history.call(null,(function (){var or__3943__auto__ = cljs.core.get_in.call(null,x,cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0'keypath")).call(null,x),(new cljs.core.Keyword("\uFDD0'key")).call(null,x)),iiiiioiooooo.core.structure.nop).call(null,s,iiiiioiooooo.core.structure.kop.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return s;
}
})(),s);
})}),"\uFDD0'keypath":cljs.core.PersistentVector.fromArray(["\uFDD0'keymap"], true),"\uFDD0'selected":cljs.core.PersistentVector.EMPTY}),cljs.core.ObjMap.fromObject(["\uFDD0'open"],{"\uFDD0'open":true}))], true)));
});
var default_state__1 = (function (h){
return default_state.call(null,iiiiioiooooo.core.structure.latest_state.call(null,h),h);
});
var default_state__2 = (function (s,h){
return default_state.call(null,iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc.call(null,s,"\uFDD0'context",h,"\uFDD0'focus",clojure.zip.up.call(null,clojure.zip.rightmost.call(null,clojure.zip.down.call(null,h))),"\uFDD0'selected",cljs.core.PersistentVector.fromArray([clojure.zip.next.call(null,clojure.zip.next.call(null,h))], true),"\uFDD0'qwe",4,"\uFDD0'poi","qwe"),h),iiiiioiooooo.core.structure.latest_state.call(null,h),null);
});
var default_state__3 = (function (h,latest,w){
return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc.call(null,iiiiioiooooo.core.structure.latest_state.call(null,h),"\uFDD0'context",clojure.zip.up.call(null,iiiiioiooooo.core.structure.find_first.call(null,h,"\uFDD0'test2")),"\uFDD0'focus",clojure.zip.next.call(null,clojure.zip.next.call(null,iiiiioiooooo.core.structure.find_first.call(null,h,"\uFDD0'test2"))),"\uFDD0'qwe","qwe"),h);
});
default_state = function(h,latest,w){
switch(arguments.length){
case 0:
return default_state__0.call(this);
case 1:
return default_state__1.call(this,h);
case 2:
return default_state__2.call(this,h,latest);
case 3:
return default_state__3.call(this,h,latest,w);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
default_state.cljs$lang$arity$0 = default_state__0;
default_state.cljs$lang$arity$1 = default_state__1;
default_state.cljs$lang$arity$2 = default_state__2;
default_state.cljs$lang$arity$3 = default_state__3;
return default_state;
})()
;
iiiiioiooooo.core.structure.fn_for_event = (function fn_for_event(s,e){
if(cljs.core._EQ_.call(null,e,cljs.core.select_keys.call(null,s,cljs.core.keys.call(null,e))))
{return cljs.core.identity;
} else
{return cljs.core.get_in.call(null,s,cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'event")).call(null,e),(new cljs.core.Keyword("\uFDD0'key")).call(null,e)], true),cljs.core.get_in.call(null,s,cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'event")).call(null,e),"\uFDD0'default"], true),cljs.core.identity));
}
});
iiiiioiooooo.core.structure.update = (function() {
var update = null;
var update__2 = (function (s,e){
return update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),e);
});
var update__3 = (function (s,x,e){
return update.call(null,s,cljs.core.merge.call(null,x,e),e,iiiiioiooooo.core.structure.fn_for_event.call(null,x,e));
});
var update__4 = (function (s,x,e,f){
return f.call(null,s,x);
});
update = function(s,x,e,f){
switch(arguments.length){
case 2:
return update__2.call(this,s,x);
case 3:
return update__3.call(this,s,x,e);
case 4:
return update__4.call(this,s,x,e,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$arity$2 = update__2;
update.cljs$lang$arity$3 = update__3;
update.cljs$lang$arity$4 = update__4;
return update;
})()
;
iiiiioiooooo.core.structure.update_BANG_ = (function update_BANG_(state,e){
return cljs.core.swap_BANG_.call(null,state,(function (s){
return iiiiioiooooo.core.structure.update.call(null,s,e);
}));
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__2799__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__2799 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2799__delegate.call(this, m);
};
G__2799.cljs$lang$maxFixedArity = 0;
G__2799.cljs$lang$applyTo = (function (arglist__2800){
var m = cljs.core.seq(arglist__2800);;
return G__2799__delegate(m);
});
G__2799.cljs$lang$arity$variadic = G__2799__delegate;
return G__2799;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"latest-state")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"history"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"history")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/latest-state")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",259,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"fuse-into-parent")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/fuse-into-parent")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",196,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"next-at")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"i")),(new cljs.core.Symbol(null,"c"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"i")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/next-at")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",205,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"carefull")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/carefull")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",140,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"translate")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"maxx")),(new cljs.core.Symbol(null,"maxy")),(new cljs.core.Symbol(null,"f")),(new cljs.core.Symbol(null,"p"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"maxx")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"maxy")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/translate")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",46,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"out")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/out")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",160,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"modified")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"f"))]),cljs.core.vec([(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/modified")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",151,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"update")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"e"))]),cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x")),(new cljs.core.Symbol(null,"e"))]),cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x")),(new cljs.core.Symbol(null,"e")),(new cljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/update")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",354,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"nop")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/nop")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",115,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"insert-left")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/insert-left")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",172,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"selected")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/selected")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",149,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"expand")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/expand")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",168,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"path")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"c")),(new cljs.core.Symbol(null,"t"))]),cljs.core.vec([(new cljs.core.Symbol(null,"t")),(new cljs.core.Symbol(null,"p")),(new cljs.core.Symbol(null,"c"))]),cljs.core.vec([(new cljs.core.Symbol(null,"t")),(new cljs.core.Symbol(null,"u")),(new cljs.core.Symbol(null,"l")),(new cljs.core.Symbol(null,"p")),(new cljs.core.Symbol(null,"c"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"t")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"t")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"t")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"u")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"l")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/path")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",5,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",76,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"add-keybinding")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"x")),(new cljs.core.Symbol(null,"path")),(new cljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/add-keybinding")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",180,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"in")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/in")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",162,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"delete")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/delete")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",170,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"default-keymap")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/default-keymap")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",215,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"seq-map-zip")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/seq-map-zip")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",69,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"maybe-open-fn")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/maybe-open-fn")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",133,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"selector")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"p"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/selector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",21,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"home")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/home")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",200,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"update!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"state")),(new cljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"state")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/update!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",360,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"descendents")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/descendents")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",117,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"push-history")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"x")),(new cljs.core.Symbol(null,"h"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"h")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/push-history")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",107,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"kop")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/kop")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",111,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"leftmost")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/leftmost")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",178,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"safe")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/safe")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",113,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"replace-parent")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/replace-parent")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",184,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"maybe-open")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"meta"))]),cljs.core.vec([(new cljs.core.Symbol(null,"loc"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"meta")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/maybe-open")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",123,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"insert-right")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/insert-right")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",174,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"climb")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"p"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/climb")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",95,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"root")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/root")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",182,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"nodes")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"n"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/nodes")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",92,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"hfn")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/hfn")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",203,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"make-id")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"h"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"h")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/make-id")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",12,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"to-html")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"n"))]),cljs.core.vec([(new cljs.core.Symbol(null,"n")),(new cljs.core.Symbol(null,"c"))]),cljs.core.vec([(new cljs.core.Symbol(null,"n")),(new cljs.core.Symbol(null,"n")),(new cljs.core.Symbol(null,"c"))]),cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/to-html")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",14,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"peek-first")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"p"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/peek-first")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",10,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"next-starting-with")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"c"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/next-starting-with")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",211,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"split-into-children")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/split-into-children")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",189,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"depth-first-previous")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/depth-first-previous")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",166,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"forward-zipper")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/forward-zipper")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",144,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"maybe-select")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"x")),(new cljs.core.Symbol(null,"y"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"y")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/maybe-select")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",146,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"top")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"z"))]),cljs.core.vec([(new cljs.core.Symbol(null,"z")),(new cljs.core.Symbol(null,"up"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"z")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"z")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"up")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/top")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",87,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"maybe")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"f")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/maybe")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",8,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"fn-for-event")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/fn-for-event")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",347,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"stop-at-closed")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/stop-at-closed")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",142,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"find-first")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"loc")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"loc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/find-first")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",257,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"right")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/right")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",158,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"depth-first-next")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/depth-first-next")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",164,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"replacement-selector")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"p"))]),cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"ps"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"ps")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/replacement-selector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",25,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"left")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/left")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",156,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"type-str")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"b"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"b")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/type-str")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",36,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"rightmost")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/rightmost")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",176,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs"),(new cljs.core.Symbol(null,"default-state")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]),cljs.core.vec([(new cljs.core.Symbol(null,"h"))]),cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"h"))]),cljs.core.vec([(new cljs.core.Symbol(null,"h")),(new cljs.core.Symbol(null,"latest")),(new cljs.core.Symbol(null,"w"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"h")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"h")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"h")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"latest")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"w")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure/default-state")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",263,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/iiiiioiooooo/core/structure.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"test")),(new cljs.core.Symbol(null,"iiiiioiooooo.core.test")),(new cljs.core.Symbol(null,"zip")),(new cljs.core.Symbol(null,"clojure.zip"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure"))),old);
}));
