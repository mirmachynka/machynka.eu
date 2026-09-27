import { ExpandableImage, Frame, PageBand } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

type GalleryProps = {
  images: string[];
  name: string;
  tr: I18nTranslator;
};

export function AccommodationGallery({ images, name, tr }: GalleryProps) {
  if (images.length === 0) return null;

  return (
    <PageBand>
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("accommodationPage.galleryTitle")}</h2>

    <div className="grid auto-md gap-sm">
    {images.map((image, index) => (
          <Frame key={image} ratio="4 / 3">
          <ExpandableImage
          src={image}
          alt={name}
          images={images}
          index={index}
          className="width-full"
          imageClassName="tbf-frame__cover"
          />
          </Frame>
    ))}
    </div>
    </div>
    </PageBand>
  );
}
