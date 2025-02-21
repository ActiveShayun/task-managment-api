import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
              position: 'relative',
              top: '80px'
            },
          }}
          reverseOrder={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
