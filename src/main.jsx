import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/normalize.css/normalize.css';
import './styles/index.css';

import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
