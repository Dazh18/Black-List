// src/App.js
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import InfoList from './components/InfoList';

const data = [
  { name: 'Aguiar Yoel Jonás', details: 'Robó rompiendo los lockers' },
  { name: 'Alamo Diego', details: 'Se fue sin pagar' },
  { name: 'Carlos García', details: 'Detalles de Carlos García' },
  { name: 'Alonso Federico', details: 'Psiquiatrico no medicado' },
  { name: 'Ares Candela Trinidad', details: 'Violenta y sucia' },
  { name: 'Argüello Rodas Brian Emanuel', details: 'Sin descripcion' },
  { name: 'Arias Soler Facundo', details: 'Ensucio los colchones' },
  { name: 'Arrieta Landazuri Nicolás Rafael', details: 'Sin descripcion' },
  { name: 'Barloa Franco Martinl', details: 'Acosador' },
  { name: 'Camiñas Juan Manuel', details: 'Problematico, violento y agresivo' },
  { name: 'Campos Hernández Guillermo Cristian', details: 'Sucio' },
  { name: 'Carballo Pablo Javier', details: 'Maltrato, problemas con los pagos' },
  { name: 'Cardozo Micaela', details: 'Maltratadora. Incumple normas' },
  { name: 'Castagna Eric Martín', details: 'Problematico, consumo de drogas, estafador. Dejó destrozada la habitación' },
  { name: 'Chelmicki Florencia', details: 'Maleducada, no respetó las reglas del hostel' },
  { name: 'Cobos Martina Teresa', details: 'Acosadora. Tiene denuncias por eso.' },
  { name: 'Córdoba Candela', details: 'Destrucción de propiedad' },
  { name: 'Dalmascelli Daniel', details: 'Varios robos' },
  { name: 'Dalmazzo Bryan', details: 'Chantajista' },
  { name: 'De Lisa Franco', details: 'Comprobantes de pago falsos' },
  { name: 'Deregibus Leonardo Esteban', details: 'Ladron y estafador' },
  { name: 'Sevilla Federico', details: 'Agresivo, sucio, morboso' },
  { name: 'Fernández Rafael', details: 'Agresivo, está literalmente loco, no es agresivo, tiene episodios psicóticos, habla solo, revisa los lockers y pertenencias de otros huéspedes (justamente buscando si alguien tomó algo de el) escucha voces etc, hoy lo retire de la bamba expulsado y reserva cancelada por airbnb por haberlo descubierto abriendo un locker ajeno y saco unos zapatos, expulsado inmediatamente' },
  { name: 'Ferraresi Juan Manuel', details: 'Destrucción de propiedad' },
  { name: 'Fleitas Melo Alejandro Miguel', details: 'Ladron' },
  { name: 'Franco Sergio Fabián', details: 'Ladron' },
  { name: 'Gianotti Rodolfo Victor', details: 'Ladron y estafador' },
  { name: 'Grillo Kvaril Marina', details: 'Ladrona' },
  { name: 'Guaricuyu Analia Verónica', details: 'Problematica' },
  { name: 'Ciancaslini GuillermoAlan', details: 'Ladron, vendedor de sustancias' },
  { name: 'Hagen Damián Fernando', details: 'Violento y mentiroso' },
  { name: 'Insaurralde Roxana Estefanía', details: 'Ladrona, robo ropa' },
  { name: 'Martín Victoria ', details: 'Robo una laptop' },
  { name: 'Martines Facundo ', details: 'Drogadicto mal, violento, grosero, invasivo. No respeta reglas.' },
  { name: 'Melhem Carlos Diego ', details: 'se pelearon feo, el hombre amenazo con suicidarse y rompió un par de cosas. Cuando salió el hombre le devolví el dinero a la mujer y les pedí q se vayan. La chica le contó a la recepcionista que el es violento y que andan de hotel en hotel' },
  { name: 'Mendoza Diego Javier ', details: 'Problematico' },
  { name: 'Mnatsakanian Allan ', details: 'Acosador' },
  { name: 'Montenegro Ezequiel David ', details: 'Borracho, problematico' },
  { name: 'Ojeda Mariana Lorena ', details: 'Problematica' },
  { name: 'Palmay Padilla Roberto Carlos ', details: 'Acosador' },
  { name: 'Páez Martínez Jonathan Fabricio ', details: 'Acosador' },
  { name: 'Patiño Correa Fernando Alberto ', details: 'robo de dinero, campera y 1 Ride bateria, se fue sin pagar' },
  { name: 'Pello Leonardo Pablo Isidoro', details: 'Destrucción de propiedad' },
  { name: 'Pérez Aristizabal Rodrigo ', details: 'Estafador' },
  { name: 'Pinto Leandro Nicolás ', details: 'Abusador ebrio' },
  { name: 'Reyes Andaur Alejandro Alexis ', details: 'Problematico, se tuvo que llamar al consulado para sacarlo' },
  { name: 'Ricaurte Joaquín Enrique ', details: 'Mil problemas para pagar' },
  { name: 'Rodriguez German', details: 'Mil problemas para pagar' },
  { name: 'Ruggirello Jorgelina Alejandra Victoria', details: 'Robo y estafa con tarjetas de crédito' },
  { name: 'Sevilla Claudio Nicolás', details: 'Violento' },
  { name: 'Sevilla Federico Exequiel Salvador', details: 'Violento' },
  { name: 'Silva Tagliabúe Fernando Nicolás', details: 'Robo forzando lockers' },
  { name: 'Soria Micaela Ailin', details: 'Robo y uso de sustancias' },
  { name: 'Suaya Juan', details: 'Violento' },
  { name: 'Thomas Llanes Pablo Emanuel', details: 'Estafador buscado por la policia turistica' },
  { name: 'Ysas Elias Jesus', details: 'Ladron peligroso' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="App2">Buscador de Información</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <InfoList filteredData={filteredData} />
    </div>
  );
}

export default App;
