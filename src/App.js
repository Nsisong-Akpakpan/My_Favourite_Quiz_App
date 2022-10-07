import {BrowserRouter as Router,
        Routes,
        Route} from "react-router-dom";
import {Container, Box, Typography, AppBar} from "@mui/material";  
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";






function App() {
  return (
      <Router>
        <Container maxWidth="sm" textAlign="Center">
        <AppBar>
              <Typography textAlign="center" variant="h2" fontWeight="bold">QUIZ APP</Typography>
        </AppBar>
          <Box textAlign="center" mt={5} >
            <Routes>
              <Route path="/" element={<Settings/>} />
              <Route path="/questions" element={<Questions/>} />
              <Route path="/finalscreen" element={<FinalScreen/>} />
            </Routes>
          </Box>
        </Container>

      </Router>
    
  );
}

export default App;
