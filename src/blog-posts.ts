import Image1 from "@/assets/about-me/Yannic Laderach Unsplash.jpg";
import Image6 from "@/assets/blog/Person Using Pencil Photo.jpg";
import Image2 from "@/assets/birth-aftercare/Baby Holding Wooden Block.jpg";
import Image3 from "@/assets/pregnancy/Baby Holding Finger.jpg";
import Image4 from "@/assets/tcm/Person holding pen.jpg";
import Image5 from "@/assets/fertility-cycle-counseling/Clear Measuring Container.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  image: string;
  date: string;
}

export const blogPosts: Record<string, BlogPost[]> = {
  de: [
    {
      slug: "2025-01-15-test",
      title: "Test",
      summary: "Test",
      image: Image6,
      date: "2025-01-15",
    },
    {
      slug: "2025-01-15-test",
      title: "Akupunktur",
      summary:
        "Die Vorteile von Akupunktur während der Schwangerschaft: Was Sie wissen sollten",
      image: Image1,
      date: "2025-01-15",
    },
    {
      slug: "2025-02-14-pregnancy",
      title: "Rückenschmerzen",
      summary:
        "Wie Akupunktur bei Schwangerschaftsbedingten Rückenschmerzen Linderung verschaffen kann",
      image: Image2,
      date: "2025-01-15",
    },
    {
      slug: "2025-02-25-tcm",
      title: "Morgenübelkeit",
      summary:
        "Ein ganzheitlicher Ansatz gegen Morgenübelkeit: TCM-Heilmittel, die wirken",
      image: Image3,
      date: "2025-01-15",
    },
    {
      slug: "2025-03-06-random-1",
      title: "Geburtsvorbereitung",
      summary: "Die Rolle der Akupunktur bei der Geburtsvorbereitung",
      image: Image4,
      date: "2025-01-15",
    },
    {
      slug: "2025-03-06-random-2",
      title: "Rückbildung",
      summary: "Der TCM-Ansatz zur Rückbildung nach der Geburt",
      image: Image5,
      date: "2025-01-15",
    },
  ],
};
