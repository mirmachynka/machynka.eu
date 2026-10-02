import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    branding: {
      title: "Brand",
      lead: "The MACHYNKA s.r.o. logo, its clear space and the backgrounds it is allowed on. These rules apply to print and to the web alike.",
      back: "Back to home",
      download: "Download SVG",
      marksTitle: "The logo on a background",
      marks: {
        light: "Light background",
        muted: "Muted background",
        dark: "Dark background",
      },
      clearSpaceTitle: "Clear space",
      clearSpaceText: "Always leave at least the width of the dashed box free around the logo."
      +" No text, photography or other element belongs in that zone.",
      minSizeTitle: "Smallest size",
      minSizeText: "Never place the logo below the height given here. Under it the s.r.o. suffix stops being legible.",
      paletteTitle: "Colours",
      palette: {
        ink: "Base dark",
        accent: "Signal red",
        paper: "Paper",
      },
      rulesTitle: "What not to do with the logo",
      rules: {
        item1: "Do not change the logo's colours or its proportions.",
        item2: "Do not rotate the logo or add shadows or outlines.",
        item3: "Do not place the logo on red or on a busy photograph, the roof of the mark disappears.",
        item4: "Do not use the logo from the old machynka.cz site, it is outdated.",
      },
    },
});
