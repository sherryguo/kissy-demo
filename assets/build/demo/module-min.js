KISSY.add("demo/module",function(s,e,t,o,c){var m,i=s.all,d=function(s){this.el=i("#J_Module"),this.elHd=i("#J_ModuleHd"),this.elBd=i("#J_ModuleBd"),this.events={"click #J_ModuleHd a":"renderModule","click #J_ModuleBd a":"renderMethod"},this.api=s,m=new t(s),this.init()};return s.extend(d,e),d.prototype.init=function(){this.render(),d.superclass.constructor.call(this),this.elHd.one("a").fire("click")},d.prototype.render=function(){var s,e=this;s=["<ul>","{{#each api}}","<li>",'<a href="javascript:;" title="{{desc}}" data-index="{{xindex}}">',"{{anme}}","</a>","</li>","{{/each}}","</ul>"].join("");var t=new c(s).render({api:e.api});e.elHd.html(t)},d.prototype.renderModule=function(s){var e=this,t=i(s.currentTarget),o=t.attr("data-index"),m=e.api;e.elHd.all("a").removeClass("current"),t.addClass("current"),tpl=["<ul>","{{#each modules}}","<li>",'<a href="javascript:;" data-name="{{name}}" data-index="{{xindex}}" data-module-index="'+o+'">',"{{name}}","</a>","</li>","{{/each}}","</ul>"].join("");var d=new c(tpl).render({modules:m[o].subcats});e.elBd.html(d),e.elBd.one("a").fire("click")},d.prototype.renderMethod=function(s){var e=this,t=i(s.currentTarget),o=t.attr("data-name"),c=t.attr("data-index");mindex=t.attr("data-module-index"),e.elBd.all("a").removeClass("current"),t.addClass("current"),e._render("list"),e._set("module",o),m.render(mindex,c)},d},{requires:["demo/base","demo/method","node","xtemplate"]});