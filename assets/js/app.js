"use strict";

/*
 * Urban Living PG shared UI foundation.
 * DEMO ONLY: credentials below are for prototype navigation. Production
 * authentication, authorization, sessions and persistence MUST be server-side.
 */
const DEMO_ACCOUNTS = {
  "tenant@urbanlivingpg.demo": { role:"tenant", password:"Tenant@123", name:"Demo Tenant", mobile:"+919000000001" },
  "manager@urbanlivingpg.demo": { role:"manager", password:"Manager@123", name:"Demo Manager", mobile:"+919000000002" },
  "staff@urbanlivingpg.demo": { role:"staff", password:"Staff@123", name:"Maintenance Staff", mobile:"+919000000003" },
  "admin@urbanlivingpg.demo": { role:"admin", password:"Admin@123", name:"Platform Admin", mobile:"+919000000004" }
};

function normalizeIdentifier(value){
  const raw = String(value || "").trim().toLowerCase();
  if(!raw) return "";

  // Email identifiers remain case-insensitive. Mobile identifiers are
  // canonicalized so the UI can accept either 9000000001 or +919000000001.
  if(raw.includes("@")) return raw.replace(/\s+/g, "");

  const digits = raw.replace(/\D/g, "");
  if(digits.length === 10) return `+91${digits}`;
  if(digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return raw.replace(/[()\s-]/g, "");
}
function findDemoAccount(identifier){
  const normalized = normalizeIdentifier(identifier);
  if(DEMO_ACCOUNTS[normalized]) return DEMO_ACCOUNTS[normalized];
  return Object.values(DEMO_ACCOUNTS).find(account => normalizeIdentifier(account.mobile) === normalized) || null;
}

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const APP_ROLE = document.body.dataset.appRole || "";
const ROLE_NAMES = {tenant:"Tenant", manager:"Manager", owner:"Property Owner", staff:"Staff", admin:"Admin"};
const ROLE_NAV = {
  tenant:[["Dashboard","../../pages/tenant/dashboard.html"],["Bookings","../../pages/tenant/bookings.html"],["Payments","../../pages/tenant/payments.html"],["Maintenance","../../pages/tenant/maintenance.html"],["Requests","../../pages/tenant/requests.html"],["Verification","../../pages/tenant/verification.html"],["Notifications","../../pages/tenant/notifications.html"],["Profile","../../pages/tenant/profile.html"]],
  manager:[["Dashboard","../../pages/manager/dashboard.html"],["Rentals","../../pages/owner/properties.html"],["Maintenance","../../pages/owner/maintenance.html"],["Payments","../../pages/owner/payments.html"],["Tenants","../../pages/owner/tenants.html"],["Bookings","../../pages/owner/bookings.html"],["Communications","../../pages/manager/notifications.html"]],
  owner:[["Dashboard","../../pages/owner/dashboard.html"],["Properties","../../pages/owner/properties.html"],["Rooms","../../pages/owner/rooms.html"],["Tenants","../../pages/owner/tenants.html"],["Verification","../../pages/owner/tenant-verification.html"],["Bookings","../../pages/owner/bookings.html"],["Payments","../../pages/owner/payments.html"],["Maintenance","../../pages/owner/maintenance.html"]],
  staff:[["Dashboard","../../pages/staff/dashboard.html"],["Work orders","../../pages/staff/work-orders.html"]],
  admin:[["Dashboard","../../pages/admin/dashboard.html"],["Verification","../../pages/admin/verification.html"],["Users","../../pages/admin/users.html"],["Disputes","../../pages/admin/disputes.html"],["Audit","../../pages/admin/audit.html"]]
};

/* India date/time: fixed Asia/Kolkata, no timezone label in the UI. */
function initIndiaClock(){
  const headerRow = $(".header-row");
  if(!headerRow || headerRow.querySelector(".header-clock")) return;
  const clock = document.createElement("div");
  clock.className = "header-clock";
  clock.setAttribute("aria-label", "Current India date and time");
  clock.innerHTML = '<time class="clock-date"></time><time class="clock-time"></time>';
  const actions = headerRow.querySelector(".header-actions");
  const menu = headerRow.querySelector(".menu");
  if(actions) headerRow.insertBefore(clock, actions);
  else if(menu) headerRow.insertBefore(clock, menu);
  else headerRow.appendChild(clock);

  const dateElement = $(".clock-date", clock);
  const timeElement = $(".clock-time", clock);
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone:"Asia/Kolkata", day:"2-digit", month:"2-digit", year:"numeric",
    hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:true
  });
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

  function update(){
    const now = new Date();
    const p = Object.fromEntries(parts.formatToParts(now).filter(x=>x.type!=="literal").map(x=>[x.type,x.value]));
    dateElement.textContent = `${p.day} ${monthNames[Number(p.month)-1]} ${p.year}`;
    timeElement.textContent = `${p.hour}:${p.minute}:${p.second} ${p.dayPeriod}`;
    const indiaISO = new Intl.DateTimeFormat("sv-SE", {timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).format(now).replace(" ","T") + "+05:30";
    dateElement.dateTime = indiaISO;
    timeElement.dateTime = indiaISO;
  }
  update();
  window.setInterval(update, 1000);
}
initIndiaClock();

/* Role-aware application shell. Public pages keep the public header. */
function initApplicationShell(){
  const nav = $(".nav");
  const actions = $(".header-actions");
  if(!nav || !actions) return;
  if(APP_ROLE && ROLE_NAV[APP_ROLE]){
    nav.setAttribute("aria-label", `${ROLE_NAMES[APP_ROLE]} application navigation`);
    nav.innerHTML = ROLE_NAV[APP_ROLE].map(([label,href])=>`<a href="${href}">${label}</a>`).join("");
    actions.innerHTML = `<span class="header-role" aria-label="Signed in role">${ROLE_NAMES[APP_ROLE]}</span><a class="btn btn-secondary" href="../../pages/auth/login.html" data-logout>Sign out</a>`;
  }
}
initApplicationShell();

/* Authentication/recovery pages intentionally have no duplicate header CTAs. */
if(document.body.classList.contains("auth-page")){
  const accountActions = $(".header-actions");
  if(accountActions) accountActions.setAttribute("aria-hidden", "true");
}

const navToggle = $(".menu");
const nav = $(".nav");
if(navToggle && nav){
  navToggle.addEventListener("click",()=>{
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  });
}

function demoSession(account){
  localStorage.setItem("ulp_demo_role", account.role);
  localStorage.setItem("ulp_demo_user", account.name);
}
function getDashboard(role){
  return ({tenant:"../../pages/tenant/dashboard.html",manager:"../../pages/manager/dashboard.html",staff:"../../pages/staff/dashboard.html",admin:"../../pages/admin/dashboard.html"})[role] || "../../pages/tenant/dashboard.html";
}

$$("[data-demo-login]").forEach(button=>button.addEventListener("click",()=>{
  const account = DEMO_ACCOUNTS[button.dataset.demoLogin];
  if(account){ demoSession(account); location.href = button.dataset.target || getDashboard(account.role); }
}));

const loginForm = $("[data-login-form]");
if(loginForm){
  loginForm.addEventListener("submit", event=>{
    event.preventDefault();
    const identifier = $("#login-identifier")?.value || "";
    const password = $("#login-password")?.value || "";
    const msg = $("[data-login-message]");
    const account = findDemoAccount(identifier);
    if(!account || account.password !== password){
      msg.textContent = "Demo credentials not recognized. Use a demo email address or mobile number with its password.";
      msg.className = "notice danger"; msg.setAttribute("role","alert"); return;
    }
    demoSession(account);
    msg.textContent = `Signed in as ${account.name}. Opening your ${account.role} dashboard…`;
    msg.className = "notice success"; msg.setAttribute("role","status");
    window.setTimeout(()=>location.href=getDashboard(account.role),250);
  });
}

/* Demo forms: accessible status only; no false claim of production persistence. */
$$("[data-demo-form]").forEach(form=>form.addEventListener("submit",event=>{
  event.preventDefault();
  if(form.hasAttribute("data-demo-signup")) return;
  const msg = $("[data-form-message]",form);
  if(msg){
    msg.textContent = form.dataset.success || "Demo action completed. Connect the production API for real persistence.";
    msg.className = "notice success"; msg.setAttribute("role","status");
  }
}));

/* Demo onboarding: signup leads to resident identity/occupancy verification.
   Sensitive files are never persisted in browser storage; production must use
   encrypted server-side storage, strict RBAC, retention rules and audit logs. */
const signupForm = $("[data-demo-signup]");
if(signupForm){
  signupForm.addEventListener("submit", event=>{
    event.preventDefault();
    const msg = $("[data-form-message]",signupForm);
    if(msg){
      msg.innerHTML = 'Account created in demo mode. <a class="btn btn-soft" href="../../pages/tenant/verification.html">Continue to identity & occupancy verification</a>';
      msg.className = "notice success"; msg.setAttribute("role","status");
    }
  });
}

function initVerificationDemo(){
  const root = $("[data-verification-root]");
  const pending = $("[data-verification-pending]");
  const locked = $("[data-verification-locked]");
  const status = $("[data-verification-status]");
  const approveButtons = $$('[data-approve-verification]');
  const approved = localStorage.getItem("ulp_demo_verification") === "approved";
  if(root){
    if(pending) pending.hidden = approved;
    if(locked) locked.hidden = !approved;
  }
  approveButtons.forEach(button=>button.addEventListener("click",()=>{
    localStorage.setItem("ulp_demo_verification","approved");
    if(pending) pending.hidden=true;
    if(locked) locked.hidden=false;
    const target = $("#owner-review-status") || status;
    if(target){
      target.textContent="Demo approval completed. Verification is now marked verified and locked; production must persist this server-side and create an audit event.";
      target.className="notice success";
      target.setAttribute("role","status");
    }
  }));
}
initVerificationDemo();


/* Home search routes to the correct first-class inventory and carries filters in the URL. */
const homeSearch = $("[data-home-search]");
if(homeSearch){
  homeSearch.addEventListener("submit", event=>{
    event.preventDefault();
    const formData = new FormData(homeSearch);
    const kind = formData.get("kind") || "any";
    const where = String(formData.get("where") || "").trim();
    const budget = String(formData.get("budget") || "any");
    const target = kind === "pg-private" || kind === "pg-shared" || kind === "coliving" ? "pages/public/pg.html" : "pages/public/properties.html";
    const params = new URLSearchParams();
    if(where) params.set("where",where);
    if(budget && budget !== "any") params.set("budget",budget);
    if(kind !== "any") params.set("kind",kind);
    location.href = `${target}${params.toString() ? "?"+params.toString() : ""}`;
  });
}

function parseBudgetRange(value, page){
  const n = Number(value);
  if(!Number.isFinite(n)) return true;
  if(page === "apartments") return n < 20000 ? "under20" : n <= 30000 ? "20to30" : "over30";
  return n < 10000 ? "under10" : n <= 15000 ? "10to15" : "over15";
}

/* Functional inventory filters + sorting, with URL state for shareable/searchable results. */
function initInventoryFilters(){
  const panel = $("[data-filter-panel]");
  const list = $("[data-results-list]");
  if(!panel || !list) return;
  const page = panel.dataset.filterPanel;
  const items = $$("[data-search-item]",list);
  const originalOrder = [...items];
  const search = $("[data-filter-search]",panel);
  const selects = $$("[data-filter-select]",panel);
  const sort = $("[data-filter-sort]");
  const count = $("[data-results-count]");
  const status = $("[data-filter-status]");
  const empty = $("[data-filter-empty]");
  const params = new URLSearchParams(location.search);

  if(search) search.value = params.get("where") || params.get("q") || "";
  selects.forEach(select=>{
    const value = params.get(select.dataset.filterSelect);
    if(value) select.value = value;
  });

  if(params.get("budget")){
    const budgetSelect = $("[data-filter-select='budget']",panel);
    if(budgetSelect){
      const raw = params.get("budget");
      const aliases = page === "apartments"
        ? {under10:"under20", "10to20":"20to30", "20to30":"20to30", over30:"over30"}
        : {under10:"under10", "10to20":"10to15", "20to30":"over15", over30:"over15"};
      const normalized = ["under20","20to30","over30","under10","10to15","over15"].includes(raw)
        ? raw : (aliases[raw] || parseBudgetRange(raw,page));
      if(normalized) budgetSelect.value = normalized;
    }
  }
  if(sort && params.get("sort")) sort.value = params.get("sort");

  function values(){
    return Object.fromEntries(selects.map(s=>[s.dataset.filterSelect,s.value]));
  }

  function matches(item, v, query){
    const text = item.textContent.toLowerCase();
    if(query && !text.includes(query)) return false;

    if(page === "apartments"){
      if(v.bhk && v.bhk !== "any" && item.dataset.bhk !== v.bhk) return false;
      if(v.furnishing && v.furnishing !== "any" && item.dataset.furnishing !== v.furnishing) return false;
      if(v.budget && v.budget !== "any" && parseBudgetRange(item.dataset.budget,page) !== v.budget) return false;
    } else {
      if(v.occupancy && v.occupancy !== "any" && item.dataset.occupancy !== v.occupancy) return false;
      if(v.meals && v.meals !== "any" && item.dataset.meals !== v.meals) return false;
      if(v.gender && v.gender !== "any" && item.dataset.gender !== v.gender) return false;
      if(v.budget && v.budget !== "any" && parseBudgetRange(item.dataset.budget,page) !== v.budget) return false;
    }
    return true;
  }

  function updateURL(v,query){
    const p = new URLSearchParams();
    if(query) p.set("where",query);
    Object.entries(v).forEach(([k,val])=>{ if(val && val !== "any") p.set(k,val); });
    if(sort && sort.value && sort.value !== "recommended") p.set("sort",sort.value);
    if(page === "pg" && params.get("kind")) p.set("kind",params.get("kind"));
    history.replaceState(null,"",`${location.pathname}${p.toString()?"?"+p.toString():""}${location.hash}`);
  }

  function apply(){
    const v = values();
    const query = (search?.value || "").trim().toLowerCase();
    const visible = items.filter(item=>matches(item,v,query));
    const ordered = [...originalOrder];

    if(sort?.value === "price-asc"){
      ordered.sort((a,b)=>Number(a.dataset.budget)-Number(b.dataset.budget));
    } else if(sort?.value === "newest"){
      ordered.sort((a,b)=>Number(b.dataset.newest||0)-Number(a.dataset.newest||0));
    } else if(sort?.value === "distance"){
      ordered.sort((a,b)=>Number(a.dataset.distance||999)-Number(b.dataset.distance||999));
    }

    ordered.forEach(item=>list.appendChild(item));
    items.forEach(item=>item.hidden=!visible.includes(item));

    const total = visible.length;
    if(count) count.textContent = `${total} ${page === "pg" ? "PG / co-living options" : "apartment homes"}`;
    if(status) status.textContent = total === items.length
      ? `Showing all ${page === "pg" ? "PG / co-living options" : "apartment homes"}.`
      : `${total} matching result${total===1?"":"s"}.`;
    if(empty) empty.hidden = total !== 0;
    updateURL(v,query);
  }

  [search,...selects,sort].filter(Boolean).forEach(el=>{
    el.addEventListener(el.tagName === "INPUT" ? "input" : "change",apply);
  });

  $("[data-filter-clear]",panel)?.addEventListener("click",()=>{
    if(search) search.value="";
    selects.forEach(s=>s.value="any");
    if(sort) sort.value="recommended";
    apply();
    search?.focus();
  });

  apply();
}
initInventoryFilters();

$$("[data-demo-action]").forEach(button=>button.addEventListener("click",()=>{
  const target=$(button.dataset.demoAction);
  if(target){ target.textContent=button.dataset.message || "Demo action completed. Production API integration is required."; target.className="notice success"; target.setAttribute("role","status"); }
}));

$$("[data-tabs]").forEach(group=>{
  const buttons=$$(".tab",group), panels=$$(".tab-panel",group);
  buttons.forEach(btn=>btn.addEventListener("click",()=>{
    buttons.forEach(x=>x.setAttribute("aria-selected",String(x===btn)));
    panels.forEach(p=>p.hidden=p.id!==btn.getAttribute("aria-controls"));
  }));
});

document.addEventListener("click",event=>{
  const logout=event.target.closest("[data-logout]");
  if(!logout) return;
  event.preventDefault();
  localStorage.removeItem("ulp_demo_role");
  localStorage.removeItem("ulp_demo_user");
  location.href="../../pages/auth/login.html";
});
