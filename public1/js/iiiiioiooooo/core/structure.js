// Compiled by ClojureScript 0.0-2322
goog.provide('iiiiioiooooo.core.structure');
goog.require('cljs.core');
goog.require('iiiiioiooooo.core.test');
goog.require('iiiiioiooooo.core.test');
goog.require('clojure.zip');
goog.require('clojure.zip');
iiiiioiooooo.core.structure.maybe = (function maybe(f,x){if(cljs.core.truth_(x))
{return f.call(null,x);
} else
{return x;
}
});
iiiiioiooooo.core.structure.peek_first = (function peek_first(p){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.call(null,clojure.zip.down.call(null,p),iiiiioiooooo.core.structure.maybe,clojure.zip.node)));
});
iiiiioiooooo.core.structure.make_id = (function make_id(h){return ("id"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h));
});
iiiiioiooooo.core.structure.to_html = (function() {
var to_html = null;
var to_html__0 = (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"branch "], null)], null);
});
var to_html__1 = (function (n){return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("leaf "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.fn_QMARK_.call(null,n))?"fn ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n)))?"open":"closed")))], null)], null),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
var to_html__2 = (function (n,c){return cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("branch open "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))], null)], null),c);
});
var to_html__3 = (function (n,n__$1,c){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("branch folded")], null)], null);
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
to_html.cljs$core$IFn$_invoke$arity$0 = to_html__0;
to_html.cljs$core$IFn$_invoke$arity$1 = to_html__1;
to_html.cljs$core$IFn$_invoke$arity$2 = to_html__2;
to_html.cljs$core$IFn$_invoke$arity$3 = to_html__3;
return to_html;
})()
;
iiiiioiooooo.core.structure.selector = (function selector(p){return ("#root > li:first-child "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570)," > ul:first-child > li:first-child",new cljs.core.Keyword(null,"right","right",-452581833)," + li"], null),p))));
});
iiiiioiooooo.core.structure.replacement_selector = (function() {
var replacement_selector = null;
var replacement_selector__1 = (function (p){return replacement_selector.call(null,"#root > li:first-child ",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570)," > ul:first-child > li:first-child",new cljs.core.Keyword(null,"right","right",-452581833)," + li"], null),p)));
});
var replacement_selector__2 = (function (s,ps){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,ps,""))?"> ul:first-child":ps)));
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
replacement_selector.cljs$core$IFn$_invoke$arity$1 = replacement_selector__1;
replacement_selector.cljs$core$IFn$_invoke$arity$2 = replacement_selector__2;
return replacement_selector;
})()
;
iiiiioiooooo.core.structure.type_str = (function type_str(b){if(cljs.core.list_QMARK_.call(null,b))
{return new cljs.core.Keyword(null,"list","list",765357683);
} else
{if((b instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
} else
{if(cljs.core.vector_QMARK_.call(null,b))
{return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else
{if(cljs.core.map_QMARK_.call(null,b))
{return new cljs.core.Keyword(null,"map","map",1371690461);
} else
{return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
}
}
}
});
iiiiioiooooo.core.structure.translate = (function translate(maxx,maxy,f,p){return cljs.core.reduce.call(null,(function (r,c){if((maxy > (0)))
{return cljs.core.conj.call(null,r,(cljs.core.truth_((function (){var and__3522__auto__ = c;if(cljs.core.truth_(and__3522__auto__))
{return clojure.zip.branch_QMARK_.call(null,c);
} else
{return and__3522__auto__;
}
})())?(cljs.core.truth_((function (){var and__3522__auto__ = (function (){var or__3534__auto__ = (cljs.core.meta.call(null,clojure.zip.node.call(null,c)) == null);if(or__3534__auto__)
{return or__3534__auto__;
} else
{return new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,c)));
}
})();if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,c))));
} else
{return and__3522__auto__;
}
})())?f.call(null,iiiiioiooooo.core.structure.type_str.call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,c))),translate.call(null,maxx,(maxy - (1)),f,clojure.zip.down.call(null,c))):f.call(null,iiiiioiooooo.core.structure.type_str.call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,c))),null,null)):f.call(null,clojure.zip.node.call(null,c))));
} else
{return r;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,maxx,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.right,p))));
});
iiiiioiooooo.core.structure.seq_map_zip = (function seq_map_zip(x){return clojure.zip.zipper.call(null,(function (n){return (cljs.core.seq_QMARK_.call(null,n)) || (cljs.core.map_QMARK_.call(null,n)) || (cljs.core.vector_QMARK_.call(null,n));
}),(function (b){if(cljs.core.map_QMARK_.call(null,b))
{return cljs.core.seq.call(null,b);
} else
{return b;
}
}),(function (node,children){return cljs.core.with_meta.call(null,children,cljs.core.merge.call(null,(function (){var or__3534__auto__ = cljs.core.meta.call(null,node);if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null)));
}),x);
});
iiiiioiooooo.core.structure.top = (function() {
var top = null;
var top__1 = (function (z){return top.call(null,z,clojure.zip.up.call(null,z));
});
var top__2 = (function (z,up){if(cljs.core.truth_(up))
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
top.cljs$core$IFn$_invoke$arity$1 = top__1;
top.cljs$core$IFn$_invoke$arity$2 = top__2;
return top;
})()
;
iiiiioiooooo.core.structure.path = (function() {
var path = null;
var path__1 = (function (t){return path.call(null,iiiiioiooooo.core.structure.top.call(null,t),t);
});
var path__2 = (function (c,t){return path.call(null,t,clojure.zip.up.call(null,t),clojure.zip.left.call(null,t),cljs.core.PersistentVector.EMPTY,c);
});
var path__3 = (function (t,p,c){return path.call(null,t,clojure.zip.up.call(null,t),clojure.zip.left.call(null,t),p,c);
});
var path__5 = (function (t,u,l,p,c){if(((u == null)) || (cljs.core._EQ_.call(null,clojure.zip.node.call(null,clojure.zip.next.call(null,t)),clojure.zip.node.call(null,clojure.zip.next.call(null,c)))))
{if(cljs.core.truth_((function (){var and__3522__auto__ = t;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core._EQ_.call(null,clojure.zip.node.call(null,clojure.zip.next.call(null,t)),clojure.zip.node.call(null,clojure.zip.next.call(null,c)));
} else
{return and__3522__auto__;
}
})()))
{return cljs.core.cons.call(null,new cljs.core.Keyword(null,"v","v",21465059),p);
} else
{return p;
}
} else
{return path.call(null,(cljs.core.truth_(l)?l:u),cljs.core.cons.call(null,(cljs.core.truth_(l)?new cljs.core.Keyword(null,">",">",-555517146):new cljs.core.Keyword(null,"v","v",21465059)),p),c);
}
});
path = function(t,u,l,p,c){
switch(arguments.length){
case 1:
return path__1.call(this,t);
case 2:
return path__2.call(this,t,u);
case 3:
return path__3.call(this,t,u,l);
case 5:
return path__5.call(this,t,u,l,p,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
path.cljs$core$IFn$_invoke$arity$1 = path__1;
path.cljs$core$IFn$_invoke$arity$2 = path__2;
path.cljs$core$IFn$_invoke$arity$3 = path__3;
path.cljs$core$IFn$_invoke$arity$5 = path__5;
return path;
})()
;
iiiiioiooooo.core.structure.nodes = (function nodes(n){return cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,n));
});
iiiiioiooooo.core.structure.climb = (function climb(p){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,p)))
{return cljs.core.map.call(null,climb,cljs.core.take_while.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,clojure.zip.right,clojure.zip.down.call(null,p))));
} else
{return clojure.zip.node.call(null,p);
}
});
iiiiioiooooo.core.structure.push_history = (function push_history(x,h){return iiiiioiooooo.core.structure.top.call(null,(cljs.core.truth_(x)?clojure.zip.append_child.call(null,h,cljs.core.with_meta.call(null,x,cljs.core.merge.call(null,cljs.core.meta.call(null,x),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"version","version",425292698),(cljs.core.count.call(null,h) + (1))], null)))):h));
});
iiiiioiooooo.core.structure.kop = (function kop(x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypath","keypath",1965534711)], null),(function (p){return cljs.core.subvec.call(null,p,(0),(cljs.core.count.call(null,p) - (1)));
}));
});
iiiiioiooooo.core.structure.safe = (function safe(s,x){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null));
});
iiiiioiooooo.core.structure.nop = (function nop(s,x){return x;
});
iiiiioiooooo.core.structure.descendents = (function descendents(loc){return cljs.core.mapcat.call(null,(function (r){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,r)))
{return descendents.call(null,r);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
}
}),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.right,(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))?clojure.zip.down.call(null,loc):loc))));
});
iiiiioiooooo.core.structure.maybe_open = (function() {
var maybe_open = null;
var maybe_open__1 = (function (loc){return maybe_open.call(null,loc,cljs.core.meta.call(null,clojure.zip.node.call(null,loc)));
});
var maybe_open__2 = (function (loc,meta){if(cljs.core.truth_(meta))
{return clojure.zip.replace.call(null,loc,cljs.core.with_meta.call(null,clojure.zip.node.call(null,loc),cljs.core.update_in.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not)));
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
maybe_open.cljs$core$IFn$_invoke$arity$1 = maybe_open__1;
maybe_open.cljs$core$IFn$_invoke$arity$2 = maybe_open__2;
return maybe_open;
})()
;
iiiiioiooooo.core.structure.maybe_open_fn = (function maybe_open_fn(loc){if(cljs.core._EQ_.call(null,clojure.zip.node.call(null,clojure.zip.next.call(null,loc)),new cljs.core.Symbol(null,"defn","defn",-126010802,null)))
{return cljs.core.last.call(null,cljs.core.map.call(null,iiiiioiooooo.core.structure.maybe_open,cljs.core.take.call(null,(3),cljs.core.reverse.call(null,iiiiioiooooo.core.structure.descendents.call(null,loc)))));
} else
{return loc;
}
});
iiiiioiooooo.core.structure.carefull = (function carefull(f){return (function (x){var temp__4124__auto__ = f.call(null,x);if(cljs.core.truth_(temp__4124__auto__))
{var nx = temp__4124__auto__;return nx;
} else
{return x;
}
});
});
iiiiioiooooo.core.structure.stop_at_closed = (function stop_at_closed(f){return (function (x){if(cljs.core.truth_((function (){var or__3534__auto__ = (cljs.core.meta.call(null,clojure.zip.node.call(null,x)) == null);if(or__3534__auto__)
{return or__3534__auto__;
} else
{return new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,x)));
}
})()))
{return f.call(null,x);
} else
{return x;
}
});
});
iiiiioiooooo.core.structure.forward_zipper = (function forward_zipper(f){return (function (loc){if(cljs.core.truth_((function (){var and__3522__auto__ = loc;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,loc)),new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862));
} else
{return and__3522__auto__;
}
})()))
{return f.call(null,clojure.zip.node.call(null,loc));
} else
{return f.call(null,loc);
}
});
});
iiiiioiooooo.core.structure.forward_to_zipper = (function forward_to_zipper(f){return (function (x){if(cljs.core.truth_((function (){var and__3522__auto__ = x;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,x)),new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862));
} else
{return and__3522__auto__;
}
})()))
{return f.call(null,clojure.zip.node.call(null,x));
} else
{return f.call(null,x);
}
});
});
iiiiioiooooo.core.structure.maybe_select = (function maybe_select(x,y){if(cljs.core._EQ_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(x))),cljs.core.meta.call(null,clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(y)))))
{return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"select","select",1147833503));
} else
{return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"modify","modify",-1261040869),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(x));
}
});
iiiiioiooooo.core.structure.selected = (function selected(s,f){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.forward_zipper.call(null,f))),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"select","select",1147833503));
});
iiiiioiooooo.core.structure.modified = (function() {
var modified = null;
var modified__2 = (function (s,f){return modified.call(null,s,f,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(s));
});
var modified__3 = (function (s,f,m){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.forward_zipper.call(null,f))),new cljs.core.Keyword(null,"modified","modified",-2134587826),m,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"modify","modify",-1261040869),new cljs.core.Keyword(null,"x","x",2099068185),((function (){var or__3534__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s);if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return (0);
}
})() + (1)));
});
modified = function(s,f,m){
switch(arguments.length){
case 2:
return modified__2.call(this,s,f);
case 3:
return modified__3.call(this,s,f,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modified.cljs$core$IFn$_invoke$arity$2 = modified__2;
modified.cljs$core$IFn$_invoke$arity$3 = modified__3;
return modified;
})()
;
iiiiioiooooo.core.structure.left = (function left(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.left);
});
iiiiioiooooo.core.structure.right = (function right(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.right);
});
iiiiioiooooo.core.structure.out = (function out(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.up);
});
iiiiioiooooo.core.structure.in$ = (function in$(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.stop_at_closed.call(null,clojure.zip.down));
});
iiiiioiooooo.core.structure.depth_first_next = (function depth_first_next(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.stop_at_closed.call(null,clojure.zip.next));
});
iiiiioiooooo.core.structure.depth_first_previous = (function depth_first_previous(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.prev);
});
iiiiioiooooo.core.structure.expand = (function expand(s,x){return iiiiioiooooo.core.structure.maybe_select.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.maybe_open)),x);
});
iiiiioiooooo.core.structure.delete$ = (function delete$(s,x){return iiiiioiooooo.core.structure.modified.call(null,x,clojure.zip.remove);
});
iiiiioiooooo.core.structure.insert_left = (function insert_left(s,x){return iiiiioiooooo.core.structure.modified.call(null,x,(function (c){return clojure.zip.insert_left.call(null,c,"+");
}));
});
iiiiioiooooo.core.structure.insert_right = (function insert_right(s,x){return iiiiioiooooo.core.structure.modified.call(null,x,(function (c){return clojure.zip.insert_right.call(null,c,"+");
}));
});
iiiiioiooooo.core.structure.rightmost = (function rightmost(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.rightmost);
});
iiiiioiooooo.core.structure.leftmost = (function leftmost(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.leftmost);
});
iiiiioiooooo.core.structure.add_keybinding = (function add_keybinding(x,path,f){return cljs.core.assoc_in.call(null,x,cljs.core.cons.call(null,new cljs.core.Keyword(null,"keymap","keymap",-499605268),path),f);
});
iiiiioiooooo.core.structure.root = (function root(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.top);
});
iiiiioiooooo.core.structure.replace_parent = (function replace_parent(s,x){return iiiiioiooooo.core.structure.modified.call(null,x,(function (l){return clojure.zip.replace.call(null,clojure.zip.up.call(null,l),clojure.zip.node.call(null,l));
}),clojure.zip.up.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(x)));
});
iiiiioiooooo.core.structure.split_into_children = (function split_into_children(s,x){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),(function (n){return clojure.zip.replace.call(null,n,clojure.zip.make_node.call(null,n,clojure.zip.node.call(null,n),clojure.zip.children.call(null,clojure.zip.vector_zip.call(null,cljs.core.vec.call(null,cljs.core.name.call(null,clojure.zip.node.call(null,n)))))));
})),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"modify","modify",-1261040869));
});
iiiiioiooooo.core.structure.fuse_into_parent = (function fuse_into_parent(s,x){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),(function (n){return clojure.zip.replace.call(null,n,cljs.core.symbol.call(null,cljs.core.apply.call(null,cljs.core.str,clojure.zip.children.call(null,n))));
})),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"modify","modify",-1261040869));
});
iiiiioiooooo.core.structure.home = (function home(s,x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),iiiiioiooooo.core.structure.top);
});
iiiiioiooooo.core.structure.hfn = (function hfn(s,x){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"focus","focus",234677911),s);
});
iiiiioiooooo.core.structure.next_at = (function next_at(i,c){return (function (loc){var or__3534__auto__ = loc;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.first.call(null,cljs.core.filter.call(null,((function (or__3534__auto__){
return (function (l){return cljs.core._EQ_.call(null,c,cljs.core.nth.call(null,clojure.zip.node.call(null,l),i));
});})(or__3534__auto__))
,cljs.core.iterate.call(null,clojure.zip.right,loc)));
}
});
});
iiiiioiooooo.core.structure.find_first = (function() {
var find_first = null;
var find_first__1 = (function (thing){return (function (s,x){return iiiiioiooooo.core.structure.selected.call(null,x,cljs.core.partial.call(null,find_first,thing));
});
});
var find_first__2 = (function (x,loc){return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x),clojure.zip.node),iiiiioiooooo.core.structure.nodes.call(null,loc)));
});
find_first = function(x,loc){
switch(arguments.length){
case 1:
return find_first__1.call(this,x);
case 2:
return find_first__2.call(this,x,loc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_first.cljs$core$IFn$_invoke$arity$1 = find_first__1;
find_first.cljs$core$IFn$_invoke$arity$2 = find_first__2;
return find_first;
})()
;
iiiiioiooooo.core.structure.next_starting_with = (function next_starting_with(c){return (function (s,x){return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.next_at.call(null,(cljs.core.count.call(null,new cljs.core.Keyword(null,"keypath","keypath",1965534711).cljs$core$IFn$_invoke$arity$1(x)) - (1)),c));
});
});
iiiiioiooooo.core.structure.keyup = (function() {
var keyup = null;
var keyup__2 = (function (s,x){return keyup.call(null,s,x,cljs.core.get_in.call(null,x,cljs.core.conj.call(null,new cljs.core.Keyword(null,"keypath","keypath",1965534711).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),iiiiioiooooo.core.structure.nop));
});
var keyup__3 = (function (s,x,f){return iiiiioiooooo.core.structure.push_history.call(null,(function (){var or__3534__auto__ = f.call(null,s,cljs.core.assoc.call(null,iiiiioiooooo.core.structure.kop.call(null,x),new cljs.core.Keyword(null,"op","op",-1882987955),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f))));if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return s;
}
})(),s);
});
keyup = function(s,x,f){
switch(arguments.length){
case 2:
return keyup__2.call(this,s,x);
case 3:
return keyup__3.call(this,s,x,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyup.cljs$core$IFn$_invoke$arity$2 = keyup__2;
keyup.cljs$core$IFn$_invoke$arity$3 = keyup__3;
return keyup;
})()
;
iiiiioiooooo.core.structure.latest_state = (function latest_state(history){return clojure.zip.node.call(null,clojure.zip.rightmost.call(null,clojure.zip.down.call(null,iiiiioiooooo.core.structure.top.call(null,history))));
});
iiiiioiooooo.core.structure.focus_on_latest = (function focus_on_latest(h,x){return iiiiioiooooo.core.structure.selected.call(null,x,(function (loc){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,iiiiioiooooo.core.structure.top.call(null,h)));
}));
});
iiiiioiooooo.core.structure.default_keymap = (function default_keymap(){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shift","shift",997140064),iiiiioiooooo.core.structure.nop], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"down","down",1565245570),iiiiioiooooo.core.structure.in$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space","space",348133475),iiiiioiooooo.core.structure.expand], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),iiiiioiooooo.core.structure.left], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),iiiiioiooooo.core.structure.right], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up","up",-269712113),iiiiioiooooo.core.structure.replace_parent], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"down","down",1565245570),iiiiioiooooo.core.structure.split_into_children], null),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),(function (s,x){return iiiiioiooooo.core.structure.modified.call(null,x,cljs.core.identity);
})], null),new cljs.core.Keyword(null,"alt","alt",-3214426),iiiiioiooooo.core.structure.nop], null),iiiiioiooooo.core.structure.nop,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),iiiiioiooooo.core.structure.home], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),iiiiioiooooo.core.structure.insert_left], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),iiiiioiooooo.core.structure.insert_right], null),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),iiiiioiooooo.core.structure.rightmost], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),iiiiioiooooo.core.structure.leftmost], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up","up",-269712113),iiiiioiooooo.core.structure.root], null),new cljs.core.Keyword(null,"alt","alt",-3214426),iiiiioiooooo.core.structure.nop], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up","up",-269712113),iiiiioiooooo.core.structure.fuse_into_parent], null),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),iiiiioiooooo.core.structure.nop], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up","up",-269712113),iiiiioiooooo.core.structure.out], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"h","h",1109658740),iiiiioiooooo.core.structure.hfn], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),iiiiioiooooo.core.structure.depth_first_next,new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space","space",348133475),iiiiioiooooo.core.structure.depth_first_next], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backspace","backspace",-696007848),iiiiioiooooo.core.structure.delete$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),iiiiioiooooo.core.structure.hfn], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),(function (s,x){return iiiiioiooooo.core.structure.modified.call(null,x,cljs.core.comp.call(null,clojure.zip.prev,clojure.zip.next));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),iiiiioiooooo.core.structure.depth_first_previous], null)]);
});
iiiiioiooooo.core.structure.default_state = (function() {
var default_state = null;
var default_state__0 = (function (){return default_state.call(null,iiiiioiooooo.core.structure.seq_map_zip.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"qwe","qwe",-1757586645),new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"test2","test2",1460100180),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"test3","test3",-562138791),new cljs.core.Keyword(null,"help","help",-439233446),new cljs.core.Keyword(null,"test1","test1",-1189462085),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clojure.core","clojure.core",-1829864152),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"cons","cons",-885083073),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"juxt","juxt",-969445923),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"conj","conj",1527141827)], null)], null)], null),new cljs.core.Keyword(null,"inc","inc",-1316026094),cljs.core.inc,new cljs.core.Keyword(null,"dec","dec",1888433436),cljs.core.dec], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function keydown(s,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypath","keypath",1965534711)], null),(function (kp){return cljs.core.conj.call(null,kp,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x));
})),s);
})], null),(0),iiiiioiooooo.core.structure.default_keymap.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"esc","esc",-1671924121),iiiiioiooooo.core.structure.safe,new cljs.core.Keyword(null,"default","default",-1987822328),iiiiioiooooo.core.structure.keyup], null),cljs.core.with_meta.call(null,iiiiioiooooo.core.test.test_exp.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null),"poi","hi",new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.with_meta.call(null,iiiiioiooooo.core.test.test_exp3.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["iiiiioiooooo Clojure structure editor (barely functioning sketch of)","This is an experiment in making a functional code editor.","https://www.youtube.com/watch?v=2Op3QLzMgSY&feature=player_detailpage#t=2077s","Lecture 1A | MIT 6.001 Structure and Interpretation, 1986 - 35m25s","\n          The idea here is to manipulate code\n          at the expression level, not at the text level.\n          This is very primitive right now,\n          it doesn't do much yet, just testing ideas, everything will change, or it will be abandoned.\n          Works best in Chrome, keyboard-only! doesn't work on mobile browsers.\n          Plan: SVG view,\n          make as front-end for Session REPL. What can you do now ? Navigate the code and do basic editing.\n          "], null),cljs.core.with_meta.call(null,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quote",new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null)),cljs.core.with_meta.call(null,cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null))]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null))], null)));
});
var default_state__1 = (function (h){return default_state.call(null,iiiiioiooooo.core.structure.latest_state.call(null,h),h);
});
var default_state__2 = (function (s,h){return default_state.call(null,iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"context","context",-830191113),clojure.zip.up.call(null,iiiiioiooooo.core.structure.find_first.call(null,new cljs.core.Keyword(null,"test1","test1",-1189462085),h)),new cljs.core.Keyword(null,"focus","focus",234677911),clojure.zip.up.call(null,clojure.zip.rightmost.call(null,clojure.zip.down.call(null,h))),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.Keyword(null,"qwe","qwe",-1757586645),(1),new cljs.core.Keyword(null,"poi","poi",923822222),"qwe"),h),iiiiioiooooo.core.structure.latest_state.call(null,h),null);
});
var default_state__3 = (function (h,latest,w){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc.call(null,iiiiioiooooo.core.structure.latest_state.call(null,h),new cljs.core.Keyword(null,"focus","focus",234677911),clojure.zip.next.call(null,clojure.zip.next.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h)))),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h)))))),clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h)))))),clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h))))))))),clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h))))))))))], null),new cljs.core.Keyword(null,"qwe","qwe",-1757586645),(2),new cljs.core.Keyword(null,"wer","wer",-733233266),"arse"),h);
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
default_state.cljs$core$IFn$_invoke$arity$0 = default_state__0;
default_state.cljs$core$IFn$_invoke$arity$1 = default_state__1;
default_state.cljs$core$IFn$_invoke$arity$2 = default_state__2;
default_state.cljs$core$IFn$_invoke$arity$3 = default_state__3;
return default_state;
})()
;
iiiiioiooooo.core.structure.fn_for_event = (function fn_for_event(s,e){if(cljs.core._EQ_.call(null,e,cljs.core.select_keys.call(null,s,cljs.core.keys.call(null,e))))
{return cljs.core.identity;
} else
{return cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(e)], null),cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.identity));
}
});
iiiiioiooooo.core.structure.update = (function() {
var update = null;
var update__2 = (function (s,e){return update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),e);
});
var update__3 = (function (s,x,e){return update.call(null,s,cljs.core.merge.call(null,x,e),e,iiiiioiooooo.core.structure.fn_for_event.call(null,x,e));
});
var update__4 = (function (s,x,e,f){return f.call(null,s,x);
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
update.cljs$core$IFn$_invoke$arity$2 = update__2;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
return update;
})()
;
iiiiioiooooo.core.structure.maybe = (function maybe(f,x){var or__3534__auto__ = f.call(null,x,iiiiioiooooo.core.structure.latest_state.call(null,x));if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return x;
}
});
iiiiioiooooo.core.structure.update_with = (function update_with(s,f){return iiiiioiooooo.core.structure.push_history.call(null,iiiiioiooooo.core.structure.maybe.call(null,f,s),s);
});
iiiiioiooooo.core.structure.update_BANG_ = (function update_BANG_(state,e){return cljs.core.swap_BANG_.call(null,state,(function (s){return iiiiioiooooo.core.structure.update.call(null,s,e);
}));
});

//# sourceMappingURL=structure.js.map