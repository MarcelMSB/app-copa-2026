const DB_NAME = "copa-2026-album-db";
const DB_VERSION = 2;
const ALBUM_STORE = "albums";
const STICKER_STORE = "stickers";
const VIEW_MODE_STORAGE_KEY = "copa-2026-view-mode";
const THEME_STORAGE_KEY = "copa-2026-theme";
const DEFAULT_VIEW_MODE = "group";
const STICKER_TYPE_LABELS = {
  standard: "Figurinha comum",
  emblem: "Emblema da selecao",
  profile: "Selecao perfilada"
};

const PANINI_ALBUM = {
  collectionId: "panini-fifa-world-cup-2026",
  name: "Álbum Copa 2026"
};

const MCDONALDS_SELECTIONS = [
  { code: "GER", name: "Alemanha", flagCode: "de" },
  { code: "KSA", name: "Arábia Saudita", flagCode: "sa" },
  { code: "ARG", name: "Argentina", flagCode: "ar" },
  { code: "AUS", name: "Austrália", flagCode: "au" },
  { code: "BEL", name: "Bélgica", flagCode: "be" },
  { code: "BRA", name: "Brasil", flagCode: "br" },
  { code: "CAN", name: "Canadá", flagCode: "ca" },
  { code: "QAT", name: "Catar", flagCode: "qa" },
  { code: "COL", name: "Colômbia", flagCode: "co" },
  { code: "KOR", name: "Coreia do Sul", flagCode: "kr" },
  { code: "CIV", name: "Costa do Marfim", flagCode: "ci" },
  { code: "CRO", name: "Croácia", flagCode: "hr" },
  { code: "ESP", name: "Espanha", flagCode: "es" },
  { code: "USA", name: "Estados Unidos", flagCode: "us" },
  { code: "FRA", name: "França", flagCode: "fr" },
  { code: "GHA", name: "Gana", flagCode: "gh" },
  { code: "NED", name: "Holanda", flagCode: "nl" },
  { code: "ENG", name: "Inglaterra", flagCode: "gb-eng" },
  { code: "JPN", name: "Japão", flagCode: "jp" },
  { code: "MAR", name: "Marrocos", flagCode: "ma" },
  { code: "MEX", name: "México", flagCode: "mx" },
  { code: "NOR", name: "Noruega", flagCode: "no" },
  { code: "PAN", name: "Panamá", flagCode: "pa" },
  { code: "SEN", name: "Senegal", flagCode: "sn" },
  { code: "SUI", name: "Suíça", flagCode: "ch" },
  { code: "TUN", name: "Tunísia", flagCode: "tn" },
  { code: "URU", name: "Uruguai", flagCode: "uy" },
  { code: "UZB", name: "Uzbequistão", flagCode: "uz" }
];

const GROUPS = [
  {
    id: "other",
    name: "Outras",
    teams: [
      {
        code: "PANINI",
        name: "Panini",
        icon: "📘",
        logoSrc: "assets/brands/panini.png",
        bubbleSrc: "assets/brands/panini.png",
        stickers: [{ idSuffix: "00", label: "PN 00", number: 0 }]
      },
      { code: "FWC", name: "FIFA World Cup History", icon: "🏆", bubbleSrc: "assets/brands/fwc-bubble.svg", count: 19 },
      { code: "CC", name: "Coca-Cola", icon: "🥤", logoSrc: "assets/brands/coca-cola.svg", bubbleSrc: "assets/brands/coca-cola-bubble.svg", optionalSet: "cocacola", count: 14 },
      {
        code: "MC",
        name: "McDonald's",
        icon: "🍟",
        logoSrc: "assets/brands/mcdonalds.svg",
        bubbleSrc: "assets/brands/mcdonalds-bubble.svg",
        optionalSet: "mcdonalds",
        stickers: MCDONALDS_SELECTIONS.map((selection) => ({
          idSuffix: selection.code,
          label: `MC ${selection.code}`,
          number: selection.code,
          flagCode: selection.flagCode,
          representedName: selection.name,
          variant: "mcdonalds"
        }))
      }
    ]
  },
  {
    id: "a",
    name: "Grupo A",
    teams: [
      { code: "MEX", name: "México", flagCode: "mx" },
      { code: "RSA", name: "África do Sul", flagCode: "za" },
      { code: "KOR", name: "Coreia do Sul", flagCode: "kr" },
      { code: "CZE", name: "Rep. Tcheca", flagCode: "cz" }
    ]
  },
  {
    id: "b",
    name: "Grupo B",
    teams: [
      { code: "CAN", name: "Canadá", flagCode: "ca" },
      { code: "BIH", name: "Bósnia", flagCode: "ba" },
      { code: "QAT", name: "Catar", flagCode: "qa" },
      { code: "SUI", name: "Suíça", flagCode: "ch" }
    ]
  },
  {
    id: "c",
    name: "Grupo C",
    teams: [
      { code: "BRA", name: "Brasil", flagCode: "br" },
      { code: "MAR", name: "Marrocos", flagCode: "ma" },
      { code: "HAI", name: "Haiti", flagCode: "ht" },
      { code: "SCO", name: "Escócia", flagCode: "gb-sct" }
    ]
  },
  {
    id: "d",
    name: "Grupo D",
    teams: [
      { code: "USA", name: "Estados Unidos", flagCode: "us" },
      { code: "PAR", name: "Paraguai", flagCode: "py" },
      { code: "AUS", name: "Austrália", flagCode: "au" },
      { code: "TUR", name: "Turquia", flagCode: "tr" }
    ]
  },
  {
    id: "e",
    name: "Grupo E",
    teams: [
      { code: "GER", name: "Alemanha", flagCode: "de" },
      { code: "CUW", name: "Curaçao", flagCode: "cw" },
      { code: "CIV", name: "Costa do Marfim", flagCode: "ci" },
      { code: "ECU", name: "Equador", flagCode: "ec" }
    ]
  },
  {
    id: "f",
    name: "Grupo F",
    teams: [
      { code: "NED", name: "Holanda", flagCode: "nl" },
      { code: "JPN", name: "Japão", flagCode: "jp" },
      { code: "SWE", name: "Suécia", flagCode: "se" },
      { code: "TUN", name: "Tunísia", flagCode: "tn" }
    ]
  },
  {
    id: "g",
    name: "Grupo G",
    teams: [
      { code: "BEL", name: "Bélgica", flagCode: "be" },
      { code: "EGY", name: "Egito", flagCode: "eg" },
      { code: "IRN", name: "Irã", flagCode: "ir" },
      { code: "NZL", name: "Nova Zelândia", flagCode: "nz" }
    ]
  },
  {
    id: "h",
    name: "Grupo H",
    teams: [
      { code: "ESP", name: "Espanha", flagCode: "es" },
      { code: "CPV", name: "Cabo Verde", flagCode: "cv" },
      { code: "KSA", name: "Arábia Saudita", flagCode: "sa" },
      { code: "URU", name: "Uruguai", flagCode: "uy" }
    ]
  },
  {
    id: "i",
    name: "Grupo I",
    teams: [
      { code: "FRA", name: "França", flagCode: "fr" },
      { code: "SEN", name: "Senegal", flagCode: "sn" },
      { code: "IRQ", name: "Iraque", flagCode: "iq" },
      { code: "NOR", name: "Noruega", flagCode: "no" }
    ]
  },
  {
    id: "j",
    name: "Grupo J",
    teams: [
      { code: "ARG", name: "Argentina", flagCode: "ar" },
      { code: "ALG", name: "Argélia", flagCode: "dz" },
      { code: "AUT", name: "Áustria", flagCode: "at" },
      { code: "JOR", name: "Jordânia", flagCode: "jo" }
    ]
  },
  {
    id: "k",
    name: "Grupo K",
    teams: [
      { code: "POR", name: "Portugal", flagCode: "pt" },
      { code: "COD", name: "Congo", flagCode: "cd" },
      { code: "UZB", name: "Uzbequistão", flagCode: "uz" },
      { code: "COL", name: "Colômbia", flagCode: "co" }
    ]
  },
  {
    id: "l",
    name: "Grupo L",
    teams: [
      { code: "ENG", name: "Inglaterra", flagCode: "gb-eng" },
      { code: "CRO", name: "Croácia", flagCode: "hr" },
      { code: "GHA", name: "Gana", flagCode: "gh" },
      { code: "PAN", name: "Panamá", flagCode: "pa" }
    ]
  }
];

const TEAMS = buildTeams();
const COLLECTION_ITEMS = buildCollectionItems();
const ITEM_BY_ID = new Map(COLLECTION_ITEMS.map((item) => [item.id, item]));
const TEAM_BY_CODE = new Map(TEAMS.map((team) => [team.code, team]));
const GROUP_BY_ID = new Map(GROUPS.map((group) => [group.id, group]));
const ITEMS_BY_TEAM = new Map(TEAMS.map((team) => [
  team.code,
  COLLECTION_ITEMS.filter((item) => item.teamCode === team.code)
]));

applySavedTheme();

const state = {
  db: null,
  albums: [],
  allStickers: [],
  stickers: [],
  activeAlbum: null,
  viewMode: getSavedViewMode(),
  selectedGroupId: null,
  selectedTeamCode: null,
  reorderMode: false,
  compareMode: false,
  compareAlbumIds: new Set(),
  deferredInstallPrompt: null
};

const els = {
  albumsScreen: document.querySelector("#albumsScreen"),
  stickersScreen: document.querySelector("#stickersScreen"),
  albumCreateActions: document.querySelector("#albumCreateActions"),
  showAlbumFormButton: document.querySelector("#showAlbumFormButton"),
  cancelAlbumFormButton: document.querySelector("#cancelAlbumFormButton"),
  albumForm: document.querySelector("#albumForm"),
  albumName: document.querySelector("#albumName"),
  includeMcDonalds: document.querySelector("#includeMcDonalds"),
  includeCocaCola: document.querySelector("#includeCocaCola"),
  importAlbumButton: document.querySelector("#importAlbumButton"),
  importAlbumInput: document.querySelector("#importAlbumInput"),
  compareModeButton: document.querySelector("#compareModeButton"),
  compareActions: document.querySelector("#compareActions"),
  compareSelectionMeta: document.querySelector("#compareSelectionMeta"),
  runCompareButton: document.querySelector("#runCompareButton"),
  cancelCompareButton: document.querySelector("#cancelCompareButton"),
  comparePanel: document.querySelector("#comparePanel"),
  compareTitle: document.querySelector("#compareTitle"),
  compareResult: document.querySelector("#compareResult"),
  closeCompareButton: document.querySelector("#closeCompareButton"),
  finishReorderButton: document.querySelector("#finishReorderButton"),
  albumList: document.querySelector("#albumList"),
  emptyAlbums: document.querySelector("#emptyAlbums"),
  backButton: document.querySelector("#backButton"),
  themeToggleButton: document.querySelector("#themeToggleButton"),
  themeToggleIcon: document.querySelector("#themeToggleIcon"),
  installButton: document.querySelector("#installButton"),
  syncStatus: document.querySelector("#syncStatus"),
  stickersTitle: document.querySelector("#stickersTitle"),
  albumMeta: document.querySelector("#albumMeta"),
  collectionSummary: document.querySelector("#collectionSummary"),
  progressRing: document.querySelector("#progressRing"),
  progressPercent: document.querySelector("#progressPercent"),
  progressSummary: document.querySelector("#progressSummary"),
  shareCollectionButton: document.querySelector("#shareCollectionButton"),
  whatsappShareButton: document.querySelector("#whatsappShareButton"),
  modeOptions: document.querySelector("#modeOptions"),
  filterToggle: document.querySelector("#filterToggle"),
  filterPanel: document.querySelector("#filterPanel"),
  clearFilterButton: document.querySelector("#clearFilterButton"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  stickerTypeFilter: document.querySelector("#stickerTypeFilter"),
  collectionKicker: document.querySelector("#collectionKicker"),
  collectionTitle: document.querySelector("#collectionTitle"),
  collectionBackButton: document.querySelector("#collectionBackButton"),
  flagRow: document.querySelector("#flagRow"),
  collectionGrid: document.querySelector("#collectionGrid"),
  emptyCollection: document.querySelector("#emptyCollection"),
  albumCardTemplate: document.querySelector("#albumCardTemplate")
};

function buildTeams() {
  return GROUPS.flatMap((group) => {
    return group.teams.map((team) => ({
      ...team,
      groupId: group.id,
      groupName: group.name,
      count: team.count || 20
    }));
  });
}

function buildCollectionItems() {
  return buildTeams().flatMap((team) => {
    if (team.stickers) {
      return team.stickers.map((sticker) => ({
        id: `${team.code}-${sticker.idSuffix}`,
        label: sticker.label,
        number: sticker.number,
        teamCode: team.code,
        teamName: team.name,
        groupId: team.groupId,
        groupName: team.groupName,
        flagCode: sticker.flagCode || team.flagCode,
        bubbleSrc: sticker.bubbleSrc || (sticker.flagCode ? "" : team.bubbleSrc),
        logoSrc: sticker.logoSrc || (sticker.flagCode ? "" : team.logoSrc),
        icon: team.icon,
        optionalSet: team.optionalSet,
        representedName: sticker.representedName,
        variant: sticker.variant,
        stickerType: sticker.stickerType || getStickerType(team, sticker.number),
        stickerTypeLabel: getStickerTypeLabel(sticker.stickerType || getStickerType(team, sticker.number))
      }));
    }

    return Array.from({ length: team.count }, (_, index) => {
      const number = index + 1;
      return {
        id: `${team.code}-${number}`,
        label: formatStickerLabel(team.code, number),
        number,
        teamCode: team.code,
        teamName: team.name,
        groupId: team.groupId,
        groupName: team.groupName,
        flagCode: team.flagCode,
        bubbleSrc: team.bubbleSrc,
        logoSrc: team.logoSrc,
        icon: team.icon,
        optionalSet: team.optionalSet,
        stickerType: getStickerType(team, number),
        stickerTypeLabel: getStickerTypeLabel(getStickerType(team, number))
      };
    });
  });
}

function getStickerType(team, number) {
  if (team.groupId !== "other" && number === 1) return "emblem";
  if (team.groupId !== "other" && number === 13) return "profile";
  return "standard";
}

function getStickerTypeLabel(type) {
  return STICKER_TYPE_LABELS[type] || STICKER_TYPE_LABELS.standard;
}

function formatStickerLabel(code, number) {
  if (code === "CC") return `CC ${number}`;
  return `${code} ${number}`;
}

function isOptionalSetEnabled(optionalSet, album = state.activeAlbum) {
  if (!optionalSet) return true;
  if (optionalSet === "mcdonalds") return Boolean(album?.includeMcDonalds);
  if (optionalSet === "cocacola") return album?.includeCocaCola !== false;
  return false;
}

function getTeams(album = state.activeAlbum) {
  return TEAMS.filter((team) => isOptionalSetEnabled(team.optionalSet, album));
}

function getCollectionItems(album = state.activeAlbum) {
  return COLLECTION_ITEMS.filter((item) => isOptionalSetEnabled(item.optionalSet, album));
}

function getItemsByTeam(teamCode, album = state.activeAlbum) {
  return (ITEMS_BY_TEAM.get(teamCode) || []).filter((item) => isOptionalSetEnabled(item.optionalSet, album));
}

function getFlagSource(entity) {
  if (!entity.flagCode) return null;
  return `assets/flags/${entity.flagCode}.svg`;
}

function flagHtml(entity, className = "flag-img") {
  if (entity.bubbleSrc) {
    return `<img class="${className} bubble-icon-img" src="${entity.bubbleSrc}" alt="Ícone ${entity.name || entity.teamName}" loading="lazy">`;
  }

  if (entity.logoSrc) {
    return `<img class="${className} brand-logo-img" src="${entity.logoSrc}" alt="Logo ${entity.name || entity.teamName}" loading="lazy">`;
  }

  const src = getFlagSource(entity);
  if (src) {
    return `<img class="${className}" src="${src}" alt="Bandeira ${entity.name || entity.teamName}" loading="lazy">`;
  }

  return `<span class="${className} special-flag" aria-hidden="true">${entity.icon || "★"}</span>`;
}

function getSavedViewMode() {
  try {
    const saved = window.localStorage.getItem(VIEW_MODE_STORAGE_KEY);
    return ["group", "team", "sticker"].includes(saved) ? saved : DEFAULT_VIEW_MODE;
  } catch {
    return DEFAULT_VIEW_MODE;
  }
}

function setViewMode(mode) {
  state.viewMode = ["group", "team", "sticker"].includes(mode) ? mode : DEFAULT_VIEW_MODE;
  try {
    window.localStorage.setItem(VIEW_MODE_STORAGE_KEY, state.viewMode);
  } catch {
    // The selected mode still works for the current session.
  }
  const input = els.modeOptions.querySelector(`input[value="${state.viewMode}"]`);
  if (input) input.checked = true;
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getSavedThemePreference() {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    return ["light", "dark", "system"].includes(saved) ? saved : "system";
  } catch {
    return "system";
  }
}

function resolveTheme(preference = getSavedThemePreference()) {
  return preference === "system" ? getSystemTheme() : preference;
}

function applyThemePreference(preference) {
  const theme = resolveTheme(preference);
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  if (els.themeToggleIcon) {
    els.themeToggleIcon.textContent = theme === "dark" ? "☀" : "☾";
  }

  if (els.themeToggleButton) {
    els.themeToggleButton.setAttribute("aria-label", theme === "dark" ? "Usar modo claro" : "Usar modo escuro");
    els.themeToggleButton.title = theme === "dark" ? "Modo claro" : "Modo escuro";
  }

  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#101715" : "#0f6b57");
}

function applySavedTheme() {
  const preference = getSavedThemePreference();
  document.documentElement.dataset.theme = resolveTheme(preference);
  document.documentElement.style.colorScheme = resolveTheme(preference);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", resolveTheme(preference) === "dark" ? "#101715" : "#0f6b57");
}

function toggleThemePreference() {
  const current = resolveTheme();
  const next = current === "dark" ? "light" : "dark";

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Theme still changes for the current session.
  }

  applyThemePreference(next);
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(ALBUM_STORE)) {
        db.createObjectStore(ALBUM_STORE, { keyPath: "id" });
      }

      let stickerStore;
      if (!db.objectStoreNames.contains(STICKER_STORE)) {
        stickerStore = db.createObjectStore(STICKER_STORE, { keyPath: "id" });
      } else {
        stickerStore = request.transaction.objectStore(STICKER_STORE);
      }

      if (!stickerStore.indexNames.contains("albumId")) {
        stickerStore.createIndex("albumId", "albumId", { unique: false });
      }

      if (stickerStore.indexNames.contains("albumNumber")) {
        stickerStore.deleteIndex("albumNumber");
      }

      stickerStore.createIndex("albumNumber", ["albumId", "number"], { unique: false });

      if (!stickerStore.indexNames.contains("albumItem")) {
        stickerStore.createIndex("albumItem", ["albumId", "itemId"], { unique: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function transaction(storeName, mode = "readonly") {
  return state.db.transaction(storeName, mode).objectStore(storeName);
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAll(storeName) {
  return requestToPromise(transaction(storeName).getAll());
}

async function putItem(storeName, value) {
  return requestToPromise(transaction(storeName, "readwrite").put(value));
}

async function deleteItem(storeName, id) {
  return requestToPromise(transaction(storeName, "readwrite").delete(id));
}

async function deleteAlbumWithStickers(albumId) {
  const tx = state.db.transaction([ALBUM_STORE, STICKER_STORE], "readwrite");
  tx.objectStore(ALBUM_STORE).delete(albumId);

  const stickerStore = tx.objectStore(STICKER_STORE);
  const index = stickerStore.index("albumId");
  const request = index.openCursor(IDBKeyRange.only(albumId));

  request.onsuccess = () => {
    const cursor = request.result;
    if (cursor) {
      cursor.delete();
      cursor.continue();
    }
  };

  return new Promise((resolve, reject) => {
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function getStickersForAlbum(albumId) {
  const stickers = await getAll(STICKER_STORE);
  return stickers.filter((sticker) => sticker.albumId === albumId);
}

function sanitizeFileName(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase() || "album-copa-2026";
}

function downloadJson(data, fileName) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function exportAlbum(album) {
  const stickers = await getStickersForAlbum(album.id);
  const payload = {
    app: "app-copa-2026",
    version: 4,
    exportedAt: new Date().toISOString(),
    album: {
      name: album.name,
      collectionId: album.collectionId,
      includeMcDonalds: Boolean(album.includeMcDonalds),
      includeCocaCola: album.includeCocaCola !== false,
      sortOrder: album.sortOrder,
      createdAt: album.createdAt,
      updatedAt: Date.now()
    },
    stickers: stickers.map((sticker) => {
      const item = ITEM_BY_ID.get(sticker.itemId);
      const stickerType = item?.stickerType || sticker.stickerType || "standard";

      return {
        itemId: sticker.itemId,
        label: item?.label || sticker.label,
        number: item?.number ?? sticker.number,
        teamCode: item?.teamCode || sticker.teamCode,
        teamName: item?.teamName || sticker.teamName,
        groupId: item?.groupId || sticker.groupId,
        groupName: item?.groupName || sticker.groupName,
        representedName: item?.representedName || sticker.representedName || "",
        variant: item?.variant || sticker.variant || "",
        stickerType,
        stickerTypeLabel: getStickerTypeLabel(stickerType),
        status: sticker.status,
        quantity: sticker.quantity,
        notes: sticker.notes || "",
        createdAt: sticker.createdAt,
        updatedAt: sticker.updatedAt
      };
    })
  };

  downloadJson(payload, `${sanitizeFileName(album.name)}.json`);
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

function normalizeImportedAlbumName(name) {
  const baseName = String(name || PANINI_ALBUM.name).trim() || PANINI_ALBUM.name;
  const normalizedBaseName = baseName.toLocaleLowerCase("pt-BR");
  const nameExists = state.albums.some((album) => album.name.toLocaleLowerCase("pt-BR") === normalizedBaseName);

  return nameExists ? `${baseName} (importado)` : baseName;
}

function normalizeImportPayload(payload) {
  if (!payload || payload.app !== "app-copa-2026" || !payload.album || !Array.isArray(payload.stickers)) {
    throw new Error("Arquivo JSON invalido para este app.");
  }

  const album = normalizeAlbum({
    id: crypto.randomUUID(),
    name: normalizeImportedAlbumName(payload.album.name),
    collectionId: payload.album.collectionId || PANINI_ALBUM.collectionId,
    includeMcDonalds: Boolean(payload.album.includeMcDonalds),
    includeCocaCola: payload.album.includeCocaCola !== false,
    sortOrder: getNewAlbumSortOrder(),
    createdAt: Date.now(),
    updatedAt: Date.now()
  });

  const validItems = new Map(getCollectionItems(album).map((item) => [item.id, item]));
  const stickers = payload.stickers
    .filter((sticker) => sticker.itemId && validItems.has(sticker.itemId))
    .map((sticker) => {
      const item = validItems.get(sticker.itemId);
      const stickerType = item.stickerType || sticker.stickerType || "standard";

      return {
        ...sticker,
        id: `${album.id}-${sticker.itemId}`,
        albumId: album.id,
        label: item.label,
        number: item.number,
        teamCode: item.teamCode,
        teamName: item.teamName,
        groupId: item.groupId,
        groupName: item.groupName,
        representedName: item.representedName || "",
        variant: item.variant || "",
        stickerType,
        stickerTypeLabel: getStickerTypeLabel(stickerType),
        status: sticker.status === "duplicate" ? "duplicate" : sticker.status === "owned" ? "owned" : "missing",
        quantity: Number(sticker.quantity) || 0,
        notes: sticker.notes || "",
        createdAt: sticker.createdAt || Date.now(),
        updatedAt: Date.now()
      };
    });

  return { album, stickers };
}

async function importAlbumFromFile(file) {
  const text = await readFileAsText(file);
  const payload = JSON.parse(text);
  const { album, stickers } = normalizeImportPayload(payload);

  await putItem(ALBUM_STORE, album);
  for (const sticker of stickers) {
    await putItem(STICKER_STORE, sticker);
  }

  await loadAlbums();
  savePulse();
  window.alert(`Album importado com ${stickers.length} figurinhas.`);
}

async function loadAlbums() {
  const albums = await getAll(ALBUM_STORE);
  const normalized = [];

  for (const album of albums) {
    const nextAlbum = normalizeAlbum(album);
    normalized.push(nextAlbum);
  }

  normalized.sort(compareAlbumOrder);

  for (const [index, album] of normalized.entries()) {
    const previous = albums.find((item) => item.id === album.id) || {};
    album.sortOrder = index;

    if (
      previous.collectionId !== album.collectionId ||
      previous.total !== album.total ||
      previous.includeCocaCola !== album.includeCocaCola ||
      previous.includeMcDonalds !== album.includeMcDonalds ||
      previous.sortOrder !== album.sortOrder
    ) {
      await putItem(ALBUM_STORE, album);
    }
  }

  state.albums = normalized;
  state.allStickers = await getAll(STICKER_STORE);
  renderAlbums();
}

async function loadStickers(albumId) {
  const stickers = await getAll(STICKER_STORE);
  state.allStickers = stickers;
  state.stickers = stickers.filter((sticker) => sticker.albumId === albumId);
  renderStickerScreen();
}

function normalizeAlbum(album) {
  const normalized = {
    ...album,
    includeMcDonalds: Boolean(album.includeMcDonalds),
    includeCocaCola: album.includeCocaCola !== false,
    collectionId: PANINI_ALBUM.collectionId,
    sortOrder: Number.isFinite(album.sortOrder) ? album.sortOrder : -(album.createdAt || Date.now()),
    updatedAt: album.updatedAt || Date.now()
  };

  return {
    ...normalized,
    total: getCollectionItems(normalized).length
  };
}

function compareAlbumOrder(a, b) {
  const orderDiff = a.sortOrder - b.sortOrder;
  if (orderDiff !== 0) return orderDiff;
  return b.createdAt - a.createdAt;
}

function getNewAlbumSortOrder() {
  if (!state.albums.length) return 0;
  return Math.min(...state.albums.map((album) => album.sortOrder || 0)) - 1;
}

function savePulse() {
  els.syncStatus.textContent = "Salvo agora neste dispositivo";
  window.setTimeout(() => {
    els.syncStatus.textContent = "Salvo neste dispositivo";
  }, 1400);
}

function formatDate(timestamp) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(timestamp));
}

function getStickerMap() {
  return new Map(state.stickers.filter((sticker) => sticker.itemId).map((sticker) => [sticker.itemId, sticker]));
}

function isOwned(sticker) {
  return sticker?.status === "owned" || sticker?.status === "duplicate";
}

function ownedCount(stickers = state.stickers) {
  return stickers.filter((sticker) => sticker.itemId && isOwned(sticker)).length;
}

function getCollectionSummaryGroups(album = state.activeAlbum) {
  const groups = [
    {
      key: "base",
      label: "Panini",
      items: getCollectionItems(album).filter((item) => !item.optionalSet)
    }
  ];

  if (album?.includeCocaCola !== false) {
    groups.push({
      key: "cocacola",
      label: "Coca-Cola",
      items: getCollectionItems(album).filter((item) => item.optionalSet === "cocacola")
    });
  }

  if (album?.includeMcDonalds) {
    groups.push({
      key: "mcdonalds",
      label: "McDonald's",
      items: getCollectionItems(album).filter((item) => item.optionalSet === "mcdonalds")
    });
  }

  return groups;
}

function renderCollectionSummary(album) {
  const stickerMap = getStickerMapFromList(state.stickers);

  els.collectionSummary.textContent = "";
  getCollectionSummaryGroups(album)
    .filter((group) => group.items.length)
    .forEach((group) => {
      const owned = group.items.filter((item) => isOwned(stickerMap.get(item.id))).length;
      const item = document.createElement("div");
      item.className = "collection-summary-item";
      item.innerHTML = `
        <span>${group.label}</span>
        <strong>${owned}/${group.items.length}</strong>
      `;
      els.collectionSummary.append(item);
    });
}

function getVisibleItems() {
  const query = els.searchInput.value.trim().toLowerCase();
  const status = els.statusFilter.value;
  const stickerType = els.stickerTypeFilter.value;
  const stickerMap = getStickerMap();

  return getCollectionItems().filter((item) => {
    const sticker = stickerMap.get(item.id);
    const group = GROUP_BY_ID.get(item.groupId);
    const haystack = `${item.label} ${item.teamCode} ${item.teamName} ${group?.name || ""} ${item.stickerTypeLabel || ""} ${sticker?.notes || ""}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesStatus =
      status === "all" ||
      (status === "owned" && isOwned(sticker)) ||
      (status === "missing" && !isOwned(sticker)) ||
      (status === "noted" && Boolean(sticker?.notes));
    const matchesType = stickerType === "all" || item.stickerType === stickerType;

    return matchesQuery && matchesStatus && matchesType;
  });
}

function groupItemsByTeam(items) {
  const map = new Map();

  items.forEach((item) => {
    if (!map.has(item.teamCode)) map.set(item.teamCode, []);
    map.get(item.teamCode).push(item);
  });

  return map;
}

function groupItemsByGroup(items) {
  const map = new Map();

  items.forEach((item) => {
    if (!map.has(item.groupId)) map.set(item.groupId, []);
    map.get(item.groupId).push(item);
  });

  return map;
}

function getStatusLabel(item, stickerMap = getStickerMap()) {
  const sticker = stickerMap.get(item.id);
  if (isOwned(sticker)) return "Ja obtida";
  return "Faltando";
}

function getShareItems() {
  const visibleItems = getVisibleItems();

  if (state.viewMode === "group") {
    if (state.selectedTeamCode) {
      const ids = new Set(getItemsByTeam(state.selectedTeamCode).map((item) => item.id));
      return visibleItems.filter((item) => ids.has(item.id));
    }

    if (state.selectedGroupId) {
      return visibleItems.filter((item) => item.groupId === state.selectedGroupId);
    }
  }

  if (state.viewMode === "team" && state.selectedTeamCode) {
    const ids = new Set(getItemsByTeam(state.selectedTeamCode).map((item) => item.id));
    return visibleItems.filter((item) => ids.has(item.id));
  }

  return visibleItems;
}

function buildCollectionShareText() {
  const items = getShareItems();
  const stickerMap = getStickerMap();
  const owned = items.filter((item) => isOwned(stickerMap.get(item.id))).length;
  const missing = items.length - owned;
  const lines = [
    `Resumo: ${owned} ja obtidas`,
    `${missing} faltando`,
    ""
  ];

  if (!items.length) {
    lines.push("Nenhuma figurinha encontrada com os filtros aplicados.");
    return lines.join("\n");
  }

  const grouped = groupItemsByTeam(items);
  grouped.forEach((teamItems, teamCode) => {
    const team = TEAM_BY_CODE.get(teamCode);
    lines.push(`${team?.groupName || "Outras"} - ${team?.name || teamCode} (${teamCode})`);
    teamItems.forEach((item) => {
      const sticker = stickerMap.get(item.id);
      const note = sticker?.notes ? ` - obs: ${sticker.notes}` : "";
      lines.push(`- ${item.label}: ${getStatusLabel(item, stickerMap)}${note}`);
    });
    lines.push("");
  });

  return lines.join("\n").trim();
}

async function shareText(text, title = "Album Copa 2026") {
  if (navigator.share) {
    await navigator.share({
      title,
      text
    });
    return;
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    window.alert("Resumo copiado para a area de transferencia.");
    return;
  }

  window.prompt("Copie o resumo:", text);
}

async function shareCollectionText() {
  await shareText(buildCollectionShareText());
}

function shareCollectionOnWhatsApp() {
  const text = buildCollectionShareText();
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener");
}

function getStickerMapFromList(stickers) {
  return new Map(stickers.filter((sticker) => sticker.itemId).map((sticker) => [sticker.itemId, sticker]));
}

function getMissingItemsForAlbum(album, stickers) {
  const stickerMap = getStickerMapFromList(stickers);
  return getCollectionItems(album).filter((item) => !isOwned(stickerMap.get(item.id)));
}

function getOwnedItemsForAlbum(album, stickers) {
  const stickerMap = getStickerMapFromList(stickers);
  return getCollectionItems(album).filter((item) => isOwned(stickerMap.get(item.id)));
}

function appendItemsByTeamLines(lines, items) {
  const grouped = groupItemsByTeam(items);

  grouped.forEach((teamItems, teamCode) => {
    const team = TEAM_BY_CODE.get(teamCode);
    lines.push(`${team?.groupName || "Outras"} - ${team?.name || teamCode} (${teamCode})`);
    teamItems.forEach((item) => lines.push(`- ${item.label}`));
    lines.push("");
  });
}

function buildMissingShareText(album, stickers) {
  const missingItems = getMissingItemsForAlbum(album, stickers);
  const lines = [
    `Figurinhas faltantes - ${album.name}`,
    `${missingItems.length} faltando`,
    ""
  ];

  if (!missingItems.length) {
    lines.push("Nenhuma figurinha faltando.");
    return lines.join("\n");
  }

  appendItemsByTeamLines(lines, missingItems);
  return lines.join("\n").trim();
}

function getAlbumBrandLogos(album) {
  return [
    { name: "Panini", src: "assets/brands/panini.png" },
    album.includeCocaCola !== false ? { name: "Coca-Cola", src: "assets/brands/coca-cola.svg" } : null,
    album.includeMcDonalds ? { name: "McDonald's", src: "assets/brands/mcdonalds.svg" } : null
  ].filter(Boolean);
}

function renderAlbumCover(cover, album) {
  const logos = getAlbumBrandLogos(album);

  cover.className = `album-cover album-cover-brands brand-count-${logos.length}`;
  cover.textContent = "";
  logos.forEach((logo) => {
    const item = document.createElement("span");
    const img = document.createElement("img");
    img.src = logo.src;
    img.alt = logo.name;
    item.append(img);
    cover.append(item);
  });
}

async function shareAlbumMissing(album, useWhatsApp = false) {
  const whatsappWindow = useWhatsApp ? window.open("about:blank", "_blank") : null;
  const stickers = await getStickersForAlbum(album.id);
  const text = buildMissingShareText(album, stickers);

  if (useWhatsApp) {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      whatsappWindow.location.href = url;
    } else {
      window.open(url, "_blank", "noopener");
    }
    return;
  }

  await shareText(text, `Faltantes - ${album.name}`);
}

function setReorderMode(enabled) {
  state.reorderMode = enabled;
  els.finishReorderButton.classList.toggle("hidden", !enabled);
  renderAlbums();
}

async function persistAlbumOrder() {
  for (const [index, album] of state.albums.entries()) {
    album.sortOrder = index;
    album.updatedAt = Date.now();
    await putItem(ALBUM_STORE, album);
  }
}

async function moveAlbum(albumId, direction) {
  const index = state.albums.findIndex((album) => album.id === albumId);
  const nextIndex = index + direction;

  if (index < 0 || nextIndex < 0 || nextIndex >= state.albums.length) return;

  const [album] = state.albums.splice(index, 1);
  state.albums.splice(nextIndex, 0, album);
  await persistAlbumOrder();
  renderAlbums();
  savePulse();
}

function attachAlbumLongPress(openButton) {
  let timer = null;
  let longPressed = false;

  const clearTimer = () => {
    if (timer) window.clearTimeout(timer);
    timer = null;
  };

  openButton.addEventListener("pointerdown", () => {
    longPressed = false;
    timer = window.setTimeout(() => {
      longPressed = true;
      openButton.dataset.longPressed = "true";
      setReorderMode(true);
    }, 650);
  });

  openButton.addEventListener("pointerup", clearTimer);
  openButton.addEventListener("pointerleave", clearTimer);
  openButton.addEventListener("pointercancel", clearTimer);
  openButton.addEventListener("contextmenu", (event) => event.preventDefault());
  openButton.addEventListener("click", (event) => {
    if (!longPressed && openButton.dataset.longPressed !== "true") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    longPressed = false;
    openButton.dataset.longPressed = "false";
  }, true);
}

function setCompareMode(enabled) {
  state.compareMode = enabled;
  if (!enabled) {
    state.compareAlbumIds.clear();
  }

  els.compareActions.classList.toggle("hidden", !enabled);
  els.compareModeButton.classList.toggle("hidden", enabled);
  updateCompareControls();
  renderAlbums();
}

function updateCompareControls() {
  const count = state.compareAlbumIds.size;

  els.compareSelectionMeta.textContent = count === 1 ? "1 álbum selecionado" : `${count} álbuns selecionados`;
  els.runCompareButton.classList.toggle("hidden", count !== 2);
}

function toggleCompareSelection(albumId, checked) {
  if (checked && state.compareAlbumIds.size >= 2 && !state.compareAlbumIds.has(albumId)) {
    window.alert("Selecione somente 2 álbuns para comparar.");
    renderAlbums();
    return;
  }

  if (checked) {
    state.compareAlbumIds.add(albumId);
  } else {
    state.compareAlbumIds.delete(albumId);
  }

  updateCompareControls();
  renderAlbums();
}

function getDifferenceItems(sourceAlbum, sourceStickers, targetStickers) {
  const targetMap = getStickerMapFromList(targetStickers);
  return getOwnedItemsForAlbum(sourceAlbum, sourceStickers)
    .filter((item) => !isOwned(targetMap.get(item.id)));
}

function createCompareColumn(title, items) {
  const section = document.createElement("section");
  section.className = "compare-column";

  const heading = document.createElement("h3");
  heading.textContent = title;
  section.append(heading);

  const count = document.createElement("p");
  count.className = "compare-count";
  count.textContent = `${items.length} figurinhas`;
  section.append(count);

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "compare-empty";
    empty.textContent = "Nenhuma diferença encontrada.";
    section.append(empty);
    return section;
  }

  const grouped = groupItemsByTeam(items);
  grouped.forEach((teamItems, teamCode) => {
    const team = TEAM_BY_CODE.get(teamCode);
    const group = document.createElement("div");
    group.className = "compare-team";

    const teamTitle = document.createElement("strong");
    teamTitle.textContent = `${team?.groupName || "Outras"} - ${team?.name || teamCode} (${teamCode})`;
    group.append(teamTitle);

    const list = document.createElement("ul");
    teamItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.label;
      list.append(listItem);
    });
    group.append(list);
    section.append(group);
  });

  return section;
}

async function compareSelectedAlbums() {
  const ids = Array.from(state.compareAlbumIds);
  if (ids.length !== 2) return;

  const [albumA, albumB] = ids.map((id) => state.albums.find((album) => album.id === id));
  if (!albumA || !albumB) return;

  const [stickersA, stickersB] = await Promise.all([
    getStickersForAlbum(albumA.id),
    getStickersForAlbum(albumB.id)
  ]);
  const onlyA = getDifferenceItems(albumA, stickersA, stickersB);
  const onlyB = getDifferenceItems(albumB, stickersB, stickersA);

  els.compareTitle.textContent = `${albumA.name} x ${albumB.name}`;
  els.compareResult.textContent = "";
  els.compareResult.append(
    createCompareColumn(`Tem em ${albumA.name} e falta em ${albumB.name}`, onlyA),
    createCompareColumn(`Tem em ${albumB.name} e falta em ${albumA.name}`, onlyB)
  );
  els.comparePanel.classList.remove("hidden");
  setCompareMode(false);
  els.comparePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAlbums() {
  els.albumList.textContent = "";
  els.emptyAlbums.classList.toggle("hidden", state.albums.length > 0);

  state.albums.forEach((album) => {
    const node = els.albumCardTemplate.content.firstElementChild.cloneNode(true);
    const openButton = node.querySelector(".album-open");
    const cardTop = node.querySelector(".album-card-top");
    const compareChoice = node.querySelector(".album-compare-choice");
    const compareInput = compareChoice.querySelector("input");
    const reorderControls = node.querySelector(".album-reorder-controls");
    const moveUpButton = node.querySelector(".move-up-button");
    const moveDownButton = node.querySelector(".move-down-button");
    const missingShareButton = node.querySelector(".missing-share-button");
    const missingWhatsappButton = node.querySelector(".missing-whatsapp-button");
    const exportButton = node.querySelector(".export-button");
    const deleteButton = node.querySelector(".delete-button");
    const cover = node.querySelector(".album-cover");
    const title = node.querySelector("strong");
    const meta = node.querySelector(".album-info span");
    const index = state.albums.findIndex((item) => item.id === album.id);
    const count = state.allStickers.filter((sticker) => sticker.albumId === album.id && isOwned(sticker)).length;

    node.classList.toggle("album-card-reordering", state.reorderMode);
    node.classList.toggle("album-card-comparing", state.compareMode);
    cardTop.classList.toggle("hidden", !state.compareMode && !state.reorderMode);
    compareChoice.classList.toggle("hidden", !state.compareMode);
    reorderControls.classList.toggle("hidden", !state.reorderMode);
    compareInput.checked = state.compareAlbumIds.has(album.id);
    moveUpButton.disabled = index === 0;
    moveDownButton.disabled = index === state.albums.length - 1;
    title.textContent = album.name;
    renderAlbumCover(cover, album);
    meta.textContent = `${count} obtidas - criado em ${formatDate(album.createdAt)}`;

    attachAlbumLongPress(openButton);
    openButton.addEventListener("click", () => openAlbum(album.id));
    compareInput.addEventListener("change", () => toggleCompareSelection(album.id, compareInput.checked));
    moveUpButton.addEventListener("click", () => moveAlbum(album.id, -1));
    moveDownButton.addEventListener("click", () => moveAlbum(album.id, 1));
    missingShareButton.addEventListener("click", async () => {
      try {
        await shareAlbumMissing(album);
      } catch (error) {
        if (error?.name !== "AbortError") {
          window.alert("Não foi possível compartilhar os faltantes agora.");
        }
      }
    });
    missingWhatsappButton.addEventListener("click", () => shareAlbumMissing(album, true));
    exportButton.addEventListener("click", () => exportAlbum(album));
    deleteButton.addEventListener("click", async () => {
      const confirmed = window.confirm(`Excluir "${album.name}" e todas as figurinhas cadastradas nele?`);
      if (!confirmed) return;

      await deleteAlbumWithStickers(album.id);
      state.compareAlbumIds.delete(album.id);
      state.allStickers = state.allStickers.filter((sticker) => sticker.albumId !== album.id);
      state.stickers = state.stickers.filter((sticker) => sticker.albumId !== album.id);
      await loadAlbums();
      updateCompareControls();
      savePulse();
    });

    els.albumList.append(node);
  });
}

async function openAlbum(albumId) {
  state.activeAlbum = state.albums.find((album) => album.id === albumId);
  if (!state.activeAlbum) return;

  setViewMode(getSavedViewMode());
  state.selectedGroupId = null;
  state.selectedTeamCode = null;
  els.albumsScreen.classList.add("hidden");
  els.stickersScreen.classList.remove("hidden");
  els.backButton.classList.remove("hidden");
  await loadStickers(albumId);
}

function closeAlbum() {
  state.activeAlbum = null;
  state.stickers = [];
  els.stickersScreen.classList.add("hidden");
  els.albumsScreen.classList.remove("hidden");
  els.backButton.classList.add("hidden");
  loadAlbums();
}

function renderStickerScreen() {
  const album = state.activeAlbum;
  if (!album) return;

  const owned = ownedCount();
  const total = getCollectionItems().length;
  const percent = total ? Math.round((owned / total) * 100) : 0;
  const missing = total - owned;

  els.stickersTitle.textContent = album.name;
  els.albumMeta.textContent = "";
  renderCollectionSummary(album);
  els.progressPercent.textContent = `${percent}%`;
  els.progressSummary.textContent = `${owned} obtidas - ${missing} faltando`;
  els.progressRing.style.background = `conic-gradient(var(--yellow) ${percent}%, rgba(255, 255, 255, 0.2) 0%)`;

  renderCollection();
}

function renderCollection() {
  els.collectionGrid.textContent = "";
  els.flagRow.textContent = "";
  els.flagRow.classList.add("hidden");
  updateFilterClearButton();

  if (state.viewMode === "group") {
    renderGroupMode();
  } else if (state.viewMode === "team") {
    renderTeamMode();
  } else {
    renderStickerMode();
  }
}

function renderGroupMode() {
  if (state.selectedTeamCode) {
    const team = TEAM_BY_CODE.get(state.selectedTeamCode);
    renderStickerList(getItemsByTeam(team.code), team.name, `${team.groupName} - ${team.code}`);
    updateBackButton(true);
    return;
  }

  if (state.selectedGroupId) {
    const group = GROUP_BY_ID.get(state.selectedGroupId);
    const teams = getTeams().filter((team) => team.groupId === group.id);
    els.collectionKicker.textContent = group.name;
    els.collectionTitle.textContent = "Selecione um time";
    renderFlags(teams);
    renderTeamCards(teams);
    updateBackButton(true);
    return;
  }

  els.collectionKicker.textContent = "Grupos";
  els.collectionTitle.textContent = "Selecione um grupo";
  renderGroupCards();
  updateBackButton(false);
}

function renderTeamMode() {
  if (state.selectedTeamCode) {
    const team = TEAM_BY_CODE.get(state.selectedTeamCode);
    renderStickerList(getItemsByTeam(team.code), team.name, `${team.groupName} - ${team.code}`);
    updateBackButton(true);
    return;
  }

  els.collectionKicker.textContent = "Times";
  els.collectionTitle.textContent = "Selecione um time";
  renderTeamCards(getTeams());
  updateBackButton(false);
}

function renderStickerMode() {
  els.collectionKicker.textContent = "Figurinhas";
  els.collectionTitle.textContent = "Todas as figurinhas";
  renderStickerList(getCollectionItems(), "Todas as figurinhas", "Toque para marcar. Segure para observacao.", false);
  updateBackButton(false);
}

function renderGroupCards() {
  const visibleItems = getVisibleItems();
  const stickerMap = getStickerMap();
  const visibleByGroup = groupItemsByGroup(visibleItems);

  GROUPS.filter((group) => visibleByGroup.has(group.id)).forEach((group) => {
    const teams = getTeams().filter((team) => team.groupId === group.id);
    const items = visibleByGroup.get(group.id) || [];
    const owned = items.filter((item) => isOwned(stickerMap.get(item.id))).length;
    const card = createBrowseCard({
      title: group.name,
      subtitle: teams.map((team) => team.code).join(", "),
      meta: `${owned}/${items.length} obtidas`,
      flagEntities: teams
    });

    card.addEventListener("click", () => {
      state.selectedGroupId = group.id;
      renderCollection();
    });

    els.collectionGrid.append(card);
  });

  updateEmptyState();
}

function renderTeamCards(teams) {
  const visibleItems = getVisibleItems();
  const visibleByTeam = groupItemsByTeam(visibleItems);
  const stickerMap = getStickerMap();

  teams.filter((team) => visibleByTeam.has(team.code)).forEach((team) => {
    const items = visibleByTeam.get(team.code) || [];
    const owned = items.filter((item) => isOwned(stickerMap.get(item.id))).length;
    const card = createBrowseCard({
      title: team.name,
      subtitle: `${team.code} - ${team.groupName}`,
      meta: `${owned}/${items.length} obtidas`,
      flagEntities: [team],
      strongCode: team.code
    });

    card.addEventListener("click", () => {
      state.selectedTeamCode = team.code;
      renderCollection();
    });

    els.collectionGrid.append(card);
  });

  updateEmptyState();
}

function renderStickerList(items, title, kicker, showBack = true) {
  els.collectionKicker.textContent = kicker;
  els.collectionTitle.textContent = title;

  const visibleIds = new Set(getVisibleItems().map((item) => item.id));
  const filtered = items.filter((item) => visibleIds.has(item.id));

  filtered.forEach((item) => {
    els.collectionGrid.append(createStickerButton(item));
  });

  updateBackButton(showBack && state.viewMode !== "sticker");
  updateEmptyState();
}

function renderFlags(teams) {
  els.flagRow.classList.remove("hidden");
  teams.forEach((team) => {
    const flag = document.createElement("span");
    flag.className = "team-flag";
    flag.innerHTML = flagHtml(team);
    flag.title = `${team.name} (${team.code})`;
    els.flagRow.append(flag);
  });
}

function createBrowseCard({ title, subtitle, meta, flagEntities, strongCode }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "browse-card";
  button.innerHTML = `
    <span class="browse-flags">${flagEntities.slice(0, 4).map((entity) => `<i>${flagHtml(entity)}</i>`).join("")}</span>
    <span class="browse-body">
      <strong>${title}</strong>
      <span>${subtitle}</span>
    </span>
    ${strongCode ? `<span class="team-code">${strongCode}</span>` : ""}
    <span class="browse-meta">${meta}</span>
  `;
  return button;
}

function createStickerButton(item) {
  const stickerMap = getStickerMap();
  const sticker = stickerMap.get(item.id);
  const owned = isOwned(sticker);
  const hasNote = Boolean(sticker?.notes);
  const button = document.createElement("button");

  button.type = "button";
  button.className = "sticker-tile";
  button.classList.toggle("owned", owned);
  button.classList.toggle("noted", hasNote);
  button.innerHTML = `
    ${flagHtml(item, "sticker-flag")}
    <strong>${item.label}</strong>
    <span>${owned ? "Já obtida" : "Faltando"}</span>
    ${hasNote ? `<em>Obs.</em>` : ""}
  `;
  button.setAttribute("aria-label", `${item.label}, ${item.teamName}, ${owned ? "já obtida" : "faltando"}`);

  attachStickerPress(button, item);
  return button;
}

function attachStickerPress(button, item) {
  let timer = null;
  let longPressed = false;

  const clearTimer = () => {
    if (timer) window.clearTimeout(timer);
    timer = null;
  };

  button.addEventListener("pointerdown", () => {
    longPressed = false;
    timer = window.setTimeout(async () => {
      longPressed = true;
      await editObservation(item);
    }, 650);
  });

  button.addEventListener("pointerup", clearTimer);
  button.addEventListener("pointerleave", clearTimer);
  button.addEventListener("pointercancel", clearTimer);
  button.addEventListener("contextmenu", (event) => event.preventDefault());
  button.addEventListener("click", async () => {
    if (longPressed) return;
    await toggleSticker(item);
  });
}

async function toggleSticker(item) {
  const stickerMap = getStickerMap();
  const existing = stickerMap.get(item.id);

  if (isOwned(existing)) {
    if (existing.notes) {
      await putItem(STICKER_STORE, { ...existing, status: "missing", quantity: 0, updatedAt: Date.now() });
    } else {
      await deleteItem(STICKER_STORE, getStickerId(item));
    }
  } else {
    await putItem(STICKER_STORE, createStickerRecord(item, "owned", existing?.notes || ""));
  }

  await loadStickers(state.activeAlbum.id);
  savePulse();
}

async function editObservation(item) {
  const stickerMap = getStickerMap();
  const existing = stickerMap.get(item.id);
  const note = window.prompt(`Observacao para ${item.label}`, existing?.notes || "");

  if (note === null) return;

  const cleanNote = note.trim();
  if (!cleanNote && !existing) return;

  if (!cleanNote && existing && !isOwned(existing)) {
    await deleteItem(STICKER_STORE, getStickerId(item));
  } else {
    await putItem(STICKER_STORE, createStickerRecord(
      item,
      existing?.status || "missing",
      cleanNote,
      existing
    ));
  }

  await loadStickers(state.activeAlbum.id);
  savePulse();
}

function createStickerRecord(item, status, notes = "", existing = null) {
  return {
    id: getStickerId(item),
    albumId: state.activeAlbum.id,
    itemId: item.id,
    label: item.label,
    number: item.number,
    teamCode: item.teamCode,
    teamName: item.teamName,
    groupId: item.groupId,
    groupName: item.groupName,
    representedName: item.representedName || "",
    variant: item.variant || "",
    stickerType: item.stickerType || "standard",
    stickerTypeLabel: item.stickerTypeLabel || getStickerTypeLabel(item.stickerType),
    status,
    quantity: status === "owned" || status === "duplicate" ? 1 : 0,
    notes,
    createdAt: existing?.createdAt || Date.now(),
    updatedAt: Date.now()
  };
}

function getStickerId(item) {
  return `${state.activeAlbum.id}-${item.id}`;
}

function resetAlbumForm() {
  els.albumForm.reset();
  els.includeCocaCola.checked = true;
}

function setAlbumFormVisible(visible) {
  els.albumForm.classList.toggle("hidden", !visible);
  els.albumCreateActions.classList.toggle("hidden", visible);

  if (visible) {
    window.setTimeout(() => els.albumName.focus(), 0);
  } else {
    resetAlbumForm();
  }
}

function updateBackButton(visible) {
  els.collectionBackButton.classList.toggle("hidden", !visible);
}

function updateEmptyState() {
  els.emptyCollection.classList.toggle("hidden", els.collectionGrid.children.length > 0);
}

function updateFilterClearButton() {
  const hasFilter =
    els.searchInput.value.trim() ||
    els.statusFilter.value !== "all" ||
    els.stickerTypeFilter.value !== "all";
  els.clearFilterButton.classList.toggle("hidden", !hasFilter);
}

function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isIosDevice() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function showInstallFallback() {
  if (isStandaloneApp()) {
    els.installButton.classList.add("hidden");
    return;
  }

  els.installButton.classList.remove("hidden");
}

function showInstallHelp() {
  const message = isIosDevice()
    ? "Para instalar no iPhone: abra no Safari, toque em Compartilhar e escolha Adicionar à Tela de Início."
    : "Para instalar, use a opção Instalar app no menu do navegador ou adicione esta página à tela inicial.";

  window.alert(message);
}

function handleCollectionBack() {
  if (state.selectedTeamCode) {
    state.selectedTeamCode = null;
  } else if (state.selectedGroupId) {
    state.selectedGroupId = null;
  }

  renderCollection();
}

function registerEvents() {
  els.themeToggleButton.addEventListener("click", toggleThemePreference);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (getSavedThemePreference() === "system") {
      applyThemePreference("system");
    }
  });

  els.showAlbumFormButton.addEventListener("click", () => setAlbumFormVisible(true));
  els.cancelAlbumFormButton.addEventListener("click", () => setAlbumFormVisible(false));

  els.albumForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const album = normalizeAlbum({
      id: crypto.randomUUID(),
      name: els.albumName.value.trim() || PANINI_ALBUM.name,
      includeMcDonalds: els.includeMcDonalds.checked,
      includeCocaCola: els.includeCocaCola.checked,
      sortOrder: getNewAlbumSortOrder(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    await putItem(ALBUM_STORE, album);
    setAlbumFormVisible(false);
    await loadAlbums();
    savePulse();
  });

  els.importAlbumButton.addEventListener("click", () => {
    els.importAlbumInput.click();
  });

  els.importAlbumInput.addEventListener("change", async () => {
    const file = els.importAlbumInput.files?.[0];
    els.importAlbumInput.value = "";
    if (!file) return;

    try {
      await importAlbumFromFile(file);
    } catch (error) {
      window.alert(error.message || "Não foi possível importar este arquivo.");
    }
  });

  els.compareModeButton.addEventListener("click", () => setCompareMode(true));
  els.cancelCompareButton.addEventListener("click", () => {
    setCompareMode(false);
    els.comparePanel.classList.add("hidden");
  });
  els.runCompareButton.addEventListener("click", compareSelectedAlbums);
  els.closeCompareButton.addEventListener("click", () => {
    els.comparePanel.classList.add("hidden");
  });
  els.finishReorderButton.addEventListener("click", () => setReorderMode(false));

  els.backButton.addEventListener("click", closeAlbum);
  els.shareCollectionButton.addEventListener("click", async () => {
    try {
      await shareCollectionText();
    } catch (error) {
      if (error?.name !== "AbortError") {
        window.alert("Não foi possível compartilhar agora.");
      }
    }
  });
  els.whatsappShareButton.addEventListener("click", shareCollectionOnWhatsApp);
  els.collectionBackButton.addEventListener("click", handleCollectionBack);
  els.filterToggle.addEventListener("click", () => {
    els.filterPanel.classList.toggle("hidden");
  });
  els.clearFilterButton.addEventListener("click", () => {
    els.searchInput.value = "";
    els.statusFilter.value = "all";
    els.stickerTypeFilter.value = "all";
    renderCollection();
  });

  els.modeOptions.addEventListener("change", (event) => {
    if (!event.target.matches('input[name="viewMode"]')) return;
    setViewMode(event.target.value);
    state.selectedGroupId = null;
    state.selectedTeamCode = null;
    renderCollection();
  });

  [els.searchInput, els.statusFilter, els.stickerTypeFilter].forEach((el) => {
    el.addEventListener("input", renderCollection);
    el.addEventListener("change", renderCollection);
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredInstallPrompt = event;
    els.installButton.classList.remove("hidden");
  });

  els.installButton.addEventListener("click", async () => {
    if (!state.deferredInstallPrompt) {
      showInstallHelp();
      return;
    }

    state.deferredInstallPrompt.prompt();
    await state.deferredInstallPrompt.userChoice;
    state.deferredInstallPrompt = null;
    els.installButton.classList.add("hidden");
  });

  window.addEventListener("appinstalled", () => {
    state.deferredInstallPrompt = null;
    els.installButton.classList.add("hidden");
  });

  window.setTimeout(showInstallFallback, 1200);
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  try {
    await navigator.serviceWorker.register("sw.js");
  } catch (error) {
    console.warn("Service worker nao registrado", error);
  }
}

async function init() {
  if (!("indexedDB" in window)) {
    window.alert("Este navegador nao oferece IndexedDB.");
    return;
  }

  state.db = await openDatabase();
  applyThemePreference(getSavedThemePreference());
  registerEvents();
  await loadAlbums();
  await registerServiceWorker();
}

init();
