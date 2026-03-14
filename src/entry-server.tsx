import { renderToString } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StaticRouter } from "react-router-dom/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes";

export const render = (url: string) => {
  const queryClient = new QueryClient();

  return renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>,
  );
};
