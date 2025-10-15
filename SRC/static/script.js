const translations = {
  en: {
    pageTitle: "Igor Souza | Portfolio",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
    greeting: "Hello, I'm <span>Igor Souza</span>",
    role: "Full-Stack Developer and IT Technician",
    viewProjects: "View Projects",
    aboutTitle: "About Me",
    aboutCardTitle1: "Education",
    aboutCardText1: "Technical student in Systems Development at ETEC de São José dos Campos.",
    aboutCardTitle2: "Experience",
    aboutCardText2: "Experience with Python, Java, PHP, C#, HTML, CSS, MySQL, and digital design.",
    aboutCardTitle3: "Passion",
    aboutCardText3: "Passionate about technology, always seeking to learn and create solutions.",
    skillsTitle: "Skills",
    skillPython: "Python",
    skillJava: "Java",
    skillPHP: "PHP",
    skillCsharp: "C#",
    skillHTML: "HTML",
    skillCSS: "CSS",
    skillCanva: "Canva",
    skillFlask: "Flask",
    skillFigma: "Figma",
    skillJavaScript: "JavaScript",
    skillGit: "Git",
    skillMySQL: "MySQL",
    skillCybersecurity: "Cybersecurity",
    skillLogic: "Programming Logic",
    skillDesign: "Digital Design",
    projectsTitle: "Principal Projects",
    project1Title: "RainTrack",
    project1Desc: "Weather system with Flask and IoT sensors.",
    project2Title: "Excel Automation",
    project2Desc: "Automation tool for spreadsheet processing.",
    certificationsTitle: "Certifications",
    cert1Title: "Introduction to Networks",
    cert1Org: "Cisco (2025)",
    cert1Desc: "Fundamentals of computer networks, TCP/IP protocols, device configuration, and network security concepts.",
    cert2Title: "Cybersecurity",
    cert2Org: "Cisco (2025)",
    cert2Desc: "Information security principles, protection against cyber threats, and digital security best practices.",
    socialTitle: "Social Media",
    socialText: "Follow me on social media for updates and more content!",
    socialWhatsApp: "WhatsApp",
    socialLinkedIn: "LinkedIn",
    socialGitHub: "GitHub",
    footerText: "© 2025 Igor Souza. All rights reserved."
  },
  pt: {
    pageTitle: "Igor Souza | Portfólio",
    home: "Início",
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    certifications: "Certificações",
    contact: "Contato",
    greeting: "Olá, sou o <span>Igor Souza</span>",
    role: "Desenvolvedor Full-Stack e Técnico em Informática",
    viewProjects: "Ver Projetos",
    aboutTitle: "Sobre Mim",
    aboutCardTitle1: "Formação",
    aboutCardText1: "Estudante técnico em Desenvolvimento de Sistemas pela ETEC de São José dos Campos.",
    aboutCardTitle2: "Experiência",
    aboutCardText2: "Experiência com Python, Java, PHP, C#, HTML, CSS, MySQL e design digital.",
    aboutCardTitle3: "Paixão",
    aboutCardText3: "Apaixonado por tecnologia, busco sempre aprender e criar soluções.",
    skillsTitle: "Habilidades",
    skillPython: "Python",
    skillJava: "Java",
    skillPHP: "PHP",
    skillCsharp: "C#",
    skillHTML: "HTML",
    skillCSS: "CSS",
    skillCanva: "Canva",
    skillFlask: "Flask",
    skillFigma: "Figma",
    skillJavaScript: "JavaScript",
    skillGit: "Git",
    skillMySQL: "MySQL",
    skillCybersecurity: "Cibersegurança",
    skillLogic: "Lógica de Programação",
    skillDesign: "Design Digital",
    projectsTitle: "Projetos Principais",
    project1Title: "RainTrack",
    project1Desc: "Sistema meteorológico com Flask e sensores IoT.",
    project2Title: "Automação de Excel",
    project2Desc: "Ferramenta de automação para processamento de planilhas.",
    certificationsTitle: "Certificações",
    cert1Title: "Introdução a Redes",
    cert1Org: "Cisco (2025)",
    cert1Desc: "Fundamentos de redes de computadores, protocolos TCP/IP, configuração de dispositivos e conceitos de segurança de rede.",
    cert2Title: "Cibersegurança",
    cert2Org: "Cisco (2025)",
    cert2Desc: "Princípios de segurança da informação, proteção contra ameaças cibernéticas e melhores práticas de segurança digital.",
    socialTitle: "Redes Sociais",
    socialText: "Siga-me nas redes sociais para atualizações e mais conteúdo!",
    socialWhatsApp: "WhatsApp",
    socialLinkedIn: "LinkedIn",
    socialGitHub: "GitHub",
    footerText: "© 2025 Igor Souza. Todos os direitos reservados."
  }
};

const langBtn = document.getElementById("lang-btn");
let currentLang = "pt";

// Função para aplicar as traduções
function applyTranslations() {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (key === "greeting") {
      el.innerHTML = translations[currentLang][key];
    } else if (key === "pageTitle") {
      document.title = translations[currentLang][key];
    } else {
      el.textContent = translations[currentLang][key];
    }
  });

  // Atualizar placeholders
  document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
    const key = el.getAttribute("data-lang-placeholder");
    el.placeholder = translations[currentLang][key];
  });
}

// Aplica as traduções iniciais ao carregar a página
document.addEventListener("DOMContentLoaded", applyTranslations);

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  langBtn.textContent = currentLang === "pt" ? "EN" : "PT";
  applyTranslations(); // Chama a função para aplicar as traduções após a mudança de idioma
});

const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");


  // Event listener para o menu hambúrguer
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Fechar o menu ao clicar em um item de navegação (para mobile)
  document.querySelectorAll(".nav-menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });


