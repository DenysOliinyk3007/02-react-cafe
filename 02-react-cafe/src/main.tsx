import { createRoot } from "react-dom/client";
import App from './App/App.tsx'
import { StrictMode } from "react";
import "modern-normalize";


createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <StrictMode>
        <App/>
    </StrictMode>
    
  </div>
);