!function(l){function e(e){for(var t,o,n=e[0],i=e[1],a=e[2],r=0,s=[];r<n.length;r++)o=n[r],h[o]&&s.push(h[o][0]),h[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(l[t]=i[t]);for(p&&p(e);s.length;)s.shift()();return d.push.apply(d,a||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var o=d[t],n=!0,i=1;i<o.length;i++){var a=o[i];0!==h[a]&&(n=!1)}n&&(d.splice(t--,1),e=r(r.s=o[0]))}return e}var o={},h={0:0},d=[];function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=l,r.c=o,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var p=n;d.push([134,1]),c()}({133:function(e,t,o){"use strict";(function(i){o.d(t,"a",function(){return e});var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function e(t){if("serviceWorker"in navigator){if(new URL(i.env.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var o,n,e="".concat(i.env.PUBLIC_URL,"/service-worker.js");a?(o=e,n=t,fetch(o).then(function(e){var t=e.headers.get("content-type");404===e.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):r(o,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")}),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):r(e,t)})}}function r(e,o){navigator.serviceWorker.register(e).then(function(t){t.onupdatefound=function(){var e=t.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),o&&o.onUpdate&&o.onUpdate(t)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(t)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}}).call(this,o(131))},134:function(e,t,o){o(135),e.exports=o(344)},340:function(e,t,o){var n=o(341);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(342)(n,i);n.locals&&(e.exports=n.locals)},341:function(e,t,o){},344:function(e,t,o){"use strict";o.r(t);var v,b,M,n,g,i,x,P=o(1),l=o(132),L=(o(338),function(e,t,o){var n=new l.a;if(e){var i=n.addFolder("camera position");i.add(e.position,"x"),i.add(e.position,"y"),i.add(e.position,"z"),n.addFolder("camera projection").add(e,"fov")}if(o){var a=n.addFolder("light position");a.add(o.position,"x"),a.add(o.position,"y"),a.add(o.position,"z")}if(t){var r=n.addFolder("cube position");r.add(t.position,"x"),r.add(t.position,"y"),r.add(t.position,"z");var s=n.addFolder("cube rotation");s.add(t.rotation,"x"),s.add(t.rotation,"y"),s.add(t.rotation,"z"),s.open()}}),E=function(e){n=new P.AmbientLight(4210752),g=new P.DirectionalLight(16777215,5),i=new P.DirectionalLight(16777215,5),g.position.set(10,10,10),i.position.set(-10,-10,-10),e.add(n,g,i)};var S,q,X,Y,B,Z,j,z,C,I,a=o(133),G=(o(340),(q=P).TransformControls=function(e,n){void 0===n&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),n=document),q.Object3D.call(this),this.visible=!1;var i=new q.TransformControlsGizmo;this.add(i);var l=new q.TransformControlsPlane;this.add(l);var a=this;O("camera",e),O("object",void 0),O("enabled",!0),O("axis",null),O("mode","translate"),O("translationSnap",null),O("rotationSnap",null),O("space","world"),O("size",1),O("dragging",!1),O("showX",!0),O("showY",!0),O("showZ",!0);var c={type:"change"},r={type:"mouseDown"},t={type:"mouseUp",mode:a.mode},h={type:"objectChange"},d=new q.Raycaster,p=new q.Vector3,u=new q.Vector3,w=new q.Quaternion,m={X:new q.Vector3(1,0,0),Y:new q.Vector3(0,1,0),Z:new q.Vector3(0,0,1)},f=new q.Vector3,y=new q.Vector3,v=new q.Vector3,b=new q.Vector3,M=new q.Vector3,g=new q.Vector3,x=0,o=new q.Vector3,s=new q.Quaternion,P=new q.Vector3,L=new q.Vector3,E=new q.Quaternion,S=new q.Quaternion,X=new q.Vector3,Y=new q.Vector3,B=new q.Quaternion,Z=new q.Vector3,j=new q.Vector3,z=new q.Quaternion,C=new q.Quaternion,I=new q.Vector3,G=new q.Vector3,Q=new q.Vector3,k=new q.Quaternion,T=new q.Vector3;function O(t,e){var o=e;Object.defineProperty(a,t,{get:function(){return void 0!==o?o:e},set:function(e){o!==e&&(o=e,l[t]=e,i[t]=e,a.dispatchEvent({type:t+"-changed",value:e}),a.dispatchEvent(c))}}),a[t]=e,l[t]=e,i[t]=e}function A(e){if(document.pointerLockElement)return{x:0,y:0,button:e.button};var t=e.changedTouches?e.changedTouches[0]:e,o=n.getBoundingClientRect();return{x:(t.clientX-o.left)/o.width*2-1,y:-(t.clientY-o.top)/o.height*2+1,button:e.button}}function V(e){a.enabled&&a.pointerHover(A(e))}function W(e){a.enabled&&(document.addEventListener("mousemove",F,!1),a.pointerHover(A(e)),a.pointerDown(A(e)))}function F(e){a.enabled&&a.pointerMove(A(e))}function _(e){a.enabled&&(document.removeEventListener("mousemove",F,!1),a.pointerUp(A(e)))}O("worldPosition",j),O("worldPositionStart",Y),O("worldQuaternion",z),O("worldQuaternionStart",B),O("cameraPosition",o),O("cameraQuaternion",s),O("pointStart",f),O("pointEnd",y),O("rotationAxis",b),O("rotationAngle",x),O("eye",G),n.addEventListener("mousedown",W,!1),n.addEventListener("touchstart",W,!1),n.addEventListener("mousemove",V,!1),n.addEventListener("touchmove",V,!1),n.addEventListener("touchmove",F,!1),document.addEventListener("mouseup",_,!1),n.addEventListener("touchend",_,!1),n.addEventListener("touchcancel",_,!1),n.addEventListener("touchleave",_,!1),this.dispose=function(){n.removeEventListener("mousedown",W),n.removeEventListener("touchstart",W),n.removeEventListener("mousemove",V),document.removeEventListener("mousemove",F),n.removeEventListener("touchmove",V),n.removeEventListener("touchmove",F),document.removeEventListener("mouseup",_),n.removeEventListener("touchend",_),n.removeEventListener("touchcancel",_),n.removeEventListener("touchleave",_),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})},this.attach=function(e){return this.object=e,this.visible=!0,this},this.detach=function(){return this.object=void 0,this.visible=!1,this.axis=null,this},this.updateMatrixWorld=function(){void 0!==this.object&&(this.object.updateMatrixWorld(),this.object.parent.matrixWorld.decompose(L,E,X),this.object.matrixWorld.decompose(j,z,I),S.copy(E).inverse(),C.copy(z).inverse()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(o,s,P),G.copy(o).sub(j).normalize(),q.Object3D.prototype.updateMatrixWorld.call(this)},this.pointerHover=function(e){if(void 0!==this.object&&!0!==this.dragging&&(void 0===e.button||0===e.button)){d.setFromCamera(e,this.camera);var t=d.intersectObjects(i.picker[this.mode].children,!0)[0]||!1;this.axis=t?t.object.name:null}},this.pointerDown=function(e){if(!(void 0===this.object||!0===this.dragging||void 0!==e.button&&0!==e.button||0!==e.button&&void 0!==e.button||null===this.axis)){d.setFromCamera(e,this.camera);var t=d.intersectObjects([l],!0)[0]||!1;if(t){var o=this.space;if("scale"===this.mode?o="local":"E"!==this.axis&&"XYZE"!==this.axis&&"XYZ"!==this.axis||(o="world"),"local"===o&&"rotate"===this.mode){var n=this.rotationSnap;"X"===this.axis&&n&&(this.object.rotation.x=Math.round(this.object.rotation.x/n)*n),"Y"===this.axis&&n&&(this.object.rotation.y=Math.round(this.object.rotation.y/n)*n),"Z"===this.axis&&n&&(this.object.rotation.z=Math.round(this.object.rotation.z/n)*n)}this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),Q.copy(this.object.position),k.copy(this.object.quaternion),T.copy(this.object.scale),this.object.matrixWorld.decompose(Y,B,Z),f.copy(t.point).sub(Y)}this.dragging=!0,r.mode=this.mode,this.dispatchEvent(r)}},this.pointerMove=function(e){var t=this.axis,o=this.mode,n=this.object,i=this.space;if("scale"===o?i="local":"E"!==t&&"XYZE"!==t&&"XYZ"!==t||(i="world"),void 0!==n&&null!==t&&!1!==this.dragging&&(void 0===e.button||0===e.button)){d.setFromCamera(e,this.camera);var a=d.intersectObjects([l],!0)[0]||!1;if(!1!==a){if(y.copy(a.point).sub(Y),"translate"===o)v.copy(y).sub(f),"local"===i&&"XYZ"!==t&&v.applyQuaternion(C),-1===t.indexOf("X")&&(v.x=0),-1===t.indexOf("Y")&&(v.y=0),-1===t.indexOf("Z")&&(v.z=0),"local"===i&&"XYZ"!==t?v.applyQuaternion(k).divide(X):v.applyQuaternion(S).divide(X),n.position.copy(v).add(Q),this.translationSnap&&("local"===i&&(n.position.applyQuaternion(w.copy(k).inverse()),-1!==t.search("X")&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.position.applyQuaternion(k)),"world"===i&&(n.parent&&n.position.add(p.setFromMatrixPosition(n.parent.matrixWorld)),-1!==t.search("X")&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.parent&&n.position.sub(p.setFromMatrixPosition(n.parent.matrixWorld))));else if("scale"===o){if(-1!==t.search("XYZ")){var r=y.length()/f.length();y.dot(f)<0&&(r*=-1),u.set(r,r,r)}else p.copy(f),u.copy(y),p.applyQuaternion(C),u.applyQuaternion(C),u.divide(p),-1===t.search("X")&&(u.x=1),-1===t.search("Y")&&(u.y=1),-1===t.search("Z")&&(u.z=1);n.scale.copy(T).multiply(u)}else if("rotate"===o){v.copy(y).sub(f);var s=20/j.distanceTo(p.setFromMatrixPosition(this.camera.matrixWorld));"E"===t?(b.copy(G),x=y.angleTo(f),M.copy(f).normalize(),g.copy(y).normalize(),x*=g.cross(M).dot(G)<0?1:-1):"XYZE"===t?(b.copy(v).cross(G).normalize(),x=v.dot(p.copy(b).cross(this.eye))*s):"X"!==t&&"Y"!==t&&"Z"!==t||(b.copy(m[t]),p.copy(m[t]),"local"===i&&p.applyQuaternion(z),x=v.dot(p.cross(G).normalize())*s),this.rotationSnap&&(x=Math.round(x/this.rotationSnap)*this.rotationSnap),this.rotationAngle=x,"local"===i&&"E"!==t&&"XYZE"!==t?(n.quaternion.copy(k),n.quaternion.multiply(w.setFromAxisAngle(b,x)).normalize()):(b.applyQuaternion(S),n.quaternion.copy(w.setFromAxisAngle(b,x)),n.quaternion.multiply(k).normalize())}this.dispatchEvent(c),this.dispatchEvent(h)}}},this.pointerUp=function(e){void 0!==e.button&&0!==e.button||(this.dragging&&null!==this.axis&&(t.mode=this.mode,this.dispatchEvent(t)),this.dragging=!1,void 0===e.button&&(this.axis=null))},this.getMode=function(){return a.mode},this.setMode=function(e){a.mode=e},this.setTranslationSnap=function(e){a.translationSnap=e},this.setRotationSnap=function(e){a.rotationSnap=e},this.setSize=function(e){a.size=e},this.setSpace=function(e){a.space=e},this.update=function(){console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}},q.TransformControls.prototype=Object.assign(Object.create(q.Object3D.prototype),{constructor:q.TransformControls,isTransformControls:!0}),q.TransformControlsGizmo=function(){q.Object3D.call(this),this.type="TransformControlsGizmo";var e=new q.MeshBasicMaterial({depthTest:!1,depthWrite:!1,transparent:!0,side:q.DoubleSide,fog:!1}),t=new q.LineBasicMaterial({depthTest:!1,depthWrite:!1,transparent:!0,linewidth:1,fog:!1}),o=e.clone();o.opacity=.15;var n=e.clone();n.opacity=.33;var i=e.clone();i.color.set(16711680);var a=e.clone();a.color.set(65280);var r=e.clone();r.color.set(255);var s=e.clone();s.opacity=.25;var l=s.clone();l.color.set(16776960);var c=s.clone();c.color.set(65535);var h=s.clone();h.color.set(16711935),e.clone().color.set(16776960);var d=t.clone();d.color.set(16711680);var p=t.clone();p.color.set(65280);var u=t.clone();u.color.set(255);var w=t.clone();w.color.set(65535);var m=t.clone();m.color.set(16711935);var f=t.clone();f.color.set(16776960);var y=t.clone();y.color.set(7895160);var v=f.clone();v.opacity=.25;var b=new q.CylinderBufferGeometry(0,.05,.2,12,1,!1),M=new q.BoxBufferGeometry(.125,.125,.125),g=new q.BufferGeometry;g.setAttribute("position",new q.Float32BufferAttribute([0,0,0,1,0,0],3));var x,P=function(e,t){for(var o=new q.BufferGeometry,n=[],i=0;i<=64*t;++i)n.push(0,Math.cos(i/32*Math.PI)*e,Math.sin(i/32*Math.PI)*e);return o.setAttribute("position",new q.Float32BufferAttribute(n,3)),o},L={X:[[new q.Mesh(b,i),[1,0,0],[0,0,-Math.PI/2],null,"fwd"],[new q.Mesh(b,i),[1,0,0],[0,0,Math.PI/2],null,"bwd"],[new q.Line(g,d)]],Y:[[new q.Mesh(b,a),[0,1,0],null,null,"fwd"],[new q.Mesh(b,a),[0,1,0],[Math.PI,0,0],null,"bwd"],[new q.Line(g,p),null,[0,0,Math.PI/2]]],Z:[[new q.Mesh(b,r),[0,0,1],[Math.PI/2,0,0],null,"fwd"],[new q.Mesh(b,r),[0,0,1],[-Math.PI/2,0,0],null,"bwd"],[new q.Line(g,u),null,[0,-Math.PI/2,0]]],XYZ:[[new q.Mesh(new q.OctahedronBufferGeometry(.1,0),s.clone()),[0,0,0],[0,0,0]]],XY:[[new q.Mesh(new q.PlaneBufferGeometry(.295,.295),l.clone()),[.15,.15,0]],[new q.Line(g,f),[.18,.3,0],null,[.125,1,1]],[new q.Line(g,f),[.3,.18,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new q.Mesh(new q.PlaneBufferGeometry(.295,.295),c.clone()),[0,.15,.15],[0,Math.PI/2,0]],[new q.Line(g,w),[0,.18,.3],[0,0,Math.PI/2],[.125,1,1]],[new q.Line(g,w),[0,.3,.18],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new q.Mesh(new q.PlaneBufferGeometry(.295,.295),h.clone()),[.15,0,.15],[-Math.PI/2,0,0]],[new q.Line(g,m),[.18,0,.3],null,[.125,1,1]],[new q.Line(g,m),[.3,0,.18],[0,-Math.PI/2,0],[.125,1,1]]]},E={X:[[new q.Mesh(new q.CylinderBufferGeometry(.2,0,1,4,1,!1),o),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new q.Mesh(new q.CylinderBufferGeometry(.2,0,1,4,1,!1),o),[0,.6,0]]],Z:[[new q.Mesh(new q.CylinderBufferGeometry(.2,0,1,4,1,!1),o),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new q.Mesh(new q.OctahedronBufferGeometry(.2,0),o)]],XY:[[new q.Mesh(new q.PlaneBufferGeometry(.4,.4),o),[.2,.2,0]]],YZ:[[new q.Mesh(new q.PlaneBufferGeometry(.4,.4),o),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new q.Mesh(new q.PlaneBufferGeometry(.4,.4),o),[.2,0,.2],[-Math.PI/2,0,0]]]},S={START:[[new q.Mesh(new q.OctahedronBufferGeometry(.01,2),n),null,null,null,"helper"]],END:[[new q.Mesh(new q.OctahedronBufferGeometry(.01,2),n),null,null,null,"helper"]],DELTA:[[new q.Line((x=new q.BufferGeometry,x.setAttribute("position",new q.Float32BufferAttribute([0,0,0,1,1,1],3)),x),n),null,null,null,"helper"]],X:[[new q.Line(g,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new q.Line(g,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new q.Line(g,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},X={X:[[new q.Line(P(1,.5),d)],[new q.Mesh(new q.OctahedronBufferGeometry(.04,0),i),[0,0,.99],null,[1,3,1]]],Y:[[new q.Line(P(1,.5),p),null,[0,0,-Math.PI/2]],[new q.Mesh(new q.OctahedronBufferGeometry(.04,0),a),[0,0,.99],null,[3,1,1]]],Z:[[new q.Line(P(1,.5),u),null,[0,Math.PI/2,0]],[new q.Mesh(new q.OctahedronBufferGeometry(.04,0),r),[.99,0,0],null,[1,3,1]]],E:[[new q.Line(P(1.25,1),v),null,[0,Math.PI/2,0]],[new q.Mesh(new q.CylinderBufferGeometry(.03,0,.15,4,1,!1),v),[1.17,0,0],[0,0,-Math.PI/2],[1,1,.001]],[new q.Mesh(new q.CylinderBufferGeometry(.03,0,.15,4,1,!1),v),[-1.17,0,0],[0,0,Math.PI/2],[1,1,.001]],[new q.Mesh(new q.CylinderBufferGeometry(.03,0,.15,4,1,!1),v),[0,-1.17,0],[Math.PI,0,0],[1,1,.001]],[new q.Mesh(new q.CylinderBufferGeometry(.03,0,.15,4,1,!1),v),[0,1.17,0],[0,0,0],[1,1,.001]]],XYZE:[[new q.Line(P(1,1),y),null,[0,Math.PI/2,0]]]},Y={AXIS:[[new q.Line(g,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},B={X:[[new q.Mesh(new q.TorusBufferGeometry(1,.1,4,24),o),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new q.Mesh(new q.TorusBufferGeometry(1,.1,4,24),o),[0,0,0],[Math.PI/2,0,0]]],Z:[[new q.Mesh(new q.TorusBufferGeometry(1,.1,4,24),o),[0,0,0],[0,0,-Math.PI/2]]],E:[[new q.Mesh(new q.TorusBufferGeometry(1.25,.1,2,24),o)]],XYZE:[[new q.Mesh(new q.SphereBufferGeometry(.7,10,8),o)]]},Z={X:[[new q.Mesh(M,i),[.8,0,0],[0,0,-Math.PI/2]],[new q.Line(g,d),null,null,[.8,1,1]]],Y:[[new q.Mesh(M,a),[0,.8,0]],[new q.Line(g,p),null,[0,0,Math.PI/2],[.8,1,1]]],Z:[[new q.Mesh(M,r),[0,0,.8],[Math.PI/2,0,0]],[new q.Line(g,u),null,[0,-Math.PI/2,0],[.8,1,1]]],XY:[[new q.Mesh(M,l),[.85,.85,0],null,[2,2,.2]],[new q.Line(g,f),[.855,.98,0],null,[.125,1,1]],[new q.Line(g,f),[.98,.855,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new q.Mesh(M,c),[0,.85,.85],null,[.2,2,2]],[new q.Line(g,w),[0,.855,.98],[0,0,Math.PI/2],[.125,1,1]],[new q.Line(g,w),[0,.98,.855],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new q.Mesh(M,h),[.85,0,.85],null,[2,.2,2]],[new q.Line(g,m),[.855,0,.98],null,[.125,1,1]],[new q.Line(g,m),[.98,0,.855],[0,-Math.PI/2,0],[.125,1,1]]],XYZX:[[new q.Mesh(new q.BoxBufferGeometry(.125,.125,.125),s.clone()),[1.1,0,0]]],XYZY:[[new q.Mesh(new q.BoxBufferGeometry(.125,.125,.125),s.clone()),[0,1.1,0]]],XYZZ:[[new q.Mesh(new q.BoxBufferGeometry(.125,.125,.125),s.clone()),[0,0,1.1]]]},j={X:[[new q.Mesh(new q.CylinderBufferGeometry(.2,0,.8,4,1,!1),o),[.5,0,0],[0,0,-Math.PI/2]]],Y:[[new q.Mesh(new q.CylinderBufferGeometry(.2,0,.8,4,1,!1),o),[0,.5,0]]],Z:[[new q.Mesh(new q.CylinderBufferGeometry(.2,0,.8,4,1,!1),o),[0,0,.5],[Math.PI/2,0,0]]],XY:[[new q.Mesh(M,o),[.85,.85,0],null,[3,3,.2]]],YZ:[[new q.Mesh(M,o),[0,.85,.85],null,[.2,3,3]]],XZ:[[new q.Mesh(M,o),[.85,0,.85],null,[3,.2,3]]],XYZX:[[new q.Mesh(new q.BoxBufferGeometry(.2,.2,.2),o),[1.1,0,0]]],XYZY:[[new q.Mesh(new q.BoxBufferGeometry(.2,.2,.2),o),[0,1.1,0]]],XYZZ:[[new q.Mesh(new q.BoxBufferGeometry(.2,.2,.2),o),[0,0,1.1]]]},z={X:[[new q.Line(g,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new q.Line(g,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new q.Line(g,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C=function(e){var t=new q.Object3D;for(var o in e)for(var n=e[o].length;n--;){var i=e[o][n][0].clone(),a=e[o][n][1],r=e[o][n][2],s=e[o][n][3],l=e[o][n][4];i.name=o,i.tag=l,a&&i.position.set(a[0],a[1],a[2]),r&&i.rotation.set(r[0],r[1],r[2]),s&&i.scale.set(s[0],s[1],s[2]),i.updateMatrix();var c=i.geometry.clone();c.applyMatrix(i.matrix),i.geometry=c,i.renderOrder=1/0,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),t.add(i)}return t},I=new q.Vector3(0,0,0),G=new q.Euler,Q=new q.Vector3(0,1,0),k=new q.Vector3(0,0,0),T=new q.Matrix4,O=new q.Quaternion,A=new q.Quaternion,V=new q.Quaternion,W=new q.Vector3(1,0,0),F=new q.Vector3(0,1,0),_=new q.Vector3(0,0,1);this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=C(L)),this.add(this.gizmo.rotate=C(X)),this.add(this.gizmo.scale=C(Z)),this.add(this.picker.translate=C(E)),this.add(this.picker.rotate=C(B)),this.add(this.picker.scale=C(j)),this.add(this.helper.translate=C(S)),this.add(this.helper.rotate=C(Y)),this.add(this.helper.scale=C(z)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1,this.updateMatrixWorld=function(){var e=this.space;"scale"===this.mode&&(e="local");var t="local"===e?this.worldQuaternion:V;this.gizmo.translate.visible="translate"===this.mode,this.gizmo.rotate.visible="rotate"===this.mode,this.gizmo.scale.visible="scale"===this.mode,this.helper.translate.visible="translate"===this.mode,this.helper.rotate.visible="rotate"===this.mode,this.helper.scale.visible="scale"===this.mode;var o=[];o=(o=(o=o.concat(this.picker[this.mode].children)).concat(this.gizmo[this.mode].children)).concat(this.helper[this.mode].children);for(var n=0;n<o.length;n++){var i=o[n];i.visible=!0,i.rotation.set(0,0,0),i.position.copy(this.worldPosition);var a=this.worldPosition.distanceTo(this.cameraPosition);i.scale.set(1,1,1).multiplyScalar(a*this.size/7),"helper"!==i.tag?(i.quaternion.copy(t),"translate"===this.mode||"scale"===this.mode?("X"!==i.name&&"XYZX"!==i.name||.99<Math.abs(Q.copy(W).applyQuaternion(t).dot(this.eye))&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"Y"!==i.name&&"XYZY"!==i.name||.99<Math.abs(Q.copy(F).applyQuaternion(t).dot(this.eye))&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"Z"!==i.name&&"XYZZ"!==i.name||.99<Math.abs(Q.copy(_).applyQuaternion(t).dot(this.eye))&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"XY"===i.name&&Math.abs(Q.copy(_).applyQuaternion(t).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"YZ"===i.name&&Math.abs(Q.copy(W).applyQuaternion(t).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"XZ"===i.name&&Math.abs(Q.copy(F).applyQuaternion(t).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),-1!==i.name.search("X")&&(Q.copy(W).applyQuaternion(t).dot(this.eye)<0?"fwd"===i.tag?i.visible=!1:i.scale.x*=-1:"bwd"===i.tag&&(i.visible=!1)),-1!==i.name.search("Y")&&(Q.copy(F).applyQuaternion(t).dot(this.eye)<0?"fwd"===i.tag?i.visible=!1:i.scale.y*=-1:"bwd"===i.tag&&(i.visible=!1)),-1!==i.name.search("Z")&&(Q.copy(_).applyQuaternion(t).dot(this.eye)<0?"fwd"===i.tag?i.visible=!1:i.scale.z*=-1:"bwd"===i.tag&&(i.visible=!1))):"rotate"===this.mode&&(A.copy(t),Q.copy(this.eye).applyQuaternion(O.copy(t).inverse()),-1!==i.name.search("E")&&i.quaternion.setFromRotationMatrix(T.lookAt(this.eye,k,F)),"X"===i.name&&(O.setFromAxisAngle(W,Math.atan2(-Q.y,Q.z)),O.multiplyQuaternions(A,O),i.quaternion.copy(O)),"Y"===i.name&&(O.setFromAxisAngle(F,Math.atan2(Q.x,Q.z)),O.multiplyQuaternions(A,O),i.quaternion.copy(O)),"Z"===i.name&&(O.setFromAxisAngle(_,Math.atan2(Q.y,Q.x)),O.multiplyQuaternions(A,O),i.quaternion.copy(O))),i.visible=i.visible&&(-1===i.name.indexOf("X")||this.showX),i.visible=i.visible&&(-1===i.name.indexOf("Y")||this.showY),i.visible=i.visible&&(-1===i.name.indexOf("Z")||this.showZ),i.visible=i.visible&&(-1===i.name.indexOf("E")||this.showX&&this.showY&&this.showZ),i.material._opacity=i.material._opacity||i.material.opacity,i.material._color=i.material._color||i.material.color.clone(),i.material.color.copy(i.material._color),i.material.opacity=i.material._opacity,this.enabled?this.axis&&(i.name===this.axis?i.material.opacity=1:this.axis.split("").some(function(e){return i.name===e})?i.material.opacity=1:i.material.opacity*=.25,i.material.color.lerp(new q.Color(1,1,1),.5)):(i.material.opacity*=.5,i.material.color.lerp(new q.Color(1,1,1),.5))):(i.visible=!1,"AXIS"===i.name?(i.position.copy(this.worldPositionStart),i.visible=!!this.axis,"X"===this.axis&&(console.log(2222),O.setFromEuler(G.set(0,0,0)),i.quaternion.copy(t).multiply(O),.9<Math.abs(Q.copy(W).applyQuaternion(t).dot(this.eye))&&(i.visible=!1)),"Y"===this.axis&&(O.setFromEuler(G.set(0,0,Math.PI/2)),i.quaternion.copy(t).multiply(O),.9<Math.abs(Q.copy(F).applyQuaternion(t).dot(this.eye))&&(i.visible=!1)),"Z"===this.axis&&(O.setFromEuler(G.set(0,Math.PI/2,0)),i.quaternion.copy(t).multiply(O),.9<Math.abs(Q.copy(_).applyQuaternion(t).dot(this.eye))&&(i.visible=!1)),"XYZE"===this.axis&&(O.setFromEuler(G.set(0,Math.PI/2,0)),Q.copy(this.rotationAxis),i.quaternion.setFromRotationMatrix(T.lookAt(k,Q,F)),i.quaternion.multiply(O),i.visible=this.dragging),"E"===this.axis&&(i.visible=!1)):"START"===i.name?(i.position.copy(this.worldPositionStart),i.visible=this.dragging):"END"===i.name?(i.position.copy(this.worldPosition),i.visible=this.dragging):"DELTA"===i.name?(i.position.copy(this.worldPositionStart),i.quaternion.copy(this.worldQuaternionStart),I.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),I.applyQuaternion(this.worldQuaternionStart.clone().inverse()),i.scale.copy(I),i.visible=this.dragging):(i.quaternion.copy(t),this.dragging?i.position.copy(this.worldPositionStart):i.position.copy(this.worldPosition),this.axis&&(i.visible=-1!==this.axis.search(i.name))))}q.Object3D.prototype.updateMatrixWorld.call(this)}},q.TransformControlsGizmo.prototype=Object.assign(Object.create(q.Object3D.prototype),{constructor:q.TransformControlsGizmo,isTransformControlsGizmo:!0}),q.TransformControlsPlane=function(){q.Mesh.call(this,new q.PlaneBufferGeometry(1e5,1e5,2,2),new q.MeshBasicMaterial({visible:!1,wireframe:!0,side:q.DoubleSide,transparent:!0,opacity:.1})),this.type="TransformControlsPlane";var t=new q.Vector3(1,0,0),o=new q.Vector3(0,1,0),n=new q.Vector3(0,0,1),i=new q.Vector3,a=new q.Vector3,r=new q.Vector3,s=new q.Matrix4,l=new q.Quaternion;this.updateMatrixWorld=function(){var e=this.space;switch(this.position.copy(this.worldPosition),"scale"===this.mode&&(e="local"),t.set(1,0,0).applyQuaternion("local"===e?this.worldQuaternion:l),o.set(0,1,0).applyQuaternion("local"===e?this.worldQuaternion:l),n.set(0,0,1).applyQuaternion("local"===e?this.worldQuaternion:l),r.copy(o),this.mode){case"translate":case"scale":switch(this.axis){case"X":r.copy(this.eye).cross(t),a.copy(t).cross(r);break;case"Y":r.copy(this.eye).cross(o),a.copy(o).cross(r);break;case"Z":r.copy(this.eye).cross(n),a.copy(n).cross(r);break;case"XY":a.copy(n);break;case"YZ":a.copy(t);break;case"XZ":r.copy(n),a.copy(o);break;case"XYZ":case"E":a.set(0,0,0)}break;case"rotate":default:a.set(0,0,0)}0===a.length()?this.quaternion.copy(this.cameraQuaternion):(s.lookAt(i.set(0,0,0),a,r),this.quaternion.setFromRotationMatrix(s)),q.Object3D.prototype.updateMatrixWorld.call(this)}},q.TransformControlsPlane.prototype=Object.assign(Object.create(q.Mesh.prototype),{constructor:q.TransformControlsPlane,isTransformControlsPlane:!0}),q),Q=o(339)(G);window.addEventListener("load",void 0);var k,T,O,A,V=0,W=!1,F="translate",_=!1;function r(e){var t=B.getBoundingClientRect(),o=e.getBoundingClientRect(),n=Math.min(o.right,t.right)-t.left,i=Math.max(0,o.left-t.left),a=Math.min(o.bottom,t.bottom)-t.top,r=Math.max(0,o.top-t.top),s=Math.min(t.width,n-i),l=Math.min(t.height,a-r),c=t.height-a;return S.setScissor(i,c,s,l),S.setViewport(i,c,s,l),s/l}function R(){if(S.setScissorTest(!0),W)switch(F){case"translate":v.position.x=O.position.x,v.position.y=O.position.y,v.position.z=O.position.z;break;case"rotate":v.rotation.x=O.rotation.x,v.rotation.y=O.rotation.y,v.rotation.z=O.rotation.z}var e=r(Z);v.aspect=e,v.updateProjectionMatrix(),z.update(),z.visible=!1,_?X.remove(C):(S.clear(),X.add(C)),X.background.set(0),S.render(X,v);var t=r(j);b.aspect=t,b.updateProjectionMatrix(),z.visible=!0,X.background.set(0),S.clear(),S.render(Y,b)}window.addEventListener("resize",function(){v.aspect=window.innerWidth/window.innerHeight,b.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),b.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)}),function(){X=new G.Scene,Y=new G.Scene,X.background=new G.Color(0),(v=new P.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,1e3)).position.set(30,2,-30),E(X),function(){(S=new P.WebGLRenderer({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power",failIfMajorPerformanceCaveat:!0,depth:!1})).autoClearColor=!1,S.autoClear=!1,S.setSize(window.innerWidth,window.innerHeight),S.setPixelRatio(window.devicePixelRatio),S.toneMapping=P.ReinhardToneMapping,S.gammaFactor=2.2,S.gammaOutput=!0,S.physicallyCorrectLights=!0,document.body.appendChild(S.domElement);var e=document.createElement("div");e.classList.add("split");var t=document.createElement("div");t.classList.add("view1");var o=document.createElement("div");o.classList.add("view2"),e.appendChild(t),e.appendChild(o),S.domElement.setAttribute("id","canvas"),document.body.appendChild(S.domElement),document.body.appendChild(e)}(),E(Y),B=document.querySelector("#canvas"),Z=document.querySelector(".view1"),j=document.querySelector(".view2"),z=new G.CameraHelper(v),(b=new P.PerspectiveCamera(60,2,.1,700)).position.set(45,12,-50),b.lookAt(0,2,0),A=new G.Object3D,Y.add(A),(O=new G.Mesh(new G.SphereBufferGeometry(.5,32,32),new G.MeshBasicMaterial({color:14540253}))).position.x=v.position.x,O.position.y=v.position.y,O.position.z=v.position.z,v.rotation.x=0,v.rotation.y=21.3,v.rotation.z=0,O.rotation.x=v.rotation.x,O.rotation.y=v.rotation.y,O.rotation.z=v.rotation.z,A.add(b);var t=((M=new Q(b,j)).target.set(0,5,0),M.update(),M);t.addEventListener("change",R),X.add(z),Y.add(z),A.add(O),new G.AxesHelper(5);var e=document.querySelector(".view2");(I=new G.TransformControls(b,e)).addEventListener("change",R),I.addEventListener("dragging-changed",function(e){W=e.value,t.enabled=!e.value});try{I.attach(O)}catch(e){console.log(e)}Y.add(I),I.setMode("translate");for(var o=new G.BufferGeometry,n=[],i=0;i<1e5;i++)n.push(G.Math.randFloatSpread(3e3)),n.push(G.Math.randFloatSpread(3e3)),n.push(G.Math.randFloatSpread(3e3));function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Math.random(),t=new G.MeshPhongMaterial({side:G.DoubleSide}),o=e;return t.color.setHSL(o,1,.5),t}o.setAttribute("position",new G.Float32BufferAttribute(n,3)),C=new G.Points(o,new G.PointsMaterial({color:8947848}));var s=new G.SphereBufferGeometry(.085,32,16),l=0,a=function(){var a=[0];return function(){for(var e=Math.random(),t=0;t<11;t++)a[t]=new G.Mesh(s,r(e))}(),function(){for(var e=new G.Group,t=l/200,o=0;o<a.length;o++){var n=a[o],i=Math.abs(.5-t)/.5;n.position.x=2*i-1-o/8/2,n.position.y=1,n.position.z=0,o===a.length-1?n.material.opacity=1:n.material.opacity=o/25,n.material.transparent=!0,e.add(n),l+=1,l%=200}return e}()};window.addEventListener("keydown",function(e){switch(e.keyCode){case 81:I.setSpace("local"===I.space?"world":"local");break;case 17:I.setTranslationSnap(100),I.setRotationSnap(P.Math.degToRad(15));break;case 87:F="translate",I.setMode("translate");break;case 69:F="rotate",I.setMode("rotate");break;case 82:I.setMode("scale");break;case 187:case 107:I.setSize(I.size+.1);break;case 189:case 109:I.setSize(Math.max(I.size-.1,.1));break;case 88:I.showX=!I.showX;break;case 89:I.showY=!I.showY;break;case 90:I.showZ=!I.showZ;break;case 67:_=!_;break;case 32:I.enabled=!I.enabled}}),k=new Array;for(var c=0,h=0;h<20;h++)for(var d=0;d<20;d++)(T=k[c++]=a()).position.x=1*h-10,T.position.z=1*d-5,Y.add(T);for(var p=0;p<20;p++)for(var u=0;u<20;u++)(T=k[c++]=a()).position.x=1*p-10,T.position.z=1*u-5,X.add(T);for(var w=0,m=k.length;m--;){T=k[w++];for(var f=0;f<T.children.length;f++)T.children[f].position.y=Math.sin(m+V+Math.sin(f/4*.13)*Math.PI)}var y=z.__proto__.__proto__.__proto__.__proto__;L(v,x,g,y),S.setAnimationLoop(function(){!function(){for(var e=0,t=k.length;t--;){T=k[e++];for(var o=0;o<T.children.length;o++)T.children[o].position.y=Math.sin(t+V+Math.sin(o/4*.13)*Math.PI)}v.position.x-=Math.pow(Math.sin(2*Math.PI),2),b.matrix.lookAt(b.position,5,0),b.far=v.far+2e3,V+=.05}(),R()})}(),a.a()}});