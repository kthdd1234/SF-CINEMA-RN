import React from "react";
import { Icon } from 'react-native-elements';

const UserIcon = () => {
    return <Icon name='user' type='antdesign' color='gray' />;
};

const LockIcon = () => {
    return <Icon name='lock1' type='antdesign' color='gray' />;
};

const UnlockIcon = () => {
    return <Icon name='unlock' type='antdesign' color='gray' />;
};

const SaveLoginIcon = () => {
    return <Icon name='pluscircleo' type='antdesign' color='gray' />;
};

const CheckIcon = () => {
    return <Icon name='check' type='antdesign' color='tomato' />;
};

export { UserIcon, LockIcon, UnlockIcon, SaveLoginIcon, CheckIcon }