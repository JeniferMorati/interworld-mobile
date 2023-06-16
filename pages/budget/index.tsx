import {
  Button,
  Column,
  Input,
  Modal,
  Row,
  ScrollView,
  Text,
  View,
} from "native-base";
import React, { memo, useEffect, useMemo, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import FirebaseAuth from "../../firebase";
import { VStack } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MemoBooking from "../../assets/form";
import { useDictionary } from "../../hooks/useDictionary";

const firebase = new FirebaseAuth();
const CollectionRef = collection(firebase.appStore, "destinations");
const budgetStore = collection(firebase.appStore, "budgets");

const Budget = () => {
  const { budgets: dictionary } = useDictionary();
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destinationSelected, setDestinationSelected] = useState({
    city: "",
    country: "",
    flag: "",
  });
  const [phone, setPhone] = useState("");
  const [viewSelection, setViewSelection] = useState({
    city: "",
    country: "",
    flag: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [destinations, setDestinations] = useState<
    {
      flag: string;
      country: string;
      cities: string[];
      id: string;
    }[]
  >([]);

  const formRules = useMemo(() => {
    const validations =
      !name || !email || !phone || !destinationSelected.city || loading;
    return validations;
  }, [name, email, phone, destinationSelected, loading]);

  const loadDocs = async () => {
    const { docs } = await getDocs(CollectionRef);

    const response = docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .map((item) => item) as unknown as {
      flag: string;
      country: string;
      cities: string[];
      id: string;
    }[];

    return setDestinations(response);
  };

  const sendBudget = async () => {
    setLoading(true);

    try {
      await addDoc(budgetStore, {
        name,
        email,
        phone,
        destination: {
          country: destinationSelected.country,
          city: destinationSelected.city,
          flag: destinationSelected.flag,
        },
      });

      setSuccessModal(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadDocs();
  }, []);

  useEffect(() => {
    if (firebase.appAuth.currentUser?.email) {
      setEmail(firebase.appAuth.currentUser.email);
      setName(firebase.appAuth?.currentUser?.displayName || "");
      setPhone(firebase.appAuth?.currentUser?.phoneNumber || "");
    }
  }, [firebase.appAuth.currentUser]);

  return (
    <ScrollView>
      <Modal isOpen={successModal} onClose={setSuccessModal} size="xl">
        <Modal.Content maxH="500">
          <Modal.CloseButton />
          <Modal.Header>Sucesso!</Modal.Header>
          <Modal.Body maxH={300}>
            <ScrollView>
              <VStack space={2} alignItems="start" justifyContent="center">
                <Text>Que legal! nos falamos em breve!</Text>
              </VStack>
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size="xl">
        <Modal.Content maxH="500">
          <Modal.CloseButton />
          <Modal.Header>Escolha um local</Modal.Header>
          <Modal.Body maxH={300}>
            <ScrollView>
              <VStack space={2} alignItems="start" justifyContent="center">
                {destinations.map((destination) => (
                  <Column width="full" p={2} backgroundColor="light.100">
                    <Row space={2} alignItems="center" justifyItems="center">
                      <img width={35} height={35} src={destination.flag} />
                      <Text>{destination.country}</Text>
                    </Row>
                    <Column space={2}>
                      {destination.cities.map((city) => (
                        <Button
                          p={2}
                          shadow={1}
                          rounded="sm"
                          onPress={() =>
                            setViewSelection({
                              city,
                              country: destination.country,
                              flag: destination.flag,
                            })
                          }
                          backgroundColor={
                            destinationSelected.city === city ||
                            viewSelection.city === city
                              ? "purple.600"
                              : "light.200"
                          }
                          space={2}
                        >
                          <Text
                            color={
                              destinationSelected.city === city ||
                              viewSelection.city === city
                                ? "white"
                                : "black"
                            }
                          >
                            {city}
                          </Text>
                        </Button>
                      ))}
                    </Column>
                  </Column>
                ))}
              </VStack>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                colorScheme="red"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="purple"
                disabled={!viewSelection.city}
                onPress={() => {
                  setDestinationSelected(viewSelection);
                  setModalVisible(false);
                }}
              >
                Confirmar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack
        h="full"
        p={4}
        width="full"
        justifyContent="center"
        alignItems="start"
        space={2}
      >
        <Row alignItems="center" justifyContent="center" width="full">
          <View w={300}>
            <MemoBooking />
          </View>
        </Row>
        <Input
          value={name}
          onChangeText={setName}
          width="full"
          placeholder="Nome"
        />
        <Input
          value={email}
          onChangeText={setEmail}
          width="full"
          placeholder="Email"
        />
        <Input
          value={phone}
          onChangeText={setPhone}
          width="full"
          placeholder="Telefone"
        />
        <Button
          disabled={destinations.length === 0}
          variant="ghost"
          p={0}
          onPress={() => setModalVisible(true)}
        >
          <Text fontSize="lg" color="purple.600">
            <Row space={1} alignItems="center" justifyContent="center">
              <MaterialCommunityIcons name="earth" size={25} />
              {dictionary.destinySearch}
            </Row>
          </Text>
        </Button>
        {destinationSelected.city && (
          <Row space={1} alignItems="center" justifyContent="center">
            <img width={35} height={35} src={destinationSelected.flag} />
            <Text fontSize="lg" fontWeight="semibold">
              {destinationSelected.country}: {destinationSelected.city}
            </Text>
          </Row>
        )}
        {loading && <Text>Enviando...</Text>}
        <Button
          mt={10}
          width="full"
          backgroundColor="purple.600"
          isDisabled={formRules}
          disabled={formRules}
          onPress={sendBudget}
        >
          {dictionary.send}
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default memo(Budget);
