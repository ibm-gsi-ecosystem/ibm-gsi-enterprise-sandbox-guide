(window.webpackJsonp=window.webpackJsonp||[]).push([[24,69],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),l=a.n(o),i=a("NmYn"),c=a.n(i),n=a("Wbzz"),r=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a.n(u),g=a("qKvR"),m=function(e){var t,a=e.title,o=e.theme,l=e.tabs,i=void 0===l?[]:l;return Object(g.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===o,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,o=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||o,i=l.baseUrl,c=l.subDirectory,r=i+"/edit/"+l.branch+c+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:r},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),x=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,l=o.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===l,r=new RegExp(l+"/?(#.*)?$"),s=o.replace(r,a);return Object(g.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(g.b)(n.Link,{className:x.link,to:""+s},e))}));return Object(g.b)("div",{className:x.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:x.list},i))))))},t}(l.a.Component),y=a("MjG9"),j=a("CzIb"),v=a("Asxa"),w=a("OIbQ"),N=a.n(w),C=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(v.c,{className:N.a.row},Object(g.b)(v.a,null,Object(g.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,l=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,p=b.tabs,A=b.title,O=b.theme,x=b.description,v=b.keywords,w=b.date,N=Object(j.a)().interiorTheme,I=Object(n.useStaticQuery)("2456312558").site.pathPrefix,P=I?o.pathname.replace(I,""):o.pathname,T=p?P.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",E=O||N;return Object(g.b)(s.a,{tabs:p,homepage:!1,theme:E,pageTitle:A,pageDescription:x,pageKeywords:v,titleType:u},Object(g.b)(m,{title:l?Object(g.b)(l,null):A,label:"label",tabs:p,theme:E}),p&&Object(g.b)(k,{title:A,slug:P,tabs:p,currentTab:T}),Object(g.b)(y.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:d}),Object(g.b)(C,{date:w})),Object(g.b)(f.a,{pageContext:t,location:o,slug:P,tabs:p,currentTab:T}),Object(g.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},vINe:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));var o,l=a("wx14"),i=a("zLVn"),c=(a("q1tI"),a("7ljp")),n=a("013z"),r=(a("T0C+"),a("qKvR"),{}),s=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),b={_frontmatter:r},d=n.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)(d,Object(l.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(s,{mdxType:"PageDescription"}),Object(c.b)("h2",null,Object(c.b)("strong",{parentName:"h2"},"Private Catalog")),Object(c.b)("p",null,"Private catalogs provide a way to centrally manage access to products in the IBM Cloud catalog and your own catalogs. You can customize your private catalogs to make specific solutions available to users in your account. By doing so, you can ensure that your catalogs are relevant to your business. "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Creating a private catalog with all products included")),Object(c.b)("p",null,"Complete the following steps to create a catalog that includes all products in the IBM Cloud catalog:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"In the console, go to Manage > Catalogs, and click Create a catalog."),Object(c.b)("li",{parentName:"ul"},"Enter a name, make sure the Start with all available products in this account option is selected, and click Create. The availability is based on the filters set at the account level on the Settings page."),Object(c.b)("li",{parentName:"ul"},"Confirm that the catalog includes all products by clicking the catalog name > Manage filters. Then, check that Include all products in the IBM Cloud catalog is selected in Step 1: Select to include or exclude all products in the IBM Cloud catalog.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVQoz4WS3U7CQBCFeW0ohdJ220L1Rgl4wQt5Z0yQoKggaqHAhUL5KcjxTG1RYqJNTjK73fn2zMzmSqUSRIZhwPO8g6qiavWXarUalFJotVoIJzPMFxE+9sCeWkRL5DRNQ4Uw07JQ1PWDDNNERVSpHMnkXrFYRKPRxG2wRDd4Q/tpgl4YYRbFyNm2DeU4UIRYhQIsXmAzQWKbscWLBCKSWM5LNRfNJrp3L7i8HuLqZoi7xxDjYIKc4gGbQCefh1EggC5sJpQJVdwzU1eZyuUyNP47Oz1Fv93GU6+HYNDHNHjF+P4+BbInLvsovXHZO+lTzfdxQkeu6yZrn2uJxV2e7uvn5xh0u4keOh2M+gNMhs+/gQ7dep6bDManO1lnw5BYgAUB1usYhyHi7RabOEbMycyX62OgmyaLPMpnieIqA0r8PZQGRqMRNpsN5Ntxyu+L1THQUc4BUP0DqHOAAgzpcLfb8cnsv4DREVCHsq0kTt5iCvyrZAHugW+HP4GO/gXMHCU9/Ac4nU6TktfrFbYkzgn8BJWrPKo+yG+PAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Catalog Access",title:"IBM Cloud IAM Catalog Access",src:"/ibm-enterprise-runbooks/static/af1a1c5a8fb005fa97ac813b8b886104/3cbba/AllProd.png",srcSet:["/ibm-enterprise-runbooks/static/af1a1c5a8fb005fa97ac813b8b886104/7fc1e/AllProd.png 288w","/ibm-enterprise-runbooks/static/af1a1c5a8fb005fa97ac813b8b886104/a5df1/AllProd.png 576w","/ibm-enterprise-runbooks/static/af1a1c5a8fb005fa97ac813b8b886104/3cbba/AllProd.png 1152w","/ibm-enterprise-runbooks/static/af1a1c5a8fb005fa97ac813b8b886104/b0b66/AllProd.png 1586w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Creating a private catalog with 1 product included")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Go to Manage > Catalogs, and click Create a catalog."),Object(c.b)("li",{parentName:"ul"},"Enter a name, and click Create."),Object(c.b)("li",{parentName:"ul"},"Click the catalog name > Manage filters."),Object(c.b)("li",{parentName:"ul"},"Select Exclude all products in the IBM Cloud catalog in Step 1: Select to include or exclude all products in the IBM Cloud catalog."),Object(c.b)("li",{parentName:"ul"},"Skip step 2, and click Add in Step 3: Add exceptions to the rules."),Object(c.b)("li",{parentName:"ul"},"Make sure Include is selected as the condition, and then individually select the products you want users to access. In the case of our example project, you select Cloud Object Storage.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVQoz42S2U4CQRBF+WtBZt9neDTEgER594Ef8BeExAUjCkPckEVQFmFmcK5VhCFENLGTm67qdJ/uul0pSZKhKAo0TYNt2xu5rvurPM+DaZo4OT7G3csU9YcBLlpdNDpjTIIYKUEQoKoqVAJKkrRRssYzX8Yxz7qug88UCgX4vSlq7Q/Un97hDz4xi4CUYRgwLQtmNgs1nYa2v7+SwnEms4p5naVTzEBJlnF4cIB2rYpm9RzP11fo3NQx9H2kTAIalgkznYHCALpdF8XVbNBLdVGAIohQsiL0vb0VLEPgPAGf7ptoNxrwb2/xTLDxYLAGkic2leNqOjzKc5Qn2s5dkkX+quT5UamE114PQRgijEIsAQRfVDIbzGXzRptMd9h8Mj7RJs/lYDsOLLKHP/GoWESfgFFExtGIljEW4dcWkDY6dIC1/avO+sc9Ev8+75ep7CIBe/zCIADi+HegbTs7bZJcwO2yA+z3kQwueRHFP4G7PfgnkNrmrdvFfDzGbDTCfDLDYh78o+QtoLP2kHuymM/jrFLBabmM1uUFus0Whg+P+Aau8Tv0aAlZMwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Catalog Access",title:"IBM Cloud IAM Catalog Access",src:"/ibm-enterprise-runbooks/static/e0729c031b7fef7c23a75c01c088c085/3cbba/OneProd.png",srcSet:["/ibm-enterprise-runbooks/static/e0729c031b7fef7c23a75c01c088c085/7fc1e/OneProd.png 288w","/ibm-enterprise-runbooks/static/e0729c031b7fef7c23a75c01c088c085/a5df1/OneProd.png 576w","/ibm-enterprise-runbooks/static/e0729c031b7fef7c23a75c01c088c085/3cbba/OneProd.png 1152w","/ibm-enterprise-runbooks/static/e0729c031b7fef7c23a75c01c088c085/64c37/OneProd.png 1581w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Adding your software to a private catalog")),Object(c.b)("p",null,"Refer the above steps for creating a private catalog. Once the private catalog is created, add your own software to that. The software is available to all users with access to the private catalog."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Select GSI catalog from the list of private catalogs."),Object(c.b)("li",{parentName:"ul"},"Click Add product."),Object(c.b)("li",{parentName:"ul"},"Enter the repository URL or TGZ archive location for your software version, and click Add product. "),Object(c.b)("li",{parentName:"ul"},"Click the Edit icon Edit icon, update the name to 1.Resource Groups, and set at least one category, for example, Developer Tools. This category can be used by users later to filter for the software."),Object(c.b)("li",{parentName:"ul"},"Click Update to apply your changes."),Object(c.b)("li",{parentName:"ul"},"Scroll to the Configure deployment details section, and click Add deployment values."),Object(c.b)("li",{parentName:"ul"},"Select replicaCount, and click Add deployment values."),Object(c.b)("li",{parentName:"ul"},"In the Deployment values section, click the replicaCount parameter."),Object(c.b)("li",{parentName:"ul"},"Update the default value from 1 to 2, and click Update."),Object(c.b)("li",{parentName:"ul"},"Click Update."),Object(c.b)("li",{parentName:"ul"},"Click the Validate product tab."),Object(c.b)("li",{parentName:"ul"},"In the Configure the validation target section, select your cluster from the Cluster list, and enter  as the namespace."),Object(c.b)("li",{parentName:"ul"},"Click Validate to ensure that your software can be installed successfully. This step is required before you can make it available for users in your account. This action can take several minutes. In the Validation summary section, the status is displayed as Validated when the deployment is complete."),Object(c.b)("li",{parentName:"ul"},"Make sure the deployment is successful by checking the Schematics workspace "),Object(c.b)("li",{parentName:"ul"},"Return to the Validate product tab, click the Actions icon Actions icon, and select Publish to account to make your software available to all users in your account through your private catalog.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABOUlEQVQoz42SaW6DMBSEOXqP1Bvkdy9QJT/ShrAECKs3Fi/TZ5Ooom3UWBpZyMzHzDNRVXfoug7W2o38cs49LWsdNCk6xzHSNAvQoihQXC7I8xz19Qop5VMSQkJPEjAS0ZWMfd+Dcw5GEkpBTRPUOAZtzMKbxUacE0gr7N4VXl4VovUL62Hy8Ynz4YD8eERFyeP9HhdKW5YlsizDKTkhSRLEoVUaGiVJiqaucExbvO1bRD4ZZwwjpRJ1i6HtIIYByieqKthlgQsDBRQlsW6d731N5NPG3J4MojU2X4EEG9h39bFtYeaZIM7fEOQiYKzZXIb3a639Me0/gLzp0A8szFT6WTYEpIQrEGAzC0A4/AKGfOYBkFHledGYmhJmGgPQmxezhMp/JXwIHO5AemluK/od/gea2wz9/gVQa7gG7jr0yQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Catalog Access",title:"IBM Cloud IAM Catalog Access",src:"/ibm-enterprise-runbooks/static/d1d12d24ae75be0827a9beba1e747375/3cbba/PrivateCatalog.png",srcSet:["/ibm-enterprise-runbooks/static/d1d12d24ae75be0827a9beba1e747375/7fc1e/PrivateCatalog.png 288w","/ibm-enterprise-runbooks/static/d1d12d24ae75be0827a9beba1e747375/a5df1/PrivateCatalog.png 576w","/ibm-enterprise-runbooks/static/d1d12d24ae75be0827a9beba1e747375/3cbba/PrivateCatalog.png 1152w","/ibm-enterprise-runbooks/static/d1d12d24ae75be0827a9beba1e747375/abc32/PrivateCatalog.png 1480w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-catalog-private-catalogs-index-mdx-c3ed816f045c582e762c.js.map