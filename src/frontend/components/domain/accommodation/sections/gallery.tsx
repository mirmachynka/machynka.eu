import { ExpandableImage } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

type GalleryProps = {
  images: string[];
  name: string;
  tr: I18nTranslator;
};

export function AccommodationGallery({ images, name, tr }: GalleryProps) {
  if (images.length === 0) return null;

  return (
    <section data-band="">
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("accommodationPage.galleryTitle")}</h2>

    <div className="grid auto-md gap-sm">
    {images.map((image, index) => (
          <ExpandableImage key={image} src={image} alt={name} images={images} index={index} className="tbf-frame width-full" data-gallery-item="" />
    ))}
    </div>
    </div>
    </section>
  );
}
