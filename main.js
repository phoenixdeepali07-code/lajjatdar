const menuData = {
    special: [
        { id: 1, mr: "स्पेशल अक्खा मसूर", en: "Special Akkha Masoor", price: "₹११०", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "आमची स्वाक्षरी डिश, सुगंधी मसाल्यात शिजवलेले अक्खा मसूर.", en: "Our signature dish, whole brown lentils cooked in aromatic spices." } },
        { id: 2, mr: "शेवगा फ्राय", en: "Shevga Fry", price: "₹१४०", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "तळलेला मसालेदार शेवगा (ड्रमस्टिक) - आमची खास ओळख.", en: "Special spicy drumstick (Shevga) fry - our signature item." } },
        { id: 3, mr: "पनीर स्ट्रॉबेरी मसाला", en: "Paneer Strawberry Masala", price: "₹२३०", img: "./public/assets/paneer_tikka_masala.png", desc: { mr: "एक अनोखा आणि चविष्ट पनीर प्रकार.", en: "A unique and delicious strawberry-infused paneer specialty." } }
    ],
    breakfast: [
        { id: 101, mr: "स्पेशल थालीपीठ", en: "Special Thalipeeth", price: "₹६०", img: "./public/assets/thalipeeth_special.png", desc: { mr: "लोणी आणि चटणीसोबत सर्व्ह केलेले खुसखुशीत थालीपीठ.", en: "Crispy multigrain flatbread served with butter and chutney." } },
        { id: 102, mr: "स्पेशल मिसळ", en: "Special Misal", price: "₹६०", img: "./public/assets/misal_pav_special.png", desc: { mr: "झणझणीत कोल्हापुरी मिसळ.", en: "Spicy sprouted bean curry with bread." } },
        { id: 103, mr: "वडा सांबार", en: "Vada Sambar", price: "₹६०", img: "./public/assets/thalipeeth_special.png", desc: { mr: "कुरकुरीत वडा आणि चविष्ट सांबार.", en: "Crispy vada served with flavorful sambar." } }
    ],
    thali: [
        { id: 201, mr: "रेग्युलर थाळी", en: "Regular Thali", price: "₹१२०", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "दररोजच्या जेवणासाठी उत्तम थाळी.", en: "Perfect thali for everyday meal." } },
        { id: 202, mr: "स्पेशल थाळी", en: "Special Thali", price: "₹१८०", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "सण आणि उत्सवासाठी खास सोय.", en: "A celebratory thali with a variety of delicacies." } },
        { id: 203, mr: "अख्खा मसूर थाळी", en: "Akkha Masoor Thali", price: "₹१५०", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "अख्खा मसूर सोबत खास थाळी.", en: "Dedicated thali featuring our signature Akkha Masoor." } }
    ],
    marathi: [
        { id: 11, mr: "शेव भाजी", en: "Shev Bhaji", price: "₹१२०", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "तिखट रश्यात कुरकुरीत शेव.", en: "Crispy sev in a spicy Maharashtrian gravy." } },
        { id: 12, mr: "वांग्याचे भरीत", en: "Baigan Bharta", price: "₹११०", img: "./public/assets/hero_akkhamasoor.png", desc: { mr: "चुलीवर भाजलेल्या वांग्याचे भरीत.", en: "Roasted eggplant mash with traditional spices." } }
    ],
    punjabi: [
        { id: 14, mr: "पनीर कढाई", en: "Paneer Kadai", price: "₹२२०", img: "./public/assets/paneer_tikka_masala.png", desc: { mr: "कढई मसाल्यात शिजवलेले पनीर.", en: "Paneer cooked in traditional kadai spices." } },
        { id: 15, mr: "पनीर कोफ्ता", en: "Paneer Kofta", price: "₹२२०", img: "./public/assets/paneer_tikka_masala.png", desc: { mr: "नऊरतन आणि पनीरचे कोफ्ते.", en: "Soft paneer dumplings in a rich gravy." } },
        { id: 16, mr: "पनीर टिक्का मसाला", en: "Paneer Tikka Masala", price: "₹१८०", img: "./public/assets/paneer_tikka_masala.png", desc: { mr: "तंदूरी पनीर क्यूब्स क्रीमी ग्रेव्हीमध्ये.", en: "Tandoori paneer cubes in a rich creamy gravy." } }
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
    langBtn.innerText = currentLang === 'mr' ? 'English' : 'मराठी';

    const activeCategory = document.querySelector('.tab-btn.active').dataset.category;
    renderMenu(activeCategory);
}

function renderMenu(category) {
    const grid = document.getElementById('menu-items');
    grid.innerHTML = '';

    if (!menuData[category]) return;

    menuData[category].forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item';
        card.innerHTML = `
            <div class="item-img-container">
                <img src="${item.img}" alt="${item[currentLang]}" class="item-img">
                <span class="item-badge">${item.price}</span>
            </div>
            <div class="item-info">
                <h3>${item[currentLang]}</h3>
                <p class="item-desc">${item.desc[currentLang]}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Event Listeners
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'mr' ? 'en' : 'mr';
    updateContent();
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderMenu(e.target.dataset.category);
    });
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
        <img src="${img}" alt="Gallery Image" class="gallery-img" loading="lazy">
    `).join('');
}

renderGallery();
