"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[5682],{8580:(C,m,d)=>{d.d(m,{XD:()=>r,dD:()=>c,xI:()=>t});var i=d(4650),a=d(5017),e=d(1281),_=d(8929),u=d(2654);let x=0;const l=new i.OlP("CdkAccordion");let t=(()=>{class n{constructor(){this._stateChanges=new _.xQ,this._openCloseAllActions=new _.xQ,this.id="cdk-accordion-"+x++,this._multi=!1}get multi(){return this._multi}set multi(o){this._multi=(0,e.Ig)(o)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(o){this._stateChanges.next(o)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275dir=i.lG2({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[i._Bn([{provide:l,useExisting:n}]),i.TTD]}),n})(),s=0,c=(()=>{class n{constructor(o,h,g){this.accordion=o,this._changeDetectorRef=h,this._expansionDispatcher=g,this._openCloseAllSubscription=u.w.EMPTY,this.closed=new i.vpe,this.opened=new i.vpe,this.destroyed=new i.vpe,this.expandedChange=new i.vpe,this.id="cdk-accordion-child-"+s++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=g.listen((A,f)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===f&&this.id!==A&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(o){o=(0,e.Ig)(o),this._expanded!==o&&(this._expanded=o,this.expandedChange.emit(o),o?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(o){this._disabled=(0,e.Ig)(o)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(o=>{this.disabled||(this.expanded=o)})}}return n.\u0275fac=function(o){return new(o||n)(i.Y36(l,12),i.Y36(i.sBO),i.Y36(a.A8))},n.\u0275dir=i.lG2({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[i._Bn([{provide:l,useValue:void 0}])]}),n})(),r=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({}),n})()},5682:(C,m,d)=>{d.r(m),d.d(m,{CdkAccordionExamplesModule:()=>l,CdkAccordionOverviewExample:()=>u});var i=d(6895),a=d(8580),e=d(4650);function _(t,s){if(1&t){const c=e.EpF();e.TgZ(0,"cdk-accordion-item",2,3)(2,"div",4),e.NdJ("click",function(){e.CHM(c);const n=e.MAs(1);return e.KtG(n.toggle())}),e._uU(3),e.TgZ(4,"span",5),e._uU(5),e.qZA()(),e.TgZ(6,"div",6),e._uU(7," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? "),e.qZA()()}if(2&t){const c=s.$implicit,r=s.index,n=e.MAs(1);e.uIk("id","accordion-header-"+r)("aria-expanded",n.expanded)("aria-controls","accordion-body-"+r),e.xp6(3),e.hij(" ",c," "),e.xp6(2),e.hij(" Click to ",n.expanded?"close":"open"," "),e.xp6(1),e.Udp("display",n.expanded?"":"none"),e.uIk("id","accordion-body-"+r)("aria-labelledby","accordion-header-"+r)}}let u=(()=>{class t{constructor(){this.items=["Item 1","Item 2","Item 3","Item 4","Item 5"],this.expandedIndex=0}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cdk-accordion-overview-example"]],decls:2,vars:1,consts:[[1,"example-accordion"],["class","example-accordion-item","role","button","tabindex","0",4,"ngFor","ngForOf"],["role","button","tabindex","0",1,"example-accordion-item"],["accordionItem","cdkAccordionItem"],[1,"example-accordion-item-header",3,"click"],[1,"example-accordion-item-description"],["role","region",1,"example-accordion-item-body"]],template:function(c,r){1&c&&(e.TgZ(0,"cdk-accordion",0),e.YNc(1,_,8,9,"cdk-accordion-item",1),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngForOf",r.items))},dependencies:[i.sg,a.xI,a.dD],styles:[".example-accordion[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%] {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]    + .example-accordion-item[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%], .example-accordion-item-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}"]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,a.XD]}),t})()}}]);