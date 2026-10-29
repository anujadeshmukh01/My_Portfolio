// Load skills
const skillIcons = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "JQuery": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Redux Toolkit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Object-Oriented Programming": "https://img.icons8.com/ios-filled/50/code.png",
  "Operating Systems": "https://img.icons8.com/ios-filled/50/windows-10.png",
  "Database Management Systems": "https://img.icons8.com/ios-filled/50/database.png",
  "Computer Networks": "https://img.icons8.com/ios-filled/50/network.png",
  "Machine Learning": "https://img.icons8.com/ios-filled/50/network.png",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Netlify": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  "Generative AI": "https://img.icons8.com/fluency/96/artificial-intelligence.png",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Servlet": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "JSP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "JSTL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "JDBC": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Spring": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Hibernate": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  "PL/SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Render": "https://cdn.simpleicons.org/render/46E3B7",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "Eclipse": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
  "Spring Tool Suite (STS)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
 "XAMPP": "https://cdn.simpleicons.org/xampp/FB7A00",
  "Jupyter Notebook": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
};

fetch("./data/skills.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("skills-container");
    container.innerHTML = "";

    Object.entries(data).forEach(([category, skills]) => {
      const section = document.createElement("div");
      section.className = "skills-category";
      section.dataset.category = category;
      section.innerHTML = `
        <h3 class="skills-category-title">${category}</h3>
        <div class="skills-grid"></div>
      `;

      const grid = section.querySelector(".skills-grid");

      skills.forEach(skill => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.innerHTML = `
          <div class="skill-card-content">
            <img src="${skillIcons[skill.name] || ''}" alt="${skill.name}">
            <h3>${skill.name}</h3>
            <span class="skill-level">${skill.level}</span>
          </div>
        `;
        grid.appendChild(card);
      });

      container.appendChild(section);
    });
  })
  .catch(() => {
    document.getElementById("skills-container").innerHTML = "<p>Could not load skills.</p>";
  });

// Skill tab filter
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("skill-tab")) {
    document.querySelectorAll(".skill-tab").forEach(tab => tab.classList.remove("active"));
    e.target.classList.add("active");

    const category = e.target.dataset.category;
    document.querySelectorAll(".skills-category").forEach(section => {
      section.style.display = (category === "all" || section.dataset.category === category) ? "block" : "none";
    });
  }
});

/// Load projects
fetch("./data/projects.json")
  .then(res => res.json())
  .then(data => {
    const c = document.getElementById("projects-container");
    c.innerHTML = "";
    data.forEach((p, index) => {
      const d = document.createElement("div");
      d.className = "project-card";

      const techTags = (p.tech || []).map(t => `<span class="tech-tag">${t}</span>`).join("");
      const featuresList = (p.features || []).map(f => `<li>${f}</li>`).join("");
      const archFlow = (p.architecture || [])
        .map(step => `<span class="arch-step">${step}</span>`)
        .join('<span class="arch-arrow">→</span>');
      const detailsId = `project-details-${index}`;

      d.innerHTML = `
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.name}" onerror="this.parentElement.style.background='#1e3a5f'; this.style.display='none'">
        </div>
        <div class="project-info">
          <h3>${p.name}</h3>
          <p>${p.description || ""}</p>
          <div class="tech-tags">${techTags}</div>
          <div class="project-links">
            <a href="${p.live}" target="_blank" rel="noopener noreferrer">Live ↗</a>
            <a href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <button class="details-toggle" onclick="toggleProjectDetails('${detailsId}', this)">Show details ▾</button>
          </div>
          <div class="project-details" id="${detailsId}" style="display:none;">
            ${p.problem ? `<h4>Problem Statement</h4><p>${p.problem}</p>` : ""}
            ${featuresList ? `<h4>Key Features</h4><ul class="feature-list">${featuresList}</ul>` : ""}
            ${archFlow ? `<h4>Architecture</h4><div class="arch-flow">${archFlow}</div>` : ""}
            ${p.decisions ? `<h4>Design Decisions</h4><p>${p.decisions}</p>` : ""}
            ${p.challenges ? `<h4>Technical Challenges</h4><p>${p.challenges}</p>` : ""}
            ${p.tradeoffs ? `<h4>Trade-offs</h4><p>${p.tradeoffs}</p>` : ""}
          </div>
        </div>
      `;
      c.appendChild(d);
    });
  })
  .catch(() => {
    document.getElementById("projects-container").innerHTML = "<p>Could not load projects.</p>";
  });

// Toggle project details open/closed
function toggleProjectDetails(id, btn) {
  const el = document.getElementById(id);
  const isHidden = el.style.display === "none";
  el.style.display = isHidden ? "block" : "none";
  btn.textContent = isHidden ? "Hide details ▴" : "Show details ▾";
}



// // ── EMAILJS ──
document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs === "undefined") {
    console.error("EmailJS SDK not loaded.");
    return;
  }

  emailjs.init({
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY
  });

  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Contact form not found.");
    return;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');

    if (btn) {
      btn.textContent = "Sending...";
      btn.disabled = true;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form
      );

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS status:", error.status);
      console.error("EmailJS response:", error.text);
      alert("Failed to send: " + (error.text || "Please check Console."));
    } finally {
      if (btn) {
        btn.textContent = "Send Message";
        btn.disabled = false;
      }
    }
  });
});