import { CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {ListPage, DetailsPage, NewRecord} from "./components";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListPage/>} />
          <Route path='/details' element={<DetailsPage/>} />
          <Route path='/newRecord' element={<NewRecord/>} />
        </Routes>
      </BrowserRouter>  
    </CssBaseline>
  );
}

export default App;
