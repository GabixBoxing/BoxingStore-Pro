(function(){
var TAG='osvimerboxing-20';
function aD(a){return 'https://www.amazon.com/dp/'+a+'?tag='+TAG;}
function aQ(q){return 'https://www.amazon.com/s?k='+encodeURIComponent(q)+'&tag='+TAG;}
function goA(u){window.open(u,'_blank','noopener,noreferrer');}

var COMBOS=[
  {
    icon:'🧼',
    label:'COMBO 1',
    title:'High Performance Hygiene',
    title_es:'Higiene de Alto Rendimiento',
    desc:'For athletes who train hard and shower multiple times a day. Eliminates bacteria and protects skin.',
    desc_es:'Para atletas que entrenan duro. Elimina bacterias y protege la piel del sudor extremo.',
    color:'0,168,255',
    btn:'GET HYGIENE COMBO',
    btn_es:'VER COMBO HIGIENE',
    items:[
      {n:'Dove Men+Care Body Wash 4pk',n_es:'Dove Jabón Corporal 4pk',url:aD('B08PFGL5R4')},
      {n:'Degree Clinical 72h Deodorant',n_es:'Desodorante Clínico Degree 72h',url:aD('B08VY4R2YK')},
      {n:'Crest Complete Toothpaste 3pk',n_es:'Pasta Dental Crest 3pk',url:aQ('Crest Complete toothpaste protection 3 pack')},
      {n:'Head & Shoulders Shampoo',n_es:'Champú Head & Shoulders',url:aQ('Head Shoulders classic clean shampoo men')}
    ]
  },
  {
    icon:'👊',
    label:'COMBO 2',
    title:'Armor Maintenance',
    title_es:'Mantenimiento de Armadura',
    desc:'Secret to eliminating extreme sweat odor from boxing wraps, uniforms and sportswear without damaging elastic fibers.',
    desc_es:'El secreto para eliminar el olor de vendas, uniformes y ropa deportiva sin dañar las fibras elásticas.',
    color:'212,160,23',
    btn:'GET LAUNDRY COMBO',
    btn_es:'VER COMBO LAVADO',
    items:[
      {n:'Tide Ultra Sport 132oz 94 Loads',n_es:'Tide Sport Ropa Deportiva 94 cargas',url:aD('B0FLLX471F')},
      {n:'Downy Sport Fabric Softener',n_es:'Suavizante Downy Sport',url:aQ('Downy sport fabric softener athletic wear')},
      {n:'Dawn Ultra Dish Soap 3pk',n_es:'Jabón Dawn Fregado 3pk',url:aQ('Dawn Ultra dish soap 3 pack')},
      {n:'OxiClean Sport Odor Blaster',n_es:'OxiClean Sport Anti-Olor',url:aQ('OxiClean sport odor blaster laundry booster')}
    ]
  },
  {
    icon:'🏠',
    label:'COMBO 3',
    title:'Warrior Home Supply',
    title_es:'Abastecimiento Guerreros',
    desc:'The consumables that run out fast and can never be missing. Save time — receive them automatically at home.',
    desc_es:'Los consumibles que siempre se acaban. Ahorra tiempo y recíbelos automáticamente en casa.',
    color:'0,200,100',
    btn:'GET HOME COMBO',
    btn_es:'VER COMBO HOGAR',
    items:[
      {n:'Charmin Ultra Soft 18 Mega Rolls',n_es:'Charmin Papel Higiénico 18 Mega',url:aD('B07986PWD3')},
      {n:'Bounty Paper Towels 12 Rolls',n_es:'Toallas de Papel Bounty 12 Rollos',url:aQ('Bounty Select-A-Size paper towels 12 rolls')},
      {n:'Glad Trash Bags Tall Kitchen 100ct',n_es:'Bolsas de Basura Glad 100 unidades',url:aQ('Glad tall kitchen trash bags 13 gallon 100 count')},
      {n:'Ziploc Storage Bags Variety Pack',n_es:'Bolsas Ziploc Variedad',url:aQ('Ziploc storage bags variety pack gallon quart')}
    ]
  }
];

var L=window.__CBA_LANG||'en';

// CSS
var css=`
#cba-essentials{background:linear-gradient(135deg,#04040a,#0a0800);border-top:1px solid rgba(212,160,23,.12);padding:28px 14px;font-family:'Barlow',sans-serif}
.ess-hd{max-width:1100px;margin:0 auto 20px}
.ess-ttl{font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:3px;color:#fff;margin-bottom:4px}
.ess-sub{font-size:11px;color:#7a7a9a}
.ess-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;max-width:1100px;margin:0 auto}
.ess-card{border-radius:13px;padding:18px;cursor:default;border:1.5px solid}
.ess-card-lbl{font-family:'Barlow Condensed',sans-serif;font-size:9px;letter-spacing:3px;margin-bottom:6px}
.ess-card-icon{font-size:26px;margin-bottom:8px;display:block}
.ess-card-ttl{font-family:'Bebas Neue',sans-serif;font-size:17px;letter-spacing:2px;color:#fff;margin-bottom:5px}
.ess-card-desc{font-size:11px;color:#aaa;line-height:1.7;margin-bottom:12px}
.ess-items{margin-bottom:14px}
.ess-item{display:flex;align-items:center;gap:8px;padding:7px 8px;background:rgba(255,255,255,.04);border-radius:7px;margin-bottom:5px;cursor:pointer;transition:.2s;border-left:2px solid transparent}
.ess-item:hover{background:rgba(255,255,255,.07)}
.ess-item-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
.ess-item-nm{font-size:11px;color:#ddd;flex:1;font-family:'Barlow Condensed',sans-serif;letter-spacing:.5px}
.ess-item-arr{font-size:11px;color:#555}
.ess-btn{width:100%;border:none;border-radius:8px;padding:11px;font-weight:900;font-size:12px;cursor:pointer;font-family:'Bebas Neue',sans-serif;letter-spacing:2px}
@media(max-width:480px){.ess-grid{grid-template-columns:1fr}}
`;
var style=document.createElement('style');
style.textContent=css;
document.head.appendChild(style);

// HTML
var wrap=document.getElementById('cba-essentials');
if(!wrap)return;

var hd=document.createElement('div');
hd.className='ess-hd';
hd.innerHTML='<div class="ess-ttl">🏆 CBA ESSENTIALS</div><div class="ess-sub" id="ess-sub">Coach Osvimer Rodriguez — Daily Fuel for Athletes and Workers</div>';
wrap.appendChild(hd);

var grid=document.createElement('div');
grid.className='ess-grid';

COMBOS.forEach(function(combo){
  var card=document.createElement('div');
  card.className='ess-card';
  card.style.background='rgba('+combo.color+',.06)';
  card.style.borderColor='rgba('+combo.color+',.25)';

  var lbl=document.createElement('div');
  lbl.className='ess-card-lbl';
  lbl.style.color='rgba('+combo.color+',1)';
  lbl.textContent=combo.label;
  card.appendChild(lbl);

  var ic=document.createElement('span');
  ic.className='ess-card-icon';
  ic.textContent=combo.icon;
  card.appendChild(ic);

  var ttl=document.createElement('div');
  ttl.className='ess-card-ttl';
  ttl.setAttribute('data-en',combo.title);
  ttl.setAttribute('data-es',combo.title_es);
  ttl.textContent=L==='es'?combo.title_es:combo.title;
  card.appendChild(ttl);

  var desc=document.createElement('div');
  desc.className='ess-card-desc';
  desc.setAttribute('data-en',combo.desc);
  desc.setAttribute('data-es',combo.desc_es);
  desc.textContent=L==='es'?combo.desc_es:combo.desc;
  card.appendChild(desc);

  var items=document.createElement('div');
  items.className='ess-items';
  combo.items.forEach(function(item){
    var row=document.createElement('div');
    row.className='ess-item';
    row.style.borderLeftColor='rgba('+combo.color+',.4)';
    var dot=document.createElement('div');
    dot.className='ess-item-dot';
    dot.style.background='rgba('+combo.color+',1)';
    var nm=document.createElement('div');
    nm.className='ess-item-nm';
    nm.setAttribute('data-en',item.n);
    nm.setAttribute('data-es',item.n_es);
    nm.textContent=L==='es'?item.n_es:item.n;
    var arr=document.createElement('div');
    arr.className='ess-item-arr';
    arr.textContent='->';
    row.appendChild(dot);row.appendChild(nm);row.appendChild(arr);
    row.onclick=(function(u){return function(){goA(u);};})(item.url);
    items.appendChild(row);
  });
  card.appendChild(items);

  var btn=document.createElement('button');
  btn.className='ess-btn';
  btn.setAttribute('data-en',combo.btn);
  btn.setAttribute('data-es',combo.btn_es);
  btn.textContent=L==='es'?combo.btn_es:combo.btn;
  btn.style.background='rgba('+combo.color+',.15)';
  btn.style.color='rgb('+combo.color+')';
  btn.style.border='1.5px solid rgba('+combo.color+',.3)';
  btn.onclick=(function(items){
    return function(){items.forEach(function(item){goA(item.url);});};
  })(combo.items);
  card.appendChild(btn);

  grid.appendChild(card);
});

wrap.appendChild(grid);

// Hook into main page language toggle
var origSetL=window.setL;
if(origSetL){
  window.setL=function(l,btn){
    origSetL(l,btn);
    L=l;
    document.querySelectorAll('[data-en]').forEach(function(el){
      el.textContent=l==='es'?el.getAttribute('data-es'):el.getAttribute('data-en');
    });
  };
}
})();
