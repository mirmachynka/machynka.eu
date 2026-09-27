import { AccommodationPage } from "#ech1zmk0hm6a";
import { BrandingPage } from "./../pages/branding";
import { getAccommodationByPath } from "#2ajuusged5jk";
import { HomePage } from "#hyj0eo4p9hev";
import { canonicalPath } from "#y4hpoyu2xriv";

const BRANDING_PATH = "/znacka";

export function PageContent({ path }: { path: string }) {
  const resolved = canonicalPath(path);
  if (resolved === BRANDING_PATH) return <BrandingPage />;
  const accommodation = getAccommodationByPath(resolved);
  return accommodation ? <AccommodationPage accommodation={accommodation} /> : <HomePage />;
}
