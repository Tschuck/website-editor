export enum LayoutType {
  bigImage = "big-image-right",
  cards = "cards",
  imageTop = "image-top",
  threeImagesLeft = "three-images-left",
  threeImagesRight = "three-images-right",
  threeImagesTop = "three-images-top",
  twoImagesLeft = "two-images-left",
  twoImagesRight = "two-images-right",
  textOnly = "text-only",
}

export enum TextDisplayType {
  one = "one",
  sideBySide = "side-by-side",
}

export interface Image {
  downloadLink: string;
  referenceLink: string;
  description: string;
}

export interface Card extends WebsitePage {
  summary: string;
}

export interface WebsitePage {
  id: string;
  layout: LayoutType;
  textDisplay: TextDisplayType;
  slug: string;
  title: string;
  summary: string;
  config: {
    buttonLink: string;
    cards: Card[];
    image1: Image;
    image2: Image;
    image3: Image;
    markdown: string;
    markdown2: string;
  };
}
