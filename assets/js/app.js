
"use strict";

/*
 * Urban Living PG UI foundation
 * DEMO ONLY:
 * - Credentials below are for navigating the prototype.
 * - Production authentication/RBAC MUST be server-side.
 * - Never put real passwords, OTPs, access tokens or secrets in localStorage.
 */
const DEMO_ACCOUNTS = {
  "tenant@urbanlivingpg.demo": { role:"tenant", password:"Tenant@123", target:"pages/tenant/dashboard.html", name:"Demo Tenant" },
  "manager@urbanlivingpg.demo": { role:"manager", password:"Manager@123", target:"pages/manager/dashboard.html", name:"Demo Manager" },
  "staff@urbanlivingpg.demo": { role:"staff", password:"Staff@123", target:"pages/staff/dashboard.html", name:"Maintenance Staff" },
  "admin@urbanlivingpg.demo": { role:"admin", password:"Admin@123", target:"pages/admin/dashboard.html", name:"Platform Admin" }
};

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

const role = localStorage.getItem("ulp_demo_role") || "tenant";
document.body.dataset.role = role;

/*
 * Shared India date/time display used across every page.
 * The timezone is deliberately fixed to Asia/Kolkata so the UI remains
 * consistent regardless of the visitor's device timezone. The UI does not
 * display the timezone label, as requested. Production audit/event timestamps
 * should be stored server-side in UTC and rendered in the required locale.
 */
function initIndiaClock(){
  const headerRow = document.querySelector(".header-row");
  if(!headerRow || headerRow.querySelector(".header-clock")) return;

  const clock = document.createElement("div");
  clock.className = "header-clock";
  clock.setAttribute("aria-label", "Current date and time");
  clock.innerHTML = `
    <time class="clock-date" id="ist-date" datetime=""></time>
    <time class="clock-time" id="ist-time" datetime=""></time>
  `;

  const actions = headerRow.querySelector(".header-actions");
  const menu = headerRow.querySelector(".menu");
  if(actions) headerRow.insertBefore(clock, actions);
  else if(menu) headerRow.insertBefore(clock, menu);
  else headerRow.appendChild(clock);

  const dateElement = clock.querySelector("#ist-date");
  const timeElement = clock.querySelector("#ist-time");
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata", day: "2-digit", month: "short", year: "numeric"
  });
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
  });

  function update(){
    const now = new Date();
    const dateText = dateFormatter.format(now);
    const timeText = timeFormatter.format(now);
    dateElement.textContent = dateText;
    timeElement.textContent = timeText;
    dateElement.dateTime = now.toISOString();
    timeElement.dateTime = now.toISOString();
  }

  update();
  window.setInterval(update, 1000);
}

initIndiaClock();

const navToggle = $(".menu");
const nav = $(".nav");
if(navToggle && nav){
  navToggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close navigation menu":"Open navigation menu");
  });
}

function demoSession(account){
  localStorage.setItem("ulp_demo_role", account.role);
  localStorage.setItem("ulp_demo_user", account.name);
}

function getDashboard(role){
  return ({
    tenant:"pages/tenant/dashboard.html",
    manager:"pages/manager/dashboard.html",
    staff:"pages/staff/dashboard.html",
    admin:"pages/admin/dashboard.html"
  })[role] || "pages/tenant/dashboard.html";
}

$$("[data-demo-login]").forEach(b=>b.addEventListener("click",()=>{
  const email=b.dataset.demoLogin;
  const account=DEMO_ACCOUNTS[email];
  if(account){
    demoSession(account);
    location.href=b.dataset.target || getDashboard(account.role);
  }
}));

const loginForm = $("[data-login-form]");
if(loginForm){
  loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    const email=($("#login-email")?.value || "").trim().toLowerCase();
    const password=$("#login-password")?.value || "";
    const msg=$("[data-login-message]");
    const account=DEMO_ACCOUNTS[email];
    if(!account || account.password!==password){
      msg.textContent="Demo credentials not recognized. Use one of the supplied demo accounts.";
      msg.className="notice danger";
      msg.setAttribute("role","alert");
      return;
    }
    demoSession(account);
    msg.textContent=`Signed in as ${account.name}. Opening your ${account.role} dashboard…`;
    msg.className="notice success";
    msg.setAttribute("role","status");
    setTimeout(()=>location.href=getDashboard(account.role),250);
  });
}

$$("[data-demo-form]").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const msg=$("[data-form-message]",form);
    if(msg){
      msg.textContent=form.dataset.success || "Demo action completed. Connect the production API for real persistence.";
      msg.className="notice success";
      msg.setAttribute("role","status");
    }
  });
});

$$("[data-filter]").forEach(input=>{
  input.addEventListener("input",()=>{
    const q=input.value.toLowerCase().trim();
    $$("[data-search-item]").forEach(item=>item.hidden=q && !item.textContent.toLowerCase().includes(q));
  });
});

$$("[data-demo-action]").forEach(b=>{
  b.addEventListener("click",()=>{
    const target=$(b.dataset.demoAction);
    if(target){
      target.textContent=b.dataset.message || "Demo action completed. Production API integration is required.";
      target.className="notice success";
      target.setAttribute("role","status");
    }
  });
});

$$("[data-tabs]").forEach(group=>{
  const buttons=$$(".tab",group), panels=$$(".tab-panel",group);
  buttons.forEach(btn=>btn.addEventListener("click",()=>{
    buttons.forEach(x=>x.setAttribute("aria-selected", String(x===btn)));
    panels.forEach(p=>p.hidden=p.id!==btn.getAttribute("aria-controls"));
  }));
});

$$("[data-logout]").forEach(b=>b.addEventListener("click",()=>{
  localStorage.removeItem("ulp_demo_role");
  localStorage.removeItem("ulp_demo_user");
  location.href="../../pages/auth/login.html";
}));
