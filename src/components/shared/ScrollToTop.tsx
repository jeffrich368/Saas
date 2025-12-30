import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the path changes (e.g., from / to /pricing), jump to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything visual
};