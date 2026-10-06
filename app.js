const A='./public/assets/';

const copy={
  en:{
    homeTitle:'Contextual Triangle Brief',
    navUniverse:'This Universe',
    navParallel:'Parallel Universes',
    navMetaverse:'The Metaverse',
    universeTitle:'This Universe',
    universeIntro:'Work that I am proud of<br>Examples of work that I have already created, or helped create, which I am proud of.',
    parallelTitle:'Parallel Universes',
    parallelIntro:'Work of others that I wish I’d made<br>Examples of work not created by myself which represent the kind of work I would love to make myself.',
    metaTitle:'The Metaverse',
    metaIntro:'Things outside of work that I think are interesting<br>Almost everything that I am passionate about, or find interesting, even if it doesn’t currently relate to my work.',
    projects:[
      ['Holly Herndon & Mat Dryhurst','The Call, 2024/10'],
      ['Dunne & Raby','United Micro Kingdoms, 2012/13'],
      ['Simon Heijdens','Lightweeds, 2005'],
      ['Truth & Beauty','OECD Better Life Index, 2010']
    ],
    metaLabels:['Science Fiction&Film','Crime&Deduction','Concert&Live House','Animation','Photography'],
    toggle:'中文'
  },
  zh:{
    homeTitle:'情境三角简报',
    navUniverse:'本宇宙',
    navParallel:'平行宇宙',
    navMetaverse:'元宇宙',
    universeTitle:'本宇宙',
    universeIntro:'我引以为傲的作品<br>这里展示的是我已经独立完成或参与创作，并且真正感到自豪的作品。',
    parallelTitle:'平行宇宙',
    parallelIntro:'那些我希望出自自己之手的他人作品<br>这里展示的是并非由我创作，却代表了我非常希望能够亲自创作的作品类型。',
    metaTitle:'元宇宙',
    metaIntro:'工作之外，我觉得有趣的事物<br>几乎所有我热爱或感兴趣的东西，即使它们目前与我的工作没有直接关系。',
    projects:[
      ['Holly Herndon 与 Mat Dryhurst','《召唤》，2024/10'],
      ['Dunne 与 Raby','《联合微型王国》，2012/13'],
      ['Simon Heijdens','《Lightweeds》，2005'],
      ['Truth & Beauty','OECD 美好生活指数，2010']
    ],
    metaLabels:['科幻与电影','犯罪与推理','演唱会与 Live House','动画','摄影'],
    toggle:'EN'
  }
};

function getLang(){return localStorage.getItem('ctb-lang')==='zh'?'zh':'en'}
function t(){return copy[getLang()]}
function shell(content){return '<section class="stage"><div class="design">'+content+'</div></section>'}
function rules(){return '<div class="rule-h"></div><div class="rule-v"></div>'}
function langToggle(){return '<button class="lang-toggle" type="button" aria-label="Switch language">'+t().toggle+'</button>'}

function home(){
  const c=t();
  return shell('<img class="home-bg" src="'+A+'main/image-1.png" alt="">'+rules()+
    '<div class="title">Sherry Zhang</div>'+
    '<div class="title home-title">'+c.homeTitle+'</div>'+
    '<div class="coordinates">31°14′N, 121°29′E</div>'+
    '<img class="home-ring-image" src="'+A+'figma/home-ring.png" alt="">'+
    '<div class="home-hotspot" aria-label="Open navigation"></div>'+
    '<nav class="nav-options">'+
      '<a href="#/universe">'+c.navUniverse+'</a>'+
      '<a href="#/parallel">'+c.navParallel+'</a>'+
      '<a href="#/metaverse">'+c.navMetaverse+'</a>'+
    '</nav>'+langToggle()
  );
}

function universe(){
  const c=t();
  const strip='<img class="universe-strip" src="'+A+'figma/universe-strip-half.png" alt="">';
  return shell(
    rules()+
    '<a class="section-title title title-link" href="#/">'+c.universeTitle+'</a>'+
    '<div class="intro universe-intro">'+c.universeIntro+'</div>'+
    '<div class="universe-orb a"></div><div class="universe-orb b"></div><div class="universe-orb c"></div>'+
    '<div class="work-track-wrap"><div class="work-track"><div class="work-sequence">'+strip+'</div><div class="work-sequence" aria-hidden="true">'+strip+'</div></div></div>'+
    langToggle()
  );
}

function parallel(){
  const c=t();
  const assets=['parallel/figma/call.png','parallel/figma/umk.png','parallel/figma/lightweeds.png','parallel/figma/oecd.png'];
  const slots=c.projects.map(function(d,i){
    return '<div class="slot" data-slot="'+i+'" role="button" tabindex="0" aria-expanded="false">'+
      '<div class="parallel-panel" tabindex="0"><img class="parallel-panel-art" src="'+A+assets[i]+'" alt=""></div>'+
      '<div class="parallel-label"><span>'+d[0]+'</span><span>'+d[1]+'</span></div>'+
      '<div class="parallel-dot"></div>'+
    '</div>';
  }).join('');
  return shell(
    rules()+
    '<a class="section-title title title-link" href="#/">'+c.parallelTitle+'</a>'+
    '<div class="intro">'+c.parallelIntro+'</div>'+
    '<div class="parallel-grid">'+slots+'</div>'+
    langToggle()
  );
}

function metaGallery(files){return '<span class="meta-gallery">'+files.map(function(f){return '<img src="'+A+'meta/'+f+'" alt="">'}).join('')+'</span>'}

function metaverse(){
  const c=t(), m=c.metaLabels;
  return shell(
    rules()+
    '<a class="section-title title title-link" href="#/">'+c.metaTitle+'</a>'+
    '<div class="intro">'+c.metaIntro+'</div>'+
    '<div class="meta-wheel"><div class="meta-ring"></div>'+
      '<div class="meta-item i1"><div class="meta-upright exact-meta"><span class="meta-label">'+m[0]+'</span><img src="'+A+'figma/metaverse-scifi.png" alt=""></div></div>'+
      '<div class="meta-item i2"><div class="meta-upright exact-meta"><span class="meta-label">'+m[1]+'</span><img src="'+A+'figma/metaverse-crime.png" alt=""></div></div>'+
      '<div class="meta-item i3"><div class="meta-upright exact-meta"><span class="meta-label">'+m[2]+'</span><img src="'+A+'figma/metaverse-concert.png" alt=""></div></div>'+
      '<div class="meta-item i4"><div class="meta-upright"><span>'+m[3]+'</span>'+metaGallery(['2.png','10.png','13.png','17.png'])+'</div></div>'+
      '<div class="meta-item i5"><div class="meta-upright"><span>'+m[4]+'</span>'+metaGallery(['4.png','11.png','12.png','8.png'])+'</div></div>'+
    '</div>'+langToggle()
  );
}

function fitDesign(){
  var d=document.querySelector('.design');
  if(!d)return;
  var s=Math.min(window.innerWidth/3840,window.innerHeight/2160);
  d.style.transform='translate(-50%,-50%) scale('+s+')';
}

function bindInteractions(){
  var hotspot=document.querySelector('.home-hotspot');
  if(hotspot){
    var design=document.querySelector('.design');
    var nav=document.querySelector('.nav-options');
    hotspot.addEventListener('mouseenter',function(){design.classList.add('nav-revealed')});
    document.querySelector('.stage').addEventListener('click',function(e){
      if(!hotspot.contains(e.target)&&!nav.contains(e.target))design.classList.remove('nav-revealed');
    });
  }

  function toggleSlot(slot){
    var grid=slot.closest('.parallel-grid');
    var wasOpen=slot.classList.contains('open');
    document.querySelectorAll('.slot').forEach(function(s){
      s.classList.remove('open');
      s.setAttribute('aria-expanded','false');
      var q=s.querySelector('.parallel-panel');
      if(q)q.classList.remove('open');
    });
    grid.classList.remove('open-0','open-1','open-2','open-3');
    if(!wasOpen){
      slot.classList.add('open');
      slot.setAttribute('aria-expanded','true');
      slot.querySelector('.parallel-panel').classList.add('open');
      grid.classList.add('open-'+slot.dataset.slot);
    }
  }

  document.querySelectorAll('.slot').forEach(function(slot){
    slot.addEventListener('click',function(e){
      if(slot.classList.contains('open')&&e.target.closest('.parallel-panel'))return;
      toggleSlot(slot);
    });
    slot.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleSlot(slot)}
    });
  });

  document.querySelectorAll('.parallel-panel').forEach(function(panel){
    panel.addEventListener('wheel',function(e){e.preventDefault();panel.scrollTop+=e.deltaY},{passive:false});
    panel.addEventListener('keydown',function(e){
      if(e.key==='PageDown'||e.key==='ArrowDown'){e.preventDefault();panel.scrollTop+=e.key==='PageDown'?panel.clientHeight*.8:80}
      if(e.key==='PageUp'||e.key==='ArrowUp'){e.preventDefault();panel.scrollTop-=e.key==='PageUp'?panel.clientHeight*.8:80}
    });
  });

  var lang=document.querySelector('.lang-toggle');
  if(lang)lang.addEventListener('click',function(e){
    e.stopPropagation();
    localStorage.setItem('ctb-lang',getLang()==='zh'?'en':'zh');
    render();
  });
}

function render(){
  var p=location.hash.replace('#','')||'/';
  document.documentElement.lang=getLang()==='zh'?'zh-CN':'en';
  document.getElementById('app').innerHTML=p==='/universe'?universe():p==='/parallel'?parallel():p==='/metaverse'?metaverse():home();
  fitDesign();
  bindInteractions();
}

window.addEventListener('hashchange',render);
window.addEventListener('resize',fitDesign);
render();
