import{J as c,K as g,L as x,N as m,O as p}from"./ant-design-vue.a8492f24.js";function v(n,t,e,l){if(!c(n))return n;t=g(t,n);for(var r=-1,a=t.length,o=a-1,i=n;i!=null&&++r<a;){var s=x(t[r]),f=e;if(s==="__proto__"||s==="constructor"||s==="prototype")return n;if(r!=o){var d=i[s];f=l?l(d,s,i):void 0,f===void 0&&(f=c(d)?d:m(t[r+1])?[]:{})}p(i,s,f),i=i[s]}return n}function u(n,t,e){return n==null?n:v(n,t,e)}function O(n,t="lang"){const e={};return Object.keys(n).forEach(l=>{const r=n[l].default;let a=l.replace(`./${t}/`,"").replace(/^\.\//,"");const o=a.lastIndexOf(".");a=a.substring(0,o);const i=a.split("/"),s=i.shift(),f=i.join(".");s&&(f?(u(e,s,e[s]||{}),u(e[s],f,r)):u(e,s,r||{}))}),e}export{O as g};
