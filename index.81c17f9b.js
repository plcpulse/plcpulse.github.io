var e={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},n={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(e,n,t){return Math.min(Math.max(e,n),t)}function i(e,n){return e.indexOf(n)>-1}function o(e,n){return e.apply(null,n)}var u={arr:function(e){return Array.isArray(e)},obj:function(e){return i(Object.prototype.toString.call(e),"Object")},pth:function(e){return u.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||u.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return u.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return u.hex(e)||u.rgb(e)||u.hsl(e)},key:function(t){return!e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map((function(e){return parseFloat(e)})):[]}function s(e,n){var t=c(e),i=a(u.und(t[0])?1:t[0],.1,100),o=a(u.und(t[1])?100:t[1],.1,100),s=a(u.und(t[2])?10:t[2],.1,100),l=a(u.und(t[3])?0:t[3],.1,100),f=Math.sqrt(o/i),d=s/(2*Math.sqrt(o*i)),p=d<1?f*Math.sqrt(1-d*d):0,g=1,v=d<1?(d*f-l)/p:-l+f;function h(e){var t=n?n*e/1e3:e;return t=d<1?Math.exp(-t*d*f)*(g*Math.cos(p*t)+v*Math.sin(p*t)):(g+v*t)*Math.exp(-t*f),0===e||1===e?e:1-t}return n?h:function(){var n=r.springs[e];if(n)return n;for(var t=1/6,a=0,i=0;;)if(1===h(a+=t)){if(++i>=16)break}else i=0;var o=a*t*1e3;return r.springs[e]=o,o}}function l(e){return void 0===e&&(e=10),function(n){return Math.ceil(a(n,1e-6,1)*e)*(1/e)}}var f,d,p=function(){var e=11,n=1/(e-1);function t(e,n){return 1-3*n+3*e}function r(e,n){return 3*n-6*e}function a(e){return 3*e}function i(e,n,i){return((t(n,i)*e+r(n,i))*e+a(n))*e}function o(e,n,i){return 3*t(n,i)*e*e+2*r(n,i)*e+a(n)}return function(t,r,a,u){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(e);if(t!==r||a!==u)for(var s=0;s<e;++s)c[s]=i(s*n,t,a);return function(e){return t===r&&a===u||0===e||1===e?e:i(l(e),r,u)}}function l(r){for(var u=0,s=1,l=e-1;s!==l&&c[s]<=r;++s)u+=n;--s;var f=u+(r-c[s])/(c[s+1]-c[s])*n,d=o(f,t,a);return d>=.001?function(e,n,t,r){for(var a=0;a<4;++a){var u=o(n,t,r);if(0===u)return n;n-=(i(n,t,r)-e)/u}return n}(r,f,t,a):0===d?f:function(e,n,t,r,a){var o,u,c=0;do{(o=i(u=n+(t-n)/2,r,a)-e)>0?t=u:n=u}while(Math.abs(o)>1e-7&&++c<10);return u}(r,u,u+n,t,a)}}}(),g=(f={linear:function(){return function(e){return e}}},d={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,t=4;e<((n=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var t=a(e,1,10),r=a(n,.1,2);return function(e){return 0===e||1===e?e:-t*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,n){d[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(d).forEach((function(e){var n=d[e];f["easeIn"+e]=n,f["easeOut"+e]=function(e,t){return function(r){return 1-n(e,t)(1-r)}},f["easeInOut"+e]=function(e,t){return function(r){return r<.5?n(e,t)(2*r)/2:1-n(e,t)(-2*r+2)/2}},f["easeOutIn"+e]=function(e,t){return function(r){return r<.5?(1-n(e,t)(1-2*r))/2:(n(e,t)(2*r-1)+1)/2}}})),f);function v(e,n){if(u.fnc(e))return e;var t=e.split("(")[0],r=g[t],a=c(e);switch(t){case"spring":return s(e,n);case"cubicBezier":return o(p,a);case"steps":return o(l,a);default:return o(r,a)}}function h(e){try{return document.querySelectorAll(e)}catch(e){return}}function m(e,n){for(var t=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<t;i++)if(i in e){var o=e[i];n.call(r,o,i,e)&&a.push(o)}return a}function y(e){return e.reduce((function(e,n){return e.concat(u.arr(n)?y(n):n)}),[])}function b(e){return u.arr(e)?e:(u.str(e)&&(e=h(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function M(e,n){return e.some((function(e){return e===n}))}function x(e){var n={};for(var t in e)n[t]=e[t];return n}function w(e,n){var t=x(e);for(var r in e)t[r]=n.hasOwnProperty(r)?n[r]:e[r];return t}function C(e,n){var t=x(e);for(var r in n)t[r]=u.und(e[r])?n[r]:e[r];return t}function O(e){return u.rgb(e)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=e))?"rgba("+t[1]+",1)":n:u.hex(e)?function(e){var n=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,t,r){return n+n+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(e):u.hsl(e)?function(e){var n,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,c=a[4]||1;function s(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(n-e)*t:t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}if(0==o)n=t=r=u;else{var l=u<.5?u*(1+o):u+o-u*o,f=2*u-l;n=s(f,l,i+1/3),t=s(f,l,i),r=s(f,l,i-1/3)}return"rgba("+255*n+","+255*t+","+255*r+","+c+")"}(e):void 0;var n,t}function I(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function k(e,n){return u.fnc(e)?e(n.target,n.id,n.total):e}function S(e,n){return e.getAttribute(n)}function P(e,n,t){if(M([t,"deg","rad","turn"],I(n)))return n;var a=r.CSS[n+t];if(!u.und(a))return a;var i=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+t;var c=100/i.offsetWidth;o.removeChild(i);var s=c*parseFloat(n);return r.CSS[n+t]=s,s}function D(e,n,t){if(n in e.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(r)||"0";return t?P(e,a,t):a}}function T(e,n){return u.dom(e)&&!u.inp(e)&&(!u.nil(S(e,n))||u.svg(e)&&e[n])?"attribute":u.dom(e)&&M(t,n)?"transform":u.dom(e)&&"transform"!==n&&D(e,n)?"css":null!=e[n]?"object":void 0}function B(e){if(u.dom(e)){for(var n,t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(t);)a.set(n[1],n[2]);return a}}function q(e,n,t,r){var a=i(n,"scale")?1:0+function(e){return i(e,"translate")||"perspective"===e?"px":i(e,"rotate")||i(e,"skew")?"deg":void 0}(n),o=B(e).get(n)||a;return t&&(t.transforms.list.set(n,o),t.transforms.last=n),r?P(e,o,r):o}function A(e,n,t,r){switch(T(e,n)){case"transform":return q(e,n,r,t);case"css":return D(e,n,t);case"attribute":return S(e,n);default:return e[n]||0}}function E(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var r=I(e)||0,a=parseFloat(n),i=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function L(e,n){if(u.col(e))return O(e);if(/\s/g.test(e))return e;var t=I(e),r=t?e.substr(0,e.length-t.length):e;return n?r+n:r}function F(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function N(e){for(var n,t=e.points,r=0,a=0;a<t.numberOfItems;a++){var i=t.getItem(a);a>0&&(r+=F(n,i)),n=i}return r}function Y(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*S(e,"r")}(e);case"rect":return function(e){return 2*S(e,"width")+2*S(e,"height")}(e);case"line":return function(e){return F({x:S(e,"x1"),y:S(e,"y1")},{x:S(e,"x2"),y:S(e,"y2")})}(e);case"polyline":return N(e);case"polygon":return function(e){var n=e.points;return N(e)+F(n.getItem(n.numberOfItems-1),n.getItem(0))}(e)}}function j(e,n){var t=n||{},r=t.el||function(e){for(var n=e.parentNode;u.svg(n)&&u.svg(n.parentNode);)n=n.parentNode;return n}(e),a=r.getBoundingClientRect(),i=S(r,"viewBox"),o=a.width,c=a.height,s=t.viewBox||(i?i.split(" "):[0,0,o,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:c,vW:s[2],vH:s[3]}}function H(e,n,t){function r(t){void 0===t&&(t=0);var r=n+t>=1?n+t:0;return e.el.getPointAtLength(r)}var a=j(e.el,e.svg),i=r(),o=r(-1),u=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*c;case"y":return(i.y-a.y)*s;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function $(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=L(u.pth(e)?e.totalLength:e,n)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:u.str(e)||n?r.split(t):[]}}function V(e){return m(e?y(u.arr(e)?e.map(b):b(e)):[],(function(e,n,t){return t.indexOf(e)===n}))}function Q(e){var n=V(e);return n.map((function(e,t){return{target:e,id:t,total:n.length,transforms:{list:B(e)}}}))}function W(e,n){var t=x(n);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),u.arr(e)){var r=e.length;2===r&&!u.obj(e[0])?e={value:e}:u.fnc(n.duration)||(t.duration=n.duration/r)}var a=u.arr(e)?e:[e];return a.map((function(e,t){var r=u.obj(e)&&!u.pth(e)?e:{value:e};return u.und(r.delay)&&(r.delay=t?0:n.delay),u.und(r.endDelay)&&(r.endDelay=t===a.length-1?n.endDelay:0),r})).map((function(e){return C(e,t)}))}function X(e,n){var t=[],r=n.keyframes;for(var a in r&&(n=C(function(e){for(var n=m(y(e.map((function(e){return Object.keys(e)}))),(function(e){return u.key(e)})).reduce((function(e,n){return e.indexOf(n)<0&&e.push(n),e}),[]),t={},r=function(r){var a=n[r];t[a]=e.map((function(e){var n={};for(var t in e)u.key(t)?t==a&&(n.value=e[t]):n[t]=e[t];return n}))},a=0;a<n.length;a++)r(a);return t}(r),n)),n)u.key(a)&&t.push({name:a,tweens:W(n[a],e)});return t}function Z(e,n){var t;return e.tweens.map((function(r){var a=function(e,n){var t={};for(var r in e){var a=k(e[r],n);u.arr(a)&&1===(a=a.map((function(e){return k(e,n)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,n),i=a.value,o=u.arr(i)?i[1]:i,c=I(o),s=A(n.target,e.name,c,n),l=t?t.to.original:s,f=u.arr(i)?i[0]:l,d=I(f)||I(s),p=c||d;return u.und(o)&&(o=l),a.from=$(f,p),a.to=$(E(o,f),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=v(a.easing,a.duration),a.isPath=u.pth(i),a.isPathTargetInsideSVG=a.isPath&&u.svg(n.target),a.isColor=u.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}var G={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,r,a){if(r.list.set(n,t),n===r.last||a){var i="";r.list.forEach((function(e,n){i+=n+"("+e+") "})),e.style.transform=i}}};function z(e,n){Q(e).forEach((function(e){for(var t in n){var r=k(n[t],e),a=e.target,i=I(r),o=A(a,t,i,e),u=E(L(r,i||I(o)),o),c=T(a,t);G[c](a,t,u,e.transforms,!0)}}))}function _(e,n){return m(y(e.map((function(e){return n.map((function(n){return function(e,n){var t=T(e.target,n.name);if(t){var r=Z(n,e),a=r[r.length-1];return{type:t,property:n.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,n)}))}))),(function(e){return!u.und(e)}))}function R(e,n){var t=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):n.duration,a.delay=t?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):n.delay,a.endDelay=t?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):n.endDelay,a}var J=0;var K=[],U=function(){var e;function n(t){for(var r=K.length,a=0;a<r;){var i=K[a];i.paused?(K.splice(a,1),r--):(i.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ne.suspendWhenDocumentHidden&&(ee()?e=cancelAnimationFrame(e):(K.forEach((function(e){return e._onDocumentVisibility()})),U()))})),function(){e||ee()&&ne.suspendWhenDocumentHidden||!(K.length>0)||(e=requestAnimationFrame(n))}}();function ee(){return!!document&&document.hidden}function ne(t){void 0===t&&(t={});var r,i=0,o=0,u=0,c=0,s=null;function l(e){var n=window.Promise&&new Promise((function(e){return s=e}));return e.finished=n,n}var f=function(t){var r=w(e,t),a=w(n,t),i=X(a,t),o=Q(t.targets),u=_(o,i),c=R(u,a),s=J;return J++,C(r,{id:s,children:[],animatables:o,animations:u,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(t);l(f);function d(){var e=f.direction;"alternate"!==e&&(f.direction="normal"!==e?"normal":"reverse"),f.reversed=!f.reversed,r.forEach((function(e){return e.reversed=f.reversed}))}function p(e){return f.reversed?f.duration-e:e}function g(){i=0,o=p(f.currentTime)*(1/ne.speed)}function v(e,n){n&&n.seek(e-n.timelineOffset)}function h(e){for(var n=0,t=f.animations,r=t.length;n<r;){var i=t[n],o=i.animatable,u=i.tweens,c=u.length-1,s=u[c];c&&(s=m(u,(function(n){return e<n.end}))[0]||s);for(var l=a(e-s.start-s.delay,0,s.duration)/s.duration,d=isNaN(l)?1:s.easing(l),p=s.to.strings,g=s.round,v=[],h=s.to.numbers.length,y=void 0,b=0;b<h;b++){var M=void 0,x=s.to.numbers[b],w=s.from.numbers[b]||0;M=s.isPath?H(s.value,d*x,s.isPathTargetInsideSVG):w+d*(x-w),g&&(s.isColor&&b>2||(M=Math.round(M*g)/g)),v.push(M)}var C=p.length;if(C){y=p[0];for(var O=0;O<C;O++){p[O];var I=p[O+1],k=v[O];isNaN(k)||(y+=I?k+I:k+" ")}}else y=v[0];G[i.type](o.target,i.property,y,o.transforms),i.currentValue=y,n++}}function y(e){f[e]&&!f.passThrough&&f[e](f)}function b(e){var n=f.duration,t=f.delay,g=n-f.endDelay,m=p(e);f.progress=a(m/n*100,0,100),f.reversePlayback=m<f.currentTime,r&&function(e){if(f.reversePlayback)for(var n=c;n--;)v(e,r[n]);else for(var t=0;t<c;t++)v(e,r[t])}(m),!f.began&&f.currentTime>0&&(f.began=!0,y("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,y("loopBegin")),m<=t&&0!==f.currentTime&&h(0),(m>=g&&f.currentTime!==n||!n)&&h(n),m>t&&m<g?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,y("changeBegin")),y("change"),h(m)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,y("changeComplete")),f.currentTime=a(m,0,n),f.began&&y("update"),e>=n&&(o=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(i=u,y("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&d()):(f.paused=!0,f.completed||(f.completed=!0,y("loopComplete"),y("complete"),!f.passThrough&&"Promise"in window&&(s(),l(f)))))}return f.reset=function(){var e=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===e,f.remaining=f.loop,r=f.children;for(var n=c=r.length;n--;)f.children[n].reset();(f.reversed&&!0!==f.loop||"alternate"===e&&1===f.loop)&&f.remaining++,h(f.reversed?f.duration:0)},f._onDocumentVisibility=g,f.set=function(e,n){return z(e,n),f},f.tick=function(e){u=e,i||(i=u),b((u+(o-i))*ne.speed)},f.seek=function(e){b(p(e))},f.pause=function(){f.paused=!0,g()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,K.push(f),g(),U())},f.reverse=function(){d(),f.completed=!f.reversed,g()},f.restart=function(){f.reset(),f.play()},f.remove=function(e){re(V(e),f)},f.reset(),f.autoplay&&f.play(),f}function te(e,n){for(var t=n.length;t--;)M(e,n[t].animatable.target)&&n.splice(t,1)}function re(e,n){var t=n.animations,r=n.children;te(e,t);for(var a=r.length;a--;){var i=r[a],o=i.animations;te(e,o),o.length||i.children.length||r.splice(a,1)}t.length||r.length||n.pause()}ne.version="3.2.1",ne.speed=1,ne.suspendWhenDocumentHidden=!0,ne.running=K,ne.remove=function(e){for(var n=V(e),t=K.length;t--;){re(n,K[t])}},ne.get=A,ne.set=z,ne.convertPx=P,ne.path=function(e,n){var t=u.str(e)?h(e)[0]:e,r=n||100;return function(e){return{property:e,el:t,svg:j(t),totalLength:Y(t)*(r/100)}}},ne.setDashoffset=function(e){var n=Y(e);return e.setAttribute("stroke-dasharray",n),n},ne.stagger=function(e,n){void 0===n&&(n={});var t=n.direction||"normal",r=n.easing?v(n.easing):null,a=n.grid,i=n.axis,o=n.from||0,c="first"===o,s="center"===o,l="last"===o,f=u.arr(e),d=f?parseFloat(e[0]):parseFloat(e),p=f?parseFloat(e[1]):0,g=I(f?e[1]:e)||0,h=n.start||0+(f?d:0),m=[],y=0;return function(e,n,u){if(c&&(o=0),s&&(o=(u-1)/2),l&&(o=u-1),!m.length){for(var v=0;v<u;v++){if(a){var b=s?(a[0]-1)/2:o%a[0],M=s?(a[1]-1)/2:Math.floor(o/a[0]),x=b-v%a[0],w=M-Math.floor(v/a[0]),C=Math.sqrt(x*x+w*w);"x"===i&&(C=-x),"y"===i&&(C=-w),m.push(C)}else m.push(Math.abs(o-v));y=Math.max.apply(Math,m)}r&&(m=m.map((function(e){return r(e/y)*y}))),"reverse"===t&&(m=m.map((function(e){return i?e<0?-1*e:-e:Math.abs(y-e)})))}return h+(f?(p-d)/y:d)*(Math.round(100*m[n])/100)+g}},ne.timeline=function(e){void 0===e&&(e={});var t=ne(e);return t.duration=0,t.add=function(r,a){var i=K.indexOf(t),o=t.children;function c(e){e.passThrough=!0}i>-1&&K.splice(i,1);for(var s=0;s<o.length;s++)c(o[s]);var l=C(r,w(n,e));l.targets=l.targets||e.targets;var f=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=u.und(a)?f:E(a,f),c(t),t.seek(l.timelineOffset);var d=ne(l);c(d),o.push(d);var p=R(o,e);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ne.easing=v,ne.penner=g,ne.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e},document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".slider"),n=e.querySelector(".slider .nav1 .next"),t=e.querySelector(".slider .nav1 .prev"),r=e.querySelectorAll(".slider .item");let a=0;r.forEach((e=>{const n=e.querySelector(".wrap");n.innerHTML=n.textContent.replace(/\S/g,"<span class='letter'>$&</span>")})),r.forEach((e=>{const n=e.querySelector(".wrap1");n.innerHTML=n.textContent.replace(/\S/g,"<span class='letter'>$&</span>")}));let i=!1;function o(e){const n=r[a],t=r[e];!function(e,n,t){const r=e.querySelectorAll(".img"),a=e.querySelectorAll(".content .letter"),i=n.querySelectorAll(".img"),o=n.querySelectorAll(".content .letter"),u="-=300",c=320;ne.timeline({easing:"easeInOutQuint",duration:400,complete:t}).add({targets:a,translateY:[0,"-.75em"],opacity:[1,0],easing:"easeInQuint",duration:600,delay:(e,n)=>10*(n+1)}).add({targets:r[0],translateY:-600,rotate:[0,"-15deg"],opacity:[1,0],easing:"easeInCubic"},u).add({targets:r[1],translateY:-600,rotate:[0,"15deg"],opacity:[1,0],easing:"easeInCubic"},"-="+c).add({targets:r[2],translateY:-600,rotate:[0,"-15deg"],opacity:[1,0],easing:"easeInCubic"},"-="+c).add({targets:r[3],translateY:-600,rotate:[0,"15deg"],opacity:[1,0],easing:"easeInCubic"},"-="+c).add({targets:e,opacity:0,duration:10,easing:"easeInCubic"}).add({targets:n,opacity:1,duration:10},u).add({targets:i[0],translateY:[600,0],rotate:["15deg",0],opacity:[0,1],easing:"easeOutCubic"},u).add({targets:i[1],translateY:[600,0],rotate:["-15deg",0],opacity:[0,1],easing:"easeOutCubic"},"-="+c).add({targets:i[2],translateY:[600,0],rotate:["15deg",0],opacity:[0,1],easing:"easeOutCubic"},"-="+c).add({targets:i[3],translateY:[600,0],rotate:["-15deg",0],opacity:[0,1],easing:"easeOutCubic"},"-="+c).add({targets:o,translateY:[".75em",0],opacity:[0,1],easing:"easeOutQuint",duration:600,delay:(e,n)=>10*(n+1)},u)}(n,t,(function(){n.classList.remove("is-active"),t.classList.add("is-active"),a=e,i=!1}))}n.onclick=function(){if(i)return;i=!0,o(a===r.length-1?0:a+1)},t.onclick=function(){if(i)return;i=!0,o(0===a?r.length-1:a-1)}}));
//# sourceMappingURL=index.81c17f9b.js.map
