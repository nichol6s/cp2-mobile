import React from 'react';
import { ToastAndroid } from 'react-native';

import { Button } from './Button';

type Props={
    message: string
}

function Toast({ message }: Props) {
    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.SHORT, ToastAndroid.TOP, 25, 50);
    };

    return (
        <Button title="👀" onPress={showToast} />
    );
}

export default Toast;
