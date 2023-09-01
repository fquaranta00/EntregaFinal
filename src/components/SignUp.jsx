import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      console.log(error.code, error.message);
    }
  };

  return (
    <Box p={8} mx="auto" maxW="md">
      <Heading mb={4}>Sign Up</Heading>
      <form>
        <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </FormControl>

        {error && <Text color="red">{error}</Text>}
        <Button type="submit" colorScheme="blue" onClick={onSubmit}>
          Sign up
        </Button>
      </form>

      <Text mt={4}>
        Already have an account? <NavLink to="/login">Sign in</NavLink>
      </Text>
    </Box>
  );
};

export default SignUp;
