const DAYS = [
{
  day: 1,
  title: "Video 1",
  tasks: [
    "00:00 - 11:07 Environment Setup",
    "11:07 - 39:18 HTML"
  ]
},
{
  day: 2,
  title: "Video 1",
  tasks: [
    "39:18 - 01:10:00 CSS Basics"
  ]
},
{
  day: 3,
  title: "Video 1",
  tasks: [
    "01:10:00 - 01:41:26 CSS Advanced"
  ]
},
{
  day: 4,
  title: "Video 1",
  tasks: [
    "01:41:26 - 02:17:07 CSS Project"
  ]
},
{
  day: 5,
  title: "Video 2",
  tasks: [
    "00:00 - 48:44 Units",
    "48:44 - 01:17:14 Flexbox"
  ]
},
{
  day: 6,
  title: "Video 2",
  tasks: [
    "01:17:14 - 01:51:05 Grid",
    "01:51:05 - End Media Queries"
  ]
},
{
  day: 7,
  title: "Video 2",
  tasks: [
    "Tailwind Responsiveness",
    "Project Section"
  ]
},
{
  day: 8,
  title: "Video 3",
  tasks: [
    "00:00 - 01:06:48 Variables",
    "01:06:48 - 02:03:57 Data Types"
  ]
},
{
  day: 9,
  title: "Video 3",
  tasks: [
    "02:03:57 - 03:20:40 Operators",
    "03:20:40 - 04:39:18 Loops"
  ]
},
{
  day: 10,
  title: "Video 3",
  tasks: [
    "04:39:18 - 06:17:14 Functions"
  ]
},
{
  day: 11,
  title: "Video 3",
  tasks: [
    "06:17:14 - 07:16:36 Arrays",
    "07:16:36 - End Objects"
  ]
},
{
  day: 12,
  title: "Video 4",
  tasks: [
    "00:00 - 01:38:46 DOM"
  ]
},
{
  day: 13,
  title: "Video 4",
  tasks: [
    "01:38:46 - 04:16:37 Events"
  ]
},
{
  day: 14,
  title: "Video 4",
  tasks: [
    "04:16:37 - End Forms, Timers, Storage"
  ]
},
{
  day: 15,
  title: "Video 5",
  tasks: [
    "00:00 - 01:13:15 Scope, Execution Context, Closures"
  ]
},
{
  day: 16,
  title: "Video 5",
  tasks: [
    "01:13:15 - 02:10:04 this Keyword"
  ]
},
{
  day: 17,
  title: "Video 5",
  tasks: [
    "02:10:04 - 03:08:05 OOP"
  ]
},
{
  day: 18,
  title: "Video 5",
  tasks: [
    "03:08:05 - End Promises, Async Await, Fetch"
  ]
},
{
  day: 19,
  title: "Video 6",
  tasks: [
    "Module Pattern",
    "Revealing Module Pattern"
  ]
},
{
  day: 20,
  title: "Video 6",
  tasks: [
    "Factory Pattern",
    "Observer Pattern"
  ]
},
{
  day: 21,
  title: "JavaScript Revision",
  tasks: [
    "Revise Videos 3-6",
    "Build Notes App"
  ]
},
{
  day: 22,
  title: "Video 7",
  tasks: [
    "00:00 - 01:47:37 React Basics + Props"
  ]
},
{
  day: 23,
  title: "Video 7",
  tasks: [
    "01:47:37 - 04:30:51 Props Projects + Styling"
  ]
},
{
  day: 24,
  title: "Video 7",
  tasks: [
    "04:30:51 - 06:15:46 Functions, Hooks, Forms"
  ]
},
{
  day: 25,
  title: "Video 7",
  tasks: [
    "06:15:46 - 08:17:01 Notes App + API Calls"
  ]
},
{
  day: 26,
  title: "Video 7",
  tasks: [
    "08:17:01 - End Routing + Context API"
  ]
},
{
  day: 27,
  title: "Video 8",
  tasks: [
    "Redux Complete"
  ]
},
{
  day: 28,
  title: "Video 9",
  tasks: [
    "00:00 - 01:22:09 TypeScript Fundamentals"
  ]
},
{
  day: 29,
  title: "Video 9",
  tasks: [
    "01:22:09 - 02:50:09 Classes & OOP"
  ]
},
{
  day: 30,
  title: "Video 9",
  tasks: [
    "02:50:09 - End Functions, Generics, Modules"
  ]
},
{
  day: 31,
  title: "Video 10",
  tasks: [
    "00:00 - 01:43:36 Express + APIs"
  ]
},
{
  day: 32,
  title: "Video 10",
  tasks: [
    "01:43:36 - 04:32:30 MongoDB + Project"
  ]
},
{
  day: 33,
  title: "Video 10",
  tasks: [
    "04:32:30 - End Authentication + Testing"
  ]
},
{
  day: 34,
  title: "Video 11",
  tasks: [
    "00:00 - 01:20:23 Auth Setup"
  ]
},
{
  day: 35,
  title: "Video 11",
  tasks: [
    "01:20:23 - 02:46:44 Banking Logic"
  ]
},
{
  day: 36,
  title: "Video 11",
  tasks: [
    "02:46:44 - End Transactions + Deployment"
  ]
},
{
  day: 37,
  title: "Video 12",
  tasks: [
    "00:00 - 01:16:24 Tokens + Sessions"
  ]
},
{
  day: 38,
  title: "Video 12",
  tasks: [
    "01:16:24 - End OTP Authentication"
  ]
},
{
  day: 39,
  title: "Video 13",
  tasks: [
    "00:00 - 01:51:54 Authentication + Frontend Setup"
  ]
},
{
  day: 40,
  title: "Video 13",
  tasks: [
    "01:51:54 - 03:56:22 AI Feature Backend"
  ]
},
{
  day: 41,
  title: "Video 13",
  tasks: [
    "03:56:22 - End AI Project Completion"
  ]
},
{
  day: 42,
  title: "Revision",
  tasks: [
    "React Revision",
    "Build Notes App Again"
  ]
},
{
  day: 43,
  title: "Revision",
  tasks: [
    "Backend Revision",
    "Build Notes API"
  ]
},
{
  day: 44,
  title: "Project",
  tasks: [
    "Build Full Stack Project"
  ]
},
{
  day: 45,
  title: "Placement Prep",
  tasks: [
    "Upload Projects To GitHub",
    "Resume Updates",
    "Interview Revision"
  ]
}
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
  document.getElementById('prog-label').textContent = daysDone + ' of 45 days completed';

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
