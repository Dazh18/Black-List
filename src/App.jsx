
import { useState } from 'react';
import { Box, Button, SimpleGrid, Input, Modal, ModalOverlay, 
  ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import InfoList from './components/InfoList';

const initialData = [
  { name: 'Alexander Bashorun', details: 'Autorizado' },
  { name: 'Allen Salayphonh', details: 'Autorizado' },
  { name: 'Alyssa Quandt', details: 'Autorizado' },
  { name: 'Amanda Polynice', details: 'Autorizado' },
  { name: 'Amaré Martinez', details: 'Autorizado' },
  { name: 'Anna Haderlein', details: 'Autorizado' },
  { name: 'Ariel Jordan', details: 'Autorizado' },
  { name: 'Armanvir Dhillon', details: 'Autorizado' },
  { name: 'Ava Chaney', details: 'Autorizado' },
  { name: 'Aveline Gaines', details: 'Autorizado' },
  { name: 'Baylece Walsh', details: 'Autorizado' },
  { name: 'Ben Wood', details: 'Autorizado' },
  { name: 'Branyel Herrera', details: 'Autorizado' },
  { name: 'Carmen Bess', details: 'Autorizado' },
  { name: 'Carson Dunlap', details: 'Autorizado' },
  { name: 'Celine Diaz', details: 'Autorizado' },
  { name: 'Chandler Sheppard', details: 'Autorizado' },
  { name: 'Charles Mohr', details: 'Autorizado' },
  { name: 'Citlali Rivera', details: 'Autorizado' },
  { name: 'Claire Schlueter', details: 'Autorizado' },
  { name: 'Connor LaCrosse', details: 'Autorizado' },
  { name: 'Cooper Lowe', details: 'Autorizado' },
  { name: 'Cruz Ruelas', details: 'Autorizado' },
  { name: 'Cyriel Boatwright', details: 'Autorizado' },
  { name: 'Daniel Escobar', details: 'Autorizado' },
  { name: 'Danielle Kankunda', details: 'Autorizado' },
  { name: 'Dayton Chapin', details: 'Autorizado' },
  { name: 'Drew Amero', details: 'Autorizado' },
  { name: 'Dylan Jenkins', details: 'Autorizado' },
  { name: 'Eliana Imperial', details: 'Autorizado' },
  { name: 'Emanuel Defelice', details: 'Autorizado' },
  { name: 'Emilee Senseman', details: 'Autorizado' },
  { name: 'Emma Bitz', details: 'Autorizado' },
  { name: 'Emma Plenge', details: 'Autorizado' },
  { name: 'Emmerson Kirk', details: 'Autorizado' },
  { name: 'Gabriela Mesquita', details: 'Autorizado' },
  { name: 'Gavin McDole', details: 'Autorizado' },
  { name: 'Grant Cook', details: 'Autorizado' },
  { name: 'Gus Close', details: 'Autorizado' },
  { name: 'Henry Bell', details: 'Autorizado' },
  { name: 'Hudson Bulis', details: 'Autorizado' },
  { name: 'lan Kozlovsky', details: 'Autorizado' },
  { name: 'Isabella Narvaez', details: 'Autorizado' },
  { name: 'Isabella Navarro', details: 'Autorizado' },
  { name: 'Jacob Giannattasio', details: 'Autorizado' },
  { name: 'Jacques Debedout', details: 'Autorizado' },
  { name: 'Jamieson Cousyn', details: 'Autorizado' },
  { name: 'Jaylynn Rubio', details: 'Autorizado' },
  { name: 'Jeff Bellot', details: 'Autorizado' },
  { name: 'Jeremy Ramos Romero', details: 'Autorizado' },
  { name: 'Jessie Putnam', details: 'Autorizado' },
  { name: 'Jordan Vogt', details: 'Autorizado' },
  { name: 'Jordyn Taylor', details: 'Autorizado' },
  { name: 'Joseph Gutierrez', details: 'Autorizado' },
  { name: 'Joseph Szakas', details: 'Autorizado' },
  { name: 'Julian Chea', details: 'Autorizado' },
  { name: 'Julianna Ramos', details: 'Autorizado' },
  { name: 'Juliet Canon', details: 'Autorizado' },
  { name: 'Julieta Hillion', details: 'Autorizado' },
  { name: 'Kaleb Prete', details: 'Autorizado' },
  { name: 'Kaylea Lewis', details: 'Autorizado' },
  { name: "Ke'jwan Walker", details: 'Autorizado' },
  { name: 'Kena James', details: 'Autorizado' },
  { name: 'Khalil Rickicki', details: 'Autorizado' },
  { name: "Ki'Ziah Sullivan", details: 'Autorizado' },
  { name: 'Kian Afshari', details: 'Autorizado' },
  { name: 'Kimberly Peralta', details: 'Autorizado' },
  { name: 'Leah Williams', details: 'Autorizado' },
  { name: 'Leslie Coble', details: 'Autorizado' },
  { name: 'Lucia Castillo', details: 'Autorizado' },
  { name: 'Madex Negron', details: 'Autorizado' },
  { name: 'Makenzie Leonard', details: 'Autorizado' },
  { name: 'Marcus Seeley', details: 'Autorizado' },
  { name: 'Mariam Elibiary', details: 'Autorizado' },
  { name: 'Mariapaula Tenorio', details: 'Autorizado' },
  { name: 'Maya Alcantara', details: 'Autorizado' },
  { name: 'Maylana Cox', details: 'Autorizado' },
  { name: 'Melanie Rivera', details: 'Autorizado' },
  { name: 'Montgomery Thomas', details: 'Autorizado' },
  { name: 'Natalie Allenspach', details: 'Autorizado' },
  { name: 'Natalie Smith', details: 'Autorizado' },
  { name: 'Nicholas Moylan', details: 'Autorizado' },
  { name: 'Nolan Christian', details: 'Autorizado' },
  { name: 'Ocean Bridges', details: 'Autorizado' },
  { name: 'Olivia Barnell', details: 'Autorizado' },
  { name: 'Pedro Novansy', details: 'Autorizado' },
  { name: 'Persayies Garza', details: 'Autorizado' },
  { name: 'Peter Miranda', details: 'Autorizado' },
  { name: 'Roan Cassidy', details: 'Autorizado' },
  { name: 'Ronan Crowley', details: 'Autorizado' },
  { name: 'Safire Maher', details: 'Autorizado' },
  { name: 'Sarah Elhassan', details: 'Autorizado' },
  { name: 'Sarah Taylor', details: 'Autorizado' },
  { name: 'Seamus Gohery', details: 'Autorizado' },
  { name: 'Shanel Harris', details: 'Autorizado' },
  { name: 'Simran Prajapati', details: 'Autorizado' },
  { name: 'Skyler Greene', details: 'Autorizado' },
  { name: 'Sofia Diaz-Rivas', details: 'Autorizado' },
  { name: 'Soonhee DeLorenzo', details: 'Autorizado' },
  { name: 'Sophia Brusca', details: 'Autorizado' },
  { name: 'Soraya Travis', details: 'Autorizado' },
  { name: 'Steve Flores', details: 'Autorizado' },
  { name: 'Summer Greystoke', details: 'Autorizado' },
  { name: 'Tanner Fryman', details: 'Autorizado' },
  { name: 'Taryn Self', details: 'Autorizado' },
  { name: 'Teo Moroukian', details: 'Autorizado' },
  { name: 'Tristan Fox', details: 'Autorizado' },
  { name: 'Tyler Kang', details: 'Autorizado' },
  { name: 'Victoria barreto', details: 'Autorizado' },
  { name: 'William Clince', details: 'Autorizado' },
  { name: 'Wisdom King', details: 'Autorizado' },
  { name: 'Yesung (Joseph) Kim', details: 'Autorizado' },
  { name: 'Yzabel Lam', details: 'Autorizado' },
  { name: 'Zachary McDonald', details: 'Autorizado' },
];



function App() {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [blackList] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newName, setNewName] = useState('');
  const [newDetails, setNewDetails] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  }; 

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToBlackList = () => {
    const newEntry = { name: newName, details: newDetails };
    // Agrega el nuevo elemento al initialData
    setData([...data, newEntry]); 
    setNewName('');
    setNewDetails('');
    onClose();
  };

  return (
    <SimpleGrid align="center" justify="center" >
      <Box textAlign="center">
        <h1 className="App2">Buscador de Información</h1>
        <Box display="flex" justifyContent="center">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </Box>

        {(searchTerm || blackList.length > 0) && (
          <Box width="80%" maxWidth="300px" mx="auto"> 
            <InfoList filteredData={[...filteredData, ...blackList]} />
          </Box>
        )}
        <Button margin={10} onClick={onOpen}>
          Añadir a BlackList
        </Button>
      </Box>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  display="flex" alignItems="center" justifyContent="center" top={350}>
          <ModalHeader>Añadir a la Lista Negra</ModalHeader>
          <ModalBody>
            <Input 
              placeholder="Nombre" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
              mb={4} 
            />
            <Input 
              placeholder="Detalles" 
              value={newDetails} 
              onChange={(e) => setNewDetails(e.target.value)} 
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddToBlackList}>
              Guardar
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SimpleGrid>
  );
}

export default App;