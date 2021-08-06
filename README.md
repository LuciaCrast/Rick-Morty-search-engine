# Buscador de Personajes Rick & Morty

La aplicación se presenta con un Header, un Form con dos inputs de búsqueda, por nombre y por especie. Y un listado
de personajes correspondiete a la primera página de la API. Para saber más de la API (https://rickandmortyapi.com/documentation)

## Funcionalidades

1. La aplicación hace una llamada a la API cuando iniciamos la página para presetar un listado de personajes.
2. Cuando buscamos por nombre, hacemos otra llamada a la API, que busca entre todos los nombres del total de personajes.
3. A medida que vamos escribiendo en el input de texto nos aparecerán los resultados que contengan las letras que escribimos.
4. Con el botón de select podemos elegir la especie que estamos buscando.
5. Ambos inputs se complementan en el filtrado.
6. Cuando pinchamos en cualquiera de las tarjetas de personaje, nos lleva a una nueva página donde encontraremos la tarjeta del personaje
   con más detalles y un botón para volver a la página principal.
7. Si volvemos desde una tarjeta o recargamos la página nuestra búsqueda se mantiene.
8. Si no encontramos el resultado de nuestra búsqueda la aplicación nos dará un mensaje de error.
9. Si al poner en la url una extensión de la dirección que no se encuentra, la aplicación, nos dará un mensaje de error.

## Detalles

1. Las tarjetas contienen dibujitos para designar la especie y el estatus. Si ponemos el cursor sobre ellos sabemos qué especie es.
2. La disposición de las tarjetas está echa con Grid.
3. La página es Responsive.
4. Los resultados se ordenan alfabéticamente.
5. Al pulsar intro el navegador no navega o cambia la ruta.
6. El buscador acepta las búsquedas tanto en mayúsculas como en minúsculas.
