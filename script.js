const IMAGES = {"food_beef_gf": "images/food_beef_gf.webp", "food_venison": "images/food_venison.webp", "food_beef2": "images/food_beef2.webp", "food_puppy": "images/food_puppy.webp", "food_probio": "images/food_probio.webp", "food_chicken": "images/food_chicken.webp", "food_ducksalmon": "images/food_ducksalmon.webp", "cat_chicken": "images/cat_chicken.webp", "treat_stick_beef": "images/treat_stick_beef.webp", "treat_stick_chick": "images/treat_stick_chick.webp", "treat_cube_beef": "images/treat_cube_beef.webp", "treat_cube_duck": "images/treat_cube_duck.webp", "vit_multi": "images/vit_multi.webp", "vit_calcium": "images/vit_calcium.webp", "bed_black": "images/bed_black.webp", "bed_cream": "images/bed_cream.webp", "bed_yellow": "images/bed_yellow.webp", "bed_green": "images/bed_green.webp", "bed_pink": "images/bed_pink.webp", "bed_grey": "images/bed_grey.webp", "bed_beige": "images/bed_beige.webp", "acc_carrier": "images/acc_carrier.webp", "acc_waterer": "images/acc_waterer.webp", "pel_a": "images/pel_a.webp", "pel_b": "images/pel_b.webp", "pel_c": "images/pel_c.webp", "pel_d": "images/pel_d.webp", "pel_e": "images/pel_e.webp", "treat_cube_beef2": "images/treat_cube_beef2.webp", "logo": "images/logo.webp", "cat_dog": "images/cat_dog.webp", "cat_cat": "images/cat_cat.webp", "cat_treat": "images/cat_treat.webp", "cat_vit": "images/cat_vit.webp", "cat_bed": "images/cat_bed.webp", "cat_pad": "images/cat_pad.webp", "cat_acc": "images/cat_acc.webp"};
const PHONE_WA = "79324825181"; // WhatsApp / телефон
const TG = "https://t.me/qwesyt66"; // личный чат для заказов
const VK = "https://vk.me/zoolavka66"; // чат сообщества ВКонтакте

const TG_BOT_TOKEN = "8713647672:AAG7TLFs3OGaZc7gqZWQIsmFzac8axNUk18";
const TG_CHAT_ID   = "958072190";

const HERO_VIDEO = "images/herodog.webm";
const HERO_VIDEO_FALLBACK = "images/herodogfallback.mp4?v=3";

const CATS = [
   {id:"dog",  label:"Корм · собаки"},
   {id:"cat",  label:"Корм · кошки"},
   {id:"treat",label:"Лакомства"},
   {id:"vit",  label:"Витамины"},
   {id:"bed",  label:"Лежанки"},
   {id:"pad",  label:"Пелёнки"},
   {id:"acc",  label:"Аксессуары"},
   ];
const CATLBL = {dog:"Собаки",cat:"Кошки",treat:"Лакомства",vit:"Витамины",bed:"Лежанки",pad:"Пелёнки",acc:"Аксессуары"};
const TILELBL = {dog:"Корм для собак",cat:"Корм для кошек",treat:"Лакомства",vit:"Витамины",bed:"Лежанки",pad:"Пелёнки",acc:"Аксессуары"};
const GROUPS = [
   {title:"Корма",                 color:"#F07E1B", cats:["dog","cat"]},
   {title:"Лакомства и витамины",  color:"#BC5A34", cats:["treat","vit"]},
   {title:"Лежанки и уход",        color:"#8F6B42", cats:["bed","pad","acc"]},
   ];
const CATIMAGES = {dog:"",cat:"",treat:"",vit:"",bed:"",pad:"",acc:""};

const PRODUCTS = [
   {id:"d2", cat:"dog", name:"Корм Myfoodie - беззерновая говядина", desc:"Grain Free · двойное мясо · все породы", img:"food_beef_gf", variants:[{l:"1 кг",p:1200},{l:"10 кг",p:11000}]},
   {id:"d3", cat:"dog", name:"Корм Myfoodie - оленина", desc:"Двойное мясо · для взрослых собак", img:"food_venison", variants:[{l:"1 кг",p:1100},{l:"10 кг",p:10500}]},
   {id:"d4", cat:"dog", name:"Корм Myfoodie - говядина и овощи", desc:"Двойное мясо · говядина + овощи · все породы", img:"food_beef2", variants:[{l:"1 кг",p:1200},{l:"10 кг",p:11000}]},
   {id:"d5", cat:"dog", name:"Корм Myfoodie для щенков - говядина и курица", desc:"Natural Food Puppy · все породы", img:"food_puppy", variants:[{l:"1,8 кг",p:2300}]},
   {id:"d6", cat:"dog", name:"Корм Myfoodie с пробиотиками - говядина, курица, черника", desc:"Говядина, курица, черника · Active Probiotics", img:"food_probio", variants:[{l:"1,8 кг",p:2500}]},
   {id:"d7", cat:"dog", name:"Корм Myfoodie - курица", desc:"Двойное мясо · все породы", img:"food_chicken", variants:[{l:"1 кг",p:1100},{l:"10 кг",p:10000}]},
   {id:"d9", cat:"dog", name:"Корм Myfoodie - утка и лосось", desc:"Adult · для взрослых собак всех пород", img:"food_ducksalmon", variants:[{l:"700 г",p:900},{l:"7 кг",p:8500}]},
   {id:"c1", cat:"cat", name:"Корм Myfoodie - курица и клюква", desc:"Для взрослых кошек", img:"cat_chicken", variants:[{l:"1,25 кг",p:1500}]},
   {id:"t1", cat:"treat", name:"Мясные палочки - говядина и треска", desc:"Global Natural · 360 г", img:"treat_stick_beef", price:700},
   {id:"t2", cat:"treat", name:"Мясные палочки - курица", desc:"Global Natural · 360 г", img:"treat_stick_chick", price:700},
   {id:"t3", cat:"treat", name:"Мясные кубики - говядина", desc:"Сушёное мясо (freeze-dried) · 100 г", img:"treat_cube_beef", price:500},
   {id:"t4", cat:"treat", name:"Мясные кубики - утка", desc:"Сушёное мясо (freeze-dried) · 100 г", img:"treat_cube_duck", price:500},
   {id:"t5", cat:"treat", name:"Мясные кубики с начинкой - говядина", desc:"Аргентинская говядина · 180 г", img:"treat_cube_beef2", price:600},
   {id:"v1", cat:"vit", name:"Мультивитамины Myfoodie для собак", desc:"10 витаминов · Myfoodie", img:"vit_multi", price:800},
   {id:"v2", cat:"vit", name:"Витамины с кальцием Myfoodie для собак", desc:"Milk Calcium · Myfoodie", img:"vit_calcium", price:800},
   {id:"b1", cat:"bed", name:"Лежанка зверёк, чёрная", desc:"45×45 см · мягкий плюш", img:"bed_black", price:2000},
   {id:"b2", cat:"bed", name:"Лежанка зверёк, бежевая", desc:"45×45 см · мягкий плюш", img:"bed_cream", price:2000},
   {id:"b4", cat:"bed", name:"Лежанка зверёк, жёлтая", desc:"45×45 см · мягкий плюш", img:"bed_yellow", price:2000},
   {id:"b5", cat:"bed", name:"Лежанка-бублик, зелёная", desc:"60×60 см · с бортиком", img:"bed_green", price:1800},
   {id:"b6", cat:"bed", name:"Лежанка-бублик, розовая", desc:"60×60 см · с бортиком", img:"bed_pink", price:1800},
   {id:"b7", cat:"bed", name:"Лежанка-бублик, серая", desc:"60×60 см · с бортиком", img:"bed_grey", price:1800},
   {id:"b8", cat:"bed", name:"Лежанка-бублик, бежевая", desc:"60×60 см · с бортиком", img:"bed_beige", price:1800},
   {id:"p1", cat:"pad", name:"Многоразовые пелёнки", desc:"5-слойные, впитывающие · 5 расцветок", img:"pel_a",
       gallery:[{k:"pel_a",n:"Розовая (девочка)"},{k:"pel_b",n:"Львята"},{k:"pel_c",n:"Голубая (мишка)"},{k:"pel_d",n:"Голубая (зайка)"},{k:"pel_e",n:"Белая (мишки BABY)"}],
       variants:[{l:"100×50 см",p:500},{l:"100×70 см",p:800},{l:"100×120 см",p:1100},{l:"100×150 см",p:1400}]},
   {id:"a1", cat:"acc", name:"Переноска", desc:"Открывается сверху · для кошек и мелких собак", img:"acc_carrier", variants:[{l:"M (30×30×48 см)",p:2300},{l:"L",p:2300,oos:true}]},
   {id:"a2", cat:"acc", name:"Автопоилка", desc:"Миска + поилка 2-в-1", img:"acc_waterer", price:900},
   ];

const PROMO = { id: "d5", price: 2000, until: "2026-09-10T23:59:59+05:00" };
function promoActive(){ return !!PROMO && Date.now() < new Date(PROMO.until).getTime(); }
function applyPromo(){
     if(!PROMO) return;
     const p = PRODUCTS.find(x=>x.id===PROMO.id);
     if(!p) return;
     if(promoActive()){
            if(p.originalPrice===undefined) p.originalPrice = p.variants ? p.variants[0].p : p.price;
            if(p.variants) p.variants[0].p = PROMO.price; else p.price = PROMO.price;
            p.isPromo = true;
     } else if(p.isPromo){
            if(p.variants) p.variants[0].p = p.originalPrice; else p.price = p.originalPrice;
            p.isPromo = false;
     }
}
applyPromo();

const COMPOSITION = {
     d2: `🥩 Состав:
     Говядина (30%), свежая курица, куриный белок
     Костная мука говядины, картофельный крахмал, маниоковая мука
     Сушёная свекла, красные ягоды (в т.ч. шиповник), куриный жир
     Рыбий жир, соевое масло, пивные дрожжи
     Бобовые волокна, порошок юкки, клюквенный порошок
     ✅ В составе:
     Натуральный лютеин, фруктоолигосахариды, маннаноолигосахариды, фосфат кальция, оксид натрия, сульфаты марганца, цинка, железа и меди, ацетат витамина A, витамин D3, dl-альфа-токоферол ацетат (витамин E), витамин K3, витамины группы B (B1 — нитрат тиамина, B2, B6, B12), пантотенат кальция, ниацин, фолиевая кислота, биотин, холин, антиоксиданты, аминокислоты: L-лизин, DL-метионин
     🔬 Пищевая ценность:
     Белки: ≥ 26.0%
     Жиры: ≥ 11.0%
     Фосфор: ≥ 0.9%
     Лизин: ≥ 0.8%
     Клетчатка: ≤ 5.0%
     Влага: ≤ 10.0%
     Соль (Cl): ≥ 0.3%`,
     d3: `🥩 Состав:
     Оленина (26%), курица, утка
     Кукуруза, пшеница, кукурузный белок
     Рыбий жир, яичный порошок, свекольный жом
     Пивные дрожжи, овощные компоненты
     ✅ В составе:
     Витамины A, D3, E, K3, группы B
     Минералы: кальций, фосфор, цинк, железо и др.
     Аминокислоты: DL-метионин, L-лизин
     Антиоксиданты, пробиотики
     🔬 Пищевая ценность:
     Белки: ≥ 22.0%
     Жиры: ≥ 12.0%
     Кальций: ≥ 0.9%
     Фосфор: ≥ 0.8%
     Лизин: ≥ 1.2%
     Зола: ≤ 10%
     Клетчатка: ≤ 5%
     Влага: ≤ 10%
     Соль: ≤ 0.3%`,
     d4: `🥩 Состав:
     Говядина (30%), курица, утка
     Кукуруза, пшеница, кукурузный белок
     Рыбий жир, яичный порошок, свекольный жом
     Пивные дрожжи, овощные компоненты
     ✅ В составе:
     Витамины A, D3, E, K3, группы B
     Минералы: кальций, фосфор, цинк, железо и др.
     Аминокислоты: DL-метионин, L-лизин
     Антиоксиданты, пробиотики
     🔬 Пищевая ценность:
     Белки ≥ 26%
     Жиры ≥ 14%
     Клетчатка ≤ 5%
     Влага ≤ 10%
     Зола ≤ 10%
     Кальций ≥ 0.9%
     Фосфор ≥ 0.8%
     Лизин ≥ 1.2%`,
     d5: `🥩 Состав:
     Говядина 20%, куриный порошок 16%, рис, говяжий порошок, кукуруза, пшеница, утиный жир, соевый жом, кукурузный белок, яичный порошок, вакуумно сублимированная курятина 2%, молочный кальций 0.5%, сывороточный белок 0.5%, порошок моркови, молочный порошок, свекольный жом, порошок юкки, порошок шпината
     ✅ В составе:
     Лактоферрин, фруктозоолигосахариды (FOS) 0.3%, маннаноолигосахариды (MOS) 0.2%, гидроксиапатит кальция, лёгкий карбонат кальция, белковая медь, белковое железо, белковый цинк, белковый марганец, хелатный кобальт, витамин A (ацетат), витамин D3, dl-α-токоферол ацетат (E), витамин B1 (тиамин), витамин B2, витамин B6, витамин B12, пантотенат кальция, никотинамид, фолиевая кислота, холин, антиоксиданты, L-лизин
     🔬 Пищевая ценность:
     Сырой белок: ≥ 28.0%
     Сырой жир: ≥ 15.0%
     Общий фосфор: ≥ 1.00%
     Сырая клетчатка: ≤ 5.0%
     Влага: ≤ 10.0%
     Сырая зола: ≤ 10.0%`,
     d6: `🥩 Состав:
     Свежая курятина (40%), замороженная говядина (10%), сушёные куриные субпродукты (9%)
     Картофельный и бататный крахмал, маниоковая мука
     Куриный жир (5%), горох, сублимированное куриное филе (2%)
     Лососевое масло (2%), говяжий жир (1.5%), клетчатка, льняное семя (1%)
     Ламинария, черника (0.1%), порошок юкки, тыква, морковь, авокадо
     Клюква, томат, фиолетовый батат, яблоко
     ✅ В составе:
     Лецитин (0.2%), фрукто- и маннаноолигосахариды
     Пробиотики: Lactobacillus casei, Bacillus subtilis, Bacillus licheniformis (3×10⁹ КОЕ/кг)
     Минералы: фосфат кальция, органические формы марганца, меди, железа, цинка
     Витамины: A, D3, E (100 мг/кг), B1, B2, B6, B12, пантотенат кальция, ниацин, фолиевая кислота, биотин
     Холин, DL-метионин, L-лизин, антиоксиданты, натрий, кальций
     🔬 Пищевая ценность:
     Белки: ≥ 30.0%
     Жиры: ≥ 15.0%
     Кальций: ≥ 1.0%
     Фосфор: ≥ 0.8%
     Лизин: ≥ 1.0%
     Зола: ≤ 10.0%
     Клетчатка: ≤ 5.0%
     Влага: ≤ 10.0%
     Соль (Cl): ≥ 0.3%
     💊 Пробиотики (штаммы):
     Lactobacillus fermentum F-08
     Lactobacillus helveticus HM-66
     Bacillus subtilis BL-08
     Bacillus licheniformis (группа 19)`,
     d7: `🥩 Состав:
     Свежая курятина (20%), замороженная говядина, куриный белок, костная мука (говядина), кукуруза, куриный жир, пшеница, рыбный жир, соевое масло, пивные дрожжи, клетчатка, яичный порошок, свекольный жом, гидролизат говядины, порошок юкки, клюквенный порошок, порошок листьев оливы, порошок зелёного чая, фруктоолигосахариды
     ✅ В составе:
     L-лизин, DL-метионин, фосфат кальция, оксид натрия, сульфаты марганца, цинка, железа и меди, кальций цитрат, натрия метасульфит, витамины A, D3, E, K3, B1, B2, B6, B12, пантотенат кальция, ниацин, фолиевая кислота, биотин, холин
     🔬 Пищевая ценность:
     Белки: ≥ 26.0%
     Жиры: ≥ 13.0%
     Кальций: ≥ 1.1%
     Фосфор: ≥ 0.9%
     Лизин: ≥ 0.8%
     Клетчатка: ≤ 5.0%
     Зола: ≤ 10.0%
     Влага: ≤ 10.0%
     Соль (Cl): ≥ 0.3%`,
     d9: `🥩 Состав:
     Утиное мясо (25%), лосось (15%), куриный и говяжий белок
     Куриный жир, рис, кукуруза, пшеница
     Лососевое масло (3%), яичный порошок, морковь, соевый жмых
     Кукурузный глютен, куриная печень, клетчатка, семя льна
     Изюм, порошок авокадо, яблоко, тыква
     ✅ В составе:
     Фосфорнокислый кальций, карбонат кальция, лецитин (0.5%)
     Органические формы меди, железа, марганца, цинка
     Витамины: A, D3, E, K3, группа B (B1, B2, B6, B12, пантотенат кальция, ниацин, фолиевая кислота, биотин)
     Холин, антиоксиданты, глицерин, L-лизин
     🔬 Пищевая ценность:
     Белки: ≥ 30.0%
     Жиры: ≥ 15.0%
     Кальций: ≥ 1.0%
     Фосфор: ≥ 0.8%
     Лизин: ≥ 1.2%
     Клетчатка: ≤ 5.0%
     Влага: ≤ 10.0%
     Зола: ≤ 10.0%
     Соль (водорастворимые оксиды): ≥ 0.3%`,
     c1: `🥩 Состав:
     Свежее куриное мясо (30%), куриная мука (20%)
     Картофельная мука, горох, куриный жир
     Клюква (3%), гидролизат курицы, лососевый жир
     Клетчатка, говяжий жир, семена льна
     Гидролизат дрожжей, яблочный порошок
     Морковный порошок, тыква, черника, порошок юкки (0,1%)
     ✅ В составе:
     Фруктоолигосахарид (0,3%), натуральный лютеин (из бархатцев)
     Таурин, хлорид натрия, хлорид калия
     Протеинаты меди, цинка, железа и марганца
     Йодат кальция, селен-дрожжи
     Витамины A, D3, E (dl-альфа-токоферола ацетат), B1, B2, B6, B12
     D-пантотенат кальция, никотинамид, фолиевая кислота, D-биотин
     Хлорид холина, антиоксидант, L-лизин, DL-метионин
     Хондроитина сульфат (500 мг/кг), L-карнитин (400 мг/кг)
     🔬 Пищевая ценность:
     Белки: ≥ 30.0%
     Жиры: ≥ 14.0%
     Клетчатка: ≤ 5.0%
     Зола: ≤ 10.0%
     Влага: ≤ 10.0%
     Кальций: ≥ 0.9%
     Фосфор: ≥ 0.7%
     Таурин: ≥ 0.2%
     Соль (водорастворимые хлориды): ≥ 0.3%`
};

const money = n => n.toLocaleString('ru-RU') + ' ₽';
const priceOf = p => p.variants ? Math.min(...p.variants.map(v=>v.p)) : p.price;

let activeCat = "", query = "";
const cart = {};

function selectCategory(id){
     activeCat=id; query=''; const qi=document.getElementById('q'); if(qi) qi.value='';
     renderGrid(); grid.scrollIntoView({behavior:'smooth',block:'start'});
}
function goHome(){
     activeCat=''; query=''; const qi=document.getElementById('q'); if(qi) qi.value='';
     renderGrid(); window.scrollTo({top:0,behavior:'smooth'});
}

const grid = document.getElementById('grid');
function renderGrid(){
     const q = query.trim().toLowerCase();
     grid.innerHTML = '';
     if(!activeCat && !q){
            let h='<div class="cats-hero">';
            GROUPS.forEach(g=>{
                     h+='<div class="catgroup"><h2 class="grouphead">'+g.title+'</h2><div class="tilegrid">';
                     g.cats.forEach(cid=>{
                                const im=IMAGES['cat_'+cid];
                                h+='<button class="tile'+(im?' has-img':'')+'" data-cat="'+cid+'" style="--tc:'+g.color+'" aria-label="'+TILELBL[cid]+'">'+
                                                (im ? '<img class="tilebg" src="'+im+'" alt="" loading="lazy" decoding="async">'
                                                                  : '<svg class="pawbg" width="96" height="96" viewBox="0 0 24 24" fill="#fff"><circle cx="7" cy="9" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="17" cy="9" r="2"/><path d="M12 12c-2.8 0-5 2-5 4.3 0 1.5 1.2 2.4 2.8 2.4.9 0 1.5-.5 2.2-.5s1.3.5 2.2.5c1.6 0 2.8-.9 2.8-2.4C17 14 14.8 12 12 12z"/></svg>')+
                                                '<span class="tilelabel">'+TILELBL[cid]+'</span>'+
                                              '</button>';
                     });
                     h+='</div></div>';
            });
            h+='</div>';
            grid.innerHTML=h;
            grid.querySelectorAll('.tile').forEach(t=>t.onclick=()=>selectCategory(t.dataset.cat));
            return;
     }
     const list = PRODUCTS.filter(p=>{
            if(activeCat && p.cat!==activeCat) return false;
            if(q && !(p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || (CATLBL[p.cat]||'').toLowerCase().includes(q))) return false;
            return true;
     });
     const back=document.createElement('button');
     back.className='backbtn';
     back.innerHTML='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>Все разделы';
     back.onclick=goHome;
     grid.appendChild(back);
     if(!list.length){ const em=document.createElement('div'); em.className='empty'; em.textContent='Ничего не нашлось. Попробуйте другой запрос.'; grid.appendChild(em); return; }
     list.forEach(p=>{
            const card=document.createElement('article'); card.className='card';
            const hasVar = !!p.variants;
            const isPromo = p.isPromo && promoActive();
            if(isPromo) card.classList.add('promo');
            card.dataset.pid = p.id;
            const priceHTML = isPromo
              ? '<span class="oldprice">'+money(p.originalPrice)+'</span><span class="tag">'+money(priceOf(p))+'</span>'
                     : (hasVar && p.variants.length>1
                                ? '<span class="tag"><span class="from">от</span>'+money(priceOf(p))+'</span>'
                                : '<span class="tag">'+money(priceOf(p))+'</span>');
            let thumbsHTML='', patHTML='';
            if(p.gallery){
                     thumbsHTML='<div class="thumbs">'+p.gallery.map((g,i)=>'<img data-g="'+g.k+'" data-n="'+g.n+'" title="'+g.n+'" class="'+(i===0?'on':'')+'" src="'+(IMAGES[g.k]||'')+'" alt="'+g.n+'" loading="lazy" decoding="async">').join('')+'</div>';
                     patHTML='<div class="patname">Расцветка: <b class="patsel">'+p.gallery[0].n+'</b></div>';
            }
            let selHTML='';
            if(hasVar && p.variants.length>1){
                     selHTML='<select class="varsel" aria-label="Размер / фасовка">'+p.variants.map((v,i)=>'<option value="'+i+'">'+v.l+(v.oos?' - нет в наличии':' - '+money(v.p))+'</option>').join('')+'</select>';
            }
            const comp = COMPOSITION[p.id];
            const compHTML = comp
              ? '<button type="button" class="compbtn" aria-expanded="false">Состав<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>'+
                       '<div class="comptext" hidden>'+comp.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</div>'
                     : '';
            card.innerHTML =
                     '<div class="ph"><span class="ctag">'+CATLBL[p.cat]+'</span>'+(isPromo?'<span class="promoflag">🔥 Акция</span>':'')+'<img src="'+(IMAGES[p.img]||'')+'" alt="'+p.name+'" loading="lazy" decoding="async"></div>'+
                     thumbsHTML+
                     '<div class="cbody">'+
                       '<div class="cname">'+p.name+'</div>'+
                       '<div class="cdesc">'+p.desc+'</div>'+
                       patHTML+
                       selHTML+
                       compHTML+
                       '<div class="pricerow">'+priceHTML+'</div>'+
                       '<div class="buyrow">'+
                         '<div class="qty card-qty"><button type="button" class="qminus" aria-label="Уменьшить количество">−</button><span class="qval">1</span><button type="button" class="qplus" aria-label="Увеличить количество">+</button></div>'+
                         '<button class="addbtn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>В корзину</button>'+
                       '</div>'+
                     '</div>';
            if(comp){
                     const cbtn=card.querySelector('.compbtn'), ctext=card.querySelector('.comptext');
                     cbtn.onclick=()=>{
                                const open = ctext.hasAttribute('hidden');
                                if(open){ ctext.removeAttribute('hidden'); cbtn.classList.add('on'); cbtn.setAttribute('aria-expanded','true'); }
                                else{ ctext.setAttribute('hidden',''); cbtn.classList.remove('on'); cbtn.setAttribute('aria-expanded','false'); }
                     };
            }
            let patName = p.gallery ? p.gallery[0].n : "";
            let patKey  = p.gallery ? p.gallery[0].k : "";
            if(p.gallery){
                     const mainImg=card.querySelector('.ph img');
                     const patSel=card.querySelector('.patsel');
                     card.querySelectorAll('.thumbs img').forEach(t=>{
                                t.onclick=()=>{ patName=t.dataset.n; patKey=t.dataset.g; mainImg.src=IMAGES[patKey]; if(patSel) patSel.textContent=patName; card.querySelectorAll('.thumbs img').forEach(x=>x.classList.remove('on')); t.classList.add('on'); };
                     });
            }
            const sel=card.querySelector('.varsel');
            const tag=card.querySelector('.tag');
            const addb=card.querySelector('.addbtn');
            const qrow=card.querySelector('.card-qty');
            const buyHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>В корзину';
            function refreshVar(){
                     const v=p.variants[ sel?+sel.value:0 ];
                     tag.innerHTML=money(v.p);
                     const oos=!!v.oos;
                     addb.disabled=oos; addb.classList.toggle('oos',oos);
                     addb.innerHTML= oos ? 'Нет в наличии' : buyHTML;
                     if(qrow) qrow.style.visibility = oos ? 'hidden' : '';
            }
            if(sel){ sel.onchange=refreshVar; }
            let qv=1;
            const qval=card.querySelector('.qval');
            card.querySelector('.qminus').onclick=()=>{ qv=Math.max(1,qv-1); qval.textContent=qv; };
            card.querySelector('.qplus').onclick=()=>{ qv=Math.min(99,qv+1); qval.textContent=qv; };
            addb.onclick=()=>{
                     const vi = sel ? +sel.value : 0;
                     if(p.variants && p.variants[vi] && p.variants[vi].oos) return;
                     addToCart(p, vi, qv, patName, patKey);
                     qv=1; qval.textContent=qv;
                     addb.classList.add('added'); addb.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 6"/></svg>Добавлено';
                     setTimeout(()=>{ addb.classList.remove('added'); addb.innerHTML=buyHTML; },1100);
            };
            grid.appendChild(card);
     });
}

function addToCart(p, vi, qty, pat, patKey){
     qty = Math.max(1, qty||1);
     const v = p.variants ? p.variants[vi] : null;
     const vl = v ? v.l : "";
     const price = v ? v.p : p.price;
     const pattern = pat || "";
     const img = patKey || p.img;
     const key = p.id + "__" + vl + "__" + pattern;
     if(cart[key]) cart[key].qty += qty;
     else cart[key] = {id:p.id, name:p.name, vl, pattern, price, img, qty};
     renderCart(); flashCart();
}
function changeQty(key, d){
     if(!cart[key]) return;
     cart[key].qty += d;
     if(cart[key].qty<=0) delete cart[key];
     renderCart();
}
function cartCount(){ return Object.values(cart).reduce((s,i)=>s+i.qty,0); }
function cartTotal(){ return Object.values(cart).reduce((s,i)=>s+i.qty*i.price,0); }

const ditems=document.getElementById('ditems'), badge=document.getElementById('badge'),
         totalEl=document.getElementById('total'), toCheckout=document.getElementById('toCheckout');
const mobiCart=document.getElementById('mobiCart'), mobiCartCount=document.getElementById('mobiCartCount');
function renderCart(){
     const items=Object.entries(cart);
     const n = cartCount();
     badge.textContent = n || '';
     totalEl.textContent = money(cartTotal());
     toCheckout.disabled = !items.length;
     if(mobiCart){
            mobiCartCount.textContent = n;
            mobiCart.hidden = n === 0;
     }
     if(!items.length){
            ditems.innerHTML='<div class="emptycart"><div class="pw"><svg width="54" height="54" viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="9" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="17" cy="9" r="2"/><path d="M12 12c-2.8 0-5 2-5 4.3 0 1.5 1.2 2.4 2.8 2.4.9 0 1.5-.5 2.2-.5s1.3.5 2.2.5c1.6 0 2.8-.9 2.8-2.4C17 14 14.8 12 12 12z"/></svg></div>Корзина пуста.<br>Добавьте товары из каталога.</div>';
            return;
     }
     ditems.innerHTML='';
     items.forEach(([key,it])=>{
            const row=document.createElement('div'); row.className='ci';
            row.innerHTML=
                     '<img src="'+(IMAGES[it.img]||'')+'" alt="" loading="lazy" decoding="async">'+
                     '<div class="info"><div class="nm">'+it.name+'</div>'+
                       (it.vl?'<div class="vr">'+it.vl+'</div>':'')+
                       (it.pattern?'<div class="vr">Расцветка: '+it.pattern+'</div>':'')+
                       '<div class="pr">'+money(it.price*it.qty)+'</div>'+
                       '<button class="rm">Убрать</button></div>'+
                     '<div class="qty"><button aria-label="минус">−</button><span>'+it.qty+'</span><button aria-label="плюс">+</button></div>';
            const [minus,plus]=row.querySelectorAll('.qty button');
            minus.onclick=()=>changeQty(key,-1); plus.onclick=()=>changeQty(key,1);
            row.querySelector('.rm').onclick=()=>changeQty(key,-9999);
            ditems.appendChild(row);
     });
}
function flashCart(){ const b=document.getElementById('openCart'); b.animate?[b.animate([{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:220})]:0; }

const scrim=document.getElementById('scrim'), drawer=document.getElementById('drawer'), modal=document.getElementById('modal');
function openCart(){ drawer.classList.add('on'); scrim.classList.add('on'); drawer.setAttribute('aria-hidden','false'); }
function closeCart(){ drawer.classList.remove('on'); scrim.classList.remove('on'); drawer.setAttribute('aria-hidden','true'); }
document.getElementById('openCart').onclick=openCart;
document.getElementById('closeCart').onclick=closeCart;
if(mobiCart) mobiCart.onclick=openCart;
scrim.onclick=()=>{ closeCart(); };
document.getElementById('toCheckout').onclick=()=>{ renderOsum(); modal.classList.add('on'); };
document.getElementById('closeModal').onclick=()=>modal.classList.remove('on');
modal.onclick=e=>{ if(e.target===modal) modal.classList.remove('on'); };

const privacyModal=document.getElementById('privacyModal');
function openPrivacy(e){ if(e) e.preventDefault(); privacyModal.classList.add('on'); }
document.getElementById('privacyLink').onclick=openPrivacy;
document.getElementById('privacyLinkFooter').onclick=openPrivacy;
document.getElementById('closePrivacy').onclick=()=>privacyModal.classList.remove('on');
privacyModal.onclick=e=>{ if(e.target===privacyModal) privacyModal.classList.remove('on'); };

function renderOsum(){
     const el=document.getElementById('osum');
     let h='';
     Object.values(cart).forEach(it=>{ h+='<div class="l"><span>'+it.name+(it.vl?' ('+it.vl+')':'')+(it.pattern?', '+it.pattern:'')+' × '+it.qty+'</span><span>'+money(it.price*it.qty)+'</span></div>'; });
     h+='<div class="l tot"><span>Итого</span><span>'+money(cartTotal())+'</span></div>';
     el.innerHTML=h;
}
function orderText(){
     const name=val('cname'), phone=val('cphone'), city=val('ccity'), comment=val('ccomment'), contact=val('ccontact');
     let t='🐾 Новый заказ ZooLavka\n\n';
     Object.values(cart).forEach(it=>{ t+='• '+it.name+(it.vl?' ('+it.vl+')':'')+(it.pattern?', расцветка: '+it.pattern:'')+' × '+it.qty+' = '+it.price*it.qty+' ₽\n'; });
     t+='\nИтого: '+cartTotal()+' ₽\n\n';
     if(name)  t+='Имя: '+name+'\n';
     if(phone) t+='Телефон: '+phone+'\n';
     if(city)  t+='Город: '+city+'\n';
     if(comment) t+='Комментарий: '+comment+'\n';
     if(contact) t+='Связаться через: '+contact+'\n';
     return t;
}
const val=id=>document.getElementById(id).value.trim();
async function sendOrder(){
     const btn=document.getElementById('sendOrder'), err=document.getElementById('sendErr'), hint=document.getElementById('chint'), consent=document.getElementById('cconsent'), consentLbl=consent.closest('.consent');
     if(!val('cname') || !val('cphone')){
            err.textContent='Заполните имя и телефон — без них мы не сможем с вами связаться.';
            err.style.display='block';
            return;
     }
     if(!consent.checked){
            err.textContent='Отметьте согласие на обработку персональных данных — без этого мы не можем принять заказ.';
            err.style.display='block';
            if(consentLbl) consentLbl.classList.add('warn');
            return;
     }
     if(consentLbl) consentLbl.classList.remove('warn');
     err.style.display='none';
     btn.disabled=true; const oldLabel=btn.innerHTML; btn.innerHTML='Отправляем…';
     try{
            const url='https://api.telegram.org/bot'+TG_BOT_TOKEN+'/sendMessage?chat_id='+TG_CHAT_ID+'&text='+encodeURIComponent(orderText());
            const resp=await fetch(url);
            const data=await resp.json().catch(()=>null);
            if(!resp.ok || !data || data.ok!==true) throw new Error('bad response');
            Object.keys(cart).forEach(k=>delete cart[k]);
            renderCart();
            hint.style.color='var(--ok)';
            hint.textContent='Заказ отправлен! Мы свяжемся с вами через '+(val('ccontact')||'выбранный мессенджер')+'.';
            setTimeout(()=>{ modal.classList.remove('on'); hint.style.color=''; hint.textContent='Мы получим заявку и сами свяжемся с вами в выбранном мессенджере.'; btn.disabled=false; btn.innerHTML=oldLabel; },1600);
     }catch(e){
            btn.disabled=false; btn.innerHTML=oldLabel;
            err.textContent='Не получилось отправить автоматически — нажмите «Скопировать заказ» и пришлите его нам в сообщения ВКонтакте (vk.com/zoolavka66).';
            err.style.display='block';
     }
}
document.getElementById('sendOrder').onclick=sendOrder;
document.getElementById('copyOrder').onclick=()=>{ copy(orderText()); toast('Заказ скопирован в буфер обмена'); };
function copy(text){ try{ navigator.clipboard.writeText(text); }catch(e){ const t=document.createElement('textarea'); t.value=text; document.body.appendChild(t); t.select(); try{document.execCommand('copy');}catch(_){}
                                                                          t.remove(); } }
function toast(msg){ const h=document.getElementById('chint'); h.textContent=msg; h.style.color='var(--ok)'; setTimeout(()=>{h.style.color='';h.textContent='Мы получим заявку и сами свяжемся с вами в выбранном мессенджере.';},3200); }

document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ modal.classList.remove('on'); closeCart(); } });
document.getElementById('q').addEventListener('input',e=>{ query=e.target.value; if(query.trim()){ activeCat=''; } renderGrid(); });
document.getElementById('yr').textContent=new Date().getFullYear();

renderGrid(); renderCart();

(function promoBanner(){
     const bar=document.getElementById('promobar');
     if(!bar || !PROMO) return;
     const promoProd = PRODUCTS.find(x=>x.id===PROMO.id);
     if(!promoProd) return;
     const descEl=document.getElementById('pbDesc'), timerEl=document.getElementById('pbTimer'), btn=document.getElementById('pbBtn');
     const heroCard=document.getElementById('heroPromo'), heroCat=document.getElementById('heroPromoCat'), heroImg=document.getElementById('heroPromoImg');
     const pad=n=>String(n).padStart(2,'0');
     let iv;
     function goToPromo(){
            selectCategory(promoProd.cat);
            setTimeout(()=>{
                     const card=document.querySelector('.card[data-pid="'+promoProd.id+'"]');
                     if(card){
                                card.scrollIntoView({behavior:'smooth',block:'center'});
                                card.animate && card.animate([{boxShadow:'0 0 0 4px rgba(240,126,27,.55)'},{boxShadow:'0 0 0 0 rgba(240,126,27,0)'}],{duration:900});
                     }
            },80);
     }
     function tick(){
            if(!promoActive()){
                     bar.hidden=true;
                     if(heroCard) heroCard.hidden=true;
                     applyPromo();
                     renderGrid();
                     if(iv) clearInterval(iv);
                     return;
            }
            bar.hidden=false;
            descEl.innerHTML = promoProd.name+': <span class="old">'+money(promoProd.originalPrice)+'</span><b>'+money(PROMO.price)+'</b>';
            const diff = new Date(PROMO.until).getTime() - Date.now();
            const d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
            timerEl.innerHTML = '<span>'+d+' дн</span><span>'+pad(h)+':'+pad(m)+':'+pad(s)+'</span>';
            if(heroCard){
                     heroCard.hidden=false;
                     heroCat.textContent = CATLBL[promoProd.cat]||'';
                     heroImg.src = IMAGES[promoProd.img]||'';
                     heroImg.alt = promoProd.name;
            }
     }
     btn.onclick=goToPromo;
     if(heroCard) heroCard.onclick=(e)=>{ e.preventDefault(); goToPromo(); };
     tick();
     iv=setInterval(tick,1000);
})();

(function runDog(){
     const host=document.getElementById('kibble'), hero=document.querySelector('.hero'), dog=document.getElementById('rundog'), sprite=document.getElementById('dogsprite');
     if(!host||!hero) return;
     if(HERO_VIDEO){
            if(dog) dog.style.display='none';
            const v=document.createElement('video');
            v.className='herovid';
            v.autoplay=true; v.loop=true; v.muted=true; v.defaultMuted=true; v.playsInline=true;
            v.setAttribute('muted',''); v.setAttribute('playsinline',''); v.setAttribute('autoplay',''); v.setAttribute('loop','');
            const srcWebm=document.createElement('source'); srcWebm.src=HERO_VIDEO; srcWebm.type='video/webm; codecs="vp9"';
            v.appendChild(srcWebm);
            if(HERO_VIDEO_FALLBACK){
                 const srcMp4=document.createElement('source'); srcMp4.src=HERO_VIDEO_FALLBACK; srcMp4.type='video/mp4';
                 v.appendChild(srcMp4);
            }
            host.appendChild(v);
            v.play&&v.play().catch(()=>{});
            return;
     }
     if(!dog||!sprite) return;
     const FRAMES=8;
     let W=0, dogW=0, dogH=0;
     function measure(){
            const hr=hero.getBoundingClientRect(); W=hr.width;
            const r=dog.getBoundingClientRect(); dogW=r.width||132; dogH=r.height||106;
            sprite.style.backgroundSize=(dogW*FRAMES)+'px '+dogH+'px';
     }
     measure(); addEventListener('resize',measure); setTimeout(measure,300);
     if(matchMedia('(prefers-reduced-motion: reduce)').matches){
            dog.style.transform='translateX('+Math.max(0,(W-dogW)/2)+'px)';
            sprite.style.backgroundPositionX='0px';
            return;
     }
     let x=0, dir=1, fIdx=0; const SPEED=52, FPS=11;
     let last=performance.now();
     function frame(now){
            const dt=Math.min(50, now-last)/1000; last=now;
            const maxX=Math.max(0, W-dogW);
            x += dir*SPEED*dt;
            if(x>=maxX){ x=maxX; dir=-1; }
            if(x<=0){ x=0; dir=1; }
            fIdx += dir*FPS*dt;
            const shown = ((Math.floor(fIdx)%FRAMES)+FRAMES)%FRAMES;
            dog.style.transform='translateX('+x.toFixed(1)+'px) scaleX('+dir+')';
            sprite.style.backgroundPositionX=(-shown*dogW)+'px';
            requestAnimationFrame(frame);
     }
     function start(){ measure(); last=performance.now(); requestAnimationFrame(frame); }
     if(document.readyState==='complete') start();
          else addEventListener('load', start, {once:true});
})();
