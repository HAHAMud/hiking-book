import { Route, Routes } from 'react-router-dom';
import {
  HomeScreen,
  RecordScreen,
  AnalysisScreen,
  PrepareScreen,
} from '@/pages';
import AppBar from '@/components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/record" element={<RecordScreen />} />
        <Route path="/analysis" element={<AnalysisScreen />} />
        <Route path="/prepare" element={<PrepareScreen />} />
      </Routes>
    </div>
  );
}

export default App;
