import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { RecordScreen, AnalysisScreen, PrepareScreen } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/record',
    element: <RecordScreen />,
  },
  {
    path: '/prepare',
    element: <PrepareScreen />,
  },
  {
    path: '/analysis',
    element: <AnalysisScreen />,
  },
]);
