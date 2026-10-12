/* Grade Tools — school cut-off data
   Format: [name, region/poly, {year: cut}] */

var JC_DATA = {
  2025: [
    ['Raffles Institution','Central',{2025:5,2024:5,2023:5}],
    ['Hwa Chong Institution','Central',{2025:5,2024:5,2023:5}],
    ['Eunoia Junior College','Central',{2025:6,2024:6,2023:7}],
    ['Nanyang Junior College','West',{2025:7,2024:7,2023:6}],
    ['Victoria Junior College','East',{2025:8,2024:8,2023:8}],
    ['National Junior College','West',{2025:8,2024:8,2023:8}],
    ['Dunman High School','East',{2025:8,2024:8,2023:9}],
    ['ACS (Independent)','Central',{2025:8,2024:8,2023:8}],
    ['St Andrew\u2019s JC','North-East',{2025:9,2024:9,2023:9}],
    ['Temasek Junior College','East',{2025:8,2024:8,2023:8}],
    ['River Valley High School','Central',{2025:8,2024:8,2023:8}],
    ['Anderson Serangoon JC','North-East',{2025:11,2024:11,2023:11}],
    ['Catholic Junior College','Central',{2025:12,2024:12,2023:13}],
    ['Tampines Meridian JC','East',{2025:13,2024:13,2023:13}],
    ['Jurong Pioneer JC','West',{2025:15,2024:15,2023:15}],
    ['Yishun Innova JC','North',{2025:20,2024:20,2023:19}],
    ['Millennia Institute (L1R4)','West',{2025:20,2024:20,2023:18}]
  ]
};

var POLY_DATA = {
  2025: [
    ['Business Studies','Ngee Ann Polytechnic',{2025:10,2024:10,2023:11}],
    ['Mass Communication','Ngee Ann Polytechnic',{2025:9,2024:9,2023:9}],
    ['Information Technology','Ngee Ann Polytechnic',{2025:11,2024:12,2023:12}],
    ['Mechanical Engineering','Ngee Ann Polytechnic',{2025:15,2024:16,2023:17}],
    ['Business Administration','Singapore Polytechnic',{2025:10,2024:11,2023:11}],
    ['Computer Science','Singapore Polytechnic',{2025:10,2024:10,2023:11}],
    ['Electrical Engineering','Singapore Polytechnic',{2025:16,2024:17,2023:18}],
    ['Accountancy','Temasek Polytechnic',{2025:10,2024:11,2023:11}],
    ['Hospitality & Tourism','Temasek Polytechnic',{2025:14,2024:15,2023:15}],
    ['Biomedical Science','Temasek Polytechnic',{2025:8,2024:9,2023:9}],
    ['Business Management','Nanyang Polytechnic',{2025:12,2024:12,2023:13}],
    ['Nursing','Nanyang Polytechnic',{2025:15,2024:16,2023:17}],
    ['Design','Nanyang Polytechnic',{2025:13,2024:14,2023:15}],
    ['Common Business','Republic Polytechnic',{2025:13,2024:14,2023:15}],
    ['Sports & Exercise Science','Republic Polytechnic',{2025:15,2024:16,2023:17}]
  ]
};

var SEC_DATA = {
  2025: [
    ['Raffles Institution','IP','ip',{2025:6,2024:6,2023:6}],
    ['Raffles Girls\u2019 School','IP','ip',{2025:6,2024:6,2023:6}],
    ['Hwa Chong Institution','IP','ip',{2025:6,2024:7,2023:7}],
    ['Nanyang Girls\u2019 High','IP','ip',{2025:6,2024:7,2023:7}],
    ['Methodist Girls\u2019','IP','ip',{2025:6,2024:6,2023:6}],
    ['ACS (Independent)','IP','ip',{2025:7,2024:7,2023:7}],
    ['Singapore Chinese Girls\u2019','IP','ip',{2025:7,2024:7,2023:7}],
    ['St. Joseph\u2019s Institution','IP','ip',{2025:7,2024:7,2023:7}],
    ['Catholic High School','IP','ip',{2025:7,2024:8,2023:8}],
    ['CHIJ St. Nicholas','IP','ip',{2025:7,2024:7,2023:7}],
    ['Dunman High School','IP','ip',{2025:8,2024:8,2023:8}],
    ['National Junior College','IP','ip',{2025:7,2024:7,2023:7}],
    ['Temasek Junior College','IP','ip',{2025:8,2024:8,2023:8}],
    ['Victoria School','IP','ip',{2025:8,2024:8,2023:8}],
    ['River Valley High School','IP','ip',{2025:9,2024:9,2023:9}],
    ['Cedar Girls\u2019 Secondary','IP','ip',{2025:9,2024:8,2023:8}],
    ['Anglican High School','Autonomous','olevel',{2025:11,2024:11,2023:11}],
    ['Anderson Secondary','Autonomous','olevel',{2025:11,2024:10,2023:10}],
    ['Bukit Panjang Gov High','Autonomous','olevel',{2025:12,2024:12,2023:12}],
    ['Chung Cheng High (Main)','Autonomous','olevel',{2025:12,2024:12,2023:12}],
    ['Tanjong Katong Girls\u2019','Autonomous','olevel',{2025:13,2024:13,2023:13}],
    ['Temasek Secondary','Government','olevel',{2025:14,2024:14,2023:14}]
  ]
};