(window.webpackJsonp=window.webpackJsonp||[]).push([[93,69],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),s=a.n(r),i=a("NmYn"),n=a.n(i),c=a("Wbzz"),l=a("Xrax"),o=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a.n(d),g=a("qKvR"),A=function(e){var t,a=e.title,r=e.theme,s=e.tabs,i=void 0===s?[]:s;return Object(g.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===r,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,r=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||r,i=s.baseUrl,n=s.subDirectory,l=i+"/edit/"+s.branch+n+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),O=a("dI71"),w=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),i=a===s,l=new RegExp(s+"/?(#.*)?$"),o=r.replace(l,a);return Object(g.b)("li",{key:e,className:p()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(g.b)(c.Link,{className:w.link,to:""+o},e))}));return Object(g.b)("div",{className:w.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:w.list},i))))))},t}(s.a.Component),k=a("MjG9"),x=a("CzIb"),v=a("Asxa"),j=a("OIbQ"),C=a.n(j),E=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(v.c,{className:C.a.row},Object(g.b)(v.a,null,Object(g.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,s=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,m=b.tabs,u=b.title,O=b.theme,w=b.description,v=b.keywords,j=b.date,C=Object(x.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,S=I?r.pathname.replace(I,""):r.pathname,B=m?S.split("/").filter(Boolean).slice(-1)[0]||n()(m[0],{lower:!0}):"",Q=O||C;return Object(g.b)(o.a,{tabs:m,homepage:!1,theme:Q,pageTitle:u,pageDescription:w,pageKeywords:v,titleType:d},Object(g.b)(A,{title:s?Object(g.b)(s,null):u,label:"label",tabs:m,theme:Q}),m&&Object(g.b)(y,{title:u,slug:S,tabs:m,currentTab:B}),Object(g.b)(k.a,{padded:!0},a,Object(g.b)(f,{relativePagePath:p}),Object(g.b)(E,{date:j})),Object(g.b)(h.a,{pageContext:t,location:r,slug:S,tabs:m,currentTab:B}),Object(g.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},w5Zd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var r,s=a("wx14"),i=a("zLVn"),n=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("T0C+"),a("qKvR"),{}),o=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:l},p=c.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(p,Object(s.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{mdxType:"PageDescription"}),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Overview")),Object(n.b)("p",null,"Red Hat Advanced Cluster Management for Kubernetes controls clusters and applications from a single console, with built-in security policies. Extend the value of Red Hat OpenShift by deploying apps, managing multiple clusters, and enforcing policies across multiple clusters at scale. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"End-to-end visibility and control for your Kubernetes clusters")),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Register Openshift Cluster with Redhat Marketplace")),Object(n.b)("p",null,"To register a cluster, Red Hat Marketplace provides a command that installs the Red Hat Marketplace Operator and updates your global cluster pull secret."),Object(n.b)("p",null,"Refer the step by step ",Object(n.b)("a",{parentName:"p",href:"https://marketplace.redhat.com/en-us/documentation/clusters#register-openshift-cluster-with-red-hat-marketplace"},"instructions"),". As a result, you registered your cluster as well as installed Redhat Marketplace Opertor."),Object(n.b)("img",{src:"/images/rhmclusters.png",alt:"Redhat Marketplace Cluster"}),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Red Hat Advanced Cluster Management for Kubernetes")),Object(n.b)("p",null,"The Red Hat Marketplace offers a wide variety of products across 12 categories. As an example, let’s say that you want to try out Redhat Advanced Cluster Management."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmElEQVQ4yz1S7W7TQBD0O5UWmpQKaKEgUB+Bx0M8CkIUAT8QUuomsZPUcRPb54/4bJ89zG6aXrL2+m52d2Zvvc8nz/Hq/QdcX1/j3dUVXp6fYzQeY3R2jhejM5yOxji9fIuXby5wQuzRs2McHYudqD8en+Hi4ye8Zo6Ly0t4YZwgnIaYzCP4gViM2SJGHG/wkBg87CyiL18xu/mDeW4RPBgEm3xv9Odphcm3G/i//mKalPBK61CWNUzVIqeZsuG7QW072G6ABVB9/wGzXCPrAWN7mGZAxndWOxieJz9/I/l3i4y+VzcdUh4UTOz6AXXDhEWBhm/X9+hpjkDmAoaB/0H39p/0nUNDvxUMfa+uyc7kTNAqKA+mKOIIrm3R7nawss/AznVPhYahRxRvqYI+f3VZoq4qJeC1DDTGoOs6TRgvQviTCdIsQ8lCy9VKk1hrcXfnYxGGip1Op/B9X8+SJMFqudQ8nmxsNhs9kFXlOVICLJlbVpYzAUrhbZaTZalSN2nBogYDWRXEbbdkzBhlmJHNgWFHJmKQ3hDQOaf7TdtjYzr0TCYtkFaw5bqkd9JXKaQJS1Y4rC3Z3d76qNgTU+SYzWdoLPvMkfGnW2JzlV9sF8jSRFkZEhKGmlCk5nn+JFn8FfsmCQUchEtUvBzHS8nSrcp3ZLSKHnB/HylGFC4WCyXmSbUDQ6kgPRH5fe/QOs7brkPLbznrOqe+SM44q5V9nADuWaqQQp483ONcyTJVreOg/Wwoh7LUZ1AYLzRIlpDYj9CAhKxrux87ZSi0D0tGIIruNbCqSqw4RjUxEhyGc22JJAmCgLhIC63jmHGp+l7/KHF4vLGsqBGuE70IkRSs0z2bVhgaXk75xLDgoEvsjj2WUWuJ+Q8kNw2mRPc34wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/3cbba/rhacmsearch.png",srcSet:["/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/7fc1e/rhacmsearch.png 288w","/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/a5df1/rhacmsearch.png 576w","/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/3cbba/rhacmsearch.png 1152w","/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/942aa/rhacmsearch.png 1527w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"Create a project and name it “rh-acm-demo” in your IBM Cloud ROKS cluster."),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Buy the software")),Object(n.b)("p",null,"Go to the Marketplace catalog and search for Red Hat Advanced Cluster Management for Kubernetes. Select the correct tile and click on Free trial to start your 30-day trial, as shown in figure below"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVQoz1VTy27TQBT1uvRLuqAoi4ISiTxVlEURUiX4E8QKJEQ3PL6jO0Ao6iZq5QUoCKmrihWLgmI7cZzYqR0/Y/twzySu4EpH996Zuec+Zkbr9/t48vQZjo6P0Ww20Wq10Ol00O120W63FXq9HhqNxn+o1+t4cHCA+7LXPnqML4eH+CFcWhgncL5/FXxDsl7D81wY4zHGAtM0BQYMw1B2pYmF4yApS7inp/j9/AV+vXyF67fvoEHEfv8axoc3NJEkCQzTwmQywWq1QlEUWEuiPM+RZZkCfQgZJbu8xOrTZ8SDM2Tn5xvC+fUfeGNDHYiTFPbiBr4fKMIwDBUqO4oipYMgQCS6kBihR77VWiGZl1EGP85QSjVZlsKZzeBISze+r4gYTF3B366zWlWpxCmIrSr8V9hOLG2Xssn2GUxhZWxftSlEHEHl82wFrShKdTgWqEVWKUTMRvI0TZHLGgmIcjs7klV2JYowF0LXW2KxWKCQBY4gWi6xlgQkqy6CZExAm5VTc78CfSbRhA9+wKEHm0uJY5iWBUtu2RJdPRM+GT4l27blfKDmu5TEhOd5t1WqlrkZhtEtIZ/MTAKn06myXddVN8sqfl5d4WwwgD4cQr+4gK7rCkPxR6PRhtB1PawkgMLyZ9tbpibpfD7HXHzKx5MTPNI0tHZ2cG9vD3f391Gr1XBndxcP5Qf9BQhtDFmIzmuQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/3cbba/rhacmbuy.png",srcSet:["/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/7fc1e/rhacmbuy.png 288w","/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/a5df1/rhacmbuy.png 576w","/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/3cbba/rhacmbuy.png 1152w","/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/46ee3/rhacmbuy.png 1497w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"Go to Workspace > click the My Software, which is shown in figure below"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVQoz41S2W7CMBDMf/EALwhRcfSNn+jnVn2rFAjiDJCLHLbj6WyoIUGqykqjeNfemT3iffR6mM3nWCwWDSaTCabTKUajEcbjMYbDYXN26Pf7GAwGHUjOfP6Ot+kM3vZ0QpIkyLIMaZpis9nA930cDgdUVYWyLDuQ2DMKxndxhu8wgVfRaVtZFMjzHEprvGqab0ttoGrAM8agrmtYa2HkoqzQxAjx5U7g3jVon2tLQr41Gpa+51QsIQTXwAczGLCoWb2iQKcakjkTYuhcMu8xTyprCOVLNf/rE8vlEsF6jeJ6xXG/xzEMEUURCo7jfLkgCAJceSeWxvRXS+w5c2m9Q2ipGB5DXJgsCzCqQs5FSbIMX1qUuCxRKXWbOTuI6YuYcDwIpQUq6LKg0u2xqhQ0iUS5mTGHLrO0rmUKaHObvyuqWyERnc6I2ZaiomJldWtpAreMh287/p1QgmIrzme73SFhq67SV8zxdJdCk+FnJGtX3T7/hT9b1r//nmvvWfA/+wH1F4VpBdy71gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/3cbba/mysoftware.png",srcSet:["/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/7fc1e/mysoftware.png 288w","/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/a5df1/mysoftware.png 576w","/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/3cbba/mysoftware.png 1152w","/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/de9e4/mysoftware.png 1461w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Install the software")),Object(n.b)("p",null,"Go to Workspace > My Software and click the Install Operator icon, which is shown in figure below"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.0138888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVQ4y61TTW+CQBDl/x977LlNTNODKDHpf+iht1ajWIV+IK2CiMCys68zBAwFTXroJi8z+zFv3syA5dze4H4wgD0aYTweYzKZwLZHcBwHw+EQIz4XNL5t29WdWDlrQ+ItZQz+c1lJkiDLMhARtNYolQLVl8TJZK9qFEVxQp7nFdq+vLGESCDLsBW9Otri276D4UTe2xtm0ynm8zmWyyXW6zV836+s53lwXRer1ara73Y7WG25DWEZBvCvr0CHBJswhLtYYMGEaZr2SjSdllly0ByKpZq0WSXRyaf6bRtNXAOrnaUiZBTHIwruh2akwSdKLqVkdel+DyV37CvunTmToEdoSCM7pFg+PiF+maHkQREHCzmJLyhLaB6C6cRWJfcJCdk+weuzi4fZO9SZT0PeaU7SLvfUwx4hK1A83ZCH4Ydf2Gw2CIKg2ost6lJFIf6iUEpS/Djifu0ZuyhGFMdsI8RsD9w/zSVTS+GvKZ8lzHJskwIfUY7kqCrVDaR/JAPrKLxMKJ8NB+p6ynQBpvkZOoQ/LKLouVyn1pIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/3cbba/InstallOperator.png",srcSet:["/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/7fc1e/InstallOperator.png 288w","/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/a5df1/InstallOperator.png 576w","/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/3cbba/InstallOperator.png 1152w","/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/3f238/InstallOperator.png 1195w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Install the Red Hat Advanced Cluster Management for your free trial")),Object(n.b)("p",null,"Select the IBM Cloud ROKS cluster from the list of target clusters, then pick the namespace scope where you want to install the Operator, as shown in figure below"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrklEQVQ4y6WTX47TMBDGcyjEA0pL242W7gpxDgQHYw+DBCfggW67TWsnaZw4jh3nY8ZpsmXFy1IrP9nzyZk/9jj6+uYtblcJbj7c4f7jJ9yu7xG/X2Jxk+BdPMNiscB8PsdyucRqtQpzkiSYzWaI43iC99yt14gsAE+4Hmj9gDvb9KHrOrxmROn+CdvtI3bbLXRd43+HdR6ydoiEOOJwOKImZ8YYtG0bMIyh9YUWdLLNC43pvIftenIoM0gpkWcZsqJEpho0zfDTOF86appmYtQY7/1QclnVqJSahGtG31OGRyHx+JQiz4tQNlNV1bQeURSU9ZFxH+ta6+AsZCiKCtrYKcK1RGVZUoQ6tMg1TCXnUkAcDqhOpwlVFIFgU8BLuyb7Wc+pZCpdW3jnhpL3aQ4pxN8Ozz8cUzpb6gBeMyfqhP1uB8kJsEPaV54xdJ49XWy0FwpFqVCTwK9ihG9dkaapPbjHWLPW4sRZ0oU4zqjnV8Q49JZah/ZEnnuIG5Pml/xLdxTAEn1rsEkVfv7KA3mhw2lGfNuvuUUeVTv07MP3DJ+//caXhw1+bHTQ/gCXBBmOAo50mwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/3cbba/selectns.png",srcSet:["/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/7fc1e/selectns.png 288w","/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/a5df1/selectns.png 576w","/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/3cbba/selectns.png 1152w","/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/ac849/selectns.png 1217w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Verify the operator installation")),Object(n.b)("p",null,"Click the My Software / Red Hat Advanced Cluster and select the Operators Tab"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVQoz5WSPU/EMAyG+///BjsDIysbQrB0ZAHprm36naYfaZO82Gl6tHcnJCK9si3Hjx23kZQS8zzDGANrLbSxPt5rWRb8dUbj8N1pSG0Qya7zIOccWQfKwViGLtBaX4B8Z9N69zeeFgM1GyxUHzGEj6MEnzp+h3h9gab4fDpBCHFQmqZIksT7eZ4jyzKKUz8Ak6JtbOdW4FAI9OnZTzX2PaZp8j6vZFvLcWJzeH7E46/A9RkuJLRSoLawDOJCyrs7++MVPcUSD281PnN9BLLapvEaxxFt23rb0YdTtGuOFTUqiwLDMEC2DURe4jku8Pgh8FWOVxPSNLIs0RFw6hVkXWEiwEBAluJGBJZVhZmAHKu6BqxmgtfNk8EisONfJVjHloTN8mpCHpeVrIybJyP02ltcxXt78UP9fWDw/6VQ9wPmfg7A3AIJAAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/3cbba/rhacmverify.png",srcSet:["/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/7fc1e/rhacmverify.png 288w","/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/a5df1/rhacmverify.png 576w","/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/3cbba/rhacmverify.png 1152w","/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/92275/rhacmverify.png 1509w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"Log in to the cluster to verify that the Operator installed successfully, as shown in figure belowrhc"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.80555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVQoz52QzUrDQBDH8yKCFqttrW2pWsQP9KCCIB4EwYsHj32ECi1t2udS0JPWj1dQD0KxaT52s5vsJvk7m4M3PTgwzDCz8/vPrLVSKqO2Wsd8YRHtdhvdbhfXnQ56vd6vbt6YaA+HsG0b/X4fo9EIg8EA1sbWLkrVBorlVTy/vCJJEgSM4b9mXVxe4fTsHEfHJzlQaw3muQg8D9wPMHMDeD5HLCVEGIJzARZGYFzm0dQjEUJFlAsB65BAO/sHaG3v4fHuHsIP4XCFmB5MHYcEEiRKwSeR1OQk6Mx8hCJGStc4JBgwAWQZtAFW62v5uXOFZTzc3oC7DO9fIXQc0ZAgQEKDGpK2SAlmoELGiGKd9z7dCDMWEzAloITVWN9EpdbEQrGM8fgJiv7hbcIIJkk5gFYE1Aqc+fmmBjoL6FyhCKrwMRWYeBFINe9b9WYLS5XaD9CYokZGJ2SU/+XGhEohdZrnpvYNLNTXZKR8zFYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/3cbba/clusterverify.png",srcSet:["/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/7fc1e/clusterverify.png 288w","/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/a5df1/clusterverify.png 576w","/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/3cbba/clusterverify.png 1152w","/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/77da7/clusterverify.png 1655w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"OperatorHub - OpenShift Console")),Object(n.b)("p",null,"You can install OpenShift Operators directly from the cluster. Red Hat Marketplace Operators become available in the OperatorHub after you install the Marketplace Operator. To install a product directly from IBM Cloud ROKS, log in to the cluster, go to Operators > OperatorHub, search, and install. Below figure shows the dialog to install  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFUlEQVQoz3VSy27aUBD1f3RBWyCQBFBAaR5dZBFRqLBIQ1SkSl100d9seKSbRFW/oKrULgAh3lw/sLE5nXPBFlJbS0fX9tw5c87MGMWDDC7PL/AylUK5XEatVkOlUtGoVqv/BeOmaeLm5h0ajTvU63U0m00YueIpktljPEsk8eW+hclkgsFggPV6jSAI4vMvyH/GfML3NVarFYyqeYur6zd4fXWNx6cnWJbCeDzGcrmEEiwWi39irhxMLQ8z5WKxtCTP2hJ+/PQZjfcfUH5r4vHbd/DxPQ+eVOQlKlhT6U4tlegzCCW2/Re52Gw2MArFV0gf5pFIZdDuPsBxXTiOg41cUEsFT759wVqqh5IQhuEOwd57GLfCODm9wFGhhEQyg/tWG7ao4gWqtH7+EDIHnrzbYpOWIkUuC+1cEBRh2zYJz5HNnWjCjijkTwZDSRr9/oXRaLRVrRRG0lsmk5D3dEzuslBMWCid4eCogOepLFrtjm74ShQFUn0yleEIUSCKXSEaDofo9/taHdHr9TQplcaEeVmbdDanFZKQ1fS6eL7YnOv+2TJtgtYZ50lCEkSOYsLS2SWokgrbnW7cH/aRa+MJwUq+SaSUpSfJJyKJiCJioyhDycukX6QP0X34qveQPWPiZDpFX5acO0lbtEwwmQX21cUKOeFk5lhbJqErU2UyFZJoPp/pvlI1z9lsJkpVbHmfkPgDvCImzOK7DD4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/3cbba/rhacminstalled.png",srcSet:["/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/7fc1e/rhacminstalled.png 288w","/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/a5df1/rhacminstalled.png 576w","/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/3cbba/rhacminstalled.png 1152w","/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/e1af8/rhacminstalled.png 1539w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-redhat-rhacm-index-mdx-72467a87caf57598d70f.js.map