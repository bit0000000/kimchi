/* ============================================================
   Grade Tools — School cut-off data
   ------------------------------------------------------------
   To add a new year, add one entry to each school's last {}.
   Example: {2027:5, 2026:5, 2025:5}
   The pages build their year dropdowns automatically.
   ============================================================ */

/* JC — [name, region, {year: L1R5}] */
var JC_DATA = [
  ['Raffles Institution',              'Central',    {2026:3, 2025:3, 2024:5, 2023:5}],
  ['Hwa Chong Institution',            'Central',    {2026:3, 2025:4, 2024:5, 2023:5}],
  ['Eunoia Junior College',            'Central',    {2026:5, 2025:5, 2024:6, 2023:7}],
  ['Nanyang Junior College',           'West',       {2026:5, 2025:5, 2024:7, 2023:6}],
  ['Anglo-Chinese School (Independent)','Central',   {2026:5, 2025:5, 2024:8, 2023:8}],
  ['St Joseph\u2019s Institution',     'Central',    {2026:6, 2025:6, 2024:7, 2023:7}],
  ['National Junior College',          'West',       {2026:6, 2025:7, 2024:8, 2023:8}],
  ['Victoria Junior College',          'East',       {2026:6, 2025:6, 2024:8, 2023:8}],
  ['Dunman High School',               'East',       {2026:6, 2025:7, 2024:8, 2023:9}],
  ['Temasek Junior College',           'East',       {2026:7, 2025:7, 2024:8, 2023:8}],
  ['Anglo-Chinese Junior College',     'Central',    {2026:7, 2025:8, 2024:9, 2023:9}],
  ['River Valley High School',         'Central',    {2026:8, 2025:8, 2024:8, 2023:8}],
  ['St Andrew\u2019s Junior College',  'North-East', {2026:8, 2025:9, 2024:9, 2023:9}],
  ['Anderson Serangoon Junior College','North-East', {2026:9, 2025:10,2024:11,2023:11}],
  ['Catholic Junior College',          'Central',    {2026:11,2025:12,2024:12,2023:13}],
  ['Tampines Meridian Junior College', 'East',       {2026:12,2025:12,2024:13,2023:13}],
  ['Jurong Pioneer Junior College',    'West',       {2026:14,2025:14,2024:15,2023:15}],
  ['Yishun Innova Junior College',     'North',      {2026:18,2025:18,2024:20,2023:19}],
  ['Millennia Institute (L1R4)',       'West',       {2026:20,2025:17,2024:20,2023:18}]
];

/* Poly — [course, polytechnic, {year: ELR2B2}] */
var POLY_DATA = [
  ['Business Studies',           'Ngee Ann Polytechnic',   {2025:10,2024:10,2023:11}],
  ['Mass Communication',         'Ngee Ann Polytechnic',   {2025:9, 2024:9, 2023:9}],
  ['Information Technology',     'Ngee Ann Polytechnic',   {2025:11,2024:12,2023:12}],
  ['Mechanical Engineering',     'Ngee Ann Polytechnic',   {2025:15,2024:16,2023:17}],
  ['Biomedical Science',         'Ngee Ann Polytechnic',   {2025:5, 2024:5, 2023:5}],
  ['Business Administration',    'Singapore Polytechnic',  {2025:10,2024:11,2023:11}],
  ['Computer Science',           'Singapore Polytechnic',  {2025:10,2024:10,2023:11}],
  ['Electrical Engineering',     'Singapore Polytechnic',  {2025:16,2024:17,2023:18}],
  ['Accountancy',                'Temasek Polytechnic',    {2025:10,2024:11,2023:11}],
  ['Hospitality & Tourism',      'Temasek Polytechnic',    {2025:14,2024:15,2023:15}],
  ['Biomedical Science',         'Temasek Polytechnic',    {2025:8, 2024:9, 2023:9}],
  ['Business Management',        'Nanyang Polytechnic',    {2025:12,2024:12,2023:13}],
  ['Nursing',                    'Nanyang Polytechnic',    {2025:15,2024:16,2023:17}],
  ['Design',                     'Nanyang Polytechnic',    {2025:13,2024:14,2023:15}],
  ['Common Business Programme',  'Republic Polytechnic',   {2025:13,2024:14,2023:15}],
  ['Sports & Exercise Science',  'Republic Polytechnic',   {2025:15,2024:16,2023:17}],
  ['Information Technology',     'Republic Polytechnic',   {2025:12,2024:12,2023:13}],
  ['Cybersecurity & Digital Forensics','Republic Polytechnic',{2025:11,2024:16,2023:18}]
];

/* Sec — [name, type, track, {year: PSLE}] */
var SEC_DATA = [
  ['Raffles Institution',        'Integrated Programme','ip',     {2025:6, 2024:6, 2023:6}],
  ['Raffles Girls\u2019 School', 'Integrated Programme','ip',     {2025:6, 2024:6, 2023:6}],
  ['Hwa Chong Institution',      'Integrated Programme','ip',     {2025:6, 2024:7, 2023:7}],
  ['Nanyang Girls\u2019 High',   'Integrated Programme','ip',     {2025:6, 2024:7, 2023:7}],
  ['Methodist Girls\u2019',      'Integrated Programme','ip',     {2025:6, 2024:6, 2023:6}],
  ['ACS (Independent)',          'Integrated Programme','ip',     {2025:7, 2024:7, 2023:7}],
  ['Singapore Chinese Girls\u2019','Integrated Programme','ip',   {2025:7, 2024:7, 2023:7}],
  ['St. Joseph\u2019s Institution','Integrated Programme','ip',   {2025:7, 2024:7, 2023:7}],
  ['Catholic High School',       'Integrated Programme','ip',     {2025:7, 2024:8, 2023:8}],
  ['CHIJ St. Nicholas Girls\u2019','Integrated Programme','ip',   {2025:7, 2024:7, 2023:7}],
  ['Dunman High School',         'Integrated Programme','ip',     {2025:8, 2024:8, 2023:8}],
  ['National Junior College',    'Integrated Programme','ip',     {2025:7, 2024:7, 2023:7}],
  ['Temasek Junior College',     'Integrated Programme','ip',     {2025:8, 2024:8, 2023:8}],
  ['Victoria School',            'Integrated Programme','ip',     {2025:8, 2024:8, 2023:8}],
  ['River Valley High School',   'Integrated Programme','ip',     {2025:9, 2024:9, 2023:9}],
  ['Cedar Girls\u2019 Secondary','Integrated Programme','ip',     {2025:9, 2024:8, 2023:8}],
  ['Methodist Girls\u2019',      'Autonomous',          'olevel', {2025:8, 2024:8, 2023:8}],
  ['Anglican High School',       'Autonomous',          'olevel', {2025:11,2024:11,2023:11}],
  ['Victoria School',            'Autonomous',          'olevel', {2025:9, 2024:9, 2023:9}],
  ['Cedar Girls\u2019 Secondary','Autonomous',          'olevel', {2025:9, 2024:9, 2023:9}],
  ['Anderson Secondary School',  'Autonomous',          'olevel', {2025:11,2024:10,2023:10}],
  ['Bukit Panjang Gov High',     'Autonomous',          'olevel', {2025:12,2024:12,2023:12}],
  ['Chung Cheng High (Main)',    'Autonomous',          'olevel', {2025:12,2024:12,2023:12}],
  ['Tanjong Katong Girls\u2019', 'Autonomous',          'olevel', {2025:13,2024:13,2023:13}],
  ['Temasek Secondary School',   'Government',          'olevel', {2025:14,2024:14,2023:14}]
];

/* ============================================================
   HELPERS — used by all three pages
   ============================================================ */

/* Extract every year that appears in the data, newest first */
function allYears(list){
  var set = {};
  list.forEach(function(row){
    var yrs = row[row.length - 1];
    Object.keys(yrs).forEach(function(y){ set[y] = true; });
  });
  return Object.keys(set).sort().reverse();
}

/* Fill a year <select> and return the year list */
function buildYearDropdown(selId, list){
  var sel = document.getElementById(selId);
  if(!sel) return [];
  var yrs = allYears(list);
  sel.innerHTML = yrs.map(function(y){
    return '<option value="' + y + '">' + y + ' intake</option>';
  }).join('');
  return yrs;
}

/* Escape HTML */
function esc(s){
  return String(s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];
  });
}

/* Colour tier for badges */
function tier(c){
  return c <= 6 ? 'low' : c <= 12 ? 'mid' : 'high';
}

/* Change indicator — compares current year with the next-older year */
function changeBadge(years, list, row, yearIndex){
  var yrs = row[row.length - 1];
  var cur  = yrs[years[yearIndex]];
  var prev = yrs[years[yearIndex + 1]];
  if(cur == null || prev == null){
    return '<span style="color:var(--dim);font-size:12px">—</span>';
  }
  var d = cur - prev;
  if(d === 0) return '<span style="color:var(--dim);font-size:12px">—</span>';
  if(d < 0)   return '<span style="color:var(--good);font-size:12px">▼ ' + Math.abs(d) + '</span>';
  return '<span style="color:var(--bad);font-size:12px">▲ ' + d + '</span>';
}

/* Palette switcher — same on every page */
function initPalette(){
  var sw = document.querySelectorAll('.swatch');
  function set(n){
    document.documentElement.dataset.palette = n;
    try{ localStorage.setItem('palette', n); }catch(e){}
    sw.forEach(function(s){ s.classList.toggle('active', s.dataset.set === n); });
  }
  sw.forEach(function(s){ s.addEventListener('click', function(){ set(s.dataset.set); }); });
  set(document.documentElement.dataset.palette || 'mono');
}
