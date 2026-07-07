const DAYS = [
{
  day: 1,
  title: "Java Basics — Intro & JVM",
  topics: [
    "What is Java, History, Features",
    "JVM, JRE, JDK",
    "Java Program Structure",
    "Compilation Process, Bytecode, Write Once Run Anywhere"
  ],
  practice: [
    "Install JDK, write and run a 'Hello World' program from the command line",
    "Use javac + java to compile/run manually, then inspect the .class file with javap"
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
  ],
  practice: [
    "Write a program that declares every primitive type and prints its default value",
    "Write a program demonstrating implicit vs explicit type casting with mixed data types"
  ]
},
{
  day: 3,
  title: "Control Statements",
  topics: [
    "if, if-else, else-if, nested if, switch",
    "while, do-while, for, enhanced for, nested loops",
    "break, continue, return"
  ],
  practice: [
    "Write a program to check if a number is prime using loops and break",
    "Print a pyramid/star pattern using nested for loops"
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
  ],
  practice: [
    "Write 3 overloaded 'add' methods (int, double, varargs)",
    "Write a recursive method to compute factorial and Fibonacci"
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
  ],
  practice: [
    "Write a program to find the max, min, and average of an array",
    "Write a program to multiply two matrices using 2D arrays"
  ]
},
{
  day: 6,
  title: "Classes & Objects",
  topics: [
    "Creating Classes, Objects, Instance Variables",
    "Static Variables, Static Methods, Static Block",
    "Object Creation"
  ],
  practice: [
    "Create a class with a static counter that tracks how many objects were created",
    "Create a class with a static block that initializes a shared config value"
  ]
},
{
  day: 7,
  title: "Constructors",
  topics: [
    "Default & Parameterized Constructor",
    "Constructor Overloading & Chaining",
    "this() and super()"
  ],
  practice: [
    "Write a class with 3 overloaded constructors that chain using this()",
    "Write a parent/child class pair that uses super() to call the parent constructor"
  ]
},
{
  day: 8,
  title: "Encapsulation",
  topics: [
    "Private Members",
    "Getter / Setter",
    "Data Hiding"
  ],
  practice: [
    "Build a BankAccount class with a private balance, and deposit()/withdraw() methods that validate input",
    "Add getters/setters that enforce a valid age range (0-120) on a Person class"
  ]
},
{
  day: 9,
  title: "Inheritance",
  topics: [
    "Single, Multilevel, Hierarchical Inheritance",
    "Why Multiple Inheritance isn't supported",
    "super keyword"
  ],
  practice: [
    "Build an Animal -> Dog/Cat hierarchy demonstrating hierarchical inheritance",
    "Build a 3-level Vehicle -> Car -> SportsCar chain demonstrating multilevel inheritance"
  ]
},
{
  day: 10,
  title: "Polymorphism",
  topics: [
    "Compile-time vs Runtime Polymorphism",
    "Method Overloading vs Overriding",
    "Dynamic Method Dispatch"
  ],
  practice: [
    "Write a Shape base class with overridden area() in Circle/Rectangle, called via a Shape reference",
    "Write overloaded and overridden versions of the same method name and explain the difference in comments"
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
  ],
  practice: [
    "Create an abstract Payment class with an abstract pay() method, implemented by CardPayment and UpiPayment",
    "Create an interface with a default method and override it in one implementing class"
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
  ],
  practice: [
    "Override toString(), equals(), and hashCode() for a custom Student class",
    "Test equals()/hashCode() correctness by putting Student objects into a HashSet"
  ]
},
{
  day: 13,
  title: "Packages & Wrapper Classes",
  topics: [
    "Creating Packages, Import, Package Naming",
    "Integer, Character, Boolean",
    "Autoboxing, Unboxing"
  ],
  practice: [
    "Create your own package with 2 classes and import one into the other",
    "Write a program showing autoboxing/unboxing pitfalls (e.g. == vs equals on Integer)"
  ]
},
{
  day: 14,
  title: "Enums & Generics",
  topics: [
    "Enum Basics, Enum Methods, Enum with Constructor",
    "Generic Class, Generic Method",
    "Wildcards, extends, super"
  ],
  practice: [
    "Create an enum (e.g. Day or OrderStatus) with a constructor and a custom method",
    "Write a generic Box<T> class with a generic method to swap two elements"
  ]
},
{
  day: 15,
  title: "Annotations & Inner Classes",
  topics: [
    "@Override, @Deprecated, @SuppressWarnings, @FunctionalInterface",
    "Member Inner, Static Nested, Anonymous, Local Inner Classes"
  ],
  practice: [
    "Write an anonymous inner class implementing Runnable or Comparator",
    "Create a static nested class and a non-static inner class, and show the difference in how they're instantiated"
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
  ],
  practice: [
    "Create a custom InsufficientBalanceException and throw it from a withdraw() method",
    "Write a program with multiple catch blocks and a finally that always runs"
  ]
},
{
  day: 17,
  title: "String Handling",
  topics: [
    "String, String Pool, Immutable Objects",
    "StringBuilder vs StringBuffer (Mutable, Thread Safety, Performance)",
    "split(), substring(), trim(), replace(), contains(), startsWith(), endsWith(), equals(), compareTo()"
  ],
  practice: [
    "Write a program to check if a string is a palindrome without using built-in reverse",
    "Time string concatenation with String vs StringBuilder in a loop of 10,000 iterations"
  ]
},
{
  day: 18,
  title: "Collections — List",
  topics: [
    "Collection Framework Overview, Collection Interface, Iterable",
    "ArrayList, LinkedList, Vector, Stack"
  ],
  practice: [
    "Benchmark insert-at-front performance: ArrayList vs LinkedList for 10,000 elements",
    "Implement a simple 'undo' feature using a Stack"
  ]
},
{
  day: 19,
  title: "Collections — Set & Queue",
  topics: [
    "HashSet, LinkedHashSet, TreeSet",
    "Queue, PriorityQueue, Deque, ArrayDeque"
  ],
  practice: [
    "Write a program to remove duplicates from a list while preserving order (LinkedHashSet)",
    "Use a PriorityQueue to process a list of tasks sorted by priority"
  ]
},
{
  day: 20,
  title: "Collections — Map & Iteration",
  topics: [
    "HashMap, LinkedHashMap, TreeMap, Hashtable",
    "Iterator, ListIterator, Enhanced For Loop, forEach()"
  ],
  practice: [
    "Build a word-frequency counter for a paragraph using HashMap",
    "Use an Iterator to safely remove elements from a list while looping"
  ]
},
{
  day: 21,
  title: "Comparable & Comparator",
  topics: [
    "Comparable interface",
    "Comparator interface",
    "Custom Sorting"
  ],
  practice: [
    "Implement Comparable on a Student class to sort by marks by default",
    "Write two different Comparators (by name, by age) to sort the same list two ways"
  ]
},
{
  day: 22,
  title: "File Handling",
  topics: [
    "File, FileReader, FileWriter",
    "BufferedReader, BufferedWriter, PrintWriter, Scanner",
    "Serialization, Deserialization"
  ],
  practice: [
    "Write a program that reads a text file line by line and counts word occurrences",
    "Serialize a custom object to a file, then deserialize it back and print it"
  ]
},
{
  day: 23,
  title: "Multithreading",
  topics: [
    "Thread Class, Runnable, Thread Lifecycle",
    "synchronized keyword, wait(), notify()",
    "Executor Framework, Thread Pool, Callable, Future"
  ],
  practice: [
    "Build a producer-consumer example using wait()/notify() on a shared queue",
    "Use ExecutorService with a fixed thread pool to run 5 tasks concurrently and collect Future results"
  ]
},
{
  day: 24,
  title: "Java 8+ — Lambdas & Functional Interfaces",
  topics: [
    "Lambda Expressions Syntax, Functional Programming",
    "Predicate, Function, Consumer, Supplier"
  ],
  practice: [
    "Rewrite an anonymous Runnable/Comparator from Day 15 as a lambda",
    "Write small examples using Predicate, Function, Consumer, and Supplier"
  ]
},
{
  day: 25,
  title: "Java 8+ — Stream API",
  topics: [
    "filter, map, flatMap, sorted, collect, reduce",
    "distinct, limit, skip",
    "Optional Class: orElse(), orElseGet(), ifPresent()"
  ],
  practice: [
    "Given a list of Employees, use streams to filter by department, sort by salary, and collect names",
    "Use Optional to safely handle a 'find first matching employee' lookup"
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
  ],
  practice: [
    "Replace 3 lambdas from Day 24-25 with equivalent method references",
    "Write a program to calculate someone's exact age (years, months, days) using LocalDate and Period"
  ]
},
{
  day: 27,
  title: "SQL — Database Basics & DDL/DML",
  topics: [
    "DBMS, RDBMS, Tables, Rows, Columns",
    "CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT"
  ],
  practice: [
    "Create a 'students' table and insert 5 sample rows",
    "Practice ALTER TABLE to add/rename/drop a column, then UPDATE and DELETE specific rows"
  ]
},
{
  day: 28,
  title: "SQL — Constraints & Queries",
  topics: [
    "Primary Key, Foreign Key, Unique, Not Null, Check, Default",
    "WHERE, ORDER BY, GROUP BY, HAVING, DISTINCT, LIMIT"
  ],
  practice: [
    "Design a 2-table schema (students, courses) with primary/foreign key constraints",
    "Write a query using GROUP BY + HAVING to find groups with more than N records"
  ]
},
{
  day: 29,
  title: "SQL — Joins & Functions",
  topics: [
    "INNER, LEFT, RIGHT, FULL, SELF JOIN",
    "COUNT, SUM, AVG, MAX, MIN"
  ],
  practice: [
    "Write an INNER JOIN and a LEFT JOIN between students and courses, and compare the results",
    "Write a query using COUNT/AVG/MAX together with GROUP BY on your schema"
  ]
},
{
  day: 30,
  title: "SQL — Advanced",
  topics: [
    "Views, Indexes",
    "Transactions & ACID",
    "Normalization, Subqueries"
  ],
  practice: [
    "Create a VIEW that simplifies a common multi-table query",
    "Write a query using a subquery (e.g. students scoring above the class average)"
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
  ],
  practice: [
    "Connect a Java program to MySQL and run a SELECT using PreparedStatement",
    "Insert 5 rows in a single batch using addBatch()/executeBatch()"
  ]
},
{
  day: 32,
  title: "Git & GitHub",
  topics: [
    "Git Installation, Repository, Init, Clone",
    "Add, Commit, Push, Pull",
    "Branch, Merge, Conflict Resolution, .gitignore"
  ],
  practice: [
    "Initialize a repo, make 3 commits, push to GitHub, and add a proper .gitignore",
    "Create a branch, make a conflicting change on main, merge, and resolve the conflict manually"
  ]
},
{
  day: 33,
  title: "Maven",
  topics: [
    "Maven Introduction, Project Structure, pom.xml",
    "Dependencies, Plugins",
    "Build Lifecycle, Profiles"
  ],
  practice: [
    "Create a Maven project from scratch and add a dependency (e.g. JUnit or Gson)",
    "Run mvn clean, mvn compile, mvn package and inspect the generated jar"
  ]
},
{
  day: 34,
  title: "HTTP & Web Basics",
  topics: [
    "Client, Server, Browser, DNS, URL, URI",
    "Request, Response, Headers, Cookies, Sessions",
    "JSON, XML, REST, RESTful API, HTTP Methods, Status Codes"
  ],
  practice: [
    "Use Postman or curl to hit a public REST API and inspect headers, status code, and JSON body",
    "Write out, from memory, what GET/POST/PUT/DELETE and 200/201/400/401/404/500 each mean"
  ]
},
{
  day: 35,
  title: "Spring Framework Core",
  topics: [
    "IoC, Dependency Injection",
    "Beans, Bean Scope, Autowiring",
    "Configuration, Component Scan, Spring Container"
  ],
  practice: [
    "Create a Spring bean via @Component and inject it into another class using @Autowired",
    "Try singleton vs prototype bean scope and print object hashcodes to see the difference"
  ]
},
{
  day: 36,
  title: "Spring Boot Basics",
  topics: [
    "Spring Boot Introduction, Spring Initializr",
    "Properties, Profiles, Auto Configuration"
  ],
  practice: [
    "Generate a project on Spring Initializr and run it, hitting the default endpoint",
    "Create application-dev.properties and application-prod.properties and switch profiles"
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
  ],
  practice: [
    "Build a simple in-memory CRUD controller (no DB yet) for one entity",
    "Add @Valid request validation and a @ControllerAdvice global exception handler"
  ]
},
{
  day: 38,
  title: "Spring Data JPA — ORM Basics",
  topics: [
    "ORM, Hibernate",
    "Entity, Repository"
  ],
  practice: [
    "Turn your in-memory entity from Day 37 into a real JPA @Entity backed by a database",
    "Write and test 2 custom query methods on a JpaRepository"
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
  ],
  practice: [
    "Model a OneToMany relationship (e.g. Department -> Employees) and fetch it correctly",
    "Write a JPQL query and a paginated/sorted repository method"
  ]
},
{
  day: 40,
  title: "REST API Development",
  topics: [
    "REST Principles, CRUD APIs",
    "DTO, ModelMapper, Validation",
    "Pagination, Filtering"
  ],
  practice: [
    "Introduce DTOs to your API instead of exposing entities directly",
    "Add query-param based filtering (e.g. ?department=IT) to a GET endpoint"
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
  ],
  practice: [
    "Add springdoc-openapi to your project and view the generated Swagger UI",
    "Build a Postman collection covering every endpoint of your API"
  ]
},
{
  day: 42,
  title: "Spring Security — Authentication & Authorization",
  topics: [
    "Authentication, Authorization",
    "BCrypt"
  ],
  practice: [
    "Add Spring Security to an existing project and secure one endpoint with basic auth",
    "Store a password using BCrypt and verify a login against the hash"
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
  ],
  practice: [
    "Implement login that returns a JWT, and a filter that validates it on protected routes",
    "Add role-based access so only an ADMIN role can hit a specific endpoint"
  ]
},
{
  day: 44,
  title: "Testing",
  topics: [
    "JUnit, Mockito",
    "Unit Testing, Integration Testing"
  ],
  practice: [
    "Write JUnit tests for a service class, mocking its repository dependency with Mockito",
    "Write one integration test that hits a real endpoint using @SpringBootTest"
  ]
},
{
  day: 45,
  title: "Docker Basics",
  topics: [
    "Docker Basics, Images, Containers",
    "Dockerfile, Docker Compose",
    "Dockerizing Spring Boot"
  ],
  practice: [
    "Write a Dockerfile for your Spring Boot app and run it in a container",
    "Write a docker-compose.yml that runs your app alongside a MySQL container"
  ]
},
{
  day: 46,
  title: "Microservices — Concepts",
  topics: [
    "Monolith vs Microservices",
    "API Gateway, Service Discovery"
  ],
  practice: [
    "Sketch (on paper or a diagram) how you'd split one of your existing projects into 2-3 microservices",
    "Read up on and summarize, in your own notes, how an API Gateway and service discovery fit together"
  ]
},
{
  day: 47,
  title: "Microservices — Resilience & Communication",
  topics: [
    "Config Server, Load Balancer",
    "Circuit Breaker",
    "Communication (REST/OpenFeign)"
  ],
  practice: [
    "Set up two small services calling each other via OpenFeign",
    "Add a circuit breaker (e.g. Resilience4j) around one inter-service call"
  ]
},
{
  day: 48,
  title: "AWS Basics",
  topics: [
    "EC2, S3, RDS",
    "IAM",
    "Elastic Beanstalk, Basic Deployment"
  ],
  practice: [
    "Launch a free-tier EC2 instance and deploy a simple app manually",
    "Create an IAM user with restricted permissions and use it instead of the root account"
  ]
},
{
  day: 49,
  title: "Project — E-commerce Backend (Part 1)",
  project: [
    "Design schema & entities",
    "Implement core CRUD APIs"
  ],
  practice: [
    "Write down every entity and relationship on paper before writing any code"
  ]
},
{
  day: 50,
  title: "Project — E-commerce Backend (Part 2)",
  project: [
    "Add auth, security & validation",
    "Add pagination, filtering, exception handling"
  ],
  practice: [
    "Write Postman tests for every endpoint you added today"
  ]
},
{
  day: 51,
  title: "Project — Blog API",
  project: [
    "Design schema (Users, Posts, Comments)",
    "Build CRUD APIs with JWT auth"
  ],
  practice: [
    "Add at least 3 unit tests covering your new service logic"
  ]
},
{
  day: 52,
  title: "Project — Full-stack Setup",
  project: [
    "Scaffold React frontend",
    "Connect to Spring Boot backend API"
  ],
  practice: [
    "Successfully call one backend endpoint from React and render the response"
  ]
},
{
  day: 53,
  title: "Project — Full-stack Build (React + Spring Boot)",
  project: [
    "Build core pages & integrate auth",
    "Wire up CRUD flows end-to-end"
  ],
  practice: [
    "Manually test the full create -> read -> update -> delete flow through the UI"
  ]
},
{
  day: 54,
  title: "Project — Full-stack Polish & Deploy",
  project: [
    "Dockerize frontend & backend",
    "Deploy to AWS / Elastic Beanstalk"
  ],
  practice: [
    "Verify the deployed app end-to-end from a fresh browser session"
  ]
},
{
  day: 55,
  title: "Interview Prep — Java & OOP",
  tasks: [
    "Java Interview Questions",
    "OOP Scenarios"
  ],
  practice: [
    "Answer 10 Java/OOP interview questions out loud or in writing, without looking anything up first"
  ]
},
{
  day: 56,
  title: "Interview Prep — Collections & Multithreading",
  tasks: [
    "Collections Interview Questions",
    "Multithreading Questions"
  ],
  practice: [
    "Explain HashMap internals and thread-safety differences (HashMap vs ConcurrentHashMap) from memory"
  ]
},
{
  day: 57,
  title: "Interview Prep — SQL & Spring Boot",
  tasks: [
    "SQL Interview Questions",
    "Spring Boot Interview Questions"
  ],
  practice: [
    "Write 3 SQL queries from memory (join, group by, subquery) without a reference"
  ]
},
{
  day: 58,
  title: "Interview Prep — JPA, REST & JWT",
  tasks: [
    "JPA & Hibernate Interview Questions",
    "REST API Questions",
    "JWT Questions"
  ],
  practice: [
    "Explain how JWT auth works end-to-end on a whiteboard/paper, as if teaching someone else"
  ]
},
{
  day: 59,
  title: "Interview Prep — Tools & System Design",
  tasks: [
    "Maven Questions",
    "Git Questions",
    "System Design Basics"
  ],
  practice: [
    "Design a simple system (e.g. URL shortener) on paper covering API, DB schema, and scaling basics"
  ]
},
{
  day: 60,
  title: "DSA Revision & Wrap-up",
  tasks: [
    "Arrays, Strings, Linked Lists, Stacks, Queues",
    "Trees, Hashing, Basic Graphs",
    "Upload Projects to GitHub, Resume Updates"
  ],
  practice: [
    "Solve 3 DSA problems (one array, one string, one tree/graph) without help",
    "Push all projects to GitHub with clean READMEs and update your resume with them"
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
    (d.topics   || []).forEach((_, i) => { total++; if (state[itemKey(d.day, 't', i)]) done++; });
    (d.project  || []).forEach((_, i) => { total++; if (state[itemKey(d.day, 'p', i)]) done++; });
    (d.tasks    || []).forEach((_, i) => { total++; if (state[itemKey(d.day, 'k', i)]) done++; });
    (d.practice || []).forEach((_, i) => { total++; if (state[itemKey(d.day, 'r', i)]) done++; });
  });
  return { total, done };
}

function isDayDone(d) {
  const tops  = (d.topics   || []).every((_, i) => state[itemKey(d.day, 't', i)]);
  const projs = (d.project  || []).every((_, i) => state[itemKey(d.day, 'p', i)]);
  const tsks  = (d.tasks    || []).every((_, i) => state[itemKey(d.day, 'k', i)]);
  const prac  = (d.practice || []).every((_, i) => state[itemKey(d.day, 'r', i)]);
  const has   = ((d.topics || []).length + (d.project || []).length + (d.tasks || []).length + (d.practice || []).length) > 0;
  return has && tops && projs && tsks && prac;
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

    const items = (d.topics || []).length + (d.project || []).length + (d.tasks || []).length + (d.practice || []).length;
    const doneItems =
      (d.topics   || []).filter((_, i) => state[itemKey(d.day, 't', i)]).length +
      (d.project  || []).filter((_, i) => state[itemKey(d.day, 'p', i)]).length +
      (d.tasks    || []).filter((_, i) => state[itemKey(d.day, 'k', i)]).length +
      (d.practice || []).filter((_, i) => state[itemKey(d.day, 'r', i)]).length;

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
  [['t', d.topics || []], ['p', d.project || []], ['k', d.tasks || []], ['r', d.practice || []]].forEach(([t, arr]) => {
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

  makeSection('Topics',        d.topics,   't');
  makeSection('Project',       d.project,  'p');
  makeSection('Tasks',         d.tasks,    'k');
  makeSection('Daily Practice', d.practice, 'r');
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

    if (d.topics   && d.topics.length)   { const t = document.createElement('span'); t.className = 'tag tag-topics';   t.textContent = d.topics.length + ' topics'; meta.appendChild(t); }
    if (d.project  && d.project.length)  { const t = document.createElement('span'); t.className = 'tag tag-project';  t.textContent = 'project'; meta.appendChild(t); }
    if (d.tasks    && d.tasks.length)    { const t = document.createElement('span'); t.className = 'tag tag-tasks';    t.textContent = 'tasks'; meta.appendChild(t); }
    if (d.practice && d.practice.length) { const t = document.createElement('span'); t.className = 'tag tag-practice'; t.textContent = 'practice'; meta.appendChild(t); }

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