(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(6),o=(n(0),n(77)),a={id:"eos-tracking-downtime",title:"EOS Order Tracking Downtime",sidebar_label:"Incident Report - EOS Order Tracking Downtime",description:"Describes the downtime we had for EOS order tracking."},c={unversionedId:"engineering/incident-reports/eos-tracking-downtime",id:"engineering/incident-reports/eos-tracking-downtime",isDocsHomePage:!1,title:"EOS Order Tracking Downtime",description:"Describes the downtime we had for EOS order tracking.",source:"@site/docs/engineering/incident-reports/eos-tracking-downtime.md",permalink:"/docs/engineering/incident-reports/eos-tracking-downtime",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/engineering/incident-reports/eos-tracking-downtime.md",sidebar_label:"Incident Report - EOS Order Tracking Downtime"},s=[{value:"Impact",id:"impact",children:[]},{value:"Root Cause Analysis",id:"root-cause-analysis",children:[]},{value:"Time To Restore",id:"time-to-restore",children:[]},{value:"Risk of Future Occurrence",id:"risk-of-future-occurrence",children:[]},{value:"Mitigation Steps",id:"mitigation-steps",children:[]},{value:"References",id:"references",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"impact"},"Impact"),Object(o.b)("p",null,"For customers that initiated ",Object(o.b)("inlineCode",{parentName:"p"},"X ---\x3e EOS")," exchanges, the EOS wallet did not see incoming EOS transactions (in a period of one day). Since we need incoming transactions to complete orders, the lost transactions made exchanges stuck in-progress, never to be completed. While customers did get their EOS funds, their orders never resolved."),Object(o.b)("p",null,"All mobile and desktop users were impacted. We had a total of 1 day of missing transactions in the production history server."),Object(o.b)("p",null,"Switching the history server to stage DB solved the issue immediately and resolved incomplete orders."),Object(o.b)("h2",{id:"root-cause-analysis"},"Root Cause Analysis"),Object(o.b)("p",null,"The issue started when AWS DocumentDB production database stopped storing data (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://files.slack.com/files-pri/T0CKC63J6-F015S9CKEF8/__________________________2020-06-24____16.17.10.png"}),"screenshot-1")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://files.slack.com/files-pri/T0CKC63J6-F016BNA2M9P/screen_shot_2020-06-24_at_4.49.02_pm.png"}),"screenshot-2"),"). The production indexer did not report on any errors - it was effectively throwing data into a black hole."),Object(o.b)("p",null,"DevOps (Victor B.) opened an issue opened with AWS (#7125177371, #7133921591) to discover a reason why database instance would stop writing data. AWS did not report any problems on their side."),Object(o.b)("p",null,"The best idea we have to explain the issue (Victor B.) is that we hit the networking volume limit set to 1Gbps for ",Object(o.b)("inlineCode",{parentName:"p"},"r5.large")," instances. All DB instances have been upgraded to ",Object(o.b)("inlineCode",{parentName:"p"},"r5.xlarge")," to remove the networking volume bottleneck."),Object(o.b)("h2",{id:"time-to-restore"},"Time To Restore"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Incident Reported Timestamp: 13:07 UTC on June 24, 2020"),Object(o.b)("li",{parentName:"ul"},"History Traffic Switched to Stage: 14:41 UTC on June 24, 2020"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"X ---\x3e EOS")," Exchanges Enabled: 20:27 UTC on June 27, 2020"),Object(o.b)("li",{parentName:"ul"},"Root Cause Identified: 14:03 UTC on June 28, 2020"),Object(o.b)("li",{parentName:"ul"},"Upgrade to Large Instances: 14:25 UTC on June 28, 2020"),Object(o.b)("li",{parentName:"ul"},"Restoring Missing Data on Prod: 07:59 UTC on June 28, 2020"),Object(o.b)("li",{parentName:"ul"},"Finished Restored of Prod Data: 07:14 UTC on July 07, 2020"),Object(o.b)("li",{parentName:"ul"},"Total Impact Time: >1 day"),Object(o.b)("li",{parentName:"ul"},"Total Time Since Escalation: 2.5h")),Object(o.b)("h2",{id:"risk-of-future-occurrence"},"Risk of Future Occurrence"),Object(o.b)("p",null,"Medium-High; until we address the steps outlined below."),Object(o.b)("h2",{id:"mitigation-steps"},"Mitigation Steps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the limiting factor (network volume) is correct, the risk is lower."),Object(o.b)("li",{parentName:"ul"},"We need to improve writing speed (currently it takes days to replenish one day of missing data)"),Object(o.b)("li",{parentName:"ul"},"Improve error reporting (we don't know how yet, but the server should stop if it cannot write data to DB)"),Object(o.b)("li",{parentName:"ul"},"We can compare the stage to the production DB to detect missing data in realtime.")),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Slack Thread: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://exodusio.slack.com/archives/C0142UATNG7/p1593004020171100"}),"https://exodusio.slack.com/archives/C0142UATNG7/p1593004020171100"))))}d.isMDXComponent=!0},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);