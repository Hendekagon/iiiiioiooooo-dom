// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
dommy.template.PElement = (function (){var obj7964 = {};return obj7964;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3522__auto__ = this$;if(and__3522__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3522__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4161__auto__ = (((this$ == null))?null:this$);return (function (){var or__3534__auto__ = (dommy.template._elem[goog.typeOf(x__4161__auto__)]);if(or__3534__auto__)
{return or__3534__auto__;
} else
{var or__3534__auto____$1 = (dommy.template._elem["_"]);if(or__3534__auto____$1)
{return or__3534__auto____$1;
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
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_7967 = node_str.substring(base_idx);while(true){
var next_idx_7968 = dommy.template.next_css_index.call(null,str_7967,(1));var frag_7969 = (((next_idx_7968 >= (0)))?str_7967.substring((0),next_idx_7968):str_7967);var G__7966_7970 = frag_7969.charAt((0));switch (G__7966_7970) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_7969.substring((1)));

break;
case "#":
node.setAttribute("id",frag_7969.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_7969.charAt((0))))));

}
if((next_idx_7968 >= (0)))
{{
var G__7972 = str_7967.substring(next_idx_7968);
str_7967 = G__7972;
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
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7978 = data;if(G__7978)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__7978.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7978.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7978);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7978);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__7979_7983 = cljs.core.seq.call(null,data);var chunk__7980_7984 = null;var count__7981_7985 = (0);var i__7982_7986 = (0);while(true){
if((i__7982_7986 < count__7981_7985))
{var child_7987 = cljs.core._nth.call(null,chunk__7980_7984,i__7982_7986);__GT_document_fragment.call(null,result_frag,child_7987);
{
var G__7988 = seq__7979_7983;
var G__7989 = chunk__7980_7984;
var G__7990 = count__7981_7985;
var G__7991 = (i__7982_7986 + (1));
seq__7979_7983 = G__7988;
chunk__7980_7984 = G__7989;
count__7981_7985 = G__7990;
i__7982_7986 = G__7991;
continue;
}
} else
{var temp__4126__auto___7992 = cljs.core.seq.call(null,seq__7979_7983);if(temp__4126__auto___7992)
{var seq__7979_7993__$1 = temp__4126__auto___7992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7979_7993__$1))
{var c__4290__auto___7994 = cljs.core.chunk_first.call(null,seq__7979_7993__$1);{
var G__7995 = cljs.core.chunk_rest.call(null,seq__7979_7993__$1);
var G__7996 = c__4290__auto___7994;
var G__7997 = cljs.core.count.call(null,c__4290__auto___7994);
var G__7998 = (0);
seq__7979_7983 = G__7995;
chunk__7980_7984 = G__7996;
count__7981_7985 = G__7997;
i__7982_7986 = G__7998;
continue;
}
} else
{var child_7999 = cljs.core.first.call(null,seq__7979_7993__$1);__GT_document_fragment.call(null,result_frag,child_7999);
{
var G__8000 = cljs.core.next.call(null,seq__7979_7993__$1);
var G__8001 = null;
var G__8002 = (0);
var G__8003 = (0);
seq__7979_7983 = G__8000;
chunk__7980_7984 = G__8001;
count__7981_7985 = G__8002;
i__7982_7986 = G__8003;
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
{return dommy.template.throw_unable_to_make_node.call(null,data);

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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__8005 = data;if(G__8005)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__8005.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8005.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8005);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8005);
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
dommy.template.compound_element = (function compound_element(p__8006){var vec__8026 = p__8006;var tag_name = cljs.core.nth.call(null,vec__8026,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__8026,(1),null);var children = cljs.core.nthnext.call(null,vec__8026,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__8028 = maybe_attrs;if(G__8028)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__8028.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8028.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8028);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8028);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__8029_8045 = cljs.core.seq.call(null,attrs);var chunk__8030_8046 = null;var count__8031_8047 = (0);var i__8032_8048 = (0);while(true){
if((i__8032_8048 < count__8031_8047))
{var vec__8033_8049 = cljs.core._nth.call(null,chunk__8030_8046,i__8032_8048);var k_8050 = cljs.core.nth.call(null,vec__8033_8049,(0),null);var v_8051 = cljs.core.nth.call(null,vec__8033_8049,(1),null);var G__8034_8052 = (((k_8050 instanceof cljs.core.Keyword))?k_8050.fqn:null);switch (G__8034_8052) {
case "classes":
var seq__8035_8054 = cljs.core.seq.call(null,v_8051);var chunk__8036_8055 = null;var count__8037_8056 = (0);var i__8038_8057 = (0);while(true){
if((i__8038_8057 < count__8037_8056))
{var c_8058 = cljs.core._nth.call(null,chunk__8036_8055,i__8038_8057);dommy.attrs.add_class_BANG_.call(null,n,c_8058);
{
var G__8059 = seq__8035_8054;
var G__8060 = chunk__8036_8055;
var G__8061 = count__8037_8056;
var G__8062 = (i__8038_8057 + (1));
seq__8035_8054 = G__8059;
chunk__8036_8055 = G__8060;
count__8037_8056 = G__8061;
i__8038_8057 = G__8062;
continue;
}
} else
{var temp__4126__auto___8063 = cljs.core.seq.call(null,seq__8035_8054);if(temp__4126__auto___8063)
{var seq__8035_8064__$1 = temp__4126__auto___8063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8035_8064__$1))
{var c__4290__auto___8065 = cljs.core.chunk_first.call(null,seq__8035_8064__$1);{
var G__8066 = cljs.core.chunk_rest.call(null,seq__8035_8064__$1);
var G__8067 = c__4290__auto___8065;
var G__8068 = cljs.core.count.call(null,c__4290__auto___8065);
var G__8069 = (0);
seq__8035_8054 = G__8066;
chunk__8036_8055 = G__8067;
count__8037_8056 = G__8068;
i__8038_8057 = G__8069;
continue;
}
} else
{var c_8070 = cljs.core.first.call(null,seq__8035_8064__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8070);
{
var G__8071 = cljs.core.next.call(null,seq__8035_8064__$1);
var G__8072 = null;
var G__8073 = (0);
var G__8074 = (0);
seq__8035_8054 = G__8071;
chunk__8036_8055 = G__8072;
count__8037_8056 = G__8073;
i__8038_8057 = G__8074;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_8051);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_8050,v_8051);

}
{
var G__8075 = seq__8029_8045;
var G__8076 = chunk__8030_8046;
var G__8077 = count__8031_8047;
var G__8078 = (i__8032_8048 + (1));
seq__8029_8045 = G__8075;
chunk__8030_8046 = G__8076;
count__8031_8047 = G__8077;
i__8032_8048 = G__8078;
continue;
}
} else
{var temp__4126__auto___8079 = cljs.core.seq.call(null,seq__8029_8045);if(temp__4126__auto___8079)
{var seq__8029_8080__$1 = temp__4126__auto___8079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8029_8080__$1))
{var c__4290__auto___8081 = cljs.core.chunk_first.call(null,seq__8029_8080__$1);{
var G__8082 = cljs.core.chunk_rest.call(null,seq__8029_8080__$1);
var G__8083 = c__4290__auto___8081;
var G__8084 = cljs.core.count.call(null,c__4290__auto___8081);
var G__8085 = (0);
seq__8029_8045 = G__8082;
chunk__8030_8046 = G__8083;
count__8031_8047 = G__8084;
i__8032_8048 = G__8085;
continue;
}
} else
{var vec__8039_8086 = cljs.core.first.call(null,seq__8029_8080__$1);var k_8087 = cljs.core.nth.call(null,vec__8039_8086,(0),null);var v_8088 = cljs.core.nth.call(null,vec__8039_8086,(1),null);var G__8040_8089 = (((k_8087 instanceof cljs.core.Keyword))?k_8087.fqn:null);switch (G__8040_8089) {
case "classes":
var seq__8041_8091 = cljs.core.seq.call(null,v_8088);var chunk__8042_8092 = null;var count__8043_8093 = (0);var i__8044_8094 = (0);while(true){
if((i__8044_8094 < count__8043_8093))
{var c_8095 = cljs.core._nth.call(null,chunk__8042_8092,i__8044_8094);dommy.attrs.add_class_BANG_.call(null,n,c_8095);
{
var G__8096 = seq__8041_8091;
var G__8097 = chunk__8042_8092;
var G__8098 = count__8043_8093;
var G__8099 = (i__8044_8094 + (1));
seq__8041_8091 = G__8096;
chunk__8042_8092 = G__8097;
count__8043_8093 = G__8098;
i__8044_8094 = G__8099;
continue;
}
} else
{var temp__4126__auto___8100__$1 = cljs.core.seq.call(null,seq__8041_8091);if(temp__4126__auto___8100__$1)
{var seq__8041_8101__$1 = temp__4126__auto___8100__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8041_8101__$1))
{var c__4290__auto___8102 = cljs.core.chunk_first.call(null,seq__8041_8101__$1);{
var G__8103 = cljs.core.chunk_rest.call(null,seq__8041_8101__$1);
var G__8104 = c__4290__auto___8102;
var G__8105 = cljs.core.count.call(null,c__4290__auto___8102);
var G__8106 = (0);
seq__8041_8091 = G__8103;
chunk__8042_8092 = G__8104;
count__8043_8093 = G__8105;
i__8044_8094 = G__8106;
continue;
}
} else
{var c_8107 = cljs.core.first.call(null,seq__8041_8101__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8107);
{
var G__8108 = cljs.core.next.call(null,seq__8041_8101__$1);
var G__8109 = null;
var G__8110 = (0);
var G__8111 = (0);
seq__8041_8091 = G__8108;
chunk__8042_8092 = G__8109;
count__8043_8093 = G__8110;
i__8044_8094 = G__8111;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_8088);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_8087,v_8088);

}
{
var G__8112 = cljs.core.next.call(null,seq__8029_8080__$1);
var G__8113 = null;
var G__8114 = (0);
var G__8115 = (0);
seq__8029_8045 = G__8112;
chunk__8030_8046 = G__8113;
count__8031_8047 = G__8114;
i__8032_8048 = G__8115;
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
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
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
}catch (e8116){if((e8116 instanceof ReferenceError))
{var __8117 = e8116;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{throw e8116;

}
}dommy.template.node = (function node(data){if((function (){var G__8119 = data;if(G__8119)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__8119.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8119.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8119);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8119);
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

//# sourceMappingURL=template.js.map