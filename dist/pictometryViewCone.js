(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{433:function(t,e,s){"use strict";s.r(e);var o={name:"PictometryViewCone",props:["latlng","rotationAngle","hFov"],render(t){},computed:{ipa(){return this.$store.state.pictometry.ipa},zoom(){return this.$store.state.pictometry.zoom},radius(){return{17:75,18:50,19:25,20:15,21:10,22:10,23:10,24:10}[this.zoom]}},mounted(){this.getViewConeLatLon()},beforeDestroy(){this.ipa.removeShapes(this.$store.state.pictometry.shapeIds)},watch:{radius(t){this.getViewConeLatLon()},rotationAngle(){this.ipa.removeShapes(this.$store.state.pictometry.shapeIds),this.getViewConeLatLon()},latlng(){this.ipa.removeShapes(this.$store.state.pictometry.shapeIds),this.getViewConeLatLon()}},methods:{getViewConeLatLon(){const t=this.latlng[0],e=this.latlng[1],s=6378137,o=this.radius,a=this.rotationAngle,i=180*parseFloat(this.hFov)/Math.PI,h=Math.cos((a+i/2)*Math.PI/180)*o,r=Math.sin((a+i/2)*Math.PI/180)*o,n=Math.cos((a-i/2)*Math.PI/180)*o,p=Math.sin((a-i/2)*Math.PI/180)*o,l=h/s,c=r/(s*Math.cos(Math.PI*t/180)),d=n/s,u=p/(s*Math.cos(Math.PI*t/180)),M=[{y:t,x:e,z:0},{y:t+180*l/Math.PI,x:e+180*c/Math.PI,z:0},{y:t+180*d/Math.PI,x:e+180*u/Math.PI,z:0}];this.placeViewCone(M)},placeViewCone:function(t){const e=this,s={type:this.ipa.SHAPE_TYPE.POLYGON,coordinates:t,strokeColor:"#00a0ee",strokeOpacity:.75,strokeWeight:2,fillColor:"#00a0ee",fillOpacity:.25,altitudeMode:this.ipa.ALTITUDE_MODE.RELATIVE_TO_GROUND};this.ipa.addShapes([s],function(t){for(var s=0;s<t.length;s++)if("false"===t[s].success)alert(t[s].error);else{const o=e.$store.state.pictometry.shapeIds;o.push(t[s].shapeId);o.slice(0,-1);e.ipa.removeShapes(o.slice(0,-1))}})}}},a=s(8),i=Object(a.a)(o,void 0,void 0,!1,null,null,null);e.default=i.exports}}]);