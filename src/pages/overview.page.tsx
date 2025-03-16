import { Page } from "@/general/components/page.component";
import { WebsiteDefinition } from "@/general/interfaces/website-definition.interface";

import { websiteDefinitionStore } from "@/general/utils/website-definition.store";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export function OverviewPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [definitionToDelete, setDefinitionToDelete] = useState<
    WebsiteDefinition | undefined
  >();

  const definitions = websiteDefinitionStore.list();

  function onReaderLoad(event: ProgressEvent<FileReader>) {
    if (typeof event.target?.result !== "string") {
      return;
    }

    const definition: WebsiteDefinition = JSON.parse(event.target.result);
    websiteDefinitionStore.save(definition);
    navigate(`/${definition.id}`);
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    const uploadedFile = event.target.files?.item(0);
    if (!uploadedFile) {
      return;
    }

    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(uploadedFile);
  }

  return (
    <Page className="">
      {definitions.map((definition) => {
        return (
          <div
            className="flex items-center justify-center flex-grow w-full gap-4 mb-4"
            key={definition.id}
          >
            <Link
              className="w-full p-4 border border-gray-400 rounded-lg hover:bg-gray-200 hover:cursor-pointer"
              to={`/${definition.id}`}
            >
              <p>{definition.title}</p>
            </Link>
            <div>
              <button
                className="p-2 text-white bg-red-600 rounded-lg hover:bg-red-800"
                onClick={() => setDefinitionToDelete(definition)}
              >
                {t("delete")}
              </button>
            </div>
          </div>
        );
      })}

      <div className="p-4 mx-16 mt-16 bg-gray-100 border border-gray-600 rounded-lg">
        <p className="mb-4">{t("import-definition")}</p>
        <input id="file" type="file" className="" onChange={onFileChange} />
      </div>

      {definitionToDelete && (
        <div>
          <p className="mb-4">
            {t("really-delete")}: {definitionToDelete.title}
          </p>
          <button
            className="p-2 text-white bg-red-600 rounded-lg hover:bg-red-800"
            onClick={() => {
              websiteDefinitionStore.delete(definitionToDelete.id);
              setDefinitionToDelete(undefined);
            }}
          >
            {t("delete")}
          </button>
        </div>
      )}
    </Page>
  );
}
