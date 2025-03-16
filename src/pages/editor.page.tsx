import { useState } from "react";
import { useTranslation } from "react-i18next";

import { WebsitePage } from "@/general/interfaces/website-page.interface";
import { WebsitePageConfig } from "@/general/components/website-page-config.componen";
import { websiteDefinitionStore } from "@/general/utils/website-definition.store";
import { Link, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { createEmptyPage } from "@/general/utils/page";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "@/general/components/sortable-item.component";

export function EditorPage() {
  const id = useParams().id!;
  const { t } = useTranslation();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const definition = websiteDefinitionStore.get(id);
  const [pages, setPages] = useState(definition.pages);
  const [activePage, setActivePage] = useState<WebsitePage | undefined>();
  const [pageConfigActive, setPageConfigActive] = useState(true);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const { register, handleSubmit } = useForm<{
    title: string;
    phoneNumber: string;
  }>({
    values: definition,
  });

  const onSubmit: SubmitHandler<{
    title: string;
    phoneNumber: string;
  }> = async (data) => {
    definition.title = data.title;
    definition.phoneNumber = data.phoneNumber;

    websiteDefinitionStore.save(definition);
  };

  function activatePage(page: WebsitePage) {
    setActivePage(undefined);
    setPageConfigActive(false);
    setShowDeleteButton(false);

    setTimeout(() => setActivePage(page));
  }

  function addPage() {
    const newPage = createEmptyPage(t("new-page"));

    definition.pages = [...pages, newPage];

    setShowDeleteButton(false);
    setPages(definition.pages);
    activatePage(newPage);
    websiteDefinitionStore.save(definition);
  }

  function deleteActivePage() {
    if (!activePage) {
      return;
    }

    const pageIndex = pages.findIndex((page) => page.id === activePage.id);
    definition.pages.splice(pageIndex, 1);

    setPages(definition.pages);
    setActivePage(undefined);
    setPageConfigActive(true);
    setShowDeleteButton(false);

    websiteDefinitionStore.save(definition);
  }

  function onPageUpdate(pageUpdate: WebsitePage) {
    const pageIndex = pages.findIndex((page) => page.id === pageUpdate.id);
    const pagesClone = [...pages];
    pagesClone[pageIndex] = pageUpdate;
    setActivePage(pageUpdate);
    setPages(pagesClone);
    setShowDeleteButton(false);
    definition.pages = pages;
    websiteDefinitionStore.save(definition);
  }

  function exportDefinition() {
    const json = JSON.stringify(definition, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = href;
    link.download = definition.title + ".json";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

  function handleSort(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = pages.findIndex((page) => page.id === active.id);
      const newIndex = pages.findIndex((page) => page.id === over?.id);

      definition.pages = arrayMove(pages, oldIndex, newIndex);
      setPages(definition.pages);
      websiteDefinitionStore.save(definition);
    } else {
      const activePage = pages.find((page) => page.id === active.id);
      if (activePage) {
        activatePage(activePage);
      }
    }
  }

  return (
    <div className="flex flex-row w-full h-full">
      <div
        className="z-10 flex flex-col p-4 bg-gray-200 shadow-lg border-right shrink-0"
        style={{ boxShadow: "0 0 15px 0px lightgray" }}
      >
        <Link to="/">
          {"< "}
          {t("back-to-overview")}
        </Link>

        <div
          className={`mt-4 border-y border p-4 border-gray-600 rounded-lg ${pageConfigActive ? "font-bold bg-gray-600 text-white" : "hover:bg-gray-300 cursor-pointer bg-white"}`}
          onClick={() => {
            setActivePage(undefined);
            setPageConfigActive(true);
          }}
        >
          {t("page-config")}
        </div>
        <div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleSort}
          >
            <SortableContext
              items={pages}
              strategy={verticalListSortingStrategy}
            >
              {pages.map((page, index) => (
                <SortableItem key={page.id} id={page.id}>
                  <div
                    className={`mt-4 border-y border p-4 border-gray-600 rounded-lg  ${activePage?.id === page.id ? "font-bold bg-gray-600 text-white" : "hover:bg-gray-300 cursor-pointer bg-white"}`}
                    key={index}
                    onClick={() => activatePage(page)}
                  >
                    {page.title}
                  </div>
                </SortableItem>
              ))}
            </SortableContext>
          </DndContext>

          <button
            onClick={addPage}
            className="p-2 mt-4 text-white bg-gray-600 rounded-lg"
          >
            {t("add-page")}
          </button>
        </div>

        <div className="flex-grow" />

        <button
          onClick={exportDefinition}
          className="p-2 mt-4 text-white bg-gray-600 rounded-lg"
        >
          {t("export")}
        </button>
      </div>

      <div className="w-full p-4 overflow-x-hidden overflow-y-auto bg-gray-50">
        {pageConfigActive && (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
            onChange={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-4">
              <p>{t("title")}</p>
              <input
                className="p-2 border border-gray-400 border-solid rounded-lg"
                type="text"
                {...register("title")}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <p>{t("phoneNumber")}</p>
              <input
                className="p-2 border border-gray-400 border-solid rounded-lg"
                type="text"
                {...register("phoneNumber")}
              />
            </div>
          </form>
        )}

        <div className="flex-grow px-8 py-4">
          {activePage && (
            <>
              <div className="flex justify-end mb-4">
                <button
                  className="p-2 text-white bg-red-300 rounded-lg hover:bg-red-600"
                  onClick={() => setShowDeleteButton(true)}
                >
                  {t("delete")}
                </button>

                {showDeleteButton && (
                  <div>
                    <p className="mb-4">
                      {t("really-delete")}: {activePage.title}
                    </p>
                    <button
                      className="p-2 text-white bg-red-600 rounded-lg hover:bg-red-800"
                      onClick={deleteActivePage}
                    >
                      {t("delete")}
                    </button>
                  </div>
                )}
              </div>
              <WebsitePageConfig page={activePage} onChange={onPageUpdate} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
