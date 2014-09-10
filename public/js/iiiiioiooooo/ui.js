// Compiled by ClojureScript 0.0-2322
goog.provide('iiiiioiooooo.ui');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('dommy.core');
goog.require('dommy.template');
goog.require('goog.events.KeyHandler');
goog.require('dommy.template');
goog.require('dommy.core');
goog.require('iiiiioiooooo.core.structure');
goog.require('clojure.zip');
goog.require('cljs.core.match');
goog.require('goog.events.KeyCodes');
goog.require('iiiiioiooooo.core.structure');
goog.require('clojure.browser.event');
iiiiioiooooo.ui.mouse = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
iiiiioiooooo.ui.pi = 3.1415926;
iiiiioiooooo.ui.pi2 = ((2) * iiiiioiooooo.ui.pi);
iiiiioiooooo.ui.pi4 = (iiiiioiooooo.ui.pi / (4));
iiiiioiooooo.ui.events = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"dragover","dragover",-1169536926),new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.Keyword(null,"touchmove","touchmove",1885249923),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),new cljs.core.Keyword(null,"connect","connect",1232828233),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"touchcancel","touchcancel",-669291029),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"pagehide","pagehide",-250178324),new cljs.core.Keyword(null,"dragenter","dragenter",-237546900),new cljs.core.Keyword(null,"DOMFocusIn","DOMFocusIn",170177329),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"hashchange","hashchange",1795201042),new cljs.core.Keyword(null,"touchend","touchend",-1574059019),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"losecapture","losecapture",-1246437481),new cljs.core.Keyword(null,"dragstart","dragstart",955864218),new cljs.core.Keyword(null,"pageshow","pageshow",908411642),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"cut","cut",-1042666209)],[new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),new cljs.core.Keyword(null,"dragleave","dragleave",-624601572),new cljs.core.Keyword(null,"touchstart","touchstart",369858804),new cljs.core.Keyword(null,"deactivate","deactivate",-1313810707),new cljs.core.Keyword(null,"help","help",-439233446),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"DOMFocusOut","DOMFocusOut",1299651608),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),new cljs.core.Keyword(null,"propertychange","propertychange",-290217588),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),new cljs.core.Keyword(null,"selectstart","selectstart",779267126),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"dblclick","dblclick",-1821330376),new cljs.core.Keyword(null,"unload","unload",-1943436244),new cljs.core.Keyword(null,"readystatechange","readystatechange",-392377168),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"keypress","keypress",1625181642),new cljs.core.Keyword(null,"popstate","popstate",942216014),new cljs.core.Keyword(null,"scroll","scroll",971553779),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"resize","resize",297367086)]);
iiiiioiooooo.ui.alphabet = cljs.core.PersistentHashMap.fromArrays([(65),(70),(74),(86),(72),(69),(85),(88),(77),(75),(90),(89),(66),(82),(76),(68),(83),(78),(81),(79),(87),(73),(67),(71),(80),(84)],[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"t","t",-1397832519)]);
iiiiioiooooo.ui.numbers = cljs.core.PersistentHashMap.fromArrays([(55),(54),(48),(50),(56),(51),(57),(53),(52),(49)],[new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"6","6",-1107752709),new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"1","1",-521621649)]);
iiiiioiooooo.ui.keycode_to_keyword = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([(186),(188),(59),(20),(27),(39),(46),(222),(144),(192),(221),(32),(40),(91),(33),(13),(109),(191),(36),(187),(219),(93),(189),(220),(34),(17),(107),(35),(19),(9),(145),(45),(16),(38),(18),(37),(8),(190)],[new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"capslock","capslock",442493366),new cljs.core.Keyword(null,"esc","esc",-1671924121),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword("iiiiioiooooo.ui","apostrophe","iiiiioiooooo.ui/apostrophe",-1585468518),new cljs.core.Keyword(null,"numlock","numlock",-1383996470),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"rightbracket","rightbracket",1179726122),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"leftmeta","leftmeta",-352234749),new cljs.core.Keyword(null,"pageup","pageup",1714543403),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"forwardslash","forwardslash",-1708238052),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"leftbracket","leftbracket",-1642269680),new cljs.core.Keyword(null,"rightmeta","rightmeta",-1579889813),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"backslash","backslash",1790786526),new cljs.core.Keyword(null,"pagedown","pagedown",-2069718984),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"scrolllock","scrolllock",-960203019),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"dot","dot",1442709401)]),iiiiioiooooo.ui.alphabet,iiiiioiooooo.ui.numbers);
iiiiioiooooo.ui.keycode_to_keyword_up = cljs.core.zipmap.call(null,cljs.core.keys.call(null,iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.call(null,(function (k){return cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"-up"));
}),cljs.core.vals.call(null,iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.keycode_to_keyword_down = cljs.core.zipmap.call(null,cljs.core.keys.call(null,iiiiioiooooo.ui.keycode_to_keyword),cljs.core.map.call(null,(function (k){return cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"-down"));
}),cljs.core.vals.call(null,iiiiioiooooo.ui.keycode_to_keyword)));
iiiiioiooooo.ui.f = cljs.core.partial;
iiiiioiooooo.ui.k = cljs.core.comp;
iiiiioiooooo.ui.is_modifier = (function is_modifier(keycode){return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(20),null,(91),null,(93),null,(17),null,(16),null,(18),null], null), null).call(null,keycode);
});
iiiiioiooooo.ui.isnt_modifier = cljs.core.complement.call(null,iiiiioiooooo.ui.is_modifier);
iiiiioiooooo.ui.if_firefox = (function if_firefox(a,b){try{if(cljs.core.truth_(KeyEvent))
{return a;
} else
{return null;
}
}catch (e6680){if((e6680 instanceof Error))
{var er = e6680;return b;
} else
{throw e6680;

}
}});
iiiiioiooooo.ui.log = (function() {
var log = null;
var log__1 = (function (m){return console.log(m);
});
var log__2 = (function (m1,m2){return console.log(m1,m2);
});
var log__3 = (function (m1,m2,m3){return console.log(m1,m2,m3);
});
var log__4 = (function (m1,m2,m3,m4){return console.log(m1,m2,m3,m4);
});
log = function(m1,m2,m3,m4){
switch(arguments.length){
case 1:
return log__1.call(this,m1);
case 2:
return log__2.call(this,m1,m2);
case 3:
return log__3.call(this,m1,m2,m3);
case 4:
return log__4.call(this,m1,m2,m3,m4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$core$IFn$_invoke$arity$1 = log__1;
log.cljs$core$IFn$_invoke$arity$2 = log__2;
log.cljs$core$IFn$_invoke$arity$3 = log__3;
log.cljs$core$IFn$_invoke$arity$4 = log__4;
return log;
})()
;
iiiiioiooooo.ui.to_str = (function to_str(n){if((cljs.core.fn_QMARK_.call(null,n)) && (!(cljs.core.associative_QMARK_.call(null,n))))
{return n.name.replace("_","-");
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));

}
});
iiiiioiooooo.ui.maybe = (function maybe(f,x){if(cljs.core.truth_(x))
{return f.call(null,x);
} else
{return x;
}
});
iiiiioiooooo.ui.add_eval = (function add_eval(s){return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),null,(function (s__$1,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc_in.call(null,x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null),(function (s__$2,x__$1){return iiiiioiooooo.core.structure.modified.call(null,x__$1,(function (l){iiiiioiooooo.ui.log.call(null,"evaluating! ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,l))));
return clojure.zip.insert_right.call(null,l,"qwe");
}));
})),s__$1);
}));
});
iiiiioiooooo.ui.add_info = (function add_info(s){return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),null,(function (s__$1,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc_in.call(null,x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"forwardslash","forwardslash",-1708238052),new cljs.core.Keyword(null,"forwardslash","forwardslash",-1708238052)], null),(function (s__$2,x__$1){iiiiioiooooo.ui.log.call(null,"meta: ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(x__$1))))));
return x__$1;
})),s__$1);
}));
});
iiiiioiooooo.ui.keydown = (function keydown(state,e){e.preventDefault();
return iiiiioiooooo.core.structure.update_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186)], null));
});
iiiiioiooooo.ui.keyup = (function keyup(state,e){return iiiiioiooooo.core.structure.update_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),iiiiioiooooo.ui.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keyup","keyup",-794526927)], null));
});
iiiiioiooooo.ui.create_image_data = (function create_image_data(context,w,h){return context.createImageData(w,h);
});
iiiiioiooooo.ui.put_image_data_BANG_ = (function() {
var put_image_data_BANG_ = null;
var put_image_data_BANG___2 = (function (context,image_data){return put_image_data_BANG_.call(null,context,image_data,(0),(0));
});
var put_image_data_BANG___4 = (function (context,image_data,x,y){return context.putImageData(image_data,x,y);
});
put_image_data_BANG_ = function(context,image_data,x,y){
switch(arguments.length){
case 2:
return put_image_data_BANG___2.call(this,context,image_data);
case 4:
return put_image_data_BANG___4.call(this,context,image_data,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_image_data_BANG_.cljs$core$IFn$_invoke$arity$2 = put_image_data_BANG___2;
put_image_data_BANG_.cljs$core$IFn$_invoke$arity$4 = put_image_data_BANG___4;
return put_image_data_BANG_;
})()
;
/**
* Make a context and image-data from the given canvas element
*/
iiiiioiooooo.ui.context = (function() {
var context = null;
var context__0 = (function (){return context.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("canvas"))[(0)]));
});
var context__1 = (function (canvas){return context.call(null,canvas,canvas.getContext("2d"));
});
var context__2 = (function (canvas,context__$1){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,new cljs.core.Keyword(null,"context","context",-830191113),context__$1,new cljs.core.Keyword(null,"w","w",354169001),canvas.width,new cljs.core.Keyword(null,"h","h",1109658740),canvas.height,new cljs.core.Keyword(null,"image-data","image-data",-377483758),iiiiioiooooo.ui.create_image_data.call(null,context__$1,canvas.width,canvas.height)], null);
});
context = function(canvas,context__$1){
switch(arguments.length){
case 0:
return context__0.call(this);
case 1:
return context__1.call(this,canvas);
case 2:
return context__2.call(this,canvas,context__$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
context.cljs$core$IFn$_invoke$arity$0 = context__0;
context.cljs$core$IFn$_invoke$arity$1 = context__1;
context.cljs$core$IFn$_invoke$arity$2 = context__2;
return context;
})()
;
iiiiioiooooo.ui.rt = (function rt(c,w,h,direction,node,type,r,p__6681,focality){var vec__6760 = p__6681;var tx = cljs.core.nth.call(null,vec__6760,(0),null);var ty = cljs.core.nth.call(null,vec__6760,(1),null);try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"_","_",1453416199)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.setTransform((1),(0),(0),(1),(0),(0)),c.clearRect((0),(0),w,h),c.scale((2),(2)),c.translate(tx,ty),c.rotate(r),c.save()], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6837){if((e6837 instanceof Error))
{var e__4950__auto__ = e6837;if((e__4950__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto__;
}
} else
{throw e6837;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6809){if((e6809 instanceof Error))
{var e__4950__auto__ = e6809;if((e__4950__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"v","v",21465059)))
{try{if(cljs.core._EQ_.call(null,node,new cljs.core.Symbol(null,"list","list",-1889078086,null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.closePath(),c.translate((0),(30)),c.rotate(iiiiioiooooo.ui.pi4),c.scale(0.97,0.97),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(80),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6836){if((e6836 instanceof Error))
{var e__4950__auto____$1 = e6836;if((e__4950__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$1;
}
} else
{throw e6836;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6835){if((e6835 instanceof Error))
{var e__4950__auto____$1 = e6835;if((e__4950__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$1;
}
} else
{throw e6835;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6810){if((e6810 instanceof Error))
{var e__4950__auto____$1 = e6810;if((e__4950__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"v","v",21465059)))
{try{if(cljs.core._EQ_.call(null,node,new cljs.core.Symbol(null,"map","map",-1282745308,null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.save(),c.translate((0),(30)),c.rotate(iiiiioiooooo.ui.pi4),c.scale(0.97,0.97),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(160),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6834){if((e6834 instanceof Error))
{var e__4950__auto____$2 = e6834;if((e__4950__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$2;
}
} else
{throw e6834;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6833){if((e6833 instanceof Error))
{var e__4950__auto____$2 = e6833;if((e__4950__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$2;
}
} else
{throw e6833;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6811){if((e6811 instanceof Error))
{var e__4950__auto____$2 = e6811;if((e__4950__auto____$2 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"v","v",21465059)))
{try{if(cljs.core._EQ_.call(null,node,new cljs.core.Symbol(null,"vector","vector",-751469611,null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.save(),c.translate((0),(30)),c.rotate(iiiiioiooooo.ui.pi4),c.scale(1.1,1.1),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(160),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6832){if((e6832 instanceof Error))
{var e__4950__auto____$3 = e6832;if((e__4950__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$3;
}
} else
{throw e6832;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6831){if((e6831 instanceof Error))
{var e__4950__auto____$3 = e6831;if((e__4950__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$3;
}
} else
{throw e6831;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6812){if((e6812 instanceof Error))
{var e__4950__auto____$3 = e6812;if((e__4950__auto____$3 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"number","number",1570378438)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.translate((21),(0)),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(10),(10))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6830){if((e6830 instanceof Error))
{var e__4950__auto____$4 = e6830;if((e__4950__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$4;
}
} else
{throw e6830;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6813){if((e6813 instanceof Error))
{var e__4950__auto____$4 = e6813;if((e__4950__auto____$4 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"string","string",-1989541586)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.translate((21),(0)),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(10),(10))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6829){if((e6829 instanceof Error))
{var e__4950__auto____$5 = e6829;if((e__4950__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$5;
}
} else
{throw e6829;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6814){if((e6814 instanceof Error))
{var e__4950__auto____$5 = e6814;if((e__4950__auto____$5 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"zipper","zipper",1500694438)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.translate((21),(0)),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(10),(1000))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6828){if((e6828 instanceof Error))
{var e__4950__auto____$6 = e6828;if((e__4950__auto____$6 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$6;
}
} else
{throw e6828;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6815){if((e6815 instanceof Error))
{var e__4950__auto____$6 = e6815;if((e__4950__auto____$6 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"v","v",21465059)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.save(),c.translate((0),(30)),c.rotate(iiiiioiooooo.ui.pi4),c.scale(0.97,0.97),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(40),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6825){if((e6825 instanceof Error))
{var e__4950__auto____$7 = e6825;if((e__4950__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$7;
}
} else
{throw e6825;

}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,">",">",-555517146)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.translate((21),(0)),c.rotate((0)),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(20),(20))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6826){if((e6826 instanceof Error))
{var e__4950__auto____$7 = e6826;if((e__4950__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$7;
}
} else
{throw e6826;

}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"A","A",-1688942394)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,focality,new cljs.core.Keyword(null,"focus","focus",234677911)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.restore(),c.translate((40),(0)),c.rotate(((-1) * iiiiioiooooo.ui.pi4)),c.fillStyle = "rgba(100,230,255,0.8)",c.fillRect((0),(0),(20),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6827){if((e6827 instanceof Error))
{var e__4950__auto____$7 = e6827;if((e__4950__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$7;
}
} else
{throw e6827;

}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"_","_",1453416199)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.setTransform((1),(0),(0),(1),(0),(0)),c.clearRect((0),(0),w,h),c.scale((2),(2)),c.translate(tx,ty),c.rotate(r),c.save()], null);
} else
{throw cljs.core.match.backtrack;

}
}
}
}
}catch (e6816){if((e6816 instanceof Error))
{var e__4950__auto____$7 = e6816;if((e__4950__auto____$7 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"v","v",21465059)))
{try{if(cljs.core._EQ_.call(null,node,new cljs.core.Symbol(null,"list","list",-1889078086,null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.save(),c.translate((0),(30)),c.rotate(iiiiioiooooo.ui.pi4),c.scale(0.97,0.97),c.fillStyle = "rgba(100,200,255,0.3)",c.fillRect((0),(0),(80),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6824){if((e6824 instanceof Error))
{var e__4950__auto____$8 = e6824;if((e__4950__auto____$8 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$8;
}
} else
{throw e6824;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6817){if((e6817 instanceof Error))
{var e__4950__auto____$8 = e6817;if((e__4950__auto____$8 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"v","v",21465059)))
{try{if(cljs.core._EQ_.call(null,node,new cljs.core.Symbol(null,"map","map",-1282745308,null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.save(),c.translate((0),(30)),c.rotate(iiiiioiooooo.ui.pi4),c.scale(0.97,0.97),c.fillStyle = "rgba(10,50,150,0.3)",c.fillRect((0),(0),(160),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6823){if((e6823 instanceof Error))
{var e__4950__auto____$9 = e6823;if((e__4950__auto____$9 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$9;
}
} else
{throw e6823;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6818){if((e6818 instanceof Error))
{var e__4950__auto____$9 = e6818;if((e__4950__auto____$9 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"v","v",21465059)))
{try{if(cljs.core._EQ_.call(null,node,new cljs.core.Symbol(null,"vector","vector",-751469611,null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.save(),c.translate((0),(30)),c.rotate(iiiiioiooooo.ui.pi4),c.scale(1.1,1.1),c.fillStyle = "rgba(10,50,250,0.3)",c.fillRect((0),(0),(160),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e6822){if((e6822 instanceof Error))
{var e__4950__auto____$10 = e6822;if((e__4950__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4950__auto____$10;
}
} else
{throw e6822;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e6819){if((e6819 instanceof Error))
{var e__4950__auto____$10 = e6819;if((e__4950__auto____$10 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"number","number",1570378438)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.translate((21),(0)),c.fillStyle = "rgba(0,0,100,0.99)",c.fillRect((0),(0),(10),(10))], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"string","string",-1989541586)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.translate((21),(0)),c.fillStyle = "rgba(255,255,0,0.99)",c.fillRect((0),(0),(10),(10))], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"zipper","zipper",1500694438)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.translate((21),(0)),c.fillStyle = "rgba(0,100,255,0.8)",c.fillRect((0),(0),(10),(1000))], null);
} else
{throw cljs.core.match.backtrack;

}
}
}
}catch (e6820){if((e6820 instanceof Error))
{var e__4950__auto____$11 = e6820;if((e__4950__auto____$11 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"v","v",21465059)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.save(),c.translate((0),(30)),c.rotate(iiiiioiooooo.ui.pi4),c.scale(0.97,0.97),c.fillStyle = "rgba(255,0,0,0.3)",c.fillRect((0),(0),(40),(40))], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,">",">",-555517146)))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.translate((21),(0)),c.rotate((0)),c.fillStyle = "rgba(255,200,0,0.5)",c.fillRect((0),(0),(20),(20))], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,direction,new cljs.core.Keyword(null,"A","A",-1688942394)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.restore(),c.translate((40),(0)),c.rotate(((-1) * iiiiioiooooo.ui.pi4)),c.fillStyle = "rgba(100,50,250,0.5)",c.fillRect((0),(0),(20),(40))], null);
} else
{throw cljs.core.match.backtrack;

}
}
}
}catch (e6821){if((e6821 instanceof Error))
{var e__4950__auto____$12 = e6821;if((e__4950__auto____$12 === cljs.core.match.backtrack))
{return cljs.core.PersistentVector.EMPTY;
} else
{throw e__4950__auto____$12;
}
} else
{throw e6821;

}
}} else
{throw e__4950__auto____$11;
}
} else
{throw e6820;

}
}} else
{throw e__4950__auto____$10;
}
} else
{throw e6819;

}
}} else
{throw e__4950__auto____$9;
}
} else
{throw e6818;

}
}} else
{throw e__4950__auto____$8;
}
} else
{throw e6817;

}
}} else
{throw e__4950__auto____$7;
}
} else
{throw e6816;

}
}} else
{throw e__4950__auto____$6;
}
} else
{throw e6815;

}
}} else
{throw e__4950__auto____$5;
}
} else
{throw e6814;

}
}} else
{throw e__4950__auto____$4;
}
} else
{throw e6813;

}
}} else
{throw e__4950__auto____$3;
}
} else
{throw e6812;

}
}} else
{throw e__4950__auto____$2;
}
} else
{throw e6811;

}
}} else
{throw e__4950__auto____$1;
}
} else
{throw e6810;

}
}} else
{throw e__4950__auto__;
}
} else
{throw e6809;

}
}});
iiiiioiooooo.ui.show = (function show(p__6838){var map__6843 = p__6838;var map__6843__$1 = ((cljs.core.seq_QMARK_.call(null,map__6843))?cljs.core.apply.call(null,cljs.core.hash_map,map__6843):map__6843);var map__6844 = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));var map__6844__$1 = ((cljs.core.seq_QMARK_.call(null,map__6844))?cljs.core.apply.call(null,cljs.core.hash_map,map__6844):map__6844);var c = cljs.core.get.call(null,map__6844__$1,new cljs.core.Keyword(null,"context","context",-830191113));var w = cljs.core.get.call(null,map__6844__$1,new cljs.core.Keyword(null,"w","w",354169001));var h = cljs.core.get.call(null,map__6844__$1,new cljs.core.Keyword(null,"h","h",1109658740));var r = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));var trans = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));var root = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"context","context",-830191113));var focus = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"focus","focus",234677911));var selected = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"selected","selected",574897764));iiiiioiooooo.ui.log.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(16),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,focus))))));
return cljs.core.dorun.call(null,cljs.core.mapcat.call(null,((function (map__6843,map__6843__$1,map__6844,map__6844__$1,c,w,h,r,trans,root,focus,selected){
return (function (p__6845){var vec__6846 = p__6845;var l = cljs.core.nth.call(null,vec__6846,(0),null);var d = cljs.core.nth.call(null,vec__6846,(1),null);return iiiiioiooooo.ui.rt.call(null,c,w,h,d,clojure.zip.node.call(null,l),iiiiioiooooo.core.structure.type_str.call(null,clojure.zip.node.call(null,l)),r,trans,((cljs.core._EQ_.call(null,focus,l))?new cljs.core.Keyword(null,"focus","focus",234677911):new cljs.core.Keyword(null,"else","else",-1508377146)));
});})(map__6843,map__6843__$1,map__6844,map__6844__$1,c,w,h,r,trans,root,focus,selected))
,iiiiioiooooo.core.structure.ree.call(null,root)));
});
iiiiioiooooo.ui.show_update = (function show_update(s){return iiiiioiooooo.ui.show.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(s)));
});
iiiiioiooooo.ui.test_pattern = (function test_pattern(p__6847){var map__6850 = p__6847;var map__6850__$1 = ((cljs.core.seq_QMARK_.call(null,map__6850))?cljs.core.apply.call(null,cljs.core.hash_map,map__6850):map__6850);var map__6851 = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));var map__6851__$1 = ((cljs.core.seq_QMARK_.call(null,map__6851))?cljs.core.apply.call(null,cljs.core.hash_map,map__6851):map__6851);var c = cljs.core.get.call(null,map__6851__$1,new cljs.core.Keyword(null,"context","context",-830191113));var w = cljs.core.get.call(null,map__6851__$1,new cljs.core.Keyword(null,"w","w",354169001));var h = cljs.core.get.call(null,map__6851__$1,new cljs.core.Keyword(null,"h","h",1109658740));cljs.core.dorun.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.setTransform((1),(0),(0),(1),(0),(0)),c.clearRect((0),(0),w,h),c.save()], null));
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,cljs.core.partial.call(null,iiiiioiooooo.ui.rt,c,w,h),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">",">",-555517146)], null)));
});
iiiiioiooooo.ui.add_ui = (function add_ui(s,ui){return iiiiioiooooo.core.structure.update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),new cljs.core.Keyword(null,"no-event","no-event",-844355878),(function (s__$1,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"ui","ui",-469653645),ui),s__$1);
}));
});
/**
* Display the app state when it changes. Think I might change this
* to store the display state in a separate atom, so that the display code
* can be optimized by only updating changed elements
*/
iiiiioiooooo.ui.make_ui = (function() {
var make_ui = null;
var make_ui__1 = (function (e){dommy.core.append_BANG_.call(null,document.body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(1024),new cljs.core.Keyword(null,"height","height",1025178622),(1024),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null)], null));
return make_ui.call(null,e,cljs.core.atom.call(null,iiiiioiooooo.ui.add_ui.call(null,iiiiioiooooo.core.structure.default_state.call(null),iiiiioiooooo.ui.context.call(null))));
});
var make_ui__2 = (function (e,state){iiiiioiooooo.ui.log.call(null,"make ui");
window.onkeydown = (function (e__$1){return iiiiioiooooo.ui.keydown.call(null,state,e__$1);
});
window.onkeyup = (function (e__$1){return iiiiioiooooo.ui.keyup.call(null,state,e__$1);
});
iiiiioiooooo.ui.show.call(null,iiiiioiooooo.core.structure.latest_state.call(null,cljs.core.deref.call(null,state)));
return cljs.core.add_watch.call(null,state,new cljs.core.Keyword(null,"update-display","update-display",502964647),(function (k,r,o,n){return iiiiioiooooo.ui.show_update.call(null,iiiiioiooooo.core.structure.latest_state.call(null,n));
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
make_ui.cljs$core$IFn$_invoke$arity$1 = make_ui__1;
make_ui.cljs$core$IFn$_invoke$arity$2 = make_ui__2;
return make_ui;
})()
;
iiiiioiooooo.ui.make_ui.call(null,null);

//# sourceMappingURL=ui.js.map