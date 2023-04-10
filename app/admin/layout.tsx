import './globals.css'
import Providers from "./providers";
import { AuthProvider } from "../context/auth";
import { ThemeProvider } from "./context/theme";
import { QueryClient, QueryClientProvider} from 'react-query';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="bg-gray-100" lang="en">
    <body className="h-full">
    <Providers>
      <ThemeProvider>
      <AuthProvider>
      {children}
      </AuthProvider>
      </ThemeProvider>
    </Providers>
    </body>
  </html>
  )
}
