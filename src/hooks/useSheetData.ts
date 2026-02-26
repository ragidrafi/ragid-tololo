import { useQueries } from "@tanstack/react-query";
import { fetchCSV, type CSVRow } from "@/lib/sheets";
import { siteData } from "@/data/cms";

const SHEETS = {
  hero:     { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiZFtz9pzP50bTgbxugz5yKtncFPLrP5x4gFnMWTLf4_YrH6qdy5vpypJNI6ntOkZZ1Px6g3Ql7BSH/pub?gid=0&single=true&output=csv", hasHeaders: false },
  services: { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiZFtz9pzP50bTgbxugz5yKtncFPLrP5x4gFnMWTLf4_YrH6qdy5vpypJNI6ntOkZZ1Px6g3Ql7BSH/pub?gid=1532772295&single=true&output=csv", hasHeaders: true },
  projects: { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiZFtz9pzP50bTgbxugz5yKtncFPLrP5x4gFnMWTLf4_YrH6qdy5vpypJNI6ntOkZZ1Px6g3Ql7BSH/pub?gid=938675800&single=true&output=csv", hasHeaders: true },
  process:  { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiZFtz9pzP50bTgbxugz5yKtncFPLrP5x4gFnMWTLf4_YrH6qdy5vpypJNI6ntOkZZ1Px6g3Ql7BSH/pub?gid=1375900065&single=true&output=csv", hasHeaders: true },
  about:    { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiZFtz9pzP50bTgbxugz5yKtncFPLrP5x4gFnMWTLf4_YrH6qdy5vpypJNI6ntOkZZ1Px6g3Ql7BSH/pub?gid=981619803&single=true&output=csv", hasHeaders: true },
  footer:   { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiZFtz9pzP50bTgbxugz5yKtncFPLrP5x4gFnMWTLf4_YrH6qdy5vpypJNI6ntOkZZ1Px6g3Ql7BSH/pub?gid=1248903055&single=true&output=csv", hasHeaders: false },
  gallery:  { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiZFtz9pzP50bTgbxugz5yKtncFPLrP5x4gFnMWTLf4_YrH6qdy5vpypJNI6ntOkZZ1Px6g3Ql7BSH/pub?gid=153140412&single=true&output=csv", hasHeaders: true },
};

const STALE_TIME = 5 * 60 * 1000; // 5 minutes

// --- Parsers that convert CSV rows into siteData shapes ---

function parseHero(rows: CSVRow[]) {
  const map: Record<string, string> = {};
  rows.forEach((r) => {
    const key = Object.values(r)[0];
    const val = Object.values(r)[1];
    if (key) map[key] = val ?? "";
  });
  return {
    titleEn1: map.titleEn1 ?? siteData.hero.titleEn1,
    titleEn2: map.titleEn2 ?? siteData.hero.titleEn2,
    titleHe1: map.titleHe1 ?? siteData.hero.titleHe1,
    titleHe2: map.titleHe2 ?? siteData.hero.titleHe2,
    body: map.body ?? siteData.hero.body,
  };
}

function parseServices(rows: CSVRow[]) {
  return rows.map((r) => ({
    icon: r.icon || "Zap",
    title: r.title || "",
    description: r.description || "",
    details: [r.detail1, r.detail2, r.detail3].filter((d) => d && d.trim() !== ""),
  }));
}

function parseProjects(rows: CSVRow[]) {
  return rows.map((r) => ({
    title: r.title || "",
    stat: r.stat || "",
    statLabel: r.statLabel || "",
    description: r.description || "",
    icon: r.icon || "Zap",
  }));
}

function parseProcess(rows: CSVRow[]) {
  return rows.map((r) => {
    const step = parseInt(r.step, 10) || 0;
    return {
      step,
      title: r.title || "",
      subtitle: r.subtitle || "",
      description: r.description || "",
      icon: r.icon || "Compass",
      bullets: r.bullets
        ? r.bullets.split("|").map((b: string) => b.trim())
        : (siteData.process.find(p => p.step === step)?.bullets ?? []),
    };
  });
}

function parseAbout(rows: CSVRow[]) {
  return {
    sections: rows.map((r) => ({
      title: r.title || "",
      paragraphs: [r.paragraph1, r.paragraph2, r.paragraph3].filter(
        (p) => p && p.trim() !== ""
      ),
    })),
  };
}

function parseGallery(rows: CSVRow[]) {
  return rows
    .map((r) => ({
      number: Number.parseInt(String(r.number ?? ""), 10),
      text: (r.text ?? "").trim(),
    }))
    .filter(
      (item) =>
        !Number.isNaN(item.number) &&
        item.number >= 1 &&
        item.number <= siteData.gallery.length &&
        item.text.length > 0
    )
    .sort((a, b) => a.number - b.number);
}

function parseFooter(rows: CSVRow[]) {
  const map: Record<string, string> = {};
  rows.forEach((r) => {
    const key = Object.values(r)[0];
    const val = Object.values(r)[1];
    if (key) map[key] = val ?? "";
  });
  return {
    ...siteData.footer,
    phone: map.phone ?? siteData.footer.phone,
    email: map.email ?? siteData.footer.email,
    address: map.address ?? siteData.footer.address,
    linkedin: map.linkedin ?? siteData.footer.linkedin,
    pharmaWebsite: map.pharmaWebsite ?? siteData.footer.pharmaWebsite,
    copyright: map.copyright ?? siteData.footer.copyright,
  };
}

export type SiteData = typeof siteData;

export function useSheetData(): SiteData {
  const keys = Object.keys(SHEETS) as (keyof typeof SHEETS)[];

  const results = useQueries({
    queries: keys.map((key) => ({
      queryKey: ["sheet", key],
      queryFn: () => fetchCSV(SHEETS[key].url, SHEETS[key].hasHeaders),
      staleTime: STALE_TIME,
      retry: 1,
    })),
  });

  // Build a map of successfully fetched data
  const dataMap: Record<string, CSVRow[] | undefined> = {};
  keys.forEach((key, i) => {
    dataMap[key] = results[i].data;
  });

  const parsedGallery = dataMap.gallery ? parseGallery(dataMap.gallery) : [];

  return {
    header: siteData.header, // stays static
    hero: dataMap.hero ? parseHero(dataMap.hero) : siteData.hero,
    services: dataMap.services && dataMap.services.length > 0 ? parseServices(dataMap.services) : siteData.services,
    projects: dataMap.projects && dataMap.projects.length > 0 ? parseProjects(dataMap.projects) : siteData.projects,
    processWatermark: siteData.processWatermark,
    process: dataMap.process && dataMap.process.length > 0 ? parseProcess(dataMap.process) : siteData.process,
    clients: siteData.clients, // stays static
    gallery: parsedGallery.length >= siteData.gallery.length ? parsedGallery : siteData.gallery,
    about: dataMap.about && dataMap.about.length > 0 ? parseAbout(dataMap.about) : siteData.about,
    contact: siteData.contact, // stays static
    footer: dataMap.footer ? parseFooter(dataMap.footer) : siteData.footer,
  };
}
