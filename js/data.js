//mark为元素简写；name为元素名称，mass为元素摩尔质量，column为元素在元素周期表中所在的行，row为元素在元素周期表中所在的列
var table = [{
	mark: "H",
	name: "Hydrogen",
	mass: "1.00794",
	num:1,
	column: 1,
	row: 1
}, {
	mark:"He",
	name:"Helium",
	mass:"4.002602",
	num:2,
	column:18,
	row:1
}, {
	mark:"Li", 
	name:"Lithium", 
	mass:"6.941", 
	num:3,
	column:1, 
	row:2
}, {
	mark:"Be",
	name:"Beryllium",
	mass:"9.012182",
	num:4,
	column:2,
	row:2
}, {
	mark:"B",
	name:"Boron",
	mass:"10.811",
	num:5,
	column:13,
	row:2
}, {
	mark:"C",
	name:"Carbon",
	mass:"12.0107",
	num:6,
	column:14,
	row:2
}, {
	mark:"N",
	name:"Nitrogen",
	mass:"14.0067",
	num:7,
	column:15,
	row:2
}, {
	mark:"O", 
	name:"Oxygen", 
	mass:"15.9994", 
	num:8,
	column:16, 
	row:2
}, {
	mark:"F",
	name:"Fluorine",
	mass:"18.9984032",
	num:9,
	column:17,
	row:2
}, {
	mark:"Ne",
	name:"Neon",
	mass:"20.1797",
	num:10,
	column:18,
	row:2
}, {
	mark:"Na",
	name:"Sodium",
	mass:"22.98976...",
	num:11,
	column:1,
	row:3
}, {
	mark:"Mg",
	name:"Magnesium",
	mass:"24.305",
	num:12,
	column:2,
	row:3
}, {
	mark:"Al",
	name:"Aluminium",
	mass:"26.9815386",
	num:13,
	column:13,
	row:3
}, {
	mark:"Si",
	name:"Silicon",
	mass:"28.0855",
	num:14,
	column:14,
	row:3
}, {
	mark:"P",
	name:"Phosphorus",
	mass:"30.973762",
	num:15,
	column:15,
	row:3
}, {
	mark:"S",
	name:"Sulfur",
	mass:"32.065",
	num:16,
	column:16,
	row:3
}, {
	mark:"Cl",
	name:"Chlorine",
	mass:"35.453",
	num:17,
	column:17,
	row:3
}, {
	mark:"Ar",
	name:"Argon",
	mass:"39.948",
	num:18,
	column:18,
	row:3
}, {
	mark:"K",
	name:"Potassium",
	mass:"39.948",
	num:19,
	column:1,
	row:4
}, {
	mark:"Ca",
	name:"Calcium",
	mass:"40.078",
	num:20,
	column:2,
	row:4
}, {
	mark:"Sc",
	name:"Scandium",
	mass:"44.955912",
	num:21,
	column:3,
	row:4
}, {
	mark:"Ti",
	name:"Titanium",
	mass:"47.867",
	num:22,
	column:4,
	row:4
}, {
	mark:"V",
	name:"Vanadium",
	mass:"50.9415",
	num:23,
	column:5,
	row:4
}, {
	mark:"Cr",
	name:"Chromium",
	mass:"51.9961",
	num:24,
	column:6,
	row:4
}, {
	mark:"Mn",
	name:"Manganese",
	mass:"54.938045",
	num:25,
	column:7,
	row:4
}, {
	mark:"Fe",
	name:"Iron",
	mass:"55.845",
	num:26,
	column:8,
	row:4
}, {
	mark:"Co",
	name:"Cobalt",
	mass:"58.933195",
	num:27,
	column:9,
	row:4
}, {
	mark:"Ni",
	name:"Nickel",
	mass:"58.6934",
	num:28,
	column:10,
	row:4
}, {
	mark:"Cu",
	name:"Copper",
	mass:"63.546",
	num:29,
	column:11,
	row:4
}, {
	mark:"Zn",
	name:"Zinc",
	mass:"65.38",
	num:30,
	column:12,
	row:4
}, {
	mark:"Ga",
	name:"Gallium",
	mass:"69.723",
	num:31,
	column:13,
	row:4
}, {
	mark:"Ge",
	name:"Germanium",
	mass:"72.63",
	num:32,
	column:14,
	row:4
}, {
	mark:"As",
	name:"Arsenic",
	mass:"74.9216",
	num:33,
	column:15,
	row:4
}, {
	mark:"Se",
	name:"Selenium",
	mass:"78.96",
	num:34,
	column:16,
	row:4
}, {
	mark:"Br",
	name:"Bromine",
	mass:"79.904",
	num:35,
	column:17,
	row:4
}, {
	mark:"Kr",
	name:"Krypton",
	mass:"83.798",
	num:36,
	column:18,
	row:4
}, {
	mark:"Rb",
	name:"Rubidium",
	mass:"85.4678",
	num:37,
	column:1,
	row:5
}, {
	mark:"Sr",
	name:"Strontium",
	mass:"87.62",
	num:38,
	column:2,
	row:5
}, {
	mark:"Y",
	name:"Yttrium",
	mass:"88.90585",
	num:39,
	column:3,
	row:5
}, {
	mark:"Zr",
	name:"Zirconium",
	mass:"91.224",
	num:40,
	column:4,
	row:5
}, {
	mark:"Nb",
	name:"Niobium",
	mass:"92.90628",
	num:41,
	column:5,
	row:5
}, {
	mark:"Mo",
	name:"Molybdenum",
	mass:"95.96",
	num:42,
	column:6,
	row:5
}, {
	mark:"Tc",
	name:"Technetium",
	mass:"(98)",
	num:43,
	column:7,
	row:5
}, {
	mark:"Ru",
	name:"Ruthenium",
	mass:"101.07",
	num:44,
	column:8,
	row:5
}, {
	mark:"Rh",
	name:"Rhodium",
	mass:"102.9055",
	num:45,
	column:9,
	row:5
}, {
	mark:"Pd",
	name:"Palladium",
	mass:"106.42",
	num:46,
	column:10,
	row:5
}, {
	mark:"Ag",
	name:"Silver",
	mass:"107.8682",
	num:47,
	column:11,
	row:5
}, {
	mark:"Cd",
	name:"Cadmium",
	mass:"112.411",
	num:48,
	column:12,
	row:5
}, {
	mark:"In",
	name:"Indium",
	mass:"114.818",
	num:49,
	column:13,
	row:5
}, {
	mark:"Sn",
	name:"Tin",
	mass:"118.71",
	num:50,
	column:14,
	row:5
}, {
	mark:"Sb",
	name:"Antimony",
	num:51,
	mass:"121.76",
	column:15,
	row:5
}, {
	mark:"Te",
	name:"Tellurium",
	mass:"127.6",
	num:52,
	column:16,
	row:5
}, {
	mark:"I",
	name:"Iodine",
	mass:"126.90447",
	num:53,
	column:17,
	row:5
}, {
	mark:"Xe",
	name:"Xenon",
	mass:"131.293",
	num:54,
	column:18,
	row:5
}, {
	mark:"Cs",
	name:"Caesium",
	mass:"132.9054",
	num:55,
	column:1,
	row:6
}, {
	mark:"Ba",
	name:"Barium",
	mass:"132.9054",
	num:56,
	column:2,
	row:6
}, {
	mark:"La",
	name:"Lanthanum",
	mass:"138.90547",
	num:57,
	column:4,
	row:9
}, {
	mark:"Ce",
	name:"Cerium",
	mass:"140.116",
	num:58,
	column:5,
	row:9
}, {
	mark:"Pr",
	name:"Praseodymium",
	mass:"140.90765",
	num:59,
	column:6,
	row:9
}, {
	mark:"Nd",
	name:"Neodymium",
	mass:"144.242",
	num:60,
	column:7,
	row:9
}, {
	mark:"Pm",
	name:"Promethium",
	mass:"(145)",
	num:61,
	column:8,
	row:9
}, {
	mark:"Sm",
	name:"Samarium",
	mass:"150.36",
	num:62,
	column:9,
	row:9
}, {
	mark:"Eu",
	name:"Europium",
	mass:"151.964",
	num:63,
	column:10,
	row:9
}, {
	mark:"Gd",
	name:"Gadolinium",
	mass:"157.25",
	num:64,
	column:11,
	row:9
}, {
	mark:"Tb",
	name:"Terbium",
	mass:"158.92535",
	num:65,
	column:12,
	row:9
}, {
	mark:"Dy",
	name:"Dysprosium",
	mass:"162.5",
	num:66,
	column:13,
	row:9
}, {
	mark:"Ho",
	name:"Holmium",
	mass:"164.93032",
	num:67,
	column:14,
	row:9
}, {
	mark:"Er",
	name:"Erbium",
	mass:"167.259",
	num:68,
	column:15,
	row:9
}, {
	mark:"Tm",
	name:"Thulium",
	mass:"168.93421",
	num:69,
	column:16,
	row:9
}, {
	mark:"Yb",
	name:"Ytterbium",
	mass:"173.054",
	num:70,
	column:17,
	row:9
}, {
	mark:"Lu",
	name:"Lutetium",
	mass:"174.9668",
	num:71,
	column:18,
	row:9
}, {
	mark:"Hf",
	name:"Hafnium",
	mass:"178.49",
	num:72,
	column:4,
	row:6
}, {
	mark:"Ta",
	name:"Tantalum",
	mass:"180.94788",
	num:73,
	column:5,
	row:6
}, {
	mark:"W",
	name:"Tungsten",
	mass:"183.84",
	num:74,
	column:6,
	row:6
}, {
	mark:"Re",
	name:"Rhenium",
	mass:"186.207",
	num:75,
	column:7,
	row:6
}, {
	mark:"Os",
	name:"Osmium",
	mass:"190.23",
	num:76,
	column:8,
	row:6
}, {
	mark:"Ir",
	name:"Iridium",
	mass:"192.217",
	num:77,
	column:9,
	row:6
}, {
	mark:"Pt",
	name:"Platinum",
	mass:"195.084",
	num:78,
	column:10,
	row:6
}, {
	mark:"Au",
	name:"Gold",
	mass:"196.966569",
	num:79,
	column:11,
	row:6
}, {
	mark:"Hg",
	name:"Mercury",
	mass:"200.59",
	num:80,
	column:12,
	row:6
}, {
	mark:"Tl",
	name:"Thallium",
	mass:"204.3833",
	num:81,
	column:13,
	row:6
}, {
	mark:"Pb",
	name:"Lead",
	mass:"207.2",
	num:82,
	column:14,
	row:6
}, {
	mark:"Bi",
	name:"Bismuth",
	name:"208.9804",
	num:83,
	column:15,
	row:6
}, {
	mark:"Po",
	name:"Polonium",
	mass:"(209)",
	num:84,
	column:16,
	row:6
}, {
	mark:"At",
	name:"Astatine",
	mass:"(210)",
	num:85,
	column:17,
	row:6
}, {
	mark:"Rn",
	name:"Radon",
	mass:"(222)",
	num:86,
	column:18,
	row:6
}, {
	mark:"Fr",
	name:"Francium",
	mass:"(223)",
	num:87,
	column:1,
	row:7
}, {
	mark:"Ra",
	name:"Radium",
	mass:"(226)",
	num:88,
	column:2,
	row:7
}, {
	mark:"Ac",
	name:"Actinium",
	mass:"(227)",
	num:89,
	column:4,
	row:10
}, {
	mark:"Th",
	name:"Thorium",
	mass:"232.03806",
	num:90,
	column:5,
	row:10
}, {
	mark:"Pa",
	name:"Protactinium",
	mass:"231.0588",
	num:91,
	column:6,
	row:10
}, {
	mark:"U",
	name:"Uranium",
	mass:"238.02891",
	num:92,
	column:7,
	row:10
}, {
	mark:"Np",
	name:"Neptunium",
	mass:"(237)",
	num:93,
	column:8,
	row:10
}, {
	mark:"Pu",
	name:"Plutonium",
	mass:"(244)",
	num:94,
	column:9,
	row:10
}, {
	mark:"Am",
	name:"Americium",
	mass:"(243)",
	num:95,
	column:10,
	row:10
}, {
	mark:"Cm",
	name:"Curium",
	mass:"(247)",
	num:96,
	column:11,
	row:10
}, {
	mark:"Bk",
	name:"Berkelium",
	mass:"(247)",
	num:97,
	column:12,
	row:10
}, {
	mark:"Cf",
	name:"Californium",
	mass:"(251)",
	num:98,
	column:13,
	row:10
}, {
	mark:"Es",
	name:"Einstenium",
	mass:"(252)",
	num:99,
	column:14,
	row:10
}, {
	mark:"Fm",
	name:"Fermium",
	mass:"(257)",
	num:100,
	column:15,
	row:10
}, {
	mark:"Md",
	name:"Mendelevium",
	mass:"(258)",
	num:101,
	column:16,
	row:10
}, {
	mark:"No",
	name:"Nobelium",
	mass:"(259)",
	num:102,
	column:17,
	row:10
}, {
	mark:"Lr",
	name:"Lawrencium",
	mass:"(262)",
	num:103,
	column:18,
	row:10
}, {
	mark:"Rf",
	name:"Rutherfordium",
	mass:"(267)",
	num:104,
	column:4,
	row:7
}, {
	mark:"Db",
	name:"Dubnium",
	mass:"(268)",
	num:105,
	column:5,
	row:7
}, {
	mark:"Sg",
	name:"Seaborgium",
	mass:"(271)",
	num:106,
	column:6,
	row:7
}, {
	mark:"Bh",
	name:"Bohrium",
	mass:"(272)",
	num:107,
	column:7,
	row:7
}, {
	mark:"Hs",
	name:"Hassium",
	mass:"(270)",
	num:108,
	column:8,
	row:7
}, {
	mark:"Mt",
	name:"Meitnerium",
	mass:"(276)",
	num:109,
	column:9,
	row:7
}, {
	mark:"Ds",
	name:"Darmstadium",
	mass:"(281)",
	num:110,
	column:10,
	row:7
}, {
	mark:"Rg",
	name:"Roentgenium",
	mass:"(280)",
	num:111,
	column:11,
	row:7
}, {
	mark:"Cn",
	name:"Copernicium",
	mass:"(285)",
	num:112,
	column:12,
	row:7
}, {
	mark:"Uut",
	name:"Unutrium",
	mass:"(284)",
	num:113,
	column:13,
	row:7
}, {
	mark:"Fl",
	name:"Flerovium",
	mass:"(289)",
	num:114,
	column:14,
	row:7
}, {
	mark:"Uup",
	name:"Ununpentium",
	mass:"(288)",
	num:115,
	column:15,
	row:7
}, {
	mark:"Lv",
	name:"Livermorium",
	mass:"(293)",
	num:116,
	column:16,
	row:7
}, {
	mark:"Uus",
	name:"Ununseptium",
	mass:"(294)",
	num:117,
	column:17,
	row:7
}, {
	mark:"Uuo",
	name:"Ununoctium",
	mass:"(294)",
	num:118,
	column:18,
	row:7
}];