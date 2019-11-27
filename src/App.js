import React from "react";
import CategoryProvider from "./contextAPI/CategoryContext";
import EventsProvider from "./contextAPI/EventContext";

import Form from "./components/Form";
import Header from "./components/Header";
import EventList from "./components/EventList";

/*primer  comit*/
function App() {
  return (
    <EventsProvider>
      <CategoryProvider>
        {/* Usualmente mi provider siempre rodeara a los componentes, asi de esta forma los datos que estan en el componente de catagorias estaran disponibles en los componentes encerrados por el, como por ejemplo en el Header */}
        <Header />
        <div className="uk-container">
          <Form />
          <EventList />
        </div>
      </CategoryProvider>
    </EventsProvider>
  );
}

export default App;
