import React, { Fragment } from "react";
import Header from "./components/Header";
import CategoryProvider from './contextAPI/CategoryContext'
/*primer  comit*/
function App() {
  return (
    <CategoryProvider>{/* Usualmente mi provider siempre rodeara a los componentes, asi de esta forma los datos que estan en el componente de catagorias estaran disponibles en los componentes encerrados por el, como por ejemplo en el Header */}
      <Header />
    </CategoryProvider>
  );
}

export default App;
