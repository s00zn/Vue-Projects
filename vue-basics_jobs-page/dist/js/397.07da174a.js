"use strict";(self["webpackChunkvue_jobs"]=self["webpackChunkvue_jobs"]||[]).push([[397],{9397:function(t,e,o){o.r(e),o.d(e,{default:function(){return j}});var s=o(3396),n=o(7139);const l=(0,s._)("h1",null,"Jobs",-1),i={key:0},u={key:1},a=(0,s._)("p",null,"Loading job-overview...",-1),r=[a];function h(t,e,o,a,h,c){const d=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,h.jobs.length?((0,s.wg)(),(0,s.iD)("div",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.jobs,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"job",key:t.id},[(0,s.Wm)(d,{to:{name:"jobDetails",params:{id:t.id,title:t.title,short:t.short,details:t.details}}},{default:(0,s.w5)((()=>[(0,s._)("h2",null,(0,n.zw)(t.title),1),(0,s._)("p",null,(0,n.zw)(t.short),1)])),_:2},1032,["to"])])))),128))])):((0,s.wg)(),(0,s.iD)("div",u,r))],64)}var c={data(){return{jobs:[]}},mounted(){fetch("http://localhost:3000/jobs").then((t=>t.json())).then((t=>this.jobs=t)).catch((t=>console.log(t.message)))}},d=o(89);const b=(0,d.Z)(c,[["render",h]]);var j=b}}]);
//# sourceMappingURL=397.07da174a.js.map