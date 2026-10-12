import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'lucide-react';

const SmokeTest = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-cream-50">
    <div className="p-8 bg-white rounded-3xl shadow-xl border border-zinc-200 max-w-md text-center">
      <div className="w-16 h-16 bg-forest-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Home className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-bold text-forest-900 mb-4">Room Hub Scaffold</h1>
      <p className="text-zinc-600 mb-8">If you see forest green and this text is centered, the build system is functional.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-12 bg-forest-800 rounded-lg"></div>
        <div className="h-12 bg-gold-500 rounded-lg"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SmokeTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;