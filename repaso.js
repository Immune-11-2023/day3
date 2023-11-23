// 1)
const totalValue = 10 ** 2 // => 100 , operador de exponencial

// 2)
let immutableUsername = "kutsoragi"
immutableUsername[0] = "K" // Las strings NO son mutables (porque son datos primitivos)
const changedUsername = `${immutableUsername[0].toUpperCase()}${immutableUsername.slice(
  1
)}` // Una forma creativa de pasar la primera letra a mayúsculas

// 3)
const age = 53

if (age >= 50) console.log("ERES JOVEN DE ESPÍRITU PERO NO TIENES JOBO")
if (age >= 18) console.log("TIENES EL JOBO!")
// Es importante recordar que con estos dos condicionales ambas instrucciones se ejecutarían
// Podríamos resolver fácilmente este problema utilizando un else if en el segundo caso

// 4) Convertir una string en array

const userEmail = "elXuLoH2003@gmail.com" // => ["elXuloH..." "gmail.com"]
const emailParts = userEmail.split("@")
//console.log("El nombre",emailParts[0])

// 5) Extrae el último elemento de este array

const countries = ["Norway", "France", "Portugal", "Japan"]
// Sabemos hacerlo de muchas formas, como con => countries.at(-1) o countries[countries.length -1]

// 6) Extrae tus series favoritas primeros
const bestShows = [
  "Breaking Bad",
  "True Detective",
  "The Wire",
  "Sharp Objects",
  "Mr Robot",
  "La casa de Papel",
]
//console.log("LOS NUEVOS SHOWS =>",bestShows.slice(0,-1)) // [0,-1) Esta clase de rangos suelen ser inclusivos por el primer índice y exclusivos en relación al segundo índice

// 7) Eliminar elementos de un array
const books = [
  "The Catcher in the rye",
  "Frankenstein",
  "50 Shades of Grey",
  "The Great Gatsby",
  "Lord of the Flies",
]

books.splice(2 /*índice*/, 2 /*NÚMERO de elementos a borrar*/)
// El método splice nos permite borrar elementos de una lista.
