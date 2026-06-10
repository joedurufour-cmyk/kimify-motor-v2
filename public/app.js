const KIMIFY_DATASET = {
  characters: [],

  modes: {
    anime: { 
      label: "Anime", 
      style: "cel-shaded, anime screencap, 2D illustration, vibrant flat colors, sharp lineart, anime shading, key visual by Kyoto Animation, ufotable, MAPPA, studio ghibli style, anime key frame, clean painterly, anime art style, sakuga quality, anime production still, anime BD cover art" 
    },
    shonen: { 
      label: "Shonen", 
      style: "dynamic action pose, impact frame, speed lines, motion blur, intense energy aura, battle atmosphere, exaggerated perspective, shonen jump key visual, tournament arc finale, anime fight scene, dramatic foreshortening, action manga panel, anime climax frame, battle damage sparks, energy beams, anime power up sequence" 
    },
    manga: { 
      label: "Manga", 
      style: "black and white manga panel, screentone texture, manga hatching, manga speed lines, manga panel layout, manga splash page, double spread, manga key visual, inked manga, manga toning, manga screentone dots, manga crosshatching, manga parallel lines, manga stippling, manga illustration" 
    },
    photo: { 
      label: "Photo", 
      style: "anime photorealistic, 3D anime render, octane render, subsurface scattering, realistic skin shader, cinematic anime, volumetric lighting, anime live action hybrid, photorealistic anime character, realistic anime proportions, anime character in real world, hyperrealistic anime, detailed anime 3D, anime CGI render, realistic anime skin, anime movie still" 
    },
    neural: { 
      label: "Neural", 
      style: "neural anime hyperrealism, 8K anime wallpaper, impossible anime detail, photobashed anime, ultra detailed lineart, IMAX anime frame, anime concept art by WLOP, Ilya Kuvshinov, Rossdraws, 8K anime illustration, ultra HD anime, neural network anime, AI enhanced anime, hyperdetailed anime, anime masterpiece, award winning anime art, museum quality anime" 
    }
  },

  muscleLevels: {
    1: { label: "Soft Athletic", desc: "soft athletic, anime heroine proportions, gentle curves, modest muscle definition, slender anime build, elegant feminine form, anime graceful physique" },
    2: { label: "Defined", desc: "fit anime fighter, visible abs outline, toned arms, anime action hero build, athletic anime physique, warrior maiden build, defined anime muscles" },
    3: { label: "Ultra", desc: "ultra muscular anime, 6-pack defined, broad shoulders, powerful anime physique, Battle Angel Alita proportions, anime warrior build, strong anime heroine" },
    4: { label: "Extreme", desc: "extreme anime muscle, 8-pack visible, vascular arms, bodybuilder-anime hybrid, JoJo Bizarre Adventure proportions, anime muscle goddess, powerful anime body" },
    5: { label: "Brutal", desc: "shredded anime physique, every muscle fiber, maximum definition, Fist of the North Star proportions, ultimate anime power, anime muscle peak, divine anime physique" }
  },

  poses: {
    standing: "heroic standing pose, confident anime stance, T-pose variant, centered composition, anime character portrait, regal standing pose, anime hero pose, symmetrical anime pose",
    crouching: "dynamic crouch, ready to pounce, predatory stance, low angle shot, anime crouching pose, stealth ready position, anime action crouch, dynamic foreshortening",
    walking: "striding forward, wind in hair, determined walk cycle, anime key frame, walking towards camera, anime confident stride, dramatic walking pose, anime entrance scene",
    power: "powering up, energy charging, aura flaring, transformation sequence, anime power stance, divine aura, super saiyan energy, anime ultimate power pose, glowing aura, anime power up",
    action: "mid-attack, dynamic motion, fighting pose, impact frame, anime battle scene, action pose frozen in time, anime combat stance, dynamic action freeze frame, anime fight choreography"
  },

  outfits: {
    classic: "classic anime costume, faithful manga adaptation, iconic superhero suit, anime accurate colors, anime hero costume, manga accurate design, anime faithful outfit, anime character design",
    casual: "modern casual anime style, streetwear inspired, contemporary fashion, anime everyday look, urban anime fashion, modern anime street style, anime casual wear, trendy anime outfit",
    tactical: "anime tactical gear, military inspired, utility belts, combat ready, anime spec ops, tactical anime outfit, anime military gear, anime combat uniform, anime special forces",
    "battle-damaged": "torn costume, battle worn, scratches and dirt, dramatic damage, anime aftermath scene, damaged anime costume, torn anime outfit, battle damaged hero, anime war torn",
    "power-up": "transformation outfit, glowing elements, aura infused, super mode, anime final form, anime super mode, glowing anime costume, anime power up form, anime ultimate form"
  },

  environments: {
    minimal: "clean gradient background, anime title card, minimalist composition, character focused, anime clean background, simple anime backdrop, anime character spotlight, anime portrait background",
    urban: "neo-tokyo cityscape, cyberpunk city, anime urban background, neon signs, rain slicked streets, anime city night, anime metropolis, anime cyberpunk city, anime urban landscape",
    natural: "anime nature scene, cherry blossoms, sunset field, dramatic sky, Studio Ghibli background, anime flower field, anime sunset, anime nature landscape, anime scenic background",
    "interior-tech": "anime interior, high-tech room, command center, futuristic lab, holographic displays, anime sci-fi interior, anime technology room, anime futuristic space, anime high tech",
    abstract: "abstract energy background, fractal patterns, dimensional rift, anime void space, cosmic energy, anime abstract background, energy field background, anime cosmic space, anime dimensional warp"
  },

  lighting: {
    dramatic: "dramatic chiaroscuro anime, strong rim light, anime key lighting, cinematic contrast, anime dramatic lighting, anime spotlight, anime theater lighting, anime dramatic shadows",
    soft: "soft anime lighting, diffused daylight, gentle gradients, anime morning scene, anime soft light, anime gentle lighting, anime pastel lighting, anime dreamy light",
    golden: "golden hour anime, sunset lighting, warm amber tones, anime magic hour, anime golden glow, anime sunset colors, anime warm lighting, anime golden time",
    neon: "neon lighting, cyberpunk glow, pink and blue neon, anime night scene, bioluminescent, anime neon colors, anime cyberpunk lighting, anime night glow, anime city lights",
    bioluminescent: "glowing aura, bioluminescent energy, self-illuminated, anime power glow, ethereal light, anime glowing character, anime light emission, anime divine glow, anime supernatural light"
  },

  skinTexture: [
    "anime skin shading, soft cel-shaded skin, anime complexion, luminous 2D skin",
    "painterly anime skin, airbrushed skin, anime smooth skin, anime glossy skin",
    "anime skin with subsurface glow, translucent anime skin, anime ethereal skin",
    "anime skin with soft gradients, anime warm skin tones, anime delicate skin",
    "anime skin with highlight spots, anime shiny skin, anime dewy skin",
    "anime skin with rim lighting, anime illuminated skin, anime radiant skin"
  ],

  composition: "vertical composition, phone wallpaper, centered subject, rule of thirds vertical, anime poster format, 9:16 aspect ratio, anime key visual composition, anime mobile wallpaper, anime vertical poster, anime portrait orientation, anime promotional art, anime BD cover",

  technical: "highly detailed, masterpiece, best quality, anime 4K, anime 8K, sharp focus, anime ultra detailed, anime illustration, anime digital art, anime artstation, anime pixiv, anime deviantart",

  exclusions: "--no 3D render, CGI, plastic, western cartoon, realistic 3D, bad anatomy, extra fingers, deformed hands, masculine, blurry, low quality, chibi, childlike, text, watermark, UI, oversaturated, western animation, disney, pixar, marvel 3D, live action, photograph, western comic style, western art style, western cartoon style, 3D model, blender, unreal engine, unity, zbrush, 3D sculpture, 3D character, 3D figure, 3D printed, plastic figure, action figure, doll, toy, figurine, statue, mannequin, puppet, western superhero, western comic book, american cartoon, cartoon network, nickelodeon, adult swim, family guy, simpsons, south park, western animation style, western anime style, fake anime, pseudo anime, wannabe anime, bad anime, amateur anime, low quality anime, cheap anime, budget anime, 2000s anime, 90s anime, old anime, dated anime, retro anime, vintage anime, classic anime, old school anime, 80s anime, 70s anime"
};
// === END DATASET ===

const state = {
  selectedChar: null,
  mode: 'anime',
  muscle: 3,
  pose: 'standing',
  outfit: 'classic',
  environment: 'minimal',
  lighting: 'dramatic',
  favorites: JSON.parse(localStorage.getItem('kimify_favorites') || '[]'),
  history: JSON.parse(localStorage.getItem('kimify_history') || '[]'),
  filter: '',
  universe: 'all'
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const saveLS = (key, val) => localStorage.setItem(key, JSON.stringify(val));

const colorMap = {
  black: '#1a1a1a', red: '#e94560', blue: '#4a90d9', gold: '#d4a843',
  green: '#4ade80', orange: '#f97316', silver: '#c0c0c0', yellow: '#fbbf24',
  white: '#f0f0f5', pink: '#f472b6', purple: '#a855f7', gray: '#6b7280',
  blonde: '#e8c87a', brown: '#8b5a2b', 'blonde red': '#e8c87a'
};
const getColor = (c) => colorMap[c.toLowerCase()] || c;

const toast = (msg) => {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2000);
};

function buildPrompt(character, mode, muscle, pose, outfit, environment, lighting) {
  const c = character;
  const m = KIMIFY_DATASET.modes[mode];
  const mus = KIMIFY_DATASET.muscleLevels[muscle];
  const p = KIMIFY_DATASET.poses[pose];
  const o = KIMIFY_DATASET.outfits[outfit];
  const e = KIMIFY_DATASET.environments[environment];
  const l = KIMIFY_DATASET.lighting[lighting];
  const skin = KIMIFY_DATASET.skinTexture[Math.floor(Math.random() * KIMIFY_DATASET.skinTexture.length)];
  const comp = KIMIFY_DATASET.composition;
  const tech = KIMIFY_DATASET.technical;
  const exclusions = KIMIFY_DATASET.exclusions;

  const parts = [
    c.basePrompt,
    `${c.genderSwap}, ${c.colors.join(' ')} color palette, ${c.accessory}`,
    `${mus.desc}`,
    `${skin}`,
    `${o}`,
    `${p}`,
    `determined confident expression, anime heroine face, beautiful anime eyes`,
    `${e}`,
    `${l}`,
    `${m.style}`,
    `${comp}`,
    `${tech}`,
    `${c.emblem} emblem, ${c.tags.join(', ')}`,
    `--ar 9:16 --style raw --v 8.1`,
    `${exclusions}`
  ];
  return parts.join(', ');
}

async function loadCharacters() {
  try {
    const res = await fetch('/api/characters');
    KIMIFY_DATASET.characters = await res.json();
    renderCharacters();
  } catch (err) {
    console.error('Failed to load characters:', err);
    toast('Error loading characters');
  }
}

function renderCharacters() {
  const grid = document.getElementById('charGrid');
  const chars = KIMIFY_DATASET.characters.filter(c => {
    const matchUniverse = state.universe === 'all' || c.universe === state.universe;
    const matchFilter = !state.filter || c.name.toLowerCase().includes(state.filter.toLowerCase()) || c.tags.some(t => t.includes(state.filter.toLowerCase()));
    return matchUniverse && matchFilter;
  });

  if (!chars.length) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div>No characters found</div>';
    return;
  }

  grid.innerHTML = chars.map(c => `
    <div class="char-card ${state.selectedChar?.id === c.id ? 'selected' : ''}" data-id="${c.id}">
      <div class="char-name">${c.name}</div>
      <div class="char-universe">${c.universe}</div>
      <div class="char-colors">${c.colors.map(c => `<span class="color-dot" style="background:${getColor(c)}"></span>`).join('')}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.char-card').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id;
      state.selectedChar = KIMIFY_DATASET.characters.find(c => c.id === id);
      renderCharacters();
      renderPreview();
      generatePrompt();
    });
  });
}

function renderPreview() {
  const container = document.getElementById('previewContainer');
  if (!state.selectedChar) {
    container.innerHTML = `
      <div class="preview-hero">
        <div class="hero-icon">⚡</div>
        <div class="hero-name">KIMIFY MOTOR</div>
        <div class="hero-universe">v3.0 — Anime Wallpaper Engine</div>
        <div class="hero-description">Select a character to generate high-end anime Midjourney prompts for 9:16 wallpapers.</div>
      </div>`;
    return;
  }

  const c = state.selectedChar;
  container.innerHTML = `
    <div class="preview-hero">
      <div class="hero-name">${c.name}</div>
      <div class="hero-universe">${c.universe} — ${KIMIFY_DATASET.modes[state.mode].label} Mode</div>
      <div class="hero-description">${c.description}</div>
      <div class="preview-tags">
        ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        <span class="tag" style="color:var(--accent)">${c.accessory}</span>
      </div>
      <div class="preview-tags">
        <span class="tag">${KIMIFY_DATASET.muscleLevels[state.muscle].label}</span>
        <span class="tag">${state.pose}</span>
        <span class="tag">${state.outfit}</span>
        <span class="tag">${state.environment}</span>
      </div>
    </div>
  `;
}

function generatePrompt() {
  if (!state.selectedChar) return;
  const prompt = buildPrompt(
    state.selectedChar,
    state.mode,
    state.muscle,
    state.pose,
    state.outfit,
    state.environment,
    state.lighting
  );
  document.getElementById('promptOutput').textContent = prompt;
  return prompt;
}

function generateVariants() {
  if (!state.selectedChar) { toast('Select a character first'); return; }
  const c = state.selectedChar;
  const variants = [];

  for (let i = 0; i < 5; i++) {
    const muscle = i + 1;
    const pose = Object.keys(KIMIFY_DATASET.poses)[i];
    const outfit = Object.keys(KIMIFY_DATASET.outfits)[i];
    const env = Object.keys(KIMIFY_DATASET.environments)[i];
    const light = Object.keys(KIMIFY_DATASET.lighting)[i];
    const vp = buildPrompt(c, state.mode, muscle, pose, outfit, env, light);
    variants.push(vp);
  }

  const overlay = document.getElementById('variantsOverlay');
  const list = document.getElementById('variantsList');
  list.innerHTML = variants.map((v, i) => `
    <div class="variant-card">
      <span class="variant-num">V${i+1}</span>
      <div style="padding-right:40px; margin-bottom:8px;">${v}</div>
      <button class="variant-copy-btn" data-variant="${i}">Copy Variant</button>
    </div>
  `).join('');
  overlay.classList.add('open');

  // Attach copy handlers to variant buttons
  list.querySelectorAll('.variant-copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = Number(btn.dataset.variant);
      const prompt = variants[idx];
      navigator.clipboard.writeText(prompt).then(() => {
        toast(`V${idx+1} copied!`);
      });
    });
  });

  variants.forEach((v, i) => addToHistory(c.name + ` V${i+1}`, v));
}

function addToHistory(name, prompt) {
  const entry = { name, prompt, time: Date.now(), id: Date.now() + Math.random() };
  state.history.unshift(entry);
  if (state.history.length > 50) state.history.pop();
  saveLS('kimify_history', state.history);
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById('historyList');
  if (!state.history.length) {
    list.innerHTML = '<div class="empty-state" style="padding:20px"><div class="empty-icon" style="font-size:1.5rem">📝</div>No history yet</div>';
    return;
  }
  list.innerHTML = state.history.slice(0, 20).map(h => `
    <div class="history-item" data-id="${h.id}">
      <div>
        <div class="hist-name">${h.name}</div>
        <div class="hist-time">${new Date(h.time).toLocaleTimeString()}</div>
      </div>
      <button class="fav-btn ${state.favorites.includes(h.id) ? 'active' : ''}" data-id="${h.id}">★</button>
    </div>
  `).join('');

  list.querySelectorAll('.history-item').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('fav-btn')) return;
      const id = Number(el.dataset.id);
      const entry = state.history.find(h => h.id === id);
      if (entry) {
        document.getElementById('promptOutput').textContent = entry.prompt;
        toast('Loaded from history');
      }
    });
  });

  list.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(f => f !== id);
      } else {
        state.favorites.push(id);
      }
      saveLS('kimify_favorites', state.favorites);
      renderHistory();
    });
  });
}

function init() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.universe = btn.dataset.universe;
      renderCharacters();
    });
  });

  document.getElementById('charSearch').addEventListener('input', (e) => {
    state.filter = e.target.value;
    renderCharacters();
  });

  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = btn.dataset.mode;
      renderPreview();
      generatePrompt();
    });
  });

  const muscleSlider = document.getElementById('muscleSlider');
  const muscleLabel = document.getElementById('muscleLabel');
  muscleSlider.addEventListener('input', (e) => {
    state.muscle = Number(e.target.value);
    muscleLabel.textContent = KIMIFY_DATASET.muscleLevels[state.muscle].label;
    renderPreview();
    generatePrompt();
  });

  const selectorMap = { pose: 'poses', outfit: 'outfits', environment: 'environments', lighting: 'lighting' };
  Object.keys(selectorMap).forEach(key => {
    const container = document.getElementById(`${key}Selector`);
    const values = Object.keys(KIMIFY_DATASET[selectorMap[key]]);
    container.innerHTML = values.map(v => `
      <button class="select-btn ${state[key] === v ? 'active' : ''}" data-value="${v}">${v}</button>
    `).join('');

    container.querySelectorAll('.select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.select-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state[key] = btn.dataset.value;
        renderPreview();
        generatePrompt();
      });
    });
  });

  document.getElementById('btnCopy').addEventListener('click', () => {
    const prompt = document.getElementById('promptOutput').textContent;
    if (!prompt || prompt.includes('Select a character')) return;
    navigator.clipboard.writeText(prompt).then(() => {
      toast('Prompt copied!');
      if (state.selectedChar) addToHistory(state.selectedChar.name, prompt);
    });
  });

  document.getElementById('btnVariants').addEventListener('click', generateVariants);

  document.getElementById('btnExport').addEventListener('click', () => {
    if (!state.history.length) { toast('No history to export'); return; }
    const text = state.history.map(h => `=== ${h.name} ===\n${h.prompt}\n\n`).join('');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kimify_prompts_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast('Exported!');
  });

  document.getElementById('btnCloseVariants').addEventListener('click', () => {
    document.getElementById('variantsOverlay').classList.remove('open');
  });

  document.getElementById('variantsOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('variantsOverlay')) document.getElementById('variantsOverlay').classList.remove('open');
  });

  loadCharacters();
  renderPreview();
  renderHistory();
}

document.addEventListener('DOMContentLoaded', init);
