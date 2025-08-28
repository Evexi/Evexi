import Evexi from "evexi";

const STORAGE_KEY = "bbc_feed_data";

const DEFAULT_RSS_URL =
  "http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/front_page/rss.xml";
const DEFAULT_COLOR_START = "#c8102e";
const DEFAULT_COLOR_END = "#ffcc00";

let RSS_URL = DEFAULT_RSS_URL;
let COLOR_START = DEFAULT_COLOR_START;
let COLOR_END = DEFAULT_COLOR_END;

async function loadEnv() {
  try {
    const rss = await Evexi.env("RSS_URL");
    if (rss) RSS_URL = rss;
    const start = await Evexi.env("COLOR_START");
    if (start) COLOR_START = start;
    const end = await Evexi.env("COLOR_END");
    if (end) COLOR_END = end;
    updateContainerColors();
  } catch (err) {
    console.error("Failed to load env vars:", err);
  }
}

function updateContainerColors() {
  const container = document.querySelector<HTMLDivElement>("#rss-container");
  if (container) {
    container.style.background = `linear-gradient(90deg, ${COLOR_START}, ${COLOR_END})`;
  }
}

async function fetchFeed() {
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
    RSS_URL
  )}`;
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    if (!data.items) throw new Error("No items found");
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ timestamp: Date.now(), data })
    );
    renderHeadlines(data);
  } catch (err) {
    console.error("Failed to fetch feed:", err);
  }
}

function renderHeadlines(feedData: any) {
  const container = document.querySelector<HTMLDivElement>("#rss-content");
  if (!container) return console.error("Container not found");
  container.innerHTML = "";

  feedData.items.forEach((item: any) => {
    const span = document.createElement("span");
    span.className = "headline";
    span.textContent = item.title;
    container.appendChild(span);
  });

  feedData.items.forEach((item: any) => {
    const span = document.createElement("span");
    span.className = "headline";
    span.textContent = item.title;
    container.appendChild(span);
  });

  const contentWidth = container.scrollWidth / 2;
  const duration = contentWidth * 0.02;
  container.style.animationDuration = `${duration}s`;
}

function loadFromLocalStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    const parsed = JSON.parse(stored);
    return parsed.data;
  } catch {
    return null;
  }
}

async function init() {
  await loadEnv();

  if (!navigator.onLine) {
    const cached = loadFromLocalStorage();
    if (cached) {
      console.log("Offline — using cached data");
      renderHeadlines(cached);
    } else {
      console.log("Offline — no cached data available");
    }
  } else {
    fetchFeed();
  }

  setInterval(() => {
    if (navigator.onLine) {
      fetchFeed();
    } else {
      console.log("Still offline — skipping fetch");
    }
  }, 10 * 60 * 1000);

  Evexi.envChange("RSS_URL", newValue => {
    RSS_URL = newValue ?? DEFAULT_RSS_URL;
    fetchFeed();
  });

  Evexi.envChange("COLOR_START", newValue => {
    COLOR_START = newValue ?? DEFAULT_COLOR_START;
    updateContainerColors();
  });

  Evexi.envChange("COLOR_END", newValue => {
    COLOR_END = newValue ?? DEFAULT_COLOR_END;
    updateContainerColors();
  });

  // showPiP();
}

/*
function showPiP() {
  Evexi.log("Showing PiP window");
  Evexi.pip.show({
    height: 800,
    width: 600,
    number: 1,
    type: "HDMI",
    x: 50,
    y: 50,
  });
}
*/

init();
