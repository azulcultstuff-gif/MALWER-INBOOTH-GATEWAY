let scene, camera, renderer, particles;
function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(1800 * 3);
    for(let i=0; i<5400; i++) pos[i] = (Math.random()-0.5)*1800;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    particles = new THREE.Points(geo, new THREE.PointsMaterial({color: 0x00ff66, size: 1.2, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending}));
    scene.add(particles);
    camera.position.z = 800;
    function anim() { requestAnimationFrame(anim); particles.rotation.y += 0.0003; particles.rotation.x += 0.0001; renderer.render(scene, camera); }
    anim();
}

const TransData = {
    1: { t: "POST_IG_01: RUPTURA", x: "Fase 1: Ruptura estética mediante comunicado filtrado. El sistema busca anfitriones con capacidad cognitiva alta para recibir el mensaje." },
    2: { t: "WEB_ACTO_I: ARQUEOLOGÍA", x: "Aplicativo: Herramienta de detección para rastrear señales del Agente R-BTU desde el satélite M-WER captado por el navegador." },
    3: { t: "POST_IG_02: EVIDENCIA", x: "Contenido: Exposición visual de la anestesia comercial humana. Presentación de Malwer como virus despertador del sistema." },
    4: { t: "WEB_ACTO_II: INFILTRACIÓN", x: "Aplicativo: Transición biológica. El usuario encripta su rastro facial para entrar a la colonia alienígena sin ser detectado." },
    5: { t: "STORY_IG_01: VALIDACIÓN", x: "Interacción: El usuario declara su desaparición del sistema humano publicando su insignia digital generada por la app en redes." },
    6: { t: "WEB_ACTO_III: FRECUENCIA", x: "Aplicativo: Revelación sonora. La música electrónica es el lenguaje de la inteligencia superior. El evento es el epicentro de la infección." },
    7: { t: "POST_IG_03: ASIMILACIÓN", x: "Crisis: El satélite ha caído. IA Malwer toma control total de las comunicaciones. Los líderes están en la superficie." },
    8: { t: "WEB_ACTO_IV: COMANDO", x: "Aplicativo: Interfaz pura de mando. Selección de comandante DJ y frecuencias de asalto táctico para el evento físico." },
    9: { t: "STORY_IG_02: LEALTAD", x: "Fase Final: Declaración pública de bando y comandante elegido. El usuario está listo para el despertar físico en el 666." }
};
function showNarrative(id) { document.getElementById('node-id-title').innerText = TransData[id].t; document.getElementById('narrative-content').innerText = TransData[id].x; }

const LibData = [
    { f: "IMAGEN_1_IN-BOOTH (MAPA MENTAL).png", t: "MAPA MENTAL" },
    { f: "IMAGEN_2_IN-BOOTH (Propuesta metodológica).png", t: "METODOLOGÍA" },
    { f: "IMAGEN_3_IN-BOOTH (Matriz Dimensiones, factores y Requerimientos de Diseño).png", t: "MATRIZ DISEÑO" },
    { f: "IMAGEN_4_IN-BOOTH (Caracterización de Usuario).png", t: "USUARIOS" },
    { f: "IMAGEN_5_IN-BOOTH (Desarrollo, proceso y validación).png", t: "PROCESO" },
    { f: "IMAGEN_6_IN-BOOTH (ROADMAP).png", t: "ROADMAP" },
    { f: "IMAGEN_7_IN-BOOTH (Conclusiones).png", t: "CONCLUSIONES" },
    { f: "IMAGEN_8_IN-BOOTH (Matriz de excavación).png", t: "MATRIZ EXCAVACIÓN" }
];
function initLibrary() {
    const c = document.getElementById('library-container'); c.innerHTML = "";
    LibData.forEach(it => {
        const d = document.createElement('div'); d.className = 'library-item fui-box'; d.innerHTML = `<span>${it.t}</span>`;
        d.onclick = () => openMedia('img', `Transmedia_proyecto/${it.f}`, it.t); c.appendChild(d);
    });
}

const transPdfs = ["2TESTEO - ALEXANDRA TORRES.pdf", "2TESTEO - DIEGO URIBE.pdf", "2TESTEO - GABRIELA MOLINA.pdf", "2TESTEO - JUAN BELTRÁN.pdf", "2TESTEO - JUAN CAMILO RODRIGUEZ.pdf", "2TESTEO - LAURA GAMBOA.pdf", "2TESTEO - LINA PINZÓN.pdf", "2TESTEO - NICOLAS FRANCO.pdf", "2TESTEO - SEBASTIÁN DÍAZ.pdf"];
function setupSessions() {
    const list = document.getElementById('trans-list-pdfs'); list.innerHTML = "";
    transPdfs.forEach(p => {
        const b = document.createElement('button'); b.innerText = p.split(' - ')[1].replace('.pdf','');
        b.onclick = () => openMedia('pdf', p); list.appendChild(b);
    });
}

const bibliography = [
    "Cámara de Comercio de Bogotá. (2024). Ecosistema de Industrias Creativas y Culturales: Balance de la música y mercados especializados en Bogotá. CCB.",
    "Design Council. (2019). What is the framework for innovation? Design Council's evolved Double Diamond. Design Council UK.",
    "Dunne, A., y Raby, F. (2013). Speculative everything: Designing fiction and social dreaming. MIT Press.",
    "Jenkins, H. (2006). Convergence culture: Where old and new media collide. New York University Press.",
    "Jenkins, H. (2008). Convergence culture: La cultura de la convergencia de los medios de comunicación (Trad. P. Hermida Lazcano). Paidós.",
    "Jensen, J. F. (1998). Interactivity: Tracking a new concept in media and communication studies. Nordicom Review, 19(1), 185-204.",
    "Krippendorff, K. (2006). The semantic turn: A new foundation for design. CRC Press.",
    "Moles, A. (1976). Teoría de la información y percepción estética. Júcar.",
    "Norman, D. (2013). The design of everyday things (Revised and expanded ed.). Basic Books.",
    "Reynolds, S. (2012). Energy flash: A journey through rave music and dance culture (Revised ed.). Picador.",
    "Ryan, R. M., y Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68–78.",
    "Schön, D. (1983). The reflective practitioner: How professionals think in action. Basic Books.",
    "Secretaría de Cultura, Recreación y Deporte. (2024). Informe de caracterización y consumo de las industrias culturales y los circuitos independientes en Bogotá. SCRD / Alcaldía Mayor de Bogotá.",
    "Suchman, L. (1987). Plans and situated actions: The problem of human-machine communication. Cambridge University Press."
];
function setupRefs() { const ul = document.getElementById('ref-list-items'); ul.innerHTML = ""; bibliography.forEach(r => { const li = document.createElement('li'); li.innerText = r; ul.appendChild(li); }); }

let scale = 1, pX = 0, pY = 0, isD = false, sX, sY;
function openMedia(type, file, title = "SISTEMA") {
    const m = document.getElementById('media-modal'); const vp = document.getElementById('media-viewport');
    document.getElementById('media-title').innerText = title; m.style.display = 'flex';
    document.getElementById('img-zoom-tools').style.display = type === 'img' ? 'flex' : 'none';
    if(type === 'img') {
        vp.innerHTML = `<img src="assets/img/${file}" id="v-img" style="transform: translate(0,0) scale(1)">`;
        const im = document.getElementById('v-img'); im.onmousedown = (e) => { isD = true; sX = e.clientX - pX; sY = e.clientY - pY; };
        window.onmouseup = () => isD = false; window.onmousemove = (e) => { if(!isD) return; pX = e.clientX - sX; pY = e.clientY - sY; im.style.transform = `translate(${pX}px, ${pY}px) scale(${scale})`; };
    } else if(type === 'pdf') { vp.innerHTML = `<iframe src="assets/docs/${file}"></iframe>`; }
    else if(type === 'vid') { vp.innerHTML = `<video src="assets/vid/${file}" controls autoplay></video>`; }
}
function mediaZoom(f) { scale *= f; document.getElementById('v-img').style.transform = `translate(${pX}px, ${pY}px) scale(${scale})`; }
function closeMedia() { document.getElementById('media-modal').style.display = 'none'; document.getElementById('media-viewport').innerHTML = ''; scale = 1; pX = 0; pY = 0; }

let sIdx = 1, bizIdx = 1, testIdx = 1, protoIdx = 1;
function changeSlide(type, d) {
    if(type==='ppt') { sIdx += d; if(sIdx>10) sIdx=1; if(sIdx<1) sIdx=10; document.getElementById('ppt-img').src=`assets/img/ptt_inicio/${sIdx}.jpg`; document.getElementById('ppt-num').innerText=`${String(sIdx).padStart(2,'0')} / 10`; }
    if(type==='biz') { bizIdx += d; if(bizIdx>7) bizIdx=1; if(bizIdx<1) bizIdx=7; document.getElementById('biz-img').src=`assets/img/modelo_de_negocio/${bizIdx}.png`; document.getElementById('biz-num').innerText=`${String(bizIdx).padStart(2,'0')} / 07`; }
    if(type==='test') { testIdx += d; if(testIdx>6) testIdx=1; if(testIdx<1) testIdx=6; document.getElementById('test2-img').src=`assets/img/protocolo_testeo_2/${testIdx}.jpg`; document.getElementById('test2-num').innerText=`${String(testIdx).padStart(2,'0')} / 06`; }
    if(type==='proto') { protoIdx += d; if(protoIdx>2) protoIdx=1; if(protoIdx<1) protoIdx=2; document.getElementById('proto1-img').src=`assets/img/prototipo_1/${protoIdx}.jpg`; document.getElementById('proto1-num').innerText=`${String(protoIdx).padStart(2,'0')} / 02`; }
}

function runBoot() {
    let p = 0; const bar = document.getElementById('boot-bar'); const pct = document.getElementById('percent');
    setTimeout(() => {
        const int = setInterval(() => {
            p += Math.random() * 1.5;
            if(p >= 100) { p = 100; clearInterval(int); gsap.to("#boot-screen", { opacity: 0, duration: 1, onComplete: () => { document.getElementById('boot-screen').classList.remove('active'); document.getElementById('consent-popup').classList.add('active'); gsap.to("#memo-panel", { opacity: 1, y: 0, duration: 1 }); }}); }
            bar.style.width = p + "%"; pct.innerText = Math.floor(p) + "%";
        }, 50);
    }, 2000);
}

function acceptConsent() { gsap.to("#consent-popup", { opacity: 0, duration: 0.5, onComplete: () => { document.getElementById('consent-popup').classList.remove('active'); document.getElementById('main-header').style.display = 'block'; document.getElementById('investigator-card').style.display = 'flex'; switchView('view-home'); }}); }

function switchView(id) {
    const cur = document.querySelector('.view.active'); const tar = document.getElementById(id);
    if(cur) { gsap.to(cur, { opacity: 0, y: 15, duration: 0.3, onComplete: () => { cur.classList.remove('active'); tar.classList.add('active'); gsap.fromTo(tar, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5 }); }}); }
    else { tar.classList.add('active'); gsap.to(tar, {opacity: 1}); }
    document.getElementById('investigator-card').style.display = (id === 'view-home') ? 'flex' : 'none';
    if(id === 'view-diagnostic') updateSurvey();
}

const Survey = { s: 1, i: 1, cfg: { 1: { p: "1E", t: 10, f: "1RA ENCUESTA" }, 2: { p: "2E", t: 5, f: "2DA ENCUESTA" } } };
function selectSurveyFolder(id) { Survey.s = id; Survey.i = 1; updateSurvey(); }
function changeSurvey(d) { Survey.i = (Survey.i % Survey.cfg[Survey.s].t) + 1; updateSurvey(); }
function updateSurvey() {
    const c = Survey.cfg[Survey.s]; document.getElementById('survey-display').src = `assets/img/ENCUESTAS/${c.f}/${c.p}${Survey.i}.png`;
    document.getElementById('counter-display').innerText = `${c.p}${Survey.i} / ${c.t}`;
}

window.onload = () => { initThree(); runBoot(); initLibrary(); setupSessions(); setupRefs(); setInterval(() => { document.getElementById('clock').innerText = new Date().toTimeString().split(' ')[0]; document.getElementById('date-display').innerText = new Date().toLocaleDateString(); }, 1000); };