(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{258:function(e,t,n){"use strict";n.d(t,"a",(function(){return we}));n(366);var a=n(259),r=n(0),c=n.n(r),l=n(263),o=n(5),i=n.n(o),s=n(14),u=n.n(s),m=n(11),f=n.n(m),p=n(219),g=n(386),h=n(157);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=n(262);function w(){return Object(b.a)()}var E=n(196),v=n(194),x=n(83),S=n(384),k=n(8),O=n.n(k),C=n(385),T={light:{text:"#000",background:"#fff",tint:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}},P=n(2),j=n(42),I=n(107),D=n(24),H=n(81),L=n(153),z=n(59),V=n(27),A=n(155),N=n(247),B=n(18),M=n.n(B),R=n(22),W=n(4),U=["style","lightColor","darkColor"],F=["style","lightColor","darkColor"];function J(e,t){var n=w(),a=e[n];return a||T[n][t]}function K(e){var t=e.style,n=e.lightColor,a=e.darkColor,c=M()(e,U),l=J({light:n,dark:a},"text");return r.createElement(R.a,O()({style:[{color:l},t]},c))}function Y(e){var t=e.style,n=e.lightColor,a=e.darkColor,c=M()(e,F),l=J({light:n,dark:a},"background");return r.createElement(W.a,O()({style:[{backgroundColor:l},t]},c))}var G=n(13),Q=n.n(G),q=n(15),X=n.n(q),Z=n(148).a.initializeApp({apiKey:"AIzaSyB2cDf18iTsAX749V43mfZj8OWSQN0yitw",authDomain:"ieltsgroup-cc249.firebaseapp.com",projectId:"ieltsgroup-cc249",storageBucket:"ieltsgroup-cc249.appspot.com",messagingSenderId:"893210685985",appId:"1:893210685985:web:9496dbe699f381ac19e960",measurementId:"G-DYH06V8FB0"}).database(),_=new(function(){function e(){Q()(this,e)}return X()(e,[{key:"timeStamp",value:function(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"PM":"AM";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+a+" | "+(new Date).getDate()+"/"+((new Date).getMonth()+1)+"/"+ +(new Date).getFullYear()}},{key:"send",value:function(e,t){return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(Z.ref(e).set(t));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),alert(n.t0);case 8:case"end":return n.stop()}}),null,null,[[0,5]],Promise)}},{key:"listen",value:function(e,t,n){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(Z.ref(e).orderByKey().on(t,n));case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),alert(a.t0);case 8:case"end":return a.stop()}}),null,null,[[0,5]],Promise)}},{key:"push",value:function(e,t,n){var a=this;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(Z.ref(e).push(t).then((function(t){var n=t.key;a.send(e+"/"+n+"/key",n)})));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),alert(n.t0);case 8:case"end":return n.stop()}}),null,null,[[0,5]],Promise)}},{key:"update",value:function(e,t,n){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:try{this.send(e+"/"+t+"/key",n)}catch(r){alert("error")}case 1:case"end":return a.stop()}}),null,this,null,Promise)}}]),e}());function $(){var e=Object(r.useState)(""),t=u()(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),i=u()(o,2),s=i[0],m=i[1],p=Object(r.useState)(""),g=u()(p,2),h=g[0],d=g[1],y=Object(r.useState)(""),b=u()(y,2),w=b[0],E=b[1],v=Object(r.useState)(""),x=u()(v,2),S=x[0],k=x[1],O=Object(r.useState)(!1),C=u()(O,2),T=C[0],P=C[1],V=Object(r.useState)(!1),B=u()(V,2),M=B[0],R=B[1],W=Object(r.useState)(null),U=u()(W,2),F=U[0],J=U[1],G=Object(r.useState)(null),Q=u()(G,2),q=Q[0],X=Q[1],Z=Object(r.useState)("caretdown"),$=u()(Z,2),te=$[0],ne=$[1],ae=Object(r.useState)("caretdown"),re=u()(ae,2),ce=re[0],le=re[1];function oe(e){return L.a.setString(e),L.a.getString()}return c.a.createElement(l.b,null,c.a.createElement(z.a,{style:{flex:1}},c.a.createElement(Y,{style:ee.container},c.a.createElement(K,{style:ee.title},"Link B\xe0i Vi\u1ebft :"),c.a.createElement(Y,{style:ee.formView},c.a.createElement(j.a,{style:ee.input,value:n,onChangeText:function(e){return a(e)},placeholder:"Paste Link Here :))"}),c.a.createElement(j.a,{style:ee.input,value:s,onChangeText:function(e){return m(e)},placeholder:"Password",maxLength:6,secureTextEntry:!0}),c.a.createElement(j.a,{style:ee.input,value:S,onChangeText:function(e){return k(e)},placeholder:"Your Name",maxLength:10}),c.a.createElement(Y,{style:{flexDirection:"row",alignSelf:"center",marginVertical:20}},c.a.createElement(I.a,{title:"Update",onPress:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if("1702"!=s||""==n||""==S){e.next=7;break}return e.next=3,f.a.awrap(_.send("Link",{post:n,name:S,time:_.timeStamp(new Date)}));case 3:return e.next=5,f.a.awrap(_.push("Histories",{post:n,name:S,time:_.timeStamp(new Date),key:""}));case 5:e.next=8;break;case 7:""==n||""==S||""==s?alert("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng ... "):alert("M\u1eadt kh\u1ea9u kh\xf4ng ch\xednh x\xe1c ...");case 8:case"end":return e.stop()}}),null,null,null,Promise)}}))),c.a.createElement(Y,{style:{width:"100%",alignItems:"flex-start",width:"70%"}},c.a.createElement(D.a,{style:ee.formHistory,onPress:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!T),!T){e.next=5;break}ne("caretdown"),e.next=8;break;case 5:return e.next=7,f.a.awrap(f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.awrap(_.listen("Histories","value",(function(e){var t;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:null!=e.val()&&(t=Object.values(e.val()),console.log(t),J(t));case 1:case"end":return n.stop()}}),null,null,null,Promise)})));case 2:case"end":return e.stop()}}),null,null,null,Promise));case 7:ne("caretup");case 8:case"end":return e.stop()}}),null,null,null,Promise)}},c.a.createElement(N.a,{name:""+te,size:17,color:"black"}),c.a.createElement(K,{style:{marginLeft:10,fontSize:17}},"History")),T?c.a.createElement(H.a,{style:ee.flatListHistory,inverted:!0,data:F,renderItem:function(e){var t=e.item;return c.a.createElement(Y,null,c.a.createElement(K,{style:{fontSize:12}},t.time," : ",t.name," posted",c.a.createElement(K,{style:{color:"#2980b9",fontSize:12},onPress:function(){return window.open(""+t.post,"_blank")}}," ",t.post)),c.a.createElement(A.a,{style:{marginVertical:10}}))},keyExtractor:function(e,t){return t.toString()}}):null,c.a.createElement(D.a,{style:ee.formHistory,onPress:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(R(!M),!M){e.next=5;break}le("caretdown"),e.next=8;break;case 5:return e.next=7,f.a.awrap(f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.awrap(_.listen("Accounts","value",(function(e){var t;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:null!=e.val()&&(t=Object.values(e.val()),console.log(t),X(t));case 1:case"end":return n.stop()}}),null,null,null,Promise)})));case 2:case"end":return e.stop()}}),null,null,null,Promise));case 7:le("caretup");case 8:case"end":return e.stop()}}),null,null,null,Promise)}},c.a.createElement(N.a,{name:""+ce,size:17,color:"black"}),c.a.createElement(K,{style:{marginLeft:10,fontSize:17}},"Account")),M?c.a.createElement(Y,{style:{borderWidth:1,width:"100%"}},c.a.createElement(j.a,{style:ee.input,value:h,onChangeText:function(e){return d(e)},placeholder:"Account"}),c.a.createElement(j.a,{style:ee.input,value:w,onChangeText:function(e){return E(e)},placeholder:"Password"}),c.a.createElement(Y,{style:{flexDirection:"row",alignSelf:"center",marginVertical:20,width:"70%"}},c.a.createElement(I.a,{title:"ADD",onPress:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.awrap(_.push("Accounts",{account:h,password:w,key:""}));case 2:case"end":return e.stop()}}),null,null,null,Promise)}})),c.a.createElement(H.a,{style:ee.flatListHistory,data:q,renderItem:function(e){var t=e.item,n=e.index;return c.a.createElement(Y,null,c.a.createElement(K,null,n.toString(),"."),c.a.createElement(Y,{style:{marginLeft:10}},c.a.createElement(Y,{style:{flexDirection:"row",alignItems:"center",marginVertical:10}},c.a.createElement(K,null,"T\xe0i Kho\u1ea3n: ",t.account," "),c.a.createElement(D.a,{onPress:function(){return oe(""+t.account)}},c.a.createElement(N.a,{name:"copy1",size:15}))),c.a.createElement(Y,{style:{flexDirection:"row",alignItems:"center",marginVertical:10}},c.a.createElement(K,null,"M\u1eadt Kh\u1ea9u: ",t.password," "),c.a.createElement(D.a,{onPress:function(){return oe(""+t.password)}},c.a.createElement(N.a,{name:"copy1",size:15})))),c.a.createElement(A.a,{style:{marginVertical:10}}))},keyExtractor:function(e,t){return t.toString()}})):null,c.a.createElement(D.a,{style:ee.formHistory,onPress:function(){return window.open("https://docs.google.com/spreadsheets/d/13Dz1Wq14kXnMUN-b8Uwkd-1JHwfJbmvRmUwv43EMEIY/edit?fbclid=IwAR1dIt8p3LQTgavUO-DNnZ3iJINTgTIUpHqQG00vbeDwxeT2Dsi2SE_icfI#gid=1279066307")}},c.a.createElement(K,{style:{marginLeft:10,fontSize:17}},"Routine"),c.a.createElement(N.a,{style:{marginLeft:10},name:"arrowsalt",size:14,color:"black"})))),c.a.createElement(Y,{style:{alignItems:"center"}},c.a.createElement(Y,{style:ee.separator,lightColor:"#eee",darkColor:"rgba(255,255,255i,0.1)"}),c.a.createElement(K,{style:{}},"\xa9 https://facebook.com/ieltsintelligent"))))}var ee=P.a.create({container:{alignItems:"center",justifyContent:"flex-start",minHeight:V.a.get("window").height},formView:{width:"100%"},input:{borderWidth:1,width:"70%",alignSelf:"center",height:50,paddingLeft:10,marginVertical:10},button:{marginHorizontal:100},formHistory:{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",width:"100%",height:50},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"},flatListHistory:{marginLeft:"5%"}}),te=n(261);function ne(e){return r.createElement(K,O()({},e,{style:[e.style,{fontFamily:"space-mono"}]}))}function ae(e){var t=e.path;return c.a.createElement(Y,null,c.a.createElement(Y,{style:ce.getStartedContainer},c.a.createElement(K,{style:ce.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)"},"Open up the code for this screen:"),c.a.createElement(Y,{style:[ce.codeHighlightContainer,ce.homeScreenFilename],darkColor:"rgba(255,255,255,0.05)",lightColor:"rgba(0,0,0,0.05)"},c.a.createElement(ne,null,t)),c.a.createElement(K,{style:ce.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)"},"Change any of the text, save the file, and your app will automatically update.")),c.a.createElement(Y,{style:ce.helpContainer},c.a.createElement(D.a,{onPress:re,style:ce.helpLink},c.a.createElement(K,{style:ce.helpLinkText,lightColor:T.light.tint},"Tap here if your app doesn't automatically update after making changes"))))}function re(){te.a("https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet")}var ce=P.a.create({getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightContainer:{borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,lineHeight:24,textAlign:"center"},helpContainer:{marginTop:15,marginHorizontal:20,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{textAlign:"center"}});function le(){var e=Object(r.useState)(""),t=u()(e,2),n=t[0],a=t[1];return c.a.createElement(Y,{style:oe.container},c.a.createElement(K,{style:oe.title},"TO DO LIST"),c.a.createElement(Y,{style:oe.formView},c.a.createElement(j.a,{style:oe.input,value:n,onChangeText:function(e){return a(e)},placeholder:"Type Name to Show :))"}),c.a.createElement(I.a,{style:{borderWidth:1},title:"Show",onPress:function(){}})),c.a.createElement(Y,{style:oe.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),c.a.createElement(ae,{path:"/screens/TabTwoScreen.tsx"}))}var oe=P.a.create({container:{flex:1,alignItems:"center",justifyContent:"flex-start"},title:{fontSize:20,fontWeight:"bold"},formView:{flexDirection:"row",justifyContent:"space-between",width:"50%"},separator:{marginVertical:30,height:1,width:"80%"},input:{borderWidth:1,width:"70%",alignSelf:"center",paddingLeft:10,marginVertical:10,height:50}}),ie=Object(C.a)();function se(){var e=w();return r.createElement(ie.Navigator,{initialRouteName:"Post",style:{width:300},tabBarOptions:{activeTintColor:T[e].tint}},r.createElement(ie.Screen,{name:"Post",component:fe,options:{tabBarIcon:function(e){var t=e.color;return r.createElement(ue,{name:"ios-code",color:t})}}}),r.createElement(ie.Screen,{name:"Conv",component:ge,options:{tabBarIcon:function(e){var t=e.color;return r.createElement(ue,{name:"ios-code",color:t})}}}))}function ue(e){return r.createElement(p.a,O()({size:30,style:{marginBottom:-3}},e))}var me=Object(S.a)();function fe(){return r.createElement(me.Navigator,null,r.createElement(me.Screen,{name:"TabOneScreen",component:$,options:{headerTitle:"IELTS GROUP "}}))}var pe=Object(S.a)();function ge(){return r.createElement(pe.Navigator,null,r.createElement(pe.Screen,{name:"TabTwoScreen",component:le,options:{headerTitle:"Timeline"}}))}var he={prefixes:[n(260).a("/")],config:{screens:{Root:{screens:{TabOne:{screens:{TabOneScreen:"one"}},TabTwo:{screens:{TabTwoScreen:"two"}}}},NotFound:"*"}}};function de(e){var t=e.colorScheme;return r.createElement(E.a,{linking:he,theme:"dark"===t?v.a:x.a},r.createElement(be,null))}var ye=Object(S.a)();function be(){return r.createElement(ye.Navigator,{screenOptions:{headerShown:!1}},r.createElement(ye.Screen,{name:"Root",component:se}))}function we(){var e=function(){var e=r.useState(!1),t=u()(e,2),a=t[0],c=t[1];return r.useEffect((function(){f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.b(),e.next=4,f.a.awrap(g.b(y(y({},p.a.font),{},{"space-mono":n(297)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,c(!0),h.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),a}(),t=w();return e?c.a.createElement(l.b,null,c.a.createElement(de,{colorScheme:t}),c.a.createElement(a.a,null)):null}},270:function(e,t,n){e.exports=n(367)},297:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"},360:function(e,t){}},[[270,1,2]]]);
//# sourceMappingURL=app.cac929f3.chunk.js.map