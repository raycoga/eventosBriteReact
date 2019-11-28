import React from "react";
import Event from "./Event";
import { Eventsconsumer } from "../contextAPI/EventContext";

const EventList = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      {/* Donde sea que yo necesite los datos, como por ejemplo en este componente, yo necesito importar el Consumer del Context */}
      <Eventsconsumer>
        {value => {
          return value.events.map(event => {
            return(<Event key={event.id}  event={event}/>)
          });
        }}
      </Eventsconsumer>
    </div>
  );
};

export default EventList;
