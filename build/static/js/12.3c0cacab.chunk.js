(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[12],{385:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"j",(function(){return i})),a.d(t,"i",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return o})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return b})),a.d(t,"d",(function(){return p}));var n="assets/tokenid/issuingBox",i="/dex/tokens/tokenid/unspentSellOrders",s="/dex/tokens/tokenid/unspentBuyOrders",l="/assets/issuingBoxes",r="/assets/issuingBoxes/total",c="/transactions/unconfirmed",o="/transactions/unconfirmed/:id",m="oracle/poolInfo",b="oracle/blockHeight",p="oracle/oracleStatus"},397:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(93),i=a(35),s=a.n(i),l=function(e,t,a,i){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return e(Object(n.startStructFetch)(t)),s.a[a](i,l).then((function(e){return e.body||e.data})).then((function(a){if(!a)return e(Object(n.stopStructFetch)(t,a)),Promise.resolve(a);var i=a.errors||a.error;return i?(e(Object(n.stopStructFetch)(t,new Error(i))),Promise.reject(new Error(i))):(e(Object(n.stopStructFetch)(t,a)),Promise.resolve(a))})).catch((function(a){return e(Object(n.stopStructFetch)(t,a)),Promise.reject(a)}))}},401:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(6),i=a(7),s=a(9),l=a(8),r=a(0),c=a.n(r),o=a(24),m=a(30),b=(a(402),a(10)),p=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?c.a.createElement("div",{className:"bi-paginate-simple"},0===this.props.forcePage?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},c.a.createElement(b.n,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0)},c.a.createElement(b.n,{className:"bi-paginate-simple__btn-icon"})),0===this.props.forcePage?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},c.a.createElement(b.d,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1)},c.a.createElement(b.d,{className:"bi-paginate-simple__btn-icon"})),c.a.createElement("span",{className:"bi-paginate-simple__status"},c.a.createElement(o.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})),c.a.createElement("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile"},c.a.createElement(o.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})),this.props.forcePage===e-1?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},c.a.createElement(b.d,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1)},c.a.createElement(b.d,{className:"bi-paginate-simple__btn-icon"})),this.props.forcePage===e-1?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},c.a.createElement(b.n,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1)},c.a.createElement(b.n,{className:"bi-paginate-simple__btn-icon"}))):null}}]),a}(c.a.Component)},402:function(e,t,a){},411:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(6),i=a(7),s=a(9),l=a(8),r=a(33),c=a.n(r),o=a(0),m=a.n(o),b=a(30),p=(a(412),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"bi-limit-selector"},m.a.createElement("span",{className:"bi-limit-selector__label"},this.props.label),this.props.items.map((function(t,a){var n=c()({"bi-btn":!0,"bi-btn--flat":!0,"bi-limit-selector__item":!0,"bi-limit-selector__item--selected":t===e.props.selected});return m.a.createElement(b.Link,{className:n,key:a,to:e.props.getLimitLink(t)},t)})))}}]),a}(m.a.PureComponent))},412:function(e,t,a){},815:function(e,t,a){},816:function(e,t,a){},817:function(e,t,a){},841:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(6),s=a(7),l=a(12),r=a(9),c=a(8),o=a(51),m=a.n(o),b=a(0),p=a.n(b),u=a(92),d=a.n(u),_=a(24),f=a(25),g=a(16),h=(a(815),a(411)),k=a(401),v=a(11),E=a(397),N=a(385),y=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"getAllIssuedTokens",value:function(t,a){var n=a.limit,i=a.offset;return Object(E.a)(t,N.a,"get","".concat(e.apiUrl,"/assets/issuingBoxes"),{params:{limit:n,offset:i}})}},{key:"getTotalIssuedTokens",value:function(t,a){var n=a.limit;return Object(E.a)(t,N.e,"get","".concat(e.apiUrl,"/assets/issuingBoxes"),{params:{limit:n}})}},{key:"apiUrl",get:function(){return"".concat(v.a.apiUrl)}}]),e}(),O=a(153),j={getTokens:function(e){return function(t){return y.getAllIssuedTokens(t,e).then((function(a){t({payload:{offset:e.offset||0},type:O.a})}))}}},x=a(93),P=function(e){return Object(x.getStruct)(N.a)(e)},R=a(49),w=a.n(R);function L(e,t,a){if(void 0===a&&(a={}),!t.codes){t.codes={};for(var n=0;n<t.chars.length;++n)t.codes[t.chars[n]]=n}if(!a.loose&&e.length*t.bits&7)throw new SyntaxError("Invalid padding");for(var i=e.length;"="===e[i-1];)if(--i,!a.loose&&!((e.length-i)*t.bits&7))throw new SyntaxError("Invalid padding");for(var s=new(a.out||Uint8Array)(i*t.bits/8|0),l=0,r=0,c=0,o=0;o<i;++o){var m=t.codes[e[o]];if(void 0===m)throw new SyntaxError("Invalid character "+e[o]);r=r<<t.bits|m,(l+=t.bits)>=8&&(l-=8,s[c++]=255&r>>l)}if(l>=t.bits||255&r<<8-l)throw new SyntaxError("Unexpected end of data");return s}var U={chars:"0123456789ABCDEF",bits:4},S=function(e,t){return L(e.toUpperCase(),U,t)},T=a(5),F=(a(816),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-blocks-table-header bi-blocks-table__row bi-table__row"},p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(_.a,{id:"common.token.id"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(_.a,{id:"common.token.name"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(_.a,{id:"common.token.amount"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(_.a,{id:"common.token.decimals"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(_.a,{id:"common.token.description"})))}}]),a}(p.a.Component)),I=Object(T.o)(F),C=(a(817),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-blocks-table"},this.props.tokens?this.renderTable():null)}},{key:"renderTable",value:function(){return p.a.createElement("div",{className:"bi-blocks-table__body bi-table"},p.a.createElement(I,null),this.props.tokens.map((function(e){return p.a.createElement("div",{className:"bi-blocks-table__row bi-table__row",key:e.assets[0].tokenId},p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(_.a,{id:"common.token.id"})),p.a.createElement("input",{className:"bi-tokens-table__input",type:"text",value:e.assets[0].tokenId,readOnly:!0})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(_.a,{id:"common.token.name"})),e.additionalRegisters.R4&&"0e"===e.additionalRegisters.R4.slice(0,2)&&new TextDecoder("utf-8").decode(S(e.additionalRegisters.R4)).slice(2),e.additionalRegisters.R4&&"0e"!==e.additionalRegisters.R4.slice(0,2)&&"Can't decode this field"),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(_.a,{id:"common.token.amount"})),p.a.createElement("input",{className:"bi-tokens-table__input",type:"text",value:w()({integerSeparator:" "})(e.assets[0].amount),readOnly:!0})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(_.a,{id:"common.token.decimals"})),e.additionalRegisters.R6&&"0e"===e.additionalRegisters.R6.slice(0,2)&&new TextDecoder("utf-8").decode(S(e.additionalRegisters.R6)).slice(2),e.additionalRegisters.R6&&"0e"!==e.additionalRegisters.R6.slice(0,2)&&p.a.createElement(p.a.Fragment,null,e.additionalRegisters.R6," -"," ",p.a.createElement("span",{style:{background:"#ffa707"}},"non-format"," ",p.a.createElement("a",{href:"https://github.com/ergoplatform/eips/blob/master/eip-0004.md"},"EIP-4")," ","field"))),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(_.a,{id:"common.token.description"})),e.additionalRegisters.R5&&new TextDecoder("utf-8").decode(S(e.additionalRegisters.R5)).slice(2)))})))}}]),a}(p.a.Component)),B=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).params=void 0,n.getPageUrl=n.getPageUrl.bind(Object(l.a)(n)),n.getLimitLink=n.getLimitLink.bind(Object(l.a)(n)),n.params=n.getParams(),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.reloadTokens(this.params)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.getParams();JSON.stringify(t)!==JSON.stringify(this.params)&&(this.params=t,this.reloadTokens(this.params))}},{key:"render",value:function(){return p.a.createElement("div",{className:"bi-data g-flex-column g-flex-column__item-fixed"},p.a.createElement(_.a,{id:"common.pages.issued-tokens.title"},(function(e){return p.a.createElement(d.a,null,p.a.createElement("title",null,e))})),p.a.createElement("div",{className:"bi-data__header g-flex-column__item-fixed g-flex"},p.a.createElement("div",{className:"bi-data__title g-flex__item"},p.a.createElement(_.a,{id:"components.issued-tokens.title"}))),this.props.tokens.isFetching&&p.a.createElement("p",{className:"base-text"},"Fetching Data..."),this.props.tokens.data&&0===this.props.tokens.data.total&&p.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},p.a.createElement(_.a,{id:"components.data.wrong-query"})),!this.props.tokens.isFetching&&null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&p.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},p.a.createElement(C,{tokens:this.props.tokens.data.items,isFetching:this.props.tokens.isFetching})),null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&p.a.createElement("div",{className:"bi-data__footer g-flex-column__item-fixed g-flex"},p.a.createElement("div",{className:"g-flex__item-fixed"},p.a.createElement(h.a,{items:[30,60,120],selected:this.params.limit,label:p.a.createElement(_.a,{id:"components.data.show"}),getLimitLink:this.getLimitLink})),p.a.createElement("div",{className:"g-flex__item-fixed"},p.a.createElement(k.a,{total:this.props.tokens.data.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.props.offset/this.params.limit)}))))}},{key:"getPageUrl",value:function(e){var t=m.a.parse(this.props.history.location.search);return t.offset=e*this.params.limit,"/issued-tokens?".concat(m.a.stringify(t))}},{key:"getLimitLink",value:function(e){var t=m.a.parse(this.props.history.location.search);return t.limit=e,"/issued-tokens?".concat(m.a.stringify(t))}},{key:"reloadTokens",value:function(e){e=Object(n.a)(Object(n.a)(Object(n.a)({},this.params),e),{},{limit:e.limit||30,offset:e.offset||0}),Object.keys(e).forEach((function(t){null===e[t]&&delete e[t]})),this.props.getTokens(e),0===e.offset&&delete e.offset,30===e.limit&&delete e.limit,this.props.history.push("/issued-tokens?".concat(m.a.stringify(e)))}},{key:"getParams",value:function(){var e=m.a.parse(this.props.history.location.search),t=e.offset,a=e.limit;return t=parseInt(t,10),{limit:a=parseInt(a,10)||30,offset:t||0}}}]),a}(p.a.PureComponent),A=Object(f.b)((function(e){return{tokens:P(e),offset:e.tokens.offset}}),(function(e){return Object(g.bindActionCreators)(Object(n.a)({},j),e)}))(B);t.default=A}}]);
//# sourceMappingURL=12.3c0cacab.chunk.js.map