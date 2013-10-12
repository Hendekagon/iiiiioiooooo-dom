goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__3430__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__3430__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("PElement.-elem",this$);
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
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name(node_key);var base_idx = dommy.template.next_css_index(node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((cljs.core.constant$keyword$5)?node_str:null)));var node = document.createElement(tag);if((base_idx >= 0))
{var str_5791 = node_str.substring(base_idx);while(true){
var next_idx_5792 = dommy.template.next_css_index(str_5791,1);var frag_5793 = (((next_idx_5792 >= 0))?str_5791.substring(0,next_idx_5792):str_5791);var G__5790_5794 = frag_5793.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__5790_5794))
{node.setAttribute("id",frag_5793.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__5790_5794))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_5793.substring(1));
} else
{if(cljs.core.constant$keyword$5)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_5793.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_5792 >= 0))
{{
var G__5795 = str_5791.substring(next_idx_5792);
str_5791 = G__5795;
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
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([node_data], 0)))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.cljs$core$IFn$_invoke$arity$2(document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__5801 = data;if(G__5801)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5801.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5801.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(dommy.template.PElement,G__5801);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(dommy.template.PElement,G__5801);
}
})())
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_(data))
{var seq__5802_5806 = cljs.core.seq(data);var chunk__5803_5807 = null;var count__5804_5808 = 0;var i__5805_5809 = 0;while(true){
if((i__5805_5809 < count__5804_5808))
{var child_5810 = chunk__5803_5807.cljs$core$IIndexed$_nth$arity$2(chunk__5803_5807,i__5805_5809);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_5810);
{
var G__5811 = seq__5802_5806;
var G__5812 = chunk__5803_5807;
var G__5813 = count__5804_5808;
var G__5814 = (i__5805_5809 + 1);
seq__5802_5806 = G__5811;
chunk__5803_5807 = G__5812;
count__5804_5808 = G__5813;
i__5805_5809 = G__5814;
continue;
}
} else
{var temp__4092__auto___5815 = cljs.core.seq(seq__5802_5806);if(temp__4092__auto___5815)
{var seq__5802_5816__$1 = temp__4092__auto___5815;if(cljs.core.chunked_seq_QMARK_(seq__5802_5816__$1))
{var c__3561__auto___5817 = cljs.core.chunk_first(seq__5802_5816__$1);{
var G__5818 = cljs.core.chunk_rest(seq__5802_5816__$1);
var G__5819 = c__3561__auto___5817;
var G__5820 = cljs.core.count(c__3561__auto___5817);
var G__5821 = 0;
seq__5802_5806 = G__5818;
chunk__5803_5807 = G__5819;
count__5804_5808 = G__5820;
i__5805_5809 = G__5821;
continue;
}
} else
{var child_5822 = cljs.core.first(seq__5802_5816__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_5822);
{
var G__5823 = cljs.core.next(seq__5802_5816__$1);
var G__5824 = null;
var G__5825 = 0;
var G__5826 = 0;
seq__5802_5806 = G__5823;
chunk__5803_5807 = G__5824;
count__5804_5808 = G__5825;
i__5805_5809 = G__5826;
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
{if(cljs.core.constant$keyword$5)
{return dommy.template.throw_unable_to_make_node(data);
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__5828 = data;if(G__5828)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5828.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5828.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(dommy.template.PElement,G__5828);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(dommy.template.PElement,G__5828);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1(data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__5829){var vec__5848 = p__5829;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5848,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5848,1,null);var children = cljs.core.nthnext(vec__5848,2);var n = dommy.template.base_element(tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_(maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__5849 = maybe_attrs;if(G__5849)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5849.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5849.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(dommy.template.PElement,G__5849);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(dommy.template.PElement,G__5849);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__5850_5866 = cljs.core.seq(attrs);var chunk__5851_5867 = null;var count__5852_5868 = 0;var i__5853_5869 = 0;while(true){
if((i__5853_5869 < count__5852_5868))
{var vec__5854_5870 = chunk__5851_5867.cljs$core$IIndexed$_nth$arity$2(chunk__5851_5867,i__5853_5869);var k_5871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5854_5870,0,null);var v_5872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5854_5870,1,null);var G__5855_5873 = k_5871;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,G__5855_5873))
{var seq__5856_5874 = cljs.core.seq(v_5872);var chunk__5857_5875 = null;var count__5858_5876 = 0;var i__5859_5877 = 0;while(true){
if((i__5859_5877 < count__5858_5876))
{var c_5878 = chunk__5857_5875.cljs$core$IIndexed$_nth$arity$2(chunk__5857_5875,i__5859_5877);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_5878);
{
var G__5879 = seq__5856_5874;
var G__5880 = chunk__5857_5875;
var G__5881 = count__5858_5876;
var G__5882 = (i__5859_5877 + 1);
seq__5856_5874 = G__5879;
chunk__5857_5875 = G__5880;
count__5858_5876 = G__5881;
i__5859_5877 = G__5882;
continue;
}
} else
{var temp__4092__auto___5883 = cljs.core.seq(seq__5856_5874);if(temp__4092__auto___5883)
{var seq__5856_5884__$1 = temp__4092__auto___5883;if(cljs.core.chunked_seq_QMARK_(seq__5856_5884__$1))
{var c__3561__auto___5885 = cljs.core.chunk_first(seq__5856_5884__$1);{
var G__5886 = cljs.core.chunk_rest(seq__5856_5884__$1);
var G__5887 = c__3561__auto___5885;
var G__5888 = cljs.core.count(c__3561__auto___5885);
var G__5889 = 0;
seq__5856_5874 = G__5886;
chunk__5857_5875 = G__5887;
count__5858_5876 = G__5888;
i__5859_5877 = G__5889;
continue;
}
} else
{var c_5890 = cljs.core.first(seq__5856_5884__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_5890);
{
var G__5891 = cljs.core.next(seq__5856_5884__$1);
var G__5892 = null;
var G__5893 = 0;
var G__5894 = 0;
seq__5856_5874 = G__5891;
chunk__5857_5875 = G__5892;
count__5858_5876 = G__5893;
i__5859_5877 = G__5894;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,G__5855_5873))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_5872);
} else
{if(cljs.core.constant$keyword$5)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_5871,v_5872);
} else
{}
}
}
{
var G__5895 = seq__5850_5866;
var G__5896 = chunk__5851_5867;
var G__5897 = count__5852_5868;
var G__5898 = (i__5853_5869 + 1);
seq__5850_5866 = G__5895;
chunk__5851_5867 = G__5896;
count__5852_5868 = G__5897;
i__5853_5869 = G__5898;
continue;
}
} else
{var temp__4092__auto___5899 = cljs.core.seq(seq__5850_5866);if(temp__4092__auto___5899)
{var seq__5850_5900__$1 = temp__4092__auto___5899;if(cljs.core.chunked_seq_QMARK_(seq__5850_5900__$1))
{var c__3561__auto___5901 = cljs.core.chunk_first(seq__5850_5900__$1);{
var G__5902 = cljs.core.chunk_rest(seq__5850_5900__$1);
var G__5903 = c__3561__auto___5901;
var G__5904 = cljs.core.count(c__3561__auto___5901);
var G__5905 = 0;
seq__5850_5866 = G__5902;
chunk__5851_5867 = G__5903;
count__5852_5868 = G__5904;
i__5853_5869 = G__5905;
continue;
}
} else
{var vec__5860_5906 = cljs.core.first(seq__5850_5900__$1);var k_5907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5860_5906,0,null);var v_5908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5860_5906,1,null);var G__5861_5909 = k_5907;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,G__5861_5909))
{var seq__5862_5910 = cljs.core.seq(v_5908);var chunk__5863_5911 = null;var count__5864_5912 = 0;var i__5865_5913 = 0;while(true){
if((i__5865_5913 < count__5864_5912))
{var c_5914 = chunk__5863_5911.cljs$core$IIndexed$_nth$arity$2(chunk__5863_5911,i__5865_5913);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_5914);
{
var G__5915 = seq__5862_5910;
var G__5916 = chunk__5863_5911;
var G__5917 = count__5864_5912;
var G__5918 = (i__5865_5913 + 1);
seq__5862_5910 = G__5915;
chunk__5863_5911 = G__5916;
count__5864_5912 = G__5917;
i__5865_5913 = G__5918;
continue;
}
} else
{var temp__4092__auto___5919__$1 = cljs.core.seq(seq__5862_5910);if(temp__4092__auto___5919__$1)
{var seq__5862_5920__$1 = temp__4092__auto___5919__$1;if(cljs.core.chunked_seq_QMARK_(seq__5862_5920__$1))
{var c__3561__auto___5921 = cljs.core.chunk_first(seq__5862_5920__$1);{
var G__5922 = cljs.core.chunk_rest(seq__5862_5920__$1);
var G__5923 = c__3561__auto___5921;
var G__5924 = cljs.core.count(c__3561__auto___5921);
var G__5925 = 0;
seq__5862_5910 = G__5922;
chunk__5863_5911 = G__5923;
count__5864_5912 = G__5924;
i__5865_5913 = G__5925;
continue;
}
} else
{var c_5926 = cljs.core.first(seq__5862_5920__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_5926);
{
var G__5927 = cljs.core.next(seq__5862_5920__$1);
var G__5928 = null;
var G__5929 = 0;
var G__5930 = 0;
seq__5862_5910 = G__5927;
chunk__5863_5911 = G__5928;
count__5864_5912 = G__5929;
i__5865_5913 = G__5930;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,G__5861_5909))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_5908);
} else
{if(cljs.core.constant$keyword$5)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_5907,v_5908);
} else
{}
}
}
{
var G__5931 = cljs.core.next(seq__5850_5900__$1);
var G__5932 = null;
var G__5933 = 0;
var G__5934 = 0;
seq__5850_5866 = G__5931;
chunk__5851_5867 = G__5932;
count__5852_5868 = G__5933;
i__5853_5869 = G__5934;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like(children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element(this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return dommy.template.compound_element(this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
}catch (e5935){if((e5935 instanceof ReferenceError))
{var __5936 = e5935;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$5)
{throw e5935;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__5938 = data;if(G__5938)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5938.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5938.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(dommy.template.PElement,G__5938);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(dommy.template.PElement,G__5938);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.throw_unable_to_make_node(data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq(Array.prototype.slice.call(parent.childNodes));
});
