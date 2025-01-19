import { CONFIG } from './config'

export const WORDS = [
  "MINUS",
  "HOBIT",
  "BAKSU",
  "KARTA",
  "INONO",
  "SIMPR",
  "RIOHO",
  "POLVI",
  "TATSU",
  "VJERI",
  "ANDRA",
  "HUMBA",
  "DANKE",
  "APAAR",
//  "NAMAI",
  "LAULA",
  "LEISA",
  "POLIS",
  "PULAP",
  "KUNDR",
  "BENGA",
  "HIRAS",
  "SPORE",
  "STUUR",
  "SHTOF",
  "KLEYA",
  "OVARI",
  "VINYA",
  "PASUN",
  "TUMAM",
  "PITKA",
  "MITKO",
  "JAICO",
  "LAPSI",
  "AKOTE",
  "DAVAI",
  "ALDAG",
  "TUHAT",
  "LAGOM",
  "ISHKE",
  "GOMEN",
  "FSHTO",
  "AHMAN",
  "TULLA",
  "KALAP",
  "DANKI",
  "HADZI",
  "KOSKE",
  "SURUK",
  "AVARA",
  "VIOSA",
  "UDACI",
  "OPETA",
  "BRUUK",
  "ASOKO",
  "BRACA",
  "VARGE",
  "GLOSA",
  "KOMSA",
  "MANGA",
  "WARUJ",
  "WONIU",
  "OWARI",
  "OISHI",
  "NILIS",
  "MIETA",
  "VIKTI",
  "VUPSI",
  //  "MANGY",
  "HADJI",
  "SZKOI",
  "ALTID",
  "BRUHK",
  "KUOFI",
  "ABURA",
  "SHIRU",
  "SAADA",
  "SIKNU",
  "HAISA",
  "SLUCA",
  "NILES",
  "ACHOR",
  "KABAN",
  "LESTE",
  "PERPA",
  "TRIST",
  "TOLKA",
  "LIVRE",
  "BOTTO",
  "KONDR",
  "VIERI",
  "BANAN",
  "SODJI",
  "MANJE",
  "RJOHO",
  "ANDER",
  "GRUNN",
  "TRENG",
  "LYEVA",
  "TAIKA",
  "KRAIS",
  "HUINN",
  "EISEL",
  "KEKSO",
  "RUPNE",
  "CIGAU",
  "ZAMKO",
  "KURVI",
  "POSTA",
  "ISTSI",
  "NAMAJ",
  "GNARP",
  "KATAJ",
  "TASTA",
  "GAVAT",
  "KLEJA",
  "HUSKE",
  "NILJE",
  "KATAI",
  "PIMAN",
  "HOFLI",
  "NOITO",
  "KTOBA",
  "KAWAI",
  "LEHTI",
  "LJEVA",
  "STIFT",
  "MELAN",
  "GAMEL",
  "MIRAJ",
  "VENNI",
  "VYERI",
  "DENWA",
  "SILBA",
  "LYKKE",
  "KOINE",
  "ISKAT",
  "KAUPA",
  "LIBRE",
  "NAMAE",
  "KESTE",
  "DASOS",
  "FTEDI",
  "HYAKU",
  "ZENGA",
  "SISKO",
  "TABUN",
  "KUCHI",
  "VAUVA",
  "BJOKI",
  "KAFAN",
  "LAKSU",
  "TORTA",
  "GORLA",
  "KUTSI",
  "PAYEM",
  "NEOKO",
  "KRAJS",
  "TALVI",
  "NIPAN",
  "AKRAT",
  "ATSOR",
  "GAIYA",
  "KINYI",
  "GOVOR",
  "PACUN",
  "HUOMI",
  "GRUUN",
  "ALDAH",
  "DYELA",
  "HOSOI",
  "KYERE",
  "TERSA",
  "NIDEN",
  "WARUI",
  "KLANI",
  "LIMON",
  "MOSZT",
  "VARUI",
  "MJETA",
  "SPUOR",
  "TEMBO",
  "HJAKU",
  "VJOSA",
  "FUGEL",
  "SKOLA",
  "FESTA",
  "FRSTO",
  "AKREP",
  "HASTE",
  "LASKU",
  "KIOMI",
  "MIRAI",
  "ANTAA",
  "PAKSU",
  "SODZI",
  "SVINR",
  "FARZA",
  "LIKKO",
  "SPOOR",
  "TASTA",
  "LAULU",
  "HOTIA",
  "MYUDE",
  "ISKJE",
  "NACHT",
  "UGOKI",
  "SHINU",
  "MANGE",
  "SUGHA",
  "BAGGE",
  "DVERA",
  "SAMUI",
  "ALBRA",
  "GAIJA",
  "UWAKI",
  "SEBJA",
  "KYOMI",
  "CISAI",
  "ALDOK",
  "DEKTI",
  "SLUCA",
  "PITSA",
  "FSJTO",
  "RINGO",
  "RYOHO",
  "RUFNE",
  "TRELO",
  "HONOO",
  "TINKO",
  "SHKOI",
  "OTONA",
  "KJOMI",
  "HENGI",
  "AFTOO",
  "LIBER",
  "FINNA",
  "JESTE",
  "BLINN",
  "SKINE",
  "HATIA",
  "PRAPA",
  "LAPSI",
  "IMPLA",
  "KRAIS",
  "BITTE",
  "SEBYA",
  "SHIRO",
  "VARJE",
  "MIUDE",
  "OHARE",
  "DJONG",
  "KLAAR",
  "ATAMA",
  "MUZIK",
  "GULAG",
  "LJETA",
  "TOSHI",
  "SNANO",
  "KAVAI",
  "BIDES",
  "FRAUT",
  "DJELA",
  "SPADA",
  "KJERE",
  "MJUDE",
  "KORVA",
  "BYOKI",
  "FLIRE",
  "KARGU",
  // "IDJAO"
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}


// Deterministic random if not on shuffle mode
if (CONFIG.shuffle) {
  var seedrandom = require('seedrandom');
  var rng = seedrandom('viossa');

  for (let i = WORDS.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [WORDS[i], WORDS[j]] = [WORDS[j], WORDS[i]];
  }
} else {
  for (let i = WORDS.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [WORDS[i], WORDS[j]] = [WORDS[j], WORDS[i]];
  }
}
