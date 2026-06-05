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

function switchView(id) {
    const cur = document.querySelector('.view.active'); const tar = document.getElementById(id);
    if(cur) { gsap.to(cur, { opacity: 0, y: 15, duration: 0.3, onComplete: () => { cur.classList.remove('active'); tar.classList.add('active'); gsap.fromTo(tar, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5 }); }}); }
    else { tar.classList.add('active'); gsap.to(tar, {opacity: 1}); }
    document.getElementById('investigator-card').style.display = (id === 'view-home') ? 'flex' : 'none';
    if(id === 'view-diagnostic') updateSurvey();
}

function runBoot() {
    let p = 0; const bar = document.getElementById('boot-bar'); const pct = document.getElementById('percent');
    setTimeout(() => {
        const int = setInterval(() => {
            p += Math.random() * 2;
            if(p >= 100) { p = 100; clearInterval(int); gsap.to("#boot-screen", { opacity: 0, duration: 1, onComplete: () => { document.getElementById('boot-screen').classList.remove('active'); document.getElementById('consent-popup').classList.add('active'); gsap.to("#memo-panel", { opacity: 1, y: 0, duration: 1 }); }}); }
            bar.style.width = p + "%"; pct.innerText = Math.floor(p) + "%";
        }, 50);
    }, 1500);
}

function acceptConsent() { gsap.to("#consent-popup", { opacity: 0, duration: 0.5, onComplete: () => { document.getElementById('consent-popup').classList.remove('active'); document.getElementById('main-header').style.display = 'block'; document.getElementById('investigator-card').style.display = 'flex'; switchView('view-home'); }}); }

const Survey = { s: 1, i: 1, cfg: { 1: { p: "1E", t: 10, f: "1RA ENCUESTA" }, 2: { p: "2E", t: 5, f: "2DA ENCUESTA" } } };
function selectSurveyFolder(id) { Survey.s = id; Survey.i = 1; updateSurvey(); }
function changeSurvey(d) { Survey.i = (Survey.i % Survey.cfg[Survey.s].t) + 1; updateSurvey(); }
function updateSurvey() {
    const c = Survey.cfg[Survey.s]; document.getElementById('survey-display').src = `assets/img/ENCUESTAS/${c.f}/${c.p}${Survey.i}.png`;
    document.getElementById('counter-display').innerText = `${c.p}${Survey.i} / ${c.t}`;
}

const bibliography = [
    "Design Council. (2019). What is the framework for innovation? Double Diamond.",
    "Dunne, A., y Raby, F. (2013). Speculative everything.",
    "Jenkins, H. (2006). Convergence culture.",
    "Norman, D. (2013). The design of everyday things.",
    "Reynolds, S. (2012). Energy flash."
];
function setupRefs() { const ul = document.getElementById('ref-list-items'); bibliography.forEach(r => { const li = document.createElement('li'); li.innerText = r; ul.appendChild(li); }); }

window.onload = () => { initThree(); runBoot(); setupRefs(); setInterval(() => { document.getElementById('clock').innerText = new Date().toTimeString().split(' ')[0]; document.getElementById('date-display').innerText = new Date().toLocaleDateString(); }, 1000); };
