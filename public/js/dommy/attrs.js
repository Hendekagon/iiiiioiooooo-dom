goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__3941__auto__ = (function (){var or__3943__auto__ = (idx === 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();
if(cljs.core.truth_(and__3941__auto__))
{var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len))
{var or__3943__auto__ = (stop === total_len);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt(stop));
}
} else
{return null;
}
} else
{return and__3941__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from = 0;
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__5394 = (i + class$.length);
start_from = G__5394;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;
return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;
var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;
return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));
if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___5401 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___5401))
{var class_list_5402 = temp__4090__auto___5401;
var G__5398_5403 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
while(true){
if(G__5398_5403)
{var class_5404 = cljs.core.first.call(null,G__5398_5403);
class_list_5402.add(class_5404);
{
var G__5405 = cljs.core.next.call(null,G__5398_5403);
G__5398_5403 = G__5405;
continue;
}
} else
{}
break;
}
} else
{var class_name_5406 = elem__$1.className;
var G__5399_5407 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
while(true){
if(G__5399_5407)
{var class_5408 = cljs.core.first.call(null,G__5399_5407);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5406,class_5408)))
{} else
{elem__$1.className = (((class_name_5406 === ""))?class_5408:[cljs.core.str(class_name_5406),cljs.core.str(" "),cljs.core.str(class_5408)].join(''));
}
{
var G__5409 = cljs.core.next.call(null,G__5399_5407);
G__5399_5407 = G__5409;
continue;
}
} else
{}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__5410__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5400_5411 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
while(true){
if(G__5400_5411)
{var c_5412 = cljs.core.first.call(null,G__5400_5411);
add_class_BANG_.call(null,elem__$1,c_5412);
{
var G__5413 = cljs.core.next.call(null,G__5400_5411);
G__5400_5411 = G__5413;
continue;
}
} else
{}
break;
}
return elem__$1;
};
var G__5410 = function (elem,classes,var_args){
var more_classes = null;
if (goog.isDef(var_args)) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5410__delegate.call(this, elem, classes, more_classes);
};
G__5410.cljs$lang$maxFixedArity = 2;
G__5410.cljs$lang$applyTo = (function (arglist__5414){
var elem = cljs.core.first(arglist__5414);
var classes = cljs.core.first(cljs.core.next(arglist__5414));
var more_classes = cljs.core.rest(cljs.core.next(arglist__5414));
return G__5410__delegate(elem, classes, more_classes);
});
G__5410.cljs$lang$arity$variadic = G__5410__delegate;
return G__5410;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$lang$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$lang$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$lang$arity$variadic = add_class_BANG___3.cljs$lang$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
{
var G__5415 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__5415;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto___5418 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___5418))
{var class_list_5419 = temp__4090__auto___5418;
class_list_5419.remove(class$__$1);
} else
{var class_name_5420 = elem__$1.className;
var new_class_name_5421 = dommy.attrs.remove_class_str.call(null,class_name_5420,class$__$1);
if((class_name_5420 === new_class_name_5421))
{} else
{elem__$1.className = new_class_name_5421;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__5422__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5417 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
while(true){
if(G__5417)
{var c = cljs.core.first.call(null,G__5417);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__5423 = cljs.core.next.call(null,G__5417);
G__5417 = G__5423;
continue;
}
} else
{return null;
}
break;
}
};
var G__5422 = function (elem,class$,var_args){
var classes = null;
if (goog.isDef(var_args)) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5422__delegate.call(this, elem, class$, classes);
};
G__5422.cljs$lang$maxFixedArity = 2;
G__5422.cljs$lang$applyTo = (function (arglist__5424){
var elem = cljs.core.first(arglist__5424);
var class$ = cljs.core.first(cljs.core.next(arglist__5424));
var classes = cljs.core.rest(cljs.core.next(arglist__5424));
return G__5422__delegate(elem, class$, classes);
});
G__5422.cljs$lang$arity$variadic = G__5422__delegate;
return G__5422;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$lang$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$lang$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$lang$arity$variadic = remove_class_BANG___3.cljs$lang$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var temp__4090__auto___5425 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___5425))
{var class_list_5426 = temp__4090__auto___5425;
class_list_5426.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$lang$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$lang$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__5429){
var vec__5430 = p__5429;
var k = cljs.core.nth.call(null,vec__5430,0,null);
var v = cljs.core.nth.call(null,vec__5430,1,null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"even?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"count")),(new cljs.core.Symbol(null,"kvs"))),cljs.core.hash_map("\uFDD0'line",120,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",120,"\uFDD0'column",11))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var G__5433_5435 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
while(true){
if(G__5433_5435)
{var vec__5434_5436 = cljs.core.first.call(null,G__5433_5435);
var k_5437 = cljs.core.nth.call(null,vec__5434_5436,0,null);
var v_5438 = cljs.core.nth.call(null,vec__5434_5436,1,null);
(style[cljs.core.name.call(null,k_5437)] = v_5438);
{
var G__5439 = cljs.core.next.call(null,G__5433_5435);
G__5433_5435 = G__5439;
continue;
}
} else
{}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this, elem, kvs);
};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__5440){
var elem = cljs.core.first(arglist__5440);
var kvs = cljs.core.rest(arglist__5440);
return set_style_BANG___delegate(elem, kvs);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){
if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,(new cljs.core.Symbol(null,"k"))))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"even?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"count")),(new cljs.core.Symbol(null,"kvs"))),cljs.core.hash_map("\uFDD0'line",132,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",132,"\uFDD0'column",11))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5443_5445 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
while(true){
if(G__5443_5445)
{var vec__5444_5446 = cljs.core.first.call(null,G__5443_5445);
var k_5447 = cljs.core.nth.call(null,vec__5444_5446,0,null);
var v_5448 = cljs.core.nth.call(null,vec__5444_5446,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_5447,[cljs.core.str(v_5448),cljs.core.str("px")].join(''));
{
var G__5449 = cljs.core.next.call(null,G__5443_5445);
G__5443_5445 = G__5449;
continue;
}
} else
{}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this, elem, kvs);
};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__5450){
var elem = cljs.core.first(arglist__5450);
var kvs = cljs.core.rest(arglist__5450);
return set_px_BANG___delegate(elem, kvs);
});
set_px_BANG_.cljs$lang$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__5455 = dommy.template.__GT_node_like.call(null,elem);
(G__5455[cljs.core.name.call(null,k)] = v);
return G__5455;
} else
{var G__5456 = dommy.template.__GT_node_like.call(null,elem);
G__5456.setAttribute(cljs.core.name.call(null,k),(((k === "\uFDD0'style"))?dommy.attrs.style_str.call(null,v):v));
return G__5456;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__5459__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"even?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"count")),(new cljs.core.Symbol(null,"kvs"))),cljs.core.hash_map("\uFDD0'line",166,"\uFDD0'column",19))),cljs.core.hash_map("\uFDD0'line",166,"\uFDD0'column",12))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5457_5460 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));
while(true){
if(G__5457_5460)
{var vec__5458_5461 = cljs.core.first.call(null,G__5457_5460);
var k_5462__$1 = cljs.core.nth.call(null,vec__5458_5461,0,null);
var v_5463__$1 = cljs.core.nth.call(null,vec__5458_5461,1,null);
set_attr_BANG_.call(null,elem__$1,k_5462__$1,v_5463__$1);
{
var G__5464 = cljs.core.next.call(null,G__5457_5460);
G__5457_5460 = G__5464;
continue;
}
} else
{}
break;
}
return elem__$1;
};
var G__5459 = function (elem,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5459__delegate.call(this, elem, k, v, kvs);
};
G__5459.cljs$lang$maxFixedArity = 3;
G__5459.cljs$lang$applyTo = (function (arglist__5465){
var elem = cljs.core.first(arglist__5465);
var k = cljs.core.first(cljs.core.next(arglist__5465));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5465)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5465)));
return G__5459__delegate(elem, k, v, kvs);
});
G__5459.cljs$lang$arity$variadic = G__5459__delegate;
return G__5459;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$lang$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$lang$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$lang$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___4.cljs$lang$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["\uFDD0'class","\uFDD0'classes"]).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__5468__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5467_5469 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
while(true){
if(G__5467_5469)
{var k_5470__$1 = cljs.core.first.call(null,G__5467_5469);
remove_attr_BANG_.call(null,elem__$1,k_5470__$1);
{
var G__5471 = cljs.core.next.call(null,G__5467_5469);
G__5467_5469 = G__5471;
continue;
}
} else
{}
break;
}
return elem__$1;
};
var G__5468 = function (elem,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5468__delegate.call(this, elem, k, ks);
};
G__5468.cljs$lang$maxFixedArity = 2;
G__5468.cljs$lang$applyTo = (function (arglist__5472){
var elem = cljs.core.first(arglist__5472);
var k = cljs.core.first(cljs.core.next(arglist__5472));
var ks = cljs.core.rest(cljs.core.next(arglist__5472));
return G__5468__delegate(elem, k, ks);
});
G__5468.cljs$lang$arity$variadic = G__5468__delegate;
return G__5468;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$lang$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$lang$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$lang$arity$variadic = remove_attr_BANG___3.cljs$lang$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){
if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__5474 = dommy.template.__GT_node_like.call(null,elem);
G__5474.style.display = ((show_QMARK_)?"":"none");
return G__5474;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$lang$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$lang$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){
var G__5476 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__5476,false);
return G__5476;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__5478 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__5478,true);
return G__5478;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__5480 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__5480["constructor"] = Object);
return G__5480;
})(),"\uFDD0'keywordize-keys",true);
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"dommy.attrs"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__5481__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__5481 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5481__delegate.call(this, m);
};
G__5481.cljs$lang$maxFixedArity = 0;
G__5481.cljs$lang$applyTo = (function (arglist__5482){
var m = cljs.core.seq(arglist__5482);;
return G__5481__delegate(m);
});
G__5481.cljs$lang$arity$variadic = G__5481__delegate;
return G__5481;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"toggle!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"show?"))]),cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"show?")),"\uFDD0'tag",(new cljs.core.Symbol(null,"boolean")),"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/toggle!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Display or hide the given `elem`. Takes an optional boolean `show?`\n   indicating whether to show or hide `elem`.","\uFDD0'line",192,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"attr")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"k"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"k")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/attr")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",185,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"bounding-client-rect")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/bounding-client-rect")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a map of the bounding client rect of `elem`\n   as a map with [:top :left :right :bottom :width :height]","\uFDD0'line",209,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"set-attr!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"k"))]),cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"k")),(new cljs.core.Symbol(null,"v"))]),cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"k")),(new cljs.core.Symbol(null,"v")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"kvs"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"k")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"k")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"v")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"k")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"v")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"kvs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/set-attr!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","Sets dom attributes on and returns `elem`.\n   Attributes without values will be set to \"true\":\n\n       (set-attr! elem :disabled)\n\n   With values, the function takes variadic kv pairs:\n\n       (set-attr! elem :id \"some-id\"\n                       :name \"some-name\")","\uFDD0'line",143,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"set-px!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"kvs"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"kvs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/set-px!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",131,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"style-str")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/style-str")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",112,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"toggle-class!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"class"))]),cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"class")),(new cljs.core.Symbol(null,"add?"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"add?")),"\uFDD0'tag",(new cljs.core.Symbol(null,"boolean")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/toggle-class!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","(toggle-class! elem class) will add-class! if elem does not have class\n   and remove-class! otherwise.\n   (toggle-class! elem class add?) will add-class! if add? is truthy,\n   otherwise it will remove-class!","\uFDD0'line",94,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"remove-attr!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"k"))]),cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"k")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"ks"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"k")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"k")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"ks")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/remove-attr!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",172,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"show!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/show!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",206,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"remove-class!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"class"))]),cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"class")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"classes"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"classes")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/remove-class!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","remove class from and returns `elem`","\uFDD0'line",77,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"px")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"k"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"k")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/px")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",138,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"class-match?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"class-name")),(new cljs.core.Symbol(null,"class")),(new cljs.core.Symbol(null,"idx"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class-name")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"idx")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/class-match?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","does class-name string have class starting at index idx.\n   only will be used when Element::classList doesn't exist","\uFDD0'line",7,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs","\uFDD0'tag",(new cljs.core.Symbol(null,"boolean"))),(new cljs.core.Symbol(null,"style")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"k"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"k")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/style")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",127,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"set-style!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"kvs"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"kvs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/set-style!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",119,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"class-index")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"class-name")),(new cljs.core.Symbol(null,"class"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class-name")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/class-index")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Finds the index of class in a space-delimited class-name\n    only will be used when Element::classList doesn't exist","\uFDD0'line",21,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"has-class?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"class"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/has-class?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Does an HTML element have a class. Uses Element::classList if\n   available and otherwise does fast parse of className string","\uFDD0'line",32,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs","\uFDD0'tag",(new cljs.core.Symbol(null,"boolean"))),(new cljs.core.Symbol(null,"hidden?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/hidden?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",189,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs","\uFDD0'tag",(new cljs.core.Symbol(null,"boolean"))),(new cljs.core.Symbol(null,"add-class!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"classes"))]),cljs.core.vec([(new cljs.core.Symbol(null,"elem")),(new cljs.core.Symbol(null,"classes")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"more-classes"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"classes")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"classes")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"more-classes")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/add-class!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'doc","add class to element","\uFDD0'line",44,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"remove-class-str")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"init-class-name")),(new cljs.core.Symbol(null,"class"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"init-class-name")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"class")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/remove-class-str")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",67,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs"),(new cljs.core.Symbol(null,"hide!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"elem"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"elem")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs/hide!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",203,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/attrs.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",cljs.core.hash_map((new cljs.core.Symbol(null,"node")),(new cljs.core.Symbol(null,"dommy.macros"))),"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"str")),(new cljs.core.Symbol(null,"clojure.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.attrs"))),old);
}));
