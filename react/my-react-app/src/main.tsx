import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Practice from './Practice.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    {/* <App /> */}
    <Practice/>
  </>,
)
