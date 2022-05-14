import { View, Text } from "react-native";
import styles from "./styles";
import { useSelector } from 'react-redux'

const HomeScreen = () => {

    const user = useSelector((state) => state.user);

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;