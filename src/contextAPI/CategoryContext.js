import React, { Component } from "react";
import axios from "axios";
/* 1ero se debe de Crear el context, con esta sintaxis se genera el primer context */
const CategoryContext = React.createContext();

/* El consumer, es aque donde se consumen los datos o  
   o donde se utilizan las funciones                    */
export const CategoryConsumer = CategoryContext.Consumer;
class CategoryProvider extends Component {
  /* El provider es aquel componente donde se crean los datos
    los states principales o las funciones principales.       */

  token =
    "C6CVXHFP2YKOKK2ZLJYY"; /* cada request que se haga sera autenticado con este token */

  state = {
    category: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES/`;

    let categories = await axios.get(url);

    console.log(categories.data.categories);

    this.setState({category:categories.data.categories})
  };

  render() {
    /* Es esta seccion se debera de colocar el provider y esto se accedera del context obviamente */

    return (
      /* La forma en la que se coloca el provider es con este elemento que posee un .Provider al final del 
                 categoryContext que ya le pasamos.    */

      /* En el selector se le pasara el state inicial, para q context conozca con que cosa trabajara */
      <CategoryContext.Provider value={{ category: this.state.category }}>
        {this.props.children} {/* De esta forma se completa la configuracion de la comunicacion de datos  */}
      </CategoryContext.Provider>
    );
  }
}

export default CategoryProvider;
