<!DOCTYPE html>
<html lang="en" data-palette="mono">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Secondary Cut-offs · Grade Tools</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="style.css">
<script>
try{document.documentElement.dataset.palette=localStorage.getItem('palette')||'mono'}catch(e){}
</script>
</head>
<body>

<nav>
<a class="brand" href="index.html"><span class="mark">✦</span> <span>Grade Tools</span></a>
<div class="links">
<a href="index.html">Home</a>
<a href="basic.html">Score</a>
<a href="dream.html">Dream</a>
<a href="reverse.html">Reverse</a>
<a href="schools.html" class="active">Schools</a>
</div>
</nav>

<main>
<section class="hero" style="padding:80px 0 60px">
<div>
<span class="eyebrow">Schools · Secondary</span>
<h1>PSLE cut-offs<br>by <em>school.</em></h1>
</div>
<p class="lead">
PSLE intake scores for Integrated Programme and O-Level tracks.
Lower is better. Filter by track to see each separately.
</p>
</section>

<section style="padding-top:60px">
<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:20px">
<a href="schools.html" class="btn btn-ghost" style="padding:8px 0">← All schools</a>
</div>

<div class="filter-bar" style="margin-bottom:24px;align-items:center">
<label style="margin:0;flex:0 0 auto;font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);font-weight:500">Year</label>
<select id="yr" style="flex:0 0 auto;min-width:140px">
<option value="2025">2025 intake</option>
<option value="2024">2024 intake</option>
<option value="2023">2023 intake</option>
</select>
</div>

<div class="filter-bar">
<input id="s" placeholder="Search school…" autocomplete="off">
<select id="tr">
<option value="">All tracks</option>
<option value="ip">Integrated Programme</option>
<option value="olevel">O-Level</option>
</select>
</div>

<div class="card" style="padding:0;overflow:hidden">
<table id="t">
<thead><tr>
<th>School</th>
<th>Track</th>
<th style="text-align:right">PSLE</th>
<th style="text-align:right">Change</th>
</tr></thead>
<tbody></tbody>
</table>
</div>

<div class="warnbar" style="margin-top:24px">
<b>Note:</b> Some schools offer both IP and O-Level tracks — they appear
twice. Cut-offs change every year; check MOE for current figures.
</div>
</section>
</main>

<footer>
<div class="foot-brand"><span class="mark">✦</span> Grade Tools</div>
<div>Unofficial · Check MOE / SEAB</div>
</footer>

<div class="palette-bar" role="group" aria-label="Colour palette">
<button class="swatch" data-set="mono"></button>
<button class="swatch" data-set="warm"></button>
<button class="swatch" data-set="cool"></button>
<button class="swatch" data-set="scandi"></button>
<button class="swatch" data-set="japandi"></button>
<button class="swatch" data-set="desert"></button>
</div>

<script src="schools-data.js"></script>
<script>
(function(){
var sw=document.querySelectorAll('.swatch');
function set(n){document.documentElement.dataset.palette=n;try{localStorage.setItem('palette',n)}catch(e){}sw.forEach(function(s){s.classList.toggle('active',s.dataset.set===n)})}
sw.forEach(function(s){s.addEventListener('click',function(){set(s.dataset.set)})});
set(document.documentElement.dataset.palette||'mono')})();

var Y='2025', PY='2024';
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function tier(c){return c<=6?'low':c<=12?'mid':'high'}
function badge(row){
var c=row[3][Y], p=row[3][PY];
if(c==null||p==null)return '<span style="color:var(--dim);font-size:12px">—</span>';
var d=c-p;
if(d===0)return '<span style="color:var(--dim);font-size:12px">—</span>';
if(d<0)  return '<span style="color:var(--good);font-size:12px">▼ '+Math.abs(d)+'</span>';
return '<span style="color:var(--bad);font-size:12px">▲ '+d+'</span>';
}

function render(){
var q=(document.getElementById('s').value||'').toLowerCase();
var t=document.getElementById('tr').value;
var list=SEC_DATA[2025]||[];
var rows=list.filter(function(s){
  if(s[3][Y]==null)return false;
  if(q&&s[0].toLowerCase().indexOf(q)===-1)return false;
  if(t&&s[2]!==t)return false;
  return true;
}).sort(function(a,b){
  var ai=a[2]==='ip'?0:1, bi=b[2]==='ip'?0:1;
  if(ai!==bi)return ai-bi;
  return a[3][Y]-b[3][Y];
});

document.querySelector('#t tbody').innerHTML=rows.length
  ?rows.map(function(s){
    var label=s[2]==='ip'?'IP':'O-Level';
    var style=s[2]==='ip'
      ?'color:var(--accent);font-weight:500;font-size:12px;letter-spacing:.06em;text-transform:uppercase'
      :'color:var(--muted);font-size:12px;letter-spacing:.06em;text-transform:uppercase';
    return '<tr><td>'+esc(s[0])+'</td>'
    +'<td style="'+style+'">'+label+'</td>'
    +'<td style="text-align:right"><span class="al-badge '+tier(s[3][Y])+'">'+s[3][Y]+'</span></td>'
    +'<td style="text-align:right">'+badge(s)+'</td></tr>';
  }).join('')
  :'<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:36px">No schools match.</td></tr>';
}

document.getElementById('yr').addEventListener('change',function(){
var yrs=[2025,2024,2023];
var i=yrs.indexOf(parseInt(this.value));
Y=String(this.value);
PY=String(yrs[Math.min(i+1,yrs.length-1)]);
render();
});
document.getElementById('s').addEventListener('input',render);
document.getElementById('tr').addEventListener('change',render);
render();
</script>

</body>
</html>