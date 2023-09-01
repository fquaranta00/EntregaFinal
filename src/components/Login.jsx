import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const Login = ({ setUserLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserLoggedIn(true); // Actualiza el estado a true
        navigate("/");
        alert(user.email + " is logged in");
      })
      .catch((error) => {
        setError("Email or password is incorrect");
        console.error(error.code, error.message);
      });
  };

  return (
    <VStack spacing={4} align="center" mt={8}>
      <Text fontSize="xl" fontWeight="bold">
        Log In
      </Text>
      <Box
        w="md"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        boxShadow="base"
      >
        <form onSubmit={onLogin}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            colorScheme="blue"
            mt={4}
            w="full"
          >
            Log In
          </Button>
        </form>
      </Box>
      <Text>
        Don't have an account?{" "}
        <NavLink to="/signup">Sign Up</NavLink>
      </Text>
    </VStack>
  );
};

export default Login;
