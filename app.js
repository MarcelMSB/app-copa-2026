const DB_NAME = "copa-2026-album-db";
const DB_VERSION = 4;
const ALBUM_STORE = "albums";
const STICKER_STORE = "stickers";
const DUPLICATE_STORE = "duplicates";
const MISSING_PICK_STORE = "missingPicks";
const VIEW_MODE_STORAGE_KEY = "copa-2026-view-mode";
const THEME_STORAGE_KEY = "copa-2026-theme";
const HOME_ACTION_VISIBILITY_STORAGE_KEY = "copa-2026-home-actions";
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
const TEAM_SORT_INDEX = new Map(TEAMS.map((team, index) => [team.code, index]));

applySavedTheme();

const state = {
  db: null,
  albums: [],
  allStickers: [],
  stickers: [],
  duplicates: [],
  missingPicks: [],
  activeAlbum: null,
  duplicatesActive: false,
  missingHubActive: false,
  missingHubSessionPicks: new Map(),
  missingFilterPickerKind: null,
  missingFilterPickerItems: [],
  missingFilterPickerSelectedValues: new Set(),
  viewMode: getSavedViewMode(),
  selectedGroupId: null,
  selectedTeamCode: null,
  reorderMode: false,
  compareMode: false,
  compareAlbumIds: new Set(),
  missingReview: {
    mode: null,
    albumId: null,
    items: [],
    selectedIds: new Set()
  },
  deferredInstallPrompt: null
};

const els = {
  albumsScreen: document.querySelector("#albumsScreen"),
  stickersScreen: document.querySelector("#stickersScreen"),
  duplicatesScreen: document.querySelector("#duplicatesScreen"),
  missingHubScreen: document.querySelector("#missingHubScreen"),
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
  duplicatesButton: document.querySelector("#duplicatesButton"),
  missingHubButton: document.querySelector("#missingHubButton"),
  compareActions: document.querySelector("#compareActions"),
  compareSelectionMeta: document.querySelector("#compareSelectionMeta"),
  runCompareButton: document.querySelector("#runCompareButton"),
  cancelCompareButton: document.querySelector("#cancelCompareButton"),
  comparePanel: document.querySelector("#comparePanel"),
  compareTitle: document.querySelector("#compareTitle"),
  compareResult: document.querySelector("#compareResult"),
  closeCompareButton: document.querySelector("#closeCompareButton"),
  missingReviewPanel: document.querySelector("#missingReviewPanel"),
  missingReviewTitle: document.querySelector("#missingReviewTitle"),
  missingReviewResult: document.querySelector("#missingReviewResult"),
  closeMissingReviewButton: document.querySelector("#closeMissingReviewButton"),
  finishReorderButton: document.querySelector("#finishReorderButton"),
  albumList: document.querySelector("#albumList"),
  emptyAlbums: document.querySelector("#emptyAlbums"),
  updatePwaButton: document.querySelector("#updatePwaButton"),
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
  shareDuplicatesButton: document.querySelector("#shareDuplicatesButton"),
  whatsappDuplicatesButton: document.querySelector("#whatsappDuplicatesButton"),
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
  missingHubSummary: document.querySelector("#missingHubSummary"),
  missingHubFilterToggle: document.querySelector("#missingHubFilterToggle"),
  missingHubFilterPanel: document.querySelector("#missingHubFilterPanel"),
  missingHubAlbumPickerButton: document.querySelector("#missingHubAlbumPickerButton"),
  missingHubAlbumFilter: document.querySelector("#missingHubAlbumFilter"),
  missingHubTeamPickerButton: document.querySelector("#missingHubTeamPickerButton"),
  missingHubTeamFilter: document.querySelector("#missingHubTeamFilter"),
  missingHubTypeFilter: document.querySelector("#missingHubTypeFilter"),
  missingFilterPickerModal: document.querySelector("#missingFilterPickerModal"),
  missingFilterPickerTitle: document.querySelector("#missingFilterPickerTitle"),
  missingFilterPickerSearch: document.querySelector("#missingFilterPickerSearch"),
  missingFilterPickerOptions: document.querySelector("#missingFilterPickerOptions"),
  applyMissingFilterPickerButton: document.querySelector("#applyMissingFilterPickerButton"),
  cancelMissingFilterPickerButton: document.querySelector("#cancelMissingFilterPickerButton"),
  selectAllMissingFilterPickerButton: document.querySelector("#selectAllMissingFilterPickerButton"),
  clearMissingFilterPickerButton: document.querySelector("#clearMissingFilterPickerButton"),
  copyVisibleMissingButton: document.querySelector("#copyVisibleMissingButton"),
  missingHubClearFilterButton: document.querySelector("#missingHubClearFilterButton"),
  missingPickPanel: document.querySelector("#missingPickPanel"),
  missingPickResult: document.querySelector("#missingPickResult"),
  clearMissingPicksButton: document.querySelector("#clearMissingPicksButton"),
  copyMissingPicksButton: document.querySelector("#copyMissingPicksButton"),
  missingHubListCheckButton: document.querySelector("#missingHubListCheckButton"),
  missingHubListCheckPanel: document.querySelector("#missingHubListCheckPanel"),
  missingHubListCheckResult: document.querySelector("#missingHubListCheckResult"),
  closeMissingHubListCheckButton: document.querySelector("#closeMissingHubListCheckButton"),
  missingHubResult: document.querySelector("#missingHubResult"),
  emptyMissingHub: document.querySelector("#emptyMissingHub"),
  duplicateFilterToggle: document.querySelector("#duplicateFilterToggle"),
  duplicateFilterPanel: document.querySelector("#duplicateFilterPanel"),
  duplicateListCheckButton: document.querySelector("#duplicateListCheckButton"),
  duplicateListCheckPanel: document.querySelector("#duplicateListCheckPanel"),
  duplicateListCheckResult: document.querySelector("#duplicateListCheckResult"),
  closeDuplicateListCheckButton: document.querySelector("#closeDuplicateListCheckButton"),
  duplicateImportButton: document.querySelector("#duplicateImportButton"),
  duplicateImportPanel: document.querySelector("#duplicateImportPanel"),
  duplicateImportResult: document.querySelector("#duplicateImportResult"),
  closeDuplicateImportButton: document.querySelector("#closeDuplicateImportButton"),
  duplicatesSummary: document.querySelector("#duplicatesSummary"),
  duplicateSearchInput: document.querySelector("#duplicateSearchInput"),
  duplicateStatusFilter: document.querySelector("#duplicateStatusFilter"),
  duplicateTypeFilter: document.querySelector("#duplicateTypeFilter"),
  duplicateClearFilterButton: document.querySelector("#duplicateClearFilterButton"),
  duplicatesResult: document.querySelector("#duplicatesResult"),
  emptyDuplicates: document.querySelector("#emptyDuplicates"),
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

function flagCodeToEmoji(flagCode) {
  if (!flagCode) return "";
  if (flagCode === "gb-eng" || flagCode === "gb-sct") return "🏴";

  const normalizedCode = flagCode.toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalizedCode)) return "";

  return Array.from(normalizedCode)
    .map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
    .join("");
}

function getShareTeamEmoji(team) {
  if (!team) return "";
  const specialIcons = {
    PANINI: "📘",
    FWC: "🌎",
    CC: "🥤",
    MC: "🍟"
  };

  return specialIcons[team.code] || flagCodeToEmoji(team.flagCode);
}

function formatMissingShareNumber(item) {
  if (item.teamCode === "PANINI" && Number(item.number) === 0) return "00";
  return String(item.number);
}

function formatMissingShareTeamCode(teamCode) {
  if (teamCode === "PANINI") return "PN";
  return teamCode;
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

      let duplicateStore;
      if (!db.objectStoreNames.contains(DUPLICATE_STORE)) {
        duplicateStore = db.createObjectStore(DUPLICATE_STORE, { keyPath: "id" });
      } else {
        duplicateStore = request.transaction.objectStore(DUPLICATE_STORE);
      }

      if (!duplicateStore.indexNames.contains("itemId")) {
        duplicateStore.createIndex("itemId", "itemId", { unique: true });
      }

      if (!duplicateStore.indexNames.contains("teamCode")) {
        duplicateStore.createIndex("teamCode", "teamCode", { unique: false });
      }

      let missingPickStore;
      if (!db.objectStoreNames.contains(MISSING_PICK_STORE)) {
        missingPickStore = db.createObjectStore(MISSING_PICK_STORE, { keyPath: "id" });
      } else {
        missingPickStore = request.transaction.objectStore(MISSING_PICK_STORE);
      }

      if (!missingPickStore.indexNames.contains("itemId")) {
        missingPickStore.createIndex("itemId", "itemId", { unique: true });
      }

      if (!missingPickStore.indexNames.contains("teamCode")) {
        missingPickStore.createIndex("teamCode", "teamCode", { unique: false });
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

async function clearStore(storeName) {
  return requestToPromise(transaction(storeName, "readwrite").clear());
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

function getDuplicateItems() {
  return COLLECTION_ITEMS;
}

function getDuplicateMap() {
  return new Map(state.duplicates.filter((item) => item.itemId).map((item) => [item.itemId, item]));
}

function getDuplicateQuantity(item) {
  return getDuplicateMap().get(item.id)?.quantity || 0;
}

function getVisibleDuplicateItems() {
  const query = els.duplicateSearchInput.value.trim().toLowerCase();
  const status = els.duplicateStatusFilter.value;
  const stickerType = els.duplicateTypeFilter.value;
  const duplicateMap = getDuplicateMap();

  return getDuplicateItems().filter((item) => {
    const record = duplicateMap.get(item.id);
    const quantity = record?.quantity || 0;
    const group = GROUP_BY_ID.get(item.groupId);
    const haystack = `${item.label} ${item.teamCode} ${item.teamName} ${group?.name || ""} ${item.stickerTypeLabel || ""}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesStatus =
      status === "all" ||
      (status === "with" && quantity > 0) ||
      (status === "empty" && quantity === 0);
    const matchesType = stickerType === "all" || item.stickerType === stickerType;

    return matchesQuery && matchesStatus && matchesType;
  });
}

function createDuplicateRecord(item, quantity) {
  return {
    id: item.id,
    itemId: item.id,
    label: item.label,
    number: item.number,
    teamCode: item.teamCode,
    teamName: item.teamName,
    groupId: item.groupId,
    groupName: item.groupName,
    quantity,
    updatedAt: Date.now()
  };
}

async function loadDuplicates() {
  state.duplicates = await getAll(DUPLICATE_STORE);
  renderDuplicatesScreen();
}

async function setDuplicateQuantity(item, quantity) {
  const safeQuantity = Math.max(0, Number(quantity) || 0);

  if (safeQuantity <= 0) {
    await deleteItem(DUPLICATE_STORE, item.id);
  } else {
    await putItem(DUPLICATE_STORE, createDuplicateRecord(item, safeQuantity));
  }

  await loadDuplicates();
  savePulse();
}

function updateDuplicateClearButton() {
  const hasFilter = Boolean(
    els.duplicateSearchInput.value.trim() ||
    els.duplicateStatusFilter.value !== "all" ||
    els.duplicateTypeFilter.value !== "all"
  );

  els.duplicateClearFilterButton.classList.toggle("hidden", !hasFilter);
}

function createMissingPickRecord(item, quantity) {
  return {
    id: item.id,
    itemId: item.id,
    label: item.label,
    number: item.number,
    teamCode: item.teamCode,
    teamName: item.teamName,
    groupId: item.groupId,
    groupName: item.groupName,
    quantity,
    updatedAt: Date.now()
  };
}

async function loadMissingPicks() {
  state.missingPicks = await getAll(MISSING_PICK_STORE);
  renderMissingHubScreen();
}

function getMissingPickMap() {
  return new Map(state.missingPicks.filter((item) => item.itemId).map((item) => [item.itemId, item]));
}

async function setMissingPickQuantity(item, quantity) {
  const safeQuantity = Math.max(0, Number(quantity) || 0);

  if (safeQuantity <= 0) {
    await deleteItem(MISSING_PICK_STORE, item.id);
  } else {
    await putItem(MISSING_PICK_STORE, createMissingPickRecord(item, safeQuantity));
  }

  await loadMissingPicks();
  savePulse();
}

async function addMissingPick(item) {
  const currentQuantity = getMissingPickMap().get(item.id)?.quantity || 0;
  const sessionQuantity = state.missingHubSessionPicks.get(item.id) || 0;
  state.missingHubSessionPicks.set(item.id, sessionQuantity + 1);
  await setMissingPickQuantity(item, currentQuantity + 1);
}

async function removeMissingPick(item) {
  const currentQuantity = getMissingPickMap().get(item.id)?.quantity || 0;
  const sessionQuantity = state.missingHubSessionPicks.get(item.id) || 0;

  if (sessionQuantity > 1) {
    state.missingHubSessionPicks.set(item.id, sessionQuantity - 1);
  } else if (sessionQuantity === 1) {
    state.missingHubSessionPicks.delete(item.id);
  }

  await setMissingPickQuantity(item, currentQuantity - 1);
}

async function clearMissingPicks() {
  await clearStore(MISSING_PICK_STORE);
  state.missingPicks = [];
  state.missingHubSessionPicks = new Map();
  renderMissingHubScreen();
  savePulse();
}

function getMissingHubAlbumIds() {
  const selectedAlbumIds = Array.from(els.missingHubAlbumFilter.selectedOptions)
    .map((option) => option.value)
    .filter((value) => value !== "all");

  if (selectedAlbumIds.length) return selectedAlbumIds;
  return state.albums.map((album) => album.id);
}

function getMissingHubTeamCodes() {
  return Array.from(els.missingHubTeamFilter.selectedOptions)
    .map((option) => option.value)
    .filter((value) => value !== "all");
}

function getMissingHubAggregates() {
  const selectedAlbumIds = new Set(getMissingHubAlbumIds());
  const selectedTeamCodes = new Set(getMissingHubTeamCodes());
  const selectedType = els.missingHubTypeFilter.value;
  const aggregates = new Map();

  state.albums
    .filter((album) => selectedAlbumIds.has(album.id))
    .forEach((album) => {
      const albumStickers = state.allStickers.filter((sticker) => sticker.albumId === album.id);
      const stickerMap = getStickerMapFromList(albumStickers);

      getCollectionItems(album)
        .filter((item) => !selectedTeamCodes.size || selectedTeamCodes.has(item.teamCode))
        .filter((item) => selectedType === "all" || item.stickerType === selectedType)
        .filter((item) => !isOwned(stickerMap.get(item.id)))
        .forEach((item) => {
          const current = aggregates.get(item.id) || {
            item,
            quantity: 0,
            albumIds: new Set()
          };
          current.quantity += 1;
          current.albumIds.add(album.id);
          aggregates.set(item.id, current);
        });
    });

  return Array.from(aggregates.values())
    .map((entry) => {
      const selectedQuantity = state.missingHubSessionPicks.get(entry.item.id) || 0;
      return {
        ...entry,
        quantity: Math.max(0, entry.quantity - selectedQuantity)
      };
    })
    .filter((entry) => entry.quantity > 0);
}

function populateMissingHubFilters() {
  const currentAlbums = new Set(Array.from(els.missingHubAlbumFilter.selectedOptions || []).map((option) => option.value));
  const currentTeams = new Set(Array.from(els.missingHubTeamFilter.selectedOptions || []).map((option) => option.value));

  els.missingHubAlbumFilter.textContent = "";
  const allAlbums = document.createElement("option");
  allAlbums.value = "all";
  allAlbums.textContent = "Todos";
  allAlbums.selected = !currentAlbums.size || currentAlbums.has("all");
  els.missingHubAlbumFilter.append(allAlbums);
  state.albums.forEach((album) => {
    const option = document.createElement("option");
    option.value = album.id;
    option.textContent = album.name;
    option.selected = currentAlbums.has(album.id);
    els.missingHubAlbumFilter.append(option);
  });

  els.missingHubTeamFilter.textContent = "";
  const allTeams = document.createElement("option");
  allTeams.value = "all";
  allTeams.textContent = "Todos";
  allTeams.selected = !currentTeams.size || currentTeams.has("all");
  els.missingHubTeamFilter.append(allTeams);
  TEAMS.forEach((team) => {
    const option = document.createElement("option");
    option.value = team.code;
    option.textContent = `${team.code} - ${team.name}`;
    option.selected = currentTeams.has(team.code);
    els.missingHubTeamFilter.append(option);
  });
  updateMissingHubPickerLabels();
}

function updateMissingHubClearButton() {
  const selectedAlbumIds = Array.from(els.missingHubAlbumFilter.selectedOptions)
    .map((option) => option.value)
    .filter((value) => value !== "all");
  const selectedTeamCodes = getMissingHubTeamCodes();
  const hasFilter = Boolean(
    selectedAlbumIds.length ||
    selectedTeamCodes.length ||
    els.missingHubTypeFilter.value !== "all"
  );

  els.missingHubClearFilterButton.classList.toggle("hidden", !hasFilter);
}

function normalizeMissingHubAlbumSelection() {
  const selectedSpecificAlbums = Array.from(els.missingHubAlbumFilter.selectedOptions)
    .filter((option) => option.value !== "all");

  if (selectedSpecificAlbums.length) {
    const allOption = Array.from(els.missingHubAlbumFilter.options).find((option) => option.value === "all");
    if (allOption) allOption.selected = false;
    return;
  }

  const allOption = Array.from(els.missingHubAlbumFilter.options).find((option) => option.value === "all");
  if (allOption) allOption.selected = true;
}

function normalizeMissingHubTeamSelection() {
  const selectedSpecificTeams = Array.from(els.missingHubTeamFilter.selectedOptions)
    .filter((option) => option.value !== "all");

  if (selectedSpecificTeams.length) {
    const allOption = Array.from(els.missingHubTeamFilter.options).find((option) => option.value === "all");
    if (allOption) allOption.selected = false;
    return;
  }

  const allOption = Array.from(els.missingHubTeamFilter.options).find((option) => option.value === "all");
  if (allOption) allOption.selected = true;
}

function updateMissingHubPickerLabels() {
  const selectedAlbums = Array.from(els.missingHubAlbumFilter.selectedOptions)
    .filter((option) => option.value !== "all");
  const selectedTeams = getMissingHubTeamCodes();

  els.missingHubAlbumPickerButton.textContent = selectedAlbums.length
    ? `${selectedAlbums.length} álbum${selectedAlbums.length > 1 ? "s" : ""}`
    : "Todos os álbuns";
  els.missingHubTeamPickerButton.textContent = selectedTeams.length
    ? `${selectedTeams.length} time${selectedTeams.length > 1 ? "s" : ""}`
    : "Todos os times";
}

function getMissingFilterPickerSource(kind) {
  if (kind === "album") {
    const selectedValues = new Set(Array.from(els.missingHubAlbumFilter.selectedOptions).map((option) => option.value));
    return {
      title: "Selecionar álbuns",
      values: state.albums.map((album) => ({ value: album.id, label: album.name })),
      selectedValues
    };
  }

  const selectedValues = new Set(Array.from(els.missingHubTeamFilter.selectedOptions).map((option) => option.value));
  return {
    title: "Selecionar times",
    values: TEAMS.map((team) => ({ value: team.code, label: `${team.code} - ${team.name}` })),
    selectedValues
  };
}

function renderMissingFilterPickerOptions() {
  const query = els.missingFilterPickerSearch.value.trim().toLowerCase();
  els.missingFilterPickerOptions.textContent = "";

  state.missingFilterPickerItems
    .filter((item) => !query || item.label.toLowerCase().includes(query) || item.value.toLowerCase().includes(query))
    .forEach((item) => {
    const label = document.createElement("label");
    label.className = "picker-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = item.value;
    checkbox.checked = state.missingFilterPickerSelectedValues.has(item.value);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        state.missingFilterPickerSelectedValues.add(item.value);
      } else {
        state.missingFilterPickerSelectedValues.delete(item.value);
      }
    });

    const span = document.createElement("span");
    span.textContent = item.label;

    label.append(checkbox, span);
    els.missingFilterPickerOptions.append(label);
  });
}

function openMissingFilterPicker(kind) {
  state.missingFilterPickerKind = kind;
  const source = getMissingFilterPickerSource(kind);
  state.missingFilterPickerItems = source.values;
  state.missingFilterPickerSelectedValues = new Set(Array.from(source.selectedValues).filter((value) => value !== "all"));
  els.missingFilterPickerTitle.textContent = source.title;
  els.missingFilterPickerSearch.value = "";
  renderMissingFilterPickerOptions();

  els.missingFilterPickerModal.classList.remove("hidden");
  els.missingFilterPickerSearch.focus({ preventScroll: true });
}

function closeMissingFilterPicker() {
  state.missingFilterPickerKind = null;
  state.missingFilterPickerItems = [];
  state.missingFilterPickerSelectedValues = new Set();
  els.missingFilterPickerModal.classList.add("hidden");
  els.missingFilterPickerOptions.textContent = "";
  els.missingFilterPickerSearch.value = "";
}

function selectAllMissingFilterPickerOptions() {
  state.missingFilterPickerItems.forEach((item) => state.missingFilterPickerSelectedValues.add(item.value));
  renderMissingFilterPickerOptions();
}

function clearMissingFilterPickerOptions() {
  state.missingFilterPickerSelectedValues = new Set();
  renderMissingFilterPickerOptions();
}

function applyMissingFilterPicker() {
  const kind = state.missingFilterPickerKind;
  const target = kind === "album" ? els.missingHubAlbumFilter : els.missingHubTeamFilter;

  Array.from(target.options).forEach((option) => {
    option.selected = state.missingFilterPickerSelectedValues.has(option.value);
  });

  if (kind === "album") {
    normalizeMissingHubAlbumSelection();
  } else {
    normalizeMissingHubTeamSelection();
  }

  updateMissingHubPickerLabels();
  closeMissingFilterPicker();
  renderMissingHubScreen();
}

function groupItemsByTeam(items) {
  const map = new Map();

  items.forEach((item) => {
    if (!map.has(item.teamCode)) map.set(item.teamCode, []);
    map.get(item.teamCode).push(item);
  });

  return map;
}

function getSortedTeamGroups(grouped) {
  return Array.from(grouped.entries()).sort(([teamCodeA], [teamCodeB]) => {
    const orderA = TEAM_SORT_INDEX.get(teamCodeA) ?? Number.MAX_SAFE_INTEGER;
    const orderB = TEAM_SORT_INDEX.get(teamCodeB) ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB || teamCodeA.localeCompare(teamCodeB);
  });
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
  if (!state.activeAlbum) return "Figurinhas App";
  return buildMissingShareText(state.activeAlbum, state.stickers);
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

async function copyText(text, button) {
  const content = String(text || "").trim();

  if (!content) {
    window.alert("Nada para copiar.");
    return;
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(content);
  } else {
    window.prompt("Copie o resultado:", content);
  }

  if (button) {
    const originalText = button.textContent;
    button.textContent = "Copiado";
    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1600);
  }
}

async function shareCollectionText() {
  await shareText(buildCollectionShareText());
}

function shareCollectionOnWhatsApp() {
  const text = buildCollectionShareText();
  openWhatsAppShare(text);
}

function openWhatsAppShare(text) {
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
    `Figurinhas App - ${album.name}`,
    "Faltantes",
    ""
  ];

  if (!missingItems.length) {
    lines.push("Nenhuma figurinha faltando.");
    return lines.join("\n");
  }

  appendCompactItemLines(lines, missingItems);
  return lines.join("\n").trim();
}

function appendCompactItemLines(lines, items) {
  const grouped = groupItemsByTeam(items);
  grouped.forEach((teamItems, teamCode) => {
    const team = TEAM_BY_CODE.get(teamCode);
    const emoji = getShareTeamEmoji(team);
    const emojiSuffix = emoji ? ` ${emoji}` : "";
    const numbers = teamItems.map(formatMissingShareNumber).join(", ");
    lines.push(`${formatMissingShareTeamCode(teamCode)}${emojiSuffix}: ${numbers}`);
  });
}

function formatDuplicateShareNumber(item, duplicateMap) {
  const quantity = duplicateMap.get(item.id)?.quantity || 0;
  const number = formatMissingShareNumber(item);
  return quantity > 1 ? `${number} (${quantity}x)` : number;
}

function appendDuplicateItemLines(lines, items, duplicateMap, options = {}) {
  const grouped = groupItemsByTeam(items);
  grouped.forEach((teamItems, teamCode) => {
    const team = TEAM_BY_CODE.get(teamCode);
    const emoji = getShareTeamEmoji(team);
    const emojiSuffix = emoji ? ` ${emoji}` : "";
    const numbers = teamItems
      .map((item) => options.hideQuantity ? formatMissingShareNumber(item) : formatDuplicateShareNumber(item, duplicateMap))
      .join(", ");
    lines.push(`${formatMissingShareTeamCode(teamCode)}${emojiSuffix}: ${numbers}`);
  });
}

function buildDuplicateShareText(duplicates = state.duplicates) {
  const duplicateMap = new Map(duplicates.filter((item) => item.itemId).map((item) => [item.itemId, item]));
  const items = getDuplicateItems().filter((item) => (duplicateMap.get(item.id)?.quantity || 0) > 0);
  const lines = [
    "Figurinhas App",
    "Repetidas",
    ""
  ];

  if (!items.length) {
    lines.push("Nenhuma figurinha repetida cadastrada.");
    return lines.join("\n");
  }

  appendDuplicateItemLines(lines, items, duplicateMap);
  return lines.join("\n").trim();
}

function buildDuplicateListCheckText(items, duplicateMap) {
  const listLabel = items.length === 1
    ? "Tenho 1 repetida da lista. Ela é:"
    : `Tenho ${items.length} repetidas da lista. São elas:`;
  const lines = [
    "Figurinhas App",
    listLabel,
    ""
  ];

  if (!items.length) {
    lines.push("Nenhuma figurinha da lista está nas repetidas.");
    return lines.join("\n");
  }

  appendDuplicateItemLines(lines, items, duplicateMap, { hideQuantity: true });
  return lines.join("\n").trim();
}

async function shareDuplicates(useWhatsApp = false) {
  const text = buildDuplicateShareText(state.duplicates);

  if (useWhatsApp) {
    openWhatsAppShare(text);
    return;
  }

  await shareText(text, "Figurinhas repetidas");
}

function buildNeededFromTextShareText(album, items) {
  const lines = [
    `Figurinhas App - ${album.name}`,
    "Preciso",
    ""
  ];

  if (!items.length) {
    lines.push("Nenhuma figurinha dessa lista está faltando.");
    return lines.join("\n");
  }

  appendCompactItemLines(lines, items);
  return lines.join("\n").trim();
}

function createStickerRecordForAlbum(album, item, status, notes = "", existing = null) {
  return {
    id: `${album.id}-${item.id}`,
    albumId: album.id,
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
  const stickers = state.allStickers.filter((sticker) => sticker.albumId === album.id);
  const text = buildMissingShareText(album, stickers);

  if (useWhatsApp) {
    openWhatsAppShare(text);
    return;
  }

  await shareText(text, `Faltantes - ${album.name}`);
}

function resetMissingReview() {
  state.missingReview.mode = null;
  state.missingReview.albumId = null;
  state.missingReview.items = [];
  state.missingReview.selectedIds = new Set();
}

function getMissingReviewAlbum() {
  return state.albums.find((album) => album.id === state.missingReview.albumId);
}

function updateMissingReviewSelectionMeta() {
  const selectedCount = state.missingReview.selectedIds.size;
  const meta = els.missingReviewPanel.querySelector(".missing-review-meta");
  if (meta) {
    meta.textContent = selectedCount === 1 ? "1 figurinha marcada" : `${selectedCount} figurinhas marcadas`;
  }
}

function toggleMissingReviewItem(itemId, button) {
  if (state.missingReview.selectedIds.has(itemId)) {
    state.missingReview.selectedIds.delete(itemId);
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
  } else {
    state.missingReview.selectedIds.add(itemId);
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
  }

  updateMissingReviewSelectionMeta();
}

function createTeamTitleElement(teamCode) {
  const team = TEAM_BY_CODE.get(teamCode);
  const title = document.createElement("strong");
  title.className = "compare-team-title";

  const icon = document.createElement("span");
  icon.className = "compare-team-icon";
  icon.innerHTML = team ? flagHtml(team) : `<span class="special-flag" aria-hidden="true">${teamCode.slice(0, 2)}</span>`;

  const label = document.createElement("span");
  label.textContent = `${team?.groupName || "Outras"} - ${team?.name || teamCode} (${teamCode})`;

  title.append(icon, label);
  return title;
}

function createMissingReviewGroup(teamItems, teamCode) {
  const group = document.createElement("div");
  group.className = "compare-team missing-review-team";

  group.append(createTeamTitleElement(teamCode));

  const list = document.createElement("div");
  list.className = "missing-review-list";
  teamItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "missing-review-item";
    button.textContent = item.label;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => toggleMissingReviewItem(item.id, button));
    list.append(button);
  });
  group.append(list);
  return group;
}

function normalizePastedTeamCode(code) {
  const normalizedCode = code.toUpperCase();
  if (normalizedCode === "PN" || normalizedCode === "PANINI") return "PANINI";
  return normalizedCode;
}

function normalizePastedStickerToken(token) {
  const cleanToken = token.toUpperCase().replace(/\s+/g, "");
  if (/^\d+$/.test(cleanToken)) return String(Number(cleanToken));
  return cleanToken;
}

function extractTeamCodeFromPastedLine(line, album) {
  const availableCodes = new Set(getTeams(album).map((team) => team.code));
  const codeRegex = /[A-Z]{2,7}/gi;
  let match = codeRegex.exec(line);

  while (match) {
    const teamCode = normalizePastedTeamCode(match[0]);
    if (availableCodes.has(teamCode)) {
      const colonIndex = line.indexOf(":");
      return {
        teamCode,
        valueStart: colonIndex >= 0 ? colonIndex + 1 : match.index + match[0].length
      };
    }
    match = codeRegex.exec(line);
  }

  return null;
}

function extractDuplicateTeamCodeFromPastedLine(line) {
  const availableCodes = new Set(TEAMS.map((team) => team.code));
  const codeRegex = /[A-Z]{2,7}/gi;
  let match = codeRegex.exec(line);

  while (match) {
    const teamCode = normalizePastedTeamCode(match[0]);
    if (availableCodes.has(teamCode)) {
      const colonIndex = line.indexOf(":");
      return {
        teamCode,
        valueStart: colonIndex >= 0 ? colonIndex + 1 : match.index + match[0].length
      };
    }
    match = codeRegex.exec(line);
  }

  return null;
}

function getPastedStickerTokens(valueText, teamCode) {
  const matches = valueText.toUpperCase().match(/[A-Z]{2,3}\s*0?\d{1,2}|0?\d{1,2}|[A-Z]{2,3}/g) || [];

  return matches
    .map((token) => {
      const compactToken = token.replace(/\s+/g, "");
      const numberMatch = compactToken.match(/\d+/);
      if (numberMatch && teamCode !== "MC") return numberMatch[0];
      return compactToken;
    })
    .map(normalizePastedStickerToken)
    .filter((token) => token && token !== teamCode && token !== "PN");
}

function parsePastedStickerList(text, album) {
  const parsedItemIds = new Set();

  text.split(/\r?\n/).forEach((line) => {
    const teamMatch = extractTeamCodeFromPastedLine(line, album);
    if (!teamMatch) return;

    const items = getItemsByTeam(teamMatch.teamCode, album);
    const itemByNumber = new Map(items.map((item) => [normalizePastedStickerToken(String(item.number)), item]));
    const valueText = line.slice(teamMatch.valueStart);
    const tokens = getPastedStickerTokens(valueText, teamMatch.teamCode);

    tokens.forEach((token) => {
      const item = itemByNumber.get(token);
      if (item) parsedItemIds.add(item.id);
    });
  });

  return parsedItemIds;
}

function parseDuplicatePastedStickerList(text) {
  const parsedItemIds = new Set();

  text.split(/\r?\n/).forEach((line) => {
    const teamMatch = extractDuplicateTeamCodeFromPastedLine(line);
    if (!teamMatch) return;

    const items = ITEMS_BY_TEAM.get(teamMatch.teamCode) || [];
    const itemByNumber = new Map(items.map((item) => [normalizePastedStickerToken(String(item.number)), item]));
    const valueText = line.slice(teamMatch.valueStart);
    const tokens = getPastedStickerTokens(valueText, teamMatch.teamCode);

    tokens.forEach((token) => {
      const item = itemByNumber.get(token);
      if (item) parsedItemIds.add(item.id);
    });
  });

  return parsedItemIds;
}

function parseDuplicateImportList(text) {
  const records = new Map();

  text.split(/\r?\n/).forEach((line) => {
    const teamMatch = extractDuplicateTeamCodeFromPastedLine(line);
    if (!teamMatch) return;

    const items = ITEMS_BY_TEAM.get(teamMatch.teamCode) || [];
    const itemByNumber = new Map(items.map((item) => [normalizePastedStickerToken(String(item.number)), item]));
    const valueText = line.slice(teamMatch.valueStart);

    valueText.split(",").forEach((part) => {
      const quantityMatch = part.match(/\((\d+)\s*x\)/i);
      const quantity = quantityMatch ? Math.max(1, Number(quantityMatch[1]) || 1) : 1;
      const cleanPart = part.replace(/\([^)]*\)/g, "");
      const tokens = getPastedStickerTokens(cleanPart, teamMatch.teamCode);

      tokens.forEach((token) => {
        const item = itemByNumber.get(token);
        if (item) records.set(item.id, { item, quantity });
      });
    });
  });

  return Array.from(records.values());
}

function renderTextCheckResult(output, album, items) {
  output.textContent = "";

  const resultText = buildNeededFromTextShareText(album, items);
  const count = document.createElement("p");
  count.className = "compare-count";
  count.textContent = items.length
    ? `${items.length} figurinhas dessa lista faltam neste álbum.`
    : "Nenhuma figurinha dessa lista falta neste álbum.";

  const result = document.createElement("pre");
  result.className = "text-check-result-text";
  result.textContent = resultText;

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "ghost-button neutral-button";
  copyButton.textContent = "Copiar resultado";
  copyButton.addEventListener("click", async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(resultText);
      savePulse();
      return;
    }

    window.prompt("Copie o resultado:", resultText);
  });

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";
  actions.append(copyButton);

  if (items.length) {
    const insertButton = document.createElement("button");
    insertButton.type = "button";
    insertButton.className = "primary-button";
    insertButton.textContent = "Inserir no álbum";
    insertButton.addEventListener("click", async () => {
      insertButton.disabled = true;
      await insertItemsIntoAlbum(album, items);
      output.textContent = "";
      const done = document.createElement("p");
      done.className = "compare-count";
      done.textContent = `${items.length} figurinhas inseridas no álbum.`;
      output.append(done);
    });
    actions.append(insertButton);
  }

  output.append(count, result, actions);
}

async function insertItemsIntoAlbum(album, items) {
  const stickers = await getStickersForAlbum(album.id);
  const stickerMap = getStickerMapFromList(stickers);

  for (const item of items) {
    const existing = stickerMap.get(item.id);
    await putItem(STICKER_STORE, createStickerRecordForAlbum(album, item, "owned", existing?.notes || "", existing));
  }

  state.allStickers = await getAll(STICKER_STORE);
  if (state.activeAlbum?.id === album.id) {
    await loadStickers(album.id);
  }
  await loadAlbums();
  savePulse();
}

function renderTextCheckPanel(album) {
  els.missingReviewTitle.textContent = `Conferir lista - ${album.name}`;
  els.missingReviewResult.textContent = "";

  const section = document.createElement("section");
  section.className = "compare-column missing-review-column text-check-column";

  const heading = document.createElement("h3");
  heading.textContent = "Cole a lista recebida";
  section.append(heading);

  const help = document.createElement("p");
  help.className = "compare-count";
  help.textContent = "Vamos retornar somente as figurinhas dessa lista que ainda faltam neste álbum.";
  section.append(help);

  const textarea = document.createElement("textarea");
  textarea.className = "text-check-input";
  textarea.rows = 10;
  textarea.placeholder = "MEX: 2, 5, 6\nBRA 🇧🇷: 1, 15\nCC 🥤: 8, 9";
  section.append(textarea);

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";

  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.className = "primary-button";
  checkButton.textContent = "Verificar lista";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "ghost-button neutral-button";
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", discardMissingReview);

  actions.append(checkButton, cancelButton);
  section.append(actions);

  const output = document.createElement("div");
  output.className = "text-check-output";
  section.append(output);

  checkButton.addEventListener("click", () => {
    const parsedItemIds = parsePastedStickerList(textarea.value, album);
    const neededItems = state.missingReview.items.filter((item) => parsedItemIds.has(item.id));
    renderTextCheckResult(output, album, neededItems);
  });

  els.missingReviewResult.append(section);
}

function renderDuplicateListCheckResult(output, items, duplicateMap) {
  output.textContent = "";

  const resultText = buildDuplicateListCheckText(items, duplicateMap);
  const count = document.createElement("p");
  count.className = "compare-count";
  count.textContent = items.length
    ? `${items.length} figurinhas da lista estão nas repetidas.`
    : "Nenhuma figurinha da lista está nas repetidas.";

  const result = document.createElement("pre");
  result.className = "text-check-result-text";
  result.textContent = resultText;

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "ghost-button neutral-button";
  copyButton.textContent = "Copiar resultado";
  copyButton.addEventListener("click", async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(resultText);
      savePulse();
      return;
    }

    window.prompt("Copie o resultado:", resultText);
  });

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";
  actions.append(copyButton);

  if (items.length) {
    const checkoutButton = document.createElement("button");
    checkoutButton.type = "button";
    checkoutButton.className = "primary-button";
    checkoutButton.textContent = "Dar saída";
    checkoutButton.addEventListener("click", async () => {
      checkoutButton.disabled = true;
      await checkoutDuplicateItems(items);
      const updatedDuplicateMap = getDuplicateMap();
      const remainingItems = items.filter((item) => (updatedDuplicateMap.get(item.id)?.quantity || 0) > 0);
      renderDuplicateListCheckResult(output, remainingItems, updatedDuplicateMap);
    });
    actions.append(checkoutButton);
  }

  output.append(count, result, actions);
}

async function checkoutDuplicateItems(items) {
  const duplicateMap = getDuplicateMap();

  for (const item of items) {
    const currentQuantity = duplicateMap.get(item.id)?.quantity || 0;
    if (currentQuantity > 0) {
      await setDuplicateQuantity(item, currentQuantity - 1);
    }
  }
}

function renderDuplicateListCheckPanel() {
  els.duplicateListCheckResult.textContent = "";

  const section = document.createElement("section");
  section.className = "compare-column text-check-column";

  const heading = document.createElement("h3");
  heading.textContent = "Cole a lista que você precisa";
  section.append(heading);

  const textarea = document.createElement("textarea");
  textarea.className = "text-check-input";
  textarea.rows = 10;
  textarea.placeholder = "MEX: 2, 5, 6\nBRA 🇧🇷: 1, 15\nCC 🥤: 8, 9";
  section.append(textarea);

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";

  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.className = "primary-button";
  checkButton.textContent = "Verificar repetidas";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "ghost-button neutral-button";
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", closeDuplicateListCheck);

  actions.append(checkButton, cancelButton);
  section.append(actions);

  const output = document.createElement("div");
  output.className = "text-check-output";
  section.append(output);

  checkButton.addEventListener("click", () => {
    const parsedItemIds = parseDuplicatePastedStickerList(textarea.value);
    const duplicateMap = getDuplicateMap();
    const matchingItems = getDuplicateItems().filter((item) => {
      return parsedItemIds.has(item.id) && (duplicateMap.get(item.id)?.quantity || 0) > 0;
    });
    renderDuplicateListCheckResult(output, matchingItems, duplicateMap);
  });

  els.duplicateListCheckResult.append(section);
}

function openDuplicateListCheck() {
  renderDuplicateListCheckPanel();
  els.duplicateListCheckPanel.classList.remove("hidden");
  els.duplicateListCheckPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  els.duplicateListCheckResult.querySelector(".text-check-input")?.focus({ preventScroll: true });
}

function closeDuplicateListCheck() {
  els.duplicateListCheckPanel.classList.add("hidden");
  els.duplicateListCheckResult.textContent = "";
}

function renderDuplicateImportStatus(output, message) {
  output.textContent = "";
  const status = document.createElement("p");
  status.className = "compare-count";
  status.textContent = message;
  output.append(status);
}

async function importDuplicateRecords(records) {
  await clearStore(DUPLICATE_STORE);

  for (const record of records) {
    await putItem(DUPLICATE_STORE, createDuplicateRecord(record.item, record.quantity));
  }

  await loadDuplicates();
  savePulse();
}

function renderDuplicateImportPanel() {
  els.duplicateImportResult.textContent = "";

  const section = document.createElement("section");
  section.className = "compare-column text-check-column";

  const heading = document.createElement("h3");
  heading.textContent = "Cole a lista de repetidas";
  section.append(heading);

  const textarea = document.createElement("textarea");
  textarea.className = "text-check-input";
  textarea.rows = 12;
  textarea.placeholder = "Figurinhas App\nRepetidas\n\nFWC 🌎: 9 (2x), 12\nBRA 🇧🇷: 2 (2x), 15 (6x)";
  section.append(textarea);

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";

  const importButton = document.createElement("button");
  importButton.type = "button";
  importButton.className = "primary-button";
  importButton.textContent = "Importar repetidas";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "ghost-button neutral-button";
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", closeDuplicateImport);

  actions.append(importButton, cancelButton);
  section.append(actions);

  const output = document.createElement("div");
  output.className = "text-check-output";
  section.append(output);

  importButton.addEventListener("click", async () => {
    const records = parseDuplicateImportList(textarea.value);
    if (!records.length) {
      renderDuplicateImportStatus(output, "Nenhuma figurinha valida encontrada na lista.");
      return;
    }

    importButton.disabled = true;
    renderDuplicateImportStatus(output, "Importando repetidas...");
    await importDuplicateRecords(records);
    renderDuplicateImportStatus(output, `${records.length} figurinhas repetidas importadas.`);
    importButton.disabled = false;
  });

  els.duplicateImportResult.append(section);
}

function openDuplicateImport() {
  renderDuplicateImportPanel();
  els.duplicateImportPanel.classList.remove("hidden");
  els.duplicateImportPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  els.duplicateImportResult.querySelector(".text-check-input")?.focus({ preventScroll: true });
}

function closeDuplicateImport() {
  els.duplicateImportPanel.classList.add("hidden");
  els.duplicateImportResult.textContent = "";
}

function renderMissingReviewList(album) {
  const items = state.missingReview.items;
  els.missingReviewTitle.textContent = `Faltantes - ${album.name}`;
  els.missingReviewResult.textContent = "";

  const section = document.createElement("section");
  section.className = "compare-column missing-review-column";

  const heading = document.createElement("h3");
  heading.textContent = "Marque as figurinhas encontradas";
  section.append(heading);

  const meta = document.createElement("p");
  meta.className = "compare-count missing-review-meta";
  meta.textContent = "0 figurinhas marcadas";
  section.append(meta);

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "compare-empty";
    empty.textContent = "Nenhuma figurinha faltando neste álbum.";
    section.append(empty);
    els.missingReviewResult.append(section);
    return;
  }

  const grouped = groupItemsByTeam(items);
  grouped.forEach((teamItems, teamCode) => {
    section.append(createMissingReviewGroup(teamItems, teamCode));
  });

  els.missingReviewResult.append(section);
}

async function openMissingReview(album) {
  const stickers = await getStickersForAlbum(album.id);
  resetMissingReview();
  state.missingReview.mode = "manual";
  state.missingReview.albumId = album.id;
  state.missingReview.items = getMissingItemsForAlbum(album, stickers);

  renderMissingReviewList(album);
  els.missingReviewPanel.classList.remove("hidden");
  els.missingReviewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function openTextCheck(album) {
  const stickers = await getStickersForAlbum(album.id);
  resetMissingReview();
  state.missingReview.mode = "text";
  state.missingReview.albumId = album.id;
  state.missingReview.items = getMissingItemsForAlbum(album, stickers);

  renderTextCheckPanel(album);
  els.missingReviewPanel.classList.remove("hidden");
  els.missingReviewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  els.missingReviewResult.querySelector(".text-check-input")?.focus({ preventScroll: true });
}

function discardMissingReview() {
  resetMissingReview();
  els.missingReviewPanel.classList.add("hidden");
}

function renderMissingReviewConfirmation() {
  const album = getMissingReviewAlbum();
  if (!album) {
    discardMissingReview();
    return;
  }

  const selectedItems = state.missingReview.items.filter((item) => state.missingReview.selectedIds.has(item.id));
  if (!selectedItems.length) {
    discardMissingReview();
    return;
  }

  els.missingReviewTitle.textContent = "Atualizar álbum?";
  els.missingReviewResult.textContent = "";

  const section = document.createElement("section");
  section.className = "compare-column missing-review-column";

  const heading = document.createElement("h3");
  heading.textContent = `${selectedItems.length} figurinhas marcadas como encontradas`;
  section.append(heading);

  const grouped = groupItemsByTeam(selectedItems);
  grouped.forEach((teamItems, teamCode) => {
    const group = document.createElement("div");
    group.className = "compare-team";
    group.append(createTeamTitleElement(teamCode));
    const list = document.createElement("ul");
    teamItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.label;
      list.append(listItem);
    });
    group.append(list);
    section.append(group);
  });

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";

  const updateButton = document.createElement("button");
  updateButton.type = "button";
  updateButton.className = "primary-button";
  updateButton.textContent = "Atualizar álbum";
  updateButton.addEventListener("click", updateAlbumFromMissingReview);

  const discardButton = document.createElement("button");
  discardButton.type = "button";
  discardButton.className = "ghost-button neutral-button";
  discardButton.textContent = "Descartar";
  discardButton.addEventListener("click", discardMissingReview);

  actions.append(updateButton, discardButton);
  section.append(actions);
  els.missingReviewResult.append(section);
}

async function updateAlbumFromMissingReview() {
  const album = getMissingReviewAlbum();
  if (!album) return;

  const selectedItems = state.missingReview.items.filter((item) => state.missingReview.selectedIds.has(item.id));
  const stickers = await getStickersForAlbum(album.id);
  const stickerMap = getStickerMapFromList(stickers);

  for (const item of selectedItems) {
    const existing = stickerMap.get(item.id);
    await putItem(STICKER_STORE, createStickerRecordForAlbum(album, item, "owned", existing?.notes || "", existing));
  }

  discardMissingReview();
  await loadAlbums();
  savePulse();
}

function handleMissingReviewClose() {
  if (state.missingReview.mode === "text") {
    discardMissingReview();
    return;
  }

  renderMissingReviewConfirmation();
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
    const group = document.createElement("div");
    group.className = "compare-team";

    group.append(createTeamTitleElement(teamCode));

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

async function editAlbumName(album) {
  const nextName = window.prompt("Novo nome do álbum", album.name);
  if (nextName === null) return;

  const cleanName = nextName.trim();
  if (!cleanName || cleanName === album.name) return;

  await putItem(ALBUM_STORE, {
    ...album,
    name: cleanName,
    updatedAt: Date.now()
  });
  await loadAlbums();
  savePulse();
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
    const editButton = node.querySelector(".album-edit-button");
    const missingShareButton = node.querySelector(".missing-share-button");
    const missingWhatsappButton = node.querySelector(".missing-whatsapp-button");
    const missingReviewButton = node.querySelector(".missing-review-button");
    const textCheckButton = node.querySelector(".text-check-button");
    const exportButton = node.querySelector(".export-button");
    const deleteButton = node.querySelector(".delete-button");
    const cover = node.querySelector(".album-cover");
    const title = node.querySelector("strong");
    const meta = node.querySelector(".album-card-meta");
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
    meta.textContent = `${count} obtidas`;

    attachAlbumLongPress(openButton);
    openButton.addEventListener("click", () => openAlbum(album.id));
    compareInput.addEventListener("change", () => toggleCompareSelection(album.id, compareInput.checked));
    moveUpButton.addEventListener("click", () => moveAlbum(album.id, -1));
    moveDownButton.addEventListener("click", () => moveAlbum(album.id, 1));
    editButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      editAlbumName(album);
    });
    editButton.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      editAlbumName(album);
    });
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
    missingReviewButton.addEventListener("click", () => openMissingReview(album));
    textCheckButton.addEventListener("click", () => openTextCheck(album));
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

async function openDuplicatesScreen() {
  state.duplicatesActive = true;
  state.activeAlbum = null;
  setCompareMode(false);
  els.comparePanel.classList.add("hidden");
  discardMissingReview();
  els.albumsScreen.classList.add("hidden");
  els.stickersScreen.classList.add("hidden");
  els.duplicatesScreen.classList.remove("hidden");
  els.backButton.classList.remove("hidden");
  await loadDuplicates();
}

function closeDuplicatesScreen() {
  state.duplicatesActive = false;
  closeDuplicateListCheck();
  closeDuplicateImport();
  els.duplicatesScreen.classList.add("hidden");
  els.albumsScreen.classList.remove("hidden");
  els.backButton.classList.add("hidden");
  loadAlbums();
}

async function openMissingHubScreen() {
  state.missingHubActive = true;
  state.activeAlbum = null;
  state.missingHubSessionPicks = new Map();
  setCompareMode(false);
  els.comparePanel.classList.add("hidden");
  discardMissingReview();
  populateMissingHubFilters();
  els.albumsScreen.classList.add("hidden");
  els.stickersScreen.classList.add("hidden");
  els.duplicatesScreen.classList.add("hidden");
  els.missingHubScreen.classList.remove("hidden");
  els.backButton.classList.remove("hidden");
  await loadMissingPicks();
}

function closeMissingHubScreen() {
  closeMissingHubListCheck();
  state.missingHubActive = false;
  state.missingHubSessionPicks = new Map();
  els.missingHubScreen.classList.add("hidden");
  els.albumsScreen.classList.remove("hidden");
  els.backButton.classList.add("hidden");
  loadAlbums();
}

function createDuplicateControl(item, duplicateMap) {
  const quantity = duplicateMap.get(item.id)?.quantity || 0;
  const row = document.createElement("button");
  row.className = "duplicate-item";
  row.classList.toggle("has-duplicates", quantity > 0);
  row.type = "button";
  row.setAttribute(
    "aria-label",
    `${item.label}, ${quantity} repetidas. Um toque adiciona, dois toques diminuem.`
  );

  const label = document.createElement("span");
  label.className = "duplicate-label";
  label.textContent = formatDuplicateDisplayNumber(item);

  const value = document.createElement("span");
  value.className = "duplicate-quantity";
  value.textContent = `${quantity}x`;

  let clickTimer = null;
  row.addEventListener("click", () => {
    if (clickTimer) {
      window.clearTimeout(clickTimer);
      clickTimer = null;
      setDuplicateQuantity(item, quantity - 1);
      return;
    }

    clickTimer = window.setTimeout(() => {
      clickTimer = null;
      setDuplicateQuantity(item, quantity + 1);
    }, 260);
  });

  row.append(label, value);
  return row;
}

function createDuplicateTeamSection(teamItems, teamCode, duplicateMap) {
  const team = TEAM_BY_CODE.get(teamCode);
  const totalQuantity = teamItems.reduce((sum, item) => sum + (duplicateMap.get(item.id)?.quantity || 0), 0);
  const section = document.createElement("section");
  section.className = "compare-team duplicate-team";

  section.append(createTeamTitleElement(teamCode));

  const meta = document.createElement("p");
  meta.className = "compare-count duplicate-team-meta";
  meta.textContent = totalQuantity === 1 ? "1 repetida" : `${totalQuantity} repetidas`;
  section.append(meta);

  const list = document.createElement("div");
  list.className = "duplicate-list";
  teamItems.forEach((item) => list.append(createDuplicateControl(item, duplicateMap)));

  section.append(list);
  return section;
}

function formatDuplicateDisplayNumber(item) {
  if (item.teamCode === "PANINI" && Number(item.number) === 0) return "00";
  return String(item.number);
}

function renderDuplicatesScreen() {
  if (!state.duplicatesActive) return;

  els.duplicatesResult.textContent = "";
  updateDuplicateClearButton();

  const duplicateMap = getDuplicateMap();
  const visibleItems = getVisibleDuplicateItems();
  const individualCount = state.duplicates.filter((item) => (item.quantity || 0) > 0).length;
  const totalCount = state.duplicates.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const individualLabel = individualCount === 1 ? "1 individual" : `${individualCount} individuais`;
  els.duplicatesSummary.textContent = `${individualLabel} - ${totalCount} no total`;

  const grouped = groupItemsByTeam(visibleItems);
  grouped.forEach((teamItems, teamCode) => {
    els.duplicatesResult.append(createDuplicateTeamSection(teamItems, teamCode, duplicateMap));
  });

  els.emptyDuplicates.classList.toggle("hidden", visibleItems.length > 0);
}

function buildMissingPicksText() {
  const pickMap = getMissingPickMap();
  const items = getDuplicateItems().filter((item) => (pickMap.get(item.id)?.quantity || 0) > 0);
  const lines = [
    "Figurinhas App",
    "Figurinhas marcadas",
    ""
  ];

  if (!items.length) {
    lines.push("Nenhuma figurinha marcada.");
    return lines.join("\n");
  }

  appendDuplicateItemLines(lines, items, pickMap);
  return lines.join("\n").trim();
}

function buildVisibleMissingHubText() {
  const aggregates = getMissingHubAggregates();
  const quantityMap = new Map(aggregates.map((entry) => [entry.item.id, { quantity: entry.quantity }]));
  const items = aggregates.map((entry) => entry.item);
  const lines = [
    "Figurinhas App",
    "Faltantes",
    ""
  ];

  if (!items.length) {
    lines.push("Nenhuma figurinha faltando com esses filtros.");
    return lines.join("\n");
  }

  appendDuplicateItemLines(lines, items, quantityMap);
  return lines.join("\n").trim();
}

function buildMissingHubListCheckText(entries) {
  const quantityMap = new Map(entries.map((entry) => [entry.item.id, { quantity: entry.quantity }]));
  const items = entries.map((entry) => entry.item);
  const lines = [
    "Figurinhas App",
    "Faltantes da lista",
    ""
  ];

  if (!items.length) {
    lines.push("Nenhuma figurinha da lista está faltando.");
    return lines.join("\n");
  }

  appendDuplicateItemLines(lines, items, quantityMap);
  return lines.join("\n").trim();
}

async function addMissingHubEntriesToPicks(entries) {
  if (!entries.length) {
    return;
  }

  const pickMap = getMissingPickMap();

  for (const entry of entries) {
    const currentQuantity = pickMap.get(entry.item.id)?.quantity || 0;
    const sessionQuantity = state.missingHubSessionPicks.get(entry.item.id) || 0;
    const nextQuantity = currentQuantity + entry.quantity;

    state.missingHubSessionPicks.set(entry.item.id, sessionQuantity + entry.quantity);
    await putItem(MISSING_PICK_STORE, createMissingPickRecord(entry.item, nextQuantity));
    pickMap.set(entry.item.id, { item: entry.item, quantity: nextQuantity });
  }

  await loadMissingPicks();
  savePulse();
}

function renderMissingHubListCheckResult(output, entries, parsedItemIds) {
  output.textContent = "";

  const resultText = buildMissingHubListCheckText(entries);
  const count = document.createElement("p");
  count.className = "compare-count";
  count.textContent = entries.length
    ? `${entries.length} figurinha(s) da lista ainda faltam na seleção atual.`
    : "Nenhuma figurinha da lista está faltando na seleção atual.";

  const result = document.createElement("pre");
  result.className = "text-check-result-text";
  result.textContent = resultText;

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";

  const copyButton = document.createElement("button");
  copyButton.className = "primary-button";
  copyButton.type = "button";
  copyButton.textContent = "Copiar resultado";
  copyButton.addEventListener("click", () => copyText(resultText, copyButton));
  actions.append(copyButton);

  if (entries.length) {
    const addButton = document.createElement("button");
    addButton.className = "ghost-button neutral-button";
    addButton.type = "button";
    addButton.textContent = "Adicionar marcadas";
    addButton.addEventListener("click", async () => {
      addButton.disabled = true;
      await addMissingHubEntriesToPicks(entries);
      const refreshedEntries = getMissingHubAggregates().filter((entry) => parsedItemIds.has(entry.item.id));
      renderMissingHubListCheckResult(output, refreshedEntries, parsedItemIds);
    });
    actions.append(addButton);
  }

  output.append(count, result, actions);
}

function renderMissingHubListCheckPanel() {
  if (!els.missingHubListCheckResult) {
    return;
  }

  els.missingHubListCheckResult.textContent = "";

  const wrapper = document.createElement("section");
  wrapper.className = "compare-column text-check-column";

  const title = document.createElement("h3");
  title.textContent = "Cole a lista para conferir";

  const input = document.createElement("textarea");
  input.className = "text-check-input";
  input.rows = 12;
  input.placeholder = "MEX: 2, 5, 6\nBRA: 1, 12\nCC: 8, 9";

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";

  const checkButton = document.createElement("button");
  checkButton.className = "primary-button";
  checkButton.type = "button";
  checkButton.textContent = "Verificar faltantes";

  const cancelButton = document.createElement("button");
  cancelButton.className = "ghost-button neutral-button";
  cancelButton.type = "button";
  cancelButton.textContent = "Cancelar";

  const output = document.createElement("div");
  output.className = "text-check-output";

  checkButton.addEventListener("click", () => {
    const parsedItemIds = parseDuplicatePastedStickerList(input.value);
    const entries = getMissingHubAggregates().filter((entry) => parsedItemIds.has(entry.item.id));
    renderMissingHubListCheckResult(output, entries, parsedItemIds);
  });

  cancelButton.addEventListener("click", closeMissingHubListCheck);

  actions.append(checkButton, cancelButton);
  wrapper.append(title, input, actions, output);
  els.missingHubListCheckResult.append(wrapper);
}

function positionMissingHubListCheckPanel() {
  const panel = els.missingHubListCheckPanel;
  if (!panel?.parentElement) {
    return;
  }

  const trigger = els.missingHubListCheckButton;
  let insertionPoint = trigger?.parentElement || null;

  while (
    insertionPoint?.parentElement &&
    insertionPoint.parentElement !== document.body &&
    !insertionPoint.contains(panel)
  ) {
    const buttons = Array.from(insertionPoint.querySelectorAll("button"));
    const hasTrigger = insertionPoint.contains(trigger);
    const hasFilterButton = buttons.some((button) => button.textContent?.trim().toLowerCase() === "filtros");
    const hasCopyButton = buttons.some((button) => button.textContent?.trim().toLowerCase().includes("copiar faltantes"));

    if (hasTrigger && hasFilterButton && hasCopyButton) {
      break;
    }

    insertionPoint = insertionPoint.parentElement;
  }

  while (
    insertionPoint &&
    insertionPoint !== document.body &&
    (insertionPoint.contains(panel) || insertionPoint === panel)
  ) {
    insertionPoint = insertionPoint.parentElement;
  }

  if (insertionPoint?.parentElement && insertionPoint.nextElementSibling !== panel) {
    insertionPoint.insertAdjacentElement("afterend", panel);
    return;
  }

  const screen = panel.closest("main, .screen, .app-view, body") || document.body;
  const markedHeading = Array.from(screen.querySelectorAll("h1, h2, h3, h4, p, strong, span"))
    .find((element) => element.textContent?.trim().toLowerCase() === "figurinhas marcadas");
  const markedPanel = markedHeading?.closest("section, article, .card, .panel, .compare-panel, .missing-hub-card");

  if (markedPanel && markedPanel !== panel && markedPanel.parentElement) {
    markedPanel.parentElement.insertBefore(panel, markedPanel);
    return;
  }

  const controls = els.missingHubListCheckButton?.closest("section, article, .card, .panel, .filters-card, .missing-hub-controls, .compare-panel");
  const directControls = controls && controls.parentElement === panel.parentElement ? controls : null;

  if (directControls && directControls.nextElementSibling !== panel) {
    panel.parentElement.insertBefore(panel, directControls.nextElementSibling);
    return;
  }

  const anchor = screen.querySelector(
    "#missingPicksPanel, #missingHubPicksPanel, .missing-picks-panel, .missing-hub-picks-panel, .missing-hub-marked-panel, #missingHubPanel, .missing-hub-panel"
  );

  if (anchor && anchor !== panel && anchor.parentElement) {
    anchor.parentElement.insertBefore(panel, anchor);
  }
}

function openMissingHubListCheck() {
  positionMissingHubListCheckPanel();
  renderMissingHubListCheckPanel();
  positionMissingHubListCheckPanel();
  els.missingHubListCheckPanel.classList.remove("hidden");
  setTimeout(positionMissingHubListCheckPanel, 0);
  els.missingHubListCheckPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  els.missingHubListCheckPanel.querySelector("textarea")?.focus();
}

function closeMissingHubListCheck() {
  els.missingHubListCheckPanel?.classList.add("hidden");
  if (els.missingHubListCheckResult) {
    els.missingHubListCheckResult.textContent = "";
  }
}

function findMissingHubActionsBlock() {
  const trigger = els.missingHubListCheckButton;
  const copyButton = els.copyVisibleMissingButton || document.querySelector("#copyVisibleMissingButton");

  if (!trigger) {
    return null;
  }

  const candidates = Array.from(document.querySelectorAll("section, article, div, form"))
    .filter((candidate) => {
      if (!candidate.contains(trigger) || candidate === document.body) {
        return false;
      }

      const buttons = Array.from(candidate.querySelectorAll("button"));
      const hasCopyButton = copyButton
        ? candidate.contains(copyButton)
        : buttons.some((button) => button.textContent?.trim().toLowerCase().includes("copiar faltantes"));
      const hasFiltersButton = buttons.some((button) => {
        const label = `${button.textContent || ""} ${button.getAttribute("aria-label") || ""}`.toLowerCase();
        return label.includes("filtros");
      });

      return hasCopyButton && hasFiltersButton;
    })
    .sort((a, b) => a.querySelectorAll("*").length - b.querySelectorAll("*").length);

  return candidates[0] || trigger.parentElement;
}

function positionMissingHubListCheckPanel() {
  const panel = els.missingHubListCheckPanel;
  const actionsBlock = findMissingHubActionsBlock();

  if (!panel || !actionsBlock || panel.parentElement === actionsBlock) {
    return;
  }

  actionsBlock.appendChild(panel);
}

async function copyMissingPicks() {
  const text = buildMissingPicksText();

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    savePulse();
    return;
  }

  window.prompt("Copie as figurinhas marcadas:", text);
}

async function copyVisibleMissingHub() {
  const text = buildVisibleMissingHubText();

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    savePulse();
    return;
  }

  window.prompt("Copie as figurinhas faltantes:", text);
}

function renderMissingPickPanel() {
  const pickMap = getMissingPickMap();
  const items = getDuplicateItems().filter((item) => (pickMap.get(item.id)?.quantity || 0) > 0);

  els.missingPickPanel.classList.toggle("hidden", !items.length);
  els.missingPickResult.textContent = "";
  if (!items.length) return;

  const section = document.createElement("section");
  section.className = "missing-pick-column";
  const grouped = groupItemsByTeam(items);

  getSortedTeamGroups(grouped).forEach(([teamCode, teamItems]) => {
    const group = document.createElement("div");
    group.className = "compare-team missing-pick-team";
    group.append(createTeamTitleElement(teamCode));

    const list = document.createElement("div");
    list.className = "missing-hub-list";
    teamItems.forEach((item) => {
      const quantity = pickMap.get(item.id)?.quantity || 0;
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "missing-hub-pill selected";
      pill.setAttribute("aria-label", `Desmarcar ${item.label}`);

      const label = document.createElement("span");
      label.textContent = formatMissingShareNumber(item);
      pill.append(label);

      if (quantity > 1) {
        const quantityLabel = document.createElement("strong");
        quantityLabel.textContent = `${quantity}x`;
        pill.append(quantityLabel);
      }

      pill.addEventListener("click", () => removeMissingPick(item));
      list.append(pill);
    });

    group.append(list);
    section.append(group);
  });

  els.missingPickResult.append(section);
}

function createMissingHubItemButton(entry) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "missing-hub-pill";
  button.setAttribute("aria-label", `${entry.item.label}, faltando em ${entry.quantity} album`);

  const label = document.createElement("span");
  label.textContent = formatMissingShareNumber(entry.item);
  button.append(label);

  if (entry.quantity > 1) {
    const quantity = document.createElement("strong");
    quantity.textContent = `${entry.quantity}x`;
    button.append(quantity);
  }

  button.addEventListener("click", () => addMissingPick(entry.item));
  return button;
}

function renderMissingHubList(aggregates) {
  els.missingHubResult.textContent = "";

  const grouped = new Map();
  aggregates.forEach((entry) => {
    if (!grouped.has(entry.item.teamCode)) grouped.set(entry.item.teamCode, []);
    grouped.get(entry.item.teamCode).push(entry);
  });

  getSortedTeamGroups(grouped).forEach(([teamCode, teamEntries]) => {
    const section = document.createElement("section");
    section.className = "compare-team missing-hub-team";
    section.append(createTeamTitleElement(teamCode));

    const total = teamEntries.reduce((sum, entry) => sum + entry.quantity, 0);
    const meta = document.createElement("p");
    meta.className = "compare-count missing-hub-team-meta";
    meta.textContent = total === 1 ? "1 faltante" : `${total} faltantes`;
    section.append(meta);

    const list = document.createElement("div");
    list.className = "missing-hub-list";
    teamEntries.forEach((entry) => list.append(createMissingHubItemButton(entry)));
    section.append(list);
    els.missingHubResult.append(section);
  });
}

function renderMissingHubListCheckResult(output, entries) {
  output.textContent = "";

  const resultText = buildMissingHubListCheckText(entries);
  const count = document.createElement("p");
  count.className = "compare-count";
  count.textContent = entries.length
    ? `${entries.length} figurinhas da lista estão faltando.`
    : "Nenhuma figurinha da lista está faltando.";

  const result = document.createElement("pre");
  result.className = "text-check-result-text";
  result.textContent = resultText;

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "ghost-button neutral-button";
  copyButton.textContent = "Copiar resultado";
  copyButton.addEventListener("click", async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(resultText);
      savePulse();
      return;
    }

    window.prompt("Copie o resultado:", resultText);
  });
  actions.append(copyButton);

  if (entries.length) {
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "primary-button";
    addButton.textContent = "Inserir marcadas";
    addButton.addEventListener("click", async () => {
      addButton.disabled = true;
      for (const entry of entries) {
        await addMissingPick(entry.item);
      }
      output.textContent = "";
      const done = document.createElement("p");
      done.className = "compare-count";
      done.textContent = `${entries.length} figurinhas adicionadas às marcadas.`;
      output.append(done);
    });
    actions.append(addButton);
  }

  output.append(count, result, actions);
}

function renderMissingHubListCheckPanel() {
  els.missingHubListCheckResult.textContent = "";

  const section = document.createElement("section");
  section.className = "compare-column text-check-column";

  const heading = document.createElement("h3");
  heading.textContent = "Cole a lista para conferir";
  section.append(heading);

  const textarea = document.createElement("textarea");
  textarea.className = "text-check-input";
  textarea.rows = 10;
  textarea.placeholder = "MEX: 2, 5, 6\nBRA 🇧🇷: 1, 15\nCC 🥤: 8, 9";
  section.append(textarea);

  const actions = document.createElement("div");
  actions.className = "missing-review-actions";

  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.className = "primary-button";
  checkButton.textContent = "Verificar lista";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "ghost-button neutral-button";
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", closeMissingHubListCheck);

  actions.append(checkButton, cancelButton);
  section.append(actions);

  const output = document.createElement("div");
  output.className = "text-check-output";
  section.append(output);

  checkButton.addEventListener("click", () => {
    const parsedItemIds = parseDuplicatePastedStickerList(textarea.value);
    const entries = getMissingHubAggregates().filter((entry) => parsedItemIds.has(entry.item.id));
    renderMissingHubListCheckResult(output, entries);
  });

  els.missingHubListCheckResult.append(section);
}

function openMissingHubListCheck() {
  renderMissingHubListCheckPanel();
  els.missingHubListCheckPanel.classList.remove("hidden");
  els.missingHubListCheckPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  els.missingHubListCheckResult.querySelector(".text-check-input")?.focus({ preventScroll: true });
}

function closeMissingHubListCheck() {
  els.missingHubListCheckPanel.classList.add("hidden");
  els.missingHubListCheckResult.textContent = "";
}

function renderMissingHubScreen() {
  if (!state.missingHubActive) return;

  updateMissingHubPickerLabels();
  updateMissingHubClearButton();
  renderMissingPickPanel();

  const aggregates = getMissingHubAggregates();
  const individualCount = aggregates.length;
  const totalCount = aggregates.reduce((sum, entry) => sum + entry.quantity, 0);
  const individualLabel = individualCount === 1 ? "1 individual" : `${individualCount} individuais`;
  els.missingHubSummary.textContent = `${individualLabel} - ${totalCount} no total`;

  renderMissingHubList(aggregates);
  els.emptyMissingHub.classList.toggle("hidden", aggregates.length > 0);
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
  return createStickerRecordForAlbum(state.activeAlbum, item, status, notes, existing);
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

  updateHomeCreatePanelVisibility();
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
  els.closeMissingReviewButton.addEventListener("click", handleMissingReviewClose);
  els.finishReorderButton.addEventListener("click", () => setReorderMode(false));

  els.backButton.addEventListener("click", () => {
    if (state.missingHubActive) {
      closeMissingHubScreen();
      return;
    }

    if (state.duplicatesActive) {
      closeDuplicatesScreen();
      return;
    }

    closeAlbum();
  });
  els.duplicatesButton.addEventListener("click", openDuplicatesScreen);
  els.missingHubButton.addEventListener("click", openMissingHubScreen);
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
  els.shareDuplicatesButton.addEventListener("click", async () => {
    try {
      await shareDuplicates();
    } catch (error) {
      if (error?.name !== "AbortError") {
        window.alert("NÃ£o foi possÃ­vel compartilhar as repetidas agora.");
      }
    }
  });
  els.whatsappDuplicatesButton.addEventListener("click", () => shareDuplicates(true));
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

  els.duplicateClearFilterButton.addEventListener("click", () => {
    els.duplicateSearchInput.value = "";
    els.duplicateStatusFilter.value = "all";
    els.duplicateTypeFilter.value = "all";
    renderDuplicatesScreen();
  });
  els.duplicateFilterToggle.addEventListener("click", () => {
    els.duplicateFilterPanel.classList.toggle("hidden");
  });
  els.duplicateListCheckButton.addEventListener("click", openDuplicateListCheck);
  els.closeDuplicateListCheckButton.addEventListener("click", closeDuplicateListCheck);
  els.duplicateImportButton.addEventListener("click", openDuplicateImport);
  els.closeDuplicateImportButton.addEventListener("click", closeDuplicateImport);

  [els.duplicateSearchInput, els.duplicateStatusFilter, els.duplicateTypeFilter].forEach((el) => {
    el.addEventListener("input", renderDuplicatesScreen);
    el.addEventListener("change", renderDuplicatesScreen);
  });

  els.missingHubClearFilterButton.addEventListener("click", () => {
    Array.from(els.missingHubAlbumFilter.options).forEach((option) => {
      option.selected = option.value === "all";
    });
    Array.from(els.missingHubTeamFilter.options).forEach((option) => {
      option.selected = option.value === "all";
    });
    els.missingHubTypeFilter.value = "all";
    renderMissingHubScreen();
  });
  els.missingHubFilterToggle.addEventListener("click", () => {
    els.missingHubFilterPanel.classList.toggle("hidden");
  });
  els.missingHubAlbumPickerButton.addEventListener("click", () => openMissingFilterPicker("album"));
  els.missingHubTeamPickerButton.addEventListener("click", () => openMissingFilterPicker("team"));
  els.applyMissingFilterPickerButton.addEventListener("click", applyMissingFilterPicker);
  els.cancelMissingFilterPickerButton.addEventListener("click", closeMissingFilterPicker);
  els.selectAllMissingFilterPickerButton.addEventListener("click", selectAllMissingFilterPickerOptions);
  els.clearMissingFilterPickerButton.addEventListener("click", clearMissingFilterPickerOptions);
  els.missingFilterPickerSearch.addEventListener("input", renderMissingFilterPickerOptions);
  els.clearMissingPicksButton.addEventListener("click", clearMissingPicks);
  els.copyMissingPicksButton.addEventListener("click", async () => {
    try {
      await copyMissingPicks();
    } catch {
      window.alert("Não foi possível copiar as figurinhas marcadas agora.");
    }
  });
  els.copyVisibleMissingButton.addEventListener("click", async () => {
    try {
      await copyVisibleMissingHub();
    } catch {
      window.alert("Não foi possível copiar as faltantes agora.");
    }
  });

  els.missingHubAlbumFilter.addEventListener("input", () => {
    normalizeMissingHubAlbumSelection();
    renderMissingHubScreen();
  });
  els.missingHubAlbumFilter.addEventListener("change", () => {
    normalizeMissingHubAlbumSelection();
    renderMissingHubScreen();
  });

  [els.missingHubTeamFilter, els.missingHubTypeFilter].forEach((el) => {
    el.addEventListener("input", renderMissingHubScreen);
    el.addEventListener("change", renderMissingHubScreen);
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

  els.updatePwaButton.addEventListener("click", updateInstalledPwa);
  window.setTimeout(showInstallFallback, 1200);
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  try {
    return await navigator.serviceWorker.register("sw.js");
  } catch (error) {
    console.warn("Service worker nao registrado", error);
    return null;
  }
}

function waitForServiceWorkerActivation(worker) {
  return new Promise((resolve) => {
    if (!worker || worker.state === "activated") {
      resolve();
      return;
    }

    worker.addEventListener("statechange", () => {
      if (worker.state === "activated") resolve();
    });
  });
}

async function updateInstalledPwa() {
  if (!("serviceWorker" in navigator)) {
    window.alert("Atualização automática não disponível neste navegador.");
    return;
  }

  const button = els.updatePwaButton;
  button.innerHTML = "";
  button.setAttribute("aria-label", "Atualizar app instalado");
  button.title = "Atualizar app";
  button.disabled = true;
  button.classList.add("is-checking-update");

  try {
    const registration = await navigator.serviceWorker.getRegistration() || await registerServiceWorker();
    if (!registration) {
      window.alert("Não foi possível encontrar o app instalado para atualizar.");
      return;
    }

    let reloaded = false;
    const reloadOnce = () => {
      if (reloaded) return;
      reloaded = true;
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener("controllerchange", reloadOnce, { once: true });

    const updatedRegistration = await registration.update();
    const updateWorker = updatedRegistration.installing || updatedRegistration.waiting;

    if (updateWorker) {
      await waitForServiceWorkerActivation(updateWorker);
      reloadOnce();
      return;
    }

    window.alert("O app já está atualizado.");
  } catch (error) {
    window.alert("Não foi possível atualizar o app agora.");
  } finally {
    button.disabled = false;
    button.classList.remove("is-checking-update");
    button.innerHTML = "";
    button.setAttribute("aria-label", "Atualizar app instalado");
    button.title = "Atualizar app";
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

els.missingHubListCheckButton?.addEventListener("click", openMissingHubListCheck);
els.closeMissingHubListCheckButton?.addEventListener("click", closeMissingHubListCheck);

const SCANNER_TEAM_CODES = [
  "PN", "FWC", "CC",
  "MEX", "RSA", "KOR", "CZE", "CAN", "BIH", "QAT", "SUI",
  "BRA", "MAR", "HAI", "SCO", "USA", "PAR", "AUS", "TUR",
  "GER", "CUW", "CIV", "ECU", "NED", "JPN", "SWE", "TUN",
  "BEL", "EGY", "IRN", "NZL", "ESP", "CPV", "KSA", "URU",
  "FRA", "SEN", "IRQ", "NOR", "ARG", "ALG", "AUT", "JOR",
  "POR", "COD", "UZB", "COL", "ENG", "CRO", "GHA", "PAN"
];

const SCANNER_CODE_ALIASES = {
  "8RA": "BRA",
  "6ER": "GER",
  "0ER": "GER",
  "8EL": "BEL",
  "6EL": "BEL",
  "CR0": "CRO",
  "CRQ": "CRO",
  "IR0": "IRQ",
  "IRO": "IRQ",
  "1RQ": "IRQ",
  "OAT": "QAT",
  "0AT": "QAT",
  "SC0": "SCO",
  "NZ1": "NZL",
  "N2L": "NZL"
};

let scannerObserver = null;
let tesseractLoaderPromise = null;
let advancedOcrLoaderPromise = null;
let advancedOcrEnginePromise = null;
let scannerCameraStream = null;
const GOOGLE_VISION_API_KEY_STORAGE_KEY = "copa2026GoogleVisionApiKey";
const HOME_ACTIONS = [
  { id: "showAlbumFormButton", label: "Adicionar álbum" },
  { id: "importAlbumButton", label: "Importar" },
  { id: "duplicatesButton", label: "Repetidas" },
  { id: "missingHubButton", label: "Faltantes" },
  { id: "compareModeButton", label: "Comparar álbuns" },
  { id: "stickerScannerButton", label: "Digitalizar figurinha" }
];
const homeActionSlots = new Map();

function loadTesseractClient() {
  if (window.Tesseract) {
    return Promise.resolve(window.Tesseract);
  }

  if (!tesseractLoaderPromise) {
    tesseractLoaderPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
      script.async = true;
      script.onload = () => resolve(window.Tesseract);
      script.onerror = () => reject(new Error("Não foi possível carregar o OCR."));
      document.head.append(script);
    });
  }

  return tesseractLoaderPromise;
}

async function loadAdvancedOcrEngine() {
  if (!advancedOcrLoaderPromise) {
    advancedOcrLoaderPromise = import("https://unpkg.com/client-side-ocr@latest/dist/index.mjs");
  }

  const module = await advancedOcrLoaderPromise;

  if (!advancedOcrEnginePromise) {
    const createEngine = module.createOCREngine || module.createRapidOCREngine;
    if (!createEngine) {
      throw new Error("OCR avancado indisponivel.");
    }

    const engine = createEngine({
      language: "en",
      modelVersion: "PP-OCRv5",
      modelType: "mobile"
    });

    advancedOcrEnginePromise = engine.initialize().then(() => engine);
  }

  return advancedOcrEnginePromise;
}

function findButtonByLabel(label) {
  const normalizedLabel = label.toLowerCase();
  return Array.from(document.querySelectorAll("button"))
    .find((button) => button.textContent?.trim().toLowerCase() === normalizedLabel);
}

function getScannerHomeAnchor() {
  return findButtonByLabel("Comparar álbuns")
    || findButtonByLabel("Comparar albuns")
    || findButtonByLabel("Faltantes")
    || findButtonByLabel("Repetidas")
    || findButtonByLabel("Adicionar álbum")
    || findButtonByLabel("Adicionar album");
}

function initStickerScannerFeature() {
  ensureStickerScannerUi();

  if (!scannerObserver) {
    scannerObserver = new MutationObserver(() => ensureStickerScannerUi());
    scannerObserver.observe(document.body, { childList: true, subtree: true });
  }
}

function ensureStickerScannerUi() {
  if (document.querySelector("#stickerScannerButton")) {
    return;
  }

  const anchor = getScannerHomeAnchor();
  if (!anchor?.parentElement) {
    return;
  }

  const button = document.createElement("button");
  button.id = "stickerScannerButton";
  button.className = "ghost-button neutral-button scanner-entry-button";
  button.type = "button";
  button.textContent = "Digitalizar figurinha";
  button.addEventListener("click", openStickerScannerPanel);

  const panel = createStickerScannerPanel();
  anchor.parentElement.insertBefore(button, anchor.nextElementSibling);
  button.insertAdjacentElement("afterend", panel);
}

function createStickerScannerPanel() {
  const panel = document.createElement("section");
  panel.id = "stickerScannerPanel";
  panel.className = "scanner-panel hidden";
  panel.innerHTML = `
    <div class="scanner-heading">
      <div>
        <p class="panel-kicker">Digitalização</p>
        <h2>Encontrar figurinhas</h2>
      </div>
      <button class="ghost-button neutral-button scanner-close-button" type="button">Fechar</button>
    </div>
    <div class="scanner-actions">
      <button class="primary-button scanner-camera-button" type="button">Abrir câmera</button>
      <button class="ghost-button neutral-button scanner-gallery-button" type="button">Escolher imagem</button>
      <input class="scanner-gallery-input" type="file" accept="image/*" hidden>
    </div>
    <div class="scanner-cloud-config">
      <label for="scannerGoogleVisionKey">Google Cloud Vision API key</label>
      <div class="scanner-key-row">
        <input id="scannerGoogleVisionKey" class="scanner-google-key-input" type="password" placeholder="Cole sua API key" autocomplete="off">
        <button class="ghost-button neutral-button scanner-save-key-button" type="button">Salvar</button>
        <button class="ghost-button danger-button scanner-clear-key-button" type="button">Remover</button>
      </div>
      <p>Use uma chave restrita ao domínio do app. Sem chave, o app usa apenas OCR local.</p>
    </div>
    <div class="scanner-camera-view hidden">
      <video class="scanner-video" playsinline muted></video>
      <div class="scanner-camera-actions">
        <button class="primary-button scanner-capture-button" type="button">Capturar</button>
        <button class="ghost-button neutral-button scanner-stop-camera-button" type="button">Cancelar câmera</button>
      </div>
    </div>
    <div class="scanner-preview hidden">
      <canvas class="scanner-canvas"></canvas>
    </div>
    <p class="scanner-status">Escolha uma foto para iniciar.</p>
    <div class="scanner-result hidden">
      <div class="scanner-result-heading">
        <h3>Figurinhas encontradas</h3>
      </div>
      <pre class="scanner-result-text"></pre>
      <button class="ghost-button neutral-button scanner-copy-button" type="button">Copiar resultado</button>
    </div>
  `;

  const galleryInput = panel.querySelector(".scanner-gallery-input");
  const googleKeyInput = panel.querySelector(".scanner-google-key-input");

  panel.querySelector(".scanner-close-button").addEventListener("click", closeStickerScannerPanel);
  panel.querySelector(".scanner-camera-button").addEventListener("click", () => openScannerCamera(panel));
  panel.querySelector(".scanner-capture-button").addEventListener("click", () => captureScannerCameraFrame(panel));
  panel.querySelector(".scanner-stop-camera-button").addEventListener("click", () => stopScannerCamera(panel));
  panel.querySelector(".scanner-gallery-button").addEventListener("click", () => galleryInput.click());
  googleKeyInput.value = getGoogleVisionApiKey();
  panel.querySelector(".scanner-save-key-button").addEventListener("click", () => {
    saveGoogleVisionApiKey(googleKeyInput.value);
    panel.querySelector(".scanner-status").textContent = getGoogleVisionApiKey()
      ? "Chave do Google Vision salva neste aparelho."
      : "Informe uma chave para usar o Google Vision.";
  });
  panel.querySelector(".scanner-clear-key-button").addEventListener("click", () => {
    saveGoogleVisionApiKey("");
    googleKeyInput.value = "";
    panel.querySelector(".scanner-status").textContent = "Chave removida. O app usara OCR local.";
  });
  panel.querySelector(".scanner-copy-button").addEventListener("click", async () => {
    const text = panel.querySelector(".scanner-result-text").innerText;
    await copyText(text, panel.querySelector(".scanner-copy-button"));
  });

  [galleryInput].forEach((input) => {
    input.addEventListener("change", () => {
      const file = input.files?.[0];
      input.value = "";
      if (file) {
        processStickerScannerFile(file, panel);
      }
    });
  });

  return panel;
}

function openStickerScannerPanel() {
  const panel = document.querySelector("#stickerScannerPanel");
  panel?.classList.remove("hidden");
  panel?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeStickerScannerPanel() {
  stopScannerCamera(document.querySelector("#stickerScannerPanel"));
  document.querySelector("#stickerScannerPanel")?.classList.add("hidden");
}

async function openScannerCamera(panel) {
  const cameraView = panel.querySelector(".scanner-camera-view");
  const video = panel.querySelector(".scanner-video");
  const status = panel.querySelector(".scanner-status");

  if (!navigator.mediaDevices?.getUserMedia) {
    status.textContent = "Camera nao disponivel neste navegador.";
    return;
  }

  try {
    stopScannerCamera(panel);
    status.textContent = "Abrindo camera...";
    scannerCameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1920 },
        height: { ideal: 1080 }
      },
      audio: false
    });
    video.srcObject = scannerCameraStream;
    await video.play();
    cameraView.classList.remove("hidden");
    status.textContent = "Posicione as figurinhas e toque em Capturar.";
  } catch (error) {
    status.textContent = "Nao foi possivel abrir a camera.";
  }
}

async function captureScannerCameraFrame(panel) {
  const video = panel.querySelector(".scanner-video");
  const status = panel.querySelector(".scanner-status");

  if (!video.videoWidth || !video.videoHeight) {
    status.textContent = "A camera ainda nao esta pronta.";
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const file = await new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(new File([blob], "figurinha-camera.jpg", { type: "image/jpeg" }));
    }, "image/jpeg", 0.95);
  });

  stopScannerCamera(panel);
  await processStickerScannerFile(file, panel);
}

function stopScannerCamera(panel) {
  if (scannerCameraStream) {
    scannerCameraStream.getTracks().forEach((track) => track.stop());
    scannerCameraStream = null;
  }

  const cameraView = panel?.querySelector(".scanner-camera-view");
  const video = panel?.querySelector(".scanner-video");

  if (video) {
    video.pause();
    video.srcObject = null;
  }

  cameraView?.classList.add("hidden");
}

function getGoogleVisionApiKey() {
  try {
    return window.localStorage.getItem(GOOGLE_VISION_API_KEY_STORAGE_KEY) || "";
  } catch (error) {
    return "";
  }
}

function saveGoogleVisionApiKey(apiKey) {
  try {
    const cleanApiKey = apiKey.trim();
    if (cleanApiKey) {
      window.localStorage.setItem(GOOGLE_VISION_API_KEY_STORAGE_KEY, cleanApiKey);
    } else {
      window.localStorage.removeItem(GOOGLE_VISION_API_KEY_STORAGE_KEY);
    }
  } catch (error) {
    console.warn("Nao foi possivel salvar a chave do Google Vision.", error);
  }
}

function initAppSettingsFeature() {
  if (document.querySelector("#appSettingsButton")) {
    return;
  }

  const button = document.createElement("button");
  button.id = "appSettingsButton";
  button.className = "theme-button app-settings-button";
  button.type = "button";
  button.setAttribute("aria-label", "Configurações do app");
  button.title = "Configurações";
  button.innerHTML = '<span aria-hidden="true">⚙</span>';
  button.addEventListener("click", openAppSettingsPanel);

  els.updatePwaButton?.insertAdjacentElement("afterend", button);
  document.body.append(createAppSettingsPanel());
}

function createAppSettingsPanel() {
  const panel = document.createElement("section");
  panel.id = "appSettingsPanel";
  panel.className = "app-settings-panel hidden";
  panel.setAttribute("aria-live", "polite");
  panel.innerHTML = `
    <div class="app-settings-card">
      <div class="app-settings-heading">
        <div>
          <p class="panel-kicker">Configuração</p>
          <h2>App</h2>
        </div>
        <button class="ghost-button neutral-button app-settings-close-button" type="button">Fechar</button>
      </div>
      <div class="app-settings-cloud-config">
        <label for="appGoogleVisionKey">Google Cloud Vision API key</label>
        <div class="scanner-key-row">
          <input id="appGoogleVisionKey" class="scanner-google-key-input" type="password" placeholder="Cole sua API key" autocomplete="off">
          <button class="primary-button app-settings-save-key-button" type="button">Salvar</button>
          <button class="ghost-button danger-button app-settings-clear-key-button" type="button">Remover</button>
        </div>
        <p>Use uma chave restrita ao domínio do app. Sem chave, a digitalização usa apenas OCR local.</p>
        <p class="app-settings-status"></p>
      </div>
      <div class="app-settings-actions-config">
        <div>
          <h3>Botões visíveis</h3>
          <p>Os botões desmarcados ficam dentro de Mais opções.</p>
        </div>
        <div class="home-action-toggle-list"></div>
      </div>
    </div>
  `;

  const input = panel.querySelector(".scanner-google-key-input");
  const status = panel.querySelector(".app-settings-status");
  renderHomeActionSettings(panel);
  input.value = getGoogleVisionApiKey();
  status.textContent = input.value ? "Google Vision configurado neste aparelho." : "Google Vision não configurado.";

  panel.querySelector(".app-settings-close-button").addEventListener("click", closeAppSettingsPanel);
  panel.addEventListener("click", (event) => {
    if (event.target === panel) {
      closeAppSettingsPanel();
    }
  });
  panel.querySelector(".app-settings-save-key-button").addEventListener("click", () => {
    saveGoogleVisionApiKey(input.value);
    input.value = getGoogleVisionApiKey();
    status.textContent = input.value ? "Chave salva neste aparelho." : "Informe uma chave para usar o Google Vision.";
  });
  panel.querySelector(".app-settings-clear-key-button").addEventListener("click", () => {
    saveGoogleVisionApiKey("");
    input.value = "";
    status.textContent = "Chave removida. A digitalização usará OCR local.";
  });

  return panel;
}

function openAppSettingsPanel() {
  const panel = document.querySelector("#appSettingsPanel");
  const input = panel?.querySelector(".scanner-google-key-input");
  const status = panel?.querySelector(".app-settings-status");

  if (!panel || !input || !status) {
    return;
  }

  input.value = getGoogleVisionApiKey();
  status.textContent = input.value ? "Google Vision configurado neste aparelho." : "Google Vision não configurado.";
  renderHomeActionSettings(panel);
  panel.classList.remove("hidden");
  input.focus();
}

function closeAppSettingsPanel() {
  document.querySelector("#appSettingsPanel")?.classList.add("hidden");
}

function getVisibleHomeActionIds() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(HOME_ACTION_VISIBILITY_STORAGE_KEY) || "null");
    if (Array.isArray(saved)) {
      return new Set(saved.filter((id) => HOME_ACTIONS.some((action) => action.id === id)));
    }
  } catch (error) {
    console.warn("Nao foi possivel ler a configuracao dos botoes.", error);
  }

  return new Set(HOME_ACTIONS.map((action) => action.id));
}

function saveVisibleHomeActionIds(ids) {
  try {
    window.localStorage.setItem(HOME_ACTION_VISIBILITY_STORAGE_KEY, JSON.stringify(Array.from(ids)));
  } catch (error) {
    console.warn("Nao foi possivel salvar a configuracao dos botoes.", error);
  }
}

function initHomeActionOrganizer() {
  ensureHomeActionSlots();
  ensureHomeMoreOptionsUi();
  applyHomeActionVisibility();
}

function ensureHomeActionSlots() {
  HOME_ACTIONS.forEach((action) => {
    if (homeActionSlots.has(action.id)) {
      return;
    }

    const button = document.querySelector(`#${action.id}`);
    if (!button?.parentElement) {
      return;
    }

    const slot = document.createComment(`home-action:${action.id}`);
    button.parentElement.insertBefore(slot, button.nextSibling);
    homeActionSlots.set(action.id, slot);
  });
}

function ensureHomeMoreOptionsUi() {
  if (document.querySelector("#homeMoreOptionsButton")) {
    return;
  }

  const toolbar = document.querySelector(".album-toolbar");
  if (!toolbar) {
    return;
  }

  const button = document.createElement("button");
  button.id = "homeMoreOptionsButton";
  button.className = "ghost-button neutral-button home-more-options-button hidden";
  button.type = "button";
  button.textContent = "Mais opções";
  button.addEventListener("click", () => {
    document.querySelector("#homeMoreOptionsPanel")?.classList.toggle("hidden");
  });

  const panel = document.createElement("div");
  panel.id = "homeMoreOptionsPanel";
  panel.className = "home-more-options-panel hidden";
  panel.addEventListener("click", (event) => {
    if (event.target.closest("button")) {
      panel.classList.add("hidden");
    }
  });

  toolbar.append(button, panel);
}

function applyHomeActionVisibility() {
  ensureHomeActionSlots();
  ensureHomeMoreOptionsUi();

  const visibleIds = getVisibleHomeActionIds();
  const moreButton = document.querySelector("#homeMoreOptionsButton");
  const morePanel = document.querySelector("#homeMoreOptionsPanel");

  if (!moreButton || !morePanel) {
    return;
  }

  let hiddenCount = 0;
  HOME_ACTIONS.forEach((action) => {
    const button = document.querySelector(`#${action.id}`);
    const slot = homeActionSlots.get(action.id);

    if (!button || !slot) {
      return;
    }

    if (visibleIds.has(action.id)) {
      slot.parentNode?.insertBefore(button, slot);
    } else {
      hiddenCount += 1;
      morePanel.append(button);
    }
  });

  moreButton.classList.toggle("hidden", hiddenCount === 0);
  morePanel.classList.toggle("hidden", hiddenCount === 0 || morePanel.classList.contains("hidden"));
  updateHomeCreatePanelVisibility(visibleIds);
}

function updateHomeCreatePanelVisibility(visibleIds = getVisibleHomeActionIds()) {
  const createPanel = els.albumCreateActions?.closest(".album-create-panel");

  if (!createPanel) {
    return;
  }

  const formVisible = !els.albumForm.classList.contains("hidden");
  const hasVisibleCreateAction = visibleIds.has("showAlbumFormButton") || visibleIds.has("importAlbumButton");
  createPanel.classList.toggle("hidden", !formVisible && !hasVisibleCreateAction);
}

function renderHomeActionSettings(panel = document) {
  const list = panel.querySelector(".home-action-toggle-list");
  if (!list) {
    return;
  }

  const visibleIds = getVisibleHomeActionIds();
  list.textContent = "";

  HOME_ACTIONS.forEach((action) => {
    const label = document.createElement("label");
    label.className = "home-action-toggle";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = visibleIds.has(action.id);
    input.addEventListener("change", () => {
      const nextVisibleIds = getVisibleHomeActionIds();

      if (input.checked) {
        nextVisibleIds.add(action.id);
      } else {
        nextVisibleIds.delete(action.id);
      }

      saveVisibleHomeActionIds(nextVisibleIds);
      applyHomeActionVisibility();
    });

    const text = document.createElement("span");
    text.textContent = action.label;
    label.append(input, text);
    list.append(label);
  });
}

async function processStickerScannerFile(file, panel) {
  const status = panel.querySelector(".scanner-status");
  const preview = panel.querySelector(".scanner-preview");
  const canvas = panel.querySelector(".scanner-canvas");
  const resultBox = panel.querySelector(".scanner-result");
  const resultText = panel.querySelector(".scanner-result-text");

  resultBox.classList.add("hidden");
  resultText.textContent = "";
  status.textContent = "Preparando imagem...";

  try {
    await drawScannerImage(file, canvas);
    preview.classList.remove("hidden");
    status.textContent = "Carregando OCR local...";

    status.textContent = "Lendo códigos das figurinhas...";

    const recognizedText = await recognizeStickerScannerWithBestEngine(file, canvas, status);
    const found = parseStickerCodesFromScannerText(recognizedText);
    resultText.textContent = found.length
      ? buildScannerResultText(found)
      : "Nenhuma figurinha reconhecida.";
    resultBox.classList.remove("hidden");
    status.textContent = found.length
      ? `${found.length} figurinha(s) encontrada(s).`
      : "Não consegui reconhecer códigos nessa imagem.";
  } catch (error) {
    status.textContent = error.message || "Não foi possível analisar a imagem.";
  }
}

function drawScannerImage(file, canvas) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const maxSide = 8192;
      const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));

      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.filter = "none";
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(image.src);
      resolve();
    };
    image.onerror = () => reject(new Error("Não foi possível abrir a imagem."));
    image.src = URL.createObjectURL(file);
  });
}

async function recognizeStickerScannerWithBestEngine(file, canvas, status) {
  const texts = [];
  const googleVisionApiKey = getGoogleVisionApiKey();

  if (googleVisionApiKey) {
    try {
      status.textContent = "Enviando imagem ao Google Vision...";
      const googleVisionText = await recognizeStickerScannerWithGoogleVision(file, googleVisionApiKey);
      texts.push(googleVisionText);

      if (parseStickerCodesFromScannerText(googleVisionText).length >= 1) {
        status.textContent = "Google Vision encontrou codigos. Refinando resultado...";
      }
    } catch (error) {
      console.warn("Google Vision OCR failed, falling back to local OCR.", error);
      status.textContent = "Google Vision falhou. Tentando OCR local...";
    }
  }

  if (parseStickerCodesFromScannerText(texts.join("\n")).length >= 3) {
    return texts.join("\n");
  }

  status.textContent = "Carregando OCR local...";
  const Tesseract = await loadTesseractClient();
  const tesseractText = await recognizeStickerScannerText(Tesseract, canvas, status);

  texts.push(tesseractText);

  return texts.join("\n");
}

async function recognizeStickerScannerWithGoogleVision(file, apiKey) {
  const content = await fileToBase64Content(file);
  const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      requests: [
        {
          image: { content },
          features: [
            { type: "TEXT_DETECTION", maxResults: 100 }
          ],
          imageContext: {
            languageHints: ["en"]
          }
        }
      ]
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Erro ao chamar Google Vision.");
  }

  const visionResponse = data.responses?.[0];
  if (visionResponse?.error) {
    throw new Error(visionResponse.error.message || "Google Vision nao conseguiu analisar a imagem.");
  }

  return extractGoogleVisionText(visionResponse);
}

function fileToBase64Content(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function extractGoogleVisionText(visionResponse) {
  const pieces = [];

  if (visionResponse.fullTextAnnotation?.text) {
    pieces.push(visionResponse.fullTextAnnotation.text);
  }

  if (Array.isArray(visionResponse.textAnnotations)) {
    visionResponse.textAnnotations.forEach((annotation) => {
      if (annotation.description) {
        pieces.push(annotation.description);
      }
    });
  }

  return pieces.join("\n");
}

function buildScannerResultText(codes) {
  const items = [];
  const unknownCodes = [];

  codes.forEach((code) => {
    const item = getScannerItemFromCode(code);

    if (item) {
      items.push(item);
    } else {
      unknownCodes.push(code);
    }
  });

  const lines = [
    "Figurinhas App",
    "Digitalizadas",
    ""
  ];

  if (items.length) {
    appendCompactItemLines(lines, items);
  }

  if (unknownCodes.length) {
    if (items.length) {
      lines.push("");
    }
    lines.push("Nao encontradas no album:");
    unknownCodes.forEach((code) => lines.push(`- ${code}`));
  }

  return lines.join("\n").trim();
}

function getScannerItemFromCode(label) {
  const match = label.match(/^([A-Z]+)\s+(.+)$/);

  if (!match) {
    return null;
  }

  const rawTeamCode = match[1];
  const teamCode = rawTeamCode === "PN" ? "PANINI" : rawTeamCode;
  const rawNumber = match[2];
  const number = teamCode === "PANINI" ? 0 : Number(rawNumber);

  return COLLECTION_ITEMS.find((item) => {
    if (item.teamCode !== teamCode) {
      return false;
    }

    return String(item.number) === String(Number.isNaN(number) ? rawNumber : number);
  }) || null;
}

async function recognizeStickerScannerWithAdvancedOcr(file, canvas, status) {
  const engine = await loadAdvancedOcrEngine();
  status.textContent = "Detectando etiquetas com OCR avancado...";
  const processAdvancedImage = engine.processImage?.bind(engine) || engine.process?.bind(engine);

  if (!processAdvancedImage) {
    throw new Error("Motor de OCR avancado sem metodo de processamento.");
  }

  const result = await processAdvancedImage(file, {
    enableTextClassification: true,
    enableWordSegmentation: true,
    returnConfidence: true,
    preprocessConfig: {
      detectImageNetNorm: true,
      recStandardNorm: true
    },
    postprocessConfig: {
      unclipRatio: 2.0
    }
  });

  const pieces = [];
  appendAdvancedOcrTextPieces(pieces, result);

  if (!pieces.length && canvas) {
    const canvasResult = await processAdvancedImage(canvas, {
      enableTextClassification: true,
      enableWordSegmentation: true,
      returnConfidence: true
    });
    appendAdvancedOcrTextPieces(pieces, canvasResult);
  }

  return pieces.join("\n");
}

function appendAdvancedOcrTextPieces(pieces, result) {
  if (!result) {
    return;
  }

  if (typeof result.text === "string") {
    pieces.push(result.text);
  }

  if (Array.isArray(result.lines)) {
    result.lines.forEach((line) => {
      if (typeof line === "string") {
        pieces.push(line);
      } else if (line?.text) {
        pieces.push(line.text);
      }
    });
  }

  if (Array.isArray(result.wordBoxes)) {
    result.wordBoxes.forEach((word) => {
      if (typeof word === "string") {
        pieces.push(word);
      } else if (word?.text) {
        pieces.push(word.text);
      }
    });
  }

  if (Array.isArray(result.items)) {
    result.items.forEach((item) => {
      if (typeof item === "string") {
        pieces.push(item);
      } else if (item?.text) {
        pieces.push(item.text);
      }
    });
  }
}

async function recognizeStickerScannerText(Tesseract, canvas, status) {
  const texts = [];
  const nativeText = await recognizeWithNativeTextDetector(canvas);
  let currentLabel = "OCR";

  if (nativeText) {
    texts.push(nativeText);
  }

  const labelVariants = [
    ...createScannerLabelCandidateCanvases(canvas),
    ...createScannerSlidingLabelCanvases(canvas)
  ];
  const variants = [
    { label: "normal", canvas },
    { label: "original ampliada", canvas: createScannerVariantCanvas(canvas, { scale: 1.65 }) },
    { label: "alto contraste", canvas: createScannerVariantCanvas(canvas, { threshold: true }) },
    { label: "girada", canvas: createScannerVariantCanvas(canvas, { rotate: Math.PI }) },
    ...labelVariants,
    ...createScannerCropCanvases(canvas)
  ];

  const worker = await Tesseract.createWorker("eng", 1, {
    logger: (progress) => {
      if (progress.status === "recognizing text") {
        const percent = Math.round(progress.progress * 100);
        status.textContent = `Lendo imagem (${currentLabel})... ${percent}%`;
      }
    }
  });

  try {
    await worker.setParameters({
      tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 :-",
      preserve_interword_spaces: "1",
      tessedit_pageseg_mode: "11",
      user_defined_dpi: "300"
    });

    for (let index = 0; index < variants.length; index += 1) {
      const variant = variants[index];
      currentLabel = `${index + 1}/${variants.length} ${variant.label}`;
      status.textContent = `Lendo imagem (${currentLabel})...`;

      await worker.setParameters({
        tessedit_pageseg_mode: /^(etiqueta|janela)/.test(variant.label) ? "7" : "11"
      });
      const { data } = await worker.recognize(variant.canvas);
      texts.push(data.text);
    }
  } finally {
    await worker.terminate();
  }

  return texts.join("\n");
}
/*
      logger: (progress) => {
        if (progress.status === "recognizing text") {
          const percent = Math.round(progress.progress * 100);
          status.textContent = `Lendo imagem (${index + 1}/${variants.length})... ${percent}%`;
        }
      }
    });

    texts.push(data.text);
  }

  return texts.join("\n");
}
*/

async function recognizeWithNativeTextDetector(canvas) {
  if (!("TextDetector" in window)) {
    return "";
  }

  try {
    const detector = new TextDetector();
    const results = await detector.detect(canvas);
    return results.map((result) => result.rawValue).join("\n");
  } catch (error) {
    return "";
  }
}

function createScannerVariantCanvas(source, options = {}) {
  const rotate = options.rotate || 0;
  const scale = options.scale || 1;
  const rotated = Math.abs(Math.sin(rotate)) > 0.1;
  const canvas = document.createElement("canvas");
  canvas.width = Math.round((rotated ? source.height : source.width) * scale);
  canvas.height = Math.round((rotated ? source.width : source.height) * scale);

  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(rotate);
  context.drawImage(source, -source.width * scale / 2, -source.height * scale / 2, source.width * scale, source.height * scale);
  context.setTransform(1, 0, 0, 1, 0, 0);

  if (options.threshold) {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let index = 0; index < data.length; index += 4) {
      const value = data[index] * 0.299 + data[index + 1] * 0.587 + data[index + 2] * 0.114;
      const adjusted = value > 154 ? 255 : 0;
      data[index] = adjusted;
      data[index + 1] = adjusted;
      data[index + 2] = adjusted;
    }

    context.putImageData(imageData, 0, 0);
  }

  return canvas;
}

function createScannerCropCanvases(source) {
  const columns = source.width > source.height ? 4 : 3;
  const rows = source.height > source.width ? 4 : 3;
  const overlap = 0.22;
  const baseWidth = source.width / columns;
  const baseHeight = source.height / rows;
  const crops = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const sx = Math.max(0, column * baseWidth - baseWidth * overlap);
      const sy = Math.max(0, row * baseHeight - baseHeight * overlap);
      const ex = Math.min(source.width, (column + 1) * baseWidth + baseWidth * overlap);
      const ey = Math.min(source.height, (row + 1) * baseHeight + baseHeight * overlap);
      const sw = ex - sx;
      const sh = ey - sy;
      const scale = Math.min(2.5, Math.max(1.25, 1050 / Math.max(sw, sh)));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(sw * scale);
      canvas.height = Math.round(sh * scale);

      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.filter = "grayscale(1) contrast(2.05) brightness(1.12)";
      context.drawImage(source, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      crops.push({ label: `setor ${row + 1}-${column + 1}`, canvas });
    }
  }

  return crops;
}

function createScannerLabelCandidateCanvases(source) {
  const context = source.getContext("2d", { willReadFrequently: true });
  const { width, height } = source;
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const visited = new Uint8Array(width * height);
  const boxes = [];
  const queue = [];

  const isCandidatePixel = (x, y) => {
    const offset = (y * width + x) * 4;
    const value = data[offset] * 0.299 + data[offset + 1] * 0.587 + data[offset + 2] * 0.114;
    return value >= 10 && value <= 178;
  };

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const start = y * width + x;

      if (visited[start] || !isCandidatePixel(x, y)) {
        visited[start] = 1;
        continue;
      }

      let minX = x;
      let maxX = x;
      let minY = y;
      let maxY = y;
      let count = 0;
      queue.length = 0;
      queue.push(start);
      visited[start] = 1;

      while (queue.length) {
        const index = queue.pop();
        const px = index % width;
        const py = Math.floor(index / width);
        count += 1;
        minX = Math.min(minX, px);
        maxX = Math.max(maxX, px);
        minY = Math.min(minY, py);
        maxY = Math.max(maxY, py);

        const neighbors = [
          index - 1,
          index + 1,
          index - width,
          index + width
        ];

        for (const next of neighbors) {
          if (next < 0 || next >= visited.length || visited[next]) {
            continue;
          }

          const nx = next % width;
          const ny = Math.floor(next / width);

          if ((Math.abs(nx - px) + Math.abs(ny - py)) !== 1) {
            continue;
          }

          if (!isCandidatePixel(nx, ny)) {
            visited[next] = 1;
            continue;
          }

          visited[next] = 1;
          queue.push(next);
        }
      }

      const boxWidth = maxX - minX + 1;
      const boxHeight = maxY - minY + 1;
      const ratio = boxWidth / Math.max(1, boxHeight);
      const minWidth = Math.max(22, width * 0.022);
      const maxWidth = width * 0.18;
      const minHeight = Math.max(8, height * 0.006);
      const maxHeight = height * 0.055;

      if (
        count >= 35 &&
        boxWidth >= minWidth &&
        boxWidth <= maxWidth &&
        boxHeight >= minHeight &&
        boxHeight <= maxHeight &&
        ratio >= 1.4 &&
        ratio <= 7.5
      ) {
        boxes.push({ x: minX, y: minY, width: boxWidth, height: boxHeight, area: count });
      }
    }
  }

  return mergeScannerBoxes(boxes)
    .sort((a, b) => (a.y - b.y) || (a.x - b.x))
    .slice(0, 50)
    .flatMap((box, index) => createScannerLabelCanvasesFromBox(source, box, index));
}

function mergeScannerBoxes(boxes) {
  const merged = [];

  for (const box of boxes.sort((a, b) => b.area - a.area)) {
    const existing = merged.find((candidate) => scannerBoxesOverlap(candidate, box));

    if (existing) {
      const minX = Math.min(existing.x, box.x);
      const minY = Math.min(existing.y, box.y);
      const maxX = Math.max(existing.x + existing.width, box.x + box.width);
      const maxY = Math.max(existing.y + existing.height, box.y + box.height);
      existing.x = minX;
      existing.y = minY;
      existing.width = maxX - minX;
      existing.height = maxY - minY;
      existing.area += box.area;
    } else {
      merged.push({ ...box });
    }
  }

  return merged;
}

function scannerBoxesOverlap(a, b) {
  const ax2 = a.x + a.width;
  const ay2 = a.y + a.height;
  const bx2 = b.x + b.width;
  const by2 = b.y + b.height;
  const ix = Math.max(0, Math.min(ax2, bx2) - Math.max(a.x, b.x));
  const iy = Math.max(0, Math.min(ay2, by2) - Math.max(a.y, b.y));
  const intersection = ix * iy;
  const smallest = Math.min(a.width * a.height, b.width * b.height);

  return intersection / Math.max(1, smallest) > 0.28;
}

function createScannerLabelCanvasesFromBox(source, box, index) {
  const crops = [];
  const variants = [
    { xPad: 0.6, yPad: 1.15, scale: 7 },
    { xPad: 1.2, yPad: 1.8, scale: 6 }
  ];

  variants.forEach((variant, variantIndex) => {
    const sx = Math.max(0, box.x - box.width * variant.xPad);
    const sy = Math.max(0, box.y - box.height * variant.yPad);
    const ex = Math.min(source.width, box.x + box.width * (1 + variant.xPad));
    const ey = Math.min(source.height, box.y + box.height * (1 + variant.yPad));
    const sw = ex - sx;
    const sh = ey - sy;
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(sw * variant.scale);
    canvas.height = Math.round(sh * variant.scale);

    const context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.filter = "grayscale(1) contrast(2.35) brightness(1.2)";
    context.drawImage(source, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    crops.push({ label: `etiqueta ${index + 1}.${variantIndex + 1}`, canvas });
  });

  return crops;
}

function createScannerSlidingLabelCanvases(source) {
  const context = source.getContext("2d", { willReadFrequently: true });
  const { width, height } = source;
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const candidates = [];
  const sizes = [
    { width: 0.075, height: 0.025 },
    { width: 0.095, height: 0.03 },
    { width: 0.12, height: 0.035 }
  ];

  sizes.forEach((size) => {
    const windowWidth = Math.round(width * size.width);
    const windowHeight = Math.round(height * size.height);
    const stepX = Math.max(10, Math.round(windowWidth * 0.42));
    const stepY = Math.max(8, Math.round(windowHeight * 0.55));

    for (let y = 0; y <= height - windowHeight; y += stepY) {
      for (let x = 0; x <= width - windowWidth; x += stepX) {
        const score = scoreScannerLabelWindow(data, width, x, y, windowWidth, windowHeight);

        if (score >= 0.42) {
          candidates.push({ x, y, width: windowWidth, height: windowHeight, score });
        }
      }
    }
  });

  return suppressScannerLabelWindows(candidates)
    .slice(0, 42)
    .map((box, index) => createScannerWindowCanvas(source, box, index));
}

function scoreScannerLabelWindow(data, imageWidth, x, y, width, height) {
  let dark = 0;
  let middle = 0;
  let light = 0;
  let total = 0;

  for (let py = y; py < y + height; py += 2) {
    for (let px = x; px < x + width; px += 2) {
      const offset = (py * imageWidth + px) * 4;
      const value = data[offset] * 0.299 + data[offset + 1] * 0.587 + data[offset + 2] * 0.114;
      total += 1;

      if (value < 70) {
        dark += 1;
      } else if (value < 185) {
        middle += 1;
      } else {
        light += 1;
      }
    }
  }

  const darkRatio = dark / Math.max(1, total);
  const middleRatio = middle / Math.max(1, total);
  const lightRatio = light / Math.max(1, total);
  const labelLike = darkRatio * 0.7 + middleRatio * 0.45 - Math.max(0, lightRatio - 0.28) * 0.45;

  return labelLike;
}

function suppressScannerLabelWindows(candidates) {
  const selected = [];

  candidates
    .sort((a, b) => b.score - a.score)
    .forEach((candidate) => {
      if (!selected.some((box) => scannerBoxesOverlap(box, candidate))) {
        selected.push(candidate);
      }
    });

  return selected;
}

function createScannerWindowCanvas(source, box, index) {
  const xPad = box.width * 1.25;
  const yPad = box.height * 2.2;
  const sx = Math.max(0, box.x - xPad);
  const sy = Math.max(0, box.y - yPad);
  const ex = Math.min(source.width, box.x + box.width + xPad);
  const ey = Math.min(source.height, box.y + box.height + yPad);
  const sw = ex - sx;
  const sh = ey - sy;
  const scale = Math.max(5.5, Math.min(9, 760 / Math.max(1, sh)));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(sw * scale);
  canvas.height = Math.round(sh * scale);

  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.filter = "grayscale(1) contrast(2.6) brightness(1.18)";
  context.drawImage(source, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

  return { label: `janela ${index + 1}`, canvas };
}

function parseStickerCodesFromScannerText(text) {
  const aliases = Object.keys(SCANNER_CODE_ALIASES);
  const codePattern = [...SCANNER_TEAM_CODES, ...aliases]
    .sort((a, b) => b.length - a.length)
    .join("|");
  const normalized = text
    .toUpperCase()
    .replace(/[|]/g, "I")
    .replace(/[^\w\s:-]/g, " ")
    .replace(/\s+/g, " ");
  const matches = new Map();
  const regex = new RegExp(`\\b(${codePattern})\\s*[:\\-]?\\s*([0-9IOQSLB]{1,3})\\b`, "g");
  let match = regex.exec(normalized);

  while (match) {
    const rawCode = match[1];
    const code = SCANNER_CODE_ALIASES[rawCode] || rawCode;
    const number = normalizeScannerStickerNumber(code, match[2]);

    if (isScannerStickerNumberValid(code, number)) {
      matches.set(`${code} ${number}`, `${code} ${number}`);
    }

    match = regex.exec(normalized);
  }

  return Array.from(matches.values()).sort(sortScannerStickerCodes);
}

function normalizeScannerStickerNumber(code, number) {
  if (code === "PN") {
    return "00";
  }

  const normalizedNumber = number
    .toUpperCase()
    .replace(/[IL]/g, "1")
    .replace(/[OQ]/g, "0")
    .replace(/S/g, "5")
    .replace(/B/g, "8");

  return String(Number(normalizedNumber));
}

function isScannerStickerNumberValid(code, number) {
  if (code === "PN") {
    return number === "00";
  }

  const value = Number(number);
  if (!Number.isInteger(value)) {
    return false;
  }

  if (code === "FWC") {
    return value >= 1 && value <= 19;
  }

  if (code === "CC") {
    return value >= 1 && value <= 14;
  }

  return value >= 1 && value <= 20;
}

function sortScannerStickerCodes(a, b) {
  const [codeA, numberA] = a.split(" ");
  const [codeB, numberB] = b.split(" ");
  const indexA = SCANNER_TEAM_CODES.indexOf(codeA);
  const indexB = SCANNER_TEAM_CODES.indexOf(codeB);
  const orderA = indexA === -1 ? SCANNER_TEAM_CODES.length : indexA;
  const orderB = indexB === -1 ? SCANNER_TEAM_CODES.length : indexB;

  if (orderA !== orderB) {
    return orderA - orderB;
  }

  return Number(numberA) - Number(numberB);
}

init();
initAppSettingsFeature();
initStickerScannerFeature();
initHomeActionOrganizer();
