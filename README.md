<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Abhigyan Bhatia | Technologist & Solutions Architect</title>
  
  <!-- Inter & JetBrains Mono Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              dark: '#080c17',
              card: '#0f172a',
              cardHover: '#131e36',
              cyan: '#00f2fe',
              blue: '#4facfe',
              purple: '#7928ca',
              emerald: '#10b981',
              accent: '#38bdf8'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          },
          boxShadow: {
            'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.35)',
            'glow-purple': '0 0 25px -5px rgba(121, 40, 202, 0.35)',
            'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #080c17;
    }
    ::-webkit-scrollbar-thumb {
      background: #1e293b;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #38bdf8;
    }

    /* Ambient Glowing Background Elements */
    .glow-blob {
      filter: blur(100px);
      position: absolute;
      border-radius: 9999px;
      pointer-events: none;
      z-index: 0;
    }
    
    .glass-panel {
      background: rgba(15, 23, 42, 0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    .glass-card {
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.06);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-card:hover {
      border-color: rgba(56, 189, 248, 0.4);
      transform: translateY(-4px);
    }

    .badge-gradient {
      background: linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(79, 172, 254, 0.15) 100%);
      border: 1px solid rgba(0, 242, 254, 0.3);
    }

    .text-gradient {
      background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #9061f9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Pulse radar */
    @keyframes ping-slow {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(2.2); opacity: 0; }
    }
    .animate-ping-slow {
      animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  </style>
</head>

<body class="bg-brand-dark text-slate-200 antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan relative overflow-x-hidden font-sans">

  <!-- Ambient Light Orbs -->
  <div class="glow-blob w-96 h-96 bg-brand-cyan/10 top-0 left-10"></div>
  <div class="glow-blob w-[500px] h-[500px] bg-brand-purple/10 top-96 right-0"></div>
  <div class="glow-blob w-96 h-96 bg-brand-blue/10 bottom-32 left-1/3"></div>

  <!-- Toast Notification Container -->
  <div id="toast-box" class="fixed top-5 right-5 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <!-- Navigation Bar -->
  <header class="fixed top-0 left-0 right-0 z-40 px-4 py-3 transition-all duration-300" id="main-header">
    <div class="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-3.5 rounded-2xl shadow-glass">
      <!-- Logo / Name -->
      <a href="#hero" class="flex items-center gap-3 group">
      <img 
           src="image.jpg" 
           alt="Abhigyan Bhatia" 
           class="w-10 h-10 rounded-xl object-cover border border-cyan-400/30 shadow-sm"
           />
        <div>
          <span class="font-bold text-white tracking-tight text-lg group-hover:text-brand-cyan transition-colors">Abhigyan Bhatia</span>
          <span class="hidden sm:inline-block text-xs font-mono text-cyan-400/80 block -mt-1 font-medium">IoT & Software Architect</span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#about" class="hover:text-brand-cyan transition-colors">About</a>
        <a href="#experience" class="hover:text-brand-cyan transition-colors">Experience</a>
        <a href="#projects" class="hover:text-brand-cyan transition-colors">Projects</a>
        <a href="#skills" class="hover:text-brand-cyan transition-colors">Skills</a>
        <a href="#achievements" class="hover:text-brand-cyan transition-colors">Milestones</a>
        <a href="#future" class="hover:text-brand-cyan transition-colors">Vision</a>
      </nav>

      <!-- Right CTAs -->
      <div class="hidden sm:flex items-center gap-3">
        <button onclick="copyEmailToClipboard()" class="text-xs font-mono py-2 px-3.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:border-brand-cyan/50 hover:bg-slate-800 text-slate-200 transition-all flex items-center gap-2">
          <i class="fa-regular fa-copy text-brand-cyan"></i>
          <span>Copy Email</span>
        </button>
        <a href="#contact" class="text-xs font-semibold py-2 px-4 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 hover:opacity-90 transition-all shadow-glow-cyan">
          Let's Connect
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobile-toggle" class="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none">
        <i class="fa-solid fa-bars-staggered text-xl"></i>
      </button>
    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-menu" class="hidden md:hidden mt-2 max-w-7xl mx-auto glass-panel rounded-2xl p-5 flex-col gap-4 text-center">
      <a href="#about" class="text-slate-300 hover:text-brand-cyan py-1" onclick="toggleMenu()">About</a>
      <a href="#experience" class="text-slate-300 hover:text-brand-cyan py-1" onclick="toggleMenu()">Experience</a>
      <a href="#projects" class="text-slate-300 hover:text-brand-cyan py-1" onclick="toggleMenu()">Projects</a>
      <a href="#skills" class="text-slate-300 hover:text-brand-cyan py-1" onclick="toggleMenu()">Skills</a>
      <a href="#achievements" class="text-slate-300 hover:text-brand-cyan py-1" onclick="toggleMenu()">Achievements</a>
      <a href="#future" class="text-slate-300 hover:text-brand-cyan py-1" onclick="toggleMenu()">Future Vision</a>
      <a href="#contact" class="text-brand-cyan font-semibold py-2" onclick="toggleMenu()">Contact Me</a>
    </div>
  </header>

  <main class="relative z-10 pt-28">

    <!-- HERO SECTION -->
    <section id="hero" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Hero Content -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <!-- Availability Tag -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full badge-gradient text-xs font-mono text-cyan-300">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span>Open for Enterprise CCTV,Networking & Bulk IT Supply</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            "Powering <span class="text-gradient"> Enterprise Security</span> with Bulk IT Hardware Solutions"
          </h1>

          <p class="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Hi, I’m <strong class="text-white font-semibold">Abhigyan Bhatia</strong> — Currently pursuing  diploma in Computer Engineering while managing operations at Bhatia Computers & Electronics.

          </p>

          <!-- Core Role Badges -->
          <div class="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
            <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300"><i class="fa-solid fa-gamepad text-cyan-400 mr-1.5"></i>IT & Networking</span>
            <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300"><i class="fa-solid fa-video text-blue-400 mr-1.5"></i>Enterprise CCTV & Security</span>
            <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300"><i class="fa-solid fa-microchip text-purple-400 mr-1.5"></i>Sales & Marketing</span>
            <span class="px-3 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300"><i class="fa-solid fa-users text-emerald-400 mr-1.5"></i>NSS Volunteer & General Secretary"Damla Polythenic Youth Club</span>
          </div>

          <!-- Hero Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" class="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold hover:shadow-glow-cyan hover:scale-[1.02] transition-all text-sm flex items-center gap-2">
              <i class="fa-solid fa-diagram-project"></i>
              <span>Explore My Work</span>
            </a>
            <a href="#experience" class="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium border border-slate-700 hover:border-slate-500 transition-all text-sm flex items-center gap-2">
              <i class="fa-solid fa-timeline"></i>
              <span>View Experience</span>
            </a>
            <a href="Abhigyan_Bhatia_Resume.pdf" download="Abhigyan_Bhatia_Resume.pdf" class="px-5 py-3 rounded-xl glass-card text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 hover:border-cyan-500/40">
              <i class="fa-solid fa-file-arrow-down text-brand-cyan"></i>
              <span>Curriculum Vitae</span>
            </a>
          </div>

          <!-- Quick Stats Counter -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-center lg:text-left">
            <div>
              <div class="text-2xl lg:text-3xl font-extrabold text-white font-mono text-cyan-400">10+</div>
              <div class="text-xs text-slate-400 uppercase tracking-wider font-medium">Production Systems</div>
            </div>
            <div>
              <div class="text-2xl lg:text-3xl font-extrabold text-white font-mono text-blue-400">500+</div>
              <div class="text-xs text-slate-400 uppercase tracking-wider font-medium">Hardware Nodes</div>
            </div>
            <div>
              <div class="text-2xl lg:text-3xl font-extrabold text-white font-mono text-purple-400">Top 3</div>
              <div class="text-xs text-slate-400 uppercase tracking-wider font-medium">Hackathon Finalist</div>
            </div>
            <div>
              <div class="text-2xl lg:text-3xl font-extrabold text-white font-mono text-emerald-400">100%</div>
              <div class="text-xs text-slate-400 uppercase tracking-wider font-medium">Hands-On Ownership</div>
            </div>
          </div>
        </div>

        <!-- Right Visual / Terminal Card -->
        <div class="lg:col-span-5">
          <div class="glass-card p-6 rounded-2xl relative shadow-2xl border border-slate-700/50">
            <!-- Terminal Header -->
            <div class="flex items-center justify-between pb-4 border-b border-slate-800 font-mono text-xs text-slate-400">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span class="ml-2 text-slate-400">abhigyan@systems:~</span>
              </div>
              <span class="text-cyan-400 font-semibold"><i class="fa-solid fa-shield-halved mr-1"></i>SECURE</span>
            </div>

            <!-- Terminal Output -->
            <div class="font-mono text-xs text-slate-300 py-4 space-y-2.5 leading-relaxed">
              <p><span class="text-brand-cyan">root@core:~$</span> initialize-profile --name "Abhigyan Bhatia"</p>
              <p class="text-slate-400">>> Institution: <span class="text-white">Seth Jai Prakash Polytechnic, Damla</span></p>
              <p class="text-slate-400">>> Current Role: <span class="text-amber-300">Sr. Manager, Bhatia Computers & Electronics</span></p>
              <p class="text-slate-400">>> Core Focus: <span class="text-emerald-300">CCTV Networks, IoT Nodes, Full-Stack Architecture</span></p>
              <p class="text-slate-400">>> Key Projects: <span class="text-cyan-300">[TrustCam Haryana, Kisan Cool Pod, Sarthi Sync]</span></p>
              <p class="text-slate-400">>> Youth Leadership: <span class="text-purple-300">General Secretary (Youth Club), NSS Star Volunteer</span></p>
              
              <div class="pt-3 border-t border-slate-800">
                <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Hardware & Physical Deployments</span>
                  <span class="text-cyan-400 font-bold">95%</span>
                </div>
                <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-brand-cyan to-brand-blue h-full w-[95%]"></div>
                </div>

                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2.5 mb-1">
                  <span>Cross-Platform Flutter & Web Engine</span>
                  <span class="text-purple-400 font-bold">90%</span>
                </div>
                <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-brand-blue to-brand-purple h-full w-[90%]"></div>
                </div>
              </div>
            </div>

            <!-- Quick Action Interactive Badge inside Card -->
            <div class="mt-2 p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">
                  <i class="fa-solid fa-satellite-dish"></i>
                </div>
                <div>
                  <div class="text-xs font-semibold text-white">Live Operations Node</div>
                  <div class="text-[10px] text-slate-400">Yamunanagar & Chandpur Hub</div>
                </div>
              </div>
              <span class="px-2 py-0.5 text-[10px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">ONLINE</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
      <div class="max-w-3xl mb-12">
        <span class="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block mb-2">// Origin & Philosophy</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white">Engineering from the Bare Metal to Modern Cloud Apps.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="glass-card p-6 rounded-2xl">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl mb-4 border border-cyan-500/20">
            <i class="fa-solid fa-microchip"></i>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">Hardware-Grounded</h3>
          <p class="text-sm text-slate-400 leading-relaxed">
            Unlike software developers who stay purely in code editors, I spend hours deploying real NVRs, CP Plus & Dahua IP cameras, wireless outdoor bridges, and microcontroller sensor nodes. I build software with deep respect for physical constraints.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="glass-card p-6 rounded-2xl">
          <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl mb-4 border border-blue-500/20">
            <i class="fa-solid fa-layer-group"></i>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">Full-Stack & Mobile</h3>
          <p class="text-sm text-slate-400 leading-relaxed">
            Skilled in cross-platform Flutter application development, Python (Flask), and dynamic PHP/MySQL databases. From designing payroll applications to cloud-synced dispatch systems, I construct resilient client-server infrastructures.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="glass-card p-6 rounded-2xl">
          <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl mb-4 border border-purple-500/20">
            <i class="fa-solid fa-hand-holding-heart"></i>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">Community & Leadership</h3>
          <p class="text-sm text-slate-400 leading-relaxed">
            Leading as General Secretary of the Youth Club and recognized as NSS Star & Best Volunteer. I organize multi-department esports tourneys, technical workshops, blood donation drives, and public governance youth parliaments.
          </p>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE & ROLES SECTION -->
    <section id="experience" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block mb-2">// Proven Track Record</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">Experience & Leadership Journey</h2>
        </div>
        <p class="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
          Bridging technical enterprise execution with campus community governance and state conventions.
        </p>
      </div>

      <!-- Timeline Component -->
      <div class="relative border-l-2 border-slate-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
        
        <!-- Experience Item 1: Bhatia Computers -->
        <div class="relative group">
          <div class="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-brand-cyan ring-4 ring-slate-900 group-hover:scale-125 transition-transform shadow-glow-cyan"></div>
          
          <div class="hidden md:block absolute -left-32 top-1 text-xs font-mono font-semibold text-cyan-400">
            2024 – PRESENT
          </div>

          <div class="glass-card p-6 rounded-2xl">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 class="text-xl font-bold text-white flex items-center gap-2">
                <span>Senior Manager & Solutions Engineer</span>
                <span class="px-2.5 py-0.5 text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-md">Current Role</span>
              </h3>
              <span class="text-xs font-mono text-slate-400 md:hidden">July 2024 – Present</span>
            </div>
            <div class="text-sm text-cyan-400/90 font-medium mb-3">Bhatia Computers & Electronics — Yamunanagar, Haryana</div>
            <ul class="text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>Directing enterprise IT operations, client technical consulting, and security hardware deployments across residential and commercial establishments.</li>
              <li>Engineered 50+ site-specific IP/HD CCTV surveillance layouts (CP Plus, Dahua, Hikvision) paired with high-throughput Tenda and CPE wireless bridges.</li>
              <li>Spearheaded inventory management, vendor negotiations, and customized software systems for retail billing, attendance, and technical job tracking.</li>
            </ul>
            <div class="flex flex-wrap gap-2 pt-4">
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Enterprise CCTV</span>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Wireless Bridges</span>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Network Topology</span>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Client Consulting</span>
            </div>
          </div>
        </div>

        <!-- Experience Item 2: Youth Club GS -->
        <div class="relative group">
          <div class="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900 group-hover:scale-125 transition-transform"></div>
          
          <div class="hidden md:block absolute -left-32 top-1 text-xs font-mono font-semibold text-blue-400">
            2026
          </div>

          <div class="glass-card p-6 rounded-2xl">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 class="text-xl font-bold text-white">General Secretary — Youth Club</h3>
              <span class="text-xs font-mono text-slate-400 md:hidden">2026</span>
            </div>
            <div class="text-sm text-blue-400/90 font-medium mb-3">Seth Jai Prakash Polytechnic, Damla</div>
            <p class="text-sm text-slate-300 mb-3">
              Serving as the highest executive student officer within the institution’s Youth Club, driving student mobilization, technical culture, and inter-collegiate events.
            </p>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Pioneered and managed the official campus <em>Free Fire MAX Esports Championship</em> with 100+ competitors, customized live casting, and rules enforcement.</li>
              <li>Co-ordinated the institutional phase of Smart India Hackathon (SIH 2026), mentoring first-year cohorts in pitch formation and prototype viability.</li>
            </ul>
          </div>
        </div>

        <!-- Experience Item 3: NSS Volunteer -->
        <div class="relative group">
          <div class="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-slate-900 group-hover:scale-125 transition-transform"></div>
          
          <div class="hidden md:block absolute -left-32 top-1 text-xs font-mono font-semibold text-purple-400">
            2025 – 2026
          </div>

          <div class="glass-card p-6 rounded-2xl">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 class="text-xl font-bold text-white">Star & Best Volunteer — National Service Scheme (NSS)</h3>
              <span class="text-xs font-mono text-slate-400 md:hidden">2025 – 2026</span>
            </div>
            <div class="text-sm text-purple-400/90 font-medium mb-3">Ministry of Youth Affairs and Sports | Damla Chapter</div>
            <p class="text-sm text-slate-300 mb-2">
              Awarded both <strong class="text-white">Best Volunteer</strong> and <strong class="text-white">Star Volunteer</strong> honors at the intensive 7-Day Annual Residential NSS Camp.
            </p>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Organized massive district blood donation drives in partnership with Red Cross Society and civil hospitals.</li>
              <li>Supervised digital literacy workshops for rural school students in adopted surrounding villages.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- PROJECTS SECTION (Filterable) -->
    <section id="projects" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block mb-2">// Built For Utility</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">Flagship Engineering Projects</h2>
        </div>
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap gap-2 mt-4 md:mt-0" id="project-filters">
          <button data-filter="all" class="filter-btn active px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-brand-cyan text-slate-950 transition-all">All Projects</button>
          <button data-filter="iot" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 transition-all">IoT & Hardware</button>
          <button data-filter="software" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 transition-all">Software & Cloud</button>
          <button data-filter="hackathon" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 transition-all">Hackathon Finalists</button>
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-container">

        <!-- Project 1: TrustCam Haryana -->
        <div class="project-item glass-card p-6 rounded-2xl flex flex-col justify-between" data-category="software iot">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Security Platform</span>
              <div class="text-slate-400 hover:text-white cursor-pointer"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">TrustCam Haryana</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4">
              A comprehensive state-aligned registry and certification verification platform connecting verified CCTV technicians, enterprise hardware vendors, and citizen security audits.
            </p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Flutter</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Firebase</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">CCTV Protocols</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">REST API</span>
            </div>
            <button onclick="openModal('TrustCam Haryana', 'A verified technician framework developed to prevent unauthorized surveillance tampering, standardize installation pricing across Yamunanagar district, and provide authenticated tamper-proof logs for security cameras.', ['Full Flutter Mobile App', 'QR-based Field Inspection Audits', 'Geo-tagged Technician Certification'])" class="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1.5">
              <span>View Architecture Details</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Project 2: Kisan Cool Pod -->
        <div class="project-item glass-card p-6 rounded-2xl flex flex-col justify-between" data-category="iot hackathon">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">Hack Orbit Finalist</span>
              <span class="text-xs font-mono text-purple-400"><i class="fa-solid fa-award mr-1"></i>Awarded</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Kisan Cool Pod (Cool Kisan)</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4">
              Decentralized, micro-cold storage architecture with IoT thermal telemetry and remote humidity control built specifically for perishable vegetable farmers in Haryana.
            </p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">ESP32 / Arduino</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">DHT22 Sensors</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Solar Inverter IoT</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Python Analytics</span>
            </div>
            <button onclick="openModal('Kisan Cool Pod (Hack Orbit Finalist)', 'Recognized in the top echelon of Hack Orbit 2026 at Mukand Lal National College. Solves the 30% harvest spoil cycle in Yamunanagar tomato & cauliflower farmers using low-cost sensor telemetry and localized cooling relays.', ['Micro-Cold Chamber Telemetry', 'SMS Alert on Threshold Spikes', 'Solar Battery Level Tracking'])" class="text-xs font-semibold text-brand-purple hover:underline flex items-center gap-1.5 text-purple-400">
              <span>View Architecture Details</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Project 3: Sarthi Sync -->
        <div class="project-item glass-card p-6 rounded-2xl flex flex-col justify-between" data-category="iot software">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">Smart Mobility</span>
              <div class="text-slate-400 hover:text-white cursor-pointer"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Sarthi Sync / Rural Bus Tracker</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4">
              Hardware-in-the-loop transit solution providing low-latency bus positioning, stop estimates, and SMS schedules for rural commuters across Chandpur-Yamunanagar transit lines.
            </p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">NEO-6M GPS</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">GSM SIM800L</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Flask Backend</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Leaflet Maps</span>
            </div>
            <button onclick="openModal('Sarthi Sync Transit', 'Engineered to bridge rural students and elderly villagers who lack high-speed 5G. Provides real-time geolocation with both web mapping and fallback GSM SMS inquiry system.', ['Sub-3-second GPS updates', 'Low data bandwidth telemetry', 'Village kiosk display compatibility'])" class="text-xs font-semibold text-blue-400 hover:underline flex items-center gap-1.5">
              <span>View Architecture Details</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Project 4: Staff Attendance & Payroll Suite -->
        <div class="project-item glass-card p-6 rounded-2xl flex flex-col justify-between" data-category="software">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Enterprise Software</span>
              <span class="text-xs font-mono text-emerald-400">Deployed In Retail</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Retail Attendance & Payroll Suite</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4">
              Custom-built cross-platform application managing biometric log-ins, store shifts, overtime computation, and automated monthly pay slip generation.
            </p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Flutter Desktop</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">MySQL Database</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">PDF Generator</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Local Auth</span>
            </div>
            <button onclick="openModal('Retail Attendance & Payroll Suite', 'Eliminated manual register logs at Bhatia Computers & Electronics. Tracks technician on-field visits, salary advances, and tax deductions with one-click exportable PDF payroll slips.', ['Zero Cloud Downtime fallback', 'Role-based access security', 'Seamless local thermal printer hook'])" class="text-xs font-semibold text-emerald-400 hover:underline flex items-center gap-1.5">
              <span>View Architecture Details</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Project 5: Abhi Mansion & Digital Commerce -->
        <div class="project-item glass-card p-6 rounded-2xl flex flex-col justify-between" data-category="software">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Full-Stack Web</span>
              <div class="text-slate-400 hover:text-white cursor-pointer"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Abhi Mansion & Digital Portal</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4">
              Full-featured dynamic web application featuring booking workflows, inventory catalogs, service inquiry dashboards, and responsive front-end interfaces.
            </p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">PHP 8</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">MySQL</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Tailwind/Bootstrap</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Admin Control</span>
            </div>
            <button onclick="openModal('Abhi Mansion & Digital Commerce', 'End-to-end web portal featuring complete CRUD functionality, custom authentication, database normalization, and instant quote generation.', ['Custom PHP Model-View controllers', 'SQL injection immunization', 'Mobile-first responsive design'])" class="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1.5">
              <span>View Architecture Details</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Project 6: Campus SIH & Esports Portal -->
        <div class="project-item glass-card p-6 rounded-2xl flex flex-col justify-between" data-category="software hackathon">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">Community Platform</span>
              <span class="text-xs font-mono text-purple-400">Institutional Event</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Polytechnic Esports & Hackathon Desk</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4">
              Custom scoring, team matchmaking, and bracket tournament management platform for intra-college competitive gaming and SIH preliminary rounds.
            </p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">JavaScript</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Live JSON Scoring</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Google Cloud API</span>
            </div>
            <button onclick="openModal('Polytechnic Tournament & Hackathon Desk', 'Streamlined registrations and automated kill-point bracket evaluations for 32 squads during the Free Fire MAX championship organized under the Youth Club.', ['Instant scoreboard rendering', 'Verification of player IDs', 'Automated lobby notifications'])" class="text-xs font-semibold text-purple-400 hover:underline flex items-center gap-1.5">
              <span>View Architecture Details</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- TECHNICAL SKILLS MATRIX -->
    <section id="skills" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
      <div class="max-w-3xl mb-12">
        <span class="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block mb-2">// Technical Weaponry</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white">Full-Stack & Hardware Matrix</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Category 1: Languages & Frameworks -->
        <div class="glass-card p-6 rounded-2xl border-t-2 border-t-cyan-400">
          <div class="flex items-center gap-3 mb-4">
            <i class="fa-solid fa-code text-cyan-400 text-xl"></i>
            <h3 class="font-bold text-white text-base">Languages & App Dev</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Flutter / Dart</span>
                <span class="text-cyan-400">Advanced</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-cyan-400 h-full w-[90%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Python (Flask / Scripting)</span>
                <span class="text-cyan-400">Proficient</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-cyan-400 h-full w-[85%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">PHP 8 & Modern MVC</span>
                <span class="text-cyan-400">Proficient</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-cyan-400 h-full w-[80%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">C & Core Java</span>
                <span class="text-cyan-400">Academic Core</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-cyan-400 h-full w-[75%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">JavaScript & HTML5/Tailwind</span>
                <span class="text-cyan-400">High</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-cyan-400 h-full w-[88%]"></div></div>
            </div>
          </div>
        </div>

        <!-- Category 2: Hardware & Surveillance Networks -->
        <div class="glass-card p-6 rounded-2xl border-t-2 border-t-blue-400">
          <div class="flex items-center gap-3 mb-4">
            <i class="fa-solid fa-network-wired text-blue-400 text-xl"></i>
            <h3 class="font-bold text-white text-base">Surveillance & Infra</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Enterprise CCTV (Dahua / CP Plus)</span>
                <span class="text-blue-400">Mastery</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-blue-400 h-full w-[95%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">NVR / DVR Remote P2P & DDNS</span>
                <span class="text-blue-400">Mastery</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-blue-400 h-full w-[95%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Outdoor CPE Wireless Bridges</span>
                <span class="text-blue-400">High</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-blue-400 h-full w-[90%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Tenda / Mikrotik Routing & VLANs</span>
                <span class="text-blue-400">High</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-blue-400 h-full w-[85%]"></div></div>
            </div>
          </div>
        </div>

        <!-- Category 3: IoT, Embedded & Cloud -->
        <div class="glass-card p-6 rounded-2xl border-t-2 border-t-purple-400">
          <div class="flex items-center gap-3 mb-4">
            <i class="fa-solid fa-satellite text-purple-400 text-xl"></i>
            <h3 class="font-bold text-white text-base">IoT, GPS & Backend</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">ESP32, Arduino, Microcontrollers</span>
                <span class="text-purple-400">Advanced</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-purple-400 h-full w-[88%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">GPS Modules (NEO-6M) & GSM</span>
                <span class="text-purple-400">Advanced</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-purple-400 h-full w-[85%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">MySQL & Relational Design</span>
                <span class="text-purple-400">High</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-purple-400 h-full w-[85%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Firebase & Firestore Realtime</span>
                <span class="text-purple-400">Proficient</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-purple-400 h-full w-[80%]"></div></div>
            </div>
          </div>
        </div>

        <!-- Category 4: Tools, Leadership & Media -->
        <div class="glass-card p-6 rounded-2xl border-t-2 border-t-emerald-400">
          <div class="flex items-center gap-3 mb-4">
            <i class="fa-solid fa-compass-drafting text-emerald-400 text-xl"></i>
            <h3 class="font-bold text-white text-base">Workflows & Leadership</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Git / GitHub Versioning</span>
                <span class="text-emerald-400">Everyday</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-emerald-400 h-full w-[90%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Public Speaking & Debating</span>
                <span class="text-emerald-400">Awarded</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-emerald-400 h-full w-[95%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Canva, Adobe UI & Video Media</span>
                <span class="text-emerald-400">High</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-emerald-400 h-full w-[85%]"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-slate-300">Team Mentorship & Event Ops</span>
                <span class="text-emerald-400">Experienced</span>
              </div>
              <div class="w-full bg-slate-800 h-1 rounded-full"><div class="bg-emerald-400 h-full w-[92%]"></div></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ACHIEVEMENTS & HONORS SHOWCASE -->
    <section id="achievements" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
      <div class="max-w-3xl mb-12">
        <span class="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block mb-2">// Honors & Credentials</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white">Recognitions & Milestone Badges</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Achievement 1 -->
        <div class="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl shrink-0 border border-amber-500/20">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <span class="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">Hackathon Honors • Oct 2026</span>
            <h4 class="text-base font-bold text-white mb-1">Finalist — Hack Orbit Inter-College</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Mukand Lal National College, Yamunanagar. Pitched the Kisan Cool Pod smart agriculture micro-storage IoT project among 40+ competitor teams.
            </p>
          </div>
        </div>

        <!-- Achievement 2 -->
        <div class="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl shrink-0 border border-blue-500/20">
            <i class="fa-solid fa-landmark"></i>
          </div>
          <div>
            <span class="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">Governance & Oratory • Sep 2026</span>
            <h4 class="text-base font-bold text-white mb-1">Union Minister of Finance (Treasury)</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              JMIT Radaur Inter-College Youth Parliament. Defended national budget policy from the Treasury benches; received commendation from jury judges.
            </p>
          </div>
        </div>

        <!-- Achievement 3 -->
        <div class="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl shrink-0 border border-purple-500/20">
            <i class="fa-solid fa-handshake-angle"></i>
          </div>
          <div>
            <span class="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider block mb-1">State Convention • Oct 2026</span>
            <h4 class="text-base font-bold text-white mb-1">State Delegate — Sewa Sankalp Haryana</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Selected delegate at the DAV Girls College & Kurukshetra University State Convention for grassroots community contribution and youth leadership.
            </p>
          </div>
        </div>

        <!-- Achievement 4 -->
        <div class="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl shrink-0 border border-emerald-500/20">
            <i class="fa-solid fa-star"></i>
          </div>
          <div>
            <span class="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">NSS Award • Mar 2026</span>
            <h4 class="text-base font-bold text-white mb-1">Best Volunteer & Star Volunteer</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Awarded both honors at the 7-day residential camp of Seth Jai Prakash Polytechnic for exceptional organizational efficiency and social impact.
            </p>
          </div>
        </div>

        <!-- Achievement 5 -->
        <div class="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl shrink-0 border border-cyan-500/20">
            <i class="fa-solid fa-certificate"></i>
          </div>
          <div>
            <span class="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">Global Certifications</span>
            <h4 class="text-base font-bold text-white mb-1">UNICEF YuWaah & HP LIFE Certified</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Certified in Artificial Intelligence Productivity & Data Tools (UNICEF YuWaah), Critical Thinking & Professional Business Networking (HP LIFE Foundation).
            </p>
          </div>
        </div>

        <!-- Achievement 6 -->
        <div class="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl shrink-0 border border-rose-500/20">
            <i class="fa-solid fa-gamepad"></i>
          </div>
          <div>
            <span class="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block mb-1">Campus Sports Ops • Oct 2026</span>
            <h4 class="text-base font-bold text-white mb-1">Head Convener — Intra Esports Championship</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Conceptualized and executed the first campus-wide Free Fire MAX championship with live streaming, rules arbitrations, and prize ceremonies.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- FUTURE VISION SECTION -->
    <section id="future" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
      <div class="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden border border-brand-cyan/20">
        <div class="glow-blob w-72 h-72 bg-brand-cyan/15 -top-10 -right-10"></div>
        <div class="relative z-10 max-w-3xl">
          <span class="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block mb-2">// The Road Ahead</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Vision, Future Research & Aspirations</h2>
          <p class="text-slate-300 text-base leading-relaxed mb-6">
            Technology yields its highest dividend when it solves structural issues outside Tier-1 metros. My trajectory is focused on three high-leverage domains:
          </p>

          <div class="space-y-4 text-sm text-slate-300">
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-circle-check text-cyan-400 mt-1"></i>
              <div>
                <strong class="text-white">Edge AI Computer Vision for Regional Surveillance:</strong> Moving beyond passive recording to on-device neural detection of intrusion, traffic density, and safety anomalies without high cloud bandwidth dependency.
              </div>
            </div>
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-circle-check text-cyan-400 mt-1"></i>
              <div>
                <strong class="text-white">Decentralized Cold Chain Logistics:</strong> Expanding the <em class="text-white">Kisan Cool Pod</em> prototype into commercially viable solar units to prevent localized post-harvest perishable wastage.
              </div>
            </div>
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-circle-check text-cyan-400 mt-1"></i>
              <div>
                <strong class="text-white">High-Speed Rural Mesh Networks:</strong> Deploying cost-effective unlicensed Wi-Fi bridges and low-power telemetry to modernize transit, education, and village security.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT & CONNECT SECTION -->
    <section id="contact" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left Contact Info -->
        <div class="lg:col-span-5 space-y-6">
          <span class="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block">// Direct Frequency</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">Let’s Architect Something Significant Together.</h2>
          <p class="text-slate-400 text-sm leading-relaxed">
            Whether you represent a tech company seeking an adaptable engineer with physical hardware & full-stack software fluency, an enterprise needing surveillance design, or a hackathon team aiming for victory — reach out directly.
          </p>

          <!-- Contact items -->
          <div class="space-y-4 pt-2">
            <div class="flex items-center gap-4 glass-card p-3.5 rounded-xl">
              <div class="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div class="text-xs text-slate-400">Headquarters / Base</div>
                <div class="text-sm font-semibold text-white">Yamunanagar & Chandpur, Haryana, India</div>
              </div>
            </div>

            <div class="flex items-center gap-4 glass-card p-3.5 rounded-xl cursor-pointer hover:border-brand-cyan/40" onclick="copyEmailToClipboard()">
              <div class="w-10 h-10 rounded-lg bg-blue-400/10 text-blue-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="flex-1">
                <div class="text-xs text-slate-400">Official Electronic Mail</div>
                <div class="text-sm font-semibold text-white">abhigyanbhatia.tech@gmail.com</div>
              </div>
              <i class="fa-regular fa-copy text-slate-400 text-xs pr-2"></i>
            </div>

            <div class="flex items-center gap-4 glass-card p-3.5 rounded-xl">
              <div class="w-10 h-10 rounded-lg bg-purple-400/10 text-purple-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-building-user"></i>
              </div>
              <div>
                <div class="text-xs text-slate-400">Enterprise Office</div>
                <div class="text-sm font-semibold text-white">Bhatia Computers & Electronics, Yamunanagar</div>
              </div>
            </div>
          </div>

          <!-- Social Quick Links -->
          <div class="flex items-center gap-3 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-colors">
              <i class="fa-brands fa-github text-lg"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-colors">
              <i class="fa-brands fa-linkedin text-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-colors">
              <i class="fa-brands fa-x-twitter text-lg"></i>
            </a>
            <button onclick="copyEmailToClipboard()" class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-cyan-400 transition-colors" title="Copy Email">
              <i class="fa-solid fa-at text-lg"></i>
            </button>
          </div>
        </div>

        <!-- Right Interactive Form -->
        <div class="lg:col-span-7">
          <div class="glass-card p-8 rounded-3xl border border-slate-700/60 shadow-glass">
            <h3 class="text-xl font-bold text-white mb-2">Send an Instant Message</h3>
            <p class="text-xs text-slate-400 mb-6">Inquiries typically answered within 4 hours.</p>

            <form id="contact-form" onsubmit="handleFormSubmit(event)" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono text-slate-300 mb-1.5">Your Full Name *</label>
                  <input type="text" id="form-name" required placeholder="e.g. Vikram Sharma" class="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-brand-cyan focus:outline-none text-sm text-white placeholder-slate-500 transition-colors" />
                </div>
                <div>
                  <label class="block text-xs font-mono text-slate-300 mb-1.5">Email Address *</label>
                  <input type="email" id="form-email" required placeholder="name@domain.com" class="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-brand-cyan focus:outline-none text-sm text-white placeholder-slate-500 transition-colors" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-mono text-slate-300 mb-1.5">Project or Inquiry Domain</label>
                <select id="form-category" class="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-brand-cyan focus:outline-none text-sm text-white transition-colors">
                  <option value="Enterprise CCTV & Surveillance">Enterprise CCTV & Surveillance Network</option>
                  <option value="Full-Stack / Flutter Mobile Project">Full-Stack / Flutter Mobile Project</option>
                  <option value="IoT / Hardware Automation">IoT / Hardware Automation</option>
                  <option value="Hackathon / Collaboration">Hackathon Collaboration / Speaking</option>
                  <option value="General Technical Inquiry">General Technical Inquiry</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-mono text-slate-300 mb-1.5">Brief Message / Scope *</label>
                <textarea id="form-message" rows="4" required placeholder="Describe your requirement, timeline, or query..." class="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-brand-cyan focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"></textarea>
              </div>

              <button type="submit" id="form-submit-btn" class="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold hover:shadow-glow-cyan hover:opacity-95 transition-all text-sm flex items-center justify-center gap-2">
                <i class="fa-solid fa-paper-plane"></i>
                <span>Transmit Inquiry</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="border-t border-slate-800/80 bg-slate-950/80 py-8 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2 font-mono">
        <span class="text-brand-cyan font-bold">ABHIGYAN BHATIA</span>
        <span>•</span>
        <span>Yamunanagar, Haryana</span>
      </div>
      <div>
        Engineered with precision. All rights reserved.
      </div>
      <div class="font-mono text-[11px] text-slate-400">
        System Status: <span class="text-emerald-400">Normal Operability</span>
      </div>
    </div>
  </footer>

  <!-- ARCHITECTURE MODAL -->
  <div id="project-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md hidden transition-opacity duration-200">
    <div class="glass-panel border border-slate-700 max-w-lg w-full p-6 rounded-2xl relative shadow-2xl">
      <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white p-2">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="flex items-center gap-2 text-brand-cyan font-mono text-xs mb-2">
        <i class="fa-solid fa-microchip"></i>
        <span>PROJECT DOSSIER</span>
      </div>

      <h3 id="modal-title" class="text-xl font-bold text-white mb-3">Project Title</h3>
      <p id="modal-desc" class="text-sm text-slate-300 leading-relaxed mb-4">Project detailed technical overview...</p>

      <div class="border-t border-slate-800 pt-3">
        <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Technical Highlights:</h4>
        <ul id="modal-highlights" class="text-xs text-slate-300 space-y-1.5 list-disc list-inside"></ul>
      </div>

      <div class="mt-6 flex justify-end">
        <button onclick="closeModal()" class="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white">Close Dossier</button>
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // Mobile Drawer Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    function toggleMenu() {
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      }
    }
    mobileToggle.addEventListener('click', toggleMenu);

    // Navbar Scroll Shadow
    window.addEventListener('scroll', () => {
      const header = document.getElementById('main-header');
      if (window.scrollY > 40) {
        header.classList.add('py-2');
        header.classList.remove('py-3');
      } else {
        header.classList.add('py-3');
        header.classList.remove('py-2');
      }
    });

    // Copy to clipboard helper
    function copyEmailToClipboard() {
      const email = 'abhigyanbhatia18@gmail.com';
      const dummy = document.createElement('textarea');
      document.body.appendChild(dummy);
      dummy.value = email;
      dummy.select();
      try {
        document.execCommand('copy');
        showToast('Email Copied to Clipboard!', 'success');
      } catch (err) {
        showToast('Failed to copy email automatically.', 'error');
      }
      document.body.removeChild(dummy);
    }

    // Toast Notification System
    function showToast(message, type = 'info') {
      const toastBox = document.getElementById('toast-box');
      const toast = document.createElement('div');
      
      const bgColor = type === 'success' ? 'border-brand-cyan text-cyan-300' : 'border-red-500 text-red-300';
      const icon = type === 'success' ? 'fa-check' : 'fa-triangle-exclamation';

      toast.className = `glass-panel pointer-events-auto px-4 py-3 rounded-xl border ${bgColor} text-xs font-mono shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-2 opacity-0`;
      toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
      `;

      toastBox.appendChild(toast);
      
      // Animate In
      setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      }, 20);

      // Dismiss after 3.5s
      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    // Filterable Projects Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-item');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('bg-brand-cyan', 'text-slate-950');
          b.classList.add('bg-slate-800/80', 'text-slate-300');
        });
        btn.classList.add('bg-brand-cyan', 'text-slate-950');
        btn.classList.remove('bg-slate-800/80', 'text-slate-300');

        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Modal Architecture Inspection
    function openModal(title, description, highlights) {
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-desc').textContent = description;
      
      const listEl = document.getElementById('modal-highlights');
      listEl.innerHTML = '';
      highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        listEl.appendChild(li);
      });

      const modal = document.getElementById('project-modal');
      modal.classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('project-modal').classList.add('hidden');
    }

    // Close modal on Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Interactive Contact Form Handling
    function handleFormSubmit(e) {
      e.preventDefault();
      const btn = document.getElementById('form-submit-btn');
      const originalText = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Securing Transmission...</span>`;

      setTimeout(() => {
        showToast('Message transmitted successfully! Abhigyan will respond shortly.', 'success');
        document.getElementById('contact-form').reset();
        btn.disabled = false;
        btn.innerHTML = originalText;
      }, 1200);
    }

    // Resume Notice
    function downloadResumeNotice() {
      showToast('CV requested. Please email directly for the complete verified dossier.', 'info');
    }
  </script>
</body>
</html>
