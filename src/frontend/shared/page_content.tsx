import { AccommodationPage } from "#ech1zmk0hm6a";
import { BrandingPage } from "./../pages/branding";
import { getAccommodationByPath } from "#2ajuusged5jk";
import { HomePage } from "#hyj0eo4p9hev";
import { canonicalPath, routeExists } from "#y4hpoyu2xriv";
import { ERROR_STATUSES, errorRoutePath } from "@trebired/frontend";
import { SiteErrorPage } from "./../pages/error";

const BRANDING_PATH = "/znacka";

export function PageContent({ path }: { path: string }) {
  const resolved = canonicalPath(path);
  const errorStatus = ERROR_STATUSES.find((status) => errorRoutePath(status) === resolved);
  if (errorStatus) return <SiteErrorPage status={errorStatus} />;
  if (!routeExists(resolved)) return <SiteErrorPage status={404} />;
  if (resolved === BRANDING_PATH) return <BrandingPage />;
  const accommodation = getAccommodationByPath(resolved);
  return accommodation ? <AccommodationPage accommodation={accommodation} /> : <HomePage />;
}
