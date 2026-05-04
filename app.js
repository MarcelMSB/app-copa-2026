const DB_NAME = "copa-2026-album-db";
const DB_VERSION = 2;
const ALBUM_STORE = "albums";
const STICKER_STORE = "stickers";
const VIEW_MODE_STORAGE_KEY = "copa-2026-view-mode";
const DEFAULT_VIEW_MODE = "group";

const PANINI_ALBUM = {
  collectionId: "panini-fifa-world-cup-2026",
  name: "Álbum Copa 2026"
};

const GROUPS = [
  {
    id: "other",
    name: "Outras",
    teams: [
      { code: "FWC", name: "FIFA World Cup History", icon: "🏆", count: 19 },
      { code: "CC", name: "Coca-Cola", icon: "🥤", count: 14 }
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
const COLLECTION_TOTAL = COLLECTION_ITEMS.length;
const TEAM_BY_CODE = new Map(TEAMS.map((team) => [team.code, team]));
const GROUP_BY_ID = new Map(GROUPS.map((group) => [group.id, group]));
const ITEMS_BY_TEAM = new Map(TEAMS.map((team) => [
  team.code,
  COLLECTION_ITEMS.filter((item) => item.teamCode === team.code)
]));

const state = {
  db: null,
  albums: [],
  allStickers: [],
  stickers: [],
  activeAlbum: null,
  viewMode: getSavedViewMode(),
  selectedGroupId: null,
  selectedTeamCode: null,
  deferredInstallPrompt: null
};

const els = {
  albumsScreen: document.querySelector("#albumsScreen"),
  stickersScreen: document.querySelector("#stickersScreen"),
  albumForm: document.querySelector("#albumForm"),
  albumName: document.querySelector("#albumName"),
  albumList: document.querySelector("#albumList"),
  emptyAlbums: document.querySelector("#emptyAlbums"),
  backButton: document.querySelector("#backButton"),
  installButton: document.querySelector("#installButton"),
  syncStatus: document.querySelector("#syncStatus"),
  stickersTitle: document.querySelector("#stickersTitle"),
  albumMeta: document.querySelector("#albumMeta"),
  progressRing: document.querySelector("#progressRing"),
  progressPercent: document.querySelector("#progressPercent"),
  progressSummary: document.querySelector("#progressSummary"),
  modeOptions: document.querySelector("#modeOptions"),
  filterToggle: document.querySelector("#filterToggle"),
  filterPanel: document.querySelector("#filterPanel"),
  clearFilterButton: document.querySelector("#clearFilterButton"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
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
        icon: team.icon
      };
    });
  });
}

function formatStickerLabel(code, number) {
  if (code === "CC") return `CC${number}`;
  return `${code} ${number}`;
}

function getFlagSource(entity) {
  if (!entity.flagCode) return null;
  return `assets/flags/${entity.flagCode}.svg`;
}

function flagHtml(entity, className = "flag-img") {
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

async function loadAlbums() {
  const albums = await getAll(ALBUM_STORE);
  const normalized = [];

  for (const album of albums) {
    const nextAlbum = normalizeAlbum(album);
    normalized.push(nextAlbum);

    if (album.collectionId !== nextAlbum.collectionId || album.total !== nextAlbum.total) {
      await putItem(ALBUM_STORE, nextAlbum);
    }
  }

  state.albums = normalized.sort((a, b) => b.createdAt - a.createdAt);
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
  return {
    ...album,
    collectionId: PANINI_ALBUM.collectionId,
    total: COLLECTION_TOTAL,
    updatedAt: album.updatedAt || Date.now()
  };
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

function getVisibleItems() {
  const query = els.searchInput.value.trim().toLowerCase();
  const status = els.statusFilter.value;
  const stickerMap = getStickerMap();

  return COLLECTION_ITEMS.filter((item) => {
    const sticker = stickerMap.get(item.id);
    const group = GROUP_BY_ID.get(item.groupId);
    const haystack = `${item.label} ${item.teamCode} ${item.teamName} ${group?.name || ""} ${sticker?.notes || ""}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesStatus =
      status === "all" ||
      (status === "owned" && isOwned(sticker)) ||
      (status === "missing" && !isOwned(sticker)) ||
      (status === "noted" && Boolean(sticker?.notes));

    return matchesQuery && matchesStatus;
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

function renderAlbums() {
  els.albumList.textContent = "";
  els.emptyAlbums.classList.toggle("hidden", state.albums.length > 0);

  state.albums.forEach((album) => {
    const node = els.albumCardTemplate.content.firstElementChild.cloneNode(true);
    const openButton = node.querySelector(".album-open");
    const deleteButton = node.querySelector(".ghost-button");
    const title = node.querySelector("strong");
    const meta = node.querySelector(".album-info span");
    const count = state.allStickers.filter((sticker) => sticker.albumId === album.id && isOwned(sticker)).length;

    title.textContent = album.name;
    meta.textContent = `${count} obtidas - criado em ${formatDate(album.createdAt)}`;

    openButton.addEventListener("click", () => openAlbum(album.id));
    deleteButton.addEventListener("click", async () => {
      const confirmed = window.confirm(`Excluir "${album.name}" e todas as figurinhas cadastradas nele?`);
      if (!confirmed) return;

      await deleteAlbumWithStickers(album.id);
      state.allStickers = state.allStickers.filter((sticker) => sticker.albumId !== album.id);
      state.stickers = state.stickers.filter((sticker) => sticker.albumId !== album.id);
      await loadAlbums();
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
  const percent = Math.round((owned / COLLECTION_TOTAL) * 100);
  const missing = COLLECTION_TOTAL - owned;

  els.stickersTitle.textContent = album.name;
  els.albumMeta.textContent = `${owned} obtidas - ${missing} faltando`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressSummary.textContent = `${owned} obtidas`;
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
    renderStickerList(ITEMS_BY_TEAM.get(team.code) || [], team.name, `${team.groupName} - ${team.code}`);
    updateBackButton(true);
    return;
  }

  if (state.selectedGroupId) {
    const group = GROUP_BY_ID.get(state.selectedGroupId);
    const teams = TEAMS.filter((team) => team.groupId === group.id);
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
    renderStickerList(ITEMS_BY_TEAM.get(team.code) || [], team.name, `${team.groupName} - ${team.code}`);
    updateBackButton(true);
    return;
  }

  els.collectionKicker.textContent = "Times";
  els.collectionTitle.textContent = "Selecione um time";
  renderTeamCards(TEAMS);
  updateBackButton(false);
}

function renderStickerMode() {
  els.collectionKicker.textContent = "Figurinhas";
  els.collectionTitle.textContent = "Todas as figurinhas";
  renderStickerList(COLLECTION_ITEMS, "Todas as figurinhas", "Toque para marcar. Segure para observacao.", false);
  updateBackButton(false);
}

function renderGroupCards() {
  const visibleItems = getVisibleItems();
  const stickerMap = getStickerMap();
  const visibleGroupIds = new Set(visibleItems.map((item) => item.groupId));

  GROUPS.filter((group) => visibleGroupIds.has(group.id)).forEach((group) => {
    const teams = TEAMS.filter((team) => team.groupId === group.id);
    const items = COLLECTION_ITEMS.filter((item) => item.groupId === group.id);
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
    const items = ITEMS_BY_TEAM.get(team.code) || [];
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
    <span>${owned ? "Ja obtida" : "Faltando"}</span>
    ${hasNote ? `<em>Obs.</em>` : ""}
  `;
  button.setAttribute("aria-label", `${item.label}, ${item.teamName}, ${owned ? "ja obtida" : "faltando"}`);

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

function updateBackButton(visible) {
  els.collectionBackButton.classList.toggle("hidden", !visible);
}

function updateEmptyState() {
  els.emptyCollection.classList.toggle("hidden", els.collectionGrid.children.length > 0);
}

function updateFilterClearButton() {
  const hasFilter = els.searchInput.value.trim() || els.statusFilter.value !== "all";
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
  els.albumForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const album = normalizeAlbum({
      id: crypto.randomUUID(),
      name: els.albumName.value.trim() || PANINI_ALBUM.name,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    await putItem(ALBUM_STORE, album);
    els.albumForm.reset();
    await loadAlbums();
    savePulse();
  });

  els.backButton.addEventListener("click", closeAlbum);
  els.collectionBackButton.addEventListener("click", handleCollectionBack);
  els.filterToggle.addEventListener("click", () => {
    els.filterPanel.classList.toggle("hidden");
  });
  els.clearFilterButton.addEventListener("click", () => {
    els.searchInput.value = "";
    els.statusFilter.value = "all";
    renderCollection();
  });

  els.modeOptions.addEventListener("change", (event) => {
    if (!event.target.matches('input[name="viewMode"]')) return;
    setViewMode(event.target.value);
    state.selectedGroupId = null;
    state.selectedTeamCode = null;
    renderCollection();
  });

  [els.searchInput, els.statusFilter].forEach((el) => {
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
  registerEvents();
  await loadAlbums();
  await registerServiceWorker();
}

init();
