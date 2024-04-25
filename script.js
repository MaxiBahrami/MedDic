document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    englishToHazaragi: {
                                                    // A
      "Abdominal pain": {
        translation: "کَوره دَرد",
        pronunciation: "kʌwrʌ dʌrd",
        sound: "./audio/Voice 001.m4a",
      },
      "Abdominal Pain With Diarrhea": {
        translation: "پِیچ دِیدُو",
        pronunciation: "piʧ dido",
        sound: "./audio/Voice 002.m4a",
      },
      Acne: {
        translation: "چقچی",
        pronunciation: "ʧʌqʧi",
        sound: "./audio/Voice 003.m4a",
      },
      "Active labor": {
        translation: "چاردرد",
        pronunciation: "ʧar dʌrd",
        sound: "./audio/Voice 004.m4a",
      },
      Allergen: {
        translation: "سرخ بوده",
        pronunciation: "sorχ budʌ",
        sound: "./audio/Voice 005.m4a",
      },
      "Allergic conjunctivitis": {
        translation: "نزله",
        pronunciation: "nʌzlʌ",
        sound: "./audio/Voice 006.m4a",
      },
      Amenorrhea: {
        translation: "خشک",
        pronunciation: "χuʃk",
        sound: "./audio/Voice 007.m4a",
      },
      "Amniotic fluid": {
        translation: "آو نیلغه",
        pronunciation: "aw e nilʁʌ",
        sound: "./audio/Voice 008.m4a",
      },
      "Amniotic sac rapture": {
        translation: "قوعنگ پاره شدو",
        pronunciation: "quʌnʌk parʌ ʃudʌn",
        sound: "./audio/Voice 009.m4a",
      },
      Anemia: {
        translation: "کم خو",
        pronunciation: "kʌm χu",
        sound: "./audio/Voice 010.m4a",
      },
      Anesthesia: {
        translation: "کرختی",
        pronunciation: "kʌrʌχti",
        sound: "./audio/Voice 011.m4a",
      },
      Ankle: {
        translation: "شیغی پای",
        pronunciation: "ʃiʁʌj e paj",
        sound: "./audio/Voice 012.m4a",
      },

                                              // B
      Bladder: {
        translation: "شاش دان",
        pronunciation: "ʃʌʃ dan",
        sound: "./audio/Voice 014.m4a",
      },
      "Bleeding during pregnancy": {
        translation: "گل وازشدو",
        pronunciation: "gul vaz ʃudo",
        sound: "./audio/Voice 015.m4a",
      },
      Blister: {
        translation: "اَولِیله",
        pronunciation: "ʌwlilʌ",
        sound: "./audio/Voice 016.m4a",
      },
      Bloating: {
        translation: "چمبه",
        pronunciation: "ʧʌmbʌ",
        sound: "./audio/Voice 018.m4a",
      },
      "Blurred vision": {
        translation: "چرچرشدو",
        pronunciation: "ʧʌrʧʌr ʃudo",
        sound: "./audio/Voice 019.m4a",
      },
      "Body Ache": {
        translation: "جان ‌دَردِی",
        pronunciation: "ʤan dʌrdi",
        sound: "./audio/Voice 020.m4a",
      },




      "Bone dislocation (in hand or foot)": {
        translation: "بُوجُلَک‌ شُدُو",
        pronunciation: "buʤolʌk ʃudo",
      },
      "Bow legs": {
        translation: "قَیَک",
        pronunciation: "qʌjʌk",
      },
      "Breast cancer": {
        translation: "سرطان پیستو",
        pronunciation: "sʌrʌtan pisto",
      },
      Bruise: {
        translation: "کوفتگی",
        pronunciation: "kuftʌgi",
      },
      "Cleft lip": {
        translation: "قوشی",
        pronunciation: "quʃi",
      },
      "Cleft palate": {
        translation: "کام چک",
        pronunciation: "kam ʧak",
      },
      Cold: {
        definitions: [
          {
            translation: "تَماغُو",
            pronunciation: "tʌmaʁu",
            partOfSpeech: "adjective",
          },
          {
            translation: "خُونُوکِی",
            pronunciation: "Χunoki",
            partOfSpeech: "noun",
          },
          {
            translation: "رِیزِش",
            pronunciation: "rizeʃ",
            partOfSpeech: "noun",
          },
          {
            translation: "زُکام",
            pronunciation: "zokam",
            partOfSpeech: "noun",
          },
          {
            translation: "سَماوِی",
            pronunciation: "sʌmavi",
            partOfSpeech: "adjective",
          },
          {
            translation: "سَمایِی",
            pronunciation: "sʌmaji",
            partOfSpeech: "adjective",
          },
        ],
      },
      //... [your existing dictionary entries]

      "Cold and chill": {
        translation: "نزلۀ سرد",
        pronunciation: "nizle sʌrd",
      },
      "Cold sore": {
        translation: "تَوخال",
        pronunciation: "tʌw χal",
      },
      Colic: {
        translation: "قولینج شکم",
        pronunciation: "ʃikʌm qulinʤ",
      },
      Colostrum: {
        definitions: [
          {
            translation: "پیله",
            pronunciation: "pilʌ",
          },
          {
            translation: "دیلمه",
            pronunciation: "dilmʌ",
          },
        ],
      },
      Chock: {
        translation: "قفه شدو",
        pronunciation: "qʌfv ʃudo",
      },
      Cyst: {
        translation: "آوله",
        pronunciation: "awlʌ",
      },
      "Dark curtain in vision": {
        translation: "سیاه و سووز شدو",
        pronunciation: "sijah o sʌwuz ʃudo",
      },
      Depo: {
        translation: "پیچکاری جلوگیری",
        pronunciation: "peʧ kari ʤʌlʌwgiri",
      },
      "Diaper rash": {
        definitions: [
          {
            translation: "چقیدگی",
            pronunciation: "ʧʌqidʌgi",
          },
          {
            translation: "عرق سوختگی",
            pronunciation: "ʌraq suχtʌgi",
          },
        ],
      },
      Diarrhea: {
        definitions: [
          {
            translation: "پِیچ",
            pronunciation: "peʧ",
          },
          {
            translation: "دَرُو رَو",
            pronunciation: "daru rʌw",
          },
          {
            translation: "رِیخ‌رَو",
            pronunciation: "riχ rʌw",
          },
          {
            translation: "شکم‌رَو",
            pronunciation: "ʃikʌm rʌw",
          },
          {
            translation: "قُورَگ",
            pronunciation: "qurʌg",
          },
        ],
      },
      //... [your existing dictionary entries]

      "Down Syndrome": {
        translation: "کم هوش",
        pronunciation: "kʌm huʃ",
      },
      Dull: {
        translation: "سوله",
        pronunciation: "sulʌ",
      },
      "Ear Drainage": {
        translation: "چرک کشی گوش",
        pronunciation: "ʧerk kʌʃi guʃ",
      },
      "Fatal Macrosomia": {
        translation: "نیلغه پر قوت",
        pronunciation: "nilʁʌ por qovʌt",
      },
      Fever: {
        definitions: [
          {
            translation: "تاو",
            pronunciation: "Taw",
          },
          {
            translation: "تِیماو",
            pronunciation: "timʌw",
          },
        ],
      },
      Fetus: {
        translation: "نلغه",
        pronunciation: "nilʁʌ",
      },
      Fibroid: {
        translation: "دانه سلیم",
        pronunciation: "dane sʌlim",
      },
      "Food aversion": {
        translation: "سوچی کدو",
        pronunciation: "soʧi kʌdu",
      },
      "Food Restriction": {
        translation: "پرهیز",
        pronunciation: "pʌriz",
      },
      Fracture: {
        translation: "میده شدگی",
        pronunciation: "mʌjdʌʃodʌgi",
      },
      "Full-term (FT)": {
        translation: "پخته",
        pronunciation: "poχtʌ",
      },
      "Genetic abnormality": {
        translation: "نیکلگی عروقی",
        pronunciation: "niklʌgi oruqi",
      },
      "Genital warts (genital herpes)": {
        translation: "آوله ی شرمگاهی",
        pronunciation: "ʌwlʌj e ʃʌrmgahi",
      },
      "Gestational diabetes": {
        translation: "مرض قند دُجونی",
        pronunciation: "mʌrʌz e qʌnd e doʤuni",
      },
      "Gestational high blood pressure": {
        translation: "فشار بلند دوجونی",
        pronunciation: "fiʃɑɾ e bolʌnd e doʤuni",
      },
      Goiter: {
        definitions: [
          {
            translation: "جوغور",
            pronunciation: "ʤuʁur",
          },
          {
            translation: "جولونگ",
            pronunciation: "ʤulung",
          },
        ],
      },
      //... [your existing dictionary entries]

      "Inflammation of ulcer": {
        translation: "گَزَگ",
        pronunciation: "gʌzʌg",
      },
      "Inguinal hernia": {
        translation: "چُوره",
        pronunciation: "ʧurʌ",
      },
      Injection: {
        translation: "پیچکاری",
        pronunciation: "peʧkari",
      },
      "Inside vagina": {
        translation: "مینه ی جان",
        pronunciation: "menʌj e ʤan",
      },
      Insomnia: {
        translation: "کم خاوی",
        pronunciation: "kʌm χawi",
      },
      Insulin: {
        translation: "پیچکاری قند",
        pronunciation: "peʧkari qʌnd",
      },
      Itchiness: {
        translation: "خرشت",
        pronunciation: "χʌɾiʃt",
      },
      IUD: {
        translation: "سامان",
        pronunciation: "saman",
      },
      Jaundice: {
        translation: "زَردِی",
        pronunciation: "zʌrdi",
      },
      "Kidney pain": {
        translation: "خالی گرده درد",
        pronunciation: "χali gurdʌ dʌrd",
      },
      "Kidney stones": {
        translation: "سنگ گرده",
        pronunciation: "sʌng e gordʌ",
      },
      Labia: {
        translation: "لبای زنانه گی",
        pronunciation: "lʌbaj e zʌnanagi",
      },
      "Labia majora": {
        translation: "لبای کته درگه جان",
        pronunciation: "lʌbaj e kʌtʌ dʌrgi ʤan",
      },
      Labor: {
        definitions: [
          {
            translation: "دَردِ زا",
            pronunciation: "dʌrd e za",
          },
          {
            translation: "پای گرنگ کدو",
            pronunciation: "paj gʌrnʌg kʌdo",
          },
        ],
      },
      "Large for gestational age (LGA)": {
        translation: "نیلغه ایربی",
        pronunciation: "nilʁe irbi",
      },
      Lesion: {
        translation: "دلنگ",
        pronunciation: "dʌlʌng",
      },
      Libido: {
        translation: "مستی",
        pronunciation: "mʌsti",
      },
      Lice: {
        definitions: [
          {
            translation: "اشپیش",
            pronunciation: "iʃpiʃ",
          },
          {
            translation: "ریشکک",
            pronunciation: "riʃkʌk",
          },
          {
            translation: "گردگ",
            pronunciation: "gʌrdʌg",
          },
        ],
      },
      "Light head": {
        definitions: [
          {
            translation: "زُوف",
            pronunciation: "zuf",
          },
          {
            translation: "گنگاوش",
            pronunciation: "gʌngavoʃ",
          },
          {
            translation: "بی حال",
            pronunciation: "bihal",
          },
        ],
      },
      "Low birth weight": {
        definitions: [
          {
            translation: "کم تول",
            pronunciation: "kʌm tol",
          },
          {
            translation: "نیلغه ناتو",
            pronunciation: "nilʁe nato",
          },
          {
            translation: "نیلغه کم وزن",
            pronunciation: "nilʁe kʌm vʌzn",
          },
        ],
      },
      //... [your existing dictionary entries]

      "Itchy blister (on children’s skin)": {
        translation: "آتِیشَک‌دَنَه",
        pronunciation: "atiʃʌk danʌ",
      },
      "Labor pain": {
        translation: "دَردِ زا",
        pronunciation: "dʌrd e za",
      },
      "Low mood": {
        translation: "دم ده سری",
        pronunciation: "dʌm dʌ sʌri",
      },
      "Lower belly pain": {
        translation: "درد پیش قچیق",
        pronunciation: "dʌrd e peʃ qʌʧiq",
      },
      Malnourished: {
        definitions: [
          {
            translation: "سوء تغذی",
            pronunciation: "suje tʌʁʌzi",
          },
          {
            translation: "شِیر سُوخته",
            pronunciation: "ʃir suχtʌ",
          },
          {
            translation: "کم واک",
            pronunciation: "kʌm wak",
          },
        ],
      },
      Mass: {
        translation: "بور شدگی",
        pronunciation: "bur ʃudʌgi",
      },
      Mastitis: {
        definitions: [
          {
            translation: "بیسمیل",
            pronunciation: "bismel",
          },
          // Note: The second translation "بیسمیل" is identical to the first.
          // Including it only if it has a different meaning or use.
        ],
      },
      Measles: {
        definitions: [
          {
            translation: "سرخکو",
            pronunciation: "sorΧvku",
          },
          {
            translation: "دانه سُرخ‌کُو",
            pronunciation: "dane sorΧvku",
          },
          {
            translation: "دانه گل",
            pronunciation: "dane gol",
          },
        ],
      },
      Meconium: {
        translation: "چاره",
        pronunciation: "ʧarʌ",
      },
      Medicine: {
        definitions: [
          {
            translation: "دوا",
            pronunciation: "dʌva",
          },
          {
            translation: "مرهم",
            pronunciation: "mʌrhʌm",
          },
          {
            translation: "مَلَّم",
            pronunciation: "mʌlʌm",
          },
        ],
      },
      Melasma: {
        translation: "لکه حاملگی",
        pronunciation: "lʌke hamelegi",
      },
      Menarche: {
        translation: "نو بالغ",
        pronunciation: "nʌw baleʁ",
      },
      Menopause: {
        translation: "کمر خشکی",
        pronunciation: "kʌmʌr χoʃki",
      },
      "Menstrual period": {
        translation: "بی نمازی",
        pronunciation: "benʌmazi",
      },
      //... [your existing dictionary entries]

      "Menstrual period": {
        definitions: [
          {
            translation: "قم ناشته",
            pronunciation: "qʌm naʃtʌ",
          },
          {
            translation: "کالا بد شدو",
            pronunciation: "kala bʌd ʃudo",
          },
          {
            translation: "عادت شدو",
            pronunciation: "adʌt ʃudo",
          },
          {
            translation: "کمر آمدو",
            pronunciation: "kʌmʌr amʌdo",
          },
          {
            translation: "کمروازشدو",
            pronunciation: "kʌmʌr vaz ʃudo",
          },
        ],
      },
      "Mentally retarded": {
        translation: "آلُوخ",
        pronunciation: "aloχ",
      },
      Milia: {
        translation: "ایپغو",
        pronunciation: "ipʁu",
      },
      Miscarriage: {
        definitions: [
          {
            translation: "سوا",
            pronunciation: "siva",
          },
          {
            translation: "سوا کدو",
            pronunciation: "siva kʌdu",
          },
          {
            translation: "ضایع کدو",
            pronunciation: "zaje kʌdo",
          },
        ],
      },
      "Missing miscarriage": {
        translation: "نلغه ده کوره خشک شدو",
        pronunciation: "nelʁa da ko͞orʌ χōʃk ʃudo",
      },
      "Missing period": {
        translation: "خون قاق",
        pronunciation: "Χun qaq",
      },
      Mohalim: {
        translation: "سَلمان",
        pronunciation: "sʌlman",
      },
      Molding: {
        translation: "جیله چسبیده",
        pronunciation: "ʤile ʧʌsbidʌ",
      },
      "Mongolian spots": {
        translation: "نشانی",
        pronunciation: "niʃani",
      },
      "Mother of an infant": {
        translation: "نلغهتو",
        pronunciation: "nilʁʌtu",
      },
      "Muffled ear": {
        translation: "کیپ شدن گوش",
        pronunciation: "kip ʃudʌn e guʃ",
      },
      Mumps: {
        translation: "بیخی گوشی",
        pronunciation: "biχi guʃ",
      },
      "Muscle spasm": {
        translation: "ککرک ماندو",
        pronunciation: "kʌkrʌk mando",
      },
      "Muscle spasticity": {
        translation: "رگ به رگ شدو",
        pronunciation: "rʌg bʌ rʌg ʃudo",
      },
      //... [your existing dictionary entries]

      "Nail biting": {
        translation: "ناخن خیدو",
        pronunciation: "naχon χʌjdu",
      },
      "Nasal Congestion": {
        translation: "بینی کور",
        pronunciation: "bini kur",
      },
      Nausea: {
        translation: "وُغ زدُو",
        pronunciation: "voʁ zʌdo",
      },
      Neonatal: {
        translation: "نیلغه گی",
        pronunciation: "nilʁʌgi",
      },
      Neonate: {
        definitions: [
          {
            translation: "چولَی",
            pronunciation: "ʧulʌj",
          },
          {
            translation: "چوقی",
            pronunciation: "ʧuqi",
          },
        ],
      },
      "New mother": {
        translation: "زاچه",
        pronunciation: "zɑʧʌ",
      },
      Nipple: {
        definitions: [
          {
            translation: "سرلولو",
            pronunciation: "sʌr lulu",
          },
          {
            translation: "لولوک",
            pronunciation: "luluk",
          },
        ],
      },
      "No pap pregnancy": {
        translation: "حاملگی شیر به شیرگ",
        pronunciation: "hamelegi ʃir bʌ ʃirʌg",
      },
      "Normal delivery": {
        translation: "ولادت از دامن",
        pronunciation: "veladʌt ʌz damʌn",
      },
      Osteoporosis: {
        translation: "استخان پودَه گی",
        pronunciation: "ostoχan pudʌgi",
      },
      Otitis: {
        translation: "گوش درد",
        pronunciation: "guʃ dʌrd",
      },
      "Pain (having pain)": {
        translation: "کَیدُو",
        pronunciation: "kʌjdo",
      },
      "Pain in breasts": {
        translation: "پیستو درد",
        pronunciation: "pistu dʌrd",
      },
      "Painful urination": {
        translation: "سوزک",
        pronunciation: "suzʌk",
      },
      "Pelvic exam": {
        translation: "ماینه دامن",
        pronunciation: "majene damʌn",
      },
      Pertussis: {
        translation: "سیا سُلفه",
        pronunciation: "sia solfʌ",
      },
      Phlegm: {
        translation: "بلغم",
        pronunciation: "bʌlʁʌm",
      },
      "Pinworm infection": {
        translation: "قُولخَک",
        pronunciation: "qulχʌk",
      },
      Placenta: {
        definitions: [
          {
            translation: "جوره",
            pronunciation: "ʤoɾʌ",
          },
          {
            translation: "همراه طفل",
            pronunciation: "hʌmrah e tefl",
          },
          {
            translation: "یار",
            pronunciation: "jar",
          },
        ],
      },
      Pneumonia: {
        definitions: [
          {
            translation: "بَغَلَک",
            pronunciation: "bʌʁʌlʌk",
          },
          {
            translation: "بَغَل‌قَپچِی",
            pronunciation: "bʌʁʌl qʌjʧi",
          },
          {
            translation: "بَغَل قَدقُو",
            pronunciation: "bʌʁʌ qʌdqu",
          },
          {
            translation: "چِجِی‌گِیر",
            pronunciation: "ʧeʤi ger",
          },
          {
            translation: "سِینگِیرِی",
            pronunciation: "sejngirej",
          },
        ],
      },
      Posterior: {
        translation: "تخته سیر",
        pronunciation: "tʌχte sir",
      },
      "Postnasal drip": {
        translation: "نِزله",
        pronunciation: "nʌzlʌ",
      },
      Postpartum: {
        translation: "زاچهگی",
        pronunciation: "zɑʧʌgi",
      },
      "Postpartum depression": {
        translation: "سرباد",
        pronunciation: "sʌrbad",
      },
      "Postpartum hemorrhage": {
        translation: "خون کنده شودوی زاچه گی",
        pronunciation: "Χun kʌndʌ ʃudoje zaʧʌgi",
      },
      "Pre-eclampsia": {
        translation: "ترس گرفتو",
        pronunciation: "tars giɾifto",
      },
      Pregnant: {
        definitions: [
          {
            translation: "حامله دار",
            pronunciation: "ɑmilʌdɑɾ",
          },
          {
            translation: "شکم دار",
            pronunciation: "ʃekʌm dar",
          },
        ],
      },
      "Pregnancy without having period": {
        translation: "خوشککی حامله شدو",
        pronunciation: "χuʃkʌki hamelʌ ʃudo",
      },
      "Preterm birth": {
        translation: "ولادت نارسیده",
        pronunciation: "veladʌt e narʌsidʌ",
      },
      "Preterm labor": {
        translation: "درد پیش از وقت",
        pronunciation: "dʌrd e piʃ ʌz vʌqt",
      },
      Puberty: {
        definitions: [
          {
            translation: "وارنا شدو",
            pronunciation: "wuɾnɑ ʃudo",
          },
          {
            translation: "مجرد شدو",
            pronunciation: "mujʌrʌd ʃudo",
          },
        ],
      },
      "Post-partum belly pain": {
        translation: "پچک دردی",
        pronunciation: "piʧʌk dʌrdi",
      },
      "Puerperal fever": {
        translation: "زاچهباد",
        pronunciation: "zɑʧʌbɑd",
      },
      Pus: {
        translation: "ریم",
        pronunciation: "rim",
      },
      Pustules: {
        translation: "شِیرِینچه",
        pronunciation: "ʃirinʧʌ",
      },
      //... [your existing dictionary entries]

      Rash: {
        translation: "دانه شدو",
        pronunciation: "danʌ ʃudo",
      },
      "Room in spinning": {
        translation: "سر چرخک",
        pronunciation: "sʌr ʧʌrχʌk",
      },
      Rubella: {
        translation: "سرخکانچه",
        pronunciation: "surχʌkanʧe",
      },
      "Runny nose": {
        translation: "آو بِنگَگ",
        pronunciation: "aw benigʌk",
      },
      Seizure: {
        translation: "سایه گرفتو",
        pronunciation: "sɑjʌ girifo",
      },
      "Sever fatigue": {
        translation: "کم جان",
        pronunciation: "kʌm ʤan",
      },
      "Sex hurt": {
        translation: "درد وقت پالو خاو",
        pronunciation: "dʌrd e vaqt e χɑw palu",
      },
      "Sexual intercourse": {
        definitions: [
          {
            translation: "پالو خاوی",
            pronunciation: "palu χɑwi",
          },
          {
            translation: "یک جای شدو",
            pronunciation: "jʌk ʤaj ʃudo",
          },
        ],
      },
      "Sexual Intercourse (between husband and wife)": {
        translation: "خانه داری کدو",
        pronunciation: "χɑnʌdʌri kʌdu",
      },
      Shivering: {
        definitions: [
          {
            translation: "دَک‌ خُوردُو",
            pronunciation: "dʌk χurdo",
          },
          {
            translation: "دَغدِنَه کدو",
            pronunciation: "dʌʁdinʌ kʌdu",
          },
        ],
      },
      Sick: {
        definitions: [
          {
            translation: "ناجُور",
            pronunciation: "naʤor",
          },
          {
            translation: "ناخُوش",
            pronunciation: "naχoʃ",
          },
        ],
      },
      Sickness: {
        translation: "ناخُوشِی",
        pronunciation: "naχoʃi",
      },
      "Sleep apnea": {
        translation: "سیاهی پیچ کدو",
        pronunciation: "sijahi piʧ kʌdu",
      },
      "Small Joint": {
        translation: "بوجولک",
        pronunciation: "buʤulʌk",
      },
      "Small size pelvic": {
        translation: "کاسی ریزه",
        pronunciation: "kasʌj rizʌ",
      },
      "Soles Of The Feet": {
        translation: "تیی پای",
        pronunciation: "tʌj e paj",
      },
      "Spasm of chest muscles and nerves": {
        translation: "بَغَلَک",
        pronunciation: "bʌʁʌlʌk",
      },
      Stillbirth: {
        translation: "نیلغه مرده زیدو",
        pronunciation: "nilʁʌ murdʌ zʌjdu",
      },
      "Stitch, Suture": {
        translation: "کوک",
        pronunciation: "kuk",
      },
      "Stomach ache": {
        translation: "دِل‌دَرد",
        pronunciation: "dil dʌrd",
      },
      Strain: {
        translation: "سینگیر کش",
        pronunciation: "singir kʌʃ",
      },
      "Stretch mark": {
        translation: "چک چک شدو",
        pronunciation: "ʧʌk ʧʌk ʃudo",
      },
      Sunburn: {
        translation: "افتو بورده گی",
        pronunciation: "ʌftʌw burdʌgi",
      },
      "Swollen abdomen": {
        translation: "چَمبَه",
        pronunciation: "ʧʌmbʌ",
      },
      "Swollen lymph nods": {
        translation: "بِیلچِرغه",
        pronunciation: "bejl ʧerʁʌ",
      },
      Symptom: {
        translation: "نشانی",
        pronunciation: "niʃani",
      },
      Syringe: {
        translation: "بمبه پیچکاری",
        pronunciation: "bʌmbej e peʧkari",
      },
      Tenderness: {
        translation: "جدکه",
        pronunciation: "ʤʌdkʌ",
      },
      Tetanus: {
        translation: "گردو شخک",
        pronunciation: "gʌrdu ʃʌχʌk",
      },
      "Throat pain": {
        translation: "کَتُوک دَردِی",
        pronunciation: "kʌtuk dʌrdi",
      },
      Thrush: {
        translation: "بار",
        pronunciation: "bar",
      },
      Tingling: {
        translation: "سوزن سوزن شدو",
        pronunciation: "suzʌn suzʌn ʃudo",
      },
      Tonsillectomy: {
        translation: "عمل کتوگ",
        pronunciation: "ʌmʌle kʌtug",
      },
      Tonsillitis: {
        translation: "امس کتوگ",
        pronunciation: "ʌmʌs e kʌtug",
      },
      Tuberculosis: {
        translation: "تبک",
        pronunciation: "tʌbʌk",
      },
      //... [your existing dictionary entries]

      Tuberculosis: {
        definitions: [
          {
            translation: "رنجِ‌بَرِیک",
            pronunciation: "rʌnʤ bʌrik",
          },
          {
            translation: "سیل",
            pronunciation: "sil",
          },
          {
            translation: "مرض تبک",
            pronunciation: "mʌrʌz e tʌbʌk",
          },
        ],
      },
      "Typhoid fever": {
        definitions: [
          {
            translation: "دَرد سرلغک",
            pronunciation: "dʌrd e sʌr lʌʁʌk",
          },
          {
            translation: "مُورِیقه",
            pronunciation: "muriqʌ",
          },
        ],
      },
      Ultrasound: {
        translation: "ماینه تلوزونی",
        pronunciation: "majne telvizuni",
      },
      "Umbilical cord": {
        translation: "تیر ناف",
        pronunciation: "tir e naf",
      },
      "Umbilical hernia": {
        translation: "ناف بورشودگی",
        pronunciation: "naf bur ʃudʌgi",
      },
      "Urinary retention": {
        translation: "گیمیز بندک",
        pronunciation: "gimiz bʌndʌk",
      },
      Urine: {
        definitions: [
          {
            translation: "جواب چای",
            pronunciation: "ʤab ʧaj",
          },
          {
            translation: "گیمیز",
            pronunciation: "gimiz",
          },
        ],
      },
      "Urine incontinence": {
        translation: "سیجونگ",
        pronunciation: "siʤung",
      },
      Uterine: {
        translation: "باچه دو",
        pronunciation: "baʧʌdo",
      },
      "Uterine tumor": {
        translation: "دانه بچه دان",
        pronunciation: "dane bʌʧʌdan",
      },
      "Uterus prolapse": {
        translation: "باچه دان بور شودو",
        pronunciation: "baʧʌ dan bur ʃudo",
      },
      Vagina: {
        translation: "درگه جان",
        pronunciation: "dʌrge ʤan",
      },
      "Vaginal discharge": {
        definitions: [
          {
            translation: "ریم باچه دو",
            pronunciation: "rim e baʧʌdo",
          },
          {
            translation: "ریم راه جان",
            pronunciation: "rim e rah e ʤan",
          },
          {
            translation: "زردی آمدو",
            pronunciation: "zardi amʌdo",
          },
        ],
      },
      "Vaginal itchiness": {
        translation: "خرشت پیش آوه",
        pronunciation: "χʌɾiʃt e peʃ ʌwʌ",
      },
      "Vaginal yeast infection": {
        translation: "سوزک",
        pronunciation: "suzʌk",
      },
      Vaginitis: {
        translation: "چرک شرمگاه",
        pronunciation: "ʧerke ʃʌrmgah",
      },
      Vertebrae: {
        translation: "بند کمر",
        pronunciation: "bʌnd i kʌmvr",
      },
      Vomit: {
        definitions: [
          {
            translation: "قَی",
            pronunciation: "qʌj",
          },
          {
            translation: "وُغلَه",
            pronunciation: "voʁlʌ",
          },
          {
            translation: "وُلقِیله",
            pronunciation: "volqilʌ",
          },
        ],
      },
      Vulva: {
        definitions: [
          {
            translation: "زنانگی",
            pronunciation: "zʌnanʌgi",
          },
          {
            translation: "شرمگاه",
            pronunciation: "ʃʌrmgah",
          },
        ],
      },
      Wart: {
        translation: "سول",
        pronunciation: "sol",
      },
      Wheezing: {
        definitions: [
          {
            translation: "خرخر کدو",
            pronunciation: "χor χor kʌdo",
          },
          {
            translation: "خیش خیش چجی",
            pronunciation: "χiʃ χiʃ ʧeʤi",
          },
        ],
      },
    },

    hazaragiToEnglish: {
      "آتِیشَک‌دَنَه": {
        "translation": "Itchy blister",
        "pronunciation": "atiʃʌk danʌ",
        "definition": "دمل عفونی و خارش‌دار که بر بدن و سر و صورت کودکان برآید"
      },
      "استخان پودَه گی": {
        "translation": "Osteoporosis",
        "pronunciation": "ostoχan pudʌgi",
        "definition": "پوکی استخوان"
      },
      "اشپیش": {
        "translation": "Lice",
        "pronunciation": "iʃpiʃ",
        "definition": "شپش"
      },
      "افتو بورده گی": {
        "translation": "Sunburn",
        "pronunciation": "ʌftʌw burdʌgi",
        "definition": "آفتاب سوختگی"
      },
      "آل برده گی": {
        "translation": "Faint after child birth",
        "pronunciation": "al bordʌgi",
        "definition": "بی هوشی پس از ولادت"
      },
      "آلجَس‌بُرده": {
        "translation": "Sever sickness",
        "pronunciation": "ʌlʤʌs bordʌ",
        "definition": "نوعی بیماری در کودکان که قابل درمان نبوده است"
      },
      "آلُوخ": {
        "translation": "Mentally retarded",
        "pronunciation": "aloχ",
        "definition": "عقب مانده ذهنی"
      },
      "امَس": {
        "translation": "Edema",
        "pronunciation": "ʌmʌs",
        "definition": "آماس"
      },
      "امس کتوگ": {
        "translation": "Tonsillitis",
        "pronunciation": "ʌmʌs e kʌtug",
        "definition": "التهاب تانسل"
      },
      "آو بِنگَگ": {
        "translation": "Runny nose",
        "pronunciation": "aw benigʌk",
        "definition": "ریزش آب بینی"
      },
      "آو نیلغه": {
        "translation": "Amniotic fluid",
        "pronunciation": "aw e nilʁʌ",
        "definition": "کیسه آب"
      },
      "آواز افتدگی": {
        "translation": "Croup",
        "pronunciation": "avaz oftedgi",
        "definition": "خروسک شدن صدا"
      },
      "اوقره دردی": {
        "translation": "Eye pain",
        "pronunciation": "uqrʌ dʌrdi",
        "definition": "چشم درد"
      },
      "آوله": {
        "translation": "Cyst",
        "pronunciation": "awlʌ",
        "definition": "کیست"
      },
      "اوله ی شرمگاهی": {
        "translation": "Genital warts, genital herpes",
        "pronunciation": "ʌwlʌj e ʃʌrmgahi",
        "definition": "زگیل شرمگاهی، هرپس شرمگاهی"
      },
      "اولیله": {
        "translation": "Blister",
        "pronunciation": "ʌwlilʌ",
        "definition": "آوله"
      },
      "ایپغو": {
        "translation": "Milia",
        "pronunciation": "ipʁu",
        "definition": "دانه خرد سفید سر بینی نوزاد"
      },
      "ایروم": {
        "translation": "Gums",
        "pronunciation": "irom",
        "definition": "بیره"
      },
      "باچه دان بور شودو": {
        "translation": "Uterus prolapse",
        "pronunciation": "baʧʌ dan bur ʃudo",
        "definition": "پرولپس رحم"
      },
      "باچه دو": {
        "translation": "Uterine",
        "pronunciation": "baʧʌdo",
        "definition": "رحم"
      },
      "بار": {
        "translation": "Thrush",
        "pronunciation": "bar",
        "definition": "آفت دهان"
      },
      "بزکان": {
        "translation": "Chickenpox",
        "pronunciation": "bozʌkan",
        "definition": "چیچک"
      },
      "بسمیل": {
        "translation": "Breast pain in breastfeeding women",
        "pronunciation": "besmil",
        "definition": "سینه دردی زنان شیرده"
      },
      "بغل قدقو": {
        "translation": "Pneumonia",
        "pronunciation": "bʌʁʌ qʌdqu",
        "definition": "سینه‌بغل"
      },
      "بغل‌قپچی": {
        "translation": "Pneumonia",
        "pronunciation": "bʌʁʌl qʌjʧi",
        "definition": "سینه‌بغل"
      },
      "بغلک": {
        "translation": "Pneumonia",
        "pronunciation": "bʌʁʌlʌk",
        "definition": "سینه‌بغل"
      },
      "بغلک": {
        "translation": "Spasm of chest muscles and nerves",
        "pronunciation": "bʌʁʌlʌk",
        "definition": "بغل باز شدن"
      },
      "بغلواز رفتو": {
        "translation": "Chest pain due to unsupported moving of the infant’s body",
        "pronunciation": "bʌʁʌl vaz rʌfto",
        "definition": "باز رفتن بغل نوزاد"
      },
      "بلغم": {
        "translation": "Phlegm, sputum, expectoration",
        "pronunciation": "bʌlʁʌm",
        "definition": "خلط، ماده آبکی غلیظ در جدار بینی و گلو"
      },
      "بمبه پیچکاری": {
        "translation": "Syringe",
        "pronunciation": "bʌmbej e peʧkari",
        "definition": "سیرینج"
      },
      "بند کمر": {
        "translation": "Vertebrae",
        "pronunciation": "bʌnd i kʌmvr",
        "definition": "مهره کمر"
      },
      "بوجلک شدو": {
        "translation": "Bone dislocation in hand or foot",
        "pronunciation": "buʤolʌk ʃudo",
        "definition": "درآمدن استخوان مفصل دست و پا"
      },
      "بوجولک": {
        "translation": "Small Joint",
        "pronunciation": "buʤulʌk",
        "definition": "مفصل خرد"
      },
      "بور شدگی": {
        "translation": "Mass, Bone dislocation",
        "pronunciation": "bur ʃudʌgi",
        "definition": "برامدگی، بور شدن استخوان"
      },
      "بی بار": {
        "translation": "Infertile",
        "pronunciation": "bibar",
        "definition": "نازا"
      },
      "بی نمازی": {
        "translation": "Menstrual period",
        "pronunciation": "benʌmazi",
        "definition": "عادت ماهوار"
      },
      "بیخی گوشی": {
        "translation": "Mumps",
        "pronunciation": "biχi guʃ",
        "definition": "اوریون، کله چرک"
      },
      "بیسمیل": {
        "translation": "Mastitis",
        "pronunciation": "bismel",
        "definition": "سینه درد"
      },
      "بیلچرغه": {
        "translation": "Swollen lymph nodes",
        "pronunciation": "bejl ʧerʁʌ",
        "definition": "دانه، دمل، غده‌های لنفاوی بزرگ شده بر اثر عفونت"
      },
      "بینی کور": {
        "translation": "Nasal Congestion",
        "pronunciation": "bini kur",
        "definition": "بند بودن بینی"
      },

      // شروع پ

      "پالو خاوی": {
        "translation": "Sexual intercourse",
        "pronunciation": "palu χɑwi",
        "definition": "مقاربت جنسی"
      },
      "پای گرنگ کدو": {
        "translation": "Going to labor",
        "pronunciation": "paj gʌrnʌg kʌdo",
        "definition": "شروع دردهای ولادی"
      },
      "پچک دردی": {
        "translation": "Post-partum belly pain",
        "pronunciation": "piʧʌk dʌrdi",
        "definition": "درد شکم بعد از ولادت"
      },
      "پخته": {
        "translation": "Full-term (FT)",
        "pronunciation": "poχtʌ",
        "definition": "رسیده"
      },
      "پرهیز": {
        "translation": "Food Restriction",
        "pronunciation": "pʌriz",
        "definition": "محدودیت غذایی"
      },
      "پوش": {
        "translation": "Condom",
        "pronunciation": "puʃ",
        "definition": "پوش"
      },
      "پوندیده گی": {
        "translation": "Diarrhea",
        "pronunciation": "pondidʌgi",
        "definition": "اسهال"
      },
      "پِیچ دِیدُو": {
        "translation": "Abdominal Pain With Diarrhea",
        "pronunciation": "piʧ dido",
        "definition": "درد شکم در هنگام اسهال"
      },
      "پیچکاری": {
        "translation": "Injection",
        "pronunciation": "peʧkari",
        "definition": "پیچکاری"
      },
      "پیچکاری جلوگیری": {
        "translation": "Depo",
        "pronunciation": "peʧ kari ʤʌlʌwgiri",
        "definition": "پیچکاری جلوگیری"
      },
      "پیچکاری قند": {
        "translation": "Insulin",
        "pronunciation": "peʧkari qʌnd",
        "definition": "پیچکاری مرض شکر"
      },
      "پیستو درد": {
        "translation": "Pain in breasts",
        "pronunciation": "pistu dʌrd",
        "definition": "سینه درد"
      },
      "پیستو دردی": {
        "translation": "Mastitis",
        "pronunciation": "Pesto dʌrdi",
        "definition": "سینه دردی"
      },
      "پیشآو": {
        "translation": "Bladder",
        "pronunciation": "peʃ Aw",
        "definition": "مثانه"
      },
      "پیله": {
        "translation": "Colostrum",
        "pronunciation": "pilʌ",
        "definition": "کلستروم"
      },

      // شروع ت
      "تاو": {
        "translation": "Fever",
        "pronunciation": "Taw",
        "definition": "تب"
      },
      "تبک": {
        "translation": "Tuberculosis",
        "pronunciation": "tʌbʌk",
        "definition": "مرض سل یا توبرکلوز"
      },
      "تخته سیر": {
        "translation": "Posterior",
        "pronunciation": "tʌχte sir",
        "definition": "پشت قفسه سینه"
      },
      "ترس گرفتگی": {
        "translation": "Epilepsy",
        "pronunciation": "tʌrs giriftʌgi",
        "definition": "صرع"
      },
      "ترس گرفتو": {
        "translation": "Pre-eclampsia",
        "pronunciation": "tars giɾifto",
        "definition": "پره اکلمپسیا"
      },
      "ترسدگی پور": {
        "translation": "Epilepsy",
        "pronunciation": "tʌrsidʌgi pur",
        "definition": "صرع"
      },
      "تَسرَه": {
        "translation": "Baby sever cry",
        "pronunciation": "tʌsrʌ",
        "definition": "گریۀ شدید، بی‌هوشی از گریۀ زیاد، در مورد کودکان به کار می‌رود"
      },
      "تَماغُو": {
        "translation": "Cold",
        "pronunciation": "tʌmaʁu",
        "definition": "سرما خوردگی"
      },
      "تَوخال": {
        "translation": "Cold sore",
        "pronunciation": "tʌw χal",
        "definition": "تب‌خال"
      },
      "تیر ناف": {
        "translation": "Umbilical cord",
        "pronunciation": "tir e naf",
        "definition": "بند ناف"
      },
      "تِیرسَگ": {
        "translation": "Eye infection",
        "pronunciation": "tir sʌg",
        "definition": "عفونت چشم"
      },
      "تِیماو": {
        "translation": "Fever",
        "pronunciation": "timʌw",
        "definition": "تب"
      },
      "تیی پای": {
        "translation": "Soles Of The Feet",
        "pronunciation": "tʌj e paj",
        "definition": "کف پا"
      },

      // شروع چ
      "جاگه‌گِمِیز": {
        "translation": "Enuresis",
        "pronunciation": "ʤagʌ gimiz",
        "definition": "شب ادرار"
      },
      "جان ‌دَردِی": {
        "translation": "Body Ache",
        "pronunciation": "ʤan dʌrdi",
        "definition": "درد در تمام بدن"
      },
      "جدکه": {
        "translation": "Tenderness",
        "pronunciation": "ʤʌdkʌ",
        "definition": "حساس بودن بدن به تماس فیزیکی"
      },
      "جواب چای": {
        "translation": "Urine",
        "pronunciation": "ʤab ʧaj",
        "definition": "ادرار"
      },
      "جوره": {
        "translation": "Placenta",
        "pronunciation": "ʤoɾʌ",
        "definition": "جوره"
      },
      "جوغور": {
        "translation": "Goiter",
        "pronunciation": "ʤuʁur",
        "definition": "جاغور"
      },
      "جولونگ": {
        "translation": "Goiter",
        "pronunciation": "ʤulung",
        "definition": "جاغور"
      },
      "جیله چسبیده": {
        "translation": "Molding",
        "pronunciation": "ʤile ʧʌsbidʌ",
        "definition": "قالب گیری سر، تغیر شکل سوچرها، حالتی که در نتیجه ولادت طبیعی شکل سر طفل کمی تغییر کرده است"
      },

      // چ

      "چاردرد": {
        "translation": "Active labor",
        "pronunciation": "ʧar dʌrd",
        "definition": "فیز فعال ولادت"
      },
      "چاره": {
        "translation": "Meconium",
        "pronunciation": "ʧarʌ",
        "definition": "مکونیوم"
      },
      "چجی گیر": {
        "translation": "Chest congestion",
        "pronunciation": "ʧeʤi gir",
        "definition": "گرفتگی سینه"
      },
      "چِجِی‌گِیر": {
        "translation": "Pneumonia",
        "pronunciation": "ʧeʤi ger",
        "definition": "سینه‌بغل"
      },
      "چرچرشدو": {
        "translation": "Blurred vision",
        "pronunciation": "ʧʌrʧʌr ʃudo",
        "definition": "تار شدن پیش چشم"
      },
      "چرک شرمگاه": {
        "translation": "Vaginitis",
        "pronunciation": "ʧerke ʃʌrmgah",
        "definition": "چرک از دامن"
      },
      "چرک کشی گوش": {
        "translation": "Ear Drainage",
        "pronunciation": "ʧerk kʌʃi guʃ",
        "definition": "آبکشی گوش"
      },
      "چقچی": {
        "translation": "Acne",
        "pronunciation": "ʧʌqʧi",
        "definition": "جوانی دانه"
      },
      "چقلی": {
        "translation": "Baby",
        "pronunciation": "ʧoʁlʌj",
        "definition": "طفل خرد"
      },
      "چقیدگی": {
        "translation": "Diaper rash",
        "pronunciation": "ʧʌqidʌgi",
        "definition": "بخار بین پای طفل در نتیجه استفاده از پمپر یا لاته ایجاد شده باشد"
      },
      "چک چک شدو": {
        "translation": "Stretch mark",
        "pronunciation": "ʧʌk ʧʌk ʃudo",
        "definition": "رد حمل"
      },
      "چمبه": {
        "translation": "Bloating",
        "pronunciation": "ʧʌmbʌ",
        "definition": "نفخ"
      },
      "چمبه": {
        "translation": "Swollen abdomen",
        "pronunciation": "ʧʌmbʌ",
        "definition": "باد کردن شکم"
      },
      "چوره": {
        "translation": "Inguinal hernia",
        "pronunciation": "ʧurʌ",
        "definition": "چوره"
      },
      "چوقی": {
        "translation": "Neonate",
        "pronunciation": "ʧuqi",
        "definition": "نوزاد"
      },
      "چولی": {
        "translation": "Neonate",
        "pronunciation": "ʧulʌj",
        "definition": "نوزاد"
      },
      "چیچک": {
        "translation": "Chickenpox",
        "pronunciation": "ʧiʧʌk",
        "definition": "چیچک"
      },



      // د

      "دان باچه دو": {
        "translation": "Cervix",
        "pronunciation": "dan e bʌʧʌ do",
        "definition": "دهانه رحم"
      },
      "دان پُختَگِی": {
        "translation": "Canker sore",
        "pronunciation": "Dan poχtʌgi",
        "definition": "دانه‌های کوچک و سفیدرنگ سوزش دارد بر روی زبان و لب"
      },
      "دانه بچه دان": {
        "translation": "Uterine tumor",
        "pronunciation": "dane bʌʧʌdan",
        "definition": "تومور رحمی"
      },
      "دانه بُزُورکُو": {
        "translation": "Cowpox",
        "pronunciation": "Dane bozurku",
        "definition": "چِیچَک گاوی"
      },
      "دانه خال": {
        "translation": "Blister",
        "pronunciation": "danʌ χal",
        "definition": "آوله"
      },
      "دانه سُرخ‌کُو": {
        "translation": "Measles",
        "pronunciation": "Dane sorΧvku",
        "definition": "سرخکان"
      },
      "دانه سلیم": {
        "translation": "Fibroid",
        "pronunciation": "dane sʌlim",
        "definition": "دانه بد، تومور"
      },
      "دانه شدو": {
        "translation": "Rash",
        "pronunciation": "danʌ ʃudo",
        "definition": "خار در آوردن"
      },
      "دانه گل": {
        "translation": "Measles",
        "pronunciation": "Dane gol",
        "definition": "سرخکان"
      },
      "درد پیش از وقت": {
        "translation": "Preterm labor",
        "pronunciation": "dʌrd e piʃ ʌz vʌqt",
        "definition": "شروع دردهای ولادی پیش از وقت"
      },
      "درد پیش قچیق": {
        "translation": "Lower belly pain",
        "pronunciation": "dʌrd e peʃ qʌʧiq",
        "definition": "درد زیر شکم"
      },
      "دَردِ زا": {
        "translation": "Labor pain",
        "pronunciation": "dʌrd e za",
        "definition": "درد وضع حمل"
      },
      "دَرد سرلغک": {
        "translation": "Typhoid fever",
        "pronunciation": "dʌrd e sʌr lʌʁʌk",
        "definition": "محریقه"
      },
      "دَردِ سه‌ ھفتا": {
        "translation": "Typhoid fever",
        "pronunciation": "dʌrd e se haftʌ",
        "definition": "محریقه"
      },
      "درد وقت پالو خاو": {
        "translation": "Sex hurt",
        "pronunciation": "dʌrd e vaqt e χɑw palu",
        "definition": "درد در هنگام مقاربت"
      },
      "درگه جان": {
        "translation": "Vagina",
        "pronunciation": "dʌrge ʤan",
        "definition": "واژن"
      },
      "دَرُو رَو": {
        "translation": "Diarrhea",
        "pronunciation": "daru rʌw",
        "definition": "اسهال"
      },
      "دَغدِنَه کدو": {
        "translation": "Shivering",
        "pronunciation": "dʌʁdinʌ kʌdu",
        "definition": "تب و لرز"
      },
      "دَک‌ خُوردُو": {
        "translation": "Having pain, slow walk, Shivering",
        "pronunciation": "dʌk χurdo",
        "definition": "لرزیدن، آرام آرام راه رفتن، درد داشتن"
      },
      "دل بله": {
        "translation": "Nausea",
        "pronunciation": "dil bʌlʌ",
        "definition": "تهوع"
      },
      "دِل‌دَرد": {
        "translation": "Stomach ache",
        "pronunciation": "dil dʌrd",
        "definition": "درد معده"
      },
      "دلنگ": {
        "translation": "Lesion",
        "pronunciation": "dʌlʌng",
        "definition": "غبن، ضایعه و زخم"
      },
      "دم ده سری": {
        "translation": "Low mood",
        "pronunciation": "dʌm dʌ sʌri",
        "definition": "بی حوصله ، بی حال و بی رمق"
      },
      "دم گرفتو": {
        "translation": "Aspiration",
        "pronunciation": "dʌm girifto",
        "definition": "استنشاق"
      },
      "ده جاگه استراحت": {
        "translation": "Bed rest",
        "pronunciation": "dʌ jagʌ estʌrahʌt",
        "definition": "استراحت مطلق"
      },
      "دو گونی": {
        "translation": "Identical twins",
        "pronunciation": "doguni",
        "definition": "دوگانگی"
      },
      "دوجو بی جای": {
        "translation": "Ectopic pregnancy",
        "pronunciation": "duʤo bi ʤaj",
        "definition": "حاملگی خارج رحمی"
      },
      "دیلمه": {
        "translation": "Colostrum",
        "pronunciation": "dilmʌ",
        "definition": "فیله یا اولین شیرمادر"
      },

      // ر

      "رگ به رگ شدو": {
        "translation": "Muscle spasticity",
        "pronunciation": "rʌg bʌ rʌg ʃudo",
        "definition": "رگ شدن"
      },
      "رنجِ‌بَرِیک": {
        "translation": "Tuberculosis",
        "pronunciation": "rʌnʤ bʌrik",
        "definition": "بیماری سل"
      },
      "رَوَک": {
        "translation": "Chest pain due to unsupported moving of the infant’s body",
        "pronunciation": "rʌvʌk",
        "definition": "باز رفتن بغل نوزاد"
      },
      "رِیخ‌رَو": {
        "translation": "Diarrhea",
        "pronunciation": "riχ rʌw",
        "definition": "اسهال"
      },
      "رِیزِش": {
        "translation": "Cold",
        "pronunciation": "rizeʃ",
        "definition": "سرما خوردگی"
      },
      "ریشکک": {
        "translation": "Lice",
        "pronunciation": "riʃkʌk",
        "definition": "شپش"
      },
      "ریم": {
        "translation": "Pus",
        "pronunciation": "rim",
        "definition": "چیرکین"
      },
      "ریم باچه دو": {
        "translation": "Vaginal discharge",
        "pronunciation": "ɾim e baʧʌdo",
        "definition": "چرک از دامن"
      },
      "ریم راه جان": {
        "translation": "Vaginal discharge",
        "pronunciation": "rim e rah e ʤan",
        "definition": "ترشحات واژنی"
      },
      "زاچه": {
        "translation": "Woman who has recently given birth to a child",
        "pronunciation": "zɑʧʌ",
        "definition": "زاچه"
      },
      "زاچهباد": {
        "translation": "Childbed fever, puerperal fever",
        "pronunciation": "zɑʧʌbɑd",
        "definition": "زاچه باد"
      },
      "زاچهگی": {
        "translation": "Postpartum",
        "pronunciation": "zɑʧʌgi",
        "definition": "زاچه گی"
      },

      // ز

      "زاییدو": {
        "translation": "Child birth",
        "pronunciation": "zʌjidu",
        "definition": "ولادت"
      },
      "زَردِی": {
        "translation": "Jaundice",
        "pronunciation": "zʌrdi",
        "definition": "یرقان"
      },
      "زردی آمدو": {
        "translation": "Vaginal discharge",
        "pronunciation": "zardi amʌdo",
        "definition": "چرک از دامن"
      },
      "زردی سیاه": {
        "translation": "Hepatitis",
        "pronunciation": "zʌrdi sijah",
        "definition": "زردی سیاه"
      },
      "زُکام": {
        "translation": "Cold",
        "pronunciation": "zokam",
        "definition": "سرما خوردگی"
      },
      "زنانگی": {
        "translation": "Vulva",
        "pronunciation": "zʌnanʌgi",
        "definition": "شرمگاه"
      },
      "زُوف": {
        "translation": "Light head",
        "pronunciation": "zuf",
        "definition": "ضعف، از هوش رفتن"
      },
      "زیدو": {
        "translation": "Child birth",
        "pronunciation": "zʌjdo",
        "definition": "ولادت"
      },

      // س


      "سامان": {
        "translation": "IUD",
        "pronunciation": "saman",
        "definition": "دستگاه داخل رحمی"
      },
      "سایه گرفتو": {
        "translation": "Seizure",
        "pronunciation": "sɑjʌ girifo",
        "definition": "اختلاج، تشنج"
      },
      "سر چرخک": {
        "translation": "Room is spinning",
        "pronunciation": "sʌr ʧʌrχʌk",
        "definition": "چرخ خوردن دور سر"
      },
      "سر لوخ": {
        "translation": "Nipple",
        "pronunciation": "sʌr  luχ",
        "definition": "سر سینه"
      },
      "سرباد": {
        "translation": "Postpartum depression",
        "pronunciation": "sʌrbad",
        "definition": "افسردگی بعد از ولادت"
      },
      "سرخ بوده": {
        "translation": "Allergen",
        "pronunciation": "sorχ budʌ",
        "definition": "حساسیت زا"
      },
      "سرخکانچه": {
        "translation": "Rubella",
        "pronunciation": "surχʌkanʧe",
        "definition": "حساسیت زا"
      },
      "سرخکو": {
        "translation": "Measles",
        "pronunciation": "sorΧvku",
        "definition": "سرخکان"
      },
      "سرخی": {
        "translation": "Inflammation",
        "pronunciation": "surχi",
        "definition": "التهاب"
      },
      "سرطان پیستو": {
        "translation": "Breast cancer",
        "pronunciation": "sʌrʌtan pisto",
        "definition": "سرطان سینه"
      },
      "سرلولو": {
        "translation": "Nipple",
        "pronunciation": "sʌr lulu",
        "definition": "سر سینه"
      },
      "سرناپاک": {
        "translation": "The woman who had intercourse",
        "pronunciation": "sʌr napak",
        "definition": "زنی که باشوهرش آمیزش داشته"
      },
      "سفره": {
        "translation": "Baby severe cry",
        "pronunciation": "sʌfrʌ",
        "definition": "گریه شدید طفل"
      },
      "سَفرَه": {
        "translation": "Faint",
        "pronunciation": "sʌfrʌ",
        "definition": "غش، بیهوش شدن"
      },
      "سَلمان": {
        "translation": "Mohalim",
        "pronunciation": "sʌlman",
        "definition": "کسی که کودکان را ختنه کند"
      },
      "سَماوِی": {
        "translation": "Cold",
        "pronunciation": "sʌmavi",
        "definition": "سرما خوردگی"
      },
      "سَمایِی": {
        "translation": "Cold",
        "pronunciation": "sʌmaji",
        "definition": "سرما خوردگی"
      },
      "سنت کردن": {
        "translation": "Circumcision",
        "pronunciation": "sunnʌt kʌdu",
        "definition": "ختنه"
      },
      "سنده": {
        "translation": "Infertile",
        "pronunciation": "sʌndʌ",
        "definition": "نازا"
      },
      "سنگ گرده": {
        "translation": "Kidney stones",
        "pronunciation": "sʌng e gordʌ",
        "definition": "سنگ گرده"
      },
      "سوا": {
        "translation": "Miscarriage",
        "pronunciation": "siva",
        "definition": "نقصان"
      },
      "سوا کدو": {
        "translation": "Miscarriage",
        "pronunciation": "siva kʌdu",
        "definition": "نقصان کردن"
      },
      "سوچی کدو": {
        "translation": "Getting pregnant, the pregnant woman who has a desire to specific food",
        "pronunciation": "soʧi kʌdu",
        "definition": "حامله شدن، ویار داشتن"
      },
      "سوزک": {
        "translation": "Painful urination, Vaginal yeast infection",
        "pronunciation": "suzʌk",
        "definition": "سوزش ادرار, عفونت خارش دار"
      },
      "سوزن سوزن شدو": {
        "translation": "Tingling",
        "pronunciation": "suzʌn suzʌn ʃudo",
        "definition": "خواب رفتن یا مور مور شدن"
      },
      "سول": {
        "translation": "Wart",
        "pronunciation": "sol",
        "definition": "زگیل، زخ"
      },
      "سوله": {
        "translation": "Dull",
        "pronunciation": "sulʌ",
        "definition": "کسل، بیحال"
      },
      "سووز شدون گرد نول": {
        "translation": "Cyanosis",
        "pronunciation": "sʌwooz ʃudon e gird e nul",
        "definition": "سیاه شدن صورت"
      },
      "سیا سُلفه": {
        "translation": "Pertussis",
        "pronunciation": "sia solfʌ",
        "definition": "سیاه‌سرفه"
      },
      "سیا کوی": {
        "translation": "Bruise",
        "pronunciation": "sija kuj",
        "definition": "کبودی"
      },
      "سیاه و سووز شدو": {
        "translation": "Dark curtain in vision",
        "pronunciation": "sijah o sʌwuz ʃudo",
        "definition": "سیاه رفتن پیش چشم"
      },
      "سیاهی پیچ کدو": {
        "translation": "Sleep apnea",
        "pronunciation": "sijahi piʧ kʌdu",
        "definition": "نفس قیدی شبانه"
      },
      "سیجونگ": {
        "translation": "Urine incontinence",
        "pronunciation": "siʤung",
        "definition": "بی اختیاری ادراری"
      },
      "سیل": {
        "translation": "Tuberculosis (TB)",
        "pronunciation": "sil",
        "definition": "توبرکلوز"
      },
      "سینگیر کش": {
        "translation": "Strain",
        "pronunciation": "singir kʌʃ",
        "definition": "کشیدگی عضلات"
      },
      "سِینگِیرِی": {
        "translation": "Pneumonia",
        "pronunciation": "sejngirej",
        "definition": "سینه‌بغل"
      },
      "سینه قیدی": {
        "translation": "Asthma",
        "pronunciation": "sinʌ aʌjdi",
        "definition": "نفس تنگی"
      },

      // ش

      "شاش دان": {
        "translation": "Bladder",
        "pronunciation": "ʃʌʃ dan",
        "definition": "مثانه"
      },
      "شرمگاه": {
        "translation": "Vulva",
        "pronunciation": "ʃʌrmgah",
        "definition": "شرمگاه"
      },
      "شعاع گرفتو": {
        "translation": "Bili Lights use (phototherapy)",
        "pronunciation": "ʃua girifto",
        "definition": "زیر نور لامپ گرفتن"
      },
      "شکم دار": {
        "translation": "Pregnant",
        "pronunciation": "ʃekʌm dar",
        "definition": "حامله"
      },
      "شکم دَردی": {
        "translation": "Diarrhea",
        "pronunciation": "ʃikʌm dʌrdi",
        "definition": "اسهال"
      },
      "شکم‌رَو": {
        "translation": "Diarrhea",
        "pronunciation": "ʃikʌm rʌw",
        "definition": "اسهال"
      },
      "شنده گی": {
        "translation": "Infertility",
        "pronunciation": "ʃʌndʌgi",
        "definition": "نازایی"
      },
      "شِیر سُوخته": {
        "translation": "Malnourished",
        "pronunciation": "ʃir suχtʌ",
        "definition": "سوءتغذی"
      },
      "شِیرِینچه": {
        "translation": "Pustules",
        "pronunciation": "ʃirinʧʌ",
        "definition": "جوش‌های کوچک زرد در ناحیۀ دهان"
      },
      "شیغی پای": {
        "translation": "Ankle",
        "pronunciation": "ʃiʁʌj e paj",
        "definition": "دلک پا، قوزک پا"
      },


      // ض

      "ضایع کدو": {
        "translation": "Miscarriage",
        "pronunciation": "zaje kʌdo",
        "definition": "نقصان کردن"
      },

      // ع

      "عرق سوختگی": {
        "translation": "Diaper rash",
        "pronunciation": "ʌraq suχtʌgi",
        "definition": "عرق سوختگی"
      },
      "عروقی": {
        "translation": "Congenital, Hereditary",
        "pronunciation": "Oruqi",
        "definition": "ارثی"
      },
      "عمل": {
        "translation": "Cesarean section",
        "pronunciation": "ʌmʌl",
        "definition": "سزارین"
      },
      "عمل کتوگ": {
        "translation": "Tonsillectomy",
        "pronunciation": "ʌmʌle kʌtug",
        "definition": "عمل تانسیل"
      },

      //غ

      "غرلی": {
        "translation": "Infant",
        "pronunciation": "ʁorlʌi",
        "definition": "طفل"
      },

      // ف

      "فشار بلند دوجونی": {
        "translation": "Gestational high blood pressure",
        "pronunciation": "fiʃɑɾ e bolʌnd e doʤuni",
        "definition": "فشار خون بالای حاملگی"
      },
      "قآو": {
        "translation": "Condom",
        "pronunciation": "qaw",
        "definition": "پوش"
      },

      // ق

      "قره موغ": {
        "translation": "Chickenpox",
        "pronunciation": "qʌrʌ muʁ",
        "definition": "چیچک"
      },
      "قفه شدو": {
        "translation": "Choke",
        "pronunciation": "qʌfv ʃudo",
        "definition": "خفه کردن"
      },
      "قلچی": {
        "translation": "Contagious disease",
        "pronunciation": "qʌlʧi",
        "definition": "بیماری مسری"
      },
      "قم ناشته": {
        "translation": "Menstrual period",
        "pronunciation": "qʌm naʃtʌ",
        "definition": "مریضی ماهوار"
      },
      "قورگ": {
        "translation": "Diarrhea",
        "pronunciation": "qurʌg",
        "definition": "اسهال"
      },
      "قوشی": {
        "translation": "Cleft lip",
        "pronunciation": "quʃi",
        "definition": "نوزاد لب چاک، لب شکری"
      },
      "قوعنگ پاره شدو": {
        "translation": "Amniotic sac rupture",
        "pronunciation": "quʌnʌk parʌ ʃudʌn",
        "definition": "پاره شدو کیسه آمنیوتیک"
      },
      "قولخک": {
        "translation": "Pinworm infection",
        "pronunciation": "qulχʌk",
        "definition": "کرمک"
      },
      "قولینج شکم": {
        "translation": "Colic",
        "pronunciation": "qulinʤ",
        "definition": "قولینج"
      },
      "قی": {
        "translation": "Vomit",
        "pronunciation": "qʌj",
        "definition": "استفراغ"
      },
      "قیطه": {
        "translation": "Abdomen",
        "pronunciation": "qittʌ",
        "definition": "شکم"
      },
      "قیک": {
        "translation": "Bow legs",
        "pronunciation": "qʌjʌk",
        "definition": "پاهای کمانی"
      },


      // 
      "کادو اشتو": {
        "translation": "Cupping",
        "pronunciation": "kadu eʃto",
        "definition": "حجامت کردن"
      },
      "کاسی ریزه": {
        "translation": "Small size pelvic",
        "pronunciation": "kasʌj rizʌ",
        "definition": "لگن خرد"
      },
      "کالا بد شدو": {
        "translation": "Menstrual period",
        "pronunciation": "kala bʌd ʃudo",
        "definition": "مریضی ماهوار شدن"
      },
      "کام چک": {
        "translation": "Cleft palate",
        "pronunciation": "kam ʧak",
        "definition": "نوزاد کام شکری"
      },
      "کپسول بازو": {
        "translation": "Implant",
        "pronunciation": "kʌpsul e bazu",
        "definition": "امپلنت"
      },
      "کَتُوک دَردِی": {
        "translation": "Throat pain",
        "pronunciation": "kʌtuk dʌrdi",
        "definition": "درد گلو"
      },
      "کجک دردی": {
        "translation": "Appendicitis",
        "pronunciation": "kʌjʌk dʌrdi",
        "definition": "آپاندیسیت"
      },
      "کجگ درد": {
        "translation": "Constipation",
        "pronunciation": "kʌʤʌg dʌrd",
        "definition": "قبضیت"
      },
      "کرختی": {
        "translation": "Anesthesia",
        "pronunciation": "kʌrʌχti",
        "definition": "بی حسی"
      },
      "کشیدن بچه دان": {
        "translation": "Hysterectomy",
        "pronunciation": "kʌʃidʌn e bʌʧʌdan",
        "definition": "کشیدن رحم"
      },
      "ککرک ماندو": {
        "translation": "Muscle spasm",
        "pronunciation": "kʌkrʌk mando",
        "definition": "شخ ماندن"
      },
      "کله": {
        "translation": "Chin",
        "pronunciation": "kʌlʌ",
        "definition": "زناق"
      },
      "کم تول": {
        "translation": "Low birth weight",
        "pronunciation": "kʌm tol",
        "definition": "نوزاد با وزن کم"
      },
      "کم جان": {
        "translation": "Severe fatigue",
        "pronunciation": "kʌm ʤan",
        "definition": "خستگی زیاد"
      },
      "کم خاوی": {
        "translation": "Insomnia",
        "pronunciation": "kʌm χawi",
        "definition": "کم خوابی"
      },
      "کم خو": {
        "translation": "Anemia",
        "pronunciation": "kʌm χu",
        "definition": "کم خونی"
      },
      "کم هوش": {
        "translation": "Down Syndrome",
        "pronunciation": "kʌm huʃ",
        "definition": "عقب مانده ذهنی"
      },
      "کم واک": {
        "translation": "Malnourished",
        "pronunciation": "kʌm wak",
        "definition": "سوء تغذی"
      },
      "کمر آمدو": {
        "translation": "Menstrual period",
        "pronunciation": "kʌmʌr amʌdo",
        "definition": "عادت شدن"
      },
      "کمر خشکی": {
        "translation": "Menopause",
        "pronunciation": "kʌmʌr χoʃki",
        "definition": "یایسگی"
      },
      "کمروازشدو": {
        "translation": "Menstrual period",
        "pronunciation": "kʌmʌr vaz ʃudo",
        "definition": "عادت ماهوار شدن"
      },
      "کوره": {
        "translation": "Abdominal",
        "pronunciation": "kʌwrʌ",
        "definition": "شکم"
      },
      "کوره درد": {
        "translation": "Abdominal pain",
        "pronunciation": "kʌwrʌ dʌrd",
        "definition": "درد شکم"
      },
      "کوری درد": {
        "translation": "Labor pain",
        "pronunciation": "kuri dʌrd",
        "definition": "درد ولادت"
      },
      "کوفتگی": {
        "translation": "Bruise",
        "pronunciation": "kuftʌgi",
        "definition": "کبودی"
      },
      "کوک": {
        "translation": "Stitch, Suture",
        "pronunciation": "kuk",
        "definition": "بخیه"
      },
      "کیپ شدن گوش": {
        "translation": "Muffled ear, ear blockage",
        "pronunciation": "kip ʃudʌn e guʃ",
        "definition": "دپ شدن گوش"
      },
      "کیدو": {
        "translation": "Pain",
        "pronunciation": "kʌjdo",
        "definition": "درد کشیدن"
      },
      "گردگ": {
        "translation": "Lice",
        "pronunciation": "gʌrdʌg",
        "definition": "شپش"
      },
      "گردو شخک": {
        "translation": "Tetanus",
        "pronunciation": "gʌrdu ʃʌχʌk",
        "definition": "تیتانوس"
      },
      "گزگ": {
        "translation": "Inflammation of ulcer",
        "pronunciation": "gʌzʌg",
        "definition": "التهابی شدن زخم"
      },
      "گل وازشدو": {
        "translation": "Bleeding during pregnancy",
        "pronunciation": "gul vaz ʃudo",
        "definition": "خون ریزی درزمان حاملگی"
      },
      "گنگاوش": {
        "translation": "Light-headed",
        "pronunciation": "gʌngavoʃ",
        "definition": "بی حال"
      },
      "گوش درد": {
        "translation": "Otitis",
        "pronunciation": "guʃ dʌrd",
        "definition": "التهاب گوش"
      },
      "گیرا": {
        "translation": "Contagious",
        "pronunciation": "gira",
        "definition": "مسری"
      },
      "گیمیز": {
        "translation": "Urine",
        "pronunciation": "gimiz",
        "definition": "شاش، ادرار"
      },
      "گیمیز بندک": {
        "translation": "Urinary retention",
        "pronunciation": "gimiz bʌndʌk",
        "definition": "شاش بند"
      },
      "لبای ریزه درگه جان": {
        "translation": "Labia minora",
        "pronunciation": "lʌbaj e rizʌ dʌrgi ʤan",
        "definition": "لب های ریزه شرمگاهی"
      },
      "لبای زنانه گی": {
        "translation": "Labia",
        "pronunciation": "lʌbaj e zʌnanagi",
        "definition": "لبهای شرمگاهی"
      },
      "لبای کته درگه جان": {
        "translation": "Labia majora",
        "pronunciation": "lʌbaj e kʌtʌ dʌrgi ʤan",
        "definition": "لبهای کلان شرمگاهی"
      },
      "لکه حاملگی": {
        "translation": "Melasma",
        "pronunciation": "lʌke hamelegi",
        "definition": "ماسک حاملگی"
      },
      "لکه ماه گرفتگی": {
        "translation": "Birthmark",
        "pronunciation": "lake mah giriftʌgi",
        "definition": "لکه ماه گرفتگی"
      },
      "لولوک": {
        "translation": "Nipple",
        "pronunciation": "luluk",
        "definition": "سر سینه"
      },
      "لین": {
        "translation": "Catheter",
        "pronunciation": "lʌjn",
        "definition": "سوزن"
      },

      //
      
      "ماینه تلوزونی": {
        "translation": "Ultrasound",
        "pronunciation": "majne telvizuni",
        "definition": "معاینه تلویزیونی"
      },
      "ماینه دامن": {
        "translation": "Pelvic exam",
        "pronunciation": "majene damʌn",
        "definition": "معاینه از واژن"
      },
      "مجرد شدو": {
        "translation": "Puberty",
        "pronunciation": "mujʌrʌd ʃudo",
        "definition": "بالغ شدن، جوان شدن"
      },
      "مرداری دانه": {
        "translation": "Bump",
        "pronunciation": "mordari danʌ",
        "definition": "جوش دانه، دانه"
      },
      "مرض تبک": {
        "translation": "Tuberculosis (TB)",
        "pronunciation": "mʌrʌz e tʌbʌk",
        "definition": "توبرکلوز"
      },
      "مرض قند دُجونی": {
        "translation": "Gestational diabetes",
        "pronunciation": "mʌrʌz e qʌnd e doʤuni",
        "definition": "مرض شکر حاملگی"
      },
      "مستی": {
        "translation": "Libido",
        "pronunciation": "mʌsti",
        "definition": "میل جنسی"
      },
      "معافیت": {
        "translation": "Immunization",
        "pronunciation": "muafijat",
        "definition": "واکسین"
      },
      "مَلَّم": {
        "translation": "Medicine",
        "pronunciation": "mʌlʌm",
        "definition": "دوا، مرهم"
      },
      "مُورِیقه": {
        "translation": "Typhoid fever",
        "pronunciation": "muriqʌ",
        "definition": "محریقه"
      },
      "میده شدگی": {
        "translation": "Fracture",
        "pronunciation": "mʌjdʌʃodʌgi",
        "definition": "شکستگی"
      },
      "مینه ی جان": {
        "translation": "Inside vagina",
        "pronunciation": "menʌj e ʤan",
        "definition": "داخل واژن"
      },
      "ناجُور": {
        "translation": "Sick",
        "pronunciation": "naʤor",
        "definition": "مریض"
      },
      "ناخن خیدو": {
        "translation": "Nail biting",
        "pronunciation": "naχon χʌjdu",
        "definition": "جویدن ناخن"
      },
      "ناخُورِی": {
        "translation": "Anorexia",
        "pronunciation": "naχori",
        "definition": "بی‌اشتهایی"
      },
      "ناخُوش": {
        "translation": "Sick",
        "pronunciation": "naχoʃ",
        "definition": "مریض"
      },
      "ناخُوشِی": {
        "translation": "Sickness",
        "pronunciation": "naχoʃi",
        "definition": "بیماری، کسالت"
      },
      "ناف بورشودگی": {
        "translation": "Umbilical hernia",
        "pronunciation": "naf bur ʃudʌgi",
        "definition": "رفتن ناف"
      },
      "ناف رَفتُو": {
        "translation": "A condition the person has fever and is lightheaded",
        "pronunciation": "naf rʌfto",
        "definition": "نوعی بیماری که با تب و سست شدن عضلات همراه است"
      },
      "نزله": {
        "translation": "Allergic conjunctivitis, Postnasal drip",
        "pronunciation": "nʌzlʌ",
        "definition": "چشم دردی حساسیتی, ترشحات پشت حلق"
      },
      "نزلۀ سرد": {
        "translation": "Cold and chill",
        "pronunciation": "nizle sʌrd",
        "definition": "تب سرد"
      },
      "نشانی": {
        "translation": "Mongolian spots, Symptom",
        "pronunciation": "niʃani",
        "definition": "لکه آبی رنگ در پشت نوزاد, علامت"
      },
      "نَفَس‌ قیدی": {
        "translation": "Asthma",
        "pronunciation": "nʌfʌs qʌjdi",
        "definition": "نفس تنگی"
      },
      "نل باچه دو": {
        "translation": "Fallopian tube",
        "pronunciation": "nʌl e baʧʌ do",
        "definition": "لوله رحمی"
      },
      "نلغه": {
        "translation": "Infant",
        "pronunciation": "nilʁʌ",
        "definition": "طفل خورد، جنین"
      },
      "نلغه ده کوره خشک شدو": {
        "translation": "Missing miscarriage",
        "pronunciation": "nelʁa da ko͞orʌ χōʃk ʃudo",
        "definition": "نقصان فراموش شده"
      },
      "نلغهتو": {
        "translation": "Mother of an infant",
        "pronunciation": "nilʁʌtu",
        "definition": "نلغه دار"
      },
      "نو بالغ": {
        "translation": "Menarche",
        "pronunciation": "nʌw baleʁ",
        "definition": "نوبالغ"
      },
      "نیکلگی عروقی": {
        "translation": "Genetic abnormality",
        "pronunciation": "niklʌgi oruqi",
        "definition": "معلولیت ارثی"
      },
      "نیلغه ایربی": {
        "translation": "Large for gestational age (LGA)",
        "pronunciation": "nilʁe irbi",
        "definition": "نوزاد کلان"
      },
      "نیلغه بد خوی": {
        "translation": "Cranky",
        "pronunciation": "nilʁe bʌd χuj",
        "definition": "طفل نا آرام"
      },
      "نیلغه پر قوت": {
        "translation": "Fetal Macrosomia",
        "pronunciation": "nilʁʌ por qovʌt",
        "definition": "نوزاد بزرگ"
      },
      "نیلغه زبردست": {
        "translation": "Fetal Macrosomia",
        "pronunciation": "nilʁʌ zʌbʌr dʌst",
        "definition": "نوزاد بزرگ"
      },
      "نیلغه گی": {
        "translation": "Neonatal",
        "pronunciation": "nilʁʌgi",
        "definition": "نوزادی"
      },
      "نیلغه مرده زیدو": {
        "translation": "Stillbirth",
        "pronunciation": "nilʁʌ murdʌ zʌjdu",
        "definition": "ولادت طفل مرده"
      },
      "نیلغه ناتو": {
        "translation": "Low birth weight baby",
        "pronunciation": "nilʁe nato",
        "definition": "نوزاد کم وزن"
      },
      "نیمکله گی": {
        "translation": "Anomaly",
        "pronunciation": "nimkʌlʌgi",
        "definition": "غیر نرمال"
      },
      "همراه طفل": {
        "translation": "Placenta",
        "pronunciation": "hʌmrah e tefl",
        "definition": "جفت حاملگی"
      },
      "وارنا شدو": {
        "translation": "Puberty",
        "pronunciation": "wuɾnɑ ʃudo",
        "definition": "بالغ شدن"
      },
      "ور": {
        "translation": "Edema",
        "pronunciation": "vor",
        "definition": "آماس"
      },
      "وغ زدو": {
        "translation": "Nausea",
        "pronunciation": "voʁ zʌdo",
        "definition": "تهوع"
      },
      "وغله": {
        "translation": "Vomit",
        "pronunciation": "voʁlʌ",
        "definition": "استفراغ، تهوع"
      },
      "ولادت از دامن": {
        "translation": "Normal delivery",
        "pronunciation": "veladʌt ʌz damʌn",
        "definition": "زایمان طبیعی"
      },
      "ولادت نارسیده": {
        "translation": "Preterm birth",
        "pronunciation": "veladʌt e narʌsidʌ",
        "definition": "ولادت نارس"
      },
      "ولقیله": {
        "translation": "Vomit",
        "pronunciation": "volqilʌ",
        "definition": "استفراغ کردن"
      },
      "یار": {
        "translation": "Placenta",
        "pronunciation": "jar",
        "definition": "جفت حاملگی"
      },
      "یک جای شدو": {
        "translation": "Sexual intercourse",
        "pronunciation": "jʌk ʤaj ʃudo",
        "definition": "مقاربت جنسی"
      },
    },
  };

  document.getElementById("word").addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    const direction = document.getElementById("direction").value;
    const dictionary = translations[direction];
    let matches = Object.keys(dictionary).filter((key) =>
      key.toLowerCase().startsWith(query)
    );

    const wordList = document.getElementById("wordList");
    if (query !== "" && matches.length > 0) {
      wordList.innerHTML = matches
        .map(
          (key) =>
            `<a href="#" class="list-group-item list-group-item-action">${key}</a>`
        )
        .join("");
      wordList.style.display = "block";
    } else {
      wordList.style.display = "none";
      wordList.innerHTML = "";
    }
  });

  document.getElementById("word").addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    const direction = document.getElementById("direction").value;
    const dictionary = translations[direction];
    let matches = Object.keys(dictionary).filter((key) =>
      key.toLowerCase().startsWith(query)
    );

    const wordList = document.getElementById("wordList");
    if (query !== "" && matches.length > 0) {
      wordList.innerHTML = matches
        .map(
          (key) =>
            `<a href="#" class="list-group-item list-group-item-action">${key}</a>`
        )
        .join("");
      wordList.style.display = "block";
    } else {
      wordList.style.display = "none";
      wordList.innerHTML = "";
    }
  });

  document.getElementById("wordList").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      document.getElementById("word").value = e.target.textContent;
      translate(e.target.textContent); // Pass the actual word content
      this.style.display = "none";
    }
  });

  document.querySelector("button").addEventListener("click", function () {
    translate(document.getElementById("word").value);
  });

  function translate(inputWord) {
    const direction = document.getElementById("direction").value;
    const dictionary = translations[direction];
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = ""; // Clear previous results

    let result =
      dictionary[inputWord] ||
      dictionary[inputWord.toLowerCase()] ||
      dictionary[inputWord.toUpperCase()];

    if (result) {
      if (result.definitions) {
        result.definitions.forEach((def) => {
          appendDefinition(resultElement, def);
        });
      } else {
        appendDefinition(resultElement, result);
      }

      if (result.sound) {
        appendAudio(resultElement, result.sound);
      }
    } else {
      resultElement.innerText = "Translation not found.";
    }
  }

  function appendDefinition(container, definition) {
    const definitionContainer = document.createElement("div");
    definitionContainer.innerHTML = `<b>Translation:</b> ${definition.translation}<br><b>Pronunciation:</b> ${definition.pronunciation}`;
    if (definition.definition) {
      definitionContainer.innerHTML += `<br><b>Definition:</b> ${definition.definition}`;
    }
    container.appendChild(definitionContainer);
  }

  function appendAudio(container, src) {
    const audioContainer = document.createElement("div");
    audioContainer.classList.add("audio-container");
    const audioLabel = document.createElement("span");
    audioLabel.innerHTML = "<b>Listen / تلغظ :</b>";
    audioLabel.classList.add("audio-label");
    audioContainer.appendChild(audioLabel);

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = src;
    audioContainer.appendChild(audio);

    container.appendChild(audioContainer);
  }
});
