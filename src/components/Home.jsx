
import { Button, Text } from '@chakra-ui/react';
import { signOut } from "firebase/auth";
import { auth } from "../main";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out exitoso.
        navigate("/login");
        alert("Signed out successfully");
      })
      .catch((error) => {
        // si tenemos un error.
      });
  };



  return (
    <div className="home-container">
      <Text className="home-description">Bienvenido a Compras Comunitarias</Text>
      <Button onClick={handleLogout} colorScheme="blue" className='logout-button'>Logout</Button>
    </div>
  );
}

export default Home;
