
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { myOwnStore } from './app/store.js'

createRoot(document.getElementById('root')).render(
  < Provider store={ myOwnStore } >
    <App />
  </ Provider>,
)
