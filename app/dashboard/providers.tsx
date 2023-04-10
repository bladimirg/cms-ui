"use client";
import * as React from "react";
import { ReactQueryDevtools } from 'react-query/devtools'
import {  QueryClient, QueryClientProvider} from 'react-query'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
