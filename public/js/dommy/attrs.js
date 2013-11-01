goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__2950__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__2950__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__2950__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__8466 = (i + class$.length);
start_from = G__8466;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___8491 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8491))
{var class_list_8492 = temp__4090__auto___8491;var seq__8479_8493 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8480_8494 = null;var count__8481_8495 = 0;var i__8482_8496 = 0;while(true){
if((i__8482_8496 < count__8481_8495))
{var class_8497 = cljs.core._nth.call(null,chunk__8480_8494,i__8482_8496);class_list_8492.add(class_8497);
{
var G__8498 = seq__8479_8493;
var G__8499 = chunk__8480_8494;
var G__8500 = count__8481_8495;
var G__8501 = (i__8482_8496 + 1);
seq__8479_8493 = G__8498;
chunk__8480_8494 = G__8499;
count__8481_8495 = G__8500;
i__8482_8496 = G__8501;
continue;
}
} else
{var temp__4092__auto___8502 = cljs.core.seq.call(null,seq__8479_8493);if(temp__4092__auto___8502)
{var seq__8479_8503__$1 = temp__4092__auto___8502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8479_8503__$1))
{var c__3668__auto___8504 = cljs.core.chunk_first.call(null,seq__8479_8503__$1);{
var G__8505 = cljs.core.chunk_rest.call(null,seq__8479_8503__$1);
var G__8506 = c__3668__auto___8504;
var G__8507 = cljs.core.count.call(null,c__3668__auto___8504);
var G__8508 = 0;
seq__8479_8493 = G__8505;
chunk__8480_8494 = G__8506;
count__8481_8495 = G__8507;
i__8482_8496 = G__8508;
continue;
}
} else
{var class_8509 = cljs.core.first.call(null,seq__8479_8503__$1);class_list_8492.add(class_8509);
{
var G__8510 = cljs.core.next.call(null,seq__8479_8503__$1);
var G__8511 = null;
var G__8512 = 0;
var G__8513 = 0;
seq__8479_8493 = G__8510;
chunk__8480_8494 = G__8511;
count__8481_8495 = G__8512;
i__8482_8496 = G__8513;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8514 = elem__$1.className;var seq__8483_8515 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8484_8516 = null;var count__8485_8517 = 0;var i__8486_8518 = 0;while(true){
if((i__8486_8518 < count__8485_8517))
{var class_8519 = cljs.core._nth.call(null,chunk__8484_8516,i__8486_8518);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8514,class_8519)))
{} else
{elem__$1.className = (((class_name_8514 === ""))?class_8519:[cljs.core.str(class_name_8514),cljs.core.str(" "),cljs.core.str(class_8519)].join(''));
}
{
var G__8520 = seq__8483_8515;
var G__8521 = chunk__8484_8516;
var G__8522 = count__8485_8517;
var G__8523 = (i__8486_8518 + 1);
seq__8483_8515 = G__8520;
chunk__8484_8516 = G__8521;
count__8485_8517 = G__8522;
i__8486_8518 = G__8523;
continue;
}
} else
{var temp__4092__auto___8524 = cljs.core.seq.call(null,seq__8483_8515);if(temp__4092__auto___8524)
{var seq__8483_8525__$1 = temp__4092__auto___8524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8483_8525__$1))
{var c__3668__auto___8526 = cljs.core.chunk_first.call(null,seq__8483_8525__$1);{
var G__8527 = cljs.core.chunk_rest.call(null,seq__8483_8525__$1);
var G__8528 = c__3668__auto___8526;
var G__8529 = cljs.core.count.call(null,c__3668__auto___8526);
var G__8530 = 0;
seq__8483_8515 = G__8527;
chunk__8484_8516 = G__8528;
count__8485_8517 = G__8529;
i__8486_8518 = G__8530;
continue;
}
} else
{var class_8531 = cljs.core.first.call(null,seq__8483_8525__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8514,class_8531)))
{} else
{elem__$1.className = (((class_name_8514 === ""))?class_8531:[cljs.core.str(class_name_8514),cljs.core.str(" "),cljs.core.str(class_8531)].join(''));
}
{
var G__8532 = cljs.core.next.call(null,seq__8483_8525__$1);
var G__8533 = null;
var G__8534 = 0;
var G__8535 = 0;
seq__8483_8515 = G__8532;
chunk__8484_8516 = G__8533;
count__8485_8517 = G__8534;
i__8486_8518 = G__8535;
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
var G__8536__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8487_8537 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8488_8538 = null;var count__8489_8539 = 0;var i__8490_8540 = 0;while(true){
if((i__8490_8540 < count__8489_8539))
{var c_8541 = cljs.core._nth.call(null,chunk__8488_8538,i__8490_8540);add_class_BANG_.call(null,elem__$1,c_8541);
{
var G__8542 = seq__8487_8537;
var G__8543 = chunk__8488_8538;
var G__8544 = count__8489_8539;
var G__8545 = (i__8490_8540 + 1);
seq__8487_8537 = G__8542;
chunk__8488_8538 = G__8543;
count__8489_8539 = G__8544;
i__8490_8540 = G__8545;
continue;
}
} else
{var temp__4092__auto___8546 = cljs.core.seq.call(null,seq__8487_8537);if(temp__4092__auto___8546)
{var seq__8487_8547__$1 = temp__4092__auto___8546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8487_8547__$1))
{var c__3668__auto___8548 = cljs.core.chunk_first.call(null,seq__8487_8547__$1);{
var G__8549 = cljs.core.chunk_rest.call(null,seq__8487_8547__$1);
var G__8550 = c__3668__auto___8548;
var G__8551 = cljs.core.count.call(null,c__3668__auto___8548);
var G__8552 = 0;
seq__8487_8537 = G__8549;
chunk__8488_8538 = G__8550;
count__8489_8539 = G__8551;
i__8490_8540 = G__8552;
continue;
}
} else
{var c_8553 = cljs.core.first.call(null,seq__8487_8547__$1);add_class_BANG_.call(null,elem__$1,c_8553);
{
var G__8554 = cljs.core.next.call(null,seq__8487_8547__$1);
var G__8555 = null;
var G__8556 = 0;
var G__8557 = 0;
seq__8487_8537 = G__8554;
chunk__8488_8538 = G__8555;
count__8489_8539 = G__8556;
i__8490_8540 = G__8557;
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
var G__8536 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8536__delegate.call(this,elem,classes,more_classes);};
G__8536.cljs$lang$maxFixedArity = 2;
G__8536.cljs$lang$applyTo = (function (arglist__8558){
var elem = cljs.core.first(arglist__8558);
arglist__8558 = cljs.core.next(arglist__8558);
var classes = cljs.core.first(arglist__8558);
var more_classes = cljs.core.rest(arglist__8558);
return G__8536__delegate(elem,classes,more_classes);
});
G__8536.cljs$core$IFn$_invoke$arity$variadic = G__8536__delegate;
return G__8536;
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
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__8559 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8559;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8568 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8568))
{var class_list_8569 = temp__4090__auto___8568;class_list_8569.remove(class$__$1);
} else
{var class_name_8570 = elem__$1.className;var new_class_name_8571 = dommy.attrs.remove_class_str.call(null,class_name_8570,class$__$1);if((class_name_8570 === new_class_name_8571))
{} else
{elem__$1.className = new_class_name_8571;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8572__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8564 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8565 = null;var count__8566 = 0;var i__8567 = 0;while(true){
if((i__8567 < count__8566))
{var c = cljs.core._nth.call(null,chunk__8565,i__8567);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8573 = seq__8564;
var G__8574 = chunk__8565;
var G__8575 = count__8566;
var G__8576 = (i__8567 + 1);
seq__8564 = G__8573;
chunk__8565 = G__8574;
count__8566 = G__8575;
i__8567 = G__8576;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8564);if(temp__4092__auto__)
{var seq__8564__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8564__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__8564__$1);{
var G__8577 = cljs.core.chunk_rest.call(null,seq__8564__$1);
var G__8578 = c__3668__auto__;
var G__8579 = cljs.core.count.call(null,c__3668__auto__);
var G__8580 = 0;
seq__8564 = G__8577;
chunk__8565 = G__8578;
count__8566 = G__8579;
i__8567 = G__8580;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8564__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8581 = cljs.core.next.call(null,seq__8564__$1);
var G__8582 = null;
var G__8583 = 0;
var G__8584 = 0;
seq__8564 = G__8581;
chunk__8565 = G__8582;
count__8566 = G__8583;
i__8567 = G__8584;
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
var G__8572 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8572__delegate.call(this,elem,class$,classes);};
G__8572.cljs$lang$maxFixedArity = 2;
G__8572.cljs$lang$applyTo = (function (arglist__8585){
var elem = cljs.core.first(arglist__8585);
arglist__8585 = cljs.core.next(arglist__8585);
var class$ = cljs.core.first(arglist__8585);
var classes = cljs.core.rest(arglist__8585);
return G__8572__delegate(elem,class$,classes);
});
G__8572.cljs$core$IFn$_invoke$arity$variadic = G__8572__delegate;
return G__8572;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___8586 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___8586))
{var class_list_8587 = temp__4090__auto___8586;class_list_8587.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8590){var vec__8591 = p__8590;var k = cljs.core.nth.call(null,vec__8591,0,null);var v = cljs.core.nth.call(null,vec__8591,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8598_8604 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8599_8605 = null;var count__8600_8606 = 0;var i__8601_8607 = 0;while(true){
if((i__8601_8607 < count__8600_8606))
{var vec__8602_8608 = cljs.core._nth.call(null,chunk__8599_8605,i__8601_8607);var k_8609 = cljs.core.nth.call(null,vec__8602_8608,0,null);var v_8610 = cljs.core.nth.call(null,vec__8602_8608,1,null);(style[cljs.core.name.call(null,k_8609)] = v_8610);
{
var G__8611 = seq__8598_8604;
var G__8612 = chunk__8599_8605;
var G__8613 = count__8600_8606;
var G__8614 = (i__8601_8607 + 1);
seq__8598_8604 = G__8611;
chunk__8599_8605 = G__8612;
count__8600_8606 = G__8613;
i__8601_8607 = G__8614;
continue;
}
} else
{var temp__4092__auto___8615 = cljs.core.seq.call(null,seq__8598_8604);if(temp__4092__auto___8615)
{var seq__8598_8616__$1 = temp__4092__auto___8615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8598_8616__$1))
{var c__3668__auto___8617 = cljs.core.chunk_first.call(null,seq__8598_8616__$1);{
var G__8618 = cljs.core.chunk_rest.call(null,seq__8598_8616__$1);
var G__8619 = c__3668__auto___8617;
var G__8620 = cljs.core.count.call(null,c__3668__auto___8617);
var G__8621 = 0;
seq__8598_8604 = G__8618;
chunk__8599_8605 = G__8619;
count__8600_8606 = G__8620;
i__8601_8607 = G__8621;
continue;
}
} else
{var vec__8603_8622 = cljs.core.first.call(null,seq__8598_8616__$1);var k_8623 = cljs.core.nth.call(null,vec__8603_8622,0,null);var v_8624 = cljs.core.nth.call(null,vec__8603_8622,1,null);(style[cljs.core.name.call(null,k_8623)] = v_8624);
{
var G__8625 = cljs.core.next.call(null,seq__8598_8616__$1);
var G__8626 = null;
var G__8627 = 0;
var G__8628 = 0;
seq__8598_8604 = G__8625;
chunk__8599_8605 = G__8626;
count__8600_8606 = G__8627;
i__8601_8607 = G__8628;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8629){
var elem = cljs.core.first(arglist__8629);
var kvs = cljs.core.rest(arglist__8629);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8636_8642 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8637_8643 = null;var count__8638_8644 = 0;var i__8639_8645 = 0;while(true){
if((i__8639_8645 < count__8638_8644))
{var vec__8640_8646 = cljs.core._nth.call(null,chunk__8637_8643,i__8639_8645);var k_8647 = cljs.core.nth.call(null,vec__8640_8646,0,null);var v_8648 = cljs.core.nth.call(null,vec__8640_8646,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8647,[cljs.core.str(v_8648),cljs.core.str("px")].join(''));
{
var G__8649 = seq__8636_8642;
var G__8650 = chunk__8637_8643;
var G__8651 = count__8638_8644;
var G__8652 = (i__8639_8645 + 1);
seq__8636_8642 = G__8649;
chunk__8637_8643 = G__8650;
count__8638_8644 = G__8651;
i__8639_8645 = G__8652;
continue;
}
} else
{var temp__4092__auto___8653 = cljs.core.seq.call(null,seq__8636_8642);if(temp__4092__auto___8653)
{var seq__8636_8654__$1 = temp__4092__auto___8653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8636_8654__$1))
{var c__3668__auto___8655 = cljs.core.chunk_first.call(null,seq__8636_8654__$1);{
var G__8656 = cljs.core.chunk_rest.call(null,seq__8636_8654__$1);
var G__8657 = c__3668__auto___8655;
var G__8658 = cljs.core.count.call(null,c__3668__auto___8655);
var G__8659 = 0;
seq__8636_8642 = G__8656;
chunk__8637_8643 = G__8657;
count__8638_8644 = G__8658;
i__8639_8645 = G__8659;
continue;
}
} else
{var vec__8641_8660 = cljs.core.first.call(null,seq__8636_8654__$1);var k_8661 = cljs.core.nth.call(null,vec__8641_8660,0,null);var v_8662 = cljs.core.nth.call(null,vec__8641_8660,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8661,[cljs.core.str(v_8662),cljs.core.str("px")].join(''));
{
var G__8663 = cljs.core.next.call(null,seq__8636_8654__$1);
var G__8664 = null;
var G__8665 = 0;
var G__8666 = 0;
seq__8636_8642 = G__8663;
chunk__8637_8643 = G__8664;
count__8638_8644 = G__8665;
i__8639_8645 = G__8666;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8667){
var elem = cljs.core.first(arglist__8667);
var kvs = cljs.core.rest(arglist__8667);
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
{var G__8676 = dommy.template.__GT_node_like.call(null,elem);(G__8676[cljs.core.name.call(null,k)] = v);
return G__8676;
} else
{var G__8677 = dommy.template.__GT_node_like.call(null,elem);G__8677.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8677;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8684__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8678_8685 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__8679_8686 = null;var count__8680_8687 = 0;var i__8681_8688 = 0;while(true){
if((i__8681_8688 < count__8680_8687))
{var vec__8682_8689 = cljs.core._nth.call(null,chunk__8679_8686,i__8681_8688);var k_8690__$1 = cljs.core.nth.call(null,vec__8682_8689,0,null);var v_8691__$1 = cljs.core.nth.call(null,vec__8682_8689,1,null);set_attr_BANG_.call(null,elem__$1,k_8690__$1,v_8691__$1);
{
var G__8692 = seq__8678_8685;
var G__8693 = chunk__8679_8686;
var G__8694 = count__8680_8687;
var G__8695 = (i__8681_8688 + 1);
seq__8678_8685 = G__8692;
chunk__8679_8686 = G__8693;
count__8680_8687 = G__8694;
i__8681_8688 = G__8695;
continue;
}
} else
{var temp__4092__auto___8696 = cljs.core.seq.call(null,seq__8678_8685);if(temp__4092__auto___8696)
{var seq__8678_8697__$1 = temp__4092__auto___8696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8678_8697__$1))
{var c__3668__auto___8698 = cljs.core.chunk_first.call(null,seq__8678_8697__$1);{
var G__8699 = cljs.core.chunk_rest.call(null,seq__8678_8697__$1);
var G__8700 = c__3668__auto___8698;
var G__8701 = cljs.core.count.call(null,c__3668__auto___8698);
var G__8702 = 0;
seq__8678_8685 = G__8699;
chunk__8679_8686 = G__8700;
count__8680_8687 = G__8701;
i__8681_8688 = G__8702;
continue;
}
} else
{var vec__8683_8703 = cljs.core.first.call(null,seq__8678_8697__$1);var k_8704__$1 = cljs.core.nth.call(null,vec__8683_8703,0,null);var v_8705__$1 = cljs.core.nth.call(null,vec__8683_8703,1,null);set_attr_BANG_.call(null,elem__$1,k_8704__$1,v_8705__$1);
{
var G__8706 = cljs.core.next.call(null,seq__8678_8697__$1);
var G__8707 = null;
var G__8708 = 0;
var G__8709 = 0;
seq__8678_8685 = G__8706;
chunk__8679_8686 = G__8707;
count__8680_8687 = G__8708;
i__8681_8688 = G__8709;
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
var G__8684 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8684__delegate.call(this,elem,k,v,kvs);};
G__8684.cljs$lang$maxFixedArity = 3;
G__8684.cljs$lang$applyTo = (function (arglist__8710){
var elem = cljs.core.first(arglist__8710);
arglist__8710 = cljs.core.next(arglist__8710);
var k = cljs.core.first(arglist__8710);
arglist__8710 = cljs.core.next(arglist__8710);
var v = cljs.core.first(arglist__8710);
var kvs = cljs.core.rest(arglist__8710);
return G__8684__delegate(elem,k,v,kvs);
});
G__8684.cljs$core$IFn$_invoke$arity$variadic = G__8684__delegate;
return G__8684;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__8719__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8715_8720 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8716_8721 = null;var count__8717_8722 = 0;var i__8718_8723 = 0;while(true){
if((i__8718_8723 < count__8717_8722))
{var k_8724__$1 = cljs.core._nth.call(null,chunk__8716_8721,i__8718_8723);remove_attr_BANG_.call(null,elem__$1,k_8724__$1);
{
var G__8725 = seq__8715_8720;
var G__8726 = chunk__8716_8721;
var G__8727 = count__8717_8722;
var G__8728 = (i__8718_8723 + 1);
seq__8715_8720 = G__8725;
chunk__8716_8721 = G__8726;
count__8717_8722 = G__8727;
i__8718_8723 = G__8728;
continue;
}
} else
{var temp__4092__auto___8729 = cljs.core.seq.call(null,seq__8715_8720);if(temp__4092__auto___8729)
{var seq__8715_8730__$1 = temp__4092__auto___8729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8715_8730__$1))
{var c__3668__auto___8731 = cljs.core.chunk_first.call(null,seq__8715_8730__$1);{
var G__8732 = cljs.core.chunk_rest.call(null,seq__8715_8730__$1);
var G__8733 = c__3668__auto___8731;
var G__8734 = cljs.core.count.call(null,c__3668__auto___8731);
var G__8735 = 0;
seq__8715_8720 = G__8732;
chunk__8716_8721 = G__8733;
count__8717_8722 = G__8734;
i__8718_8723 = G__8735;
continue;
}
} else
{var k_8736__$1 = cljs.core.first.call(null,seq__8715_8730__$1);remove_attr_BANG_.call(null,elem__$1,k_8736__$1);
{
var G__8737 = cljs.core.next.call(null,seq__8715_8730__$1);
var G__8738 = null;
var G__8739 = 0;
var G__8740 = 0;
seq__8715_8720 = G__8737;
chunk__8716_8721 = G__8738;
count__8717_8722 = G__8739;
i__8718_8723 = G__8740;
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
var G__8719 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8719__delegate.call(this,elem,k,ks);};
G__8719.cljs$lang$maxFixedArity = 2;
G__8719.cljs$lang$applyTo = (function (arglist__8741){
var elem = cljs.core.first(arglist__8741);
arglist__8741 = cljs.core.next(arglist__8741);
var k = cljs.core.first(arglist__8741);
var ks = cljs.core.rest(arglist__8741);
return G__8719__delegate(elem,k,ks);
});
G__8719.cljs$core$IFn$_invoke$arity$variadic = G__8719__delegate;
return G__8719;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8743 = dommy.template.__GT_node_like.call(null,elem);G__8743.style.display = ((show_QMARK_)?"":"none");
return G__8743;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8745 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8745,false);
return G__8745;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8747 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8747,true);
return G__8747;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8749 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8749["constructor"] = Object);
return G__8749;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//@ sourceMappingURL=attrs.js.map