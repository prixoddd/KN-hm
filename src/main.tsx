import { Provider } from 'react-redux'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import { App } from '@/App'
import { EntrancePage } from '@/components/entrancePage/entrancePage'
import { store } from '@/store'
import { createRoot } from 'react-dom/client'

const url = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'
const badUrl = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0aaaa'

const router = createHashRouter([
  {
    element: <EntrancePage />,
    path: '/',
  },
  { element: <App url={url} />, path: '/app' },
  { element: <App url={badUrl} />, path: '/appWithError' },
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
