
// const daftarBuku = [
//     'Dasar Pemrograman',
//     'Struktur Data',
//     'Algoritma',
//     'Sistem Operasi',
//     'Jaringan Komputer',
//     'Pengantar Basis Data'
// ];
// const inputJudul = document.getElementById('inputJudul');
// const tombolCari = document.getElementById('tombolCari');
// const elemenHasil = document.getElementById('hasil');
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase() === target.toLowerCase()) {
//             return i; 
//         }
//     }
//     return -1;
// }

// tombolCari.addEventListener('click', () => {
//     const judulDicari = inputJudul.value.trim();

//     if (judulDicari === '') {
//         elemenHasil.innerHTML = 'Mohon masukkan judul buku yang ingin dicari.';
//         return;
//     }
//     const hasilPencarian = linearSearch(daftarBuku, judulDicari);
//     if (hasilPencarian !== -1) {
//         elemenHasil.innerHTML = `
//             <p style="color: green;"><b>Buku "${judulDicari}" ditemukan!</b></p>
//             <p>Berada pada indeks ke-<b>${hasilPencarian}</b> dari daftar.</p>
//             <p>Daftar buku: [${daftarBuku.map(b => `'${b}'`).join(', ')}]</p>
//         `;
//     } else {
//         elemenHasil.innerHTML = `
//             <p style="color: red;"><b>Maaf, buku "${judulDicari}" tidak ditemukan.</b></p>
//             <p>Silakan coba judul lain.</p>
//         `;
//     }

//     inputJudul.value = '';
// });

// function parseInput(str) {
//   return str.split(',')
//     .map(s => s.trim())
//     .filter(s => s.length > 0)
//     .map(s => Number(s))
//     .filter(n => !Number.isNaN(n));
// }
// function findTop3(arr) {
//   if (arr.length === 0) return [];
//   let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     const v = arr[i];
//     if (v > max1) {
//       max3 = max2;
//       max2 = max1;
//       max1 = v;
//     } else if (v > max2) {
//       max3 = max2;
//       max2 = v;
//     } else if (v > max3) {
//       max3 = v;
//     }
//   }
//   const result = [];
//   if (max1 !== -Infinity) result.push(max1);
//   if (max2 !== -Infinity) result.push(max2);
//   if (max3 !== -Infinity) result.push(max3);
//   return result;
// }
// function findTop3Unique(arr) {
//   let uniq = [];
//   for (let i = 0; i < arr.length; i++) {
//     const v = arr[i];
//     if (uniq.includes(v)) continue;
//     let placed = false;
//     for (let j = 0; j < uniq.length; j++) {
//       if (v > uniq[j]) {
//         uniq.splice(j, 0, v);
//         placed = true;
//         break;
//       }
//     }
//     if (!placed) uniq.push(v);
//     if (uniq.length > 3) uniq.pop();
//   }
//   return uniq;
// }
// document.getElementById('btnCompute').addEventListener('click', () => {
//   const arr = parseInput(document.getElementById('inputValues').value);
//   const top = findTop3(arr);
//   const out = document.getElementById('output');
//   if (top.length === 0) out.innerHTML = '<i>Tidak ada nilai valid</i>';
//   else {
//     out.innerHTML = '<div class="rank">Top 3 (boleh duplikat):</div>' +
//   '<ol>' + top.map(x => `<li>${x}</li>`).join('') + '</ol>';
//   }
// });

// document.getElementById('btnComputeUnique').addEventListener('click', () => {
//   const arr = parseInput(document.getElementById('inputValues').value);
//   const top = findTop3Unique(arr);
//   const out = document.getElementById('output');
//   if (top.length === 0) out.innerHTML = '<i>Tidak ada nilai valid</i>';
//   else {
//     out.innerHTML = '<div class="rank">Top 3 (nilai unik):</div>' +
//      '<ol>' + top.map(x => `<li>${x}</li>`).join('') + '</ol>';
//   }
// });

// const text =
// "Jika bunga ini bisa berbicara, mungkin setiap kelopaknya akan menceritakan betapa berartinya kamu dalam hidupku. Terima kasih sudah hadir dan membuat setiap hari terasa lebih indah. ❤️";

// let i = 0;

// function typingEffect(){

//     if(i < text.length){

//         document.getElementById("typing").innerHTML += text.charAt(i);

//         i++;

//         setTimeout(typingEffect,40);
//     }
// }

// setTimeout(typingEffect,5000);

// const stars = document.querySelector(".stars");

// for(let i=0;i<150;i++){

//     const star = document.createElement("div");

//     star.classList.add("star");

//     const size = Math.random()*3+1;

//     star.style.width=size+"px";
//     star.style.height=size+"px";

//     star.style.left=Math.random()*100+"vw";
//     star.style.top=Math.random()*100+"vh";

//     star.style.animationDuration=
//     (Math.random()*2+1)+"s";

//     stars.appendChild(star);
// }

// function createHeart(){

//     const heart = document.createElement("div");

//     heart.innerHTML="💖";

//     heart.style.position="absolute";
//     heart.style.left=Math.random()*100+"vw";
//     heart.style.top="100vh";

//     heart.style.fontSize=
//     (Math.random()*20+15)+"px";

//     heart.style.pointerEvents="none";

//     document.body.appendChild(heart);

//     let pos=100;

//     const interval=setInterval(()=>{

//         pos-=1;

//         heart.style.top=pos+"vh";

//         if(pos<-10){
//             clearInterval(interval);
//             heart.remove();
//         }

//     },30);
// }

// setInterval(createHeart,800);

// function meteor(){

//     const m=document.createElement("div");

//     m.classList.add("meteor");

//     m.style.top=
//     Math.random()*30+"vh";

//     document.body.appendChild(m);

//     setTimeout(()=>{
//         m.remove();
//     },2000);
// }

// setInterval(meteor,5000);

// Mengambil elemen dari DOM
// --- 4. LOGIKA KUNANG-KUNANG (Ganti Fungsi Ini di script.js Kamu) ---
// Memastikan script berjalan saat dokumen html siap sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    
    const garden = document.getElementById('flowerGarden');
    const particleContainer = document.getElementById('particleContainer');
    const bloomBtn = document.getElementById('bloomBtn');
    const cardWrapper = document.getElementById('cardWrapper');

    // --- 1. LOGIKA BUKA LEMBARAN KARTU (3D FLIP) ---
    cardWrapper.addEventListener('click', function(e) {
        // Mencegah kartu menutup kembali secara tidak sengaja saat tombol di klik
        if (e.target.closest('#bloomBtn')) return;
        
        this.classList.toggle('open');
    });

    // --- 2. ENGINE PEMBUATAN ELEMEN BUNGA ---
    function createFlower(leftPosition, scale, delay, zIndex) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${leftPosition}%`;
        flower.style.transform = `scale(${scale})`;
        flower.style.animationDelay = `${delay}s`;
        flower.style.zIndex = zIndex;
        flower.style.animationDuration = `${3 + Math.random() * 2}s`;

        const stem = document.createElement('div');
        stem.classList.add('stem');
        
        const leafL = document.createElement('div');
        leafL.classList.add('leaf');
        leafL.style.animationDelay = `${delay + 0.4}s`;
        
        const leafR = document.createElement('div');
        leafR.classList.add('leaf', 'right');
        leafR.style.animationDelay = `${delay + 0.6}s`;
        
        stem.appendChild(leafL);
        stem.appendChild(leafR);

        const head = document.createElement('div');
        head.classList.add('flower-head');
        head.style.animationDelay = `${delay + 0.7}s`;

        for (let i = 0; i < 8; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            head.appendChild(petal);
        }

        for (let i = 0; i < 8; i++) {
            const petalInner = document.createElement('div');
            petalInner.classList.add('petal', 'inner');
            petalInner.style.transform = `rotate(${i * 45 + 22.5}deg)`;
            head.appendChild(petalInner);
        }

        const core = document.createElement('div');
        core.classList.add('center-core');
        head.appendChild(core);

        flower.appendChild(stem);
        flower.appendChild(head);
        garden.appendChild(flower);
    }

    // --- 3. TAMAN AWAL (Dibuat Sedikit & Minimalis) ---
    function buildTamanAwal() {
        // Hanya memunculkan 3 bunga utama penyambut di awal agar terkesan bersih
        createFlower(20, 0.7, 0.2, 2);
        createFlower(50, 1.0, 0, 5);
        createFlower(80, 0.7, 0.4, 2);
    }

    // --- 4. ENGINE HUJAN KELOPAK ---
    function spawnFallingPetal() {
        const petal = document.createElement('div');
        petal.classList.add('falling-petal');
        
        const size = Math.random() * 10 + 5;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 100}vw`;
        
        const duration = Math.random() * 3 + 4;
        petal.style.animationDuration = `${duration}s`;
        
        particleContainer.appendChild(petal);
        setTimeout(() => petal.remove(), duration * 1000);
    }

    // --- 5. INTERAKSI POINTER JARI / MOUSE TRAIL SPARKLES ---
    function handlePointerMove(e) {
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0].clientY);
        
        if (!x || !y) return;

        const colors = ['#ff4d6d', '#ff758f', '#d4af37', '#fffb00'];
        
        for(let i = 0; i < 2; i++) {
            const spark = document.createElement('div');
            spark.classList.add('trail-sparkle');
            spark.style.left = `${x}px`;
            spark.style.top = `${y}px`;
            
            const size = Math.random() * 8 + 4;
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.background = colors[Math.floor(Math.random() * colors.length)];
            spark.style.borderRadius = Math.random() > 0.5 ? '50%' : '50% 0 50% 50%';
            
            particleContainer.appendChild(spark);
            setTimeout(() => spark.remove(), 800);
        }
    }

    // --- 6. LOGIKA TOMBOL (MEKARKAN BANYAK BUNGA MASAL) ---
    function triggerBloomBurst() {
        // Saat diklik, buat taman langsung rame secara acak (15 bunga baru)
        for (let i = 0; i < 15; i++) {
            const randomLeft = Math.random() * 92 + 4;
            const randomScale = 0.4 + Math.random() * 0.6;
            createFlower(randomLeft, randomScale, 0, 4);
        }
        
        // Ledakan partikel kelopak tambahan sesaat setelah diklik
        for (let i = 0; i < 15; i++) {
            setTimeout(spawnFallingPetal, Math.random() * 500);
        }
    }

    // Menjalankan semua fungsi utama kontroler
    buildTamanAwal();
    setInterval(spawnFallingPetal, 250);

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);
    bloomBtn.addEventListener('click', triggerBloomBurst);
});