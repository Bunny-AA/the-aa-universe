const films = [
  {title: "Gangotri",
  year: 2003,
  genre: "Drama / Romance",
  era: "2000s",
  tag: "DEBUT",
  image: "gangotri.jpg",
  colors: ["#8d2533", "#211018"],
  note: "Allu Arjun's acting debut, directed by K. Raghavendra Rao. He played Simhadri opposite Aditi Agarwal.",
  director: "K. Raghavendra Rao",
  producer: "Allu Aravind, C. Ashwini Dutt",
  music: "M. M. Keeravani",
  production: "United Producers",
  releaseDate: "28 March 2003",
  cast: "Allu Arjun, Aditi Agarwal, Prakash Raj, Suman, Seetha, Sunil, Brahmanandam"
  },
  {title: "Arya",
  year: 2004,
  genre: "Romance / Action",
  era: "2000s",
  tag: "BREAKTHROUGH",
  image: "arya.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A major early-career breakthrough remembered by Telugu cinema fans.",
  director: "Sukumar",
  producer: "Dil Raju",
  music: "Devi Sri Prasad",
  production: "Sri Venkateswara Creations",
  releaseDate: "7 May 2004",
  cast: "Allu Arjun, Anuradha Mehta, Siva Balaji"
  },
  {
  title: "Bunny",
  year: 2005,
  genre: "Romance / Action / Comedy",
  era: "2000s",
  tag: "MASS ENTERTAINER",
  image: "bunny.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A romantic action entertainer directed by V. V. Vinayak, featuring Allu Arjun as Bunny.",
  director: "V. V. Vinayak",
  producer: "Mallidi Satyanarayana Reddy",
  music: "Devi Sri Prasad",
  production: "Siri Venkateswara Productions",
  releaseDate: "6 April 2005",
  cast: "Allu Arjun, Gowri Munjal, Prakash Raj, Mukesh Rishi, Raghu Babu, Sharat Saxena, Sarath Kumar"
  },
  {
  title: "Happy",
  year: 2006,
  genre: "Romance / Action / Comedy",
  era: "2000s",
  tag: "ROMANTIC ENTERTAINER",
  image: "happy.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A romantic action comedy directed by A. Karunakaran, featuring Allu Arjun as Bunny Bhaskar.",
  director: "A. Karunakaran",
  producer: "Allu Aravind",
  music: "Yuvan Shankar Raja",
  production: "Geetha Arts",
  releaseDate: "27 January 2006",
  cast: "Allu Arjun, Genelia D'Souza, Manoj Bajpayee, Kishore, Brahmanandam, Tanikella Bharani, Venu Madhav"
  },
  {
  title: "Desamuduru",
  year: 2007,
  genre: "Romance / Action",
  era: "2000s",
  tag: "MASS ACTION",
  image: "desamuduru.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A romantic action entertainer directed by Puri Jagannadh, featuring Allu Arjun as TV journalist Bala Govind.",
  director: "Puri Jagannadh",
  producer: "D. V. V. Danayya",
  music: "Chakri",
  production: "Universal Media",
  releaseDate: "12 January 2007",
  cast: "Allu Arjun, Hansika Motwani, Pradeep Rawat, Ali, Subbaraju, Chandra Mohan, Telangana Shakuntala"
  },
  {
  title: "Parugu",
  year: 2008,
  genre: "Romance / Action / Drama",
  era: "2000s",
  tag: "ROMANTIC DRAMA",
  image: "parugu.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A romantic action drama directed by Bhaskar, featuring Allu Arjun as Krishna.",
  director: "Bhaskar",
  producer: "Dil Raju",
  music: "Mani Sharma",
  production: "Sri Venkateswara Creations",
  releaseDate: "1 May 2008",
  cast: "Allu Arjun, Sheela, Poonam Bajwa, Prakash Raj, Jayasudha, Sunil"
  },
  {title: "Arya 2",
  year: 2009,
  genre: "Romance / Action / Comedy",
  era: "2000s",
  tag: "CULT FAVOURITE",
  image: "arya-2.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A stylish romantic action comedy directed by Sukumar, featuring Allu Arjun as Arya.",
  director: "Sukumar",
  producer: "Aditya Babu, B. V. S. N. Prasad",
  music: "Devi Sri Prasad",
  production: "Aditya Arts",
  releaseDate: "27 November 2009",
  cast: "Allu Arjun, Kajal Aggarwal, Navdeep, Shraddha Das, Brahmanandam, Mukesh Rishi, Sayaji Shinde"
  },
  {title: "Vedam",
  year: 2010,
  genre: "Drama / Anthology",
  era: "2010s",
  tag: "CRITICALLY ACCLAIMED",
  image: "vedam.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A critically acclaimed multi-narrative drama directed by Krish, featuring Allu Arjun as Cable Raju.",
  director: "Krish",
  producer: "Shobu Yarlagadda, Prasad Devineni",
  music: "M. M. Keeravani",
  production: "Arka Media Works",
  releaseDate: "4 June 2010",
  cast: "Allu Arjun, Anushka Shetty, Manchu Manoj, Manoj Bajpayee, Saranya Ponvannan, Lekha Washington"
  },
  {title: "Badrinath",
  year: 2011,
  genre: "Action / Romance / Drama",
  era: "2010s",
  tag: "ACTION EPIC",
  image: "badrinath.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A grand action drama directed by V. V. Vinayak, featuring Allu Arjun as Badri, protector of the Badrinath temple.",
  director: "V. V. Vinayak",
  producer: "Allu Aravind",
  music: "M. M. Keeravani",
  production: "Geetha Arts",
  releaseDate: "10 June 2011",
  cast: "Allu Arjun, Tamannaah Bhatia, Prakash Raj, Kelly Dorji, Brahmanandam, Ashwini Kalsekar"
  },
  {
  title: "Julayi",
  year: 2012,
  genre: "Action / Comedy / Thriller",
  era: "2010s",
  tag: "BLOCKBUSTER",
  image: "Julayi.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A stylish action comedy thriller directed by Trivikram Srinivas, featuring Allu Arjun as Ravindra Narayan (Ravi).",
  director: "Trivikram Srinivas",
  producer: "S. Radha Krishna",
  music: "Devi Sri Prasad",
  production: "Haarika & Hassine Creations",
  releaseDate: "9 August 2012",
  cast: "Allu Arjun, Ileana D'Cruz, Sonu Sood, Rajendra Prasad, Brahmanandam, Rao Ramesh, Kota Srinivasa Rao"
  },
  {
  title: "Iddarammayilatho",
  year: 2013,
  genre: "Romance / Action / Comedy",
  era: "2010s",
  tag: "STYLISH ENTERTAINER",
  image: "iddarammayilatho.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A stylish romantic action entertainer directed by Puri Jagannadh, featuring Allu Arjun as Sanju Reddy.",
  director: "Puri Jagannadh",
  producer: "Bandla Ganesh",
  music: "Devi Sri Prasad",
  production: "Parameswara Art Productions",
  releaseDate: "31 May 2013",
  cast: "Allu Arjun, Amala Paul, Catherine Tresa, Brahmanandam, Ali, Nassar, Prakash Raj, Subbaraju"
  },
  {
  title: "Race Gurram",
  year: 2014,
  genre: "Action / Comedy / Romance",
  era: "2010s",
  tag: "BLOCKBUSTER",
  image: "racegurram.jpg",
  colors: ["#8d2533", "#211018"],
  note: "A high-energy action comedy directed by Surender Reddy, featuring Allu Arjun as Lakshman Prasad (Lucky).",
  director: "Surender Reddy",
  producer: "Nallamalupu Srinivas, Venkateswara Rao",
  music: "S. Thaman",
  production: "Sri Lakshmi Narasimha Productions",
  releaseDate: "11 April 2014",
  cast: "Allu Arjun, Shruti Haasan, Shaam, Ravi Kishan, Prakash Raj, Brahmanandam, Saloni Aswani"
},
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

function showFilm(title) {
  const f = films.find(x => x.title === title);
  if (!f) return;

  const credits = f.director ? `
    <div class="movie-credits">
      <div><span>DIRECTOR</span><strong>${f.director}</strong></div>
      <div><span>PRODUCER</span><strong>${f.producer}</strong></div>
      <div><span>MUSIC</span><strong>${f.music}</strong></div>
      <div><span>PRODUCTION</span><strong>${f.production}</strong></div>
      <div><span>RELEASE DATE</span><strong>${f.releaseDate}</strong></div>
      <div><span>CAST</span><strong>${f.cast}</strong></div>
    </div>
  ` : "";

  document.getElementById("dialogContent").innerHTML = `
    <div class="movie-detail">
      <img
        class="movie-detail-poster"
        src="${f.image}"
        alt="${f.title} poster"
      >
      <div class="movie-detail-info">
        <span class="dialog-year">${f.year} · ${f.tag}</span>
        <h2 class="dialog-title">${f.title}</h2>
        <p class="dialog-meta">${f.genre}</p>
        <p>${f.note}</p>
        <p class="dialog-disclaimer">Unofficial fan archive entry.</p>
      </div>
    </div>
    ${credits}
  `;

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
document.getElementById("timeline").innerHTML = milestones.map(([year, title, desc], index) => `
  <article class="timeline-item">
    <div class="timeline-year">${year}</div>
    <div class="timeline-content">
      <span class="timeline-number">CHAPTER ${String(index + 1).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>
  </article>
`).join("");
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

/* AA FAN ZONE - CHARACTER POLL */

const pollButtons = document.querySelectorAll(".poll-option");
const pollMessage = document.getElementById("pollMessage");
const pollResults = document.getElementById("pollResults");

const pollCharacters = ["Pushpa Raj", "Bantu", "Gana", "Lucky"];

let pollVotes = JSON.parse(
  localStorage.getItem("aaPollVotes") || "{}"
);

let userVote = localStorage.getItem("aaUserVote");

function showPollResults() {
  const totalVotes = pollCharacters.reduce(
    (sum, name) => sum + (pollVotes[name] || 0), 0
  );

  pollResults.innerHTML = pollCharacters.map(name => {
    const votes = pollVotes[name] || 0;
    const percentage = totalVotes
      ? Math.round((votes / totalVotes) * 100)
      : 0;

    return `
      <div class="poll-result">
        <div class="poll-result-label">
          <span>${name}</span>
          <span>${percentage}%</span>
        </div>
        <div class="poll-bar">
          <div class="poll-bar-fill" style="width:${percentage}%"></div>
        </div>
      </div>
    `;
  }).join("");
}

pollButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (userVote) {
      pollMessage.textContent = "You've already voted on this device!";
      return;
    }

    const choice = button.dataset.vote;

    pollVotes[choice] = (pollVotes[choice] || 0) + 1;

    localStorage.setItem("aaPollVotes", JSON.stringify(pollVotes));
    localStorage.setItem("aaUserVote", choice);

    userVote = choice;

    pollMessage.textContent = `Your vote for ${choice} has been saved! ❤️`;

    pollButtons.forEach(btn => {
      btn.disabled = true;
    });

    showPollResults();
  });
});

if (userVote) {
  pollMessage.textContent = `You voted for ${userVote}! ❤️`;
  pollButtons.forEach(button => button.disabled = true);
}

showPollResults();
/* AA FAN BATTLE */

const battleButtons = document.querySelectorAll(".battle-card");
const battleMessage = document.getElementById("battleMessage");
const battleResults = document.getElementById("battleResults");

let battleVotes = JSON.parse(
  localStorage.getItem("aaBattleVotes") || "{}"
);

let battleUserVote = localStorage.getItem("aaBattleUserVote");

function showBattleResults() {
  const characters = ["Pushpa Raj", "Bantu"];
  const total = characters.reduce(
    (sum, name) => sum + (battleVotes[name] || 0), 0
  );

  battleResults.innerHTML = characters.map(name => {
    const votes = battleVotes[name] || 0;
    const percent = total
      ? Math.round((votes / total) * 100)
      : 0;

    return `
      <div class="battle-result">
        <div class="battle-result-label">
          <span>${name}</span>
          <span>${percent}%</span>
        </div>
        <div class="battle-bar">
          <div class="battle-bar-fill" style="width:${percent}%"></div>
        </div>
      </div>
    `;
  }).join("");
}

battleButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (battleUserVote) {
      battleMessage.textContent = "You've already chosen your champion!";
      return;
    }

    const choice = button.dataset.character;

    battleVotes[choice] = (battleVotes[choice] || 0) + 1;

    localStorage.setItem("aaBattleVotes", JSON.stringify(battleVotes));
    localStorage.setItem("aaBattleUserVote", choice);

    battleUserVote = choice;

    battleMessage.textContent = `🔥 You chose ${choice}!`;

    battleButtons.forEach(btn => btn.disabled = true);

    showBattleResults();
  });
});

if (battleUserVote) {
  battleMessage.textContent = `Your champion: ${battleUserVote}! ❤️`;
  battleButtons.forEach(btn => btn.disabled = true);
}

showBattleResults();
