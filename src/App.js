// import React from 'react';
// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
// import { useCookies } from "react-cookie";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// const App = () => {
//   const [cookies, setCookie, removeCookie] = useCookies(["user"]);
//   const authToken = cookies.AuthToken;
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path={'/'} element={<Home />} />
//           {authToken && <Route path={'/dashboard'} element={<Dashboard />} />}
//           {authToken && <Route path={'/onboarding'} element={<Onboarding />} />}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App
import Home from './pages/Home'
// import Dashboard from './pages/Dashboard'
// import OnBoarding from './pages/OnBoarding'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken && <Route path="/dashboard" element={<Dashboard />} />}
        {authToken && <Route path="/onboarding" element={<Onboarding />} />}

      </Routes>
    </BrowserRouter>
  )
}

export default App