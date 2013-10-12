goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__2048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__2048__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str = cljs.core.name.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,0);
var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":(("\uFDD0'else")?node_str:null)));
var node = document.createElement(tag);
if((base_idx >= 0))
{var str_5352 = node_str.substring(base_idx);
while(true){
var next_idx_5353 = dommy.template.next_css_index.call(null,str_5352,1);
var frag_5354 = (((next_idx_5353 >= 0))?str_5352.substring(0,next_idx_5353):str_5352);
var G__5351_5355 = frag_5354.charAt(0);
if(cljs.core._EQ_.call(null,"#",G__5351_5355))
{node.setAttribute("id",frag_5354.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__5351_5355))
{dommy.attrs.add_class_BANG_.call(null,node,frag_5354.substring(1));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_5354.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_5353 >= 0))
{{
var G__5356 = str_5352.substring(next_idx_5353);
str_5352 = G__5356;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__5359 = data;
if(G__5359)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5359.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5359.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5359);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5359);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var G__5360_5361 = cljs.core.seq.call(null,data);
while(true){
if(G__5360_5361)
{var child_5362 = cljs.core.first.call(null,G__5360_5361);
__GT_document_fragment.call(null,result_frag,child_5362);
{
var G__5363 = cljs.core.next.call(null,G__5360_5361);
G__5360_5361 = G__5363;
continue;
}
} else
{}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if("\uFDD0'else")
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$lang$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$lang$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__5365 = data;
if(G__5365)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5365.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5365.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5365);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5365);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__5366){
var vec__5373 = p__5366;
var tag_name = cljs.core.nth.call(null,vec__5373,0,null);
var maybe_attrs = cljs.core.nth.call(null,vec__5373,1,null);
var children = cljs.core.nthnext.call(null,vec__5373,2);
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);
if(and__3941__auto__)
{return !((function (){var G__5374 = maybe_attrs;
if(G__5374)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5374.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5374.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5374);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5374);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var G__5375_5379 = cljs.core.seq.call(null,attrs);
while(true){
if(G__5375_5379)
{var vec__5376_5380 = cljs.core.first.call(null,G__5375_5379);
var k_5381 = cljs.core.nth.call(null,vec__5376_5380,0,null);
var v_5382 = cljs.core.nth.call(null,vec__5376_5380,1,null);
var G__5377_5383 = k_5381;
if(cljs.core._EQ_.call(null,"\uFDD0'classes",G__5377_5383))
{var G__5378_5384 = cljs.core.seq.call(null,v_5382);
while(true){
if(G__5378_5384)
{var c_5385 = cljs.core.first.call(null,G__5378_5384);
dommy.attrs.add_class_BANG_.call(null,n,c_5385);
{
var G__5386 = cljs.core.next.call(null,G__5378_5384);
G__5378_5384 = G__5386;
continue;
}
} else
{}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'class",G__5377_5383))
{dommy.attrs.add_class_BANG_.call(null,n,v_5382);
} else
{if("\uFDD0'else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_5381,v_5382);
} else
{}
}
}
{
var G__5387 = cljs.core.next.call(null,G__5375_5379);
G__5375_5379 = G__5387;
continue;
}
} else
{}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){
if(cljs.core.keyword_QMARK_.call(null,this$))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return dommy.template.compound_element.call(null,this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
}catch (e5388){if(cljs.core.instance_QMARK_.call(null,ReferenceError,e5388))
{var __5389 = e5388;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if("\uFDD0'else")
{throw e5388;
} else
{}
}
}dommy.template.node = (function node(data){
if((function (){var G__5391 = data;
if(G__5391)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5391.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5391.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5391);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5391);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"dommy.template"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__5392__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__5392 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5392__delegate.call(this, m);
};
G__5392.cljs$lang$maxFixedArity = 0;
G__5392.cljs$lang$applyTo = (function (arglist__5393){
var m = cljs.core.seq(arglist__5393);;
return G__5392__delegate(m);
});
G__5392.cljs$lang$arity$variadic = G__5392__delegate;
return G__5392;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"->node-like")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"data"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"data")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/->node-like")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","take data and return DOM node if it satisfies PElement and tries to\n   make a document fragment otherwise","\uFDD0'line",65,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs"),(new cljs.core.Symbol(null,"next-css-index")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"start-idx"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"start-idx")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/next-css-index")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","index of css character (#,.) in base-element. bottleneck","\uFDD0'line",9,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"html->nodes")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"html"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"html")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/html->nodes")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",126,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs"),(new cljs.core.Symbol(null,"PElement")),cljs.core.hash_map("\uFDD0'line",6,"\uFDD0'file","out/dommy/template.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/PElement"))),(new cljs.core.Symbol(null,"throw-unable-to-make-node")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"node-data"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"node-data")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/throw-unable-to-make-node")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",42,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs"),(new cljs.core.Symbol(null,"-elem")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"this"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"this")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new cljs.core.Symbol(null,"dommy.template/PElement")),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/-elem")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",6,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs"),(new cljs.core.Symbol(null,"->document-fragment")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"data"))]),cljs.core.vec([(new cljs.core.Symbol(null,"result-frag")),(new cljs.core.Symbol(null,"data"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"data")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"result-frag")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"data")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/->document-fragment")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","take data and return a document fragment","\uFDD0'line",45,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs"),(new cljs.core.Symbol(null,"compound-element")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([cljs.core.vec([(new cljs.core.Symbol(null,"tag-name")),(new cljs.core.Symbol(null,"maybe-attrs")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"children"))])]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"p__5366")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/compound-element")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","element with either attrs or nested children [:div [:span \"Hello\"]]","\uFDD0'line",73,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs"),(new cljs.core.Symbol(null,"base-element")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"node-key"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"node-key")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/base-element")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","dom element from css-style keyword like :a.class1 or :span#my-span.class","\uFDD0'line",19,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs"),(new cljs.core.Symbol(null,"node")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"data"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"data")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template/node")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",121,"\uFDD0'fn-var",true,"\uFDD0'file","out/dommy/template.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"attrs")),(new cljs.core.Symbol(null,"dommy.attrs")),(new cljs.core.Symbol(null,"str")),(new cljs.core.Symbol(null,"clojure.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"dommy.template"))),old);
}));
