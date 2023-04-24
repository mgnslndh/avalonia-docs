"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={},r="The DataContext",l={unversionedId:"data-binding/the-datacontext",id:"version-0.10.19/data-binding/the-datacontext",title:"The DataContext",description:"The Control.DataContext property describes where controls will look by default for values when binding. The data context will usually be set for top-level controls such as Window and child controls will inherit this data context.",source:"@site/versioned_docs/version-0.10.19/data-binding/the-datacontext.md",sourceDirName:"data-binding",slug:"/data-binding/the-datacontext",permalink:"/docs/0.10.19/data-binding/the-datacontext",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/data-binding/the-datacontext.md",tags:[],version:"0.10.19",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\ud83d\udd04 Data Binding",permalink:"/docs/0.10.19/data-binding/"},next:{title:"Change Notifications",permalink:"/docs/0.10.19/data-binding/change-notifications"}},p={},d=[{value:'Binding DataContext <a id="binding-datacontext"></a>',id:"binding-datacontext-",level:2}],c={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-datacontext"},"The DataContext"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Control.DataContext")," property describes where controls will look by default for values when binding. The data context will usually be set for top-level controls such as ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Window"},(0,o.kt)("inlineCode",{parentName:"a"},"Window"))," and child controls will inherit this data context."),(0,o.kt)("p",null,"When using the MVVM pattern, the data context will usually be an instance of a view model."),(0,o.kt)("p",null,"If you created your application with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/tutorials/todo-list-app/creating-a-new-project#net-core-cli"},"Avalonia MVVM Application")," template then you will see something like this in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"private static void AppMain(Application app, string[] args)\n{\n    var window = new MainWindow\n    {\n        DataContext = new MainWindowViewModel(),\n    };\n\n    app.Run(window);\n}\n")),(0,o.kt)("p",null,"This means that when the ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindow")," is created, a new instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel")," will be created and assigned to the window's ",(0,o.kt)("inlineCode",{parentName:"p"},"DataContext")," property. From here all bindings will by default bind to properties on this object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window>\n    <Button Content="{Binding ButtonCaption}"/>\n</Window>\n')),(0,o.kt)("p",null,"Will bind the ",(0,o.kt)("inlineCode",{parentName:"p"},"Button"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"Content")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Window.DataContext.ButtonCaption"),"."),(0,o.kt)("h2",{id:"binding-datacontext-"},"Binding DataContext ",(0,o.kt)("a",{id:"binding-datacontext"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Info:")," In the samples below we consider that we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewModel")," that has a property named ",(0,o.kt)("inlineCode",{parentName:"p"},"Content"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Content")," itself is a class that has a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"Header"),". ")),(0,o.kt)("p",null,"When binding ",(0,o.kt)("inlineCode",{parentName:"p"},"DataContext"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataContext")," of the parent control is used as the source of the binding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window>\n    \x3c!-- Will bind `DataContext` to `Window.DataContext.Content --\x3e\n    <StackPanel DataContext="{Binding Content}"/>\n</Window>\n')),(0,o.kt)("p",null,"Controls that display content based on a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/templates/data-templates"},"data template")," will automatically set the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataContext")," for the controls in the template. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"ContentControl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window>\n    <ContentControl Content="{Binding Content}">\n        <ContentControl.ContentTemplate>\n            <DataTemplate>\n                \x3c!-- Will bind `Text` to `Window.DataContext.Content.Header --\x3e\n                <TextBlock Text="{Binding Header}"/>\n            </DataTemplate>\n        </ContentControl.ContentTemplate>\n    </ContentControl>\n</Window>\n')))}u.isMDXComponent=!0}}]);