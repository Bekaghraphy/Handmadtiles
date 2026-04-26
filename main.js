const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const state = {
  tileColor: "#d8b97a",
  pattern: "arc",
  layout: "grid",
  theme: document.documentElement.dataset.theme || "dark",
  lang: document.documentElement.lang || "en",
  pointer: { x: 0, y: 0 },
};

const translations = {
  en: {
    title: "The Concrete Cube | Handmade Cement Tiles",
    brand: "The Concrete Cube",
    navCollection: "Collection",
    navCustomize: "Customize",
    navProcess: "Process",
    navContact: "Contact",
    themeDark: "Dark",
    themeLight: "Light",
    heroEyebrow: "Handmade encaustic cement tiles",
    heroTitle: "Crafted by Hand. Designed for Legacy.",
    heroBody: "Over 100 heritage and contemporary patterns, 60+ colors, and architectural customization in color, size, and layout.",
    heroCta: "Explore Collection",
    heritageEyebrow: "Heritage process",
    heritageTitle: "Material memory, made one tile at a time.",
    heritageBody: "Each tile is individually formed through a traditional cement process: colored cement is poured into handmade pattern molds, pressed, cured, and finished for decades of use.",
    metricPatterns: "patterns",
    metricColors: "colors",
    metricLife: "year life",
    collectionEyebrow: "Interactive collection",
    collectionTitle: "Architectural families, built for variation.",
    catRunning: "Running",
    catGeometric: "Geometric",
    catMotif: "Motif",
    catHexagon: "Hexagon",
    catAbstratchi: "Abstratchi",
    customEyebrow: "Customization experience",
    customTitle: "Color, pattern, scale, and rhythm without compromise.",
    controlPattern: "Pattern",
    patternArc: "Arc",
    patternCross: "Cross",
    patternDiamond: "Diamond",
    controlLayout: "Layout",
    layoutGrid: "Grid",
    layoutRotated: "Rotated",
    layoutRepeated: "Repeated",
    controlPalette: "Palette",
    materialEyebrow: "Grooved / 3D texture",
    materialTitle: "Depth that changes with light.",
    materialBody: "Grooved tiles bring shadow, relief, and hand-finished texture into walls, facades, and architectural details.",
    appHospitality: "Hospitality",
    appHospitalityTitle: "Atmosphere with permanence.",
    appResidential: "Residential",
    appResidentialTitle: "Rooms with quiet character.",
    appCommercial: "Commercial",
    appCommercialTitle: "Pattern systems for daily use.",
    processEyebrow: "Handmade story",
    processTitle: "Four gestures. One enduring surface.",
    stepMold: "Mold filling",
    stepMoldBody: "Colored cement is placed by hand into the pattern mold.",
    stepPress: "Pressing",
    stepPressBody: "Layered cement is compressed for density and strength.",
    stepCure: "Curing",
    stepCureBody: "The tile rests slowly, gaining character and resilience.",
    stepFinish: "Finishing",
    stepFinishBody: "Edges, surface, and shade are checked before selection.",
    colorsEyebrow: "Color system",
    colorsTitle: "Sixty-plus tones, tuned for architectural palettes.",
    ctaEyebrow: "Private design support",
    ctaTitle: "Design Your Space",
    ctaButton: "Start a Consultation",
    footerBody: "Handmade cement tiles for architects, designers, developers, and premium residences.",
    modalEyebrow: "Collection preview",
    modalBody: "Customizable in color, size, pattern, and installation rhythm.",
  },
  ar: {
    title: "ذا كونكريت كيوب | بلاط إسمنتي يدوي",
    brand: "ذا كونكريت كيوب",
    navCollection: "المجموعة",
    navCustomize: "التخصيص",
    navProcess: "العملية",
    navContact: "تواصل",
    themeDark: "داكن",
    themeLight: "فاتح",
    heroEyebrow: "بلاط إسمنتي إنكوستيك مصنوع يدويا",
    heroTitle: "صنع باليد. صمم ليبقى.",
    heroBody: "أكثر من 100 نقش تراثي ومعاصر، وأكثر من 60 لونا، مع تخصيص معماري في اللون والمقاس والتخطيط.",
    heroCta: "استكشف المجموعة",
    heritageEyebrow: "حرفة متوارثة",
    heritageTitle: "ذاكرة مادية، تصنع بلاطة بعد بلاطة.",
    heritageBody: "تتشكل كل بلاطة على حدة بعملية إسمنتية تقليدية: يسكب الإسمنت الملون داخل قوالب النقوش، ثم يضغط ويعالج وينهى ليعيش لعقود.",
    metricPatterns: "نقش",
    metricColors: "لون",
    metricLife: "عاما من العمر",
    collectionEyebrow: "مجموعة تفاعلية",
    collectionTitle: "عائلات معمارية مصممة للتنوع.",
    catRunning: "الممتدة",
    catGeometric: "الهندسية",
    catMotif: "الزخارف",
    catHexagon: "السداسية",
    catAbstratchi: "أبستراتشي",
    customEyebrow: "تجربة التخصيص",
    customTitle: "لون ونقش ومقياس وإيقاع بلا تنازل.",
    controlPattern: "النقش",
    patternArc: "قوس",
    patternCross: "متقاطع",
    patternDiamond: "ماسي",
    controlLayout: "التخطيط",
    layoutGrid: "شبكة",
    layoutRotated: "مدار",
    layoutRepeated: "متكرر",
    controlPalette: "الألوان",
    materialEyebrow: "ملمس محزز / ثلاثي الأبعاد",
    materialTitle: "عمق يتغير مع الضوء.",
    materialBody: "تمنح البلاطات المحززة الظل والبروز والملمس اليدوي للجدران والواجهات والتفاصيل المعمارية.",
    appHospitality: "الضيافة",
    appHospitalityTitle: "أجواء ثابتة لا تفقد حضورها.",
    appResidential: "السكن",
    appResidentialTitle: "مساحات بهدوء وشخصية.",
    appCommercial: "التجاري",
    appCommercialTitle: "أنظمة نقوش للاستخدام اليومي.",
    processEyebrow: "قصة الصناعة اليدوية",
    processTitle: "أربع خطوات. سطح واحد يدوم.",
    stepMold: "ملء القالب",
    stepMoldBody: "يوضع الإسمنت الملون يدويا داخل قالب النقش.",
    stepPress: "الضغط",
    stepPressBody: "تضغط طبقات الإسمنت لتكتسب الكثافة والقوة.",
    stepCure: "المعالجة",
    stepCureBody: "تستريح البلاطة ببطء لتكتسب الشخصية والمتانة.",
    stepFinish: "التشطيب",
    stepFinishBody: "تفحص الحواف والسطح والدرجة اللونية قبل الاختيار.",
    colorsEyebrow: "نظام الألوان",
    colorsTitle: "أكثر من ستين درجة متناغمة مع اللوحات المعمارية.",
    ctaEyebrow: "دعم تصميم خاص",
    ctaTitle: "صمم مساحتك",
    ctaButton: "ابدأ الاستشارة",
    footerBody: "بلاط إسمنتي يدوي للمعماريين والمصممين والمطورين والمنازل الراقية.",
    modalEyebrow: "معاينة المجموعة",
    modalBody: "قابل للتخصيص في اللون والمقاس والنقش وإيقاع التركيب.",
  },
};

function applyPreferences() {
  const dictionary = translations[state.lang] || translations.en;
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.title = dictionary.title;

  qsa("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  const themeToggle = qs(".theme-toggle");
  const themeLabel = qs(".theme-label");
  const languageLabel = qs("[data-lang-label]");
  if (themeToggle && themeLabel) {
    themeToggle.setAttribute("aria-pressed", String(state.theme === "light"));
    themeLabel.textContent = state.theme === "light" ? dictionary.themeLight : dictionary.themeDark;
  }
  if (languageLabel) {
    languageLabel.textContent = state.lang === "ar" ? "AR" : "EN";
    qs(".language-toggle")?.setAttribute("aria-pressed", String(state.lang === "ar"));
  }
}

function initPreferenceControls() {
  qs(".theme-toggle")?.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("tcc-theme", state.theme);
    applyPreferences();
  });

  qs(".language-toggle")?.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "ar" : "en";
    localStorage.setItem("tcc-lang", state.lang);
    applyPreferences();
  });

  applyPreferences();
}

function updateCursorLight() {
  const light = qs(".cursor-light");
  window.addEventListener("pointermove", (event) => {
    state.pointer.x = event.clientX / window.innerWidth - 0.5;
    state.pointer.y = event.clientY / window.innerHeight - 0.5;
    light.style.left = `${event.clientX}px`;
    light.style.top = `${event.clientY}px`;
  });
}

function initReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
  );
  qsa(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 5, 4) * 80}ms`;
    observer.observe(element);
  });
}

function initCollectionModal() {
  const modal = qs(".preview-modal");
  const modalImage = qs("img", modal);
  const modalTitle = qs("h2", modal);
  const close = qs(".modal-close", modal);

  qsa(".collection-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      modalImage.src = tile.dataset.image;
      const label = state.lang === "ar" ? tile.dataset.previewAr : tile.dataset.preview;
      modalImage.alt = `${label} handmade cement tile preview`;
      modalTitle.textContent = label;
      modal.showModal();
    });
  });

  close.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

function initConfigurator() {
  const preview = qs(".tile-preview");
  const largeTile = qs(".large-tile");

  function apply() {
    document.documentElement.style.setProperty("--tile-a", state.tileColor);
    preview.dataset.pattern = state.pattern;
    preview.dataset.layout = state.layout;
    largeTile.dataset.pattern = state.pattern;
  }

  qsa("[data-pattern]").forEach((button) => {
    if (!button.closest(".segmented")) return;
    button.addEventListener("click", () => {
      qsa("[data-pattern]", button.parentElement).forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      state.pattern = button.dataset.pattern;
      apply();
    });
  });

  qsa("[data-layout]").forEach((button) => {
    button.addEventListener("click", () => {
      qsa("[data-layout]", button.parentElement).forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      state.layout = button.dataset.layout;
      apply();
    });
  });

  qsa("[data-color]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tileColor = button.dataset.color;
      apply();
    });
  });

  apply();
}

function initColorSystem() {
  const colors = [
    "#ece6d8", "#d8b97a", "#cba45f", "#a9773f", "#6f8c83", "#456b5d",
    "#2f5f75", "#263f57", "#9eb4b9", "#657579", "#a64f42", "#7f352f",
    "#c46a47", "#dab092", "#292826", "#44403a", "#7a776e", "#b9b2a1",
    "#efe1c4", "#b7a06c", "#a8b17a", "#5e7752", "#8e9f92", "#d0d3c4",
    "#4f4150", "#77586e", "#b88b94", "#dec5be", "#946b4f", "#5a3c31",
    "#7991a8", "#394a5d", "#b7c8d0", "#e7d7a8", "#ccbb83", "#f1eee7",
    "#a3a49f", "#62635f", "#33332f", "#d9c7bc", "#ba806c", "#7c5f51",
    "#aac0a9", "#74856b", "#3f4b3d", "#d4d1bf", "#bfa98e", "#8a7664",
    "#e3b1a6", "#be6f64", "#783d3b", "#c6d3c8", "#98b3a7", "#52796f",
    "#d6c88f", "#b19750", "#755f32", "#e9e2d0", "#9da6a0", "#20201e",
  ];
  const cloud = qs(".palette-cloud");
  cloud.innerHTML = "";
  colors.forEach((color, index) => {
    const button = document.createElement("button");
    button.style.setProperty("--swatch", color);
    button.dataset.color = color;
    button.setAttribute("aria-label", `Palette color ${index + 1}`);
    button.addEventListener("mouseenter", () => {
      state.tileColor = color;
      document.documentElement.style.setProperty("--tile-a", color);
    });
    button.addEventListener("click", () => {
      state.tileColor = color;
      document.documentElement.style.setProperty("--tile-a", color);
    });
    cloud.append(button);
  });
}

async function initMotionLibraries() {
  try {
    const [{ gsap }, { ScrollTrigger }, LenisModule] = await Promise.all([
      import("https://esm.sh/gsap@3.12.5"),
      import("https://esm.sh/gsap@3.12.5/ScrollTrigger"),
      import("https://esm.sh/lenis@1.1.14"),
    ]);
    gsap.registerPlugin(ScrollTrigger);
    const Lenis = LenisModule.default || LenisModule.Lenis;
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.82 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    qsa(".application-panel img").forEach((image) => {
      gsap.to(image, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: image.closest(".application-panel"),
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    qsa(".process-step").forEach((step) => {
      gsap.fromTo(
        step,
        { "--shine": 0 },
        {
          "--shine": 1,
          scrollTrigger: {
            trigger: step,
            start: "top 72%",
            end: "bottom 42%",
            scrub: true,
          },
        },
      );
    });

    return { gsap, ScrollTrigger };
  } catch (error) {
    document.documentElement.classList.add("motion-fallback");
    return null;
  }
}

function makePatternCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#d8d0c2";
  ctx.fillRect(0, 0, 1024, 1024);

  ctx.globalAlpha = 0.18;
  for (let i = 0; i < 5000; i += 1) {
    const light = 130 + Math.random() * 60;
    ctx.fillStyle = `rgb(${light},${light - 5},${light - 16})`;
    ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 1.4, 1.4);
  }
  ctx.globalAlpha = 1;

  ctx.strokeStyle = "#1f2d2a";
  ctx.lineWidth = 38;
  ctx.beginPath();
  ctx.arc(256, 256, 160, 0, Math.PI * 2);
  ctx.arc(768, 256, 160, 0, Math.PI * 2);
  ctx.arc(256, 768, 160, 0, Math.PI * 2);
  ctx.arc(768, 768, 160, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#d8b97a";
  for (let y = 0; y < 2; y += 1) {
    for (let x = 0; x < 2; x += 1) {
      const ox = x * 512;
      const oy = y * 512;
      ctx.beginPath();
      ctx.moveTo(ox + 256, oy + 56);
      ctx.lineTo(ox + 456, oy + 256);
      ctx.lineTo(ox + 256, oy + 456);
      ctx.lineTo(ox + 56, oy + 256);
      ctx.closePath();
      ctx.fill();
    }
  }
  return canvas;
}

async function initThreeScenes(motion) {
  let THREE;
  try {
    THREE = await import("https://esm.sh/three@0.164.1");
  } catch (error) {
    document.documentElement.classList.add("three-fallback");
    return;
  }

  initHeroScene(THREE);
  initMaterialScene(THREE, motion);
}

function initHeroScene(THREE) {
  const canvas = qs("#hero-canvas");
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.15, 6.7);

  const group = new THREE.Group();
  scene.add(group);

  const texture = new THREE.CanvasTexture(makePatternCanvas());
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  const tileMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.78,
    metalness: 0.02,
    bumpMap: texture,
    bumpScale: 0.018,
  });
  const sideMaterial = new THREE.MeshStandardMaterial({
    color: "#a99c86",
    roughness: 0.94,
    metalness: 0,
  });
  const tile = new THREE.Mesh(new THREE.BoxGeometry(2.7, 2.7, 0.22, 8, 8, 2), [
    sideMaterial,
    sideMaterial,
    sideMaterial,
    sideMaterial,
    tileMaterial,
    sideMaterial,
  ]);
  tile.rotation.set(-0.24, -0.56, 0.16);
  group.add(tile);

  const rim = new THREE.Mesh(
    new THREE.BoxGeometry(2.84, 2.84, 0.08),
    new THREE.MeshBasicMaterial({ color: "#d8b97a", wireframe: true, transparent: true, opacity: 0.24 }),
  );
  rim.rotation.copy(tile.rotation);
  group.add(rim);

  const dustGeometry = new THREE.BufferGeometry();
  const dust = new Float32Array(900 * 3);
  for (let i = 0; i < dust.length; i += 3) {
    dust[i] = (Math.random() - 0.5) * 9;
    dust[i + 1] = (Math.random() - 0.5) * 6;
    dust[i + 2] = (Math.random() - 0.5) * 6;
  }
  dustGeometry.setAttribute("position", new THREE.BufferAttribute(dust, 3));
  const particles = new THREE.Points(
    dustGeometry,
    new THREE.PointsMaterial({ color: "#d8b97a", size: 0.012, transparent: true, opacity: 0.42 }),
  );
  scene.add(particles);

  scene.add(new THREE.AmbientLight("#cfc2a8", 0.8));
  const key = new THREE.DirectionalLight("#fff3d2", 2.8);
  key.position.set(2.4, 2.2, 3.2);
  scene.add(key);
  const fill = new THREE.PointLight("#d8b97a", 2.2, 8);
  fill.position.set(-2.8, -1.8, 2.8);
  scene.add(fill);

  function resize() {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  function frame(time) {
    const t = time * 0.001;
    const mobile = window.innerWidth < 700;
    const baseX = mobile ? 0.95 : 1.5;
    const baseY = mobile ? -0.35 : 0;
    const scale = mobile ? 0.72 : 1;
    group.scale.setScalar(scale);
    tile.rotation.y = -0.56 + Math.sin(t * 0.45) * 0.18 + state.pointer.x * 0.22;
    tile.rotation.x = -0.24 + Math.cos(t * 0.38) * 0.08 - state.pointer.y * 0.14;
    rim.rotation.copy(tile.rotation);
    group.position.x = baseX + state.pointer.x * 0.45;
    group.position.y = baseY - state.pointer.y * 0.24;
    particles.rotation.y = t * 0.025;
    particles.position.y = Math.sin(t * 0.5) * 0.05;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(frame);
}

function initMaterialScene(THREE, motion) {
  const canvas = qs("#material-canvas");
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0.7, 1.1, 6);

  const group = new THREE.Group();
  group.position.set(-1.2, -0.25, 0);
  group.rotation.set(-0.22, -0.44, 0.08);
  scene.add(group);

  const baseMat = new THREE.MeshStandardMaterial({
    color: "#bfb5a3",
    roughness: 0.88,
    metalness: 0,
  });
  const shadowMat = new THREE.MeshStandardMaterial({
    color: "#776d60",
    roughness: 0.95,
  });

  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 5; col += 1) {
      const tile = new THREE.Mesh(new THREE.BoxGeometry(1.04, 1.04, 0.13), baseMat);
      tile.position.set((col - 2) * 1.08, (row - 1) * 1.08, 0);
      group.add(tile);
      for (let i = 0; i < 6; i += 1) {
        const groove = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.88, 0.06), shadowMat);
        groove.position.set(tile.position.x - 0.32 + i * 0.13, tile.position.y, 0.095);
        groove.rotation.z = 0.42;
        group.add(groove);
      }
    }
  }

  scene.add(new THREE.AmbientLight("#d9d0bc", 0.65));
  const key = new THREE.DirectionalLight("#fff1ce", 3.4);
  key.position.set(3, 4, 4);
  scene.add(key);
  const gold = new THREE.PointLight("#d8b97a", 2.5, 7);
  gold.position.set(-3.2, -1, 2);
  scene.add(gold);

  function resize() {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  function frame(time) {
    const t = time * 0.001;
    group.rotation.y = -0.44 + Math.sin(t * 0.24) * 0.14 + state.pointer.x * 0.08;
    group.rotation.x = -0.22 + Math.sin(t * 0.31) * 0.04;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  if (motion?.gsap) {
    motion.gsap.to(camera.position, {
      z: 4.2,
      y: 0.28,
      ease: "none",
      scrollTrigger: {
        trigger: "#material",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(frame);
}

async function boot() {
  initPreferenceControls();
  updateCursorLight();
  initReveals();
  initCollectionModal();
  initConfigurator();
  initColorSystem();
  const motion = await initMotionLibraries();
  await initThreeScenes(motion);
}

boot();
