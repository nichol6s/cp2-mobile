import React from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';

import { Button } from './Button';

function showToast() {
    ToastAndroid.showWithGravityAndOffset('🥳', ToastAndroid.SHORT, ToastAndroid.TOP, 25, 50);
}

function Toast() {
    return (
        <View style={styles.container}>
            <Button title="👀" onPress={showToast} />
        </View>
    );
}

export { Toast }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
});
