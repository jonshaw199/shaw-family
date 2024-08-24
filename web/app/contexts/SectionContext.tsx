import React, { createContext, useContext, useState } from "react";

type SectionContextProps = {
  sectionId: string;
  setSectionId: (_: string) => void;
};

const defaultProps: SectionContextProps = {
  sectionId: "",
  setSectionId: () => {},
};

const SectionContext = createContext<SectionContextProps>(defaultProps);

type SectionProviderProps = {
  defaultSectionId?: SectionContextProps["sectionId"];
  children: React.ReactNode;
};

export function SectionProvider({
  defaultSectionId = "",
  children,
}: SectionProviderProps) {
  const [sectionId, setSectionId] = useState(defaultSectionId);

  return (
    <SectionContext.Provider value={{ sectionId, setSectionId }}>
      {children}
    </SectionContext.Provider>
  );
}

export const useSectionContext = () => useContext(SectionContext);
