(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{LPMF:function(e,t,a){"use strict";a.r(t);a("Mwp2");var n=a("VXEj"),r=(a("/zsF"),a("PArb")),i=(a("IzEo"),a("bx4M")),l=(a("DYRE"),a("zeV3")),o=(a("+L6B"),a("2/Rp")),c=(a("14J3"),a("BMrR")),s=(a("5NDa"),a("5rEg")),u=(a("jCWc"),a("kPKH")),m=(a("y8nQ"),a("Vl3Y")),p=a("oBTY"),d=(a("nRaC"),a("5RzL")),h=(a("tU7J"),a("wFql")),f=a("WmNS"),E=a.n(f),v=a("9og8"),g=a("fWQN"),b=a("mtLc"),y=a("yKVA"),R=a("879j"),w=a("q1tI"),S=a.n(w),j=a("9kvl"),C=a("yP6+"),O=a("9/5/"),P=a.n(O),x=a("0Owb");function k(e){var t=e.style;t.height="100%";var a=parseInt("".concat(getComputedStyle(e).height),10),n=parseInt("".concat(getComputedStyle(e).paddingTop),10)+parseInt("".concat(getComputedStyle(e).paddingBottom),10);return a-n}function L(e){if(!e)return 0;var t=e,a=k(t),n=t.parentNode;return n&&(a=k(n)),a}function N(){return function(e){var t=function(t){Object(y["a"])(n,t);var a=Object(R["a"])(n);function n(){var e;Object(g["a"])(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=a.call.apply(a,[this].concat(r)),e.state={computedHeight:0},e.root=void 0,e.handleRoot=function(t){e.root=t},e}return Object(b["a"])(n,[{key:"componentDidMount",value:function(){var e=this.props.height;if(!e){var t=L(this.root);this.setState({computedHeight:t}),t<1&&(t=L(this.root),this.setState({computedHeight:t}))}}},{key:"render",value:function(){var t=this.props.height,a=this.state.computedHeight,n=t||a;return S.a.createElement("div",{ref:this.handleRoot},n>0&&S.a.createElement(e,Object(x["a"])({},this.props,{height:n})))}}]),n}(S.a.Component);return t}}var I=N,M=function(e){Object(y["a"])(a,e);var t=Object(R["a"])(a);function a(){var e;Object(g["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={autoHideXLabels:!1},e.root=void 0,e.node=void 0,e.resize=P()((function(){if(e.node&&e.node.parentNode){var t=e.node.parentNode.clientWidth,a=e.props,n=a.data,r=void 0===n?[]:n,i=a.autoLabel,l=void 0===i||i;if(l){var o=30*r.length,c=e.state.autoHideXLabels;t<=o?c||e.setState({autoHideXLabels:!0}):c&&e.setState({autoHideXLabels:!1})}}}),500),e.handleRoot=function(t){e.root=t},e.handleRef=function(t){e.node=t},e}return Object(b["a"])(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props,t=e.height,a=void 0===t?1:t,n=e.title,r=e.forceFit,i=void 0===r||r,l=e.data,o=e.padding,c=this.state.autoHideXLabels,s={x:{tickCount:10,formatter:function(e){return Math.round(1e3*e)/1e3}},y:{tickCount:10,formatter:function(e){return Math.round(1e3*e)/1e3}}},u=["x*y*ur",function(e,t,a){var n=Math.round(1e3*e)/1e3,r=Math.round(1e3*t)/1e3;return{title:a,value:r.toString(),name:n.toString()}}];return S.a.createElement("div",{style:{height:a},ref:this.handleRoot},S.a.createElement("div",{ref:this.handleRef},n&&S.a.createElement("h4",{style:{marginBottom:20}},n),S.a.createElement(C["Chart"],{scale:s,height:n?a-41:a,forceFit:i,data:l,padding:o||"auto"},S.a.createElement(C["Legend"],{name:"name"}),S.a.createElement(C["Axis"],{name:"x",title:!1,label:c?void 0:{},tickLine:c?void 0:{}}),S.a.createElement(C["Axis"],{name:"y",min:0}),S.a.createElement(C["Tooltip"],{showTitle:!1,crosshairs:!1}),S.a.createElement(C["Geom"],{type:"line",position:"x*y",size:2,color:"ur",shape:"smooth",tooltip:u}),S.a.createElement(C["Guide"],null,S.a.createElement(C["Guide"].Line,{start:{x:"start",y:1},end:{x:"end",y:1},lineStyle:{stroke:"red",lineDash:[0,2,2],lineWidth:1}})))))}}]),a}(w["Component"]),T=I()(M),U=a("YHaD");function _(e){return z.apply(this,arguments)}function z(){return z=Object(v["a"])(E.a.mark((function e(t){var a,n,r,i;return E.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new Headers,a.append("Content-Type","application/json"),n=JSON.stringify(t),r={method:"POST",headers:a,body:n},e.next=6,fetch("".concat(U["a"],"/utilratios/parametricstudy"),r);case 6:return i=e.sent,e.abrupt("return",i.json());case 8:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var B=function(e){Object(y["a"])(a,e);var t=Object(R["a"])(a);function a(e){var n;return Object(g["a"])(this,a),n=t.call(this,e),n.formRef=S.a.createRef(),n.runParametricStudy=function(){var e=Object(v["a"])(E.a.mark((function e(t){var a;return E.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:a=e.sent,n.setState({response:a,loading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onFinish=function(e){n.setState({loading:!0});var t=e.Parameter,a=e.Start,r=e.End,i=e.Segments,l=Math.min(Number(a),Number(r)),o=Math.max(Number(a),Number(r)),c=[l,o,Math.abs(r-a)/Number(i)],s={Input:n.props.designParameters,Parameter:t,range:c};n.runParametricStudy(s)},n.onReset=function(){n.formRef.current&&n.formRef.current.resetFields()},n.state={loading:!1},n}return Object(b["a"])(a,[{key:"render",value:function(){var e=h["a"].Text,t=d["a"].TreeNode,a=!this.props.designParameters,f={transform:function(e){return Number(e.trim())},type:"number",min:.001,required:!0,message:"Input is invalid!"},E=[],v=[],g=[],b=this.state.response;if(b){var y=b.parameter,R=b.values,w=b.S1_URs,j=b.S1p_URs,C=b.S2_URs,O=b.S_BelowCreepRange_URs,P=b.S_InCreepRange_URs,x=b.Psc_URs,k=b.Psi_URs,L=b.Nc_URs,N=R.map((function(e,t){return{x:e,y:w[t],ur:"S1_UR",parameter:y}})),I=R.map((function(e,t){return{x:e,y:j[t],ur:"S1p_UR",parameter:y}})),M=R.map((function(e,t){return{x:e,y:C[t],ur:"S2_UR",parameter:y}})),U=R.map((function(e,t){return{x:e,y:O[t],ur:"S_BelowCreepRange_UR",parameter:y}})),_=R.map((function(e,t){return{x:e,y:P[t],ur:"S_InCreepRange_UR",parameter:y}})),z=R.map((function(e,t){return{x:e,y:x[t],ur:"Psc_UR",parameter:y}})),B=R.map((function(e,t){return{x:e,y:k[t],ur:"Psi_UR",parameter:y}})),D=R.map((function(e,t){return{x:e,y:L[t],ur:"Nc_UR",parameter:y}}));g=g.concat([].concat(Object(p["a"])(N),Object(p["a"])(I),Object(p["a"])(M),Object(p["a"])(U),Object(p["a"])(_),Object(p["a"])(z),Object(p["a"])(B),Object(p["a"])(D))),E=E.concat(Object.keys(b).map((function(e){var t,a=b[e];return t=Array.isArray(a)?a.map((function(e){return e.toFixed(2)})).join(" "):b[e],{key:e,value:t}})))}if(this.props.designParameters){var H=this.props.designParameters,A=H.P,F=H.DesignTemp,q=H.RoomTemp,X=H.BellowMaterial,J=H.BellowMaterialType,W=H.CollarMaterial,Y=H.Db,V=H.Xc,G=H.Xt,K=H.Y,Q=H.Th,Z=H.t,$=H.n,ee=H.q,te=H.N,ae=H.w,ne=H.Lt,re=H.Lc,ie=H.tc,le={P:A,DesignTemp:F,RoomTemp:q,BellowMaterial:X,BellowMaterialType:J,CollarMaterial:W,Db:Y,Xc:V,Xt:G,Y:K,Th:Q,t:Z,n:$,q:ee,N:te,w:ae,Lt:ne,Lc:re,tc:ie};v=v.concat(Object.keys(le).map((function(e){var t,a=le[e];return t="number"===typeof a?Math.round(1e3*le[e])/1e3:le[e],b&&e===b.parameter&&(t="--"),{key:e,value:t}})))}return S.a.createElement(S.a.Fragment,null,S.a.createElement(c["a"],{gutter:24},S.a.createElement(u["a"],{span:8},S.a.createElement(i["a"],{title:"Parametric Study Input",bordered:!1,style:{height:"100%"}},S.a.createElement(m["a"],{ref:this.formRef,size:"small",colon:!1,onFinish:this.onFinish,hideRequiredMark:!0},S.a.createElement(c["a"],{justify:"center"},S.a.createElement(u["a"],{span:24},S.a.createElement(m["a"].Item,{labelCol:{span:8},wrapperCol:{span:8},name:"Parameter",label:"Parameter",rules:[{type:"string",required:!0,message:"Input is invalid!"}]},S.a.createElement(d["a"],{showSearch:!0,placeholder:"Please select",dropdownMatchSelectWidth:!1,treeDefaultExpandAll:!0},S.a.createElement(t,{value:"t",title:"Thickness t"}),S.a.createElement(t,{value:"n",title:"Number of Ply n"}),S.a.createElement(t,{value:"q",title:"Bellow Convolution Pitch q"}),S.a.createElement(t,{value:"N",title:"Number of Convolutions N"}),S.a.createElement(t,{value:"w",title:"Tangent Length w"}),S.a.createElement(t,{value:"Lt",title:"Collar Length Lt"}),S.a.createElement(t,{value:"Lc",title:"Collar Length Lc"}),S.a.createElement(t,{value:"tc",title:"Colloar Thickness tc"})))),S.a.createElement(u["a"],{span:24},S.a.createElement(m["a"].Item,{labelCol:{span:8},wrapperCol:{span:8},name:"Start",label:"Start",rules:[f]},S.a.createElement(s["a"],null))),S.a.createElement(u["a"],{span:24},S.a.createElement(m["a"].Item,{labelCol:{span:8},wrapperCol:{span:8},name:"End",label:"End",rules:[f]},S.a.createElement(s["a"],null))),S.a.createElement(u["a"],{span:24},S.a.createElement(m["a"].Item,{labelCol:{span:8},wrapperCol:{span:8},name:"Segments",label:"No. of Intervals",rules:[{transform:function(e){return Number(e.trim())},type:"integer",min:.001,required:!0,message:"Input is invalid!"}]},S.a.createElement(s["a"],null)))),S.a.createElement(c["a"],{justify:"center"},S.a.createElement(u["a"],null,S.a.createElement(m["a"].Item,null,S.a.createElement(l["a"],{size:"middle"},S.a.createElement(o["a"],{type:"primary",htmlType:"submit",disabled:a,loading:this.state.loading},"Submit"),S.a.createElement(o["a"],{htmlType:"button",onClick:this.onReset},"Reset")))))))),S.a.createElement(u["a"],{span:16},S.a.createElement(i["a"],{title:"Results",bordered:!1,style:{height:"100%"}},S.a.createElement(T,{title:"Utilization Ratio ".concat(b?"vs. ".concat(b.parameter):""),data:g,height:600})))),S.a.createElement(c["a"],{gutter:24,style:{marginTop:"24px"}},S.a.createElement(u["a"],{span:24},S.a.createElement(i["a"],{title:"Result Details",bordered:!1},S.a.createElement(r["a"],{orientation:"center",plain:!0},"Parametric Analysis Result"),S.a.createElement(n["b"],{grid:{gutter:16,column:1},dataSource:E,renderItem:function(t){return S.a.createElement(n["b"].Item,null,S.a.createElement(c["a"],null,S.a.createElement(u["a"],{span:4},S.a.createElement(e,{strong:!0},t.key)),S.a.createElement(u["a"],{span:20},S.a.createElement(e,null,t.value))))}}),S.a.createElement(r["a"],{orientation:"center",plain:!0},"Input from Analysis Page"),S.a.createElement(n["b"],{grid:{gutter:16,column:1},dataSource:v,renderItem:function(t){return S.a.createElement(n["b"].Item,null,S.a.createElement(c["a"],null,S.a.createElement(u["a"],{span:4},S.a.createElement(e,{strong:!0},t.key)),S.a.createElement(u["a"],{span:20},S.a.createElement(e,null,t.value))))}})))))}}]),a}(w["Component"]),D=function(e){var t={designParameters:e.SingleEJUR.designParameters,resultExist:e.SingleEJUR.resultExist};return t};t["default"]=Object(j["a"])(D)(B)}}]);