(window.webpackJsonp=window.webpackJsonp||[]).push([[44,69],{"013z":function(e,t,a){"use strict";var s=a("q1tI"),r=a.n(s),o=a("NmYn"),n=a.n(o),i=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),p=a.n(l),u=a("QH2O"),m=a.n(u),d=a("qKvR"),g=function(e){var t,a=e.title,s=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(d.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===s,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},A=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,s=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||s,o=r.baseUrl,n=r.subDirectory,c=o+"/edit/"+r.branch+n+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+A.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),O=a("dI71"),j=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,r=s.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),b=s.replace(c,a);return Object(d.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(d.b)(i.Link,{className:j.link,to:""+b},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:j.list},o))))))},t}(r.a.Component),y=a("MjG9"),w=a("CzIb"),x=a("Asxa"),k=a("OIbQ"),N=a.n(k),I=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(x.c,{className:N.a.row},Object(d.b)(x.a,null,Object(d.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,m=l.tabs,A=l.title,O=l.theme,j=l.description,x=l.keywords,k=l.date,N=Object(w.a)().interiorTheme,M=Object(i.useStaticQuery)("2456312558").site.pathPrefix,B=M?s.pathname.replace(M,""):s.pathname,S=m?B.split("/").filter(Boolean).slice(-1)[0]||n()(m[0],{lower:!0}):"",E=O||N;return Object(d.b)(b.a,{tabs:m,homepage:!1,theme:E,pageTitle:A,pageDescription:j,pageKeywords:x,titleType:u},Object(d.b)(g,{title:r?Object(d.b)(r,null):A,label:"label",tabs:m,theme:E}),m&&Object(d.b)(v,{title:A,slug:B,tabs:m,currentTab:S}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:p}),Object(d.b)(I,{date:k})),Object(d.b)(h.a,{pageContext:t,location:s,slug:B,tabs:m,currentTab:S}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kDVC:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var s,r=a("wx14"),o=a("zLVn"),n=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("T0C+"),a("qKvR"),{}),b=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:c},p=i.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(p,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"}),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Introduction")),Object(n.b)("p",null,"After you set up your IBM Cloud account, you’re ready to start planning how you want to organize resources and assign access to identities in your account. These best practices provide you with the basic building blocks to enable successful and secure app development in IBM Cloud. "),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Resource groups")),Object(n.b)("p",null,"Resource groups offer a way for you to organize IAM-enabled resources that are governed by IBM Cloud Identity and Access Management (IAM). You can group resources and assign access to individual service instances or entire resource groups that use IAM."),Object(n.b)("p",null,"The IBM Cloud account owner can add resources to any resource group, but other users must be granted access by using an IAM access policy. There are two minimum platform management roles that users must be assigned to add resources to a resource group: viewer role or higher on the resource group and editor role or higher on the resource or service."),Object(n.b)("p",null,"When you assign resources to a resource group, they can’t be later moved to another resource group. Be sure to plan how you want to organize resources in your account before you assign them to a resource group."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVQoz5WSy07CQBSGeQ9KQIXKRRII4iXRhStfjadQWwLuWWDQxIREXevWhS4EBFpaSrm0QPt7zmCJMcboJH+YTIbvfPOnIVneRjweRzgcRqlUQvXyEmfn51BUFZVqFZVK5ceUy2UoigKVoyq0v6AzFaF8PodMJo1YLIqnx0f48zmswQDuZAJ4Hv67Qscnpzg8OsGmvIPmVQNmp43311d0Ke3nZ3RfXmAMhzBNU8QwjHUGHHOErmZAMyyMRiMyLOxht3iArbiMZr0OezxGX9MwtCyYZNonsE5/1HVdZEBnQxqwDg3pvneg9ftioHhyOp1CRArjrtGA5/twHEfo+4sFXLpk0/MNArHVhKv4sjyqhc0sCu9DxWIRe/v72IjFcH99LS4FwCX1OSOQQ78M4riuC5+GBmHIdDrFbDZbAQuFArLZLCKRiAAulsu1hUcgh4BcQ9Cbbdsre4KJoXSfn25RRbwXwFwuB0mS1oYM5Kcvyea7Idv/aphMJpFKcYcSHm5uBHBO3QXLZSvu8NNwTLZfDRnCdmwugIlEArIsIxqN4rZWg95qiU9Ge3tDjz4Zu9eD+wfD4PwDmoCpCgUE9nYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Resource Group",title:"IBM Cloud IAM Resource Group",src:"/ibm-enterprise-runbooks/static/0476f65bb0682365a70fe62d21bc5fed/3cbba/RG.png",srcSet:["/ibm-enterprise-runbooks/static/0476f65bb0682365a70fe62d21bc5fed/7fc1e/RG.png 288w","/ibm-enterprise-runbooks/static/0476f65bb0682365a70fe62d21bc5fed/a5df1/RG.png 576w","/ibm-enterprise-runbooks/static/0476f65bb0682365a70fe62d21bc5fed/3cbba/RG.png 1152w","/ibm-enterprise-runbooks/static/0476f65bb0682365a70fe62d21bc5fed/e35c7/RG.png 1372w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Platform Roles")),Object(n.b)("p",null,"Govern user’s ability to do actions at the IBM Cloud Platform level"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Why"),"\nCustomers need the ability to set platform access, but withhold service actions."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example"),"\nCreating, viewing, or delete instances of a service, but not developing in the service"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"4 Platform Roles"),"\nAdministrator, Editor, Operator, Viewer"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"498px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8ElEQVQ4y5VU23baMBD0//9O+5a0adI8tCftSWx8l8GOuRPAGBswNjCdlUP80pfonGFXK7HWzo5kDAYJrJ6LIOzD80PE8SuUGkBFMaJ+gtV6g7quNY5E05xwPB41Gj1vNE6nk7ZG+poiDCIEhFJ9uI4P3wsR8gN9JvXo9ywHruvDtFwM+BHLtPX+wG/XZL9je1gu1zDidAg/SuBwQ5SOsNntkZU7FNVR23a+x4a+jh8qbbe0srbaFsiKnbbNBTA2cYxjmmKXJDjQnqdTNJMx6vHo3bZoBJPO72IT1Iw3oxHqxQKG9eUrUtfDyLY1hj0bb0phGUXaXnGdi21BX3VYvyaI7+5g9H7cY8YjJ+MJ4vEUg9FEl7djyRWJrk5nVCS7ZIkH2j0bIWXv6wYHAWPF/oAKwPD5GcbCssDSoQKlG6EIaVIYto2SpnhsiGU6sEl8wH1iHdtHj+qQZvQsGzb3mTffmLDXg4w+pdKnhJIkpXRSJK9DpMMx9vx6UZYoihI5ia8qnvTAWFHo+JaxgjheLkifnmB4Dz+RSbdWa9Q8/vl81lpr3v3PjDmrZcIHzDc5BhT0OsuwoV+KPHgi8d+WK+R5QX+Lt8VSx7Jsg/U6o+gzzGYLPZcxfXmBsXRsPVHkTHPjBuQt0EIOQkVfwXFaUcu6K5xS0OIrFb8foOwSBo+PKNk5WdjkW5zZ1Qv5OF+6cuVa1XVLgUCv/4cOnVBKXjBRyGs3mkyZNNeE78irlC2ka+J5CilN6Mi5X9Z0jHc952FkzEwThvxcZePqckP4LEl8ge8HlEr7cFi8txHvt+9TYirS5ZsvNiaTWXfC+bsO4wE38o8iGUnoeb6WiXT7+rpUFLTI5joXiKwa0tGVfH/fPgDs2OWTMunGpUuofv1Gxi/0+dJM+fzIy5GRH3lRVpTLelt+2DeRTpbrdZkLZP+SsdW+wpSXxBjyQpd8wsyb70j+/MXMdrhgf9grrvOxaWFO/zqfOy5mTLQg18ntLf4BmTU+mmN4gooAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Assign Platform Access Roles",title:"IBM Cloud Assign Platform Access Roles",src:"/ibm-enterprise-runbooks/static/4e9196ac1f70249307d2aacafb8e7f04/a0e61/Platform.png",srcSet:["/ibm-enterprise-runbooks/static/4e9196ac1f70249307d2aacafb8e7f04/7fc1e/Platform.png 288w","/ibm-enterprise-runbooks/static/4e9196ac1f70249307d2aacafb8e7f04/a0e61/Platform.png 498w"],sizes:"(max-width: 498px) 100vw, 498px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Service Roles")),Object(n.b)("p",null,"Govern user’s ability to do actions at a service level (consume/use a service)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example"),"\nDeveloper access for service-specific actions like using a service’s UIs, CLIs, and APIs"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"3 Service Roles"),"\nManager, Writer, Reader"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"494px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACg0lEQVQ4y61TyVLbQBDV/38BhLDklhyAUwIxVMHBFNgUVSzGtrzIWo2MwYskW9bml9cDZqlccoiqXnVPT09rXr9pbTQao3bfhGV7ME0HpuWg0zWV7Zk2imKJf/2WyyW00dMzrq9raDbbLKyj3mixsA3DMAlLFfYHj/DcPiz6/f4DPO8FLmOO48HhZQaDoSqqhUEAmwFJ6BOSkKYZ8ixDRqRJiix9sWmScC99R/IOyVE3xH/+NLtUgnt+Dr9SUXi4uPgbEl/tffRXa9o+bf/kBJr+6wAOe9TpdFXv0sUCGanlpCRWkMTxW1zsYj5HtkgUVJz78g3OzqD5FxVkXPR6llK30WzBoN99FWWleKdtKL9FK/sSE+Es20W9rmMUzTCoVqny1ZWq3m51oett3tSg7eDm5l4pLupLoSZj97UGut3eW65HxYMgVGIOJwG8Mm/olsuIiwJjvscZ/xKGESbcjOgHYUgb8RDBeMj1bDbDdBqoQgXPffyGl5fQWkfHcIZPsF0Pc/Yiz3Mlf5bl6oA8oSz7DMkRm7CnC/YxZ64q+ImyUOLECM16Q6ev4+6uQZpi66+xJmqk3WSO+NICvdVBwqLyPUpBj8rIcjKeQMZwSipCdTyZKloRqY65F7IFQncVm89j1Q5pDSm937BVOoLtP6JNMeSgTEhBSkX+Mi0yHbLO5Bm9IpGnEy8Q8/nI/owXSFlzwLeoTW9vVXV/OELP89G2OJv+ED3OqaxNKmh6Axiu+D4Mp09FySJOMI7miDh2z1MWZI2oVoN2uraG891d/N7cQmlrG0fbOzj8uomfXzZwvPONsS0cbGwqX+KHzCt//4HL/T1U9/ZQ4dmqYH8fp+vr+AOWYVbhvz6uigAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Assign Service Roles",title:"IBM Cloud Assign Service Roles",src:"/ibm-enterprise-runbooks/static/f7ab2a092cccef7a9edff4d14c00ec67/7a0f1/ServiceRole.png",srcSet:["/ibm-enterprise-runbooks/static/f7ab2a092cccef7a9edff4d14c00ec67/7fc1e/ServiceRole.png 288w","/ibm-enterprise-runbooks/static/f7ab2a092cccef7a9edff4d14c00ec67/7a0f1/ServiceRole.png 494w"],sizes:"(max-width: 494px) 100vw, 494px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Access Groups")),Object(n.b)("p",null,"Grouping of user and service IDs to which the same IAM access can be granted."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Why Access Groups?"),"\nYou can assign a single policy to multiple users or service IDs instead of assigning the same access multiple times per individual user or service ID."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"What is it not?"),"\nAn access group is not necessarily an Azure team or AWS role. (Predefined Access Groups in roadmap)"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"675px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"128.81944444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADUklEQVRIx52VWU8aYRSG+RMmXkjrAioKEiFEcLmoLa3Vqya96UX/qkkTk2oTl7rUtrRhU4EBZpiFWYCZt+d8I1VxiUry+I2EeeY9nPN9BMbGxhB88QLRaAx8PTQ0JBgeHsbU1BQikQimp6cFfM3vhUKhewlMTk5ifHxcMDExIQgGg1haWsLm5iZ2dnawvb19g62trXsJzM3NIZVKIZlMiqdzktHRUaytrUFVVZydnaFQKKBYLIq1VCrBdd17CUQiM4jH45idnQWn7Quz2Syq1SrqdQmVSgXn5+eoXFyIa1mWb6EoilgDseiMSBcKcbnjJA2Lkt+8eY1arYZqpYEqr0RNkgQX9KALEl+HH84EkisbWHmVxcLyKuZTS4gnFzEdTWDjwydKJ8NSDFhUuqVpAvsOHNuG4ziCQHJ5HSura0ivZBFPLSOWyCA8M4+Nj59RPDhE7WAP0q9fkE5Pb1H/+RO142M0Tk7gAuh2OlRyLIr5+YT4/rjDvAZHgnj7/j0Ku7s43dvD4ckRyqUiyuUiNYWaU7yEGpTP5/GDpoGvC3RNwhgymTQWFhZEl5mXNJfv1tdR3N9Hs1KHpNmoKSaqRFM1YZkmTMKyLLQNAxKltKhsfk+MzeLiIkkzSCQSN4Slg31YLR0m1dPu+Dg93HzRqGi53P9/LxNmaKdExcgMCrWmCsUGWmRtGB7ktoea5sHqeHS7B7fbRev3byHzeA5ZmE6nhYy3zqBQb2pQHUC1POi2L2o7Hro9zw94Xeh5/ta7znVhmYQqCTlhk5LxDZyqD/91ez2og8JwOCwYFPYTtiihQekU00cmzM4jErJ0UNiWNejcEBKylMvWCLv7gLCf7q6ESkNDkxI2KVXvrpKfKrSoZBo3WNRhh6QdxvK/z2cJHRJ2SOjo3hVGv0F+U54ktKnkroMbpYpyn5vQlvk0oY1PTXDpBtf1ebawRSU3SCjp3q2UeGgO7xMasr9TNGpEy/JHhtdO7zljs+/PYZsOBJ4/3nK8qo8R9hkUao0WFOqyYvQgGy4sh49SVxwEjEuHaosO4Mft5e8HaOs2dPowuaATJm6/1D9/roSDP9T+iT2CtyTM029y/stX5L4d4+/OIXKXNA59mkdHkOhUr9Op3j++/gFcW/ol4JAcPgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Access Group",title:"IBM Cloud Access Group",src:"/ibm-enterprise-runbooks/static/f80a27b8f1eb75d4cb21728444790d41/761cc/AG.png",srcSet:["/ibm-enterprise-runbooks/static/f80a27b8f1eb75d4cb21728444790d41/7fc1e/AG.png 288w","/ibm-enterprise-runbooks/static/f80a27b8f1eb75d4cb21728444790d41/a5df1/AG.png 576w","/ibm-enterprise-runbooks/static/f80a27b8f1eb75d4cb21728444790d41/761cc/AG.png 675w"],sizes:"(max-width: 675px) 100vw, 675px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Account Management Services")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Manage platform level access and resources")),Object(n.b)("p",null,"Many of the platform level roles can be granted using an Account Management Service"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Easier way to provide platform access"),Object(n.b)("li",{parentName:"ul"},"Ex: Billing Role, User Access Role, Support Focal")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"675px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB0ElEQVQ4y41UiXKCMBTk/7/NjketjrXeAoKCQBAFj9fdNyZ1pofNzE5e8pJl3xG8+Xwu7XZbBoOBjMdj6ff7MplMnN3pdNTf6/V0brVaMhwO9TzX3W5X0jSVw+EgxhjxiqKQ/X4vWZZJnuffZvoteIGgbX2c7b4S+r6vaqh0Npu5eTqdymKxcDNVJEmiHy/L8hsc4Xa7lSAIJI5jiaJINpuNgjZBH8G9MAz1nFVm1VlCzt7pdNL4q6qS6/UqHLfbzeFyuaif4AWS8ez5fFYfFe92u68cVjC4QaUGh+ngRx4JmU+qo8r1eq3nSU4BPEu/Vend5O9xBiEvNU3jVNGu61rXHPRTuYYcojUsgtdXhzXaZDcaSXVPOsP8CY8FUcL5y4vMUOXVx4fEq5VEy6XEQIRC+Oi5HIWpoMA8tM1PcCHvQVJCfnU8ypU5I+7FydE+JfJ1Qoj20m9wChP0XYZFhmqxMAkIiALFyaC6ZmvQfkj8X/BSNK1hyyDZbtwVFlDYgJCrZwotvBy5KhFSjgtEfa8ch0EuG+ROCZ/k0CmMUdEMpCkuJ0CGPivwHA1fDgpmkIYjcvwfMiUM0Bo+/hwB/iAEbcXbm4Tv71LY5/XPkD8BKVlzBvX6ldAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Account Management Services",title:"IBM Cloud Account Management Services",src:"/ibm-enterprise-runbooks/static/83c9e879eee4eaf80b314d77ef71b014/761cc/AMS.png",srcSet:["/ibm-enterprise-runbooks/static/83c9e879eee4eaf80b314d77ef71b014/7fc1e/AMS.png 288w","/ibm-enterprise-runbooks/static/83c9e879eee4eaf80b314d77ef71b014/a5df1/AMS.png 576w","/ibm-enterprise-runbooks/static/83c9e879eee4eaf80b314d77ef71b014/761cc/AMS.png 675w"],sizes:"(max-width: 675px) 100vw, 675px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Resources")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/account?topic=account-account_setup"},"Best practices for organizing resources and assigning access"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-iam-best-practices-index-mdx-0c88b8799c07036a5d10.js.map