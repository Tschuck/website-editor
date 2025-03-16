import {
  LayoutType,
  TextDisplayType,
  WebsitePage,
} from "@/general/interfaces/website-page.interface";

export function createEmptyPage(title: string): WebsitePage {
  const id = self.crypto.randomUUID();
  const newPage = {
    id: self.crypto.randomUUID(),
    layout: LayoutType.imageTop,
    textDisplay: TextDisplayType.one,
    slug: id,
    summary: "",
    title,
    config: {
      buttonLink: "",
      cards: [],
      image1: {
        description: "",
        downloadLink: "",
        referenceLink: "",
      },
      image2: {
        description: "",
        downloadLink: "",
        referenceLink: "",
      },
      image3: {
        description: "",
        downloadLink: "",
        referenceLink: "",
      },
      markdown: "",
      markdown2: "",
    },
  };

  return newPage;
}
