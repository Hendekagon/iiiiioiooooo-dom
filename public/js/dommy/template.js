// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
dommy.template.PElement = (function (){var obj6898 = {};return obj6898;
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
{var str_6901 = node_str.substring(base_idx);while(true){
var next_idx_6902 = dommy.template.next_css_index.call(null,str_6901,(1));var frag_6903 = (((next_idx_6902 >= (0)))?str_6901.substring((0),next_idx_6902):str_6901);var G__6900_6904 = frag_6903.charAt((0));switch (G__6900_6904) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_6903.substring((1)));

break;
case "#":
node.setAttribute("id",frag_6903.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_6903.charAt((0))))));

}
if((next_idx_6902 >= (0)))
{{
var G__6906 = str_6901.substring(next_idx_6902);
str_6901 = G__6906;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__6912 = data;if(G__6912)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__6912.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6912.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6912);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6912);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6913_6917 = cljs.core.seq.call(null,data);var chunk__6914_6918 = null;var count__6915_6919 = (0);var i__6916_6920 = (0);while(true){
if((i__6916_6920 < count__6915_6919))
{var child_6921 = cljs.core._nth.call(null,chunk__6914_6918,i__6916_6920);__GT_document_fragment.call(null,result_frag,child_6921);
{
var G__6922 = seq__6913_6917;
var G__6923 = chunk__6914_6918;
var G__6924 = count__6915_6919;
var G__6925 = (i__6916_6920 + (1));
seq__6913_6917 = G__6922;
chunk__6914_6918 = G__6923;
count__6915_6919 = G__6924;
i__6916_6920 = G__6925;
continue;
}
} else
{var temp__4126__auto___6926 = cljs.core.seq.call(null,seq__6913_6917);if(temp__4126__auto___6926)
{var seq__6913_6927__$1 = temp__4126__auto___6926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6913_6927__$1))
{var c__4290__auto___6928 = cljs.core.chunk_first.call(null,seq__6913_6927__$1);{
var G__6929 = cljs.core.chunk_rest.call(null,seq__6913_6927__$1);
var G__6930 = c__4290__auto___6928;
var G__6931 = cljs.core.count.call(null,c__4290__auto___6928);
var G__6932 = (0);
seq__6913_6917 = G__6929;
chunk__6914_6918 = G__6930;
count__6915_6919 = G__6931;
i__6916_6920 = G__6932;
continue;
}
} else
{var child_6933 = cljs.core.first.call(null,seq__6913_6927__$1);__GT_document_fragment.call(null,result_frag,child_6933);
{
var G__6934 = cljs.core.next.call(null,seq__6913_6927__$1);
var G__6935 = null;
var G__6936 = (0);
var G__6937 = (0);
seq__6913_6917 = G__6934;
chunk__6914_6918 = G__6935;
count__6915_6919 = G__6936;
i__6916_6920 = G__6937;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__6939 = data;if(G__6939)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__6939.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6939.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6939);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6939);
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
dommy.template.compound_element = (function compound_element(p__6940){var vec__6960 = p__6940;var tag_name = cljs.core.nth.call(null,vec__6960,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__6960,(1),null);var children = cljs.core.nthnext.call(null,vec__6960,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__6962 = maybe_attrs;if(G__6962)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__6962.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6962.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6962);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6962);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__6963_6979 = cljs.core.seq.call(null,attrs);var chunk__6964_6980 = null;var count__6965_6981 = (0);var i__6966_6982 = (0);while(true){
if((i__6966_6982 < count__6965_6981))
{var vec__6967_6983 = cljs.core._nth.call(null,chunk__6964_6980,i__6966_6982);var k_6984 = cljs.core.nth.call(null,vec__6967_6983,(0),null);var v_6985 = cljs.core.nth.call(null,vec__6967_6983,(1),null);var G__6968_6986 = (((k_6984 instanceof cljs.core.Keyword))?k_6984.fqn:null);switch (G__6968_6986) {
case "classes":
var seq__6969_6988 = cljs.core.seq.call(null,v_6985);var chunk__6970_6989 = null;var count__6971_6990 = (0);var i__6972_6991 = (0);while(true){
if((i__6972_6991 < count__6971_6990))
{var c_6992 = cljs.core._nth.call(null,chunk__6970_6989,i__6972_6991);dommy.attrs.add_class_BANG_.call(null,n,c_6992);
{
var G__6993 = seq__6969_6988;
var G__6994 = chunk__6970_6989;
var G__6995 = count__6971_6990;
var G__6996 = (i__6972_6991 + (1));
seq__6969_6988 = G__6993;
chunk__6970_6989 = G__6994;
count__6971_6990 = G__6995;
i__6972_6991 = G__6996;
continue;
}
} else
{var temp__4126__auto___6997 = cljs.core.seq.call(null,seq__6969_6988);if(temp__4126__auto___6997)
{var seq__6969_6998__$1 = temp__4126__auto___6997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6969_6998__$1))
{var c__4290__auto___6999 = cljs.core.chunk_first.call(null,seq__6969_6998__$1);{
var G__7000 = cljs.core.chunk_rest.call(null,seq__6969_6998__$1);
var G__7001 = c__4290__auto___6999;
var G__7002 = cljs.core.count.call(null,c__4290__auto___6999);
var G__7003 = (0);
seq__6969_6988 = G__7000;
chunk__6970_6989 = G__7001;
count__6971_6990 = G__7002;
i__6972_6991 = G__7003;
continue;
}
} else
{var c_7004 = cljs.core.first.call(null,seq__6969_6998__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7004);
{
var G__7005 = cljs.core.next.call(null,seq__6969_6998__$1);
var G__7006 = null;
var G__7007 = (0);
var G__7008 = (0);
seq__6969_6988 = G__7005;
chunk__6970_6989 = G__7006;
count__6971_6990 = G__7007;
i__6972_6991 = G__7008;
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
dommy.attrs.add_class_BANG_.call(null,n,v_6985);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_6984,v_6985);

}
{
var G__7009 = seq__6963_6979;
var G__7010 = chunk__6964_6980;
var G__7011 = count__6965_6981;
var G__7012 = (i__6966_6982 + (1));
seq__6963_6979 = G__7009;
chunk__6964_6980 = G__7010;
count__6965_6981 = G__7011;
i__6966_6982 = G__7012;
continue;
}
} else
{var temp__4126__auto___7013 = cljs.core.seq.call(null,seq__6963_6979);if(temp__4126__auto___7013)
{var seq__6963_7014__$1 = temp__4126__auto___7013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6963_7014__$1))
{var c__4290__auto___7015 = cljs.core.chunk_first.call(null,seq__6963_7014__$1);{
var G__7016 = cljs.core.chunk_rest.call(null,seq__6963_7014__$1);
var G__7017 = c__4290__auto___7015;
var G__7018 = cljs.core.count.call(null,c__4290__auto___7015);
var G__7019 = (0);
seq__6963_6979 = G__7016;
chunk__6964_6980 = G__7017;
count__6965_6981 = G__7018;
i__6966_6982 = G__7019;
continue;
}
} else
{var vec__6973_7020 = cljs.core.first.call(null,seq__6963_7014__$1);var k_7021 = cljs.core.nth.call(null,vec__6973_7020,(0),null);var v_7022 = cljs.core.nth.call(null,vec__6973_7020,(1),null);var G__6974_7023 = (((k_7021 instanceof cljs.core.Keyword))?k_7021.fqn:null);switch (G__6974_7023) {
case "classes":
var seq__6975_7025 = cljs.core.seq.call(null,v_7022);var chunk__6976_7026 = null;var count__6977_7027 = (0);var i__6978_7028 = (0);while(true){
if((i__6978_7028 < count__6977_7027))
{var c_7029 = cljs.core._nth.call(null,chunk__6976_7026,i__6978_7028);dommy.attrs.add_class_BANG_.call(null,n,c_7029);
{
var G__7030 = seq__6975_7025;
var G__7031 = chunk__6976_7026;
var G__7032 = count__6977_7027;
var G__7033 = (i__6978_7028 + (1));
seq__6975_7025 = G__7030;
chunk__6976_7026 = G__7031;
count__6977_7027 = G__7032;
i__6978_7028 = G__7033;
continue;
}
} else
{var temp__4126__auto___7034__$1 = cljs.core.seq.call(null,seq__6975_7025);if(temp__4126__auto___7034__$1)
{var seq__6975_7035__$1 = temp__4126__auto___7034__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6975_7035__$1))
{var c__4290__auto___7036 = cljs.core.chunk_first.call(null,seq__6975_7035__$1);{
var G__7037 = cljs.core.chunk_rest.call(null,seq__6975_7035__$1);
var G__7038 = c__4290__auto___7036;
var G__7039 = cljs.core.count.call(null,c__4290__auto___7036);
var G__7040 = (0);
seq__6975_7025 = G__7037;
chunk__6976_7026 = G__7038;
count__6977_7027 = G__7039;
i__6978_7028 = G__7040;
continue;
}
} else
{var c_7041 = cljs.core.first.call(null,seq__6975_7035__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7041);
{
var G__7042 = cljs.core.next.call(null,seq__6975_7035__$1);
var G__7043 = null;
var G__7044 = (0);
var G__7045 = (0);
seq__6975_7025 = G__7042;
chunk__6976_7026 = G__7043;
count__6977_7027 = G__7044;
i__6978_7028 = G__7045;
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
dommy.attrs.add_class_BANG_.call(null,n,v_7022);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7021,v_7022);

}
{
var G__7046 = cljs.core.next.call(null,seq__6963_7014__$1);
var G__7047 = null;
var G__7048 = (0);
var G__7049 = (0);
seq__6963_6979 = G__7046;
chunk__6964_6980 = G__7047;
count__6965_6981 = G__7048;
i__6966_6982 = G__7049;
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
}catch (e7050){if((e7050 instanceof ReferenceError))
{var __7051 = e7050;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{throw e7050;

}
}dommy.template.node = (function node(data){if((function (){var G__7053 = data;if(G__7053)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__7053.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7053.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7053);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7053);
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