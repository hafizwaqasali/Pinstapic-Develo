import React, { useEffect } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import FlashMessage from 'react-native-flash-message';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);
export default function App() {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested', '"PermissionsAndroid" module works only for Android platform.']);
    }, [])
    return (
        <Provider store={store}>
            <Routes />
            <FlashMessage position="bottom" icon="auto" />
        </Provider>
    );
}
