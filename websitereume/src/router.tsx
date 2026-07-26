import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

let queryClient: QueryClient | undefined;

export const getRouter = () => {
  // Reuse the same QueryClient on the client to avoid hydration mismatches
  // and infinite re-fetch loops. On the server a fresh instance is created
  // per request (SSR), but on the client we want a stable singleton.
  if (typeof window !== "undefined") {
    if (!queryClient) {
      queryClient = new QueryClient();
    }
  } else {
    queryClient = new QueryClient();
  }

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
  });

  return router;
};
