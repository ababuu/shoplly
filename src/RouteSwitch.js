
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import CompleteOrder from './components/CompleteOrder';

import MainContent from './components/MainContent';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='/complete' element={<CompleteOrder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
