## REST API ##


PUNTOS 
- MODELADO DE BASE DE DATOS, utilizando mysql y sequelize se crearon 3 tablas en la base de datos, una de PROYECTOS, otra de USERS, otra que relaciona proyectos y usuarios que es donde un usuario puede asignarle proyectos a un usuario, o asignarle usuarios a un proyecto.
- Ademas se le agrego un sistema de registro y login para que cada usuario necesite estar registrado para poder acceder al sistema y poder realizar las operaciones CRUD de proyectos o asignar un usuario a un proyecto.
- Las operaciones de crear, asignar, actualizar y borrar estan protegidas y se necesita estar logeado para realizarlas.
- AUTENTICACION DE USUARIOS: Registro en '/auth/register';
Y Login de usuario en  '/auth/login'. Le sigue la creacion de token para habilitar los endpoints;
- Listar los proyectos almacenados en el endpoint solicitado '/projects' con un paginado de 5 resultados por pagina, cambiando el offset se cambia a la siguiente pagina;
- Operaciones CRUD sobre los proyectos con sus validaciones;
- Detalle de proyecto y su relacion con usuarios asignados en la ruta '/projects/detalle/:proyectoId' ;
- Busqueda de proyecto por nombre. en 'projects/filter/name'
- Documentacion de los endpoints en Postman : https://documenter.getpostman.com/view/18541452/UVyoXyFT ;
- La totalidad de los puntos requeridos fue completado;
- Ademas se le agregaron componentes de validaciones y sistema de register y login
- La aplicacion se levanta en un entorno local en puerto 3000;
- La aplicacion esta subida a https://challenge-eso-es.herokuapp.com/ ;
- El repositorio publico se encuentra en https://github.com/jnahuel46/Challenge-EsoEs ;

## PARA TODAS LAS PETICIONES HAY QUE USAR EL USER-TOKEN EN LOS HEADERS, EL TOKEN SE OBTIENE UNA VEZ REALIZADO EL LOGIN ##
## INSTALAR TOAS LAS DEPENDENCIAS CON NPM INSTALL Y LUEGO EJECUTAR 'node .\index.js' O 'nodemon.\index.js'##


