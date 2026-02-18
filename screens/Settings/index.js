import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import styles from './styles';

const SettingsScreen = () => {
    // Read state from redux
    const isSignedIn = useSelector((state) => state.userData.isSignedIn);
    const userName = useSelector((state) => state.userData.userName);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {isSignedIn ? (
                <View>
                    <Text style={styles.text}>Your Name: {userName}</Text>
                    <Pressable style={styles.loginButton} onPress={() => dispatch(userActions.changeNameAction('Redux'))}>
                        <Text style={styles.text4}>change</Text>
                    </Pressable>
                </View>
            ) : (
                <Text style={styles.text}>Please Sign In First</Text>
            )}
        </View>
    )
};

export default SettingsScreen;

