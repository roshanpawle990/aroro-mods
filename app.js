
const appsData = [
    {
        id: 1,
        title: "CapCut Pro",
        version: "v12.0.0",
        category: "video",
        rating: 4.8,
        size: "245 MB",
        downloads: "500M+",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXX4KLkRJcpB-gj4D4jR7Au3U-Oc3IrvE2E5kfcVmCQ&s=10",
        description: "Professional video editing with all Pro features unlocked.",
        screenshots: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N69YNLTYGCo-dyBoBqOf24ihyiirrhobI8p7xZrQqw&s=10",
            "https://shotkit.com/wp-content/uploads/2023/10/IMG_3800-473x1024.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUlx0qEbukc6-YXP0rJADaRqO13AZkQJVaB4LNWkDlg&s=10"
        ],
        features: [
            "Pro Unlocked",
            "No Watermark",
            "All Effects Premium",
            "4K Export",
            "Auto Captions",
            "Keyframes Pro"
        ],
        downloadLink: "https://aroromods.com/dl/capcut-pro-mod.apk",
        modType: "Pro",
        fileFormat: "APK",
        minAndroid: "Android 7.0+"
    },
    {
        id: 2,
        title: "Spotify Premium",
        version: "v8.9.2",
        category: "music",
        rating: 4.9,
        size: "32 MB",
        downloads: "1B+",
        image: "data:image/png;base64,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",
        description: "Listen to millions of songs with Premium features unlocked.",
        screenshots: [
            "https://knowtechie.com/wp-content/uploads/2020/05/spotify-logo-blurred-background.webp",
            "https://cdn.ain.ua/en/articles/2025-12-22/eSIgwwkjbOLeZDeLaXrmwpBfLZzOpgr7qvjsyCO0.webp"
        ],
        features: [
            "Premium Unlocked",
            "No Ads",
            "Offline Download",
            "High Quality Audio",
            "Unlimited Skips"
        ],
        downloadLink: "https://aroromods.com/dl/spotify-premium.apk",
        modType: "Premium",
        fileFormat: "APK",
        minAndroid: "Android 6.0+"
    }


    
];

let currentApps = [...appsData];
let currentPage = 'apps';
let currentAppId = null;
let historyStack = ['apps'];

// DOM Elements
const pages = {
    apps: document.getElementById('appsPage'),
    detail: document.getElementById('detailPage'),
    download: document.getElementById('downloadPage')
};

// Initialize
function init() {
    loadAppsGrid();
    setupEventListeners();
    handleInitialBackButton();
}

// Load Apps Grid - Show ALL apps
function loadAppsGrid() {
    const grid = document.getElementById('appGrid');
    grid.innerHTML = currentApps.map(app => createAppCard(app)).join('');
}

// Create App Card - Added Description
function createAppCard(app) {
    return `
        <div class="app-card" data-app-id="${app.id}">
            <div class="app-image" style="background-image: url('${app.image}')">
                <div class="mod-badge">${app.modType}</div>
            </div>
            <div class="app-info">
                <div class="app-title">${app.title}</div>
                <div class="app-description">${app.description}</div>
                <div class="app-version">${app.version}</div>
                <div class="app-meta">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${app.rating}</span>
                    </div>
                    <span>${app.size}</span>
                </div>
            </div>
        </div>
    `;
}

// Open App Detail
function openAppDetail(appId) {
    const app = appsData.find(a => a.id == appId);
    if (!app) return;

    currentAppId = appId;
    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = createDetailPage(app);
    
    switchPage('detail');
    historyStack.push('detail');
}

// Create Detail Page - Added Description Section after Features
function createDetailPage(app) {
    return `
        <div class="detail-back" onclick="goBack()">
            <i class="fas fa-arrow-left"></i>
            Back to Apps
        </div>
        
        <div class="detail-hero">
            <div class="detail-image" style="background-image: url('${app.image}')"></div>
            <div class="detail-title">${app.title}</div>
            <div class="detail-version">${app.version} MOD</div>
        </div>

        <div class="download-section">
            <button class="download-btn" onclick="goToDownloadPage(${app.id})">
                <i class="fas fa-download"></i> Download ${app.size}
            </button>
            <div class="download-info">
                ${app.downloads} downloads • 100% Safe & Virus Free ✓
            </div>
        </div>

        <div class="detail-stats">
            <div class="stat-item">
                <div class="stat-value">${app.rating}</div>
                <div class="stat-label">Rating</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${app.downloads}</div>
                <div class="stat-label">Downloads</div>
            </div>
        </div>

        <div class="detail-screenshots">
            <div class="screenshots-title">
                <i class="fas fa-images"></i>
                Screenshots
            </div>
            <div class="screenshots-grid">
                ${app.screenshots.map((src, index) => 
                    `<div class="screenshot-item" style="background-image: url('${src}')"></div>`
                ).join('')}
            </div>
        </div>

        <div class="detail-features">
            <div class="features-title">
                <i class="fas fa-crown"></i>
                MOD Features
            </div>
            <ul class="features-list">
                ${app.features.map(feature => `
                    <li class="feature-item">
                        <div class="feature-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="feature-text">${feature}</div>
                    </li>
                `).join('')}
            </ul>
        </div>

        <!-- NEW DESCRIPTION SECTION -->
        <div class="detail-description">
            <div class="description-title">
                <i class="fas fa-info-circle"></i>
                App Description
            </div>
            <div class="description-text">${app.description}</div>
        </div>

        <div style="text-align: center; padding: 20px; font-size: 12px; color: rgba(255,255,255,0.6);">
            <strong>Installation Guide:</strong><br>
            1. Download APK • 2. Enable Unknown Sources • 3. Install & Play
        </div>
    `;
}

// Go To Download Page
function goToDownloadPage(appId) {
    const app = appsData.find(a => a.id == appId);
    if (!app) return;

    currentAppId = appId;
    const downloadContent = document.getElementById('downloadContent');
    downloadContent.innerHTML = createDownloadPage(app);

    switchPage('download');
    historyStack.push('download');
}

// Create Download Page
function createDownloadPage(app) {
    return `
        <div class="download-back" onclick="goBack()">
            <i class="fas fa-arrow-left"></i>
            App Overview
        </div>

        <div class="download-hero">
            <div class="download-app-title">${app.title}</div>
            <div class="download-app-version">${app.version} MOD</div>
        </div>

        <div class="download-info-grid">
            <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">${app.title}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Version</div>
                <div class="info-value">${app.version}</div>
            </div>
            <div class="info-item">
                <div class="info-label">File Format</div>
                <div class="info-value">${app.fileFormat}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Minimum Requirements</div>
                <div class="info-value">${app.minAndroid}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Platform Details</div>
                <div class="info-value">ARORO MODS Store</div>
            </div>
            <div class="info-item">
                <div class="info-label">File Size</div>
                <div class="info-value">${app.size}</div>
            </div>
        </div>

        <button class="final-download-btn" onclick="startFinalDownload()">
            <i class="fas fa-download"></i> Download Now
        </button>

        <div class="safety-notice">
            ✅ <strong>100% Safe Download</strong><br>
            Verified by ARORO MODS Antivirus • No Malware Detected
            <div class="safety-checks">
                <div class="safety-item"><i class="fas fa-shield-alt"></i> Virus Free</div>
                <div class="safety-item"><i class="fas fa-lock"></i> Secure</div>
                <div class="safety-item"><i class="fas fa-check-circle"></i> Working</div>
            </div>
        </div>
    `;
}

// Improved Back Navigation
function goBack() {
    if (historyStack.length > 1) {
        historyStack.pop();
        const previousPage = historyStack[historyStack.length - 1];
        switchPage(previousPage);
    } else {
        switchPage('apps');
    }
}

// Start Final Download
function startFinalDownload() {
    const finalBtn = document.querySelector('.final-download-btn');
    finalBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Starting Download...';
    finalBtn.disabled = true;

    setTimeout(() => {
        const app = appsData.find(a => a.id == currentAppId);
        if (app && app.downloadLink) {
            window.open(app.downloadLink, '_blank');
            finalBtn.innerHTML = '<i class="fas fa-check"></i> Download Started!';
            finalBtn.style.background = 'linear-gradient(45deg, #00ff88, #00cc66)';
        }
    }, 1200);
}

// Switch Pages with Animation
function switchPage(pageName) {
    document.body.classList.add('page-transition');
    
    Object.values(pages).forEach(page => {
        if (page.classList.contains('active')) {
            page.classList.remove('active');
            page.classList.add('page-exit');
        }
    });
    
    setTimeout(() => {
        Object.values(pages).forEach(page => {
            page.classList.remove('active', 'page-exit', 'page-enter');
        });
        pages[pageName].classList.add('active', 'page-enter');
        currentPage = pageName;
        document.body.classList.remove('page-transition');
        window.scrollTo(0, 0);
    }, 200);
}

// Handle Mobile Back Button
function handleInitialBackButton() {
    window.addEventListener('popstate', function(event) {
        event.preventDefault();
        if (historyStack.length > 1) {
            goBack();
        }
        history.pushState(null, null, null);
    });
    
    history.pushState(null, null, null);
}

// Search Function
function setupSearch() {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (currentPage === 'apps') {
            currentApps = appsData.filter(app => 
                app.title.toLowerCase().includes(query) ||
                app.description.toLowerCase().includes(query) ||
                app.version.toLowerCase().includes(query)
            );
            loadAppsGrid();
        }
    });
}

// Setup Event Listeners
function setupEventListeners() {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.style.display = "none";
        }
    });

    setupSearch();

    document.getElementById('appGrid').addEventListener('click', (e) => {
        const appCard = e.target.closest('.app-card');
        if (appCard && currentPage === 'apps') {
            const appId = parseInt(appCard.dataset.appId);
            openAppDetail(appId);
        }
    });
}

// Initialize app
init();
