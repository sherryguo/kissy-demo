KISSY.add("demo/code",function(e,s,a,n,t){var d=e.all,m=new a,c=function(){this.el=d("#J_Code"),this.commitEl=d("#J_Commit"),this.updateEl=d("#J_Update"),this.events={"click #J_Back":"goBack","click #J_Commit":"commit","click #J_Update":"update","click #J_Debug":"debug"},this.iframe=d("#J_Result")[0].contentWindow.document,this.init()};return e.extend(c,s),c.prototype.init=function(){this.resetColumns(),this.createEditor(),c.superclass.constructor.call(this)},c.prototype.render=function(e){var s=this;e?(s.commitEl.hide(),s.updateEl.show()):(s.commitEl.show(),s.updateEl.hide()),m.render(e),s.setEditorVal(e||{})},c.prototype.goBack=function(){var e=this;e._render("list")},c.prototype.update=function(e){var s=this,a=d(e.currentTarget),n=function(e){e.status?s._tips(!0,e.message):s._tips(!1,e.message)};s._ajax(a,"./act/edit.php",s.makeDemoInfo("update"),n)},c.prototype.commit=function(e){var s=this,a=d(e.currentTarget),n=function(e){e.status?s._tips(!0,e.message):s._tips(!1,e.message)};s._ajax(a,"./act/add.php",s.makeDemoInfo("commit"),n)},c.prototype.debug=function(){var e=this,s=e.getDebugCode(e.getEditorVal());e.iframe.open(),e.iframe.write(s),e.iframe.close()},c.prototype.resetColumns=function(){var e=d("#J_Cont"),s=d(".column",e);s.width((e.width()-250)/2)},c.prototype.createEditor=function(){var e=this,s=function(e,s){var e=ace.edit(e[0]);return e.setTheme("ace/theme/dreamweaver"),e.getSession().setMode("ace/mode/"+s),e};e.htmlEditor=s(d("#J_HtmlWin"),"html"),e.cssEditor=s(d("#J_CssWin"),"css"),e.jsEditor=s(d("#J_JsWin"),"javascript")},c.prototype.setEditorVal=function(e){var s=this;s.htmlEditor.setValue(e.html),s.htmlEditor.focus(),s.htmlEditor.clearSelection(),s.cssEditor.setValue(e.css),s.cssEditor.focus(),s.cssEditor.clearSelection(),s.jsEditor.setValue(e.js),s.jsEditor.focus(),s.jsEditor.clearSelection(),s.debug()},c.prototype.getEditorVal=function(){var e=this;return{html:e.htmlEditor.getValue(),css:e.cssEditor.getValue(),js:e.jsEditor.getValue()}},c.prototype.getDebugCode=function(e){var s=["<!DOCTYPE html>\r\n","<html>\r\n","<head>\r\n",'<meta charset="utf-8" />\r\n',"<title>{{module}}</title>\r\n","<style>\r\n","{{css}}\r\n","</style>\r\n","</head>\r\n","<body>\r\n","{{{html}}}\r\n",'<script src="http://a.tbcdn.cn/s/kissy/1.3.0/seed-min.js" data-config="{combine:true}"></script>\r\n',"<script>\r\n","{{js}}\r\n","</script>\r\n","</body>\r\n","</html>"].join("");return new t(s).render(e)},c.prototype.makeDemoInfo=function(s){var a=this,n=a.getEditorVal(),t=m.getDemoConfig();switch(s){case"update":return e.merge(n,t,{id:a._get("id")});default:return e.merge(n,t)}},c},{requires:["demo/base","demo/config","node","xtemplate"]});