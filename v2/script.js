const IMAGES = {"food_beef_gf": "../images/food_beef_gf.webp", "food_venison": "../images/food_venison.webp", "food_beef2": "../images/food_beef2.webp", "food_puppy": "../images/food_puppy.webp", "food_probio": "../images/food_probio.webp", "food_chicken": "../images/food_chicken.webp", "food_ducksalmon": "../images/food_ducksalmon.webp", "food_small": "../images/food_small.webp", "cat_tuna": "../images/cat_tuna.webp", "cat_chicken": "../images/cat_chicken.webp", "treat_stick_beef": "../images/treat_stick_beef.webp", "treat_stick_chick": "../images/treat_stick_chick.webp", "treat_cube_beef": "../images/treat_cube_beef.webp", "treat_cube_duck": "../images/treat_cube_duck.webp", "vit_multi": "../images/vit_multi.webp", "vit_calcium": "../images/vit_calcium.webp", "vit_calcium2": "../images/vit_calcium2.webp", "vit_multi2": "../images/vit_multi2.webp", "bed_black": "../images/bed_black.webp", "bed_cream": "../images/bed_cream.webp", "bed_yellow": "../images/bed_yellow.webp", "bed_green": "../images/bed_green.webp", "bed_pink": "../images/bed_pink.webp", "bed_grey": "../images/bed_grey2.webp", "bed_beige": "../images/bed_beige2.webp", "bed_brown": "../images/bed_brown.webp", "bed_lavender": "../images/bed_lavender2.webp", "bed_blue": "../images/bed_blue.webp", "bed_whitepurple": "../images/bed_whitepurple.webp", "bed_pinkcat": "../images/bed_pinkcat.webp", "acc_carrier": "../images/acc_carrier.webp", "acc_waterer": "../images/acc_waterer.webp", "pel_a": "../images/pel_a.webp", "pel_b": "../images/pel_b.webp", "pel_c": "../images/pel_c.webp", "pel_d": "../images/pel_d.webp", "pel_e": "../images/pel_e.webp", "treat_cube_beef2": "../images/treat_cube_beef2.webp", "logo": "../images/logo.webp", "cat_dog": "../images/cat_dog.webp", "cat_cat": "../images/cat_cat.webp", "cat_treat": "../images/cat_treat.webp", "cat_vit": "../images/cat_vit.webp", "cat_bed": "../images/cat_bed.webp", "cat_pad": "../images/cat_pad.webp", "cat_acc": "../images/cat_acc.webp"};
const PHONE_WA = "79829195210"; // WhatsApp / телефон
const TG = "https://t.me/qwesyt66"; // личный чат для заказов
const VK = "https://vk.me/zoolavka66"; // чат сообщества ВКонтакте


// ВК-бот заказов (работает в РФ без VPN)

// Адрес Cloudflare Worker, который пересылает заказы в Telegram и ВК (ключи хранятся там, не на сайте)
const ORDER_URL = "";
const HERO_VIDEO = "../images/herodog.webm?v=2";
const HERO_VIDEO_FALLBACK = "../images/herodogfallback.mp4?v=3";

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
   {id:"d10", cat:"dog", isNew:true, name:"Корм Myfoodie для мелких пород - говядина с черникой", desc:"Гранулы + мясные кубики · пробиотики · мелкие породы", img:"food_small", variants:[{l:"1 кг",p:1200},{l:"10 кг",p:11000}]},
   {id:"d2", cat:"dog", name:"Корм Myfoodie - беззерновая говядина", desc:"Grain Free · двойное мясо · все породы", img:"food_beef_gf", variants:[{l:"1 кг",p:1200},{l:"10 кг",p:11000}]},
   {id:"d3", cat:"dog", name:"Корм Myfoodie - оленина", desc:"Двойное мясо · для взрослых собак", img:"food_venison", variants:[{l:"1 кг",p:1200},{l:"10 кг",p:11000}]},
   {id:"d4", cat:"dog", name:"Корм Myfoodie - говядина и овощи", desc:"Двойное мясо · говядина + овощи · все породы", img:"food_beef2", variants:[{l:"1 кг",p:1200},{l:"10 кг",p:11000}]},
   {id:"d5", cat:"dog", name:"Корм Myfoodie для щенков - говядина и курица", desc:"Natural Food Puppy · все породы · 1,8 кг", img:"food_puppy", variants:[{l:"1,8 кг",p:2300}]},
   {id:"d6", cat:"dog", soldout:true, name:"Корм Myfoodie с пробиотиками - говядина, курица, черника", desc:"Говядина, курица, черника · Active Probiotics · 1,8 кг", img:"food_probio", variants:[{l:"1,8 кг",p:2500}]},
   {id:"d7", cat:"dog", name:"Корм Myfoodie - курица", desc:"Двойное мясо · все породы", img:"food_chicken", variants:[{l:"1 кг",p:1100},{l:"10 кг",p:10000}]},
   {id:"d9", cat:"dog", name:"Корм Myfoodie - утка и лосось", desc:"Adult · для взрослых собак всех пород", img:"food_ducksalmon", soldout:true, variants:[{l:"700 г",p:900},{l:"7 кг",p:8500}]},
   {id:"c2", cat:"cat", isNew:true, name:"Корм Myfoodie для кошек - курица и тунец", desc:"Свежее мясо · для взрослых кошек · таурин", img:"cat_tuna", variants:[{l:"1 кг",p:1200},{l:"10 кг",p:11000}]},
   {id:"c1", cat:"cat", soldout:true, name:"Корм Myfoodie - курица и клюква", desc:"Для взрослых кошек · 1,25 кг", img:"cat_chicken", variants:[{l:"1,25 кг",p:1500}]},
   {id:"t1", cat:"treat", name:"Мясные палочки - говядина и треска", desc:"Global Natural · 360 г", img:"treat_stick_beef", price:700},
   {id:"t2", cat:"treat", name:"Мясные палочки - курица", desc:"Global Natural · 360 г", img:"treat_stick_chick", price:700},
   {id:"t3", cat:"treat", name:"Мясные кубики - говядина", desc:"Сушёное мясо (freeze-dried) · 100 г", img:"treat_cube_beef", price:500},
   {id:"t4", cat:"treat", name:"Мясные кубики - утка", desc:"Сушёное мясо (freeze-dried) · 100 г", img:"treat_cube_duck", price:500},
   {id:"t5", cat:"treat", name:"Мясные кубики с начинкой - говядина", desc:"Аргентинская говядина · 180 г", img:"treat_cube_beef2", price:600},
   {id:"v1", cat:"vit", name:"Витамины Myfoodie для собак - мультивитамины", desc:"Витамины · 100 г", img:"vit_multi2", price:800},
   {id:"v2", cat:"vit", name:"Витамины Myfoodie для собак - молочный кальций", desc:"Витамины с кальцием · 100 г", img:"vit_calcium2", price:800},
   {id:"b8", cat:"bed", name:"Лежанка-бублик, бежевая", desc:"60×60 см · с бортиком", img:"bed_beige", price:1800},
   {id:"b7", cat:"bed", name:"Лежанка-бублик, серая", desc:"60×60 см · с бортиком", img:"bed_grey", price:1800},
   {id:"b13", cat:"bed", name:"Лежанка-бублик, коричневая", desc:"60×60 см · с бортиком", img:"bed_brown", price:1800},
   {id:"b1", cat:"bed", name:"Лежанка зверёк, чёрная", desc:"45×45 см · мягкий плюш", img:"bed_black", price:2000},
   {id:"b4", cat:"bed", name:"Лежанка зверёк, жёлтая", desc:"45×45 см · мягкий плюш", img:"bed_yellow", price:2000},
   {id:"b9", cat:"bed", name:"Лежанка зверёк, лавандовая", desc:"45×45 см · мягкий плюш", img:"bed_lavender", price:2000},
   {id:"b10", cat:"bed", name:"Лежанка зверёк, синяя", desc:"45×45 см · мягкий плюш", img:"bed_blue", price:2000},
   {id:"b11", cat:"bed", name:"Лежанка зверёк, бело-фиолетовая", desc:"45×45 см · мягкий плюш", img:"bed_whitepurple", price:2000},
   {id:"b12", cat:"bed", name:"Лежанка зверёк, розовая", desc:"45×45 см · мягкий плюш", img:"bed_pinkcat", price:2000},
   {id:"p1", cat:"pad", name:"Многоразовые пелёнки", desc:"5-слойные, впитывающие · 5 расцветок", img:"pel_a",
       gallery:[{k:"pel_a",n:"Розовая (девочка)"},{k:"pel_b",n:"Львята"},{k:"pel_c",n:"Голубая (мишка)"},{k:"pel_d",n:"Голубая (зайка)"},{k:"pel_e",n:"Белая (мишки BABY)"}],
       variants:[{l:"100×50 см",p:500},{l:"100×70 см",p:800},{l:"100×120 см",p:1100},{l:"100×150 см",p:1400}]},
   {id:"a1", cat:"acc", name:"Переноска", desc:"Открывается сверху · для кошек и мелких собак", img:"acc_carrier", variants:[{l:"M (30×30×48 см)",p:2300},{l:"L",p:2300,oos:true}]},
   {id:"a2", cat:"acc", name:"Автопоилка", desc:"Миска + поилка 2-в-1", img:"acc_waterer", price:900},
   ];

const PROMO = null; // акций сейчас нет. Пример: { id: "d5", price: 1800, until: "2026-10-31T23:59:59+05:00" }
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


// Подробные карточки товаров. Добавляй сюда товары по id из PRODUCTS.
// about - описание (абзацы через пустую строку), features - список плюсов, usage - как применять, facts - характеристики
const DETAILS = {
     v1: {
            about:`Жевательные таблетки с комплексом витаминов для собак всех пород. Восполняют то, чего может не хватать в ежедневном рационе, и поддерживают общее здоровье питомца.

Особенно полезны в периоды повышенной нагрузки: при активном росте щенка, в межсезонье, после болезни, а также пожилым собакам. Таблетки собаки едят как лакомство, поэтому их удобно давать каждый день.`,
            features:[
                   "Комплекс витаминов в одной таблетке",
                   "Поддерживает иммунитет и общий тонус",
                   "Помогает сохранить здоровую кожу и блестящую шерсть",
                   "Жевательные таблетки со вкусом, который нравится собакам"
            ],
            usage:`Давайте как лакомство, целиком или раскрошив в корм. Дозировка зависит от веса собаки и указана на упаковке. Перед курсом для щенков, беременных собак и собак с хроническими заболеваниями лучше проконсультироваться с ветеринаром.`,
            facts:[["Бренд","Myfoodie"],["Форма","жевательные таблетки"],["Вес","100 г"],["Для кого","собаки всех пород"]]
     },
     v2: {
            about:`Жевательные таблетки с молочным кальцием для собак всех пород. Кальций нужен для крепких костей, зубов и суставов, особенно щенкам в период активного роста, беременным и кормящим собакам, а также пожилым питомцам.

Молочный кальций - органическая форма, которая легко усваивается и мягко действует на пищеварение. Таблетки собаки едят как лакомство, поэтому их удобно давать каждый день.`,
            features:[
                   "Молочный кальций - органическая, легкоусвояемая форма",
                   "Поддерживает крепкие кости, зубы и суставы",
                   "Подходит щенкам, взрослым и пожилым собакам",
                   "Жевательные таблетки со вкусом, который нравится собакам"
            ],
            usage:`Давайте как лакомство, целиком или раскрошив в корм. Дозировка зависит от веса собаки и указана на упаковке. Перед курсом для щенков, беременных собак и собак с хроническими заболеваниями лучше проконсультироваться с ветеринаром.`,
            facts:[["Бренд","Myfoodie"],["Форма","жевательные таблетки"],["Вес","100 г"],["Для кого","собаки всех пород"]]
     }
};
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
     d10: `🥩 Состав:
     Говядина (30%), куриная мука, рис
     Говяжья мясокостная мука, кукуруза, пшеница
     Куриный жир, соевый шрот, кукурузный белок, порошок фиолетового батата
     Пивные дрожжи, черника (3%), рыбий жир (2%), соевое масло
     Свекольный жом (2%), яичный желток (1%), криль (0.5%)
     ✅ В составе:
     Фруктоолигосахариды (0.3%), L-карнитин, дикальцийфосфат, хлорид натрия, сульфаты марганца, цинка, железа и меди, йодат кальция, селенит натрия, ацетат витамина A, витамин D3, dl-альфа-токоферол ацетат (витамин E), витамин K3, витамины группы B (B1 — нитрат тиамина, B2, B6, B12), пантотенат кальция, никотинамид, фолиевая кислота, биотин, хлорид холина, антиоксиданты, L-лизин
     🔬 Пищевая ценность:
     Белки ≥ 26%
     Жиры ≥ 13%
     Клетчатка ≤ 5%
     Влага ≤ 10%
     Зола ≤ 10%
     Кальций ≥ 1%
     Фосфор ≥ 0.8%
     Лизин ≥ 1%
     Соль (Cl) ≥ 0.3%`,
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
     Соль (водорастворимые хлориды): ≥ 0.3%`,
     c2: `🥩 Состав:
     Свежая курица (30%), куриная мука, рис
     Пшеница, куриный жир, тунец (5%)
     Пшеничный глютен, клюква (3%), лососевый жир (2%)
     Говяжий жир, семена льна, гороховая клетчатка (1%), целлюлоза (1%)
     Комплексная вкусовая добавка, пивные дрожжи, яблочный порошок
     Морковный порошок, тыква, черника, семена подорожника, порошок юкки
     ✅ В составе:
     Ксилоолигосахариды, натуральный лютеин
     Таурин, хлорид натрия, хлорид калия
     Хелаты марганца, цинка и меди, сульфат железа
     Йодат кальция, селен-дрожжи
     Витамины A, D3, E (dl-альфа-токоферола ацетат), B1, B2, B6, B12
     D-пантотенат кальция, никотинамид, фолиевая кислота, D-биотин
     Хлорид холина, антиоксидант, L-лизин, DL-метионин
     🔬 Пищевая ценность:
     Белки: ≥ 30.0%
     Жиры: ≥ 14.0%
     Клетчатка: ≤ 5.0%
     Зола: ≤ 10.0%
     Влага: ≤ 10.0%
     Кальций: ≥ 0.9%
     Фосфор: ≥ 0.7%
     Таурин: ≥ 0.2%
     Соль (Cl): ≥ 0.3%`
};

const money = n => n.toLocaleString('ru-RU') + ' ₽';
const priceOf = p => p.variants ? Math.min(...p.variants.map(v=>v.p)) : p.price;

let activeCat = "", query = "";
const cart = {};
try{ const saved=JSON.parse(localStorage.getItem('zl_cart')||'{}'); if(saved && typeof saved==='object') Object.assign(cart,saved); }catch(e){}
function saveCart(){ try{ localStorage.setItem('zl_cart',JSON.stringify(cart)); }catch(e){} }

function selectCategory(id){
     activeCat=id; query=''; const qi=document.getElementById('q'); if(qi) qi.value='';
     if(location.hash!=='#'+id) history.pushState(null,'','#'+id);
     renderGrid(); document.getElementById('catalog').scrollIntoView({behavior:'smooth',block:'start'});
}
function goHome(){
     activeCat=''; query=''; const qi=document.getElementById('q'); if(qi) qi.value='';
     if(location.hash) history.pushState(null,'',location.pathname+location.search);
     renderGrid(); document.getElementById('cats').scrollIntoView({behavior:'smooth',block:'start'});
}

const grid = document.getElementById('grid');
function renderGrid(){
     const q = query.trim().toLowerCase();
     const sec = document.getElementById('catalog');
     grid.innerHTML = '';
     if(!activeCat && !q){ if(sec) sec.hidden = true; return; }
     if(sec) sec.hidden = false;
     const list = PRODUCTS.filter(p=>{
            if(activeCat && p.cat!==activeCat) return false;
            if(q && !(p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || (CATLBL[p.cat]||'').toLowerCase().includes(q))) return false;
            return true;
     });
     const t = document.getElementById('gridTitle');
     if(t) t.textContent = q ? 'Поиск: «'+query.trim()+'»' : (TILELBL[activeCat]||'Каталог');
     const c = document.getElementById('gridCount');
     if(c) c.textContent = list.length ? list.length+' '+plural(list.length,['товар','товара','товаров']) : '';
     if(!list.length){ grid.innerHTML='<div class="empty">Ничего не нашлось. Попробуйте другой запрос.</div>'; return; }
     list.forEach(p=>grid.appendChild(makeCard(p)));
}
function plural(n,f){ const m10=n%10, m100=n%100; return f[(m10===1&&m100!==11)?0:(m10>=2&&m10<=4&&(m100<10||m100>=20))?1:2]; }

// Карточка товара: фото, название, фасовки кнопками, цена и «+». Подробности и состав в окне товара.
function makeCard(p){
     const card=document.createElement('article');
     card.className='card'+(p.soldout?' soldout':'');
     card.dataset.pid=p.id;
     const isPromo = p.isPromo && promoActive();
     const vars = p.variants || null;
     let vi = 0;
     if(vars){ const f=vars.findIndex(v=>!v.oos); vi = f<0 ? 0 : f; }
     let patName = p.gallery ? p.gallery[0].n : '';
     let patKey  = p.gallery ? p.gallery[0].k : '';
     const badge = isPromo ? '<span class="badge hot">Акция</span>' : (p.isNew ? '<span class="badge">Новинка</span>' : '');
     let chips = '';
     if(vars && vars.length>1){
            chips = '<div class="sizes">'+vars.map((v,i)=>'<button type="button" data-i="'+i+'" class="'+(i===vi?'on':'')+(v.oos?' oos':'')+'"'+(v.oos?' disabled title="Нет в наличии"':'')+'>'+esc(v.l)+'</button>').join('')+'</div>';
     } else if(vars && vars[0].l){
            chips = '<div class="sizes"><span class="one">'+esc(vars[0].l)+'</span></div>';
     }
     const sw = p.gallery ? '<div class="sw">'+p.gallery.map((g,i)=>'<button type="button" class="'+(i===0?'on':'')+'" data-g="'+g.k+'" data-n="'+esc(g.n)+'" title="'+esc(g.n)+'"><img src="'+(IMAGES[g.k]||'')+'" alt="" loading="lazy"></button>').join('')+'</div>' : '';
     const cur = () => vars ? vars[vi].p : priceOf(p);
     const priceHTML = isPromo
            ? '<span class="old">'+money(p.originalPrice)+'</span><b>'+money(priceOf(p))+'</b>'
            : '<b>'+money(cur())+'</b>';
     card.innerHTML =
            '<div class="ph">'+badge+'<img src="'+(IMAGES[patKey||p.img]||'')+'" alt="'+esc(p.name)+'" loading="lazy" decoding="async">'+(p.soldout?'<span class="soldflag">Нет в наличии</span>':'')+'<span class="more" aria-hidden="true">i</span></div>'+
            '<h4 class="cname" role="button" tabindex="0">'+esc(p.name)+'</h4>'+
            '<p class="cdesc">'+esc(p.desc)+'</p>'+
            sw + chips +
            '<div class="buy"><span class="price">'+priceHTML+'</span>'+
            '<button type="button" class="add addbtn"'+(p.soldout?' disabled':'')+' aria-label="В корзину"><span class="pl">+</span><span class="ok">✓</span></button></div>';
     const img = card.querySelector('.ph img');
     const open = () => openProduct(p, patKey||undefined);
     card.querySelector('.ph').onclick = open;
     const cn = card.querySelector('.cname'); cn.onclick = open; cn.onkeydown = e=>{ if(e.key==='Enter') open(); };
     card.querySelectorAll('.sizes button').forEach(b=>b.onclick=()=>{
            if(b.disabled) return;
            vi = +b.dataset.i;
            card.querySelectorAll('.sizes button').forEach(x=>x.classList.toggle('on',x===b));
            if(!isPromo){ const pb=card.querySelector('.price b'); pb.textContent=money(cur()); pb.classList.remove('flip'); void pb.offsetWidth; pb.classList.add('flip'); }
     });
     card.querySelectorAll('.sw button').forEach(b=>b.onclick=()=>{
            patKey=b.dataset.g; patName=b.dataset.n; img.src=IMAGES[patKey];
            card.querySelectorAll('.sw button').forEach(x=>x.classList.toggle('on',x===b));
     });
     const add = card.querySelector('.add');
     add.onclick = ()=>{
            if(add.disabled || (vars && vars[vi].oos)) return;
            addToCart(p, vi, 1, patName, patKey);
            add.classList.add('added');
            setTimeout(()=>add.classList.remove('added'),1100);
     };
     return card;
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
     saveCart();
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
     if(contact==='ВКонтакте' && val('cvk')) t+='Страница ВК: '+val('cvk')+'\n';
     return t;
}
const val=id=>document.getElementById(id).value.trim();

// Отправка заказа через Worker: сам сайт ключей не знает
function sendWorker(text){
     if(!ORDER_URL) return Promise.reject(new Error('no endpoint'));
     const ctrl=('AbortController' in window)?new AbortController():null;
     const timer=setTimeout(()=>{ try{ctrl&&ctrl.abort();}catch(e){} },15000);
     return fetch(ORDER_URL,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({text:text, hp:(document.getElementById('cweb')||{}).value||''}),
            signal:ctrl?ctrl.signal:undefined
     }).then(r=>r.json()).then(j=>{ clearTimeout(timer); if(!j||!j.ok) throw new Error('order error'); })
       .catch(e=>{ clearTimeout(timer); throw e; });
}
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
     if(val('ccontact')==='ВКонтакте' && !val('cvk')){
            err.textContent='Укажите ссылку на вашу страницу ВКонтакте, чтобы мы могли вам написать.';
            err.style.display='block';
            return;
     }
     if(consentLbl) consentLbl.classList.remove('warn');
     err.style.display='none';
     btn.disabled=true; const oldLabel=btn.innerHTML; btn.innerHTML='Отправляем…';
     try{
            const text=orderText();
            // Шлём сразу в оба канала. Заказ считается отправленным, если дошёл хотя бы в один.
            await sendWorker(text);
            err.style.display='none';
            Object.keys(cart).forEach(k=>delete cart[k]);
            renderCart();
            const via=val('ccontact');
            document.getElementById('doneText').textContent='Мы получили вашу заявку и скоро свяжемся с вами'+(via?' через '+via:'')+'.';
            modal.classList.remove('on');
            doneModal.classList.add('on');
            btn.disabled=false; btn.innerHTML=oldLabel;
     }catch(e){
            btn.disabled=false; btn.innerHTML=oldLabel;
            err.textContent='Не получилось отправить автоматически — нажмите «Скопировать заказ» и пришлите его нам в сообщения ВКонтакте (vk.ru/zoolavka72).';
            err.style.display='block';
     }
}
document.getElementById('sendOrder').onclick=sendOrder;
const doneModal=document.getElementById('doneModal');
const closeDone=()=>doneModal.classList.remove('on');
document.getElementById('doneOk').onclick=closeDone;
doneModal.onclick=e=>{ if(e.target===doneModal) closeDone(); };
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeDone(); });
const syncVkField=()=>{ document.getElementById('cvkWrap').style.display = val('ccontact')==='ВКонтакте' ? '' : 'none'; };
document.getElementById('ccontact').addEventListener('change',syncVkField); syncVkField();
document.getElementById('copyOrder').onclick=()=>{ copy(orderText()); toast('Заказ скопирован в буфер обмена'); };
function copy(text){ try{ navigator.clipboard.writeText(text); }catch(e){ const t=document.createElement('textarea'); t.value=text; document.body.appendChild(t); t.select(); try{document.execCommand('copy');}catch(_){}
                                                                          t.remove(); } }
function toast(msg){ const h=document.getElementById('chint'); h.textContent=msg; h.style.color='var(--ok)'; setTimeout(()=>{h.style.color='';h.textContent='Мы получим заявку и сами свяжемся с вами в выбранном мессенджере.';},3200); }

document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ modal.classList.remove('on'); closeCart(); } });
document.getElementById('q').addEventListener('input',e=>{ query=e.target.value; if(query.trim()){ activeCat=''; if(location.hash) history.replaceState(null,'',location.pathname+location.search); } renderGrid(); });
document.getElementById('yr').textContent=new Date().getFullYear();

(function catFromHash(){ const id=location.hash.slice(1); if(CATS.some(c=>c.id===id)) activeCat=id; else { const p=PRODUCTS.find(x=>x.id===id); if(p) activeCat=p.cat; } })();
renderGrid(); renderCart();
if(activeCat) setTimeout(()=>document.getElementById('catalog').scrollIntoView({block:'start'}),50);

// Хиты на главной
const HITS = ["d10","d2","d3","d5"];
(function renderHits(){ const h=document.getElementById('hitsGrid'); if(!h) return; HITS.forEach(id=>{ const p=PRODUCTS.find(x=>x.id===id); if(p) h.appendChild(makeCard(p)); }); })();
// Плитки разделов
document.querySelectorAll('[data-cat]').forEach(t=>t.addEventListener('click',e=>{ e.preventDefault(); selectCategory(t.dataset.cat); }));
const backBtn=document.getElementById('backBtn'); if(backBtn) backBtn.onclick=goHome;

// ---------- Карточка товара (модальное окно) ----------
const pmodal=document.getElementById('pmodal');
const zoom=document.getElementById('pzoom');
function esc(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function fmtComp(t){
     return t.split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{ const e=esc(l); return /:$/.test(l) ? '<span class="chead">'+e+'</span>' : e; }).join('\n');
}
function openProduct(p, startKey){
     const d=DETAILS[p.id]||{};
     const comp=COMPOSITION[p.id];
     const isPromo=p.isPromo && promoActive();
     const hasVar=!!p.variants;
     let key = startKey || (p.gallery ? p.gallery[0].k : p.img);
     let patName = p.gallery ? (p.gallery.find(g=>g.k===key)||p.gallery[0]).n : "";
     let thumbs='';
     if(p.gallery){ thumbs='<div class="pthumbs">'+p.gallery.map(g=>'<img data-g="'+g.k+'" data-n="'+esc(g.n)+'" class="'+(g.k===key?'on':'')+'" src="'+IMAGES[g.k]+'" alt="'+esc(g.n)+'">').join('')+'</div>'; }
     let sel='';
     if(hasVar && p.variants.length>1 && !p.soldout){
            sel='<select class="varsel pvar" aria-label="Размер / фасовка">'+p.variants.map((v,i)=>'<option value="'+i+'">'+v.l+(v.oos?' - нет в наличии':' - '+money(v.p))+'</option>').join('')+'</select>';
     }
     const priceHTML = isPromo ? '<span class="oldprice">'+money(p.originalPrice)+'</span><span class="tag">'+money(priceOf(p))+'</span>' : '<span class="tag">'+money(hasVar?p.variants[0].p:priceOf(p))+'</span>';
     const paras = d.about ? d.about.split(/\n\s*\n/).map(x=>'<p>'+esc(x.trim())+'</p>').join('') : '';
     const sections =
            (paras ? '<section><h3>Описание</h3>'+paras+'</section>' : '')+
            (d.features ? '<section><h3>Преимущества</h3><ul class="pfeat">'+d.features.map(f=>'<li>'+esc(f)+'</li>').join('')+'</ul></section>' : '')+
            (d.usage ? '<section><h3>Как давать</h3><p>'+esc(d.usage)+'</p></section>' : '')+
            (d.facts ? '<section><h3>Характеристики</h3><dl class="pfacts">'+d.facts.map(f=>'<div><dt>'+esc(f[0])+'</dt><dd>'+esc(f[1])+'</dd></div>').join('')+'</dl></section>' : '')+
            (comp ? '<section class="pcomp"><h3>Состав</h3><div class="comptext clamp">'+fmtComp(comp)+'</div><button type="button" class="pmore">Читать полностью</button></section>' : '');
     pmodal.querySelector('.pbody').innerHTML =
            '<div class="pgal"><div class="pmain" title="Нажмите, чтобы увеличить"><img src="'+IMAGES[key]+'" alt="'+esc(p.name)+'">'+(p.soldout?'<span class="soldflag">Нет в наличии</span>':'')+'<span class="pzoomhint"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/></svg></span></div>'+thumbs+'</div>'+
            '<div class="pinfo">'+
                   '<span class="ctag pc">'+CATLBL[p.cat]+'</span>'+
                   '<h2>'+esc(p.name)+'</h2>'+
                   '<div class="cdesc">'+esc(p.desc)+'</div>'+
                   (p.gallery?'<div class="patname">Расцветка: <b class="patsel">'+esc(patName)+'</b></div>':'')+
                   sel+
                   '<div class="pricerow">'+priceHTML+'</div>'+
                   '<div class="buyrow"><div class="qty"><button type="button" class="qminus" aria-label="Меньше">−</button><span class="qval">1</span><button type="button" class="qplus" aria-label="Больше">+</button></div><button class="addbtn">В корзину</button></div>'+
                   sections+
            '</div>';
     const b=pmodal.querySelector('.pbody');
     const main=b.querySelector('.pmain img'), tag=b.querySelector('.tag'), addb=b.querySelector('.addbtn'), selEl=b.querySelector('.pvar');
     b.querySelector('.pmain').onclick=()=>{ zoom.querySelector('img').src=main.src; zoom.classList.add('on'); };
     b.querySelectorAll('.pthumbs img').forEach(t=>t.onclick=()=>{ key=t.dataset.g; patName=t.dataset.n; main.src=IMAGES[key]; const ps=b.querySelector('.patsel'); if(ps) ps.textContent=patName; b.querySelectorAll('.pthumbs img').forEach(x=>x.classList.toggle('on',x===t)); });
     let qv=1; const qval=b.querySelector('.qval');
     b.querySelector('.qminus').onclick=()=>{ qv=Math.max(1,qv-1); qval.textContent=qv; };
     b.querySelector('.qplus').onclick=()=>{ qv=Math.min(99,qv+1); qval.textContent=qv; };
     function refresh(){
            const v = hasVar ? p.variants[selEl?+selEl.value:0] : null;
            if(v && !isPromo) tag.innerHTML=money(v.p);
            const oos = p.soldout || (v && v.oos);
            addb.disabled=!!oos; addb.classList.toggle('oos',!!oos); addb.textContent = oos ? 'Нет в наличии' : 'В корзину';
            b.querySelector('.qty').style.visibility = oos ? 'hidden' : '';
     }
     if(selEl) selEl.onchange=refresh;
     refresh();
     addb.onclick=()=>{
            const vi=selEl?+selEl.value:0;
            if(addb.disabled) return;
            addToCart(p, vi, qv, patName, p.gallery?key:"");
            qv=1; qval.textContent=qv;
            addb.classList.add('added'); addb.textContent='Добавлено ✓';
            setTimeout(()=>{ addb.classList.remove('added'); addb.textContent='В корзину'; },1100);
     };
     pmodal.classList.add('on'); pmodal.querySelector('.psheet').scrollTop=0;
     const ct=b.querySelector('.pcomp .comptext'), mb=b.querySelector('.pmore');
     if(ct && mb){
            if(ct.scrollHeight <= ct.clientHeight+20){ ct.classList.remove('clamp'); mb.remove(); }
            else mb.onclick=()=>{ const open=ct.classList.toggle('clamp'); mb.textContent = open ? 'Читать полностью' : 'Свернуть'; if(open) ct.closest('section').scrollIntoView({block:'nearest',behavior:'smooth'}); };
     }
     document.body.style.overflow='hidden';
     if(location.hash!=='#'+p.id){ if(history.state&&history.state.zlp) history.replaceState({zlp:1},'','#'+p.id); else history.pushState({zlp:1},'','#'+p.id); }
}
function hideProduct(){ pmodal.classList.remove('on'); zoom.classList.remove('on'); document.body.style.overflow=''; }
function closeProduct(){
     if(history.state && history.state.zlp){ history.back(); return; }
     hideProduct();
     history.replaceState(null,'',activeCat ? '#'+activeCat : location.pathname+location.search);
}
document.getElementById('closeProduct').onclick=closeProduct;
pmodal.onclick=e=>{ if(e.target===pmodal) closeProduct(); };
zoom.onclick=()=>zoom.classList.remove('on');
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ if(zoom.classList.contains('on')) zoom.classList.remove('on'); else if(pmodal.classList.contains('on')) closeProduct(); } });
window.addEventListener('popstate',()=>{
     const id=location.hash.slice(1);
     const p=PRODUCTS.find(x=>x.id===id);
     if(p){ openProduct(p); return; }
     const wasOpen=pmodal.classList.contains('on');
     if(wasOpen) hideProduct();
     const nc = CATS.some(c=>c.id===id) ? id : '';
     if(!wasOpen || nc!==activeCat){ activeCat=nc; renderGrid(); }
});
(function openFromHash(){ const id=location.hash.slice(1); const p=PRODUCTS.find(x=>x.id===id); if(p) openProduct(p); })();

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
