import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { VideoContext } from "./contexts/VideoContext";

function App() {
  return (
    <>
    <VideoContext>
     <Layout />
    </VideoContext>
    <GlobalStyles />
    </>
  );
}

export default App;
