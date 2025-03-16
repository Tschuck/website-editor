import { SortableItem } from "@/general/components/sortable-item.component";
import { BaseComponentProps } from "@/general/interfaces/component-props.interface";
import {
  LayoutType,
  TextDisplayType,
  WebsitePage,
} from "@/general/interfaces/website-page.interface";
import { createEmptyPage } from "@/general/utils/page";
import { classNames } from "@/general/utils/utils";
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
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Markdown from "react-markdown";

export interface WebsitePageConfigProps extends BaseComponentProps {
  page: WebsitePage;
  onChange: (page: WebsitePage) => void;
  disableCards?: boolean;
  showSummary?: boolean;
}

export function WebsitePageConfig({
  className,
  page,
  onChange,
  disableCards,
  showSummary,
}: WebsitePageConfigProps) {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<WebsitePage | undefined>();
  const [cardToDelete, setCardToDelete] = useState<WebsitePage | undefined>();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const imageList = [1, 2, 3];

  const { register, handleSubmit, getValues } = useForm<WebsitePage>({
    values: page,
  });

  const onSubmit: SubmitHandler<WebsitePage> = async (
    updatedPage: WebsitePage,
  ) => {
    onChange(updatedPage);
  };

  function addCard() {
    const newCard = createEmptyPage(t("new-card"));
    getValues().config.cards.unshift(newCard);

    onCardUpdate(newCard);
  }

  function deleteCard() {
    if (!cardToDelete) {
      return;
    }

    const currentValues = getValues();

    const cards = currentValues.config.cards;
    const cardIndex = cards.findIndex((card) => card.id === cardToDelete.id);
    cards.splice(cardIndex, 1);

    onChange(currentValues);

    setActiveCard(undefined);
    setCardToDelete(undefined);
  }

  function onCardUpdate(cardUpdate: WebsitePage) {
    const currentValues = getValues();

    const cards = currentValues.config.cards;
    const cardIndex = cards.findIndex((card) => card.id === cardUpdate.id);
    cards[cardIndex] = cardUpdate;

    onChange(currentValues);
  }

  function handleSort(event: DragEndEvent) {
    const { active, over } = event;
    const currentValues = getValues();
    const cards = currentValues.config.cards;

    if (active.id !== over?.id) {
      const oldIndex = cards.findIndex((card) => card.id === active.id);
      const newIndex = cards.findIndex((card) => card.id === over?.id);

      currentValues.config.cards = arrayMove(cards, oldIndex, newIndex);
      onChange(currentValues);
    } else {
      const activePage = cards.find((card) => card.id === active.id);
      if (activePage) {
        setActiveCard(activePage);
        setCardToDelete(undefined);
      }
    }
  }

  return (
    <form
      className={classNames(className, "flex flex-col gap-4 pb-32")}
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-4">
        <p>{t("slug")}</p>
        <input
          className="p-2 border border-gray-400 border-solid rounded-lg"
          type="text"
          {...register("slug")}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p>{t("title")}</p>
        <input
          className="p-2 border border-gray-400 border-solid rounded-lg"
          type="text"
          {...register("title")}
        />
      </div>
      {showSummary && (
        <div className="grid grid-cols-2 gap-4">
          <p>{t("summary")}</p>
          <input
            className="p-2 border border-gray-400 border-solid rounded-lg"
            type="text"
            {...register("summary")}
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <p>{t("layout")}</p>
        <select
          className="p-2 border border-gray-400 border-solid rounded-lg"
          {...register("layout")}
        >
          {Object.values(LayoutType).map((type) => (
            <>
              {(!disableCards || type !== LayoutType.cards) && (
                <option value={type} key={type}>
                  {t(`layout-type.${type}`)}
                </option>
              )}
            </>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <p>{t("text-display")}</p>
        <select
          className="p-2 border border-gray-400 border-solid rounded-lg"
          {...register("textDisplay")}
        >
          {Object.values(TextDisplayType).map((type) => (
            <>
              <option value={type} key={type}>
                {t(`text-display-type.${type}`)}
              </option>
            </>
          ))}
        </select>
      </div>

      {getValues().layout === LayoutType.cards ? (
        <>
          <div>
            <button
              onClick={addCard}
              className="p-2 mt-4 text-white bg-gray-600 rounded-lg"
            >
              {t("add-card")}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleSort}
            >
              <SortableContext
                items={getValues().config.cards}
                strategy={horizontalListSortingStrategy}
              >
                {getValues().config.cards.map((card) => (
                  <SortableItem key={card.id} id={card.id}>
                    <div
                      className={`w-full p-4 border border-gray-400 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${activeCard?.id === card.id ? "font-bold bg-gray-600 text-white" : "hover:bg-gray-300 cursor-pointer"}`}
                      onClick={() => setActiveCard(card)}
                    >
                      <p>{card.title}</p>
                    </div>
                  </SortableItem>
                ))}
              </SortableContext>
            </DndContext>
          </div>
          {activeCard && (
            <div className="p-4 border border-gray-400 rounded-lg">
              <div className="flex flex-col items-end justify-end mb-4">
                <button
                  className="p-2 text-white bg-red-300 rounded-lg hover:bg-red-600"
                  onClick={() => setCardToDelete(activeCard)}
                >
                  {t("delete")}
                </button>

                {cardToDelete && (
                  <div>
                    <p className="mb-4">
                      {t("really-delete")}: {cardToDelete.title}
                    </p>
                    <button
                      className="p-2 text-white bg-red-600 rounded-lg hover:bg-red-800"
                      onClick={deleteCard}
                    >
                      {t("delete")}
                    </button>
                  </div>
                )}
              </div>

              <WebsitePageConfig
                disableCards={true}
                onChange={onCardUpdate}
                page={activeCard}
                showSummary={true}
              />
            </div>
          )}
        </>
      ) : (
        <>
          {getValues().layout !== LayoutType.textOnly &&
            imageList.map((imageIndex) => (
              <div key={imageIndex} className="flex flex-col gap-4">
                <p>
                  {t("image")}: {imageIndex}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <p>{t("image-reference")}</p>
                  <input
                    className="p-2 border border-gray-400 border-solid rounded-lg"
                    type="link"
                    {...register(
                      `config.image${imageIndex}.referenceLink` as unknown as keyof WebsitePage,
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p>{t("image-download")}</p>
                  <input
                    className="p-2 border border-gray-400 border-solid rounded-lg"
                    type="link"
                    {...register(
                      `config.image${imageIndex}.downloadLink` as unknown as keyof WebsitePage,
                    )}
                  />
                </div>
                {getValues().layout === LayoutType.threeImagesTop && (
                  <div className="grid grid-cols-2 gap-4">
                    <p>{t("description")}</p>
                    <input
                      className="p-2 border border-gray-400 border-solid rounded-lg"
                      type="link"
                      {...register(
                        `config.image${imageIndex}.description` as unknown as keyof WebsitePage,
                      )}
                    />
                  </div>
                )}
                <div className="flex justify-end col-span-2 mt-4">
                  <img
                    src={
                      (
                        getValues().config as unknown as Record<
                          string,
                          { downloadLink: string }
                        >
                      )[`image${imageIndex}`].downloadLink
                    }
                    className="w-[300px]"
                  />
                </div>
              </div>
            ))}

          <div className="mb-16 markdown-wrapper">
            <p>{t("markdown")}</p>
            <textarea
              className="w-full p-2 border border-gray-400 border-solid rounded-lg"
              {...register("config.markdown")}
              rows={20}
            />
            {t("preview")}
            <div className="p-4 bg-white border border-gray-400 rounded-lg">
              <Markdown skipHtml={false}>
                {getValues().config.markdown}
              </Markdown>
            </div>
          </div>

          {getValues().textDisplay === TextDisplayType.sideBySide && (
            <div className="mb-16 markdown-wrapper">
              <p>{t("markdown")} 2</p>
              <textarea
                className="w-full p-2 border border-gray-400 border-solid rounded-lg"
                {...register("config.markdown2")}
                rows={20}
              />
              {t("preview")}
              <div className="p-4 bg-white border border-gray-400">
                <Markdown skipHtml={false}>
                  {getValues().config.markdown2}
                </Markdown>
              </div>
            </div>
          )}
        </>
      )}
    </form>
  );
}
