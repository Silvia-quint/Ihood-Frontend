import styles from './css/UsersList.module.css'
import { Icon } from '@iconify/react';


const UsersList = () =>{

  const users = [
        "Maria Padilla Ruiz", 
        "Juan Felipe Ramirez Sierra", 
        "Carlos Blasco Gomez",
        "Sonia Lopez Gomera",
        "Mª Dolores Ortega Castillo",
        "Alejandro Jose Canales del Olmo",
        "Sara Cebrian Ballesteros",
        "Baltasar Delgado Olivares",
        "Alba Montero García",
        "Eduardo Cabrera Cruz",
        "Jaime Davila Marquez",
        "Nahia Nieto Duque",
        "Hector Sánchez Velasco",
        "Myriam Lafuente Cuellar"
      ];

  const listUsers = users.map((users) =>
  <li>
    <Icon className= {styles.iconUser} icon="carbon:user-avatar-filled" />
    {users}
  </li>
);



  return (
      <div className= {styles.usersListCont}>
        <h2>Vecinos de la Comunidad</h2>
        <div className= {styles.listBox}>
          <ul>{listUsers}</ul>
        </div>
      </div>
    )
}

export default UsersList

// import styles from './css/UsersList.module.css'
// import { Icon } from '@iconify/react';




// const UsersList = (props) =>{

//   const users = [{id: 1, name:"jose", surname: "ruiz"},
//                 {id: 2, name: "luisa", surname: "garcia"}];

//   const listUsers = (
//     <ul>
//       {props.users.map((user) =>
//         <li key={users.id}>
//           <Icon className= {styles.iconUser} icon="carbon:user-avatar-filled" />
//           {users.name}
//           {users.surname}
//         </li>
//       )}
//     </ul>
// );

//   return (
//       <div className= {styles.userListCont}>
//         <h2>Lista de Usuarios</h2>
//         <div className= {styles.listBox}>
//           <ul>{listUsers}</ul>
//         </div>
//       </div>
//     )
// }

// export default UsersList