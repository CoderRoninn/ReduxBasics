import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';

const ProfileScreen = () => {
    // Read state from redux
    const isSignedIn = useSelector((state) => state.userData.isSignedIn);
    const userName = useSelector((state) => state.userData.userName);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {isSignedIn ? (
                <View>
                    <Text style={styles.text}>Hello {userName}</Text>
                    <Pressable style={styles.loginButton} onPress={() => dispatch({ type: 'LOG_OUT' })}>
                        <Text style={styles.text4}>Log Out</Text>
                    </Pressable>
                </View>
            ) : (
                <Text style={styles.text}>Please Sign In</Text>
            )}
        </View>
    )
};

export default ProfileScreen;

