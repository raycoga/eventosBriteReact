import React from "react";

import { Eventsconsumer } from "../contextAPI/EventContext";

const EventList = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      {/* Donde sea que yo necesite los datos, como por ejemplo en este componente, yo necesito importar el Consumer del Context */}
      <Eventsconsumer>
        {value => {
          return <p>Hola</p>;
        }}
      </Eventsconsumer>
    </div>
  );
};

export default EventList;
