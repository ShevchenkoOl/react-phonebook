// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { authSelectors } from 'redux/auth';

// import { Link } from './Navigation.styled';

// function Navigation() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return (


//     <NavLink>
//       <Link to="/" exact="true" >
//         Home
//       </Link>

//       {isLoggedIn && (
//         <Link
//           to="/contacts"
//           exact="true" >
//           Contacts
//         </Link>
//       )}
//     </NavLink>
//   );
// }

// export default Navigation;


import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Link to="/" exact="true">
        Home
      </Link>

      {isLoggedIn && (
        <Link to="/contacts" exact="true">
          Contacts
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
