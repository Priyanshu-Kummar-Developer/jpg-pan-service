import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import OneSignal from 'react-onesignal'

async function initOneSignal() {
  await OneSignal.init({
    appId: '34d731a7-3cc6-4245-9bff-788ab8c340d2',
    allowLocalhostAsSecureOrigin: true,
  });
  OneSignal.Notifications.requestPermission();
}
initOneSignal();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)