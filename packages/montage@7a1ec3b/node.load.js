montageDefine("7a1ec3b","node",{dependencies:["q-io/fs","./montage","mr/require","mr/node","q","url","htmlparser2"],factory:function(e,t){function n(e){var t,n,i=new h.DomHandler(function(e,i){n=e,t=i}),r=new h.Parser(i);if(r.write(e),r.done(),n)throw n;if(!t)throw Error("HTML parsing did not complete");return{type:"document",children:t}}function i(e,t){var n,r=function(){n=!0};if(t(e,r),!n)for(var a=e.children,s=a?a.length:0,l=0;s>l;l++)i(a[l],t)}function r(e,t){return e.attribs?e.attribs[t]:null}function a(e){return d.getText(e)}function s(e){return e.replace(/\[[^\]]+\]$/,"")}var l=e("q-io/fs"),o=e("./montage"),c=e("mr/require");e("mr/node"),e("q");var u=e("url"),h=e("htmlparser2"),d=h.DomUtils;c.overlays=["node","server","montage"],t.bootstrap=function(){var e=process.argv.slice(0,3),t=process.argv.slice(2),n=t.shift();return l.canonical(n).then(function(n){return p(n).fail(function(i){if("Can't find package"!==i.message)throw Error(i);g(n,e,t)}).then(function(i){return f(i,n,e,t)})})};var p=function(e){var t=l.directory(e);if(t===e)throw Error("Can't find package");return l.join(t,"package.json"),l.stat(e).then(function(e){return e.isFile()?t:p(t)})},g=function(){throw Error("Can't load module that is not in a package")},f=function(e,t){return o.loadPackage(e).then(function(n){var i=t.slice(e.length+1);return n.async(i)}).done()};o.loadPackage=function(e,t){return"/"!==e.slice(e.length-1,e.length)&&(e+="/"),t=t||{},t.location=u.resolve(c.getLocation(),e),t.moduleTypes=["html","meta"],t.makeLoader=function(e){return o.ReelLoader(e,c.makeLoader(e))},t.makeCompiler=function(e){return o.TemplateCompiler(e,o.SerializationCompiler(e,c.makeCompiler(e)))},c.loadPackage(t.location,t)},o.TemplateLoader=function(e,t){return function(e,n){var i=e.match(/(.*\/)?(?=[^\/]+\.html$)/),r=e.match(/(?=[^\/]+\.json$)/),a=e.match(/(.*\/)?([^\/]+)\.reel\/\2$/);return i?t(e,n).then(function(){return n.dependencies=v(n.text,n.location),n}):r?t(e,n).then(function(){return n.dependencies=L(n.text,[]),n}):a?t(e,n).then(function(){var t=u.resolve(n.location,a[2]+".html");return l.stat(u.parse(t).pathname).then(function(t){t.isFile()&&(n.extraDependencies=[e+".html"])},function(){})}):t(e,n)}},c.makeLoader=function(e){return function(t){return o.TemplateLoader(t,e(t))}}(c.makeLoader);var v=function(e){var t=[],i=n(e);return m(i,t),t},m=function(e,t){i(e,function(e){d.isTag(e)&&("script"===e.name?"text/montage-serialization"===r(e,"type")&&L(a(e),t):"link"===e.name&&"text/montage-serialization"===r(e,"type")&&t.push(r(e,"href")))})},L=function(e,t){var n=JSON.parse(e);return Object.keys(n).forEach(function(e){var i=n[e];i.lazy||("string"==typeof i.prototype&&t.push(s(i.prototype)),"string"==typeof i.object&&t.push(s(i.object)))}),t}}});