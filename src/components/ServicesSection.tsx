import { useState } from "react";
import SectionWatermark from "@/components/SectionWatermark";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sun, Server, Factory } from "lucide-react";

const tabs = [
  {
    id: "operations",
    label: "Operations / CRO | מפעילי חדר בקרה",
    content: (
      <div className="text-start space-y-6">
        <p className="text-3xl md:text-4xl font-bold text-secondary text-center">Operate safer, Perform better</p>

        <p className="text-foreground/80 leading-[1.8]">
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
    label: "Commissioning + Start‑Up | הרצה",
    content: (
      <div className="text-start space-y-6">
        <p className="text-3xl md:text-4xl font-bold text-secondary text-center">Operation that works from day 1</p>

        <p className="text-foreground/80 leading-[1.8]">
          אנחנו מובילים את תהליך ההרצה מקצה לקצה - מהרצות קרות ועד חמות, מאינטגרציה ועד קבלה ו־O&M Ready.
        </p>

        <div>
          <p className="font-bold text-secondary mb-2">מה כולל השירות:</p>
          <ul className="space-y-1.5 text-foreground/80 leading-[1.8]">
            {[
              "בדיקות התקנה (מכני / חשמל / בקרה) + דו״ח פערים",
              "ניהול וסגירת Punch‑List",
              "הרצות קרות → הרצות חמות",
              "מבחני קבלה לפי נהלי האתר",
              "מסירה לתפעול (O&M) עם תיעוד מלא וצ'קליסטים",
              "אינטגרציה רב־מערכתית ותיאום ספקים עד יציבות מלאה",
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
        {/* Industries strip */}
        <div className="text-center mb-8">
          <p className="text-lg text-foreground/80 mb-5">למי זה מתאים (מתאים לשני השירותים הרצה והפעלה):</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { icon: Zap, label: "תחנות כוח" },
              { icon: Sun, label: "מתקני אנרגיה" },
              { icon: Server, label: "Data Centers" },
              { icon: Factory, label: "תעשייה כבדה" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={22} />
                </div>
                <span className="text-sm font-medium text-foreground/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-2 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 rounded-xl text-base md:text-lg font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "bg-[hsl(210,70%,50%)] text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="floating-card bg-card/60 backdrop-blur-sm p-8 md:p-12">
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
