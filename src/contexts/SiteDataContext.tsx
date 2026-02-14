import { createContext, useContext, type ReactNode } from "react";
import { siteData } from "@/data/cms";
import type { SiteData } from "@/hooks/useSheetData";

const SiteDataContext = createContext<SiteData>(siteData);

export const useSiteData = () => useContext(SiteDataContext);

export const SiteDataProvider = ({
  value,
  children,
}: {
  value: SiteData;
  children: ReactNode;
}) => (
  <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>
);
