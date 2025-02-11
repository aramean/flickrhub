import { handleRoute } from './misc/route';
import './assets/css/base.css';

// Event listeners
addEventListener('load', handleRoute);
addEventListener('popstate', handleRoute);