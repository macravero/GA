import React, { useState } from "react";
import View from "./View";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Bot from "./components/Bot/Bot";
import ViewsProvider from "./context/ViewsContext/ViewsContext";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [counter, setCounter] = useState(5);

  return (
    <div className="App">
      <ViewsProvider>
        {counter < 5 && <Intro counter={counter} setCounter={setCounter} />}
        {counter >= 5 && <Navbar />}
        {counter >= 5 && <View />}
        {counter >= 5 && <Footer />}
        {counter >= 5 && <Bot />}
      </ViewsProvider>
    </div>
  );
};

export default App;
