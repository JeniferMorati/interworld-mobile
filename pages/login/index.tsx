import {
  ScrollView,
  Input,
  VStack,
  View,
  Button,
  Text,
  Image,
  Flex,
} from "native-base";
import React, { useEffect, useState } from "react";
import FirebaseAuth from "../../firebase";

const firebase = new FirebaseAuth();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [screen, setScreen] = useState("login");

  useEffect(() => {
    firebase.appAuth.onAuthStateChanged((user) => {
      if (user) {
        setScreen("profile");
      } else {
        setScreen("login");
      }
    });
  }, []);

  return (
    <ScrollView>
      <View w="full" h="100vh">
        {screen === "login" ? (
          <VStack
            minH="full"
            space={2}
            justifyItems="center"
            alignItems="center"
            px="4"
            maxW="lg"
            py="5"
          >
            <Input
              value={email}
              onChangeText={setEmail}
              w="full"
              type="text"
              placeholder="Email"
            />
            <Input
              value={password}
              onChangeText={setPassword}
              w="full"
              type="password"
              placeholder="Senha"
            />
            <View>
              <Text color="red.500">{errorMessage}</Text>
            </View>
            <View>{loading && <Text>Carregando...</Text>}</View>
            <Button
              marginTop={10}
              onPress={() => {
                setLoading(true);
                setErrorMessage("");
                firebase.handleLogin({
                  auth: firebase.appAuth,
                  password,
                  email,
                  onError: (err: any) => {
                    setErrorMessage(err);
                  },
                });
                setLoading(false);
              }}
              backgroundColor="purple.600"
              width="full"
            >
              Entrar
            </Button>
            <Button
              onPress={() => {
                setLoading(true);
                setErrorMessage("");
                firebase.handleCreateAccount({
                  auth: firebase.appAuth,
                  password,
                  email,
                  onError: (err: any) => {
                    setErrorMessage(err);
                  },
                });
                setLoading(false);
              }}
              backgroundColor="purple.600"
              width="full"
            >
              Cadastrar
            </Button>
          </VStack>
        ) : (
          <VStack
            minH="full"
            space={2}
            justifyItems="center"
            alignItems="center"
            px="4"
            maxW="lg"
            py="5"
          >
            <Flex w="full" justifyItems="start" alignItems="start">
              <Text fontSize="xl">Logado como</Text>
              <Text fontSize="xl" fontWeight="bold">
                {firebase.appAuth.currentUser?.email}
              </Text>
            </Flex>
            <Button
              marginTop={10}
              onPress={() => firebase.signOut()}
              backgroundColor="error.600"
              width="full"
            >
              Sair
            </Button>
          </VStack>
        )}
      </View>
    </ScrollView>
  );
};

export default Login;
