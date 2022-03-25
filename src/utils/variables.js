export const urlBase = 'https://api.themoviedb.org/3/';
export const apiKey = 'api_key=6e372c30d27676867cdbcfd7e00f4cf2';
export const queryParamLenguaje = '&language=';
export const queryParamPagina = '&page=';

export const cortarArrayPeliculas = array => array.slice(0, 5);

export const definirURL = (categoria, tipo, busqueda) =>
  busqueda ? `${categoria}/${tipo}/${busqueda}` : `${tipo}/${categoria}`;