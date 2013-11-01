goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = cljs.core.PersistentHashSet.fromArray(["polyline",null,"rect",null,"svg",null,"path",null,"g",null,"text",null,"circle",null,"textPath",null,"line",null,"clipPath",null,"polygon",null], true);
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){if((function (){var and__2950__auto__ = this$;if(and__2950__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__2950__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__3554__auto__ = (((this$ == null))?null:this$);return (function (){var or__2959__auto__ = (dommy.template._elem[goog.typeOf(x__3554__auto__)]);if(or__2959__auto__)
{return or__2959__auto__;
} else
{var or__2959__auto____$1 = (dommy.template._elem["_"]);if(or__2959__auto____$1)
{return or__2959__auto____$1;
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
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_8302 = node_str.substring(base_idx);while(true){
var next_idx_8303 = dommy.template.next_css_index.call(null,str_8302,1);var frag_8304 = (((next_idx_8303 >= 0))?str_8302.substring(0,next_idx_8303):str_8302);var G__8301_8305 = frag_8304.charAt(0);if(cljs.core._EQ_.call(null,"#",G__8301_8305))
{node.setAttribute("id",frag_8304.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__8301_8305))
{dommy.attrs.add_class_BANG_.call(null,node,frag_8304.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_8304.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_8303 >= 0))
{{
var G__8306 = str_8302.substring(next_idx_8303);
str_8302 = G__8306;
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
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__8312 = data;if(G__8312)
{var bit__3570__auto__ = null;if(cljs.core.truth_((function (){var or__2959__auto__ = bit__3570__auto__;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
} else
{return G__8312.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8312.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8312);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8312);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__8313_8317 = cljs.core.seq.call(null,data);var chunk__8314_8318 = null;var count__8315_8319 = 0;var i__8316_8320 = 0;while(true){
if((i__8316_8320 < count__8315_8319))
{var child_8321 = cljs.core._nth.call(null,chunk__8314_8318,i__8316_8320);__GT_document_fragment.call(null,result_frag,child_8321);
{
var G__8322 = seq__8313_8317;
var G__8323 = chunk__8314_8318;
var G__8324 = count__8315_8319;
var G__8325 = (i__8316_8320 + 1);
seq__8313_8317 = G__8322;
chunk__8314_8318 = G__8323;
count__8315_8319 = G__8324;
i__8316_8320 = G__8325;
continue;
}
} else
{var temp__4092__auto___8326 = cljs.core.seq.call(null,seq__8313_8317);if(temp__4092__auto___8326)
{var seq__8313_8327__$1 = temp__4092__auto___8326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8313_8327__$1))
{var c__3668__auto___8328 = cljs.core.chunk_first.call(null,seq__8313_8327__$1);{
var G__8329 = cljs.core.chunk_rest.call(null,seq__8313_8327__$1);
var G__8330 = c__3668__auto___8328;
var G__8331 = cljs.core.count.call(null,c__3668__auto___8328);
var G__8332 = 0;
seq__8313_8317 = G__8329;
chunk__8314_8318 = G__8330;
count__8315_8319 = G__8331;
i__8316_8320 = G__8332;
continue;
}
} else
{var child_8333 = cljs.core.first.call(null,seq__8313_8327__$1);__GT_document_fragment.call(null,result_frag,child_8333);
{
var G__8334 = cljs.core.next.call(null,seq__8313_8327__$1);
var G__8335 = null;
var G__8336 = 0;
var G__8337 = 0;
seq__8313_8317 = G__8334;
chunk__8314_8318 = G__8335;
count__8315_8319 = G__8336;
i__8316_8320 = G__8337;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__8339 = data;if(G__8339)
{var bit__3570__auto__ = null;if(cljs.core.truth_((function (){var or__2959__auto__ = bit__3570__auto__;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
} else
{return G__8339.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8339.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8339);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8339);
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
dommy.template.compound_element = (function compound_element(p__8340){var vec__8360 = p__8340;var tag_name = cljs.core.nth.call(null,vec__8360,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__8360,1,null);var children = cljs.core.nthnext.call(null,vec__8360,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__8362 = maybe_attrs;if(G__8362)
{var bit__3570__auto__ = null;if(cljs.core.truth_((function (){var or__2959__auto__ = bit__3570__auto__;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
} else
{return G__8362.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8362.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8362);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8362);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__8363_8379 = cljs.core.seq.call(null,attrs);var chunk__8364_8380 = null;var count__8365_8381 = 0;var i__8366_8382 = 0;while(true){
if((i__8366_8382 < count__8365_8381))
{var vec__8367_8383 = cljs.core._nth.call(null,chunk__8364_8380,i__8366_8382);var k_8384 = cljs.core.nth.call(null,vec__8367_8383,0,null);var v_8385 = cljs.core.nth.call(null,vec__8367_8383,1,null);var G__8368_8386 = k_8384;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__8368_8386))
{var seq__8369_8387 = cljs.core.seq.call(null,v_8385);var chunk__8370_8388 = null;var count__8371_8389 = 0;var i__8372_8390 = 0;while(true){
if((i__8372_8390 < count__8371_8389))
{var c_8391 = cljs.core._nth.call(null,chunk__8370_8388,i__8372_8390);dommy.attrs.add_class_BANG_.call(null,n,c_8391);
{
var G__8392 = seq__8369_8387;
var G__8393 = chunk__8370_8388;
var G__8394 = count__8371_8389;
var G__8395 = (i__8372_8390 + 1);
seq__8369_8387 = G__8392;
chunk__8370_8388 = G__8393;
count__8371_8389 = G__8394;
i__8372_8390 = G__8395;
continue;
}
} else
{var temp__4092__auto___8396 = cljs.core.seq.call(null,seq__8369_8387);if(temp__4092__auto___8396)
{var seq__8369_8397__$1 = temp__4092__auto___8396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8369_8397__$1))
{var c__3668__auto___8398 = cljs.core.chunk_first.call(null,seq__8369_8397__$1);{
var G__8399 = cljs.core.chunk_rest.call(null,seq__8369_8397__$1);
var G__8400 = c__3668__auto___8398;
var G__8401 = cljs.core.count.call(null,c__3668__auto___8398);
var G__8402 = 0;
seq__8369_8387 = G__8399;
chunk__8370_8388 = G__8400;
count__8371_8389 = G__8401;
i__8372_8390 = G__8402;
continue;
}
} else
{var c_8403 = cljs.core.first.call(null,seq__8369_8397__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8403);
{
var G__8404 = cljs.core.next.call(null,seq__8369_8397__$1);
var G__8405 = null;
var G__8406 = 0;
var G__8407 = 0;
seq__8369_8387 = G__8404;
chunk__8370_8388 = G__8405;
count__8371_8389 = G__8406;
i__8372_8390 = G__8407;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__8368_8386))
{dommy.attrs.add_class_BANG_.call(null,n,v_8385);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_8384,v_8385);
} else
{}
}
}
{
var G__8408 = seq__8363_8379;
var G__8409 = chunk__8364_8380;
var G__8410 = count__8365_8381;
var G__8411 = (i__8366_8382 + 1);
seq__8363_8379 = G__8408;
chunk__8364_8380 = G__8409;
count__8365_8381 = G__8410;
i__8366_8382 = G__8411;
continue;
}
} else
{var temp__4092__auto___8412 = cljs.core.seq.call(null,seq__8363_8379);if(temp__4092__auto___8412)
{var seq__8363_8413__$1 = temp__4092__auto___8412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8363_8413__$1))
{var c__3668__auto___8414 = cljs.core.chunk_first.call(null,seq__8363_8413__$1);{
var G__8415 = cljs.core.chunk_rest.call(null,seq__8363_8413__$1);
var G__8416 = c__3668__auto___8414;
var G__8417 = cljs.core.count.call(null,c__3668__auto___8414);
var G__8418 = 0;
seq__8363_8379 = G__8415;
chunk__8364_8380 = G__8416;
count__8365_8381 = G__8417;
i__8366_8382 = G__8418;
continue;
}
} else
{var vec__8373_8419 = cljs.core.first.call(null,seq__8363_8413__$1);var k_8420 = cljs.core.nth.call(null,vec__8373_8419,0,null);var v_8421 = cljs.core.nth.call(null,vec__8373_8419,1,null);var G__8374_8422 = k_8420;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__8374_8422))
{var seq__8375_8423 = cljs.core.seq.call(null,v_8421);var chunk__8376_8424 = null;var count__8377_8425 = 0;var i__8378_8426 = 0;while(true){
if((i__8378_8426 < count__8377_8425))
{var c_8427 = cljs.core._nth.call(null,chunk__8376_8424,i__8378_8426);dommy.attrs.add_class_BANG_.call(null,n,c_8427);
{
var G__8428 = seq__8375_8423;
var G__8429 = chunk__8376_8424;
var G__8430 = count__8377_8425;
var G__8431 = (i__8378_8426 + 1);
seq__8375_8423 = G__8428;
chunk__8376_8424 = G__8429;
count__8377_8425 = G__8430;
i__8378_8426 = G__8431;
continue;
}
} else
{var temp__4092__auto___8432__$1 = cljs.core.seq.call(null,seq__8375_8423);if(temp__4092__auto___8432__$1)
{var seq__8375_8433__$1 = temp__4092__auto___8432__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8375_8433__$1))
{var c__3668__auto___8434 = cljs.core.chunk_first.call(null,seq__8375_8433__$1);{
var G__8435 = cljs.core.chunk_rest.call(null,seq__8375_8433__$1);
var G__8436 = c__3668__auto___8434;
var G__8437 = cljs.core.count.call(null,c__3668__auto___8434);
var G__8438 = 0;
seq__8375_8423 = G__8435;
chunk__8376_8424 = G__8436;
count__8377_8425 = G__8437;
i__8378_8426 = G__8438;
continue;
}
} else
{var c_8439 = cljs.core.first.call(null,seq__8375_8433__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8439);
{
var G__8440 = cljs.core.next.call(null,seq__8375_8433__$1);
var G__8441 = null;
var G__8442 = 0;
var G__8443 = 0;
seq__8375_8423 = G__8440;
chunk__8376_8424 = G__8441;
count__8377_8425 = G__8442;
i__8378_8426 = G__8443;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__8374_8422))
{dommy.attrs.add_class_BANG_.call(null,n,v_8421);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_8420,v_8421);
} else
{}
}
}
{
var G__8444 = cljs.core.next.call(null,seq__8363_8413__$1);
var G__8445 = null;
var G__8446 = 0;
var G__8447 = 0;
seq__8363_8379 = G__8444;
chunk__8364_8380 = G__8445;
count__8365_8381 = G__8446;
i__8366_8382 = G__8447;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e8448){if((e8448 instanceof ReferenceError))
{var __8449 = e8448;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8448;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__8451 = data;if(G__8451)
{var bit__3570__auto__ = null;if(cljs.core.truth_((function (){var or__2959__auto__ = bit__3570__auto__;if(cljs.core.truth_(or__2959__auto__))
{return or__2959__auto__;
} else
{return G__8451.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8451.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8451);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8451);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//@ sourceMappingURL=template.js.map