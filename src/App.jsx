import HeaderResto from "./components/HeaderResto"
import PlatoCard from "./components/PlatoCard"
import ResumenMenu from "./components/ResumenMenu"

const menuResto = [
  {
    id: 1,
    nombre: "Hamburguesa Gourmet",
    precio: 12500,
    descripcion: "Medallón de novillo, queso cheddar, panceta crocante y salsa barbacoa.",
    disponible: true,
    etiquetas: ["Especial del Chef"]
  },
  {
    id: 2,
    nombre: "Ensalada Mediterránea",
    precio: 9800,
    descripcion: "Mix de verdes, tomates secos, queso brie, frutos secos y vinagreta.",
    disponible: true,
    etiquetas: ["Vegano", "Sin TACC"]
  },
  {
    id: 3,
    nombre: "Pizza Margherita Artesanal",
    precio: 11000,
    descripcion: "Masa madre, salsa pomodoro, mozzarella fresca y albahaca.",
    disponible: false,
    etiquetas: ["Vegetariano"]
  },
  {
    id: 4,
    nombre: "Sorrentinos de Calabaza y Ricota",
    precio: 13200,
    descripcion: "Pasta fresca casera con crema de ciboulette y queso parmesano.",
    disponible: true,
    etiquetas: ["Vegetariano", "Especial del Chef"]
  },
  {
    id: 5,
    nombre: "Bowl Proteico Keto",
    precio: 10500,
    descripcion: "Pechuga grille, palta, huevo pochado y semillas tostadas.",
    disponible: false,
    etiquetas: ["Sin TACC"]
  }
];

function App() {
  return (
    <>
      <HeaderResto
        nombreLocal="Sabores de Cordoba"
        eslogan="El sabor de lo casero"
        estaAbierto={true}
      />
      {menuResto.map((plato) => (
        <PlatoCard 
        key={plato.id}
        nombre={plato.nombre}
        precio={plato.precio}
        descripcion={plato.descripcion}
        disponible={plato.disponible}
        />
      ))}

      <ResumenMenu platos={menuResto}/>
    

     
    </>
  )
}

export default App