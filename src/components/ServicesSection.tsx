import { useState } from "react";
import SectionWatermark from "@/components/SectionWatermark";
import { motion, AnimatePresence } from "framer-motion";


const tabs = [
  {
    id: "operations",
    label: "מפעילי חדר בקרה",
    content: (
      <div className="text-start space-y-6">
        <p className="text-3xl md:text-4xl font-bold text-secondary text-right" dir="rtl">מפעילי חדר בקרה | Operations & CRO</p>

        <p className="text-foreground/80 leading-[1.8]" dir="rtl">
          הפעלת מתקני אנרגיה מחדר הבקרה ובשטח, 24/7, באמצעות צוות מפעילים מקומיים ובינלאומיים, כולל תגבור משמרות ומעטפת ניהול מלאה בתיאום שוטף עם צוות הלקוח. הלקוח נדרש רק לשיבוץ משמרות, קביעת משימות והנחיה תפעולית — בעוד שכל תחומי ההעסקה, הניהול והאדמיניסטרציה מנוהלים על ידינו.
        </p>

        <div>
          <p className="font-bold text-secondary mb-2" dir="rtl">אחריות CRO בחדר בקרה</p>
          <p className="text-foreground/80 leading-[1.8]" dir="rtl">
            אחריות ה-CRO בחדר הבקרה כוללת ניטור שוטף של תהליכים, טרנדים והתראות דרך מערכת ה-DCS, לצד ביצוע פעולות שגרה ותיאום רציף עם מפעילי השטח. במסגרת התפקיד נדרש סיוע באתחולים, כיבויים ומעברי מצב בהתאם להרשאות, וכן תגובה לאזעקות ומצבים לא שגרתיים לפי מטריצת הסלמה מוגדרת. בנוסף, התפקיד כולל תיעוד מלא של המשמרת והלוגים, העברת קו מסודרת בין משמרות, והקפדה מלאה על נהלי בטיחות, Permit-to-Work ונהלי האתר.
          </p>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2" dir="rtl">מודל ההעסקה החיצוני מקצה־לקצה</p>
          <p className="text-foreground/80 leading-[1.8]" dir="rtl">
            המודל כולל איתור, מיון והתאמה של מפעילים ייעודיים לחדר הבקרה, לצד העסקה מלאה בהתאם לדיני העבודה בישראל. במקרים של גיוס מחו״ל, ניתן מענה מלא לתהליך הרילוקיישן, כולל טיסות, דיור, רכב או הסעות וסים. בנוסף, מתבצע ניהול שוטף של שכר, HR מקומי, רווחה וטיפול במקרים חריגים, תוך תחזוקת קהילת מפעילים פעילה שמסייעת ליציבות ושימור ידע. כל הפעילות מנוהלת תחת Governance מסודר, עם נקודת קשר אחת וחיוב חודשי מרוכז.
          </p>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2" dir="rtl">גמישות משמרות וכוח־אדם</p>
          <p className="text-foreground/80 leading-[1.8]" dir="rtl">
            המודל מאפשר גמישות מלאה בניהול המשמרות וכוח האדם, תוך שילוב בין מפעילים מקומיים ובינלאומיים בהתאם לצורך. ניתן לתגבר משמרות לילה, שבתות וחגים, ואף לאפשר שחרור של מפעילי הלקוח בזמנים אלה. בנוסף, ניתנת מעטפת אדמיניסטרטיבית מלאה הכוללת ניהול משמרות, נוכחות, דוחות, שכר, רווחה ותיאום חופשות מולדת, כך שהפעילות מתנהלת באופן רציף, מסודר וללא עומס תפעולי על הלקוח.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "commissioning",
    label: "קומישנינג והרצה",
    content: (
      <div className="text-start space-y-6">
        <p className="text-3xl md:text-4xl font-bold text-secondary text-right" dir="rtl">קומישנינג והרצה | Commissioning & Start‑Up</p>

        <p className="text-foreground/80 leading-[1.8]" dir="rtl">
          זהו השלב שמחבר בין סיום ההקמה לבין תחילת התפעול בפועל. זהו תהליך שיטתי שמוודא שכל המערכות - חשמל, מכניקה, בקרה ותהליכים - פועלות יחד בצורה מלאה, יציבה ובהתאם לתכנון. ברגיד מובילים את התהליך מקצה לקצה, עם ניסיון של למעלה מ־20 שנה בפרויקטים מורכבים בתחנות כוח, מתקני אנרגיה ותעשייה כבדה.
        </p>

        <p className="text-foreground/80 leading-[1.8]" dir="rtl">
          התהליך משלב עבודה מוקדמת לצד פעילות אינטנסיבית בשטח, מתוך מטרה לזהות ולפתור פערים בזמן אמת, לצמצם תקלות לפני המסירה ולהבטיח מעבר מהיר וחלק לתפעול מלא (COD). הגישה של רגיד מבוססת על אינטגרציה מלאה בין כל הגורמים בפרויקט - מה שמאפשר לקצר לוחות זמנים, לשפר אמינות ולהביא את המערכת לביצועים מלאים בצורה מדויקת ובטוחה.
        </p>

        <div>
          <p className="font-bold text-secondary mb-2" dir="rtl">שלב ההכנה</p>
          <p className="text-foreground/80 leading-[1.8]" dir="rtl">
            בשלב ההכנה מתבצעות בדיקות תיעוד מקיפות, זיהוי וסגירת חוסרים ופערים, בניית תיק קומישנינג מסודר ותיאום הדוק עם צוותי ההנדסה וההקמה, כדי להבטיח מוכנות מלאה לעלייה לשטח.
          </p>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2" dir="rtl">ביצוע בשטח</p>
          <p className="text-foreground/80 leading-[1.8]" dir="rtl">
            בשלב הביצוע מתבצעות בדיקות התקנה (MC), ניהול שוטף של Punch Lists, הרצות קרות ולאחר מכן הרצות חמות, תוך בקרה ואימות ביצועים בהתאם ליעדים ול-KPIs שהוגדרו מראש.
          </p>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2" dir="rtl">מסירה והעברה לתפעול</p>
          <p className="text-foreground/80 leading-[1.8]" dir="rtl">
            בשלב המסירה וההעברה לתפעול מתבצעים מבחני קבלה, מסירה מסודרת של המערכות, ליווי צמוד עד להפעלה מלאה (COD), וטיפול בריג'קטים ובחריגות עד לסגירה מלאה ולהבטחת תפקוד יציב ורציף של המתקן.
          </p>
        </div>
      </div>
    ),
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("operations");

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="שירותים" />
      <div className="container-narrow relative z-10">
        <p className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10" dir="rtl">רגיד פועלת בשני תחומים עיקריים:</p>

        <div className="flex justify-center mb-10">
          <div className="flex gap-4 w-full max-w-4xl items-stretch">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                dir="rtl"
                className={`flex-1 relative px-8 py-4 md:px-10 md:py-5 rounded-xl text-sm md:text-lg font-semibold transition-all duration-200 border-2 ${
                  activeTab === tab.id
                    ? "bg-[hsl(var(--toggle-active))] text-white shadow-lg border-[hsl(var(--toggle-active))]"
                    : "bg-card text-muted-foreground border-border hover:bg-primary/15 hover:text-primary hover:border-primary/50 shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card with Content */}
        <div className="floating-card bg-card/60 backdrop-blur-sm p-8 md:p-12">
          {/* Content */}
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tab.content}

                    {/* Mini navigation buttons */}
                    <div className="mt-10 pt-6 border-t border-primary/40">
                      <div className="flex items-center justify-center gap-3">
                        {tabs.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => {
                              setActiveTab(t.id);
                              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            dir="rtl"
                            className={`flex-1 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 border ${
                              activeTab === t.id
                                ? "bg-[hsl(var(--toggle-active))] text-white border-[hsl(var(--toggle-active))]"
                                : "bg-card text-muted-foreground border-border hover:bg-primary/15 hover:text-primary hover:border-primary/50"
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
