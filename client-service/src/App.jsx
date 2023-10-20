import {Routes, Route} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import {LoginPage} from './pages/LoginPage'
import {HomePage} from './pages/homePage'
import { NotFoundPage } from './pages/NotFoundPage'
import {Layout} from './components/Layout.jsx'




function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/auth' element={<AuthPage />}/>
          <Route path='/*' element={<NotFoundPage />}/>
        </Route>
      </Routes>
      <div className="Body">

      </div>
    </>
  );
}

export default App;
