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
var G__8134 = (i + class$.length);
start_from = G__8134;
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
{var temp__4124__auto___8159 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___8159))
{var class_list_8160 = temp__4124__auto___8159;var seq__8147_8161 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8148_8162 = null;var count__8149_8163 = (0);var i__8150_8164 = (0);while(true){
if((i__8150_8164 < count__8149_8163))
{var class_8165 = cljs.core._nth.call(null,chunk__8148_8162,i__8150_8164);class_list_8160.add(class_8165);
{
var G__8166 = seq__8147_8161;
var G__8167 = chunk__8148_8162;
var G__8168 = count__8149_8163;
var G__8169 = (i__8150_8164 + (1));
seq__8147_8161 = G__8166;
chunk__8148_8162 = G__8167;
count__8149_8163 = G__8168;
i__8150_8164 = G__8169;
continue;
}
} else
{var temp__4126__auto___8170 = cljs.core.seq.call(null,seq__8147_8161);if(temp__4126__auto___8170)
{var seq__8147_8171__$1 = temp__4126__auto___8170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8147_8171__$1))
{var c__4290__auto___8172 = cljs.core.chunk_first.call(null,seq__8147_8171__$1);{
var G__8173 = cljs.core.chunk_rest.call(null,seq__8147_8171__$1);
var G__8174 = c__4290__auto___8172;
var G__8175 = cljs.core.count.call(null,c__4290__auto___8172);
var G__8176 = (0);
seq__8147_8161 = G__8173;
chunk__8148_8162 = G__8174;
count__8149_8163 = G__8175;
i__8150_8164 = G__8176;
continue;
}
} else
{var class_8177 = cljs.core.first.call(null,seq__8147_8171__$1);class_list_8160.add(class_8177);
{
var G__8178 = cljs.core.next.call(null,seq__8147_8171__$1);
var G__8179 = null;
var G__8180 = (0);
var G__8181 = (0);
seq__8147_8161 = G__8178;
chunk__8148_8162 = G__8179;
count__8149_8163 = G__8180;
i__8150_8164 = G__8181;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8182 = elem__$1.className;var seq__8151_8183 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8152_8184 = null;var count__8153_8185 = (0);var i__8154_8186 = (0);while(true){
if((i__8154_8186 < count__8153_8185))
{var class_8187 = cljs.core._nth.call(null,chunk__8152_8184,i__8154_8186);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8182,class_8187)))
{} else
{elem__$1.className = (((class_name_8182 === ""))?class_8187:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_8182)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_8187)));
}
{
var G__8188 = seq__8151_8183;
var G__8189 = chunk__8152_8184;
var G__8190 = count__8153_8185;
var G__8191 = (i__8154_8186 + (1));
seq__8151_8183 = G__8188;
chunk__8152_8184 = G__8189;
count__8153_8185 = G__8190;
i__8154_8186 = G__8191;
continue;
}
} else
{var temp__4126__auto___8192 = cljs.core.seq.call(null,seq__8151_8183);if(temp__4126__auto___8192)
{var seq__8151_8193__$1 = temp__4126__auto___8192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8151_8193__$1))
{var c__4290__auto___8194 = cljs.core.chunk_first.call(null,seq__8151_8193__$1);{
var G__8195 = cljs.core.chunk_rest.call(null,seq__8151_8193__$1);
var G__8196 = c__4290__auto___8194;
var G__8197 = cljs.core.count.call(null,c__4290__auto___8194);
var G__8198 = (0);
seq__8151_8183 = G__8195;
chunk__8152_8184 = G__8196;
count__8153_8185 = G__8197;
i__8154_8186 = G__8198;
continue;
}
} else
{var class_8199 = cljs.core.first.call(null,seq__8151_8193__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8182,class_8199)))
{} else
{elem__$1.className = (((class_name_8182 === ""))?class_8199:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_8182)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_8199)));
}
{
var G__8200 = cljs.core.next.call(null,seq__8151_8193__$1);
var G__8201 = null;
var G__8202 = (0);
var G__8203 = (0);
seq__8151_8183 = G__8200;
chunk__8152_8184 = G__8201;
count__8153_8185 = G__8202;
i__8154_8186 = G__8203;
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
var G__8204__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8155_8205 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8156_8206 = null;var count__8157_8207 = (0);var i__8158_8208 = (0);while(true){
if((i__8158_8208 < count__8157_8207))
{var c_8209 = cljs.core._nth.call(null,chunk__8156_8206,i__8158_8208);add_class_BANG_.call(null,elem__$1,c_8209);
{
var G__8210 = seq__8155_8205;
var G__8211 = chunk__8156_8206;
var G__8212 = count__8157_8207;
var G__8213 = (i__8158_8208 + (1));
seq__8155_8205 = G__8210;
chunk__8156_8206 = G__8211;
count__8157_8207 = G__8212;
i__8158_8208 = G__8213;
continue;
}
} else
{var temp__4126__auto___8214 = cljs.core.seq.call(null,seq__8155_8205);if(temp__4126__auto___8214)
{var seq__8155_8215__$1 = temp__4126__auto___8214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8155_8215__$1))
{var c__4290__auto___8216 = cljs.core.chunk_first.call(null,seq__8155_8215__$1);{
var G__8217 = cljs.core.chunk_rest.call(null,seq__8155_8215__$1);
var G__8218 = c__4290__auto___8216;
var G__8219 = cljs.core.count.call(null,c__4290__auto___8216);
var G__8220 = (0);
seq__8155_8205 = G__8217;
chunk__8156_8206 = G__8218;
count__8157_8207 = G__8219;
i__8158_8208 = G__8220;
continue;
}
} else
{var c_8221 = cljs.core.first.call(null,seq__8155_8215__$1);add_class_BANG_.call(null,elem__$1,c_8221);
{
var G__8222 = cljs.core.next.call(null,seq__8155_8215__$1);
var G__8223 = null;
var G__8224 = (0);
var G__8225 = (0);
seq__8155_8205 = G__8222;
chunk__8156_8206 = G__8223;
count__8157_8207 = G__8224;
i__8158_8208 = G__8225;
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
var G__8204 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8204__delegate.call(this,elem,classes,more_classes);};
G__8204.cljs$lang$maxFixedArity = 2;
G__8204.cljs$lang$applyTo = (function (arglist__8226){
var elem = cljs.core.first(arglist__8226);
arglist__8226 = cljs.core.next(arglist__8226);
var classes = cljs.core.first(arglist__8226);
var more_classes = cljs.core.rest(arglist__8226);
return G__8204__delegate(elem,classes,more_classes);
});
G__8204.cljs$core$IFn$_invoke$arity$variadic = G__8204__delegate;
return G__8204;
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
var G__8227 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__8227;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___8236 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___8236))
{var class_list_8237 = temp__4124__auto___8236;class_list_8237.remove(class$__$1);
} else
{var class_name_8238 = elem__$1.className;var new_class_name_8239 = dommy.attrs.remove_class_str.call(null,class_name_8238,class$__$1);if((class_name_8238 === new_class_name_8239))
{} else
{elem__$1.className = new_class_name_8239;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8240__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8232 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8233 = null;var count__8234 = (0);var i__8235 = (0);while(true){
if((i__8235 < count__8234))
{var c = cljs.core._nth.call(null,chunk__8233,i__8235);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8241 = seq__8232;
var G__8242 = chunk__8233;
var G__8243 = count__8234;
var G__8244 = (i__8235 + (1));
seq__8232 = G__8241;
chunk__8233 = G__8242;
count__8234 = G__8243;
i__8235 = G__8244;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8232);if(temp__4126__auto__)
{var seq__8232__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8232__$1))
{var c__4290__auto__ = cljs.core.chunk_first.call(null,seq__8232__$1);{
var G__8245 = cljs.core.chunk_rest.call(null,seq__8232__$1);
var G__8246 = c__4290__auto__;
var G__8247 = cljs.core.count.call(null,c__4290__auto__);
var G__8248 = (0);
seq__8232 = G__8245;
chunk__8233 = G__8246;
count__8234 = G__8247;
i__8235 = G__8248;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8232__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8249 = cljs.core.next.call(null,seq__8232__$1);
var G__8250 = null;
var G__8251 = (0);
var G__8252 = (0);
seq__8232 = G__8249;
chunk__8233 = G__8250;
count__8234 = G__8251;
i__8235 = G__8252;
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
var G__8240 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8240__delegate.call(this,elem,class$,classes);};
G__8240.cljs$lang$maxFixedArity = 2;
G__8240.cljs$lang$applyTo = (function (arglist__8253){
var elem = cljs.core.first(arglist__8253);
arglist__8253 = cljs.core.next(arglist__8253);
var class$ = cljs.core.first(arglist__8253);
var classes = cljs.core.rest(arglist__8253);
return G__8240__delegate(elem,class$,classes);
});
G__8240.cljs$core$IFn$_invoke$arity$variadic = G__8240__delegate;
return G__8240;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___8254 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___8254))
{var class_list_8255 = temp__4124__auto___8254;class_list_8255.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8258){var vec__8259 = p__8258;var k = cljs.core.nth.call(null,vec__8259,(0),null);var v = cljs.core.nth.call(null,vec__8259,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8266_8272 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__8267_8273 = null;var count__8268_8274 = (0);var i__8269_8275 = (0);while(true){
if((i__8269_8275 < count__8268_8274))
{var vec__8270_8276 = cljs.core._nth.call(null,chunk__8267_8273,i__8269_8275);var k_8277 = cljs.core.nth.call(null,vec__8270_8276,(0),null);var v_8278 = cljs.core.nth.call(null,vec__8270_8276,(1),null);(style[cljs.core.name.call(null,k_8277)] = v_8278);
{
var G__8279 = seq__8266_8272;
var G__8280 = chunk__8267_8273;
var G__8281 = count__8268_8274;
var G__8282 = (i__8269_8275 + (1));
seq__8266_8272 = G__8279;
chunk__8267_8273 = G__8280;
count__8268_8274 = G__8281;
i__8269_8275 = G__8282;
continue;
}
} else
{var temp__4126__auto___8283 = cljs.core.seq.call(null,seq__8266_8272);if(temp__4126__auto___8283)
{var seq__8266_8284__$1 = temp__4126__auto___8283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8266_8284__$1))
{var c__4290__auto___8285 = cljs.core.chunk_first.call(null,seq__8266_8284__$1);{
var G__8286 = cljs.core.chunk_rest.call(null,seq__8266_8284__$1);
var G__8287 = c__4290__auto___8285;
var G__8288 = cljs.core.count.call(null,c__4290__auto___8285);
var G__8289 = (0);
seq__8266_8272 = G__8286;
chunk__8267_8273 = G__8287;
count__8268_8274 = G__8288;
i__8269_8275 = G__8289;
continue;
}
} else
{var vec__8271_8290 = cljs.core.first.call(null,seq__8266_8284__$1);var k_8291 = cljs.core.nth.call(null,vec__8271_8290,(0),null);var v_8292 = cljs.core.nth.call(null,vec__8271_8290,(1),null);(style[cljs.core.name.call(null,k_8291)] = v_8292);
{
var G__8293 = cljs.core.next.call(null,seq__8266_8284__$1);
var G__8294 = null;
var G__8295 = (0);
var G__8296 = (0);
seq__8266_8272 = G__8293;
chunk__8267_8273 = G__8294;
count__8268_8274 = G__8295;
i__8269_8275 = G__8296;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8297){
var elem = cljs.core.first(arglist__8297);
var kvs = cljs.core.rest(arglist__8297);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8304_8310 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__8305_8311 = null;var count__8306_8312 = (0);var i__8307_8313 = (0);while(true){
if((i__8307_8313 < count__8306_8312))
{var vec__8308_8314 = cljs.core._nth.call(null,chunk__8305_8311,i__8307_8313);var k_8315 = cljs.core.nth.call(null,vec__8308_8314,(0),null);var v_8316 = cljs.core.nth.call(null,vec__8308_8314,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8315,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_8316)+"px"));
{
var G__8317 = seq__8304_8310;
var G__8318 = chunk__8305_8311;
var G__8319 = count__8306_8312;
var G__8320 = (i__8307_8313 + (1));
seq__8304_8310 = G__8317;
chunk__8305_8311 = G__8318;
count__8306_8312 = G__8319;
i__8307_8313 = G__8320;
continue;
}
} else
{var temp__4126__auto___8321 = cljs.core.seq.call(null,seq__8304_8310);if(temp__4126__auto___8321)
{var seq__8304_8322__$1 = temp__4126__auto___8321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8304_8322__$1))
{var c__4290__auto___8323 = cljs.core.chunk_first.call(null,seq__8304_8322__$1);{
var G__8324 = cljs.core.chunk_rest.call(null,seq__8304_8322__$1);
var G__8325 = c__4290__auto___8323;
var G__8326 = cljs.core.count.call(null,c__4290__auto___8323);
var G__8327 = (0);
seq__8304_8310 = G__8324;
chunk__8305_8311 = G__8325;
count__8306_8312 = G__8326;
i__8307_8313 = G__8327;
continue;
}
} else
{var vec__8309_8328 = cljs.core.first.call(null,seq__8304_8322__$1);var k_8329 = cljs.core.nth.call(null,vec__8309_8328,(0),null);var v_8330 = cljs.core.nth.call(null,vec__8309_8328,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8329,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_8330)+"px"));
{
var G__8331 = cljs.core.next.call(null,seq__8304_8322__$1);
var G__8332 = null;
var G__8333 = (0);
var G__8334 = (0);
seq__8304_8310 = G__8331;
chunk__8305_8311 = G__8332;
count__8306_8312 = G__8333;
i__8307_8313 = G__8334;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8335){
var elem = cljs.core.first(arglist__8335);
var kvs = cljs.core.rest(arglist__8335);
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
{var G__8344 = dommy.template.__GT_node_like.call(null,elem);(G__8344[cljs.core.name.call(null,k)] = v);
return G__8344;
} else
{var G__8345 = dommy.template.__GT_node_like.call(null,elem);G__8345.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__8345;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8352__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8346_8353 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__8347_8354 = null;var count__8348_8355 = (0);var i__8349_8356 = (0);while(true){
if((i__8349_8356 < count__8348_8355))
{var vec__8350_8357 = cljs.core._nth.call(null,chunk__8347_8354,i__8349_8356);var k_8358__$1 = cljs.core.nth.call(null,vec__8350_8357,(0),null);var v_8359__$1 = cljs.core.nth.call(null,vec__8350_8357,(1),null);set_attr_BANG_.call(null,elem__$1,k_8358__$1,v_8359__$1);
{
var G__8360 = seq__8346_8353;
var G__8361 = chunk__8347_8354;
var G__8362 = count__8348_8355;
var G__8363 = (i__8349_8356 + (1));
seq__8346_8353 = G__8360;
chunk__8347_8354 = G__8361;
count__8348_8355 = G__8362;
i__8349_8356 = G__8363;
continue;
}
} else
{var temp__4126__auto___8364 = cljs.core.seq.call(null,seq__8346_8353);if(temp__4126__auto___8364)
{var seq__8346_8365__$1 = temp__4126__auto___8364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8346_8365__$1))
{var c__4290__auto___8366 = cljs.core.chunk_first.call(null,seq__8346_8365__$1);{
var G__8367 = cljs.core.chunk_rest.call(null,seq__8346_8365__$1);
var G__8368 = c__4290__auto___8366;
var G__8369 = cljs.core.count.call(null,c__4290__auto___8366);
var G__8370 = (0);
seq__8346_8353 = G__8367;
chunk__8347_8354 = G__8368;
count__8348_8355 = G__8369;
i__8349_8356 = G__8370;
continue;
}
} else
{var vec__8351_8371 = cljs.core.first.call(null,seq__8346_8365__$1);var k_8372__$1 = cljs.core.nth.call(null,vec__8351_8371,(0),null);var v_8373__$1 = cljs.core.nth.call(null,vec__8351_8371,(1),null);set_attr_BANG_.call(null,elem__$1,k_8372__$1,v_8373__$1);
{
var G__8374 = cljs.core.next.call(null,seq__8346_8365__$1);
var G__8375 = null;
var G__8376 = (0);
var G__8377 = (0);
seq__8346_8353 = G__8374;
chunk__8347_8354 = G__8375;
count__8348_8355 = G__8376;
i__8349_8356 = G__8377;
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
var G__8352 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8352__delegate.call(this,elem,k,v,kvs);};
G__8352.cljs$lang$maxFixedArity = 3;
G__8352.cljs$lang$applyTo = (function (arglist__8378){
var elem = cljs.core.first(arglist__8378);
arglist__8378 = cljs.core.next(arglist__8378);
var k = cljs.core.first(arglist__8378);
arglist__8378 = cljs.core.next(arglist__8378);
var v = cljs.core.first(arglist__8378);
var kvs = cljs.core.rest(arglist__8378);
return G__8352__delegate(elem,k,v,kvs);
});
G__8352.cljs$core$IFn$_invoke$arity$variadic = G__8352__delegate;
return G__8352;
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
var G__8387__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8383_8388 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8384_8389 = null;var count__8385_8390 = (0);var i__8386_8391 = (0);while(true){
if((i__8386_8391 < count__8385_8390))
{var k_8392__$1 = cljs.core._nth.call(null,chunk__8384_8389,i__8386_8391);remove_attr_BANG_.call(null,elem__$1,k_8392__$1);
{
var G__8393 = seq__8383_8388;
var G__8394 = chunk__8384_8389;
var G__8395 = count__8385_8390;
var G__8396 = (i__8386_8391 + (1));
seq__8383_8388 = G__8393;
chunk__8384_8389 = G__8394;
count__8385_8390 = G__8395;
i__8386_8391 = G__8396;
continue;
}
} else
{var temp__4126__auto___8397 = cljs.core.seq.call(null,seq__8383_8388);if(temp__4126__auto___8397)
{var seq__8383_8398__$1 = temp__4126__auto___8397;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8383_8398__$1))
{var c__4290__auto___8399 = cljs.core.chunk_first.call(null,seq__8383_8398__$1);{
var G__8400 = cljs.core.chunk_rest.call(null,seq__8383_8398__$1);
var G__8401 = c__4290__auto___8399;
var G__8402 = cljs.core.count.call(null,c__4290__auto___8399);
var G__8403 = (0);
seq__8383_8388 = G__8400;
chunk__8384_8389 = G__8401;
count__8385_8390 = G__8402;
i__8386_8391 = G__8403;
continue;
}
} else
{var k_8404__$1 = cljs.core.first.call(null,seq__8383_8398__$1);remove_attr_BANG_.call(null,elem__$1,k_8404__$1);
{
var G__8405 = cljs.core.next.call(null,seq__8383_8398__$1);
var G__8406 = null;
var G__8407 = (0);
var G__8408 = (0);
seq__8383_8388 = G__8405;
chunk__8384_8389 = G__8406;
count__8385_8390 = G__8407;
i__8386_8391 = G__8408;
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
var G__8387 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8387__delegate.call(this,elem,k,ks);};
G__8387.cljs$lang$maxFixedArity = 2;
G__8387.cljs$lang$applyTo = (function (arglist__8409){
var elem = cljs.core.first(arglist__8409);
arglist__8409 = cljs.core.next(arglist__8409);
var k = cljs.core.first(arglist__8409);
var ks = cljs.core.rest(arglist__8409);
return G__8387__delegate(elem,k,ks);
});
G__8387.cljs$core$IFn$_invoke$arity$variadic = G__8387__delegate;
return G__8387;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8411 = dommy.template.__GT_node_like.call(null,elem);G__8411.style.display = ((show_QMARK_)?"":"none");
return G__8411;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8413 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8413,false);
return G__8413;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8415 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8415,true);
return G__8415;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8417 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8417["constructor"] = Object);
return G__8417;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map