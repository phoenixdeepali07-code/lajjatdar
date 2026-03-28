const menuData = {
    special: [
        { id: 1, mr: "अख्खा मसूर थाळी", en: "Akkha Masoor Thali", price: "₹150", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "अख्खा मसूर, दही, २ रोटी, खर्डा, पापड, राईस.", en: "Akkha Masoor, Dahi, 2 Roti, Kharda, Papad, Rice." } },
        { id: 2, mr: "शेवगा फ्राय", en: "Shevga Fry", price: "₹140", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "कुरकुरीत आणि मसालेदार फ्राय शेवगा.", en: "Crispy and spicy drumstick fry." } },
        { id: 3, mr: "शेवगा करी", en: "Shevga Curry", price: "₹160", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "काळया मसाल्यातील आमची प्रसिद्ध शेवगा करी.", en: "Our famous drumstick curry in black masala." } },
        { id: 4, mr: "पनीर कढाई", en: "Paneer Kadai", price: "₹220", img: "./public/assets/paneer_tikka_masala.png", desc: { mr: "कढाई मसाल्यात शिजवलेले पनीर.", en: "Paneer cooked in traditional kadai spices." } },
        { id: 5, mr: "पनीर कोफ्ता", en: "Paneer Kofta", price: "₹220", img: "./public/assets/paneer_tikka_masala.png", desc: { mr: "मऊ पनीर कोफ्ते क्रीमी ग्रेव्हीमध्ये.", en: "Soft paneer dumplings in a rich creamy gravy." } },
        { id: 6, mr: "अख्खा मसूर ग्रेव्ही", en: "Akkha Masoor Gravy", price: "₹80/120", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "अस्सल कोल्हापुरी चवीचा अख्खा मसूर.", en: "Authentic Kolhapuri style whole brown lentils." } }
    ],
    breakfast: [
        { id: 101, mr: "स्पेशल थालीपीठ", en: "Special Thalipith", price: "₹60", desc: { mr: "खुसखुशीत थालीपीठ.", en: "Crispy multigrain flatbread." } },
        { id: 102, mr: "धपाटी", en: "Dhapati", price: "₹70", desc: { mr: "पारंपारिक धपाटी.", en: "Traditional Maharashtrian flatbread." } }
    ],
    starter: [
        { id: 201, mr: "फ्राय पापड", en: "Fry Papad", price: "₹20", desc: { mr: "", en: "" } },
        { id: 202, mr: "रोस्टेड पापड", en: "Roasted Papad", price: "₹15", desc: { mr: "", en: "" } },
        { id: 203, mr: "मसाला पापड", en: "Masala Papad", price: "₹30", desc: { mr: "", en: "" } }
    ],
    soup: [
        { id: 301, mr: "टोमॅटो सुप", en: "Tomato Soup", price: "₹70", desc: { mr: "", en: "" } },
        { id: 302, mr: "व्हे़ज मंचव सुप", en: "Veg Manchau Soup", price: "₹100", desc: { mr: "", en: "" } },
        { id: 303, mr: "मालवणी रस्सा", en: "Malwani Rassa", price: "₹50", desc: { mr: "", en: "" } }
    ],
    veg_dishes: [
        { id: 401, mr: "काजू पनीर मसाला", en: "Kaju Paneer Masala", price: "₹190", desc: { mr: "", en: "" } },
        { id: 402, mr: "काजू मसाला", en: "Kaju Masala", price: "₹180", desc: { mr: "", en: "" } },
        { id: 403, mr: "काजू कुर्मा", en: "Kaju Kurma", price: "₹200", desc: { mr: "", en: "" } },
        { id: 404, mr: "पनीर मख्खनवाला", en: "Paneer Makhanwala", price: "₹210", desc: { mr: "", en: "" } },
        { id: 405, mr: "पनीर टिक्का मसाला", en: "Paneer Tikka Masala", price: "₹210", desc: { mr: "", en: "" } },
        { id: 406, mr: "पनीर भुर्जी", en: "Paneer Bhurji", price: "₹200", desc: { mr: "", en: "" } },
        { id: 407, mr: "पनीर लबाबदार", en: "Paneer Lababdar", price: "₹200", desc: { mr: "", en: "" } },
        { id: 408, mr: "पनीर चिंगारी", en: "Paneer Chingari", price: "₹210", desc: { mr: "", en: "" } },
        { id: 409, mr: "पनीर मसाला", en: "Paneer Masala", price: "₹200", desc: { mr: "", en: "" } },
        { id: 410, mr: "भुना मसाला", en: "Bhuna Masala", price: "₹170", desc: { mr: "", en: "" } },
        { id: 411, mr: "व्हेज तवा", en: "Veg Tawa", price: "₹180", desc: { mr: "", en: "" } },
        { id: 412, mr: "व्हेज कोल्हापूरी", en: "Veg Kolhapuri", price: "₹180", desc: { mr: "झणझणीत कोल्हापूरी व्हेज.", en: "Spicy Kolhapuri style mixed vegetables." } },
        { id: 413, mr: "व्हेज हैद्राबादी", en: "Veg Hyderabadi", price: "₹200", desc: { mr: "", en: "" } },
        { id: 414, mr: "पालक पनीर", en: "Palak Paneer", price: "₹180", desc: { mr: "", en: "" } },
        { id: 415, mr: "लसूण पालक पनीर", en: "Lasoon Palak Paneer", price: "₹185", desc: { mr: "", en: "" } },
        { id: 416, mr: "पनीर अंगारा", en: "Paneer Angara", price: "₹200", desc: { mr: "", en: "" } }
    ],
    tadka: [
        { id: 501, mr: "दाल फ्राय", en: "Dal Fry", price: "₹100", desc: { mr: "", en: "" } },
        { id: 502, mr: "दाल तडका", en: "Dal Tadka", price: "₹120", desc: { mr: "", en: "" } }
    ],
    roti: [
        { id: 601, mr: "प्लेन रोटी", en: "Plain Roti", price: "₹15", desc: { mr: "", en: "" } },
        { id: 602, mr: "बटर रोटी", en: "Butter Roti", price: "₹20", desc: { mr: "", en: "" } },
        { id: 603, mr: "व्हीट रोटी", en: "Wheat Roti", price: "₹20", desc: { mr: "", en: "" } },
        { id: 604, mr: "बटर व्हीट रोटी", en: "Butter Wheat Roti", price: "₹25", desc: { mr: "", en: "" } },
        { id: 605, mr: "नान", en: "Naan", price: "₹35", desc: { mr: "", en: "" } },
        { id: 606, mr: "बटर नान", en: "Butter Naan", price: "₹45", desc: { mr: "", en: "" } },
        { id: 607, mr: "चपाती", en: "Chapati", price: "₹15", desc: { mr: "", en: "" } }
    ],
    rice: [
        { id: 701, mr: "प्लेन राईस", en: "Plain Rice", price: "₹50/80", desc: { mr: "", en: "" } },
        { id: 702, mr: "जीरा राईस", en: "Jeira Rice", price: "₹70/110", desc: { mr: "", en: "" } },
        { id: 703, mr: "खुश्का राईस", en: "Khushka Rice", price: "₹130", desc: { mr: "", en: "" } },
        { id: 704, mr: "मसाला राईस", en: "Masala Rice", price: "₹110", desc: { mr: "", en: "" } },
        { id: 705, mr: "दाल खिचडी", en: "Dal Khichadi", price: "₹170", desc: { mr: "", en: "" } },
        { id: 706, mr: "कर्ड राईस", en: "Curd Rice", price: "₹130", desc: { mr: "", en: "" } },
        { id: 707, mr: "व्हेज पुलाव", en: "Veg Pulav", price: "₹140", desc: { mr: "", en: "" } },
        { id: 708, mr: "व्हेज बिर्याणी", en: "Veg Biryani", price: "₹180", desc: { mr: "", en: "" } }
    ],
    thali: [
        { id: 801, mr: "रेग्युलर थाळी", en: "Regular Thali", price: "₹120", desc: { mr: "२ भाजी, २ चपाती, भात, वरण/आमटी, पापड, लोणचे, खर्डा.", en: "2 Bhaji, 2 Chapati, Rice, Varan/Amti, Papad, Pickle, Kharda." } },
        { id: 802, mr: "स्पेशल थाळी", en: "Special Thali", price: "₹180", desc: { mr: "२ भाजी, २ चपाती, आमटी, स्वीट, मसाला भात, कोशिंबीर, दामटी, पापड, लोणचे, खर्डा.", en: "2 Bhaji, 2 Chapati, Amti, Sweet, Masala Rice, Koshimbir, Damti, Papad, Pickle, Kharda." } }
    ]
};

let currentLang = 'mr';

function updateContent() {
    document.documentElement.lang = currentLang;
    const elements = document.querySelectorAll('[data-mr]');
    elements.forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.innerText = currentLang === 'mr' ? 'English' : 'मराठी';
    }

    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) {
        renderMenu(activeBtn.dataset.category);
    }
}

function renderMenu(category) {
    const grid = document.getElementById('menu-items');
    if (!grid) return;
    grid.innerHTML = '';

    if (!menuData[category]) return;

    // Adjust grid layout based on category
    if (category === 'special' || category === 'thali') {
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8';
    } else if (category === 'veg_dishes') {
         grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
    } else {
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6';
    }

    menuData[category].forEach(item => {
        const card = document.createElement('div');
        
        if (category === 'special') {
            // Featured Card Style (Left/Right variation)
            const isDark = item.id % 2 !== 0; // Alternate colors
            card.className = `${isDark ? 'bg-[#7a0000] text-white' : 'bg-[#f5eecb] text-[#d40000]'} p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[300px] group transition-all hover:scale-[1.02]`;
            
            const badgeClass = isDark ? 'bg-background text-primary' : 'bg-primary text-on-primary';
            const badgeText = isDark ? 'लज्जतदार स्पेशल' : "CHEF'S CHOICE";
            
            const content = `
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <span class="${badgeClass} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">${badgeText}</span>
                        <h3 class="font-headline text-3xl font-black mb-2 leading-tight">${item[currentLang]} </h3>
                        <p class="${isDark ? 'text-white/70' : 'text-primary/70'} text-sm font-medium max-w-[200px] mb-6 leading-relaxed">${item.desc[currentLang]}</p>
                    </div>
                    ${item.img ? `<div class="w-32 h-32 rounded-2xl overflow-hidden border-2 ${isDark ? 'border-background/20' : 'border-primary/20'} rotate-2 group-hover:rotate-0 transition-transform"><img src="${item.img}" class="w-full h-full object-cover"></div>` : `<span class="material-symbols-outlined text-4xl ${isDark ? 'text-background/40' : 'text-primary/40'}">star</span>`}
                </div>
                <div class="text-3xl font-black tracking-tighter">${item.price}</div>
            `;
            card.innerHTML = content;

        } else if (category === 'thali') {
            // Detailed Thali Card Style
            card.className = 'bg-white rounded-[2rem] p-6 shadow-2xl border border-primary/5 group hover:translate-y-[-4px] transition-all duration-300';
            const thaliItems = item.desc[currentLang].split(',').map(i => i.trim());
            card.innerHTML = `
                <div class="text-center mb-6">
                    <div class="inline-block border border-primary/20 p-0.5 w-4 h-4 mb-2">
                        <div class="bg-[#009c48] rounded-full w-2 h-2 mx-auto"></div>
                    </div>
                    <h3 class="font-headline text-2xl font-black text-primary uppercase tracking-tighter">${item[currentLang]}</h3>
                </div>
                <div class="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img src="./public/assets/restaurant_interior.png" class="w-full h-64 object-cover rounded-2xl shadow-lg">
                </div>
                <ul class="space-y-3 mb-8 px-4">
                    ${thaliItems.map(thaliItem => `
                        <li class="flex items-center gap-3 text-sm font-bold text-on-surface/70">
                            <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                            ${thaliItem}
                        </li>
                    `).join('')}
                </ul>
                <div class="flex items-center justify-between pt-6 border-t border-dashed border-primary/20">
                    <div>
                        <div class="text-[10px] text-on-surface/40 uppercase tracking-widest font-black">SPECIAL PRICE</div>
                        <div class="text-2xl font-black text-on-surface">${item.price}</div>
                    </div>
                    <button class="bg-[#fec311] text-primary px-6 py-3 rounded-xl font-black text-sm hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95">येथे क्लिक करा</button>
                </div>
            `;

        } else if (category === 'veg_dishes') {
            // Highlighted Box Style
            card.className = 'bg-[#fff9e6] border-2 border-[#fec311]/30 rounded-3xl p-6 shadow-inner flex justify-between items-center group hover:bg-[#fff6d6] transition-colors';
            card.innerHTML = `
                <div class="flex flex-col">
                    <h3 class="font-black text-lg text-primary">${item.mr}</h3>
                    <p class="text-[10px] font-bold text-on-surface/40 uppercase tracking-wider">${item.en}</p>
                </div>
                <div class="text-right">
                    <div class="font-black text-primary">${item.price}</div>
                </div>
            `;

        } else {
            // Compact List Style (for others)
            card.className = 'flex flex-col gap-1 border-b border-primary/10 pb-4 group hover:bg-primary/5 transition-colors p-2 rounded-xl';
            card.innerHTML = `
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-black text-on-surface text-lg group-hover:text-primary transition-colors">${item.mr}</h3>
                        <p class="text-xs font-medium text-on-surface/40 uppercase tracking-widest">${item.en}</p>
                    </div>
                    <div class="font-black text-primary text-sm">${item.price}</div>
                </div>
            `;
        }
        grid.appendChild(card);
    });
}

// Event Listeners
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'mr' ? 'en' : 'mr';
        updateContent();
    });
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active', 'bg-primary', 'text-on-primary');
            b.classList.add('border-primary/20');
        });
        e.target.classList.add('active', 'bg-primary', 'text-on-primary');
        e.target.classList.remove('border-primary/20');
        renderMenu(e.target.dataset.category);
    }
});

// Initial Render
updateContent();

// Gallery integration
const galleryImages = [
    "./public/assets/insta_1.jpg",
    "./public/assets/insta_2.jpg",
    "./public/assets/insta_3.jpg",
    "./public/assets/insta_4.jpg",
    "./public/assets/insta_5.jpg",
    "./public/assets/restaurant_interior.png"
];

function renderGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    galleryContainer.innerHTML = galleryImages.map(img => `
        <div class="aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <img src="${img}" alt="Gallery Image" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy">
        </div>
    `).join('');
}

renderGallery();
