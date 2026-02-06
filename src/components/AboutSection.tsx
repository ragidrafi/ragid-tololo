import SectionWatermark from "@/components/SectionWatermark";
import aboutBanner from "@/assets/about-banner.jpg";

const sections = [
  {
    title: "אודות רגיד",
    paragraphs: [
      "רגיד מובילה בתחום ניהול פרויקטים מורכבים בישראל, ומתמחה בניהול, תכנון, פיקוח ובינוי של מתקנים תעשייתיים ופרויקטי תשתית עתירי מורכבות. החברה פועלת קרוב לשני עשורים ומספקת ללקוחותיה מעטפת שירות מלאה – משלב התכנון הראשוני, דרך ניהול והובלת הביצוע, ועד למסירת הפרויקט ללקוח.",
      "רגיד מעניקה ללקוחותיה את הביטחון שהפרויקט שלהם מנוהל על ידי צוות מקצועי ומנוסה, כאשר כל שלב מתוכנן בקפידה במטרה לעמוד ביעדי איכות, לו״ז ותקציב – באופן מדויק, מבוקר ומקצועי.",
      "החברה הוקמה בשנת 2003 על ידי רפי גייזנברג, מתוך מטרה להציב סטנדרט מקצועי גבוה בתחום ניהול הפרויקטים המורכבים. לאורך השנים ביססה רגיד את מעמדה כאחד הגופים המקצועיים המובילים בישראל, עם ניסיון בניהול פרויקטים בקנה מידה גדול ובהתאם לסטנדרטים בינלאומיים מחמירים.",
    ],
  },
  {
    title: "המשימה שלנו",
    paragraphs: [
      "לספק ללקוחותינו שירות מדויק, איכותי ומקצועי, תוך עמידה מלאה ביעדים שהוגדרו לפרויקט.",
      "אנו שואפים להיות הטובים ביותר בתחומנו, ולהוביל כל פרויקט באחריות, ביסודיות ובשקיפות מלאה.",
    ],
  },
  {
    title: "חזית החדשנות הטכנולוגית",
    paragraphs: [
      "רגיד רואה בטכנולוגיה מנוע צמיחה מרכזי ואמצעי ליצירת יתרון תחרותי משמעותי עבור לקוחותיה. החברה פועלת בחזית החדשנות, משלבת ידע מתקדם, מתודולוגיות עבודה עדכניות ופתרונות טכנולוגיים מובילים, כדי להבטיח תהליכי עבודה יעילים, שליטה מיטבית בפרויקט ותוצאות ברמה הגבוהה ביותר.",
    ],
  },
  {
    title: "מטרייה אחת",
    paragraphs: [
      "רגיד מלווה את לקוחותיה לאורך כל חיי הפרויקט, תוך ניהול מלא ומרוכז של כלל הדיסציפלינות הנדרשות. ריכוז האחריות במקום אחד מאפשר שליטה גבוהה יותר בתהליך, תיאום מיטבי בין הגורמים המעורבים והפחתת סיכונים תפעוליים וניהוליים.",
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="אודות" />
      <div className="container-narrow max-w-5xl relative z-10">
        {/* Long banner image + text layout */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Long vertical image on the right (RTL) */}
          <div className="w-full md:w-2/5 shrink-0">
            <img
              src={aboutBanner}
              alt="צוות רגיד באתר פרויקט"
              className="w-full h-full object-cover rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 min-h-[300px]"
            />
          </div>

          {/* 4 text sections on the left */}
          <div className="w-full md:w-3/5 space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {section.title}
                </h3>
                <div className="green-line mb-4" />
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-foreground/80 text-base leading-[1.9] mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
