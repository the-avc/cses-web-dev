import { UserProvider } from "@/provider/userProvider";
import { AuthProvider } from "../provider/authProvider";
import { AlertProvider } from "../provider/useAlert";
import Routes from './Routes'
function App() {
  return (
    <AlertProvider>
      <UserProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </UserProvider>
    </AlertProvider>
  )
}

export default App
