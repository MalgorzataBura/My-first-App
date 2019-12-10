import i18n from "i18next";
import en from "./translation/en.json";
import de from "./translation/de.json";
import pl from "./translation/pl.json";

i18n.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "pl",
  resources: {
    en,
    de,
    pl
  }
});
export default i18n;
