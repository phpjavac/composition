import{q as f,s as p,x as v,u as d,r as m}from"./app.069b597e.js";import{a as h,n as c,b as y,d as w}from"./configurable.380cbc48.js";var S=(r,n,t)=>new Promise((s,a)=>{var o=e=>{try{i(t.next(e))}catch(u){a(u)}},l=e=>{try{i(t.throw(e))}catch(u){a(u)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,l);i((t=t.apply(r,n)).next())});function P(r){let n;function t(){return n||(n=r()),n}return t.reset=()=>S(this,null,function*(){const s=n;n=void 0,s&&(yield s)}),t}function _(r){return f()?(p(r),!0):!1}function q(...r){let n,t,s,a;if(h(r[0])?([t,s,a]=r,n=y):[n,t,s,a]=r,!n)return c;let o=c;const l=v(()=>d(n),e=>{o(),e&&(e.addEventListener(t,s,a),o=()=>{e.removeEventListener(t,s,a),o=c})},{immediate:!0,flush:"post"}),i=()=>{l(),o()};return _(i),i}var E=(r,n,t)=>new Promise((s,a)=>{var o=e=>{try{i(t.next(e))}catch(u){a(u)}},l=e=>{try{i(t.throw(e))}catch(u){a(u)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,l);i((t=t.apply(r,n)).next())});function W(r,n={}){const{controls:t=!1,navigator:s=w}=n,a=Boolean(s&&"permissions"in s);let o;const l=typeof r=="string"?{name:r}:r,i=m(),e=()=>{o&&(i.value=o.state)},u=P(()=>E(this,null,function*(){if(!!a){if(!o)try{o=yield s.permissions.query(l),q(o,"change",e),e()}catch{i.value="prompt"}return o}}));return u(),t?{state:i,isSupported:a,query:u}:i}export{W as a,_ as t,q as u};