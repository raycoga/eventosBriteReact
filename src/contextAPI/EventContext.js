import React, { Component } from "react";
import axios from "axios";

const EventsContext = React.createContext();
export const Eventsconsumer = EventsContext.Consumer;

class EventsProvider extends Component {
  state = {
    events: []
  };

  order = "date";
  token = "A6ACY53HGVIU72TXGMTV";

  getEvents = async search => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this
      .order}&token=${this.token}&locale=es_ES`;

    const events = await axios.get(url);

    this.setState({ events: events.data.events });
  };

  render() {
    return (
      <EventsContext.Provider
        value={{ events: this.state.events, getEvents: this.getEvents }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;
