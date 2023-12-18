import { Routes, Route } from "react-router-dom"
import SignIn from "./_auth/form/SignIn"
import SignUp from "./_auth/form/SignUp"
import { Home } from "./_root/pages/Home"
import { AuthLayout } from "./_auth/AuthLayout"
import { RootLayout } from "./_root/RootLayout"
function App() {
  return (
    <main>
      <Routes>
        {/* private route  */}
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        {/* public root */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </main>
  )
}

export default App
