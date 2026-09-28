import { ExpandableImage, PageBand } from "@trebired/frontend/react";
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
    <div className="tbf-column tbf-gap-lg">
    <h2 className="tbf-heading--section">{tr("accommodationPage.galleryTitle")}</h2>

    <div className="tbf-grid tbf-cols-3 tbf-gap-sm">
    {images.map((image, index) => (
          <ExpandableImage
          key={image}
          src={image}
          alt={name}
          images={images}
          index={index}
          className="tbf-width-full"
          ratio="4 / 3"
          />
    ))}
    </div>
    </div>
    </PageBand>
  );
}
