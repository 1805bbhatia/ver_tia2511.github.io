// Tailwind Configuration
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
};

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

// Copy Email to Clipboard Helper
function copyEmailToClipboard() {
  const email = 'abhigyanbhatia.tech@gmail.com';
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
  
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 20);

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