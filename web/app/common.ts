export enum Section {
  HOME = "home",
  MEDIA = "media",
  EVENTS = "events",
}

export const sections: {
  [key in Section]: {
    displayName: string;
    background: string;
    darkMode?: boolean;
  };
} = {
  [Section.HOME]: {
    background: "",
    displayName: "Home",
  },
  [Section.EVENTS]: {
    background: "",
    displayName: "Events",
  },
  [Section.MEDIA]: {
    background: "",
    displayName: "Media",
  },
};
