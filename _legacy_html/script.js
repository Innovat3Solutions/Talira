document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Simple toggle for mobile menu (requires CSS updates to work fully)
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
            
            navActions.style.display = navActions.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Hero form submission prevention
    const heroForm = document.querySelector('.hero-form');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
        });
    }

    // Savings calculator slider interactivity
    const volumeSlider = document.querySelector('.slider');
    const volumeValue = document.querySelector('.slider-value');
    const savingsAmount = document.querySelector('.savings-result .amount');

    if (volumeSlider && volumeValue && savingsAmount) {
        volumeSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value).toLocaleString();
            volumeValue.textContent = `${val} month`;
            
            // Dummy calculation maxing around $12k+ for 10k calls
            const savings = Math.round((parseInt(e.target.value) / 1000) * 1.2); 
            savingsAmount.textContent = `${savings}k`;
        });
    }

    // Tab interactivity for average duration
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Features filter toggle
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            if (answer) {
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                } else {
                    answer.style.display = 'block';
                    icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
                }
            }
        });
    });

    // ========== INTERACTIVE GLOBE ==========
    const globeCanvas = document.getElementById('interactiveGlobe');
    if (globeCanvas) {
        initGlobe(globeCanvas);
    }

    // ========== ORBITAL TIMELINE ANIMATION ==========
    const orbitalTimeline = document.getElementById('orbitalTimeline');
    if (orbitalTimeline) {
        initOrbitalTimeline(orbitalTimeline);
    }

    // ========== BENEFITS CHART ANIMATION ==========
    const benefitsSection = document.querySelector('.benefits-section');
    if (benefitsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.benefit-card').forEach(card => {
            observer.observe(card);
        });
    }
});

// ========== GLOBE IMPLEMENTATION ==========
function initGlobe(canvas) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Set canvas size
    const container = canvas.parentElement;
    const size = Math.min(container.offsetWidth, container.offsetHeight);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    // Globe state
    let rotY = 0.4;
    let rotX = 0.3;
    let autoRotateSpeed = 0.002;
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let time = 0;

    // Generate dots using Fibonacci sphere
    const dots = [];
    const numDots = 800;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numDots; i++) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
        dots.push({
            x: Math.cos(theta) * Math.sin(phi),
            y: Math.cos(phi),
            z: Math.sin(theta) * Math.sin(phi)
        });
    }

    // City markers with connections
    const markers = [
        { lat: 37.78, lng: -122.42, label: 'San Francisco' },
        { lat: 51.51, lng: -0.13, label: 'London' },
        { lat: 35.68, lng: 139.69, label: 'Tokyo' },
        { lat: -33.87, lng: 151.21, label: 'Sydney' },
        { lat: 1.35, lng: 103.82, label: 'Singapore' },
        { lat: 28.61, lng: 77.21, label: 'Delhi' }
    ];

    const connections = [
        [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [1, 5]
    ];

    // Convert lat/lng to 3D coordinates
    function latLngToXYZ(lat, lng, radius) {
        const phi = ((90 - lat) * Math.PI) / 180;
        const theta = ((lng + 180) * Math.PI) / 180;
        return {
            x: -(radius * Math.sin(phi) * Math.cos(theta)),
            y: radius * Math.cos(phi),
            z: radius * Math.sin(phi) * Math.sin(theta)
        };
    }

    // Rotation functions
    function rotateY3D(x, y, z, angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return { x: x * cos + z * sin, y: y, z: -x * sin + z * cos };
    }

    function rotateX3D(x, y, z, angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return { x: x, y: y * cos - z * sin, z: y * sin + z * cos };
    }

    // Project to 2D
    function project(x, y, z, cx, cy, fov) {
        const scale = fov / (fov + z);
        return { x: x * scale + cx, y: y * scale + cy, z: z };
    }

    // Draw function
    function draw() {
        const w = size;
        const h = size;
        const cx = w / 2;
        const cy = h / 2;
        const radius = Math.min(w, h) * 0.35;
        const fov = 500;

        // Auto rotate
        if (!isDragging) {
            rotY += autoRotateSpeed;
        }
        time += 0.015;

        ctx.clearRect(0, 0, w, h);

        // Outer glow
        const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.3);
        glowGrad.addColorStop(0, 'rgba(255, 107, 53, 0.05)');
        glowGrad.addColorStop(1, 'rgba(255, 107, 53, 0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, w, h);

        // Globe outline
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 107, 53, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw dots
        dots.forEach(dot => {
            let { x, y, z } = dot;
            x *= radius;
            y *= radius;
            z *= radius;

            let rotated = rotateX3D(x, y, z, rotX);
            rotated = rotateY3D(rotated.x, rotated.y, rotated.z, rotY);

            if (rotated.z > 0) return; // Back-face cull

            const projected = project(rotated.x, rotated.y, rotated.z, cx, cy, fov);
            const depthAlpha = Math.max(0.1, 1 - (rotated.z + radius) / (2 * radius));
            const dotSize = 1 + depthAlpha * 0.5;

            ctx.beginPath();
            ctx.arc(projected.x, projected.y, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 107, 53, ${depthAlpha * 0.6})`;
            ctx.fill();
        });

        // Draw connections
        connections.forEach(([i, j]) => {
            const m1 = markers[i];
            const m2 = markers[j];

            let p1 = latLngToXYZ(m1.lat, m1.lng, radius);
            let p2 = latLngToXYZ(m2.lat, m2.lng, radius);

            p1 = rotateX3D(p1.x, p1.y, p1.z, rotX);
            p1 = rotateY3D(p1.x, p1.y, p1.z, rotY);
            p2 = rotateX3D(p2.x, p2.y, p2.z, rotX);
            p2 = rotateY3D(p2.x, p2.y, p2.z, rotY);

            if (p1.z > radius * 0.3 && p2.z > radius * 0.3) return;

            const s1 = project(p1.x, p1.y, p1.z, cx, cy, fov);
            const s2 = project(p2.x, p2.y, p2.z, cx, cy, fov);

            // Arc midpoint
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const midZ = (p1.z + p2.z) / 2;
            const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ);
            const arcHeight = radius * 1.2;
            const elevX = (midX / midLen) * arcHeight;
            const elevY = (midY / midLen) * arcHeight;
            const elevZ = (midZ / midLen) * arcHeight;
            const sc = project(elevX, elevY, elevZ, cx, cy, fov);

            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.quadraticCurveTo(sc.x, sc.y, s2.x, s2.y);
            ctx.strokeStyle = 'rgba(255, 107, 53, 0.4)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Traveling dot
            const t = (Math.sin(time * 1.5 + i) + 1) / 2;
            const tx = (1 - t) * (1 - t) * s1.x + 2 * (1 - t) * t * sc.x + t * t * s2.x;
            const ty = (1 - t) * (1 - t) * s1.y + 2 * (1 - t) * t * sc.y + t * t * s2.y;

            ctx.beginPath();
            ctx.arc(tx, ty, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 107, 53, 0.8)';
            ctx.fill();
        });

        // Draw markers
        markers.forEach((marker, idx) => {
            let p = latLngToXYZ(marker.lat, marker.lng, radius);
            p = rotateX3D(p.x, p.y, p.z, rotX);
            p = rotateY3D(p.x, p.y, p.z, rotY);

            if (p.z > radius * 0.1) return;

            const s = project(p.x, p.y, p.z, cx, cy, fov);

            // Pulse ring
            const pulse = Math.sin(time * 2 + idx) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(s.x, s.y, 3 + pulse * 4, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255, 107, 53, ${0.2 + pulse * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Core dot
            ctx.beginPath();
            ctx.arc(s.x, s.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#ff6b35';
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }

    // Mouse/touch events
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        rotY += dx * 0.005;
        rotX = Math.max(-1, Math.min(1, rotX + dy * 0.005));
        lastX = e.clientX;
        lastY = e.clientY;
    });

    canvas.addEventListener('mouseup', () => { isDragging = false; });
    canvas.addEventListener('mouseleave', () => { isDragging = false; });

    // Touch events
    canvas.addEventListener('touchstart', (e) => {
        isDragging = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
    });

    canvas.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - lastX;
        const dy = e.touches[0].clientY - lastY;
        rotY += dx * 0.005;
        rotX = Math.max(-1, Math.min(1, rotX + dy * 0.005));
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
    });

    canvas.addEventListener('touchend', () => { isDragging = false; });

    // Start animation
    draw();
}

// ========== ORBITAL TIMELINE IMPLEMENTATION ==========
function initOrbitalTimeline(container) {
    const nodes = container.querySelectorAll('.orbital-node');
    let currentAngle = 0;
    let autoRotate = true;
    let animationId;

    // Auto rotation
    function animate() {
        if (autoRotate) {
            currentAngle += 0.1;
            nodes.forEach((node, index) => {
                const baseAngle = (index / nodes.length) * 360;
                const newAngle = baseAngle + currentAngle;
                node.style.setProperty('--angle', `${newAngle}deg`);
            });
        }
        animationId = requestAnimationFrame(animate);
    }

    // Pause on hover
    container.addEventListener('mouseenter', () => {
        autoRotate = false;
    });

    container.addEventListener('mouseleave', () => {
        autoRotate = true;
    });

    // Node click handling
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            autoRotate = false;

            // Remove active from all
            nodes.forEach(n => n.classList.remove('active'));

            // Add active to clicked
            node.classList.add('active');
        });
    });

    // Start animation
    animate();
}

// ========== BENTO GLOBE (smaller version) ==========
const bentoGlobeCanvas = document.getElementById('globe');
if (bentoGlobeCanvas) {
    // Simple spinning globe for bento grid
    const ctx = bentoGlobeCanvas.getContext('2d');
    const container = bentoGlobeCanvas.parentElement;

    function setupBentoGlobe() {
        const size = Math.min(container.offsetWidth, 180);
        bentoGlobeCanvas.width = size * 2;
        bentoGlobeCanvas.height = size * 2;
        bentoGlobeCanvas.style.width = size + 'px';
        bentoGlobeCanvas.style.height = size + 'px';
        ctx.scale(2, 2);

        let angle = 0;
        const radius = size * 0.4;
        const cx = size / 2;
        const cy = size / 2;

        function drawBentoGlobe() {
            ctx.clearRect(0, 0, size, size);

            // Glow
            const glow = ctx.createRadialGradient(cx, cy, radius * 0.5, cx, cy, radius * 1.2);
            glow.addColorStop(0, 'rgba(255, 107, 53, 0.1)');
            glow.addColorStop(1, 'rgba(255, 107, 53, 0)');
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, size, size);

            // Globe
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 107, 53, 0.05)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 107, 53, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Latitude lines
            for (let i = -2; i <= 2; i++) {
                const y = cy + (i * radius * 0.3);
                const xOffset = Math.sqrt(Math.max(0, radius * radius - (y - cy) * (y - cy)));
                ctx.beginPath();
                ctx.ellipse(cx, y, xOffset, xOffset * 0.2, 0, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 107, 53, 0.15)';
                ctx.stroke();
            }

            // Rotating longitude line
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, radius * 0.3, radius, 0, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 107, 53, 0.3)';
            ctx.stroke();
            ctx.restore();

            angle += 0.01;
            requestAnimationFrame(drawBentoGlobe);
        }

        drawBentoGlobe();
    }

    // Wait for container to have dimensions
    setTimeout(setupBentoGlobe, 100);
}
