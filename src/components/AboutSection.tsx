import SectionWatermark from "@/components/SectionWatermark";
import about1 from "@/assets/about-1.png";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.png";

const rows = [
  {
    imageLeft: true,
    image: about1,
    paragraphs: [
      "רגיד מובילה בתחום ניהול פרויקטים מורכבים בישראל, ומתמחה בניהול, תכנון, פיקוח ובינוי של מתקנים תעשייתיים ופרויקטי תשתית עתירי מורכבות. החברה פועלת קרוב לשני עשורים ומספקת ללקוחותיה מעטפת שירות מלאה – משלב התכנון הראשוני, דרך ניהול והובלת הביצוע, ועד למסירת הפרויקט ללקוח.",
      "רגיד מעניקה ללקוחותיה את הביטחון שהפרויקט שלהם מנוהל על ידי צוות מקצועי ומנוסה, כאשר כל שלב מתוכנן בקפידה במטרה לעמוד ביעדי איכות, לו״ז ותקציב – באופן מדויק, מבוקר ומקצועי.",
    ],
  },
  {
    imageLeft: false,
    image: about2,
    paragraphs: [
      "החברה הוקמה בשנת 2003 על ידי רפי גייזנברג, מתוך מטרה להציב סטנדרט מקצועי גבוה בתחום ניהול הפרויקטים המורכבים. לאורך השנים ביססה רגיד את מעמדה כאחד הגופים המקצועיים המובילים בישראל, עם ניסיון בניהול פרויקטים בקנה מידה גדול ובהתאם לסטנדרטים בינלאומיים מחמירים.",
      "ביכולתנו לספק ללקוחותינו שירות מדויק, איכותי ומקצועי, תוך עמידה מלאה ביעדים שהוגדרו לפרויקט.",
      "אנו שואפים להיות הטובים ביותר בתחומנו, ולהוביל כל פרויקט באחריות, ביסודיות ובשקיפות מלאה.",
    ],
  },
  {
    imageLeft: true,
    image: about3,
    paragraphs: [
      "רגיד רואה בטכנולוגיה מנוע צמיחה מרכזי ואמצעי ליצירת יתרון תחרותי משמעותי עבור לקוחותיה. החברה פועלת בחזית החדשנות, משלבת ידע מתקדם, מתודולוגיות עבודה עדכניות ופתרונות טכנולוגיים מובילים, כדי להבטיח תהליכי עבודה יעילים, שליטה מיטבית בפרויקט ותוצאות ברמה הגבוהה ביותר.",
      "רגיד מלווה את לקוחותיה לאורך כל חיי הפרויקט, תוך ניהול מלא ומרוכז של כלל הדיסציפלינות הנדרשות. ריכוז האחריות במקום אחד מאפשר שליטה גבוהה יותר בתהליך, תיאום מיטבי בין הגורמים המעורבים והפחתת סיכונים תפעוליים וניהוליים.",
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="אודות" />
      <div className="container-narrow max-w-4xl space-y-16 relative z-10">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              row.imageLeft ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 shrink-0">
              <img
                src={row.image}
                alt=""
                className="w-full h-auto rounded-xl object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              {row.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-foreground/80 text-lg leading-[1.9] mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
