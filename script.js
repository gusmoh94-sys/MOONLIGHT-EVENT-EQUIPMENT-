const WA="https://wa.me/+6289633083344";
const services=[
["fa-volume-high","Sound System","Sound system untuk acara kecil hingga skala besar."],
["fa-lightbulb","Lighting","Lighting panggung dan ambience untuk menciptakan atmosfer acara."],
["fa-sliders","Event Production","Solusi produksi end-to-end dengan dukungan teknis."],
["fa-mountain-sun","Stage Equipment","Equipment panggung yang siap disesuaikan dengan venue."],
["fa-tv","LED / Visual","LED dan kebutuhan visual untuk presentasi maupun show."],
["fa-microphone-lines","Microphone & Audio","Microphone dan perangkat audio untuk kebutuhan profesional."],
["fa-ring","Wedding Equipment","Kebutuhan audio, lighting, dan panggung untuk wedding."],
["fa-building","Corporate Event","Setup profesional untuk meeting, launching, gathering."],
["fa-music","Concert / Music","Production support untuk konser dan music event."],
["fa-wand-magic-sparkles","Custom Production","Rancang kebutuhan equipment sesuai konsep acara."]
];
const equipment=[
["SOUND","Speaker System","Sistem speaker untuk coverage acara profesional.","fa-volume-high"],
["SOUND","Subwoofer","Low frequency powerful untuk event dan music.","fa-circle"],
["LIGHTING","Moving Head","Dynamic beam dan efek panggung yang atraktif.","fa-lightbulb"],
["LIGHTING","Par LED","Ambient dan stage wash dengan kontrol fleksibel.","fa-lightbulb"],
["STAGE","Stage Equipment","Perlengkapan panggung untuk berbagai konsep venue.","fa-mountain-sun"],
["LED","LED Screen","Visual display untuk panggung, corporate dan konser.","fa-tv"],
["AUDIO","Wireless Microphone","Microphone wireless untuk MC, presenter dan performer.","fa-microphone"],
["AUDIO","Audio Mixer","Kontrol audio untuk setup produksi yang fleksibel.","fa-sliders"]
];
function wa(msg){return WA+"?text="+encodeURIComponent(msg)}
function renderServices(){serviceList.innerHTML=services.map(s=>`<article class="card reveal"><div class="service-icon"><i class="fa-solid ${s[0]}"></i></div><h3>${s[1]}</h3><p>${s[2]}</p><a class="mini-btn" href="${wa("Halo Moonlight Event Equipment, saya ingin tanya harga "+s[1])}" target="_blank">Tanya Harga →</a></article>`).join("")}
function renderEquipment(filter="ALL"){equipmentList.innerHTML=equipment.filter(e=>filter==="ALL"||e[0]===filter).map(e=>`<article class="card reveal"><div class="equip-img"><i class="fa-solid ${e[3]}"></i></div><span class="tag">${e[0]}</span><h3>${e[1]}</h3><p>${e[2]}</p><div class="price">Status: <b style="color:#dce1ff">Tersedia</b></div><a class="mini-btn" href="${wa("Halo Moonlight Event Equipment, saya ingin pesan "+e[1])}" target="_blank">Pesan via WhatsApp →</a></article>`).join(""); observe()}
function placeholder(title){return "data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="#151a25"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#737d96" font-family="Arial" font-size="28">${title}</text></svg>`)}
function renderDemo(){portfolioList.innerHTML=["Wedding Production","Concert Support","Corporate Event"].map((x,i)=>`<div class="portfolio-item"><img src="${placeholder(x)}" alt="${x}"><div class="portfolio-overlay"><b>${x}</b></div></div>`).join("");articleList.innerHTML=["Tips Memilih Sound System untuk Event","Checklist Equipment Sebelum Acara","Cara Membuat Lighting Panggung Lebih Dramatis"].map((x,i)=>`<article class="card"><div class="equip-img"><i class="fa-regular fa-newspaper"></i></div><span class="article-date">2026 • EVENT PRODUCTION</span><h3>${x}</h3><p>Panduan singkat untuk membantu Anda menyiapkan kebutuhan event production.</p><a class="mini-btn" href="#">Baca Selengkapnya →</a></article>`).join("");galleryList.innerHTML=[1,2,3,4,5,6].map(i=>`<img src="${placeholder("Moonlight Gallery "+i)}" alt="Moonlight Event Gallery">`).join("")}
function observe(){const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.08});document.querySelectorAll(".reveal").forEach(x=>io.observe(x))}
window.addEventListener("load",()=>{setTimeout(()=>preloader.style.opacity="0",350);setTimeout(()=>preloader.remove(),1050);renderServices();renderEquipment();renderDemo();observe();document.querySelectorAll("[data-count]").forEach(el=>{let n=+el.dataset.count;let start=0;let t=setInterval(()=>{start+=Math.ceil(n/30);el.textContent=Math.min(start,n);if(start>=n)clearInterval(t)},35)})});
window.addEventListener("scroll",()=>navbar.classList.toggle("scrolled",scrollY>30));
document.querySelector(".menu-toggle").onclick=()=>{document.querySelector("nav").style.display=document.querySelector("nav").style.display==="flex"?"none":"flex";document.querySelector("nav").style.position="absolute";document.querySelector("nav").style.top="78px";document.querySelector("nav").style.left="0";document.querySelector("nav").style.right="0";document.querySelector("nav").style.padding="20px";document.querySelector("nav").style.background="#07090d";document.querySelector("nav").style.flexDirection="column"};
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.querySelector("nav").style.display="none");
document.querySelectorAll("#equipmentFilters button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#equipmentFilters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderEquipment(b.dataset.filter)});
document.addEventListener("click",e=>{if(e.target.closest(".portfolio-item img,.masonry img")){lightbox.classList.add("show");lightbox.querySelector("img").src=e.target.src}});
lightbox.onclick=e=>{if(e.target===lightbox||e.target.tagName==="BUTTON")lightbox.classList.remove("show")};