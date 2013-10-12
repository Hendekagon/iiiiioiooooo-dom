goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3941__auto__ = (function (){var or__3943__auto__ = (idx === 0);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();if(cljs.core.truth_(and__3941__auto__))
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{var or__3943__auto__ = (stop === total_len);if(or__3943__auto__)
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
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_(class_name,class$,i))
{return i;
} else
{{
var G__5939 = (i + class$.length);
start_from = G__5939;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index(class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var classes__$1 = clojure.string.trim(cljs.core.name(classes));if(cljs.core.seq(classes__$1))
{var temp__4090__auto___5964 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___5964))
{var class_list_5965 = temp__4090__auto___5964;var seq__5952_5966 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__5953_5967 = null;var count__5954_5968 = 0;var i__5955_5969 = 0;while(true){
if((i__5955_5969 < count__5954_5968))
{var class_5970 = chunk__5953_5967.cljs$core$IIndexed$_nth$arity$2(chunk__5953_5967,i__5955_5969);class_list_5965.add(class_5970);
{
var G__5971 = seq__5952_5966;
var G__5972 = chunk__5953_5967;
var G__5973 = count__5954_5968;
var G__5974 = (i__5955_5969 + 1);
seq__5952_5966 = G__5971;
chunk__5953_5967 = G__5972;
count__5954_5968 = G__5973;
i__5955_5969 = G__5974;
continue;
}
} else
{var temp__4092__auto___5975 = cljs.core.seq(seq__5952_5966);if(temp__4092__auto___5975)
{var seq__5952_5976__$1 = temp__4092__auto___5975;if(cljs.core.chunked_seq_QMARK_(seq__5952_5976__$1))
{var c__3561__auto___5977 = cljs.core.chunk_first(seq__5952_5976__$1);{
var G__5978 = cljs.core.chunk_rest(seq__5952_5976__$1);
var G__5979 = c__3561__auto___5977;
var G__5980 = cljs.core.count(c__3561__auto___5977);
var G__5981 = 0;
seq__5952_5966 = G__5978;
chunk__5953_5967 = G__5979;
count__5954_5968 = G__5980;
i__5955_5969 = G__5981;
continue;
}
} else
{var class_5982 = cljs.core.first(seq__5952_5976__$1);class_list_5965.add(class_5982);
{
var G__5983 = cljs.core.next(seq__5952_5976__$1);
var G__5984 = null;
var G__5985 = 0;
var G__5986 = 0;
seq__5952_5966 = G__5983;
chunk__5953_5967 = G__5984;
count__5954_5968 = G__5985;
i__5955_5969 = G__5986;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_5987 = elem__$1.className;var seq__5956_5988 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__5957_5989 = null;var count__5958_5990 = 0;var i__5959_5991 = 0;while(true){
if((i__5959_5991 < count__5958_5990))
{var class_5992 = chunk__5957_5989.cljs$core$IIndexed$_nth$arity$2(chunk__5957_5989,i__5959_5991);if(cljs.core.truth_(dommy.attrs.class_index(class_name_5987,class_5992)))
{} else
{elem__$1.className = (((class_name_5987 === ""))?class_5992:[cljs.core.str(class_name_5987),cljs.core.str(" "),cljs.core.str(class_5992)].join(''));
}
{
var G__5993 = seq__5956_5988;
var G__5994 = chunk__5957_5989;
var G__5995 = count__5958_5990;
var G__5996 = (i__5959_5991 + 1);
seq__5956_5988 = G__5993;
chunk__5957_5989 = G__5994;
count__5958_5990 = G__5995;
i__5959_5991 = G__5996;
continue;
}
} else
{var temp__4092__auto___5997 = cljs.core.seq(seq__5956_5988);if(temp__4092__auto___5997)
{var seq__5956_5998__$1 = temp__4092__auto___5997;if(cljs.core.chunked_seq_QMARK_(seq__5956_5998__$1))
{var c__3561__auto___5999 = cljs.core.chunk_first(seq__5956_5998__$1);{
var G__6000 = cljs.core.chunk_rest(seq__5956_5998__$1);
var G__6001 = c__3561__auto___5999;
var G__6002 = cljs.core.count(c__3561__auto___5999);
var G__6003 = 0;
seq__5956_5988 = G__6000;
chunk__5957_5989 = G__6001;
count__5958_5990 = G__6002;
i__5959_5991 = G__6003;
continue;
}
} else
{var class_6004 = cljs.core.first(seq__5956_5998__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_5987,class_6004)))
{} else
{elem__$1.className = (((class_name_5987 === ""))?class_6004:[cljs.core.str(class_name_5987),cljs.core.str(" "),cljs.core.str(class_6004)].join(''));
}
{
var G__6005 = cljs.core.next(seq__5956_5998__$1);
var G__6006 = null;
var G__6007 = 0;
var G__6008 = 0;
seq__5956_5988 = G__6005;
chunk__5957_5989 = G__6006;
count__5958_5990 = G__6007;
i__5959_5991 = G__6008;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__6009__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__5960_6010 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__5961_6011 = null;var count__5962_6012 = 0;var i__5963_6013 = 0;while(true){
if((i__5963_6013 < count__5962_6012))
{var c_6014 = chunk__5961_6011.cljs$core$IIndexed$_nth$arity$2(chunk__5961_6011,i__5963_6013);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_6014);
{
var G__6015 = seq__5960_6010;
var G__6016 = chunk__5961_6011;
var G__6017 = count__5962_6012;
var G__6018 = (i__5963_6013 + 1);
seq__5960_6010 = G__6015;
chunk__5961_6011 = G__6016;
count__5962_6012 = G__6017;
i__5963_6013 = G__6018;
continue;
}
} else
{var temp__4092__auto___6019 = cljs.core.seq(seq__5960_6010);if(temp__4092__auto___6019)
{var seq__5960_6020__$1 = temp__4092__auto___6019;if(cljs.core.chunked_seq_QMARK_(seq__5960_6020__$1))
{var c__3561__auto___6021 = cljs.core.chunk_first(seq__5960_6020__$1);{
var G__6022 = cljs.core.chunk_rest(seq__5960_6020__$1);
var G__6023 = c__3561__auto___6021;
var G__6024 = cljs.core.count(c__3561__auto___6021);
var G__6025 = 0;
seq__5960_6010 = G__6022;
chunk__5961_6011 = G__6023;
count__5962_6012 = G__6024;
i__5963_6013 = G__6025;
continue;
}
} else
{var c_6026 = cljs.core.first(seq__5960_6020__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_6026);
{
var G__6027 = cljs.core.next(seq__5960_6020__$1);
var G__6028 = null;
var G__6029 = 0;
var G__6030 = 0;
seq__5960_6010 = G__6027;
chunk__5961_6011 = G__6028;
count__5962_6012 = G__6029;
i__5963_6013 = G__6030;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6009 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6009__delegate.call(this,elem,classes,more_classes);};
G__6009.cljs$lang$maxFixedArity = 2;
G__6009.cljs$lang$applyTo = (function (arglist__6031){
var elem = cljs.core.first(arglist__6031);
arglist__6031 = cljs.core.next(arglist__6031);
var classes = cljs.core.first(arglist__6031);
var more_classes = cljs.core.rest(arglist__6031);
return G__6009__delegate(elem,classes,more_classes);
});
G__6009.cljs$core$IFn$_invoke$arity$variadic = G__6009__delegate;
return G__6009;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index(class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__6032 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__6032;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___6041 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6041))
{var class_list_6042 = temp__4090__auto___6041;class_list_6042.remove(class$__$1);
} else
{var class_name_6043 = elem__$1.className;var new_class_name_6044 = dommy.attrs.remove_class_str(class_name_6043,class$__$1);if((class_name_6043 === new_class_name_6044))
{} else
{elem__$1.className = new_class_name_6044;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__6045__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__6037 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__6038 = null;var count__6039 = 0;var i__6040 = 0;while(true){
if((i__6040 < count__6039))
{var c = chunk__6038.cljs$core$IIndexed$_nth$arity$2(chunk__6038,i__6040);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__6046 = seq__6037;
var G__6047 = chunk__6038;
var G__6048 = count__6039;
var G__6049 = (i__6040 + 1);
seq__6037 = G__6046;
chunk__6038 = G__6047;
count__6039 = G__6048;
i__6040 = G__6049;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__6037);if(temp__4092__auto__)
{var seq__6037__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6037__$1))
{var c__3561__auto__ = cljs.core.chunk_first(seq__6037__$1);{
var G__6050 = cljs.core.chunk_rest(seq__6037__$1);
var G__6051 = c__3561__auto__;
var G__6052 = cljs.core.count(c__3561__auto__);
var G__6053 = 0;
seq__6037 = G__6050;
chunk__6038 = G__6051;
count__6039 = G__6052;
i__6040 = G__6053;
continue;
}
} else
{var c = cljs.core.first(seq__6037__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__6054 = cljs.core.next(seq__6037__$1);
var G__6055 = null;
var G__6056 = 0;
var G__6057 = 0;
seq__6037 = G__6054;
chunk__6038 = G__6055;
count__6039 = G__6056;
i__6040 = G__6057;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__6045 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6045__delegate.call(this,elem,class$,classes);};
G__6045.cljs$lang$maxFixedArity = 2;
G__6045.cljs$lang$applyTo = (function (arglist__6058){
var elem = cljs.core.first(arglist__6058);
arglist__6058 = cljs.core.next(arglist__6058);
var class$ = cljs.core.first(arglist__6058);
var classes = cljs.core.rest(arglist__6058);
return G__6045__delegate(elem,class$,classes);
});
G__6045.cljs$core$IFn$_invoke$arity$variadic = G__6045__delegate;
return G__6045;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var temp__4090__auto___6059 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6059))
{var class_list_6060 = temp__4090__auto___6059;class_list_6060.toggle(class$);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,class$,!(dommy.attrs.has_class_QMARK_(elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
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
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6063){var vec__6064 = p__6063;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__6071_6077 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__6072_6078 = null;var count__6073_6079 = 0;var i__6074_6080 = 0;while(true){
if((i__6074_6080 < count__6073_6079))
{var vec__6075_6081 = chunk__6072_6078.cljs$core$IIndexed$_nth$arity$2(chunk__6072_6078,i__6074_6080);var k_6082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6075_6081,0,null);var v_6083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6075_6081,1,null);(style[cljs.core.name(k_6082)] = v_6083);
{
var G__6084 = seq__6071_6077;
var G__6085 = chunk__6072_6078;
var G__6086 = count__6073_6079;
var G__6087 = (i__6074_6080 + 1);
seq__6071_6077 = G__6084;
chunk__6072_6078 = G__6085;
count__6073_6079 = G__6086;
i__6074_6080 = G__6087;
continue;
}
} else
{var temp__4092__auto___6088 = cljs.core.seq(seq__6071_6077);if(temp__4092__auto___6088)
{var seq__6071_6089__$1 = temp__4092__auto___6088;if(cljs.core.chunked_seq_QMARK_(seq__6071_6089__$1))
{var c__3561__auto___6090 = cljs.core.chunk_first(seq__6071_6089__$1);{
var G__6091 = cljs.core.chunk_rest(seq__6071_6089__$1);
var G__6092 = c__3561__auto___6090;
var G__6093 = cljs.core.count(c__3561__auto___6090);
var G__6094 = 0;
seq__6071_6077 = G__6091;
chunk__6072_6078 = G__6092;
count__6073_6079 = G__6093;
i__6074_6080 = G__6094;
continue;
}
} else
{var vec__6076_6095 = cljs.core.first(seq__6071_6089__$1);var k_6096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6076_6095,0,null);var v_6097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6076_6095,1,null);(style[cljs.core.name(k_6096)] = v_6097);
{
var G__6098 = cljs.core.next(seq__6071_6089__$1);
var G__6099 = null;
var G__6100 = 0;
var G__6101 = 0;
seq__6071_6077 = G__6098;
chunk__6072_6078 = G__6099;
count__6073_6079 = G__6100;
i__6074_6080 = G__6101;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6102){
var elem = cljs.core.first(arglist__6102);
var kvs = cljs.core.rest(arglist__6102);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"k","k",-1640531420,null)], 0)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like(elem))[cljs.core.name(k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__6109_6115 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__6110_6116 = null;var count__6111_6117 = 0;var i__6112_6118 = 0;while(true){
if((i__6112_6118 < count__6111_6117))
{var vec__6113_6119 = chunk__6110_6116.cljs$core$IIndexed$_nth$arity$2(chunk__6110_6116,i__6112_6118);var k_6120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6113_6119,0,null);var v_6121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6113_6119,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_6120,[cljs.core.str(v_6121),cljs.core.str("px")].join('')], 0));
{
var G__6122 = seq__6109_6115;
var G__6123 = chunk__6110_6116;
var G__6124 = count__6111_6117;
var G__6125 = (i__6112_6118 + 1);
seq__6109_6115 = G__6122;
chunk__6110_6116 = G__6123;
count__6111_6117 = G__6124;
i__6112_6118 = G__6125;
continue;
}
} else
{var temp__4092__auto___6126 = cljs.core.seq(seq__6109_6115);if(temp__4092__auto___6126)
{var seq__6109_6127__$1 = temp__4092__auto___6126;if(cljs.core.chunked_seq_QMARK_(seq__6109_6127__$1))
{var c__3561__auto___6128 = cljs.core.chunk_first(seq__6109_6127__$1);{
var G__6129 = cljs.core.chunk_rest(seq__6109_6127__$1);
var G__6130 = c__3561__auto___6128;
var G__6131 = cljs.core.count(c__3561__auto___6128);
var G__6132 = 0;
seq__6109_6115 = G__6129;
chunk__6110_6116 = G__6130;
count__6111_6117 = G__6131;
i__6112_6118 = G__6132;
continue;
}
} else
{var vec__6114_6133 = cljs.core.first(seq__6109_6127__$1);var k_6134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6114_6133,0,null);var v_6135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6114_6133,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_6134,[cljs.core.str(v_6135),cljs.core.str("px")].join('')], 0));
{
var G__6136 = cljs.core.next(seq__6109_6127__$1);
var G__6137 = null;
var G__6138 = 0;
var G__6139 = 0;
seq__6109_6115 = G__6136;
chunk__6110_6116 = G__6137;
count__6111_6117 = G__6138;
i__6112_6118 = G__6139;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6140){
var elem = cljs.core.first(arglist__6140);
var kvs = cljs.core.rest(arglist__6140);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style(dommy.template.__GT_node_like(elem),k);if(cljs.core.seq(pixels))
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_(v))
{var G__6149 = dommy.template.__GT_node_like(elem);(G__6149[cljs.core.name(k)] = v);
return G__6149;
} else
{var G__6150 = dommy.template.__GT_node_like(elem);G__6150.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$88))?dommy.attrs.style_str(v):v));
return G__6150;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6157__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__6151_6158 = cljs.core.seq(cljs.core.cons(cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__6152_6159 = null;var count__6153_6160 = 0;var i__6154_6161 = 0;while(true){
if((i__6154_6161 < count__6153_6160))
{var vec__6155_6162 = chunk__6152_6159.cljs$core$IIndexed$_nth$arity$2(chunk__6152_6159,i__6154_6161);var k_6163__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6155_6162,0,null);var v_6164__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6155_6162,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_6163__$1,v_6164__$1);
{
var G__6165 = seq__6151_6158;
var G__6166 = chunk__6152_6159;
var G__6167 = count__6153_6160;
var G__6168 = (i__6154_6161 + 1);
seq__6151_6158 = G__6165;
chunk__6152_6159 = G__6166;
count__6153_6160 = G__6167;
i__6154_6161 = G__6168;
continue;
}
} else
{var temp__4092__auto___6169 = cljs.core.seq(seq__6151_6158);if(temp__4092__auto___6169)
{var seq__6151_6170__$1 = temp__4092__auto___6169;if(cljs.core.chunked_seq_QMARK_(seq__6151_6170__$1))
{var c__3561__auto___6171 = cljs.core.chunk_first(seq__6151_6170__$1);{
var G__6172 = cljs.core.chunk_rest(seq__6151_6170__$1);
var G__6173 = c__3561__auto___6171;
var G__6174 = cljs.core.count(c__3561__auto___6171);
var G__6175 = 0;
seq__6151_6158 = G__6172;
chunk__6152_6159 = G__6173;
count__6153_6160 = G__6174;
i__6154_6161 = G__6175;
continue;
}
} else
{var vec__6156_6176 = cljs.core.first(seq__6151_6170__$1);var k_6177__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6156_6176,0,null);var v_6178__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6156_6176,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_6177__$1,v_6178__$1);
{
var G__6179 = cljs.core.next(seq__6151_6170__$1);
var G__6180 = null;
var G__6181 = 0;
var G__6182 = 0;
seq__6151_6158 = G__6179;
chunk__6152_6159 = G__6180;
count__6153_6160 = G__6181;
i__6154_6161 = G__6182;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6157 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6157__delegate.call(this,elem,k,v,kvs);};
G__6157.cljs$lang$maxFixedArity = 3;
G__6157.cljs$lang$applyTo = (function (arglist__6183){
var elem = cljs.core.first(arglist__6183);
arglist__6183 = cljs.core.next(arglist__6183);
var k = cljs.core.first(arglist__6183);
arglist__6183 = cljs.core.next(arglist__6183);
var v = cljs.core.first(arglist__6183);
var kvs = cljs.core.rest(arglist__6183);
return G__6157__delegate(elem,k,v,kvs);
});
G__6157.cljs$core$IFn$_invoke$arity$variadic = G__6157__delegate;
return G__6157;
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
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$33,null,cljs.core.constant$keyword$89,null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__6192__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__6188_6193 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__6189_6194 = null;var count__6190_6195 = 0;var i__6191_6196 = 0;while(true){
if((i__6191_6196 < count__6190_6195))
{var k_6197__$1 = chunk__6189_6194.cljs$core$IIndexed$_nth$arity$2(chunk__6189_6194,i__6191_6196);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_6197__$1);
{
var G__6198 = seq__6188_6193;
var G__6199 = chunk__6189_6194;
var G__6200 = count__6190_6195;
var G__6201 = (i__6191_6196 + 1);
seq__6188_6193 = G__6198;
chunk__6189_6194 = G__6199;
count__6190_6195 = G__6200;
i__6191_6196 = G__6201;
continue;
}
} else
{var temp__4092__auto___6202 = cljs.core.seq(seq__6188_6193);if(temp__4092__auto___6202)
{var seq__6188_6203__$1 = temp__4092__auto___6202;if(cljs.core.chunked_seq_QMARK_(seq__6188_6203__$1))
{var c__3561__auto___6204 = cljs.core.chunk_first(seq__6188_6203__$1);{
var G__6205 = cljs.core.chunk_rest(seq__6188_6203__$1);
var G__6206 = c__3561__auto___6204;
var G__6207 = cljs.core.count(c__3561__auto___6204);
var G__6208 = 0;
seq__6188_6193 = G__6205;
chunk__6189_6194 = G__6206;
count__6190_6195 = G__6207;
i__6191_6196 = G__6208;
continue;
}
} else
{var k_6209__$1 = cljs.core.first(seq__6188_6203__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_6209__$1);
{
var G__6210 = cljs.core.next(seq__6188_6203__$1);
var G__6211 = null;
var G__6212 = 0;
var G__6213 = 0;
seq__6188_6193 = G__6210;
chunk__6189_6194 = G__6211;
count__6190_6195 = G__6212;
i__6191_6196 = G__6213;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6192 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6192__delegate.call(this,elem,k,ks);};
G__6192.cljs$lang$maxFixedArity = 2;
G__6192.cljs$lang$applyTo = (function (arglist__6214){
var elem = cljs.core.first(arglist__6214);
arglist__6214 = cljs.core.next(arglist__6214);
var k = cljs.core.first(arglist__6214);
var ks = cljs.core.rest(arglist__6214);
return G__6192__delegate(elem,k,ks);
});
G__6192.cljs$core$IFn$_invoke$arity$variadic = G__6192__delegate;
return G__6192;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like(elem).getAttribute(cljs.core.name(k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like(elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like(elem);toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,dommy.attrs.hidden_QMARK_(elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__6216 = dommy.template.__GT_node_like(elem);G__6216.style.display = ((show_QMARK_)?"":"none");
return G__6216;
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
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__6218 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__6218,false);
return G__6218;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__6220 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__6220,true);
return G__6220;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__6222 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__6222["constructor"] = Object);
return G__6222;
})(),cljs.core.array_seq([cljs.core.constant$keyword$10,true], 0));
});
