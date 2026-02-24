import{a as vt}from"./chunk-RBGNJHEH.js";import{a as mt,b as st}from"./chunk-SE67SRIY.js";import{a as ue,b as pe,c as ce,d as R,e as re,f as le,h as gt}from"./chunk-ZK2PEVDB.js";import"./chunk-SNFZSA7X.js";import"./chunk-AZ7R6EKE.js";import{a as yt}from"./chunk-HGTXJ7UZ.js";import{$a as we,$b as Ae,$c as ot,$e as qe,$f as ye,Ab as A,Ag as H,Cc as tt,Dg as Ce,Ea as V,Eb as $,Ef as xt,Ff as ve,Gg as Ie,Ha as x,Ia as xe,Ic as it,Jb as e,Je as ut,Kb as Se,Lb as $e,Ma as K,Mc as nt,Me as Pe,Na as He,Ne as Et,Nf as St,Oe as v,Pa as We,Pb as b,Pd as pt,Pf as bt,Qb as f,Qc as _e,Ra as Ue,Rb as h,Rd as Me,Rf as me,Uf as Fe,Va as L,Vb as De,Vd as P,Vf as ft,We as he,X as Ne,Xa as M,Xe as de,Y as Ee,Yb as Je,Za as Ke,Zb as Z,_ as Qe,_a as Te,_f as ge,a as j,ab as s,ac as Ze,b as N,ba as p,bb as i,ca as c,cb as t,db as o,eg as se,fd as at,gg as ht,hc as Xe,hd as F,ic as Ye,jd as Q,je as J,kd as ie,ke as O,ld as B,mb as q,md as ke,nc as X,nd as S,od as U,pd as ne,qa as ee,rd as rt,rg as oe,sb as g,sd as be,se as ct,td as fe,te as W,ub as u,va as Be,vb as te,wb as w,wd as lt,xd as dt,ya as m,yb as I,yc as et,zb as D,zg as ae}from"./chunk-HCNRJGDM.js";var Li=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Mi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Ct=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(V(ee))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-grid"]],viewQuery:function(r,n){if(r&1&&I(H,5)(O,5),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Mi,decls:8337,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","/guides/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfAggregateConfig"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","{","[key:","string]:","TemplateRef<any>;","}"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","Array<ThfFilterByColumn>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type","('active'"],["pan","",1,"docs-api-property-type","'removed')"],["p-label","Interfaces"],["p-label","ThfTableAction"],["href","https://po-ui.io/icons"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfAggregateConfig"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'defaultColumn'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfFilterByColumn"],["pan","",1,"docs-api-property-type","any"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(te(Li),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
integrando-se perfeitamente ao seu aplicativo e sendo altamente personaliz\xE1vel.`),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Grid"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfGridComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-grid
  t-action-delete="boolean"
  t-action-edit="Function"
  t-action-excel="boolean"
  t-action-pdf="boolean"
  t-actions-right="boolean"
  t-actions="Array<ThfTableAction>"
  t-actions-filter="boolean"
  (t-delete-items)="EventEmitter"
  t-aggregates-config="ThfAggregateConfig"
  t-aggregates="Array<ThfAggregateDescriptor>"
  t-allow-batch-delete="boolean"
  t-auto-size="boolean"
  t-auto-size-on-scroll="boolean"
  (t-change-aggregates)="EventEmitter"
  (t-change-filter-by-column)="EventEmitter"
  (t-change-fixed-columns)="EventEmitter"
  (t-change-options-column-manager)="EventEmitter"
  (t-change-row-state-filter)="EventEmitter"
  (t-change-visible-columns)="EventEmitter"
  (t-changed-density)="EventEmitter"
  (t-changed-items)="EventEmitter"
  (t-restore-column-manager)="EventEmitter"
  t-columns="Array<ThfGridColumn>"
  t-components-size="string"
  t-container="boolean"
  t-custom-actions="Array<PoDropdownAction>"
  (t-custom-filter)="EventEmitter"
  t-custom-templates="{
    [key: string]: TemplateRef<any>;
}"
  (t-delete-item)="EventEmitter"
  t-disabled-include-button="boolean"
  t-draggable="boolean"
  t-edit-properties="ThfGridEditProperties"
  (t-change-page-size)="EventEmitter"
  t-fields="Array<PoPageDynamicSearchFilters>"
  t-filter-column-properties="Array<ThfFilterByColumn>"
  t-filter-input-mode="'basic' | 'service'"
  t-grid-row-actions="ThfGridRowActions"
  t-group="Array<string>"
  t-groupable="boolean | GroupableSettings"
  t-header-template="TemplateRef<void>"
  t-headline-fixed="boolean"
  t-height="number | string | null"
  t-hide-action-fixed-columns="boolean"
  t-hide-batch-actions="boolean"
  t-hide-columns-manager="boolean"
  t-hide-select-all="boolean"
  t-hide-table-search="boolean"
  t-loading="boolean"
  t-items="Array<any>"
  (t-items-after-get)="EventEmitter"
  t-literals="ThfGridLiterals"
  t-max-columns="number"
  t-max-height="number | string | null"
  t-max-resizable-width="number"
  t-min-height="number | string | null"
  t-min-resizable-width="number"
  (t-change-group)="EventEmitter"
  t-load="string | (() => ThfGridOptions)"
  t-options-paging="Array<ThfGridOptionPaging>"
  (t-change-order-column)="EventEmitter"
  t-page-size="number"
  t-page-size-virtual="number"
  t-pageable="boolean"
  t-param-delete-api="string"
  t-resizable="boolean"
  t-row-height="number"
  (t-rows-selected)="EventEmitter"
  t-selectable="boolean"
  t-selectable-entire-line="boolean"
  t-selectable-removed="boolean"
  (t-selected)="EventEmitter"
  (t-all-selected)="EventEmitter"
  t-service-delete-api="string | ThfGridDeleteService"
  t-service-api="string"
  t-show-densification-configuration="boolean"
  t-show-draggable-icon="boolean"
  t-show-footer-aggregates="boolean"
  (t-show-more)="EventEmitter"
  t-show-more-disabled="boolean"
  t-show-more-visible="boolean"
  t-single-select="boolean"
  t-sort="Array<ThfGridColumnSort>"
  (t-change-sort-column)="EventEmitter"
  t-sortable="boolean"
  t-spacing="string"
  t-striped="boolean"
  t-text-wrap="boolean"
  (t-unselected)="EventEmitter"
  (t-all-unselected)="EventEmitter"
  t-virtual-columns="boolean"
  t-virtual-scroll="boolean" >
</thf-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-action-delete"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Exibe o bot\xE3o de Excluir. Requer que a propriedade "),i(63,"strong"),e(64,"t-selectable"),t(),e(65," esteja habilitada."),t()()(),i(66,"tr",19)(67,"td",20)(68,"div",21)(69,"span",22),e(70,"t-action-edit"),o(71,"br"),t()()(),i(72,"td",23)(73,"code",27),e(74,"Function"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,`Exibe o bot\xE3o de Editar e executa a fun\xE7\xE3o definida ao clicar.
Requer que a propriedade `),i(83,"strong"),e(84,"t-selectable"),t(),e(85," esteja habilitada."),t(),i(86,"pre")(87,"code",28),e(88,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-action-edit]="myFunction.bind(this)"
 [t-selectable]-true
></thf-grid>`),t()()()(),i(89,"tr",19)(90,"td",20)(91,"div",21)(92,"span",22),e(93,"t-action-excel"),o(94,"br"),t()()(),i(95,"td",23)(96,"code",24),e(97,"boolean"),t()(),i(98,"td",25)(99,"p")(100,"code"),e(101,"false"),t()()(),i(102,"td",26)(103,"em")(104,"strong"),e(105,"(opcional)"),t()(),i(106,"p"),e(107,"Exibe o bot\xE3o de Exportar. Requer que a propriedade "),i(108,"strong"),e(109,"t-selectable"),t(),e(110,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(111,"code"),e(112,".xlsx"),t(),e(113,"."),t()()(),i(114,"tr",19)(115,"td",20)(116,"div",21)(117,"span",22),e(118,"t-action-pdf"),o(119,"br"),t()()(),i(120,"td",23)(121,"code",24),e(122,"boolean"),t()(),i(123,"td",25)(124,"p")(125,"code"),e(126,"false"),t()()(),i(127,"td",26)(128,"em")(129,"strong"),e(130,"(opcional)"),t()(),i(131,"p"),e(132,"Exibe o bot\xE3o de Download. Requer que a propriedade "),i(133,"strong"),e(134,"t-selectable"),t(),e(135,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(136,"code"),e(137,"PDF"),t(),e(138,"."),t(),i(139,"blockquote")(140,"p"),e(141,"Todos os dados exportados para PDF utilizar\xE3o a fonte 'Lato', garantindo compatibilidade com a tabela de caracteres ASCII estendida."),t()()()(),i(142,"tr",19)(143,"td",20)(144,"div",21)(145,"span",22),e(146," t-actions-right"),o(147,"br"),t()()(),i(148,"td",23)(149,"code",24),e(150,"boolean"),t()(),i(151,"td",25)(152,"p")(153,"code"),e(154,"false"),t()()(),i(155,"td",26)(156,"em")(157,"strong"),e(158,"(opcional)"),t()(),i(159,"p"),e(160,"Posiciona a coluna de a\xE7\xF5es ("),i(161,"strong"),e(162,"t-actions"),t(),e(163,") \xE0 direita."),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-actions"),o(169,"br"),t()()(),i(170,"td",23)(171,"code",29),e(172,"Array<ThfTableAction>"),t()(),i(173,"td",25),e(174,"-"),t(),i(175,"td",26)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),i(179,"p"),e(180,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(181,"strong"),e(182,"ThfTableAction"),t(),e(183,`, adicionando uma coluna
ao grid. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(184,"a",30)(185,"strong"),e(186,"an an-caret-circle-right"),t()(),e(187,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(188,"p")(189,"strong"),e(190,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(191,"ul")(192,"li"),e(193,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(194,"li"),e(195,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(196,"pre")(197,"code",28),e(198,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-actions]="actionsGrid"
></thf-grid>`),t()(),i(199,"pre")(200,"code",31),e(201,`actionsGrid: Array<ThfTableAction> = [
 {
   label: '',
   action: (e: any) => {
     this.poNotification.information(\`\${e.id} - \${e.name} \`);
   },
   icon: 'ICON_MENU_OPEN',
   fixed: true
 },
];

constructor(private poNotification: PoNotificationService) {}`),t()()()(),i(202,"tr",19)(203,"td",20)(204,"div",21)(205,"span",22),e(206,"t-actions-filter"),o(207,"br"),t()()(),i(208,"td",23)(209,"code",24),e(210,"boolean"),t()(),i(211,"td",25)(212,"p")(213,"code"),e(214,"true"),t()()(),i(215,"td",26)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,`Exibe o bot\xE3o de Filtros.
Habilita um modal com op\xE7\xF5es adicionais de filtro, caso o output `),i(221,"strong"),e(222,"t-custom-filter"),t(),e(223," n\xE3o esteja em uso."),t()()(),i(224,"tr",19)(225,"td",20)(226,"div",32)(227,"span",33),e(228," (t-delete-items)"),o(229,"br"),t()()(),i(230,"td",23)(231,"code",34),e(232,"EventEmitter"),t()(),i(233,"td",25),e(234,"-"),t(),i(235,"td",26)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado.
Retorna os itens que permanecem dispon\xEDveis.`),t()()(),i(241,"tr",19)(242,"td",20)(243,"div",21)(244,"span",22),e(245," t-aggregates-config"),o(246,"br"),t()()(),i(247,"td",23)(248,"code",35),e(249,"ThfAggregateConfig"),t()(),i(250,"td",25),e(251,"-"),t(),i(252,"td",26)(253,"em")(254,"strong"),e(255,"(opcional)"),t()(),i(256,"p"),e(257,"Objeto de configura\xE7\xE3o para definir as "),i(258,"strong"),e(259,"op\xE7\xF5es de comportamento e apresenta\xE7\xE3o"),t(),e(260,`
dos totalizadores/agregados (aggregates) da grid.`),t()()(),i(261,"tr",19)(262,"td",20)(263,"div",21)(264,"span",22),e(265," t-aggregates"),o(266,"br"),t()()(),i(267,"td",23)(268,"code",36),e(269,"Array<ThfAggregateDescriptor>"),t()(),i(270,"td",25)(271,"p")(272,"code"),e(273,"[]"),t()()(),i(274,"td",26)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),i(278,"p"),e(279,`Possibilita apresentar totalizadores de uma ou mais colunas ao utilizar o recurso de agrupamento de colunas.
Esta propriedade recebe um array com a lista de objetos com formato da interface `),i(280,"code"),e(281,"ThfAggregateDescriptor"),t(),e(282,"."),t()()(),i(283,"tr",19)(284,"td",20)(285,"div",21)(286,"span",22),e(287," t-allow-batch-delete"),o(288,"br"),t()()(),i(289,"td",23)(290,"code",24),e(291,"boolean"),t()(),i(292,"td",25)(293,"p")(294,"code"),e(295,"false"),t()()(),i(296,"td",26)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),i(300,"p"),e(301,`Habilita a exclus\xE3o em lote dos itens selecionados na grid. Quando ativado, permite que m\xFAltiplos itens sejam exclu\xEDdos de uma vez
ao utilizar `),i(302,"strong"),e(303,"t-service-api"),t(),e(304," e/ou "),i(305,"strong"),e(306,"t-service-delete-api"),t(),e(307,", desde que o servi\xE7o implemente o m\xE9todo "),i(308,"code"),e(309,"deleteBatchItems"),t(),e(310," da interface "),i(311,"code"),e(312,"ThfGridDeleteService"),t(),e(313,"."),t()()(),i(314,"tr",19)(315,"td",20)(316,"div",21)(317,"span",22),e(318,"t-auto-size"),o(319,"br"),t()()(),i(320,"td",23)(321,"code",24),e(322,"boolean"),t()(),i(323,"td",25)(324,"p")(325,"code"),e(326,"false"),t()()(),i(327,"td",26)(328,"em")(329,"strong"),e(330,"(opcional)"),t()(),i(331,"p"),e(332,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(333,"strong"),e(334,"t-resizable"),t(),e(335," esteja habilitada."),t(),i(336,"blockquote")(337,"p"),e(338,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.
Esta propriedade \xE9 incompat\xEDvel quando t-grid-row-actions est\xE1 habilitado.`),t()()()(),i(339,"tr",19)(340,"td",20)(341,"div",21)(342,"span",22),e(343,"t-auto-size-on-scroll"),o(344,"br"),t()()(),i(345,"td",23)(346,"code",24),e(347,"boolean"),t()(),i(348,"td",25)(349,"p")(350,"code"),e(351,"false"),t()()(),i(352,"td",26)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),i(356,"p"),e(357,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(358,"p"),e(359,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(360,"p"),e(361,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(362,"code"),e(363,"t-page-size-virtual"),t(),e(364," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(365,"blockquote")(366,"p")(367,"strong"),e(368,"Pr\xE9-requisitos"),t(),e(369,": Requer que as propriedades "),i(370,"code"),e(371,"t-auto-size"),t(),e(372,", "),i(373,"code"),e(374,"t-resizable"),t(),e(375,`
e `),i(376,"code"),e(377,"t-virtual-scroll"),t(),e(378," (ou altura fixa via "),i(379,"code"),e(380,"[t-height]"),t(),e(381,") estejam habilitadas."),t()(),i(382,"blockquote")(383,"p")(384,"strong"),e(385,"Incompatibilidade"),t(),e(386,": N\xE3o funciona com "),i(387,"code"),e(388,"t-grid-row-actions"),t(),e(389," habilitado;"),t()(),i(390,"p")(391,"strong"),e(392,"Exemplo de uso:"),t()(),i(393,"pre")(394,"code",28),e(395,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(396,"tr",19)(397,"td",20)(398,"div",32)(399,"span",33),e(400," (t-change-aggregates)"),o(401,"br"),t()()(),i(402,"td",23)(403,"code",34),e(404,"EventEmitter"),t()(),i(405,"td",25),e(406,"-"),t(),i(407,"td",26)(408,"p"),e(409,"Evento disparado ap\xF3s alterar os "),i(410,"code"),e(411,"aggregates"),t(),e(412,"."),t()()(),i(413,"tr",19)(414,"td",20)(415,"div",32)(416,"span",33),e(417," (t-change-filter-by-column)"),o(418,"br"),t()()(),i(419,"td",23)(420,"code",34),e(421,"EventEmitter"),t()(),i(422,"td",25),e(423,"-"),t(),i(424,"td",26)(425,"em")(426,"strong"),e(427,"(opcional)"),t()(),i(428,"p"),e(429,`Evento disparado ao alterar um filtro por coluna.
Retorna um array de `),i(430,"code"),e(431,"ThfFilterByColumn"),t(),e(432," com as colunas que possuem filtros aplicados."),t()()(),i(433,"tr",19)(434,"td",20)(435,"div",32)(436,"span",33),e(437," (t-change-fixed-columns)"),o(438,"br"),t()()(),i(439,"td",23)(440,"code",34),e(441,"EventEmitter"),t()(),i(442,"td",25),e(443,"-"),t(),i(444,"td",26)(445,"em")(446,"strong"),e(447,"(opcional)"),t()(),i(448,"p"),e(449,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas fixas.
Retorna um array de strings com as colunas fixas atualizadas.`),t()()(),i(450,"tr",19)(451,"td",20)(452,"div",32)(453,"span",33),e(454," (t-change-options-column-manager)"),o(455,"br"),t()()(),i(456,"td",23)(457,"code",34),e(458,"EventEmitter"),t()(),i(459,"td",25),e(460,"-"),t(),i(461,"td",26)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),i(465,"p"),e(466,`Evento disparado ao selecionar a op\xE7\xE3o draggable ou groupable no Gerenciar Tabela.
Retorna um array de strings contendo as a\xE7\xF5es habilitadas.`),t()()(),i(467,"tr",19)(468,"td",20)(469,"div",32)(470,"span",33),e(471," (t-change-row-state-filter)"),o(472,"br"),t()()(),i(473,"td",23)(474,"code",34),e(475,"EventEmitter"),t()(),i(476,"td",25),e(477,"-"),t(),i(478,"td",26)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),i(482,"p"),e(483,"Evento disparado quando h\xE1 altera\xE7\xE3o no estado de um filtro de linha."),t()()(),i(484,"tr",19)(485,"td",20)(486,"div",32)(487,"span",33),e(488," (t-change-visible-columns)"),o(489,"br"),t()()(),i(490,"td",23)(491,"code",34),e(492,"EventEmitter"),t()(),i(493,"td",25),e(494,"-"),t(),i(495,"td",26)(496,"em")(497,"strong"),e(498,"(opcional)"),t()(),i(499,"p"),e(500,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas vis\xEDveis.
Retorna um array de strings com as colunas vis\xEDveis atualizadas.`),t()()(),i(501,"tr",19)(502,"td",20)(503,"div",32)(504,"span",33),e(505," (t-changed-density)"),o(506,"br"),t()()(),i(507,"td",23)(508,"code",34),e(509,"EventEmitter"),t()(),i(510,"td",25),e(511,"-"),t(),i(512,"td",26)(513,"em")(514,"strong"),e(515,"(opcional)"),t()(),i(516,"p"),e(517,"Evento disparado ao selecionar o tipo de densidade no Gerenciar Tabela. Retorna a densidade aplicada."),t()()(),i(518,"tr",19)(519,"td",20)(520,"div",32)(521,"span",33),e(522," (t-changed-items)"),o(523,"br"),t()()(),i(524,"td",23)(525,"code",34),e(526,"EventEmitter"),t()(),i(527,"td",25),e(528,"-"),t(),i(529,"td",26)(530,"em")(531,"strong"),e(532,"(opcional)"),t()(),i(533,"p"),e(534,"Evento emitido quando ocorre uma altera\xE7\xE3o em alguma linha da grid."),t()()(),i(535,"tr",19)(536,"td",20)(537,"div",32)(538,"span",33),e(539," (t-restore-column-manager)"),o(540,"br"),t()()(),i(541,"td",23)(542,"code",34),e(543,"EventEmitter"),t()(),i(544,"td",25),e(545,"-"),t(),i(546,"td",26)(547,"em")(548,"strong"),e(549,"(opcional)"),t()(),i(550,"p"),e(551,`Evento disparado quando pressionado o bot\xE3o 'Restaurar padr\xE3o' no Gerenciar Tabela.
Retorna um array de strings com as colunas vis\xEDveis por padr\xE3o.`),t()()(),i(552,"tr",19)(553,"td",20)(554,"div",21)(555,"span",22),e(556,"t-columns"),o(557,"br"),t()()(),i(558,"td",23)(559,"code",37),e(560,"Array<ThfGridColumn>"),t()(),i(561,"td",25),e(562,"-"),t(),i(563,"td",26)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),i(567,"p"),e(568,"Permite definir e configurar as colunas do grid que implementam a interface "),i(569,"strong"),e(570,"ThfGridColumn"),t(),e(571,"."),t(),i(572,"pre")(573,"code",28),e(574,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-columns]="columns"
></thf-grid>`),t()(),i(575,"pre")(576,"code",31),e(577,`columns: Array<ThfGridColumn> = [
 { property: 'id', visible: false },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(578,"tr",19)(579,"td",20)(580,"div",21)(581,"span",22),e(582,"t-components-size"),o(583,"br"),t()()(),i(584,"td",23)(585,"code",38),e(586,"string"),t()(),i(587,"td",25)(588,"p")(589,"code"),e(590,"medium"),t()()(),i(591,"td",26)(592,"em")(593,"strong"),e(594,"(opcional)"),t()(),i(595,"p"),e(596,"Define o tamanho dos componentes de formul\xE1rio no grid:"),t(),i(597,"ul")(598,"li")(599,"code"),e(600,"small"),t(),e(601,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(602,"li")(603,"code"),e(604,"medium"),t(),e(605,": aplica a medida medium de cada componente."),t()(),i(606,"blockquote")(607,"p"),e(608,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(609,"code"),e(610,"medium"),t(),e(611,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(612,"a",39),e(613,"po-theme"),t(),e(614,"."),t()()()(),i(615,"tr",19)(616,"td",20)(617,"div",21)(618,"span",22),e(619,"t-container"),o(620,"br"),t()()(),i(621,"td",23)(622,"code",24),e(623,"boolean"),t()(),i(624,"td",25)(625,"p")(626,"code"),e(627,"true"),t()()(),i(628,"td",26)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),i(632,"p"),e(633,"Adiciona um contorno arredondado ao "),i(634,"code"),e(635,"thf-grid"),t(),e(636,"."),t()()(),i(637,"tr",19)(638,"td",20)(639,"div",21)(640,"span",22),e(641,"t-custom-actions"),o(642,"br"),t()()(),i(643,"td",23)(644,"code",40),e(645,"Array<PoDropdownAction>"),t()(),i(646,"td",25),e(647,"-"),t(),i(648,"td",26)(649,"em")(650,"strong"),e(651,"(opcional)"),t()(),i(652,"p"),e(653,"Permite adicionar a\xE7\xF5es customizadas que implementam a interface "),i(654,"strong"),e(655,"PoDropdownAction"),t(),e(656,`.
Essas a\xE7\xF5es ser\xE3o exibidas no dropdown 'Mais a\xE7\xF5es' ao selecionar um item.
Requer que a propriedade `),i(657,"strong"),e(658,"t-selectable"),t(),e(659," esteja habilitada."),t(),i(660,"pre")(661,"code",28),e(662,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-custom-actions]="customActions"
 [t-selectable]="true"></thf-grid>`),t()(),i(663,"pre")(664,"code",31),e(665,`customActions: Array<PoDropdownAction> = [
 { label: 'Hist\xF3rico', action: this.myAction.bind(this) }];

myAction() {
 window.alert('voce clicou em hist\xF3rico!');
}`),t()()()(),i(666,"tr",19)(667,"td",20)(668,"div",32)(669,"span",33),e(670," (t-custom-filter)"),o(671,"br"),t()()(),i(672,"td",23)(673,"code",34),e(674,"EventEmitter"),t()(),i(675,"td",25),e(676,"-"),t(),i(677,"td",26)(678,"em")(679,"strong"),e(680,"(opcional)"),t()(),i(681,"p"),e(682,"Evento disparado ao clicar no menu Filtros."),t()()(),i(683,"tr",19)(684,"td",20)(685,"div",21)(686,"span",22),e(687,"t-custom-templates"),o(688,"br"),t()()(),i(689,"td",23)(690,"code",41),e(691,`{ [key: string]: TemplateRef<any>;
}`),t()(),i(692,"td",25),e(693,"-"),t(),i(694,"td",26)(695,"em")(696,"strong"),e(697,"(opcional)"),t()(),i(698,"p"),e(699,"Permite a cria\xE7\xE3o de templates customizados para a edi\xE7\xE3o flu\xEDda da grid, como por exemplo:"),t(),i(700,"pre")(701,"code",28),e(702,`// Exemplo de uso:
<thf-grid
 ...
[t-custom-templates]="{ name: customTemplate }"
></thf-grid>
<ng-template #customTemplate let-formControl="formControl">
  <po-input [formControl]="formControl" p-placeholder="CPF" [p-required]="true"></po-input>
</ng-template>`),t()(),i(703,"p"),e(704,"\xC9 obrigat\xF3rio passar o formControl como par\xE2metro do template."),t(),i(705,"p"),e(706,`Os eventos de validate, keydown, blur, additional-help, onChangeModel e change n\xE3o s\xE3o emitidos com o uso de templates customizados,
sendo necess\xE1rio o controle desses eventos dentro do pr\xF3prio componente.`),t(),i(707,"p"),e(708,`Caso utilize a propriedade controlValueWithLabel,
\xE9 necess\xE1rio continuar passando no editProperties em columns, em conjunto com fieldLabel, fieldValue e options caso esteja utilizando.`),t(),i(709,"p"),e(710,"Caso o template n\xE3o seja passado, o componente ser\xE1 renderizado de forma padr\xE3o."),t(),i(711,"p"),e(712,"Caso esteja utilizando o componente po-decimal e esteja configurando a propriedade "),i(713,"code"),e(714,"p-decimals-length"),t(),e(715,`, \xE9 necess\xE1rio continuar
enviando via columns em editProperties.`),t(),i(716,"p"),e(717,'Para que o grid exiba a label "(Obrigat\xF3rio)" na coluna, defina em '),i(718,"code"),e(719,"editProperties"),t(),e(720," a propriedade "),i(721,"code"),e(722,"required"),t(),e(723," como "),i(724,"code"),e(725,"true"),t(),e(726,"."),t(),i(727,"blockquote")(728,"p"),e(729,"Para mais detalhes, consulte o exemplo na aba Overview - Edi\xE7\xE3o flu\xEDda."),t()(),i(730,"p"),e(731,"Ao utilizar templates customizados na edi\xE7\xE3o flu\xEDda, \xE9 obrigat\xF3rio definir "),i(732,"code"),e(733,'p-append-in-body="true"'),t(),e(734,` para componentes que possuam listas flutuantes, popovers ou tooltips, bem como para componentes que utilizem po-helper.
`),i(735,"strong"),e(736,"Componentes impactados:"),t()(),i(737,"ul")(738,"li"),e(739,"po-checkbox"),t(),i(740,"li"),e(741,"po-combo"),t(),i(742,"li"),e(743,"po-datepicker"),t(),i(744,"li"),e(745,"po-datepicker-range"),t(),i(746,"li"),e(747,"po-decimal"),t(),i(748,"li"),e(749,"po-input"),t(),i(750,"li"),e(751,"po-login"),t(),i(752,"li"),e(753,"po-lookup"),t(),i(754,"li"),e(755,"po-multiselect"),t(),i(756,"li"),e(757,"po-number"),t(),i(758,"li"),e(759,"po-password"),t(),i(760,"li"),e(761,"po-radio-group"),t(),i(762,"li"),e(763,"po-rich-text"),t(),i(764,"li"),e(765,"po-select"),t(),i(766,"li"),e(767,"po-switch"),t(),i(768,"li"),e(769,"po-textarea"),t(),i(770,"li"),e(771,"po-upload"),t(),i(772,"li"),e(773,"thf-lookup"),t()(),i(774,"blockquote")(775,"p"),e(776,"Para mais informa\xE7\xF5es sobre a propriedade p-append-in-body, consulte a documenta\xE7\xE3o do componente correspondente."),t()()()(),i(777,"tr",19)(778,"td",20)(779,"div",32)(780,"span",33),e(781," (t-delete-item)"),o(782,"br"),t()()(),i(783,"td",23)(784,"code",34),e(785,"EventEmitter"),t()(),i(786,"td",25),e(787,"-"),t(),i(788,"td",26)(789,"em")(790,"strong"),e(791,"(opcional)"),t()(),i(792,"p"),e(793,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(794,"tr",19)(795,"td",20)(796,"div",21)(797,"span",22),e(798,"t-disabled-include-button"),o(799,"br"),t()()(),i(800,"td",23)(801,"code",24),e(802,"boolean"),t()(),i(803,"td",25)(804,"p")(805,"code"),e(806,"false"),t()()(),i(807,"td",26)(808,"em")(809,"strong"),e(810,"(opcional)"),t()(),i(811,"p"),e(812,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(813,"tr",19)(814,"td",20)(815,"div",21)(816,"span",22),e(817,"t-draggable"),o(818,"br"),t()()(),i(819,"td",23)(820,"code",24),e(821,"boolean"),t()(),i(822,"td",25)(823,"p")(824,"code"),e(825,"false"),t()()(),i(826,"td",26)(827,"em")(828,"strong"),e(829,"(opcional)"),t()(),i(830,"p"),e(831,"Habilita o Drag and Drop nas colunas."),t()()(),i(832,"tr",19)(833,"td",20)(834,"div",21)(835,"span",22),e(836,"t-edit-properties"),o(837,"br"),t()()(),i(838,"td",23)(839,"code",42),e(840,"ThfGridEditProperties"),t()(),i(841,"td",25),e(842,"-"),t(),i(843,"td",26)(844,"em")(845,"strong"),e(846,"(opcional)"),t()(),i(847,"p"),e(848,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(849,"strong"),e(850,"ThfGridEditProperties"),t(),e(851,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(852,"blockquote")(853,"p"),e(854,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(855,"tr",19)(856,"td",20)(857,"div",32)(858,"span",33),e(859," (t-change-page-size)"),o(860,"br"),t()()(),i(861,"td",23)(862,"code",34),e(863,"EventEmitter"),t()(),i(864,"td",25),e(865,"-"),t(),i(866,"td",26)(867,"em")(868,"strong"),e(869,"(opcional)"),t()(),i(870,"p"),e(871,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(872,"tr",19)(873,"td",20)(874,"div",21)(875,"span",22),e(876,"t-fields"),o(877,"br"),t()()(),i(878,"td",23)(879,"code",43),e(880,"Array<PoPageDynamicSearchFilters>"),t()(),i(881,"td",25),e(882,"-"),t(),i(883,"td",26)(884,"em")(885,"strong"),e(886,"(opcional)"),t()(),i(887,"p"),e(888,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(889,"strong"),e(890,"PoPageDynamicSearchFilters"),t(),e(891,"."),t(),i(892,"pre")(893,"code",28),e(894,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>`),t()(),i(895,"pre")(896,"code",31),e(897,"customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]"),t()()()(),i(898,"tr",19)(899,"td",20)(900,"div",21)(901,"span",22),e(902,"t-filter-column-properties"),o(903,"br"),t()()(),i(904,"td",23)(905,"code",44),e(906,"Array<ThfFilterByColumn>"),t()(),i(907,"td",25),e(908,"-"),t(),i(909,"td",26)(910,"em")(911,"strong"),e(912,"(opcional)"),t()(),i(913,"p"),e(914,"Permite definir filtros por coluna logo na inicializa\xE7\xE3o, deixando o grid j\xE1 filtrado ao ser carregado."),t(),i(915,"pre")(916,"code",31),e(917,`filterColumnProperties = [
  {
    property: 'name',
    operator1: 'contains',
    value1: 'Ana'
  },
  {
    property: 'age',
    operator1: 'gte',
    value1: 18
  }
];`),t()()()(),i(918,"tr",19)(919,"td",20)(920,"div",21)(921,"span",22),e(922,"t-filter-input-mode"),o(923,"br"),t()()(),i(924,"td",23)(925,"code",45),e(926,"'basic' "),t(),i(927,"code",46),e(928," 'service'"),t()(),i(929,"td",25)(930,"p")(931,"code"),e(932,"basic"),t()()(),i(933,"td",26)(934,"em")(935,"strong"),e(936,"(opcional)"),t()(),i(937,"p"),e(938,"Define o modo do filtro para o input de pesquisa."),t()()(),i(939,"tr",19)(940,"td",20)(941,"div",21)(942,"span",22),e(943,"t-grid-row-actions"),o(944,"br"),t()()(),i(945,"td",23)(946,"code",47),e(947,"ThfGridRowActions"),t()(),i(948,"td",25),e(949,"-"),t(),i(950,"td",26)(951,"em")(952,"strong"),e(953,"(opcional)"),t()(),i(954,"p"),e(955,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(956,"strong"),e(957,"ThfGridRowActions"),t(),e(958,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(959,"blockquote")(960,"p"),e(961,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(962,"tr",19)(963,"td",20)(964,"div",21)(965,"span",22),e(966," t-group"),o(967,"br"),t()()(),i(968,"td",23)(969,"code",48),e(970,"Array<string>"),t()(),i(971,"td",25),e(972,"-"),t(),i(973,"td",26)(974,"em")(975,"strong"),e(976,"(opcional)"),t()(),i(977,"p"),e(978,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(979,"strong"),e(980,"t-groupable"),t(),e(981," esteja habilitada."),t()()(),i(982,"tr",19)(983,"td",20)(984,"div",21)(985,"span",22),e(986,"t-groupable"),o(987,"br"),t()()(),i(988,"td",23)(989,"code",24),e(990,"boolean "),t(),i(991,"code",49),e(992," GroupableSettings"),t()(),i(993,"td",25)(994,"p")(995,"code"),e(996,"false"),t()()(),i(997,"td",26)(998,"em")(999,"strong"),e(1e3,"(opcional)"),t()(),i(1001,"p"),e(1002,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1003,"tr",19)(1004,"td",20)(1005,"div",21)(1006,"span",22),e(1007,"t-header-template"),o(1008,"br"),t()()(),i(1009,"td",23)(1010,"code",50),e(1011,"TemplateRef<void>"),t()(),i(1012,"td",25),e(1013,"-"),t(),i(1014,"td",26)(1015,"em")(1016,"strong"),e(1017,"(opcional)"),t()(),i(1018,"p"),e(1019,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(1020,"pre")(1021,"code",28),e(1022,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-header-template]="template"
></thf-grid>

<ng-template #template>
 <div style="display: flex; gap: 8px; align-items: center;">
   <po-tag [p-type]="tagTypeDanger" p-value="Remover todos"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="Brasil"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="College"> </po-tag>
 </div>
</ng-template>`),t()()()(),i(1023,"tr",19)(1024,"td",20)(1025,"div",21)(1026,"span",22),e(1027,"t-headline-fixed"),o(1028,"br"),t()()(),i(1029,"td",23)(1030,"code",24),e(1031,"boolean"),t()(),i(1032,"td",25)(1033,"p")(1034,"code"),e(1035,"false"),t()()(),i(1036,"td",26)(1037,"em")(1038,"strong"),e(1039,"(opcional)"),t()(),i(1040,"p"),e(1041,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(1042,"strong"),e(1043,"t-height"),t(),e(1044,") n\xE3o esteja definida."),t()()(),i(1045,"tr",19)(1046,"td",20)(1047,"div",21)(1048,"span",22),e(1049,"t-height"),o(1050,"br"),t()()(),i(1051,"td",23)(1052,"code",51),e(1053,"number "),t(),i(1054,"code",38),e(1055," string "),t(),i(1056,"code",52),e(1057," null"),t()(),i(1058,"td",25)(1059,"p"),e(1060,"100%"),t()(),i(1061,"td",26)(1062,"em")(1063,"strong"),e(1064,"(opcional)"),t()(),i(1065,"p"),e(1066,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1067,"code"),e(1068,'"<n\xFAmero>%"'),t(),e(1069,")."),t(),i(1070,"ul")(1071,"li"),e(1072,"Se "),i(1073,"strong"),e(1074,"n\xE3o informado"),t(),e(1075,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(1076,"li"),e(1077,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(1078,"strong"),e(1079,"100%"),t(),e(1080," como padr\xE3o."),t(),i(1081,"li"),e(1082,"Se "),i(1083,"code"),e(1084,"t-height"),t(),e(1085," for menor que "),i(1086,"code"),e(1087,"t-min-height"),t(),e(1088,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(1089,"li"),e(1090,"Se "),i(1091,"code"),e(1092,"t-height"),t(),e(1093," for maior que "),i(1094,"code"),e(1095,"t-max-height"),t(),e(1096,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(1097,"blockquote")(1098,"p")(1099,"strong"),e(1100,"Observa\xE7\xE3o:"),t(),e(1101," Quando definido, o "),i(1102,"strong"),e(1103,"virtual scroll"),t(),e(1104," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(1105,"strong"),e(1106,"t-virtual-scroll"),t(),e(1107," para mais detalhes."),t()()()(),i(1108,"tr",19)(1109,"td",20)(1110,"div",21)(1111,"span",22),e(1112,"t-hide-action-fixed-columns"),o(1113,"br"),t()()(),i(1114,"td",23)(1115,"code",24),e(1116,"boolean"),t()(),i(1117,"td",25)(1118,"p")(1119,"code"),e(1120,"false"),t()()(),i(1121,"td",26)(1122,"em")(1123,"strong"),e(1124,"(opcional)"),t()(),i(1125,"p"),e(1126,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(1127,"tr",19)(1128,"td",20)(1129,"div",21)(1130,"span",22),e(1131," t-hide-batch-actions"),o(1132,"br"),t()()(),i(1133,"td",23)(1134,"code",24),e(1135,"boolean"),t()(),i(1136,"td",25)(1137,"p")(1138,"code"),e(1139,"false"),t()()(),i(1140,"td",26)(1141,"em")(1142,"strong"),e(1143,"(opcional)"),t()(),i(1144,"p"),e(1145,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(1146,"tr",19)(1147,"td",20)(1148,"div",21)(1149,"span",22),e(1150,"t-hide-columns-manager"),o(1151,"br"),t()()(),i(1152,"td",23)(1153,"code",24),e(1154,"boolean"),t()(),i(1155,"td",25)(1156,"p")(1157,"code"),e(1158,"false"),t()()(),i(1159,"td",26)(1160,"em")(1161,"strong"),e(1162,"(opcional)"),t()(),i(1163,"p"),e(1164,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(1165,"tr",19)(1166,"td",20)(1167,"div",21)(1168,"span",22),e(1169,"t-hide-select-all"),o(1170,"br"),t()()(),i(1171,"td",23)(1172,"code",24),e(1173,"boolean"),t()(),i(1174,"td",25)(1175,"p")(1176,"code"),e(1177,"false"),t()()(),i(1178,"td",26)(1179,"em")(1180,"strong"),e(1181,"(opcional)"),t()(),i(1182,"p"),e(1183,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1184,"tr",19)(1185,"td",20)(1186,"div",21)(1187,"span",22),e(1188,"t-hide-table-search"),o(1189,"br"),t()()(),i(1190,"td",23)(1191,"code",24),e(1192,"boolean"),t()(),i(1193,"td",25)(1194,"p")(1195,"code"),e(1196,"false"),t()()(),i(1197,"td",26)(1198,"em")(1199,"strong"),e(1200,"(opcional)"),t()(),i(1201,"p"),e(1202,"Permite ocultar o campo de pesquisa."),t()()(),i(1203,"tr",19)(1204,"td",20)(1205,"div",21)(1206,"span",22),e(1207," t-loading"),o(1208,"br"),t()()(),i(1209,"td",23)(1210,"code",24),e(1211,"boolean"),t()(),i(1212,"td",25)(1213,"p")(1214,"code"),e(1215,"false"),t()()(),i(1216,"td",26)(1217,"em")(1218,"strong"),e(1219,"(opcional)"),t()(),i(1220,"p"),e(1221,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(1222,"tr",19)(1223,"td",20)(1224,"div",21)(1225,"span",22),e(1226,"t-items"),o(1227,"br"),t()()(),i(1228,"td",23)(1229,"code",53),e(1230,"Array<any>"),t()(),i(1231,"td",25),e(1232,"-"),t(),i(1233,"td",26)(1234,"em")(1235,"strong"),e(1236,"(opcional)"),t()(),i(1237,"p"),e(1238,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(1239,"pre")(1240,"code",28),e(1241,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>`),t()()()(),i(1242,"tr",19)(1243,"td",20)(1244,"div",32)(1245,"span",33),e(1246," (t-items-after-get)"),o(1247,"br"),t()()(),i(1248,"td",23)(1249,"code",34),e(1250,"EventEmitter"),t()(),i(1251,"td",25),e(1252,"-"),t(),i(1253,"td",26)(1254,"em")(1255,"strong"),e(1256,"(opcional)"),t()(),i(1257,"p"),e(1258,`Evento disparado ap\xF3s finaliza\xE7\xE3o das requisi\xE7\xF5es de GET.
Dispara no GET inicial caso esteja utilizando `),i(1259,"strong"),e(1260,"t-service-api"),t(),e(1261,`.
Dispara tamb\xE9m no GET de filtros caso esteja utilizando a propriedade `),i(1262,"strong"),e(1263,"t-actions-filter"),t(),e(1264,`
ou no GET do input de pesquisa quando a propriedade `),i(1265,"strong"),e(1266,"t-filter-input-mode"),t(),e(1267," estiver como "),i(1268,"code"),e(1269,"service"),t(),e(1270,`.
Retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize.`),t()()(),i(1271,"tr",19)(1272,"td",20)(1273,"div",21)(1274,"span",22),e(1275,"t-literals"),o(1276,"br"),t()()(),i(1277,"td",23)(1278,"code",54),e(1279,"ThfGridLiterals"),t()(),i(1280,"td",25),e(1281,"-"),t(),i(1282,"td",26)(1283,"em")(1284,"strong"),e(1285,"(opcional)"),t()(),i(1286,"p"),e(1287,"Permite definir literais personalizados para o componente, conforme a interface "),i(1288,"strong"),e(1289,"ThfGridLiterals"),t(),e(1290,"."),t(),i(1291,"pre")(1292,"code",28),e(1293,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>`),t()(),i(1294,"pre")(1295,"code",31),e(1296,"customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };"),t()()()(),i(1297,"tr",19)(1298,"td",20)(1299,"div",21)(1300,"span",22),e(1301,"t-max-columns"),o(1302,"br"),t()()(),i(1303,"td",23)(1304,"code",51),e(1305,"number"),t()(),i(1306,"td",25),e(1307,"-"),t(),i(1308,"td",26)(1309,"em")(1310,"strong"),e(1311,"(opcional)"),t()(),i(1312,"p"),e(1313,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1314,"tr",19)(1315,"td",20)(1316,"div",21)(1317,"span",22),e(1318," t-max-height"),o(1319,"br"),t()()(),i(1320,"td",23)(1321,"code",51),e(1322,"number "),t(),i(1323,"code",38),e(1324," string "),t(),i(1325,"code",52),e(1326," null"),t()(),i(1327,"td",25),e(1328,"-"),t(),i(1329,"td",26)(1330,"em")(1331,"strong"),e(1332,"(opcional)"),t()(),i(1333,"p"),e(1334,"Define a "),i(1335,"strong"),e(1336,"altura m\xE1xima"),t(),e(1337," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1338,"code"),e(1339,'"<n\xFAmero>%"'),t(),e(1340,")."),t(),i(1341,"ul")(1342,"li"),e(1343,"Se "),i(1344,"strong"),e(1345,"n\xE3o informado"),t(),e(1346,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1347,"code"),e(1348,"t-height"),t(),e(1349,", se existir."),t(),i(1350,"li"),e(1351,"Caso "),i(1352,"code"),e(1353,"t-height"),t(),e(1354," seja "),i(1355,"strong"),e(1356,"maior"),t(),e(1357," que "),i(1358,"code"),e(1359,"t-max-height"),t(),e(1360,", o grid usar\xE1 "),i(1361,"code"),e(1362,"t-max-height"),t(),e(1363," como limite superior."),t(),i(1364,"li"),e(1365,"Caso o valor passado seja inv\xE1lido, "),i(1366,"strong"),e(1367,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1368,"."),t()()()(),i(1369,"tr",19)(1370,"td",20)(1371,"div",21)(1372,"span",22),e(1373,"t-max-resizable-width"),o(1374,"br"),t()()(),i(1375,"td",23)(1376,"code",51),e(1377,"number"),t()(),i(1378,"td",25),e(1379,"-"),t(),i(1380,"td",26)(1381,"em")(1382,"strong"),e(1383,"(opcional)"),t()(),i(1384,"p"),e(1385,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1386,"strong"),e(1387,"t-resizable"),t(),e(1388," esteja habilitada."),t()()(),i(1389,"tr",19)(1390,"td",20)(1391,"div",21)(1392,"span",22),e(1393," t-min-height"),o(1394,"br"),t()()(),i(1395,"td",23)(1396,"code",51),e(1397,"number "),t(),i(1398,"code",38),e(1399," string "),t(),i(1400,"code",52),e(1401," null"),t()(),i(1402,"td",25),e(1403,"-"),t(),i(1404,"td",26)(1405,"em")(1406,"strong"),e(1407,"(opcional)"),t()(),i(1408,"p"),e(1409,"Define a "),i(1410,"strong"),e(1411,"altura m\xEDnima"),t(),e(1412," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1413,"code"),e(1414,'"<n\xFAmero>%"'),t(),e(1415,")."),t(),i(1416,"ul")(1417,"li"),e(1418,"Se "),i(1419,"strong"),e(1420,"n\xE3o informado"),t(),e(1421,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1422,"code"),e(1423,"t-height"),t(),e(1424,", se existir."),t(),i(1425,"li"),e(1426,"Caso "),i(1427,"code"),e(1428,"t-height"),t(),e(1429," seja "),i(1430,"strong"),e(1431,"menor"),t(),e(1432," que "),i(1433,"code"),e(1434,"t-min-height"),t(),e(1435,", o grid usar\xE1 "),i(1436,"code"),e(1437,"t-min-height"),t(),e(1438," como limite inferior."),t(),i(1439,"li"),e(1440,"Caso o valor passado seja inv\xE1lido, "),i(1441,"strong"),e(1442,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1443,"."),t()()()(),i(1444,"tr",19)(1445,"td",20)(1446,"div",21)(1447,"span",22),e(1448,"t-min-resizable-width"),o(1449,"br"),t()()(),i(1450,"td",23)(1451,"code",51),e(1452,"number"),t()(),i(1453,"td",25)(1454,"p")(1455,"code"),e(1456,"10"),t()()(),i(1457,"td",26)(1458,"em")(1459,"strong"),e(1460,"(opcional)"),t()(),i(1461,"p"),e(1462,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1463,"strong"),e(1464,"t-resizable"),t(),e(1465," esteja habilitada."),t()()(),i(1466,"tr",19)(1467,"td",20)(1468,"div",32)(1469,"span",33),e(1470," (t-change-group)"),o(1471,"br"),t()()(),i(1472,"td",23)(1473,"code",34),e(1474,"EventEmitter"),t()(),i(1475,"td",25),e(1476,"-"),t(),i(1477,"td",26)(1478,"em")(1479,"strong"),e(1480,"(opcional)"),t()(),i(1481,"p"),e(1482,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1483,"tr",19)(1484,"td",20)(1485,"div",21)(1486,"span",22),e(1487," t-load"),o(1488,"br"),t()()(),i(1489,"td",23)(1490,"code",38),e(1491,"string "),t(),i(1492,"code",55),e(1493," (() => ThfGridOptions)"),t()(),i(1494,"td",25),e(1495,"-"),t(),i(1496,"td",26)(1497,"em")(1498,"strong"),e(1499,"(opcional)"),t()(),i(1500,"p"),e(1501,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1502,"strong"),e(1503,"ThfGridOptions"),t(),e(1504,"."),t()()(),i(1505,"tr",19)(1506,"td",20)(1507,"div",21)(1508,"span",22),e(1509,"t-options-paging"),o(1510,"br"),t()()(),i(1511,"td",23)(1512,"code",56),e(1513,"Array<ThfGridOptionPaging>"),t()(),i(1514,"td",25),e(1515,"-"),t(),i(1516,"td",26)(1517,"em")(1518,"strong"),e(1519,"(opcional)"),t()(),i(1520,"p"),e(1521,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1522,"strong"),e(1523,"ThfGridOptionPaging"),t(),e(1524,`.
Requer que a propriedade `),i(1525,"strong"),e(1526,"t-pageable"),t(),e(1527," esteja habilitada."),t()()(),i(1528,"tr",19)(1529,"td",20)(1530,"div",32)(1531,"span",33),e(1532," (t-change-order-column)"),o(1533,"br"),t()()(),i(1534,"td",23)(1535,"code",34),e(1536,"EventEmitter"),t()(),i(1537,"td",25),e(1538,"-"),t(),i(1539,"td",26)(1540,"em")(1541,"strong"),e(1542,"(opcional)"),t()(),i(1543,"p"),e(1544,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1545,"tr",19)(1546,"td",20)(1547,"div",21)(1548,"span",22),e(1549,"t-page-size"),o(1550,"br"),t()()(),i(1551,"td",23)(1552,"code",51),e(1553,"number"),t()(),i(1554,"td",25)(1555,"p")(1556,"code"),e(1557,"10"),t()()(),i(1558,"td",26)(1559,"em")(1560,"strong"),e(1561,"(opcional)"),t()(),i(1562,"p"),e(1563,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1564,"strong"),e(1565,"t-pageable"),t(),e(1566," esteja habilitada."),t()()(),i(1567,"tr",19)(1568,"td",20)(1569,"div",21)(1570,"span",22),e(1571,"t-page-size-virtual"),o(1572,"br"),t()()(),i(1573,"td",23)(1574,"code",51),e(1575,"number"),t()(),i(1576,"td",25)(1577,"p")(1578,"code"),e(1579,"60"),t()()(),i(1580,"td",26)(1581,"em")(1582,"strong"),e(1583,"(opcional)"),t()(),i(1584,"p"),e(1585,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1586,"tr",19)(1587,"td",20)(1588,"div",21)(1589,"span",22),e(1590,"t-pageable"),o(1591,"br"),t()()(),i(1592,"td",23)(1593,"code",24),e(1594,"boolean"),t()(),i(1595,"td",25)(1596,"p")(1597,"code"),e(1598,"false"),t()()(),i(1599,"td",26)(1600,"em")(1601,"strong"),e(1602,"(opcional)"),t()(),i(1603,"p"),e(1604,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1605,"tr",19)(1606,"td",20)(1607,"div",21)(1608,"span",22),e(1609,"t-param-delete-api"),o(1610,"br"),t()()(),i(1611,"td",23)(1612,"code",38),e(1613,"string"),t()(),i(1614,"td",25),e(1615,"-"),t(),i(1616,"td",26)(1617,"em")(1618,"strong"),e(1619,"(opcional)"),t()(),i(1620,"p"),e(1621,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1622,"code"),e(1623,"t-allow-batch-delete"),t(),e(1624," seja definida)."),t(),i(1625,"p"),e(1626,"Quando "),i(1627,"strong"),e(1628,"t-service-delete-api"),t(),e(1629," estiver configurado e o valor de "),i(1630,"strong"),e(1631,"t-param-delete-api"),t(),e(1632,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1633,"code"),e(1634,"key"),t(),e(1635," (definido ao usar "),i(1636,"strong"),e(1637,"ThfGridColumn"),t(),e(1638,") ou, na aus\xEAncia, "),i(1639,"code"),e(1640,"id"),t(),e(1641,`. Caso
`),i(1642,"strong"),e(1643,"t-service-delete-api"),t(),e(1644," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1645,"strong"),e(1646,"t-service-api"),t(),e(1647,"."),t(),i(1648,"blockquote")(1649,"p"),e(1650,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1651,"pre")(1652,"code"),e(1653,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com`),t()(),i(1654,"p"),e(1655,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1656,"pre")(1657,"code"),e(1658,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com`),t()(),i(1659,"p"),e(1660,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1661,"pre")(1662,"code"),e(1663,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1`),t()()(),i(1664,"blockquote")(1665,"p"),e(1666,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1667,"code"),e(1668,"paramDelete"),t(),e(1669,", conforme o exemplo abaixo:"),t(),i(1670,"pre")(1671,"code",57),e(1672,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}`),t()()()()(),i(1673,"tr",19)(1674,"td",20)(1675,"div",21)(1676,"span",22),e(1677,"t-resizable"),o(1678,"br"),t()()(),i(1679,"td",23)(1680,"code",24),e(1681,"boolean"),t()(),i(1682,"td",25)(1683,"p")(1684,"code"),e(1685,"false"),t()()(),i(1686,"td",26)(1687,"em")(1688,"strong"),e(1689,"(opcional)"),t()(),i(1690,"p"),e(1691,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1692,"tr",19)(1693,"td",20)(1694,"div",21)(1695,"span",22),e(1696,"t-row-height"),o(1697,"br"),t()()(),i(1698,"td",23)(1699,"code",51),e(1700,"number"),t()(),i(1701,"td",25),e(1702,"-"),t(),i(1703,"td",26)(1704,"em")(1705,"strong"),e(1706,"(opcional)"),t()(),i(1707,"p"),e(1708,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1709,"code"),e(1710,"columnTemplate"),t(),e(1711," e "),i(1712,"code"),e(1713,"cellTemplate"),t(),e(1714,")."),t()()(),i(1715,"tr",19)(1716,"td",20)(1717,"div",32)(1718,"span",33),e(1719," (t-rows-selected)"),o(1720,"br"),t()()(),i(1721,"td",23)(1722,"code",34),e(1723,"EventEmitter"),t()(),i(1724,"td",25),e(1725,"-"),t(),i(1726,"td",26)(1727,"p"),e(1728,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1729,"tr",19)(1730,"td",20)(1731,"div",21)(1732,"span",22),e(1733,"t-selectable"),o(1734,"br"),t()()(),i(1735,"td",23)(1736,"code",24),e(1737,"boolean"),t()(),i(1738,"td",25)(1739,"p")(1740,"code"),e(1741,"false"),t()()(),i(1742,"td",26)(1743,"em")(1744,"strong"),e(1745,"(opcional)"),t()(),i(1746,"p"),e(1747,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1748,"tr",19)(1749,"td",20)(1750,"div",21)(1751,"span",22),e(1752,"t-selectable-entire-line"),o(1753,"br"),t()()(),i(1754,"td",23)(1755,"code",24),e(1756,"boolean"),t()(),i(1757,"td",25)(1758,"p")(1759,"code"),e(1760,"true"),t()()(),i(1761,"td",26)(1762,"em")(1763,"strong"),e(1764,"(opcional)"),t()(),i(1765,"p"),e(1766,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1767,"strong"),e(1768,"t-selectable"),t(),e(1769," esteja habilitada."),t()()(),i(1770,"tr",19)(1771,"td",20)(1772,"div",21)(1773,"span",22),e(1774,"t-selectable-removed"),o(1775,"br"),t()()(),i(1776,"td",23)(1777,"code",24),e(1778,"boolean"),t()(),i(1779,"td",25)(1780,"p")(1781,"code"),e(1782,"false"),t()()(),i(1783,"td",26)(1784,"em")(1785,"strong"),e(1786,"(opcional)"),t()(),i(1787,"p"),e(1788,"Controla se os itens exibidos quando o filtro de estado estiver em 'removed' poder\xE3o ser selecionados."),t()()(),i(1789,"tr",19)(1790,"td",20)(1791,"div",32)(1792,"span",33),e(1793," (t-selected)"),o(1794,"br"),t()()(),i(1795,"td",23)(1796,"code",34),e(1797,"EventEmitter"),t()(),i(1798,"td",25),e(1799,"-"),t(),i(1800,"td",26)(1801,"em")(1802,"strong"),e(1803,"(opcional)"),t()(),i(1804,"p"),e(1805,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1806,"tr",19)(1807,"td",20)(1808,"div",32)(1809,"span",33),e(1810," (t-all-selected)"),o(1811,"br"),t()()(),i(1812,"td",23)(1813,"code",34),e(1814,"EventEmitter"),t()(),i(1815,"td",25),e(1816,"-"),t(),i(1817,"td",26)(1818,"em")(1819,"strong"),e(1820,"(opcional)"),t()(),i(1821,"p"),e(1822,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1823,"tr",19)(1824,"td",20)(1825,"div",21)(1826,"span",22),e(1827,"t-service-delete-api"),o(1828,"br"),t()()(),i(1829,"td",23)(1830,"code",38),e(1831,"string "),t(),i(1832,"code",58),e(1833," ThfGridDeleteService"),t()(),i(1834,"td",25),e(1835,"-"),t(),i(1836,"td",26)(1837,"em")(1838,"strong"),e(1839,"(opcional)"),t()(),i(1840,"p"),e(1841,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1842,"strong"),e(1843,"ThfGridDeleteService"),t(),e(1844," ou uma URL."),t(),i(1845,"p"),e(1846,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1847,"strong"),e(1848,"t-param-delete-api"),t(),e(1849,". Se configurado e "),i(1850,"strong"),e(1851,"t-param-delete-api"),t(),e(1852," n\xE3o for informado, ser\xE1 enviado "),i(1853,"code"),e(1854,"key"),t(),e(1855,`
(definido ao usar `),i(1856,"strong"),e(1857,"ThfGridColumn"),t(),e(1858,") ou, na aus\xEAncia, "),i(1859,"code"),e(1860,"id"),t(),e(1861,"."),t(),i(1862,"p"),e(1863,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1864,"strong"),e(1865,"t-allow-batch-delete"),t(),e(1866,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1867,"code"),e(1868,"deleteBatchItems"),t(),e(1869,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1870,"blockquote")(1871,"p"),e(1872,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1873,"a",59),e(1874,"API do PO UI"),t()()(),i(1875,"blockquote")(1876,"p"),e(1877,"Caso utilize um servi\xE7o "),i(1878,"strong"),e(1879,"ThfGridDeleteService"),t(),e(1880,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1881,"tr",19)(1882,"td",20)(1883,"div",21)(1884,"span",22),e(1885," t-service-api"),o(1886,"br"),t()()(),i(1887,"td",23)(1888,"code",38),e(1889,"string"),t()(),i(1890,"td",25),e(1891,"-"),t(),i(1892,"td",26)(1893,"em")(1894,"strong"),e(1895,"(opcional)"),t()(),i(1896,"p"),e(1897,"Define a rota da "),i(1898,"code"),e(1899,"API"),t(),e(1900,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1901,"code"),e(1902,"API"),t(),e(1903,` esteja preparada para receber uma ou
mais `),i(1904,"code"),e(1905,"keys"),t(),e(1906," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1907,"code"),e(1908,"keys"),t(),e(1909,`,
que implementa a interface `),i(1910,"strong"),e(1911,"ThfGridColumn"),t(),e(1912,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1913,"code"),e(1914,"id"),t(),e(1915,"."),t()()(),i(1916,"tr",19)(1917,"td",20)(1918,"div",21)(1919,"span",22),e(1920,"t-show-densification-configuration"),o(1921,"br"),t()()(),i(1922,"td",23)(1923,"code",24),e(1924,"boolean"),t()(),i(1925,"td",25)(1926,"p")(1927,"code"),e(1928,"false"),t()()(),i(1929,"td",26)(1930,"em")(1931,"strong"),e(1932,"(opcional)"),t()(),i(1933,"p"),e(1934,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1935,"code"),e(1936,"Compacto"),t(),e(1937," e "),i(1938,"code"),e(1939,"Espa\xE7oso"),t(),e(1940,` no
Gerenciar Tabela.`),t(),i(1941,"blockquote")(1942,"p"),e(1943,"Em n\xEDvel de acessibilidade "),i(1944,"strong"),e(1945,"AA"),t(),e(1946,", a op\xE7\xE3o "),i(1947,"code"),e(1948,"Extra Compacto"),t(),e(1949," tamb\xE9m \xE9 exibida."),t()()()(),i(1950,"tr",19)(1951,"td",20)(1952,"div",21)(1953,"span",22),e(1954,"t-show-draggable-icon"),o(1955,"br"),t()()(),i(1956,"td",23)(1957,"code",24),e(1958,"boolean"),t()(),i(1959,"td",25)(1960,"p")(1961,"code"),e(1962,"false"),t()()(),i(1963,"td",26)(1964,"em")(1965,"strong"),e(1966,"(opcional)"),t()(),i(1967,"p"),e(1968,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1969,"tr",19)(1970,"td",20)(1971,"div",21)(1972,"span",22),e(1973," t-show-footer-aggregates"),o(1974,"br"),t()()(),i(1975,"td",23)(1976,"code",24),e(1977,"boolean"),t()(),i(1978,"td",25)(1979,"p")(1980,"code"),e(1981,"false"),t()()(),i(1982,"td",26)(1983,"em")(1984,"strong"),e(1985,"(opcional)"),t()(),i(1986,"p"),e(1987,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(1988,"code"),e(1989,"t-aggregates"),t(),e(1990,"."),t()()(),i(1991,"tr",19)(1992,"td",20)(1993,"div",32)(1994,"span",33),e(1995," (t-show-more)"),o(1996,"br"),t()()(),i(1997,"td",23)(1998,"code",34),e(1999,"EventEmitter"),t()(),i(2e3,"td",25),e(2001,"-"),t(),i(2002,"td",26)(2003,"em")(2004,"strong"),e(2005,"(opcional)"),t()(),i(2006,"p"),e(2007,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(2008,"strong"),e(2009,"ThfGridColumnSort"),t(),e(2010,`,
caso existam colunas ordenadas definidas.`),t(),i(2011,"blockquote")(2012,"p"),e(2013,"Caso "),i(2014,"strong"),e(2015,"t-items"),t(),e(2016," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(2017,"tr",19)(2018,"td",20)(2019,"div",21)(2020,"span",22),e(2021,"t-show-more-disabled"),o(2022,"br"),t()()(),i(2023,"td",23)(2024,"code",24),e(2025,"boolean"),t()(),i(2026,"td",25)(2027,"p")(2028,"code"),e(2029,"false"),t()()(),i(2030,"td",26)(2031,"em")(2032,"strong"),e(2033,"(opcional)"),t()(),i(2034,"p"),e(2035,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(2036,"tr",19)(2037,"td",20)(2038,"div",21)(2039,"span",22),e(2040,"t-show-more-visible"),o(2041,"br"),t()()(),i(2042,"td",23)(2043,"code",24),e(2044,"boolean"),t()(),i(2045,"td",25)(2046,"p")(2047,"code"),e(2048,"true"),t()()(),i(2049,"td",26)(2050,"em")(2051,"strong"),e(2052,"(opcional)"),t()(),i(2053,"p"),e(2054,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(2055,"strong"),e(2056,"t-pageable"),t(),e(2057," esteja habilitada, ou seja utilizado o evento "),i(2058,"code"),e(2059,"t-show-more"),t(),e(2060," em conjunto com a propriedade "),i(2061,"strong"),e(2062,"t-items"),t(),e(2063,"."),t(),i(2064,"blockquote")(2065,"p"),e(2066,"Caso seja utilizado em conjunto com "),i(2067,"strong"),e(2068,"t-show-more-disabled"),t(),e(2069,", a propriedade "),i(2070,"strong"),e(2071,"t-show-more-visible"),t(),e(2072," ter\xE1 prioridade."),t()()()(),i(2073,"tr",19)(2074,"td",20)(2075,"div",21)(2076,"span",22),e(2077,"t-single-select"),o(2078,"br"),t()()(),i(2079,"td",23)(2080,"code",24),e(2081,"boolean"),t()(),i(2082,"td",25)(2083,"p")(2084,"code"),e(2085,"false"),t()()(),i(2086,"td",26)(2087,"em")(2088,"strong"),e(2089,"(opcional)"),t()(),i(2090,"p"),e(2091,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(2092,"strong"),e(2093,"t-selectable"),t(),e(2094," esteja habilitada."),t()()(),i(2095,"tr",19)(2096,"td",20)(2097,"div",21)(2098,"span",22),e(2099,"t-sort"),o(2100,"br"),t()()(),i(2101,"td",23)(2102,"code",60),e(2103,"Array<ThfGridColumnSort>"),t()(),i(2104,"td",25),e(2105,"-"),t(),i(2106,"td",26)(2107,"em")(2108,"strong"),e(2109,"(opcional)"),t()(),i(2110,"p"),e(2111,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2112,"pre")(2113,"code",28),e(2114,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>`),t()(),i(2115,"pre")(2116,"code",31),e(2117,"sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(2118,"tr",19)(2119,"td",20)(2120,"div",32)(2121,"span",33),e(2122," (t-change-sort-column)"),o(2123,"br"),t()()(),i(2124,"td",23)(2125,"code",34),e(2126,"EventEmitter"),t()(),i(2127,"td",25),e(2128,"-"),t(),i(2129,"td",26)(2130,"em")(2131,"strong"),e(2132,"(opcional)"),t()(),i(2133,"p"),e(2134,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(2135,"strong"),e(2136,"ThfGridColumnSort"),t(),e(2137," com a regra de sortable e a coluna aplicada."),t()()(),i(2138,"tr",19)(2139,"td",20)(2140,"div",21)(2141,"span",22),e(2142,"t-sortable"),o(2143,"br"),t()()(),i(2144,"td",23)(2145,"code",24),e(2146,"boolean"),t()(),i(2147,"td",25)(2148,"p")(2149,"code"),e(2150,"true"),t()()(),i(2151,"td",26)(2152,"em")(2153,"strong"),e(2154,"(opcional)"),t()(),i(2155,"p"),e(2156,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2157,"tr",19)(2158,"td",20)(2159,"div",21)(2160,"span",22),e(2161,"t-spacing"),o(2162,"br"),t()()(),i(2163,"td",23)(2164,"code",38),e(2165,"string"),t()(),i(2166,"td",25)(2167,"p")(2168,"code"),e(2169,"medium"),t()()(),i(2170,"td",26)(2171,"em")(2172,"strong"),e(2173,"(opcional)"),t()(),i(2174,"p"),e(2175,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2176,"strong"),e(2177,"ThfColumnSpacing"),t(),e(2178,"."),t(),i(2179,"blockquote")(2180,"p"),e(2181,"Em n\xEDvel de acessibilidade "),i(2182,"strong"),e(2183,"AA"),t(),e(2184,", caso o valor de "),i(2185,"code"),e(2186,"t-spacing"),t(),e(2187," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(2188,"code"),e(2189,"extraSmall"),t(),e(2190,`
nos seguintes cen\xE1rios:`),t(),i(2191,"ul")(2192,"li"),e(2193,"Quando o valor de "),i(2194,"code"),e(2195,"t-components-size"),t(),e(2196," for "),i(2197,"code"),e(2198,"small"),t(),e(2199,";"),t(),i(2200,"li"),e(2201,"Quando o valor padr\xE3o dos componentes for configurado como "),i(2202,"code"),e(2203,"small"),t(),e(2204,` no
`),i(2205,"a",39),e(2206,"servi\xE7o de tema"),t(),e(2207,"."),t()()()()(),i(2208,"tr",19)(2209,"td",20)(2210,"div",21)(2211,"span",22),e(2212,"t-striped"),o(2213,"br"),t()()(),i(2214,"td",23)(2215,"code",24),e(2216,"boolean"),t()(),i(2217,"td",25)(2218,"p")(2219,"code"),e(2220,"true"),t()()(),i(2221,"td",26)(2222,"em")(2223,"strong"),e(2224,"(opcional)"),t()(),i(2225,"p"),e(2226,"Define o estilo listrado no grid (striped)."),t()()(),i(2227,"tr",19)(2228,"td",20)(2229,"div",21)(2230,"span",22),e(2231,"t-text-wrap"),o(2232,"br"),t()()(),i(2233,"td",23)(2234,"code",24),e(2235,"boolean"),t()(),i(2236,"td",25)(2237,"p")(2238,"code"),e(2239,"false"),t()()(),i(2240,"td",26)(2241,"em")(2242,"strong"),e(2243,"(opcional)"),t()(),i(2244,"p"),e(2245,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(2246,"blockquote")(2247,"p"),e(2248,"Propriedade incompat\xEDvel quando "),i(2249,"strong"),e(2250,"t-virtual-scroll"),t(),e(2251," est\xE1 habilitado."),t()()()(),i(2252,"tr",19)(2253,"td",20)(2254,"div",32)(2255,"span",33),e(2256," (t-unselected)"),o(2257,"br"),t()()(),i(2258,"td",23)(2259,"code",34),e(2260,"EventEmitter"),t()(),i(2261,"td",25),e(2262,"-"),t(),i(2263,"td",26)(2264,"em")(2265,"strong"),e(2266,"(opcional)"),t()(),i(2267,"p"),e(2268,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(2269,"tr",19)(2270,"td",20)(2271,"div",32)(2272,"span",33),e(2273," (t-all-unselected)"),o(2274,"br"),t()()(),i(2275,"td",23)(2276,"code",34),e(2277,"EventEmitter"),t()(),i(2278,"td",25),e(2279,"-"),t(),i(2280,"td",26)(2281,"em")(2282,"strong"),e(2283,"(opcional)"),t()(),i(2284,"p"),e(2285,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(2286,"tr",19)(2287,"td",20)(2288,"div",21)(2289,"span",22),e(2290,"t-virtual-columns"),o(2291,"br"),t()()(),i(2292,"td",23)(2293,"code",24),e(2294,"boolean"),t()(),i(2295,"td",25)(2296,"p")(2297,"code"),e(2298,"false"),t()()(),i(2299,"td",26)(2300,"em")(2301,"strong"),e(2302,"(opcional)"),t()(),i(2303,"p"),e(2304,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(2305,"strong"),e(2306,"t-auto-size"),t(),e(2307," e m\xE9todo "),i(2308,"strong"),e(2309,"autoFitColumns()"),t(),e(2310,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(2311,"tr",19)(2312,"td",20)(2313,"div",21)(2314,"span",22),e(2315,"t-virtual-scroll"),o(2316,"br"),t()()(),i(2317,"td",23)(2318,"code",24),e(2319,"boolean"),t()(),i(2320,"td",25)(2321,"p")(2322,"code"),e(2323,"true"),t()()(),i(2324,"td",26)(2325,"em")(2326,"strong"),e(2327,"(opcional)"),t()(),i(2328,"p"),e(2329,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2330,"strong"),e(2331,"t-height"),t(),e(2332," esteja definida."),t(),i(2333,"blockquote")(2334,"p"),e(2335,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2336,"strong"),e(2337,"t-text-wrap"),t(),e(2338,", "),i(2339,"strong"),e(2340,"t-row-height"),t(),e(2341," e "),i(2342,"strong"),e(2343,"t-page-size-virtual"),t(),e(2344,"."),t()()()()()(),i(2345,"po-accordion-item",61)(2346,"table",62)(2347,"tr",19)(2348,"th",63)(2349,"div",21)(2350,"h4")(2351,"span",22),e(2352," autoFitColumns "),t()()()()(),i(2353,"tr",26)(2354,"td",26)(2355,"p"),e(2356,"Ajusta automaticamente a largura das colunas com base no conte\xFAdo atual das c\xE9lulas."),t(),i(2357,"p"),e(2358,`Este m\xE9todo calcula a largura ideal para cada coluna considerando o conte\xFAdo textual das c\xE9lulas vis\xEDveis,
cabe\xE7alhos das colunas e configura\xE7\xF5es de redimensionamento e tamanho fixo`),t(),i(2359,"p")(2360,"strong"),e(2361,"Exemplo de uso:"),t()(),i(2362,"pre")(2363,"code",31),e(2364,`// Ajusta colunas e mant\xE9m largura total da tabela
this.gridComponent.autoFitColumns(true);

// Ajusta colunas e permite redimensionamento fluido
this.gridComponent.autoFitColumns();`),t()(),i(2365,"blockquote")(2366,"p"),e(2367,"Este m\xE9todo \xE9 chamado automaticamente quando:"),t(),i(2368,"ul")(2369,"li"),e(2370,"A propriedade "),i(2371,"code"),e(2372,"t-auto-size"),t(),e(2373," \xE9 habilitada"),t(),i(2374,"li"),e(2375,"O evento "),i(2376,"code"),e(2377,"t-auto-size-on-scroll"),t(),e(2378," \xE9 disparado durante scroll virtual"),t()()()()()(),i(2379,"h5")(2380,"b"),e(2381,"Par\xE2metros"),t()(),i(2382,"table",16)(2383,"tr",17)(2384,"th",18),e(2385,"Nome"),t(),i(2386,"th",18),e(2387,"Tipo"),t(),i(2388,"th",18),e(2389,"Descri\xE7\xE3o"),t()(),i(2390,"tr",19)(2391,"td",20),e(2392," recalculate"),t(),i(2393,"td",23)(2394,"code",64),e(2395," boolean "),t()(),i(2396,"td",26)(2397,"p"),e(2398,"Quando "),i(2399,"code"),e(2400,"true"),t(),e(2401,`, mant\xE9m a largura total da tabela ap\xF3s o ajuste.
Quando `),i(2402,"code"),e(2403,"false"),t(),e(2404," ou omitido, limpa a largura fixa da tabela para permitir redimensionamento fluido."),t()()()(),o(2405,"br"),i(2406,"table",62)(2407,"tr",19)(2408,"th",63)(2409,"div",21)(2410,"h4")(2411,"span",22),e(2412," cleanRowActionsMode "),t()()()()(),i(2413,"tr",26)(2414,"td",26)(2415,"p"),e(2416,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2417,"p"),e(2418,`Usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2419,"pre")(2420,"code"),e(2421,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);`),t()(),i(2422,"p"),e(2423,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar esta fun\xE7\xE3o. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2424,"pre")(2425,"code",31),e(2426,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});`),t()()()()(),i(2427,"h5")(2428,"b"),e(2429,"Par\xE2metros"),t()(),i(2430,"table",16)(2431,"tr",17)(2432,"th",18),e(2433,"Nome"),t(),i(2434,"th",18),e(2435,"Tipo"),t(),i(2436,"th",18),e(2437,"Descri\xE7\xE3o"),t()(),i(2438,"tr",19)(2439,"td",20),e(2440," edit"),t(),i(2441,"td",23)(2442,"code",64),e(2443," boolean "),t()(),i(2444,"td",26)(2445,"p"),e(2446,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2447,"tr",19)(2448,"td",20),e(2449," include"),t(),i(2450,"td",23)(2451,"code",64),e(2452," boolean "),t()(),i(2453,"td",26)(2454,"p"),e(2455,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2456,"tr",19)(2457,"td",20),e(2458," del"),t(),i(2459,"td",23)(2460,"code",64),e(2461," boolean "),t()(),i(2462,"td",26)(2463,"p"),e(2464,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),o(2465,"br"),i(2466,"table",62)(2467,"tr",19)(2468,"th",63)(2469,"div",21)(2470,"h4")(2471,"span",22),e(2472," deleteItems "),t()()()()(),i(2473,"tr",26)(2474,"td",26)(2475,"p"),e(2476,"Respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2477,"p"),e(2478,"Quando "),i(2479,"strong"),e(2480,"t-items"),t(),e(2481,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2482,"strong"),e(2483,"t-service-api"),t(),e(2484," e/ou "),i(2485,"strong"),e(2486,"t-service-delete-api"),t(),e(2487,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2488,"blockquote")(2489,"p"),e(2490,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2491,"strong"),e(2492,"t-grid-row-actions"),t(),e(2493,`)" remove localmente
as linhas sinalizadas com `),i(2494,"code"),e(2495,"$removed"),t(),e(2496,"."),t()(),i(2497,"blockquote")(2498,"p"),e(2499,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2500,"strong"),e(2501,"t-allow-batch-delete"),t(),e(2502," em conjunto com "),i(2503,"strong"),e(2504,"t-service-api"),t(),e(2505," e/ou "),i(2506,"strong"),e(2507,"t-service-delete-api"),t(),e(2508,"."),t()()()()(),o(2509,"br"),i(2510,"table",62)(2511,"tr",19)(2512,"th",63)(2513,"div",21)(2514,"h4")(2515,"span",22),e(2516," getChangedItems "),t()()()()(),i(2517,"tr",26)(2518,"td",26)(2519,"p"),e(2520,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2521,"code"),e(2522,"op"),t(),e(2523,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2524,"pre")(2525,"code"),e(2526,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]`),t()()()()(),i(2527,"h5")(2528,"b"),e(2529,"Retorno"),t()(),i(2530,"table",16)(2531,"tr",17)(2532,"th",18),e(2533,"Tipo"),t(),i(2534,"th",18),e(2535,"Descri\xE7\xE3o"),t()(),i(2536,"tr",19)(2537,"td",23)(2538,"code",64),e(2539,"Array<any>"),t()(),i(2540,"td",26)(2541,"p"),e(2542,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2543,"code"),e(2544,"op"),t(),e(2545," que indica a a\xE7\xE3o realizada"),t()()()(),o(2546,"br"),i(2547,"table",62)(2548,"tr",19)(2549,"th",63)(2550,"div",21)(2551,"h4")(2552,"span",22),e(2553," getSelectedRows "),t()()()()(),i(2554,"tr",26)(2555,"td",26)(2556,"p"),e(2557,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),o(2558,"br"),i(2559,"table",62)(2560,"tr",19)(2561,"th",63)(2562,"div",21)(2563,"h4")(2564,"span",22),e(2565," showAdditionalHelp "),t()()()()(),i(2566,"tr",26)(2567,"td",26)(2568,"p"),e(2569,"Exibe o conte\xFAdo da propriedade "),i(2570,"code"),e(2571,"helper"),t(),e(2572," durante a edi\xE7\xE3o ("),i(2573,"code"),e(2574,"t-edit-properties"),t(),e(2575," ou "),i(2576,"code"),e(2577,"t-grid-row-actions"),t(),e(2578,`) do grid.
Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2579,"code"),e(2580,"t-keydown"),t(),e(2581,"."),t(),i(2582,"pre")(2583,"code"),e(2584,`import { ThfGridComponent } from '@totvs/thf-components';
...
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

columns: Array<ThfGridColumn> = [
 ...
 {
   property: 'name',
   label: 'Nome',
   editProperties: {
     componentEditable: 'input',
     helper: 'Nome completo',
     keydown: this.onkeydown.bind(this, 'name')
    }
 },
]

onkeydown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.thfGrid.showAdditionalHelp(property);
 }
}`),t()(),i(2585,"blockquote")(2586,"p"),e(2587,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2588,"a",65),e(2589,"TDN"),t(),e(2590,"."),t()()()()(),i(2591,"h5")(2592,"b"),e(2593,"Par\xE2metros"),t()(),i(2594,"table",16)(2595,"tr",17)(2596,"th",18),e(2597,"Nome"),t(),i(2598,"th",18),e(2599,"Tipo"),t(),i(2600,"th",18),e(2601,"Descri\xE7\xE3o"),t()(),i(2602,"tr",19)(2603,"td",20),e(2604," property"),t(),i(2605,"td",23)(2606,"code",64),e(2607," string "),t()(),i(2608,"td",26)(2609,"p"),e(2610,"Identificador da coluna."),t()()()(),o(2611,"br"),i(2612,"table",62)(2613,"tr",19)(2614,"th",63)(2615,"div",21)(2616,"h4")(2617,"span",22),e(2618," selectRowItem "),t()()()()(),i(2619,"tr",26)(2620,"td",26)(2621,"p"),e(2622,"Seleciona um item do grid."),t()()()(),i(2623,"h5")(2624,"b"),e(2625,"Par\xE2metros"),t()(),i(2626,"table",16)(2627,"tr",17)(2628,"th",18),e(2629,"Nome"),t(),i(2630,"th",18),e(2631,"Tipo"),t(),i(2632,"th",18),e(2633,"Descri\xE7\xE3o"),t()(),i(2634,"tr",19)(2635,"td",20),e(2636," item"),t(),i(2637,"td",23)(2638,"code",66),e(2639," { key: value } "),t(),i(2640,"code",27),e(2641," Function "),t()(),i(2642,"td",26)(2643,"p"),e(2644,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2645,"br"),i(2646,"table",62)(2647,"tr",19)(2648,"th",63)(2649,"div",21)(2650,"h4")(2651,"span",22),e(2652," unselectRowItem "),t()()()()(),i(2653,"tr",26)(2654,"td",26)(2655,"p"),e(2656,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2657,"h5")(2658,"b"),e(2659,"Par\xE2metros"),t()(),i(2660,"table",16)(2661,"tr",17)(2662,"th",18),e(2663,"Nome"),t(),i(2664,"th",18),e(2665,"Tipo"),t(),i(2666,"th",18),e(2667,"Descri\xE7\xE3o"),t()(),i(2668,"tr",19)(2669,"td",20),e(2670," item"),t(),i(2671,"td",23)(2672,"code",66),e(2673," { key: value } "),t(),i(2674,"code",27),e(2675," Function "),t()(),i(2676,"td",26)(2677,"p"),e(2678,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2679,"br"),i(2680,"table",62)(2681,"tr",19)(2682,"th",63)(2683,"div",21)(2684,"h4")(2685,"span",22),e(2686," applyFilters "),t()()()()(),i(2687,"tr",26)(2688,"td",26)(2689,"p"),e(2690,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2691,"p"),e(2692,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2693,"pre")(2694,"code"),e(2695,"url + ?page=1&pageSize=10"),t()(),i(2696,"blockquote")(2697,"p"),e(2698,"Obs: os par\xE2metros "),i(2699,"code"),e(2700,"page"),t(),e(2701," e "),i(2702,"code"),e(2703,"pageSize"),t(),e(2704," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2705,"p"),e(2706,"Caso sejam informados os par\xE2metros "),i(2707,"code"),e(2708,"{ name: 'JOHN', age: '23' }"),t(),e(2709,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2710,"pre")(2711,"code"),e(2712,"url + ?page=1&pageSize=10&name=JOHN&age=23"),t()()()()(),i(2713,"h5")(2714,"b"),e(2715,"Par\xE2metros"),t()(),i(2716,"table",16)(2717,"tr",17)(2718,"th",18),e(2719,"Nome"),t(),i(2720,"th",18),e(2721,"Tipo"),t(),i(2722,"th",18),e(2723,"Descri\xE7\xE3o"),t()(),i(2724,"tr",19)(2725,"td",20),e(2726," queryParams"),t(),i(2727,"td",23)(2728,"code",66),e(2729," { key: value } "),t()(),i(2730,"td",26)(2731,"p"),e(2732,"Formato do objeto a ser enviado."),t(),i(2733,"blockquote")(2734,"p"),e(2735,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),o(2736,"br"),i(2737,"table",62)(2738,"tr",19)(2739,"th",63)(2740,"div",21)(2741,"h4")(2742,"span",22),e(2743," calculateHeightDynamically "),t()()()()(),i(2744,"tr",26)(2745,"td",26)(2746,"p"),e(2747,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2748,"code"),e(2749,"calculateDynamicSize"),t(),e(2750," com a propriedade "),i(2751,"code"),e(2752,"'height'"),t(),e(2753,"."),t()()()(),i(2754,"h5")(2755,"b"),e(2756,"Par\xE2metros"),t()(),i(2757,"table",16)(2758,"tr",17)(2759,"th",18),e(2760,"Nome"),t(),i(2761,"th",18),e(2762,"Tipo"),t(),i(2763,"th",18),e(2764,"Descri\xE7\xE3o"),t()(),i(2765,"tr",19)(2766,"td",20),e(2767," callRowHeight"),t(),o(2768,"td",23),i(2769,"td",26)(2770,"p"),e(2771,"Define se o "),i(2772,"code"),e(2773,"calculateRowHeight"),t(),e(2774," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2775,"br"),i(2776,"table",62)(2777,"tr",19)(2778,"th",63)(2779,"div",21)(2780,"h4")(2781,"span",22),e(2782," removeItem "),t()()()()(),i(2783,"tr",26)(2784,"td",26)(2785,"p"),e(2786,"Remove um item localmente do grid."),t()()()(),i(2787,"h5")(2788,"b"),e(2789,"Par\xE2metros"),t()(),i(2790,"table",16)(2791,"tr",17)(2792,"th",18),e(2793,"Nome"),t(),i(2794,"th",18),e(2795,"Tipo"),t(),i(2796,"th",18),e(2797,"Descri\xE7\xE3o"),t()(),i(2798,"tr",19)(2799,"td",20),e(2800," item"),t(),i(2801,"td",23)(2802,"code",51),e(2803," number "),t(),i(2804,"code",66),e(2805," { key: value } "),t()(),i(2806,"td",26)(2807,"p"),e(2808,"\xCDndice ou item que ser\xE1 removido."),t(),i(2809,"blockquote")(2810,"p"),e(2811,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),o(2812,"br"),i(2813,"table",62)(2814,"tr",19)(2815,"th",63)(2816,"div",21)(2817,"h4")(2818,"span",22),e(2819," unselectRows "),t()()()()(),i(2820,"tr",26)(2821,"td",26)(2822,"p"),e(2823,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),o(2824,"br"),i(2825,"table",62)(2826,"tr",19)(2827,"th",63)(2828,"div",21)(2829,"h4")(2830,"span",22),e(2831," getInfoProperties "),t()()()()(),i(2832,"tr",26)(2833,"td",26)(2834,"p"),e(2835,"M\xE9todo que retorna informa\xE7\xF5es sobre os itens atuais da tabela."),t(),i(2836,"p"),e(2837,"Inclui:"),t(),i(2838,"ul")(2839,"li")(2840,"code"),e(2841,"items"),t(),e(2842,": lista de itens atualmente carregados na tabela."),t(),i(2843,"li")(2844,"code"),e(2845,"total"),t(),e(2846,": total de itens informado pela API atrav\xE9s da propriedade "),i(2847,"code"),e(2848,"total"),t(),e(2849,"; pode ser "),i(2850,"code"),e(2851,"undefined"),t(),e(2852," caso a API n\xE3o informe."),t(),i(2853,"li")(2854,"code"),e(2855,"page"),t(),e(2856,": n\xFAmero da p\xE1gina atual informado pela API ("),i(2857,"code"),e(2858,"itemsByApi.page"),t(),e(2859,"); se n\xE3o existir, utiliza a propriedade local "),i(2860,"code"),e(2861,"page"),t(),e(2862,"."),t(),i(2863,"li")(2864,"code"),e(2865,"pageSize"),t(),e(2866,": quantidade de itens por p\xE1gina informada pela API ("),i(2867,"code"),e(2868,"itemsByApi.pageSize"),t(),e(2869,"); se n\xE3o existir, utiliza a propriedade local "),i(2870,"code"),e(2871,"pageSize"),t(),e(2872,"."),t()()()()(),o(2873,"br"),i(2874,"table",62)(2875,"tr",19)(2876,"th",63)(2877,"div",21)(2878,"h4")(2879,"span",22),e(2880," updateItem "),t()()()()(),i(2881,"tr",26)(2882,"td",26)(2883,"p"),e(2884,"Atualiza um item do grid quando utilizado "),i(2885,"strong"),e(2886,"t-itens"),t(),e(2887,"."),t()()()(),i(2888,"h5")(2889,"b"),e(2890,"Par\xE2metros"),t()(),i(2891,"table",16)(2892,"tr",17)(2893,"th",18),e(2894,"Nome"),t(),i(2895,"th",18),e(2896,"Tipo"),t(),i(2897,"th",18),e(2898,"Descri\xE7\xE3o"),t()(),i(2899,"tr",19)(2900,"td",20),e(2901," item"),t(),i(2902,"td",23)(2903,"code",51),e(2904," number "),t(),i(2905,"code",66),e(2906," { key: value } "),t()(),i(2907,"td",26)(2908,"p"),e(2909,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2910,"tr",19)(2911,"td",20),e(2912," updatedItem"),t(),i(2913,"td",23)(2914,"code",66),e(2915," { key: value } "),t()(),i(2916,"td",26)(2917,"p"),e(2918,"Item que foi atualizado."),t(),i(2919,"blockquote")(2920,"p"),e(2921,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),o(2922,"br"),i(2923,"table",62)(2924,"tr",19)(2925,"th",63)(2926,"div",21)(2927,"h4")(2928,"span",22),e(2929," calculateDynamicSize "),t()()()()(),i(2930,"tr",26)(2931,"td",26)(2932,"p"),e(2933,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2934,"strong"),e(2935,"t-height"),t(),e(2936,`,
`),i(2937,"strong"),e(2938,"t-min-height"),t(),e(2939," e "),i(2940,"strong"),e(2941,"t-max-height"),t(),e(2942,"."),t(),i(2943,"p"),e(2944,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2945,"pre")(2946,"code",28),e(2947,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>`),t()(),i(2948,"pre")(2949,"code",31),e(2950,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}`),t()()()()(),i(2951,"h5")(2952,"b"),e(2953,"Par\xE2metros"),t()(),i(2954,"table",16)(2955,"tr",17)(2956,"th",18),e(2957,"Nome"),t(),i(2958,"th",18),e(2959,"Tipo"),t(),i(2960,"th",18),e(2961,"Descri\xE7\xE3o"),t()(),i(2962,"tr",19)(2963,"td",20),e(2964," property"),t(),o(2965,"td",23),i(2966,"td",26)(2967,"p"),e(2968,"Define qual propriedade ser\xE1 calculada: "),i(2969,"code"),e(2970,"'height'"),t(),e(2971,", "),i(2972,"code"),e(2973,"'minHeight'"),t(),e(2974," ou "),i(2975,"code"),e(2976,"'maxHeight'"),t(),e(2977,"."),t()()(),i(2978,"tr",19)(2979,"td",20),e(2980," callRowHeight"),t(),o(2981,"td",23),i(2982,"td",26)(2983,"p"),e(2984,"Define se o m\xE9todo "),i(2985,"code"),e(2986,"calculateRowHeight"),t(),e(2987," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2988,"br"),i(2989,"table",62)(2990,"tr",19)(2991,"th",63)(2992,"div",21)(2993,"h4")(2994,"span",22),e(2995," findColumnIndex "),t()()()()(),i(2996,"tr",26)(2997,"td",26)(2998,"p"),e(2999,"Encontra o \xEDndice da coluna baseado na propriedade."),t()()()(),o(3e3,"br"),i(3001,"table",62)(3002,"tr",19)(3003,"th",63)(3004,"div",21)(3005,"h4")(3006,"span",22),e(3007," isColumnRequired "),t()()()()(),i(3008,"tr",26)(3009,"td",26)(3010,"p"),e(3011,"Verifica se uma coluna \xE9 obrigat\xF3ria na propriedade "),i(3012,"code"),e(3013,"editProperties"),t(),e(3014," ou no "),i(3015,"code"),e(3016,"formGroupIntern"),t()()()()(),o(3017,"br"),i(3018,"table",62)(3019,"tr",19)(3020,"th",63)(3021,"div",21)(3022,"h4")(3023,"span",22),e(3024," setRowStateFilter "),t()()()()(),i(3025,"tr",26)(3026,"td",26)(3027,"p"),e(3028,"Define o filtro de estado das linhas a ser aplicado na exibi\xE7\xE3o da grid."),t(),i(3029,"p"),e(3030,`Este m\xE9todo permite alternar entre a visualiza\xE7\xE3o de itens ativos (n\xE3o removidos) e itens removidos,
filtrando a grid com base na propriedade `),i(3031,"code"),e(3032,"$removed"),t(),e(3033,` dos itens. \xC9 utilizado principalmente em conjunto
com o recurso de edi\xE7\xE3o fluida offline (`),i(3034,"strong"),e(3035,"t-grid-row-actions"),t(),e(3036,")."),t(),i(3037,"p"),e(3038,"Quando o filtro \xE9 alterado:"),t(),i(3039,"ul")(3040,"li"),e(3041,"A grid \xE9 filtrada para exibir apenas os itens que correspondem ao estado selecionado"),t(),i(3042,"li"),e(3043,"A pagina\xE7\xE3o \xE9 reiniciada ("),i(3044,"code"),e(3045,"skip = 0"),t(),e(3046,")"),t(),i(3047,"li"),e(3048,"O label do filtro \xE9 atualizado"),t(),i(3049,"li"),e(3050,"Os agregados totais s\xE3o recalculados"),t(),i(3051,"li"),e(3052,"A sele\xE7\xE3o pode ser desabilitada (no caso de itens removidos)"),t()(),i(3053,"pre")(3054,"code",31),e(3055,`// Exibe apenas itens ativos (n\xE3o removidos)
this.thfGrid.setRowStateFilter('active');

// Exibe apenas itens removidos, for\xE7ando recarregamento da grid
this.thfGrid.setRowStateFilter('removed', true);

// Exibe apenas itens ativos (n\xE3o removidos), sem emitir evento
this.thfGrid.setRowStateFilter('active', false, false);`),t()(),i(3056,"blockquote")(3057,"p"),e(3058,"Quando o filtro \xE9 alterado para "),i(3059,"code"),e(3060,"'removed'"),t(),e(3061,", a sele\xE7\xE3o de linhas \xE9 desabilitada automaticamente."),t(),i(3062,"p"),e(3063,"Ao retornar para "),i(3064,"code"),e(3065,"'active'"),t(),e(3066,", a sele\xE7\xE3o \xE9 restaurada ao seu estado inicial."),t()()()()(),i(3067,"h5")(3068,"b"),e(3069,"Par\xE2metros"),t()(),i(3070,"table",16)(3071,"tr",17)(3072,"th",18),e(3073,"Nome"),t(),i(3074,"th",18),e(3075,"Tipo"),t(),i(3076,"th",18),e(3077,"Descri\xE7\xE3o"),t()(),i(3078,"tr",19)(3079,"td",20),e(3080," filter"),t(),i(3081,"td",23)(3082,"code",67),e(3083," ('active' "),t(),i(3084,"code",68),e(3085," 'removed') "),t()(),i(3086,"td",26)(3087,"p"),e(3088,"Define qual filtro ser\xE1 aplicado:"),t(),i(3089,"ul")(3090,"li")(3091,"code"),e(3092,"'active'"),t(),e(3093,": Exibe apenas itens n\xE3o removidos ("),i(3094,"code"),e(3095,"$removed !== true"),t(),e(3096,")"),t(),i(3097,"li")(3098,"code"),e(3099,"'removed'"),t(),e(3100,": Exibe apenas itens marcados para remo\xE7\xE3o ("),i(3101,"code"),e(3102,"$removed === true"),t(),e(3103,")"),t()()()(),i(3104,"tr",19)(3105,"td",20),e(3106," reloadGrid"),t(),i(3107,"td",23)(3108,"code",64),e(3109," boolean "),t()(),i(3110,"td",26)(3111,"p"),e(3112,"Indica se a grid deve ser recarregada visualmente:"),t(),i(3113,"ul")(3114,"li"),e(3115,"Quando "),i(3116,"code"),e(3117,"true"),t(),e(3118,", desmarca todas as sele\xE7\xF5es, limpa itens selecionados e for\xE7a uma renderiza\xE7\xE3o completa da grid"),t(),i(3119,"li"),e(3120,"Quando "),i(3121,"code"),e(3122,"false"),t(),e(3123,", apenas aplica o filtro sem recarregar a grid"),t()()()(),i(3124,"tr",19)(3125,"td",20),e(3126," emitEvent"),t(),i(3127,"td",23)(3128,"code",64),e(3129," boolean "),t()(),i(3130,"td",26)(3131,"p"),e(3132,"Indica se o evento "),i(3133,"code"),e(3134,"changeRowStateFilter"),t(),e(3135," deve ser emitido ap\xF3s a altera\xE7\xE3o do filtro:"),t(),i(3136,"ul")(3137,"li"),e(3138,"Quando "),i(3139,"code"),e(3140,"true"),t(),e(3141,", o evento \xE9 emitido com o novo valor do filtro"),t(),i(3142,"li"),e(3143,"Quando "),i(3144,"code"),e(3145,"false"),t(),e(3146,", o evento n\xE3o \xE9 emitido"),t()()()()(),o(3147,"br"),i(3148,"table",62)(3149,"tr",19)(3150,"th",63)(3151,"div",21)(3152,"h4")(3153,"span",22),e(3154," getDestructiveModalTitle "),t()()()()(),i(3155,"tr",26)(3156,"td",26)(3157,"p"),e(3158,"Retorna o t\xEDtulo do modal destrutivo com base no tipo de a\xE7\xE3o"),t()()()(),o(3159,"br"),i(3160,"table",62)(3161,"tr",19)(3162,"th",63)(3163,"div",21)(3164,"h4")(3165,"span",22),e(3166," applyFilterByColumnProps "),t()()()()(),i(3167,"tr",26)(3168,"td",26)(3169,"p"),e(3170,"Aplica filtro por coluna com base no par\xE2metro fornecido."),t(),i(3171,"pre")(3172,"code",31),e(3173,`// Aplica filtro na coluna 'email' para exibir itens cujo e-mail:
// - cont\xE9m 'gmail'
// - e n\xE3o cont\xE9m 'teste'

const filter: Array<ThfFilterByColumn> = [
  {
    property: 'email',
    logic: 'and',
    operator1: 'contains',
    value1: 'gmail',
    operator2: 'doesnotcontain',
    value2: 'teste'
  }
];
this.gridComponent.applyFilterByColumnProps(filter);

> Requer que a propriedade \`filter\` esteja habilitada na coluna.`),t()()()()(),i(3174,"h5")(3175,"b"),e(3176,"Par\xE2metros"),t()(),i(3177,"table",16)(3178,"tr",17)(3179,"th",18),e(3180,"Nome"),t(),i(3181,"th",18),e(3182,"Tipo"),t(),i(3183,"th",18),e(3184,"Descri\xE7\xE3o"),t()(),i(3185,"tr",19)(3186,"td",20),e(3187," filterColumnProps"),t(),i(3188,"td",23)(3189,"code",44),e(3190," Array<ThfFilterByColumn> "),t()(),i(3191,"td",26)(3192,"p"),e(3193,"Lista de filtros a serem aplicados."),t()()()(),o(3194,"br"),t()()(),w(3195,2),t(),i(3196,"po-tab",69),w(3197,3),i(3198,"po-container",5)(3199,"po-accordion",6)(3200,"po-accordion-item",70)(3201,"h4",9)(3202,"code"),e(3203,"ThfTableAction"),t()(),i(3204,"div",10)(3205,"p"),e(3206," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(3207,"h4",15),e(3208,"Propriedades"),t(),i(3209,"table",16)(3210,"tr",17)(3211,"th",18),e(3212,"Nome"),t(),i(3213,"th",18),e(3214,"Tipo"),t(),i(3215,"th",18),e(3216,"Descri\xE7\xE3o"),t()(),i(3217,"tr",19)(3218,"td",20)(3219,"div",21)(3220,"span",22),e(3221," action"),o(3222,"br"),t()()(),i(3223,"td",23)(3224,"code",27),e(3225,"Function"),t()(),i(3226,"td",26)(3227,"em")(3228,"strong"),e(3229,"(opcional)"),t()(),i(3230,"p"),e(3231,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(3232,"p"),e(3233,"No componente "),i(3234,"code"),e(3235,"po-dropdown"),t(),e(3236,", a action tamb\xE9m pode ser executada para o agrupador de subitens."),t(),i(3237,"blockquote")(3238,"p"),e(3239,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(3240,"em"),e(3241,"bind"),t(),e(3242,"."),t()(),i(3243,"p"),e(3244,"Exemplo: "),i(3245,"code"),e(3246,"action: this.myFunction.bind(this)"),t()()()(),i(3247,"tr",19)(3248,"td",20)(3249,"div",21)(3250,"span",22),e(3251," disabled"),o(3252,"br"),t()()(),i(3253,"td",23)(3254,"code",24),e(3255,"boolean "),t(),i(3256,"code",27),e(3257," Function"),t()(),i(3258,"td",26)(3259,"em")(3260,"strong"),e(3261,"(opcional)"),t()(),i(3262,"p"),e(3263,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(3264,"p"),e(3265,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(3266,"tr",19)(3267,"td",20)(3268,"div",21)(3269,"span",22),e(3270," fixed"),o(3271,"br"),t()()(),i(3272,"td",23)(3273,"code",24),e(3274,"boolean"),t()(),i(3275,"td",26)(3276,"em")(3277,"strong"),e(3278,"(opcional)"),t()(),i(3279,"p"),e(3280,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(3281,"tr",19)(3282,"td",20)(3283,"div",21)(3284,"span",22),e(3285," icon"),o(3286,"br"),t()()(),i(3287,"td",23)(3288,"code",38),e(3289,"string "),t(),i(3290,"code",50),e(3291," TemplateRef<void>"),t()(),i(3292,"td",26)(3293,"em")(3294,"strong"),e(3295,"(opcional)"),t()(),i(3296,"p"),e(3297,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(3298,"p"),e(3299,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(3300,"a",71),e(3301,"Biblioteca de \xEDcones"),t(),e(3302,". conforme exemplo abaixo:"),t(),i(3303,"pre")(3304,"code"),e(3305,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(3306,"p"),e(3307,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(3308,"pre")(3309,"code"),e(3310,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(3311,"p"),e(3312,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(3313,"code"),e(3314,"TemplateRef"),t(),e(3315,`, conforme exemplo abaixo:
component.html:`),t(),i(3316,"pre")(3317,"code"),e(3318,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(3319,"p"),e(3320,"component.ts:"),t(),i(3321,"pre")(3322,"code"),e(3323,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(3324,"tr",19)(3325,"td",20)(3326,"div",21)(3327,"span",22),e(3328," label"),o(3329,"br"),t()()(),i(3330,"td",23)(3331,"code",38),e(3332,"string"),t()(),i(3333,"td",26)(3334,"p"),e(3335,"R\xF3tulo da a\xE7\xE3o."),t(),i(3336,"p"),e(3337,"No componente "),i(3338,"code"),e(3339,"po-dropdown"),t(),e(3340,", a label tamb\xE9m pode representar o agrupador de subitens."),t()()(),i(3341,"tr",19)(3342,"td",20)(3343,"div",21)(3344,"span",22),e(3345," selected"),o(3346,"br"),t()()(),i(3347,"td",23)(3348,"code",24),e(3349,"boolean"),t()(),i(3350,"td",26)(3351,"em")(3352,"strong"),e(3353,"(opcional)"),t()(),i(3354,"p"),e(3355,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(3356,"tr",19)(3357,"td",20)(3358,"div",21)(3359,"span",22),e(3360," separator"),o(3361,"br"),t()()(),i(3362,"td",23)(3363,"code",24),e(3364,"boolean"),t()(),i(3365,"td",26)(3366,"em")(3367,"strong"),e(3368,"(opcional)"),t()(),i(3369,"p"),e(3370,"Atribui uma linha separadora acima do item."),t()()(),i(3371,"tr",19)(3372,"td",20)(3373,"div",21)(3374,"span",22),e(3375," type"),o(3376,"br"),t()()(),i(3377,"td",23)(3378,"code",38),e(3379,"string"),t()(),i(3380,"td",26)(3381,"em")(3382,"strong"),e(3383,"(opcional)"),t()(),i(3384,"p"),e(3385,"Define a cor do item, sendo "),i(3386,"code"),e(3387,"default"),t(),e(3388," o padr\xE3o."),t(),i(3389,"p"),e(3390,"Valores v\xE1lidos:"),t(),i(3391,"ul")(3392,"li")(3393,"code"),e(3394,"default"),t()(),i(3395,"li")(3396,"code"),e(3397,"danger"),t(),e(3398," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(3399,"tr",19)(3400,"td",20)(3401,"div",21)(3402,"span",22),e(3403," url"),o(3404,"br"),t()()(),i(3405,"td",23)(3406,"code",38),e(3407,"string"),t()(),i(3408,"td",26)(3409,"em")(3410,"strong"),e(3411,"(opcional)"),t()(),i(3412,"p"),e(3413,"URL utilizada para redirecionamento das p\xE1ginas."),t(),i(3414,"p"),e(3415,"No componente "),i(3416,"code"),e(3417,"po-dropdown"),t(),e(3418,`, a url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(3419,"code"),e(3420,"url"),t(),e(3421," \xE9 informada em um agrupador, o clique "),i(3422,"strong"),e(3423,"n\xE3o abrir\xE1 os subitens"),t(),e(3424,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t()()(),i(3425,"tr",19)(3426,"td",20)(3427,"div",21)(3428,"span",22),e(3429," visible"),o(3430,"br"),t()()(),i(3431,"td",23)(3432,"code",24),e(3433,"boolean "),t(),i(3434,"code",27),e(3435," Function"),t()(),i(3436,"td",26)(3437,"em")(3438,"strong"),e(3439,"(opcional)"),t()(),i(3440,"p"),e(3441,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(3442,"blockquote")(3443,"p"),e(3444,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(3445,"p"),e(3446,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(3447,"ul")(3448,"li")(3449,"p"),e(3450,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(3451,"li")(3452,"p"),e(3453,"Informar diretamente um valor booleano."),t()()()()()()(),i(3454,"po-accordion-item",72)(3455,"h4",9)(3456,"code"),e(3457,"ThfAggregateDescriptor"),t()(),i(3458,"div",10)(3459,"p"),e(3460,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(3461,"h4",15),e(3462,"Propriedades"),t(),i(3463,"table",16)(3464,"tr",17)(3465,"th",18),e(3466,"Nome"),t(),i(3467,"th",18),e(3468,"Tipo"),t(),i(3469,"th",18),e(3470,"Descri\xE7\xE3o"),t()(),i(3471,"tr",19)(3472,"td",20)(3473,"div",21)(3474,"span",22),e(3475," aggregate"),o(3476,"br"),t()()(),i(3477,"td",23)(3478,"code",73),e(3479,"'sum' "),t(),i(3480,"code",74),e(3481," 'average' "),t(),i(3482,"code",75),e(3483," 'count' "),t(),i(3484,"code",76),e(3485," 'min' "),t(),i(3486,"code",77),e(3487," 'max'"),t()(),i(3488,"td",26)(3489,"p"),e(3490,"Fun\xE7\xE3o de agrega\xE7\xE3o a ser aplicada inicialmente: 'sum', 'average', 'count', 'min', ou 'max'."),t()()(),i(3491,"tr",19)(3492,"td",20)(3493,"div",21)(3494,"span",22),e(3495," field"),o(3496,"br"),t()()(),i(3497,"td",23)(3498,"code",38),e(3499,"string"),t()(),i(3500,"td",26)(3501,"p"),e(3502,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3503,"tr",19)(3504,"td",20)(3505,"div",21)(3506,"span",22),e(3507," label"),o(3508,"br"),t()()(),i(3509,"td",23)(3510,"code",38),e(3511,"string"),t()(),i(3512,"td",26)(3513,"em")(3514,"strong"),e(3515,"(opcional)"),t()(),i(3516,"p"),e(3517,"Texto exibido ao lado do resultado da agrega\xE7\xE3o no agrupamento."),t()()()()(),i(3518,"po-accordion-item",78)(3519,"h4",9)(3520,"code"),e(3521,"ThfAggregateConfig"),t()(),i(3522,"div",10)(3523,"p"),e(3524,"Interface para configura\xE7\xE3o do "),i(3525,"code"),e(3526,"Aggregate"),t(),e(3527,"."),t()(),i(3528,"h4",15),e(3529,"Propriedades"),t(),i(3530,"table",16)(3531,"tr",17)(3532,"th",18),e(3533,"Nome"),t(),i(3534,"th",18),e(3535,"Tipo"),t(),i(3536,"th",18),e(3537,"Descri\xE7\xE3o"),t()(),i(3538,"tr",19)(3539,"td",20)(3540,"div",21)(3541,"span",22),e(3542," aggregateAlign"),o(3543,"br"),t()()(),i(3544,"td",23)(3545,"code",79),e(3546,"'right' "),t(),i(3547,"code",80),e(3548," 'defaultColumn'"),t()(),i(3549,"td",26)(3550,"em")(3551,"strong"),e(3552,"(opcional)"),t()(),i(3553,"p"),e(3554,"Define o alinhamento horizontal dos valores dos totalizadores."),t(),i(3555,"ul")(3556,"li")(3557,"strong"),e(3558,"Valores aceitos:"),t()(),i(3559,"li")(3560,"code"),e(3561,"'right'"),t(),e(3562,": Alinha os valores \xE0 direita (comportamento padr\xE3o)."),t(),i(3563,"li")(3564,"code"),e(3565,"'defaultColumn'"),t(),e(3566,": Alinha o valor no mesmo alinhamento da sua coluna de origem."),t()()()(),i(3567,"tr",19)(3568,"td",20)(3569,"div",21)(3570,"span",22),e(3571," disabled"),o(3572,"br"),t()()(),i(3573,"td",23)(3574,"code",48),e(3575,"Array<string>"),t()(),i(3576,"td",26)(3577,"em")(3578,"strong"),e(3579,"(opcional)"),t()(),i(3580,"p"),e(3581,"Define a lista das propriedades (colunas) que devem ter a sele\xE7\xE3o dos aggregates desabilitada no rodap\xE9 da grid."),t()()(),i(3582,"tr",19)(3583,"td",20)(3584,"div",21)(3585,"span",22),e(3586," visible"),o(3587,"br"),t()()(),i(3588,"td",23)(3589,"code",48),e(3590,"Array<string>"),t()(),i(3591,"td",26)(3592,"em")(3593,"strong"),e(3594,"(opcional)"),t()(),i(3595,"p"),e(3596,"Define a lista das propriedades (colunas) que devem exibir a sele\xE7\xE3o de aggregates no rodap\xE9 da grid."),t()()()()(),i(3597,"po-accordion-item",81)(3598,"h4",9)(3599,"code"),e(3600,"ThfGridColumnSort"),t()(),i(3601,"div",10)(3602,"p"),e(3603,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3604,"strong"),e(3605,"t-sort"),t(),e(3606,")."),t()(),i(3607,"h4",15),e(3608,"Propriedades"),t(),i(3609,"table",16)(3610,"tr",17)(3611,"th",18),e(3612,"Nome"),t(),i(3613,"th",18),e(3614,"Tipo"),t(),i(3615,"th",18),e(3616,"Descri\xE7\xE3o"),t()(),i(3617,"tr",19)(3618,"td",20)(3619,"div",21)(3620,"span",22),e(3621," dir"),o(3622,"br"),t()()(),i(3623,"td",23)(3624,"code",82),e(3625,"'asc' "),t(),i(3626,"code",83),e(3627," 'desc'"),t()(),i(3628,"td",26)(3629,"em")(3630,"strong"),e(3631,"(opcional)"),t()(),i(3632,"p"),e(3633,"Dire\xE7\xE3o da coluna:"),t(),i(3634,"ul")(3635,"li")(3636,"code"),e(3637,"asc"),t()(),i(3638,"li")(3639,"code"),e(3640,"desc"),t()()()()(),i(3641,"tr",19)(3642,"td",20)(3643,"div",21)(3644,"span",22),e(3645," field"),o(3646,"br"),t()()(),i(3647,"td",23)(3648,"code",38),e(3649,"string"),t()(),i(3650,"td",26)(3651,"p"),e(3652,"Coluna"),t()()()()(),i(3653,"po-accordion-item",84)(3654,"h4",9)(3655,"code"),e(3656,"ThfGridColumn"),t()(),i(3657,"div",10)(3658,"p"),e(3659,"Interface para configura\xE7\xE3o das colunas ("),i(3660,"strong"),e(3661,"t-columns"),t(),e(3662,")."),t()(),i(3663,"h4",15),e(3664,"Propriedades"),t(),i(3665,"table",16)(3666,"tr",17)(3667,"th",18),e(3668,"Nome"),t(),i(3669,"th",18),e(3670,"Tipo"),t(),i(3671,"th",18),e(3672,"Descri\xE7\xE3o"),t()(),i(3673,"tr",19)(3674,"td",20)(3675,"div",21)(3676,"span",22),e(3677," action"),o(3678,"br"),t()()(),i(3679,"td",23)(3680,"code",27),e(3681,"Function"),t()(),i(3682,"td",26)(3683,"em")(3684,"strong"),e(3685,"(opcional)"),t()(),i(3686,"p"),e(3687,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3688,"code"),e(3689,"link"),t(),e(3690," ou "),i(3691,"code"),e(3692,"icon"),t(),e(3693,"."),t(),i(3694,"blockquote")(3695,"p"),e(3696,"Quando for do tipo "),i(3697,"code"),e(3698,"link"),t(),e(3699,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3700,"blockquote")(3701,"p"),e(3702,"Quando for do tipo "),i(3703,"code"),e(3704,"icon"),t(),e(3705," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3706,"tr",19)(3707,"td",20)(3708,"div",21)(3709,"span",22),e(3710," boolean"),o(3711,"br"),t()()(),i(3712,"td",23)(3713,"code",85),e(3714,"PoTableBoolean"),t()(),i(3715,"td",26)(3716,"em")(3717,"strong"),e(3718,"(opcional)"),t()(),i(3719,"p"),e(3720,"Define um objeto do tipo "),i(3721,"code"),e(3722,"PoTableBoolean"),t(),e(3723," para as colunas do tipo "),i(3724,"em"),e(3725,"boolean"),t(),e(3726,". Por exemplo:"),t(),i(3727,"pre")(3728,"code"),e(3729,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(3730,"blockquote")(3731,"p"),e(3732,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3733,"em"),e(3734,"boolean"),t(),e(3735,`,
esta exibir\xE1 por padr\xE3o `),i(3736,"code"),e(3737,"Sim"),t(),e(3738," e "),i(3739,"code"),e(3740,"N\xE3o"),t(),e(3741," de acordo com os valores "),i(3742,"em"),e(3743,"booleanos"),t(),e(3744,"."),t()()()(),i(3745,"tr",19)(3746,"td",20)(3747,"div",21)(3748,"span",22),e(3749," booleanFalse"),o(3750,"br"),t()()(),i(3751,"td",23)(3752,"code",38),e(3753,"string"),t()(),i(3754,"td",26)(3755,"em")(3756,"strong"),e(3757,"(opcional)"),t()(),i(3758,"p"),e(3759,"Texto exibido quando o valor da coluna for "),i(3760,"em"),e(3761,"false"),t(),e(3762,"."),t()()(),i(3763,"tr",19)(3764,"td",20)(3765,"div",21)(3766,"span",22),e(3767," booleanTrue"),o(3768,"br"),t()()(),i(3769,"td",23)(3770,"code",38),e(3771,"string"),t()(),i(3772,"td",26)(3773,"em")(3774,"strong"),e(3775,"(opcional)"),t()(),i(3776,"p"),e(3777,"Texto exibido quando o valor da coluna for "),i(3778,"em"),e(3779,"true"),t(),e(3780,"."),t()()(),i(3781,"tr",19)(3782,"td",20)(3783,"div",21)(3784,"span",22),e(3785," color"),o(3786,"br"),t()()(),i(3787,"td",23)(3788,"code",38),e(3789,"string "),t(),i(3790,"code",27),e(3791," Function"),t()(),i(3792,"td",26)(3793,"em")(3794,"strong"),e(3795,"(opcional)"),t()(),i(3796,"p"),e(3797,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3798,"p"),e(3799,"Valores v\xE1lidos:"),t(),i(3800,"ul")(3801,"li"),o(3802,"span",86),i(3803,"code"),e(3804,"color-01"),t()(),i(3805,"li"),o(3806,"span",87),i(3807,"code"),e(3808,"color-02"),t()(),i(3809,"li"),o(3810,"span",88),i(3811,"code"),e(3812,"color-03"),t()(),i(3813,"li"),o(3814,"span",89),i(3815,"code"),e(3816,"color-04"),t()(),i(3817,"li"),o(3818,"span",90),i(3819,"code"),e(3820,"color-05"),t()(),i(3821,"li"),o(3822,"span",91),i(3823,"code"),e(3824,"color-06"),t()(),i(3825,"li"),o(3826,"span",92),i(3827,"code"),e(3828,"color-07"),t()(),i(3829,"li"),o(3830,"span",93),i(3831,"code"),e(3832,"color-08"),t()(),i(3833,"li"),o(3834,"span",94),i(3835,"code"),e(3836,"color-09"),t()(),i(3837,"li"),o(3838,"span",95),i(3839,"code"),e(3840,"color-10"),t()(),i(3841,"li"),o(3842,"span",96),i(3843,"code"),e(3844,"color-11"),t()(),i(3845,"li"),o(3846,"span",97),i(3847,"code"),e(3848,"color-12"),t()()(),i(3849,"blockquote")(3850,"p"),e(3851,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(3852,"pre")(3853,"code"),e(3854,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),t()(),i(3855,"blockquote")(3856,"p"),e(3857,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(3858,"code"),e(3859,"icons"),t(),e(3860,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(3861,"pre")(3862,"code"),e(3863,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),t()()()(),i(3864,"tr",19)(3865,"td",20)(3866,"div",21)(3867,"span",22),e(3868," detail"),o(3869,"br"),t()()(),i(3870,"td",23)(3871,"code",98),e(3872,"PoTableDetail"),t()(),i(3873,"td",26)(3874,"em")(3875,"strong"),e(3876,"(opcional)"),t()(),i(3877,"p"),e(3878,"Define um objeto que segue a interface "),i(3879,"code"),e(3880,"PoTableDetail"),t(),e(3881,", para as colunas de detalhes. Por exemplo:"),t(),i(3882,"pre")(3883,"code"),e(3884,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),t()()()(),i(3885,"tr",19)(3886,"td",20)(3887,"div",21)(3888,"span",22),e(3889," disabled"),o(3890,"br"),t()()(),i(3891,"td",23)(3892,"code",27),e(3893,"Function"),t()(),i(3894,"td",26)(3895,"em")(3896,"strong"),e(3897,"(opcional)"),t()(),i(3898,"p"),e(3899,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(3900,"em"),e(3901,"link"),t(),e(3902," e sua a\xE7\xE3o."),t(),i(3903,"blockquote")(3904,"p"),e(3905,"Propriedade dispon\xEDvel nas colunas do tipo "),i(3906,"code"),e(3907,"link"),t(),e(3908,"."),t()()()(),i(3909,"tr",19)(3910,"td",20)(3911,"div",21)(3912,"span",22),e(3913," editProperties"),o(3914,"br"),t()()(),i(3915,"td",23)(3916,"code",99),e(3917,"CustomEditProperties"),t()(),i(3918,"td",26)(3919,"em")(3920,"strong"),e(3921,"(opcional)"),t()(),i(3922,"p"),e(3923,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(3924,"tr",19)(3925,"td",20)(3926,"div",21)(3927,"span",22),e(3928," filter"),o(3929,"br"),t()()(),i(3930,"td",23)(3931,"code",24),e(3932,"boolean"),t()(),i(3933,"td",26)(3934,"em")(3935,"strong"),e(3936,"(opcional)"),t()(),i(3937,"p"),e(3938,"Habilita o filtro por coluna."),t(),i(3939,"p"),e(3940,`Quando ativado, exibe um \xEDcone de filtro no cabe\xE7alho da coluna e permite que o usu\xE1rio aplique filtros diretamente
no grid.`),t(),i(3941,"p"),e(3942,"O filtro n\xE3o realiza requisi\xE7\xF5es \xE0 API, toda a filtragem ocorre localmente sobre os dados j\xE1 carregados."),t(),i(3943,"p"),e(3944,"O tipo do filtro \xE9 determinado pelo "),i(3945,"code"),e(3946,"type"),t(),e(3947," definido na coluna. Cada tipo renderiza um componente espec\xEDfico:"),t(),i(3948,"ul")(3949,"li"),e(3950,"string: "),i(3951,"code"),e(3952,"input"),t()(),i(3953,"li"),e(3954,"number, currency:"),i(3955,"ul")(3956,"li")(3957,"code"),e(3958,"decimal"),t(),e(3959," - Caso seja utilizado "),i(3960,"code"),e(3961,"editProperties.componentEditable"),t(),e(3962," do tipo "),i(3963,"code"),e(3964,"decimal"),t()(),i(3965,"li")(3966,"code"),e(3967,"number"),t(),e(3968," - Utilizado por padr\xE3o"),t()()(),i(3969,"li"),e(3970,"date: "),i(3971,"code"),e(3972,"datepicker"),t()(),i(3973,"li"),e(3974,"boolean: "),i(3975,"code"),e(3976,"checkbox"),t()()(),i(3977,"p"),e(3978,"Caso o "),i(3979,"code"),e(3980,"type"),t(),e(3981," da coluna n\xE3o seja um desses ou n\xE3o seja informado, o filtro assume o tipo "),i(3982,"code"),e(3983,"string"),t(),e(3984," como padr\xE3o."),t(),i(3985,"blockquote")(3986,"p"),e(3987,`Para conhecer todos os operadores dispon\xEDveis para cada tipo de coluna, consulte tamb\xE9m a interface
`),i(3988,"strong"),e(3989,"ThfFilterByColumn"),t(),e(3990,"."),t()()()(),i(3991,"tr",19)(3992,"td",20)(3993,"div",21)(3994,"span",22),e(3995," fixed"),o(3996,"br"),t()()(),i(3997,"td",23)(3998,"code",24),e(3999,"boolean"),t()(),i(4e3,"td",26)(4001,"em")(4002,"strong"),e(4003,"(opcional)"),t()(),i(4004,"p"),e(4005,"Propriedade para fixar a coluna inicialmente."),t(),i(4006,"blockquote")(4007,"p"),e(4008,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(4009,"tr",19)(4010,"td",20)(4011,"div",21)(4012,"span",22),e(4013," format"),o(4014,"br"),t()()(),i(4015,"td",23)(4016,"code",38),e(4017,"string"),t()(),i(4018,"td",26)(4019,"em")(4020,"strong"),e(4021,"(opcional)"),t()(),i(4022,"p"),e(4023,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(4024,"table")(4025,"thead")(4026,"tr")(4027,"th"),e(4028,"Formata\xE7\xE3o"),t(),i(4029,"th"),e(4030,"Type da Coluna"),t(),i(4031,"th"),e(4032,"Descri\xE7\xE3o"),t(),i(4033,"th"),e(4034,"Exemplos"),t()()(),i(4035,"tbody")(4036,"tr")(4037,"td"),e(4038,"Monet\xE1rio"),t(),i(4039,"td")(4040,"code"),e(4041,"currency"),t()(),i(4042,"td"),e(4043,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(4044,"code"),e(4045,"'USD'"),t(),e(4046," por padr\xE3o"),t(),i(4047,"td")(4048,"code"),e(4049,"'BRL'"),t(),e(4050,", "),i(4051,"code"),e(4052,"'USD'"),t(),e(4053,", "),i(4054,"code"),e(4055,"'EUR'"),t(),e(4056,", "),i(4057,"code"),e(4058,"'RUB'"),t()()(),i(4059,"tr")(4060,"td"),e(4061,"Data"),t(),i(4062,"td")(4063,"code"),e(4064,"date"),t()(),i(4065,"td"),e(4066,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(4067,"td")(4068,"code"),e(4069,"'dd/MM/yyyy'"),t(),e(4070,", "),i(4071,"code"),e(4072,"'dd-MM-yy'"),t(),e(4073,", "),i(4074,"code"),e(4075,"'mm/dd/yyyy'"),t()()(),i(4076,"tr")(4077,"td"),e(4078,"Hora"),t(),i(4079,"td")(4080,"code"),e(4081,"time"),t()(),i(4082,"td"),e(4083,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(4084,"td")(4085,"code"),e(4086,"'HH:mm'"),t(),e(4087,", "),i(4088,"code"),e(4089,"'HH:mm:ss.ffffff'"),t(),e(4090,", "),i(4091,"code"),e(4092,"'HH:mm:ss.ff'"),t(),e(4093,", "),i(4094,"code"),e(4095,"'mm:ss.fff'"),t()()(),i(4096,"tr")(4097,"td"),e(4098,"N\xFAmero"),t(),i(4099,"td")(4100,"code"),e(4101,"number"),t()(),i(4102,"td"),e(4103,"Aceita um valor seguindo o padr\xE3o "),i(4104,"a",100)(4105,"strong"),e(4106,"DecimalPipe"),t()(),e(4107," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(4108,"td")(4109,"code"),e(4110,"'1.2-5'"),t(),e(4111," (ex.: "),i(4112,"code"),e(4113,"50"),t(),e(4114," \u2192 "),i(4115,"code"),e(4116,"50.00"),t(),e(4117,")"),t()()()(),i(4118,"p"),e(4119,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(4120,"blockquote")(4121,"p"),e(4122,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(4123,"tr",19)(4124,"td",20)(4125,"div",21)(4126,"span",22),e(4127," icons"),o(4128,"br"),t()()(),i(4129,"td",23)(4130,"code",101),e(4131,"Array<PoTableColumnIcon>"),t()(),i(4132,"td",26)(4133,"em")(4134,"strong"),e(4135,"(opcional)"),t()(),i(4136,"p"),e(4137,"Define um "),i(4138,"em"),e(4139,"array"),t(),e(4140," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(4141,"code"),e(4142,"action"),t(),e(4143," e "),i(4144,"code"),e(4145,"color"),t(),e(4146,`
definidos na coluna, \xE0 partir do `),i(4147,"em"),e(4148,"value"),t(),e(4149," da "),i(4150,"a",102)(4151,"code"),e(4152,"PoTableColumnIcon"),t()(),e(4153,", por exemplo:"),t(),i(4154,"pre")(4155,"code"),e(4156,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),t()(),i(4157,"pre")(4158,"code"),e(4159,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),t()()()(),i(4160,"tr",19)(4161,"td",20)(4162,"div",21)(4163,"span",22),e(4164," key"),o(4165,"br"),t()()(),i(4166,"td",23)(4167,"code",24),e(4168,"boolean "),t(),i(4169,"code",51),e(4170," number"),t()(),i(4171,"td",26)(4172,"em")(4173,"strong"),e(4174,"(opcional)"),t()(),i(4175,"p"),e(4176,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(4177,"code"),e(4178,"API"),t(),e(4179," esteja preparada para receber uma ou mais "),i(4180,"code"),e(4181,"keys"),t(),e(4182," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(4183,"blockquote")(4184,"p"),e(4185,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(4186,"tr",19)(4187,"td",20)(4188,"div",21)(4189,"span",22),e(4190," label"),o(4191,"br"),t()()(),i(4192,"td",23)(4193,"code",38),e(4194,"string"),t()(),i(4195,"td",26)(4196,"em")(4197,"strong"),e(4198,"(opcional)"),t()(),i(4199,"p"),e(4200,"Texto para t\xEDtulo da coluna."),t(),i(4201,"p"),e(4202,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4203,"em"),e(4204,"label"),t(),e(4205," o valor da propriedade "),i(4206,"em"),e(4207,"property"),t(),e(4208," com a primeira letra em mai\xFAsculo."),t()()(),i(4209,"tr",19)(4210,"td",20)(4211,"div",21)(4212,"span",22),e(4213," labels"),o(4214,"br"),t()()(),i(4215,"td",23)(4216,"code",103),e(4217,"Array<PoTableColumnLabel>"),t()(),i(4218,"td",26)(4219,"em")(4220,"strong"),e(4221,"(opcional)"),t()(),i(4222,"p"),e(4223,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(4224,"code"),e(4225,"PoTableColumnLabel"),t(),e(4226," na qual devem ser definidas os labels. Por exemplo:"),t(),i(4227,"pre")(4228,"code"),e(4229,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(4230,"tr",19)(4231,"td",20)(4232,"div",21)(4233,"span",22),e(4234," link"),o(4235,"br"),t()()(),i(4236,"td",23)(4237,"code",38),e(4238,"string"),t()(),i(4239,"td",26)(4240,"em")(4241,"strong"),e(4242,"(opcional)"),t()(),i(4243,"p"),e(4244,"Define o nome da propriedade que conter\xE1 o "),i(4245,"code"),e(4246,"link"),t(),e(4247," a ser redirecionado."),t()()(),i(4248,"tr",19)(4249,"td",20)(4250,"div",21)(4251,"span",22),e(4252," locale"),o(4253,"br"),t()()(),i(4254,"td",23)(4255,"code",38),e(4256,"string"),t()(),i(4257,"td",26)(4258,"em")(4259,"strong"),e(4260,"(opcional)"),t()(),i(4261,"p"),e(4262,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o e edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4263,"a",104)(4264,"code"),e(4265,"I18n"),t()()(),i(4266,"p"),e(4267,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4268,"pre")(4269,"code"),e(4270,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(4271,"blockquote")(4272,"p"),e(4273,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4274,"p"),e(4275,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4276,"p"),e(4277,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4278,"a",104)(4279,"code"),e(4280,"I18n"),t()()()(),i(4281,"p"),e(4282,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4283,"pre")(4284,"code"),e(4285,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(4286,"blockquote")(4287,"p"),e(4288,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(4289,"code"),e(4290,"number"),t(),e(4291," e "),i(4292,"code"),e(4293,"currency"),t(),e(4294,"."),t()(),i(4295,"blockquote")(4296,"p"),e(4297,"No modo edi\xE7\xE3o, a propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4298,"p")(4299,"strong"),e(4300,"Componentes compat\xEDveis"),t(),e(4301,": "),i(4302,"code"),e(4303,"decimal"),t()()()()(),i(4304,"tr",19)(4305,"td",20)(4306,"div",21)(4307,"span",22),e(4308," mask"),o(4309,"br"),t()()(),i(4310,"td",23)(4311,"code",38),e(4312,"string"),t()(),i(4313,"td",26)(4314,"em")(4315,"strong"),e(4316,"(opcional)"),t()(),i(4317,"p"),e(4318,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(4319,"code"),e(4320,"number"),t(),e(4321," e "),i(4322,"code"),e(4323,"string"),t(),e(4324,`
Nas colunas do tipo `),i(4325,"code"),e(4326,"number"),t(),e(4327," a propriedade "),i(4328,"code"),e(4329,"mask"),t(),e(4330," ter\xE1 prioridade sob "),i(4331,"code"),e(4332,"format"),t()()()(),i(4333,"tr",19)(4334,"td",20)(4335,"div",21)(4336,"span",22),e(4337," property"),o(4338,"br"),t()()(),i(4339,"td",23)(4340,"code",38),e(4341,"string"),t()(),i(4342,"td",26)(4343,"p"),e(4344,"Identificador da coluna."),t()()(),i(4345,"tr",19)(4346,"td",20)(4347,"div",21)(4348,"span",22),e(4349," resizable"),o(4350,"br"),t()()(),i(4351,"td",23)(4352,"code",24),e(4353,"boolean"),t()(),i(4354,"td",26)(4355,"em")(4356,"strong"),e(4357,"(opcional)"),t()(),i(4358,"p"),e(4359,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(4360,"tr",19)(4361,"td",20)(4362,"div",21)(4363,"span",22),e(4364," sortable"),o(4365,"br"),t()()(),i(4366,"td",23)(4367,"code",24),e(4368,"boolean"),t()(),i(4369,"td",26)(4370,"em")(4371,"strong"),e(4372,"(opcional)"),t()(),i(4373,"p"),e(4374,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(4375,"tr",19)(4376,"td",20)(4377,"div",21)(4378,"span",22),e(4379," subtitles"),o(4380,"br"),t()()(),i(4381,"td",23)(4382,"code",105),e(4383,"Array<PoTableSubtitleColumn>"),t()(),i(4384,"td",26)(4385,"em")(4386,"strong"),e(4387,"(opcional)"),t()(),i(4388,"p"),e(4389,"Define um array de objetos para as colunas de legenda. Onde, "),i(4390,"code"),e(4391,"subtitles"),t(),e(4392,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(4393,"pre")(4394,"code"),e(4395,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),t()(),i(4396,"p"),e(4397,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(4398,"tr",19)(4399,"td",20)(4400,"div",21)(4401,"span",22),e(4402," tooltip"),o(4403,"br"),t()()(),i(4404,"td",23)(4405,"code",38),e(4406,"string"),t()(),i(4407,"td",26)(4408,"em")(4409,"strong"),e(4410,"(opcional)"),t()(),i(4411,"p"),e(4412,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(4413,"em"),e(4414,"mouse"),t(),e(4415," sobre um texto."),t(),i(4416,"blockquote")(4417,"p"),e(4418,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(4419,"em"),e(4420,"link"),t(),e(4421,"."),t()(),i(4422,"blockquote")(4423,"p"),e(4424,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(4425,"em"),e(4426,"tooltip"),t(),e(4427," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(4428,"tr",19)(4429,"td",20)(4430,"div",21)(4431,"span",22),e(4432," type"),o(4433,"br"),t()()(),i(4434,"td",23)(4435,"code",38),e(4436,"string"),t()(),i(4437,"td",26)(4438,"em")(4439,"strong"),e(4440,"(opcional)"),t()(),i(4441,"p"),e(4442,"Tipo da coluna."),t(),i(4443,"p"),e(4444,"Valores v\xE1lidos:"),t(),i(4445,"ul")(4446,"li")(4447,"p")(4448,"code"),e(4449,"boolean"),t(),e(4450,": Exibir\xE1 por padr\xE3o "),i(4451,"code"),e(4452,"Sim"),t(),e(4453," e "),i(4454,"code"),e(4455,"N\xE3o"),t(),e(4456," de acordo com os valores "),i(4457,"em"),e(4458,"booleanos"),t(),e(4459,"."),t(),i(4460,"blockquote")(4461,"p"),e(4462,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(4463,"code"),e(4464,"boolean"),t(),e(4465," desta interface."),t()()(),i(4466,"li")(4467,"p")(4468,"code"),e(4469,"currency"),t(),e(4470,": valores monet\xE1rios."),t()(),i(4471,"li")(4472,"p")(4473,"code"),e(4474,"date"),t(),e(4475,": valor de datas."),t(),i(4476,"ul")(4477,"li"),e(4478,"Aceita os tipos "),i(4479,"em"),e(4480,"string"),t(),e(4481," e "),i(4482,"em"),e(4483,"Date"),t(),e(4484,` padr\xE3o do Javascript,
por exemplo: `),i(4485,"code"),e(4486,"'2017-11-28'"),t(),e(4487," ou "),i(4488,"code"),e(4489,"new Date(2017, 10, 28)"),t(),e(4490,"."),t()()(),i(4491,"li")(4492,"p")(4493,"code"),e(4494,"dateTime"),t(),e(4495,": valor de data com hor\xE1rio."),t(),i(4496,"ul")(4497,"li"),e(4498,"Aceita o tipo "),i(4499,"em"),e(4500,"string"),t(),e(4501," no formato "),i(4502,"strong"),e(4503,"ISO-8601"),t(),e(4504," extendido "),i(4505,"strong"),e(4506,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4507,`
e o tipo `),i(4508,"em"),e(4509,"Date"),t(),e(4510," padr\xE3o do Javascript, por exemplo: "),i(4511,"code"),e(4512,"'2017-11-28T00:00:00-02:00'"),t(),e(4513," ou "),i(4514,"code"),e(4515,"new Date(2017, 10, 28)"),t(),e(4516,"."),t()()(),i(4517,"li")(4518,"p")(4519,"code"),e(4520,"detail"),t(),e(4521,": array de objetos para o master-detail."),t(),i(4522,"ul")(4523,"li"),e(4524,"Incompat\xEDvel com "),i(4525,"code"),e(4526,"virtual-scroll"),t(),e(4527,", que requer altura fixa nas linhas."),t()()(),i(4528,"li")(4529,"p")(4530,"code"),e(4531,"icon"),t(),e(4532,": "),i(4533,"em"),e(4534,"array"),t(),e(4535," de "),i(4536,"em"),e(4537,"string"),t(),e(4538," ou objetos para a coluna de \xEDcones."),t()(),i(4539,"li")(4540,"p")(4541,"code"),e(4542,"label"),t(),e(4543,": texto com destaque."),t()(),i(4544,"li")(4545,"p")(4546,"code"),e(4547,"link"),t(),e(4548,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(4549,"li")(4550,"p")(4551,"code"),e(4552,"number"),t(),e(4553,": valores num\xE9ricos."),t()(),i(4554,"li")(4555,"p")(4556,"code"),e(4557,"string"),t(),e(4558,": textos."),t()(),i(4559,"li")(4560,"p")(4561,"code"),e(4562,"subtitle"),t(),e(4563,": array de objetos para a coluna de legenda."),t()(),i(4564,"li")(4565,"p")(4566,"code"),e(4567,"time"),t(),e(4568,": valor de hor\xE1rio."),t(),i(4569,"ul")(4570,"li"),e(4571,"Aceita o tipo "),i(4572,"em"),e(4573,"string"),t(),e(4574," nos formatos "),i(4575,"strong"),e(4576,"'HH:mm:ss'"),t(),e(4577," ou "),i(4578,"strong"),e(4579,"'HH:mm:ss.ffffff'"),t(),e(4580,", por exemplo: "),i(4581,"code"),e(4582,"'23:12:45'"),t(),e(4583,"."),t()()(),i(4584,"li")(4585,"p")(4586,"code"),e(4587,"cellTemplate"),t(),e(4588,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4589,"a",106),e(4590,"PoTableCellTemplate"),t(),e(4591,"."),t()(),i(4592,"li")(4593,"p")(4594,"code"),e(4595,"columnTemplate"),t(),e(4596,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4597,"a",107),e(4598,"PoTableColumnTemplate"),t(),e(4599,"."),t()()()()(),i(4600,"tr",19)(4601,"td",20)(4602,"div",21)(4603,"span",22),e(4604," visible"),o(4605,"br"),t()()(),i(4606,"td",23)(4607,"code",24),e(4608,"boolean"),t()(),i(4609,"td",26)(4610,"em")(4611,"strong"),e(4612,"(opcional)"),t()(),i(4613,"p"),e(4614,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(4615,"strong"),e(4616,"gerenciador de colunas"),t(),e(4617,"."),t(),i(4618,"blockquote")(4619,"p"),e(4620,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(4621,"code"),e(4622,"p-max-columns"),t(),e(4623,"."),t()()()(),i(4624,"tr",19)(4625,"td",20)(4626,"div",21)(4627,"span",22),e(4628," width"),o(4629,"br"),t()()(),i(4630,"td",23)(4631,"code",51),e(4632,"number "),t(),i(4633,"code",38),e(4634," string"),t()(),i(4635,"td",26)(4636,"em")(4637,"strong"),e(4638,"(opcional)"),t()(),i(4639,"p"),e(4640,"Caso seja passado o formato "),i(4641,"code"),e(4642,"number"),t(),e(4643,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(4644,"blockquote")(4645,"p"),e(4646,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(4647,"po-accordion-item",108)(4648,"h4",9)(4649,"code"),e(4650,"CustomEditProperties"),t()(),i(4651,"div",10)(4652,"p"),e(4653,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(4654,"strong"),e(4655,"editProperties"),t(),e(4656,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(4657,"a",109),e(4658,"PoDynamicFormField"),t(),e(4659,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(4660,"h4",15),e(4661,"Propriedades"),t(),i(4662,"table",16)(4663,"tr",17)(4664,"th",18),e(4665,"Nome"),t(),i(4666,"th",18),e(4667,"Tipo"),t(),i(4668,"th",18),e(4669,"Descri\xE7\xE3o"),t()(),i(4670,"tr",19)(4671,"td",20)(4672,"div",21)(4673,"span",22),e(4674," componentEditable"),o(4675,"br"),t()()(),i(4676,"td",23)(4677,"code",110),e(4678,"'input' "),t(),i(4679,"code",111),e(4680," 'number' "),t(),i(4681,"code",112),e(4682," 'select' "),t(),i(4683,"code",113),e(4684," 'datepicker' "),t(),i(4685,"code",114),e(4686," 'switch' "),t(),i(4687,"code",115),e(4688," 'combo' "),t(),i(4689,"code",116),e(4690," 'multiselect' "),t(),i(4691,"code",117),e(4692," 'decimal' "),t(),i(4693,"code",118),e(4694," 'checkbox' "),t(),i(4695,"code",119),e(4696," 'lookup'"),t()(),i(4697,"td",26)(4698,"em")(4699,"strong"),e(4700,"(opcional)"),t()(),i(4701,"p"),e(4702,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(4703,"blockquote")(4704,"p"),e(4705,"O valor padr\xE3o \xE9 "),i(4706,"code"),e(4707,"input"),t(),e(4708,"."),t()()()(),i(4709,"tr",19)(4710,"td",20)(4711,"div",21)(4712,"span",22),e(4713," componentSize"),o(4714,"br"),t()()(),i(4715,"td",23)(4716,"code",120),e(4717,"'small' "),t(),i(4718,"code",121),e(4719," 'medium' "),t(),i(4720,"code",122),e(4721," 'large'"),t()(),i(4722,"td",26)(4723,"em")(4724,"strong"),e(4725,"(opcional)"),t()(),i(4726,"p"),e(4727,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4728,"ul")(4729,"li")(4730,"code"),e(4731,"small"),t(),e(4732,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4733,"li")(4734,"code"),e(4735,"medium"),t(),e(4736,": aplica a medida medium de cada componente."),t(),i(4737,"li")(4738,"code"),e(4739,"large"),t(),e(4740,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4741,"code"),e(4742,"po-checkbox"),t(),e(4743," e "),i(4744,"code"),e(4745,"po-radio-group"),t(),e(4746,")."),i(4747,"blockquote")(4748,"p"),e(4749,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4750,"code"),e(4751,"medium"),t(),e(4752,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4753,"a",39),e(4754,"po-theme"),t(),e(4755,"."),t()()()()()(),i(4756,"tr",19)(4757,"td",20)(4758,"div",21)(4759,"span",22),e(4760," controlValueWithLabel"),o(4761,"br"),t()()(),i(4762,"td",23)(4763,"code",24),e(4764,"boolean"),t()(),i(4765,"td",26)(4766,"em")(4767,"strong"),e(4768,"(opcional)"),t()(),i(4769,"p"),e(4770,"Determina se os componentes "),i(4771,"code"),e(4772,"select"),t(),e(4773,", "),i(4774,"code"),e(4775,"combo"),t(),e(4776,", "),i(4777,"code"),e(4778,"multiselect"),t(),e(4779," e "),i(4780,"code"),e(4781,"thf-lookup"),t(),e(4782,`
devem exibir o `),i(4783,"code"),e(4784,"label"),t(),e(4785," ao inv\xE9s de "),i(4786,"code"),e(4787,"value"),t(),e(4788," na grid"),t()()(),i(4789,"tr",19)(4790,"td",20)(4791,"div",21)(4792,"span",22),e(4793," customItems"),o(4794,"br"),t()()(),i(4795,"td",23)(4796,"code",53),e(4797,"Array<any>"),t()(),i(4798,"td",26)(4799,"em")(4800,"strong"),e(4801,"(opcional)"),t()(),i(4802,"p"),e(4803,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t(),i(4804,"blockquote")(4805,"p")(4806,"strong"),e(4807,"Componente compat\xEDvel"),t(),e(4808,": "),i(4809,"code"),e(4810,"thf-lookup"),t()()()()(),i(4811,"tr",19)(4812,"td",20)(4813,"div",21)(4814,"span",22),e(4815," disabled"),o(4816,"br"),t()()(),i(4817,"td",23)(4818,"code",24),e(4819,"boolean "),t(),i(4820,"code",123),e(4821," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4822,"td",26)(4823,"em")(4824,"strong"),e(4825,"(opcional)"),t()(),i(4826,"p"),e(4827,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(4828,"tr",19)(4829,"td",20)(4830,"div",21)(4831,"span",22),e(4832," fieldFormat"),o(4833,"br"),t()()(),i(4834,"td",23)(4835,"code",48),e(4836,"Array<string> "),t(),i(4837,"code",124),e(4838," ((item: any) => string)"),t()(),i(4839,"td",26)(4840,"em")(4841,"strong"),e(4842,"(opcional)"),t()(),i(4843,"p"),e(4844,"Formato de exibi\xE7\xE3o do campo."),t(),i(4845,"p"),e(4846,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(4847,"em"),e(4848,"string"),t(),e(4849," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(4850,"pre")(4851,"code",31),e(4852,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"`),t()(),i(4853,"blockquote")(4854,"p"),e(4855,"Componente compat\xEDvel: "),i(4856,"code"),e(4857,"thf-lookup"),t(),e(4858,"."),t()()()(),i(4859,"tr",19)(4860,"td",20)(4861,"div",21)(4862,"span",22),e(4863," filterSearchSelect"),o(4864,"br"),t()()(),i(4865,"td",23)(4866,"code",125),e(4867,"Array<ThfLookupFilterSearchSelect>"),t()(),i(4868,"td",26)(4869,"em")(4870,"strong"),e(4871,"(opcional)"),t()(),i(4872,"p"),e(4873,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(4874,"blockquote")(4875,"p"),e(4876,"Componente compat\xEDvel: "),i(4877,"code"),e(4878,"thf-lookup"),t(),e(4879,"."),t()()()(),i(4880,"tr",19)(4881,"td",20)(4882,"div",21)(4883,"span",22),e(4884," keysLabel"),o(4885,"br"),t()()(),i(4886,"td",23)(4887,"code",126),e(4888,"Array<ThfLookupKeysLabel>"),t()(),i(4889,"td",26)(4890,"em")(4891,"strong"),e(4892,"(opcional)"),t()(),i(4893,"p"),e(4894,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(4895,"blockquote")(4896,"p"),e(4897,"Componente compat\xEDvel: "),i(4898,"code"),e(4899,"thf-lookup"),t(),e(4900,"."),t()()()(),i(4901,"tr",19)(4902,"td",20)(4903,"div",21)(4904,"span",22),e(4905," locale"),o(4906,"br"),t()()(),i(4907,"td",23)(4908,"code",38),e(4909,"string"),t()(),i(4910,"td",26)(4911,"em")(4912,"strong"),e(4913,"(opcional)"),t()(),i(4914,"p"),e(4915,`Define a localidade a ser utilizada no modo de edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4916,"a",104)(4917,"code"),e(4918,"I18n"),t()()(),i(4919,"p"),e(4920,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4921,"pre")(4922,"code"),e(4923,`columnWithItems: Array<ThfGridColumn> = [
 {
   property: 'currency',
   type: 'currency',
   editProperties: {
     componentEditable: 'decimal',
     locale: 'en'
   },
},`),t()(),i(4924,"blockquote")(4925,"p"),e(4926,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4927,"p"),e(4928,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4929,"p"),e(4930,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4931,"a",104)(4932,"code"),e(4933,"I18n"),t()()()(),i(4934,"p"),e(4935,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4936,"pre")(4937,"code"),e(4938,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(4939,"blockquote")(4940,"p"),e(4941,"A propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4942,"p")(4943,"strong"),e(4944,"Componentes compat\xEDveis"),t(),e(4945,": "),i(4946,"code"),e(4947,"decimal"),t()()(),i(4948,"blockquote")(4949,"p"),e(4950,"Caso seja definida em conjunto com a propriedade "),i(4951,"code"),e(4952,"locale"),t(),e(4953," da coluna, o "),i(4954,"code"),e(4955,"editProperties.locale"),t(),e(4956," ter\xE1 prioridade ao habilitar a edi\xE7\xE3o de uma linha e o "),i(4957,"code"),e(4958,"locale"),t(),e(4959," da coluna ser\xE1 utilizado apenas para exibi\xE7\xE3o."),t()()()(),i(4960,"tr",19)(4961,"td",20)(4962,"div",21)(4963,"span",22),e(4964," lookupGridProperties"),o(4965,"br"),t()()(),i(4966,"td",23)(4967,"code",127),e(4968,"ThfLookupGridProperties"),t()(),i(4969,"td",26)(4970,"em")(4971,"strong"),e(4972,"(opcional)"),t()(),i(4973,"p"),e(4974,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(4975,"blockquote")(4976,"p")(4977,"strong"),e(4978,"Componentes compat\xEDveis"),t(),e(4979,": thf-lookup`"),t()()()(),i(4980,"tr",19)(4981,"td",20)(4982,"div",21)(4983,"span",22),e(4984," onBlur"),o(4985,"br"),t()()(),i(4986,"td",23)(4987,"code",27),e(4988,"Function"),t()(),i(4989,"td",26)(4990,"em")(4991,"strong"),e(4992,"(opcional)"),t()(),i(4993,"p"),e(4994,"Evento disparado ao sair do campo."),t(),i(4995,"blockquote")(4996,"p")(4997,"strong"),e(4998,"Componentes compat\xEDveis"),t(),e(4999,": "),i(5e3,"code"),e(5001,"po-input"),t(),e(5002,", "),i(5003,"code"),e(5004,"po-number"),t(),e(5005,", "),i(5006,"code"),e(5007,"po-decimal"),t(),e(5008,", "),i(5009,"code"),e(5010,"po-datepicker"),t(),e(5011,", "),i(5012,"code"),e(5013,"po-select"),t(),e(5014,", "),i(5015,"code"),e(5016,"po-combo"),t(),e(5017,", "),i(5018,"code"),e(5019,"po-multiselect"),t(),e(5020,", "),i(5021,"code"),e(5022,"po-checkbox"),t()()()()(),i(5023,"tr",19)(5024,"td",20)(5025,"div",21)(5026,"span",22),e(5027," onChange"),o(5028,"br"),t()()(),i(5029,"td",23)(5030,"code",128),e(5031,"(value: any) => void"),t()(),i(5032,"td",26)(5033,"em")(5034,"strong"),e(5035,"(opcional)"),t()(),i(5036,"p"),e(5037,"Evento disparado ao alterar valor e deixar o campo."),t(),i(5038,"blockquote")(5039,"p")(5040,"strong"),e(5041,"Componentes compat\xEDveis"),t(),e(5042,": "),i(5043,"code"),e(5044,"po-input"),t(),e(5045,", "),i(5046,"code"),e(5047,"po-number"),t(),e(5048,", "),i(5049,"code"),e(5050,"po-decimal"),t(),e(5051,", "),i(5052,"code"),e(5053,"po-datepicker"),t(),e(5054,", "),i(5055,"code"),e(5056,"po-select"),t(),e(5057,", "),i(5058,"code"),e(5059,"po-switch"),t(),e(5060,", "),i(5061,"code"),e(5062,"po-combo"),t(),e(5063,", "),i(5064,"code"),e(5065,"po-multiselect"),t(),e(5066,", "),i(5067,"code"),e(5068,"po-checkbox"),t(),e(5069,", "),i(5070,"code"),e(5071,"thf-lookup"),t()()()()(),i(5072,"tr",19)(5073,"td",20)(5074,"div",21)(5075,"span",22),e(5076," onChangeModel"),o(5077,"br"),t()()(),i(5078,"td",23)(5079,"code",129),e(5080,"(model: any) => void"),t()(),i(5081,"td",26)(5082,"em")(5083,"strong"),e(5084,"(opcional)"),t()(),i(5085,"p"),e(5086,"Evento disparado ao alterar valor do model."),t(),i(5087,"blockquote")(5088,"p")(5089,"strong"),e(5090,"Componentes compat\xEDveis"),t(),e(5091,": "),i(5092,"code"),e(5093,"po-input"),t(),e(5094,", "),i(5095,"code"),e(5096,"po-number"),t(),e(5097,", "),i(5098,"code"),e(5099,"po-decimal"),t(),e(5100,", "),i(5101,"code"),e(5102,"po-select"),t(),e(5103,", "),i(5104,"code"),e(5105,"po-combo"),t(),e(5106,", "),i(5107,"code"),e(5108,"thf-lookup"),t()()()()(),i(5109,"tr",19)(5110,"td",20)(5111,"div",21)(5112,"span",22),e(5113," onEnter"),o(5114,"br"),t()()(),i(5115,"td",23)(5116,"code",27),e(5117,"Function"),t()(),i(5118,"td",26)(5119,"em")(5120,"strong"),e(5121,"(opcional)"),t()(),i(5122,"p"),e(5123,"Evento disparado ao entrar no campo."),t(),i(5124,"blockquote")(5125,"p")(5126,"strong"),e(5127,"Componentes compat\xEDveis"),t(),e(5128,": "),i(5129,"code"),e(5130,"po-input"),t(),e(5131,", "),i(5132,"code"),e(5133,"po-number"),t(),e(5134,", "),i(5135,"code"),e(5136,"po-decimal"),t()()()()(),i(5137,"tr",19)(5138,"td",20)(5139,"div",21)(5140,"span",22),e(5141," onError"),o(5142,"br"),t()()(),i(5143,"td",23)(5144,"code",130),e(5145,"(error: HttpErrorResponse) => void"),t()(),i(5146,"td",26)(5147,"em")(5148,"strong"),e(5149,"(opcional)"),t()(),i(5150,"p"),e(5151,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(5152,"blockquote")(5153,"p")(5154,"strong"),e(5155,"Componente compat\xEDvel"),t(),e(5156,": "),i(5157,"code"),e(5158,"thf-lookup"),t()()()()(),i(5159,"tr",19)(5160,"td",20)(5161,"div",21)(5162,"span",22),e(5163," onFocus"),o(5164,"br"),t()()(),i(5165,"td",23)(5166,"code",27),e(5167,"Function"),t()(),i(5168,"td",26)(5169,"em")(5170,"strong"),e(5171,"(opcional)"),t()(),i(5172,"p"),e(5173,"Callback disparado quando o campo recebe foco."),t(),i(5174,"blockquote")(5175,"p")(5176,"strong"),e(5177,"Componente compat\xEDvel"),t(),e(5178,": "),i(5179,"code"),e(5180,"thf-lookup"),t()()()()(),i(5181,"tr",19)(5182,"td",20)(5183,"div",21)(5184,"span",22),e(5185," onInputChange"),o(5186,"br"),t()()(),i(5187,"td",23)(5188,"code",128),e(5189,"(value: any) => void"),t()(),i(5190,"td",26)(5191,"em")(5192,"strong"),e(5193,"(opcional)"),t()(),i(5194,"p"),e(5195,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(5196,"blockquote")(5197,"p")(5198,"strong"),e(5199,"Componente compat\xEDvel"),t(),e(5200,": "),i(5201,"code"),e(5202,"po-combo"),t()()()()(),i(5203,"tr",19)(5204,"td",20)(5205,"div",21)(5206,"span",22),e(5207," onSelected"),o(5208,"br"),t()()(),i(5209,"td",23)(5210,"code",131),e(5211,"(selection: any "),t(),i(5212,"code",132),e(5213," Array<any>) => void"),t()(),i(5214,"td",26)(5215,"em")(5216,"strong"),e(5217,"(opcional)"),t()(),i(5218,"p"),e(5219,"Callback disparado ao selecionar item(s)."),t(),i(5220,"blockquote")(5221,"p")(5222,"strong"),e(5223,"Componente compat\xEDvel"),t(),e(5224,": "),i(5225,"code"),e(5226,"thf-lookup"),t()()()()(),i(5227,"tr",19)(5228,"td",20)(5229,"div",21)(5230,"span",22),e(5231," readonly"),o(5232,"br"),t()()(),i(5233,"td",23)(5234,"code",24),e(5235,"boolean "),t(),i(5236,"code",123),e(5237," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(5238,"td",26)(5239,"em")(5240,"strong"),e(5241,"(opcional)"),t()(),i(5242,"p"),e(5243,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(5244,"tr",19)(5245,"td",20)(5246,"div",21)(5247,"span",22),e(5248," required"),o(5249,"br"),t()()(),i(5250,"td",23)(5251,"code",24),e(5252,"boolean"),t()(),i(5253,"td",26)(5254,"em")(5255,"strong"),e(5256,"(opcional)"),t()(),i(5257,"p"),e(5258,"Define a obrigatoriedade do campo."),t(),i(5259,"blockquote")(5260,"p"),e(5261,"Caso seja definido como "),i(5262,"code"),e(5263,"true"),t(),e(5264,', exibe a label "(Obrigat\xF3rio)" na coluna.'),t()()()(),i(5265,"tr",19)(5266,"td",20)(5267,"div",21)(5268,"span",22),e(5269," size"),o(5270,"br"),t()()(),i(5271,"td",23)(5272,"code",133),e(5273,"'sm' "),t(),i(5274,"code",134),e(5275," 'md' "),t(),i(5276,"code",135),e(5277," 'lg' "),t(),i(5278,"code",136),e(5279," 'xl' "),t(),i(5280,"code",137),e(5281," 'auto'"),t()(),i(5282,"td",26)(5283,"em")(5284,"strong"),e(5285,"(opcional)"),t()(),i(5286,"p"),e(5287,"Propriedade para definir o tamanho do modal."),t(),i(5288,"blockquote")(5289,"p"),e(5290,"Componente compat\xEDvel: "),i(5291,"code"),e(5292,"thf-lookup"),t(),e(5293,"."),t()()()()()(),i(5294,"po-accordion-item",138)(5295,"h4",9)(5296,"code"),e(5297,"ThfGridDeleteService"),t()(),i(5298,"div",10)(5299,"p"),e(5300,"Interface para excluir algum item via servi\xE7o."),t()(),i(5301,"table",62)(5302,"tr",19)(5303,"th",63)(5304,"div",21)(5305,"h4")(5306,"span",22),e(5307," deleteItem "),t()()()()(),i(5308,"tr",26)(5309,"td",26)(5310,"p"),e(5311,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(5312,"em"),e(5313,"Observable"),t(),e(5314,"."),t()()()(),i(5315,"h5")(5316,"b"),e(5317,"Par\xE2metros"),t()(),i(5318,"table",16)(5319,"tr",17)(5320,"th",18),e(5321,"Nome"),t(),i(5322,"th",18),e(5323,"Tipo"),t(),i(5324,"th",18),e(5325,"Descri\xE7\xE3o"),t()(),i(5326,"tr",19)(5327,"td",20),e(5328," selectedRow"),t(),i(5329,"td",23)(5330,"code",64),e(5331," any "),t()(),i(5332,"td",26)(5333,"p"),e(5334,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(5335,"tr",19)(5336,"td",20),e(5337," filterParams"),t(),i(5338,"td",23)(5339,"code",64),e(5340," any "),t()(),i(5341,"td",26)(5342,"p"),e(5343,"Valor informado atrav\xE9s da propriedade "),i(5344,"code"),e(5345,"t-param-delete-api"),t(),e(5346,"."),t()()(),i(5347,"tr",19)(5348,"td",20),e(5349," keyValue"),t(),i(5350,"td",23)(5351,"code",64),e(5352," string "),t()(),i(5353,"td",26)(5354,"p"),e(5355,"Valor informado caso tenha alguma coluna com a propriedade "),i(5356,"code"),e(5357,"key"),t(),e(5358," ativa ou o valor da propriedade "),i(5359,"code"),e(5360,"id"),t(),e(5361,"."),t()()()(),o(5362,"br"),i(5363,"table",62)(5364,"tr",19)(5365,"th",63)(5366,"div",21)(5367,"h4")(5368,"span",22),e(5369," deleteBatchItems "),t()()()()(),i(5370,"tr",26)(5371,"td",26)(5372,"p"),e(5373,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(5374,"code"),e(5375,"t-allow-batch-delete"),t(),e(5376,` habilitada, deve-se retornar
um `),i(5377,"em"),e(5378,"Observable"),t(),e(5379,"."),t(),i(5380,"p"),e(5381,"Ao habilitar a propriedade "),i(5382,"code"),e(5383,"t-allow-batch-delete"),t(),e(5384,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(5385,"h5")(5386,"b"),e(5387,"Par\xE2metros"),t()(),i(5388,"table",16)(5389,"tr",17)(5390,"th",18),e(5391,"Nome"),t(),i(5392,"th",18),e(5393,"Tipo"),t(),i(5394,"th",18),e(5395,"Descri\xE7\xE3o"),t()(),i(5396,"tr",19)(5397,"td",20),e(5398," selectedRows"),t(),i(5399,"td",23)(5400,"code",64),e(5401," any "),t()(),i(5402,"td",26)(5403,"p"),e(5404,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(5405,"tr",19)(5406,"td",20),e(5407," paramDelete"),t(),i(5408,"td",23)(5409,"code",64),e(5410," any "),t()(),i(5411,"td",26)(5412,"p"),e(5413,"Valor informado atrav\xE9s da propriedade "),i(5414,"code"),e(5415,"t-param-delete-api"),t(),e(5416,"."),t()()(),i(5417,"tr",19)(5418,"td",20),e(5419," keys"),t(),i(5420,"td",23)(5421,"code",64),e(5422," string "),t()(),i(5423,"td",26)(5424,"p"),e(5425,"Valor informado caso tenha alguma coluna com a propriedade "),i(5426,"code"),e(5427,"key"),t(),e(5428," ativa ou o valor da propriedade "),i(5429,"code"),e(5430,"id"),t(),e(5431,"."),t()()()(),o(5432,"br"),t(),i(5433,"po-accordion-item",139)(5434,"h4",9)(5435,"code"),e(5436,"ThfGridEditProperties"),t()(),i(5437,"div",10)(5438,"p"),e(5439,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(5440,"strong"),e(5441,"t-edit-properties"),t(),e(5442,")."),t()(),i(5443,"h4",15),e(5444,"Propriedades"),t(),i(5445,"table",16)(5446,"tr",17)(5447,"th",18),e(5448,"Nome"),t(),i(5449,"th",18),e(5450,"Tipo"),t(),i(5451,"th",18),e(5452,"Descri\xE7\xE3o"),t()(),i(5453,"tr",19)(5454,"td",20)(5455,"div",21)(5456,"span",22),e(5457," actionEdit"),o(5458,"br"),t()()(),i(5459,"td",23)(5460,"code",140),e(5461,"(param: any) => FormGroup"),t()(),i(5462,"td",26)(5463,"p"),e(5464,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5465,"code"),e(5466,"property"),t(),e(5467," da coluna desejada."),t(),i(5468,"p"),e(5469,"Exemplo de envio para a API:"),t(),i(5470,"pre")(5471,"code",28),e(5472,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>`),t()(),i(5473,"pre")(5474,"code",31),e(5475,`form: FormGroup;
editProperties: ThfGridEditProperties;

ngOnInit() {
  this.editProperties = {
    actionEdit: this.setFormGroup.bind(this),
    validate: this.changeValueForm.bind(this) // PROPRIEDADE OPCIONAL
  };
}

setFormGroup(dataItem) {
  const genreDescription = this.columns1.find(column => column.property === 'genreDescription');
  genreDescription.editProperties.disabled = true;
  genreDescription.editProperties.options = this.appService.getCity(dataItem.genre);
  this.form = new FormGroup({
    id: new FormControl(dataItem.id, [Validators.required]) // ID \xC9 OBRIGAT\xD3RIO,
    city: new FormControl(dataItem.city),
    email: new FormControl(dataItem.email),
    birthdate: new FormControl(dataItem.birthdate),
    genre: new FormControl(dataItem.genre),
    status: new FormControl(dataItem.status),
    genreDescription: new FormControl(dataItem.genreDescription, [Validators.required])
  });
  return this.form;
};`),t()()()(),i(5476,"tr",19)(5477,"td",20)(5478,"div",21)(5479,"span",22),e(5480," validate"),o(5481,"br"),t()()(),i(5482,"td",23)(5483,"code",141),e(5484,"(data: any, columnProperty: string) => FormGroup"),t()(),i(5485,"td",26)(5486,"em")(5487,"strong"),e(5488,"(opcional)"),t()(),i(5489,"p"),e(5490,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(5491,"code"),e(5492,"property"),t(),e(5493,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5494,"code"),e(5495,"property"),t(),e(5496," da coluna desejada."),t()()()()(),i(5497,"po-accordion-item",142)(5498,"h4",9)(5499,"code"),e(5500,"ThfFilterByColumn"),t()(),i(5501,"div",10)(5502,"p"),e(5503,"Interface que define as condi\xE7\xF5es utilizadas no filtro por coluna."),t(),i(5504,"p"),e(5505,"Cada filtro pode conter "),i(5506,"strong"),e(5507,"at\xE9 duas condi\xE7\xF5es"),t(),e(5508,", combinadas pela l\xF3gica "),i(5509,"code"),e(5510,"and"),t(),e(5511," ou "),i(5512,"code"),e(5513,"or"),t(),e(5514,"."),t(),i(5515,"p"),e(5516,"Os operadores dispon\xEDveis e o tipo de valor aceito variam conforme o "),i(5517,"code"),e(5518,"type"),t(),e(5519,`
configurado na coluna (string, number, currency, date ou boolean).`),t(),i(5520,"p"),e(5521,"Para a lista completa de operadores permitidos por tipo, consulte as propriedades "),i(5522,"code"),e(5523,"operator1"),t(),e(5524," e "),i(5525,"code"),e(5526,"operator2"),t(),e(5527,"."),t()(),i(5528,"h4",15),e(5529,"Propriedades"),t(),i(5530,"table",16)(5531,"tr",17)(5532,"th",18),e(5533,"Nome"),t(),i(5534,"th",18),e(5535,"Tipo"),t(),i(5536,"th",18),e(5537,"Descri\xE7\xE3o"),t()(),i(5538,"tr",19)(5539,"td",20)(5540,"div",21)(5541,"span",22),e(5542," logic"),o(5543,"br"),t()()(),i(5544,"td",23)(5545,"code",38),e(5546,"string"),t()(),i(5547,"td",26)(5548,"em")(5549,"strong"),e(5550,"(opcional)"),t()(),i(5551,"p"),e(5552,"L\xF3gica entre as duas condi\xE7\xF5es do filtro."),t(),i(5553,"p"),e(5554,"Valores v\xE1lidos: "),i(5555,"code"),e(5556,"and"),t(),e(5557," | "),i(5558,"code"),e(5559,"or"),t(),e(5560,"."),t(),i(5561,"p"),e(5562,"Para filtros do tipo "),i(5563,"code"),e(5564,"boolean"),t(),e(5565,", a l\xF3gica ainda pode ser usada:"),t(),i(5566,"ul")(5567,"li")(5568,"code"),e(5569,"and"),t(),e(5570,": exige que ambos os checkboxes marcados sejam verdadeiros no item"),t(),i(5571,"li")(5572,"code"),e(5573,"or"),t(),e(5574,": aceita qualquer item que corresponda a um dos valores marcados"),t()()()(),i(5575,"tr",19)(5576,"td",20)(5577,"div",21)(5578,"span",22),e(5579," operator1"),o(5580,"br"),t()()(),i(5581,"td",23)(5582,"code",38),e(5583,"string"),t()(),i(5584,"td",26)(5585,"em")(5586,"strong"),e(5587,"(opcional)"),t()(),i(5588,"p"),e(5589,"Operador da primeira condi\xE7\xE3o do filtro."),t(),i(5590,"p"),e(5591,"Operadores dispon\xEDveis, dependendo do tipo da coluna:"),t(),i(5592,"p")(5593,"strong"),e(5594,"Para colunas do tipo "),i(5595,"code"),e(5596,"string"),t(),e(5597,":"),t()(),i(5598,"ul")(5599,"li")(5600,"code"),e(5601,"contains"),t(),e(5602," \u2014 cont\xE9m."),t(),i(5603,"li")(5604,"code"),e(5605,"doesnotcontain"),t(),e(5606," \u2014 n\xE3o cont\xE9m."),t(),i(5607,"li")(5608,"code"),e(5609,"eq"),t(),e(5610," \u2014 igual."),t(),i(5611,"li")(5612,"code"),e(5613,"neq"),t(),e(5614," \u2014 diferente."),t(),i(5615,"li")(5616,"code"),e(5617,"startswith"),t(),e(5618," \u2014 come\xE7a com."),t(),i(5619,"li")(5620,"code"),e(5621,"endswith"),t(),e(5622," \u2014 termina com."),t(),i(5623,"li")(5624,"code"),e(5625,"isnull"),t(),e(5626," \u2014 \xE9 nulo."),t(),i(5627,"li")(5628,"code"),e(5629,"isnotnull"),t(),e(5630," \u2014 n\xE3o \xE9 nulo."),t(),i(5631,"li")(5632,"code"),e(5633,"isempty"),t(),e(5634," \u2014 vazio ("),i(5635,"code"),e(5636,"''"),t(),e(5637,")."),t(),i(5638,"li")(5639,"code"),e(5640,"isnotempty"),t(),e(5641," \u2014 n\xE3o vazio."),t()(),i(5642,"p")(5643,"strong"),e(5644,"Para colunas "),i(5645,"code"),e(5646,"number"),t(),e(5647,", "),i(5648,"code"),e(5649,"currency"),t(),e(5650," e "),i(5651,"code"),e(5652,"date"),t(),e(5653,":"),t()(),i(5654,"ul")(5655,"li")(5656,"code"),e(5657,"eq"),t(),e(5658," \u2014 igual."),t(),i(5659,"li")(5660,"code"),e(5661,"neq"),t(),e(5662," \u2014 diferente."),t(),i(5663,"li")(5664,"code"),e(5665,"gte"),t(),e(5666," \u2014 maior ou igual."),t(),i(5667,"li")(5668,"code"),e(5669,"gt"),t(),e(5670," \u2014 maior que."),t(),i(5671,"li")(5672,"code"),e(5673,"lte"),t(),e(5674," \u2014 menor ou igual."),t(),i(5675,"li")(5676,"code"),e(5677,"lt"),t(),e(5678," \u2014 menor que."),t(),i(5679,"li")(5680,"code"),e(5681,"isnull"),t(),e(5682," \u2014 nulo."),t(),i(5683,"li")(5684,"code"),e(5685,"isnotnull"),t(),e(5686," \u2014 n\xE3o nulo."),t()(),i(5687,"p")(5688,"strong"),e(5689,"Para colunas do tipo "),i(5690,"code"),e(5691,"boolean"),t(),e(5692,", esta propriedade \xE9 ignorada."),t()()()(),i(5693,"tr",19)(5694,"td",20)(5695,"div",21)(5696,"span",22),e(5697," operator2"),o(5698,"br"),t()()(),i(5699,"td",23)(5700,"code",38),e(5701,"string"),t()(),i(5702,"td",26)(5703,"em")(5704,"strong"),e(5705,"(opcional)"),t()(),i(5706,"p"),e(5707,"Operador da segunda condi\xE7\xE3o do filtro."),t(),i(5708,"p"),e(5709,"Funciona exatamente como "),i(5710,"code"),e(5711,"operator1"),t(),e(5712,`, respeitando os operadores v\xE1lidos para o tipo
da coluna.`),t(),i(5713,"p"),e(5714,"Ignorado para filtros do tipo "),i(5715,"code"),e(5716,"boolean"),t(),e(5717,"."),t()()(),i(5718,"tr",19)(5719,"td",20)(5720,"div",21)(5721,"span",22),e(5722," property"),o(5723,"br"),t()()(),i(5724,"td",23)(5725,"code",38),e(5726,"string"),t()(),i(5727,"td",26)(5728,"p"),e(5729,"Nome da propriedade da coluna que ter\xE1 o filtro aplicado."),t()()(),i(5730,"tr",19)(5731,"td",20)(5732,"div",21)(5733,"span",22),e(5734," value1"),o(5735,"br"),t()()(),i(5736,"td",23)(5737,"code",143),e(5738,"any"),t()(),i(5739,"td",26)(5740,"p"),e(5741,"Valor comparado na primeira condi\xE7\xE3o do filtro."),t(),i(5742,"ul")(5743,"li"),e(5744,"Para "),i(5745,"code"),e(5746,"string"),t(),e(5747,", "),i(5748,"code"),e(5749,"number"),t(),e(5750,", "),i(5751,"code"),e(5752,"currency"),t(),e(5753," e "),i(5754,"code"),e(5755,"date"),t(),e(5756,", corresponde ao valor informado no campo."),t(),i(5757,"li"),e(5758,"Para "),i(5759,"code"),e(5760,"boolean"),t(),e(5761,", deve ser "),i(5762,"code"),e(5763,"true"),t(),e(5764," ou "),i(5765,"code"),e(5766,"false"),t(),e(5767,", representando o estado do checkbox."),t()()()(),i(5768,"tr",19)(5769,"td",20)(5770,"div",21)(5771,"span",22),e(5772," value2"),o(5773,"br"),t()()(),i(5774,"td",23)(5775,"code",143),e(5776,"any"),t()(),i(5777,"td",26)(5778,"em")(5779,"strong"),e(5780,"(opcional)"),t()(),i(5781,"p"),e(5782,"Valor comparado na segunda condi\xE7\xE3o do filtro."),t(),i(5783,"ul")(5784,"li"),e(5785,"Para "),i(5786,"code"),e(5787,"string"),t(),e(5788,", "),i(5789,"code"),e(5790,"number"),t(),e(5791,", "),i(5792,"code"),e(5793,"currency"),t(),e(5794," e "),i(5795,"code"),e(5796,"date"),t(),e(5797,", \xE9 o valor informado na segunda entrada."),t(),i(5798,"li"),e(5799,"Para "),i(5800,"code"),e(5801,"boolean"),t(),e(5802,", \xE9 o valor associado ao segundo checkbox ("),i(5803,"code"),e(5804,"true"),t(),e(5805," ou "),i(5806,"code"),e(5807,"false"),t(),e(5808,")."),t()()()()()(),i(5809,"po-accordion-item",144)(5810,"h4",9)(5811,"code"),e(5812,"ThfGridLiterals"),t()(),i(5813,"div",10)(5814,"p"),e(5815,"Interface para customizar literais ("),i(5816,"strong"),e(5817,"t-literals"),t(),e(5818,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(5819,"h4",15),e(5820,"Propriedades"),t(),i(5821,"table",16)(5822,"tr",17)(5823,"th",18),e(5824,"Nome"),t(),i(5825,"th",18),e(5826,"Tipo"),t(),i(5827,"th",18),e(5828,"Descri\xE7\xE3o"),t()(),i(5829,"tr",19)(5830,"td",20)(5831,"div",21)(5832,"span",22),e(5833," advancedSearch"),o(5834,"br"),t()()(),i(5835,"td",23)(5836,"code",38),e(5837,"string"),t()(),i(5838,"td",26)(5839,"em")(5840,"strong"),e(5841,"(opcional)"),t()(),i(5842,"p"),e(5843,"T\xEDtulo do modal Filtros"),t()()(),i(5844,"tr",19)(5845,"td",20)(5846,"div",21)(5847,"span",22),e(5848," and"),o(5849,"br"),t()()(),i(5850,"td",23)(5851,"code",38),e(5852,"string"),t()(),i(5853,"td",26)(5854,"em")(5855,"strong"),e(5856,"(opcional)"),t()(),i(5857,"p"),e(5858,"Op\xE7\xE3o E, filtro por coluna."),t()()(),i(5859,"tr",19)(5860,"td",20)(5861,"div",21)(5862,"span",22),e(5863," averageAggregate"),o(5864,"br"),t()()(),i(5865,"td",23)(5866,"code",38),e(5867,"string"),t()(),i(5868,"td",26)(5869,"em")(5870,"strong"),e(5871,"(opcional)"),t()(),i(5872,"p"),e(5873,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(5874,"strong"),e(5875,"M\xE9dia"),t(),e(5876," (Average)"),t()()(),i(5877,"tr",19)(5878,"td",20)(5879,"div",21)(5880,"span",22),e(5881," bodyDelete"),o(5882,"br"),t()()(),i(5883,"td",23)(5884,"code",38),e(5885,"string"),t()(),i(5886,"td",26)(5887,"em")(5888,"strong"),e(5889,"(opcional)"),t()(),i(5890,"p"),e(5891,"Conte\xFAdo do modal Excluir"),t()()(),i(5892,"tr",19)(5893,"td",20)(5894,"div",21)(5895,"span",22),e(5896," bodyDeleteBatch"),o(5897,"br"),t()()(),i(5898,"td",23)(5899,"code",38),e(5900,"string"),t()(),i(5901,"td",26)(5902,"em")(5903,"strong"),e(5904,"(opcional)"),t()(),i(5905,"p"),e(5906,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(5907,"tr",19)(5908,"td",20)(5909,"div",21)(5910,"span",22),e(5911," cancel"),o(5912,"br"),t()()(),i(5913,"td",23)(5914,"code",38),e(5915,"string"),t()(),i(5916,"td",26)(5917,"em")(5918,"strong"),e(5919,"(opcional)"),t()(),i(5920,"p"),e(5921,"Label do bot\xE3o Cancelar"),t()()(),i(5922,"tr",19)(5923,"td",20)(5924,"div",21)(5925,"span",22),e(5926," checkFalse"),o(5927,"br"),t()()(),i(5928,"td",23)(5929,"code",38),e(5930,"string"),t()(),i(5931,"td",26)(5932,"em")(5933,"strong"),e(5934,"(opcional)"),t()(),i(5935,"p"),e(5936,"Checkbox n\xE3o, filtro por coluna."),t()()(),i(5937,"tr",19)(5938,"td",20)(5939,"div",21)(5940,"span",22),e(5941," checkTrue"),o(5942,"br"),t()()(),i(5943,"td",23)(5944,"code",38),e(5945,"string"),t()(),i(5946,"td",26)(5947,"em")(5948,"strong"),e(5949,"(opcional)"),t()(),i(5950,"p"),e(5951,"Checkbox sim, filtro por coluna."),t()()(),i(5952,"tr",19)(5953,"td",20)(5954,"div",21)(5955,"span",22),e(5956," columnsManager"),o(5957,"br"),t()()(),i(5958,"td",23)(5959,"code",38),e(5960,"string"),t()(),i(5961,"td",26)(5962,"em")(5963,"strong"),e(5964,"(opcional)"),t()(),i(5965,"p"),e(5966,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(5967,"tr",19)(5968,"td",20)(5969,"div",21)(5970,"span",22),e(5971," compact"),o(5972,"br"),t()()(),i(5973,"td",23)(5974,"code",38),e(5975,"string"),t()(),i(5976,"td",26)(5977,"em")(5978,"strong"),e(5979,"(opcional)"),t()(),i(5980,"p"),e(5981,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(5982,"tr",19)(5983,"td",20)(5984,"div",21)(5985,"span",22),e(5986," confirm"),o(5987,"br"),t()()(),i(5988,"td",23)(5989,"code",38),e(5990,"string"),t()(),i(5991,"td",26)(5992,"em")(5993,"strong"),e(5994,"(opcional)"),t()(),i(5995,"p"),e(5996,"Label do bot\xE3o Confirmar"),t()()(),i(5997,"tr",19)(5998,"td",20)(5999,"div",21)(6e3,"span",22),e(6001," contains"),o(6002,"br"),t()()(),i(6003,"td",23)(6004,"code",38),e(6005,"string"),t()(),i(6006,"td",26)(6007,"em")(6008,"strong"),e(6009,"(opcional)"),t()(),i(6010,"p"),e(6011,"Op\xE7\xE3o cont\xE9m, filtro por coluna."),t()()(),i(6012,"tr",19)(6013,"td",20)(6014,"div",21)(6015,"span",22),e(6016," countAggregate"),o(6017,"br"),t()()(),i(6018,"td",23)(6019,"code",38),e(6020,"string"),t()(),i(6021,"td",26)(6022,"em")(6023,"strong"),e(6024,"(opcional)"),t()(),i(6025,"p"),e(6026,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6027,"strong"),e(6028,"Contagem"),t(),e(6029," (Count)"),t()()(),i(6030,"tr",19)(6031,"td",20)(6032,"div",21)(6033,"span",22),e(6034," default"),o(6035,"br"),t()()(),i(6036,"td",23)(6037,"code",38),e(6038,"string"),t()(),i(6039,"td",26)(6040,"em")(6041,"strong"),e(6042,"(opcional)"),t()(),i(6043,"p"),e(6044,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(6045,"tr",19)(6046,"td",20)(6047,"div",21)(6048,"span",22),e(6049," delete"),o(6050,"br"),t()()(),i(6051,"td",23)(6052,"code",38),e(6053,"string"),t()(),i(6054,"td",26)(6055,"em")(6056,"strong"),e(6057,"(opcional)"),t()(),i(6058,"p"),e(6059,"Label do bot\xE3o Excluir"),t()()(),i(6060,"tr",19)(6061,"td",20)(6062,"div",21)(6063,"span",22),e(6064," deleteApiError"),o(6065,"br"),t()()(),i(6066,"td",23)(6067,"code",38),e(6068,"string"),t()(),i(6069,"td",26)(6070,"em")(6071,"strong"),e(6072,"(opcional)"),t()(),i(6073,"p"),e(6074,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(6075,"tr",19)(6076,"td",20)(6077,"div",21)(6078,"span",22),e(6079," deleteItem"),o(6080,"br"),t()()(),i(6081,"td",23)(6082,"code",38),e(6083,"string"),t()(),i(6084,"td",26)(6085,"em")(6086,"strong"),e(6087,"(opcional)"),t()(),i(6088,"p"),e(6089,"T\xEDtulo do modal Excluir"),t()()(),i(6090,"tr",19)(6091,"td",20)(6092,"div",21)(6093,"span",22),e(6094," density"),o(6095,"br"),t()()(),i(6096,"td",23)(6097,"code",38),e(6098,"string"),t()(),i(6099,"td",26)(6100,"em")(6101,"strong"),e(6102,"(opcional)"),t()(),i(6103,"p"),e(6104,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(6105,"tr",19)(6106,"td",20)(6107,"div",21)(6108,"span",22),e(6109," doesntContain"),o(6110,"br"),t()()(),i(6111,"td",23)(6112,"code",38),e(6113,"string"),t()(),i(6114,"td",26)(6115,"em")(6116,"strong"),e(6117,"(opcional)"),t()(),i(6118,"p"),e(6119,"Op\xE7\xE3o n\xE3o cont\xE9m, filtro por coluna."),t()()(),i(6120,"tr",19)(6121,"td",20)(6122,"div",21)(6123,"span",22),e(6124," draggable"),o(6125,"br"),t()()(),i(6126,"td",23)(6127,"code",38),e(6128,"string"),t()(),i(6129,"td",26)(6130,"em")(6131,"strong"),e(6132,"(opcional)"),t()(),i(6133,"p"),e(6134,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6135,"tr",19)(6136,"td",20)(6137,"div",21)(6138,"span",22),e(6139," edit"),o(6140,"br"),t()()(),i(6141,"td",23)(6142,"code",38),e(6143,"string"),t()(),i(6144,"td",26)(6145,"em")(6146,"strong"),e(6147,"(opcional)"),t()(),i(6148,"p"),e(6149,"Label do bot\xE3o Editar"),t()()(),i(6150,"tr",19)(6151,"td",20)(6152,"div",21)(6153,"span",22),e(6154," editRow"),o(6155,"br"),t()()(),i(6156,"td",23)(6157,"code",38),e(6158,"string"),t()(),i(6159,"td",26)(6160,"em")(6161,"strong"),e(6162,"(opcional)"),t()(),i(6163,"p"),e(6164,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(6165,"tr",19)(6166,"td",20)(6167,"div",21)(6168,"span",22),e(6169," endsWith"),o(6170,"br"),t()()(),i(6171,"td",23)(6172,"code",38),e(6173,"string"),t()(),i(6174,"td",26)(6175,"em")(6176,"strong"),e(6177,"(opcional)"),t()(),i(6178,"p"),e(6179,"Op\xE7\xE3o Termina com, filtro por coluna."),t()()(),i(6180,"tr",19)(6181,"td",20)(6182,"div",21)(6183,"span",22),e(6184," export"),o(6185,"br"),t()()(),i(6186,"td",23)(6187,"code",38),e(6188,"string"),t()(),i(6189,"td",26)(6190,"em")(6191,"strong"),e(6192,"(opcional)"),t()(),i(6193,"p"),e(6194,"Label do bot\xE3o Exportar"),t()()(),i(6195,"tr",19)(6196,"td",20)(6197,"div",21)(6198,"span",22),e(6199," exportExcel"),o(6200,"br"),t()()(),i(6201,"td",23)(6202,"code",38),e(6203,"string"),t()(),i(6204,"td",26)(6205,"em")(6206,"strong"),e(6207,"(opcional)"),t()(),i(6208,"p"),e(6209,"Label do bot\xE3o Exportar Excel"),t()()(),i(6210,"tr",19)(6211,"td",20)(6212,"div",21)(6213,"span",22),e(6214," exportPDF"),o(6215,"br"),t()()(),i(6216,"td",23)(6217,"code",38),e(6218,"string"),t()(),i(6219,"td",26)(6220,"em")(6221,"strong"),e(6222,"(opcional)"),t()(),i(6223,"p"),e(6224,"Label do bot\xE3o Exportar PDF"),t()()(),i(6225,"tr",19)(6226,"td",20)(6227,"div",21)(6228,"span",22),e(6229," extraCompact"),o(6230,"br"),t()()(),i(6231,"td",23)(6232,"code",38),e(6233,"string"),t()(),i(6234,"td",26)(6235,"em")(6236,"strong"),e(6237,"(opcional)"),t()(),i(6238,"p"),e(6239,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(6240,"tr",19)(6241,"td",20)(6242,"div",21)(6243,"span",22),e(6244," filterButton"),o(6245,"br"),t()()(),i(6246,"td",23)(6247,"code",38),e(6248,"string"),t()(),i(6249,"td",26)(6250,"em")(6251,"strong"),e(6252,"(opcional)"),t()(),i(6253,"p"),e(6254,"Bot\xE3o de filtrar por coluna."),t()()(),i(6255,"tr",19)(6256,"td",20)(6257,"div",21)(6258,"span",22),e(6259," filterByColumn"),o(6260,"br"),t()()(),i(6261,"td",23)(6262,"code",38),e(6263,"string"),t()(),i(6264,"td",26)(6265,"em")(6266,"strong"),e(6267,"(opcional)"),t()(),i(6268,"p"),e(6269,"Filtros, filtro por coluna."),t()()(),i(6270,"tr",19)(6271,"td",20)(6272,"div",21)(6273,"span",22),e(6274," filters"),o(6275,"br"),t()()(),i(6276,"td",23)(6277,"code",38),e(6278,"string"),t()(),i(6279,"td",26)(6280,"em")(6281,"strong"),e(6282,"(opcional)"),t()(),i(6283,"p"),e(6284,"Label do bot\xE3o Filtros"),t()()(),i(6285,"tr",19)(6286,"td",20)(6287,"div",21)(6288,"span",22),e(6289," fixed"),o(6290,"br"),t()()(),i(6291,"td",23)(6292,"code",38),e(6293,"string"),t()(),i(6294,"td",26)(6295,"em")(6296,"strong"),e(6297,"(opcional)"),t()(),i(6298,"p"),e(6299,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(6300,"tr",19)(6301,"td",20)(6302,"div",21)(6303,"span",22),e(6304," gridRowActionsConfirmAddCancelButton"),o(6305,"br"),t()()(),i(6306,"td",23)(6307,"code",38),e(6308,"string"),t()(),i(6309,"td",26)(6310,"em")(6311,"strong"),e(6312,"(opcional)"),t()(),i(6313,"p"),e(6314,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6315,"tr",19)(6316,"td",20)(6317,"div",21)(6318,"span",22),e(6319," gridRowActionsConfirmAddConfirmButton"),o(6320,"br"),t()()(),i(6321,"td",23)(6322,"code",38),e(6323,"string"),t()(),i(6324,"td",26)(6325,"em")(6326,"strong"),e(6327,"(opcional)"),t()(),i(6328,"p"),e(6329,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6330,"tr",19)(6331,"td",20)(6332,"div",21)(6333,"span",22),e(6334," gridRowActionsConfirmAddTitle"),o(6335,"br"),t()()(),i(6336,"td",23)(6337,"code",38),e(6338,"string"),t()(),i(6339,"td",26)(6340,"em")(6341,"strong"),e(6342,"(opcional)"),t()(),i(6343,"p"),e(6344,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6345,"tr",19)(6346,"td",20)(6347,"div",21)(6348,"span",22),e(6349," gridRowActionsConfirmEditTitle"),o(6350,"br"),t()()(),i(6351,"td",23)(6352,"code",38),e(6353,"string"),t()(),i(6354,"td",26)(6355,"em")(6356,"strong"),e(6357,"(opcional)"),t()(),i(6358,"p"),e(6359,'T\xEDtulo do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(6360,"tr",19)(6361,"td",20)(6362,"div",21)(6363,"span",22),e(6364," gridRowActionsConfirmRemoveAttention"),o(6365,"br"),t()()(),i(6366,"td",23)(6367,"code",38),e(6368,"string"),t()(),i(6369,"td",26)(6370,"em")(6371,"strong"),e(6372,"(opcional)"),t()(),i(6373,"p"),e(6374,'Texto de "Aten\xE7\xE3o:" do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6375,"tr",19)(6376,"td",20)(6377,"div",21)(6378,"span",22),e(6379," gridRowActionsConfirmRemoveConfirmButton"),o(6380,"br"),t()()(),i(6381,"td",23)(6382,"code",38),e(6383,"string"),t()(),i(6384,"td",26)(6385,"em")(6386,"strong"),e(6387,"(opcional)"),t()(),i(6388,"p"),e(6389,'Label do bot\xE3o "Excluir" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6390,"tr",19)(6391,"td",20)(6392,"div",21)(6393,"span",22),e(6394," gridRowActionsConfirmRemoveDescription"),o(6395,"br"),t()()(),i(6396,"td",23)(6397,"code",38),e(6398,"string"),t()(),i(6399,"td",26)(6400,"em")(6401,"strong"),e(6402,"(opcional)"),t()(),i(6403,"p"),e(6404,'Descri\xE7\xE3o do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6405,"tr",19)(6406,"td",20)(6407,"div",21)(6408,"span",22),e(6409," gridRowActionsConfirmRemoveTitle"),o(6410,"br"),t()()(),i(6411,"td",23)(6412,"code",38),e(6413,"string"),t()(),i(6414,"td",26)(6415,"em")(6416,"strong"),e(6417,"(opcional)"),t()(),i(6418,"p"),e(6419,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6420,"tr",19)(6421,"td",20)(6422,"div",21)(6423,"span",22),e(6424," gridRowActionsRestoreSuccessful"),o(6425,"br"),t()()(),i(6426,"td",23)(6427,"code",38),e(6428,"string"),t()(),i(6429,"td",26)(6430,"em")(6431,"strong"),e(6432,"(opcional)"),t()(),i(6433,"p"),e(6434,"Texto exibido ao restaurar um item exclu\xEDdo."),t()()(),i(6435,"tr",19)(6436,"td",20)(6437,"div",21)(6438,"span",22),e(6439," groupable"),o(6440,"br"),t()()(),i(6441,"td",23)(6442,"code",38),e(6443,"string"),t()(),i(6444,"td",26)(6445,"em")(6446,"strong"),e(6447,"(opcional)"),t()(),i(6448,"p"),e(6449,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6450,"tr",19)(6451,"td",20)(6452,"div",21)(6453,"span",22),e(6454," groupableText"),o(6455,"br"),t()()(),i(6456,"td",23)(6457,"code",38),e(6458,"string"),t()(),i(6459,"td",26)(6460,"em")(6461,"strong"),e(6462,"(opcional)"),t()(),i(6463,"p"),e(6464,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(6465,"tr",19)(6466,"td",20)(6467,"div",21)(6468,"span",22),e(6469," isAfter"),o(6470,"br"),t()()(),i(6471,"td",23)(6472,"code",38),e(6473,"string"),t()(),i(6474,"td",26)(6475,"em")(6476,"strong"),e(6477,"(opcional)"),t()(),i(6478,"p"),e(6479,"Op\xE7\xE3o \xC9 posterior que, filtro por coluna."),t()()(),i(6480,"tr",19)(6481,"td",20)(6482,"div",21)(6483,"span",22),e(6484," isAfterOrEqual"),o(6485,"br"),t()()(),i(6486,"td",23)(6487,"code",38),e(6488,"string"),t()(),i(6489,"td",26)(6490,"em")(6491,"strong"),e(6492,"(opcional)"),t()(),i(6493,"p"),e(6494,"Op\xE7\xE3o \xC9 posterior ou igual a, filtro por coluna."),t()()(),i(6495,"tr",19)(6496,"td",20)(6497,"div",21)(6498,"span",22),e(6499," isBefore"),o(6500,"br"),t()()(),i(6501,"td",23)(6502,"code",38),e(6503,"string"),t()(),i(6504,"td",26)(6505,"em")(6506,"strong"),e(6507,"(opcional)"),t()(),i(6508,"p"),e(6509,"Op\xE7\xE3o \xC9 anterior que, filtro por coluna."),t()()(),i(6510,"tr",19)(6511,"td",20)(6512,"div",21)(6513,"span",22),e(6514," isBeforeOrEqual"),o(6515,"br"),t()()(),i(6516,"td",23)(6517,"code",38),e(6518,"string"),t()(),i(6519,"td",26)(6520,"em")(6521,"strong"),e(6522,"(opcional)"),t()(),i(6523,"p"),e(6524,"Op\xE7\xE3o \xC9 anterior ou igual a, filtro por coluna."),t()()(),i(6525,"tr",19)(6526,"td",20)(6527,"div",21)(6528,"span",22),e(6529," isEmpty"),o(6530,"br"),t()()(),i(6531,"td",23)(6532,"code",38),e(6533,"string"),t()(),i(6534,"td",26)(6535,"em")(6536,"strong"),e(6537,"(opcional)"),t()(),i(6538,"p"),e(6539,"Op\xE7\xE3o \xC9 vazio, filtro por coluna."),t()()(),i(6540,"tr",19)(6541,"td",20)(6542,"div",21)(6543,"span",22),e(6544," isEqual"),o(6545,"br"),t()()(),i(6546,"td",23)(6547,"code",38),e(6548,"string"),t()(),i(6549,"td",26)(6550,"em")(6551,"strong"),e(6552,"(opcional)"),t()(),i(6553,"p"),e(6554,"Op\xE7\xE3o igual a, filtro por coluna."),t()()(),i(6555,"tr",19)(6556,"td",20)(6557,"div",21)(6558,"span",22),e(6559," isGreater"),o(6560,"br"),t()()(),i(6561,"td",23)(6562,"code",38),e(6563,"string"),t()(),i(6564,"td",26)(6565,"em")(6566,"strong"),e(6567,"(opcional)"),t()(),i(6568,"p"),e(6569,"Op\xE7\xE3o \xC9 maior que, filtro por coluna."),t()()(),i(6570,"tr",19)(6571,"td",20)(6572,"div",21)(6573,"span",22),e(6574," isGreaterOrEqual"),o(6575,"br"),t()()(),i(6576,"td",23)(6577,"code",38),e(6578,"string"),t()(),i(6579,"td",26)(6580,"em")(6581,"strong"),e(6582,"(opcional)"),t()(),i(6583,"p"),e(6584,"Op\xE7\xE3o \xC9 maior ou igual a, filtro por coluna."),t()()(),i(6585,"tr",19)(6586,"td",20)(6587,"div",21)(6588,"span",22),e(6589," isLess"),o(6590,"br"),t()()(),i(6591,"td",23)(6592,"code",38),e(6593,"string"),t()(),i(6594,"td",26)(6595,"em")(6596,"strong"),e(6597,"(opcional)"),t()(),i(6598,"p"),e(6599,"Op\xE7\xE3o \xC9 menor que, filtro por coluna."),t()()(),i(6600,"tr",19)(6601,"td",20)(6602,"div",21)(6603,"span",22),e(6604," isLessOrEqual"),o(6605,"br"),t()()(),i(6606,"td",23)(6607,"code",38),e(6608,"string"),t()(),i(6609,"td",26)(6610,"em")(6611,"strong"),e(6612,"(opcional)"),t()(),i(6613,"p"),e(6614,"Op\xE7\xE3o \xC9 menor ou igual que, filtro por coluna."),t()()(),i(6615,"tr",19)(6616,"td",20)(6617,"div",21)(6618,"span",22),e(6619," isNotEmpty"),o(6620,"br"),t()()(),i(6621,"td",23)(6622,"code",38),e(6623,"string"),t()(),i(6624,"td",26)(6625,"em")(6626,"strong"),e(6627,"(opcional)"),t()(),i(6628,"p"),e(6629,"Op\xE7\xE3o N\xE3o \xE9 vazio, filtro por coluna."),t()()(),i(6630,"tr",19)(6631,"td",20)(6632,"div",21)(6633,"span",22),e(6634," isNotEqual"),o(6635,"br"),t()()(),i(6636,"td",23)(6637,"code",38),e(6638,"string"),t()(),i(6639,"td",26)(6640,"em")(6641,"strong"),e(6642,"(opcional)"),t()(),i(6643,"p"),e(6644,"Op\xE7\xE3o n\xE3o igual, filtro por coluna."),t()()(),i(6645,"tr",19)(6646,"td",20)(6647,"div",21)(6648,"span",22),e(6649," isNotNull"),o(6650,"br"),t()()(),i(6651,"td",23)(6652,"code",38),e(6653,"string"),t()(),i(6654,"td",26)(6655,"em")(6656,"strong"),e(6657,"(opcional)"),t()(),i(6658,"p"),e(6659,"Op\xE7\xE3o N\xE3o \xE9 nulo, filtro por coluna."),t()()(),i(6660,"tr",19)(6661,"td",20)(6662,"div",21)(6663,"span",22),e(6664," isNull"),o(6665,"br"),t()()(),i(6666,"td",23)(6667,"code",38),e(6668,"string"),t()(),i(6669,"td",26)(6670,"em")(6671,"strong"),e(6672,"(opcional)"),t()(),i(6673,"p"),e(6674,"Op\xE7\xE3o \xC9 nulo, filtro por coluna."),t()()(),i(6675,"tr",19)(6676,"td",20)(6677,"div",21)(6678,"span",22),e(6679," legendListOptions"),o(6680,"br"),t()()(),i(6681,"td",23)(6682,"code",38),e(6683,"string"),t()(),i(6684,"td",26)(6685,"em")(6686,"strong"),e(6687,"(opcional)"),t()(),i(6688,"p"),e(6689,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6690,"tr",19)(6691,"td",20)(6692,"div",21)(6693,"span",22),e(6694," loadMoreData"),o(6695,"br"),t()()(),i(6696,"td",23)(6697,"code",38),e(6698,"string"),t()(),i(6699,"td",26)(6700,"em")(6701,"strong"),e(6702,"(opcional)"),t()(),i(6703,"p"),e(6704,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(6705,"tr",19)(6706,"td",20)(6707,"div",21)(6708,"span",22),e(6709," loadingData"),o(6710,"br"),t()()(),i(6711,"td",23)(6712,"code",38),e(6713,"string"),t()(),i(6714,"td",26)(6715,"em")(6716,"strong"),e(6717,"(opcional)"),t()(),i(6718,"p"),e(6719,"Texto do modal Carregando..."),t()()(),i(6720,"tr",19)(6721,"td",20)(6722,"div",21)(6723,"span",22),e(6724," manageTable"),o(6725,"br"),t()()(),i(6726,"td",23)(6727,"code",38),e(6728,"string"),t()(),i(6729,"td",26)(6730,"em")(6731,"strong"),e(6732,"(opcional)"),t()(),i(6733,"p"),e(6734,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(6735,"tr",19)(6736,"td",20)(6737,"div",21)(6738,"span",22),e(6739," maxAggregate"),o(6740,"br"),t()()(),i(6741,"td",23)(6742,"code",38),e(6743,"string"),t()(),i(6744,"td",26)(6745,"em")(6746,"strong"),e(6747,"(opcional)"),t()(),i(6748,"p"),e(6749,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6750,"strong"),e(6751,"M\xE1ximo"),t(),e(6752," (Max)"),t()()(),i(6753,"tr",19)(6754,"td",20)(6755,"div",21)(6756,"span",22),e(6757," minAggregate"),o(6758,"br"),t()()(),i(6759,"td",23)(6760,"code",38),e(6761,"string"),t()(),i(6762,"td",26)(6763,"em")(6764,"strong"),e(6765,"(opcional)"),t()(),i(6766,"p"),e(6767,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6768,"strong"),e(6769,"M\xEDnimo"),t(),e(6770," (Min)"),t()()(),i(6771,"tr",19)(6772,"td",20)(6773,"div",21)(6774,"span",22),e(6775," moreActions"),o(6776,"br"),t()()(),i(6777,"td",23)(6778,"code",38),e(6779,"string"),t()(),i(6780,"td",26)(6781,"em")(6782,"strong"),e(6783,"(opcional)"),t()(),i(6784,"p"),e(6785,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(6786,"tr",19)(6787,"td",20)(6788,"div",21)(6789,"span",22),e(6790," multipleItems"),o(6791,"br"),t()()(),i(6792,"td",23)(6793,"code",38),e(6794,"string"),t()(),i(6795,"td",26)(6796,"em")(6797,"strong"),e(6798,"(opcional)"),t()(),i(6799,"p"),e(6800,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(6801,"tr",19)(6802,"td",20)(6803,"div",21)(6804,"span",22),e(6805," noColumns"),o(6806,"br"),t()()(),i(6807,"td",23)(6808,"code",38),e(6809,"string"),t()(),i(6810,"td",26)(6811,"em")(6812,"strong"),e(6813,"(opcional)"),t()(),i(6814,"p"),e(6815,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(6816,"tr",19)(6817,"td",20)(6818,"div",21)(6819,"span",22),e(6820," noData"),o(6821,"br"),t()()(),i(6822,"td",23)(6823,"code",38),e(6824,"string"),t()(),i(6825,"td",26)(6826,"em")(6827,"strong"),e(6828,"(opcional)"),t()(),i(6829,"p"),e(6830,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(6831,"tr",19)(6832,"td",20)(6833,"div",21)(6834,"span",22),e(6835," noDataDescriptionRowStateFilterActive"),o(6836,"br"),t()()(),i(6837,"td",23)(6838,"code",38),e(6839,"string"),t()(),i(6840,"td",26)(6841,"em")(6842,"strong"),e(6843,"(opcional)"),t()(),i(6844,"p"),e(6845,"Descri\xE7\xE3o exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(6846,"tr",19)(6847,"td",20)(6848,"div",21)(6849,"span",22),e(6850," noDataDescriptionRowStateFilterRemoved"),o(6851,"br"),t()()(),i(6852,"td",23)(6853,"code",38),e(6854,"string"),t()(),i(6855,"td",26)(6856,"em")(6857,"strong"),e(6858,"(opcional)"),t()(),i(6859,"p"),e(6860,"Descri\xE7\xE3o exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(6861,"tr",19)(6862,"td",20)(6863,"div",21)(6864,"span",22),e(6865," noDataRowStateFilterActive"),o(6866,"br"),t()()(),i(6867,"td",23)(6868,"code",38),e(6869,"string"),t()(),i(6870,"td",26)(6871,"em")(6872,"strong"),e(6873,"(opcional)"),t()(),i(6874,"p"),e(6875,"Mensagem exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(6876,"tr",19)(6877,"td",20)(6878,"div",21)(6879,"span",22),e(6880," noDataRowStateFilterRemoved"),o(6881,"br"),t()()(),i(6882,"td",23)(6883,"code",38),e(6884,"string"),t()(),i(6885,"td",26)(6886,"em")(6887,"strong"),e(6888,"(opcional)"),t()(),i(6889,"p"),e(6890,"Mensagem exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(6891,"tr",19)(6892,"td",20)(6893,"div",21)(6894,"span",22),e(6895," noItem"),o(6896,"br"),t()()(),i(6897,"td",23)(6898,"code",38),e(6899,"string"),t()(),i(6900,"td",26)(6901,"em")(6902,"strong"),e(6903,"(opcional)"),t()(),i(6904,"p"),e(6905,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(6906,"tr",19)(6907,"td",20)(6908,"div",21)(6909,"span",22),e(6910," noneAggregate"),o(6911,"br"),t()()(),i(6912,"td",23)(6913,"code",38),e(6914,"string"),t()(),i(6915,"td",26)(6916,"em")(6917,"strong"),e(6918,"(opcional)"),t()(),i(6919,"p"),e(6920,"Texto quando "),i(6921,"strong"),e(6922,"nenhuma"),t(),e(6923," opera\xE7\xE3o de agrega\xE7\xE3o estiver selecionada (None)"),t()()(),i(6924,"tr",19)(6925,"td",20)(6926,"div",21)(6927,"span",22),e(6928," oneItem"),o(6929,"br"),t()()(),i(6930,"td",23)(6931,"code",38),e(6932,"string"),t()(),i(6933,"td",26)(6934,"em")(6935,"strong"),e(6936,"(opcional)"),t()(),i(6937,"p"),e(6938,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(6939,"tr",19)(6940,"td",20)(6941,"div",21)(6942,"span",22),e(6943," onlyRequiredFields"),o(6944,"br"),t()()(),i(6945,"td",23)(6946,"code",38),e(6947,"string"),t()(),i(6948,"td",26)(6949,"em")(6950,"strong"),e(6951,"(opcional)"),t()(),i(6952,"p"),e(6953,'Label do toggle "Apenas campos obrigat\xF3rios" na edi\xE7\xE3o flu\xEDda.'),t()()(),i(6954,"tr",19)(6955,"td",20)(6956,"div",21)(6957,"span",22),e(6958," or"),o(6959,"br"),t()()(),i(6960,"td",23)(6961,"code",38),e(6962,"string"),t()(),i(6963,"td",26)(6964,"em")(6965,"strong"),e(6966,"(opcional)"),t()(),i(6967,"p"),e(6968,"Op\xE7\xE3o OU, filtro por coluna."),t()()(),i(6969,"tr",19)(6970,"td",20)(6971,"div",21)(6972,"span",22),e(6973," orderAsc"),o(6974,"br"),t()()(),i(6975,"td",23)(6976,"code",38),e(6977,"string"),t()(),i(6978,"td",26)(6979,"em")(6980,"strong"),e(6981,"(opcional)"),t()(),i(6982,"p"),e(6983,"Ordenar ascendente, filtro por coluna."),t()()(),i(6984,"tr",19)(6985,"td",20)(6986,"div",21)(6987,"span",22),e(6988," orderDesc"),o(6989,"br"),t()()(),i(6990,"td",23)(6991,"code",38),e(6992,"string"),t()(),i(6993,"td",26)(6994,"em")(6995,"strong"),e(6996,"(opcional)"),t()(),i(6997,"p"),e(6998,"Ordenar descendente, filtro por coluna."),t()()(),i(6999,"tr",19)(7e3,"td",20)(7001,"div",21)(7002,"span",22),e(7003," otherColumns"),o(7004,"br"),t()()(),i(7005,"td",23)(7006,"code",38),e(7007,"string"),t()(),i(7008,"td",26)(7009,"em")(7010,"strong"),e(7011,"(opcional)"),t()(),i(7012,"p"),e(7013,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(7014,"tr",19)(7015,"td",20)(7016,"div",21)(7017,"span",22),e(7018," placeholderSearchInput"),o(7019,"br"),t()()(),i(7020,"td",23)(7021,"code",38),e(7022,"string"),t()(),i(7023,"td",26)(7024,"em")(7025,"strong"),e(7026,"(opcional)"),t()(),i(7027,"p"),e(7028,"Placeholder do campo Buscar na tabela"),t()()(),i(7029,"tr",19)(7030,"td",20)(7031,"div",21)(7032,"span",22),e(7033," remove"),o(7034,"br"),t()()(),i(7035,"td",23)(7036,"code",38),e(7037,"string"),t()(),i(7038,"td",26)(7039,"em")(7040,"strong"),e(7041,"(opcional)"),t()(),i(7042,"p"),e(7043,'R\xF3tulo do bot\xE3o "Limpar" exibido no painel de filtro por coluna enquanto o usu\xE1rio preenche os crit\xE9rios do filtro.'),t()()(),i(7044,"tr",19)(7045,"td",20)(7046,"div",21)(7047,"span",22),e(7048," removeFilter"),o(7049,"br"),t()()(),i(7050,"td",23)(7051,"code",38),e(7052,"string"),t()(),i(7053,"td",26)(7054,"em")(7055,"strong"),e(7056,"(opcional)"),t()(),i(7057,"p"),e(7058,'R\xF3tulo do bot\xE3o "Limpar" exibido no pop-up do filtro por coluna.'),t()()(),i(7059,"tr",19)(7060,"td",20)(7061,"div",21)(7062,"span",22),e(7063," requiredFieldsToasterDisableActionLabel"),o(7064,"br"),t()()(),i(7065,"td",23)(7066,"code",38),e(7067,"string"),t()(),i(7068,"td",26)(7069,"em")(7070,"strong"),e(7071,"(opcional)"),t()(),i(7072,"p"),e(7073,"Label da a\xE7\xE3o exibida no Toaster para desativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(7074,"tr",19)(7075,"td",20)(7076,"div",21)(7077,"span",22),e(7078," requiredFieldsToasterEnableActionLabel"),o(7079,"br"),t()()(),i(7080,"td",23)(7081,"code",38),e(7082,"string"),t()(),i(7083,"td",26)(7084,"em")(7085,"strong"),e(7086,"(opcional)"),t()(),i(7087,"p"),e(7088,"Label da a\xE7\xE3o exibida no Toaster para ativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(7089,"tr",19)(7090,"td",20)(7091,"div",21)(7092,"span",22),e(7093," requiredFieldsToasterMessage"),o(7094,"br"),t()()(),i(7095,"td",23)(7096,"code",38),e(7097,"string"),t()(),i(7098,"td",26)(7099,"em")(7100,"strong"),e(7101,"(opcional)"),t()(),i(7102,"p"),e(7103,"Texto exibido no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(7104,"tr",19)(7105,"td",20)(7106,"div",21)(7107,"span",22),e(7108," requiredFieldsToasterSupportMessage"),o(7109,"br"),t()()(),i(7110,"td",23)(7111,"code",38),e(7112,"string"),t()(),i(7113,"td",26)(7114,"em")(7115,"strong"),e(7116,"(opcional)"),t()(),i(7117,"p"),e(7118,"Mensagem de suporte exibida no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(7119,"tr",19)(7120,"td",20)(7121,"div",21)(7122,"span",22),e(7123," restoreDefault"),o(7124,"br"),t()()(),i(7125,"td",23)(7126,"code",38),e(7127,"string"),t()(),i(7128,"td",26)(7129,"em")(7130,"strong"),e(7131,"(opcional)"),t()(),i(7132,"p"),e(7133,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(7134,"tr",19)(7135,"td",20)(7136,"div",21)(7137,"span",22),e(7138," resultsByPage"),o(7139,"br"),t()()(),i(7140,"td",23)(7141,"code",38),e(7142,"string"),t()(),i(7143,"td",26)(7144,"em")(7145,"strong"),e(7146,"(opcional)"),t()(),i(7147,"p"),e(7148,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(7149,"tr",19)(7150,"td",20)(7151,"div",21)(7152,"span",22),e(7153," rowStateFilterActive"),o(7154,"br"),t()()(),i(7155,"td",23)(7156,"code",38),e(7157,"string"),t()(),i(7158,"td",26)(7159,"em")(7160,"strong"),e(7161,"(opcional)"),t()(),i(7162,"p"),e(7163,"Label do filtro para mostrar itens ativos"),t()()(),i(7164,"tr",19)(7165,"td",20)(7166,"div",21)(7167,"span",22),e(7168," rowStateFilterActiveLabel"),o(7169,"br"),t()()(),i(7170,"td",23)(7171,"code",38),e(7172,"string"),t()(),i(7173,"td",26)(7174,"em")(7175,"strong"),e(7176,"(opcional)"),t()(),i(7177,"p"),e(7178,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens ativos"),t()()(),i(7179,"tr",19)(7180,"td",20)(7181,"div",21)(7182,"span",22),e(7183," rowStateFilterRemoved"),o(7184,"br"),t()()(),i(7185,"td",23)(7186,"code",38),e(7187,"string"),t()(),i(7188,"td",26)(7189,"em")(7190,"strong"),e(7191,"(opcional)"),t()(),i(7192,"p"),e(7193,"Label do filtro para mostrar itens exclu\xEDdos"),t()()(),i(7194,"tr",19)(7195,"td",20)(7196,"div",21)(7197,"span",22),e(7198," rowStateFilterRemovedLabel"),o(7199,"br"),t()()(),i(7200,"td",23)(7201,"code",38),e(7202,"string"),t()(),i(7203,"td",26)(7204,"em")(7205,"strong"),e(7206,"(opcional)"),t()(),i(7207,"p"),e(7208,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens exclu\xEDdos"),t()()(),i(7209,"tr",19)(7210,"td",20)(7211,"div",21)(7212,"span",22),e(7213," save"),o(7214,"br"),t()()(),i(7215,"td",23)(7216,"code",38),e(7217,"string"),t()(),i(7218,"td",26)(7219,"em")(7220,"strong"),e(7221,"(opcional)"),t()(),i(7222,"p"),e(7223,"Label do bot\xE3o Salvar"),t()()(),i(7224,"tr",19)(7225,"td",20)(7226,"div",21)(7227,"span",22),e(7228," selectedItemsMultipleLabel"),o(7229,"br"),t()()(),i(7230,"td",23)(7231,"code",38),e(7232,"string"),t()(),i(7233,"td",26)(7234,"em")(7235,"strong"),e(7236,"(opcional)"),t()(),i(7237,"p"),e(7238,"Texto exibido ao selecionar m\xFAltiplos itens"),t()()(),i(7239,"tr",19)(7240,"td",20)(7241,"div",21)(7242,"span",22),e(7243," selectedItemsSingleLabel"),o(7244,"br"),t()()(),i(7245,"td",23)(7246,"code",38),e(7247,"string"),t()(),i(7248,"td",26)(7249,"em")(7250,"strong"),e(7251,"(opcional)"),t()(),i(7252,"p"),e(7253,"Texto exibido ao selecionar um \xFAnico item"),t()()(),i(7254,"tr",19)(7255,"td",20)(7256,"div",21)(7257,"span",22),e(7258," showOnlySelectedItemsTooltip"),o(7259,"br"),t()()(),i(7260,"td",23)(7261,"code",38),e(7262,"string"),t()(),i(7263,"td",26)(7264,"em")(7265,"strong"),e(7266,"(opcional)"),t()(),i(7267,"p"),e(7268,"Tooltip exibido ao passar o mouse sobre o switch que filtra itens selecionados"),t()()(),i(7269,"tr",19)(7270,"td",20)(7271,"div",21)(7272,"span",22),e(7273," startsWith"),o(7274,"br"),t()()(),i(7275,"td",23)(7276,"code",38),e(7277,"string"),t()(),i(7278,"td",26)(7279,"em")(7280,"strong"),e(7281,"(opcional)"),t()(),i(7282,"p"),e(7283,"Op\xE7\xE3o Inicia com, filtro por coluna."),t()()(),i(7284,"tr",19)(7285,"td",20)(7286,"div",21)(7287,"span",22),e(7288," sumAggregate"),o(7289,"br"),t()()(),i(7290,"td",23)(7291,"code",38),e(7292,"string"),t()(),i(7293,"td",26)(7294,"em")(7295,"strong"),e(7296,"(opcional)"),t()(),i(7297,"p"),e(7298,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(7299,"strong"),e(7300,"Soma"),t(),e(7301," (Sum)"),t()()(),i(7302,"tr",19)(7303,"td",20)(7304,"div",21)(7305,"span",22),e(7306," warningAbandonEditing"),o(7307,"br"),t()()(),i(7308,"td",23)(7309,"code",38),e(7310,"string"),t()(),i(7311,"td",26)(7312,"em")(7313,"strong"),e(7314,"(opcional)"),t()(),i(7315,"p"),e(7316,'Mensagem do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(7317,"tr",19)(7318,"td",20)(7319,"div",21)(7320,"span",22),e(7321," warningColumnsRequired"),o(7322,"br"),t()()(),i(7323,"td",23)(7324,"code",38),e(7325,"string"),t()(),i(7326,"td",26)(7327,"em")(7328,"strong"),e(7329,"(opcional)"),t()(),i(7330,"p"),e(7331,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(7332,"po-accordion-item",145)(7333,"h4",9)(7334,"code"),e(7335,"ThfGridOptionPaging"),t()(),i(7336,"div",10)(7337,"p"),e(7338,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(7339,"strong"),e(7340,"t-options-paging"),t(),e(7341,")."),t()(),i(7342,"h4",15),e(7343,"Propriedades"),t(),i(7344,"table",16)(7345,"tr",17)(7346,"th",18),e(7347,"Nome"),t(),i(7348,"th",18),e(7349,"Tipo"),t(),i(7350,"th",18),e(7351,"Descri\xE7\xE3o"),t()(),i(7352,"tr",19)(7353,"td",20)(7354,"div",21)(7355,"span",22),e(7356," label"),o(7357,"br"),t()()(),i(7358,"td",23)(7359,"code",38),e(7360,"string"),t()(),i(7361,"td",26)(7362,"p"),e(7363,"Label correspondente a quantidade de itens"),t()()(),i(7364,"tr",19)(7365,"td",20)(7366,"div",21)(7367,"span",22),e(7368," value"),o(7369,"br"),t()()(),i(7370,"td",23)(7371,"code",51),e(7372,"number"),t()(),i(7373,"td",26)(7374,"p"),e(7375,"Quantidade de itens por p\xE1gina"),t()()()()(),i(7376,"po-accordion-item",146)(7377,"h4",9)(7378,"code"),e(7379,"ThfGridOptions"),t()(),i(7380,"div",10)(7381,"p"),e(7382,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(7383,"h4",15),e(7384,"Propriedades"),t(),i(7385,"table",16)(7386,"tr",17)(7387,"th",18),e(7388,"Nome"),t(),i(7389,"th",18),e(7390,"Tipo"),t(),i(7391,"th",18),e(7392,"Descri\xE7\xE3o"),t()(),i(7393,"tr",19)(7394,"td",20)(7395,"div",21)(7396,"span",22),e(7397," actions"),o(7398,"br"),t()()(),i(7399,"td",23)(7400,"code",29),e(7401,"Array<ThfTableAction>"),t()(),i(7402,"td",26)(7403,"em")(7404,"strong"),e(7405,"(opcional)"),t()(),i(7406,"p"),e(7407,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(7408,"tr",19)(7409,"td",20)(7410,"div",21)(7411,"span",22),e(7412," columns"),o(7413,"br"),t()()(),i(7414,"td",23)(7415,"code",37),e(7416,"Array<ThfGridColumn>"),t()(),i(7417,"td",26)(7418,"em")(7419,"strong"),e(7420,"(opcional)"),t()(),i(7421,"p"),e(7422,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(7423,"code"),e(7424,"property"),t(),e(7425," com o mesmo conte\xFAdo do original."),t()()(),i(7426,"tr",19)(7427,"td",20)(7428,"div",21)(7429,"span",22),e(7430," customActions"),o(7431,"br"),t()()(),i(7432,"td",23)(7433,"code",40),e(7434,"Array<PoDropdownAction>"),t()(),i(7435,"td",26)(7436,"em")(7437,"strong"),e(7438,"(opcional)"),t()(),i(7439,"p"),e(7440,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(7441,"code"),e(7442,"actions"),t(),e(7443,"."),t(),i(7444,"pre")(7445,"code",31),e(7446,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];`),t()()()()()(),i(7447,"po-accordion-item",147)(7448,"h4",9)(7449,"code"),e(7450,"ThfGridRowActions"),t()(),i(7451,"div",10)(7452,"p"),e(7453,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(7454,"strong"),e(7455,"t-grid-row-actions"),t(),e(7456,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(7457,"h4",15),e(7458,"Propriedades"),t(),i(7459,"table",16)(7460,"tr",17)(7461,"th",18),e(7462,"Nome"),t(),i(7463,"th",18),e(7464,"Tipo"),t(),i(7465,"th",18),e(7466,"Descri\xE7\xE3o"),t()(),i(7467,"tr",19)(7468,"td",20)(7469,"div",21)(7470,"span",22),e(7471," actionEdit"),o(7472,"br"),t()()(),i(7473,"td",23)(7474,"code",148),e(7475,"(param: any, mode: 'edit' "),t(),i(7476,"code",149),e(7477," 'include') => FormGroup "),t(),i(7478,"code",150),e(7479," Observable<FormGroup>"),t()(),i(7480,"td",26)(7481,"p"),e(7482,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(7483,"code"),e(7484,"FormGroup"),t(),e(7485," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(7486,"pre")(7487,"code",31),e(7488,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})`),t()(),i(7489,"p"),e(7490,"ou"),t(),i(7491,"pre")(7492,"code",31),e(7493,`actionEdit: (dataItem, mode) => {
return this.appService
 .listItems('https://po-sample-api.onrender.com/v1/heroes', { name: 'Robert Bruce Banner' })
  .pipe(
     map(items => {
       return new FormGroup({
         name: new FormControl(items.name),
         age: new FormControl(items.age)
       })
     }
   )
 }`),t()()()(),i(7494,"tr",19)(7495,"td",20)(7496,"div",21)(7497,"span",22),e(7498," afterRemove"),o(7499,"br"),t()()(),i(7500,"td",23)(7501,"code",151),e(7502,"(row: any) => void"),t()(),i(7503,"td",26)(7504,"em")(7505,"strong"),e(7506,"(opcional)"),t()(),i(7507,"p"),e(7508,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(7509,"tr",19)(7510,"td",20)(7511,"div",21)(7512,"span",22),e(7513," afterSave"),o(7514,"br"),t()()(),i(7515,"td",23)(7516,"code",151),e(7517,"(row: any) => void"),t()(),i(7518,"td",26)(7519,"em")(7520,"strong"),e(7521,"(opcional)"),t()(),i(7522,"p"),e(7523,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(7524,"tr",19)(7525,"td",20)(7526,"div",21)(7527,"span",22),e(7528," afterUndoRemove"),o(7529,"br"),t()()(),i(7530,"td",23)(7531,"code",151),e(7532,"(row: any) => void"),t()(),i(7533,"td",26)(7534,"em")(7535,"strong"),e(7536,"(opcional)"),t()(),i(7537,"p"),e(7538,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(7539,"tr",19)(7540,"td",20)(7541,"div",21)(7542,"span",22),e(7543," beforeInsert"),o(7544,"br"),t()()(),i(7545,"td",23)(7546,"code",152),e(7547,"(row: any) => boolean "),t(),i(7548,"code",153),e(7549," Observable<boolean>"),t()(),i(7550,"td",26)(7551,"em")(7552,"strong"),e(7553,"(opcional)"),t()(),i(7554,"p"),e(7555,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(7556,"tr",19)(7557,"td",20)(7558,"div",21)(7559,"span",22),e(7560," beforeRemove"),o(7561,"br"),t()()(),i(7562,"td",23)(7563,"code",152),e(7564,"(row: any) => boolean "),t(),i(7565,"code",153),e(7566," Observable<boolean>"),t()(),i(7567,"td",26)(7568,"em")(7569,"strong"),e(7570,"(opcional)"),t()(),i(7571,"p"),e(7572,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(7573,"tr",19)(7574,"td",20)(7575,"div",21)(7576,"span",22),e(7577," beforeSave"),o(7578,"br"),t()()(),i(7579,"td",23)(7580,"code",154),e(7581,"(updatedRow: any, originalRow: any) => boolean "),t(),i(7582,"code",153),e(7583," Observable<boolean>"),t()(),i(7584,"td",26)(7585,"em")(7586,"strong"),e(7587,"(opcional)"),t()(),i(7588,"p"),e(7589,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(7590,"tr",19)(7591,"td",20)(7592,"div",21)(7593,"span",22),e(7594," beforeUndoRemove"),o(7595,"br"),t()()(),i(7596,"td",23)(7597,"code",152),e(7598,"(row: any) => boolean "),t(),i(7599,"code",153),e(7600," Observable<boolean>"),t()(),i(7601,"td",26)(7602,"em")(7603,"strong"),e(7604,"(opcional)"),t()(),i(7605,"p"),e(7606,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(7607,"tr",19)(7608,"td",20)(7609,"div",21)(7610,"span",22),e(7611," change"),o(7612,"br"),t()()(),i(7613,"td",23)(7614,"code",155),e(7615,"(updatedRows: Array<any>) => void"),t()(),i(7616,"td",26)(7617,"em")(7618,"strong"),e(7619,"(opcional)"),t()(),i(7620,"p"),e(7621,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(7622,"tr",19)(7623,"td",20)(7624,"div",21)(7625,"span",22),e(7626," hiddenGrid"),o(7627,"br"),t()()(),i(7628,"td",23)(7629,"code",24),e(7630,"boolean"),t()(),i(7631,"td",26)(7632,"em")(7633,"strong"),e(7634,"(opcional)"),t()(),i(7635,"p"),e(7636,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(7637,"tr",19)(7638,"td",20)(7639,"div",21)(7640,"span",22),e(7641," noPermission"),o(7642,"br"),t()()(),i(7643,"td",23)(7644,"code",156),e(7645,"Array<ThfGridEditModeActionType>"),t()(),i(7646,"td",26)(7647,"em")(7648,"strong"),e(7649,"(opcional)"),t()(),i(7650,"p"),e(7651,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(7652,"strong"),e(7653,"ThfGridEditModeActionType"),t(),e(7654,":"),t(),i(7655,"pre")(7656,"code",31),e(7657,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};`),t()()()(),i(7658,"tr",19)(7659,"td",20)(7660,"div",21)(7661,"span",22),e(7662," title"),o(7663,"br"),t()()(),i(7664,"td",23)(7665,"code",38),e(7666,"string"),t()(),i(7667,"td",26)(7668,"em")(7669,"strong"),e(7670,"(opcional)"),t()(),i(7671,"p"),e(7672,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(7673,"tr",19)(7674,"td",20)(7675,"div",21)(7676,"span",22),e(7677," validateField"),o(7678,"br"),t()()(),i(7679,"td",23)(7680,"code",157),e(7681,"(updatedField: any, columnProperty: string) => boolean "),t(),i(7682,"code",153),e(7683," Observable<boolean>"),t()(),i(7684,"td",26)(7685,"em")(7686,"strong"),e(7687,"(opcional)"),t()(),i(7688,"p"),e(7689,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(7690,"pre")(7691,"code",31),e(7692,`// Exemplo de uso:

onValidate(updatedField, property) {

 if(property === 'pais') {
     this.myForm?.controls['capital'].setValue(null); // valor da capital modificado para nulo
     const valuePais = this.myForm.controls[property].value;
     const capital = this.columnWithItems.find(column => column.property === 'capital');
      if (valuePais === 'Brasil') {
         capital.editProperties.disabled = false;
         this.form?.controls['capital'].setValue('Brasilia'); // Modificado o valor do campo "capital" baseado no valor do campo "pais"
      } else if (valuePais === 'Portugal') {
          capital.editProperties.disabled = false;
          this.form?.controls['capital'].setValue('Lisboa');
      } else {
        capital.editProperties.disabled = true;
        this.form?.controls['capital'].setValue('');
     }

   return true;
 }
}`),t()()()()()()()(),w(7693,4),t(),i(7694,"po-tab",158),w(7695,5),i(7696,"po-container",5)(7697,"po-accordion",6)(7698,"po-accordion-item",159)(7699,"h4",9)(7700,"code"),e(7701,"ThfColumnSpacing"),t()(),i(7702,"h4",15),e(7703,"Propriedades"),t(),i(7704,"table",16)(7705,"tr",17)(7706,"th",18),e(7707,"Nome"),t(),i(7708,"th",18),e(7709,"Descri\xE7\xE3o"),t()(),i(7710,"tr",19)(7711,"td",20)(7712,"div",21)(7713,"span",22),e(7714," ExtraSmall"),o(7715,"br"),t()()(),i(7716,"td",26)(7717,"p"),e(7718,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(7719,"tr",19)(7720,"td",20)(7721,"div",21)(7722,"span",22),e(7723," Large"),o(7724,"br"),t()()(),i(7725,"td",26)(7726,"p"),e(7727,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(7728,"tr",19)(7729,"td",20)(7730,"div",21)(7731,"span",22),e(7732," Medium"),o(7733,"br"),t()()(),i(7734,"td",26)(7735,"p"),e(7736,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(7737,"tr",19)(7738,"td",20)(7739,"div",21)(7740,"span",22),e(7741," Small"),o(7742,"br"),t()()(),i(7743,"td",26)(7744,"p"),e(7745,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(7746,"po-accordion-item",160)(7747,"h4",9)(7748,"code"),e(7749,"ThfGridEditModeActionType"),t()(),i(7750,"h4",15),e(7751,"Propriedades"),t(),i(7752,"table",16)(7753,"tr",17)(7754,"th",18),e(7755,"Nome"),t(),i(7756,"th",18),e(7757,"Descri\xE7\xE3o"),t()(),i(7758,"tr",19)(7759,"td",20)(7760,"div",21)(7761,"span",22),e(7762," Add"),o(7763,"br"),t()()(),i(7764,"td",26)(7765,"p"),e(7766,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(7767,"tr",19)(7768,"td",20)(7769,"div",21)(7770,"span",22),e(7771," Remove"),o(7772,"br"),t()()(),i(7773,"td",26)(7774,"p"),e(7775,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(7776,"tr",19)(7777,"td",20)(7778,"div",21)(7779,"span",22),e(7780," Replace"),o(7781,"br"),t()()(),i(7782,"td",26)(7783,"p"),e(7784,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),w(7785,6),t(),i(7786,"po-tab",161),w(7787,7),i(7788,"po-container",5)(7789,"po-accordion",6)(7790,"po-accordion-item",162)(7791,"h4",9)(7792,"code"),e(7793,"ThfGridCellTemplateDirective"),t()(),i(7794,"div",10)(7795,"p"),e(7796,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(7797,"p"),e(7798,"Em seu uso, deve-se apenas adicionar a diretiva "),i(7799,"strong"),e(7800,"t-grid-cell-template"),t(),e(7801," \xE0 tag "),i(7802,"code"),e(7803,"ng-template"),t(),e(7804,"."),t(),i(7805,"p"),e(7806,"Retorno:"),t(),i(7807,"ul")(7808,"li")(7809,"code"),e(7810,"column"),t(),e(7811,": conte\xFAdo da coluna corrente."),t(),i(7812,"li")(7813,"code"),e(7814,"row"),t(),e(7815,": conte\xFAdo da linha corrente"),t()(),i(7816,"p"),e(7817,"Modo de uso:"),t(),i(7818,"pre")(7819,"code"),e(7820,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com"
  >
    <ng-template t-grid-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...`),t()(),i(7821,"blockquote")(7822,"p"),e(7823,"No exemplo acima, o usu\xE1rio tem como retorno "),i(7824,"code"),e(7825,"row"),t(),e(7826," e a "),i(7827,"code"),e(7828,"column"),t(),e(7829," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(7830,"p"),e(7831,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(7832,"pre")(7833,"code"),e(7834,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...`),t()(),i(7835,"blockquote")(7836,"p"),e(7837,"Observa\xE7\xE3o: Sempre adicionar o "),i(7838,"strong"),e(7839,"type"),t(),e(7840," da coluna que deseja manipular com a directiva como "),i(7841,"code"),e(7842,"cellTemplate"),t()()()(),i(7843,"div",11)(7844,"h4",12),e(7845,"Seletor"),t(),i(7846,"pre",13),e(7847,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(7848,"po-accordion-item",163)(7849,"h4",9)(7850,"code"),e(7851,"ThfGridColumnTemplateDirective"),t()(),i(7852,"div",10)(7853,"p"),e(7854,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(7855,"p"),e(7856,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(7857,"strong"),e(7858,"[t-property]"),t(),e(7859,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(7860,"p"),e(7861,"Retorno:"),t(),i(7862,"ul")(7863,"li"),e(7864,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(7865,"p"),e(7866,"Modo de uso:"),t(),i(7867,"pre")(7868,"code",28),e(7869,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(7870,"blockquote")(7871,"p"),e(7872,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(7873,"code"),e(7874,"status"),t(),e(7875," ter\xE3o o conte\xFAdo alterado para "),i(7876,"code"),e(7877,"<h1>${value}</h1>"),t(),e(7878,`,
sendo que `),i(7879,"code"),e(7880,"value"),t(),e(7881," refere-se ao conte\xFAdo da linha."),t()(),i(7882,"pre")(7883,"code",28),e(7884,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(7885,"blockquote")(7886,"p"),e(7887,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(7888,"p"),e(7889,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(7890,"pre")(7891,"code",31),e(7892,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...`),t()(),i(7893,"blockquote")(7894,"p"),e(7895,"Observa\xE7\xE3o: Sempre adicionar o "),i(7896,"strong"),e(7897,"type"),t(),e(7898," da coluna que deseja manipular com a directiva como "),i(7899,"code"),e(7900,"columnTemplate"),t()()()(),i(7901,"div",11)(7902,"h4",12),e(7903,"Seletor"),t(),i(7904,"pre",13),e(7905,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),w(7906,8),t(),i(7907,"po-tab",164)(7908,"po-container",5),w(7909,9),i(7910,"h3",165),e(7911,"Tokens customiz\xE1veis"),t(),i(7912,"p"),e(7913,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(7914,"blockquote")(7915,"p"),e(7916,"Para maiores informa\xE7\xF5es, acesse o guia "),i(7917,"a",166),e(7918,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(7919,"."),t()(),i(7920,"table")(7921,"thead")(7922,"tr")(7923,"th"),e(7924,"Propriedade"),t(),i(7925,"th"),e(7926,"Descri\xE7\xE3o"),t(),i(7927,"th"),e(7928,"Valor Padr\xE3o"),t()()(),i(7929,"tbody")(7930,"tr")(7931,"td")(7932,"strong"),e(7933,"Default Values"),t()(),o(7934,"td")(7935,"td"),t(),i(7936,"tr")(7937,"td")(7938,"code"),e(7939,"--font-family"),t()(),i(7940,"td"),e(7941,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(7942,"td")(7943,"code"),e(7944,"var(--font-family-theme)"),t()()(),i(7945,"tr")(7946,"td")(7947,"code"),e(7948,"--background-color"),t()(),i(7949,"td"),e(7950,"Cor de background"),t(),i(7951,"td")(7952,"code"),e(7953,"var(--color-neutral-light-00)"),t()()(),i(7954,"tr")(7955,"td")(7956,"code"),e(7957,"--color"),t()(),i(7958,"td"),e(7959,"Cor principal da table"),t(),i(7960,"td")(7961,"code"),e(7962,"var(--color-neutral-dark-95)"),t()()(),i(7963,"tr")(7964,"td")(7965,"code"),e(7966,"--background-striped-color"),t()(),i(7967,"td"),e(7968,"Cor do background quando striped"),t(),i(7969,"td")(7970,"code"),e(7971,"var(--color-neutral-light-05)"),t()()(),i(7972,"tr")(7973,"td")(7974,"code"),e(7975,"--color-line"),t()(),i(7976,"td"),e(7977,"Cor das linhas"),t(),i(7978,"td")(7979,"code"),e(7980,"var(--color-neutral-mid-40)"),t()()(),i(7981,"tr")(7982,"td")(7983,"code"),e(7984,"--border-color"),t()(),i(7985,"td"),e(7986,"Cor da borda"),t(),i(7987,"td")(7988,"code"),e(7989,"var(--color-neutral-light-10)"),t()()(),i(7990,"tr")(7991,"td")(7992,"code"),e(7993,"--border-radius"),t()(),i(7994,"td"),e(7995,"Raio da borda"),t(),i(7996,"td")(7997,"code"),e(7998,"var(--border-radius-lg)"),t()()(),i(7999,"tr")(8e3,"td")(8001,"code"),e(8002,"--border-width"),t()(),i(8003,"td"),e(8004,"Largura da borda"),t(),i(8005,"td")(8006,"code"),e(8007,"var(--border-width-sm)"),t()()(),i(8008,"tr")(8009,"td")(8010,"code"),e(8011,"--background-color-edited"),t()(),i(8012,"td"),e(8013,"Cor de background da linha editada"),t(),i(8014,"td")(8015,"code"),e(8016,"var(--color-feedback-warning-lightest)"),t()()(),i(8017,"tr")(8018,"td")(8019,"code"),e(8020,"--border-color-edited"),t()(),i(8021,"td"),e(8022,"Cor da borda da linha editada"),t(),i(8023,"td")(8024,"code"),e(8025,"var(--color-feedback-warning-base)"),t()()(),i(8026,"tr")(8027,"td")(8028,"code"),e(8029,"--background-color-included"),t()(),i(8030,"td"),e(8031,"Cor de background da linha inclu\xEDda"),t(),i(8032,"td")(8033,"code"),e(8034,"var(--color-feedback-warning-lightest)"),t()()(),i(8035,"tr")(8036,"td")(8037,"code"),e(8038,"--border-color-included"),t()(),i(8039,"td"),e(8040,"Cor da borda da linha inclu\xEDda"),t(),i(8041,"td")(8042,"code"),e(8043,"var(--color-feedback-warning-base)"),t()()(),i(8044,"tr")(8045,"td")(8046,"code"),e(8047,"--background-color-removed"),t()(),i(8048,"td"),e(8049,"Cor de background da linha removida"),t(),i(8050,"td"),e(8051,"-"),t()(),i(8052,"tr")(8053,"td")(8054,"strong"),e(8055,"Hover"),t()(),o(8056,"td")(8057,"td"),t(),i(8058,"tr")(8059,"td")(8060,"code"),e(8061,"--color-hover"),t()(),i(8062,"td"),e(8063,"Cor principal no estado hover"),t(),i(8064,"td")(8065,"code"),e(8066,"var(--color-action-hover)"),t()()(),i(8067,"tr")(8068,"td")(8069,"code"),e(8070,"--background-color-hover"),t()(),i(8071,"td"),e(8072,"Cor de background no estado hover"),t(),i(8073,"td")(8074,"code"),e(8075,"var(--color-brand-01-lighter)"),t()()(),i(8076,"tr")(8077,"td")(8078,"strong"),e(8079,"Focused"),t()(),o(8080,"td")(8081,"td"),t(),i(8082,"tr")(8083,"td")(8084,"code"),e(8085,"--outline-color-focused"),t()(),i(8086,"td"),e(8087,"Cor do outline do estado de focus"),t(),i(8088,"td")(8089,"code"),e(8090,"var(--color-action-focus)"),t()()(),i(8091,"tr")(8092,"td")(8093,"strong"),e(8094,"Disabled"),t()(),o(8095,"td")(8096,"td"),t(),i(8097,"tr")(8098,"td")(8099,"code"),e(8100,"--color-disabled"),t()(),i(8101,"td"),e(8102,"Cor principal no estado disabled"),t(),i(8103,"td")(8104,"code"),e(8105,"var(--color-neutral-mid-40)"),t()()(),i(8106,"tr")(8107,"td")(8108,"strong"),e(8109,"Headline"),t()(),o(8110,"td")(8111,"td"),t(),i(8112,"tr")(8113,"td")(8114,"code"),e(8115,"--background-color-headline"),t()(),i(8116,"td"),e(8117,"Cor do cabe\xE7alho"),t(),i(8118,"td")(8119,"code"),e(8120,"var(--color-neutral-light-10)"),t()()(),i(8121,"tr")(8122,"td")(8123,"code"),e(8124,"--font-weight-headline"),t()(),i(8125,"td"),e(8126,"Peso da fonte do cabe\xE7alho"),t(),i(8127,"td")(8128,"code"),e(8129,"var(--font-weight-bold)"),t()()(),i(8130,"tr")(8131,"td")(8132,"strong"),e(8133,"Selected"),t()(),o(8134,"td")(8135,"td"),t(),i(8136,"tr")(8137,"td")(8138,"code"),e(8139,"--background-color-selected"),t()(),i(8140,"td"),e(8141,"Cor de background no estado de selecionado"),t(),i(8142,"td")(8143,"code"),e(8144,"var(--color-brand-01-lightest)"),t()()(),i(8145,"tr")(8146,"td")(8147,"code"),e(8148,"--color-actived"),t()(),i(8149,"td"),e(8150,"Cor do texto no estado de selecionado"),t(),i(8151,"td")(8152,"code"),e(8153,"var(--color-neutral-dark-90)"),t()()(),i(8154,"tr")(8155,"td")(8156,"strong"),e(8157,"Pressed"),t()(),o(8158,"td")(8159,"td"),t(),i(8160,"tr")(8161,"td")(8162,"code"),e(8163,"--background-color-actived"),t()(),i(8164,"td"),e(8165,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(8166,"td")(8167,"code"),e(8168,"var(--color-brand-01-light)"),t()()(),i(8169,"tr"),o(8170,"td")(8171,"td")(8172,"td"),t(),i(8173,"tr")(8174,"td")(8175,"strong"),e(8176,"Toolbar"),t()(),o(8177,"td")(8178,"td"),t(),i(8179,"tr")(8180,"td")(8181,"code"),e(8182,"--background-color-toolbar"),t()(),i(8183,"td"),e(8184,"Cor de background da toolbar"),t(),i(8185,"td")(8186,"code"),e(8187,"var(--border-color)"),t()()(),i(8188,"tr")(8189,"td")(8190,"code"),e(8191,"--border-color-toolbar"),t()(),i(8192,"td"),e(8193,"Cor da borda da toolbar"),t(),i(8194,"td")(8195,"code"),e(8196,"var(--border-width-sm)"),t()()(),i(8197,"tr"),o(8198,"td")(8199,"td")(8200,"td"),t(),i(8201,"tr")(8202,"td")(8203,"strong"),e(8204,"Toolbar Title"),t()(),o(8205,"td")(8206,"td"),t(),i(8207,"tr")(8208,"td")(8209,"code"),e(8210,"--font-family-toolbar-title"),t()(),i(8211,"td"),e(8212,"Fam\xEDlia tipogr\xE1fica do Titulo da toolbar da Grid"),t(),i(8213,"td")(8214,"code"),e(8215,"var(--font-family)"),t()()(),i(8216,"tr")(8217,"td")(8218,"code"),e(8219,"--font-size-toolbar-title"),t()(),i(8220,"td"),e(8221,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(8222,"td")(8223,"code"),e(8224,"var(--font-size-md)"),t()()(),i(8225,"tr")(8226,"td")(8227,"code"),e(8228,"--font-weight-toolbar-title"),t()(),i(8229,"td"),e(8230,"Peso da fonte do Titulo da toolbar da Grid"),t(),i(8231,"td")(8232,"code"),e(8233,"var(--font-weight-bold)"),t()()(),i(8234,"tr")(8235,"td")(8236,"code"),e(8237,"--letter-spacing-toolbar-title"),t()(),i(8238,"td"),e(8239,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(8240,"td"),e(8241,"0.017rem"),t()(),i(8242,"tr"),o(8243,"td")(8244,"td")(8245,"td"),t(),i(8246,"tr")(8247,"td")(8248,"strong"),e(8249,"Aggregates"),t()(),o(8250,"td")(8251,"td"),t(),i(8252,"tr")(8253,"td")(8254,"code"),e(8255,"--border-color-aggregates"),t()(),i(8256,"td"),e(8257,"Cor da borda do aggregates"),t(),i(8258,"td")(8259,"code"),e(8260,"var(--border-color)"),t()()(),i(8261,"tr")(8262,"td")(8263,"code"),e(8264,"--border-width-aggregates"),t()(),i(8265,"td"),e(8266,"Largura da borda do aggregates"),t(),i(8267,"td")(8268,"code"),e(8269,"var(--border-width-sm)"),t()()(),i(8270,"tr"),o(8271,"td")(8272,"td")(8273,"td"),t(),i(8274,"tr")(8275,"td")(8276,"strong"),e(8277,"Empty State - Body"),t()(),o(8278,"td")(8279,"td"),t(),i(8280,"tr")(8281,"td")(8282,"code"),e(8283,"--font-family-empty-state-body-subtitle"),t()(),i(8284,"td"),e(8285,"Fam\xEDlia tipogr\xE1fica do subt\xEDtulo do estado vazio"),t(),i(8286,"td")(8287,"code"),e(8288,"var(--font-family)"),t()()(),i(8289,"tr")(8290,"td")(8291,"code"),e(8292,"--font-size-empty-state-body-subtitle"),t()(),i(8293,"td"),e(8294,"Tamanho da fonte do subt\xEDtulo do estado vazio"),t(),i(8295,"td")(8296,"code"),e(8297,"var(--font-size-md)"),t()()(),i(8298,"tr")(8299,"td")(8300,"code"),e(8301,"--font-weight-empty-state-body-subtitle"),t()(),i(8302,"td"),e(8303,"Peso da fonte do subt\xEDtulo do estado vazio"),t(),i(8304,"td")(8305,"code"),e(8306,"var(--font-weight-bold)"),t()()(),i(8307,"tr")(8308,"td")(8309,"code"),e(8310,"--font-family-empty-state-body-message"),t()(),i(8311,"td"),e(8312,"Fam\xEDlia tipogr\xE1fica da mensagem do estado vazio"),t(),i(8313,"td")(8314,"code"),e(8315,"var(--font-family)"),t()()(),i(8316,"tr")(8317,"td")(8318,"code"),e(8319,"--font-size-empty-state-body-message"),t()(),i(8320,"td"),e(8321,"Tamanho da fonte da mensagem do estado vazio"),t(),i(8322,"td")(8323,"code"),e(8324,"var(--font-size-default)"),t()()(),i(8325,"tr")(8326,"td")(8327,"code"),e(8328,"--font-weight-empty-state-body-message"),t()(),i(8329,"td"),e(8330,"Peso da fonte da mensagem do estado vazio"),t(),i(8331,"td")(8332,"code"),e(8333,"var(--font-weight-normal)"),t()()()()()(),w(8334,10),t(),i(8335,"po-tab",167),w(8336,11),t()()())},dependencies:[O,J,v,ae,H],encapsulation:2})}}return d})();var Vi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],zi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Pt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(V(ee))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup"]],viewQuery:function(r,n){if(r&1&&I(H,5)(O,5),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:zi,decls:2635,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(te(Vi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
Neste modal \xE9 poss\xEDvel buscar e selecionar um ou mais registros que ser\xE3o enviados para o campo.
O `),i(19,"code"),e(20,"thf-lookup"),t(),e(21," permite que o usu\xE1rio digite um valor e pressione a tecla TAB para buscar um registro."),t(),i(22,"p"),e(23,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(24,"code"),e(25,"THF-Lookup"),t(),e(26,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(27,"code"),e(28,"import { ThfLookupComponent } from '@totvs/thf-components';"),t()()(),i(29,"div",11)(30,"h4",12),e(31,"Seletor"),t(),i(32,"pre",13),e(33,`<thf-lookup
  t-additional-help="EventEmitter"
  t-additional-help-tooltip="string"
  t-append-in-body="boolean"
  t-auto-focus="boolean"
  t-auto-height="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-clean="boolean"
  t-columns="Array<ThfLookupColumn>"
  t-size="string"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-format="Array<string> | ((item: any) => string)"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupFilterSearchSelect>"
  t-filter-service="ThfLookupFilter | string"
  t-grid-properties="ThfLookupGridProperties"
  t-help="string"
  (t-focus)="EventEmitter"
  t-key-last-search="string"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupKeysLabel>"
  t-label="string"
  t-label-text-wrap="boolean"
  t-literals="ThfLookupLiterals"
  t-loading="boolean"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
  t-helper="PoHelperOptions"
  t-required="boolean"
  t-search-on-enter="'equal' | 'include'"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-modal-size="string" >
</thf-lookup>
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),o(52,"br"),t()(),i(53,"div",23),e(54,"Deprecated"),t()(),i(55,"td",24)(56,"code",25),e(57,"EventEmitter"),t()(),i(58,"td",26),e(59,"-"),t(),i(60,"td",27)(61,"em")(62,"strong"),e(63,"(opcional)"),t()(),i(64,"p"),e(65,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(66,"blockquote")(67,"p"),e(68,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(69,"tr",19)(70,"td",20)(71,"div",21)(72,"span",22),e(73,"t-additional-help-tooltip"),o(74,"br"),t()(),i(75,"div",23),e(76,"Deprecated"),t()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"em")(84,"strong"),e(85,"(opcional)"),t()(),i(86,"p"),e(87,"Exibe um \xEDcone de ajuda adicional, om o texto desta propriedade sendo passado para o popover do componente "),i(88,"code"),e(89,"po-helper"),t(),e(90,`.
`),i(91,"strong"),e(92,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(93,"blockquote")(94,"p"),e(95,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(96,"blockquote")(97,"p"),e(98,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(99,"tr",19)(100,"td",20)(101,"div",21)(102,"span",22),e(103," t-append-in-body"),o(104,"br"),t()()(),i(105,"td",24)(106,"code",29),e(107,"boolean"),t()(),i(108,"td",26)(109,"p")(110,"code"),e(111,"false"),t()()(),i(112,"td",27)(113,"em")(114,"strong"),e(115,"(opcional)"),t()(),i(116,"p"),e(117,"Define que o "),i(118,"code"),e(119,"listbox"),t(),e(120," e/ou popover ("),i(121,"code"),e(122,"t-helper"),t(),e(123," e/ou "),i(124,"code"),e(125,"t-error-limit"),t(),e(126,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(127,"blockquote")(128,"p"),e(129,"Quando utilizado com "),i(130,"code"),e(131,"t-helper"),t(),e(132,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(133,"tr",19)(134,"td",20)(135,"div",21)(136,"span",22),e(137,"t-auto-focus"),o(138,"br"),t()()(),i(139,"td",24)(140,"code",29),e(141,"boolean"),t()(),i(142,"td",26)(143,"p")(144,"code"),e(145,"false"),t()()(),i(146,"td",27)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),i(150,"p"),e(151,"Aplica foco no elemento ao ser iniciado."),t(),i(152,"blockquote")(153,"p"),e(154,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(155,"tr",19)(156,"td",20)(157,"div",21)(158,"span",22),e(159,"t-auto-height"),o(160,"br"),t()()(),i(161,"td",24)(162,"code",29),e(163,"boolean"),t()(),i(164,"td",26)(165,"p")(166,"code"),e(167,"false"),t()()(),i(168,"td",27)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),i(172,"p"),e(173,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(174,"tr",19)(175,"td",20)(176,"div",30)(177,"span",31),e(178," (t-change)"),o(179,"br"),t()()(),i(180,"td",24)(181,"code",25),e(182,"EventEmitter"),t()(),i(183,"td",26),e(184,"-"),t(),i(185,"td",27)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(191,"tr",19)(192,"td",20)(193,"div",30)(194,"span",31),e(195," (t-change-model)"),o(196,"br"),t()()(),i(197,"td",24)(198,"code",25),e(199,"EventEmitter"),t()(),i(200,"td",26),e(201,"-"),t(),i(202,"td",27)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(208,"tr",19)(209,"td",20)(210,"div",21)(211,"span",22),e(212,"t-clean"),o(213,"br"),t()()(),i(214,"td",24)(215,"code",29),e(216,"boolean"),t()(),i(217,"td",26)(218,"p")(219,"code"),e(220,"false"),t()()(),i(221,"td",27)(222,"em")(223,"strong"),e(224,"(opcional)"),t()(),i(225,"p"),e(226,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(227,"code"),e(228,"true"),t(),e(229,"."),t()()(),i(230,"tr",19)(231,"td",20)(232,"div",21)(233,"span",22),e(234,"t-columns"),o(235,"br"),t()()(),i(236,"td",24)(237,"code",32),e(238,"Array<ThfLookupColumn>"),t()(),i(239,"td",26),e(240,"-"),t(),i(241,"td",27)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),i(245,"p"),e(246,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(247,"strong"),e(248,"ThfLookupColumn"),t(),e(249,"."),t(),i(250,"pre")(251,"code",33),e(252,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(253,"pre")(254,"code",34),e(255,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(256,"tr",19)(257,"td",20)(258,"div",21)(259,"span",22),e(260," t-size"),o(261,"br"),t()()(),i(262,"td",24)(263,"code",28),e(264,"string"),t()(),i(265,"td",26)(266,"p")(267,"code"),e(268,"medium"),t()()(),i(269,"td",27)(270,"em")(271,"strong"),e(272,"(opcional)"),t()(),i(273,"p"),e(274,"Define o tamanho do componente:"),t(),i(275,"ul")(276,"li")(277,"code"),e(278,"small"),t(),e(279,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(280,"li")(281,"code"),e(282,"medium"),t(),e(283,": altura do input como 44px."),t()(),i(284,"blockquote")(285,"p"),e(286,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(287,"code"),e(288,"medium"),t(),e(289,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(290,"a",35),e(291,"po-theme"),t(),e(292,"."),t()()()(),i(293,"tr",19)(294,"td",20)(295,"div",21)(296,"span",22),e(297,"t-custom-items"),o(298,"br"),t()()(),i(299,"td",24)(300,"code",36),e(301,"Array<any>"),t()(),i(302,"td",26)(303,"p")(304,"code"),e(305,"[]"),t()()(),i(306,"td",27)(307,"em")(308,"strong"),e(309,"(opcional)"),t()(),i(310,"p"),e(311,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(312,"tr",19)(313,"td",20)(314,"div",21)(315,"span",22),e(316,"t-disabled"),o(317,"br"),t()()(),i(318,"td",24)(319,"code",29),e(320,"boolean"),t()(),i(321,"td",26)(322,"p")(323,"code"),e(324,"false"),t()()(),i(325,"td",27)(326,"em")(327,"strong"),e(328,"(opcional)"),t()(),i(329,"p"),e(330,"Desabilita o campo."),t()()(),i(331,"tr",19)(332,"td",20)(333,"div",21)(334,"span",22),e(335,"t-error-limit"),o(336,"br"),t()()(),i(337,"td",24)(338,"code",29),e(339,"boolean"),t()(),i(340,"td",26)(341,"p")(342,"code"),e(343,"false"),t()()(),i(344,"td",27)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),i(348,"p"),e(349,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(350,"blockquote")(351,"p"),e(352,"Caso essa propriedade seja definida como "),i(353,"code"),e(354,"true"),t(),e(355,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(356,"tr",19)(357,"td",20)(358,"div",21)(359,"span",22),e(360,"t-field-error-message"),o(361,"br"),t()()(),i(362,"td",24)(363,"code",28),e(364,"string"),t()(),i(365,"td",26),e(366,"-"),t(),i(367,"td",27)(368,"em")(369,"strong"),e(370,"(opcional)"),t()(),i(371,"p"),e(372,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(373,"blockquote")(374,"p"),e(375,"Necess\xE1rio que a propriedade "),i(376,"code"),e(377,"t-required"),t(),e(378," esteja habilitada."),t()()()(),i(379,"tr",19)(380,"td",20)(381,"div",21)(382,"span",22),e(383," t-field-format"),o(384,"br"),t()()(),i(385,"td",24)(386,"code",37),e(387,"Array<string> "),t(),i(388,"code",38),e(389," ((item: any) => string)"),t()(),i(390,"td",26),e(391,"-"),t(),i(392,"td",27)(393,"em")(394,"strong"),e(395,"(opcional)"),t()(),i(396,"p"),e(397,"Formato de exibi\xE7\xE3o do campo."),t(),i(398,"p"),e(399,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(400,"em"),e(401,"string"),t(),e(402," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(403,"pre")(404,"code",34),e(405,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}"),t()(),i(406,"pre")(407,"code",33),e(408,`<thf-lookup
  ...
  [t-field-format]="fieldFormat"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 (Goku)  -->`),t()(),i(409,"p"),e(410,`Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado `),i(411,"code"),e(412,"-"),t(),e(413,` como separador.
Por exemplo:`),t(),i(414,"pre")(415,"code",33),e(416,`<thf-lookup
  ...
  [t-field-format]="['id','nickname']"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->`),t()(),i(417,"blockquote")(418,"p"),e(419,"Esta propriedade sobrep\xF5e a "),i(420,"code"),e(421,"t-keys-label"),t(),e(422," como formata\xE7\xE3o do campo."),t()()()(),i(423,"tr",19)(424,"td",20)(425,"div",21)(426,"span",22),e(427,"t-field-label"),o(428,"br"),t()()(),i(429,"td",24)(430,"code",28),e(431,"string"),t()(),i(432,"td",26),e(433,"-"),t(),i(434,"td",27)(435,"p"),e(436,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(437,"tr",19)(438,"td",20)(439,"div",21)(440,"span",22),e(441,"t-field-value"),o(442,"br"),t()()(),i(443,"td",24)(444,"code",28),e(445,"string"),t()(),i(446,"td",26),e(447,"-"),t(),i(448,"td",27)(449,"p"),e(450,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(451,"blockquote")(452,"p"),e(453,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(454,"tr",19)(455,"td",20)(456,"div",21)(457,"span",22),e(458,"t-filter-params"),o(459,"br"),t()()(),i(460,"td",24)(461,"code",39),e(462,"any"),t()(),i(463,"td",26),e(464,"-"),t(),i(465,"td",27)(466,"em")(467,"strong"),e(468,"(opcional)"),t()(),i(469,"p"),e(470,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(471,"strong"),e(472,"ThfLookupFilter"),t(),e(473,"."),t()()(),i(474,"tr",19)(475,"td",20)(476,"div",21)(477,"span",22),e(478,"t-filter-search-select"),o(479,"br"),t()()(),i(480,"td",24)(481,"code",40),e(482,"Array<ThfLookupFilterSearchSelect>"),t()(),i(483,"td",26),e(484,"-"),t(),i(485,"td",27)(486,"em")(487,"strong"),e(488,"(opcional)"),t()(),i(489,"p"),e(490,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(491,"strong"),e(492,"ThfLookupFilterSearchSelect"),t(),e(493,"."),t(),i(494,"pre")(495,"code",33),e(496,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(497,"pre")(498,"code",34),e(499,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(500,"tr",19)(501,"td",20)(502,"div",21)(503,"span",22),e(504,"t-filter-service"),o(505,"br"),t()()(),i(506,"td",24)(507,"code",41),e(508,"ThfLookupFilter "),t(),i(509,"code",28),e(510," string"),t()(),i(511,"td",26),e(512,"-"),t(),i(513,"td",27)(514,"p"),e(515,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(516,"strong"),e(517,"ThfLookupFilter"),t(),e(518," ou uma URL."),t(),i(519,"p"),e(520,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(521,"code"),e(522,"filter"),t(),e(523," com o valor da busca:"),t(),i(524,"pre")(525,"code"),e(526,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(527,"p"),e(528,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(529,"code"),e(530,"order"),t(),e(531,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(532,"pre")(533,"code"),e(534,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(535,"p"),e(536,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(537,"pre")(538,"code"),e(539,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(540,"p"),e(541,"Se definido "),i(542,"strong"),e(543,"t-filter-params"),t(),e(544,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(545,"code"),e(546,"{ age: 23 }"),t(),e(547,":"),t(),i(548,"pre")(549,"code"),e(550,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(551,"p"),e(552,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(553,"pre")(554,"code"),e(555,`model = 1234;

GET url/1234`),t()(),i(556,"p"),e(557,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(558,"pre")(559,"code"),e(560,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(561,"blockquote")(562,"p"),e(563,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(564,"a",42),e(565,"API do PO UI"),t(),e(566,` e utilizar
os valores definidos nas propriedades `),i(567,"strong"),e(568,"t-field-label"),t(),e(569," e "),i(570,"strong"),e(571,"t-field-value"),t(),e(572," para a constru\xE7\xE3o do "),i(573,"strong"),e(574,"thf-lookup"),t(),e(575,"."),t()(),i(576,"p"),e(577,"Caso a busca tenha ocorrido pressionando a tecla "),i(578,"em"),e(579,"TAB"),t(),e(580,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(581,"a",43),e(582,"encodeURIComponent"),t(),e(583,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(584,"pre")(585,"code"),e(586,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(587,"blockquote")(588,"p"),e(589,"Caso utilize um servi\xE7o "),i(590,"strong"),e(591,"ThfLookupFilter"),t(),e(592,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(593,"tr",19)(594,"td",20)(595,"div",21)(596,"span",22),e(597,"t-grid-properties"),o(598,"br"),t()()(),i(599,"td",24)(600,"code",44),e(601,"ThfLookupGridProperties"),t()(),i(602,"td",26),e(603,"-"),t(),i(604,"td",27)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),i(608,"p"),e(609,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(610,"p"),e(611,"// Exemplo de uso:"),t(),i(612,"pre")(613,"code",33),e(614,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(615,"pre")(616,"code",34),e(617,`gridProperties: ThfLookupGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(618,"tr",19)(619,"td",20)(620,"div",21)(621,"span",22),e(622,"t-help"),o(623,"br"),t()()(),i(624,"td",24)(625,"code",28),e(626,"string"),t()(),i(627,"td",26),e(628,"-"),t(),i(629,"td",27)(630,"em")(631,"strong"),e(632,"(opcional)"),t()(),i(633,"p"),e(634,"Texto de apoio do campo."),t()()(),i(635,"tr",19)(636,"td",20)(637,"div",30)(638,"span",31),e(639," (t-focus)"),o(640,"br"),t()()(),i(641,"td",24)(642,"code",25),e(643,"EventEmitter"),t()(),i(644,"td",26),e(645,"-"),t(),i(646,"td",27)(647,"em")(648,"strong"),e(649,"(opcional)"),t()(),i(650,"p"),e(651,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(652,"p"),e(653,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(654,"tr",19)(655,"td",20)(656,"div",21)(657,"span",22),e(658,"t-key-last-search"),o(659,"br"),t()()(),i(660,"td",24)(661,"code",28),e(662,"string"),t()(),i(663,"td",26),e(664,"-"),t(),i(665,"td",27)(666,"em")(667,"strong"),e(668,"(opcional)"),t()(),i(669,"p"),e(670,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(671,"tr",19)(672,"td",20)(673,"div",30)(674,"span",31),e(675," (t-keydown)"),o(676,"br"),t()()(),i(677,"td",24)(678,"code",25),e(679,"EventEmitter"),t()(),i(680,"td",26),e(681,"-"),t(),i(682,"td",27)(683,"em")(684,"strong"),e(685,"(opcional)"),t()(),i(686,"p"),e(687,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(688,"code"),e(689,"KeyboardEvent"),t(),e(690," com informa\xE7\xF5es sobre a tecla."),t()()(),i(691,"tr",19)(692,"td",20)(693,"div",21)(694,"span",22),e(695,"t-keys-label"),o(696,"br"),t()()(),i(697,"td",24)(698,"code",45),e(699,"Array<ThfLookupKeysLabel>"),t()(),i(700,"td",26),e(701,"-"),t(),i(702,"td",27)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),i(706,"p"),e(707,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(708,"pre")(709,"code",33),e(710,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(711,"pre")(712,"code",34),e(713,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(714,"pre")(715,"code"),e(716,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(717,"tr",19)(718,"td",20)(719,"div",21)(720,"span",22),e(721,"t-label"),o(722,"br"),t()()(),i(723,"td",24)(724,"code",28),e(725,"string"),t()(),i(726,"td",26),e(727,"-"),t(),i(728,"td",27)(729,"em")(730,"strong"),e(731,"(opcional)"),t()(),i(732,"p"),e(733,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(734,"code"),e(735,"modalTitle"),t(),e(736," n\xE3o estiver definido em "),i(737,"strong"),e(738,"t-literals"),t(),e(739,"."),t()()(),i(740,"tr",19)(741,"td",20)(742,"div",21)(743,"span",22),e(744," t-label-text-wrap"),o(745,"br"),t()()(),i(746,"td",24)(747,"code",29),e(748,"boolean"),t()(),i(749,"td",26)(750,"p")(751,"code"),e(752,"false"),t()()(),i(753,"td",27)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),i(757,"p"),e(758,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(759,"code"),e(760,"t-label"),t(),e(761,". Quando "),i(762,"code"),e(763,"t-label-text-wrap"),t(),e(764,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(765,"tr",19)(766,"td",20)(767,"div",21)(768,"span",22),e(769,"t-literals"),o(770,"br"),t()()(),i(771,"td",24)(772,"code",46),e(773,"ThfLookupLiterals"),t()(),i(774,"td",26),e(775,"-"),t(),i(776,"td",27)(777,"em")(778,"strong"),e(779,"(opcional)"),t()(),i(780,"p"),e(781,"Permite definir literais personalizados para o componente, conforme a interface "),i(782,"strong"),e(783,"ThfLookupLiterals"),t(),e(784,"."),t(),i(785,"pre")(786,"code",33),e(787,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(788,"pre")(789,"code",34),e(790,"customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };"),t()()()(),i(791,"tr",19)(792,"td",20)(793,"div",21)(794,"span",22),e(795,"t-loading"),o(796,"br"),t()()(),i(797,"td",24)(798,"code",29),e(799,"boolean"),t()(),i(800,"td",26)(801,"p")(802,"code"),e(803,"false"),t()()(),i(804,"td",27)(805,"em")(806,"strong"),e(807,"(opcional)"),t()(),i(808,"p"),e(809,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(810,"tr",19)(811,"td",20)(812,"div",21)(813,"span",22),e(814,"t-multiple"),o(815,"br"),t()()(),i(816,"td",24)(817,"code",29),e(818,"boolean"),t()(),i(819,"td",26)(820,"p")(821,"code"),e(822,"false"),t()()(),i(823,"td",27)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),i(827,"p"),e(828,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(829,"blockquote")(830,"p"),e(831,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(832,"code"),e(833,"[ 12345, 67890 ]"),t()()()()(),i(834,"tr",19)(835,"td",20)(836,"div",21)(837,"span",22),e(838,"t-no-autocomplete"),o(839,"br"),t()()(),i(840,"td",24)(841,"code",29),e(842,"boolean"),t()(),i(843,"td",26)(844,"p")(845,"code"),e(846,"false"),t()()(),i(847,"td",27)(848,"em")(849,"strong"),e(850,"(opcional)"),t()(),i(851,"p"),e(852,"Desabilita o "),i(853,"code"),e(854,"autocomplete"),t(),e(855," (propriedade nativa) do campo."),t()()(),i(856,"tr",19)(857,"td",20)(858,"div",30)(859,"span",31),e(860," (t-error)"),o(861,"br"),t()()(),i(862,"td",24)(863,"code",25),e(864,"EventEmitter"),t()(),i(865,"td",26),e(866,"-"),t(),i(867,"td",27)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),i(871,"p"),e(872,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(873,"tr",19)(874,"td",20)(875,"div",21)(876,"span",22),e(877,"t-optional"),o(878,"br"),t()()(),i(879,"td",24)(880,"code",29),e(881,"boolean"),t()(),i(882,"td",26)(883,"p")(884,"code"),e(885,"false"),t()()(),i(886,"td",27)(887,"em")(888,"strong"),e(889,"(opcional)"),t()(),i(890,"p"),e(891,"Exibe um indicador opcional no campo. Requer que "),i(892,"strong"),e(893,"t-label"),t(),e(894," esteja definido e "),i(895,"strong"),e(896,"t-required"),t(),e(897," desabilitado."),t()()(),i(898,"tr",19)(899,"td",20)(900,"div",21)(901,"span",22),e(902,"t-placeholder"),o(903,"br"),t()()(),i(904,"td",24)(905,"code",28),e(906,"string"),t()(),i(907,"td",26),e(908,"-"),t(),i(909,"td",27)(910,"em")(911,"strong"),e(912,"(opcional)"),t()(),i(913,"p"),e(914,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(915,"tr",19)(916,"td",20)(917,"div",21)(918,"span",22),e(919," t-helper"),o(920,"br"),t()()(),i(921,"td",24)(922,"code",47),e(923,"PoHelperOptions"),t()(),i(924,"td",26),e(925,"-"),t(),i(926,"td",27)(927,"em")(928,"strong"),e(929,"(opcional)"),t()(),i(930,"p"),e(931,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(932,"p"),e(933,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(934,"code"),e(935,"t-additional-help-tooltip"),t(),e(936," e "),i(937,"code"),e(938,"t-additional-help"),t(),e(939,") ser\xE1 ignorado."),t()()(),i(940,"tr",19)(941,"td",20)(942,"div",21)(943,"span",22),e(944,"t-required"),o(945,"br"),t()()(),i(946,"td",24)(947,"code",29),e(948,"boolean"),t()(),i(949,"td",26)(950,"p")(951,"code"),e(952,"false"),t()()(),i(953,"td",27)(954,"em")(955,"strong"),e(956,"(opcional)"),t()(),i(957,"p"),e(958,"Define o campo como obrigat\xF3rio. Caso "),i(959,"strong"),e(960,"t-disabled"),t(),e(961," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(962,"tr",19)(963,"td",20)(964,"div",21)(965,"span",22),e(966,"t-search-on-enter"),o(967,"br"),t()()(),i(968,"td",24)(969,"code",48),e(970,"'equal' "),t(),i(971,"code",49),e(972," 'include'"),t()(),i(973,"td",26)(974,"p")(975,"code"),e(976,"equal"),t()()(),i(977,"td",27)(978,"em")(979,"strong"),e(980,"(opcional)"),t()(),i(981,"p"),e(982,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(983,"blockquote")(984,"p"),e(985,"Caso essa propriedade seja definida como "),i(986,"code"),e(987,"equal"),t(),e(988,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(989,"code"),e(990,"include"),t(),e(991,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(992,"tr",19)(993,"td",20)(994,"div",30)(995,"span",31),e(996," (t-selected)"),o(997,"br"),t()()(),i(998,"td",24)(999,"code",25),e(1e3,"EventEmitter"),t()(),i(1001,"td",26),e(1002,"-"),t(),i(1003,"td",27)(1004,"em")(1005,"strong"),e(1006,"(opcional)"),t()(),i(1007,"p"),e(1008,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(1009,"strong"),e(1010,"t-field-value"),t(),e(1011,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(1012,"tr",19)(1013,"td",20)(1014,"div",21)(1015,"span",22),e(1016,"t-show-required"),o(1017,"br"),t()()(),i(1018,"td",24)(1019,"code",29),e(1020,"boolean"),t()(),i(1021,"td",26)(1022,"p")(1023,"code"),e(1024,"false"),t()()(),i(1025,"td",27)(1026,"em")(1027,"strong"),e(1028,"(opcional)"),t()(),i(1029,"p"),e(1030,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(1031,"strong"),e(1032,"t-required"),t(),e(1033," esteja habilitado e "),i(1034,"strong"),e(1035,"t-label"),t(),e(1036," definido."),t()()(),i(1037,"tr",19)(1038,"td",20)(1039,"div",21)(1040,"span",22),e(1041," t-modal-size"),o(1042,"br"),t()()(),i(1043,"td",24)(1044,"code",28),e(1045,"string"),t()(),i(1046,"td",26)(1047,"p")(1048,"code"),e(1049,"lg"),t()()(),i(1050,"td",27)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),i(1054,"p"),e(1055,"Define o tamanho do modal."),t(),i(1056,"p"),e(1057,"Valores v\xE1lidos:"),t(),i(1058,"ul")(1059,"li")(1060,"code"),e(1061,"sm"),t(),e(1062," (pequeno)"),t(),i(1063,"li")(1064,"code"),e(1065,"md"),t(),e(1066," (m\xE9dio)"),t(),i(1067,"li")(1068,"code"),e(1069,"lg"),t(),e(1070," (grande)"),t(),i(1071,"li")(1072,"code"),e(1073,"xl"),t(),e(1074," (extra grande)"),t(),i(1075,"li")(1076,"code"),e(1077,"auto"),t(),e(1078," (autom\xE1tico)"),t()(),i(1079,"blockquote")(1080,"p"),e(1081,"Quando informado "),i(1082,"code"),e(1083,"auto"),t(),e(1084,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(1085,"code"),e(1086,"lg"),t(),e(1087,"."),t()()()()()(),i(1088,"po-accordion-item",50)(1089,"table",51)(1090,"tr",19)(1091,"th",52)(1092,"div",21)(1093,"h4")(1094,"span",22),e(1095," showAdditionalHelp "),t()()()()(),i(1096,"tr",27)(1097,"td",27)(1098,"p"),e(1099,"M\xE9todo que exibe "),i(1100,"code"),e(1101,"t-helper"),t(),e(1102," ou executa a a\xE7\xE3o definida em "),i(1103,"code"),e(1104,"t-helper{eventOnClick}"),t(),e(1105," ou em "),i(1106,"code"),e(1107,"t-additionalHelp"),t(),e(1108,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1109,"code"),e(1110,"t-keydown"),t(),e(1111,"."),t(),i(1112,"pre")(1113,"code"),e(1114,`<thf-lookup
 #lookup
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>`),t()(),i(1115,"pre")(1116,"code"),e(1117,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}`),t()()()()(),o(1118,"br"),t()()(),w(1119,2),t(),i(1120,"po-tab",53),w(1121,3),i(1122,"po-container",5)(1123,"po-accordion",6)(1124,"po-accordion-item",54)(1125,"h4",9)(1126,"code"),e(1127,"ThfLookupColumn"),t()(),i(1128,"div",10)(1129,"p"),e(1130,"Interface para configura\xE7\xE3o das colunas ("),i(1131,"strong"),e(1132,"t-columns"),t(),e(1133,")."),t()(),i(1134,"h4",15),e(1135,"Propriedades"),t(),i(1136,"table",16)(1137,"tr",17)(1138,"th",18),e(1139,"Nome"),t(),i(1140,"th",18),e(1141,"Tipo"),t(),i(1142,"th",18),e(1143,"Descri\xE7\xE3o"),t()(),i(1144,"tr",19)(1145,"td",20)(1146,"div",21)(1147,"span",22),e(1148," boolean"),o(1149,"br"),t()()(),i(1150,"td",24)(1151,"code",55),e(1152,"PoTableBoolean"),t()(),i(1153,"td",27)(1154,"em")(1155,"strong"),e(1156,"(opcional)"),t()(),i(1157,"p"),e(1158,"Define um objeto do tipo "),i(1159,"code"),e(1160,"PoTableBoolean"),t(),e(1161," para as colunas do tipo "),i(1162,"em"),e(1163,"boolean"),t(),e(1164,". Por exemplo:"),t(),i(1165,"pre")(1166,"code"),e(1167,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(1168,"blockquote")(1169,"p"),e(1170,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(1171,"em"),e(1172,"boolean"),t(),e(1173,`,
esta exibir\xE1 por padr\xE3o `),i(1174,"code"),e(1175,"Sim"),t(),e(1176," e "),i(1177,"code"),e(1178,"N\xE3o"),t(),e(1179," de acordo com os valores "),i(1180,"em"),e(1181,"booleanos"),t(),e(1182,"."),t()()()(),i(1183,"tr",19)(1184,"td",20)(1185,"div",21)(1186,"span",22),e(1187," booleanFalse"),o(1188,"br"),t()()(),i(1189,"td",24)(1190,"code",28),e(1191,"string"),t()(),i(1192,"td",27)(1193,"em")(1194,"strong"),e(1195,"(opcional)"),t()(),i(1196,"p"),e(1197,"Texto exibido quando o valor da coluna for "),i(1198,"em"),e(1199,"false"),t(),e(1200,"."),t()()(),i(1201,"tr",19)(1202,"td",20)(1203,"div",21)(1204,"span",22),e(1205," booleanTrue"),o(1206,"br"),t()()(),i(1207,"td",24)(1208,"code",28),e(1209,"string"),t()(),i(1210,"td",27)(1211,"em")(1212,"strong"),e(1213,"(opcional)"),t()(),i(1214,"p"),e(1215,"Texto exibido quando o valor da coluna for "),i(1216,"em"),e(1217,"true"),t(),e(1218,"."),t()()(),i(1219,"tr",19)(1220,"td",20)(1221,"div",21)(1222,"span",22),e(1223," disabled"),o(1224,"br"),t()()(),i(1225,"td",24)(1226,"code",56),e(1227,"Function"),t()(),i(1228,"td",27)(1229,"em")(1230,"strong"),e(1231,"(opcional)"),t()(),i(1232,"p"),e(1233,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(1234,"em"),e(1235,"link"),t(),e(1236," e sua a\xE7\xE3o."),t(),i(1237,"blockquote")(1238,"p"),e(1239,"Propriedade dispon\xEDvel nas colunas do tipo "),i(1240,"code"),e(1241,"link"),t(),e(1242,"."),t()()()(),i(1243,"tr",19)(1244,"td",20)(1245,"div",21)(1246,"span",22),e(1247," format"),o(1248,"br"),t()()(),i(1249,"td",24)(1250,"code",28),e(1251,"string"),t()(),i(1252,"td",27)(1253,"em")(1254,"strong"),e(1255,"(opcional)"),t()(),i(1256,"p"),e(1257,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1258,"ul")(1259,"li"),e(1260,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1261,"li"),e(1262,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1263,"tr",19)(1264,"td",20)(1265,"div",21)(1266,"span",22),e(1267," label"),o(1268,"br"),t()()(),i(1269,"td",24)(1270,"code",28),e(1271,"string"),t()(),i(1272,"td",27)(1273,"em")(1274,"strong"),e(1275,"(opcional)"),t()(),i(1276,"p"),e(1277,"Texto para t\xEDtulo da coluna."),t(),i(1278,"p"),e(1279,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1280,"em"),e(1281,"label"),t(),e(1282," o valor da propriedade "),i(1283,"em"),e(1284,"property"),t(),e(1285," com a primeira letra em mai\xFAsculo."),t()()(),i(1286,"tr",19)(1287,"td",20)(1288,"div",21)(1289,"span",22),e(1290," labels"),o(1291,"br"),t()()(),i(1292,"td",24)(1293,"code",57),e(1294,"Array<PoTableColumnLabel>"),t()(),i(1295,"td",27)(1296,"em")(1297,"strong"),e(1298,"(opcional)"),t()(),i(1299,"p"),e(1300,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1301,"code"),e(1302,"PoTableColumnLabel"),t(),e(1303," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1304,"pre")(1305,"code"),e(1306,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(1307,"tr",19)(1308,"td",20)(1309,"div",21)(1310,"span",22),e(1311," locale"),o(1312,"br"),t()()(),i(1313,"td",24)(1314,"code",28),e(1315,"string"),t()(),i(1316,"td",27)(1317,"em")(1318,"strong"),e(1319,"(opcional)"),t()(),i(1320,"p"),e(1321,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1322,"a",58)(1323,"code"),e(1324,"I18n"),t()()(),i(1325,"p"),e(1326,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1327,"pre")(1328,"code"),e(1329,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(1330,"blockquote")(1331,"p"),e(1332,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1333,"p"),e(1334,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1335,"p"),e(1336,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1337,"a",58)(1338,"code"),e(1339,"I18n"),t()()()(),i(1340,"p"),e(1341,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1342,"pre")(1343,"code"),e(1344,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(1345,"blockquote")(1346,"p"),e(1347,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1348,"code"),e(1349,"number"),t(),e(1350," e "),i(1351,"code"),e(1352,"currency"),t(),e(1353,"."),t()()()(),i(1354,"tr",19)(1355,"td",20)(1356,"div",21)(1357,"span",22),e(1358," property"),o(1359,"br"),t()()(),i(1360,"td",24)(1361,"code",28),e(1362,"string"),t()(),i(1363,"td",27)(1364,"em")(1365,"strong"),e(1366,"(opcional)"),t()(),i(1367,"p"),e(1368,"Nome identificador da coluna."),t()()(),i(1369,"tr",19)(1370,"td",20)(1371,"div",21)(1372,"span",22),e(1373," type"),o(1374,"br"),t()()(),i(1375,"td",24)(1376,"code",28),e(1377,"string"),t()(),i(1378,"td",27)(1379,"em")(1380,"strong"),e(1381,"(opcional)"),t()(),i(1382,"p"),e(1383,"Tipo da coluna:"),t(),i(1384,"ul")(1385,"li"),e(1386,"string (padr\xE3o): textos"),t(),i(1387,"li"),e(1388,"number: valores num\xE9ricos"),t(),i(1389,"li"),e(1390,"date: data"),t(),i(1391,"li"),e(1392,"currency: valores monet\xE1rios"),t(),i(1393,"li"),e(1394,"dateTime: data e hora"),t()()()(),i(1395,"tr",19)(1396,"td",20)(1397,"div",21)(1398,"span",22),e(1399," visible"),o(1400,"br"),t()()(),i(1401,"td",24)(1402,"code",29),e(1403,"boolean"),t()(),i(1404,"td",27)(1405,"em")(1406,"strong"),e(1407,"(opcional)"),t()(),i(1408,"p"),e(1409,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1410,"strong"),e(1411,"gerenciador de colunas"),t(),e(1412,"."),t(),i(1413,"blockquote")(1414,"p"),e(1415,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1416,"code"),e(1417,"p-max-columns"),t(),e(1418,"."),t()()()(),i(1419,"tr",19)(1420,"td",20)(1421,"div",21)(1422,"span",22),e(1423," width"),o(1424,"br"),t()()(),i(1425,"td",24)(1426,"code",28),e(1427,"string"),t()(),i(1428,"td",27)(1429,"em")(1430,"strong"),e(1431,"(opcional)"),t()(),i(1432,"p"),e(1433,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1434,"po-accordion-item",59)(1435,"h4",9)(1436,"code"),e(1437,"ThfLookupFilterSearchSelect"),t()(),i(1438,"div",10)(1439,"p"),e(1440,"Interface que define as colunas para busca ("),i(1441,"strong"),e(1442,"t-filter-search-select"),t(),e(1443,")"),t()(),i(1444,"h4",15),e(1445,"Propriedades"),t(),i(1446,"table",16)(1447,"tr",17)(1448,"th",18),e(1449,"Nome"),t(),i(1450,"th",18),e(1451,"Tipo"),t(),i(1452,"th",18),e(1453,"Descri\xE7\xE3o"),t()(),i(1454,"tr",19)(1455,"td",20)(1456,"div",21)(1457,"span",22),e(1458," label"),o(1459,"br"),t()()(),i(1460,"td",24)(1461,"code",28),e(1462,"string"),t()(),i(1463,"td",27)(1464,"p"),e(1465,"R\xF3tulo da coluna"),t()()(),i(1466,"tr",19)(1467,"td",20)(1468,"div",21)(1469,"span",22),e(1470," value"),o(1471,"br"),t()()(),i(1472,"td",24)(1473,"code",28),e(1474,"string"),t()(),i(1475,"td",27)(1476,"p"),e(1477,"Coluna"),t()()()()(),i(1478,"po-accordion-item",60)(1479,"h4",9)(1480,"code"),e(1481,"ThfLookupFilter"),t()(),i(1482,"div",10)(1483,"p"),e(1484,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1485,"table",51)(1486,"tr",19)(1487,"th",52)(1488,"div",21)(1489,"h4")(1490,"span",22),e(1491," fetchItems "),t()()()()(),i(1492,"tr",27)(1493,"td",27)(1494,"p"),e(1495,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1496,"em"),e(1497,"Observable"),t(),e(1498," com a resposta da API no formato { items: [] }."),t()()()(),i(1499,"h5")(1500,"b"),e(1501,"Par\xE2metros"),t()(),i(1502,"table",16)(1503,"tr",17)(1504,"th",18),e(1505,"Nome"),t(),i(1506,"th",18),e(1507,"Tipo"),t(),i(1508,"th",18),e(1509,"Descri\xE7\xE3o"),t()(),i(1510,"tr",19)(1511,"td",20),e(1512," query"),t(),i(1513,"td",24)(1514,"code",61),e(1515," string "),t()(),i(1516,"td",27)(1517,"p"),e(1518,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1519,"tr",19)(1520,"td",20),e(1521," filterParams"),t(),i(1522,"td",24)(1523,"code",61),e(1524," any "),t()(),i(1525,"td",27)(1526,"p"),e(1527,"Valor informado atrav\xE9s da propriedade "),i(1528,"strong"),e(1529,"t-filter-params"),t(),e(1530,"."),t()()()(),o(1531,"br"),i(1532,"table",51)(1533,"tr",19)(1534,"th",52)(1535,"div",21)(1536,"h4")(1537,"span",22),e(1538," getFilteredItems "),t()()()()(),i(1539,"tr",27)(1540,"td",27)(1541,"p"),e(1542,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1543,"em"),e(1544,"Observable"),t(),e(1545," com a resposta da API no formato da interface "),i(1546,"strong"),e(1547,"ThfLookupResponseApi"),t(),e(1548,"."),t()()()(),i(1549,"h5")(1550,"b"),e(1551,"Par\xE2metros"),t()(),i(1552,"table",16)(1553,"tr",17)(1554,"th",18),e(1555,"Nome"),t(),i(1556,"th",18),e(1557,"Tipo"),t(),i(1558,"th",18),e(1559,"Descri\xE7\xE3o"),t()(),i(1560,"tr",19)(1561,"td",20),e(1562," params"),t(),i(1563,"td",24)(1564,"code",61),e(1565," ThfLookupFilteredItemsParams "),t()(),i(1566,"td",27)(1567,"p"),e(1568,"Objeto enviado por par\xE2metro que implementa a interface "),i(1569,"strong"),e(1570,"ThfLookupFilteredItemsParams"),t(),e(1571,"."),t()()()(),o(1572,"br"),i(1573,"table",51)(1574,"tr",19)(1575,"th",52)(1576,"div",21)(1577,"h4")(1578,"span",22),e(1579," getObjectByValue "),t()()()()(),i(1580,"tr",27)(1581,"td",27)(1582,"p"),e(1583,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1584,"p"),e(1585,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1586,"code"),e(1587,"value"),t(),e(1588,` ser\xE1 enviado como uma lista de valores
e o `),i(1589,"em"),e(1590,"Observable"),t(),e(1591," deve retornar uma lista de objetos."),t()()()(),i(1592,"h5")(1593,"b"),e(1594,"Par\xE2metros"),t()(),i(1595,"table",16)(1596,"tr",17)(1597,"th",18),e(1598,"Nome"),t(),i(1599,"th",18),e(1600,"Tipo"),t(),i(1601,"th",18),e(1602,"Descri\xE7\xE3o"),t()(),i(1603,"tr",19)(1604,"td",20),e(1605," value"),t(),i(1606,"td",24)(1607,"code",28),e(1608," string "),t(),i(1609,"code",36),e(1610," Array<any> "),t()(),i(1611,"td",27)(1612,"p"),e(1613,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1614,"tr",19)(1615,"td",20),e(1616," filterParams"),t(),i(1617,"td",24)(1618,"code",61),e(1619," any "),t()(),i(1620,"td",27)(1621,"p"),e(1622,"Valor informado atrav\xE9s da propriedade "),i(1623,"strong"),e(1624,"t-filter-params"),t(),e(1625,"."),t()()()(),o(1626,"br"),t(),i(1627,"po-accordion-item",62)(1628,"h4",9)(1629,"code"),e(1630,"ThfLookupFilteredItemsParams"),t()(),i(1631,"div",10)(1632,"p"),e(1633,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1634,"strong"),e(1635,"getFilteredItems"),t(),e(1636,"."),t()(),i(1637,"h4",15),e(1638,"Propriedades"),t(),i(1639,"table",16)(1640,"tr",17)(1641,"th",18),e(1642,"Nome"),t(),i(1643,"th",18),e(1644,"Tipo"),t(),i(1645,"th",18),e(1646,"Descri\xE7\xE3o"),t()(),i(1647,"tr",19)(1648,"td",20)(1649,"div",21)(1650,"span",22),e(1651," filter"),o(1652,"br"),t()()(),i(1653,"td",24)(1654,"code",63),e(1655,`{ [key: string]: any;
}`),t()(),i(1656,"td",27)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1662,"tr",19)(1663,"td",20)(1664,"div",21)(1665,"span",22),e(1666," filterParams"),o(1667,"br"),t()()(),i(1668,"td",24)(1669,"code",39),e(1670,"any"),t()(),i(1671,"td",27)(1672,"em")(1673,"strong"),e(1674,"(opcional)"),t()(),i(1675,"p"),e(1676,"Valor informado atrav\xE9s da propriedade "),i(1677,"code"),e(1678,"t-filter-params"),t(),e(1679,"."),t()()(),i(1680,"tr",19)(1681,"td",20)(1682,"div",21)(1683,"span",22),e(1684," order"),o(1685,"br"),t()()(),i(1686,"td",24)(1687,"code",28),e(1688,"string"),t()(),i(1689,"td",27)(1690,"em")(1691,"strong"),e(1692,"(opcional)"),t()(),i(1693,"p"),e(1694,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1695,"ul")(1696,"li"),e(1697,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1698,"code"),e(1699,"-<colunaOrdenada>"),t(),e(1700,", por exemplo "),i(1701,"code"),e(1702,"-name"),t(),e(1703,"."),t(),i(1704,"li"),e(1705,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1706,"code"),e(1707,"<colunaOrdenada>"),t(),e(1708,", por exemplo "),i(1709,"code"),e(1710,"name"),t(),e(1711,"."),t()()()(),i(1712,"tr",19)(1713,"td",20)(1714,"div",21)(1715,"span",22),e(1716," page"),o(1717,"br"),t()()(),i(1718,"td",24)(1719,"code",64),e(1720,"number"),t()(),i(1721,"td",27)(1722,"em")(1723,"strong"),e(1724,"(opcional)"),t()(),i(1725,"p"),e(1726,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1727,"tr",19)(1728,"td",20)(1729,"div",21)(1730,"span",22),e(1731," pageSize"),o(1732,"br"),t()()(),i(1733,"td",24)(1734,"code",64),e(1735,"number"),t()(),i(1736,"td",27)(1737,"em")(1738,"strong"),e(1739,"(opcional)"),t()(),i(1740,"p"),e(1741,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1742,"po-accordion-item",65)(1743,"h4",9)(1744,"code"),e(1745,"ThfLookupGridProperties"),t()(),i(1746,"div",10)(1747,"p"),e(1748,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t()(),i(1749,"h4",15),e(1750,"Propriedades"),t(),i(1751,"table",16)(1752,"tr",17)(1753,"th",18),e(1754,"Nome"),t(),i(1755,"th",18),e(1756,"Tipo"),t(),i(1757,"th",18),e(1758,"Descri\xE7\xE3o"),t()(),i(1759,"tr",19)(1760,"td",20)(1761,"div",21)(1762,"span",22),e(1763," autoSize"),o(1764,"br"),t()()(),i(1765,"td",24)(1766,"code",29),e(1767,"boolean"),t()(),i(1768,"td",27)(1769,"em")(1770,"strong"),e(1771,"(opcional)"),t()(),i(1772,"p"),e(1773,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1774,"strong"),e(1775,"resizable"),t(),e(1776," esteja habilitada."),t(),i(1777,"blockquote")(1778,"p"),e(1779,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1780,"tr",19)(1781,"td",20)(1782,"div",21)(1783,"span",22),e(1784," autoSizeOnScroll"),o(1785,"br"),t()()(),i(1786,"td",24)(1787,"code",29),e(1788,"boolean"),t()(),i(1789,"td",27)(1790,"em")(1791,"strong"),e(1792,"(opcional)"),t()(),i(1793,"p"),e(1794,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1795,"p"),e(1796,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1797,"p"),e(1798,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1799,"code"),e(1800,"t-page-size-virtual"),t(),e(1801," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1802,"blockquote")(1803,"p")(1804,"strong"),e(1805,"Pr\xE9-requisitos"),t(),e(1806,": Requer que as propriedades "),i(1807,"code"),e(1808,"autoSize"),t(),e(1809,", "),i(1810,"code"),e(1811,"resizable"),t(),e(1812,`
e `),i(1813,"code"),e(1814,"virtualScroll"),t(),e(1815," estejam habilitadas."),t()(),i(1816,"blockquote")(1817,"p")(1818,"strong"),e(1819,"Incompatibilidade"),t(),e(1820,": N\xE3o funciona com "),i(1821,"code"),e(1822,"t-grid-row-actions"),t(),e(1823," habilitado;"),t()(),i(1824,"p")(1825,"strong"),e(1826,"Exemplo de uso:"),t()(),i(1827,"pre")(1828,"code",33),e(1829,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1830,"tr",19)(1831,"td",20)(1832,"div",21)(1833,"span",22),e(1834," draggable"),o(1835,"br"),t()()(),i(1836,"td",24)(1837,"code",29),e(1838,"boolean"),t()(),i(1839,"td",27)(1840,"em")(1841,"strong"),e(1842,"(opcional)"),t()(),i(1843,"p"),e(1844,"Habilita o Drag and Drop nas colunas."),t()()(),i(1845,"tr",19)(1846,"td",20)(1847,"div",21)(1848,"span",22),e(1849," group"),o(1850,"br"),t()()(),i(1851,"td",24)(1852,"code",37),e(1853,"Array<string>"),t()(),i(1854,"td",27)(1855,"em")(1856,"strong"),e(1857,"(opcional)"),t()(),i(1858,"p"),e(1859,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1860,"strong"),e(1861,"groupable"),t(),e(1862," esteja habilitada."),t()()(),i(1863,"tr",19)(1864,"td",20)(1865,"div",21)(1866,"span",22),e(1867," groupable"),o(1868,"br"),t()()(),i(1869,"td",24)(1870,"code",29),e(1871,"boolean "),t(),i(1872,"code",66),e(1873," GroupableSettings"),t()(),i(1874,"td",27)(1875,"em")(1876,"strong"),e(1877,"(opcional)"),t()(),i(1878,"p"),e(1879,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1880,"tr",19)(1881,"td",20)(1882,"div",21)(1883,"span",22),e(1884," hideSelectAll"),o(1885,"br"),t()()(),i(1886,"td",24)(1887,"code",29),e(1888,"boolean"),t()(),i(1889,"td",27)(1890,"em")(1891,"strong"),e(1892,"(opcional)"),t()(),i(1893,"p"),e(1894,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1895,"tr",19)(1896,"td",20)(1897,"div",21)(1898,"span",22),e(1899," resizable"),o(1900,"br"),t()()(),i(1901,"td",24)(1902,"code",29),e(1903,"boolean"),t()(),i(1904,"td",27)(1905,"em")(1906,"strong"),e(1907,"(opcional)"),t()(),i(1908,"p"),e(1909,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1910,"tr",19)(1911,"td",20)(1912,"div",21)(1913,"span",22),e(1914," selectableEntireLine"),o(1915,"br"),t()()(),i(1916,"td",24)(1917,"code",29),e(1918,"boolean"),t()(),i(1919,"td",27)(1920,"em")(1921,"strong"),e(1922,"(opcional)"),t()(),i(1923,"p"),e(1924,"Permite selecionar o item ao clicar na linha."),t()()(),i(1925,"tr",19)(1926,"td",20)(1927,"div",21)(1928,"span",22),e(1929," showDraggableIcon"),o(1930,"br"),t()()(),i(1931,"td",24)(1932,"code",29),e(1933,"boolean"),t()(),i(1934,"td",27)(1935,"em")(1936,"strong"),e(1937,"(opcional)"),t()(),i(1938,"p"),e(1939,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1940,"tr",19)(1941,"td",20)(1942,"div",21)(1943,"span",22),e(1944," showMoreDisabled"),o(1945,"br"),t()()(),i(1946,"td",24)(1947,"code",29),e(1948,"boolean"),t()(),i(1949,"td",27)(1950,"em")(1951,"strong"),e(1952,"(opcional)"),t()(),i(1953,"p"),e(1954,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1955,"tr",19)(1956,"td",20)(1957,"div",21)(1958,"span",22),e(1959," showMoreVisible"),o(1960,"br"),t()()(),i(1961,"td",24)(1962,"code",29),e(1963,"boolean"),t()(),i(1964,"td",27)(1965,"em")(1966,"strong"),e(1967,"(opcional)"),t()(),i(1968,"p"),e(1969,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1970,"strong"),e(1971,"pageable"),t(),e(1972," esteja habilitada."),t(),i(1973,"blockquote")(1974,"p"),e(1975,"Caso seja utilizado em conjunto com "),i(1976,"strong"),e(1977,"showMoreDisabled"),t(),e(1978,", a propriedade "),i(1979,"strong"),e(1980,"showMoreVisible"),t(),e(1981," ter\xE1 prioridade."),t()()()(),i(1982,"tr",19)(1983,"td",20)(1984,"div",21)(1985,"span",22),e(1986," sort"),o(1987,"br"),t()()(),i(1988,"td",24)(1989,"code",67),e(1990,"Array<{ field: string; dir: 'asc' "),t(),i(1991,"code",68),e(1992,` 'desc';
}>`),t()(),i(1993,"td",27)(1994,"em")(1995,"strong"),e(1996,"(opcional)"),t()(),i(1997,"p"),e(1998,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1999,"pre")(2e3,"code",34),e(2001,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(2002,"tr",19)(2003,"td",20)(2004,"div",21)(2005,"span",22),e(2006," sortable"),o(2007,"br"),t()()(),i(2008,"td",24)(2009,"code",29),e(2010,"boolean"),t()(),i(2011,"td",27)(2012,"em")(2013,"strong"),e(2014,"(opcional)"),t()(),i(2015,"p"),e(2016,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2017,"tr",19)(2018,"td",20)(2019,"div",21)(2020,"span",22),e(2021," spacing"),o(2022,"br"),t()()(),i(2023,"td",24)(2024,"code",69),e(2025,"'extraSmall' "),t(),i(2026,"code",70),e(2027," 'small' "),t(),i(2028,"code",71),e(2029," 'medium' "),t(),i(2030,"code",72),e(2031," 'large'"),t()(),i(2032,"td",27)(2033,"em")(2034,"strong"),e(2035,"(opcional)"),t()(),i(2036,"p"),e(2037,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2038,"strong"),e(2039,"ThfColumnSpacing"),t(),e(2040,"."),t()()(),i(2041,"tr",19)(2042,"td",20)(2043,"div",21)(2044,"span",22),e(2045," striped"),o(2046,"br"),t()()(),i(2047,"td",24)(2048,"code",29),e(2049,"boolean"),t()(),i(2050,"td",27)(2051,"em")(2052,"strong"),e(2053,"(opcional)"),t()(),i(2054,"p"),e(2055,"Define o estilo listrado no grid (striped)."),t()()(),i(2056,"tr",19)(2057,"td",20)(2058,"div",21)(2059,"span",22),e(2060," virtualScroll"),o(2061,"br"),t()()(),i(2062,"td",24)(2063,"code",29),e(2064,"boolean"),t()(),i(2065,"td",27)(2066,"em")(2067,"strong"),e(2068,"(opcional)"),t()(),i(2069,"p"),e(2070,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(2071,"po-accordion-item",73)(2072,"h4",9)(2073,"code"),e(2074,"ThfLookupKeysLabel"),t()(),i(2075,"div",10)(2076,"p"),e(2077,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(2078,"strong"),e(2079,"t-keys-label"),t(),e(2080,")."),t()(),i(2081,"h4",15),e(2082,"Propriedades"),t(),i(2083,"table",16)(2084,"tr",17)(2085,"th",18),e(2086,"Nome"),t(),i(2087,"th",18),e(2088,"Tipo"),t(),i(2089,"th",18),e(2090,"Descri\xE7\xE3o"),t()(),i(2091,"tr",19)(2092,"td",20)(2093,"div",21)(2094,"span",22),e(2095," label"),o(2096,"br"),t()()(),i(2097,"td",24)(2098,"code",28),e(2099,"string"),t()(),i(2100,"td",27)(2101,"p"),e(2102,"Texto exibido"),t()()(),i(2103,"tr",19)(2104,"td",20)(2105,"div",21)(2106,"span",22),e(2107," value"),o(2108,"br"),t()()(),i(2109,"td",24)(2110,"code",28),e(2111,"string"),t()(),i(2112,"td",27)(2113,"p"),e(2114,"Coluna"),t()()()()(),i(2115,"po-accordion-item",74)(2116,"h4",9)(2117,"code"),e(2118,"ThfLookupLiterals"),t()(),i(2119,"div",10)(2120,"p"),e(2121,"Interface para customizar literais ("),i(2122,"strong"),e(2123,"t-literals"),t(),e(2124,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(2125,"h4",15),e(2126,"Propriedades"),t(),i(2127,"table",16)(2128,"tr",17)(2129,"th",18),e(2130,"Nome"),t(),i(2131,"th",18),e(2132,"Tipo"),t(),i(2133,"th",18),e(2134,"Descri\xE7\xE3o"),t()(),i(2135,"tr",19)(2136,"td",20)(2137,"div",21)(2138,"span",22),e(2139," confirmBodyDelete"),o(2140,"br"),t()()(),i(2141,"td",24)(2142,"code",28),e(2143,"string"),t()(),i(2144,"td",27)(2145,"em")(2146,"strong"),e(2147,"(opcional)"),t()(),i(2148,"p"),e(2149,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2150,"tr",19)(2151,"td",20)(2152,"div",21)(2153,"span",22),e(2154," confirmCancelDelete"),o(2155,"br"),t()()(),i(2156,"td",24)(2157,"code",28),e(2158,"string"),t()(),i(2159,"td",27)(2160,"em")(2161,"strong"),e(2162,"(opcional)"),t()(),i(2163,"p"),e(2164,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2165,"tr",19)(2166,"td",20)(2167,"div",21)(2168,"span",22),e(2169," confirmRemoveDelete"),o(2170,"br"),t()()(),i(2171,"td",24)(2172,"code",28),e(2173,"string"),t()(),i(2174,"td",27)(2175,"em")(2176,"strong"),e(2177,"(opcional)"),t()(),i(2178,"p"),e(2179,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2180,"tr",19)(2181,"td",20)(2182,"div",21)(2183,"span",22),e(2184," confirmTitleDelete"),o(2185,"br"),t()()(),i(2186,"td",24)(2187,"code",28),e(2188,"string"),t()(),i(2189,"td",27)(2190,"em")(2191,"strong"),e(2192,"(opcional)"),t()(),i(2193,"p"),e(2194,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2195,"tr",19)(2196,"td",20)(2197,"div",21)(2198,"span",22),e(2199," lastSearch"),o(2200,"br"),t()()(),i(2201,"td",24)(2202,"code",28),e(2203,"string"),t()(),i(2204,"td",27)(2205,"em")(2206,"strong"),e(2207,"(opcional)"),t()(),i(2208,"p"),e(2209,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(2210,"tr",19)(2211,"td",20)(2212,"div",21)(2213,"span",22),e(2214," listNotFound"),o(2215,"br"),t()()(),i(2216,"td",24)(2217,"code",28),e(2218,"string"),t()(),i(2219,"td",27)(2220,"em")(2221,"strong"),e(2222,"(opcional)"),t()(),i(2223,"p"),e(2224,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(2225,"tr",19)(2226,"td",20)(2227,"div",21)(2228,"span",22),e(2229," modalPlaceholder"),o(2230,"br"),t()()(),i(2231,"td",24)(2232,"code",28),e(2233,"string"),t()(),i(2234,"td",27)(2235,"em")(2236,"strong"),e(2237,"(opcional)"),t()(),i(2238,"p"),e(2239,"Texto exibido no placeholder do input da modal."),t()()(),i(2240,"tr",19)(2241,"td",20)(2242,"div",21)(2243,"span",22),e(2244," modalPrimaryActionLabel"),o(2245,"br"),t()()(),i(2246,"td",24)(2247,"code",28),e(2248,"string"),t()(),i(2249,"td",27)(2250,"em")(2251,"strong"),e(2252,"(opcional)"),t()(),i(2253,"p"),e(2254,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(2255,"tr",19)(2256,"td",20)(2257,"div",21)(2258,"span",22),e(2259," modalSecondaryActionLabel"),o(2260,"br"),t()()(),i(2261,"td",24)(2262,"code",28),e(2263,"string"),t()(),i(2264,"td",27)(2265,"em")(2266,"strong"),e(2267,"(opcional)"),t()(),i(2268,"p"),e(2269,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(2270,"tr",19)(2271,"td",20)(2272,"div",21)(2273,"span",22),e(2274," modalTableLoadMoreData"),o(2275,"br"),t()()(),i(2276,"td",24)(2277,"code",28),e(2278,"string"),t()(),i(2279,"td",27)(2280,"em")(2281,"strong"),e(2282,"(opcional)"),t()(),i(2283,"p"),e(2284,"Label do "),i(2285,"code"),e(2286,"button"),t(),e(2287," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(2288,"tr",19)(2289,"td",20)(2290,"div",21)(2291,"span",22),e(2292," modalTableLoadingData"),o(2293,"br"),t()()(),i(2294,"td",24)(2295,"code",28),e(2296,"string"),t()(),i(2297,"td",27)(2298,"em")(2299,"strong"),e(2300,"(opcional)"),t()(),i(2301,"p"),e(2302,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(2303,"tr",19)(2304,"td",20)(2305,"div",21)(2306,"span",22),e(2307," modalTableNoColumns"),o(2308,"br"),t()()(),i(2309,"td",24)(2310,"code",28),e(2311,"string"),t()(),i(2312,"td",27)(2313,"em")(2314,"strong"),e(2315,"(opcional)"),t()(),i(2316,"p"),e(2317,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(2318,"tr",19)(2319,"td",20)(2320,"div",21)(2321,"span",22),e(2322," modalTableNoData"),o(2323,"br"),t()()(),i(2324,"td",24)(2325,"code",28),e(2326,"string"),t()(),i(2327,"td",27)(2328,"em")(2329,"strong"),e(2330,"(opcional)"),t()(),i(2331,"p"),e(2332,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2333,"tr",19)(2334,"td",20)(2335,"div",21)(2336,"span",22),e(2337," modalTitle"),o(2338,"br"),t()()(),i(2339,"td",24)(2340,"code",28),e(2341,"string"),t()(),i(2342,"td",27)(2343,"em")(2344,"strong"),e(2345,"(opcional)"),t()(),i(2346,"p"),e(2347,"Texto exibido no t\xEDtulo da modal."),t()()(),i(2348,"tr",19)(2349,"td",20)(2350,"div",21)(2351,"span",22),e(2352," multipleItems"),o(2353,"br"),t()()(),i(2354,"td",24)(2355,"code",28),e(2356,"string"),t()(),i(2357,"td",27)(2358,"em")(2359,"strong"),e(2360,"(opcional)"),t()(),i(2361,"p"),e(2362,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(2363,"tr",19)(2364,"td",20)(2365,"div",21)(2366,"span",22),e(2367," oneItem"),o(2368,"br"),t()()(),i(2369,"td",24)(2370,"code",28),e(2371,"string"),t()(),i(2372,"td",27)(2373,"em")(2374,"strong"),e(2375,"(opcional)"),t()(),i(2376,"p"),e(2377,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2378,"tr",19)(2379,"td",20)(2380,"div",21)(2381,"span",22),e(2382," or"),o(2383,"br"),t()()(),i(2384,"td",24)(2385,"code",28),e(2386,"string"),t()(),i(2387,"td",27)(2388,"em")(2389,"strong"),e(2390,"(opcional)"),t()(),i(2391,"p"),e(2392,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(2393,"tr",19)(2394,"td",20)(2395,"div",21)(2396,"span",22),e(2397," searchAdvanced"),o(2398,"br"),t()()(),i(2399,"td",24)(2400,"code",28),e(2401,"string"),t()(),i(2402,"td",27)(2403,"em")(2404,"strong"),e(2405,"(opcional)"),t()(),i(2406,"p"),e(2407,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(2408,"tr",19)(2409,"td",20)(2410,"div",21)(2411,"span",22),e(2412," searchBy"),o(2413,"br"),t()()(),i(2414,"td",24)(2415,"code",28),e(2416,"string"),t()(),i(2417,"td",27)(2418,"em")(2419,"strong"),e(2420,"(opcional)"),t()(),i(2421,"p"),e(2422,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(2423,"po-accordion-item",75)(2424,"h4",9)(2425,"code"),e(2426,"ThfLookupResponseApi"),t()(),i(2427,"div",10)(2428,"p"),e(2429,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2430,"blockquote")(2431,"p"),e(2432,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2433,"h4",15),e(2434,"Propriedades"),t(),i(2435,"table",16)(2436,"tr",17)(2437,"th",18),e(2438,"Nome"),t(),i(2439,"th",18),e(2440,"Tipo"),t(),i(2441,"th",18),e(2442,"Descri\xE7\xE3o"),t()(),i(2443,"tr",19)(2444,"td",20)(2445,"div",21)(2446,"span",22),e(2447," hasNext"),o(2448,"br"),t()()(),i(2449,"td",24)(2450,"code",29),e(2451,"boolean"),t()(),i(2452,"td",27)(2453,"p"),e(2454,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2455,"tr",19)(2456,"td",20)(2457,"div",21)(2458,"span",22),e(2459," items"),o(2460,"br"),t()()(),i(2461,"td",24)(2462,"code",36),e(2463,"Array<any>"),t()(),i(2464,"td",27)(2465,"p"),e(2466,"Lista de itens retornados."),t()()()()()()(),w(2467,4),t(),i(2468,"po-tab",76)(2469,"po-container",5),w(2470,5),i(2471,"h3",77),e(2472,"Tokens customiz\xE1veis"),t(),i(2473,"p"),e(2474,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2475,"blockquote")(2476,"p"),e(2477,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2478,"a",78),e(2479,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2480,"."),t()(),i(2481,"table")(2482,"thead")(2483,"tr")(2484,"th"),e(2485,"Propriedade"),t(),i(2486,"th"),e(2487,"Descri\xE7\xE3o"),t(),i(2488,"th"),e(2489,"Valor Padr\xE3o"),t()()(),i(2490,"tbody")(2491,"tr")(2492,"td")(2493,"strong"),e(2494,"Default Values"),t()(),o(2495,"td")(2496,"td"),t(),i(2497,"tr")(2498,"td")(2499,"code"),e(2500,"--font-family"),t()(),i(2501,"td"),e(2502,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(2503,"td")(2504,"code"),e(2505,"var(--font-family-theme)"),t()()(),i(2506,"tr")(2507,"td")(2508,"code"),e(2509,"--font-size"),t()(),i(2510,"td"),e(2511,"Tamanho da fonte"),t(),i(2512,"td")(2513,"code"),e(2514,"var(--font-size)"),t()()(),i(2515,"tr")(2516,"td")(2517,"code"),e(2518,"--text-color-placeholder"),t()(),i(2519,"td"),e(2520,"Cor do texto no placeholder"),t(),i(2521,"td")(2522,"code"),e(2523,"var(--color-neutral-light-30)"),t()()(),i(2524,"tr")(2525,"td")(2526,"code"),e(2527,"--color"),t()(),i(2528,"td"),e(2529,"Cor principal do campo"),t(),i(2530,"td")(2531,"code"),e(2532,"var(--color-neutral-dark-70)"),t()()(),i(2533,"tr")(2534,"td")(2535,"code"),e(2536,"--background"),t()(),i(2537,"td"),e(2538,"Cor de background"),t(),i(2539,"td")(2540,"code"),e(2541,"var(--color-neutral-light-00)"),t()()(),i(2542,"tr")(2543,"td")(2544,"code"),e(2545,"--text-color"),t()(),i(2546,"td"),e(2547,"Cor do texto"),t(),i(2548,"td")(2549,"code"),e(2550,"var(--color-neutral-mid-60)"),t()()(),i(2551,"tr")(2552,"td")(2553,"strong"),e(2554,"Hover"),t()(),o(2555,"td")(2556,"td"),t(),i(2557,"tr")(2558,"td")(2559,"code"),e(2560,"--color-hover"),t()(),i(2561,"td"),e(2562,"Cor principal do campo no estado hover"),t(),i(2563,"td")(2564,"code"),e(2565,"var(--color-brand-01-dark)"),t()()(),i(2566,"tr")(2567,"td")(2568,"code"),e(2569,"--background-hover"),t()(),i(2570,"td"),e(2571,"Cor de background no estado hover"),t(),i(2572,"td")(2573,"code"),e(2574,"var(--color-brand-01-lightest)"),t()()(),i(2575,"tr")(2576,"td")(2577,"strong"),e(2578,"Focused"),t()(),o(2579,"td")(2580,"td"),t(),i(2581,"tr")(2582,"td")(2583,"code"),e(2584,"--color-focused"),t()(),i(2585,"td"),e(2586,"Cor principal do campo no estado de focus"),t(),i(2587,"td")(2588,"code"),e(2589,"var(--color-action-default)"),t()()(),i(2590,"tr")(2591,"td")(2592,"code"),e(2593,"--outline-color-focused"),t()(),i(2594,"td"),e(2595,"Cor do outline no estado de focus"),t(),i(2596,"td")(2597,"code"),e(2598,"var(--color-action-focus)"),t()()(),i(2599,"tr")(2600,"td")(2601,"strong"),e(2602,"Disabled"),t()(),o(2603,"td")(2604,"td"),t(),i(2605,"tr")(2606,"td")(2607,"code"),e(2608,"--color-disabled"),t()(),i(2609,"td"),e(2610,"Cor principal do campo no estado disabled"),t(),i(2611,"td")(2612,"code"),e(2613,"var(--color-neutral-light-30)"),t()()(),i(2614,"tr")(2615,"td")(2616,"code"),e(2617,"--background-disabled"),t()(),i(2618,"td"),e(2619,"Cor de background no estado disabled"),t(),i(2620,"td")(2621,"code"),e(2622,"var(--color-neutral-light-05)"),t()()(),i(2623,"tr")(2624,"td")(2625,"code"),e(2626,"--text-color-disabled"),t()(),i(2627,"td"),e(2628,"Cor do texto no estado disabled"),t(),i(2629,"td")(2630,"code"),e(2631,"var(--color-neutral-dark-70)"),t()()()()()(),w(2632,6),t(),i(2633,"po-tab",79),w(2634,7),t()()())},dependencies:[O,J,v,ae,H],encapsulation:2})}}return d})();var Oi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Gi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Tt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(V(ee))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup-data"]],viewQuery:function(r,n){if(r&1&&I(H,5)(O,5),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Gi,decls:2011,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupDataFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupDataLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupDataColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupDataFilterSearchSelect"],["p-label","ThfLookupDataFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupDataFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["p-label","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupDataKeysLabel"],["p-label","ThfLookupDataLiterals"],["p-label","ThfLookupDataResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["href","https://po-ui.io/documentation/po-search"],["href","https://thf.totvs.app/v19/documentation/thf-grid"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(te(Oi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupDataComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"Componente de busca com um grid que lista dados de um servi\xE7o."),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Lookup-Data"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfLookupDataComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-lookup-grid
  t-auto-focus="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-columns="Array<ThfLookupDataColumn>"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupDataFilterSearchSelect>"
  t-filter-service="ThfLookupDataFilter | string"
  t-grid-properties="ThfLookupDataGridProperties"
  t-height="number"
  t-help="string"
  (t-focus)="EventEmitter"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupDataKeysLabel>"
  t-label="string"
  t-literals="ThfLookupDataLiterals"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-helper="string | PoHelperOptions"
  t-required="boolean"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-size="string" >
</thf-lookup-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-auto-focus"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Aplica foco no campo de busca do componente ao ser iniciado."),t(),i(63,"blockquote")(64,"p"),e(65,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(66,"tr",19)(67,"td",20)(68,"div",27)(69,"span",28),e(70," (t-change)"),o(71,"br"),t()()(),i(72,"td",23)(73,"code",29),e(74,"EventEmitter"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(83,"tr",19)(84,"td",20)(85,"div",27)(86,"span",28),e(87," (t-change-model)"),o(88,"br"),t()()(),i(89,"td",23)(90,"code",29),e(91,"EventEmitter"),t()(),i(92,"td",25),e(93,"-"),t(),i(94,"td",26)(95,"em")(96,"strong"),e(97,"(opcional)"),t()(),i(98,"p"),e(99,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(100,"tr",19)(101,"td",20)(102,"div",21)(103,"span",22),e(104,"t-columns"),o(105,"br"),t()()(),i(106,"td",23)(107,"code",30),e(108,"Array<ThfLookupDataColumn>"),t()(),i(109,"td",25),e(110,"-"),t(),i(111,"td",26)(112,"em")(113,"strong"),e(114,"(opcional)"),t()(),i(115,"p"),e(116,"Permite definir e configurar as colunas do grid por meio da interface "),i(117,"strong"),e(118,"ThfLookupDataColumn"),t(),e(119,"."),t(),i(120,"pre")(121,"code",31),e(122,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(123,"pre")(124,"code",32),e(125,`columns: Array<ThfLookupDataColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(126,"tr",19)(127,"td",20)(128,"div",21)(129,"span",22),e(130,"t-custom-items"),o(131,"br"),t()()(),i(132,"td",23)(133,"code",33),e(134,"Array<any>"),t()(),i(135,"td",25)(136,"p")(137,"code"),e(138,"[]"),t()()(),i(139,"td",26)(140,"em")(141,"strong"),e(142,"(opcional)"),t()(),i(143,"p"),e(144,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(145,"tr",19)(146,"td",20)(147,"div",21)(148,"span",22),e(149,"t-disabled"),o(150,"br"),t()()(),i(151,"td",23)(152,"code",24),e(153,"boolean"),t()(),i(154,"td",25)(155,"p")(156,"code"),e(157,"false"),t()()(),i(158,"td",26)(159,"em")(160,"strong"),e(161,"(opcional)"),t()(),i(162,"p"),e(163,'Desabilita a sele\xE7\xE3o na grid, o campo de busca e o bot\xE3o "Carregar mais resultados" do componente.'),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-error-limit"),o(169,"br"),t()()(),i(170,"td",23)(171,"code",24),e(172,"boolean"),t()(),i(173,"td",25)(174,"p")(175,"code"),e(176,"false"),t()()(),i(177,"td",26)(178,"em")(179,"strong"),e(180,"(opcional)"),t()(),i(181,"p"),e(182,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(183,"blockquote")(184,"p"),e(185,"Caso essa propriedade seja definida como "),i(186,"code"),e(187,"true"),t(),e(188,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(189,"tr",19)(190,"td",20)(191,"div",21)(192,"span",22),e(193,"t-field-error-message"),o(194,"br"),t()()(),i(195,"td",23)(196,"code",34),e(197,"string"),t()(),i(198,"td",25),e(199,"-"),t(),i(200,"td",26)(201,"em")(202,"strong"),e(203,"(opcional)"),t()(),i(204,"p"),e(205,"Exibe a mensagem definida se n\xE3o houver itens selecionados."),t(),i(206,"blockquote")(207,"p"),e(208,"Necess\xE1rio que a propriedade "),i(209,"code"),e(210,"t-required"),t(),e(211," esteja habilitada."),t()()()(),i(212,"tr",19)(213,"td",20)(214,"div",21)(215,"span",22),e(216,"t-field-label"),o(217,"br"),t()()(),i(218,"td",23)(219,"code",34),e(220,"string"),t()(),i(221,"td",25),e(222,"-"),t(),i(223,"td",26)(224,"p"),e(225,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o.
Propriedade obrigat\xF3ria.`),t()()(),i(226,"tr",19)(227,"td",20)(228,"div",21)(229,"span",22),e(230,"t-field-value"),o(231,"br"),t()()(),i(232,"td",23)(233,"code",34),e(234,"string"),t()(),i(235,"td",25),e(236,"-"),t(),i(237,"td",26)(238,"p"),e(239,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(240,"blockquote")(241,"p"),e(242,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(243,"tr",19)(244,"td",20)(245,"div",21)(246,"span",22),e(247,"t-filter-params"),o(248,"br"),t()()(),i(249,"td",23)(250,"code",35),e(251,"any"),t()(),i(252,"td",25),e(253,"-"),t(),i(254,"td",26)(255,"em")(256,"strong"),e(257,"(opcional)"),t()(),i(258,"p"),e(259,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(260,"strong"),e(261,"ThfLookupDataFilter"),t(),e(262,"."),t()()(),i(263,"tr",19)(264,"td",20)(265,"div",21)(266,"span",22),e(267,"t-filter-search-select"),o(268,"br"),t()()(),i(269,"td",23)(270,"code",36),e(271,"Array<ThfLookupDataFilterSearchSelect>"),t()(),i(272,"td",25),e(273,"-"),t(),i(274,"td",26)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),i(278,"p"),e(279,"Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro. Deve implementar a interface "),i(280,"strong"),e(281,"ThfLookupDataFilterSearchSelect"),t(),e(282,"."),t(),i(283,"pre")(284,"code",31),e(285,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(286,"pre")(287,"code",32),e(288,`filterSelect: Array<ThfLookupDataFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(289,"tr",19)(290,"td",20)(291,"div",21)(292,"span",22),e(293,"t-filter-service"),o(294,"br"),t()()(),i(295,"td",23)(296,"code",37),e(297,"ThfLookupDataFilter "),t(),i(298,"code",34),e(299," string"),t()(),i(300,"td",25),e(301,"-"),t(),i(302,"td",26)(303,"p"),e(304,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(305,"strong"),e(306,"ThfLookupDataFilter"),t(),e(307," ou uma URL."),t(),i(308,"p"),e(309,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(310,"code"),e(311,"filter"),t(),e(312," com o valor da busca:"),t(),i(313,"pre")(314,"code"),e(315,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(316,"p"),e(317,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(318,"code"),e(319,"order"),t(),e(320,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(321,"pre")(322,"code"),e(323,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(324,"p"),e(325,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(326,"pre")(327,"code"),e(328,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(329,"p"),e(330,"Se definido "),i(331,"strong"),e(332,"t-filter-params"),t(),e(333,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(334,"code"),e(335,"{ age: 23 }"),t(),e(336,":"),t(),i(337,"pre")(338,"code"),e(339,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(340,"p"),e(341,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(342,"pre")(343,"code"),e(344,`model = 1234;

GET url/1234`),t()(),i(345,"p"),e(346,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(347,"pre")(348,"code"),e(349,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(350,"blockquote")(351,"p"),e(352,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(353,"a",38),e(354,"API do PO UI"),t(),e(355,` e utilizar
os valores definidos nas propriedades `),i(356,"strong"),e(357,"t-field-label"),t(),e(358," e "),i(359,"strong"),e(360,"t-field-value"),t(),e(361," para a constru\xE7\xE3o do "),i(362,"strong"),e(363,"thf-lookup"),t(),e(364,"."),t()(),i(365,"p"),e(366,"Caso a busca tenha ocorrido pressionando a tecla "),i(367,"em"),e(368,"TAB"),t(),e(369,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(370,"a",39),e(371,"encodeURIComponent"),t(),e(372,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(373,"pre")(374,"code"),e(375,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(376,"blockquote")(377,"p"),e(378,"Caso utilize um servi\xE7o "),i(379,"strong"),e(380,"ThfLookupDataFilter"),t(),e(381,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(382,"tr",19)(383,"td",20)(384,"div",21)(385,"span",22),e(386,"t-grid-properties"),o(387,"br"),t()()(),i(388,"td",23)(389,"code",40),e(390,"ThfLookupDataGridProperties"),t()(),i(391,"td",25),e(392,"-"),t(),i(393,"td",26)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),i(397,"p"),e(398,"Propriedades para configura\xE7\xE3o do "),i(399,"code"),e(400,"THF-Grid"),t(),e(401,"."),t(),i(402,"p"),e(403,"// Exemplo de uso:"),t(),i(404,"pre")(405,"code",31),e(406,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(407,"pre")(408,"code",32),e(409,`gridProperties: ThfLookupDataGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(410,"tr",19)(411,"td",20)(412,"div",21)(413,"span",22),e(414,"t-height"),o(415,"br"),t()()(),i(416,"td",23)(417,"code",41),e(418,"number"),t()(),i(419,"td",25),e(420,"-"),t(),i(421,"td",26)(422,"em")(423,"strong"),e(424,"(opcional)"),t()(),i(425,"p"),e(426,"Define a altura do componente em pixels."),t(),i(427,"blockquote")(428,"p"),e(429,"Recomenda-se definir um valor acima de 368px para garantir uma boa visualiza\xE7\xE3o do componente."),t()(),i(430,"blockquote")(431,"p"),e(432,'A altura m\xEDnima do componente corresponde \xE0 soma da altura do campo de busca com a altura do bot\xE3o "Carregar mais resultados".'),t()()()(),i(433,"tr",19)(434,"td",20)(435,"div",21)(436,"span",22),e(437,"t-help"),o(438,"br"),t()()(),i(439,"td",23)(440,"code",34),e(441,"string"),t()(),i(442,"td",25),e(443,"-"),t(),i(444,"td",26)(445,"em")(446,"strong"),e(447,"(opcional)"),t()(),i(448,"p"),e(449,"Texto de apoio do componente."),t()()(),i(450,"tr",19)(451,"td",20)(452,"div",27)(453,"span",28),e(454," (t-focus)"),o(455,"br"),t()()(),i(456,"td",23)(457,"code",29),e(458,"EventEmitter"),t()(),i(459,"td",25),e(460,"-"),t(),i(461,"td",26)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),i(465,"p"),e(466,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(467,"p"),e(468,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(469,"tr",19)(470,"td",20)(471,"div",27)(472,"span",28),e(473," (t-keydown)"),o(474,"br"),t()()(),i(475,"td",23)(476,"code",29),e(477,"EventEmitter"),t()(),i(478,"td",25),e(479,"-"),t(),i(480,"td",26)(481,"em")(482,"strong"),e(483,"(opcional)"),t()(),i(484,"p"),e(485,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(486,"code"),e(487,"KeyboardEvent"),t(),e(488," com informa\xE7\xF5es sobre a tecla."),t()()(),i(489,"tr",19)(490,"td",20)(491,"div",21)(492,"span",22),e(493,"t-keys-label"),o(494,"br"),t()()(),i(495,"td",23)(496,"code",42),e(497,"Array<ThfLookupDataKeysLabel>"),t()(),i(498,"td",25),e(499,"-"),t(),i(500,"td",26)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),i(504,"p"),e(505,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no "),i(506,"code"),e(507,"accordion"),t(),e(508,"."),t(),i(509,"pre")(510,"code",31),e(511,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(512,"pre")(513,"code",32),e(514,`keysLabel: Array<ThfLookupDataKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(515,"pre")(516,"code"),e(517,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(518,"tr",19)(519,"td",20)(520,"div",21)(521,"span",22),e(522,"t-label"),o(523,"br"),t()()(),i(524,"td",23)(525,"code",34),e(526,"string"),t()(),i(527,"td",25),e(528,"-"),t(),i(529,"td",26)(530,"em")(531,"strong"),e(532,"(opcional)"),t()(),i(533,"p"),e(534,"Label do campo de busca."),t()()(),i(535,"tr",19)(536,"td",20)(537,"div",21)(538,"span",22),e(539,"t-literals"),o(540,"br"),t()()(),i(541,"td",23)(542,"code",43),e(543,"ThfLookupDataLiterals"),t()(),i(544,"td",25),e(545,"-"),t(),i(546,"td",26)(547,"em")(548,"strong"),e(549,"(opcional)"),t()(),i(550,"p"),e(551,"Permite definir literais personalizados para o componente, conforme a interface "),i(552,"strong"),e(553,"ThfLookupDataLiterals"),t(),e(554,"."),t(),i(555,"pre")(556,"code",31),e(557,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(558,"pre")(559,"code",32),e(560,"customLiterals: ThfLookupDataLiterals = { noData: 'Nenhum dado encontrado' };"),t()()()(),i(561,"tr",19)(562,"td",20)(563,"div",21)(564,"span",22),e(565,"t-multiple"),o(566,"br"),t()()(),i(567,"td",23)(568,"code",24),e(569,"boolean"),t()(),i(570,"td",25)(571,"p")(572,"code"),e(573,"false"),t()()(),i(574,"td",26)(575,"em")(576,"strong"),e(577,"(opcional)"),t()(),i(578,"p"),e(579,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(580,"blockquote")(581,"p"),e(582,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(583,"code"),e(584,"[ 12345, 67890 ]"),t()()()()(),i(585,"tr",19)(586,"td",20)(587,"div",21)(588,"span",22),e(589,"t-no-autocomplete"),o(590,"br"),t()()(),i(591,"td",23)(592,"code",24),e(593,"boolean"),t()(),i(594,"td",25)(595,"p")(596,"code"),e(597,"false"),t()()(),i(598,"td",26)(599,"em")(600,"strong"),e(601,"(opcional)"),t()(),i(602,"p"),e(603,"Desabilita o "),i(604,"code"),e(605,"autocomplete"),t(),e(606," (propriedade nativa) do campo."),t()()(),i(607,"tr",19)(608,"td",20)(609,"div",27)(610,"span",28),e(611," (t-error)"),o(612,"br"),t()()(),i(613,"td",23)(614,"code",29),e(615,"EventEmitter"),t()(),i(616,"td",25),e(617,"-"),t(),i(618,"td",26)(619,"em")(620,"strong"),e(621,"(opcional)"),t()(),i(622,"p"),e(623,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(624,"tr",19)(625,"td",20)(626,"div",21)(627,"span",22),e(628,"t-optional"),o(629,"br"),t()()(),i(630,"td",23)(631,"code",24),e(632,"boolean"),t()(),i(633,"td",25)(634,"p")(635,"code"),e(636,"false"),t()()(),i(637,"td",26)(638,"em")(639,"strong"),e(640,"(opcional)"),t()(),i(641,"p"),e(642,"Exibe um indicador opcional do componente no campo de busca."),t(),i(643,"blockquote")(644,"p"),e(645,"Necess\xE1rio que "),i(646,"code"),e(647,"t-label"),t(),e(648," esteja definido e "),i(649,"code"),e(650,"t-required"),t(),e(651," desabilitado"),t()()()(),i(652,"tr",19)(653,"td",20)(654,"div",21)(655,"span",22),e(656," t-helper"),o(657,"br"),t()()(),i(658,"td",23)(659,"code",34),e(660,"string "),t(),i(661,"code",44),e(662," PoHelperOptions"),t()(),i(663,"td",25),e(664,"-"),t(),i(665,"td",26)(666,"em")(667,"strong"),e(668,"(opcional)"),t()(),i(669,"p"),e(670,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t()()(),i(671,"tr",19)(672,"td",20)(673,"div",21)(674,"span",22),e(675,"t-required"),o(676,"br"),t()()(),i(677,"td",23)(678,"code",24),e(679,"boolean"),t()(),i(680,"td",25)(681,"p")(682,"code"),e(683,"false"),t()()(),i(684,"td",26)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),i(688,"p"),e(689,"Define a sele\xE7\xE3o como obrigat\xF3ria. Caso t-disabled esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(690,"tr",19)(691,"td",20)(692,"div",27)(693,"span",28),e(694," (t-selected)"),o(695,"br"),t()()(),i(696,"td",23)(697,"code",29),e(698,"EventEmitter"),t()(),i(699,"td",25),e(700,"-"),t(),i(701,"td",26)(702,"em")(703,"strong"),e(704,"(opcional)"),t()(),i(705,"p"),e(706,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(707,"strong"),e(708,"t-field-value"),t(),e(709,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(710,"tr",19)(711,"td",20)(712,"div",21)(713,"span",22),e(714,"t-show-required"),o(715,"br"),t()()(),i(716,"td",23)(717,"code",24),e(718,"boolean"),t()(),i(719,"td",25)(720,"p")(721,"code"),e(722,"false"),t()()(),i(723,"td",26)(724,"em")(725,"strong"),e(726,"(opcional)"),t()(),i(727,"p"),e(728,"Exibe um indicador de obrigatoriedade no campo de busca."),t(),i(729,"blockquote")(730,"p"),e(731,"Necess\xE1rio que "),i(732,"code"),e(733,"t-required"),t(),e(734," esteja habilitado e "),i(735,"code"),e(736,"t-label"),t(),e(737," definido."),t()()()(),i(738,"tr",19)(739,"td",20)(740,"div",21)(741,"span",22),e(742," t-size"),o(743,"br"),t()()(),i(744,"td",23)(745,"code",34),e(746,"string"),t()(),i(747,"td",25)(748,"p")(749,"code"),e(750,"medium"),t()()(),i(751,"td",26)(752,"em")(753,"strong"),e(754,"(opcional)"),t()(),i(755,"p"),e(756,"Define o tamanho do componente:"),t(),i(757,"ul")(758,"li")(759,"code"),e(760,"small"),t()(),i(761,"li")(762,"code"),e(763,"medium"),t()()(),i(764,"blockquote")(765,"p"),e(766,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(767,"code"),e(768,"medium"),t(),e(769,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(770,"a",45),e(771,"po-theme"),t(),e(772,"."),t()()()()()(),i(773,"po-accordion-item",46)(774,"table",47)(775,"tr",19)(776,"th",48)(777,"div",21)(778,"h4")(779,"span",22),e(780," showAdditionalHelp "),t()()()()(),i(781,"tr",26)(782,"td",26)(783,"p"),e(784,"M\xE9todo que exibe "),i(785,"code"),e(786,"t-helper"),t(),e(787," ou executa a a\xE7\xE3o definida em "),i(788,"code"),e(789,"t-helper{eventOnClick}"),t(),e(790,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(791,"code"),e(792,"t-keydown"),t(),e(793,"."),t(),i(794,"pre")(795,"code"),e(796,`<thf-lookup-data
 #lookupData
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup-data>`),t()(),i(797,"pre")(798,"code"),e(799,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupDataComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}`),t()()()()(),o(800,"br"),t()()(),w(801,2),t(),i(802,"po-tab",49),w(803,3),i(804,"po-container",5)(805,"po-accordion",6)(806,"po-accordion-item",50)(807,"h4",9)(808,"code"),e(809,"ThfLookupDataColumn"),t()(),i(810,"div",10)(811,"p"),e(812,"Interface para configura\xE7\xE3o das colunas ("),i(813,"strong"),e(814,"t-columns"),t(),e(815,"). "),t()(),i(816,"h4",15),e(817,"Propriedades"),t(),i(818,"table",16)(819,"tr",17)(820,"th",18),e(821,"Nome"),t(),i(822,"th",18),e(823,"Tipo"),t(),i(824,"th",18),e(825,"Descri\xE7\xE3o"),t()(),i(826,"tr",19)(827,"td",20)(828,"div",21)(829,"span",22),e(830," boolean"),o(831,"br"),t()()(),i(832,"td",23)(833,"code",51),e(834,"PoTableBoolean"),t()(),i(835,"td",26)(836,"em")(837,"strong"),e(838,"(opcional)"),t()(),i(839,"p"),e(840,"Define um objeto do tipo "),i(841,"code"),e(842,"PoTableBoolean"),t(),e(843," para as colunas do tipo "),i(844,"em"),e(845,"boolean"),t(),e(846,". Por exemplo:"),t(),i(847,"pre")(848,"code"),e(849,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(850,"blockquote")(851,"p"),e(852,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(853,"em"),e(854,"boolean"),t(),e(855,`,
esta exibir\xE1 por padr\xE3o `),i(856,"code"),e(857,"Sim"),t(),e(858," e "),i(859,"code"),e(860,"N\xE3o"),t(),e(861," de acordo com os valores "),i(862,"em"),e(863,"booleanos"),t(),e(864,"."),t()()()(),i(865,"tr",19)(866,"td",20)(867,"div",21)(868,"span",22),e(869," booleanFalse"),o(870,"br"),t()()(),i(871,"td",23)(872,"code",34),e(873,"string"),t()(),i(874,"td",26)(875,"em")(876,"strong"),e(877,"(opcional)"),t()(),i(878,"p"),e(879,"Texto exibido quando o valor da coluna for "),i(880,"em"),e(881,"false"),t(),e(882,"."),t()()(),i(883,"tr",19)(884,"td",20)(885,"div",21)(886,"span",22),e(887," booleanTrue"),o(888,"br"),t()()(),i(889,"td",23)(890,"code",34),e(891,"string"),t()(),i(892,"td",26)(893,"em")(894,"strong"),e(895,"(opcional)"),t()(),i(896,"p"),e(897,"Texto exibido quando o valor da coluna for "),i(898,"em"),e(899,"true"),t(),e(900,"."),t()()(),i(901,"tr",19)(902,"td",20)(903,"div",21)(904,"span",22),e(905," disabled"),o(906,"br"),t()()(),i(907,"td",23)(908,"code",52),e(909,"Function"),t()(),i(910,"td",26)(911,"em")(912,"strong"),e(913,"(opcional)"),t()(),i(914,"p"),e(915,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(916,"em"),e(917,"link"),t(),e(918," e sua a\xE7\xE3o."),t(),i(919,"blockquote")(920,"p"),e(921,"Propriedade dispon\xEDvel nas colunas do tipo "),i(922,"code"),e(923,"link"),t(),e(924,"."),t()()()(),i(925,"tr",19)(926,"td",20)(927,"div",21)(928,"span",22),e(929," format"),o(930,"br"),t()()(),i(931,"td",23)(932,"code",34),e(933,"string"),t()(),i(934,"td",26)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),i(938,"p"),e(939,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(940,"ul")(941,"li"),e(942,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(943,"li"),e(944,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(945,"tr",19)(946,"td",20)(947,"div",21)(948,"span",22),e(949," label"),o(950,"br"),t()()(),i(951,"td",23)(952,"code",34),e(953,"string"),t()(),i(954,"td",26)(955,"em")(956,"strong"),e(957,"(opcional)"),t()(),i(958,"p"),e(959,"Texto para t\xEDtulo da coluna."),t(),i(960,"p"),e(961,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(962,"em"),e(963,"label"),t(),e(964," o valor da propriedade "),i(965,"em"),e(966,"property"),t(),e(967," com a primeira letra em mai\xFAsculo."),t()()(),i(968,"tr",19)(969,"td",20)(970,"div",21)(971,"span",22),e(972," labels"),o(973,"br"),t()()(),i(974,"td",23)(975,"code",53),e(976,"Array<PoTableColumnLabel>"),t()(),i(977,"td",26)(978,"em")(979,"strong"),e(980,"(opcional)"),t()(),i(981,"p"),e(982,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(983,"code"),e(984,"PoTableColumnLabel"),t(),e(985," na qual devem ser definidas os labels. Por exemplo:"),t(),i(986,"pre")(987,"code"),e(988,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(989,"tr",19)(990,"td",20)(991,"div",21)(992,"span",22),e(993," locale"),o(994,"br"),t()()(),i(995,"td",23)(996,"code",34),e(997,"string"),t()(),i(998,"td",26)(999,"em")(1e3,"strong"),e(1001,"(opcional)"),t()(),i(1002,"p"),e(1003,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1004,"a",54)(1005,"code"),e(1006,"I18n"),t()()(),i(1007,"p"),e(1008,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1009,"pre")(1010,"code"),e(1011,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(1012,"blockquote")(1013,"p"),e(1014,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1015,"p"),e(1016,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1017,"p"),e(1018,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1019,"a",54)(1020,"code"),e(1021,"I18n"),t()()()(),i(1022,"p"),e(1023,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1024,"pre")(1025,"code"),e(1026,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(1027,"blockquote")(1028,"p"),e(1029,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1030,"code"),e(1031,"number"),t(),e(1032," e "),i(1033,"code"),e(1034,"currency"),t(),e(1035,"."),t()()()(),i(1036,"tr",19)(1037,"td",20)(1038,"div",21)(1039,"span",22),e(1040," property"),o(1041,"br"),t()()(),i(1042,"td",23)(1043,"code",34),e(1044,"string"),t()(),i(1045,"td",26)(1046,"em")(1047,"strong"),e(1048,"(opcional)"),t()(),i(1049,"p"),e(1050,"Nome identificador da coluna."),t()()(),i(1051,"tr",19)(1052,"td",20)(1053,"div",21)(1054,"span",22),e(1055," type"),o(1056,"br"),t()()(),i(1057,"td",23)(1058,"code",34),e(1059,"string"),t()(),i(1060,"td",26)(1061,"em")(1062,"strong"),e(1063,"(opcional)"),t()(),i(1064,"p"),e(1065,"Tipo da coluna:"),t(),i(1066,"ul")(1067,"li"),e(1068,"string (padr\xE3o): textos"),t(),i(1069,"li"),e(1070,"number: valores num\xE9ricos"),t(),i(1071,"li"),e(1072,"date: data"),t(),i(1073,"li"),e(1074,"currency: valores monet\xE1rios"),t(),i(1075,"li"),e(1076,"dateTime: data e hora"),t()()()(),i(1077,"tr",19)(1078,"td",20)(1079,"div",21)(1080,"span",22),e(1081," visible"),o(1082,"br"),t()()(),i(1083,"td",23)(1084,"code",24),e(1085,"boolean"),t()(),i(1086,"td",26)(1087,"em")(1088,"strong"),e(1089,"(opcional)"),t()(),i(1090,"p"),e(1091,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1092,"strong"),e(1093,"gerenciador de colunas"),t(),e(1094,"."),t(),i(1095,"blockquote")(1096,"p"),e(1097,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1098,"code"),e(1099,"p-max-columns"),t(),e(1100,"."),t()()()(),i(1101,"tr",19)(1102,"td",20)(1103,"div",21)(1104,"span",22),e(1105," width"),o(1106,"br"),t()()(),i(1107,"td",23)(1108,"code",34),e(1109,"string"),t()(),i(1110,"td",26)(1111,"em")(1112,"strong"),e(1113,"(opcional)"),t()(),i(1114,"p"),e(1115,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1116,"po-accordion-item",55)(1117,"h4",9)(1118,"code"),e(1119,"ThfLookupDataFilterSearchSelect"),t()(),i(1120,"div",10)(1121,"p"),e(1122,"Interface que define as colunas para busca ("),i(1123,"strong"),e(1124,"t-filter-search-select"),t(),e(1125,") "),t()(),i(1126,"h4",15),e(1127,"Propriedades"),t(),i(1128,"table",16)(1129,"tr",17)(1130,"th",18),e(1131,"Nome"),t(),i(1132,"th",18),e(1133,"Tipo"),t(),i(1134,"th",18),e(1135,"Descri\xE7\xE3o"),t()(),i(1136,"tr",19)(1137,"td",20)(1138,"div",21)(1139,"span",22),e(1140," label"),o(1141,"br"),t()()(),i(1142,"td",23)(1143,"code",34),e(1144,"string"),t()(),i(1145,"td",26)(1146,"p"),e(1147,"R\xF3tulo da coluna"),t()()(),i(1148,"tr",19)(1149,"td",20)(1150,"div",21)(1151,"span",22),e(1152," value"),o(1153,"br"),t()()(),i(1154,"td",23)(1155,"code",34),e(1156,"string"),t()(),i(1157,"td",26)(1158,"p"),e(1159,"Coluna"),t()()()()(),i(1160,"po-accordion-item",56)(1161,"h4",9)(1162,"code"),e(1163,"ThfLookupDataFilter"),t()(),i(1164,"div",10)(1165,"p"),e(1166,"Interface para definir o tipo de busca via servi\xE7o. "),t()(),i(1167,"table",47)(1168,"tr",19)(1169,"th",48)(1170,"div",21)(1171,"h4")(1172,"span",22),e(1173," fetchItems "),t()()()()(),i(1174,"tr",26)(1175,"td",26)(1176,"p"),e(1177,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1178,"em"),e(1179,"Observable"),t(),e(1180," com a resposta da API no formato { items: [] }."),t()()()(),i(1181,"h5")(1182,"b"),e(1183,"Par\xE2metros"),t()(),i(1184,"table",16)(1185,"tr",17)(1186,"th",18),e(1187,"Nome"),t(),i(1188,"th",18),e(1189,"Tipo"),t(),i(1190,"th",18),e(1191,"Descri\xE7\xE3o"),t()(),i(1192,"tr",19)(1193,"td",20),e(1194," query"),t(),i(1195,"td",23)(1196,"code",57),e(1197," string "),t()(),i(1198,"td",26)(1199,"p"),e(1200,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1201,"tr",19)(1202,"td",20),e(1203," filterParams"),t(),i(1204,"td",23)(1205,"code",57),e(1206," any "),t()(),i(1207,"td",26)(1208,"p"),e(1209,"Valor informado atrav\xE9s da propriedade "),i(1210,"strong"),e(1211,"t-filter-params"),t(),e(1212,"."),t()()()(),o(1213,"br"),i(1214,"table",47)(1215,"tr",19)(1216,"th",48)(1217,"div",21)(1218,"h4")(1219,"span",22),e(1220," getFilteredItems "),t()()()()(),i(1221,"tr",26)(1222,"td",26)(1223,"p"),e(1224,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1225,"em"),e(1226,"Observable"),t(),e(1227," com a resposta da API no formato da interface "),i(1228,"strong"),e(1229,"ThfLookupResponseApi"),t(),e(1230,"."),t()()()(),i(1231,"h5")(1232,"b"),e(1233,"Par\xE2metros"),t()(),i(1234,"table",16)(1235,"tr",17)(1236,"th",18),e(1237,"Nome"),t(),i(1238,"th",18),e(1239,"Tipo"),t(),i(1240,"th",18),e(1241,"Descri\xE7\xE3o"),t()(),i(1242,"tr",19)(1243,"td",20),e(1244," params"),t(),i(1245,"td",23)(1246,"code",57),e(1247," ThfLookupFilteredItemsParams "),t()(),i(1248,"td",26)(1249,"p"),e(1250,"Objeto enviado por par\xE2metro que implementa a interface "),i(1251,"strong"),e(1252,"ThfLookupFilteredItemsParams"),t(),e(1253,"."),t()()()(),o(1254,"br"),i(1255,"table",47)(1256,"tr",19)(1257,"th",48)(1258,"div",21)(1259,"h4")(1260,"span",22),e(1261," getObjectByValue "),t()()()()(),i(1262,"tr",26)(1263,"td",26)(1264,"p"),e(1265,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1266,"p"),e(1267,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1268,"code"),e(1269,"value"),t(),e(1270,` ser\xE1 enviado como uma lista de valores
e o `),i(1271,"em"),e(1272,"Observable"),t(),e(1273," deve retornar uma lista de objetos."),t()()()(),i(1274,"h5")(1275,"b"),e(1276,"Par\xE2metros"),t()(),i(1277,"table",16)(1278,"tr",17)(1279,"th",18),e(1280,"Nome"),t(),i(1281,"th",18),e(1282,"Tipo"),t(),i(1283,"th",18),e(1284,"Descri\xE7\xE3o"),t()(),i(1285,"tr",19)(1286,"td",20),e(1287," value"),t(),i(1288,"td",23)(1289,"code",34),e(1290," string "),t(),i(1291,"code",33),e(1292," Array<any> "),t()(),i(1293,"td",26)(1294,"p"),e(1295,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1296,"tr",19)(1297,"td",20),e(1298," filterParams"),t(),i(1299,"td",23)(1300,"code",57),e(1301," any "),t()(),i(1302,"td",26)(1303,"p"),e(1304,"Valor informado atrav\xE9s da propriedade "),i(1305,"strong"),e(1306,"t-filter-params"),t(),e(1307,"."),t()()()(),o(1308,"br"),t(),i(1309,"po-accordion-item",58)(1310,"h4",9)(1311,"code"),e(1312,"ThfLookupDataFilteredItemsParams"),t()(),i(1313,"div",10)(1314,"p"),e(1315,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1316,"strong"),e(1317,"getFilteredItems"),t(),e(1318,". "),t()(),i(1319,"h4",15),e(1320,"Propriedades"),t(),i(1321,"table",16)(1322,"tr",17)(1323,"th",18),e(1324,"Nome"),t(),i(1325,"th",18),e(1326,"Tipo"),t(),i(1327,"th",18),e(1328,"Descri\xE7\xE3o"),t()(),i(1329,"tr",19)(1330,"td",20)(1331,"div",21)(1332,"span",22),e(1333," filter"),o(1334,"br"),t()()(),i(1335,"td",23)(1336,"code",59),e(1337,`{ [key: string]: any;
}`),t()(),i(1338,"td",26)(1339,"em")(1340,"strong"),e(1341,"(opcional)"),t()(),i(1342,"p"),e(1343,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1344,"tr",19)(1345,"td",20)(1346,"div",21)(1347,"span",22),e(1348," filterParams"),o(1349,"br"),t()()(),i(1350,"td",23)(1351,"code",35),e(1352,"any"),t()(),i(1353,"td",26)(1354,"em")(1355,"strong"),e(1356,"(opcional)"),t()(),i(1357,"p"),e(1358,"Valor informado atrav\xE9s da propriedade "),i(1359,"code"),e(1360,"t-filter-params"),t(),e(1361,"."),t()()(),i(1362,"tr",19)(1363,"td",20)(1364,"div",21)(1365,"span",22),e(1366," order"),o(1367,"br"),t()()(),i(1368,"td",23)(1369,"code",34),e(1370,"string"),t()(),i(1371,"td",26)(1372,"em")(1373,"strong"),e(1374,"(opcional)"),t()(),i(1375,"p"),e(1376,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1377,"ul")(1378,"li"),e(1379,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1380,"code"),e(1381,"-<colunaOrdenada>"),t(),e(1382,", por exemplo "),i(1383,"code"),e(1384,"-name"),t(),e(1385,"."),t(),i(1386,"li"),e(1387,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1388,"code"),e(1389,"<colunaOrdenada>"),t(),e(1390,", por exemplo "),i(1391,"code"),e(1392,"name"),t(),e(1393,"."),t()()()(),i(1394,"tr",19)(1395,"td",20)(1396,"div",21)(1397,"span",22),e(1398," page"),o(1399,"br"),t()()(),i(1400,"td",23)(1401,"code",41),e(1402,"number"),t()(),i(1403,"td",26)(1404,"em")(1405,"strong"),e(1406,"(opcional)"),t()(),i(1407,"p"),e(1408,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1409,"tr",19)(1410,"td",20)(1411,"div",21)(1412,"span",22),e(1413," pageSize"),o(1414,"br"),t()()(),i(1415,"td",23)(1416,"code",41),e(1417,"number"),t()(),i(1418,"td",26)(1419,"em")(1420,"strong"),e(1421,"(opcional)"),t()(),i(1422,"p"),e(1423,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1424,"po-accordion-item",60)(1425,"h4",9)(1426,"code"),e(1427,"ThfLookupDataGridProperties"),t()(),i(1428,"div",10)(1429,"p"),e(1430,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup. "),t()(),i(1431,"h4",15),e(1432,"Propriedades"),t(),i(1433,"table",16)(1434,"tr",17)(1435,"th",18),e(1436,"Nome"),t(),i(1437,"th",18),e(1438,"Tipo"),t(),i(1439,"th",18),e(1440,"Descri\xE7\xE3o"),t()(),i(1441,"tr",19)(1442,"td",20)(1443,"div",21)(1444,"span",22),e(1445," autoSize"),o(1446,"br"),t()()(),i(1447,"td",23)(1448,"code",24),e(1449,"boolean"),t()(),i(1450,"td",26)(1451,"em")(1452,"strong"),e(1453,"(opcional)"),t()(),i(1454,"p"),e(1455,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1456,"strong"),e(1457,"resizable"),t(),e(1458," esteja habilitada."),t(),i(1459,"blockquote")(1460,"p"),e(1461,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1462,"tr",19)(1463,"td",20)(1464,"div",21)(1465,"span",22),e(1466," autoSizeOnScroll"),o(1467,"br"),t()()(),i(1468,"td",23)(1469,"code",24),e(1470,"boolean"),t()(),i(1471,"td",26)(1472,"em")(1473,"strong"),e(1474,"(opcional)"),t()(),i(1475,"p"),e(1476,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1477,"p"),e(1478,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1479,"p"),e(1480,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1481,"code"),e(1482,"t-page-size-virtual"),t(),e(1483," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1484,"blockquote")(1485,"p")(1486,"strong"),e(1487,"Pr\xE9-requisitos"),t(),e(1488,": Requer que as propriedades "),i(1489,"code"),e(1490,"autoSize"),t(),e(1491,", "),i(1492,"code"),e(1493,"resizable"),t(),e(1494,`
e `),i(1495,"code"),e(1496,"virtualScroll"),t(),e(1497," estejam habilitadas."),t()(),i(1498,"blockquote")(1499,"p")(1500,"strong"),e(1501,"Incompatibilidade"),t(),e(1502,": N\xE3o funciona com "),i(1503,"code"),e(1504,"t-grid-row-actions"),t(),e(1505," habilitado;"),t()(),i(1506,"p")(1507,"strong"),e(1508,"Exemplo de uso:"),t()(),i(1509,"pre")(1510,"code",31),e(1511,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1512,"tr",19)(1513,"td",20)(1514,"div",21)(1515,"span",22),e(1516," draggable"),o(1517,"br"),t()()(),i(1518,"td",23)(1519,"code",24),e(1520,"boolean"),t()(),i(1521,"td",26)(1522,"em")(1523,"strong"),e(1524,"(opcional)"),t()(),i(1525,"p"),e(1526,"Habilita o Drag and Drop nas colunas."),t()()(),i(1527,"tr",19)(1528,"td",20)(1529,"div",21)(1530,"span",22),e(1531," group"),o(1532,"br"),t()()(),i(1533,"td",23)(1534,"code",61),e(1535,"Array<string>"),t()(),i(1536,"td",26)(1537,"em")(1538,"strong"),e(1539,"(opcional)"),t()(),i(1540,"p"),e(1541,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1542,"strong"),e(1543,"groupable"),t(),e(1544," esteja habilitada."),t()()(),i(1545,"tr",19)(1546,"td",20)(1547,"div",21)(1548,"span",22),e(1549," groupable"),o(1550,"br"),t()()(),i(1551,"td",23)(1552,"code",24),e(1553,"boolean "),t(),i(1554,"code",62),e(1555," GroupableSettings"),t()(),i(1556,"td",26)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),i(1560,"p"),e(1561,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1562,"tr",19)(1563,"td",20)(1564,"div",21)(1565,"span",22),e(1566," hideSelectAll"),o(1567,"br"),t()()(),i(1568,"td",23)(1569,"code",24),e(1570,"boolean"),t()(),i(1571,"td",26)(1572,"em")(1573,"strong"),e(1574,"(opcional)"),t()(),i(1575,"p"),e(1576,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1577,"tr",19)(1578,"td",20)(1579,"div",21)(1580,"span",22),e(1581," resizable"),o(1582,"br"),t()()(),i(1583,"td",23)(1584,"code",24),e(1585,"boolean"),t()(),i(1586,"td",26)(1587,"em")(1588,"strong"),e(1589,"(opcional)"),t()(),i(1590,"p"),e(1591,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1592,"tr",19)(1593,"td",20)(1594,"div",21)(1595,"span",22),e(1596," selectableEntireLine"),o(1597,"br"),t()()(),i(1598,"td",23)(1599,"code",24),e(1600,"boolean"),t()(),i(1601,"td",26)(1602,"em")(1603,"strong"),e(1604,"(opcional)"),t()(),i(1605,"p"),e(1606,"Permite selecionar o item ao clicar na linha."),t()()(),i(1607,"tr",19)(1608,"td",20)(1609,"div",21)(1610,"span",22),e(1611," showDraggableIcon"),o(1612,"br"),t()()(),i(1613,"td",23)(1614,"code",24),e(1615,"boolean"),t()(),i(1616,"td",26)(1617,"em")(1618,"strong"),e(1619,"(opcional)"),t()(),i(1620,"p"),e(1621,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1622,"tr",19)(1623,"td",20)(1624,"div",21)(1625,"span",22),e(1626," showMoreDisabled"),o(1627,"br"),t()()(),i(1628,"td",23)(1629,"code",24),e(1630,"boolean"),t()(),i(1631,"td",26)(1632,"em")(1633,"strong"),e(1634,"(opcional)"),t()(),i(1635,"p"),e(1636,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1637,"tr",19)(1638,"td",20)(1639,"div",21)(1640,"span",22),e(1641," showMoreVisible"),o(1642,"br"),t()()(),i(1643,"td",23)(1644,"code",24),e(1645,"boolean"),t()(),i(1646,"td",26)(1647,"em")(1648,"strong"),e(1649,"(opcional)"),t()(),i(1650,"p"),e(1651,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1652,"strong"),e(1653,"pageable"),t(),e(1654," esteja habilitada."),t(),i(1655,"blockquote")(1656,"p"),e(1657,"Caso seja utilizado em conjunto com "),i(1658,"strong"),e(1659,"showMoreDisabled"),t(),e(1660,", a propriedade "),i(1661,"strong"),e(1662,"showMoreVisible"),t(),e(1663," ter\xE1 prioridade."),t()()()(),i(1664,"tr",19)(1665,"td",20)(1666,"div",21)(1667,"span",22),e(1668," sort"),o(1669,"br"),t()()(),i(1670,"td",23)(1671,"code",63),e(1672,"Array<{ field: string; dir: 'asc' "),t(),i(1673,"code",64),e(1674,` 'desc';
}>`),t()(),i(1675,"td",26)(1676,"em")(1677,"strong"),e(1678,"(opcional)"),t()(),i(1679,"p"),e(1680,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1681,"pre")(1682,"code",32),e(1683,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1684,"tr",19)(1685,"td",20)(1686,"div",21)(1687,"span",22),e(1688," sortable"),o(1689,"br"),t()()(),i(1690,"td",23)(1691,"code",24),e(1692,"boolean"),t()(),i(1693,"td",26)(1694,"em")(1695,"strong"),e(1696,"(opcional)"),t()(),i(1697,"p"),e(1698,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1699,"tr",19)(1700,"td",20)(1701,"div",21)(1702,"span",22),e(1703," spacing"),o(1704,"br"),t()()(),i(1705,"td",23)(1706,"code",65),e(1707,"'extraSmall' "),t(),i(1708,"code",66),e(1709," 'small' "),t(),i(1710,"code",67),e(1711," 'medium' "),t(),i(1712,"code",68),e(1713," 'large'"),t()(),i(1714,"td",26)(1715,"em")(1716,"strong"),e(1717,"(opcional)"),t()(),i(1718,"p"),e(1719,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1720,"strong"),e(1721,"ThfColumnSpacing"),t(),e(1722,"."),t()()(),i(1723,"tr",19)(1724,"td",20)(1725,"div",21)(1726,"span",22),e(1727," striped"),o(1728,"br"),t()()(),i(1729,"td",23)(1730,"code",24),e(1731,"boolean"),t()(),i(1732,"td",26)(1733,"em")(1734,"strong"),e(1735,"(opcional)"),t()(),i(1736,"p"),e(1737,"Define o estilo listrado no grid (striped)."),t()()(),i(1738,"tr",19)(1739,"td",20)(1740,"div",21)(1741,"span",22),e(1742," virtualScroll"),o(1743,"br"),t()()(),i(1744,"td",23)(1745,"code",24),e(1746,"boolean"),t()(),i(1747,"td",26)(1748,"em")(1749,"strong"),e(1750,"(opcional)"),t()(),i(1751,"p"),e(1752,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(1753,"po-accordion-item",69)(1754,"h4",9)(1755,"code"),e(1756,"ThfLookupDataKeysLabel"),t()(),i(1757,"div",10)(1758,"p"),e(1759,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1760,"strong"),e(1761,"t-keys-label"),t(),e(1762,"). "),t()(),i(1763,"h4",15),e(1764,"Propriedades"),t(),i(1765,"table",16)(1766,"tr",17)(1767,"th",18),e(1768,"Nome"),t(),i(1769,"th",18),e(1770,"Tipo"),t(),i(1771,"th",18),e(1772,"Descri\xE7\xE3o"),t()(),i(1773,"tr",19)(1774,"td",20)(1775,"div",21)(1776,"span",22),e(1777," label"),o(1778,"br"),t()()(),i(1779,"td",23)(1780,"code",34),e(1781,"string"),t()(),i(1782,"td",26)(1783,"p"),e(1784,"Texto exibido"),t()()(),i(1785,"tr",19)(1786,"td",20)(1787,"div",21)(1788,"span",22),e(1789," value"),o(1790,"br"),t()()(),i(1791,"td",23)(1792,"code",34),e(1793,"string"),t()(),i(1794,"td",26)(1795,"p"),e(1796,"Coluna"),t()()()()(),i(1797,"po-accordion-item",70)(1798,"h4",9)(1799,"code"),e(1800,"ThfLookupDataLiterals"),t()(),i(1801,"div",10)(1802,"p"),e(1803,"Interface para customizar literais ("),i(1804,"strong"),e(1805,"t-literals"),t(),e(1806,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1807,"h4",15),e(1808,"Propriedades"),t(),i(1809,"table",16)(1810,"tr",17)(1811,"th",18),e(1812,"Nome"),t(),i(1813,"th",18),e(1814,"Tipo"),t(),i(1815,"th",18),e(1816,"Descri\xE7\xE3o"),t()(),i(1817,"tr",19)(1818,"td",20)(1819,"div",21)(1820,"span",22),e(1821," loadMoreData"),o(1822,"br"),t()()(),i(1823,"td",23)(1824,"code",34),e(1825,"string"),t()(),i(1826,"td",26)(1827,"em")(1828,"strong"),e(1829,"(opcional)"),t()(),i(1830,"p"),e(1831,"Label do "),i(1832,"code"),e(1833,"button"),t(),e(1834," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1835,"tr",19)(1836,"td",20)(1837,"div",21)(1838,"span",22),e(1839," loadingData"),o(1840,"br"),t()()(),i(1841,"td",23)(1842,"code",34),e(1843,"string"),t()(),i(1844,"td",26)(1845,"em")(1846,"strong"),e(1847,"(opcional)"),t()(),i(1848,"p"),e(1849,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1850,"tr",19)(1851,"td",20)(1852,"div",21)(1853,"span",22),e(1854," multipleItems"),o(1855,"br"),t()()(),i(1856,"td",23)(1857,"code",34),e(1858,"string"),t()(),i(1859,"td",26)(1860,"em")(1861,"strong"),e(1862,"(opcional)"),t()(),i(1863,"p"),e(1864,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1865,"tr",19)(1866,"td",20)(1867,"div",21)(1868,"span",22),e(1869," noColumns"),o(1870,"br"),t()()(),i(1871,"td",23)(1872,"code",34),e(1873,"string"),t()(),i(1874,"td",26)(1875,"em")(1876,"strong"),e(1877,"(opcional)"),t()(),i(1878,"p"),e(1879,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1880,"tr",19)(1881,"td",20)(1882,"div",21)(1883,"span",22),e(1884," noData"),o(1885,"br"),t()()(),i(1886,"td",23)(1887,"code",34),e(1888,"string"),t()(),i(1889,"td",26)(1890,"em")(1891,"strong"),e(1892,"(opcional)"),t()(),i(1893,"p"),e(1894,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(1895,"tr",19)(1896,"td",20)(1897,"div",21)(1898,"span",22),e(1899," oneItem"),o(1900,"br"),t()()(),i(1901,"td",23)(1902,"code",34),e(1903,"string"),t()(),i(1904,"td",26)(1905,"em")(1906,"strong"),e(1907,"(opcional)"),t()(),i(1908,"p"),e(1909,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(1910,"tr",19)(1911,"td",20)(1912,"div",21)(1913,"span",22),e(1914," placeholder"),o(1915,"br"),t()()(),i(1916,"td",23)(1917,"code",34),e(1918,"string"),t()(),i(1919,"td",26)(1920,"em")(1921,"strong"),e(1922,"(opcional)"),t()(),i(1923,"p"),e(1924,"Texto exibido no placeholder do input."),t()()()()(),i(1925,"po-accordion-item",71)(1926,"h4",9)(1927,"code"),e(1928,"ThfLookupDataResponseApi"),t()(),i(1929,"div",10)(1930,"p"),e(1931,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(1932,"blockquote")(1933,"p"),e(1934,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(1935,"h4",15),e(1936,"Propriedades"),t(),i(1937,"table",16)(1938,"tr",17)(1939,"th",18),e(1940,"Nome"),t(),i(1941,"th",18),e(1942,"Tipo"),t(),i(1943,"th",18),e(1944,"Descri\xE7\xE3o"),t()(),i(1945,"tr",19)(1946,"td",20)(1947,"div",21)(1948,"span",22),e(1949," hasNext"),o(1950,"br"),t()()(),i(1951,"td",23)(1952,"code",24),e(1953,"boolean"),t()(),i(1954,"td",26)(1955,"p"),e(1956,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(1957,"tr",19)(1958,"td",20)(1959,"div",21)(1960,"span",22),e(1961," items"),o(1962,"br"),t()()(),i(1963,"td",23)(1964,"code",33),e(1965,"Array<any>"),t()(),i(1966,"td",26)(1967,"p"),e(1968,"Lista de itens retornados."),t()()()()()()(),w(1969,4),t(),i(1970,"po-tab",72)(1971,"po-container",5),w(1972,5),i(1973,"h3",73),e(1974,"Tokens customiz\xE1veis"),t(),i(1975,"p"),e(1976,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(1977,"blockquote")(1978,"p"),e(1979,"Para maiores informa\xE7\xF5es, acesse o guia "),i(1980,"a",74),e(1981,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(1982,"."),t()(),i(1983,"p"),e(1984,"O componente "),i(1985,"strong"),e(1986,"THF-Lookup-Data"),t(),e(1987," \xE9 composto pelos componentes "),i(1988,"strong"),e(1989,"PO-Search"),t(),e(1990," e "),i(1991,"strong"),e(1992,"THF-Grid"),t(),e(1993,"."),t(),i(1994,"p"),e(1995,"Verifique os tokens dispon\xEDveis para customiza\xE7\xE3o em:"),t(),i(1996,"p")(1997,"strong"),e(1998,"- PO-Search:"),t(),e(1999," \xA0"),i(2e3,"a",75),e(2001,"https://po-ui.io/documentation/po-search"),t()(),i(2002,"p")(2003,"strong"),e(2004,"- THF-Grid:"),t(),e(2005," \xA0"),i(2006,"a",76),e(2007,"https://thf.totvs.app/v19/documentation/thf-grid"),t()()(),w(2008,6),t(),i(2009,"po-tab",77),w(2010,7),t()()())},dependencies:[O,J,v,ae,H],encapsulation:2})}}return d})();var Qi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],Bi=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],wt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(V(ee))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter-pane"]],viewQuery:function(r,n){if(r&1&&I(H,5)(O,5),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Bi,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(te(Qi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
 <thf-splitter-pane [(t-size)]="50%">
   Conte\xFAdo do painel
 </thf-splitter-pane>
 ...
</thf-splitter>`),t()()(),i(38,"div",12)(39,"h4",13),e(40,"Seletor"),t(),i(41,"pre",14),e(42,`<thf-splitter-pane
  t-scrollable="boolean, any"
  t-size="string"
  (t-size-change)="EventEmitter" >
</thf-splitter-pane>
`),t()()(),i(43,"po-accordion-item",15)(44,"h4",16),e(45,"Propriedades"),t(),i(46,"table",17)(47,"tr",18)(48,"th",19),e(49,"Nome"),t(),i(50,"th",19),e(51,"Tipo"),t(),i(52,"th",19),e(53,"Padr\xE3o"),t(),i(54,"th",19),e(55,"Descri\xE7\xE3o"),t()(),i(56,"tr",20)(57,"td",21)(58,"div",22)(59,"span",23),e(60," t-scrollable"),o(61,"br"),t()()(),i(62,"td",24)(63,"code",25),e(64,"boolean, any"),t()(),i(65,"td",26)(66,"p"),e(67,"false"),t()(),i(68,"td",27)(69,"p"),e(70,`Habilita a rolagem horizontal/vertical do pane quando o conte\xFAdo exceder o valor de tamanho definido. A rolagem \xE9 aplicada
somente se o tamanho m\xEDnimo for atingido durante o redimensionamento.`),t()()(),i(71,"tr",20)(72,"td",21)(73,"div",22)(74,"span",23),e(75," t-size"),o(76,"br"),t()()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"p"),e(84,"Define o tamanho inicial do pane (% ou px), respeitando os limites entre "),i(85,"strong"),e(86,"30% e 70%"),t(),e(87,` do tamanho total
do splitter.`),t(),i(88,"p"),e(89,"Suporta two-way binding com "),i(90,"code"),e(91,"t-size-change"),t(),e(92,"."),t(),i(93,"blockquote")(94,"p"),e(95,"Apenas um pane pode definir "),i(96,"code"),e(97,"t-size"),t(),e(98,`; caso contr\xE1rio, ser\xE1 exibido um erro no console.
Quando o valor definido em `),i(99,"code"),e(100,"px"),t(),e(101,` estiver fora dos limites percentuais, ao realizar o redimensionamento os limites de 30% a 70% ser\xE3o aplicados automaticamente.
O uso de `),i(102,"code"),e(103,"px"),t(),e(104," \xE9 \xFAtil para cen\xE1rios onde o "),i(105,"code"),e(106,"thf-splitter"),t(),e(107," est\xE1 com "),i(108,"code"),e(109,"t-disabled"),t(),e(110," habilitado, pois o tamanho fixo n\xE3o ser\xE1 alterado."),t()(),i(111,"pre")(112,"code",11),e(113,`<!-- One-way -->
<thf-splitter-pane [t-size]="'50%'">

<!-- Two-way -->
<thf-splitter-pane [(t-size)]="variavel">`),t()()()(),i(114,"tr",20)(115,"td",21)(116,"div",29)(117,"span",30),e(118," (t-size-change)"),o(119,"br"),t()()(),i(120,"td",24)(121,"code",31),e(122,"EventEmitter"),t()(),i(123,"td",26),e(124,"-"),t(),i(125,"td",27)(126,"p"),e(127,"Evento emitido quando o tamanho do pane que possui "),i(128,"code"),e(129,"t-size"),t(),e(130," \xE9 modificada. Caso nenhum pane possua "),i(131,"code"),e(132,"t-size"),t(),e(133,`, o
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,'<thf-splitter-pane (t-size-change)="onSizeChange($event)">'),t()()()()()()()(),w(137,2),t(),i(138,"po-tab",32),w(139,3),t()()())},dependencies:[O,J,v,ae,H],encapsulation:2})}}return d})();var Wi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Ui=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Dt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(V(ee))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter"]],viewQuery:function(r,n){if(r&1&&I(H,5)(O,5),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Ui,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],["id","boas-pr\xE1ticas"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(te(Wi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
redimensionamento entre elas. \xC9 ideal para estruturar interfaces com pain\xE9is laterais e conte\xFAdos principais de forma
flex\xEDvel.`),t(),i(22,"p"),e(23,"O redimensionamento \xE9 realizado por meio de um "),i(24,"em"),e(25,"trigger"),t(),e(26,` interativo, que pode ser manipulado com o mouse ou pelo
teclado, utilizando as teclas `),i(27,"code"),e(28,"\u2190"),t(),e(29," e "),i(30,"code"),e(31,"\u2192"),t(),e(32," na orienta\xE7\xE3o "),i(33,"code"),e(34,"horizontal"),t(),e(35,", e "),i(36,"code"),e(37,"\u2191"),t(),e(38," e "),i(39,"code"),e(40,"\u2193"),t(),e(41," na orienta\xE7\xE3o "),i(42,"code"),e(43,"vertical"),t(),e(44,". O "),i(45,"em"),e(46,"trigger"),t(),e(47," recebe foco ao navegar com "),i(48,"code"),e(49,"TAB"),t(),e(50,"."),t(),i(51,"p"),e(52,"Cada "),i(53,"code"),e(54,"pane"),t(),e(55," respeita limites de largura entre "),i(56,"strong"),e(57,"30% e 70%"),t(),e(58,". O "),i(59,"em"),e(60,"trigger"),t(),e(61,` ser\xE1 automaticamente bloqueado ao tentar
ultrapassar esses limites.`),t(),i(62,"h4",11),e(63,"Boas pr\xE1ticas"),t(),i(64,"ul")(65,"li"),e(66,"Evite usar o "),i(67,"code"),e(68,"thf-splitter"),t(),e(69," dentro de um modal ou componentes semelhantes que possam comprometer a usabilidade."),t()(),i(70,"pre")(71,"code",12),e(72,`<thf-splitter>
  <thf-splitter-pane [t-size]="'30%'">
    Conte\xFAdo do Painel Esquerdo
  </thf-splitter-pane>
  <thf-splitter-pane>
    Conte\xFAdo do Painel Direito (ocupa espa\xE7o restante)
  </thf-splitter-pane>
</thf-splitter>`),t()()(),i(73,"div",13)(74,"h4",14),e(75,"Seletor"),t(),i(76,"pre",15),e(77,`<thf-splitter
  t-disabled="boolean, any"
  (t-layout-change)="EventEmitter"
  t-orientation="ThfSplitterOrientation, string" >
</thf-splitter>
`),t()()(),i(78,"po-accordion-item",16)(79,"h4",17),e(80,"Propriedades"),t(),i(81,"table",18)(82,"tr",19)(83,"th",20),e(84,"Nome"),t(),i(85,"th",20),e(86,"Tipo"),t(),i(87,"th",20),e(88,"Padr\xE3o"),t(),i(89,"th",20),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",21)(92,"td",22)(93,"div",23)(94,"span",24),e(95," t-disabled"),o(96,"br"),t()()(),i(97,"td",25)(98,"code",26),e(99,"boolean, any"),t()(),i(100,"td",27)(101,"p"),e(102,"false"),t()(),i(103,"td",28)(104,"p"),e(105,"Desabilita o redimensionamento entre os panes, ocultando a intera\xE7\xE3o via trigger."),t()()(),i(106,"tr",21)(107,"td",22)(108,"div",29)(109,"span",30),e(110," (t-layout-change)"),o(111,"br"),t()()(),i(112,"td",25)(113,"code",31),e(114,"EventEmitter"),t()(),i(115,"td",27),e(116,"-"),t(),i(117,"td",28)(118,"p"),e(119,"Evento emitido sempre que houver altera\xE7\xE3o de layout provocada por redimensionamento. Quando "),i(120,"code"),e(121,"t-disabled"),t(),e(122,` estiver
ativado, este evento n\xE3o ser\xE1 disparado.`),t(),i(123,"pre")(124,"code",12),e(125,'<thf-splitter (t-layout-change)="onLayoutChange($event)">'),t()()()(),i(126,"tr",21)(127,"td",22)(128,"div",23)(129,"span",24),e(130," t-orientation"),o(131,"br"),t()()(),i(132,"td",25)(133,"code",32),e(134,"ThfSplitterOrientation, string"),t()(),i(135,"td",27)(136,"p"),e(137,"'horizontal'"),t()(),i(138,"td",28)(139,"p"),e(140,`Define a orienta\xE7\xE3o dos pain\xE9is do splitter.
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",12),e(149,'<thf-splitter t-orientation="vertical"> ...'),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",33),e(154,"orientation = ThfSplitterOrientation.Vertical;"),t()(),i(155,"pre")(156,"code",12),e(157,'<thf-splitter [t-orientation]="orientation"> ...'),t()()()()()()()(),w(158,2),t(),i(159,"po-tab",34),w(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",35)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",17),e(168,"Propriedades"),t(),i(169,"table",18)(170,"tr",19)(171,"th",20),e(172,"Nome"),t(),i(173,"th",20),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",21)(176,"td",22)(177,"div",23)(178,"span",24),e(179," Horizontal"),o(180,"br"),t()()(),i(181,"td",28)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",21)(188,"td",22)(189,"div",23)(190,"span",24),e(191," Vertical"),o(192,"br"),t()()(),i(193,"td",28)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),w(199,4),t(),i(200,"po-tab",36)(201,"po-container",5),w(202,5),i(203,"h3",37),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",38),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),o(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),o(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),o(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),o(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),o(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),w(323,6),t(),i(324,"po-tab",39),w(325,7),t()()())},dependencies:[O,J,v,ae,H],encapsulation:2})}}return d})();var At=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=xe({type:d})}static{this.\u0275inj=Ee({imports:[_e,Ie]})}}return d})();var Re=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",score:87,onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",score:42,onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",score:95,onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",score:63,onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",score:78,onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",score:12,onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",score:56,onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",score:91,onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",score:34,onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",score:88,onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",score:73,onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",score:27,onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",score:99,onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",score:15,onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",score:67,onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",score:84,onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",score:53,onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",score:39,onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],_t=`export const DATA = ${JSON.stringify(Re,null,2)};`;var kt=`<po-button
    class="po-mb-2 po-mt-1"
    p-label="Limpa filtros por coluna"
    (p-click)="clearFiltersByColumn()"
  ></po-button>
  <thf-grid
  #gridComponent
  [t-actions-filter]="true"
  [t-columns]="columnsTotalizador"
  [t-resizable]="true"
  [t-groupable]="true"
  [t-draggable]="true"
  [t-items]="itemsTotalizador"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-show-densification-configuration]="true"
  [t-action-excel]="true"
  [t-action-pdf]="true"
  [t-aggregates-config]="aggregateConfig"
  [t-aggregates]="aggregatesDescriptor"
  [t-filter-column-properties]="filterColumnProperties"
  [t-show-footer-aggregates]="true"
  [t-height]="450"
/>
`,qt=`import { Component, ViewChild } from '@angular/core';

import {
  ThfAggregateConfig,
  ThfAggregateDescriptor,
  ThfFilterByColumn,
  ThfGridColumn,
  ThfGridComponent,
} from '@totvs/thf-components';

import { DATA } from './data';

@Component({
  selector: 'app-thf-grid-aggregates-doc',
  templateUrl: './thf-grid-aggregates-doc.component.html',
  styleUrl: './thf-grid-aggregates-doc.component.css',
})
export class ThfGridAggregateDocComponent {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnsTotalizador: Array<ThfGridColumn> = [
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
    },
    { property: 'region', label: 'Region', filter: true },
    { property: 'country', label: 'Country' },
    { property: 'destination', label: 'Destination' },
    { property: 'date', label: 'Date', type: 'date', filter: true },
    {
      property: 'onBoardService',
      label: 'On-board Service',
      type: 'boolean',
      filter: true,
    },
    { property: 'class', label: 'Class', type: 'string', filter: true },
    { property: 'score', label: 'Score', type: 'number', filter: true },
    {
      property: 'value',
      type: 'currency',
      label: 'Value',
      format: 'BRL',
      filter: true,
    },
  ];

  filterColumnProperties: Array<ThfFilterByColumn> = [
    {
      property: 'value',
      logic: 'and',
      operator1: 'gt',
      value1: 1500,
    },
  ];

  aggregateConfig: ThfAggregateConfig = {
    disabled: ['status'],
    visible: ['status', 'destination', 'value'],
    aggregateAlign: 'defaultColumn',
  };

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'destination', aggregate: 'count', label: 'Contagem' },
  ];

  itemsTotalizador = DATA;

  clearFiltersByColumn() {
    this.thfGrid.applyFilterByColumnProps([]);
  }
}
`;function Ji(d,C){}function Zi(d,C){d&1&&K(0,Ji,0,0,"ng-template")}function Xi(d,C){if(d&1&&(i(0,"po-accordion-item",1),K(1,Zi,1,0,null,7),t()),d&2){let a=u();m(),s("ngTemplateOutlet",a.dynamicTemplate)}}function Yi(d,C){if(d&1&&o(0,"po-code-editor",5),d&2){let a=u();s("p-readonly",!0)("ngModel",a.htmlCode)("p-theme",a.themeActive===1?"vs-dark":"vs")}}function en(d,C){if(d&1&&o(0,"po-code-editor",6),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.tsCode)}}function tn(d,C){if(d&1&&o(0,"po-code-editor",6),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.serviceCode)}}function nn(d,C){if(d&1&&o(0,"po-code-editor",6),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.othersCode==null?null:a.othersCode.body)}}var T=(()=>{class d{constructor(a){this.sharedService=a,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(a=>{this.themeActive=a.type||0})}static{this.\u0275fac=function(r){return new(r||d)(V(vt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"],[4,"ngTemplateOutlet"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"po-accordion"),L(2,Xi,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),h("ngModelChange",function(E){return f(n.selectedCode,E)||(n.selectedCode=E),E}),t(),L(6,Yi,1,3,"po-code-editor",5),L(7,en,1,3,"po-code-editor",6),L(8,tn,1,3,"po-code-editor",6),L(9,nn,1,3,"po-code-editor",6),t()()()()),r&2&&(s("ngClass",n.marginTopClass),m(2),M(n.properties?2:-1),m(3),s("p-buttons",n.buttons),b("ngModel",n.selectedCode),m(),M(n.selectedCode==="html"?6:-1),m(),M(n.selectedCode==="ts"?7:-1),m(),M(n.selectedCode==="service"?8:-1),m(),M(n.selectedCode==="othersCode"?9:-1))},dependencies:[tt,it,at,Q,U,O,J,ut,mt],encapsulation:2})}}return d})();var on=["gridComponent"],Ft=(()=>{class d{constructor(){this.htmlCode=kt,this.tsCode=qt,this.tsOthersCode={label:"Data",body:_t},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"region",label:"Region",filter:!0},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"date",label:"Date",type:"date",filter:!0},{property:"onBoardService",label:"On-board Service",type:"boolean",filter:!0},{property:"class",label:"Class",type:"string",filter:!0},{property:"score",label:"Score",type:"number",filter:!0},{property:"value",type:"currency",label:"Value",format:"BRL",filter:!0}],this.filterColumnProperties=[{property:"value",logic:"and",operator1:"gt",value1:1500}],this.aggregateConfig={disabled:["status"],visible:["status","destination","value"],aggregateAlign:"defaultColumn"},this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"destination",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=Re}clearFiltersByColumn(){this.thfGrid.applyFilterByColumnProps([])}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-aggregates-doc"]],viewQuery:function(r,n){if(r&1&&I(on,5),r&2){let l;D(l=A())&&(n.thfGrid=l.first)}},standalone:!1,decls:8,vars:20,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["p-label","Limpa filtros por coluna",1,"po-mb-2","po-mt-1",3,"p-click"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-action-excel","t-action-pdf","t-aggregates-config","t-aggregates","t-filter-column-properties","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",1),e(2,"Totalizador e Filtro por Colunas"),t(),o(3,"po-divider",2),i(4,"po-button",3),g("p-click",function(){return p(l),c(n.clearFiltersByColumn())}),t(),o(5,"thf-grid",4,0)(7,"app-code-accordion-doc",5),t()}r&2&&(m(5),s("t-actions-filter",!0)("t-columns",n.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",n.itemsTotalizador)("t-selectable",!0)("t-selectable-entire-line",!1)("t-show-densification-configuration",!0)("t-action-excel",!0)("t-action-pdf",!0)("t-aggregates-config",n.aggregateConfig)("t-aggregates",n.aggregatesDescriptor)("t-filter-column-properties",n.filterColumnProperties)("t-show-footer-aggregates",!0)("t-height",450),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("othersCode",n.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[W,v,P,R,T],encapsulation:2})}}return d})();var It=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="column"
    [t-height]="400"
  />

`,Lt=`import { Component } from '@angular/core';
import { ThfGridColumn } from '@totvs/thf-components';

@Component({
    selector: 'app-thf-grid-basic-doc',
    templateUrl: './thf-grid-basic-doc.component.html',
    styleUrl: './thf-grid-basic-doc.component.css',
    standalone: false
})
export class ThfGridBasicDocComponent {
column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'value', label: 'Code' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];
}

`;var Mt=(()=>{class d{constructor(){this.htmlCode=It,this.tsCode=Lt,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-columns",n.column)("t-height",400),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,R,T],encapsulation:2})}}return d})();var Le=(()=>{class d{constructor(a){this.httpClient=a}deleteItem(a,r,n){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+n)}static{this.\u0275fac=function(r){return new(r||d)(Qe(ot))}}static{this.\u0275prov=Ne({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})();var Rt=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-action-delete]="true"
    [t-columns]="column"
    [t-height]="400"
    [t-literals]="literals"
    [t-selectable]="true"
    [t-selectable-entire-line]="false"
    [t-service-delete-api]="serviceDeleteApi"
    (t-selected)="selectedItem($event)"
  />

`,Vt=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';
import { ThfDeleteService } from './thf-grid-delete-service-doc.service';

@Component({
    selector: 'app-thf-grid-delete-service-doc',
    templateUrl: './thf-grid-delete-service-doc.component.html',
    styleUrl: './thf-grid-delete-service-doc.component.css',
    providers: [ThfDeleteService],
    standalone: false
})
export class ThfGridDeleteServiceDocComponent {
literals!: ThfGridLiterals;
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'name', label: 'Nome' },
    { property: 'cityName', label: 'Cidade' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];

  constructor(protected serviceDeleteApi: ThfDeleteService) { }

  selectedItem(event: any) {
    this.literals = {
      bodyDelete: 'Tem certeza que deseja excluir ' + event.name + '?',
    };
  }
}

`,zt=`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThfGridDeleteService } from '@totvs/thf-components';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThfDeleteService implements ThfGridDeleteService {
  constructor(private httpClient: HttpClient) {}

  deleteItem(
    selectedRow: any,
    filterParams?: any,
    keyValue?: any
  ): Observable<any> {
    const urlDelete = 'https://po-sample-api.onrender.com/v1/people';
    return this.httpClient.delete(urlDelete + '/' + keyValue);
  }
}

`;var jt=(()=>{class d{constructor(a){this.serviceDeleteApi=a,this.htmlCode=Rt,this.tsCode=Vt,this.serviceCode=zt,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(a){this.literals={bodyDelete:"Tem certeza que deseja excluir "+a.name+"?"}}static{this.\u0275fac=function(r){return new(r||d)(V(Le))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[Je([Le])],decls:6,vars:11,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-selectable-entire-line","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),o(3,"po-divider",1),i(4,"thf-grid",2),g("t-selected",function(E){return n.selectedItem(E)}),t(),o(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-action-delete",!0)("t-columns",n.column)("t-height",400)("t-literals",n.literals)("t-selectable",!0)("t-selectable-entire-line",!1)("t-service-delete-api",n.serviceDeleteApi),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("serviceCode",n.serviceCode)("showServiceButton",!0))},dependencies:[v,P,R,T],encapsulation:2})}}return d})();var Ot=`<thf-grid
    [t-action-delete]="selection.includes('actionDelete')"
    [t-action-edit]="selection.includes('actionEdit')"
    [t-action-excel]="selection.includes('actionExcel')"
    [t-action-pdf]="selection.includes('actionPdf')"
    [t-actions]="actions || []"
    [t-actions-filter]="otherProperties.includes('actionsFilter')"
    [t-actions-right]="otherProperties.includes('actionRight')"
    [t-components-size]="componentsSize"
    [t-columns]="columns"
    [t-container]="otherProperties.includes('container')"
    [t-draggable]="otherProperties.includes('draggable')"
    [t-filter-input-mode]="filterinputModeValue"
    [t-groupable]="otherProperties.includes('groupable')"
    [t-height]="height"
    [t-max-height]="maxHeight"
    [t-min-height]="minHeight"
    [t-hide-columns-manager]="otherProperties.includes('hideColumnsManager')"
    [t-hide-action-fixed-columns]="
      otherProperties.includes('hideActionFixedColumns')
    "
    [t-hide-batch-actions]="selection.includes('hideBatchActions')"
    [t-hide-select-all]="selection.includes('hideSelectAll')"
    [t-hide-table-search]="otherProperties.includes('hideTableSearch')"
    [t-literals]="literalsCustom"
    [t-loading]="otherProperties.includes('loading')"
    [t-max-resizable-width]="maxResizableValue"
    [t-min-resizable-width]="minResizableValue"
    [t-options-paging]="customOptionsPage"
    [t-pageable]="pagination.includes('pageable')"
    t-param-delete-api="value"
    [t-resizable]="resizable"
    [t-selectable]="selection.includes('selectable')"
    [t-selectable-entire-line]="selection.includes('selectableEntireLine')"
    [t-show-densification-configuration]="
      otherProperties.includes('showDensificationConfiguration')
    "
    [t-show-draggable-icon]="otherProperties.includes('showDraggableIcon')"
    [t-show-more-disabled]="pagination.includes('showMoreDisabled')"
    [t-show-more-visible]="pagination.includes('showMoreVisible')"
    [t-single-select]="selection.includes('singleSelect')"
    [t-sort]="customSort"
    [t-sortable]="otherProperties.includes('sortable')"
    [t-spacing]="spacing"
    [t-striped]="otherProperties.includes('striped')"
    [t-text-wrap]="otherProperties.includes('textWrap')"
    [t-virtual-scroll]="otherProperties.includes('virtualScroll')"
    [t-show-footer-aggregates]="
      otherProperties.includes('showFooterAggregates')
    "
    [t-items]="items"
    (t-change-fixed-columns)="changeEvent('t-change-fixed-columns')"
    (t-change-order-column)="changeEvent('t-change-order-column')"
    (t-change-page-size)="changeEvent('t-change-page-size')"
    (t-change-sort-column)="changeEvent('t-change-sort-column')"
    (t-change-visible-columns)="changeEvent('t-change-visible-columns')"
    (t-change-options-column-manager)="
      changeEvent('t-change-options-column-manager')
    "
    (t-changed-density)="changeEvent('t-changed-density')"
    (t-delete-item)="changeEvent('t-delete-item')"
    (t-delete-items)="changeEvent('t-delete-items')"
    (t-delete-item-error)="changeEvent('t-delete-item-error')"
    (t-filter-item-error)="changeEvent('t-filter-item-error')"
    (t-restore-column-manager)="changeEvent('t-restore-column-manager')"
    (t-selected)="changeEvent('t-selected')"
    (t-all-selected)="changeEvent('t-all-selected')"
    (t-unselected)="changeEvent('t-unselected')"
    (t-all-unselected)="changeEvent('t-all-unselected')"
    (t-change-group)="changeEvent('t-change-group')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
  />

  <po-container class="po-mt-2" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

  <div class="po-row po-mt-2 po-mb-2" style="display: block">
    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="columnsName"
        [(ngModel)]="columnsName"
        p-columns="4"
        p-label="Columns"
        [p-options]="columnsOptions"
        (p-change)="updateColumns()"
      >
      </po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="selection"
        p-label="Selection"
        p-columns="4"
        [p-options]="selectionOptions"
        [(ngModel)]="selection"
        (p-change)="changeSelectionOptions()"
      ></po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="otherProperties"
        p-label="Other Properties"
        [p-columns]="4"
        [p-options]="otherPropertiesOptions"
        [(ngModel)]="otherProperties"
        (p-change)="changeOtherProperties()"
      >
      </po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-radio-group
        name="spacing"
        p-help="Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar."
        p-label="Spacing"
        [p-columns]="4"
        [p-options]="spacingOptions"
        [(ngModel)]="spacing"
      ></po-radio-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-radio-group
        class="po-lg-6"
        name="componentsSize"
        [(ngModel)]="componentsSize"
        p-label="Components size"
        p-help="Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar."
        [p-options]="componentsSizeOptions"
      >
      </po-radio-group>

      <po-radio-group
        class="po-lg-6"
        name="filterinputModeValue"
        p-label="Filter Input Mode"
        [(ngModel)]="filterinputModeValue"
        [p-options]="filterModeOptions"
      ></po-radio-group>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-number
        class="po-md-6"
        p-label="Min Resizable Width"
        [(ngModel)]="minResizableValue"
        [disabled]="!resizable"
      ></po-number>
      <po-number
        class="po-md-6"
        p-label="Max Resizable Width"
        [(ngModel)]="maxResizableValue"
        [disabled]="!resizable"
      ></po-number>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Height"
        [(ngModel)]="height"
      ></po-number>
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Max Height"
        [(ngModel)]="maxHeight"
      ></po-number>
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Min Height"
        [(ngModel)]="minHeight"
      ></po-number>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-textarea
        name="literals"
        p-label="Literals"
        p-help='{"noData": "Sem dados a serem exibidos"}'
        [(ngModel)]="literals"
        (p-change-model)="changeLiterals()"
      ></po-textarea>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-textarea
        name="sort"
        p-label="Sort"
        p-help='[{ "field":"name", "dir":"asc" }]'
        [(ngModel)]="sort"
        (p-change-model)="changeSort()"
      ></po-textarea>
    </po-container>

    <po-container class="po-mb-2 po-lg-12" style="display: flex">
      <div style="display: flex; flex-wrap: wrap">
        <po-checkbox-group
          class="po-lg-6"
          name="pagination"
          p-label="Pagination"
          [p-options]="paginationOptions"
          [(ngModel)]="pagination"
          (p-change)="changePagination()"
        ></po-checkbox-group>

        <po-textarea
          class="po-lg-6"
          name="optionsPage"
          p-label="Options Page"
          p-help='[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]'
          [(ngModel)]="optionsPage"
          (p-change-model)="changeOptionsPage()"
          [disabled]="!pagination.includes('pageable')"
        ></po-textarea>
      </div>
    </po-container>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-6"
      p-label="Restore"
      (p-click)="restore()"
    >
    </po-button>
  </div>
`,Gt=`import { AfterViewInit, Component } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
} from '@po-ui/ng-components';
import {
  ThfColumnSpacing,
  ThfGridColumn,
  ThfGridColumnSort,
  ThfGridLiterals,
  ThfTableAction,
} from '@totvs/thf-components';
import { ThfGridOptionPaging } from '@totvs/thf-components/lib/components/thf-grid/interfaces/thf-grid-option-paging.interface';

@Component({
  selector: 'app-thf-grid-labs-doc',
  templateUrl: './thf-grid-labs-doc.component.html',
  styleUrls: ['./thf-grid-labs-doc.component.css'],
})
export class ThfGridLabsDocComponent implements AfterViewInit {
  actions: Array<ThfTableAction> | undefined = undefined;
  columnsName: Array<string> = ['id', 'name', 'birthdate', 'email', 'over'];
  componentsSize: string = 'medium';
  customOptionsPage: Array<ThfGridOptionPaging> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 1000, label: '1000' },
  ];
  customSort: Array<ThfGridColumnSort> = [
    {
      field: '',
      dir: 'asc',
    },
  ];
  event: string = '';
  filterinputModeValue: string = 'basic';
  height = 400;
  minHeight = undefined;
  maxHeight = undefined;
  literals: string = '';
  literalsCustom: ThfGridLiterals = {};
  maxResizableValue: number = 300;
  minResizableValue: number = 10;
  optionsPage: string = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
  pagination: Array<string> = [];
  properties: Array<string> = [];
  resizable: boolean = false;
  selection: Array<string> = ['selectableEntireLine'];
  sort: string = '[{"field": "", "dir": "asc"}]';
  spacing: ThfColumnSpacing = ThfColumnSpacing.Medium;
  otherProperties: Array<string> = [
    'actionsFilter',
    'draggable',
    'container',
    'groupable',
    'sortable',
    'striped',
    'virtualScroll',
  ];

  customAction: Array<ThfTableAction> = [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name}\`);
      },
      icon: 'ICON_MORE_VERT',
      fixed: true,
    },
  ];

  componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Single', value: 'singleSelect', disabled: true },
    { label: 'Entire Line', value: 'selectableEntireLine', disabled: true },
    { label: 'Hide Select All', value: 'hideSelectAll', disabled: true },
    { label: 'Action Delete', value: 'actionDelete', disabled: true },
    { label: 'Action Edit', value: 'actionEdit', disabled: true },
    { label: 'Action Excel', value: 'actionExcel', disabled: true },
    { label: 'Action PDF', value: 'actionPdf', disabled: true },
    { label: 'Hide Batch Actions', value: 'hideBatchActions', disabled: true },
  ];
  spacingOptions: Array<PoRadioGroupOption> = [
    { label: 'extraSmall', value: ThfColumnSpacing.ExtraSmall },
    { label: 'Small', value: ThfColumnSpacing.Small },
    { label: 'Medium', value: ThfColumnSpacing.Medium },
    { label: 'Large', value: ThfColumnSpacing.Large },
  ];
  filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: 'basic' },
    { label: 'Service', value: 'service' },
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Actions Filter', value: 'actionsFilter' },
    { label: 'Action Right', value: 'actionRight' },
    { label: 'Container', value: 'container' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Groupable', value: 'groupable' },
    { label: 'Hide Columns Manager', value: 'hideColumnsManager' },
    { label: 'Hide Actions Fixed Columns', value: 'hideActionFixedColumns' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    {
      label: 'Show Densification Configuration',
      value: 'showDensificationConfiguration',
    },
    { label: 'Show Draggable Icon', value: 'showDraggableIcon' },
    { label: 'Sortable', value: 'sortable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'textWrap', disabled: false },
    { label: 'Virtual Scroll', value: 'virtualScroll' },
    { label: 'Show Footer Aggregates', value: 'showFooterAggregates' },
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Disabled', value: 'showMoreDisabled', disabled: false },
    { label: 'Show More Visible', value: 'showMoreVisible', disabled: false },
  ];

  items = [
    {
      id: 1,
      name: 'Jo\xE3o Silva',
      birthdate: '1990-05-15',
      lastLogin: '2024-02-14T15:30:00Z',
      active: true,
      email: 'joao.silva@example.com',
      over: 95.5,
    },
    {
      id: 2,
      name: 'Maria Souza',
      birthdate: '1985-10-23',
      lastLogin: '2024-02-13T08:45:00Z',
      active: false,
      email: 'maria.souza@example.com',
      over: 96,
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      birthdate: '1998-07-09',
      lastLogin: '2024-02-14T20:15:00Z',
      active: true,
      email: 'carlos.almeida@example.com',
      over: 1100.5,
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      birthdate: '1992-03-12',
      lastLogin: '2024-02-12T18:00:00Z',
      active: false,
      email: 'fernanda.costa@example.com',
      over: 1200.5,
    },
    {
      id: 5,
      name: 'Ricardo Lima',
      birthdate: '1980-11-30',
      lastLogin: '2024-02-11T07:25:00Z',
      active: true,
      email: 'ricardo.lima@example.com',
      over: 300.89,
    },
    {
      id: 6,
      name: 'Ana Pereira',
      birthdate: '1995-09-18',
      lastLogin: '2024-02-10T14:10:00Z',
      active: true,
      email: 'ana.pereira@example.com',
      over: 50.5,
    },
    {
      id: 7,
      name: 'Pedro Henrique',
      birthdate: '1993-06-25',
      lastLogin: '2024-02-09T12:30:00Z',
      active: false,
      email: 'pedro.henrique@example.com',
      over: 35,
    },
    {
      id: 8,
      name: 'Beatriz Ramos',
      birthdate: '1999-04-03',
      lastLogin: '2024-02-08T09:15:00Z',
      active: true,
      email: 'beatriz.ramos@example.com',
      over: 0.5,
    },
    {
      id: 9,
      name: 'Lucas Oliveira',
      birthdate: '1987-07-22',
      lastLogin: '2024-02-07T16:45:00Z',
      active: false,
      email: 'lucas.oliveira@example.com',
      over: 100,
    },
    {
      id: 10,
      name: 'Juliana Martins',
      birthdate: '1996-01-05',
      lastLogin: '2024-02-06T11:00:00Z',
      active: true,
      email: 'juliana.martins@example.com',
      over: 100.5,
    },
    {
      id: 11,
      name: 'Eduardo Nunes',
      birthdate: '1982-08-17',
      lastLogin: '2024-02-05T17:20:00Z',
      active: false,
      email: 'eduardo.nunes@example.com',
      over: 950,
    },
    {
      id: 12,
      name: 'Camila Ferreira',
      birthdate: '2000-12-29',
      lastLogin: '2024-02-04T13:40:00Z',
      active: true,
      email: 'camila.ferreira@example.com',
      over: 99.99,
    },
  ];

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Number' },
    { property: 'name', label: 'Text' },
    { property: 'birthdate', label: 'Date', type: 'date' },
    {
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this),
    },
    {
      property: 'over',
      label: 'Currency',
      type: 'currency',
      format: 'BRL',
      locale: 'pt',
    },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Number' },
    { value: 'name', label: 'Text' },
    { value: 'birthdate', label: 'Date' },
    { value: 'lastLogin', label: 'DateTime' },
    { value: 'active', label: 'Boolean' },
    { value: 'email', label: 'Link' },
    { value: 'over', label: 'Currency' },
  ];

  private readonly columnsDefinition: any = {
    id: <ThfGridColumn>{ property: 'id', label: 'Number' },
    name: <ThfGridColumn>{ property: 'name', label: 'Text' },
    birthdate: <ThfGridColumn>{
      property: 'birthdate',
      label: 'Date',
      type: 'date',
    },
    lastLogin: <ThfGridColumn>{
      property: 'lastLogin',
      label: 'DateTime',
      type: 'dateTime',
    },
    active: <ThfGridColumn>{ property: 'active', label: 'Boolean' },
    email: <ThfGridColumn>{
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this),
    },
    over: <ThfGridColumn>{
      property: 'over',
      label: 'Currency',
      type: 'currency',
      format: 'BRL',
      locale: 'pt',
    },
  };

  constructor(private readonly poNotification: PoNotificationService) {}

  ngAfterViewInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeLiterals() {
    try {
      this.literalsCustom = JSON.parse(this.literals);
    } catch {
      this.literalsCustom = {};
    }
  }

  changeOptionsPage() {
    try {
      this.customOptionsPage = JSON.parse(this.optionsPage);
    } catch {
      this.customOptionsPage = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 1000, label: '1000' },
      ];
    }
  }

  changeOtherProperties() {
    this.actions = this.otherProperties.includes('actions')
      ? this.customAction
      : [];

    const isVirtualScrollEnabled =
      this.otherProperties.includes('virtualScroll');
    const isResizableEnabled = this.otherProperties.includes('resizable');

    this.otherPropertiesOptions = this.otherPropertiesOptions.map((option) => {
      if (option.value === 'textWrap') {
        return { ...option, disabled: isVirtualScrollEnabled };
      }
      return option;
    });

    if (isVirtualScrollEnabled && this.otherProperties.includes('textWrap')) {
      this.otherProperties = this.otherProperties.filter(
        (prop) => prop !== 'textWrap'
      );
    }

    this.resizable = isResizableEnabled;
  }

  changePagination() {
    const pageable = this.pagination.includes('pageable');

    this.paginationOptions[1].disabled = !pageable;
    this.paginationOptions[2].disabled = !pageable;
    this.paginationOptions = [...this.paginationOptions];
  }

  changeSelectionOptions() {
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = !selectable;
    this.selectionOptions[2].disabled = !selectable;
    this.selectionOptions[3].disabled = !selectable;
    this.selectionOptions[4].disabled = !selectable;
    this.selectionOptions[5].disabled = !selectable;
    this.selectionOptions[6].disabled = !selectable;
    this.selectionOptions[7].disabled = !selectable;
    this.selectionOptions[8].disabled = !selectable;
    this.selectionOptions = [...this.selectionOptions];
  }

  changeSort() {
    try {
      this.customSort = JSON.parse(this.sort);
    } catch {
      this.customSort = [
        {
          field: '',
          dir: 'asc',
        },
      ];
    }
  }

  openEmail(email: string) {
    window.open(\`mailto:\${email}\`, '_blank');
  }

  restore() {
    this.actions = undefined;
    this.columnsName = ['id', 'name', 'birthdate', 'email', 'over'];
    this.componentsSize = 'medium';
    this.event = '';
    this.filterinputModeValue = 'basic';
    this.literals = '';
    this.literalsCustom = {};
    this.maxResizableValue = 300;
    this.minResizableValue = 10;
    this.height = 400;
    this.minHeight = undefined;
    this.maxHeight = undefined;
    this.optionsPage = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
    this.pagination = ['showMoreVisible'];
    this.properties = [];
    this.resizable = false;
    this.selection = ['selectableEntireLine'];
    this.sort = '[{"field": "", "dir": "asc"}]';
    this.spacing = ThfColumnSpacing.Medium;
    this.otherProperties = [
      'actionsFilter',
      'container',
      'draggable',
      'groupable',
      'sortable',
      'striped',
      'virtualScroll',
    ];

    this.updateColumns();
    this.changeLiterals();
    this.changeSort();
    this.changePagination();
    this.changeSelectionOptions();
    this.changeOtherProperties();
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }
}
`;var mn=()=>[];function sn(d,C){if(d&1){let a=q();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),h("ngModelChange",function(n){p(a);let l=u();return f(l.columnsName,n)||(l.columnsName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),h("ngModelChange",function(n){p(a);let l=u();return f(l.selection,n)||(l.selection=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),h("ngModelChange",function(n){p(a);let l=u();return f(l.otherProperties,n)||(l.otherProperties=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),h("ngModelChange",function(n){p(a);let l=u();return f(l.spacing,n)||(l.spacing=n),c(n)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),h("ngModelChange",function(n){p(a);let l=u();return f(l.componentsSize,n)||(l.componentsSize=n),c(n)}),t(),i(11,"po-radio-group",14),h("ngModelChange",function(n){p(a);let l=u();return f(l.filterinputModeValue,n)||(l.filterinputModeValue=n),c(n)}),t()(),i(12,"po-container",15)(13,"po-number",16),h("ngModelChange",function(n){p(a);let l=u();return f(l.minResizableValue,n)||(l.minResizableValue=n),c(n)}),t(),i(14,"po-number",17),h("ngModelChange",function(n){p(a);let l=u();return f(l.maxResizableValue,n)||(l.maxResizableValue=n),c(n)}),t()(),i(15,"po-container",15)(16,"po-number",18),h("ngModelChange",function(n){p(a);let l=u();return f(l.height,n)||(l.height=n),c(n)}),t(),i(17,"po-number",19),h("ngModelChange",function(n){p(a);let l=u();return f(l.maxHeight,n)||(l.maxHeight=n),c(n)}),t(),i(18,"po-number",20),h("ngModelChange",function(n){p(a);let l=u();return f(l.minHeight,n)||(l.minHeight=n),c(n)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),h("ngModelChange",function(n){p(a);let l=u();return f(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),h("ngModelChange",function(n){p(a);let l=u();return f(l.sort,n)||(l.sort=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),h("ngModelChange",function(n){p(a);let l=u();return f(l.pagination,n)||(l.pagination=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changePagination())}),t(),i(26,"po-textarea",26),h("ngModelChange",function(n){p(a);let l=u();return f(l.optionsPage,n)||(l.optionsPage=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=u();m(2),b("ngModel",a.columnsName),s("p-options",a.columnsOptions),m(2),s("p-options",a.selectionOptions),b("ngModel",a.selection),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),b("ngModel",a.otherProperties),m(2),s("p-columns",4)("p-options",a.spacingOptions),b("ngModel",a.spacing),m(2),b("ngModel",a.componentsSize),s("p-options",a.componentsSizeOptions),m(),b("ngModel",a.filterinputModeValue),s("p-options",a.filterModeOptions),m(2),b("ngModel",a.minResizableValue),s("disabled",!a.resizable),m(),b("ngModel",a.maxResizableValue),s("disabled",!a.resizable),m(2),b("ngModel",a.height),m(),b("ngModel",a.maxHeight),m(),b("ngModel",a.minHeight),m(2),b("ngModel",a.literals),m(2),b("ngModel",a.sort),m(3),s("p-options",a.paginationOptions),b("ngModel",a.pagination),m(),b("ngModel",a.optionsPage),s("disabled",!a.pagination.includes("pageable"))}}var Nt=(()=>{class d{constructor(a){this.poNotification=a,this.htmlCode=Ot,this.tsCode=Gt,this.actions=void 0,this.columnsName=["id","name","birthdate","email","over"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=ue.Medium,this.otherProperties=["actionsFilter","draggable","container","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:r=>{this.poNotification.information(`${r.id} - ${r.name}`)},icon:"ICON_MORE_VERT",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:ue.ExtraSmall},{label:"Small",value:ue.Small},{label:"Medium",value:ue.Medium},{label:"Large",value:ue.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Container",value:"container"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"},{label:"Show Footer Aggregates",value:"showFooterAggregates"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com",over:95.5},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com",over:96},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com",over:1100.5},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com",over:1200.5},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com",over:300.89},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com",over:50.5},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com",over:35},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com",over:.5},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com",over:100},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com",over:100.5},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com",over:950},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com",over:99.99}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)},{property:"over",label:"Currency",type:"currency",format:"BRL",locale:"pt"}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"},{value:"over",label:"Currency"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)},over:{property:"over",label:"Currency",type:"currency",format:"BRL",locale:"pt"}}}ngOnInit(){this.restore()}changeEvent(a){this.event=a}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch{this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch{this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let a=this.otherProperties.includes("virtualScroll"),r=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(n=>n.value==="textWrap"?N(j({},n),{disabled:a}):n),a&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(n=>n!=="textWrap")),this.resizable=r}changePagination(){let a=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!a,this.paginationOptions[2].disabled=!a,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let a=this.selection.includes("selectable");this.selectionOptions[1].disabled=!a,this.selectionOptions[2].disabled=!a,this.selectionOptions[3].disabled=!a,this.selectionOptions[4].disabled=!a,this.selectionOptions[5].disabled=!a,this.selectionOptions[6].disabled=!a,this.selectionOptions[7].disabled=!a,this.selectionOptions[8].disabled=!a,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch{this.customSort=[{field:"",dir:"asc"}]}}openEmail(a){window.open(`mailto:${a}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email","over"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=ue.Medium,this.otherProperties=["actionsFilter","container","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}static{this.\u0275fac=function(r){return new(r||d)(V(ve))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:49,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-container","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-show-footer-aggregates","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-grid",3),g("t-change-fixed-columns",function(){return p(l),c(n.changeEvent("t-change-fixed-columns"))})("t-change-order-column",function(){return p(l),c(n.changeEvent("t-change-order-column"))})("t-change-page-size",function(){return p(l),c(n.changeEvent("t-change-page-size"))})("t-change-sort-column",function(){return p(l),c(n.changeEvent("t-change-sort-column"))})("t-change-visible-columns",function(){return p(l),c(n.changeEvent("t-change-visible-columns"))})("t-change-options-column-manager",function(){return p(l),c(n.changeEvent("t-change-options-column-manager"))})("t-changed-density",function(){return p(l),c(n.changeEvent("t-changed-density"))})("t-delete-item",function(){return p(l),c(n.changeEvent("t-delete-item"))})("t-delete-items",function(){return p(l),c(n.changeEvent("t-delete-items"))})("t-delete-item-error",function(){return p(l),c(n.changeEvent("t-delete-item-error"))})("t-filter-item-error",function(){return p(l),c(n.changeEvent("t-filter-item-error"))})("t-restore-column-manager",function(){return p(l),c(n.changeEvent("t-restore-column-manager"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-all-selected",function(){return p(l),c(n.changeEvent("t-all-selected"))})("t-unselected",function(){return p(l),c(n.changeEvent("t-unselected"))})("t-all-unselected",function(){return p(l),c(n.changeEvent("t-all-unselected"))})("t-change-group",function(){return p(l),c(n.changeEvent("t-change-group"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),K(8,sn,29,27,"ng-template",null,0,X),t()}if(r&2){let l=$(9);m(4),s("t-action-delete",n.selection.includes("actionDelete"))("t-action-edit",n.selection.includes("actionEdit"))("t-action-excel",n.selection.includes("actionExcel"))("t-action-pdf",n.selection.includes("actionPdf"))("t-actions",n.actions||Z(48,mn))("t-actions-filter",n.otherProperties.includes("actionsFilter"))("t-actions-right",n.otherProperties.includes("actionRight"))("t-components-size",n.componentsSize)("t-columns",n.columns)("t-container",n.otherProperties.includes("container"))("t-draggable",n.otherProperties.includes("draggable"))("t-filter-input-mode",n.filterinputModeValue)("t-groupable",n.otherProperties.includes("groupable"))("t-height",n.height)("t-max-height",n.maxHeight)("t-min-height",n.minHeight)("t-hide-columns-manager",n.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",n.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",n.selection.includes("hideBatchActions"))("t-hide-select-all",n.selection.includes("hideSelectAll"))("t-hide-table-search",n.otherProperties.includes("hideTableSearch"))("t-literals",n.literalsCustom)("t-loading",n.otherProperties.includes("loading"))("t-max-resizable-width",n.maxResizableValue)("t-min-resizable-width",n.minResizableValue)("t-options-paging",n.customOptionsPage)("t-pageable",n.pagination.includes("pageable"))("t-resizable",n.resizable)("t-selectable",n.selection.includes("selectable"))("t-selectable-entire-line",n.selection.includes("selectableEntireLine"))("t-show-densification-configuration",n.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",n.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",n.pagination.includes("showMoreDisabled"))("t-show-more-visible",n.pagination.includes("showMoreVisible"))("t-single-select",n.selection.includes("singleSelect"))("t-sort",n.customSort)("t-sortable",n.otherProperties.includes("sortable"))("t-spacing",n.spacing)("t-striped",n.otherProperties.includes("striped"))("t-text-wrap",n.otherProperties.includes("textWrap"))("t-virtual-scroll",n.otherProperties.includes("virtualScroll"))("t-show-footer-aggregates",n.otherProperties.includes("showFooterAggregates"))("t-items",n.items),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,U,W,v,P,he,de,ft,ye,se,R,T],encapsulation:2})}}return d})();var Qt=`<thf-grid
    #gridComponent
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-auto-size]="true"
    [t-columns]="columns"
    [t-actions-filter]="true"
    [t-selectable]="true"
    [t-selectable-entire-line]="false"
    [t-actions-right]="true"
    [t-draggable]="true"
    [t-groupable]="true"
    [t-height]="400"
    [t-edit-properties]="editProperties"
  />

`,Bt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-inline-doc',
  templateUrl: './thf-grid-editing-inline-doc.component.html',
  styleUrls: ['./thf-grid-editing-inline-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
 @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', filter: true, editProperties: { disabled: true } },
    { property: 'name', label: 'Nome', filter: true },
    {
      property: 'birthdate',
      label: 'Data de  nascimento',
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        clean: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper:
          'Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'birthdate'),
      },
    },
    {
      property: 'city',
      label: 'Cidade',
      filter: true,
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: '4201307', label: 'Araquari' },
          { value: '1501402', label: 'Bel\xE9m' },
          { value: '3509502', label: 'Campinas' },
          { value: '4106902', label: 'Curitiba' },
          { value: '4209102', label: 'Joinville' },
          { value: '3534401', label: 'Osasco' },
          { value: '3304557', label: 'Rio de Janeiro' },
          { value: '4215802', label: 'S\xE3o Bento do Sul' },
          { value: '4216206', label: 'S\xE3o Francisco do Sul' },
          { value: '3550308', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      },
    },
  ];

  form!: FormGroup;
  editProperties!: ThfGridEditProperties;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
    });
    return this.form;
  }
}

`;var cn=["gridComponent"],Ht=(()=>{class d{constructor(){this.htmlCode=Qt,this.tsCode=Bt,this.columns=[{property:"id",label:"Id",filter:!0,editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",filter:!0,editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}setFormGroup(a){return this.form=new B({id:new S(a.id,[F.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(r,n){if(r&1&&I(cn,5),r&2){let l;D(l=A())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-selectable-entire-line","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-auto-size",!0)("t-columns",n.columns)("t-actions-filter",!0)("t-selectable",!0)("t-selectable-entire-line",!1)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",n.editProperties),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,R,T],encapsulation:2})}}return d})();var Wt=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-sortable]="false"
  [t-custom-templates]="{ name: nameTemplate, perfil: perfilTemplate }"
/>

<ng-template #nameTemplate let-formControl="formControl">
  <po-input
    #input
    p-additional-help-tooltip="Informe pelo menos o primeiro nome."
    p-placeholder="Informe o nome"
    [formControl]="formControl"
    [p-append-in-body]="true"
    [p-error-pattern]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-required-field-error-message]="true"
    (p-keydown)="onKeyDown('name', $event)"
  ></po-input>
</ng-template>
<ng-template #perfilTemplate let-formControl="formControl">
  <po-multiselect
    #multiselect
    [formControl]="formControl"
    [p-append-in-body]="true"
    [p-field-error-message]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-additional-help-tooltip]="
      'Marque um ou mais status, conforme necess\xE1rio.'
    "
    [p-options]="[
      { value: 1, label: 'RH' },
      { value: 2, label: 'Almoxarifado' },
      { value: 3, label: 'Vendedor' }
    ]"
    [p-field-label]="'label'"
    [p-field-value]="'value'"
    [p-control-value-with-label]="true"
    (p-keydown)="onKeyDown('otherStatus', $event)"
  ></po-multiselect>
</ng-template>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>`,Ut=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  PoInputComponent,
  PoModalComponent,
  PoMultiselectComponent,
} from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-row-actions-doc',
  templateUrl: './thf-grid-grid-row-actions-doc.component.html',
  styleUrls: ['./thf-grid-grid-row-actions-doc.component.css'],
  standalone: false,
})
export class ThfGridRowActionsDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('multiselect', { static: false })
  multiselect!: PoMultiselectComponent;
  @ViewChild('input', { static: false }) input!: PoInputComponent;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      perfil: [1],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      perfil: [2],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      perfil: [2],
      state: { value: 'RJ', label: 'Rio de Janeiro' },
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      perfil: [1],
      state: null,
      city: null,
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      filter: true,
      editProperties: {
        componentEditable: 'input',
        required: true
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        keydown: this.onKeyDown.bind(this, 'values'),
      },
    },
    {
      property: 'perfil',
      label: 'Perfil',
      filter: true,
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 1, label: 'RH' },
          { value: 2, label: 'Almoxarifado' },
          { value: 3, label: 'Vendedor' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
        required: true
      },
    },
    {
      property: 'state',
      label: 'Estado',
      filter: true,
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        options: [
          { value: 'MG', label: 'Minas Gerais' },
          { value: 'RJ', label: 'Rio de Janeiro' },
          { value: 'SC', label: 'Santa Catarina' },
          { value: 'SP', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'city',
      label: 'cidade',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        disabled: false,
        fieldLabel: 'value',
        fieldValue: 'value',
      },
    },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  myForm!: FormGroup;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        this.myForm = new FormGroup({
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          perfil: new FormControl(dataItem.perfil, [Validators.required]),
          state: new FormControl(dataItem.state),
          city: new FormControl(dataItem.city),
        });
        this.handleStateAndCity(this.myForm?.controls['state'].value);
        return this.myForm;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
      validateField: this.onValidate.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
    return true;
  }

  onValidate(value: any, columnProperty: any) {
    console.log('onValidateField:', value, columnProperty);

    if (columnProperty === 'state') {
      this.myForm?.controls['city'].setValue(null);
      const stateValue = this.myForm.controls['state'].value;
      const cityColumn = this.columnWithItems.find(
        (column) => column.property === 'city'
      );

      if (!cityColumn?.editProperties) {
        return true;
      }

      if (!stateValue) {
        cityColumn.editProperties.disabled = true;
      } else {
        cityColumn.editProperties.disabled = false;
        cityColumn.editProperties.options = this.getCity(stateValue.value);

        this.myForm?.controls['city'].setValue('');
      }
    }

    return true;
  }

  handleStateAndCity(value: any) {
    const cityColumn = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (!cityColumn?.editProperties) {
      return;
    }
    if (value) {
      cityColumn.editProperties.options = this.getCity(value);
      cityColumn.editProperties.disabled = false;
    } else {
      cityColumn.editProperties.disabled = true;
    }
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      if (property === 'otherStatus') {
        this.multiselect.showAdditionalHelp();
        return;
      } else if (property === 'name') {
        this.input.showAdditionalHelp();
        return;
      }
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  private getCity(state: string) {
    const city = {
      MG: [
        { value: 'Belo Horizonte' },
        { value: 'Contagem' },
        { value: 'Juiz de Fora' },
        { value: 'Uberl\xE2ndia' },
      ],
      RJ: [
        { value: 'Duque de Caxias' },
        { value: 'Nova Igua\xE7u' },
        { value: 'Rio de Janeiro' },
        { value: 'S\xE3o Gon\xE7alo' },
      ],
      SP: [
        { value: 'Campinas' },
        { value: 'Guarulhos' },
        { value: 'S\xE3o Bernardo do Campo' },
        { value: 'S\xE3o Paulo' },
      ],
      SC: [
        { value: 'Balne\xE1rio Cambori\xFA' },
        { value: 'Brusque' },
        { value: 'Lages' },
        { value: 'Palho\xE7a' },
      ],
    };

    return city[state as keyof typeof city] || [];
  }
}
  
`;var En=["modal"],xn=["gridComponent"],Sn=["multiselect"],bn=["input"],fn=(d,C)=>({name:d,perfil:C}),hn=()=>({value:1,label:"RH"}),vn=()=>({value:2,label:"Almoxarifado"}),gn=()=>({value:3,label:"Vendedor"}),yn=(d,C,a)=>[d,C,a];function Cn(d,C){if(d&1){let a=q();i(0,"po-input",14,4),g("p-keydown",function(n){p(a);let l=u();return c(l.onKeyDown("name",n))}),t()}if(d&2){let a=C.formControl;s("p-append-in-body",!0)("formControl",a)("p-error-pattern","Obrigat\xF3rio")("p-required",!0)("p-required-field-error-message",!0)}}function Pn(d,C){if(d&1){let a=q();i(0,"po-multiselect",15,5),g("p-keydown",function(n){p(a);let l=u();return c(l.onKeyDown("otherStatus",n))}),t()}if(d&2){let a=C.formControl;s("p-append-in-body",!0)("formControl",a)("p-field-error-message","Obrigat\xF3rio")("p-required",!0)("p-additional-help-tooltip","Marque um ou mais status, conforme necess\xE1rio.")("p-options",Ze(12,yn,Z(9,hn),Z(10,vn),Z(11,gn)))("p-field-label","label")("p-field-value","value")("p-control-value-with-label",!0)}}function Tn(d,C){if(d&1&&(i(0,"div",12)(1,"pre"),e(2),t()()),d&2){let a=u();m(2),Se(a.getLabelChangedItems())}}var Kt=(()=>{class d{constructor(){this.htmlCode=Wt,this.tsCode=Ut,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0,editProperties:{componentEditable:"input",required:!0}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",filter:!0,editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0,required:!0}},{property:"state",label:"Estado",filter:!0,editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),this.myForm=new B({name:new S(a.name),status:new S(a.status,[F.min(1)]),values:new S(a.values,[F.required]),perfil:new S(a.perfil,[F.required]),state:new S(a.state),city:new S(a.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a);let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(r.editProperties.disabled=!0)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a];let r=this.columnWithItems.find(n=>n.property==="city");return r?.editProperties&&(r.editProperties.disabled=!0),!0}onValidate(a,r){if(console.log("onValidateField:",a,r),r==="state"){this.myForm?.controls.city.setValue(null);let n=this.myForm.controls.state.value,l=this.columnWithItems.find(E=>E.property==="city");if(!l?.editProperties)return!0;n?(l.editProperties.disabled=!1,l.editProperties.options=this.getCity(n.value),this.myForm?.controls.city.setValue("")):l.editProperties.disabled=!0}return!0}handleStateAndCity(a){let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(a?(r.editProperties.options=this.getCity(a),r.editProperties.disabled=!1):r.editProperties.disabled=!0)}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){if(r.code==="F9"){if(a==="otherStatus"){this.multiselect.showAdditionalHelp();return}else if(a==="name"){this.input.showAdditionalHelp();return}this.thfGrid.showAdditionalHelp(a)}}getCity(a){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[a]||[]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(r,n){if(r&1&&I(En,7)(xn,5)(Sn,5)(bn,5),r&2){let l;D(l=A())&&(n.poModal=l.first),D(l=A())&&(n.thfGrid=l.first),D(l=A())&&(n.multiselect=l.first),D(l=A())&&(n.input=l.first)}},standalone:!1,decls:17,vars:17,consts:[["gridComponent",""],["nameTemplate",""],["perfilTemplate",""],["modal",""],["input",""],["multiselect",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-selectable-entire-line","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable","t-custom-templates"],["p-title","Itens que foram alterados"],[1,"code"],[3,"htmlCode","tsCode"],["p-additional-help-tooltip","Informe pelo menos o primeiro nome.","p-placeholder","Informe o nome",3,"p-keydown","p-append-in-body","formControl","p-error-pattern","p-required","p-required-field-error-message"],[3,"p-keydown","p-append-in-body","formControl","p-field-error-message","p-required","p-additional-help-tooltip","p-options","p-field-label","p-field-value","p-control-value-with-label"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",6),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),o(3,"po-divider"),i(4,"div",7)(5,"po-button",8),g("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(6,"po-button",9),g("p-click",function(){return p(l),c(n.poModal.open())}),t()(),o(7,"thf-grid",10,0),K(9,Cn,2,5,"ng-template",null,1,X)(11,Pn,2,16,"ng-template",null,2,X),i(13,"po-modal",11,3),L(15,Tn,3,1,"div",12),t(),o(16,"app-code-accordion-doc",13),t()}if(r&2){let l,E,y=$(10),Ii=$(12);m(6),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-selectable-entire-line",!1)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!1)("t-custom-templates",Ae(14,fn,y,Ii)),m(8),M((E=n.getChangedItems())!=null&&E.length?15:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,rt,W,v,P,me,Fe,qe,R,T],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]})}}return d})();var $t=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-aggregates]="aggregatesDescriptor"
  [t-show-footer-aggregates]="true"
  [t-actions]="lineActions"
  [t-actions-right]="true"
  [t-sortable]="true"
  [t-action-pdf]="true"
  [t-action-excel]="true"
  [t-custom-actions]="customBulkActions"
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>

<po-modal
  #bulkEditModal
  p-title="Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)"
  [p-primary-action]="bulkEditModalConfirm"
>
  <po-multiselect [(ngModel)]="editColumnsFilterValues" name="editColumnsFilterValues" p-label="Propriedades para Editar" [p-options]="editColumnsFilter"></po-multiselect>

  @for (column of editColumnsFilter; track column.property) {
    <ng-container *ngIf="editColumnsFilterValues.includes(column.property)">
      @switch (column.editProperties.componentEditable) {
        @case ('combo') {
          <po-combo
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-options]="column.editProperties.options"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @case ('decimal') {
          <po-decimal
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-decimals-length]="column.editProperties.decimalsLength"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @default {
          <po-input
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
      }
    </ng-container>
  }
</po-modal>`,Jt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoDropdownAction, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import {
  ThfAggregateDescriptor,
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-fluid-currency-doc',
  templateUrl: './thf-grid-editing-fluid-currency-doc.component.html',
  styleUrls: ['./thf-grid-editing-fluid-currency-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingFluidCurrencyDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('bulkEditModal', { static: true }) bulkEditModal!: PoModalComponent;

  items = [
    {
      id: 11234,
      country: 'Brazil',
      value: 1000.0,
      value_pt: 1000.0,
      value_en: 1000.0,
      value_ru: 1000.0,
      value_es: 1000.0,
      value_edit_pt: 1000.0,
      value_edit_en: 1000.0,
      value_edit_ru: 1000.0,
      value_edit_es: 1000.0,
      destination: 'Rio de Janeiro',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 22467,
      country: 'France',
      value: 5000.0,
      value_pt: 5000.0,
      value_en: 5000.0,
      value_ru: 5000.0,
      value_es: 5000.0,
      value_edit_pt: 5000.0,
      value_edit_en: 5000.0,
      value_edit_ru: 5000.0,
      value_edit_es: 5000.0,
      destination: 'Paris',
      status: 'closed',
      region: 'Alps',
    },
    {
      id: 40670,
      country: 'Senegal',
      value: 3200.0,
      value_pt: 3200.0,
      value_en: 3200.0,
      value_ru: 3200.0,
      value_es: 3200.0,
      value_edit_pt: 3200.0,
      value_edit_en: 3200.0,
      value_edit_ru: 3200.0,
      value_edit_es: 3200.0,
      destination: 'Dakar',
      status: 'closed',
      region: 'Western Africa',
    },
    {
      id: 34679,
      country: 'Portugal',
      value: 5500.0,
      value_pt: 5500.0,
      value_en: 5500.0,
      value_ru: 5500.0,
      value_es: 5500.0,
      value_edit_pt: 5500.0,
      value_edit_en: 5500.0,
      value_edit_ru: 5500.0,
      value_edit_es: 5500.0,
      destination: 'Lisbon',
      status: 'closed',
      region: 'Mediterranean',
    },
    {
      id: 49000,
      country: 'Russia',
      value: 6700.0,
      value_pt: 6700.0,
      value_en: 6700.0,
      value_ru: 6700.0,
      value_es: 6700.0,
      value_edit_pt: 6700.0,
      value_edit_en: 6700.0,
      value_edit_ru: 6700.0,
      value_edit_es: 6700.0,
      destination: 'Moscow',
      status: 'reserved',
      region: 'Caucasus',
    },
    {
      id: 48999,
      country: 'United States',
      value: 2700.49,
      value_pt: 2700.49,
      value_en: 2700.49,
      value_ru: 2700.49,
      value_es: 2700.49,
      value_edit_pt: 2700.49,
      value_edit_en: 2700.49,
      value_edit_ru: 2700.49,
      value_edit_es: 2700.49,
      destination: 'Los Angeles',
      status: 'reserved',
      region: 'North America',
    },
    {
      id: 54563,
      country: 'Chile',
      value: 2000.0,
      value_pt: 2000.0,
      value_en: 2000.0,
      value_ru: 2000.0,
      value_es: 2000.0,
      value_edit_pt: 2000.0,
      value_edit_en: 2000.0,
      value_edit_ru: 2000.0,
      value_edit_es: 2000.0,
      destination: 'Cusco',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 64568,
      country: 'Mexico',
      value: 2100.0,
      value_pt: 2100.0,
      value_en: 2100.0,
      value_ru: 2100.0,
      value_es: 2100.0,
      value_edit_pt: 2100.0,
      value_edit_en: 2100.0,
      value_edit_ru: 2100.0,
      value_edit_es: 2100.0,
      destination: 'Mexico City',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 75456,
      country: 'Ireland',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Cork',
      status: 'reserved',
      region: 'British Isle',
    },
    {
      id: 23445,
      country: 'South Africa',
      value: 1900.0,
      value_pt: 1900.0,
      value_en: 1900.0,
      value_ru: 1900.0,
      value_es: 1900.0,
      value_edit_pt: 1900.0,
      value_edit_en: 1900.0,
      value_edit_ru: 1900.0,
      value_edit_es: 1900.0,
      destination: 'Cape Town',
      status: 'available',
      region: 'Southern Africa',
    },
    {
      id: 19238,
      country: 'Australia',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Sydney',
      status: 'reserved',
      region: 'Australasia',
    },
    {
      id: 85456,
      country: 'Japan',
      value: 5900.0,
      value_pt: 5900.0,
      value_en: 5900.0,
      value_ru: 5900.0,
      value_es: 5900.0,
      value_edit_pt: 5900.0,
      value_edit_en: 5900.0,
      value_edit_ru: 5900.0,
      value_edit_es: 5900.0,
      destination: 'Tokio',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 94565,
      country: 'China',
      value: 2900.0,
      value_pt: 2900.0,
      value_en: 2900.0,
      value_ru: 2900.0,
      value_es: 2900.0,
      value_edit_pt: 2900.0,
      value_edit_en: 2900.0,
      value_edit_ru: 2900.0,
      value_edit_es: 2900.0,
      destination: 'Beijing',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 32330,
      country: 'England',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'London',
      status: 'available',
      region: 'British Isle',
    },
    {
      id: 14560,
      country: 'Canada',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'Quebec',
      status: 'available',
      region: 'North America',
    },
    {
      id: 93800,
      country: 'Iceland',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Reykjav\xEDk',
      status: 'available',
      region: 'Nordics',
    },
    {
      id: 34239,
      country: 'Germany',
      value: 3070.5,
      value_pt: 3070.5,
      value_en: 3070.5,
      value_ru: 3070.5,
      value_es: 3070.5,
      value_edit_pt: 3070.5,
      value_edit_en: 3070.5,
      value_edit_ru: 3070.5,
      value_edit_es: 3070.5,
      destination: 'Berlin',
      status: 'available',
      region: 'Danube',
    },
    {
      id: 45611,
      country: 'Argentina',
      value: 3500.5,
      value_pt: 3500.5,
      value_en: 3500.5,
      value_ru: 3500.5,
      value_es: 3500.5,
      value_edit_pt: 3500.5,
      value_edit_en: 3500.5,
      value_edit_ru: 3500.5,
      value_edit_es: 3500.5,
      destination: 'Ushuaia',
      status: 'reserved',
      region: 'Latin America',
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'available', label: 'Available' },
          { value: 'reserved', label: 'Reserved' },
          { value: 'closed', label: 'Closed' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'region',
      label: 'Region',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe a regi\xE3o referida.',
        keydown: this.onKeyDown.bind(this, 'region'),
      },
    },
    {
      property: 'country',
      label: 'Country',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o pa\xEDs referido.',
        keydown: this.onKeyDown.bind(this, 'country'),
      },
    },
    {
      property: 'destination',
      label: 'Destination',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o destino dentro do pa\xEDs informado.',
        keydown: this.onKeyDown.bind(this, 'destination'),
      },
    },
    {
      property: 'value',
      label: 'Value',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
      },
    },
    {
      property: 'value_en',
      label: 'Value (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'en',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_pt',
      label: 'Value (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'pt',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_ru',
      label: 'Value (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'ru',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_es',
      label: 'Value (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'es',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_edit_en',
      label: 'Value Edit (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'en'
      },
    },
    {
      property: 'value_edit_pt',
      label: 'Value Edit (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'pt'
      },
    },
    {
      property: 'value_edit_ru',
      label: 'Value Edit (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'ru'
      },
    },
    {
      property: 'value_edit_es',
      label: 'Value Edit (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'es'
      },
    },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'value_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_es', aggregate: 'sum', label: 'Total (es)' },
    { field: 'value_edit_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_edit_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_edit_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_edit_es', aggregate: 'sum', label: 'Total (es)' },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  lineActions: Array<ThfTableAction> = [
    {
      label: 'Detalhes',
      action: (e: any) => {
        this.poNotificationService.success('Item ' + e.id + ' com destino a ' + e.destination + ' no valor de ' + e.value)
      },
      icon: 'ICON_INFO'
    }
  ];

  customBulkActions: Array<PoDropdownAction> = [
    { label: 'Editar selecionados (custom action)', action: this.editSelected.bind(this) },
    { label: 'Excluir selecionados (custom action)', action: this.bulkDelete.bind(this) }
  ]

  editColumnsFilter: Array<any> = [];
  editColumnsFilterValues: Array<string> = [];

  bulkEditModalConfirm: PoModalAction = {
    label: 'Confirmar',
    action: this.bulkEdit.bind(this)
  };

  constructor(private readonly poNotificationService: PoNotificationService) {}

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          region: new FormControl(dataItem.region, [Validators.required]),
          country: new FormControl(dataItem.country, [Validators.required]),
          destination: new FormControl(dataItem.destination, [Validators.required]),
          value: new FormControl(dataItem.value, [Validators.required]),
          value_en: new FormControl(dataItem.value_en, [Validators.required]),
          value_pt: new FormControl(dataItem.value_pt, [Validators.required]),
          value_ru: new FormControl(dataItem.value_ru, [Validators.required]),
          value_es: new FormControl(dataItem.value_es, [Validators.required]),
          value_edit_en: new FormControl(dataItem.value_edit_en, [Validators.required]),
          value_edit_pt: new FormControl(dataItem.value_edit_pt, [Validators.required]),
          value_edit_ru: new FormControl(dataItem.value_edit_ru, [Validators.required]),
          value_edit_es: new FormControl(dataItem.value_edit_es, [Validators.required]),
        });
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  editSelected() {
    const editableColumns = this.columnWithItems.filter(
      (column) => ['status', 'value'].includes(column.property)
    );
    
    this.editColumnsFilter = editableColumns.map((column) => ({
      label: column.label,
      value: column.property,
      property: column.property,
      valueModel: '',
      required: column.editProperties?.required,
      editProperties: column.editProperties,
    }));
      
    this.bulkEditModal.open();
  }

  bulkEdit() {
    const selectedItems = this.thfGrid.getSelectedRows();

    const updatedColumns =
      this.editColumnsFilter
        .filter(item => this.editColumnsFilterValues.includes(item.property))
        .filter(item => item.valueModel !== '');

    for (const updatedColumn of updatedColumns) {
      for (const item of selectedItems) {
        item[updatedColumn.property] = updatedColumn.valueModel;
        item.$edited = true;
        this.thfGrid.updateItem(item, item);
        this.thfGrid.unselectRowItem(item);
      }

      updatedColumn.valueModel = '';
    }

    this.editColumnsFilterValues = [];

    this.bulkEditModal.close();
  }

  bulkDelete() {
    const selectedItems = this.thfGrid.getSelectedRows();

    for (const item of selectedItems) {
      item.$removed = true;
      this.thfGrid.updateItem(item, item);
      this.thfGrid.unselectRowItem(item);
    }

    this.poNotificationService.success('Itens exclu\xEDdos com sucesso!');
  }
}
`;var Dn=["modal"],An=["gridComponent"],_n=["bulkEditModal"],kn=(d,C)=>C.property;function qn(d,C){if(d&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),d&2){let a=u();m(2),Se(a.getLabelChangedItems())}}function Fn(d,C){if(d&1){let a=q();i(0,"po-combo",16),h("ngModelChange",function(n){p(a);let l=u(2).$implicit;return f(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let a=u(2).$implicit;s("p-label",De(a.label)),b("ngModel",a.valueModel),s("p-options",a.editProperties.options)("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function In(d,C){if(d&1){let a=q();i(0,"po-decimal",17),h("ngModelChange",function(n){p(a);let l=u(2).$implicit;return f(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let a=u(2).$implicit;s("p-label",De(a.label)),b("ngModel",a.valueModel),s("p-decimals-length",a.editProperties.decimalsLength)("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function Ln(d,C){if(d&1){let a=q();i(0,"po-input",18),h("ngModelChange",function(n){p(a);let l=u(2).$implicit;return f(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let a=u(2).$implicit;s("p-label",De(a.label)),b("ngModel",a.valueModel),s("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function Mn(d,C){if(d&1&&L(0,Fn,1,7,"po-combo",13)(1,In,1,7,"po-decimal",14)(2,Ln,1,6,"po-input",15),d&2){let a,r=u().$implicit;M((a=r.editProperties.componentEditable)==="combo"?0:a==="decimal"?1:2)}}function Rn(d,C){if(d&1&&L(0,Mn,3,1),d&2){let a=C.$implicit,r=u();M(r.editColumnsFilterValues.includes(a.property)?0:-1)}}var Zt=(()=>{class d{constructor(a){this.poNotificationService=a,this.htmlCode=$t,this.tsCode=Jt,this.items=[{id:11234,country:"Brazil",value:1e3,value_pt:1e3,value_en:1e3,value_ru:1e3,value_es:1e3,value_edit_pt:1e3,value_edit_en:1e3,value_edit_ru:1e3,value_edit_es:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",value:5e3,value_pt:5e3,value_en:5e3,value_ru:5e3,value_es:5e3,value_edit_pt:5e3,value_edit_en:5e3,value_edit_ru:5e3,value_edit_es:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",value:3200,value_pt:3200,value_en:3200,value_ru:3200,value_es:3200,value_edit_pt:3200,value_edit_en:3200,value_edit_ru:3200,value_edit_es:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",value:5500,value_pt:5500,value_en:5500,value_ru:5500,value_es:5500,value_edit_pt:5500,value_edit_en:5500,value_edit_ru:5500,value_edit_es:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:49e3,country:"Russia",value:6700,value_pt:6700,value_en:6700,value_ru:6700,value_es:6700,value_edit_pt:6700,value_edit_en:6700,value_edit_ru:6700,value_edit_es:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",value:2700.49,value_pt:2700.49,value_en:2700.49,value_ru:2700.49,value_es:2700.49,value_edit_pt:2700.49,value_edit_en:2700.49,value_edit_ru:2700.49,value_edit_es:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",value:2e3,value_pt:2e3,value_en:2e3,value_ru:2e3,value_es:2e3,value_edit_pt:2e3,value_edit_en:2e3,value_edit_ru:2e3,value_edit_es:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",value:2100,value_pt:2100,value_en:2100,value_ru:2100,value_es:2100,value_edit_pt:2100,value_edit_en:2100,value_edit_ru:2100,value_edit_es:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",value:1900,value_pt:1900,value_en:1900,value_ru:1900,value_es:1900,value_edit_pt:1900,value_edit_en:1900,value_edit_ru:1900,value_edit_es:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",value:5900,value_pt:5900,value_en:5900,value_ru:5900,value_es:5900,value_edit_pt:5900,value_edit_en:5900,value_edit_ru:5900,value_edit_es:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",value:2900,value_pt:2900,value_en:2900,value_ru:2900,value_es:2900,value_edit_pt:2900,value_edit_en:2900,value_edit_ru:2900,value_edit_es:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",value:3070.5,value_pt:3070.5,value_en:3070.5,value_ru:3070.5,value_es:3070.5,value_edit_pt:3070.5,value_edit_en:3070.5,value_edit_ru:3070.5,value_edit_es:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",value:3500.5,value_pt:3500.5,value_en:3500.5,value_ru:3500.5,value_es:3500.5,value_edit_pt:3500.5,value_edit_en:3500.5,value_edit_ru:3500.5,value_edit_es:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_en",label:"Value (en)",type:"currency",format:"USD",width:220,locale:"en",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_pt",label:"Value (pt)",type:"currency",format:"USD",width:220,locale:"pt",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_ru",label:"Value (ru)",type:"currency",format:"USD",width:220,locale:"ru",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_es",label:"Value (es)",type:"currency",format:"USD",width:220,locale:"es",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_edit_en",label:"Value Edit (en)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"en"}},{property:"value_edit_pt",label:"Value Edit (pt)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"pt"}},{property:"value_edit_ru",label:"Value Edit (ru)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"ru"}},{property:"value_edit_es",label:"Value Edit (es)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"es"}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"value_en",aggregate:"sum",label:"Total (en)"},{field:"value_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_es",aggregate:"sum",label:"Total (es)"},{field:"value_edit_en",aggregate:"sum",label:"Total (en)"},{field:"value_edit_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_edit_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_edit_es",aggregate:"sum",label:"Total (es)"}],this.itemsUpdated=[],this.lineActions=[{label:"Detalhes",action:r=>{this.poNotificationService.success("Item "+r.id+" com destino a "+r.destination+" no valor de "+r.value)},icon:"ICON_INFO"}],this.customBulkActions=[{label:"Editar selecionados (custom action)",action:this.editSelected.bind(this)},{label:"Excluir selecionados (custom action)",action:this.bulkDelete.bind(this)}],this.editColumnsFilter=[],this.editColumnsFilterValues=[],this.bulkEditModalConfirm={label:"Confirmar",action:this.bulkEdit.bind(this)}}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),new B({status:new S(a.status,[F.min(1)]),region:new S(a.region,[F.required]),country:new S(a.country,[F.required]),destination:new S(a.destination,[F.required]),value:new S(a.value,[F.required]),value_en:new S(a.value_en,[F.required]),value_pt:new S(a.value_pt,[F.required]),value_ru:new S(a.value_ru,[F.required]),value_es:new S(a.value_es,[F.required]),value_edit_en:new S(a.value_edit_en,[F.required]),value_edit_pt:new S(a.value_edit_pt,[F.required]),value_edit_ru:new S(a.value_edit_ru,[F.required]),value_edit_es:new S(a.value_edit_es,[F.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}editSelected(){let a=this.columnWithItems.filter(r=>["status","value"].includes(r.property));this.editColumnsFilter=a.map(r=>({label:r.label,value:r.property,property:r.property,valueModel:"",required:r.editProperties?.required,editProperties:r.editProperties})),this.bulkEditModal.open()}bulkEdit(){let a=this.thfGrid.getSelectedRows(),r=this.editColumnsFilter.filter(n=>this.editColumnsFilterValues.includes(n.property)).filter(n=>n.valueModel!=="");for(let n of r){for(let l of a)l[n.property]=n.valueModel,l.$edited=!0,this.thfGrid.updateItem(l,l),this.thfGrid.unselectRowItem(l);n.valueModel=""}this.editColumnsFilterValues=[],this.bulkEditModal.close()}bulkDelete(){let a=this.thfGrid.getSelectedRows();for(let r of a)r.$removed=!0,this.thfGrid.updateItem(r,r),this.thfGrid.unselectRowItem(r);this.poNotificationService.success("Itens exclu\xEDdos com sucesso!")}static{this.\u0275fac=function(r){return new(r||d)(V(ve))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(r,n){if(r&1&&I(Dn,7)(An,5)(_n,7),r&2){let l;D(l=A())&&(n.poModal=l.first),D(l=A())&&(n.thfGrid=l.first),D(l=A())&&(n.bulkEditModal=l.first)}},standalone:!1,decls:18,vars:21,consts:[["gridComponent",""],["modal",""],["bulkEditModal",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-selectable-entire-line","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions","t-actions-right","t-sortable","t-action-pdf","t-action-excel","t-custom-actions"],["p-title","Itens que foram alterados"],[1,"code"],["p-title","Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)",3,"p-primary-action"],["name","editColumnsFilterValues","p-label","Propriedades para Editar",3,"ngModelChange","ngModel","p-options"],[3,"htmlCode","tsCode"],[3,"p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-required","p-placeholder","p-disabled"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",3),e(2,"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote"),t(),o(3,"po-divider"),i(4,"div",4)(5,"po-button",5),g("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(6,"po-button",6),g("p-click",function(){return p(l),c(n.poModal.open())}),t()(),o(7,"thf-grid",7,0),i(9,"po-modal",8,1),L(11,qn,3,1,"div",9),t(),i(12,"po-modal",10,2)(14,"po-multiselect",11),h("ngModelChange",function(y){return p(l),f(n.editColumnsFilterValues,y)||(n.editColumnsFilterValues=y),c(y)}),t(),Te(15,Rn,1,1,null,null,kn),t(),o(17,"app-code-accordion-doc",12),t()}if(r&2){let l,E;m(6),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-selectable-entire-line",!1)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions",n.lineActions)("t-actions-right",!0)("t-sortable",!0)("t-action-pdf",!0)("t-action-excel",!0)("t-custom-actions",n.customBulkActions),m(4),M((E=n.getChangedItems())!=null&&E.length?11:-1),m(),s("p-primary-action",n.bulkEditModalConfirm),m(2),b("ngModel",n.editColumnsFilterValues),s("p-options",n.editColumnsFilter),m(),we(n.editColumnsFilter),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,U,W,v,P,St,bt,me,Fe,qe,R,T],encapsulation:2})}}return d})();var Xt=`<thf-grid
    [t-items]="products"
    [t-columns]="columns"
    [t-grid-row-actions]="gridRowActions"
    [t-auto-size]="true"
    [t-actions-right]="true"
  />


`,Yt=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridRowActions
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-dynamic-properties',
  templateUrl: './thf-grid-dynamic-properties.component.html',
  standalone: false,
})
export class ThfGridDynamicPropertiesComponent {
gridRowActions: ThfGridRowActions;
  editForm!: FormGroup;

  products = [
    { 
      id: 1, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Smartphone', 
      price: 999.99, 
      discount: 0, 
    },
    { 
      id: 2, 
      status: { value: 'inactive', label: 'Inativo' },
      name: 'Tablet', 
      price: 499.99, 
      discount: 50, 
    },
    { 
      id: 3, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Office Chair', 
      price: 299.99, 
      discount: 10, 
    }
  ];

  columns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'ID',
      editProperties: {
        disabled: true
      }
    },
    {
      property: 'status',
      label: 'Status',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: 'active', label: 'Ativo' },
          { value: 'inactive', label: 'Inativo' }
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      }
    },
    {
      property: 'name',
      label: 'Nome do Produto',
      editProperties: {
        readonly: (rowData) => rowData.status === 'inactive'
      }
    },
    {
      property: 'price',
      label: 'Pre\xE7o',
      editProperties: {
        readonly: true
      }
    },
    {
      property: 'discount',
      label: 'Desconto (%)',
      editProperties: {
        disabled: (rowData) => rowData.status === 'inactive'
      }
    },
  ];

  constructor() {
    this.gridRowActions = {
      title: 'Produtos',
      actionEdit: this.onEdit.bind(this),
      validateField: this.onValidate.bind(this),
    };
  }

  onEdit(dataItem: any, mode: string) {
    console.log('Editando produto:', dataItem, 'Modo:', mode);

    this.editForm = new FormGroup({
      id: new FormControl(dataItem.id),
      name: new FormControl(dataItem.name),
      price: new FormControl(dataItem.price),
      discount: new FormControl(dataItem.discount),
      status: new FormControl(dataItem.status),
    });

    return this.editForm;
  }

  onValidate(updatedField: any, columnProperty: any) {
    console.log('onValidateField:', updatedField, columnProperty);
    return true;
  }
}

`;var ei=(()=>{class d{constructor(){this.htmlCode=Xt,this.tsCode=Yt,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:a=>a.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:a=>a.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(a,r){return console.log("Editando produto:",a,"Modo:",r),this.editForm=new B({id:new S(a.id),name:new S(a.name),price:new S(a.price),discount:new S(a.discount),status:new S(a.status)}),this.editForm}onValidate(a,r){return console.log("onValidateField:",a,r),!0}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-items",n.products)("t-columns",n.columns)("t-grid-row-actions",n.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,R,T],encapsulation:2})}}return d})();var ti=`<thf-grid
      #gridComponent
      t-spacing="extraSmall"
      t-components-size="small"
      [t-columns]="columnWithItems"
      [t-items]="items"
      [t-height]="500"
      [t-page-size-virtual]="20"
      [t-virtual-scroll]="true"
      [t-resizable]="true"
      [t-auto-size]="true"
      [t-auto-size-on-scroll]="true"
    />

`,ii=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ThfGridColumn,
  ThfGridComponent
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-auto-fit-scroll',
  templateUrl: './thf-grid-auto-fit-scroll.component.html',
  standalone: false,
})
export class ThfGridAutoFitScrollComponent implements OnInit {
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    {
      property: 'values',
      label: 'Values',
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
    },
    {
      property: 'datepicker',
      label: 'datepicker',
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
    },
    {
      property: 'select',
      label: 'select',
    },
    {
      property: 'switch',
      label: 'switch',
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
    },
    {
      property: 'checkbox',
      label: 'checkbox',
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];


  ngOnInit() {
    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 100; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\${i}\`,
      };
      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;
  }
}

`;var jn=["gridComponent"],ni=(()=>{class d{constructor(){this.htmlCode=ti,this.tsCode=ii,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let a=[],r=this.items[0];for(let n=1;n<=100;n++){let l=Date.now()+n,E=N(j({},r),{id:l+n,name:`${r.name} ${n}${n}`});a.push(E)}this.items=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(r,n){if(r&1&&I(jn,5),r&2){let l;D(l=A())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-columns",n.columnWithItems)("t-items",n.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,R,T],encapsulation:2})}}return d})();var oi=`<thf-splitter [t-disabled]="true">
  <thf-splitter-pane>
    <thf-grid
      #mainGrid
      [t-items]="mainGridItems"
      [t-columns]="mainGridColumns"
      [t-grid-row-actions]="mainGridRowsActions"
      [t-actions-right]="true"
      [t-selectable]="true"
      [t-single-select]="true"
      [t-selectable-removed]="true"
      [t-selectable-entire-line]="false"
      [t-height]="320"
      (t-selected)="handleMainGridSelection($event)"
      (t-unselected)="handleMainGridUnselection($event)"
      (t-change-row-state-filter)="onMainGridRowStateFilter($event)"
    />
  </thf-splitter-pane>
  <thf-splitter-pane>
    <thf-grid
      #childGrid
      [t-items]="mainGridSelectedItemIndex !== undefined ? mainGridItems[mainGridSelectedItemIndex].heroes : []"
      [t-columns]="childGridColumns"
      [t-grid-row-actions]="childGridRowsActions"
      [t-disabled-include-button]="childGridDisabledIncludeButton"
      [t-actions-right]="true"
      [t-selectable]="false"
      [t-single-select]="false"
      [t-height]="320"
    />
  </thf-splitter-pane>
</thf-splitter>`,ai=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-parent-detail-editing-doc',
  templateUrl: './thf-grid-parent-detail-editing.component.html',
  styleUrls: ['./thf-grid-parent-detail-editing.component.css'],
  standalone: false,
})
export class ThfGridParentDetailEditingComponent {
  @ViewChild('mainGrid', { static: false }) mainGrid!: ThfGridComponent;
  @ViewChild('childGrid', { static: false }) childGrid!: ThfGridComponent;

  mainGridTitle = 'Equipes (Tabela Pai)';
  childGridTitle = 'Her\xF3is (Tabela Filha)';

  disabledIncludeButton: boolean = false;
  currentIdItem: string | number | undefined;

  mainGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da equipe'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'color-11', label: 'Ativo' },
        { value: 'em-missao', color: 'color-09', label: 'Em miss\xE3o' },
        { value: 'inativo', color: 'color-06', label: 'Inativo' },
        { value: 'ferido', color: 'color-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  mainGridRowsActions!: ThfGridRowActions;
  mainGridItems: Array<any> = [
    {
      id: 1,
      name: 'Vingadores',
      status: 'ativo',
      heroes: [
        { id: 11, name: 'Homem de Ferro', status: 'ativo' },
        { id: 12, name: 'Capit\xE3o Am\xE9rica', status: 'em-missao' },
        { id: 13, name: 'Thor', status: 'ativo' }
      ]
    },
    {
      id: 2,
      name: 'X-man',
      status: 'em-missao',
      heroes: [
        { id: 21, name: 'Wolverine', status: 'ativo' },
        { id: 22, name: 'Ciclope', status: 'reserva' },
        { id: 23, name: 'Jean Grey', status: 'ferido' }
      ]
    },
    {
      id: 3,
      name: 'Jovens Tit\xE3s',
      status: 'ativo',
      heroes: [
        { id: 30, name: 'Ciborgue', status: 'ativo' },
        { id: 31, name: 'Estelar', status: 'ativo' },
        { id: 32, name: 'Mutano', status: 'ativo' },
        { id: 33, name: 'Ravena', status: 'reserva' },
        { id: 34, name: 'Robin', status: 'ativo' },
      ]
    },
    {
      id: 4,
      name: 'Liga da Justi\xE7a',
      status: 'ativo',
      heroes: [
        { id: 41, name: 'Superman', status: 'ativo' },
        { id: 42, name: 'Batman', status: 'reserva' },
        { id: 43, name: 'Mulher Maravilha', status: 'em-missao' }
      ]
    }
  ];
  mainGridItemsUpdated: Array<any> = [];
  mainGridSelectedItem: any;
  mainGridSelectedItemIndex: number | undefined;

  childGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da empresa'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'color-11', label: 'Ativo' },
        { value: 'em-missao', color: 'color-09', label: 'Em miss\xE3o' },
        { value: 'reserva', color: 'color-08', label: 'Reserva' },
        { value: 'inativo', color: 'color-06', label: 'Inativo' },
        { value: 'ferido', color: 'color-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'reserva', label: 'Reserva' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  childGridRowsActions!: ThfGridRowActions;
  childGridItemsUpdated: Array<any> = [];
  childGridSelectedItem: any;
  childGridDisabledIncludeButton: boolean = true;

  constructor(private readonly notificationService: PoNotificationService) {}

  ngOnInit() {
    this.mainGridRowsActions = {
      title: this.mainGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      afterRemove: this.afterRemoveMainGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveMainGrid.bind(this)
    };

    this.mainGridItemsUpdated = [...this.mainGridItems];

    this.childGridRowsActions = {
      title: this.childGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      change: this.changeChildGrid.bind(this),
      beforeUndoRemove: this.beforeUndoRemoveChildGrid.bind(this),
      afterRemove: this.afterRemoveChildGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveChildGrid.bind(this),
    };

    this.childGridItemsUpdated = [];
  }

  handleMainGridSelection(event: any) {
    console.log('Selected item from main grid: ', event);
    this.mainGridSelectedItem = event;
    this.mainGridSelectedItemIndex = this.mainGridItems.findIndex(item => item.id === event.id);
    this.childGridItemsUpdated = event.heroes ? [...event.heroes] : [];
    this.childGridDisabledIncludeButton = !!event.$removed;
    this.childGridRowsActions.title = this.childGridTitle + ' - ' + event.name;

    if (event.$removed) {
      this.childGrid.setRowStateFilter('removed', false, false);
    } else {
      this.childGrid.setRowStateFilter('active', false, false);
    }
  }

  handleMainGridUnselection(event?: any) {
    console.log('Unselected item from main grid: ', event);
    this.mainGridSelectedItem = {
      id: null,
      heroes: []
    };
    this.mainGridSelectedItemIndex = undefined;
    this.childGridItemsUpdated = [];
    this.childGridDisabledIncludeButton = true;
    this.childGridRowsActions.title = this.childGridTitle;
  }

  afterRemoveMainGrid(removedItem: any) {
    console.log('Removed item from main grid: ', removedItem);
    removedItem.status = 'inativo';
    removedItem.heroes.forEach((hero: any) => {
      hero.$removed = true;
      hero.status = 'inativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  afterUndoRemoveMainGrid(undoRemovedItem: any) {
    console.log('Undo removed item from main grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    undoRemovedItem.heroes.forEach((hero: any) => {
      hero.$removed = false;
      hero.status = 'ativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  beforeUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Before undo remove item from child grid: ', undoRemovedItem);
    const isParentInactive = this.mainGridItems.find(item => item.heroes.includes(undoRemovedItem))?.$removed;
    if (isParentInactive) {
      this.notificationService.warning('N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo.');
      return false;
    }
    return true;
  }

  afterRemoveChildGrid(removedItem: any) {
    console.log('Removed item from child grid: ', removedItem);
    removedItem.status = 'inativo';
    this.childGrid.updateItem(removedItem, removedItem);
  }

  afterUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Undo removed item from child grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    this.childGrid.updateItem(undoRemovedItem, undoRemovedItem);
  }

  changeChildGrid(changedItems: any) {
    console.log('Child grid change event: ', changedItems);
  }

  onMainGridRowStateFilter(filter: any) {
    // Aplica novamente a sele\xE7\xE3o do item
    if (
      this.mainGridSelectedItem !== undefined && (
        (filter === 'active' && !this.mainGridSelectedItem?.$removed) ||
        (filter === 'removed' && this.mainGridSelectedItem?.$removed)
      )
    ) {
      this.mainGrid.selectRowItem(this.mainGridSelectedItem);
    }

    this.childGrid.setRowStateFilter(filter, false, false);
  }
}
`;var Gn=["mainGrid"],Nn=["childGrid"],Qn=()=>[],ri=(()=>{class d{constructor(a){this.notificationService=a,this.htmlCode=oi,this.tsCode=ai,this.mainGridTitle="Equipes (Tabela Pai)",this.childGridTitle="Her\xF3is (Tabela Filha)",this.disabledIncludeButton=!1,this.mainGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da equipe"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"color-11",label:"Ativo"},{value:"em-missao",color:"color-09",label:"Em miss\xE3o"},{value:"inativo",color:"color-06",label:"Inativo"},{value:"ferido",color:"color-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.mainGridItems=[{id:1,name:"Vingadores",status:"ativo",heroes:[{id:11,name:"Homem de Ferro",status:"ativo"},{id:12,name:"Capit\xE3o Am\xE9rica",status:"em-missao"},{id:13,name:"Thor",status:"ativo"}]},{id:2,name:"X-man",status:"em-missao",heroes:[{id:21,name:"Wolverine",status:"ativo"},{id:22,name:"Ciclope",status:"reserva"},{id:23,name:"Jean Grey",status:"ferido"}]},{id:3,name:"Jovens Tit\xE3s",status:"ativo",heroes:[{id:30,name:"Ciborgue",status:"ativo"},{id:31,name:"Estelar",status:"ativo"},{id:32,name:"Mutano",status:"ativo"},{id:33,name:"Ravena",status:"reserva"},{id:34,name:"Robin",status:"ativo"}]},{id:4,name:"Liga da Justi\xE7a",status:"ativo",heroes:[{id:41,name:"Superman",status:"ativo"},{id:42,name:"Batman",status:"reserva"},{id:43,name:"Mulher Maravilha",status:"em-missao"}]}],this.mainGridItemsUpdated=[],this.childGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da empresa"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"color-11",label:"Ativo"},{value:"em-missao",color:"color-09",label:"Em miss\xE3o"},{value:"reserva",color:"color-08",label:"Reserva"},{value:"inativo",color:"color-06",label:"Inativo"},{value:"ferido",color:"color-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"reserva",label:"Reserva"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0}ngOnInit(){this.mainGridRowsActions={title:this.mainGridTitle,hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.heroes=[],this.currentIdItem=a.id),new B({name:new S(a.name,[F.required]),status:new S(a.status,[F.min(1)])})),afterRemove:this.afterRemoveMainGrid.bind(this),afterUndoRemove:this.afterUndoRemoveMainGrid.bind(this)},this.mainGridItemsUpdated=[...this.mainGridItems],this.childGridRowsActions={title:this.childGridTitle,hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.heroes=[],this.currentIdItem=a.id),new B({name:new S(a.name,[F.required]),status:new S(a.status,[F.min(1)])})),change:this.changeChildGrid.bind(this),beforeUndoRemove:this.beforeUndoRemoveChildGrid.bind(this),afterRemove:this.afterRemoveChildGrid.bind(this),afterUndoRemove:this.afterUndoRemoveChildGrid.bind(this)},this.childGridItemsUpdated=[]}handleMainGridSelection(a){console.log("Selected item from main grid: ",a),this.mainGridSelectedItem=a,this.mainGridSelectedItemIndex=this.mainGridItems.findIndex(r=>r.id===a.id),this.childGridItemsUpdated=a.heroes?[...a.heroes]:[],this.childGridDisabledIncludeButton=!!a.$removed,this.childGridRowsActions.title=this.childGridTitle+" - "+a.name,a.$removed?this.childGrid.setRowStateFilter("removed",!1,!1):this.childGrid.setRowStateFilter("active",!1,!1)}handleMainGridUnselection(a){console.log("Unselected item from main grid: ",a),this.mainGridSelectedItem={id:null,heroes:[]},this.mainGridSelectedItemIndex=void 0,this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0,this.childGridRowsActions.title=this.childGridTitle}afterRemoveMainGrid(a){console.log("Removed item from main grid: ",a),a.status="inativo",a.heroes.forEach(r=>{r.$removed=!0,r.status="inativo",this.childGrid.updateItem(r,r)})}afterUndoRemoveMainGrid(a){console.log("Undo removed item from main grid: ",a),a.status="ativo",a.heroes.forEach(r=>{r.$removed=!1,r.status="ativo",this.childGrid.updateItem(r,r)})}beforeUndoRemoveChildGrid(a){return console.log("Before undo remove item from child grid: ",a),this.mainGridItems.find(n=>n.heroes.includes(a))?.$removed?(this.notificationService.warning("N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo."),!1):!0}afterRemoveChildGrid(a){console.log("Removed item from child grid: ",a),a.status="inativo",this.childGrid.updateItem(a,a)}afterUndoRemoveChildGrid(a){console.log("Undo removed item from child grid: ",a),a.status="ativo",this.childGrid.updateItem(a,a)}changeChildGrid(a){console.log("Child grid change event: ",a)}onMainGridRowStateFilter(a){this.mainGridSelectedItem!==void 0&&(a==="active"&&!this.mainGridSelectedItem?.$removed||a==="removed"&&this.mainGridSelectedItem?.$removed)&&this.mainGrid.selectRowItem(this.mainGridSelectedItem),this.childGrid.setRowStateFilter(a,!1,!1)}static{this.\u0275fac=function(r){return new(r||d)(V(ve))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-parent-detail-editing-doc"]],viewQuery:function(r,n){if(r&1&&I(Gn,5)(Nn,5),r&2){let l;D(l=A())&&(n.mainGrid=l.first),D(l=A())&&(n.childGrid=l.first)}},standalone:!1,decls:12,vars:21,consts:[["mainGrid",""],["childGrid",""],[1,"po-font-text-large-bold"],[3,"t-disabled"],[3,"t-selected","t-unselected","t-change-row-state-filter","t-items","t-columns","t-grid-row-actions","t-actions-right","t-selectable","t-single-select","t-selectable-removed","t-selectable-entire-line","t-height"],[3,"t-items","t-columns","t-grid-row-actions","t-disabled-include-button","t-actions-right","t-selectable","t-single-select","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)"),t(),o(3,"po-divider"),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"thf-grid",4,0),g("t-selected",function(y){return p(l),c(n.handleMainGridSelection(y))})("t-unselected",function(y){return p(l),c(n.handleMainGridUnselection(y))})("t-change-row-state-filter",function(y){return p(l),c(n.onMainGridRowStateFilter(y))}),t()(),i(8,"thf-splitter-pane"),o(9,"thf-grid",5,1),t()(),o(11,"app-code-accordion-doc",6),t()}r&2&&(m(4),s("t-disabled",!0),m(2),s("t-items",n.mainGridItems)("t-columns",n.mainGridColumns)("t-grid-row-actions",n.mainGridRowsActions)("t-actions-right",!0)("t-selectable",!0)("t-single-select",!0)("t-selectable-removed",!0)("t-selectable-entire-line",!1)("t-height",320),m(3),s("t-items",n.mainGridSelectedItemIndex!==void 0?n.mainGridItems[n.mainGridSelectedItemIndex].heroes:Z(20,Qn))("t-columns",n.childGridColumns)("t-grid-row-actions",n.childGridRowsActions)("t-disabled-include-button",n.childGridDisabledIncludeButton)("t-actions-right",!0)("t-selectable",!1)("t-single-select",!1)("t-height",320),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,R,le,re,T],encapsulation:2})}}return d})();var li=`<thf-grid
  #gridComponent
  t-spacing="small"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-single-select]="true"
  [t-columns]="columnWithItems"
  [t-items]="items"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-auto-size]="false"
  [t-height]="500"
  [t-virtual-columns]="true"
  [t-virtual-scroll]="true"
/>`,di=`import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-virtual-doc',
  templateUrl: './thf-grid-virtual-doc.component.html',
  standalone: false,
})
export class ThfGridVirtualDocComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  gridRowsActionsWithItems!: ThfGridRowActions;

columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      filter: true,
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      filter: true,
      editProperties: {
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        keydown: this.onKeyDown.bind(this, 'name'),
      },
    },
    {
      property: 'status',
      label: 'Status',
      filter: true,
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        required: true,
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'values',
      label: 'Values',
      filter: true,
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: false,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'values'),
        controlValueWithLabel: true,
      },
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
      filter: true,
      editProperties: {
        componentEditable: 'number',
        errorMessage: 'Number \xE9 obrigat\xF3rio',
        help: 'Input number',
        helper: 'Digite um n\xFAmero aqui',
      },
    },
    {
      property: 'datepicker',
      label: 'datepicker',
      filter: true,
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        errorMessage: 'Datepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a data',
        helper: 'Valor do tipo date',
      },
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
      filter: true,
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        errorMessage: 'Obrigat\xF3rio',
        helper: 'Marque um ou mais status, conforme necess\xE1rio.',
        help: 'status',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
        controlValueWithLabel: true,
      },
    },
    {
      property: 'select',
      label: 'select',
      filter: true,
      editProperties: {
        componentEditable: 'select',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        errorMessage: 'select \xE9 obrigat\xF3rio',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'switch',
      label: 'switch',
      filter: true,
      type: 'boolean',
      editProperties: {
        componentEditable: 'switch',
        hideLabelStatus: false,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'checkbox',
      label: 'checkbox',
      filter: true,
      type: 'boolean',
      editProperties: {
        componentEditable: 'checkbox',
        disabled: false,
        help: 'lorem impsum',
        helper: ' ok ok ok',
      },
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
      filter: true,
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'valuesx'),
        controlValueWithLabel: true,
      },
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: false,
      decimal: 223.45,
      checkbox: false,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 323.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: false,
      decimal: 423.45,
      checkbox: false,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 523.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: false,
      decimal: 623.456,
      checkbox: false,
    },
  ];

  form!: FormGroup;
  itemsUpdated: Array<any> = [];
  editProperties!: ThfGridEditProperties;
  currentIdItem: any;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };

    for (let i = 1; i <= 600; i++) {
      const prop = \`property\` + i;
      this.columnWithItems.push({
        property: prop,
        label: \`Dynamic\` + i,
        editProperties: { disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\`,
      };
      for (let j = 1; j <= 600; j++) {
        newItem[\`property\${j}\`] = \`Valor \${j}\`;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = [...this.items, ...itemsUpdatedNew];

    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        let group: any = {
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          valuesx: new FormControl(dataItem.valuesx, [Validators.required]),
          otherStatus: new FormControl(dataItem.otherStatus),
          number: new FormControl(dataItem.number),
          datepicker: new FormControl(dataItem.datepicker),
          select: new FormControl(dataItem.select),
          switch: new FormControl(dataItem.switch),
          decimal: new FormControl(dataItem.decimal),
          checkbox: new FormControl(dataItem.checkbox),
        };
        for (let i = 1; i <= 600; i++) {
          group[\`property\${i}\`] = new FormControl(dataItem[\`property\${i}\`]);
        }

        this.form = new FormGroup(group);
        return this.form;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
      status: new FormControl(dataItem.status),
      email: new FormControl(dataItem.email),
    });
    return this.form;
  }
}
`;var Hn=["gridComponent"],mi=(()=>{class d{constructor(){this.htmlCode=li,this.tsCode=di,this.columnWithItems=[{property:"id",label:"id",filter:!0,editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0,editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",filter:!0,labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",helper:"Informe pelo menos o primeiro nome.",help:"Input text",controlValueWithLabel:!0}},{property:"values",label:"Values",filter:!0,editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",filter:!0,editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",helper:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",filter:!0,type:"date",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",helper:"Valor do tipo date"}},{property:"otherStatus",label:"Outro Status",filter:!0,editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",helper:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",filter:!0,editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",filter:!0,type:"boolean",editProperties:{componentEditable:"switch",hideLabelStatus:!1,helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",filter:!0,editProperties:{componentEditable:"decimal",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",filter:!0,type:"boolean",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",helper:" ok ok ok"}},{property:"valuesx",label:"Valuesx",filter:!0,editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!1,decimal:223.45,checkbox:!1},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:323.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!1,decimal:423.45,checkbox:!1},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:523.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!1,decimal:623.456,checkbox:!1}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let n=1;n<=600;n++){let l=`property${n}`;this.columnWithItems.push({property:l,label:`Dynamic ${n}`,editProperties:{disabled:!1}})}let a=[],r=this.items[0];for(let n=1;n<=1e4;n++){let l=Date.now()+n,E=N(j({},r),{id:l+n,name:`${r.name} ${n}`});for(let y=1;y<=600;y++)E[`property${y}`]=`Valor ${y}`;a.push(E)}this.items=[...this.items,...a],this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(n,l)=>{l==="include"&&!n.id&&(console.log("mode: ",l),n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id);let E={name:new S(n.name),status:new S(n.status,[F.min(1)]),values:new S(n.values,[F.required]),valuesx:new S(n.values,[F.required]),otherStatus:new S(n.otherStatus),number:new S(n.number),datepicker:new S(n.datepicker),select:new S(n.select),switch:new S(n.switch),decimal:new S(n.decimal),checkbox:new S(n.checkbox)};for(let y=1;y<=600;y++)E[`property${y}`]=new S(n[`property${y}`]);return this.form=new B(E),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterSave(a){console.log("onAfterSave(new): ",a)}onAfterRemove(a){return console.log("afterRemove: ",a),!0}setFormGroup(a){return this.form=new B({id:new S(a.id,[F.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate),status:new S(a.status),email:new S(a.email)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(r,n){if(r&1&&I(Hn,5),r&2){let l;D(l=A())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:13,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-selectable-entire-line","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-selectable",!0)("t-selectable-entire-line",!1)("t-single-select",!0)("t-columns",n.columnWithItems)("t-items",n.items)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,R,T],encapsulation:2})}}return d})();function Un(d,C){d&1&&o(0,"app-thf-grid-basic-doc")}function Kn(d,C){d&1&&o(0,"app-thf-grid-editing-inline-doc")}function $n(d,C){d&1&&o(0,"app-thf-grid-row-actions-doc")}function Jn(d,C){d&1&&o(0,"app-thf-grid-aggregates-doc")}function Zn(d,C){d&1&&o(0,"app-thf-grid-editing-fluid-currency-doc")}function Xn(d,C){d&1&&o(0,"app-thf-grid-delete-service-doc")}function Yn(d,C){d&1&&o(0,"app-thf-grid-virtual-doc")}function eo(d,C){d&1&&o(0,"app-thf-grid-dynamic-properties")}function to(d,C){d&1&&o(0,"app-thf-grid-auto-fit-scroll")}function io(d,C){d&1&&o(0,"app-thf-grid-parent-detail-editing-doc")}var si=(()=>{class d{constructor(){this.samples=[{label:"Basic Service",value:"basic"},{label:"Edi\xE7\xE3o em Linha",value:"editing-inline"},{label:"Edi\xE7\xE3o Flu\xEDda",value:"row-actions"},{label:"Totalizador e Filtro por Colunas",value:"aggregates"},{label:"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote",value:"editing-fluid-currency"},{label:"Grid Dele\xE7\xE3o com Servi\xE7o Customizado",value:"delete-service"},{label:"Grid utilizando virtual-columns e virtual-scroll",value:"virtual"},{label:"Edi\xE7\xE3o com Propriedades din\xE2micas",value:"dynamic-properties"},{label:"Grid utilizando auto-size e auto-fit-on-scroll",value:"auto-fit-scroll"},{label:"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)",value:"parent-detail-editing"}],this.activeSample="basic"}setActiveSample(a){this.activeSample=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid"]],standalone:!1,decls:16,vars:12,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["p-label","Selecione um exemplo",3,"ngModelChange","ngModel","p-options"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1)(3,"po-select",2),h("ngModelChange",function(E){return f(n.activeSample,E)||(n.activeSample=E),E}),t(),L(4,Un,1,0,"app-thf-grid-basic-doc"),L(5,Kn,1,0,"app-thf-grid-editing-inline-doc"),L(6,$n,1,0,"app-thf-grid-row-actions-doc"),L(7,Jn,1,0,"app-thf-grid-aggregates-doc"),L(8,Zn,1,0,"app-thf-grid-editing-fluid-currency-doc"),L(9,Xn,1,0,"app-thf-grid-delete-service-doc"),L(10,Yn,1,0,"app-thf-grid-virtual-doc"),L(11,eo,1,0,"app-thf-grid-dynamic-properties"),L(12,to,1,0,"app-thf-grid-auto-fit-scroll"),L(13,io,1,0,"app-thf-grid-parent-detail-editing-doc"),t(),i(14,"div",3),o(15,"app-thf-grid-labs-doc"),t()()()),r&2&&(m(3),b("ngModel",n.activeSample),s("p-options",n.samples),m(),M(n.activeSample==="basic"?4:-1),m(),M(n.activeSample==="editing-inline"?5:-1),m(),M(n.activeSample==="row-actions"?6:-1),m(),M(n.activeSample==="aggregates"?7:-1),m(),M(n.activeSample==="editing-fluid-currency"?8:-1),m(),M(n.activeSample==="delete-service"?9:-1),m(),M(n.activeSample==="virtual"?10:-1),m(),M(n.activeSample==="dynamic-properties"?11:-1),m(),M(n.activeSample==="auto-fit-scroll"?12:-1),m(),M(n.activeSample==="parent-detail-editing"?13:-1))},dependencies:[Q,U,ge,oe,Ct,Ft,Mt,jt,Nt,Ht,Kt,Zt,ei,ni,ri,mi],encapsulation:2})}}return d})();function no(d,C){if(d&1){let a=q();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),h("ngModelChange",function(n){p(a);let l=u();return f(l.label,n)||(l.label=n),c(n)}),t(),i(3,"po-input",10),h("ngModelChange",function(n){p(a);let l=u();return f(l.help,n)||(l.help=n),c(n)}),t(),i(4,"po-input",11),h("ngModelChange",function(n){p(a);let l=u();return f(l.helperText,n)||(l.helperText=n),c(n)}),t(),i(5,"po-input",12),h("ngModelChange",function(n){p(a);let l=u();return f(l.placeholder,n)||(l.placeholder=n),c(n)}),t(),i(6,"po-input",13),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),c(n)}),t(),i(7,"po-select",14),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(8,"po-select",15),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(9,"po-input",16),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldFormat,n)||(l.fieldFormat=n),c(n)}),g("p-change",function(n){p(a);let l=u();return c(l.onFieldFormatChange(n))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),h("ngModelChange",function(n){p(a);let l=u();return f(l.columnsName,n)||(l.columnsName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateColumns())}),t(),i(12,"po-checkbox-group",18),h("ngModelChange",function(n){p(a);let l=u();return f(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateGridProperties())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),h("ngModelChange",function(n){p(a);let l=u();return f(l.otherProperties,n)||(l.otherProperties=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeOtherPropertiesOptions())}),t()(),i(15,"po-container",8)(16,"po-radio-group",20),h("ngModelChange",function(n){p(a);let l=u();return f(l.lookupModalSize,n)||(l.lookupModalSize=n),c(n)}),t(),i(17,"po-radio-group",21),h("ngModelChange",function(n){p(a);let l=u();return f(l.searchOnEnter,n)||(l.searchOnEnter=n),c(n)}),t()(),i(18,"po-container",8)(19,"po-radio-group",22),h("ngModelChange",function(n){p(a);let l=u();return f(l.size,n)||(l.size=n),c(n)}),t(),i(20,"po-textarea",23),h("ngModelChange",function(n){p(a);let l=u();return f(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t(),i(21,"po-textarea",24),h("ngModelChange",function(n){p(a);let l=u();return f(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(22,"po-textarea",25),h("ngModelChange",function(n){p(a);let l=u();return f(l.keysLabel,n)||(l.keysLabel=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeKeysLabel())}),t()()(),i(23,"div",26)(24,"po-button",27),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=u();m(2),b("ngModel",a.label),m(),b("ngModel",a.help),m(),b("ngModel",a.helperText),m(),b("ngModel",a.placeholder),m(),b("ngModel",a.fieldErrorMessage),m(),b("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),b("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),b("ngModel",a.fieldFormat),m(2),b("ngModel",a.columnsName),s("p-columns",4)("p-options",a.columnsOptions),m(),b("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),b("ngModel",a.otherProperties),m(2),s("p-columns",3)("p-options",a.lookupModalSizeOptions),b("ngModel",a.lookupModalSize),m(),b("ngModel",a.searchOnEnter),s("p-options",a.searchOnEnterOptions),m(2),b("ngModel",a.size),s("p-options",a.sizesOptions),m(),b("ngModel",a.literals),m(),b("ngModel",a.filterSearchSelect),m(),b("ngModel",a.keysLabel)}}var pi=(()=>{class d{constructor(){this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>

  <thf-lookup
    name="lookup"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-helper]="helperText"
    [t-auto-height]="otherProperties.includes('autoHeight')"
    [t-clean]="otherProperties.includes('clean')"
    [t-columns]="columns"
    [t-disabled]="otherProperties.includes('disabled')"
    [t-error-limit]="otherProperties.includes('fieldErrorLimit')"
    [t-field-error-message]="fieldErrorMessage"
    [t-field-format]="fieldFormat"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-field-error-message]="fieldErrorMessage"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-help]="help"
    [t-keys-label]="customKeysLabel"
    [t-label]="label"
    [t-literals]="customLiterals"
    [t-loading]="otherProperties.includes('loading')"
    [t-modal-size]="lookupModalSize"
    [t-multiple]="otherProperties.includes('multiple')"
    [t-no-autocomplete]="otherProperties.includes('noAutoComplete')"
    [t-optional]="otherProperties.includes('optional')"
    [t-placeholder]="placeholder"
    [t-required]="otherProperties.includes('required')"
    [t-show-required]="otherProperties.includes('showRequired')"
    [t-search-on-enter]="searchOnEnter"
    [t-size]="size"
    [t-label-text-wrap]="otherProperties?.includes('labelTextWrap')"
    (t-change)="changeEvent('t-change')"
    (t-error)="changeEvent('t-error')"
    (t-selected)="changeEvent('t-selected')"
    (t-focus)="changeEvent('t-focus')"
    (t-keydown)="changeEvent('t-keydown')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
    [(ngModel)]="lookupSingle"
  ></thf-lookup>

  <po-container class="po-mt-1" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

    <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-input
          class="po-md-6"
          name="label"
          [(ngModel)]="label"
          p-clean
          p-label="Label"
        ></po-input>
        <po-input
          class="po-md-6"
          name="help"
          [(ngModel)]="help"
          p-clean
          p-label="Help"
        ></po-input>
        <po-input
          class="po-md-6"
          name="helperText"
          [(ngModel)]="helperText"
          p-clean
          p-label="Additional Help"
        >
        </po-input>
        <po-input
          class="po-md-6"
          name="placeholder"
          [(ngModel)]="placeholder"
          p-clean
          p-label="Placeholder"
        ></po-input>

        <po-input
          class="po-md-6"
          name="fieldErrorMessage"
          [(ngModel)]="fieldErrorMessage"
          p-clean
          p-label="Field Error Message"
        ></po-input>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldLabel"
          [(ngModel)]="fieldLabel"
          p-label="Field Label"
          p-required
          [p-options]="fieldLabelOptions"
        ></po-select>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldValue"
          [(ngModel)]="fieldValue"
          p-label="Field Value"
          p-required
          [p-options]="fieldValueOptions"
        ></po-select>

        <po-input
          name="formatField"
          [(ngModel)]="fieldFormat"
          class="po-md-6"
          p-label="Field Format"
          p-help='Ex.: ["id", "name"]'
          (p-change)="onFieldFormatChange($event)"
        >
        </po-input>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          [p-columns]="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        ></po-checkbox-group>
        <po-checkbox-group
          name="gridPropertiesName"
          [(ngModel)]="gridPropertiesName"
          [p-columns]="4"
          p-label="Grid Properties"
          [p-options]="gridPropertiesOptions"
          (p-change)="updateGridProperties()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherPropertiesOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="lookupModalSize"
          p-label="Modal Size"
          [p-columns]="3"
          [p-options]="lookupModalSizeOptions"
          [(ngModel)]="lookupModalSize"
        ></po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="searchOnEnter"
          [(ngModel)]="searchOnEnter"
          p-label="SearchOnEnter"
          [p-options]="searchOnEnterOptions"
        >
        </po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="size"
          [(ngModel)]="size"
          p-label="Size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
          [p-options]="sizesOptions"
        >
        </po-radio-group>

        <po-textarea
          class="po-lg-6"
          name="literals"
          p-label="Literals"
          p-help='{ "modalTitle": "Busca avan\xE7ada" }'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="filterSearchSelect"
          [(ngModel)]="filterSearchSelect"
          (p-change-model)="changeFilterSearchSelects()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
          p-label="Filter Search Select"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="keysLabel"
          [(ngModel)]="keysLabel"
          (p-change-model)="changeKeysLabel()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
          p-label="Keys Label"
        ></po-textarea>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
  `,this.tsCode=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupColumn,
  ThfLookupFilterSearchSelect,
  ThfLookupGridProperties,
  ThfLookupKeysLabel,
  ThfLookupLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-labs-doc',
  templateUrl: './thf-lookup-labs-doc.component.html',
  styleUrl: './thf-lookup-labs-doc.component.css',
  standalone: false,
})
export class ThfLookupLabsDocComponent {
  helperText: string = '';
  columnsName: Array<string> = ['id', 'name', 'nickname', 'email'];
  gridPropertiesName: Array<string> = ['selectableEntireLine', 'showMoreVisible', 'striped', 'sortable', 'virtualScroll'];
  customFilterSearchSelect: Array<ThfLookupFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupKeysLabel> = [];
  customLiterals: ThfLookupLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  help: string = '';
  keysLabel: string = '';
  label: string = '';
  literals: string = '';
  fieldErrorMessage: string = '';
  lookupSingle: any;
  otherProperties: Array<string> = [];
  placeholder: string = '';
  fieldFormat: Array<string> | undefined;
  lookupModalSize: string = 'lg';
  size: string = 'medium';
  searchOnEnter: 'include' | 'equal' = 'equal';

  columns: Array<ThfLookupColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  gridProperties!: ThfLookupGridProperties;

  lookupModalSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: 'auto', value: 'auto' },
  ];

  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Auto Height', value: 'autoHeight' },
    { label: 'Clean', value: 'clean', disabled: false },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Multiple', value: 'multiple' },
    { label: 'No Autocomplete', value: 'noAutoComplete' },
    { label: 'Optional', value: 'optional', disabled: false },
    { label: 'Required', value: 'required' },
    { label: 'Show Required', value: 'showRequired', disabled: true },
    { value: 'fieldErrorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' }
  ];

  searchOnEnterOptions: Array<PoRadioGroupOption> = [
    { label: 'equal', value: 'equal' },
    { label: 'include', value: 'include' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  private readonly columnsDefinition: any = {
    id: <ThfLookupColumn>{ property: 'id', label: 'Id' },
    name: <ThfLookupColumn>{ property: 'name', label: 'Nome' },
    nickname: <ThfLookupColumn>{ property: 'nickname', label: 'Apelido' },
    email: <ThfLookupColumn>{ property: 'email', label: 'E-mail' },
  };

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  changeOtherPropertiesOptions() {
    const multiple = this.otherProperties.includes('multiple');
    const required = this.otherProperties.includes('required');

    this.otherPropertiesOptions[1].disabled = multiple;
    this.otherPropertiesOptions[7].disabled = !required;
    this.otherPropertiesOptions[5].disabled = required;
    this.otherPropertiesOptions = [...this.otherPropertiesOptions];
  }

  onFieldFormatChange(event: any) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name', 'nickname', 'email'];
    this.gridPropertiesName = [
      'selectableEntireLine',
      'showMoreVisible',
      'striped',
      'sortable',
      'virtualScroll',
    ];
    this.customFilterSearchSelect = [];
    this.customKeysLabel = [];
    this.customLiterals = {};
    this.event = '';
    this.fieldErrorMessage = '';
    this.fieldLabel = 'name';
    this.fieldValue = 'value';
    this.filterSearchSelect = '';
    this.help = '';
    this.keysLabel = '';
    this.label = '';
    this.literals = '';
    this.lookupSingle = undefined;
    this.otherProperties = [];
    this.placeholder = '';
    this.fieldFormat = undefined;
    this.size = 'medium';
    this.searchOnEnter = 'equal';
    this.changeFilterSearchSelects();
    this.changeKeysLabel();
    this.changeLiterals();
    this.changeOtherPropertiesOptions();
    this.updateColumns();
    this.updateGridProperties();
    this.lookupModalSize = 'lg';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }

  updateGridProperties() {
    this.gridProperties = {};

    this.gridPropertiesName.forEach((properties) => {
      this.gridProperties = {
        ...this.gridProperties,
        [properties]: true,
      };
    });

    if (!this.gridPropertiesName.includes('sortable')) {
      this.gridProperties = {
        ...this.gridProperties,
        sortable: false,
      };
    }

    if (!this.gridPropertiesName.includes('striped')) {
      this.gridProperties = {
        ...this.gridProperties,
        striped: false,
      };
    }

    if (!this.gridPropertiesName.includes('selectableEntireLine')) {
      this.gridProperties = {
        ...this.gridProperties,
        selectableEntireLine: false,
      };
    }

    if (!this.gridPropertiesName.includes('showMoreVisible')) {
      this.gridProperties = {
        ...this.gridProperties,
        showMoreVisible: false,
      };
    }
  }
}
  `,this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}}}ngOnInit(){this.restore()}changeEvent(a){this.event=a}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}changeOtherPropertiesOptions(){let a=this.otherProperties.includes("multiple"),r=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=a,this.otherPropertiesOptions[7].disabled=!r,this.otherPropertiesOptions[5].disabled=r,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(a){try{this.fieldFormat=JSON.parse(a)}catch{this.fieldFormat=void 0}}restore(){this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.updateGridProperties(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}updateGridProperties(){this.gridProperties={},this.gridPropertiesName.forEach(a=>{this.gridProperties=N(j({},this.gridProperties),{[a]:!0})}),this.gridPropertiesName.includes("sortable")||(this.gridProperties=N(j({},this.gridProperties),{sortable:!1})),this.gridPropertiesName.includes("striped")||(this.gridProperties=N(j({},this.gridProperties),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(this.gridProperties=N(j({},this.gridProperties),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(this.gridProperties=N(j({},this.gridProperties),{showMoreVisible:!1}))}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:34,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-helper","t-auto-height","t-clean","t-columns","t-disabled","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-help","t-keys-label","t-label","t-literals","t-loading","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","t-label-text-wrap","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup",3),g("t-change",function(){return p(l),c(n.changeEvent("t-change"))})("t-error",function(){return p(l),c(n.changeEvent("t-error"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus"))})("t-keydown",function(){return p(l),c(n.changeEvent("t-keydown"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),h("ngModelChange",function(y){return p(l),f(n.lookupSingle,y)||(n.lookupSingle=y),c(y)}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),K(8,no,25,29,"ng-template",null,0,X),t()}if(r&2){let l=$(9);m(4),s("t-helper",n.helperText)("t-auto-height",n.otherProperties.includes("autoHeight"))("t-clean",n.otherProperties.includes("clean"))("t-columns",n.columns)("t-disabled",n.otherProperties.includes("disabled"))("t-error-limit",n.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",n.fieldErrorMessage)("t-field-format",n.fieldFormat)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-field-error-message",n.fieldErrorMessage)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-help",n.help)("t-keys-label",n.customKeysLabel)("t-label",n.label)("t-literals",n.customLiterals)("t-loading",n.otherProperties.includes("loading"))("t-modal-size",n.lookupModalSize)("t-multiple",n.otherProperties.includes("multiple"))("t-no-autocomplete",n.otherProperties.includes("noAutoComplete"))("t-optional",n.otherProperties.includes("optional"))("t-placeholder",n.placeholder)("t-required",n.otherProperties.includes("required"))("t-show-required",n.otherProperties.includes("showRequired"))("t-search-on-enter",n.searchOnEnter)("t-size",n.size)("t-label-text-wrap",n.otherProperties==null?null:n.otherProperties.includes("labelTextWrap")),b("ngModel",n.lookupSingle),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,U,W,v,P,he,de,me,ge,ye,se,ce,T],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]})}}return d})();var ci=(()=>{class d{constructor(){this.htmlCode=`<form [formGroup]="formMission">
  <thf-lookup
    formControlName="lookup2"
    name="lookupMultiple"
    t-field-label="name"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    t-key-last-search="lookupMultiple"
    t-label="Her\xF3is"
    t-placeholder="Placeholder multiple"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  ></thf-lookup>
</form>
  `,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thf-lookup-form-doc',
  templateUrl: './thf-lookup-form-doc.component.html',
  styleUrl: './thf-lookup-form-doc.component.css',
})
export class ThfLookupFormDocComponent {
  formMission = new FormGroup({
    lookup2: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupGridProperties = {
    autoSize: true,
    autoSizeOnScroll: true,
    resizable: true,
    groupable: true,
    draggable: true,
    hideSelectAll: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
    { property: 'id', label: 'Id' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];
}
  `,this.formMission=new B({lookup2:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,autoSizeOnScroll:!0,resizable:!0,groupable:!0,draggable:!0,hideSelectAll:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup",3),t(),o(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("formGroup",n.formMission),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ne,Q,ie,fe,be,v,P,ce,T],encapsulation:2})}}return d})();var ui=(()=>{class d{constructor(){this.htmlCode=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
></thf-lookup>
  `,this.tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-basic-doc',
  templateUrl: './thf-lookup-basic-doc.component.html',
  styleUrl: './thf-lookup-basic-doc.component.css'
})
export class ThfLookupBasicDocComponent {}`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(6),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ne,ie,ke,v,P,ce,T],encapsulation:2})}}return d})();var Ei=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
>
</thf-lookup>`,xi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-custom-items-doc',
  templateUrl: './thf-lookup-custom-items-doc.component.html',
  styleUrl: './thf-lookup-custom-items-doc.component.css',
  standalone: false
})
export class ThfLookupCustomItemsDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}
`;var Si=(()=>{class d{constructor(){this.htmlCode=Ei,this.tsCode=xi,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-custom-items-doc"]],standalone:!1,decls:7,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(5),s("t-custom-items",n.customItems),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ne,ie,ke,v,P,ce,T],encapsulation:2})}}return d})();var bi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc")(6,"app-thf-lookup-custom-items-doc"),t()(),i(7,"div",3),o(8,"app-thf-lookup-labs-doc"),t()()())},dependencies:[oe,Pt,pi,ci,ui,Si],encapsulation:2})}}return d})();var fi=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-height]="320"
/>`,hi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {}`;var Ve=(()=>{class d{constructor(){this.htmlCode=fi,this.tsCode=hi}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-basic-doc"]],standalone:!1,decls:6,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,pe,T],encapsulation:2})}}return d})();var vi=`<form [formGroup]="form">
  <thf-lookup-data
    formControlName="lookupData"
    name="lookupDataSingle"
    t-field-label="nickname"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  />
</form>

<div>
  <p>Valor do Formul\xE1rio:<br />{{ form.value | json }}</p>
</div>

<div>
  @if (!disabledFom) {
  <po-button
    p-label="Desabilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  } @else {
  <po-button
    p-label="Habilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  }
</div>
`,gi=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ThfLookupDataGridProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-form-doc',
  templateUrl: './thf-lookup-data-form-doc.component.html',
  standalone: false,
})
export class ThfLookupDataFormDocComponent {
  disabledFom = false;

  form = new FormGroup({
    lookupData: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupDataGridProperties = {
    autoSize: true,
    draggable: true,
    hideSelectAll: true,
    resizable: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];

  disableEnabledFom() {
    const lookupData = this.form.get('lookupData');
    this.disabledFom = !this.disabledFom;

    this.disabledFom ? lookupData?.disable() : lookupData?.enable();
  }
}`;function so(d,C){if(d&1){let a=q();i(0,"po-button",7),g("p-click",function(){p(a);let n=u();return c(n.disableEnabledFom())}),t()}}function po(d,C){if(d&1){let a=q();i(0,"po-button",8),g("p-click",function(){p(a);let n=u();return c(n.disableEnabledFom())}),t()}}var ze=(()=>{class d{constructor(){this.htmlCode=vi,this.tsCode=gi,this.disabledFom=!1,this.form=new B({lookupData:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,draggable:!0,hideSelectAll:!0,resizable:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}disableEnabledFom(){let a=this.form.get("lookupData");this.disabledFom=!this.disabledFom,this.disabledFom?a?.disable():a?.enable()}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-form-doc"]],standalone:!1,decls:16,vars:12,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookupData","name","lookupDataSingle","t-field-label","nickname","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["p-label","Desabilitar via FormControl"],["p-label","Habilitar via FormControl"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"],["p-label","Desabilitar via FormControl",3,"p-click"],["p-label","Habilitar via FormControl",3,"p-click"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup-data",3),t(),i(6,"div")(7,"p"),e(8,"Valor do Formul\xE1rio:"),o(9,"br"),e(10),Xe(11,"json"),t()(),i(12,"div"),L(13,so,1,0,"po-button",4)(14,po,1,0,"po-button",5),t(),o(15,"app-code-accordion-doc",6),t()),r&2&&(m(4),s("formGroup",n.form),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(5),Se(Ye(11,10,n.form.value)),m(3),M(n.disabledFom?14:13),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ne,Q,ie,fe,be,W,v,P,pe,T,nt],encapsulation:2})}}return d})();var yi=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
  [t-height]="320"
/>`,Ci=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}`;var je=(()=>{class d{constructor(){this.htmlCode=yi,this.tsCode=Ci,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-custom-items-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items","t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-custom-items",n.customItems)("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,pe,T],encapsulation:2})}}return d})();var Pi=`<form [formGroup]="formLabs">
<thf-lookup-data
    name="lookupData"
    formControlName="lookupData"
    [t-columns]="columns"
    [t-disabled]="lookupDataProperties?.disabled"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-height]="height"
    [t-keys-label]="customKeysLabel"
    [t-literals]="customLiterals"
    [t-multiple]="lookupDataProperties?.multiple"
    [t-size]="size"
    [t-label]="label"
    [t-optional]="lookupDataProperties?.optional"
    [t-required]="lookupDataProperties?.required"
    [t-show-required]="lookupDataProperties?.showRequired"
    [t-help]="help"
    [t-helper]="helperText"
    [t-auto-focus]="lookupDataProperties?.autoFocus"
    [t-no-autocomplete]="lookupDataProperties?.noAutoComplete"
    [t-field-error-message]="fieldErrorMessage"
    [t-error-limit]="lookupDataProperties?.errorLimit"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    (t-change)="changeEvent('t-change', $event)"
    (t-change-model)="changeEvent('t-change-model', $event)"
    (t-error)="changeEvent('t-error', $event)"
    (t-focus)="changeEvent('t-focus', '')"
    (t-keydown)="changeEvent('t-keydown', $event)"
    (t-selected)="changeEvent('t-selected', $event)"
  />
</form>

<po-container class="po-mt-1" style="display: flex">
  <span class="po-font-text-large-bold">Events</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>
  <div style="max-height: 150px" [innerHTML]="event"></div>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-select
      class="po-md-4 po-lg-4"
      name="fieldValue"
      [(ngModel)]="fieldValue"
      p-label="Field Value"
      p-required
      [p-options]="fieldValueOptions"
    />

    <po-select
      class="po-md-4 po-lg-4"
      name="fieldLabel"
      [(ngModel)]="fieldLabel"
      p-label="Field Label"
      p-required
      [p-options]="fieldLabelOptions"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="heigth"
      [(ngModel)]="height"
      p-label="Height"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="label"
      [(ngModel)]="label"
      p-label="Label"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="fieldErrorMessage"
      [(ngModel)]="fieldErrorMessage"
      p-label="Field Error Message"
    ></po-input>

    <po-input
      class="po-md-4 po-lg-4"
      name="Help"
      [(ngModel)]="help"
      p-label="Help"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="Helper"
      [(ngModel)]="helperText"
      p-label="Additional Help"
    />

    <po-checkbox-group
      name="lookupDataPropertiesName"
      [(ngModel)]="lookupDataPropertiesName"
      [p-columns]="4"
      p-label="Lookup-Data Properties"
      [p-options]="lookupDataPropertiesOptions"
      (p-change)="updateLookupDataProperties()"
    />

    <div class="po-row">
      <po-radio-group
        class="po-lg-6"
        name="size"
        [(ngModel)]="size"
        p-label="Size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
        [p-options]="sizesOptions"
      />
    </div>

    <div class="po-row">
      <po-textarea
        class="po-lg-6"
        name="filterSearchSelect"
        [(ngModel)]="filterSearchSelect"
        (p-change-model)="changeFilterSearchSelects()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
        p-label="Filter Search Select"
      />

      <po-textarea
        class="po-lg-6"
        name="keysLabel"
        [(ngModel)]="keysLabel"
        (p-change-model)="changeKeysLabel()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
        p-label="Keys Label"
      />
    </div>

    <po-textarea
      class="po-lg-6"
      name="literals"
      p-label="Literals"
      p-help='{ "placeholder": "Busca avan\xE7ada" }'
      [p-rows]="2"
      [(ngModel)]="literals"
      (p-change-model)="changeLiterals()"
    />
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-checkbox-group
      name="gridPropertiesName"
      [(ngModel)]="gridPropertiesName"
      [p-columns]="4"
      p-label="Grid Properties"
      [p-options]="gridPropertiesOptions"
      (p-change)="updateGridProperties()"
    />
  </po-container>
</div>
`,Ti=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupDataColumn,
  ThfLookupDataFilterSearchSelect,
  ThfLookupDataGridProperties,
  ThfLookupDataKeysLabel,
  ThfLookupDataLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-labs-doc',
  templateUrl: './thf-lookup-data-labs-doc.component.html',
  standalone: false,
})
export class ThfLookupDataLabsDocComponent {
  columns: Array<ThfLookupDataColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];
  customFilterSearchSelect: Array<ThfLookupDataFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupDataKeysLabel> = [];
  customLiterals: ThfLookupDataLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  gridProperties!: ThfLookupDataGridProperties;
  lookupDataProperties!: any;  
  height = 450;
  keysLabel: string = '';
  literals: string = '';
  size: string = 'medium';
  label: string = '';
  fieldErrorMessage: string = '';
  help: string = '';
  helperText: string = '';

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly lookupDataPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Error Limit' },
    { value: 'autoFocus', label: 'Auto Focus' },
    { value: 'noAutoComplete', label: 'No Auto Complete' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  readonly gridPropertiesName: Array<string> = [
    'selectableEntireLine',
    'showMoreVisible',
    'striped',
    'sortable',
    'virtualScroll',
  ];

  lookupDataPropertiesName: Array<string> = [];
  formLabs = new FormGroup({
    lookupData: new FormControl(),
  });

  changeEvent(eventDescription: any, value: any) {
    if (value instanceof KeyboardEvent) {
      value = {
        key: value.key,
        code: value.code,
        altKey: value.altKey,
        ctrlKey: value.ctrlKey,
        shiftKey: value.shiftKey,
      };
    }

    this.event =
      \`<p>\${eventDescription} - \${value ? JSON.stringify(value) : ''}</p>\` +
      this.event;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  updateGridProperties() {
    let gridProperties = {};

    this.gridPropertiesName.forEach((properties) => {
      gridProperties = {
        ...gridProperties,
        [properties]: true,
      };
    });

    if (!this.gridPropertiesName.includes('sortable')) {
      gridProperties = {
        ...gridProperties,
        sortable: false,
      };
    }

    if (!this.gridPropertiesName.includes('striped')) {
      gridProperties = {
        ...gridProperties,
        striped: false,
      };
    }

    if (!this.gridPropertiesName.includes('selectableEntireLine')) {
      gridProperties = {
        ...gridProperties,
        selectableEntireLine: false,
      };
    }

    if (!this.gridPropertiesName.includes('showMoreVisible')) {
      gridProperties = {
        ...gridProperties,
        showMoreVisible: false,
      };
    }

    if (!this.gridPropertiesName.includes('groupable')) {
      gridProperties = {
        ...gridProperties,
        groupable: false,
      };
    }

    this.gridProperties = { ...gridProperties };
  }

  updateLookupDataProperties() {
    let lookupDataProperties = {};

    this.lookupDataPropertiesName.forEach((properties: any) => {
      lookupDataProperties = {
        ...lookupDataProperties,
        [properties]: true,
      };
    });

    this.lookupDataProperties = { ...lookupDataProperties };
  }
}`;function Eo(d,C){if(d&1){let a=q();i(0,"div",8)(1,"po-container",9)(2,"po-select",10),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(3,"po-select",11),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(4,"po-input",12),h("ngModelChange",function(n){p(a);let l=u();return f(l.height,n)||(l.height=n),c(n)}),t(),i(5,"po-input",13),h("ngModelChange",function(n){p(a);let l=u();return f(l.label,n)||(l.label=n),c(n)}),t(),i(6,"po-input",14),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),c(n)}),t(),i(7,"po-input",15),h("ngModelChange",function(n){p(a);let l=u();return f(l.help,n)||(l.help=n),c(n)}),t(),i(8,"po-input",16),h("ngModelChange",function(n){p(a);let l=u();return f(l.helperText,n)||(l.helperText=n),c(n)}),t(),i(9,"po-checkbox-group",17),h("ngModelChange",function(n){p(a);let l=u();return f(l.lookupDataPropertiesName,n)||(l.lookupDataPropertiesName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateLookupDataProperties())}),t(),i(10,"div",18)(11,"po-radio-group",19),h("ngModelChange",function(n){p(a);let l=u();return f(l.size,n)||(l.size=n),c(n)}),t()(),i(12,"div",18)(13,"po-textarea",20),h("ngModelChange",function(n){p(a);let l=u();return f(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(14,"po-textarea",21),h("ngModelChange",function(n){p(a);let l=u();return f(l.keysLabel,n)||(l.keysLabel=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeKeysLabel())}),t()(),i(15,"po-textarea",22),h("ngModelChange",function(n){p(a);let l=u();return f(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t()(),i(16,"po-container",9)(17,"po-checkbox-group",23),h("ngModelChange",function(n){p(a);let l=u();return f(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateGridProperties())}),t()()()}if(d&2){let a=u();m(2),b("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),b("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),b("ngModel",a.height),m(),b("ngModel",a.label),m(),b("ngModel",a.fieldErrorMessage),m(),b("ngModel",a.help),m(),b("ngModel",a.helperText),m(),b("ngModel",a.lookupDataPropertiesName),s("p-columns",4)("p-options",a.lookupDataPropertiesOptions),m(2),b("ngModel",a.size),s("p-options",a.sizesOptions),m(2),b("ngModel",a.filterSearchSelect),m(),b("ngModel",a.keysLabel),m(),s("p-rows",2),b("ngModel",a.literals),m(2),b("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions)}}var Oe=(()=>{class d{constructor(){this.htmlCode=Pi,this.tsCode=Ti,this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.height=450,this.keysLabel="",this.literals="",this.size="medium",this.label="",this.fieldErrorMessage="",this.help="",this.helperText="",this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.lookupDataPropertiesOptions=[{value:"disabled",label:"Disabled"},{value:"multiple",label:"Multiple"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Error Limit"},{value:"autoFocus",label:"Auto Focus"},{value:"noAutoComplete",label:"No Auto Complete"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.lookupDataPropertiesName=[],this.formLabs=new B({lookupData:new S})}changeEvent(a,r){r instanceof KeyboardEvent&&(r={key:r.key,code:r.code,altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey}),this.event=`<p>${a} - ${r?JSON.stringify(r):""}</p>`+this.event}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}updateGridProperties(){let a={};this.gridPropertiesName.forEach(r=>{a=N(j({},a),{[r]:!0})}),this.gridPropertiesName.includes("sortable")||(a=N(j({},a),{sortable:!1})),this.gridPropertiesName.includes("striped")||(a=N(j({},a),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(a=N(j({},a),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(a=N(j({},a),{showMoreVisible:!1})),this.gridPropertiesName.includes("groupable")||(a=N(j({},a),{groupable:!1})),this.gridProperties=j({},a)}updateLookupDataProperties(){let a={};this.lookupDataPropertiesName.forEach(r=>{a=N(j({},a),{[r]:!0})}),this.lookupDataProperties=j({},a)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-labs-doc"]],standalone:!1,decls:14,vars:27,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["name","lookupData","formControlName","lookupData","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-change-model","t-error","t-focus","t-keydown","t-selected","t-columns","t-disabled","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-height","t-keys-label","t-literals","t-multiple","t-size","t-label","t-optional","t-required","t-show-required","t-help","t-helper","t-auto-focus","t-no-autocomplete","t-field-error-message","t-error-limit"],[1,"po-mt-1",2,"display","flex"],[2,"max-height","150px",3,"innerHTML"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","heigth","p-label","Height",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","label","p-label","Label",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-label","Field Error Message",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","Help","p-label","Help",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","Helper","p-label","Additional Help",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","lookupDataPropertiesName","p-label","Lookup-Data Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],[1,"po-row"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","literals","p-label","Literals","p-help",'{ "placeholder": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","p-rows","ngModel"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"form",3)(5,"thf-lookup-data",4),g("t-change",function(y){return p(l),c(n.changeEvent("t-change",y))})("t-change-model",function(y){return p(l),c(n.changeEvent("t-change-model",y))})("t-error",function(y){return p(l),c(n.changeEvent("t-error",y))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus",""))})("t-keydown",function(y){return p(l),c(n.changeEvent("t-keydown",y))})("t-selected",function(y){return p(l),c(n.changeEvent("t-selected",y))}),t()(),i(6,"po-container",5)(7,"span",1),e(8,"Events"),t(),o(9,"po-divider",2)(10,"div",6),t(),o(11,"app-code-accordion-doc",7),K(12,Eo,18,21,"ng-template",null,0,X),t()}if(r&2){let l=$(13);m(4),s("formGroup",n.formLabs),m(),s("t-columns",n.columns)("t-disabled",n.lookupDataProperties==null?null:n.lookupDataProperties.disabled)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-height",n.height)("t-keys-label",n.customKeysLabel)("t-literals",n.customLiterals)("t-multiple",n.lookupDataProperties==null?null:n.lookupDataProperties.multiple)("t-size",n.size)("t-label",n.label)("t-optional",n.lookupDataProperties==null?null:n.lookupDataProperties.optional)("t-required",n.lookupDataProperties==null?null:n.lookupDataProperties.required)("t-show-required",n.lookupDataProperties==null?null:n.lookupDataProperties.showRequired)("t-help",n.help)("t-helper",n.helperText)("t-auto-focus",n.lookupDataProperties==null?null:n.lookupDataProperties.autoFocus)("t-no-autocomplete",n.lookupDataProperties==null?null:n.lookupDataProperties.noAutoComplete)("t-field-error-message",n.fieldErrorMessage)("t-error-limit",n.lookupDataProperties==null?null:n.lookupDataProperties.errorLimit),m(5),s("innerHTML",n.event,Be),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[ne,Q,ie,U,fe,be,v,P,he,de,me,ge,ye,pe,T],encapsulation:2})}}return d})();var Ge=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup-Data","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup-data")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-data-basic-doc")(5,"app-thf-lookup-data-form-doc")(6,"app-thf-lookup-data-custom-items-doc"),t()(),i(7,"div",3),o(8,"app-thf-lookup-data-labs-doc"),t()()())},dependencies:[oe,Tt,Ve,ze,je,Oe],encapsulation:2})}}return d})();var So=["splitter"],bo=["paneForm"],fo=()=>({label:"horizontal",value:"horizontal"}),ho=()=>({label:"vertical",value:"vertical"}),vo=(d,C)=>[d,C];function go(d,C){if(d&1){let a=q();i(0,"thf-splitter-pane",10),g("t-size-change",function(){p(a);let n=u();return c(n.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),g("p-primary-action",function(){let n=p(a).$index,l=u();return c(l.removePane(n))}),i(3,"div",13),e(4),t()()()()}if(d&2){let a=C.$implicit,r=C.$index;s("t-resizable",a.resizable)("t-scrollable",a.scrollable)("t-size",a.size),m(4),$e(" Pane Content ",r," ")}}function yo(d,C){if(d&1){let a=q();i(0,"div",14)(1,"po-container",15),o(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),g("p-click",function(){p(a);let n=$(3),l=u();return c(l.addPane(n.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),h("ngModelChange",function(n){p(a);let l=u();return f(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(8,"po-radio-group",20),h("ngModelChange",function(n){p(a);let l=u();return f(l.orientation,n)||(l.orientation=n),c(n)}),t()()(),i(9,"div",17)(10,"po-button",21),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=$(3),r=u();m(2),s("p-fields",r.panesFieldsForm)("p-value",r.pane),m(3),s("p-disabled",a.form.invalid),m(2),b("ngModel",r.disabled),m(),b("ngModel",r.orientation),s("p-options",Ae(8,vo,Z(6,fo),Z(7,ho)))}}var wi=(()=>{class d{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
  #splitter
  name="splitter"
  [t-disabled]="disabled"
  [t-orientation]="orientation"
  (t-layout-change)="changeEvent('(t-layout-change)')"
>
  <thf-splitter-pane
    *ngFor="let pane of panes; let i = index"
    (t-size-change)="changeEvent('(t-size-change)')"
    [t-resizable]="pane.resizable"
    [t-scrollable]="pane.scrollable"
    [t-size]="pane.size"
  >
    <div class="po-m-2">
      <po-widget p-title="Title Pane" p-primary-label="Close" (p-primary-action)="removePane(i)">
        <div class="po-font-subtitle po-text-center">Pane Content {{ i }}</div>
      </po-widget>
    </div>
  </thf-splitter-pane>
</thf-splitter>

<po-container class="po-mt-1" style="display: flex">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-dynamic-form #paneForm [p-fields]="panesFieldsForm" [p-value]="pane"> </po-dynamic-form>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Pane"
        [p-disabled]="paneForm.form.invalid"
        (p-click)="addPane(paneForm.form.value)"
      />
    </div>
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-switch class="po-md-6" name="disabled" p-label="Disabled" [(ngModel)]="disabled" />

    <po-radio-group
      class="po-md-6"
      name="orientation"
      p-label="orientation"
      [(ngModel)]="orientation"
      [p-options]="[
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' }
      ]"
    />
  </po-container>
</div>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Restore" (p-click)="restore()"> </po-button>
</div>
`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoDynamicFormComponent,
  PoDynamicFormField,
} from '@po-ui/ng-components';
import {
  ThfSplitterComponent,
  ThfSplitterPaneComponent,
} from '@totvs/thf-components';
 
@Component({
  selector: 'app-thf-splitter-labs-doc',
  templateUrl: './thf-splitter-labs-doc.component.html',
  styleUrl: './thf-splitter-labs-doc.component.css',
  standalone: false,
})
  export class ThfSplitterLabsDocComponent implements OnInit {
@ViewChild('splitter', { static: true }) splitter!: ThfSplitterComponent;
  @ViewChild('paneForm', { static: true }) paneForm!: PoDynamicFormComponent;

  event: string = '';
  panes: Array<ThfSplitterPaneComponent> = [];
  pane = {};
  disabled = false;
  orientation = 'horizontal';

  panesFieldsForm: Array<PoDynamicFormField> = [
    {
      property: 'size',
      gridColumns: 6,
      type: 'number',
      maxValue: 100,
      minValue: 0,
      maxLength: 3,
      step: 5,
      help: 'Valor em porc (%)'
    },
    { property: 'scrollable', type: 'boolean', gridColumns: 3 }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  restore() {
    this.event = '';
    this.panes = [];
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  addPane(_pane: any) {
    const newPane = Object.assign({}, _pane);
    newPane.size += '%';
    this.panes.push(newPane);
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  removePane(idx: number) {
    this.panes.splice(idx, 1);
  }
}`}ngOnInit(){this.restore()}changeEvent(a){this.event=a}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(a){let r=Object.assign({},a);r.size+="%",this.panes.push(r),this.pane={size:"50",scrollable:!1}}removePane(a){this.panes.splice(a,1)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(r,n){if(r&1&&I(So,7)(bo,7),r&2){let l;D(l=A())&&(n.splitter=l.first),D(l=A())&&(n.paneForm=l.first)}},standalone:!1,decls:13,vars:7,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),o(3,"po-divider",4),i(4,"thf-splitter",5,0),g("t-layout-change",function(){return p(l),c(n.changeEvent("(t-layout-change)"))}),Te(6,go,5,4,"thf-splitter-pane",6,Ke),t(),i(8,"po-container",7),o(9,"po-info",8),t(),o(10,"app-code-accordion-doc",9),K(11,yo,11,11,"ng-template",null,1,X),t()}if(r&2){let l=$(12);m(4),s("t-disabled",n.disabled)("t-orientation",n.orientation),m(2),we(n.panes),m(3),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,U,W,v,P,ht,de,xt,se,Ce,le,re,T],encapsulation:2})}}return d})();var Po=["gridComponent"];function To(d,C){if(d&1){let a=q();i(0,"thf-splitter-pane",9)(1,"po-widget",11),g("p-primary-action",function(){p(a);let n=u();return c(n.closePane())}),i(2,"div",12),o(3,"po-info",13),t(),i(4,"div",12),o(5,"po-info",14),t(),i(6,"div",12),o(7,"po-info",15),t(),i(8,"div",12),o(9,"po-info",16),t()()()}if(d&2){let a=u();s("t-size","30%"),m(3),s("p-value",a.selectedHero.name),m(2),s("p-value",a.selectedHero.nickname),m(2),s("p-value",a.selectedHero.email),m(2),s("p-value",a.selectedHero.city)}}var Di=(()=>{class d{constructor(a,r){this.router=a,this.changeDetector=r,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
    <thf-splitter-pane>
      <div class="po-lg-12 po-pt-2 po-pb-2">
        <div
          class="po-row"
          style="justify-content: space-between; align-items: center"
        >
          <p class="po-font-subtitle">Controle de Her\xF3is</p>
          <po-button
            p-icon="an an-star"
            p-label="Star"
            (p-click)="openExternalLink()"
          ></po-button>
        </div>
        <thf-grid
          #gridComponent
          [t-height]="300"
          [t-selectable]="true"
          [t-single-select]="true"
          [t-items]="items"
          [t-columns]="column"
          [t-sortable]="true"
          (t-selected)="selectItem($event)"
          (t-unselected)="closePane()"
        />
      </div>
    </thf-splitter-pane>

    @if (showHeroPane) {
    <thf-splitter-pane [t-size]="'30%'">
      <po-widget
        p-title="Her\xF3i Selecionado"
        p-primary-label="Fechar Painel"
        (p-primary-action)="closePane()"
      >
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Name"
            [p-value]="selectedHero.name"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Apelido"
            [p-value]="selectedHero.nickname"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Contato"
            [p-value]="selectedHero.email"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Reside em"
            [p-value]="selectedHero.city"
          />
        </div>
      </po-widget>
    </thf-splitter-pane>
    }
  </thf-splitter>
`,this.tsCode=`import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThfGridColumn, ThfGridComponent } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-splitter-grid-doc',
  templateUrl: './thf-splitter-grid-doc.component.html',
  standalone: false,
})
export class ThfSplitterGridDocComponent
  implements AfterContentInit, AfterViewInit
{
  @ViewChild('gridComponent', { static: true })
  grid!: ThfGridComponent;

  showHeroPane = false;
  selectedHero: any = null;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      email: 'hulksmash@marvel.com',
      status: 1,
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      email: 'spvalueerman@marvel.com',
      status: 2,
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      email: 'goku@dbz.com',
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      email: 'hawkeye@marvel.com',
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      email: 'nickfuckingfury@marvel.com',
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      email: 'gohan@dbz.com',
      city: null,
    },
  ];

  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    { property: 'city', label: 'Cidade' },
  ];

  constructor(
    protected router: Router,
    protected changeDetector: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.selectItem(this.items[0]);
  }

  ngAfterViewInit(): void {
    this.grid.selectRowItem(this.items[0]);
  }

  openExternalLink() {
    window.open('https://github.com/po-ui/po-angular');
  }

  selectItem(hero: any) {
    if (!hero) {
      this.closePane();
      return;
    }
    this.selectedHero = {
      id: hero.id || '',
      name: hero.name || '',
      nickname: hero.nickname || '',
      email: hero.email || '',
      city: hero.city || '',
    };
    this.showHeroPane = true;
    this.changeDetector.detectChanges();
  }

  closePane() {
    this.showHeroPane = false;
    this.selectedHero = null;
    this.grid.unselectRows();
  }
}`}ngAfterContentInit(){this.selectItem(this.items[0])}ngAfterViewInit(){this.grid.selectRowItem(this.items[0])}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(a){if(!a){this.closePane();return}this.selectedHero={id:a.id||"",name:a.name||"",nickname:a.nickname||"",email:a.email||"",city:a.city||""},this.showHeroPane=!0,this.changeDetector.detectChanges()}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}static{this.\u0275fac=function(r){return new(r||d)(V(pt),V(et))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(r,n){if(r&1&&I(Po,7),r&2){let l;D(l=A())&&(n.grid=l.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(r,n){if(r&1){let l=q();i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),o(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),g("p-click",function(){return p(l),c(n.openExternalLink())}),t()(),i(11,"thf-grid",8,0),g("t-selected",function(y){return p(l),c(n.selectItem(y))})("t-unselected",function(){return p(l),c(n.closePane())}),t()()(),L(13,To,10,5,"thf-splitter-pane",9),t(),o(14,"app-code-accordion-doc",10),t()}r&2&&(m(11),s("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.column)("t-sortable",!0),m(2),M(n.showHeroPane?13:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[W,v,P,se,Ce,R,le,re,T],encapsulation:2})}}return d})();var Ai=(()=>{class d{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:Pe.Column},{label:"2017",data:[93,52,18],type:Pe.Column},{label:"2020",data:[95,21,-17],type:Pe.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:Pe.Line,color:"color-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
  <thf-splitter-pane>
    <po-widget p-title="Chart type column with line">
      <po-chart
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </po-widget>
  </thf-splitter-pane>
  <thf-splitter-pane [t-size]="'50%'">
    <po-widget p-title="Chart type pizza">
      <po-chart p-title="Top 5 coffee producing countries (in tons)" [p-series]="coffeeProduction"> </po-chart>
    </po-widget>
  </thf-splitter-pane>
</thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-thf-splitter-chart-doc',
  templateUrl: './thf-splitter-chart-doc.component.html',
  styleUrl: './thf-splitter-chart-doc.component.css',
  standalone: false,
})
export class ThfSplitterChartDocComponent {
    optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
    },
    rendererOption: 'svg',
  };
  optionsPie: PoChartOptions = {
    rendererOption: 'svg',
  };

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];
  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    {
      label: 'Coffee consumption in Brazil',
      data: [34, 27, 79],
      type: PoChartType.Line,
      color: 'color-10',
    },
  ];
  coffeeProduction: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: 2796,
      tooltip: 'Brazil (South America)',
      color: 'color-10',
    },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' },
  ];
}
`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),o(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),o(10,"po-chart",6),t()()(),o(11,"app-code-accordion-doc",7),t()),r&2&&(m(7),s("p-options",n.optionsColumn)("p-categories",n.categoriesColumn)("p-series",n.evolutionOfCoffeeAndSomeCompetitors),m(),s("t-size","50%"),m(2),s("p-series",n.coffeeProduction)("p-options",n.optionsPie),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[Et,v,P,Ce,le,re,T],encapsulation:2})}}return d})();var _i=(()=>{class d{constructor(){this.htmlCode=`<thf-splitter>
          <thf-splitter-pane>
            <h4>Pane 1</h4>
          </thf-splitter-pane>

          <thf-splitter-pane>
            <thf-splitter [t-orientation]="'vertical'">
              <thf-splitter-pane>
                <h4>Pane 2</h4>
              </thf-splitter-pane>
              <thf-splitter-pane>
                <h4>Pane 3</h4>
              </thf-splitter-pane>
            </thf-splitter>
          </thf-splitter-pane>
        </thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
  
@Component({
  selector: 'app-thf-splitter-basic-doc',
  standalone: false,
  templateUrl: './thf-thf-splitter-basic-doc.html',
})
export class ThfSplitterBasicDocComponent {
}
  `}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),o(16,"app-code-accordion-doc",3),t()),r&2&&(m(9),s("t-orientation","vertical"),m(7),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,le,re,T],encapsulation:2})}}return d})();var _o=()=>[Di,Ai,_i];function ko(d,C){d&1&&(i(0,"div",3),o(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function qo(d,C){d&1&&o(0,"po-loading-overlay",4),d&2&&s("p-screen-lock",!1)}var ki=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),He(3,ko,4,0)(4,qo,1,1),We(5,3,_o,null,4),Ue(),t(),i(7,"div",2),o(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[ct,oe,Dt,wi],encapsulation:2})}}return d})();var qi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(r,n){r&1&&(i(0,"po-page-default",0),o(1,"api-thf-splitter-pane"),t())},dependencies:[oe,wt],encapsulation:2})}}return d})();var Fo=[{path:"thf-grid",component:si},{path:"thf-lookup",component:bi},{path:"thf-lookup-data",component:Ge},{path:"thf-splitter",component:ki},{path:"thf-splitter-pane",component:qi}],Fi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=xe({type:d})}static{this.\u0275inj=Ee({imports:[Me.forChild(Fo),Me]})}}return d})();var y1=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=xe({type:d})}static{this.\u0275inj=Ee({imports:[_e,lt,dt,Ie,gt,yt,At,Fi,st]})}}return d})();export{y1 as DocumentationModule};
