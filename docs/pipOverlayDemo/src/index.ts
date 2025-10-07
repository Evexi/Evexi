import Evexi from "evexi"

const STORAGE_KEY = "bbc_feed_data";
const DEFAULT_RSS_URL = "http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/front_page/rss.xml";

let RSS_URL = DEFAULT_RSS_URL;
let COLORS = ['white']
let FOREGROUND_COLOR = 'black'

function pad(num: number) {
  return (num < 10 ? '0' : '') + num;
}

function updateTime() {
  var timeDisplay = document.getElementById('time-display');
  if (!timeDisplay) return;

  var now = new Date();
  var hours = pad(now.getHours());
  var minutes = pad(now.getMinutes());
  timeDisplay.textContent = hours + ':' + minutes;
}

function updateContainerColors() {
  const container = document.querySelector<HTMLDivElement>('#rss-container');
  if (container) {
    container.style.background = COLORS.length > 1 ? `linear-gradient(90deg, ${COLORS.join(', ')})` : COLORS[0];
  }
}

async function fetchFeed() {
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    if (!data.items) throw new Error("No items found");
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
    renderHeadlines(data);
  } catch (err) {
    console.error("Failed to fetch feed:", err);
  }
}

function renderHeadlines(feedData) {
  const container = document.querySelector<HTMLDivElement>('#rss-content');
  if (!container) return console.error("Container not found");
  container.innerHTML = "";

  feedData.items.forEach(item => {
    const span = document.createElement("span");
    span.className = "headline";
    span.textContent = item.title;
    container.appendChild(span);
  });

  feedData.items.forEach(item => {
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

async function listeners() {
  const color = await Evexi.env('COLORS')
  if (color) COLORS = color.split(',').map(c => c.trim());

  const rss = await Evexi.env('RSS_URL')
  if (rss) RSS_URL = rss.trim();

  const fg = await Evexi.env('FOREGROUND_COLOR')
  if (fg) FOREGROUND_COLOR = fg.trim();
  document.body.style.color = FOREGROUND_COLOR;

  Evexi.envChange('COLORS', (newColors) => {
    if (newColors) {
      COLORS = newColors.split(',').map(c => c.trim());
    } else {
      COLORS = ['white'];
    }

    updateContainerColors();
  })

  Evexi.envChange('FOREGROUND_COLOR', (newFG) => {
    if (newFG) {
      FOREGROUND_COLOR = newFG.trim();
    } else {
      FOREGROUND_COLOR = 'black';
    }
    document.body.style.color = FOREGROUND_COLOR;
  })

  Evexi.envChange('RSS_URL', (newRSS) => {
    if (newRSS) {
      RSS_URL = newRSS.trim();
      if (navigator.onLine) {
        fetchFeed();
      } else {
        const cached = loadFromLocalStorage();
        if (cached) {
          console.log("Offline — using cached data");
          renderHeadlines(cached);
        } else {
          console.log("Offline — no cached data available");
        }
      }
    } else {
      RSS_URL = DEFAULT_RSS_URL;
      if (navigator.onLine) {
        fetchFeed();
      } else {
        const cached = loadFromLocalStorage();
        if (cached) {
          console.log("Offline — using cached data");
          renderHeadlines(cached);
        } else {
          console.log("Offline — no cached data available");
        }
      }
    }
  })
}

async function init() {
  try {

    await listeners()

    updateContainerColors();
    updateTime();
    setInterval(updateTime, 1000);

    if (!navigator.onLine) {
      const cached = loadFromLocalStorage();
      if (cached) {
        console.log("Offline — using cached data");
        Evexi.log("Using cached data");
        renderHeadlines(cached);
      } else {
        Evexi.log("No cached data available");
        console.log("Offline — no cached data available");
      }
    } else {
      await fetchFeed();
    }

    console.log("Initialization complete");
    Evexi.log("Initialization complete");

    setInterval(() => {
      if (navigator.onLine) {
        fetchFeed();
      } else {
        console.log("Still offline — skipping fetch");
        Evexi.log("Still offline, skipping fetch");
      }
    }, 10 * 60 * 1000);
  } catch (e) {
    console.error("Initialization error:", e);
    Evexi.log("Initialization error: " + e.message);
  }
}

init();
