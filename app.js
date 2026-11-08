const films = [
  {title:"Gangotri",year:2003,genre:"Action / Drama",era:"2000s",tag:"DEBUT ERA",image:"gangotri.jpg",colors:["#78323a","#1a1015"],note:"Allu Arjun's Telugu film debut. A foundational entry in the career archive."},
  {title:"Arya",year:2004,genre:"Romance / Action",era:"2000s",tag:"BREAKTHROUGH",image:"arya.jpg",colors:["#8d2533","#211018"],note:"A major early-career breakthrough remembered by Telugu cinema fans."},
  {title:"Bunny",year:2005,genre:"Action / Drama",era:"2000s",tag:"YOUTHFUL ENERGY",image:"bunny.jpg",colors:["#31546b","#111923"],note:"An energetic action-drama from the early phase of his career."},
  {title:"Happy",year:2006,genre:"Romance / Comedy",era:"2000s",tag:"ROM-COM ERA",image:"happy.jpg",colors:["#6c5b37","#17140f"],note:"A romantic comedy that added another shade to his screen persona."},
  {title:"Desamuduru",year:2007,genre:"Action",era:"2000s",tag:"ACTION MODE",image:"desamuduru.jpg",colors:["#7c3923","#1d100c"],note:"A high-energy action film from 2007."},
  {title:"Parugu",year:2008,genre:"Romance / Action",era:"2000s",tag:"EMOTIONAL RUN",image:"parugu.jpg",colors:["#55715f","#101a17"],note:"A romantic action drama with an emotional core."},
  {title:"Arya 2",year:2009,genre:"Romance / Action",era:"2000s",tag:"CULT FAVOURITE",image:"arya-2.jpg",colors:["#612e68","#160f1d"],note:"A stylised sequel and a distinctive character chapter."},
  {title:"Vedam",year:2010,genre:"Drama",era:"2010s",tag:"ENSEMBLE DRAMA",image:"vedam.jpg",colors:["#6b5543","#18120f"],note:"An acclaimed ensemble drama featuring an important performance."},
  {title:"Badrinath",year:2011,genre:"Action",era:"2010s",tag:"MYTHIC SCALE",image:"badrinath.jpg",colors:["#8a5d28","#1c140c"],note:"A large-scale action film with a distinctive visual world."},
  {title:"Julayi",year:2012,genre:"Action / Comedy",era:"2010s",tag:"SMART & STYLISH",image:"Julayi.jpg",colors:["#355d77","#101a24"],note:"A stylish action-comedy known for its witty tone."},
  {title:"Iddarammayilatho",year:2013,genre:"Romance / Action",era:"2010s",tag:"MUSICAL MOOD",image:"iddarammayilatho.jpg",colors:["#74435d","#1c101a"],note:"A romantic action entertainer."},
  {title:"Race Gurram",year:2014,genre:"Action / Comedy",era:"2010s",tag:"BLOCKBUSTER ENERGY",image:"racegurram.jpg",colors:["#8b3b22","#1b0e0b"],note:"A popular action-comedy and a major crowd-pleasing chapter."},
  {title:"S/O Satyamurthy",year:2015,genre:"Family / Drama",era:"2010s",tag:"VALUES & FAMILY",image:"son of satyamurthy.jpg",colors:["#596a83","#111620"],note:"A family drama centred on values and responsibility."},
  {title:"Rudhramadevi",year:2015,genre:"Historical",era:"2010s",tag:"HISTORICAL EPIC",image:"rudhramadevi.jpg",colors:["#76512b","#1b120c"],note:"A historical film in which he appeared as Gona Ganna Reddy."},
  {title:"Sarrainodu",year:2016,genre:"Action",era:"2010s",tag:"MASS ACTION",image:"sarinodu.jpg",colors:["#8d2525","#1b0c0d"],note:"A mass-action entertainer."},
  {title:"Duvvada Jagannadham",year:2017,genre:"Action / Comedy",era:"2010s",tag:"DUAL SHADE",image:"DJ.jpg",colors:["#65765a","#131a12"],note:"A 2017 action-comedy featuring a contrasting character setup."},
  {title:"Naa Peru Surya",year:2018,genre:"Action / Drama",era:"2010s",tag:"INTENSE CHARACTER",image:"naa peru surya naa illu India.jpg",colors:["#73502e","#19120d"],note:"A character-driven action drama."},
  {title:"Ala Vaikunthapurramuloo",year:2020,genre:"Family / Drama",era:"2020s",tag:"CULTURAL PHENOMENON",image:"alavaikunthapurramuloo.jpg",colors:["#547b7a","#0e1a1b"],note:"A major commercial success with widely celebrated music."},
  {title:"Pushpa: The Rise",year:2021,genre:"Action / Drama",era:"2020s",tag:"A NEW PHENOMENON",image:"pushpa.jpg",colors:["#a34824","#1d120c"],note:"The first chapter of Pushpa Raj's story, with a wide-reaching cultural impact."},
  {title:"Pushpa 2: The Rule",year:2024,genre:"Action / Drama",era:"2020s",tag:"THE RULE",image:"pushpa2.jpg",colors:["#8f1e22","#170b0d"],note:"The continuation of Pushpa Raj's story. Add verified production and release details here."}
];

const filmGrid = document.getElementById("filmGrid");
let activeFilter = "all";
function renderFilms(){
  const q = document.getElementById("filmSearch").value.trim().toLowerCase();
  const shown = films.filter(f => (activeFilter==="all" || f.era===activeFilter) && `${f.title} ${f.year} ${f.genre} ${f.tag}`.toLowerCase().includes(q));
  filmGrid.innerHTML = shown.length ? shown.map((f) => `
    <article class="film-card" tabindex="0" role="button" aria-label="Open ${f.title} details" data-title="${f.title}">
      <div class="film-poster" style="--c1:${f.colors[0]};--c2:${f.colors[1]}">
  <img src="${f.image}" alt="${f.title} movie poster" loading="lazy">
  <span class="poster-year">${f.year}</span>
</div>
      <div class="film-info"><h3>${f.title}</h3><p>${f.genre} · ${f.tag}</p></div>
    </article>`).join("") : `<p class="empty-wall">No films match that search. Try another title or era.</p>`;
  filmGrid.querySelectorAll(".film-card").forEach(card=>{
    const open=()=>showFilm(card.dataset.title);
    card.addEventListener("click",open);
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
  });
}
function showFilm(title){
  const f=films.find(x=>x.title===title); if(!f)return;
  document.getElementById("dialogContent").innerHTML=`<div class="dialog-year">${f.year} / ${f.tag}</div><h2 class="dialog-title">${f.title}</h2><p class="dialog-meta">${f.genre}<br><br>${f.note}</p><p class="dialog-disclaimer">Fan archive entry. Verify credits, synopsis and all production details against reliable sources before publication. Add licensed poster art and trailer links in the project data.</p>`;
  document.getElementById("filmDialog").showModal();
}
document.getElementById("filmSearch").addEventListener("input",renderFilms);
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");activeFilter=btn.dataset.filter;renderFilms();
}));
document.getElementById("dialogClose").addEventListener("click",()=>document.getElementById("filmDialog").close());
document.getElementById("filmDialog").addEventListener("click",e=>{if(e.target.id==="filmDialog")e.target.close();});

const milestones=[
  ["2003","Telugu film debut","Begins his on-screen journey with Gangotri."],
  ["2004","A breakthrough with Arya","A defining early-career milestone that helped build a strong fan following."],
  ["2010","A performance-led chapter","Vedam adds a notable ensemble-drama role to the filmography."],
  ["2014","Race Gurram","A major commercial success and a memorable entertainer."],
  ["2016","Sarrainodu","Another major mass-action chapter in the career timeline."],
  ["2020","Ala Vaikunthapurramuloo","A widely celebrated film and soundtrack era."],
  ["2021","Pushpa: The Rise","Pushpa Raj becomes a character recognised by audiences far beyond Telugu cinema."],
  ["2024","Pushpa 2: The Rule","The story continues on an even larger scale."]
];
document.getElementById("timeline").innerHTML=milestones.map(([year,title,desc])=>`<article class="timeline-item"><div class="timeline-year">${year}</div><div><h3>${title}</h3><p>${desc}</p></div></article>`).join("");

const STORAGE_KEY="aa-universe-fan-posts-v1";
function getPosts(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]")}catch{return []}}
function renderPosts(){
  const posts=getPosts();document.getElementById("fanCount").textContent=`${posts.length} POST${posts.length===1?"":"S"}`;
  document.getElementById("fanWall").innerHTML=posts.length?posts.map(p=>`<article class="fan-post"><div class="fan-post-head"><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(p.location||"FANVERSE")} · ${p.date}</small></div><p>${escapeHTML(p.message)}</p></article>`).join(""):`<div class="empty-wall">The fan wall is waiting for its first voice.<br>Be the first to post.</div>`;
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
document.getElementById("fanForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("fanName").value.trim(),location=document.getElementById("fanLocation").value.trim(),message=document.getElementById("fanMessage").value.trim();
  if(!name||!message)return;
  const posts=getPosts();posts.unshift({name,location,message,date:new Date().toLocaleDateString()});
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(posts.slice(0,30)));renderPosts();e.target.reset();}
  catch{alert("This browser could not save the post. Please check storage settings.");}
});
renderPosts();

const questions=[
  {q:"Which film marked Allu Arjun's Telugu film debut?",a:["Arya","Gangotri","Bunny","Happy"],correct:1,why:"Gangotri (2003) was his Telugu film debut."},
  {q:"Which character does Allu Arjun portray in the Pushpa films?",a:["Bantu","Pushpa Raj","Gona Ganna Reddy","Siva"],correct:1,why:"He plays Pushpa Raj in the Pushpa film series."},
  {q:"In which year was Ala Vaikunthapurramuloo released?",a:["2018","2019","2020","2021"],correct:2,why:"Ala Vaikunthapurramuloo was released in 2020."}
];
let qi=0,score=0,answered=false;
function renderQuiz(){
  const q=questions[qi];answered=false;
  document.getElementById("quizProgress").textContent=`${String(qi+1).padStart(2,"0")} / ${String(questions.length).padStart(2,"0")}`;
  document.getElementById("quizQuestion").textContent=q.q;
  document.getElementById("quizFeedback").textContent="";
  document.getElementById("quizNext").disabled=true;
  document.getElementById("quizNext").textContent=qi===questions.length-1?"SEE MY SCORE →":"NEXT QUESTION →";
  document.getElementById("quizOptions").innerHTML=q.a.map((a,i)=>`<button class="quiz-option" data-index="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join("");
  document.querySelectorAll(".quiz-option").forEach(btn=>btn.addEventListener("click",()=>answerQuiz(Number(btn.dataset.index))));
}
function answerQuiz(index){
  if(answered)return;answered=true;const q=questions[qi];if(index===q.correct)score++;
  document.querySelectorAll(".quiz-option").forEach((b,i)=>{b.disabled=true;if(i===q.correct)b.classList.add("correct");else if(i===index)b.classList.add("wrong");});
  document.getElementById("quizFeedback").textContent=(index===q.correct?"Correct! ":"Not quite. ")+q.why;
  document.getElementById("quizNext").disabled=false;
}
document.getElementById("quizNext").addEventListener("click",()=>{
  if(!answered)return;
  if(qi<questions.length-1){qi++;renderQuiz();}
  else{document.getElementById("quizQuestion").textContent=`You scored ${score} / ${questions.length}!`;document.getElementById("quizOptions").innerHTML="";document.getElementById("quizFeedback").textContent=score===3?"Icon-level knowledge. You nailed it!":"Keep exploring the archive and try again.";document.getElementById("quizNext").textContent="PLAY AGAIN ↻";document.getElementById("quizNext").disabled=false;document.getElementById("quizNext").onclick=()=>{qi=0;score=0;document.getElementById("quizNext").onclick=null;renderQuiz();};}
});
renderFilms();renderQuiz();
document.getElementById("year").textContent=new Date().getFullYear();
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));

