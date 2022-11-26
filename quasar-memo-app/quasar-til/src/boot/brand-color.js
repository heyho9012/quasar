import { LocalStorage, setCssVar } from "quasar";
import { boot } from "quasar/wrappers";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  const brandColors = [
    { name: "primary", hex: "#1976d2" },
    { name: "secondary", hex: "#26a69a" },
    { name: "accent", hex: "#9c27b0" },
    { name: "dark", hex: "#1d1d1d" },
    { name: "dark-page", hex: "#121212" },
    { name: "positive", hex: "#21ba45" },
    { name: "negative", hex: "#c10015" },
    { name: "info", hex: "#31ccec" },
    { name: "warning", hex: "#f2c037" },
  ];
  brandColors.forEach(({ name, hex }) => {
    if (LocalStorage.getItem(name) != null) {
      const defulatHex = LocalStorage.getItem(name);
      setCssVar(name, defulatHex);
    } else {
      setCssVar(name, hex);
    }
  });
});
