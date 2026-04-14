import { useState } from "react";
import SectionWatermark from "@/components/SectionWatermark";
import { motion, AnimatePresence } from "framer-motion";


const tabs = [
  {
    id: "operations",
    label: "מפעילי חדר בקרה | Operations & CRO",
    content: (
      <div className="text-start space-y-6">
        <p className="text-3xl md:text-4xl font-bold text-secondary text-right" dir="rtl">מפעילי חדר בקרה | Operations & CRO</p>

        <p className="text-lg md:text-xl text-foreground leading-[1.8] font-medium">
          הפעלה של מתקני אנרגיה מחדר הבקרה ובשטח, 24/7 - עם צוות מפעילים מקומיים ובינ״ל, תגבור משמרות, מעטפת ניהול מלאה ותיאום מלא מול צוות הלקוח.
          <br />
          הלקוח לא צריך לדאוג לדבר - רק לשבץ משמרות.
        </p>

        <div>
          <p className="font-bold text-secondary mb-2">אחריות CRO בחדר בקרה:</p>
          <ul className="space-y-1.5 text-foreground/80 leading-[1.8]">
            {[
              "ניטור תהליכים, טרנדים והתראות דרך DCS",
              "ביצוע פעולות שגרה ותיאום עם מפעילי שטח",
              "סיוע באתחולים, כיבויים ומעברי מצב (בהרשאה)",
              "תגובה לאזעקות ומצבים לא שגרתיים לפי מטריצת הסלמה",
              "תיעוד משמרת, לוגים, העברת קו ברורה",
              "עמידה מלאה ב‑Safety, Permit‑to‑Work ונהלי האתר",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2">מודל העסקה חיצוני מקצה‑לקצה (Outsourced Employment Model):</p>
          <ul className="space-y-1.5 text-foreground/80 leading-[1.8]">
            {[
              "איתור, מיון והתאמת מפעילים ייעודיים לחדר בקרה",
              "העסקה מלאה לפי דיני עבודה בישראל",
              "רילוקיישן מלא למפעילים מחו״ל (טיסות, דיור, רכב/הסעות, סים)",
              "ניהול שכר, HR מקומי, רווחה וטיפול במקרים חריגים",
              "קהילת מפעילים פעילה – יציבות ושימור ידע",
              "Governance: נקודת קשר אחת, חיוב מרוכז חודשי",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2">גמישות משמרות וכוח‑אדם:</p>
          <ul className="space-y-1.5 text-foreground/80 leading-[1.8]">
            {[
              "שילוב מפעילים מקומיים + בינ״ל לפי הצורך",
              "תגבור משמרות לילה / שבתות / חגים",
              "שחרור מפעילי לקוח בחגים ושבתות",
              "מעטפת אדמיניסטרטיבית מלאה: משמרות, נוכחות, דוחות, שכר, רווחה, חופשות מולדת",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2">אחריות הלקוח:</p>
          <p className="text-foreground/80 leading-[1.8]">
            לקבוע משימות ולהנחות תפעולית - שאר התעסוקה/ניהול/אדמיניסטרציה עלינו.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "commissioning",
    label: "הרצה | Commissioning & Start‑Up",
    content: (
      <div className="text-start space-y-6">
        <p className="text-3xl md:text-4xl font-bold text-secondary text-right" dir="rtl">הרצה | Commissioning & Start‑Up</p>

        <p className="text-foreground/80 leading-[1.8]">
          זהו השלב שמחבר בין סיום ההקמה לבין תחילת התפעול בפועל. זהו תהליך שיטתי שמוודא שכל המערכות - חשמל, מכניקה, בקרה ותהליכים - פועלות יחד בצורה מלאה, יציבה ובהתאם לתכנון. ברגיד מובילים את התהליך מקצה לקצה, עם ניסיון של למעלה מ־20 שנה בפרויקטים מורכבים בתחנות כוח, מתקני אנרגיה ותעשייה כבדה.
        </p>

        <p className="text-foreground/80 leading-[1.8]">
          התהליך משלב עבודה מוקדמת לצד פעילות אינטנסיבית בשטח, מתוך מטרה לזהות ולפתור פערים בזמן אמת, לצמצם תקלות לפני המסירה ולהבטיח מעבר מהיר וחלק לתפעול מלא (COD). הגישה של רגיד מבוססת על אינטגרציה מלאה בין כל הגורמים בפרויקט - מה שמאפשר לקצר לוחות זמנים, לשפר אמינות ולהביא את המערכת לביצועים מלאים בצורה מדויקת ובטוחה.
        </p>

        <div>
          <p className="font-bold text-secondary mb-2">מה כולל תהליך הקומישנינג?</p>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2">שלב ההכנה</p>
          <ul className="space-y-1.5 text-foreground/80 leading-[1.8]">
            {[
              "בדיקות תיעוד",
              "סגירת חוסרים ופערים",
              "בניית תיק קומישנינג מסודר",
              "תיאום עם צוותי ההנדסה וההקמה",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2">ביצוע בשטח</p>
          <ul className="space-y-1.5 text-foreground/80 leading-[1.8]">
            {[
              "בדיקות התקנה (MC)",
              "ניהול Punch Lists",
              "הרצות קרות",
              "הרצות חמות",
              "אימות ביצועים ועמידה ב-KPIs",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-secondary mb-2">מסירה והעברה לתפעול</p>
          <ul className="space-y-1.5 text-foreground/80 leading-[1.8]">
            {[
              "מבחני קבלה",
              "מסירה מסודרת",
              "ליווי עד הפעלה מלאה (COD)",
              "טיפול בריג'קטים עד סגירה מלאה",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
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
          <div className="inline-flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                dir="rtl"
                className={`relative px-8 py-4 md:px-10 md:py-5 rounded-xl text-sm md:text-lg font-semibold transition-all duration-200 border-2 ${
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
                            {t.label.split('|')[0].trim()}
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
