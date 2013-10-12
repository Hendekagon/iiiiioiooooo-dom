goog.provide('iiiiioiooooo.ui');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.browser.event');
goog.require('iiiiioiooooo.core.structure');
goog.require('cljs.reader');
goog.require('goog.events.KeyCodes');
goog.require('iiiiioiooooo.style');
goog.require('cljs.analyzer');
goog.require('dommy.core');
goog.require('cljs.compiler');
goog.require('goog.events.KeyHandler');
iiiiioiooooo.ui.mouse = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([0,0], true));
iiiiioiooooo.ui.events = cljs.core.ObjMap.fromObject(["\uFDD0'submit","\uFDD0'dragstart","\uFDD0'cut","\uFDD0'losecapture","\uFDD0'touchmove","\uFDD0'touchcancel","\uFDD0'paste","\uFDD0'pageshow","\uFDD0'contextmenu","\uFDD0'mouseout","\uFDD0'dragover","\uFDD0'click","\uFDD0'load","\uFDD0'touchend","\uFDD0'hashchange","\uFDD0'focus","\uFDD0'keydown","\uFDD0'connect","\uFDD0'drop","\uFDD0'pagehide","\uFDD0'message","\uFDD0'copy","\uFDD0'DOMFocusIn","\uFDD0'dragenter"],{"\uFDD0'submit":"\uFDD0'mousedown","\uFDD0'dragstart":"\uFDD0'popstate","\uFDD0'cut":"\uFDD0'resize","\uFDD0'losecapture":"\uFDD0'keypress","\uFDD0'touchmove":"\uFDD0'touchstart","\uFDD0'touchcancel":"\uFDD0'keyup","\uFDD0'paste":"\uFDD0'propertychange","\uFDD0'pageshow":"\uFDD0'scroll","\uFDD0'contextmenu":"\uFDD0'help","\uFDD0'mouseout":"\uFDD0'DOMFocusOut","\uFDD0'dragover":"\uFDD0'mousemove","\uFDD0'click":"\uFDD0'dblclick","\uFDD0'load":"\uFDD0'blur","\uFDD0'touchend":"\uFDD0'readystatechange","\uFDD0'hashchange":"\uFDD0'unload","\uFDD0'focus":"\uFDD0'mouseover","\uFDD0'keydown":"\uFDD0'deactivate","\uFDD0'connect":"\uFDD0'input","\uFDD0'drop":"\uFDD0'change","\uFDD0'pagehide":"\uFDD0'mouseup","\uFDD0'message":"\uFDD0'error","\uFDD0'copy":"\uFDD0'dragleave","\uFDD0'DOMFocusIn":"\uFDD0'select","\uFDD0'dragenter":"\uFDD0'selectstart"});
iiiiioiooooo.ui.alphabet = cljs.core.PersistentHashMap.fromArrays([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],["\uFDD0'a","\uFDD0'b","\uFDD0'c","\uFDD0'd","\uFDD0'e","\uFDD0'f","\uFDD0'g","\uFDD0'h","\uFDD0'i","\uFDD0'j","\uFDD0'k","\uFDD0'l","\uFDD0'm","\uFDD0'n","\uFDD0'o","\uFDD0'p","\uFDD0'q","\uFDD0'r","\uFDD0's","\uFDD0't","\uFDD0'u","\uFDD0'v","\uFDD0'w","\uFDD0'x","\uFDD0'y","\uFDD0'z"]);
iiiiioiooooo.ui.numbers = cljs.core.PersistentArrayMap.fromArrays([48,49,50,51,52,53,54,55,56,57],["\uFDD0'0","\uFDD0'1","\uFDD0'2","\uFDD0'3","\uFDD0'4","\uFDD0'5","\uFDD0'6","\uFDD0'7","\uFDD0'8","\uFDD0'9"]);
iiiiioiooooo.ui.keycode_to_keyword = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([32,192,33,34,35,36,37,38,39,8,40,9,107,13,45,109,46,16,144,17,145,18,19,20,186,27,59,91,187,219,188,220,93,189,221,190,222,191],["\uFDD0'space","\uFDD0'tilde","\uFDD0'pageup","\uFDD0'pagedown","\uFDD0'end","\uFDD0'home","\uFDD0'left","\uFDD0'up","\uFDD0'right","\uFDD0'backspace","\uFDD0'down","\uFDD0'tab","\uFDD0'equals","\uFDD0'enter","\uFDD0'insert","\uFDD0'minus","\uFDD0'delete","\uFDD0'shift","\uFDD0'numlock","\uFDD0'ctrl","\uFDD0'scrolllock","\uFDD0'alt","\uFDD0'break","\uFDD0'capslock","\uFDD0'semicolon","\uFDD0'esc","\uFDD0'semicolon","\uFDD0'leftmeta","\uFDD0'equals","\uFDD0'leftbracket","\uFDD0'comma","\uFDD0'backslash","\uFDD0'rightmeta","\uFDD0'minus","\uFDD0'rightbracket","\uFDD0'dot","\uFDD0'iiiiioiooooo.ui/apostrophe","\uFDD0'forwardslash"]),iiiiioiooooo.ui.alphabet,iiiiioiooooo.ui.numbers);
iiiiioiooooo.ui.keycode_to_keyword_up = cljs.core.zipmap.call(null,cljs.core.keys.call(null,iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.call(null,(function (k){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-up")].join(''));
}),cljs.core.vals.call(null,iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.keycode_to_keyword_down = cljs.core.zipmap.call(null,cljs.core.keys.call(null,iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.call(null,(function (k){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-down")].join(''));
}),cljs.core.vals.call(null,iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.is_modifier = (function is_modifier(keycode){
return cljs.core.PersistentHashSet.fromArray([16,17,18,20,91,93]).call(null,keycode);
});
iiiiioiooooo.ui.isnt_modifier = cljs.core.complement.call(null,iiiiioiooooo.ui.is_modifier);
iiiiioiooooo.ui.if_firefox = (function if_firefox(a,b){
try{if(cljs.core.truth_(KeyEvent))
{return a;
} else
{return null;
}
}catch (e3531){if(cljs.core.instance_QMARK_.call(null,Error,e3531))
{var er = e3531;
return b;
} else
{if("\uFDD0'else")
{throw e3531;
} else
{return null;
}
}
}});
/**
* @param {...*} var_args
*/
iiiiioiooooo.ui.log = (function() {
var log = null;
var log__1 = (function() { 
var G__3532__delegate = function (m){
return console.log(m);
};
var G__3532 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3532__delegate.call(this, m);
};
G__3532.cljs$lang$maxFixedArity = 0;
G__3532.cljs$lang$applyTo = (function (arglist__3533){
var m = cljs.core.seq(arglist__3533);;
return G__3532__delegate(m);
});
G__3532.cljs$lang$arity$variadic = G__3532__delegate;
return G__3532;
})()
;
var log__2 = (function (m1,m2){
return console.log(m1,m2);
});
var log__3 = (function (m1,m2,m3){
return console.log(m1,m2,m3);
});
var log__4 = (function (m1,m2,m3,m4){
return console.log(m1,m2,m3,m4);
});
log = function(m1,m2,m3,var_args){
var m4 = var_args;
switch(arguments.length){
default:
return log__1.cljs$lang$arity$variadic(m1,m2,m3, cljs.core.array_seq(arguments, 4));
case 2:
return log__2.call(this,m1,m2);
case 3:
return log__3.call(this,m1,m2,m3);
case 4:
return log__4.call(this,m1,m2,m3,m4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$lang$maxFixedArity = 4;
log.cljs$lang$applyTo = log__1.cljs$lang$applyTo;
log.cljs$lang$arity$variadic = log__1.cljs$lang$arity$variadic;
log.cljs$lang$arity$2 = log__2;
log.cljs$lang$arity$3 = log__3;
log.cljs$lang$arity$4 = log__4;
return log;
})()
;
/**
* Do the function f at regular intervals and send the results to g, starting with x
*/
iiiiioiooooo.ui.thread_STAR_ = (function() {
var thread_STAR_ = null;
var thread_STAR___3 = (function (f,x,n){
return window.setTimeout((function (x__$1){
return thread_STAR_.call(null,f,f.call(null,x__$1),n);
}),n,x);
});
var thread_STAR___4 = (function (g,f,x,n){
return window.setTimeout((function (x__$1){
g.call(null,x__$1);
return thread_STAR_.call(null,g,f,f.call(null,x__$1),n);
}),n,x);
});
thread_STAR_ = function(g,f,x,n){
switch(arguments.length){
case 3:
return thread_STAR___3.call(this,g,f,x);
case 4:
return thread_STAR___4.call(this,g,f,x,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thread_STAR_.cljs$lang$arity$3 = thread_STAR___3;
thread_STAR_.cljs$lang$arity$4 = thread_STAR___4;
return thread_STAR_;
})()
;
/**
* Do the function f at regular intervals and send the results to g, starting with x
*/
iiiiioiooooo.ui.repeat_STAR_ = (function repeat_STAR_(f,x,n){
return window.setInterval(f,n,x);
});
iiiiioiooooo.ui.to_str = (function to_str(n){
if((function (){var and__3941__auto__ = cljs.core.fn_QMARK_.call(null,n);
if(and__3941__auto__)
{return !(cljs.core.associative_QMARK_.call(null,n));
} else
{return and__3941__auto__;
}
})())
{return n.name.replace("_","-");
} else
{if("\uFDD0'default")
{return [cljs.core.str(n)].join('');
} else
{return null;
}
}
});
iiiiioiooooo.ui.to_svg = (function() {
var to_svg = null;
var to_svg__0 = (function (){
return cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"sexp"})], true);
});
var to_svg__1 = (function (n){
return cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"leaf"}),cljs.core.PersistentVector.fromArray(["\uFDD0'circle",cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'r"],{"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'r":16})], true),cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.ObjMap.fromObject(["\uFDD0'fill"],{"\uFDD0'fill":"red"}),[cljs.core.str(n)].join('')], true)], true);
});
var to_svg__2 = (function (n,c){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"branch"})], true),c);
});
to_svg = function(n,c){
switch(arguments.length){
case 0:
return to_svg__0.call(this);
case 1:
return to_svg__1.call(this,n);
case 2:
return to_svg__2.call(this,n,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_svg.cljs$lang$arity$0 = to_svg__0;
to_svg.cljs$lang$arity$1 = to_svg__1;
to_svg.cljs$lang$arity$2 = to_svg__2;
return to_svg;
})()
;
iiiiioiooooo.ui.to_html = (function() {
var to_html = null;
var to_html__0 = (function (){
return cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"sexp"})], true);
});
var to_html__1 = (function (n){
return cljs.core.conj.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("leaf "),cljs.core.str(((cljs.core.fn_QMARK_.call(null,n))?"fn ":((cljs.core.string_QMARK_.call(null,n))?"string ":null)))].join('')})], true),iiiiioiooooo.ui.to_str.call(null,n));
});
var to_html__2 = (function (n,c){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("branch "),cljs.core.str(n)].join('')})], true),c);
});
var to_html__3 = (function (n,oiuoi,c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("branch folded "),cljs.core.str(n)].join('')})], true);
});
to_html = function(n,oiuoi,c){
switch(arguments.length){
case 0:
return to_html__0.call(this);
case 1:
return to_html__1.call(this,n);
case 2:
return to_html__2.call(this,n,oiuoi);
case 3:
return to_html__3.call(this,n,oiuoi,c);
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
iiiiioiooooo.ui.make_id = (function make_id(p){
return [cljs.core.str("n"),cljs.core.str((cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,p))?cljs.core.hash.call(null,p):cljs.core.hash.call(null,clojure.zip.node.call(null,p))))].join('');
});
iiiiioiooooo.ui.maybe = (function maybe(f,x){
if(cljs.core.truth_(x))
{return f.call(null,x);
} else
{return x;
}
});
iiiiioiooooo.ui.selector = (function selector(p){
return [cljs.core.str("#root > div:first-child "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'down","\uFDD0'right"],{"\uFDD0'down":" > div:first-child ","\uFDD0'right":" + div"}),p)))].join('');
});
iiiiioiooooo.ui.replacement_selector = (function() {
var replacement_selector = null;
var replacement_selector__1 = (function (p){
return replacement_selector.call(null,"#root > div:first-child ",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'down","\uFDD0'right"],{"\uFDD0'down":" > div:first-child ","\uFDD0'right":" + div"}),p)));
});
var replacement_selector__2 = (function (s,ps){
iiiiioiooooo.ui.log.call(null,">>> ",ps);
return [cljs.core.str(s),cljs.core.str(ps)].join('');
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
iiiiioiooooo.ui.update_element_BANG_ = (function() {
var update_element_BANG_ = null;
var update_element_BANG___1 = (function (context){
return update_element_BANG_.call(null,context,context);
});
var update_element_BANG___2 = (function (context,s){
iiiiioiooooo.ui.log.call(null,"replace: ",iiiiioiooooo.ui.replacement_selector.call(null,iiiiioiooooo.core.structure.path.call(null,context,s)));
dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,iiiiioiooooo.ui.replacement_selector.call(null,iiiiioiooooo.core.structure.path.call(null,context,s)))),cljs.core.first.call(null,iiiiioiooooo.core.structure.translate.call(null,64,64,iiiiioiooooo.ui.to_html,s)));
return s;
});
update_element_BANG_ = function(context,s){
switch(arguments.length){
case 1:
return update_element_BANG___1.call(this,context);
case 2:
return update_element_BANG___2.call(this,context,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_element_BANG_.cljs$lang$arity$1 = update_element_BANG___1;
update_element_BANG_.cljs$lang$arity$2 = update_element_BANG___2;
return update_element_BANG_;
})()
;
iiiiioiooooo.ui.select_state = (function() {
var select_state = null;
var select_state__1 = (function (s){
return select_state.call(null,s,cljs.core.map.call(null,cljs.core.comp.call(null,iiiiioiooooo.ui.selector,cljs.core.partial.call(null,iiiiioiooooo.core.structure.path,(new cljs.core.Keyword("\uFDD0'context")).call(null,s))),(new cljs.core.Keyword("\uFDD0'selected")).call(null,s)));
});
var select_state__2 = (function (s,paths){
return select_state.call(null,s,paths,dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,paths))),document.querySelector(dommy.core.selector.call(null,iiiiioiooooo.ui.selector.call(null,iiiiioiooooo.core.structure.path.call(null,(new cljs.core.Keyword("\uFDD0'context")).call(null,s),(new cljs.core.Keyword("\uFDD0'focus")).call(null,s))))));
});
var select_state__4 = (function (s,paths,selections,focus){
iiiiioiooooo.ui.log.call(null,"selectors: ",paths,selections);
iiiiioiooooo.ui.log.call(null,"  node: ",cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,64,[cljs.core.str(clojure.zip.node.call(null,(new cljs.core.Keyword("\uFDD0'focus")).call(null,s)))].join(''))),[cljs.core.str(cljs.core.meta.call(null,clojure.zip.node.call(null,(new cljs.core.Keyword("\uFDD0'focus")).call(null,s))))].join(''));
cljs.core.last.call(null,cljs.core.map.call(null,(function (q){
return dommy.core.remove_class_BANG_.call(null,q,"selected");
}),dommy.utils.__GT_Array.call(null,document.getElementsByClassName("selected"))));
cljs.core.last.call(null,cljs.core.map.call(null,(function (q){
return dommy.core.remove_class_BANG_.call(null,q,"selected-parent");
}),dommy.utils.__GT_Array.call(null,document.getElementsByClassName("selected-parent"))));
var G__3535_3536 = cljs.core.seq.call(null,selections);
while(true){
if(G__3535_3536)
{var selection_3537 = cljs.core.first.call(null,G__3535_3536);
if(cljs.core.truth_(selection_3537))
{dommy.core.add_class_BANG_.call(null,selection_3537,"selected");
} else
{}
{
var G__3538 = cljs.core.next.call(null,G__3535_3536);
G__3535_3536 = G__3538;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(focus))
{return dommy.core.add_class_BANG_.call(null,focus,"selected");
} else
{return null;
}
});
select_state = function(s,paths,selections,focus){
switch(arguments.length){
case 1:
return select_state__1.call(this,s);
case 2:
return select_state__2.call(this,s,paths);
case 4:
return select_state__4.call(this,s,paths,selections,focus);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_state.cljs$lang$arity$1 = select_state__1;
select_state.cljs$lang$arity$2 = select_state__2;
select_state.cljs$lang$arity$4 = select_state__4;
return select_state;
})()
;
iiiiioiooooo.ui.keydown = (function keydown(state,e){
e.preventDefault();
return iiiiioiooooo.core.structure.update_BANG_.call(null,state,cljs.core.ObjMap.fromObject(["\uFDD0'key","\uFDD0'keycode","\uFDD0'event"],{"\uFDD0'key":iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode),"\uFDD0'keycode":e.keyCode,"\uFDD0'event":"\uFDD0'keydown"}));
});
iiiiioiooooo.ui.keyup = (function keyup(state,e){
return iiiiioiooooo.core.structure.update_BANG_.call(null,state,cljs.core.ObjMap.fromObject(["\uFDD0'key","\uFDD0'keycode","\uFDD0'event"],{"\uFDD0'key":iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode),"\uFDD0'keycode":e.keyCode,"\uFDD0'event":"\uFDD0'keyup"}));
});
iiiiioiooooo.ui.update_ui_fn = cljs.core.ObjMap.fromObject(["\uFDD0'select","\uFDD0'modify"],{"\uFDD0'select":iiiiioiooooo.ui.select_state,"\uFDD0'modify":(function update_ui_fn(s){
iiiiioiooooo.ui.log.call(null,"modified: ",clojure.zip.node.call(null,(new cljs.core.Keyword("\uFDD0'modified")).call(null,s)),[cljs.core.str(iiiiioiooooo.core.structure.path.call(null,(new cljs.core.Keyword("\uFDD0'context")).call(null,s),(new cljs.core.Keyword("\uFDD0'modified")).call(null,s)))].join(''));
iiiiioiooooo.ui.update_element_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'context")).call(null,s),(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'modified")).call(null,s))?(new cljs.core.Keyword("\uFDD0'modified")).call(null,s):(new cljs.core.Keyword("\uFDD0'context")).call(null,s)));
return iiiiioiooooo.ui.select_state.call(null,s);
})});
iiiiioiooooo.ui.display_with_latest = (function display_with_latest(n){
return (new cljs.core.Keyword("\uFDD0'action")).call(null,n).call(null,iiiiioiooooo.ui.update_ui_fn).call(null,n);
});
iiiiioiooooo.ui.add_eval = (function add_eval(s){
return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),null,(function (s__$1,x){
return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'keymap","\uFDD0'e","\uFDD0'e"], true),(function (s__$2,x__$1){
return iiiiioiooooo.core.structure.modified.call(null,x__$1,(function (l){
iiiiioiooooo.ui.log.call(null,"evaluating! ",[cljs.core.str(clojure.zip.node.call(null,l))].join(''));
return clojure.zip.replace.call(null,l,eval(cljs.compiler.emit_str.call(null,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),"\uFDD0'context","\uFDD0'expr"),clojure.zip.node.call(null,l)))));
}));
})),s__$1);
}));
});
iiiiioiooooo.ui.add_info = (function add_info(s){
return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),null,(function (s__$1,x){
return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc_in.call(null,x,cljs.core.PersistentVector.fromArray(["\uFDD0'keymap","\uFDD0'shift","\uFDD0'forwardslash","\uFDD0'forwardslash"], true),(function (s__$2,x__$1){
iiiiioiooooo.ui.log.call(null,"meta: ",[cljs.core.str(cljs.core.meta.call(null,clojure.zip.node.call(null,(new cljs.core.Keyword("\uFDD0'focus")).call(null,x__$1))))].join(''));
return x__$1;
})),s__$1);
}));
});
iiiiioiooooo.ui.make_ui = (function() {
var make_ui = null;
var make_ui__1 = (function (e){
return make_ui.call(null,e,cljs.core.atom.call(null,iiiiioiooooo.ui.add_eval.call(null,iiiiioiooooo.ui.add_info.call(null,iiiiioiooooo.core.structure.default_state.call(null)))));
});
var make_ui__2 = (function (e,state){
iiiiioiooooo.ui.log.call(null,"make ui");
window.onkeydown = (function (e__$1){
return iiiiioiooooo.ui.keydown.call(null,state,e__$1);
});
window.onkeyup = (function (e__$1){
return iiiiioiooooo.ui.keyup.call(null,state,e__$1);
});
iiiiioiooooo.ui.update_element_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'context")).call(null,iiiiioiooooo.core.structure.latest_state.call(null,cljs.core.deref.call(null,state))));
return cljs.core.add_watch.call(null,state,"\uFDD0'update-display",(function (k,r,o,n){
return iiiiioiooooo.ui.display_with_latest.call(null,iiiiioiooooo.core.structure.latest_state.call(null,n));
}));
});
make_ui = function(e,state){
switch(arguments.length){
case 1:
return make_ui__1.call(this,e);
case 2:
return make_ui__2.call(this,e,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_ui.cljs$lang$arity$1 = make_ui__1;
make_ui.cljs$lang$arity$2 = make_ui__2;
return make_ui;
})()
;
window.onload = iiiiioiooooo.ui.make_ui;

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"iiiiioiooooo.ui"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__3539__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__3539 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3539__delegate.call(this, m);
};
G__3539.cljs$lang$maxFixedArity = 0;
G__3539.cljs$lang$applyTo = (function (arglist__3540){
var m = cljs.core.seq(arglist__3540);;
return G__3539__delegate(m);
});
G__3539.cljs$lang$arity$variadic = G__3539__delegate;
return G__3539;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"numbers")),cljs.core.hash_map("\uFDD0'line",103,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/numbers"))),(new cljs.core.Symbol(null,"add-eval")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/add-eval")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",332,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"is-modifier")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"keycode"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"keycode")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/is-modifier")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",171,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"events")),cljs.core.hash_map("\uFDD0'line",21,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/events"))),(new cljs.core.Symbol(null,"alphabet")),cljs.core.hash_map("\uFDD0'line",71,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/alphabet"))),(new cljs.core.Symbol(null,"mouse")),cljs.core.hash_map("\uFDD0'line",19,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/mouse"))),(new cljs.core.Symbol(null,"keycode-to-keyword-down")),cljs.core.hash_map("\uFDD0'line",169,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/keycode-to-keyword-down"))),(new cljs.core.Symbol(null,"isnt-modifier")),cljs.core.hash_map("\uFDD0'line",173,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/isnt-modifier"))),(new cljs.core.Symbol(null,"update-element!")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"context"))]),cljs.core.vec([(new cljs.core.Symbol(null,"context")),(new cljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"context")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"context")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/update-element!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",259,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"if-firefox")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"a")),(new cljs.core.Symbol(null,"b"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"a")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"b")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/if-firefox")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",175,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"log")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"m"))]),cljs.core.vec([(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"m"))]),cljs.core.vec([(new cljs.core.Symbol(null,"m1")),(new cljs.core.Symbol(null,"m2"))]),cljs.core.vec([(new cljs.core.Symbol(null,"m1")),(new cljs.core.Symbol(null,"m2")),(new cljs.core.Symbol(null,"m3"))]),cljs.core.vec([(new cljs.core.Symbol(null,"m1")),(new cljs.core.Symbol(null,"m2")),(new cljs.core.Symbol(null,"m3")),(new cljs.core.Symbol(null,"m4"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m1")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m2")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m1")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m2")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m3")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m1")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m2")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m3")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m4")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/log")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",186,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"to-svg")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"n"))]),cljs.core.vec([(new cljs.core.Symbol(null,"n")),(new cljs.core.Symbol(null,"c"))]),cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/to-svg")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",216,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"selector")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"p"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/selector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",245,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"to-str")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"n"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/to-str")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",209,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"thread*")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"g")),(new cljs.core.Symbol(null,"f")),(new cljs.core.Symbol(null,"x")),(new cljs.core.Symbol(null,"n"))]),cljs.core.vec([(new cljs.core.Symbol(null,"f")),(new cljs.core.Symbol(null,"x")),(new cljs.core.Symbol(null,"n"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"g")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/thread*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Do the function f at regular intervals and send the results to g, starting with x","\uFDD0'line",195,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"display-with-latest")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"n"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/display-with-latest")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",328,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"add-info")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/add-info")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",357,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"make-id")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"p"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/make-id")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",238,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"to-html")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"n"))]),cljs.core.vec([(new cljs.core.Symbol(null,"n")),(new cljs.core.Symbol(null,"c"))]),cljs.core.vec([(new cljs.core.Symbol(null,"n")),(new cljs.core.Symbol(null,"oiuoi")),(new cljs.core.Symbol(null,"c"))]),cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"oiuoi")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/to-html")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",229,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"keydown")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"state")),(new cljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"state")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/keydown")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",306,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"select-state")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s"))]),cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"paths"))]),cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"paths")),(new cljs.core.Symbol(null,"selections")),(new cljs.core.Symbol(null,"focus"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"paths")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"paths")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"selections")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"focus")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/select-state")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",286,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"maybe")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"f")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/maybe")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",242,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"repeat*")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"f")),(new cljs.core.Symbol(null,"x")),(new cljs.core.Symbol(null,"n"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/repeat*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Do the function f at regular intervals and send the results to g, starting with x","\uFDD0'line",201,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"update-ui-fn")),cljs.core.hash_map("\uFDD0'line",317,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/update-ui-fn"))),(new cljs.core.Symbol(null,"keyup")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"state")),(new cljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"state")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/keyup")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",313,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"replacement-selector")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"p"))]),cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"ps"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"ps")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/replacement-selector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",249,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"keycode-to-keyword-up")),cljs.core.hash_map("\uFDD0'line",168,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/keycode-to-keyword-up"))),(new cljs.core.Symbol(null,"make-ui")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"e"))]),cljs.core.vec([(new cljs.core.Symbol(null,"e")),(new cljs.core.Symbol(null,"state"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"state")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/make-ui")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",367,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs"),(new cljs.core.Symbol(null,"keycode-to-keyword")),cljs.core.hash_map("\uFDD0'line",118,"\uFDD0'file","/Users/onto/projects/morse/srccljs/iiiiioiooooo/ui.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui/keycode-to-keyword")))),"\uFDD0'imports",null,"\uFDD0'uses-macros",cljs.core.hash_map((new cljs.core.Symbol(null,"sel1")),(new cljs.core.Symbol(null,"dommy.macros")),(new cljs.core.Symbol(null,"sel")),(new cljs.core.Symbol(null,"dommy.macros")),(new cljs.core.Symbol(null,"node")),(new cljs.core.Symbol(null,"dommy.macros"))),"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"zip")),(new cljs.core.Symbol(null,"clojure.zip")),(new cljs.core.Symbol(null,"clojure.browser.event")),(new cljs.core.Symbol(null,"clojure.browser.event")),(new cljs.core.Symbol(null,"structure")),(new cljs.core.Symbol(null,"iiiiioiooooo.core.structure")),(new cljs.core.Symbol(null,"reader")),(new cljs.core.Symbol(null,"cljs.reader")),(new cljs.core.Symbol(null,"goog.events.KeyCodes")),(new cljs.core.Symbol(null,"goog.events.KeyCodes")),(new cljs.core.Symbol(null,"style")),(new cljs.core.Symbol(null,"iiiiioiooooo.style")),(new cljs.core.Symbol(null,"ana")),(new cljs.core.Symbol(null,"cljs.analyzer")),(new cljs.core.Symbol(null,"dommy")),(new cljs.core.Symbol(null,"dommy.core")),(new cljs.core.Symbol(null,"compiler")),(new cljs.core.Symbol(null,"cljs.compiler")),(new cljs.core.Symbol(null,"goog.events.KeyHandler")),(new cljs.core.Symbol(null,"goog.events.KeyHandler"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"iiiiioiooooo.ui"))),old);
}));
