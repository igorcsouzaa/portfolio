const i18n = {
  "pt": {
    "title": "Desenvolvedor de Software",
    "tagline": "Construindo interfaces e sistemas que integram o mundo físico com o digital.",
    "status": "disponível para oportunidades",
    "nav-about": "Sobre",
    "nav-experience": "Experiência",
    "nav-skills": "Habilidades",
    "nav-education": "Formação",
    "nav-certs": "Certificados",
    "footer-built": "Projetado e desenvolvido por",
    "about": `<p>Sou desenvolvedor de software com experiência prática em ambientes profissionais e projetos acadêmicos de ponta a ponta. Tenho facilidade com desenvolvimento <strong>full-stack</strong>, resolução de problemas técnicos e construção de soluções que realmente funcionam.</p>
<p>Atualmente estagio na <strong class="highlight">MFSIM Simuladores de Vôo</strong>, onde atuo no desenvolvimento de software embarcado e ferramentas internas — trabalhando com C++, C#, Flutter e React em sistemas que atendem a <strong>37 instituições</strong>, incluindo a Embraer e a Força Aérea Brasileira.</p>
<p>Acredito que código bom é aquele que entrega valor real. Gosto de dominar os dois lados de uma funcionalidade e construir coisas que eu mesmo usaria.</p>`,
    "experience": [
      {
        period: "abr 2026 — atual",
        role: "Estágio · Desenvolvedor de Software",
        company: "MFSIM Simuladores de Vôo",
        desc: "Atuo no desenvolvimento de software embarcado e ferramentas internas, trabalhando com C++, C#, Flutter/Dart e React. Contribuo na construção de interfaces e sistemas que integram os simuladores físicos com as plataformas de software, atendendo uma base de 37 instituições e milhares de usuários, entre eles a Embraer e a Força Aérea Brasileira.",
        tags: ["C++","C#","Flutter","Dart","React","Software Embarcado"]
      }
    ],
    "skills": {
      "Linguagens": {
        icons: "javascript,typescript,python,dart,php,cs,cpp",
        names: ["JavaScript","TypeScript","Python","Dart","PHP","C#","C++"]
      },
      "Frameworks & Libs": {
        icons: "flutter,react,nodejs,flask,electron,dotnet,qt",
        names: ["Flutter","React","Node.js","Flask","Electron",".NET","Qt"]
      },
      "Banco de Dados": {
        icons: "postgres,mysql",
        names: ["PostgreSQL","MySQL"]
      },
      "Ferramentas & DevOps": {
        icons: "git,github,docker,vercel",
        names: ["Git","GitHub","Docker","Vercel"]
      }
    },
    "education": [
      {
        degree: "Desenvolvimento de Software Multiplataforma",
        school: "Fatec Jacareí",
        period: "2026 — 2029",
        desc: "Graduação tecnológica em andamento com foco em arquitetura de software, sistemas multiplataforma e boas práticas de desenvolvimento."
      },
      {
        degree: "Técnico em Desenvolvimento de Sistemas",
        school: "ETEC — São José dos Campos",
        period: "2023 — 2025",
        desc: "Formação técnica com base em lógica de programação, algoritmos, tecnologias web e banco de dados."
      }
    ],
    "certs": [
      {name:"Fundamentos de Rede",issuer:"CISCO"},
      {name:"Introdução à Cibersegurança",issuer:"CISCO"},
      {name:"TOEIC (96/100)",issuer:"ETS Global"}
    ],
    "languages": [
      {name:"Português",level:"Nativo"},
      {name:"Inglês",level:"Avançado — TOEIC 96/100"}
    ],
    "certs-label": "Certificados",
    "langs-label": "Idiomas"
  },
  "en": {
    "title": "Software Developer",
    "tagline": "Building interfaces and systems that bridge the physical and digital worlds.",
    "status": "open to opportunities",
    "nav-about": "About",
    "nav-experience": "Experience",
    "nav-skills": "Skills",
    "nav-education": "Education",
    "nav-certs": "Certificates",
    "footer-built": "Designed and built by",
    "about": `<p>I'm a software developer with hands-on experience in professional environments and end-to-end academic projects. I'm comfortable across the <strong>full stack</strong> — from crafting interfaces to integrating APIs and databases — with a focus on solutions that actually work.</p>
<p>I'm currently an intern at <strong class="highlight">MFSIM Flight Simulators</strong>, developing embedded software and internal tools using C++, C#, Flutter, and React. My work helps power systems used by <strong>37 institutions</strong>, including Embraer and the Brazilian Air Force.</p>
<p>I believe good code is code that delivers real value. I like owning both sides of a feature and building things I'd use myself.</p>`,
    "experience": [
      {
        period: "Apr 2026 — present",
        role: "Software Developer Intern",
        company: "MFSIM Flight Simulators",
        desc: "Developing embedded software and internal tools using C++, C#, Flutter/Dart, and React. Building interfaces and systems that integrate physical flight simulators with software platforms, serving 37 institutions and thousands of users — including Embraer and the Brazilian Air Force.",
        tags: ["C++","C#","Flutter","Dart","React","Embedded Software"]
      }
    ],
    "skills": {
      "Languages": {
        icons: "javascript,typescript,python,dart,php,cs,cpp",
        names: ["JavaScript","TypeScript","Python","Dart","PHP","C#","C++"]
      },
      "Frameworks & Libraries": {
        icons: "flutter,react,nodejs,flask,electron,dotnet,qt",
        names: ["Flutter","React","Node.js","Flask","Electron",".NET","Qt"]
      },
      "Databases": {
        icons: "postgres,mysql",
        names: ["PostgreSQL","MySQL"]
      },
      "Tools & DevOps": {
        icons: "git,github,docker,vercel",
        names: ["Git","GitHub","Docker","Vercel"]
      }
    },
    "education": [
      {
        degree: "Technologist in Multiplatform Software Development",
        school: "Fatec Jacareí",
        period: "2026 — 2029",
        desc: "Ongoing degree focused on software architecture, multiplatform systems, and modern development practices."
      },
      {
        degree: "Technical Degree in Systems Development",
        school: "ETEC — São José dos Campos",
        period: "2023 — 2025",
        desc: "Technical training in programming logic, algorithms, web technologies, and databases."
      }
    ],
    "certs": [
      {name:"Networking Essentials",issuer:"CISCO"},
      {name:"Introduction to Cybersecurity",issuer:"CISCO"},
      {name:"TOEIC (96/100)",issuer:"ETS Global"}
    ],
    "languages": [
      {name:"Portuguese",level:"Native"},
      {name:"English",level:"Advanced — TOEIC 96/100"}
    ],
    "certs-label": "Certificates",
    "langs-label": "Languages"
  }
};
 
let currentLang = "pt";
let currentTheme = "dark";
 
function renderContent(lang){
  const d = i18n[lang];
 
  // Static i18n keys
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(d[key]) el.textContent = d[key];
  });
 
  // About
  document.getElementById('about-text').innerHTML = d.about;
 
  // Experience
  const expEl = document.getElementById('experience-list');
  expEl.innerHTML = d.experience.map(e=>`
    <div class="exp-card">
      <div class="exp-header">
        <div>
          <div class="exp-role">${e.role}</div>
          <div class="exp-company">${e.company}</div>
        </div>
        <div class="exp-period">${e.period}</div>
      </div>
      <div class="exp-desc">${e.desc}</div>
      <div class="exp-tags">${e.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
 
  // Skills
  const skillsEl = document.getElementById('skills-content');
  const iconTheme = document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  skillsEl.innerHTML = Object.entries(d.skills).map(([group, data])=>`
    <div class="skills-group">
      <div class="skills-group-label">${group}</div>
      <div class="skillicons-row">
        <img src="https://skillicons.dev/icons?i=${data.icons}" alt="${data.names.join(', ')}" title="${data.names.join(' · ')}" class="skillicons-img" loading="lazy"/>
      </div>
    </div>
  `).join('');
 
  // Education
  const eduEl = document.getElementById('education-list');
  eduEl.innerHTML = d.education.map(e=>`
    <div class="edu-item">
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-period">${e.period}</div>
      <div class="edu-desc">${e.desc}</div>
    </div>
  `).join('');
 
  // Certs
  const certsEl = document.getElementById('certs-content');
  certsEl.innerHTML = `
    <p class="skills-group-label">${d['certs-label']}</p>
    <div class="cert-grid">
      ${d.certs.map(c=>`
        <div class="cert-card">
          <div class="cert-name">${c.name}</div>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
      `).join('')}
    </div>
    <p class="skills-group-label" style="margin-top:28px">${d['langs-label']}</p>
    <div class="lang-grid">
      ${d.languages.map(l=>`
        <div class="lang-card">
          <div class="lang-name">${l.name}</div>
          <div class="lang-level">${l.level}</div>
        </div>
      `).join('')}
    </div>
  `;
}
 
// Lang toggle
document.getElementById('langBtn').addEventListener('click',()=>{
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('langBtn').textContent = currentLang === 'pt' ? 'EN' : 'PT';
  renderContent(currentLang);
});
 
// Theme toggle
document.getElementById('themeBtn').addEventListener('click',()=>{
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', currentTheme);
  document.getElementById('themeIcon').textContent = currentTheme === 'dark' ? '☀' : '☾';
  document.getElementById('themeLabel').textContent = currentTheme === 'dark' ? 'light' : 'dark';
  renderContent(currentLang);
});
 
// Nav active state
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navItems.forEach(n=>n.classList.remove('active'));
      const active = document.querySelector(`.nav-item[href="#${e.target.id}"]`);
      if(active) active.classList.add('active');
    }
  });
},{threshold:0.3});
sections.forEach(s=>observer.observe(s));
 
// Custom cursor
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursor-dot');
let mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  dot.style.left=mx+'px'; dot.style.top=my+'px';
});
(function animCursor(){
  cx += (mx-cx)*0.12;
  cy += (my-cy)*0.12;
  cursor.style.left=cx+'px';
  cursor.style.top=cy+'px';
  requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a,button,.exp-card,.cert-card,.skill-badge').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursor.classList.add('hovering'));
  el.addEventListener('mouseleave',()=>cursor.classList.remove('hovering'));
});
 
// Init
renderContent('pt');