(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(77)),a={title:"Template"},c={unversionedId:"engineering/technical-design-docs/template",id:"engineering/technical-design-docs/template",isDocsHomePage:!1,title:"Template",description:"Your TDD Title",source:"@site/docs/engineering/technical-design-docs/template.md",permalink:"/docs/engineering/technical-design-docs/template",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/engineering/technical-design-docs/template.md",sidebar:"docs",previous:{title:"Template",permalink:"/docs/engineering/technical-design-docs/template"},next:{title:"Retrospectives",permalink:"/docs/engineering/retrospectives"}},l=[{value:"Your TDD Title",id:"your-tdd-title",children:[]},{value:"Problem Statement",id:"problem-statement",children:[]},{value:"Design",id:"design",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Alternatives",id:"alternatives",children:[]},{value:"Infrastructure Requirements",id:"infrastructure-requirements",children:[]},{value:"Open Quesitons",id:"open-quesitons",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"your-tdd-title"},"Your TDD Title"),Object(o.b)("p",null," Give the document a relavent title above."),Object(o.b)("h2",{id:"problem-statement"},"Problem Statement"),Object(o.b)("p",null," Provide a succint description of the problem we are trying to solve."),Object(o.b)("h2",{id:"design"},"Design"),Object(o.b)("p",null,"Describe the high-level approach we will plan to take in order to solve the problem above. Include as much detail as necessary to convey your thoughts. Talk through typical usage and edge cases. Include code snippets and model changes if necessary."),Object(o.b)("h2",{id:"scope"},"Scope"),Object(o.b)("p",null,"Describe what is in scope, and importantly, out of scope, for this proposal."),Object(o.b)("h2",{id:"drawbacks"},"Drawbacks"),Object(o.b)("p",null,"Document any drawbacks to this proposal. Consider the security implications of the proposal."),Object(o.b)("h2",{id:"alternatives"},"Alternatives"),Object(o.b)("p",null,"Document any alternative solutions.\n|Alternative Solution|Pros|Cons|\n|---|---|---|"),Object(o.b)("h2",{id:"infrastructure-requirements"},"Infrastructure Requirements"),Object(o.b)("p",null," Document any infrastructure requirements your will solution will need."),Object(o.b)("h2",{id:"open-quesitons"},"Open Quesitons"),Object(o.b)("p",null," List any questions you have about the proposal, of which you want to solicit feedback."))}u.isMDXComponent=!0},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);