(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{292:function(n,t,e){var i=e(422);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(10)(i,o);i.locals&&(n.exports=i.locals)},421:function(n,t,e){"use strict";var i=e(292);e.n(i).a},422:function(n,t,e){(n.exports=e(9)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .toggle-tab {\n  position: absolute;\n  left: 0px;\n  border-width: 1.3px;\n  border-color: #CAC9C9;\n  height: 48px;\n  line-height: 58px;\n  width:24px;\n  background-color: white;\n  display: inline-block;\n  z-index: 500; */\n  /* border-left-style: solid; */\n  /* box-shadow: 2px 2px 7px grey; */\n/* } */\n.toggle-tab[data-v-4b5ff626] {\n  display: none;\n}\n.align-span[data-v-4b5ff626] {\n  margin-left: 6px;\n}\n@media screen and (min-width: 46.875em) {\n.toggle-tab[data-v-4b5ff626] {\n    position: absolute;\n    right: 0px;\n    border-width: 1.3px;\n    border-style: solid;\n    border-color: #CAC9C9;\n    height: 48px;\n    line-height: 56px;\n    width:24px;\n    background-color: white;\n    display: inline-block;\n    z-index: 500;\n    opacity: 0.7;\n    /* border-left-style: solid; */\n    /* box-shadow: 2px 2px 7px grey; */\n}\n}\n\n",""])},429:function(n,t,e){"use strict";e.r(t);var i={props:{elementContainer:{type:String,default:"topic-panel-container"}},data:()=>({divHeight:0,buttonPosition:0}),mounted(){window.addEventListener("resize",this.setDivHeight),this.setDivHeight()},computed:{fullScreenMapEnabled(){return this.$store.state.fullScreenMapEnabled},fullScreenTopicsEnabled(){return console.log("this.$store.state.fullScreenTopicsEnabled:",this.$store.state.fullScreenTopicsEnabled),this.$store.state.fullScreenTopicsEnabled},isMobileOrTablet(){return this.$store.state.isMobileOrTablet},cyclomediaActive(){return this.$store.state.cyclomedia?this.$store.state.cyclomedia.active:null},pictometryActive(){return this.$store.state.pictometry?this.$store.state.pictometry.active:null},picOrCycloActive(){return!(!this.cyclomediaActive&&!this.pictometryActive)},currentIcon(){return this.fullScreenTopicsEnabled?"caret-left":"caret-right"}},watch:{picOrCycloActive(){this.$nextTick(()=>{this.setDivHeight()})}},methods:{setDivHeight(){let n;n=this.fullScreenTopicsEnabled?document.getElementById(this.$props.elementContainer):document.getElementById("map-tag");const t=window.getComputedStyle(n),e=parseFloat(t.getPropertyValue("height").replace("px",""));this.buttonPosition=(e-48)/2+"px"},handleFullScreenTopicsToggleButtonClick(n){const t=!this.$store.state.fullScreenTopicsEnabled;this.$store.commit("setFullScreenTopicsEnabled",t)}}},o=(e(421),e(8)),s=Object(o.a)(i,function(){var n=this.$createElement,t=this._self._c||n;return this.isMobileOrTablet?this._e():t("div",{staticClass:"toggle-tab",style:{top:this.buttonPosition},attrs:{id:"toggle-tab"},on:{click:this.handleFullScreenTopicsToggleButtonClick}},[t("span",{staticClass:"align-span"},[t("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:this.currentIcon}})],1)])},[],!1,null,"4b5ff626",null);t.default=s.exports}}]);