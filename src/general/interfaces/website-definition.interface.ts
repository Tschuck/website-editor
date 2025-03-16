import { WebsitePage } from "@/general/interfaces/website-page.interface";

export interface WebsiteDefinition {
  pages: WebsitePage[];
  phoneNumber: string;
  title: string;
  id: string;
}
