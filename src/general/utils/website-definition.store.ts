import { WebsiteDefinition } from "@/general/interfaces/website-definition.interface";

const STORAGE_KEY = "website-definition-";

export class WebsiteDefinitionStore {
  public save(definition: WebsiteDefinition) {
    sessionStorage.setItem(
      `${STORAGE_KEY}${definition.id}`,
      JSON.stringify(definition),
    );
  }

  public list() {
    const definitions: WebsiteDefinition[] = [];

    for (let i = 0; i < sessionStorage.length; i += 1) {
      const key = sessionStorage.key(i);
      if (key?.includes(STORAGE_KEY)) {
        definitions.push(this.get(key.replace(STORAGE_KEY, "")));
      }
    }

    return definitions;
  }

  public get(id: string) {
    const result = sessionStorage.getItem(`${STORAGE_KEY}${id}`);

    if (!result) {
      throw new Error(`Website definition with id ${id} not found.`);
    }

    return JSON.parse(result) as WebsiteDefinition;
  }

  public delete(id: string) {
    sessionStorage.removeItem(`${STORAGE_KEY}${id}`);
  }
}

const websiteDefinitionStore = new WebsiteDefinitionStore();
export { websiteDefinitionStore };
