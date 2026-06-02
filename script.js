/* ==========================================================================
   1. MAIN MATRIX DIGITAL RAIN LOGIC
   ========================================================================== */
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

let columns;
let rainDrops = [];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+=-{}[]|;:',.<>?/";

function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / 20);
    rainDrops = Array(columns).fill(1);
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 15, 13, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dynamic color shifting based on active system class rules
    const isLight = document.body.classList.contains('light-cyber-theme');
    ctx.fillStyle = isLight ? 'rgba(0, 136, 51, 0.35)' : '#00ff66';
    ctx.font = '15px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * 20, rainDrops[i] * 20);

        if (rainDrops[i] * 20 > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

window.addEventListener('resize', initMatrix);
initMatrix();
setInterval(drawMatrix, 30);

/* ==========================================================================
   2. SITE PRELOADER & INITIALIZATION RUNTIMES
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen gracefully after simulated processing time
    setTimeout(() => {
        const preloader = document.getElementById('loading-screen');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }
        // Initialize dynamic effects
        startTypingHero();
        animateSkillBars();
        initializeCounters();
        loadLocalLogs();
    }, 1500);
});

/* ==========================================================================
   3. HERO AUTOMATED INTERACTIVE TYPING STRINGS
   ========================================================================== */
const typingElement = document.getElementById('typing');
const titles = [
    "System Diagnostic: Online",
    "Md. Ramzan Miah",
    "Cyber Security Specialist",
    "Full-Stack Developer"
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function startTypingHero() {
    if (!typingElement) return;

    const currentString = titles[titleIndex];

    if (isDeleting) {
        typingElement.innerHTML = currentString.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.innerHTML = currentString.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentString.length) {
        typingSpeed = 1800; // Pause display time
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 400; // Inter-title gap delay
    }

    setTimeout(startTypingHero, typingSpeed);
}

/* ==========================================================================
   4. CONTROL HANDLERS (THEME SWITCHER & CORE AUDIO)
   ========================================================================== */
let audioContext;
let oscillator;
let isAudioPlaying = false;

function toggleMusic() {
    const btn = document.getElementById('musicToggleBtn');
    if (!isAudioPlaying) {
        // Simulated structural synthesis sound node for sci-fi atmosphere
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(60, audioContext.currentTime); // Deep hum sound
            gainNode.gain.setValueAtTime(0.02, audioContext.currentTime); // Low safe volume
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.start();
            
            isAudioPlaying = true;
            btn.innerHTML = `<i class="fas fa-volume-up"></i> Audio ON`;
        } catch (e) {
            console.log("Audio contexts blocked by vendor secure initialization guidelines.");
        }
    } else {
        if (oscillator) oscillator.stop();
        isAudioPlaying = false;
        btn.innerHTML = `<i class="fas fa-volume-mute"></i> Audio OFF`;
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-cyber-theme');
}

/* ==========================================================================
   5. REALTIME CLOCK MODULE
   ========================================================================== */
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;
    const now = new Date();
    clockElement.innerHTML = `<i class="fas fa-clock"></i> Local Node Time: ${now.toTimeString().split(' ')[0]}`;
}
setInterval(updateClock, 1000);

/* ==========================================================================
   6. AUTO-INCREMENT STATISTICAL GRAPH METRICS
   ========================================================================== */
function initializeCounters() {
    const counters = document.querySelectorAll('.count-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const speed = target / 50; 
        
        const updateCount = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + speed);
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

/* ==========================================================================
   7. TECH STACK LEVEL FILL ANIMATION
   ========================================================================== */
function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-bar .fill');
    fills.forEach(fill => {
        const targetWidth = fill.getAttribute('data-width');
        fill.style.width = targetWidth;
    });
}

/* ==========================================================================
   8. CORE COMMAND LINE SHELL SIMULATION (TERMINAL)
   ========================================================================== */
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');

if (terminalInput) {
    terminalInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            processCommand(command);
            this.value = '';
        }
    });
}

function processCommand(cmd) {
    if (!terminalOutput) return;

    let outputHtml = `<p><span class="prompt">ramzan-miah$</span> ${cmd}</p>`;

    switch (cmd) {
        case 'help':
            outputHtml += `<p>Available Commands:<br>
            - <span class="highlight">about</span>     : Show system operational identity portfolio core profile details.<br>
            - <span class="highlight">skills</span>    : Display cataloged skill proficiency arrays.<br>
            - <span class="highlight">projects</span>  : Show verified structural application repositories.<br>
            - <span class="highlight">whoami</span>    : Query user node information data parameters.<br>
            - <span class="highlight">contact</span>   : Display central secure node communication vectors.<br>
            - <span class="highlight">clear</span>     : Wipe core command history context buffers.</p>`;
            break;
        case 'about':
            outputHtml += `<p>Identity: Md. Ramzan Miah<br>Role: Cyber Security Specialist & Network Architect Candidate.<br>Status: Running full learning optimization diagnostics algorithms.</p>`;
            break;
        case 'skills':
            outputHtml += `<p>Core Frameworks Extracted:<br>- VLSM & Variable Subnetting Configuration Architecture (90%)<br>- Unix System Operations Management (85%)<br>- Native Interface Assembly: JavaScript / Python Lab Architectures (80%)</p>`;
            break;
        case 'projects':
            outputHtml += `<p>Active Repositories:<br>1. Network Subnetting Tool (JS)<br>2. Automated Ubuntu Setup Script (Python/Bash Core)</p>`;
            break;
        case 'whoami':
            outputHtml += `<p>Node Terminal Authentication Profile: guest@ramzan-miah.net. Remote Address: Virtual Socket Stream Environment.</p>`;
            break;
        case 'contact':
            outputHtml += `<p>Transmission Gateways:<br>Email: mdramzanma@gmail.com<br>LinkedIn: /in/md-ramzan-miah-s17</p>`;
            break;
        case 'clear':
            terminalOutput.innerHTML = '';
            return;
        case '':
            outputHtml = `<p><span class="prompt">ramzan-miah$</span></p>`;
            break;
        default:
            outputHtml += `<p class="error-text">Command error syntax rejection: Unknown primitive request instruction structure '${cmd}'. Type 'help' for diagnostics.</p>`;
    }

    terminalOutput.innerHTML += outputHtml;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

/* ==========================================================================
   9. DIAGNOSTIC INTERFACE SYSTEM Threat Assessment (SCANNER)
   ========================================================================== */
function startSecurityScan() {
    const overlay = document.getElementById('scanOverlay');
    const status = document.getElementById('scanStatus');
    if (!overlay || !status) return;

    overlay.style.display = 'block';
    
    const processes = [
        "Analyzing browser local memory variables...",
        "Evaluating TLS configuration validation records...",
        "Inspecting security ports against Cross-Site Attack Vectors...",
        "Finalizing diagnostic report assessment data logs..."
    ];

    let checkPhase = 0;
    const interval = setInterval(() => {
        if (checkPhase < processes.length) {
            status.innerText = processes[checkPhase];
            checkPhase++;
        } else {
            clearInterval(interval);
            overlay.style.display = 'none';
            // Randomize score parameters to make it dynamic
            document.getElementById('sec-score').innerText = `${Math.floor(Math.random() * 5) + 95}%`;
            alert("Threat Diagnostics completed. 0 runtime malware vectors parsed on structural endpoints.");
        }
    }, 1000);
}

/* ==========================================================================
   10. FILTERS - PACKET DIRECTORY FILTRATION (PROJECTS)
   ========================================================================== */
function filterProjects(category) {
    const items = document.querySelectorAll('.project-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

/* ==========================================================================
   11. LIGHTBOX SYSTEM DESIGN (MEDIA VIEWER)
   ========================================================================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(src, caption) {
    if (!lightbox || !lightboxImg || !lightboxCaption) return;
    lightboxImg.src = src;
    lightboxCaption.innerText = caption;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    if (lightbox) lightbox.style.display = 'none';
}

/* ==========================================================================
   12. CENTRAL LAB LOGGING LEDGER MEMORY (BLOGS)
   ========================================================================== */
function addBlog() {
    const titleInp = document.getElementById('title');
    const contentInp = document.getElementById('content');

    if (!titleInp || !contentInp || !titleInp.value.trim() || !contentInp.value.trim()) {
        alert("Input values rejected. Empty data fields cannot be committed to system memory.");
        return;
    }

    const logEntry = {
        title: titleInp.value.trim(),
        content: contentInp.value.trim(),
        timestamp: new Date().toLocaleString()
    };

    let logs = JSON.parse(localStorage.getItem('cyber_logs')) || [];
    logs.unshift(logEntry);
    localStorage.setItem('cyber_logs', JSON.stringify(logs));

    titleInp.value = '';
    contentInp.value = '';
    loadLocalLogs();
}

function loadLocalLogs() {
    const logList = document.getElementById('blogList');
    if (!logList) return;

    let logs = JSON.parse(localStorage.getItem('cyber_logs')) || [];
    
    if (logs.length === 0) {
        logList.innerHTML = `<p style="font-size: 0.8rem; opacity: 0.5; text-align: center;">No local memory technical data records found in runtime index storage blocks.</p>`;
        return;
    }

    logList.innerHTML = logs.map(log => `
        <div class="log-item">
            <h4>${log.title} <span style="font-size:0.65rem; opacity:0.5; float:right;">${log.timestamp}</span></h4>
            <p>${log.content}</p>
        </div>
    `).join('');
}

/* ==========================================================================
   13. PORTAL PACKET DISPATCHER ENGINE (CONTACT ENCRYPTION)
   ========================================================================== */
function handleContactSubmit(e) {
    e.preventDefault();
    const feedback = document.getElementById('formFeedback');
    if (!feedback) return;

    feedback.style.color = "var(--primary-color)";
    feedback.innerText = "Transmitting data packets over encrypted pipeline links...";

    setTimeout(() => {
        feedback.innerText = "Transmission verified. Message dispatched successfully to Md. Ramzan Miah.";
        document.getElementById('contactForm').reset();
    }, 1500);
}

/* ==========================================================================
   14. SYSTEM NAVIGATION UTILITY (BACK TO TOP / LINK ACTIVE STATE TRACKER)
   ========================================================================== */
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    // Show/hide Back To Top button
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        if (backToTopBtn) backToTopBtn.style.display = "flex";
    } else {
        if (backToTopBtn) backToTopBtn.style.display = "none";
    }

    // Dynamic Navigation Highlighting during structural scroll events
    const sections = document.querySelectorAll('header, section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height && id) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}