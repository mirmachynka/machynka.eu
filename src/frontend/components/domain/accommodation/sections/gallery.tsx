import { ExpandableImage, Section } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

type GalleryProps = {
  images: string[];
  name: string;
  tr: I18nTranslator;
};

export function AccommodationGallery({ images, name, tr }: GalleryProps) {
  if (images.length === 0) return null;

  return (
    <Section>
    <div className="tbf-container column gap-lg">
    <h2 className="section-title">{tr("accommodationPage.galleryTitle")}</h2>

    <div className="accommodation-gallery-grid">
    {images.map((image, index) => (
          <ExpandableImage key={image} src={image} alt={name} images={images} index={index} className="accommodation-gallery-item" />
    ))}
    </div>
    </div>
    </Section>
  );
}
