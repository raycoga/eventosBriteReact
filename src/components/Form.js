import React, { Component } from "react";
import { CategoryConsumer } from "../contextAPI/CategoryContext"; /* Para utilizar los datos que provienen del Context Provider, se debera de importar el consumer */
import { Eventsconsumer } from "../contextAPI/EventContext";
class Form extends Component {
  state = {
    name: "",
    category: ""
  };

  getDataEvents(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Eventsconsumer>
        {/* Nuevament, se accede al value atraves de un arrow function */}
        {value => {
          console.log(value);
          return (
            <form onSubmit={e=>{e.preventDefault();value.getEvents(this.state)}}>
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Find your event by name or category
                </legend>
              </fieldset>

              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    onChange={e => this.getDataEvents(e)}
                    name="name"
                    className="uk-input"
                    type="text"
                    placeholder="Name of event or city"
                  />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    onChange={e => this.getDataEvents(e)}
                    className="uk-select"
                    name="category"
                  >
                    <option value="" data-uk-form-selecy>
                      -- Select category --
                    </option>
                    <CategoryConsumer>
                      {/* El consumer funciona con apertura y cierre, y dentro de este elemento es que se tendra acceso a la informacion de el Context, la cual sera llamada usando llaves y obteniendo los datos declarados en el provider, los cuales en este caso son data */}
                      {dataProvider => {
                        /*  Realizando esta arrow function dentro del categoryConsumer, se puede utilizar la data que provinen del context */
                        return dataProvider.category.map(res =>
                          <option
                            key={res.id}
                            value={res.id}
                            data-uk-form-selecy
                          >
                            {res.name_localized}
                          </option>
                        );
                      }}
                    </CategoryConsumer>
                  </select>
                </div>
                <div>
                  <input
                    type="submit"
                    className="uk-button uk-button-danger"
                    value="Find Events"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </Eventsconsumer>
    );
  }
}

export default Form;
