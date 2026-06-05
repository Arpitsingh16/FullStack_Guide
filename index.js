const DAYS = [
  { day:1,  date:"06 Jun", title:"HTML Basics",           topics:["HTML Basics","Headings","Paragraphs","Images","Links","Lists","Forms","HTML Structure"], project:["Personal Profile Page"] },
  { day:2,  date:"07 Jun", title:"CSS Fundamentals",      topics:["CSS Fundamentals","Colors","Fonts","Margin","Padding","Borders","Classes","IDs"], project:["Style Profile Page"] },
  { day:3,  date:"08 Jun", title:"Business Card Project", topics:["Business Card Project"], project:["Rebuild Without Watching"] },
  { day:4,  date:"09 Jun", title:"Space Exploration",     topics:["Space Exploration Project"], project:["Customize Design"] },
  { day:5,  date:"10 Jun", title:"Birthday & Hometown",   topics:["Birthday Website","Hometown Homepage"], project:["Create Your Own Hometown Page"] },
  { day:6,  date:"11 Jun", title:"JavaScript Basics",     topics:["JavaScript Basics","Variables","Functions","Events","Counter App"], project:["Build Counter App"] },
  { day:7,  date:"12 Jun", title:"JS Challenges + Git",   topics:["JavaScript Challenges","Git Basics"], tasks:["Create GitHub Repository","Push First Project"] },
  { day:8,  date:"13 Jun", title:"Blackjack Game",        topics:["Blackjack Game","Arrays","Objects","Conditions","Functions"], project:["Blackjack Game"] },
  { day:9,  date:"20 Jun", title:"Chrome Extension",      topics:["JavaScript Challenges","Chrome Extension","DOM","Local Storage"], project:["Chrome Extension"] },
  { day:10, date:"21 Jun", title:"More JS + GitHub",      topics:["More JavaScript","Command Line","GitHub Skills"], tasks:["Practice Git Commands","Practice Terminal Commands"] },
  { day:11, date:"22 Jun", title:"Advanced JavaScript",   topics:["Advanced JavaScript","Scope","Methods","Loops","Function Expressions"], tasks:["Solve Practice Problems"] },
  { day:12, date:"23 Jun", title:"Async JS + APIs",       topics:["Async JavaScript","APIs","Promises","Fetch","Async/Await"], project:["Weather App"] },
  { day:13, date:"24 Jun", title:"Node.js + Express",     topics:["AI Fundamentals","Node.js","Express","Build Node API"], project:["REST API"] },
  { day:14, date:"25 Jun", title:"Full Stack App",        topics:["Full Stack Node App","Database Introduction"], tasks:["Connect App to Database"] },
  { day:15, date:"26 Jun", title:"SQL",                   topics:["SQL","SELECT","INSERT","UPDATE","DELETE","JOIN"], tasks:["SQL Practice"] },
  { day:16, date:"27 Jun", title:"React Basics",          topics:["React Basics","JSX","Components"], project:["First React App"] },
  { day:17, date:"28 Jun", title:"React Props",           topics:["React Props","Dynamic Rendering"], tasks:["Build Components with Props"] },
  { day:18, date:"29 Jun", title:"React State",           topics:["React State","useState","Forms","Events"], project:["Interactive React App"] },
  { day:19, date:"30 Jun", title:"useEffect + Capstone",  topics:["useEffect","API Calls","React Capstone"], project:["Complete Capstone Project"] },
  { day:20, date:"01 Jul", title:"TypeScript + Next.js",  topics:["TypeScript Fundamentals","TypeScript in React","Next.js","Rendering Strategies"], project:["Build Next.js App"] },
];

const KEY = "fsd_roadmap_v1";
let state = {};

function load() {
  try { state = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch(e) { state = {}; }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e) {}
}

function itemKey(day, type, idx) {
  return `d${day}_${type}_${idx}`;
}

function countItems() {
  let total = 0, done = 0;
  DAYS.forEach(d => {
    (d.topics  || []).forEach((_, i) => { total++; if (state[itemKey(d.day, 't', i)]) done++; });
    (d.project || []).forEach((_, i) => { total++; if (state[itemKey(d.day, 'p', i)]) done++; });
    (d.tasks   || []).forEach((_, i) => { total++; if (state[itemKey(d.day, 'k', i)]) done++; });
  });
  return { total, done };
}

function isDayDone(d) {
  const tops  = (d.topics  || []).every((_, i) => state[itemKey(d.day, 't', i)]);
  const projs = (d.project || []).every((_, i) => state[itemKey(d.day, 'p', i)]);
  const tsks  = (d.tasks   || []).every((_, i) => state[itemKey(d.day, 'k', i)]);
  const has   = ((d.topics || []).length + (d.project || []).length + (d.tasks || []).length) > 0;
  return has && tops && projs && tsks;
}

function updateStats() {
  const { total, done } = countItems();
  const daysDone = DAYS.filter(isDayDone).length;

  document.getElementById('s-days').textContent  = daysDone;
  document.getElementById('s-items').textContent = done;
  document.getElementById('s-pct').textContent   = Math.round(done / total * 100) + '%';
  document.getElementById('prog-fill').style.width = (done / total * 100) + '%';
  document.getElementById('prog-label').textContent = daysDone + ' of 20 days completed';

  DAYS.forEach(d => {
    const card = document.getElementById('card-' + d.day);
    const chk  = document.getElementById('daycheck-' + d.day);

    if (isDayDone(d)) {
      card.classList.add('done');
      chk.classList.add('checked');
      chk.textContent = '✓';
    } else {
      card.classList.remove('done');
      chk.classList.remove('checked');
      chk.textContent = '';
    }

    const items = (d.topics || []).length + (d.project || []).length + (d.tasks || []).length;
    const doneItems =
      (d.topics  || []).filter((_, i) => state[itemKey(d.day, 't', i)]).length +
      (d.project || []).filter((_, i) => state[itemKey(d.day, 'p', i)]).length +
      (d.tasks   || []).filter((_, i) => state[itemKey(d.day, 'k', i)]).length;

    document.getElementById('dprog-' + d.day).textContent = doneItems + '/' + items;
  });
}

function toggleItem(key, boxEl, textEl) {
  state[key] = !state[key];
  if (state[key]) {
    boxEl.classList.add('checked');
    boxEl.textContent = '✓';
    textEl.classList.add('checked');
  } else {
    boxEl.classList.remove('checked');
    boxEl.textContent = '';
    textEl.classList.remove('checked');
  }
  save();
  updateStats();
}

function toggleDayCheck(day) {
  const d = DAYS.find(x => x.day === day);
  const allDone = isDayDone(d);
  [['t', d.topics || []], ['p', d.project || []], ['k', d.tasks || []]].forEach(([t, arr]) => {
    arr.forEach((_, i) => { state[itemKey(day, t, i)] = !allDone; });
  });
  save();
  renderItems(day);
  updateStats();
}

function renderItems(day) {
  const d    = DAYS.find(x => x.day === day);
  const body = document.getElementById('body-' + day);
  body.innerHTML = '';

  function makeSection(label, arr, type) {
    if (!arr || !arr.length) return;
    const sl = document.createElement('div');
    sl.className = 'section-label';
    sl.textContent = label;
    body.appendChild(sl);

    arr.forEach((item, i) => {
      const k   = itemKey(day, type, i);
      const row = document.createElement('div');
      row.className = 'item-row';

      const box = document.createElement('div');
      box.className = 'item-box' + (state[k] ? ' checked' : '');
      if (state[k]) box.textContent = '✓';

      const txt = document.createElement('span');
      txt.className = 'item-text' + (state[k] ? ' checked' : '');
      txt.textContent = item;

      row.appendChild(box);
      row.appendChild(txt);
      row.addEventListener('click', () => toggleItem(k, box, txt));
      body.appendChild(row);
    });
  }

  makeSection('Topics',  d.topics,  't');
  makeSection('Project', d.project, 'p');
  makeSection('Tasks',   d.tasks,   'k');
}

function render() {
  const container = document.getElementById('days-container');
  container.innerHTML = '';

  DAYS.forEach(d => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.id = 'card-' + d.day;

    const header = document.createElement('div');
    header.className = 'day-header';

    const chk = document.createElement('div');
    chk.className = 'day-check';
    chk.id = 'daycheck-' + d.day;
    chk.title = 'Mark day complete';
    chk.addEventListener('click', e => { e.stopPropagation(); toggleDayCheck(d.day); });

    const info = document.createElement('div');
    info.className = 'day-info';

    const titleEl = document.createElement('div');
    titleEl.className = 'day-title';
    titleEl.textContent = 'Day ' + d.day + ' — ' + d.title;

    const dateEl = document.createElement('div');
    dateEl.className = 'day-date';
    dateEl.textContent = d.date;

    info.appendChild(titleEl);
    info.appendChild(dateEl);

    const meta = document.createElement('div');
    meta.className = 'day-meta';

    if (d.topics  && d.topics.length)  { const t = document.createElement('span'); t.className = 'tag tag-topics';  t.textContent = d.topics.length + ' topics'; meta.appendChild(t); }
    if (d.project && d.project.length) { const t = document.createElement('span'); t.className = 'tag tag-project'; t.textContent = 'project'; meta.appendChild(t); }
    if (d.tasks   && d.tasks.length)   { const t = document.createElement('span'); t.className = 'tag tag-tasks';   t.textContent = 'tasks'; meta.appendChild(t); }

    const dp = document.createElement('span');
    dp.className = 'day-progress';
    dp.id = 'dprog-' + d.day;

    const chev = document.createElement('span');
    chev.className = 'chevron';
    chev.textContent = '⌄';

    header.appendChild(chk);
    header.appendChild(info);
    header.appendChild(meta);
    header.appendChild(dp);
    header.appendChild(chev);

    const body = document.createElement('div');
    body.className = 'day-body';
    body.id = 'body-' + d.day;

    card.appendChild(header);
    card.appendChild(body);

    header.addEventListener('click', () => {
      const open = body.classList.contains('open');
      body.classList.toggle('open', !open);
      chev.classList.toggle('open', !open);
      if (!open) renderItems(d.day);
    });

    container.appendChild(card);
  });

  updateStats();
}

function resetAll() {
  if (!confirm('Reset all progress?')) return;
  state = {};
  save();
  render();
}

load();
render();
