
import './App.css';

import { Routes, Route } from "react-router-dom";
import Menu from './pages/Menu';
import Single from './pages/Single';
import Multi from './pages/Multi';
import Options from './pages/Options';
import ScoreMode from './pages/ScoreMode';
import EndGame from './pages/EndGame';


const App = () => {
  return (



<Routes>
<Route path="/" element={<Menu />} />
<Route path="/single" element={<Single />} />
<Route path="/single/score-mode" element={<ScoreMode />} />
<Route path="/multi" element={<Multi />} />
<Route path="/options" element={<Options />} />
<Route path="/end" element={<EndGame />} />

</Routes>
  );
};
export default App;
