"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[8234],{8234:(y,l,s)=>{s.r(l),s.d(l,{BadgeHarnessExample:()=>B,BadgeOverviewExample:()=>b});var e=s(5879),m=s(617),d=s(2296),o=s(3680),r=s(4300),g=s(2495),v=s(6814);let f=0;const _=(0,o.Id)(class{}),c="mat-badge-content";let h=(()=>{class n extends _{get color(){return this._color}set color(t){this._setColor(t),this._color=t}get overlap(){return this._overlap}set overlap(t){this._overlap=(0,g.Ig)(t)}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateDescription(t)}get hidden(){return this._hidden}set hidden(t){this._hidden=(0,g.Ig)(t)}constructor(t,i,u,E,D){super(),this._ngZone=t,this._elementRef=i,this._ariaDescriber=u,this._renderer=E,this._animationMode=D,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=f++,this._isInitialized=!1,this._interactivityChecker=(0,e.f3M)(r.ic),this._document=(0,e.f3M)(v.K0)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const t=this._renderer.createElement("span"),i="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(c),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(i)})}):t.classList.add(i),t}_updateRenderedContent(t){const i=`${t??""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){const i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),t&&i.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${c}`);for(const i of Array.from(t))i!==this._badgeElement&&i.remove()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(r.$s),e.Y36(e.Qsj),e.Y36(e.QbO,8))},n.\u0275dir=e.lG2({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,i){2&t&&e.ekj("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small","small"===i.size)("mat-badge-medium","medium"===i.size)("mat-badge-large","large"===i.size)("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[e.qOj]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.rt,o.BQ,o.BQ]}),n})(),b=(()=>{class n{constructor(){this.hidden=!1}toggleBadgeVisibility(){this.hidden=!this.hidden}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["badge-overview-example"]],standalone:!0,features:[e.jDz],decls:18,vars:1,consts:[["matBadge","4","matBadgeOverlap","false",1,"demo-section"],["matBadge","1","matBadgeSize","large",1,"demo-section"],[1,"demo-section"],["mat-raised-button","","color","primary","matBadge","8","matBadgePosition","before","matBadgeColor","accent"],["mat-raised-button","","matBadge","7",3,"matBadgeHidden","click"],["matBadge","15","matBadgeColor","warn"],[1,"cdk-visually-hidden"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._uU(1,"Text with a badge"),e.qZA(),e.TgZ(2,"div",1),e._uU(3,"Text with large badge"),e.qZA(),e.TgZ(4,"div",2),e._uU(5," Button with a badge on the left\n"),e.TgZ(6,"button",3),e._uU(7," Action "),e.qZA()(),e.TgZ(8,"div",2),e._uU(9," Button toggles badge visibility\n"),e.TgZ(10,"button",4),e.NdJ("click",function(){return i.toggleBadgeVisibility()}),e._uU(11," Hide "),e.qZA()(),e.TgZ(12,"div",2),e._uU(13," Icon with a badge\n"),e.TgZ(14,"mat-icon",5),e._uU(15,"home"),e.qZA(),e.TgZ(16,"span",6),e._uU(17," Example with a home icon with overlaid badge showing the number 15 "),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("matBadgeHidden",i.hidden))},dependencies:[p,h,d.ot,d.lW,m.Ps,m.Hw],styles:["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section[_ngcontent-%COMP%]    + .demo-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"]}),n})(),B=(()=>{class n{constructor(){this.simpleContent="S",this.overlap=!0,this.disabled=!0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["badge-harness-example"]],standalone:!0,features:[e.jDz],decls:6,vars:3,consts:[["mat-button","","id","simple",3,"matBadge"],["mat-button","","id","overlapping","matBadge","O",3,"matBadgeOverlap"],["mat-button","","id","disabled","matBadge","D",3,"matBadgeDisabled"]],template:function(t,i){1&t&&(e.TgZ(0,"button",0),e._uU(1,"Simple"),e.qZA(),e.TgZ(2,"button",1),e._uU(3,"Overlapping"),e.qZA(),e.TgZ(4,"button",2),e._uU(5,"Disabled"),e.qZA()),2&t&&(e.Q6J("matBadge",i.simpleContent),e.xp6(2),e.Q6J("matBadgeOverlap",i.overlap),e.xp6(2),e.Q6J("matBadgeDisabled",i.disabled))},dependencies:[d.ot,d.lW,p,h],encapsulation:2}),n})()}}]);