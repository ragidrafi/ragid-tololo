// CMS-Ready Mock Data — replace with API calls to your CMS
export const siteData = {
  header: {
    logo: "אינג׳ בע״מ",
    links: [
      { label: "ראשי", href: "#hero" },
      { label: "שירותים", href: "#services" },
      { label: "פרויקטים", href: "#projects" },
      { label: "אודות", href: "#about" },
      { label: "צור קשר", href: "#contact" },
    ],
  },

  hero: {
    title: "פתרונות הנדסה מתקדמים",
    subtitle: "אנחנו מתכננים ובונים תשתיות שמעצבות את העתיד — מגשרים ועד מגדלים.",
  },

  services: [
    {
      icon: "Zap",
      title: "אנרגיה ותחנות כוח",
      description:
        "ניהול והקמה של תחנות כוח בהספקים של מאות מגה-וואט (MW). החברה מלווה פרויקטים בטכנולוגיות מחזור משולב (Combined Cycle), טורבינות גז וקיטור.",
      details: [
        "שירותים: ניהול חוזים, פיקוח הנדסי, ניהול הרצה (Commissioning) והפעלה.",
        "שותפים: ניסיון עבודה מול ספקי ציוד ראשיים (OEM) כגון Siemens ו-GE.",
      ],
    },
    {
      icon: "Server",
      title: "מרכזי נתונים (Data Centers)",
      description:
        "תכנון והקמת מתקני דאטה סנטר (Hyperscale & Colocation) בשותפות עם חברת ההנדסה הבינלאומית RAMBOLL (EYP).",
      details: [
        "מפרט טכני: תכנון מתקנים בדירוג Tier 4 ובהיקפים של עד 2GW.",
        "התייעלות אנרגטית: יישום טכנולוגיות קירור מתקדמות (Immersion Cooling, Direct-to-Chip) להשגת מדד PUE 1.04.",
      ],
    },
    {
      icon: "Network",
      title: "תשתיות מורכבות ומים",
      description:
        "אינטגרציה של מערכות אנרגיה בתוך מתקני תשתית לאומיים ומפעלי תעשייה.",
      details: [
        "מיקוד: הרצת בלוקים של אנרגיה במתקני התפלה (Desalination) וסנכרון מערכות חשמל ובקרה במפעלים תהליכיים.",
      ],
    },
  ],

  projects: [
    {
      title: "גשר נחל הירדן",
      stat: "340",
      statLabel: "מטר אורך",
      description:
        "גשר תלוי מודרני המשלב עיצוב ארכיטקטוני ייחודי עם הנדסת ביצוע מדויקת.",
      imageKey: "project1",
    },
    {
      title: "מגדל אופיס סנטר",
      stat: "52",
      statLabel: "קומות",
      description:
        "מגדל משרדים בתל אביב עם מערכות חכמות ותקן בנייה ירוקה ברמה הגבוהה ביותר.",
      imageKey: "project2",
    },
    {
      title: "מתקן טיהור מים מרכזי",
      stat: "120K",
      statLabel: "מ״ק ליום",
      description:
        "מתקן מתקדם לטיפול במים ושפכים המשרת אוכלוסייה של למעלה מחצי מיליון תושבים.",
      imageKey: "project3",
    },
  ],

  process: [
    { step: 1, title: "ייעוץ ראשוני", icon: "MessageSquare" },
    { step: 2, title: "תכנון ועיצוב", icon: "PenTool" },
    { step: 3, title: "ביצוע ופיקוח", icon: "HardHat" },
    { step: 4, title: "מסירה ותחזוקה", icon: "CheckCircle" },
  ],

  clients: [
    "חברת חשמל לישראל",
    "נתיבי ישראל",
    "מקורות",
    "רכבת ישראל",
    "שיכון ובינוי",
    "אלקטרה",
  ],

  about: {
    text: "אנחנו חברת הנדסה מובילה עם ניסיון של למעלה מ-25 שנה בתכנון וביצוע פרויקטי תשתית מורכבים. הצוות שלנו מונה יותר מ-150 מהנדסים ומומחים המחויבים למצוינות.",
    highlights: ["25 שנה", "150 מהנדסים", "מצוינות"],
  },

  contact: {
    title: "צור קשר",
    buttonText: "שלח הודעה",
  },

  footer: {
    col1Title: "ניווט",
    col2Title: "שירותים",
    col3Title: "פרטי התקשרות",
    phone: "03-1234567",
    email: "info@eng-co.co.il",
    address: "רחוב הנדסה 12, תל אביב",
    copyright: "© 2026 אינג׳ בע״מ. כל הזכויות שמורות.",
  },
};
