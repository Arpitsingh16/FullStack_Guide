const DAYS = [
{
  day: 1,
  title: "Java Basics — Intro & JVM",
  topics: [
    "What is Java, History, Features",
    "JVM, JRE, JDK",
    "Java Program Structure",
    "Compilation Process, Bytecode, Write Once Run Anywhere"
  ]
},
{
  day: 2,
  title: "Variables, Data Types & Operators",
  topics: [
    "Primitive & Non-Primitive Data Types",
    "Variable Declaration, Initialization, Scope",
    "Type Conversion, Type Casting, Literals",
    "Arithmetic, Assignment, Relational, Logical, Unary, Ternary, Bitwise, Shift Operators",
    "Operator Precedence"
  ]
},
{
  day: 3,
  title: "Control Statements",
  topics: [
    "if, if-else, else-if, nested if, switch",
    "while, do-while, for, enhanced for, nested loops",
    "break, continue, return"
  ]
},
{
  day: 4,
  title: "Methods",
  topics: [
    "Method Declaration, Calling, Parameters, Return Type",
    "Method Overloading",
    "Pass by Value",
    "Recursion",
    "Varargs"
  ]
},
{
  day: 5,
  title: "Arrays",
  topics: [
    "One-Dimensional, Two-Dimensional, Multidimensional Arrays",
    "Array Operations & Traversal",
    "Arrays Utility Class"
  ],
  project: [
    "Console-based Student Management System (Core Java) — start"
  ]
},
{
  day: 6,
  title: "Classes & Objects",
  topics: [
    "Creating Classes, Objects, Instance Variables",
    "Static Variables, Static Methods, Static Block",
    "Object Creation"
  ]
},
{
  day: 7,
  title: "Constructors",
  topics: [
    "Default & Parameterized Constructor",
    "Constructor Overloading & Chaining",
    "this() and super()"
  ]
},
{
  day: 8,
  title: "Encapsulation",
  topics: [
    "Private Members",
    "Getter / Setter",
    "Data Hiding"
  ]
},
{
  day: 9,
  title: "Inheritance",
  topics: [
    "Single, Multilevel, Hierarchical Inheritance",
    "Why Multiple Inheritance isn't supported",
    "super keyword"
  ]
},
{
  day: 10,
  title: "Polymorphism",
  topics: [
    "Compile-time vs Runtime Polymorphism",
    "Method Overloading vs Overriding",
    "Dynamic Method Dispatch"
  ]
},
{
  day: 11,
  title: "Abstraction & Interfaces",
  topics: [
    "Abstract Class, Abstract Method",
    "Difference between Abstraction & Encapsulation",
    "Interfaces, Multiple Interface",
    "Default Methods, Static Methods, Functional Interface"
  ]
},
{
  day: 12,
  title: "Access Modifiers & Object Class",
  topics: [
    "public, private, protected, default",
    "toString(), equals(), hashCode()",
    "clone(), finalize()"
  ],
  project: [
    "Console-based Student Management System — complete with OOP"
  ]
},
{
  day: 13,
  title: "Packages & Wrapper Classes",
  topics: [
    "Creating Packages, Import, Package Naming",
    "Integer, Double, Character, Boolean",
    "Autoboxing, Unboxing"
  ]
},
{
  day: 14,
  title: "Enums & Generics",
  topics: [
    "Enum Basics, Enum Methods, Enum with Constructor",
    "Generic Class, Generic Method",
    "Wildcards, extends, super"
  ]
},
{
  day: 15,
  title: "Annotations & Inner Classes",
  topics: [
    "@Override, @Deprecated, @SuppressWarnings, @FunctionalInterface",
    "Member Inner, Static Nested, Anonymous, Local Inner Classes"
  ]
},
{
  day: 16,
  title: "Exception Handling",
  topics: [
    "Exception Hierarchy: Checked, Unchecked, Error",
    "try, catch, finally",
    "throw, throws, Multiple Catch, Nested Try",
    "Custom Exception"
  ]
},
{
  day: 17,
  title: "String Handling",
  topics: [
    "String, String Pool, Immutable Objects",
    "StringBuilder vs StringBuffer (Mutable, Thread Safety, Performance)",
    "split(), substring(), trim(), replace(), contains(), startsWith(), endsWith(), equals(), compareTo()"
  ]
},
{
  day: 18,
  title: "Collections — List",
  topics: [
    "Collection Framework Overview, Collection Interface, Iterable",
    "ArrayList, LinkedList, Vector, Stack"
  ]
},
{
  day: 19,
  title: "Collections — Set & Queue",
  topics: [
    "HashSet, LinkedHashSet, TreeSet",
    "Queue, PriorityQueue, Deque, ArrayDeque"
  ]
},
{
  day: 20,
  title: "Collections — Map & Iteration",
  topics: [
    "HashMap, LinkedHashMap, TreeMap, Hashtable",
    "Iterator, ListIterator, Enhanced For Loop, forEach()"
  ]
},
{
  day: 21,
  title: "Comparable & Comparator",
  topics: [
    "Comparable interface",
    "Comparator interface",
    "Custom Sorting"
  ]
},
{
  day: 22,
  title: "File Handling",
  topics: [
    "File, FileReader, FileWriter",
    "BufferedReader, BufferedWriter, PrintWriter, Scanner",
    "Serialization, Deserialization"
  ]
},
{
  day: 23,
  title: "Multithreading",
  topics: [
    "Thread Class, Runnable, Thread Lifecycle",
    "synchronized keyword, wait(), notify()",
    "Executor Framework, Thread Pool, Callable, Future"
  ]
},
{
  day: 24,
  title: "Java 8+ — Lambdas & Functional Interfaces",
  topics: [
    "Lambda Expressions Syntax, Functional Programming",
    "Predicate, Function, Consumer, Supplier"
  ]
},
{
  day: 25,
  title: "Java 8+ — Stream API",
  topics: [
    "filter, map, flatMap, sorted, collect, reduce",
    "distinct, limit, skip",
    "Optional Class: orElse(), orElseGet(), ifPresent()"
  ]
},
{
  day: 26,
  title: "Java 8+ — Method References & Date/Time API",
  topics: [
    "Static, Instance, Constructor Method References",
    "LocalDate, LocalTime, LocalDateTime",
    "Duration, Period"
  ],
  project: [
    "Java Fundamentals + OOP Revision"
  ]
},
{
  day: 27,
  title: "SQL — Database Basics & DDL/DML",
  topics: [
    "DBMS, RDBMS, Tables, Rows, Columns",
    "CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT"
  ]
},
{
  day: 28,
  title: "SQL — Constraints & Queries",
  topics: [
    "Primary Key, Foreign Key, Unique, Not Null, Check, Default",
    "WHERE, ORDER BY, GROUP BY, HAVING, DISTINCT, LIMIT"
  ]
},
{
  day: 29,
  title: "SQL — Joins & Functions",
  topics: [
    "INNER, LEFT, RIGHT, FULL, SELF JOIN",
    "COUNT, SUM, AVG, MAX, MIN"
  ]
},
{
  day: 30,
  title: "SQL — Advanced",
  topics: [
    "Views, Indexes",
    "Transactions & ACID",
    "Normalization, Subqueries"
  ]
},
{
  day: 31,
  title: "JDBC",
  topics: [
    "JDBC Architecture, Driver, Connection",
    "Statement, PreparedStatement, CallableStatement, ResultSet",
    "Batch Processing, Transactions"
  ],
  project: [
    "Library Management System (Java + JDBC + MySQL)"
  ]
},
{
  day: 32,
  title: "Git & GitHub",
  topics: [
    "Git Installation, Repository, Init, Clone",
    "Add, Commit, Push, Pull",
    "Branch, Merge, Conflict Resolution, .gitignore"
  ]
},
{
  day: 33,
  title: "Maven",
  topics: [
    "Maven Introduction, Project Structure, pom.xml",
    "Dependencies, Plugins",
    "Build Lifecycle, Profiles"
  ]
},
{
  day: 34,
  title: "HTTP & Web Basics",
  topics: [
    "Client, Server, Browser, DNS, URL, URI",
    "Request, Response, Headers, Cookies, Sessions",
    "JSON, XML, REST, RESTful API, HTTP Methods, Status Codes"
  ]
},
{
  day: 35,
  title: "Spring Framework Core",
  topics: [
    "IoC, Dependency Injection",
    "Beans, Bean Scope, Autowiring",
    "Configuration, Component Scan, Spring Container"
  ]
},
{
  day: 36,
  title: "Spring Boot Basics",
  topics: [
    "Spring Boot Introduction, Spring Initializr",
    "Properties, Profiles, Auto Configuration"
  ]
},
{
  day: 37,
  title: "Spring Boot — Controllers, Services, Repositories",
  topics: [
    "Controllers, Services, Repositories",
    "CRUD, Validation",
    "Exception Handling, Logging"
  ],
  project: [
    "Employee Management REST API (Spring Boot) — start"
  ]
},
{
  day: 38,
  title: "Spring Data JPA — ORM Basics",
  topics: [
    "ORM, Hibernate",
    "Entity, Repository"
  ]
},
{
  day: 39,
  title: "Spring Data JPA — Relationships",
  topics: [
    "OneToOne, OneToMany, ManyToOne, ManyToMany",
    "JPQL",
    "Pagination, Sorting"
  ],
  project: [
    "Employee Management REST API — complete with JPA"
  ]
},
{
  day: 40,
  title: "REST API Development",
  topics: [
    "REST Principles, CRUD APIs",
    "DTO, ModelMapper, Validation",
    "Pagination, Filtering"
  ]
},
{
  day: 41,
  title: "API Documentation & Testing Tools",
  topics: [
    "Swagger / OpenAPI",
    "Postman"
  ],
  project: [
    "Expense Tracker API"
  ]
},
{
  day: 42,
  title: "Spring Security — Authentication & Authorization",
  topics: [
    "Authentication, Authorization",
    "BCrypt"
  ]
},
{
  day: 43,
  title: "Spring Security — JWT",
  topics: [
    "JWT, Refresh Token",
    "Role-Based Access"
  ],
  project: [
    "JWT Authentication System"
  ]
},
{
  day: 44,
  title: "Testing",
  topics: [
    "JUnit, Mockito",
    "Unit Testing, Integration Testing"
  ]
},
{
  day: 45,
  title: "Docker Basics",
  topics: [
    "Docker Basics, Images, Containers",
    "Dockerfile, Docker Compose",
    "Dockerizing Spring Boot"
  ]
},
{
  day: 46,
  title: "Microservices — Concepts",
  topics: [
    "Monolith vs Microservices",
    "API Gateway, Service Discovery"
  ]
},
{
  day: 47,
  title: "Microservices — Resilience & Communication",
  topics: [
    "Config Server, Load Balancer",
    "Circuit Breaker",
    "Communication (REST/OpenFeign)"
  ]
},
{
  day: 48,
  title: "AWS Basics",
  topics: [
    "EC2, S3, RDS",
    "IAM",
    "Elastic Beanstalk, Basic Deployment"
  ]
},
{
  day: 49,
  title: "Project — E-commerce Backend (Part 1)",
  project: [
    "Design schema & entities",
    "Implement core CRUD APIs"
  ]
},
{
  day: 50,
  title: "Project — E-commerce Backend (Part 2)",
  project: [
    "Add auth, security & validation",
    "Add pagination, filtering, exception handling"
  ]
},
{
  day: 51,
  title: "Project — Blog API",
  project: [
    "Design schema (Users, Posts, Comments)",
    "Build CRUD APIs with JWT auth"
  ]
},
{
  day: 52,
  title: "Project — Full-stack Setup",
  project: [
    "Scaffold React frontend",
    "Connect to Spring Boot backend API"
  ]
},
{
  day: 53,
  title: "Project — Full-stack Build (React + Spring Boot)",
  project: [
    "Build core pages & integrate auth",
    "Wire up CRUD flows end-to-end"
  ]
},
{
  day: 54,
  title: "Project — Full-stack Polish & Deploy",
  project: [
    "Dockerize frontend & backend",
    "Deploy to AWS / Elastic Beanstalk"
  ]
},
{
  day: 55,
  title: "Interview Prep — Java & OOP",
  tasks: [
    "Java Interview Questions",
    "OOP Scenarios"
  ]
},
{
  day: 56,
  title: "Interview Prep — Collections & Multithreading",
  tasks: [
    "Collections Interview Questions",
    "Multithreading Questions"
  ]
},
{
  day: 57,
  title: "Interview Prep — SQL & Spring Boot",
  tasks: [
    "SQL Interview Questions",
    "Spring Boot Interview Questions"
  ]
},
{
  day: 58,
  title: "Interview Prep — JPA, REST & JWT",
  tasks: [
    "JPA & Hibernate Interview Questions",
    "REST API Questions",
    "JWT Questions"
  ]
},
{
  day: 59,
  title: "Interview Prep — Tools & System Design",
  tasks: [
    "Maven Questions",
    "Git Questions",
    "System Design Basics"
  ]
},
{
  day: 60,
  title: "DSA Revision & Wrap-up",
  tasks: [
    "Arrays, Strings, Linked Lists, Stacks, Queues",
    "Trees, Hashing, Basic Graphs",
    "Upload Projects to GitHub, Resume Updates"
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
  document.getElementById('prog-label').textContent = daysDone + ' of ' + DAYS.length + ' days completed';

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
    dateEl.textContent = d.date || '';

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