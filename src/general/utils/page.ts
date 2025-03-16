import {
  LayoutType,
  WebsitePage,
} from "@/general/interfaces/website-page.interface";

export function createEmptyPage(title: string): WebsitePage {
  const id = self.crypto.randomUUID();
  const newPage = {
    id: self.crypto.randomUUID(),
    layout: LayoutType.imageTop,
    slug: id,
    summary: "",
    title,
    config: {
      buttonLink: "",
      cards: [],
      image1: {
        downloadLink: "",
        referenceLink: "",
      },
      image2: {
        downloadLink: "",
        referenceLink: "",
      },
      image3: {
        downloadLink: "",
        referenceLink: "",
      },
      markdown: "",
    },
  };

  return newPage;
}
