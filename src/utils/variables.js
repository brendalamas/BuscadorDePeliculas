export const urlBase = 'https://api.themoviedb.org/3/';
export const apiKey = 'api_key=6e372c30d27676867cdbcfd7e00f4cf2';
export const queryParamPagina = '&page=';
export const searchMulti = "/search/multi"
export const cortarArrayPeliculas = array => array.slice(0, 8);

export const definirURL = (categoria, tipo) => `${tipo}/${categoria}`;

export const definirURLDetalles = (categoria, id) => `${categoria}/${id}`;

export const queryParamLenguaje =(language) => `&language=${language}`;

export const queryParamSearch =(busqueda) => `&query=${busqueda}`;
