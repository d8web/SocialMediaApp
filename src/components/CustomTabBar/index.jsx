import { TouchableOpacity, View } from "react-native";
import Styles from "./styles";
import { FontAwesome } from '@expo/vector-icons'; 
import { Colors } from "../../constants";

const CustomTabBar = ({state, navigation}) => {

    const handleGo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={Styles.TabArea}>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Home")}
            >
                <FontAwesome
                    name="home"
                    size={24}
                    color={Colors.white}
                    style={{ opacity: state.index === 0 ? 1 : 0.5 }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Profile")}
            >
                <FontAwesome
                    name="user"
                    size={24}
                    color={Colors.white}
                    style={{ opacity: state.index === 1 ? 1 : 0.5 }}
                />
            </TouchableOpacity>
            
        </View>
    );
}

export default CustomTabBar;