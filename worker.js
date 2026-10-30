// Re-Learn Your Brain visual editor v1
// Paste the entire file into your Worker. Bind D1 as DB; set ADMIN_PASSWORD
// (16+ characters) and SESSION_SECRET (32+ random characters) as secrets.
// Visit /admin. The database tables are created automatically.
const SEED = {
  "title": "Re-Learn Your Brain",
  "accent": "#c1e77a",
  "css": "",
  "sections": [
    {
      "type": "hero",
      "title": "Re-Learn Your Brain",
      "nav": "Re-Learn Your Brain",
      "label": "A NEW CHAPTER STARTS HERE",
      "text": "Brain Rewiring & Market Success Strategies\n\nExplore new perspectives. Build constructive habits. Turn your ideas into practical steps toward personal and professional growth.",
      "hidden": false,
      "blocks": [
        {
          "type": "button",
          "title": "Explore the curriculum",
          "text": "",
          "url": "#s2"
        }
      ]
    },
    {
      "type": "cards",
      "title": "The experience",
      "nav": "The experience",
      "label": "",
      "text": "Four sessions · 16 instructional hours · Two classes of six participants",
      "hidden": false,
      "blocks": [
        {
          "type": "text",
          "title": "Reflect",
          "text": "Explore philosophy, your strengths, and your next chapter.",
          "url": ""
        },
        {
          "type": "text",
          "title": "Practise",
          "text": "Build constructive habits through reflection, daily challenges, and planning.",
          "url": ""
        },
        {
          "type": "text",
          "title": "Express",
          "text": "Develop confidence through communication and presentation practice.",
          "url": ""
        }
      ]
    },
    {
      "type": "content",
      "title": "Day 01 — Direction & expression",
      "nav": "Day 01 — Direction & expression",
      "label": "",
      "text": "Four instructional hours plus a 30-minute break.",
      "hidden": false,
      "blocks": [
        {
          "type": "text",
          "title": "Philosophers and philosophy",
          "text": "60 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Affirmations & constructive self-talk",
          "text": "5 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Brain Board: your vision board",
          "text": "20 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Networking introductions",
          "text": "5 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Résumé building",
          "text": "30 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Break",
          "text": "30 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Group consultation & goal planning",
          "text": "60 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Public-speaking practice",
          "text": "60 min",
          "url": ""
        }
      ]
    },
    {
      "type": "content",
      "title": "Day 02 — Practice & purpose",
      "nav": "Day 02 — Practice & purpose",
      "label": "",
      "text": "Four instructional hours plus a 30-minute break.",
      "hidden": false,
      "blocks": [
        {
          "type": "text",
          "title": "Daily reading & activity",
          "text": "30 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Meditation",
          "text": "30 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Daily challenge",
          "text": "60 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Break",
          "text": "30 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Guided homework & application",
          "text": "60 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Optional prayer or quiet reflection",
          "text": "30 min",
          "url": ""
        },
        {
          "type": "text",
          "title": "Questions & discussion",
          "text": "30 min",
          "url": ""
        }
      ]
    },
    {
      "type": "content",
      "title": "Day 03 — Loading…",
      "nav": "Day 03 — Loading…",
      "label": "",
      "text": "Details coming soon",
      "hidden": false,
      "blocks": []
    },
    {
      "type": "content",
      "title": "Day 04 — Your old routine could not be found.",
      "nav": "Day 04 — Your old routine could not be found.",
      "label": "",
      "text": "Full session details coming soon",
      "hidden": false,
      "blocks": []
    },
    {
      "type": "content",
      "title": "A moment to celebrate",
      "nav": "A moment to celebrate",
      "label": "",
      "text": "Optional three-hour completion event: participant recognition, acknowledgements, sponsor mentions, and Q&A.",
      "hidden": false,
      "blocks": []
    },
    {
      "type": "content",
      "title": "Your next chapter",
      "nav": "Your next chapter",
      "label": "",
      "text": "To be addicted is to never end a sentence. To be withdrawn is to be scared to close the chapter. But to be free is to know you can reread the book without reliving its idiosyncrasies.\n— @thebrokescholar",
      "hidden": false,
      "blocks": []
    },
    {
      "type": "cards",
      "title": "Choose your experience",
      "nav": "Choose your experience",
      "label": "",
      "text": "Enrollment coming soon. Currency and taxes will be confirmed before purchase.",
      "hidden": false,
      "blocks": [
        {
          "type": "text",
          "title": "Course · $250",
          "text": "Introductory price. Regular $450. Four guided sessions and course learning materials.",
          "url": ""
        },
        {
          "type": "text",
          "title": "VIP · $300",
          "text": "Includes the full course and three months of additional support.\nSupport hours, format, and response times will be provided before enrollment.",
          "url": ""
        },
        {
          "type": "text",
          "title": "Inner Circle · $50",
          "text": "Optional one-time add-on: freelance resources, booking contacts, audio-engineering contacts, curated video links, and a social video tips PDF.\nCollection in preparation. Access duration and availability will be confirmed before purchase. Third-party service fees are separate.",
          "url": ""
        }
      ]
    },
    {
      "type": "content",
      "title": "Coming soon",
      "nav": "Coming soon",
      "label": "",
      "text": "Class dates, the full four-session curriculum, currency, tax details, and registration will be announced here.",
      "hidden": false,
      "blocks": []
    },
    {
      "type": "faq",
      "title": "A few things to know",
      "nav": "A few things to know",
      "label": "",
      "text": "",
      "hidden": false,
      "blocks": [
        {
          "type": "text",
          "title": "Is enrollment open?",
          "text": "Not yet. Dates, full curriculum, refund terms, and pricing details will be confirmed first.",
          "url": ""
        },
        {
          "type": "text",
          "title": "How do I attend?",
          "text": "Remotely, with reliable internet. Meeting details will be provided before enrollment.",
          "url": ""
        },
        {
          "type": "text",
          "title": "Is prayer required?",
          "text": "No. Quiet reflection is an alternative.",
          "url": ""
        },
        {
          "type": "text",
          "title": "Is this clinical treatment?",
          "text": "This is an educational personal-development course, not addiction treatment. Outcomes are not guaranteed.",
          "url": ""
        }
      ]
    }
  ]
};
const E = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = v => {try {const u=new URL(v); return ['https:','http:'].includes(u.protocol)?u.href:'#';}catch{return String(v||'').startsWith('/')&&!String(v).startsWith('//')?v:'#';}};
const encode = s => btoa(String.fromCharCode(...new Uint8Array(s))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
async function key(env){return crypto.subtle.importKey('raw',new TextEncoder().encode(env.SESSION_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);}
async function token(env){const p=encode(new TextEncoder().encode(JSON.stringify({exp:Date.now()+8*3600000,nonce:crypto.randomUUID()})));return p+'.'+encode(await crypto.subtle.sign('HMAC',await key(env),new TextEncoder().encode(p)));}
async function authorized(req,env){try {const t=(req.headers.get('cookie')||'').split(';').map(x=>x.trim()).find(x=>x.startsWith('__Host-ryb='))?.slice(11);if(!t)return false;const [p,s]=t.split('.');const bytes=Uint8Array.from(atob(s.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0));return JSON.parse(atob(p.replace(/-/g,'+').replace(/_/g,'/'))).exp>Date.now()&&await crypto.subtle.verify('HMAC',await key(env),bytes,new TextEncoder().encode(p));}catch{return false;}}
async function equal(a,b){const hash=async x=>new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(x)));const [x,y]=await Promise.all([hash(a),hash(b)]);let d=0;for(let i=0;i<x.length;i++)d|=x[i]^y[i];return d===0;}
async function init(db){await db.prepare('CREATE TABLE IF NOT EXISTS ryb_documents (id INTEGER PRIMARY KEY CHECK(id=1), draft TEXT NOT NULL, published TEXT NOT NULL, revision INTEGER NOT NULL DEFAULT 0)').run();await db.prepare('CREATE TABLE IF NOT EXISTS ryb_login_limits (id TEXT PRIMARY KEY, count INTEGER NOT NULL, reset_at INTEGER NOT NULL)').run();await db.prepare('INSERT OR IGNORE INTO ryb_documents(id,draft,published) VALUES(1,?,?)').bind(JSON.stringify(SEED),JSON.stringify(SEED)).run();}
function validate(d){if(!d||typeof d.title!=='string'||d.title.length>200||!/^#[0-9a-f]{6}$/i.test(d.accent)||!Array.isArray(d.sections)||d.sections.length>60||typeof d.css!=='string'||d.css.length>30000)throw Error('Invalid site settings');for(const s of d.sections){if(!['hero','content','cards','faq','custom'].includes(s.type)||typeof s.title!=='string'||typeof s.text!=='string'||!Array.isArray(s.blocks)||s.blocks.length>100)throw Error('Invalid section');for(const b of s.blocks){if(!['text','button','image','video','html'].includes(b.type)||typeof b.title!=='string'||typeof b.text!=='string'||typeof b.url!=='string')throw Error('Invalid block');}}return d;}
function isolated(html){return `<iframe class="custom" title="Custom HTML block" sandbox="" referrerpolicy="no-referrer" srcdoc="${E('<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src \'none\'; style-src \'unsafe-inline\'; img-src https: data:; font-src https:"><style>body{color:#edf0e5;background:#172016;font:16px Arial;padding:15px}</style>'+html)}"></iframe>`;}
function block(b){if(b.type==='button')return `<a class="button" href="${E(safeUrl(b.url))}" rel="noopener noreferrer">${E(b.title||'Learn more')}</a>`;if(b.type==='image')return `<figure><img loading="lazy" src="${E(safeUrl(b.url))}" alt="${E(b.title)}"><figcaption>${E(b.text)}</figcaption></figure>`;if(b.type==='video')return `<article><h3>${E(b.title)}</h3><video controls preload="metadata" src="${E(safeUrl(b.url))}"></video><p>${E(b.text)}</p></article>`;if(b.type==='html')return isolated(b.text);return `<article><h3>${E(b.title)}</h3><p>${E(b.text)}</p></article>`;}
function page(d){return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${E(d.title)}</title><style>${STYLE.replaceAll('__ACCENT__',d.accent)}\n${d.css.replace(/<\/style/gi,'<\\/style')}</style></head><body><a class="skip" href="#main">Skip to content</a><header><a href="/" class="brand">R / B <small>THE BROKE SCHOLAR</small></a><nav>${d.sections.filter(s=>!s.hidden&&s.title).slice(0,5).map((s)=>`<a href="#s${d.sections.indexOf(s)}">${E(s.nav||s.title)}</a>`).join('')}</nav></header><main id="main">${d.sections.filter(s=>!s.hidden).map(s=>{const content=s.type==='faq'?s.blocks.map(b=>`<details><summary>${E(b.title)}</summary><p>${E(b.text)}</p></details>`).join(''):s.blocks.map(block).join('');return `<section id="s${d.sections.indexOf(s)}" class="${s.type}"><span class="eyebrow">${E(s.label||'')}</span>${s.type==='hero'?'<h1>':'<h2>'}${E(s.title)}${s.type==='hero'?'</h1>':'</h2>'}<p class="lead">${E(s.text)}</p><div class="blocks">${content}</div></section>`;}).join('')}</main><footer>${E(d.title)} · The Broke Scholar</footer></body></html>`;}
const STYLE = `*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#101410;color:#edf0e5;font:16px/1.65 Arial,sans-serif}a{color:inherit}header,main,footer{max-width:1200px;margin:auto}header{padding:24px 40px;display:flex;justify-content:space-between;border-bottom:1px solid #35402e;gap:24px}.brand{text-decoration:none;font-weight:900;font-size:28px;color:__ACCENT__}.brand small{display:block;font-size:9px;letter-spacing:2px}nav{display:flex;align-items:center;gap:22px}nav a{font-size:12px;text-decoration:none}section{padding:70px 40px;border-bottom:1px solid #35402e}.eyebrow{font-size:11px;letter-spacing:2px;color:__ACCENT__}h1{font-size:clamp(52px,9vw,105px);line-height:1.02;letter-spacing:-4px;max-width:900px;margin:25px 0}h2{font-size:38px;line-height:1.15;letter-spacing:-1px}h3{font-size:20px;margin-top:0}p{white-space:pre-wrap;color:#bac5b1}.lead{max-width:780px}.blocks{display:grid;gap:18px}.cards .blocks{grid-template-columns:repeat(3,1fr)}article{padding:24px;background:#182016;border:1px solid #35402e;border-radius:8px}article p:last-child{margin-bottom:0}.button{display:inline-block;justify-self:start;padding:13px 22px;background:__ACCENT__;color:#101410;border-radius:5px;text-decoration:none;font-weight:700}details{padding:20px 0;border-bottom:1px solid #35402e}summary{cursor:pointer}img,video{max-width:100%;border-radius:8px}figure{margin:0}figcaption{font-size:13px;color:#bac5b1}.custom{width:100%;min-height:300px;border:1px solid #35402e;border-radius:6px}footer{padding:30px 40px;font-size:12px;color:#bac5b1}.skip{position:absolute;top:-100px}.skip:focus{top:0;background:#fff;color:#000}a:focus-visible,summary:focus-visible{outline:3px solid __ACCENT__;outline-offset:4px}@media(max-width:760px){header{padding:20px}nav{display:none}section{padding:45px 22px}.cards .blocks{grid-template-columns:1fr}h2{font-size:30px}h1{letter-spacing:-2px}}`;
const ADMIN = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Re-Learn | Site editor</title><link rel="stylesheet" href="/admin.css"><script src="/admin.js" defer></script></head><body><div id="login"><h1>Re-Learn site editor</h1><p>Sign in to edit your site.</p><form id="loginForm"><label>Administrator password<input id="password" type="password" required autocomplete="current-password"></label><button>Sign in</button></form></div><div id="editor" hidden><header><strong>R / B · Site editor</strong><span id="status" role="status" aria-live="polite">Loading…</span><button id="save">Save draft</button><button id="publish">Publish</button><button id="reload">Reload saved</button><button id="export">Export JSON</button><button id="logout">Sign out</button><a href="/" target="_blank" rel="noopener">View live ↗</a></header><div class="workspace"><aside><h2>Site settings</h2><label>Page title<input id="siteTitle"></label><label>Accent colour<input id="accent" type="color"></label><label>Custom CSS<textarea id="css" rows="5"></textarea></label><h2>Sections</h2><div id="sectionList"></div><select id="newType"><option>content</option><option>hero</option><option>cards</option><option>faq</option><option>custom</option></select><button id="addSection">+ Add section</button><hr><div id="fields"></div></aside><div class="preview"><div class="previewBar"><button id="desktop">Desktop</button><button id="mobile">Mobile</button><span>Draft preview · unpublished</span></div><iframe id="preview" sandbox="" title="Live draft preview"></iframe></div></div></div><p id="error" role="alert"></p></body></html>`;
const ADMINCSS = `*{box-sizing:border-box}body{margin:0;font:14px/1.5 Arial;background:#f3f5f0;color:#172016}header{background:#142011;color:#fff;padding:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}header a{color:#d5edb4}#status{flex:1}h2{font-size:17px}button,select,input,textarea{font:inherit}button{cursor:pointer;background:#d1e8b1;border:1px solid #8ba269;border-radius:4px;padding:8px 11px}button:disabled{opacity:.5;cursor:wait}label{display:block;margin:12px 0}input,textarea,select{width:100%;padding:8px;border:1px solid #b4bfab;border-radius:4px;background:white}textarea{resize:vertical}input[type=color]{height:42px}input[type=checkbox]{width:auto}#login{max-width:400px;margin:12vh auto;padding:28px;background:white;border-radius:10px}.workspace{display:grid;grid-template-columns:350px 1fr;height:calc(100vh - 80px)}aside{padding:18px;overflow:auto;border-right:1px solid #ccd5c4}.row{display:flex;gap:5px;margin:7px 0;align-items:center}.row .pick{flex:1;text-align:left}.row.selected{outline:2px solid #4f6c2b}.row button{padding:6px}.block{padding:12px;background:#e4ebde;margin:15px 0;border-radius:5px}.preview{overflow:auto;padding:16px}.previewBar{display:flex;gap:10px;align-items:center;margin-bottom:12px}#preview{display:block;width:100%;height:calc(100% - 50px);min-height:550px;background:white;border:1px solid #a7b69b;margin:auto}#error{color:#9a1426;padding:0 20px;white-space:pre-wrap}button:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid #426b1b;outline-offset:2px}@media(max-width:800px){.workspace{grid-template-columns:1fr;height:auto}aside{max-height:60vh}.preview{height:650px}header{font-size:12px}}`;
const ADMINJS = "let site,revision,selected=0,dirty=false,previewSerial=0,timer;\nconst $=id=>document.getElementById(id);\nasync function api(route,data){const r=await fetch('/admin/api/'+route,{method:data?'POST':'GET',headers:data?{'Content-Type':'application/json'}:{},body:data?JSON.stringify(data):undefined});const result=await r.json();if(!r.ok)throw Error(result.error||'Request failed');return result;}\nfunction error(e){$('error').textContent=e.message||e;}\nfunction changed(){dirty=true;$('status').textContent='Unsaved changes';clearTimeout(timer);timer=setTimeout(preview,450);}\nasync function preview(){const serial=++previewSerial;try{const r=await fetch('/admin/api/preview',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({site})});if(!r.ok){const x=await r.json();throw Error(x.error);}const text=await r.text();if(serial===previewSerial)$('preview').srcdoc=text;}catch(e){error(e);}}\nfunction button(text,fn){const b=document.createElement('button');b.type='button';b.textContent=text;b.onclick=fn;return b;}\nfunction field(parent,label,obj,key,multi=false){const l=document.createElement('label');l.append(document.createTextNode(label));const x=document.createElement(multi?'textarea':'input');x.value=obj[key]||'';if(multi)x.rows=4;x.oninput=()=>{obj[key]=x.value;changed();};l.append(x);parent.append(l);}\nfunction move(a,i,delta){if(i+delta<0||i+delta>=a.length)return;[a[i],a[i+delta]]=[a[i+delta],a[i]];}\nfunction render(){const list=$('sectionList');list.replaceChildren();site.sections.forEach((s,i)=>{const row=document.createElement('div');row.className='row'+(i===selected?' selected':'');const pick=button((s.hidden?'\u25cb ':'\u25cf ')+(s.title||s.type),()=>{selected=i;render();});pick.className='pick';row.append(pick,button('\u2191',()=>{move(site.sections,i,-1);selected=Math.max(0,i-1);changed();render();}),button('\u2193',()=>{move(site.sections,i,1);selected=Math.min(site.sections.length-1,i+1);changed();render();}));list.append(row);});const panel=$('fields');panel.replaceChildren();const s=site.sections[selected];if(!s)return;const h=document.createElement('h2');h.textContent='Edit '+s.type+' section';panel.append(h);field(panel,'Heading',s,'title');field(panel,'Navigation label',s,'nav');field(panel,'Small label',s,'label');field(panel,'Description',s,'text',true);const l=document.createElement('label'),check=document.createElement('input');check.type='checkbox';check.checked=!!s.hidden;check.onchange=()=>{s.hidden=check.checked;changed();render();};l.append(check,document.createTextNode(' Hide section'));panel.append(l);panel.append(button('Duplicate section',()=>{site.sections.splice(selected+1,0,structuredClone(s));selected++;changed();render();}),button('Delete section',()=>{if(confirm('Delete this section?')){site.sections.splice(selected,1);selected=Math.max(0,selected-1);changed();render();}}));s.blocks.forEach((b,i)=>{const box=document.createElement('div');box.className='block';const title=document.createElement('strong');title.textContent=b.type+' block '+(i+1);box.append(title);field(box,'Title / image alt text',b,'title');field(box,b.type==='html'?'HTML (isolated, scripts disabled)':'Text',b,'text',true);if(['image','video','button'].includes(b.type))field(box,'URL',b,'url');box.append(button('\u2191',()=>{move(s.blocks,i,-1);changed();render();}),button('\u2193',()=>{move(s.blocks,i,1);changed();render();}),button('Duplicate',()=>{s.blocks.splice(i+1,0,structuredClone(b));changed();render();}),button('Delete',()=>{s.blocks.splice(i,1);changed();render();}));panel.append(box);});const select=document.createElement('select');for(const t of ['text','button','image','video','html']){const o=document.createElement('option');o.value=t;o.textContent=t;select.append(o);}panel.append(select,button('+ Add block',()=>{s.blocks.push({type:select.value,title:'New block',text:'',url:''});changed();render();}));}\nasync function load(){const result=await api('site');site=result.site;revision=result.revision;dirty=false;$('login').hidden=true;$('editor').hidden=false;$('siteTitle').value=site.title;$('accent').value=site.accent;$('css').value=site.css;$('status').textContent='Saved draft loaded';$('error').textContent='';render();await preview();}\n$('loginForm').onsubmit=async e=>{e.preventDefault();try{await api('login',{password:$('password').value});$('password').value='';await load();}catch(e){error(e);}};\nfor(const [id,key] of [['siteTitle','title'],['accent','accent'],['css','css']])$(id).oninput=()=>{site[key]=$(id).value;changed();};\n$('addSection').onclick=()=>{site.sections.push({type:$('newType').value,title:'New section',nav:'',label:'',text:'',hidden:false,blocks:[]});selected=site.sections.length-1;changed();render();};\nasync function save(publish){if(publish&&!confirm('Publish the current editor content to your public website?'))return;$('save').disabled=$('publish').disabled=true;const snapshot=JSON.stringify(site);try{const r=await api(publish?'publish':'save',{site:JSON.parse(snapshot),revision});revision=r.revision;dirty=JSON.stringify(site)!==snapshot;$('status').textContent=(publish?'Published':'Draft saved')+(dirty?' \u00b7 newer unsaved edits':'');$('error').textContent='';}catch(e){error(e);}finally{$('save').disabled=$('publish').disabled=false;}}\n$('save').onclick=()=>save(false);$('publish').onclick=()=>save(true);$('reload').onclick=()=>{if(!dirty||confirm('Discard unsaved edits and load the saved draft?'))load().catch(error);};$('export').onclick=()=>{const u=URL.createObjectURL(new Blob([JSON.stringify(site,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=u;a.download='relearn-site-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};$('logout').onclick=async()=>{if(dirty&&!confirm('Discard unsaved changes and sign out?'))return;try{await api('logout',{});location.reload();}catch(e){error(e);}};$('mobile').onclick=()=>{$('preview').style.width='390px';$('preview').style.maxWidth='100%';};$('desktop').onclick=()=>{$('preview').style.width='100%';};addEventListener('beforeunload',e=>{if(dirty){e.preventDefault();e.returnValue='';}});load().catch(e=>{if(e.message!=='Please sign in')error(e);});\n";
export default {async fetch(req,env){
 const url=new URL(req.url),path=url.pathname;
 const admin=path.startsWith('/admin');
 const reply=(body,status=200,type='text/html; charset=utf-8',extra={})=>new Response(req.method==='HEAD'?null:body,{status,headers:{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':admin?"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; frame-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'":"default-src 'none'; style-src 'unsafe-inline'; img-src https: data:; media-src https:; font-src https:; frame-src 'self' about:; frame-ancestors 'self'; base-uri 'none'; form-action 'none'",...extra}});
 const json=(x,s=200,h={})=>reply(JSON.stringify(x),s,'application/json; charset=utf-8',h);
 try{
 if(path==='/admin'||path==='/admin/')return reply(ADMIN);
 if(path==='/admin.css')return reply(ADMINCSS,200,'text/css; charset=utf-8');
 if(path==='/admin.js')return reply(ADMINJS,200,'text/javascript; charset=utf-8');
 if(!env.DB){return path==='/'?reply(page(SEED)):json({error:'Bind a D1 database named DB in Worker Settings → Bindings.'},503);}
 if(path==='/'&&['GET','HEAD'].includes(req.method)){await init(env.DB);const row=await env.DB.prepare('SELECT published FROM ryb_documents WHERE id=1').first();return reply(page(JSON.parse(row.published)));}
 if(!path.startsWith('/admin/api/'))return reply('Page not found',404,'text/plain');
 if(!env.ADMIN_PASSWORD||env.ADMIN_PASSWORD.length<16||!env.SESSION_SECRET||env.SESSION_SECRET.length<32)return json({error:'Set ADMIN_PASSWORD (16+ characters) and SESSION_SECRET (32+ random characters) as Worker secrets.'},503);
 if(req.method==='POST'&&req.headers.get('Origin')!==url.origin)return json({error:'Origin rejected'},403);
 if(req.method==='POST'&&req.headers.get('Content-Type')?.split(';')[0]!=='application/json')return json({error:'JSON required'},415);
 await init(env.DB);
 let data={};if(req.method==='POST'){const text=await req.text();if(text.length>250000)return json({error:'Request too large'},413);try{data=JSON.parse(text);}catch{return json({error:'Invalid JSON'},400);}}
 if(path==='/admin/api/login'&&req.method==='POST'){
 const id=req.headers.get('CF-Connecting-IP')||'unknown';const now=Date.now();
 await env.DB.prepare('INSERT INTO ryb_login_limits(id,count,reset_at) VALUES(?,1,?) ON CONFLICT(id) DO UPDATE SET count=CASE WHEN reset_at<? THEN 1 ELSE count+1 END, reset_at=CASE WHEN reset_at<? THEN excluded.reset_at ELSE reset_at END').bind(id,now+900000,now,now).run();
 const limit=await env.DB.prepare('SELECT count FROM ryb_login_limits WHERE id=?').bind(id).first();
 if(limit.count>10)return json({error:'Too many login attempts. Try again in 15 minutes.'},429);
 if(typeof data.password!=='string'||!await equal(data.password,env.ADMIN_PASSWORD))return json({error:'Incorrect password'},401);
 await env.DB.prepare('DELETE FROM ryb_login_limits WHERE id=?').bind(id).run();
 return json({ok:true},200,{'Set-Cookie':'__Host-ryb='+await token(env)+'; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=28800'});
 }
 if(!await authorized(req,env))return json({error:'Please sign in'},401);
 if(path==='/admin/api/logout'&&req.method==='POST')return json({ok:true},200,{'Set-Cookie':'__Host-ryb=; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=0'});
 if(path==='/admin/api/site'&&req.method==='GET'){const row=await env.DB.prepare('SELECT draft,revision FROM ryb_documents WHERE id=1').first();return json({site:JSON.parse(row.draft),revision:row.revision});}
 if(path==='/admin/api/preview'&&req.method==='POST')return reply(page(validate(data.site)));
 if(['/admin/api/save','/admin/api/publish'].includes(path)&&req.method==='POST'){
 const doc=JSON.stringify(validate(data.site));if(!Number.isInteger(data.revision))return json({error:'Revision required'},400);
 const publish=path.endsWith('/publish');const result=await env.DB.prepare(publish?'UPDATE ryb_documents SET draft=?,published=?,revision=revision+1 WHERE id=1 AND revision=?':'UPDATE ryb_documents SET draft=?,revision=revision+1 WHERE id=1 AND revision=?').bind(...(publish?[doc,doc,data.revision]:[doc,data.revision])).run();
 if(result.meta.changes!==1)return json({error:'Another tab changed this site. Export your changes, then reload saved content before editing.'},409);
 return json({ok:true,revision:data.revision+1});
 }
 return json({error:'Not found'},404);
 }catch(err){console.error('Editor request failed',err);return json({error:err.message?.startsWith('Invalid')?err.message:'Unable to complete request. Check the D1 binding and Worker logs.'},err.message?.startsWith('Invalid')?400:500);}
}};
