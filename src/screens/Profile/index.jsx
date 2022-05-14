import { Text, View } from "react-native";
import styles from "./styles";

import { useSelector } from "react-redux";

const ProfileScreen = () => {

    const user = useSelector((state) => state.user);

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen;