document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    englishToHazaragi: {
      "Abdominal pain": {
        translation: "کَوره دَرد",
        pronunciation: "kʌwrʌ dʌrd",
        sound: "audio/abdominal_pain.mp3",
      },
      "Abdominal Pain With Diarrhea": {
        translation: "پِیچ دِیدُو",
        pronunciation: "piʧ dido",
      },
      Acne: {
        translation: "چقچی",
        pronunciation: "ʧʌqʧi",
      },
      "Active labor": {
        translation: "چاردرد",
        pronunciation: "ʧar dʌrd",
      },
      Allergen: {
        translation: "سرخ بوده",
        pronunciation: "sorχ budʌ",
      },
      "Allergic conjunctivitis": {
        translation: "نزله",
        pronunciation: "nʌzlʌ",
      },
      Amenorrhea: {
        translation: "خشک",
        pronunciation: "χuʃk",
      },
      "Amniotic fluid": {
        translation: "آو نیلغه",
        pronunciation: "aw e nilʁʌ",
      },
      "Amniotic sac rapture": {
        translation: "قوعنگ پاره شدو",
        pronunciation: "quʌnʌk parʌ ʃudʌn",
      },
      Anemia: {
        translation: "کم خو",
        pronunciation: "kʌm χu",
      },
      Anesthesia: {
        translation: "کرختی",
        pronunciation: "kʌrʌχti",
      },
      Ankle: {
        translation: "شیغی پای",
        pronunciation: "ʃiʁʌj e paj",
      },
      Bladder: {
        translation: "شاش دان",
        pronunciation: "ʃʌʃ dan",
      },
      "Bleeding during pregnancy": {
        translation: "گل وازشدو",
        pronunciation: "gul vaz ʃudo",
      },
      Blister: {
        translation: "اَولِیله",
        pronunciation: "ʌwlilʌ",
      },
      Bloating: {
        translation: "چمبه",
        pronunciation: "ʧʌmbʌ",
      },
      "Blurred vision": {
        translation: "چرچرشدو",
        pronunciation: "ʧʌrʧʌr ʃudo",
      },
      "Body Ache": {
        translation: "جان ‌دَردِی",
        pronunciation: "ʤan dʌrdi",
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
      خشک: {
        translation: "Amenorrhea",
        pronunciation: "ə-men-ə-REE-ə",
      },
      صحت: {
        translation: "Health",
        pronunciation: "health",
      },
      "کم خو": {
        translation: "Anemia",
        pronunciation: "Anemia",
      },
      "شاش دان": {
        translation: "Bladder",
        pronunciation: "Bladder",
      },
      "دان باچه دو": {
        translation: "Cervix",
        pronunciation: "Cervix",
      },
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
      if (Array.isArray(result.definitions)) {
        result.definitions.forEach((def) => {
          const definitionContainer = document.createElement("div");
          definitionContainer.innerHTML = `<b>Translation:</b> ${def.translation}<br><b>Pronunciation:</b> ${def.pronunciation}`;
          if (def.partOfSpeech) {
            definitionContainer.innerHTML += `<br>Part of Speech: ${def.partOfSpeech}`;
          }
          resultElement.appendChild(definitionContainer);
  
          if (def.sound) {
            const audioContainer = document.createElement("div");
            audioContainer.classList.add("audio-container");
            const audioLabel = document.createElement("span");
            audioLabel.innerHTML = "Listen:";
            audioLabel.classList.add("audio-label");
            audioContainer.appendChild(audioLabel);
            appendAudioPlayer(audioContainer, def.sound);
            definitionContainer.appendChild(audioContainer);
          }
        });
      } else {
        const translationContainer = document.createElement("div");
        translationContainer.innerHTML = `<b>Translation:</b> ${result.translation}<br><b>Pronunciation:</b> ${result.pronunciation}`;
        resultElement.appendChild(translationContainer);
  
        if (result.sound) {
          const audioContainer = document.createElement("div");
          audioContainer.classList.add("audio-container");
          const audioLabel = document.createElement("span");
          audioLabel.innerHTML = "<b>Listen / تلغظ :</b>";
          audioLabel.classList.add("audio-label");
          audioContainer.appendChild(audioLabel);
          appendAudioPlayer(audioContainer, result.sound);
          translationContainer.appendChild(audioContainer);
        }
      }
    } else {
      resultElement.innerText = "Translation not found.";
    }
  }
  
  function appendAudioPlayer(container, src) {
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = src;
    
    container.appendChild(audio);
  }
}
  )();
