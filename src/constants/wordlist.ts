import { CONFIG } from './config'

export const WORDS = [
  "VARGE",
  "IMPLA",
  "KJOMI",
  "ISKAT",
  "HADZI",
  "MJETA",
  "FESTA",
  "MANGA",
  "SHIRU",
  "SLUCA",
  "KLANI",
  "NAMAJ",
  "RIOHO",
  "TINKO",
  "KATAI",
  "PACUN",
  "SAMUI",
  "RINGO",
  "BANAN",
  "BENGA",
  "TRELO",
  "TRENG",
  "BAGGE",
  "HADJI",
  "ISTSI",
  "SHKOI",
  "SKOLA",
  "OTONA",
  "LJETA",
  "TORTA",
  "FRAUT",
  "DEKTI",
  "KONDR",
  "OHARE",
  "LASKU",
  "LEISA",
  "FUGEL",
  "KABAN",
  "GOVOR",
  "POLIS",
  "RUPNE",
  "PHSTO",
  "VARUI",
  "MYUDE",
  "HASTE",
  "BITTE",
  "LEHTI",
  "KRAIS",
  "KJERE",
  "PITSA",
  "MANGY",
//  "FESTO",
  "LAGOM",
  "NAMAI",
  "LIKKO",
  "OPETA",
  "GNARP",
  "PAKSU",
  "SNANO",
  "SPOOR",
  "GAVAT",
  "NILES",
  "KIOMI",
  "KAWAI",
  "BRUUK",
  "ASOKO",
  "NAMAE",
  "KORVA",
  "OVARI",
  "HUOMI",
  "GRUUN",
  "LAKSU",
  "GOMEN",
  "MINUS",
  "SURUK",
  "AKOTE",
  "INONO",
  "DENWA",
  "SAADA",
  "KUCHI",
  "FSJTO",
  "VARJE",
  "CISAI",
  "GLOSA",
  "FRSTO",
  "MIRAJ",
  "FSTOO",
  "LIVRE",
  "FSHTO",
  "WARUJ",
  "LJEVA",
  "MIETA",
  "PASUN",
  "RYOHO",
  "LYKKE",
  "ALBRA",
  "HYAKU",
  "TRIST",
  "SZKOI",
  "KOSKE",
  "SEBJA",
  "PULAP",
  "NIPAN",
  "KUNDR",
  "TEMBO",
  "HJAKU",
  "ISHKE",
  "GRUNN",
  "TASTA",
  "DANKE",
  "RJOHO",
  "LAPSI",
  "AKRAT",
  "UWAKI",
  "KYOMI",
  "TUMAM",
  "VIKTI",
  "VIOSA",
  "TUHAT",
  "HUSKE",
  "FLIRE",
  "AHMAN",
  "DANKI",
  "SHIRO",
  "MIRAI",
  "SIMPR",
  "TOSHI",
  "AFTOO",
  "HIRAS",
  "MANJE",
  "STIFT",
  "ANDRA",
  "ATAMA",
  "OWARI",
  "LESTE",
  "LIBRE",
  "KUOFI",
  "DAVAI",
  "TABUN",
  "NILIS",
  "HOBIT",
  "OISHI",
  "TULLA",
  "SPUOR",
  "STUUR",
  "KEKSO",
  "ANDER",
  "ANTAA",
  "MJUDE",
  "MANGE",
  "DJONG",
  "SPORE",
  "PRAPA",
  "TATSU",
  "VJOSA",
  "HAISA",
  "BAKSU",
  "AVARA",
  "BRUHK",
  "BRUUK",
  "DVERA",
  "WARUI",
  "SHINU",
  "PITKA",
  "VAUVA",
  "NILJE",
  "ALTID",
  "MELAN",
  "JAICO",
  "JESTE",
  "KAUPA",
  "CIGAU",
  "PERPA",
  "KTOBA",
  "APAAR",
  "LIBER",
  "ISKJE",
  "MUZIK",
  "TOLKA",
  "EISEL",
  "SKINE",
  "VENNI",
  "KARGU",
  "KINYI",
  "KURVI",
  "AKREP",
  "LAPSI",
  "BIDES",
  "NIDEN",
  "KARTA",
  "TALVI",
  "ZAMKO",
  "MINUS",
  "KLAAR",
  "RUFNE",
  "ALDOK",
  "ALDAH",
  "ALDAG",
  "BOTTO",
  "VIERI",
  "VYERI",
  "LIMON",
  "SLUCA",
  "POSTA",
  "TASTA",
  "HOFLI",
  "BJOKI",
  "BYOKI",
  "UGOKI",
  "GAMEL",
  "GAIJA",
  "GAIYA",
  "LAULU",
  "LAULA",
  "KOMSA",
  "KALAP",
  "KAFAN",
  "FINNA",
  "NEOKO",
  "TAIKA",
  "KYERE",
  "SUGHA",
  "HENGI",
  "HUMBA",
  "ATSOR",
  "SILBA",
  "SPADA",
  "MIUDE",
  "VUPSI",
  "KRAIS",
  "KRAJS",
  "KATAJ",
  "SEBYA",
  "SODJI",
  "SODZI",
  "MITKO",
  "ZENGA",
  "PIMAN",
  "NACHT",
  "HOSOI",
  "ACHOR",
  "KAVAI",
  "NOITO",
  "KUTSI",
  "KOINE",
  "KLEYA",
  "KLEJA",
  "DASOS",
  "UDACI",
  "KESTE",
  "HUINN",
  "SHTOF",
  "BLINN",
  "LYEVA",
  "GORLA",
  "SISKO",
  "VJERI",
  "BRACA",
  "VINYA",
  "DYELA",
  "DJELA",
  "ABURA",
  "FTEDI",
  "GULAG",
  "HOTIA",
  "HATIA",
  "SVINR",
  "WONIU",
  "FARZA",
  "MOSZT",
  "HONOO"
  // "IDJAO"
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
