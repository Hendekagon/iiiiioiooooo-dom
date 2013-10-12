goog.provide('iiiiioiooooo.core.structure');
goog.require('cljs.core');
goog.require('iiiiioiooooo.core.test');
goog.require('clojure.zip');
iiiiioiooooo.core.structure.maybe = (function maybe(f,x){if(cljs.core.truth_(x))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else
{return x;
}
});
iiiiioiooooo.core.structure.peek_first = (function peek_first(p){return [cljs.core.str(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.zip.down(p),iiiiioiooooo.core.structure.maybe,clojure.zip.node))].join('');
});
iiiiioiooooo.core.structure.make_id = (function make_id(h){return [cljs.core.str("id"),cljs.core.str(h)].join('');
});
iiiiioiooooo.core.structure.to_html = (function() {
var to_html = null;
var to_html__0 = (function (){return cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$32,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,"branch "], true)], true);
});
var to_html__1 = (function (n){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$32,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,[cljs.core.str("leaf "),cljs.core.str(((cljs.core.fn_QMARK_(n))?"fn ":null)),cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$34.call(null,cljs.core.meta(n)))?"open":"closed"))].join('')], true)], true),[cljs.core.str(n)].join(''));
});
var to_html__2 = (function (n,c){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$32,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,[cljs.core.str("branch open "),cljs.core.str(n)].join('')], true)], true),c);
});
var to_html__3 = (function (n,n__$1,c){return cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$32,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,[cljs.core.str("branch folded")].join('')], true)], true);
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
iiiiioiooooo.core.structure.selector = (function selector(p){return [cljs.core.str("#root > li:first-child "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$35," > ul:first-child > li:first-child",cljs.core.constant$keyword$36," + li"], true),p)))].join('');
});
iiiiioiooooo.core.structure.replacement_selector = (function() {
var replacement_selector = null;
var replacement_selector__1 = (function (p){return replacement_selector.cljs$core$IFn$_invoke$arity$2("#root > li:first-child ",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$35," > ul:first-child > li:first-child",cljs.core.constant$keyword$36," + li"], true),p)));
});
var replacement_selector__2 = (function (s,ps){return [cljs.core.str(s),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ps,""))?"> ul:first-child":ps))].join('');
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
iiiiioiooooo.core.structure.type_str = (function type_str(b){if(cljs.core.list_QMARK_(b))
{return cljs.core.constant$keyword$37;
} else
{if((b instanceof cljs.core.Symbol))
{return [cljs.core.str(b)].join('');
} else
{if(cljs.core.vector_QMARK_(b))
{return cljs.core.constant$keyword$38;
} else
{if(cljs.core.map_QMARK_(b))
{return cljs.core.constant$keyword$39;
} else
{if(cljs.core.constant$keyword$40)
{return cljs.core.constant$keyword$41;
} else
{return null;
}
}
}
}
}
});
iiiiioiooooo.core.structure.translate = (function translate(maxx,maxy,f,p){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,c){if((maxy > 0))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_((function (){var and__3941__auto__ = c;if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.branch_QMARK_(c);
} else
{return and__3941__auto__;
}
})())?(cljs.core.truth_((function (){var and__3941__auto__ = (function (){var or__3943__auto__ = (cljs.core.meta(clojure.zip.node(c)) == null);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.constant$keyword$34.call(null,cljs.core.meta(clojure.zip.node(c)));
}
})();if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not(cljs.core.constant$keyword$20.call(null,cljs.core.meta(clojure.zip.node(c))));
} else
{return and__3941__auto__;
}
})())?(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(iiiiioiooooo.core.structure.type_str(clojure.zip.node(clojure.zip.down(c))),translate(maxx,(maxy - 1),f,clojure.zip.down(c))) : f.call(null,iiiiioiooooo.core.structure.type_str(clojure.zip.node(clojure.zip.down(c))),translate(maxx,(maxy - 1),f,clojure.zip.down(c)))):(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(iiiiioiooooo.core.structure.type_str(clojure.zip.node(clojure.zip.down(c))),null,null) : f.call(null,iiiiioiooooo.core.structure.type_str(clojure.zip.node(clojure.zip.down(c))),null,null))):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(clojure.zip.node(c)) : f.call(null,clojure.zip.node(c)))));
} else
{return r;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.take(maxx,cljs.core.take_while(cljs.core.identity,cljs.core.iterate(clojure.zip.right,p))));
});
iiiiioiooooo.core.structure.seq_map_zip = (function seq_map_zip(x){return clojure.zip.zipper((function (n){var or__3943__auto__ = cljs.core.seq_QMARK_(n);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core.map_QMARK_(n);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljs.core.vector_QMARK_(n);
}
}
}),(function (b){if(cljs.core.map_QMARK_(b))
{return cljs.core.seq(b);
} else
{return b;
}
}),(function (node,children){return cljs.core.with_meta(children,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3943__auto__ = cljs.core.meta(node);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,true], true)], 0)));
}),x);
});
iiiiioiooooo.core.structure.path = (function() {
var path = null;
var path__2 = (function (c,t){return path.cljs$core$IFn$_invoke$arity$5(t,clojure.zip.up(t),clojure.zip.left(t),cljs.core.PersistentVector.EMPTY,c);
});
var path__3 = (function (t,p,c){return path.cljs$core$IFn$_invoke$arity$5(t,clojure.zip.up(t),clojure.zip.left(t),p,c);
});
var path__5 = (function (t,u,l,p,c){if((function (){var or__3943__auto__ = (u == null);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.zip.node(t),clojure.zip.node(c));
}
})())
{return p;
} else
{return path.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(l)?l:u),cljs.core.cons((cljs.core.truth_(l)?cljs.core.constant$keyword$36:cljs.core.constant$keyword$35),p),c);
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
path.cljs$core$IFn$_invoke$arity$2 = path__2;
path.cljs$core$IFn$_invoke$arity$3 = path__3;
path.cljs$core$IFn$_invoke$arity$5 = path__5;
return path;
})()
;
iiiiioiooooo.core.structure.top = (function() {
var top = null;
var top__1 = (function (z){return top.cljs$core$IFn$_invoke$arity$2(z,clojure.zip.up(z));
});
var top__2 = (function (z,up){if(cljs.core.truth_(up))
{return top.cljs$core$IFn$_invoke$arity$1(up);
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
iiiiioiooooo.core.structure.nodes = (function nodes(n){return cljs.core.take_while(cljs.core.complement(clojure.zip.end_QMARK_),cljs.core.iterate(clojure.zip.next,n));
});
iiiiioiooooo.core.structure.climb = (function climb(p){if(cljs.core.truth_(clojure.zip.branch_QMARK_(p)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(climb,cljs.core.take_while(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.iterate(clojure.zip.right,clojure.zip.down(p))));
} else
{return clojure.zip.node(p);
}
});
iiiiioiooooo.core.structure.push_history = (function push_history(x,h){return iiiiioiooooo.core.structure.top.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?clojure.zip.append_child(h,cljs.core.with_meta(x,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(x),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,false,cljs.core.constant$keyword$42,(cljs.core.count(h) + 1)], true)], 0)))):h));
});
iiiiioiooooo.core.structure.kop = (function kop(x){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$43], true),(function (p){return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p,0,(cljs.core.count(p) - 1));
}));
});
iiiiioiooooo.core.structure.safe = (function safe(s,x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.constant$keyword$43,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$44], true));
});
iiiiioiooooo.core.structure.nop = (function nop(s,x){return x;
});
iiiiioiooooo.core.structure.descendents = (function descendents(loc){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (r){if(cljs.core.truth_(clojure.zip.branch_QMARK_(r)))
{return descendents(r);
} else
{return cljs.core.PersistentVector.fromArray([r], true);
}
}),cljs.core.take_while(cljs.core.identity,cljs.core.iterate(clojure.zip.right,(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))?clojure.zip.down(loc):loc))));
});
iiiiioiooooo.core.structure.maybe_open = (function() {
var maybe_open = null;
var maybe_open__1 = (function (loc){return maybe_open.cljs$core$IFn$_invoke$arity$2(loc,cljs.core.meta(clojure.zip.node(loc)));
});
var maybe_open__2 = (function (loc,meta){if(cljs.core.truth_(meta))
{return clojure.zip.replace(loc,cljs.core.with_meta(clojure.zip.node(loc),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$34], true),cljs.core.not)));
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
iiiiioiooooo.core.structure.maybe_open_fn = (function maybe_open_fn(loc){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.zip.node(clojure.zip.next(loc)),new cljs.core.Symbol(null,"defn","defn",-1637452094,null)))
{return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(iiiiioiooooo.core.structure.maybe_open,cljs.core.take(3,cljs.core.reverse(iiiiioiooooo.core.structure.descendents(loc)))));
} else
{return loc;
}
});
iiiiioiooooo.core.structure.carefull = (function carefull(f){return (function (x){var temp__4090__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(cljs.core.truth_(temp__4090__auto__))
{var nx = temp__4090__auto__;return nx;
} else
{return x;
}
});
});
iiiiioiooooo.core.structure.stop_at_closed = (function stop_at_closed(f){return (function (x){if(cljs.core.truth_((function (){var or__3943__auto__ = (cljs.core.meta(clojure.zip.node(x)) == null);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.constant$keyword$34.call(null,cljs.core.meta(clojure.zip.node(x)));
}
})()))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else
{return x;
}
});
});
iiiiioiooooo.core.structure.forward_zipper = (function forward_zipper(f){return (function (loc){if(cljs.core.truth_((function (){var and__3941__auto__ = loc;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.contains_QMARK_(cljs.core.meta(clojure.zip.node(loc)),cljs.core.constant$keyword$22);
} else
{return and__3941__auto__;
}
})()))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc)) : f.call(null,clojure.zip.node(loc)));
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
}
});
});
iiiiioiooooo.core.structure.forward_to_zipper = (function forward_to_zipper(f){return (function (x){if(cljs.core.truth_((function (){var and__3941__auto__ = x;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.contains_QMARK_(cljs.core.meta(clojure.zip.node(x)),cljs.core.constant$keyword$22);
} else
{return and__3941__auto__;
}
})()))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(clojure.zip.node(x)) : f.call(null,clojure.zip.node(x)));
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}
});
});
iiiiioiooooo.core.structure.maybe_select = (function maybe_select(x,y){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(clojure.zip.node(cljs.core.constant$keyword$45.call(null,x))),cljs.core.meta(clojure.zip.node(cljs.core.constant$keyword$45.call(null,y)))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.constant$keyword$46,cljs.core.constant$keyword$47);
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.constant$keyword$46,cljs.core.constant$keyword$48,cljs.core.array_seq([cljs.core.constant$keyword$49,cljs.core.constant$keyword$45.call(null,x)], 0));
}
});
iiiiioiooooo.core.structure.selected = (function selected(s,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$45], true),iiiiioiooooo.core.structure.carefull(iiiiioiooooo.core.structure.forward_zipper(f))),cljs.core.constant$keyword$46,cljs.core.constant$keyword$47);
});
iiiiioiooooo.core.structure.modified = (function() {
var modified = null;
var modified__1 = (function (x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.constant$keyword$49,cljs.core.constant$keyword$45.call(null,x));
});
var modified__2 = (function (s,f){return modified.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$45], true),iiiiioiooooo.core.structure.carefull(iiiiioiooooo.core.structure.forward_zipper(f))),cljs.core.constant$keyword$46,cljs.core.constant$keyword$48));
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
modified.cljs$core$IFn$_invoke$arity$1 = modified__1;
modified.cljs$core$IFn$_invoke$arity$2 = modified__2;
return modified;
})()
;
iiiiioiooooo.core.structure.resolve = (function resolve(x){return x;
});
iiiiioiooooo.core.structure.apply_selected = (function() {
var apply_selected = null;
var apply_selected__2 = (function (h,x){return apply_selected.cljs$core$IFn$_invoke$arity$4(h,x,clojure.zip.node(cljs.core.first(cljs.core.constant$keyword$50.call(null,x))),cljs.core.PersistentVector.fromArray([cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.zip.node(cljs.core.first(cljs.core.rest(cljs.core.constant$keyword$50.call(null,x)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.zip.node,cljs.core.rest(cljs.core.rest(cljs.core.constant$keyword$50.call(null,x))))], 0)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(iiiiioiooooo.core.structure.resolve(clojure.zip.node(cljs.core.first(cljs.core.rest(cljs.core.constant$keyword$50.call(null,x))))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.zip.node,cljs.core.rest(cljs.core.rest(cljs.core.constant$keyword$50.call(null,x))))),iiiiioiooooo.core.structure.resolve(clojure.zip.node(cljs.core.first(cljs.core.rest(cljs.core.constant$keyword$50.call(null,x)))))], true));
});
var apply_selected__4 = (function (h,x,rl,r){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.constant$keyword$51,r,cljs.core.array_seq([cljs.core.constant$keyword$49,cljs.core.first(cljs.core.constant$keyword$50.call(null,x))], 0));
});
apply_selected = function(h,x,rl,r){
switch(arguments.length){
case 2:
return apply_selected__2.call(this,h,x);
case 4:
return apply_selected__4.call(this,h,x,rl,r);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_selected.cljs$core$IFn$_invoke$arity$2 = apply_selected__2;
apply_selected.cljs$core$IFn$_invoke$arity$4 = apply_selected__4;
return apply_selected;
})()
;
iiiiioiooooo.core.structure.left = (function left(s,x){return iiiiioiooooo.core.structure.selected(x,clojure.zip.left);
});
iiiiioiooooo.core.structure.right = (function right(s,x){return iiiiioiooooo.core.structure.selected(x,clojure.zip.right);
});
iiiiioiooooo.core.structure.out = (function out(s,x){return iiiiioiooooo.core.structure.selected(x,clojure.zip.up);
});
iiiiioiooooo.core.structure.in$ = (function in$(s,x){return iiiiioiooooo.core.structure.selected(x,iiiiioiooooo.core.structure.stop_at_closed(clojure.zip.down));
});
iiiiioiooooo.core.structure.depth_first_next = (function depth_first_next(s,x){return iiiiioiooooo.core.structure.selected(x,iiiiioiooooo.core.structure.stop_at_closed(clojure.zip.next));
});
iiiiioiooooo.core.structure.depth_first_previous = (function depth_first_previous(s,x){return iiiiioiooooo.core.structure.selected(x,clojure.zip.prev);
});
iiiiioiooooo.core.structure.expand = (function expand(s,x){return iiiiioiooooo.core.structure.maybe_select(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$45], true),iiiiioiooooo.core.structure.carefull(iiiiioiooooo.core.structure.maybe_open)),x);
});
iiiiioiooooo.core.structure.delete$ = (function delete$(s,x){return iiiiioiooooo.core.structure.modified.cljs$core$IFn$_invoke$arity$2(x,clojure.zip.remove);
});
iiiiioiooooo.core.structure.insert_left = (function insert_left(s,x){return iiiiioiooooo.core.structure.modified.cljs$core$IFn$_invoke$arity$2(x,(function (c){return clojure.zip.insert_left(c,"node");
}));
});
iiiiioiooooo.core.structure.insert_right = (function insert_right(s,x){return iiiiioiooooo.core.structure.modified.cljs$core$IFn$_invoke$arity$2(x,(function (c){return clojure.zip.insert_right(c,"node");
}));
});
iiiiioiooooo.core.structure.rightmost = (function rightmost(s,x){return iiiiioiooooo.core.structure.selected(x,clojure.zip.rightmost);
});
iiiiioiooooo.core.structure.leftmost = (function leftmost(s,x){return iiiiioiooooo.core.structure.selected(x,clojure.zip.leftmost);
});
iiiiioiooooo.core.structure.add_keybinding = (function add_keybinding(x,path,f){return cljs.core.assoc_in(x,cljs.core.cons(cljs.core.constant$keyword$44,path),f);
});
iiiiioiooooo.core.structure.root = (function root(s,x){return iiiiioiooooo.core.structure.selected(x,iiiiioiooooo.core.structure.top);
});
iiiiioiooooo.core.structure.replace_parent = (function replace_parent(s,x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$45], true),(function (n){return clojure.zip.replace(clojure.zip.up(n),clojure.zip.node(n));
})),cljs.core.constant$keyword$46,cljs.core.constant$keyword$48,cljs.core.array_seq([cljs.core.constant$keyword$49,clojure.zip.up(cljs.core.constant$keyword$45.call(null,x))], 0));
});
iiiiioiooooo.core.structure.split_into_children = (function split_into_children(s,x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$45], true),(function (n){return clojure.zip.replace(n,clojure.zip.make_node(n,clojure.zip.node(n),clojure.zip.children(clojure.zip.vector_zip(cljs.core.vec(cljs.core.name(clojure.zip.node(n)))))));
})),cljs.core.constant$keyword$46,cljs.core.constant$keyword$48);
});
iiiiioiooooo.core.structure.fuse_into_parent = (function fuse_into_parent(s,x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$45], true),(function (n){return clojure.zip.replace(n,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,clojure.zip.children(n))));
})),cljs.core.constant$keyword$46,cljs.core.constant$keyword$48);
});
iiiiioiooooo.core.structure.home = (function home(s,x){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$45], true),iiiiioiooooo.core.structure.top);
});
iiiiioiooooo.core.structure.hfn = (function hfn(s,x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.constant$keyword$45,s);
});
iiiiioiooooo.core.structure.next_at = (function next_at(i,c){return (function (loc){var or__3943__auto__ = loc;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.first(cljs.core.filter((function (l){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clojure.zip.node(l),i));
}),cljs.core.iterate(clojure.zip.right,loc)));
}
});
});
iiiiioiooooo.core.structure.find_first = (function() {
var find_first = null;
var find_first__1 = (function (thing){return (function (s,x){return iiiiioiooooo.core.structure.selected(x,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(find_first,thing));
});
});
var find_first__2 = (function (x,loc){return cljs.core.first(cljs.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x),clojure.zip.node),iiiiioiooooo.core.structure.nodes(loc)));
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
iiiiioiooooo.core.structure.next_starting_with = (function next_starting_with(c){return (function (s,x){return iiiiioiooooo.core.structure.selected(x,iiiiioiooooo.core.structure.next_at((cljs.core.count(cljs.core.constant$keyword$43.call(null,x)) - 1),c));
});
});
iiiiioiooooo.core.structure.keyup = (function keyup(s,x){return iiiiioiooooo.core.structure.push_history((function (){var or__3943__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$43.call(null,x),cljs.core.constant$keyword$52.call(null,x)),iiiiioiooooo.core.structure.nop).call(null,s,iiiiioiooooo.core.structure.kop(x));if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return s;
}
})(),s);
});
iiiiioiooooo.core.structure.latest_state = (function latest_state(history){return clojure.zip.node(clojure.zip.rightmost(clojure.zip.down(iiiiioiooooo.core.structure.top.cljs$core$IFn$_invoke$arity$1(history))));
});
iiiiioiooooo.core.structure.focus_on_latest = (function focus_on_latest(h,x){return iiiiioiooooo.core.structure.selected(x,(function (loc){return clojure.zip.rightmost(clojure.zip.down(iiiiioiooooo.core.structure.top.cljs$core$IFn$_invoke$arity$1(h)));
}));
});
iiiiioiooooo.core.structure.default_keymap = (function default_keymap(){return cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$53,cljs.core.constant$keyword$40,cljs.core.constant$keyword$54,cljs.core.constant$keyword$55,cljs.core.constant$keyword$56,cljs.core.constant$keyword$57,cljs.core.constant$keyword$58,cljs.core.constant$keyword$59,cljs.core.constant$keyword$60,cljs.core.constant$keyword$36,cljs.core.constant$keyword$61,cljs.core.constant$keyword$35,cljs.core.constant$keyword$62],[cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$53,iiiiioiooooo.core.structure.delete$], true),iiiiioiooooo.core.structure.nop,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$61,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$61,iiiiioiooooo.core.structure.left], true),cljs.core.constant$keyword$36,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$36,iiiiioiooooo.core.structure.right], true),cljs.core.constant$keyword$62,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$62,iiiiioiooooo.core.structure.fuse_into_parent], true),cljs.core.constant$keyword$35,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$35,iiiiioiooooo.core.structure.split_into_children], true),cljs.core.constant$keyword$54,iiiiioiooooo.core.structure.nop], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$55,iiiiioiooooo.core.structure.hfn], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$56,iiiiioiooooo.core.structure.home], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$61,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$61,iiiiioiooooo.core.structure.insert_left], true),cljs.core.constant$keyword$36,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$36,iiiiioiooooo.core.structure.insert_right], true),cljs.core.constant$keyword$54,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$36,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$36,iiiiioiooooo.core.structure.rightmost], true),cljs.core.constant$keyword$61,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$61,iiiiioiooooo.core.structure.leftmost], true),cljs.core.constant$keyword$62,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$62,iiiiioiooooo.core.structure.root], true),cljs.core.constant$keyword$54,iiiiioiooooo.core.structure.nop], true),cljs.core.constant$keyword$62,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$62,iiiiioiooooo.core.structure.replace_parent], true),cljs.core.constant$keyword$57,iiiiioiooooo.core.structure.nop], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$58,iiiiioiooooo.core.structure.hfn], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$59,iiiiioiooooo.core.structure.nop], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$60,iiiiioiooooo.core.structure.expand], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$36,iiiiioiooooo.core.structure.depth_first_next,cljs.core.constant$keyword$60,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$60,iiiiioiooooo.core.structure.depth_first_next], true)], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$61,iiiiioiooooo.core.structure.depth_first_previous], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$35,iiiiioiooooo.core.structure.in$], true),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$62,iiiiioiooooo.core.structure.out], true)]);
});
iiiiioiooooo.core.structure.default_state = (function() {
var default_state = null;
var default_state__0 = (function (){return default_state.cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.seq_map_zip(cljs.core.PersistentVector.fromArray([cljs.core.with_meta(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$63,cljs.core.constant$keyword$64,cljs.core.constant$keyword$65,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69,cljs.core.constant$keyword$46,cljs.core.constant$keyword$70,cljs.core.constant$keyword$45,cljs.core.constant$keyword$71,cljs.core.constant$keyword$44,cljs.core.constant$keyword$72,cljs.core.constant$keyword$43,cljs.core.constant$keyword$50],[0,cljs.core.PersistentVector.fromArray(["iiiiioiooooo Clojure structure editor (barely functioning sketch of)","This is an experiment in making a functional code editor.","https://www.youtube.com/watch?v=2Op3QLzMgSY&feature=player_detailpage#t=2077s","Lecture 1A | MIT 6.001 Structure and Interpretation, 1986 - 35m25s","\n          The idea here is to manipulate code\n          at the expression level, not at the text level.\n          This is very primitive right now,\n          it doesn't do much yet, just testing ideas, everything will change, or it will be abandoned.\n          Works best in Chrome, keyboard-only! doesn't work on mobile browsers.\n          Plan: SVG view,\n          make as front-end for Session REPL. What can you do now ? Navigate the code and do basic editing.\n          "], true),"poi",cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$73,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$74,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$77,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$78,cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$79,cljs.core.constant$keyword$81,cljs.core.constant$keyword$74,cljs.core.constant$keyword$82,cljs.core.constant$keyword$80,cljs.core.constant$keyword$83], true)], true)], true),cljs.core.constant$keyword$75,cljs.core.inc,cljs.core.constant$keyword$76,cljs.core.dec], true)], true),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),1,3),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,true], true)),cljs.core.with_meta(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"x","x",-1640531407,null)], true),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"x","x",-1640531407,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",641340897,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"x","x",-1640531407,null))),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"x","x",-1640531407,null)], true)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.PersistentVector.fromArray(["quote",new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"x","x",-1640531407,null)], true),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"x","x",-1640531407,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",641340897,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"x","x",-1640531407,null))),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"x","x",-1640531407,null)], true)))], true))),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,true], true)),cljs.core.with_meta(iiiiioiooooo.core.test.test_exp3(),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,true], true)),cljs.core.constant$keyword$47,cljs.core.with_meta(iiiiioiooooo.core.test.test_exp(),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,true], true)),"hi",cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$40,(function keydown(s,x){return iiiiioiooooo.core.structure.push_history(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$43], true),(function (kp){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(kp,cljs.core.constant$keyword$52.call(null,x));
})),s);
})], true),iiiiioiooooo.core.structure.default_keymap(),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$84,iiiiioiooooo.core.structure.safe,cljs.core.constant$keyword$40,iiiiioiooooo.core.structure.keyup], true),cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$44], true),cljs.core.PersistentVector.fromArray([7], true)]),cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,true], true))], true)));
});
var default_state__1 = (function (h){return default_state.cljs$core$IFn$_invoke$arity$2(iiiiioiooooo.core.structure.latest_state(h),h);
});
var default_state__2 = (function (s,h){return default_state.cljs$core$IFn$_invoke$arity$3(iiiiioiooooo.core.structure.push_history(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.constant$keyword$65,clojure.zip.up(iiiiioiooooo.core.structure.find_first.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$68,h)),cljs.core.array_seq([cljs.core.constant$keyword$45,clojure.zip.up(clojure.zip.rightmost(clojure.zip.down(h))),cljs.core.constant$keyword$50,cljs.core.PersistentVector.fromArray([3,4], true),cljs.core.constant$keyword$63,1,cljs.core.constant$keyword$85,"qwe"], 0)),h),iiiiioiooooo.core.structure.latest_state(h),null);
});
var default_state__3 = (function (h,latest,w){return iiiiioiooooo.core.structure.push_history(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(iiiiioiooooo.core.structure.latest_state(h),cljs.core.constant$keyword$45,clojure.zip.next(clojure.zip.next(cljs.core.constant$keyword$65.call(null,iiiiioiooooo.core.structure.latest_state(h)))),cljs.core.array_seq([cljs.core.constant$keyword$50,cljs.core.PersistentVector.fromArray([clojure.zip.next(clojure.zip.next(clojure.zip.next(clojure.zip.next(cljs.core.constant$keyword$65.call(null,iiiiioiooooo.core.structure.latest_state(h)))))),clojure.zip.next(clojure.zip.next(clojure.zip.next(clojure.zip.next(cljs.core.constant$keyword$65.call(null,iiiiioiooooo.core.structure.latest_state(h)))))),clojure.zip.right(clojure.zip.right(clojure.zip.down(clojure.zip.right(clojure.zip.down(clojure.zip.right(clojure.zip.down(cljs.core.constant$keyword$65.call(null,iiiiioiooooo.core.structure.latest_state(h))))))))),clojure.zip.right(clojure.zip.right(clojure.zip.right(clojure.zip.down(clojure.zip.right(clojure.zip.down(clojure.zip.right(clojure.zip.down(cljs.core.constant$keyword$65.call(null,iiiiioiooooo.core.structure.latest_state(h))))))))))], true),cljs.core.constant$keyword$63,2,cljs.core.constant$keyword$86,"arse"], 0)),h);
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
iiiiioiooooo.core.structure.fn_for_event = (function fn_for_event(s,e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.select_keys(s,cljs.core.keys(e))))
{return cljs.core.identity;
} else
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(s,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$87.call(null,e),cljs.core.constant$keyword$52.call(null,e)], true),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(s,cljs.core.PersistentVector.fromArray([cljs.core.constant$keyword$87.call(null,e),cljs.core.constant$keyword$40], true),cljs.core.identity));
}
});
iiiiioiooooo.core.structure.update = (function() {
var update = null;
var update__2 = (function (s,e){return update.cljs$core$IFn$_invoke$arity$3(s,iiiiioiooooo.core.structure.latest_state(s),e);
});
var update__3 = (function (s,x,e){return update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x,e], 0)),e,iiiiioiooooo.core.structure.fn_for_event(x,e));
});
var update__4 = (function (s,x,e,f){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(s,x) : f.call(null,s,x));
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
iiiiioiooooo.core.structure.maybe = (function maybe(f,x){var or__3943__auto__ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,iiiiioiooooo.core.structure.latest_state(x)) : f.call(null,x,iiiiioiooooo.core.structure.latest_state(x)));if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return x;
}
});
iiiiioiooooo.core.structure.update_with = (function update_with(s,f){return iiiiioiooooo.core.structure.push_history(iiiiioiooooo.core.structure.maybe(f,s),s);
});
iiiiioiooooo.core.structure.update_BANG_ = (function update_BANG_(state,e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){return iiiiioiooooo.core.structure.update.cljs$core$IFn$_invoke$arity$2(s,e);
}));
});
