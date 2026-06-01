/* ==========================================================================
   1. MATRIX RAIN BACKGROUND EFFECT (ক্যানভাস অ্যানিমেশন)
   ========================================================================== */
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

// ক্যানভাসের সাইজ উইন্ডোর সমান করা
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// ম্যাট্রিক্স ক্যারেক্টার সেট (Binary & Hexadecimal for Cyber Theme)
const katakana = "0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789X0F4A9C8D";
const alphabet = katakana.split("");

const fontSize = 16;
let columns = canvas.width / fontSize;

const rainDrops = [];
for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

function drawMatrix() {
    // হালকা ট্রান্সপারেন্ট ব্যাকগ্রাউন্ড যাতে রেইন ট্রেইল (লেজ) তৈরি হয়
    ctx.fillStyle = 'rgba(10, 15, 29, 0.05)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff66'; // Matrix Green Color
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 30);


/* ==========================================================================
   2. DYNAMIC TYPING ANIMATION (টাইপিং ইফেক্ট)
   ========================================================================== */
const typingElement = document.getElementById('typing');
const phrases = [
    "Welcome to My Cyber Space.",
    "Initializing Secure Core Infrastructure...",
    "Status: Systems Fully Operational.",
    "Exploring Network Defense & DevSecOps."
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // পুরো লাইন শেষ হলে ২ সেকেন্ড পজ থাকবে
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // নতুন লাইন শুরুর আগে ছোট পজ
    }

    setTimeout(typeEffect, typeSpeed);
}
// অ্যানিমেশন শুরু
document.addEventListener("DOMContentLoaded", typeEffect);


/* ==========================================================================
   3. INTERACTIVE CORE SHELL (লাইভ টার্মিনাল লজিক)
   ========================================================================== */
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

if (terminalInput) {
    terminalInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            let command = this.value.toLowerCase().trim();
            let response = "";
            
            // কমান্ড হ্যান্ডলিং লজিক
            if (command === "help") {
                response = "Available Commands:<br>" +
                           " - <span class='highlight'>about</span> : Display system owner profile.<br>" +
                           " - <span class='highlight'>skills</span> : Fetch verified technology stack details.<br>" +
                           " - <span class='highlight'>status</span> : Check current system and connection health.<br>" +
                           " - <span class='highlight'>clear</span> : Purge the terminal screen buffer.";
            } else if (command === "about") {
                response = "<strong>Profile:</strong> Md. Ramzan Miah<br>" +
                           "<strong>Focus:</strong> Computer Science Student, Network Administration, and Penetration Testing.";
            } else if (command === "skills") {
                response = "<strong>Network Security:</strong> IP Subnetting (VLSM), OSI Deep-Dive, Securing Protocols.<br>" +
                           "<strong>Systems:</strong> Linux Environment (Ubuntu / Kali Deployment Blueprints).<br>" +
                           "<strong>Development:</strong> Clean Web Architecture (HTML5, CSS3, JS Core), Python Automations.";
            } else if (command === "status") {
                response = "Host: Operational | Protocol: HTTPS Secure | Security Mode: Maximum.";
            } else if (command === "clear") {
                terminalOutput.innerHTML = "";
                this.value = "";
                return;
            } else if (command === "") {
                // ফাঁকা এন্টার দিলে কোনো রেসপন্স করবে না
                return;
            } else {
                response = `Command error: Engine could not resolve symbol '${command}'. Type <span class='highlight'>help</span> for valid directives.`;
            }
            
            // টার্মিনালে টেক্সট প্রিন্ট করা
            terminalOutput.innerHTML += `<p><span class='prompt'>ramzan-miah$</span> ${this.value}</p><p class='reply'>${response}</p>`;
            this.value = ""; // ইনপুট ক্লিয়ার করা
            terminalOutput.scrollTop = terminalOutput.scrollHeight; // স্ক্রল সবসময় নিচে রাখা
        }
    });
}


/* ==========================================================================
   4. CENTRAL LAB LOGS MANAGEMENT (লোকাল স্টোরেজ ব্লগ সিস্টেম)
   ========================================================================== */
// পেজ লোড হওয়ার সাথে সাথে আগে সেভ করা নোটগুলো লোড হবে
document.addEventListener("DOMContentLoaded", loadBlogs);

function addBlog() {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const blogList = document.getElementById("blogList");

    if (titleInput.value.trim() === "" || contentInput.value.trim() === "") {
        alert("Transmission Failed: Subject and Content fields cannot be empty.");
        return;
    }

    const newLog = {
        id: Date.now(),
        title: titleInput.value,
        content: contentInput.value,
        timestamp: new Date().toLocaleString()
    };

    // লোকাল স্টোরেজ থেকে আগের ডেটা আনা বা নতুন অ্যারে তৈরি
    let existingLogs = JSON.parse(localStorage.getItem("cyber_logs")) || [];
    existingLogs.unshift(newLog); // নতুন ডেটা সবার উপরে রাখা
    localStorage.setItem("cyber_logs", JSON.stringify(existingLogs));

    // ইনপুট ফিল্ড রিসেট করা
    titleInput.value = "";
    contentInput.value = "";

    loadBlogs();
}

function loadBlogs() {
    const blogList = document.getElementById("blogList");
    if (!blogList) return;
    
    let existingLogs = JSON.parse(localStorage.getItem("cyber_logs")) || [];
    blogList.innerHTML = "";

    existingLogs.forEach(log => {
        blogList.innerHTML += `
            <div class="post-card">
                <h4><i class="fas fa-terminal"></i> ${escapeHTML(log.title)}</h4>
                <small style="color: var(--primary-color); font-size: 0.75rem;">Timestamp: ${log.timestamp}</small>
                <p style="margin-top: 8px; font-size: 0.9rem; color: var(--text-muted); white-space: pre-line;">${escapeHTML(log.content)}</p>
            </div>
        `;
    });
}

// XSS অ্যাটাক প্রতিরোধের জন্য HTML Escape ফাংশন
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}


/* ==========================================================================
   5. INTERFACE THEME TOGGLE CONTROL (ডার্ক / লাইট থিম সুইচ)
   ========================================================================== */
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
    
    const icon = document.querySelector("#themeToggleBtn i");
    if (body.classList.contains("light-theme")) {
        icon.className = "fas fa-eye-slash";
    } else {
        icon.className = "fas fa-eye";
    }
}


/* ==========================================================================
   6. CONTACT FORM PORTAL VALIDATION (মেসেজ ডেসপ্যাচ লজিক)
   ========================================================================== */
function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("senderName").value;
    const email = document.getElementById("senderEmail").value;
    const subject = document.getElementById("msgSubject").value;
    const body = document.getElementById("msgBody").value;

    // মেসেজ সেন্ড হওয়ার একটি প্রফেশনাল সাইবার প্রিভিউ বা অ্যালার্ট
    alert(`Transmission Secured!\n\nSender: ${name}\nTarget Subject: ${subject}\n\nStatus: Securely queued for dispatch!`);
    
    // ফর্ম রিসেট করা
    document.getElementById("contactForm").reset();
}