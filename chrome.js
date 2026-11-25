(function(){
try{
var P=window.parent,D=P.document,B='https://cdn.jsdelivr.net/gh/laliarmella/bella-site-assets@main/';
if(D.querySelector('.add-section-button')||D.getElementById('bbl-chrome'))return;
var links=[['Home','/home'],['About','/home#about'],['Services','/home#services'],['Gallery','/home#gallery'],['Memberships','/memberships'],['Shop','/products']];
var path=P.location.pathname.replace(/\/$/,'');
var css='@font-face{font-family:Aloevera;font-weight:500;src:url('+B+'fonts/aloevera-500.woff2) format("woff2")}'+
'@font-face{font-family:Aloevera;font-weight:700;src:url('+B+'fonts/aloevera-700.woff2) format("woff2")}'+
'.v-navigation-bar{display:none!important}'+
'#bbl-hdr,#bbl-ftr{width:100%;align-self:stretch;flex:none}'+
'.v-section.v-footer{display:none!important}'+
'#bbl-hdr{position:sticky;top:0;z-index:999;background:#F6F0E8;border-bottom:1px solid rgba(57,58,33,.12);font-family:Aloevera,sans-serif}'+
'#bbl-hdr .in{max-width:1240px;margin:0 auto;padding:12px clamp(20px,5vw,48px);display:flex;align-items:center;justify-content:space-between;gap:24px}'+
'#bbl-hdr img{height:64px;width:auto;display:block}'+
'#bbl-hdr nav{display:flex;gap:30px}'+
'#bbl-hdr nav a{font-weight:500;font-size:15px;color:#393A21;text-decoration:none;padding:6px 0;border-bottom:2px solid transparent}'+
'#bbl-hdr nav a.on{border-bottom-color:#7A4C37;color:#7A4C37}'+
'#bbl-hdr .bk{background:#7A4C37;color:#fff;font-weight:600;font-size:13px;letter-spacing:.06em;padding:14px 26px;border-radius:10px;text-decoration:none}'+
'#bbl-hdr .ac{font-weight:500;font-size:14px;color:#393A21;text-decoration:none;margin-right:6px}'+
'#bbl-hdr .mb{display:none;background:none;border:1px solid #393A21;color:#393A21;border-radius:12px;padding:10px 16px;font:500 13px Aloevera,sans-serif}'+
'#bbl-hdr .mn{display:none;padding:8px clamp(20px,5vw,48px) 16px;flex-direction:column}'+
'#bbl-hdr .mn a{padding:12px 0;color:#393A21;text-decoration:none;font-weight:500;border-top:1px solid rgba(57,58,33,.1)}'+
'#bbl-hdr.open .mn{display:flex}'+
'@media(max-width:900px){#bbl-hdr nav{display:none}#bbl-hdr .mb{display:inline-block}#bbl-hdr img{height:52px}#bbl-hdr .bk{padding:12px 18px}}'+
'#bbl-ftr{background:#2B2C18;color:#D2C3AF;font-family:Aloevera,sans-serif}'+
'#bbl-ftr .in{max-width:1240px;margin:0 auto;padding:48px clamp(20px,5vw,48px) 32px;display:flex;flex-wrap:wrap;gap:32px 64px;justify-content:space-between}'+
'#bbl-ftr img{height:100px;width:auto;display:block;margin-bottom:14px}'+
'#bbl-ftr p{margin:0;font-size:17px}#bbl-ftr a{display:block;color:#D2C3AF;text-decoration:none;font-size:17px;line-height:1.9}'+
'#bbl-ftr h4{margin:0 0 6px;font-weight:500;font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:#F6F0E8}'+
'#bbl-ftr .c{max-width:1240px;margin:0 auto;padding:0 clamp(20px,5vw,48px) 28px;font-size:14px;color:#B9AC98;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px 24px}'+
'#bbl-ftr .lg{max-width:1240px;margin:0 auto;padding:0 clamp(20px,5vw,48px) 24px;font-size:14px;line-height:1.55;color:#B9AC98}'+
'#bbl-ftr .lg .ll{border-top:1px solid rgba(210,195,175,.2);padding-top:22px;display:flex;flex-wrap:wrap;gap:8px 24px;margin-bottom:16px}'+
'#bbl-ftr .lg .ll a{display:inline;font-size:16px;line-height:1.5;text-decoration:underline;text-underline-offset:3px}'+
'#bbl-ftr .lg p{margin:0 0 12px;font-size:14px}#bbl-ftr .lg p.nt{padding-left:14px;border-left:3px solid #D2C3AF;font-weight:700;color:#D2C3AF;letter-spacing:.01em}';
var st=D.createElement('style');st.id='bbl-chrome';st.textContent=css;D.head.appendChild(st);
function L(a){return '<a href="'+a[1]+'"'+(path===a[1]?' class="on"':'')+'>'+a[0]+'</a>'}
var h=D.createElement('div');h.id='bbl-hdr';
h.innerHTML='<div class="in"><a href="/home"><img src="'+B+'img/bbl-green.png" alt="Bella Beauty Lounge"></a><nav>'+links.map(L).join('')+'</nav><div style="display:flex;gap:10px;align-items:center"><a class="ac" data-k=".v-login" href="#">Login</a><a class="ac" data-k=".cart-comp" href="#">Cart</a><a class="bk" href="/book-now">Book now</a><button class="mb" type="button">Menu</button></div></div><div class="mn">'+links.map(function(a){return '<a href="'+a[1]+'">'+a[0]+'</a>'}).join('')+'</div>';
[].forEach.call(h.querySelectorAll('.ac'),function(a){a.onclick=function(e){e.preventDefault();var t=D.querySelector(a.getAttribute('data-k'));if(t)t.click()}});
h.querySelector('.mb').onclick=function(){h.classList.toggle('open')};
var f=D.createElement('div');f.id='bbl-ftr';
f.innerHTML='<div class="in"><div><img src="'+B+'img/bbl-white.png" alt="Bella Beauty Lounge"><p>Feel well. Look beautifully you.</p></div><div><h4>Explore</h4>'+links.map(function(a){return '<a href="'+a[1]+'">'+a[0]+'</a>'}).join('')+'</div><div><h4>Visit</h4><a style="pointer-events:none">809 Walkerbilt Rd, Ste #4</a><a style="pointer-events:none">Naples, FL 34110</a><a style="pointer-events:none">By appointment only</a><a href="tel:+12392980661">(239) 298-0661</a><a href="https://www.instagram.com/bellabeauty.lng/" target="_blank" rel="noopener">@bellabeauty.lng</a></div></div><div class="lg"><div class="ll"><a href="/home#privacy">Privacy policy</a><a href="/home#terms">Terms of use</a><a href="/home#disclaimer">Medical disclaimer</a><a href="/home#health">Health information</a><a href="/home#accessibility">Accessibility</a><a href="/home#director">Medical director</a></div><p>Medical services provided by licensed health care professionals under the supervision of a Florida-licensed physician medical director. This website is for information only and is not medical advice. Individual results vary.</p><p class="nt">THE PATIENT AND ANY OTHER PERSON RESPONSIBLE FOR PAYMENT HAS A RIGHT TO REFUSE TO PAY, CANCEL PAYMENT, OR BE REIMBURSED FOR PAYMENT FOR ANY OTHER SERVICE, EXAMINATION, OR TREATMENT THAT IS PERFORMED AS A RESULT OF AND WITHIN 72 HOURS OF RESPONDING TO THE ADVERTISEMENT FOR THE FREE, DISCOUNTED FEE, OR REDUCED FEE SERVICE, EXAMINATION, OR TREATMENT.</p><p>Payment options through Affirm are subject to an eligibility check and are provided by these lending partners: affirm.com/lenders. Xeomin&reg; is a registered trademark of Merz Pharmaceuticals, LLC; Botox&reg; is a registered trademark of Allergan, Inc. Bella Beauty Lounge is not affiliated with either company.</p></div><div class="c"><span>&copy; 2026 Bella Beauty Lounge. Booking powered by Vagaro.</span><span>Results vary by person. Medical treatments require a consultation.</span></div>';
var root=D.querySelector('.v-page-root')||D.body;
root.insertBefore(h,root.firstChild);
var vf=D.querySelector('.v-footer');
if(vf&&vf.parentNode)vf.parentNode.insertBefore(f,vf);else root.appendChild(f);
[].forEach.call(D.querySelectorAll('.v-section'),function(x){if(x.querySelector('.v-html-embed'))x.style.display='none'});

function unlock(){try{[].forEach.call(D.querySelectorAll('body *'),function(e){if(e.closest('#bbl-hdr,#bbl-ftr'))return;var c=getComputedStyle(e);if((c.overflowY==='auto'||c.overflowY==='scroll')&&e.scrollHeight>e.clientHeight+20&&e.clientHeight>200&&e.closest('.v-section')){var p=e;for(var k=0;k<3&&p&&!p.classList.contains('v-page-root');k++){p.style.setProperty('height','auto','important');p.style.setProperty('max-height','none','important');p.style.setProperty('overflow','visible','important');p=p.parentElement}}})}catch(x){}}
[600,1500,3000,6000].forEach(function(t){setTimeout(unlock,t)});
}catch(e){}
})();
