(window.webpackJsonp=window.webpackJsonp||[]).push([[70,69],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),c=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,b=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),A=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,b=new RegExp(o+"/?(#.*)?$"),l=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[A.selectedItem]=i,t),A.listItem)},Object(p.b)(c.Link,{className:A.link,to:""+l},e))}));return Object(p.b)("div",{className:A.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:A.list},i))))))},t}(o.a.Component),w=a("MjG9"),P=a("CzIb"),h=a("Asxa"),v=a("OIbQ"),y=a.n(v),T=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(h.c,{className:y.a.row},Object(p.b)(h.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,x=s.title,f=s.theme,A=s.description,h=s.keywords,v=s.date,y=Object(P.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,C=k?n.pathname.replace(k,""):n.pathname,D=m?C.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",L=f||y;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:L,pageTitle:x,pageDescription:A,pageKeywords:h,titleType:u},Object(p.b)(g,{title:o?Object(p.b)(o,null):x,label:"label",tabs:m,theme:L}),m&&Object(p.b)(N,{title:x,slug:C,tabs:m,currentTab:D}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(T,{date:v})),Object(p.b)(O.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:D}),Object(p.b)(b.a,null))}},"3B7b":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n,o=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),b=(a("T0C+"),a("qKvR"),{}),l=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:b},d=c.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(d,Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"}),Object(r.b)("h2",null,"Overview"),Object(r.b)("p",null,"Configure an LDAP (Lightweight Directory Access Protocol) connection for your cluster."),Object(r.b)("p",null,"You must connect an LDAP directory with your cluster. You can then add users from your LDAP directory into your cluster."),Object(r.b)("h2",null,"Connecting to your LDAP directory"),Object(r.b)("p",null,"Follow these steps to set up your LDAP connection."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log on as an administrator."),Object(r.b)("li",{parentName:"ol"},"From the navigation menu, click Administer > Identity & Access."),Object(r.b)("li",{parentName:"ol"},"Click Create Connection. The “LDAP connection” page is displayed."),Object(r.b)("li",{parentName:"ol"},"Enter the following details to set up your LDAP connection.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"LDAP connection"),"\nEnter following information "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Connection Name"),Object(r.b)("li",{parentName:"ul"},"Server Type"),Object(r.b)("li",{parentName:"ul"},"Base DN"),Object(r.b)("li",{parentName:"ul"},"Bind DN / Username"),Object(r.b)("li",{parentName:"ul"},"Bind DN Password"),Object(r.b)("li",{parentName:"ul"},"LDAP URL")),Object(r.b)("p",null,"Click Test Connection"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA1UlEQVQoz62R3QqDMAyF+9g+iFfilG64h/FNvOzQ2j/NPIG4TrwQtsJHEhtOT4zquifp+4NudU1t216maRrSWlNZllQUBVVVxbWi7awr/XS893uunPNkzIumadqx1tI8z4zk4zgyIQSKMXKUfN0cyTcVQmQRvAKcc3sjasQjeU8unFISQctN0gjkgSP5nfQCTJI5tPtoEL0ilN/BXd/3NAzDZ2RxKILHMUVIxjzewww7RGGM+VpKDhYB94iysDMgCC2VYuJGGfcMuMMPv4JaloXXjvgP3qVX+lNcNW8AAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM LDAP Connection",title:"IBM LDAP Connection",src:"/ibm-enterprise-runbooks/static/fc6919ae33c5aa571eb432a776dd192f/3cbba/LDAP-Connection.png",srcSet:["/ibm-enterprise-runbooks/static/fc6919ae33c5aa571eb432a776dd192f/7fc1e/LDAP-Connection.png 288w","/ibm-enterprise-runbooks/static/fc6919ae33c5aa571eb432a776dd192f/a5df1/LDAP-Connection.png 576w","/ibm-enterprise-runbooks/static/fc6919ae33c5aa571eb432a776dd192f/3cbba/LDAP-Connection.png 1152w","/ibm-enterprise-runbooks/static/fc6919ae33c5aa571eb432a776dd192f/0b124/LDAP-Connection.png 1728w","/ibm-enterprise-runbooks/static/fc6919ae33c5aa571eb432a776dd192f/4ea69/LDAP-Connection.png 2304w","/ibm-enterprise-runbooks/static/fc6919ae33c5aa571eb432a776dd192f/8bcdf/LDAP-Connection.png 2528w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h3",null,"Resources"))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-install-ldap-config-index-mdx-5cafd8b9bf1c01128d06.js.map