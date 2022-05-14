import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import MainStack from "./src/routes";
import { store } from "./src/redux/store";

const App = () => {
    let [fontsLoaded] = useFonts({
        "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
        "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
    });

    if(!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <StatusBar translucent={false} />
            <MainStack/>
        </Provider>
    );
}

export default App;