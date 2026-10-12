<!DOCTYPE html>
<html lang="en" data-palette="mono">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Poly Cut-offs · Grade Tools</title>
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
<span class="eyebrow">Schools · Polytechnics</span>
<h1>ELR2B2 cut-offs<br>by <em>course.</em></h1>
</div>
<p class="lead">
Net ELR2B2 scores for entry to the five polytechnics. Lower is better.
</p>
</section>

<section style="padding-top:60px">
<div style="margin-bottom:20px">
<a href="schools.html" class="btn btn-ghost" style="padding:8px 0">← All schools</a>
</div>

<div class="filter-bar" style="margin-bottom:24px;align-items:center">
<label style="margin:0;flex:0 0 auto;font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);font-weight:500">Year</label>
<select id="yr" style="flex:0 0 auto;min-width:140px"></select>
</div>

<div class="filter-bar">
<input id="s" placeholder="Search course or poly…" autocomplete="off">
</div>

<div class="card" style="padding:0;overflow:hidden">
<table id="t">
<thead><tr>
<th>Course</th>
<th>Polytechnic</th>
<th style="text-align:right">ELR2B2</th>
<th style="text-align:right">Change</th>
</tr></thead>
<tbody></tbody>
</table>
</div>

<div class="warnbar" style="margin-top:24px">
<b>Note:</b> Cut-offs change every year. Course-specific requirements
vary — always check the polytechnic's website for subject prerequisites.
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
initPalette();

var YRS = buildYearDropdown('yr', POLY_DATA);
var yi  = 0;

function render(){
  var Y = YRS[yi];
  var q = (document.getElementById('s').value || '').toLowerCase();

  var rows = POLY_DATA.filter(function(p){
    var yrs = p[2];
    if(yrs[Y] == null) return false;
    return !q || (p[0] + p[1]).toLowerCase().indexOf(q) !== -1;
  }).sort(function(a,b){ return a[2][Y] - b[2][Y]; });

  document.querySelector('#t tbody').innerHTML = rows.length
    ? rows.map(function(p){
        return '<tr><td>' + esc(p[0]) + '</td>'
          + '<td style="color:var(--muted)">' + esc(p[1]) + '</td>'
          + '<td style="text-align:right"><span class="al-badge ' + tier(p[2][Y]) + '">' + p[2][Y] + '</span></td>'
          + '<td style="text-align:right">' + changeBadge(YRS, POLY_DATA, p, yi) + '</td></tr>';
      }).join('')
    : '<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:36px">No courses match.</td></tr>';
}

document.getElementById('yr').addEventListener('change', function(){
  yi = YRS.indexOf(this.value);
  render();
});
document.getElementById('s').addEventListener('input', render);
render();
</script>

</body>
</html>
