var Q=Object.defineProperty,G=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var U=(e,t,m)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[t]=m,j=(e,t)=>{for(var m in t||(t={}))O.call(t,m)&&U(e,m,t[m]);if(P)for(var m of P(t))J.call(t,m)&&U(e,m,t[m]);return e},z=(e,t)=>G(e,H(t));import{H as N,_ as W,a as X}from"./index.33154688.js";import{s as Y}from"./dictFormat.17ca72a7.js";import{u as Z}from"./useDrawer.7609ab11.js";import{F as x}from"./index.37e0545e.js";import{u as ee}from"./useI18n.23d84818.js";import{d as ae,c as $,a as B,r as I,f as te,a6 as oe,q as c,a3 as ne,t as A,y as se,z as L,k as a,x as o,a4 as D,S as h,R as v,v as le,D as re,M as E,n as me}from"./ant-design-vue.a8492f24.js";function ie(e={}){return N("/admin/system/systemConfig","GET",e)}function de(e){return N("/admin/system/systemConfig/"+e,"GET",{},!1)}function ue(e){return N("/admin/system/systemConfig/"+e,"DELETE")}function ce(e={}){return N("/admin/system/systemConfig","POST",e)}function fe(e){return N("/admin/system/systemConfig/"+e.id,"PUT",e)}const{t:l}=ee(),pe=[{title:l("routes.systemConfig.name"),dataIndex:"name",key:"name",align:"center"},{title:l("routes.systemConfig.keyName"),dataIndex:"keyName",key:"keyName",align:"center"},{title:l("routes.systemConfig.key"),dataIndex:"key",key:"key",align:"center"},{title:l("routes.systemConfig.remark"),dataIndex:"remark",key:"remark",align:"center"},{title:l("routes.systemConfig.createdBy"),dataIndex:"createdBy",key:"createdBy",align:"center"},{title:l("routes.systemConfig.createdAt"),dataIndex:"createdAt",key:"createdAt",align:"center"},{title:l("routes.systemConfig.action"),key:"action",align:"center",slots:{customRender:"action"}}],ge=ae({components:{FormSearch:x},setup(){const e=$(()=>X().loading),t={name:[{required:!0,message:l("routes.systemConfig.nameCannotBeEmpty"),trigger:"blur"}],keyName:[{required:!0,message:l("routes.systemConfig.keyNameCannotBeEmpty"),trigger:"blur"}],key:[{required:!0,message:l("routes.systemConfig.keyCannotBeEmpty"),trigger:"change"}]},m=B([{type:"input",label:l("routes.systemConfig.name"),name:"name",value:"",placeholder:l("routes.systemConfig.namePlaceholder")}]),s=B({pageNum:1,pageSize:10,name:"",keyName:"",status:""}),_=n=>{f.value.current=1,s.pageNum=f.value.current,s.name=n.name,s.keyName=n.keyName,s.status=n.status,C(s)},S=I([]),f=I({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:n=>`\u5171 ${n} \u6761`}),y=n=>{f.value=n,s.pageNum=f.value.current,s.pageSize=f.value.pageSize,C(s)},i=B({selectedRowKeys:[]}),T=$(()=>i.selectedRowKeys.length>0),R=n=>{console.log("selectedRowKeys changed: ",n),i.selectedRowKeys=n},C=n=>{ie(n).then(g=>{console.log(g),S.value=g.data.rows,f.value.total=g.data.count,i.selectedRowKeys=[]})},b=()=>{C(s)},d=I(),u=B({id:void 0,name:void 0,keyName:void 0,status:"1",key:void 0}),{open:p,drawerTitle:w}=Z();console.log(p);const k=()=>{u.id=void 0,d.value.resetFields(),console.log(d),p.value=!1},r=()=>{console.log(u),d.value.validate().then(()=>{u.id?fe(u).then(n=>{E.success(n.message),C(s),u.id=void 0,d.value.resetFields(),p.value=!1}):ce(u).then(n=>{E.success(n.message),C(s),u.id=void 0,d.value.resetFields(),p.value=!1})}).catch(n=>{console.log("error",n)})},F=n=>{const g=n.id||i.selectedRowKeys;ue(g).then(()=>{(g.length&&g.length===S.value.length||S.value.length===1)&&Math.ceil(f.value.total/s.pageSize)===s.pageNum&&s.pageNum>1&&s.pageNum--,C(s),E.success(l("common.deleteSuccess"))})},q=n=>{console.log(n),E.success(l("common.cancelDelete"))},M=()=>{p.value=!0,w.value=l("common.add")},V=n=>{de(n.id).then(g=>{p.value=!0,w.value=l("common.update"),me(()=>{Object.keys(u).forEach(K=>{u[K]=g.data[K]})})})};return te(async()=>{b()}),z(j({t:l,loading:e,queryParams:s,formFields:m,handleQuery:_,systemConfigList:S,columns:pe,pagination:f,handleTableChange:y,selectDictLabel:Y},oe(i)),{hasSelected:T,onSelectChange:R,open:p,drawerTitle:w,formState:u,labelCol:{span:4},wrapperCol:{span:18},rules:t,formRef:d,handleClose:k,handleSubmit:r,confirm:F,cancel:q,handleAdd:M,handleUpdate:V})}}),ye={class:"p-4"},Ce={class:"mb-3"};function ke(e,t,m,s,_,S){const f=c("form-search"),y=c("a-button"),i=c("a-col"),T=c("a-popconfirm"),R=c("a-row"),C=c("a-table"),b=c("a-input"),d=c("a-form-item"),u=c("a-textarea"),p=c("a-form"),w=c("a-drawer"),k=ne("has-permi");return A(),se("div",ye,[L("div",Ce,[a(f,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),a(R,{gutter:10,class:"mb-2"},{default:o(()=>[D(a(i,null,{default:o(()=>[a(y,{color:"success",onClick:e.handleAdd},{default:o(()=>[h(v(e.t("common.add")),1)]),_:1},8,["onClick"])]),_:1},512),[[k,["system:systemConfig:add"]]]),D(a(i,null,{default:o(()=>[a(T,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:e.confirm,onCancel:e.cancel},{default:o(()=>[a(y,{disabled:!e.hasSelected,color:"error"},{default:o(()=>[h(v(e.t("common.update")),1)]),_:1},8,["disabled"])]),_:1},8,["title","ok-text","cancel-text","onConfirm","onCancel"])]),_:1},512),[[k,["system:systemConfig:delete"]]])]),_:1}),a(C,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.systemConfigList,pagination:e.pagination,onChange:e.handleTableChange},{action:o(({record:r})=>[L("span",null,[D(a(y,{type:"link",color:"success",class:"mr-3",onClick:F=>e.handleUpdate(r)},{default:o(()=>[h(v(e.t("common.update")),1)]),_:2},1032,["onClick"]),[[k,["system:systemConfig:update"]]]),a(T,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:F=>e.confirm(r),onCancel:e.cancel},{default:o(()=>[D(a(y,{type:"link",color:"error"},{default:o(()=>[h(v(e.t("common.delete")),1)]),_:1},512),[[k,["system:systemConfig:delete"]]])]),_:2},1032,["title","ok-text","cancel-text","onConfirm","onCancel"])])]),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"]),a(w,{width:"600px",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":t[4]||(t[4]=r=>e.open=r),maskClosable:!1,onClose:e.handleClose},{default:o(()=>[e.open?(A(),le(p,{key:0,ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:o(()=>[a(R,null,{default:o(()=>[a(i,{span:24},{default:o(()=>[a(d,{label:e.t("routes.systemConfig.name"),name:"name"},{default:o(()=>[a(b,{value:e.formState.name,"onUpdate:value":t[0]||(t[0]=r=>e.formState.name=r),placeholder:e.t("routes.systemConfig.namePlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(i,{span:24},{default:o(()=>[a(d,{label:e.t("routes.systemConfig.keyName"),name:"keyName"},{default:o(()=>[a(b,{value:e.formState.keyName,"onUpdate:value":t[1]||(t[1]=r=>e.formState.keyName=r),placeholder:e.t("routes.systemConfig.keyNamePlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(i,{span:24},{default:o(()=>[a(d,{label:e.t("routes.systemConfig.key"),name:"key"},{default:o(()=>[a(b,{value:e.formState.key,"onUpdate:value":t[2]||(t[2]=r=>e.formState.key=r),placeholder:e.t("routes.systemConfig.keyPlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(i,{span:24},{default:o(()=>[a(d,{label:e.t("routes.systemConfig.remark"),name:"remark"},{default:o(()=>[a(u,{rows:3,value:e.formState.remark,"onUpdate:value":t[3]||(t[3]=r=>e.formState.remark=r),placeholder:e.t("routes.systemConfig.remarkPlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(i,{span:24},{default:o(()=>[a(d,null,{default:o(()=>[a(y,{type:"primary",class:"mr-3",onClick:e.handleSubmit},{default:o(()=>[h(v(e.t("common.okText")),1)]),_:1},8,["onClick"]),a(y,{onClick:e.handleClose},{default:o(()=>[h(v(e.t("common.cancelText")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","label-col","wrapper-col"])):re("",!0)]),_:1},8,["title","visible","onClose"])])}var Re=W(ge,[["render",ke]]);export{Re as default};
