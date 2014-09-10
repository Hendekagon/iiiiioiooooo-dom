// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3522__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3522__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3522__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__7068 = (i + class$.length);
start_from = G__7068;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___7093 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7093))
{var class_list_7094 = temp__4124__auto___7093;var seq__7081_7095 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7082_7096 = null;var count__7083_7097 = (0);var i__7084_7098 = (0);while(true){
if((i__7084_7098 < count__7083_7097))
{var class_7099 = cljs.core._nth.call(null,chunk__7082_7096,i__7084_7098);class_list_7094.add(class_7099);
{
var G__7100 = seq__7081_7095;
var G__7101 = chunk__7082_7096;
var G__7102 = count__7083_7097;
var G__7103 = (i__7084_7098 + (1));
seq__7081_7095 = G__7100;
chunk__7082_7096 = G__7101;
count__7083_7097 = G__7102;
i__7084_7098 = G__7103;
continue;
}
} else
{var temp__4126__auto___7104 = cljs.core.seq.call(null,seq__7081_7095);if(temp__4126__auto___7104)
{var seq__7081_7105__$1 = temp__4126__auto___7104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7081_7105__$1))
{var c__4290__auto___7106 = cljs.core.chunk_first.call(null,seq__7081_7105__$1);{
var G__7107 = cljs.core.chunk_rest.call(null,seq__7081_7105__$1);
var G__7108 = c__4290__auto___7106;
var G__7109 = cljs.core.count.call(null,c__4290__auto___7106);
var G__7110 = (0);
seq__7081_7095 = G__7107;
chunk__7082_7096 = G__7108;
count__7083_7097 = G__7109;
i__7084_7098 = G__7110;
continue;
}
} else
{var class_7111 = cljs.core.first.call(null,seq__7081_7105__$1);class_list_7094.add(class_7111);
{
var G__7112 = cljs.core.next.call(null,seq__7081_7105__$1);
var G__7113 = null;
var G__7114 = (0);
var G__7115 = (0);
seq__7081_7095 = G__7112;
chunk__7082_7096 = G__7113;
count__7083_7097 = G__7114;
i__7084_7098 = G__7115;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_7116 = elem__$1.className;var seq__7085_7117 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7086_7118 = null;var count__7087_7119 = (0);var i__7088_7120 = (0);while(true){
if((i__7088_7120 < count__7087_7119))
{var class_7121 = cljs.core._nth.call(null,chunk__7086_7118,i__7088_7120);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7116,class_7121)))
{} else
{elem__$1.className = (((class_name_7116 === ""))?class_7121:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_7116)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_7121)));
}
{
var G__7122 = seq__7085_7117;
var G__7123 = chunk__7086_7118;
var G__7124 = count__7087_7119;
var G__7125 = (i__7088_7120 + (1));
seq__7085_7117 = G__7122;
chunk__7086_7118 = G__7123;
count__7087_7119 = G__7124;
i__7088_7120 = G__7125;
continue;
}
} else
{var temp__4126__auto___7126 = cljs.core.seq.call(null,seq__7085_7117);if(temp__4126__auto___7126)
{var seq__7085_7127__$1 = temp__4126__auto___7126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7085_7127__$1))
{var c__4290__auto___7128 = cljs.core.chunk_first.call(null,seq__7085_7127__$1);{
var G__7129 = cljs.core.chunk_rest.call(null,seq__7085_7127__$1);
var G__7130 = c__4290__auto___7128;
var G__7131 = cljs.core.count.call(null,c__4290__auto___7128);
var G__7132 = (0);
seq__7085_7117 = G__7129;
chunk__7086_7118 = G__7130;
count__7087_7119 = G__7131;
i__7088_7120 = G__7132;
continue;
}
} else
{var class_7133 = cljs.core.first.call(null,seq__7085_7127__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7116,class_7133)))
{} else
{elem__$1.className = (((class_name_7116 === ""))?class_7133:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_7116)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_7133)));
}
{
var G__7134 = cljs.core.next.call(null,seq__7085_7127__$1);
var G__7135 = null;
var G__7136 = (0);
var G__7137 = (0);
seq__7085_7117 = G__7134;
chunk__7086_7118 = G__7135;
count__7087_7119 = G__7136;
i__7088_7120 = G__7137;
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
var G__7138__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7089_7139 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__7090_7140 = null;var count__7091_7141 = (0);var i__7092_7142 = (0);while(true){
if((i__7092_7142 < count__7091_7141))
{var c_7143 = cljs.core._nth.call(null,chunk__7090_7140,i__7092_7142);add_class_BANG_.call(null,elem__$1,c_7143);
{
var G__7144 = seq__7089_7139;
var G__7145 = chunk__7090_7140;
var G__7146 = count__7091_7141;
var G__7147 = (i__7092_7142 + (1));
seq__7089_7139 = G__7144;
chunk__7090_7140 = G__7145;
count__7091_7141 = G__7146;
i__7092_7142 = G__7147;
continue;
}
} else
{var temp__4126__auto___7148 = cljs.core.seq.call(null,seq__7089_7139);if(temp__4126__auto___7148)
{var seq__7089_7149__$1 = temp__4126__auto___7148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7089_7149__$1))
{var c__4290__auto___7150 = cljs.core.chunk_first.call(null,seq__7089_7149__$1);{
var G__7151 = cljs.core.chunk_rest.call(null,seq__7089_7149__$1);
var G__7152 = c__4290__auto___7150;
var G__7153 = cljs.core.count.call(null,c__4290__auto___7150);
var G__7154 = (0);
seq__7089_7139 = G__7151;
chunk__7090_7140 = G__7152;
count__7091_7141 = G__7153;
i__7092_7142 = G__7154;
continue;
}
} else
{var c_7155 = cljs.core.first.call(null,seq__7089_7149__$1);add_class_BANG_.call(null,elem__$1,c_7155);
{
var G__7156 = cljs.core.next.call(null,seq__7089_7149__$1);
var G__7157 = null;
var G__7158 = (0);
var G__7159 = (0);
seq__7089_7139 = G__7156;
chunk__7090_7140 = G__7157;
count__7091_7141 = G__7158;
i__7092_7142 = G__7159;
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
var G__7138 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7138__delegate.call(this,elem,classes,more_classes);};
G__7138.cljs$lang$maxFixedArity = 2;
G__7138.cljs$lang$applyTo = (function (arglist__7160){
var elem = cljs.core.first(arglist__7160);
arglist__7160 = cljs.core.next(arglist__7160);
var classes = cljs.core.first(arglist__7160);
var more_classes = cljs.core.rest(arglist__7160);
return G__7138__delegate(elem,classes,more_classes);
});
G__7138.cljs$core$IFn$_invoke$arity$variadic = G__7138__delegate;
return G__7138;
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
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__7161 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__7161;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___7170 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7170))
{var class_list_7171 = temp__4124__auto___7170;class_list_7171.remove(class$__$1);
} else
{var class_name_7172 = elem__$1.className;var new_class_name_7173 = dommy.attrs.remove_class_str.call(null,class_name_7172,class$__$1);if((class_name_7172 === new_class_name_7173))
{} else
{elem__$1.className = new_class_name_7173;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7174__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7166 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__7167 = null;var count__7168 = (0);var i__7169 = (0);while(true){
if((i__7169 < count__7168))
{var c = cljs.core._nth.call(null,chunk__7167,i__7169);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7175 = seq__7166;
var G__7176 = chunk__7167;
var G__7177 = count__7168;
var G__7178 = (i__7169 + (1));
seq__7166 = G__7175;
chunk__7167 = G__7176;
count__7168 = G__7177;
i__7169 = G__7178;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7166);if(temp__4126__auto__)
{var seq__7166__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7166__$1))
{var c__4290__auto__ = cljs.core.chunk_first.call(null,seq__7166__$1);{
var G__7179 = cljs.core.chunk_rest.call(null,seq__7166__$1);
var G__7180 = c__4290__auto__;
var G__7181 = cljs.core.count.call(null,c__4290__auto__);
var G__7182 = (0);
seq__7166 = G__7179;
chunk__7167 = G__7180;
count__7168 = G__7181;
i__7169 = G__7182;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7166__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7183 = cljs.core.next.call(null,seq__7166__$1);
var G__7184 = null;
var G__7185 = (0);
var G__7186 = (0);
seq__7166 = G__7183;
chunk__7167 = G__7184;
count__7168 = G__7185;
i__7169 = G__7186;
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
var G__7174 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7174__delegate.call(this,elem,class$,classes);};
G__7174.cljs$lang$maxFixedArity = 2;
G__7174.cljs$lang$applyTo = (function (arglist__7187){
var elem = cljs.core.first(arglist__7187);
arglist__7187 = cljs.core.next(arglist__7187);
var class$ = cljs.core.first(arglist__7187);
var classes = cljs.core.rest(arglist__7187);
return G__7174__delegate(elem,class$,classes);
});
G__7174.cljs$core$IFn$_invoke$arity$variadic = G__7174__delegate;
return G__7174;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___7188 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7188))
{var class_list_7189 = temp__4124__auto___7188;class_list_7189.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
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
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7192){var vec__7193 = p__7192;var k = cljs.core.nth.call(null,vec__7193,(0),null);var v = cljs.core.nth.call(null,vec__7193,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7200_7206 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__7201_7207 = null;var count__7202_7208 = (0);var i__7203_7209 = (0);while(true){
if((i__7203_7209 < count__7202_7208))
{var vec__7204_7210 = cljs.core._nth.call(null,chunk__7201_7207,i__7203_7209);var k_7211 = cljs.core.nth.call(null,vec__7204_7210,(0),null);var v_7212 = cljs.core.nth.call(null,vec__7204_7210,(1),null);(style[cljs.core.name.call(null,k_7211)] = v_7212);
{
var G__7213 = seq__7200_7206;
var G__7214 = chunk__7201_7207;
var G__7215 = count__7202_7208;
var G__7216 = (i__7203_7209 + (1));
seq__7200_7206 = G__7213;
chunk__7201_7207 = G__7214;
count__7202_7208 = G__7215;
i__7203_7209 = G__7216;
continue;
}
} else
{var temp__4126__auto___7217 = cljs.core.seq.call(null,seq__7200_7206);if(temp__4126__auto___7217)
{var seq__7200_7218__$1 = temp__4126__auto___7217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7200_7218__$1))
{var c__4290__auto___7219 = cljs.core.chunk_first.call(null,seq__7200_7218__$1);{
var G__7220 = cljs.core.chunk_rest.call(null,seq__7200_7218__$1);
var G__7221 = c__4290__auto___7219;
var G__7222 = cljs.core.count.call(null,c__4290__auto___7219);
var G__7223 = (0);
seq__7200_7206 = G__7220;
chunk__7201_7207 = G__7221;
count__7202_7208 = G__7222;
i__7203_7209 = G__7223;
continue;
}
} else
{var vec__7205_7224 = cljs.core.first.call(null,seq__7200_7218__$1);var k_7225 = cljs.core.nth.call(null,vec__7205_7224,(0),null);var v_7226 = cljs.core.nth.call(null,vec__7205_7224,(1),null);(style[cljs.core.name.call(null,k_7225)] = v_7226);
{
var G__7227 = cljs.core.next.call(null,seq__7200_7218__$1);
var G__7228 = null;
var G__7229 = (0);
var G__7230 = (0);
seq__7200_7206 = G__7227;
chunk__7201_7207 = G__7228;
count__7202_7208 = G__7229;
i__7203_7209 = G__7230;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7231){
var elem = cljs.core.first(arglist__7231);
var kvs = cljs.core.rest(arglist__7231);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7238_7244 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__7239_7245 = null;var count__7240_7246 = (0);var i__7241_7247 = (0);while(true){
if((i__7241_7247 < count__7240_7246))
{var vec__7242_7248 = cljs.core._nth.call(null,chunk__7239_7245,i__7241_7247);var k_7249 = cljs.core.nth.call(null,vec__7242_7248,(0),null);var v_7250 = cljs.core.nth.call(null,vec__7242_7248,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7249,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_7250)+"px"));
{
var G__7251 = seq__7238_7244;
var G__7252 = chunk__7239_7245;
var G__7253 = count__7240_7246;
var G__7254 = (i__7241_7247 + (1));
seq__7238_7244 = G__7251;
chunk__7239_7245 = G__7252;
count__7240_7246 = G__7253;
i__7241_7247 = G__7254;
continue;
}
} else
{var temp__4126__auto___7255 = cljs.core.seq.call(null,seq__7238_7244);if(temp__4126__auto___7255)
{var seq__7238_7256__$1 = temp__4126__auto___7255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7238_7256__$1))
{var c__4290__auto___7257 = cljs.core.chunk_first.call(null,seq__7238_7256__$1);{
var G__7258 = cljs.core.chunk_rest.call(null,seq__7238_7256__$1);
var G__7259 = c__4290__auto___7257;
var G__7260 = cljs.core.count.call(null,c__4290__auto___7257);
var G__7261 = (0);
seq__7238_7244 = G__7258;
chunk__7239_7245 = G__7259;
count__7240_7246 = G__7260;
i__7241_7247 = G__7261;
continue;
}
} else
{var vec__7243_7262 = cljs.core.first.call(null,seq__7238_7256__$1);var k_7263 = cljs.core.nth.call(null,vec__7243_7262,(0),null);var v_7264 = cljs.core.nth.call(null,vec__7243_7262,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7263,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_7264)+"px"));
{
var G__7265 = cljs.core.next.call(null,seq__7238_7256__$1);
var G__7266 = null;
var G__7267 = (0);
var G__7268 = (0);
seq__7238_7244 = G__7265;
chunk__7239_7245 = G__7266;
count__7240_7246 = G__7267;
i__7241_7247 = G__7268;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7269){
var elem = cljs.core.first(arglist__7269);
var kvs = cljs.core.rest(arglist__7269);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__7278 = dommy.template.__GT_node_like.call(null,elem);(G__7278[cljs.core.name.call(null,k)] = v);
return G__7278;
} else
{var G__7279 = dommy.template.__GT_node_like.call(null,elem);G__7279.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__7279;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7286__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7280_7287 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__7281_7288 = null;var count__7282_7289 = (0);var i__7283_7290 = (0);while(true){
if((i__7283_7290 < count__7282_7289))
{var vec__7284_7291 = cljs.core._nth.call(null,chunk__7281_7288,i__7283_7290);var k_7292__$1 = cljs.core.nth.call(null,vec__7284_7291,(0),null);var v_7293__$1 = cljs.core.nth.call(null,vec__7284_7291,(1),null);set_attr_BANG_.call(null,elem__$1,k_7292__$1,v_7293__$1);
{
var G__7294 = seq__7280_7287;
var G__7295 = chunk__7281_7288;
var G__7296 = count__7282_7289;
var G__7297 = (i__7283_7290 + (1));
seq__7280_7287 = G__7294;
chunk__7281_7288 = G__7295;
count__7282_7289 = G__7296;
i__7283_7290 = G__7297;
continue;
}
} else
{var temp__4126__auto___7298 = cljs.core.seq.call(null,seq__7280_7287);if(temp__4126__auto___7298)
{var seq__7280_7299__$1 = temp__4126__auto___7298;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7280_7299__$1))
{var c__4290__auto___7300 = cljs.core.chunk_first.call(null,seq__7280_7299__$1);{
var G__7301 = cljs.core.chunk_rest.call(null,seq__7280_7299__$1);
var G__7302 = c__4290__auto___7300;
var G__7303 = cljs.core.count.call(null,c__4290__auto___7300);
var G__7304 = (0);
seq__7280_7287 = G__7301;
chunk__7281_7288 = G__7302;
count__7282_7289 = G__7303;
i__7283_7290 = G__7304;
continue;
}
} else
{var vec__7285_7305 = cljs.core.first.call(null,seq__7280_7299__$1);var k_7306__$1 = cljs.core.nth.call(null,vec__7285_7305,(0),null);var v_7307__$1 = cljs.core.nth.call(null,vec__7285_7305,(1),null);set_attr_BANG_.call(null,elem__$1,k_7306__$1,v_7307__$1);
{
var G__7308 = cljs.core.next.call(null,seq__7280_7299__$1);
var G__7309 = null;
var G__7310 = (0);
var G__7311 = (0);
seq__7280_7287 = G__7308;
chunk__7281_7288 = G__7309;
count__7282_7289 = G__7310;
i__7283_7290 = G__7311;
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
var G__7286 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7286__delegate.call(this,elem,k,v,kvs);};
G__7286.cljs$lang$maxFixedArity = 3;
G__7286.cljs$lang$applyTo = (function (arglist__7312){
var elem = cljs.core.first(arglist__7312);
arglist__7312 = cljs.core.next(arglist__7312);
var k = cljs.core.first(arglist__7312);
arglist__7312 = cljs.core.next(arglist__7312);
var v = cljs.core.first(arglist__7312);
var kvs = cljs.core.rest(arglist__7312);
return G__7286__delegate(elem,k,v,kvs);
});
G__7286.cljs$core$IFn$_invoke$arity$variadic = G__7286__delegate;
return G__7286;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__7321__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7317_7322 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7318_7323 = null;var count__7319_7324 = (0);var i__7320_7325 = (0);while(true){
if((i__7320_7325 < count__7319_7324))
{var k_7326__$1 = cljs.core._nth.call(null,chunk__7318_7323,i__7320_7325);remove_attr_BANG_.call(null,elem__$1,k_7326__$1);
{
var G__7327 = seq__7317_7322;
var G__7328 = chunk__7318_7323;
var G__7329 = count__7319_7324;
var G__7330 = (i__7320_7325 + (1));
seq__7317_7322 = G__7327;
chunk__7318_7323 = G__7328;
count__7319_7324 = G__7329;
i__7320_7325 = G__7330;
continue;
}
} else
{var temp__4126__auto___7331 = cljs.core.seq.call(null,seq__7317_7322);if(temp__4126__auto___7331)
{var seq__7317_7332__$1 = temp__4126__auto___7331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7317_7332__$1))
{var c__4290__auto___7333 = cljs.core.chunk_first.call(null,seq__7317_7332__$1);{
var G__7334 = cljs.core.chunk_rest.call(null,seq__7317_7332__$1);
var G__7335 = c__4290__auto___7333;
var G__7336 = cljs.core.count.call(null,c__4290__auto___7333);
var G__7337 = (0);
seq__7317_7322 = G__7334;
chunk__7318_7323 = G__7335;
count__7319_7324 = G__7336;
i__7320_7325 = G__7337;
continue;
}
} else
{var k_7338__$1 = cljs.core.first.call(null,seq__7317_7332__$1);remove_attr_BANG_.call(null,elem__$1,k_7338__$1);
{
var G__7339 = cljs.core.next.call(null,seq__7317_7332__$1);
var G__7340 = null;
var G__7341 = (0);
var G__7342 = (0);
seq__7317_7322 = G__7339;
chunk__7318_7323 = G__7340;
count__7319_7324 = G__7341;
i__7320_7325 = G__7342;
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
var G__7321 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7321__delegate.call(this,elem,k,ks);};
G__7321.cljs$lang$maxFixedArity = 2;
G__7321.cljs$lang$applyTo = (function (arglist__7343){
var elem = cljs.core.first(arglist__7343);
arglist__7343 = cljs.core.next(arglist__7343);
var k = cljs.core.first(arglist__7343);
var ks = cljs.core.rest(arglist__7343);
return G__7321__delegate(elem,k,ks);
});
G__7321.cljs$core$IFn$_invoke$arity$variadic = G__7321__delegate;
return G__7321;
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
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7345 = dommy.template.__GT_node_like.call(null,elem);G__7345.style.display = ((show_QMARK_)?"":"none");
return G__7345;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7347 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7347,false);
return G__7347;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7349 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7349,true);
return G__7349;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__7351 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__7351["constructor"] = Object);
return G__7351;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map