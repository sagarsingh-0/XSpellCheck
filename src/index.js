import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SpellCheck from "./SpellCheck";

import SpellCheckApp from "./SpellCheckApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SpellCheck />
  </StrictMode>
);
