const ASSET = 'assets/collection-flatlay.png';
const seedItems = [
  {name:'Chastity Cage Rosa 1',category:'Toys',tags:['chastitycage','rosa', "plastico"],description:'Longitud: 10cm.',image:"assets/chastityCageRosa1.png",pos:'45% 75%'},
  {name:'Chastity Cage Rosa 2',category:'Toys',tags:['chastitycage','rosa', "plastico"],description:'Longitud: 9cm.',image:"assets/chastityCageRosa2.png",pos:'45% 75%'},
  {name:'Chastity Cage Negra 1',category:'Toys',tags:['chastitycage','negra', "plastico"],description:'Longitud: 8cm.',image:"assets/chastitycagenegrapequena.png",pos:'45% 75%'},
  {name:'Chastity Cage Negra 2',category:'Toys',tags:['chastitycage','negra', "plastico"],description:'Longitud: 10cm.',image:"assets/chastitycagenegra2.png",pos:'45% 75%'},
  {name:'Chastity Cage Metal',category:'Toys',tags:['chastitycage', "metal"],description:'Longitud: 8.5cm.',image:"assets/metalChastityCage.png",pos:'45% 75%'},
  {name:'Chastity Cage Metal Pequeña',category:'Toys',tags:['chastitycage', "metal", "micro"],description:'Longitud: 3.5cm.',image:"assets/nubcage.png",pos:'45% 75%'},
  {name:'Ball Gag',category:'Toys',tags:['gag'],description:'Ball gag con agujeros.',image:"assets/ballGag.png",pos:'45% 75%'},
  {name:'Ball Gag 2',category:'Toys',tags:['gag'],description:'Ball gag con agujeros.',image:"assets/ballgag2.png",pos:'45% 75%', ordered:true},
  {name:'Anal Plug',category:'Toys',tags:['anal', "plug"],description:'Logitud: 5 cm.',image:"assets/analplug1.png",pos:'45% 75%'},
  {name:'Anal Plug Vibración',category:'Toys',tags:['anal', "plug", "vibración", "remoto"],description:'Logitud: 7.5 cm.',image:"assets/analplugvibracion.png",pos:'45% 75%'},
  {name:'Dildo',category:'Toys',tags:['anal', "dildo"],description:'Logitud: 15.5 cm.',image:"assets/dildo1.png",pos:'45% 75%'},
  {name:'Tweezer Nipple Clamps',category:'Toys',tags:['nippleclamps', "pezones"],description:'',image:"assets/clamps1.png",pos:'45% 75%'},
  {name:'Clover Nipple Clamps',category:'Toys',tags:['nippleclamps', "pezones"],description:'',image:"assets/clamps2.png",pos:'45% 75%'},
  {name:'Ball Crusher',category:'Toys',tags:['cbt'],description:'',image:"assets/ballCrusher.png",pos:'45% 75%'},
  {name:'Cuerdas',category:'Toys',tags:['cuerda'],description:'Logitud: 0.5 m (cada una) x5.',image:"assets/cuerdas.png",pos:'45% 75%', ordered:true},
  {name:'Esposas',category:'Toys',tags:['esposas'],description:'Esposas de muñecas y tobillos con arnés en X.',image:"assets/esposas.png",pos:'45% 75%', ordered:true},
  {name:'Antifaz',category:'Toys',tags:['antifaz'],description:'Antifaz.',image:"assets/antifaz.png",pos:'45% 75%', ordered:true},
  {name:'Collar con correa',category:'Toys',tags:['correa', "collar"],description:'Collar con correa.',image:"assets/collarConCorrea.png",pos:'45% 75%', ordered:true},
  {name:'Correa',category:'Toys',tags:['correa'],description:'Correa de metal.',image:"assets/correa.png",pos:'45% 75%', ordered:true},
  {name:'Tetas falsas',category:'Clothes', subcategory:'Accessories',tags:['tetas'],description:'Sujetador adhesivo reusable que simula el efecto de las tetas reales.',image:"assets/fakeBoobs.png",pos:'45% 75%'},
  {name:'Tangas de lencería',category:'Clothes', subcategory:'Underwear',tags:['tangas'],description:'Tangas de lencería de color negro, gris, azul, rosa y rosa claro (2 por color).',image:"assets/tangas.png",pos:'45% 75%'},
  {name:'Sujetador sin tirantes de lencería',category:'Clothes', subcategory:'Underwear',tags:['sujetadores', 'negro'],description:'Sujetador sin tirantes de lencería.',image:"assets/sujetadorSinTirantes.png",pos:'45% 75%'},
  {name:'Conjunto de ropa interior rosa con letras',category:'Clothes', subcategory:'Underwear',tags:['sujetadores', 'tangas', 'conjunto', 'rosa'],description:'Conjunto de ropa interior rosa con letras.',image:"assets/babySexyPinkSet.png",pos:'45% 75%'},
  {name:'Conjunto de lencería de terciopelo',category:'Clothes', subcategory:'Underwear',tags:['sujetadores', 'tangas', 'conjunto'],description:'Conjunto de lencería de terciopelo.',image:"assets/lenceriaConjuntoTerciopelo.png",pos:'45% 75%'},
  {name:'Conjunto de lencería negra',category:'Clothes', subcategory:'Underwear',tags:['sujetadores', 'tangas', 'conjunto', 'negro'],description:'Conjunto de lencería negra.',image:"assets/conjuntoLenceriaNegro.png",pos:'45% 75%'},
  {name:'Set de anillos',category:'Clothes', subcategory:'Accessories',tags:['anillos', 'accesorios'],description:'Set de diferentes anillos.',image:"assets/setAnillos.png",pos:'45% 75%', ordered:true},
  {name:'Set de pulseras',category:'Clothes', subcategory:'Accessories',tags:['pulseras', 'accesorios'],description:'Set de diferentes pulseras.',image:"assets/setPulseras.png",pos:'45% 75%', ordered:true},
  {name:'Minifalda rosa',category:'Clothes', subcategory:'Skirts',tags:['faldas', 'minifaldas', "rosa"],description:'Minifalda de color rosa.',image:"assets/minifaldaRosa.png",pos:'45% 75%', ordered:true},
  {name:'Minifalda negra ajustada',category:'Clothes', subcategory:'Skirts',tags:['faldas', 'minifaldas', "negro"],description:'Minifalda de color negro ajustada.',image:"assets/minifaldaApretadaNegra.png",pos:'45% 75%', ordered:true},
  {name:'Falda negra',category:'Clothes', subcategory:'Skirts',tags:['faldas', "negro"],description:'Falda de color negro.',image:"assets/faldaNegra.png",pos:'45% 75%', ordered:true},
  {name:'Body de rejilla',category:'Clothes', subcategory:'Underwear',tags:['body', 'fishnet', "negro"],description:'Bodysuit de rejilla de lencería.',image:"assets/fishnetBodysuit.png",pos:'45% 75%', ordered:true},
  {name:'Vestido negro de efecto cuero sin espalda',category:'Clothes', subcategory:'Dress',tags:['vestido', 'cuero', "negro"],description:'Vestido negro de efecto cuero sin espalda.',images: [
    'assets/vestidoNegroCueroSinEspalda.png',
    'assets/vestidoNegroCueroSinEspalda2.png'
  ],pos:'45% 75%', ordered:true},
  {name:'Body negro efecto cuero',category:'Clothes', subcategory:'Bodys',tags:['body', 'cuero', "negro"],description:'Body negro de efecto cuero.',image:"assets/bodyNegroCuero.png",pos:'45% 75%', ordered:true},
  {name:'Fishnet agujeros grandes',category:'Clothes', subcategory:'Underwear',tags:['fishnet', "negro"],description:'Fishnet con agujeros grandes.',image:"assets/fishnetAgujerosGrandes.png",pos:'45% 75%', ordered:true},
  {name:'Fishnet agujeros medianos',category:'Clothes', subcategory:'Underwear',tags:['fishnet', "negro"],description:'Fishnet con agujeros medianos.',image:"assets/fishnetAgujerosMedianos.png",pos:'45% 75%', ordered:true},
  {name:'Fishnet agujeros pequeños',category:'Clothes', subcategory:'Underwear',tags:['fishnet', "negro"],description:'Fishnet con agujeros pequeños.',image:"assets/fishnetAgujerosPequenos.png",pos:'45% 75%', ordered:true},
  {name:'Camiseta corta rosa',category:'Clothes', subcategory:'T-Shirts',tags:['camiseta', "rosa"],description:'Camiseta corta de color rosa.',image:"assets/croppedTShirtRosa.png",pos:'45% 75%', ordered:true},
  {name:'Croptop efecto cuero negro sin tirantes',category:'Clothes', subcategory:'Tops',tags:['croptop', "negro"],description:'Croptop de efecto cuero de color negro sin tirantes.',image:"assets/straplessCropTopCueroNegro.png",pos:'45% 75%', ordered:true},
  {name:'Tacones de color negro',category:'Clothes', subcategory:'High Heels',tags:['tacones', "negro"],description:'Tacones de color negro.',image:"assets/taconesNegros.png",pos:'45% 75%', ordered:true},
  {name:'Collar de color rosa con hevilla',category:'Clothes', subcategory:'Accessories',tags:['collar', "rosa"],description:'Collar de color rosa con hevilla.',image:"assets/collarRosaConHevilla.png",pos:'45% 75%', ordered:true},
];
// Los productos de la lista de deseos se editan manualmente en wishlist-data.js.
// Hay dos apartados principales: Toys y Clothes.
// Solo Clothes utiliza `subcategory`, cuyos valores se generan automáticamente.
const items = seedItems.map((item, index) => ({
  ...item,
  section: item.category === 'Clothes' || item.section === 'Clothes' || ['Clothing','Accessories'].includes(item.category) ? 'Clothes' : 'Toys',
  subcategory: item.subcategory || 'Sin categoría',
  tags: item.tags || [],
  images: item.images?.length ? item.images : [item.image || ASSET],
  id: String(index)
}));
const wishlistItems = wishlistSeed.map((item,index)=>({
  ...item,
  section:'Wishlist',
  category:'Wishlist',
  tags:item.tags||[],
  images:item.images?.length?item.images:[item.image||ASSET],
  url:item.url||item.sourceUrl||'',
  price:Number(item.price??0),
  id:`wish-${index}`
}));
const allItems=[...items,...wishlistItems];
const sections = ['Toys','Clothes','Wishlist'];
let activeSection = 'Toys'; let activeCategory = 'Todas'; let activeTag = '';
let language = localStorage.getItem('sissy-clara-language') || 'en';
const translations = {
  es:{brand:'Sissy Clara',private:'Colección de Clara',all:'Todas',ordered:'Pedido',noDescription:'Sin descripción.',item:'objeto',items:'objetos',empty:'No hay nada aquí',emptyCopy:'Prueba con otro filtro.',close:'Cerrar',viewImage:'Ver imagen',viewOnTemu:'Ver en Temu',Wishlist:'Lista de deseos',Toys:'Juguetes',Clothes:'Ropa',Accessories:'Accesorios',Underwear:'Ropa interior',Skirts:'Faldas',Dress:'Vestidos',Bodys:'Bodies','T-Shirts':'Camisetas',Tops:'Tops','High Heels':'Tacones','Sin categoría':'Sin categoría'},
  en:{brand:'Sissy Clara',private:"Clara's collection",all:'All',ordered:'Ordered',noDescription:'No description.',item:'item',items:'items',empty:'Nothing here',emptyCopy:'Try another filter.',close:'Close',viewImage:'View image',viewOnTemu:'View on Temu',Wishlist:'Wishlist',Toys:'Toys',Clothes:'Clothes',Accessories:'Accessories',Underwear:'Underwear',Skirts:'Skirts',Dress:'Dresses',Bodys:'Bodysuits','T-Shirts':'T-shirts',Tops:'Tops','High Heels':'High heels','Sin categoría':'Uncategorised'}
};
const t = key => translations[language][key] || key;
const contentEn = {
  'Chastity Cage Rosa 1':'Pink Chastity Cage 1','Chastity Cage Rosa 2':'Pink Chastity Cage 2','Chastity Cage Negra 1':'Black Chastity Cage 1','Chastity Cage Negra 2':'Black Chastity Cage 2','Chastity Cage Metal':'Metal Chastity Cage','Chastity Cage Metal Pequeña':'Small Metal Chastity Cage','Anal Plug Vibración':'Vibrating Anal Plug','Cuerdas':'Ropes','Esposas':'Restraints','Antifaz':'Blindfold','Collar con correa':'Collar with Leash','Correa':'Leash','Tetas falsas':'Fake Breasts','Tangas de lencería':'Lingerie Thongs','Sujetador sin tirantes de lencería':'Strapless Lingerie Bra','Conjunto de ropa interior rosa con letras':'Pink Lettered Underwear Set','Conjunto de lencería de terciopelo':'Velvet Lingerie Set','Conjunto de lencería negra':'Black Lingerie Set','Set de anillos':'Ring Set','Set de pulseras':'Bracelet Set','Minifalda rosa':'Pink Miniskirt','Minifalda negra ajustada':'Tight Black Miniskirt','Falda negra':'Black Skirt','Body de rejilla':'Fishnet Bodysuit','Vestido negro de efecto cuero sin espalda':'Backless Black Faux Leather Dress','Body negro efecto cuero':'Black Faux Leather Bodysuit','Fishnet agujeros grandes':'Large-hole Fishnet','Fishnet agujeros medianos':'Medium-hole Fishnet','Fishnet agujeros pequeños':'Small-hole Fishnet','Camiseta corta rosa':'Pink Cropped T-shirt','Croptop efecto cuero negro sin tirantes':'Black Strapless Faux Leather Crop Top','Tacones de color negro':'Black High Heels','Collar de color rosa con hevilla':'Pink Buckle Collar',
  'Ball gag con agujeros.':'Ball gag with breathing holes.','Cuerdas.':'Ropes.','Antifaz.':'Blindfold.','Collar con correa.':'Collar with leash.','Correa de metal.':'Metal leash.','Sujetador adhesivo reusable que simula el efecto de las tetas reales.':'Reusable adhesive bra that simulates the look of real breasts.','Tangas de lencería de color negro, gris, azul, rosa y rosa claro (2 por color).':'Lingerie thongs in black, grey, blue, pink and light pink (2 of each colour).','Sujetador sin tirantes de lencería.':'Strapless lingerie bra.','Conjunto de ropa interior rosa con letras.':'Pink lettered underwear set.','Conjunto de lencería de terciopelo.':'Velvet lingerie set.','Conjunto de lencería negra.':'Black lingerie set.','Set de diferentes anillos.':'Set of assorted rings.','Set de diferentes pulseras.':'Set of assorted bracelets.','Minifalda de color rosa.':'Pink miniskirt.','Minifalda de color negro ajustada.':'Tight black miniskirt.','Falda de color negro.':'Black skirt.','Bodysuit de rejilla de lencería.':'Fishnet lingerie bodysuit.','Vestido negro de efecto cuero sin espalda.':'Backless black faux leather dress.','Body negro de efecto cuero.':'Black faux leather bodysuit.','Fishnet con agujeros grandes.':'Large-hole fishnet.','Fishnet con agujeros medianos.':'Medium-hole fishnet.','Fishnet con agujeros pequeños.':'Small-hole fishnet.','Camiseta corta de color rosa.':'Pink cropped T-shirt.','Croptop de efecto cuero de color negro sin tirantes.':'Black strapless faux leather crop top.','Tacones de color negro.':'Black high heels.','Collar de color rosa con hevilla.':'Pink buckle collar.','Esposas de muñecas y tobillos con arnés en X.':'Wrist and ankle restraints with an X harness.'
};
const tagEn={rosa:'pink',negra:'black',negro:'black',plastico:'plastic','plástico':'plastic',metal:'metal',remoto:'remote',pezones:'nipples',cuerda:'rope',esposas:'restraints',antifaz:'blindfold',correa:'leash',collar:'collar',tetas:'breasts',tangas:'thongs',sujetadores:'bras',conjunto:'set',anillos:'rings',accesorios:'accessories',pulseras:'bracelets',faldas:'skirts',minifaldas:'miniskirts',vestido:'dress',cuero:'leather',camiseta:'T-shirt',tacones:'high heels'};
const tagEs={makeup:'maquillaje',clothes:'ropa',toys:'juguetes',beauty:'belleza',shoes:'zapatos',accessories:'accesorios',underwear:'ropa interior',dress:'vestido',dresses:'vestidos',skirt:'falda',skirts:'faldas',pink:'rosa',black:'negro',white:'blanco'};
function content(value,type='text'){
  if(language==='es')return type==='tag'?(tagEs[value.toLowerCase()]||value):value;
  if(type==='tag')return tagEn[value]||value;
  if(contentEn[value])return contentEn[value];
  return value.replace(/^Longitud:/,'Length:').replace(/^Logitud:/,'Length:').replace(/cada una/,'each');
}
const $ = s => document.querySelector(s);
const grid=$('#itemGrid'), sectionFilters=$('#sectionFilters'), subcategoryFilters=$('#subcategoryFilters'), tagFilters=$('#tagFilters');
function escapeHTML(v=''){return v.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function imageMarkup(item, cls='', source=item.images?.[0]||item.image||ASSET){return `<img class="${cls}" src="${escapeHTML(source)}" alt="${escapeHTML(content(item.name))}" style="object-position:${escapeHTML(item.pos||'center')}">`}
function likeKey(item){const source=item.sourceUrl||item.url||`${item.section}-${item.subcategory||''}-${item.name}`;let hash=2166136261;for(let i=0;i<source.length;i++){hash^=source.charCodeAt(i);hash=Math.imul(hash,16777619)}return `product-${(hash>>>0).toString(36)}`}
function formatPrice(value){return new Intl.NumberFormat(language==='es'?'es-ES':'en-GB',{style:'currency',currency:'EUR'}).format(value)}
const sectionItems=()=>allItems.filter(i=>i.section===activeSection);
function filtered(){return sectionItems().filter(i=>(activeSection!=='Clothes'||activeCategory==='Todas'||i.subcategory===activeCategory)&&(!activeTag||i.tags.includes(activeTag)))}
function render(){
  document.documentElement.lang=language;
  document.title='Sissy Clara — Closet';
  const nav=document.querySelectorAll('.page-nav a');if(nav.length){nav[0].textContent=language==='es'?'Inicio':'Home';nav[1].textContent=language==='es'?'Armario':'Closet';nav[2].textContent=language==='es'?'Calendario':'Calendar';if(nav[3])nav[3].textContent=language==='es'?'Sobre mí':'About me'}
  $('#brandName').textContent=t('brand');$('#footerBrand').textContent=t('brand');$('#privateLabel').textContent=t('private');$('#emptyTitle').textContent=t('empty');$('#emptyCopy').textContent=t('emptyCopy');$('.close-button').ariaLabel=t('close');
  document.querySelectorAll('[data-language]').forEach(button=>button.classList.toggle('active',button.dataset.language===language));
  sectionFilters.innerHTML=sections.map(section=>`<button class="section-tab ${section===activeSection?'active':''}" data-section="${escapeHTML(section)}">${escapeHTML(t(section))}</button>`).join('');
  $('#sectionTitle').textContent=t(activeSection);
  const categories=[...new Set(sectionItems().map(i=>i.subcategory).filter(Boolean))].sort();
  subcategoryFilters.hidden=activeSection!=='Clothes';
  subcategoryFilters.innerHTML=['Todas',...categories].map(c=>`<button class="subcategory-chip ${c===activeCategory?'active':''}" data-subcategory="${escapeHTML(c)}">${escapeHTML(c==='Todas'?t('all'):t(c))}</button>`).join('');
  const tagSource=sectionItems().filter(i=>activeSection!=='Clothes'||activeCategory==='Todas'||i.subcategory===activeCategory);
  const tags=[...new Set(tagSource.flatMap(i=>i.tags))].sort();
  tagFilters.innerHTML=tags.map(tag=>`<button class="filter-chip ${tag===activeTag?'active':''}" data-tag="${escapeHTML(tag)}"># ${escapeHTML(content(tag,'tag'))}</button>`).join('');
  const shown=filtered();
  grid.innerHTML=shown.map(i=>`<article class="item-card ${i.ordered?'is-ordered':''}" data-id="${i.id}" tabindex="0"><div class="card-image">${imageMarkup(i)}<span class="category-pill">${i.ordered?t('ordered'):escapeHTML(t(i.section==='Clothes'?i.subcategory:i.section))}</span>${i.section==='Wishlist'?`<button class="like-button" data-like-key="${likeKey(i)}" aria-label="Like"><span>♡</span><b>0</b></button>`:''}</div><div class="card-body"><h3>${escapeHTML(content(i.name))}</h3>${i.section==='Wishlist'?`<div class="product-price">${formatPrice(i.price)}</div>`:''}<p class="card-description">${i.description?escapeHTML(content(i.description)):t('noDescription')}</p><div class="card-tags">${i.tags.map(tag=>`<span class="tag">${escapeHTML(content(tag,'tag'))}</span>`).join('')}</div></div></article>`).join('');
  $('#emptyState').hidden=shown.length>0; $('#resultLabel').textContent=`${shown.length} ${shown.length===1?t('item'):t('items')}`;
  document.dispatchEvent(new CustomEvent('closet:rendered'));
}
function showDetail(id){const i=allItems.find(x=>x.id===id);if(!i)return;const location=i.section==='Clothes'?`${t('Clothes')} · ${t(i.subcategory)}`:t(i.section);const gallery=i.images.length>1?`<div class="detail-thumbnails">${i.images.map((src,index)=>`<button class="thumbnail ${index===0?'active':''}" data-gallery-image="${escapeHTML(src)}" aria-label="${t('viewImage')} ${index+1}">${imageMarkup(i,'',src)}</button>`).join('')}</div>`:'';const shopLink=i.url?`<a class="shop-link" href="${escapeHTML(i.url)}" target="_blank" rel="noopener noreferrer">${t('viewOnTemu')} <span>↗</span></a>`:'';const likeButton=i.section==='Wishlist'?`<button class="like-button detail-like" data-like-key="${likeKey(i)}" aria-label="Like"><span>♡</span><b>0</b></button>`:'';$('#detailContent').innerHTML=`<div class="detail-layout"><div class="detail-media"><div class="detail-image-wrap">${imageMarkup(i,'detail-image')}</div>${gallery}</div><div class="detail-copy">${i.ordered?`<span class="order-status"><i></i> ${t('ordered')}</span>`:''}<p class="eyebrow">${escapeHTML(location)}</p><div class="detail-title-row"><h2>${escapeHTML(content(i.name))}</h2>${likeButton}</div>${i.section==='Wishlist'?`<div class="detail-price">${formatPrice(i.price)}</div>`:''}<p class="description">${i.description?escapeHTML(content(i.description)):t('noDescription')}</p><div class="card-tags">${i.tags.map(tag=>`<span class="tag">${escapeHTML(content(tag,'tag'))}</span>`).join('')}</div>${shopLink}</div></div>`;$('#detailDialog').showModal();document.dispatchEvent(new CustomEvent('closet:rendered'))}
sectionFilters.onclick=e=>{if(e.target.dataset.section){activeSection=e.target.dataset.section;activeCategory='Todas';activeTag='';render()}};subcategoryFilters.onclick=e=>{if(e.target.dataset.subcategory){activeCategory=e.target.dataset.subcategory;activeTag='';render()}};tagFilters.onclick=e=>{if(e.target.dataset.tag){activeTag=activeTag===e.target.dataset.tag?'':e.target.dataset.tag;render()}};
grid.addEventListener('click',e=>{if(e.target.closest('[data-like-key]'))return;const card=e.target.closest('.item-card');if(card)showDetail(card.dataset.id)});grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.item-card'))showDetail(e.target.dataset.id)});
document.addEventListener('click',e=>{if(e.target.dataset.close)$('#'+e.target.dataset.close).close();const thumb=e.target.closest('[data-gallery-image]');if(thumb){const main=$('#detailDialog .detail-image');main.src=thumb.dataset.galleryImage;thumb.parentElement.querySelectorAll('.thumbnail').forEach(button=>button.classList.toggle('active',button===thumb))}});
document.querySelector('.language-switch').onclick=e=>{if(e.target.dataset.language){language=e.target.dataset.language;localStorage.setItem('sissy-clara-language',language);$('#detailDialog').close();render()}};
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
render();
