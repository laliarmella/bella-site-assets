(function(){
try{
var P=window.parent,D=P.document,B='https://cdn.jsdelivr.net/gh/laliarmella/bella-site-assets@main/';
if(D.querySelector('.add-section-button')||D.getElementById('bbl-chrome'))return;
var links=[['Home','/home'],['About','/home#about'],['Services','/home#services'],['Gallery','/home#gallery'],['Memberships','/memberships'],['Shop','/products']];
var path=P.location.pathname.replace(/\/$/,'');
var css='@font-face{font-family:Aloevera;font-weight:500;src:url('+B+'fonts/aloevera-500.woff2) format("woff2")}'+
'@font-face{font-family:Aloevera;font-weight:700;src:url('+B+'fonts/aloevera-700.woff2) format("woff2")}'+
'.v-navigation-bar{display:none!important}'+
'#bbl-hdr{position:sticky;top:0;z-index:999;background:rgba(246,240,232,.96);border-bottom:1px solid rgba(57,58,33,.12);font-family:Aloevera,sans-serif}'+
'#bbl-hdr .in{max-width:1240px;margin:0 auto;padding:12px clamp(20px,5vw,48px);display:flex;align-items:center;justify-content:space-between;gap:24px}'+
'#bbl-hdr img{height:64px;width:auto;display:block}'+
'#bbl-hdr nav{display:flex;gap:30px}'+
'#bbl-hdr nav a{font-weight:500;font-size:15px;color:#393A21;text-decoration:none;padding:6px 0;border-bottom:2px solid transparent}'+
'#bbl-hdr nav a.on{border-bottom-color:#7A4C37;color:#7A4C37}'+
'#bbl-hdr .bk{background:#7A4C37;color:#fff;font-weight:600;font-size:13px;letter-spacing:.06em;padding:14px 26px;border-radius:999px;text-decoration:none}'+
'#bbl-hdr .ac{font-weight:500;font-size:14px;color:#393A21;text-decoration:none;margin-right:6px}'+
'#bbl-hdr .mb{display:none;background:none;border:1px solid #393A21;color:#393A21;border-radius:999px;padding:10px 16px;font:500 13px Aloevera,sans-serif}'+
'#bbl-hdr .mn{display:none;padding:8px clamp(20px,5vw,48px) 16px;flex-direction:column}'+
'#bbl-hdr .mn a{padding:12px 0;color:#393A21;text-decoration:none;font-weight:500;border-top:1px solid rgba(57,58,33,.1)}'+
'#bbl-hdr.open .mn{display:flex}'+
'@media(max-width:900px){#bbl-hdr nav{display:none}#bbl-hdr .mb{display:inline-block}#bbl-hdr img{height:52px}#bbl-hdr .bk{padding:12px 18px}}'+
'#bbl-ftr{background:#2B2C18;color:#D2C3AF;font-family:Aloevera,sans-serif}'+
'#bbl-ftr .in{max-width:1240px;margin:0 auto;padding:48px clamp(20px,5vw,48px) 32px;display:flex;flex-wrap:wrap;gap:32px 64px;justify-content:space-between}'+
'#bbl-ftr img{height:100px;width:auto;display:block;margin-bottom:14px}'+
'#bbl-ftr p{margin:0;font-size:17px}#bbl-ftr a{display:block;color:#D2C3AF;text-decoration:none;font-size:17px;line-height:1.9}'+
'#bbl-ftr h4{margin:0 0 6px;font-weight:500;font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:#F6F0E8}'+
'#bbl-ftr .c{max-width:1240px;margin:0 auto;padding:0 clamp(20px,5vw,48px) 28px;font-size:14px;color:#B9AC98}';
var st=D.createElement('style');st.id='bbl-chrome';st.textContent=css;D.head.appendChild(st);
function L(a){return '<a href="'+a[1]+'"'+(path===a[1]?' class="on"':'')+'>'+a[0]+'</a>'}
var h=D.createElement('div');h.id='bbl-hdr';
h.innerHTML='<div class="in"><a href="/home"><img src="'+B+'img/bbl-green.png" alt="Bella Beauty Lounge"></a><nav>'+links.map(L).join('')+'</nav><div style="display:flex;gap:10px;align-items:center"><a class="ac" data-k=".v-login" href="#">Login</a><a class="ac" data-k=".cart-comp" href="#">Cart</a><a class="bk" href="/book-now">Book now</a><button class="mb" type="button">Menu</button></div></div><div class="mn">'+links.map(function(a){return '<a href="'+a[1]+'">'+a[0]+'</a>'}).join('')+'</div>';
[].forEach.call(h.querySelectorAll('.ac'),function(a){a.onclick=function(e){e.preventDefault();var t=D.querySelector(a.getAttribute('data-k'));if(t)t.click()}});
h.querySelector('.mb').onclick=function(){h.classList.toggle('open')};
var f=D.createElement('div');f.id='bbl-ftr';
f.innerHTML='<div class="in"><div><img src="'+B+'img/bbl-white.png" alt="Bella Beauty Lounge"><p>Feel well. Look beautifully you.</p></div><div><h4>Explore</h4>'+links.map(function(a){return '<a href="'+a[1]+'">'+a[0]+'</a>'}).join('')+'</div><div><h4>Visit</h4><a style="pointer-events:none">809 Walkerbilt Rd, Ste #4</a><a style="pointer-events:none">Naples, FL 34110</a><a style="pointer-events:none">By appointment only</a><a href="tel:+12392980661">(239) 298-0661</a><a href="https://www.instagram.com/bellabeauty.lng/" target="_blank" rel="noopener">@bellabeauty.lng</a></div></div><div class="c">&copy; Bella Beauty Lounge. Booking powered by Vagaro.</div>';
var root=D.querySelector('.v-page-root')||D.body;
root.insertBefore(h,root.firstChild);
var vf=D.querySelector('.v-footer');
if(vf&&vf.parentNode)vf.parentNode.insertBefore(f,vf);else root.appendChild(f);
var fe=P.frameElement,sec=fe&&fe.closest('.v-section');if(sec)sec.style.display='none';
}catch(e){}
})();
