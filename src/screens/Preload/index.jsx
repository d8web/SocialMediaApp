import { useEffect } from "react";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PreloadScreen = () => {

    const navigation = useNavigation();

    const checkToken = async () => {
        const token = await AsyncStorageLib.getItem("token");

        if(token) {

            // Validar token

        } else {
            navigation.navigate("SignIn");
        }

    }

    useEffect(() => {

        checkToken();

    }, []);

    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#333" />
        </View>
    );
}

export default PreloadScreen;