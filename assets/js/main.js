(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var sel={o:0,m:0,w:1};
var T={o:[['Fine knit','Shirt'],['T-shirt','Sweatshirt'],['Silk blouse','Fine knit'],['Soft T-shirt','Knit polo'],['Silk shirt','Fitted top']],b:[['Tailored trousers','Straight trousers'],['Straight jeans','Wide trousers'],['Slim black trousers','Midi skirt'],['Pull-on trousers','Dark jeans'],['Wide-leg trousers','Column skirt']],l:[['Blazer','Long coat','Trench'],['Denim jacket','Overshirt','Chore coat'],['Leather jacket','Cropped jacket','Tailored coat'],['Cardigan','Overshirt','Packable coat'],['Tuxedo jacket','Wrap coat','Cape']],s:[['Loafers','Leather trainers','Ankle boots'],['White trainers','Sandals','Boots'],['Heeled boots','Pointed flats','Loafers'],['Slip-on trainers','Leather sneakers','Boots'],['Sleek heels','Polished loafers','Heeled boots']],d:[['A slim belt','A watch','A structured tote'],['A cap','A canvas tote','Sunglasses'],['Statement earrings','A small bag','A silk scarf'],['A crossbody bag','A scarf','Sunglasses'],['A clutch','Fine jewellery','A silk scarf']]};
var MC=[[['#141210','#F1ECE3','#C8B59A'],'Quiet confidence in neutrals.'],[['#F1ECE3','#1F2A44','#E8D5CC'],'Easy, with soft contrast.'],[['#8E2A2A','#141210','#F1ECE3'],'One strong colour leads.']];
var O=['Office','Weekend','Dinner','Travel','Event'];
[].forEach.call(document.querySelectorAll('.of-ch'),function(g){var k=g.getAttribute('data-k'),bs=[].slice.call(g.querySelectorAll('button'));bs.forEach(function(b,i){b.setAttribute('aria-pressed',b.classList.contains('on')?'true':'false');b.addEventListener('click',function(){bs.forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false');});b.classList.add('on');b.setAttribute('aria-pressed','true');sel[k]=i;cp();});});});
function cp(){var o=$('cp-o');if(!o)return;var m=sel.m,w=sel.w,c=MC[m][0],pick=function(a,i){return a[Math.min(i,a.length-1)];};
 var rows=[['Top',pick(T.o[sel.o],m===1?0:1-(m===2?0:1)),c[1]],['Bottom',pick(T.b[sel.o],m===2?1:0),c[0]],['Layer',w===0?'None needed':pick(T.l[sel.o],w===2?1:m===2?0:2),c[2]],['Shoes',pick(T.s[sel.o],w===2?2:w===0?1:0),c[0]],['Detail',pick(T.d[sel.o],m),c[2]]];
 o.innerHTML='<h3>The '+O[sel.o].toLowerCase()+' edit</h3><ul>'+rows.map(function(r){return '<li><span>'+r[0]+'</span><b>'+r[1]+'</b><i style="background:'+r[2]+'"></i></li>';}).join('')+'</ul><p>'+MC[m][1]+'</p>';}
cp();
var P=[['Black',['#141210','#F1ECE3','#B89B72','#8E2A2A'],'Black loves ivory, camel and a deep red. Add gold jewellery for warmth.'],['Navy',['#1F2A44','#F1ECE3','#C8B59A','#9DB1C9'],'Navy with ivory, camel and soft blue is the most forgiving palette there is.'],['Camel',['#C8B59A','#F1ECE3','#141210','#6B4E3D'],'Camel glows next to ivory and black, and looks rich with chocolate brown.'],['Ivory',['#F1ECE3','#C8B59A','#7C8471','#1F2A44'],'Ivory head to toe, then camel, olive or navy for depth.'],['Olive',['#7C8471','#F1ECE3','#C8B59A','#6B4E3D'],'Olive with ivory, camel and brown feels relaxed and expensive.']];
var bc=[].slice.call(document.querySelectorAll('input[name=bc]'));if(bc.length){function pc(){var k=0;bc.forEach(function(x){if(x.checked)k=+x.value;});var p=P[k];$('pc-o').innerHTML='<h3>'+p[0]+'</h3><div class="of-pairs">'+p[1].map(function(c){return '<i style="background:'+c+'"></i>';}).join('')+'</div><p>'+p[2]+'</p>';}bc.forEach(function(x){x.addEventListener('change',pc);});pc();}
var c1=$('c1');if(c1){var ids=['c1','c2','c3','c4'];function cap(){var v=ids.map(function(i){var n=+$(i).value;$(i+'v').textContent=n;return n;}),n=v[0]*v[1]*(v[2]+1)*v[3],el=$('cap-n');el.textContent=n;el.style.transform='scale(1.06)';setTimeout(function(){el.style.transform='';},180);
  var tot=v[0]+v[1]+v[2]+v[3];$('cap-t').textContent=tot+' pieces, every one working with the others. That is about '+(n/tot).toFixed(1)+' outfits per piece.';}ids.forEach(function(i){$(i).addEventListener('input',cap);});cap();}
})();
