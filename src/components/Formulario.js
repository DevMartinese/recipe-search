import React, {useContext, useState} from 'react';
import Error from './Error';

import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

   const {categorias} = useContext(CategoriasContext);
   const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);

   const [busqueda, guardarBusqueda] = useState({
       nombre: '',
       categoria: ''
   })
   const [error, guardarError] = useState(false);

   const obtenerDatosReceta = e => {
       guardarBusqueda({
           ...busqueda,
           [e.target.name] : e.target.value
       })
   }

   const {nombre} = busqueda;

   const validarForm = () => {
       if(nombre.trim() === ''){
           guardarError(true);
           return;
       }
       guardarError(false);
   }

   return (
      <form className="col-12" onSubmit={e => {e.preventDefault(); buscarRecetas(busqueda); guardarConsultar(true); validarForm();}} >
          <fieldset className="text-center">
              <legend>
                  Busca bebidas por categoria o ingrediente
              </legend>
          </fieldset>

          <div className="row mt-4">
              <div className="col-md-4">
                  <input name="nombre" className="form-control" type="text" placeholder="Buscar ingrediente" onChange={obtenerDatosReceta} />
              </div>

              <div className="col-md-4">
                  <select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
                      <option value="">-- Seleccione --</option>
                      {categorias.map(categoria => (<option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>))}
                  </select>
              </div>

              <div className="col-md-4">
                  <input type="submit" className="btn btn-block btn-primary" value="Buscar Receta" />
              </div>
          </div>
           
          {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

      </form>
   );
}

export default Formulario;