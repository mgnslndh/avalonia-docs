"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[6279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,w=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(w,i(i({ref:t},c),{},{components:n})):a.createElement(w,i({ref:t},c))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Windows",l={unversionedId:"getting-started/windows",id:"getting-started/windows",title:"Windows",description:"Window is the top-level control in Avalonia.",source:"@site/docs/getting-started/windows.md",sourceDirName:"getting-started",slug:"/getting-started/windows",permalink:"/docs/next/getting-started/windows",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/windows.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Graphics & Animations",permalink:"/docs/next/getting-started/programming-with-avalonia/graphics-and-animations"},next:{title:"UserControls",permalink:"/docs/next/getting-started/usercontrols"}},d={},s=[{value:'Visual Studio <a id="visual-studio"></a>',id:"visual-studio-",level:3},{value:'.NET Core CLI <a id="net-core-cli"></a>',id:"net-core-cli-",level:3}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"windows"},"Windows"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Window")," is the top-level control in Avalonia."),(0,r.kt)("p",null,"A window consists of two parts: a ",(0,r.kt)("a",{parentName:"p",href:"../../guides/basics/introduction-to-xaml.md"},"XAML file")," ","(","e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml"),")"," and a ",(0,r.kt)("a",{parentName:"p",href:"../../guides/basics/code-behind.md"},"code-behind")," file ","(","e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml.cs"),")",". The code-behind defines a .NET class which represents the window."),(0,r.kt)("p",null,"For more information and examples, see the ",(0,r.kt)("a",{parentName:"p",href:"../controls/window.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Window"))," control."),(0,r.kt)("p",null,"The default application templates create a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Window")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindow"),". You can create additional windows from templates too:"),(0,r.kt)("h3",{id:"visual-studio-"},"Visual Studio ",(0,r.kt)("a",{id:"visual-studio"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right click the folder in Solution Explorer that you'd like to add the window to"),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Add -> New Item")," menu item"),(0,r.kt)("li",{parentName:"ol"},'In the dialog that appears, navigate to the "Avalonia" section in the category tree'),(0,r.kt)("li",{parentName:"ol"},'Select "Window ',"(","Avalonia",")",'"'),(0,r.kt)("li",{parentName:"ol"},'Enter your window name under "Name"'),(0,r.kt)("li",{parentName:"ol"},'Click the "Add" button')),(0,r.kt)("h3",{id:"net-core-cli-"},".NET Core CLI ",(0,r.kt)("a",{id:"net-core-cli"})),(0,r.kt)("p",null,"Run this command replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"[namespace]")," with the namespace you'd like to create the window in and ",(0,r.kt)("inlineCode",{parentName:"p"},"[name]")," with the name of the window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new avalonia.window -na [namespace] -n [name]\n")),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/avalonia-dotnet-templates/"},"the .NET core templates repository"),"."))}u.isMDXComponent=!0}}]);