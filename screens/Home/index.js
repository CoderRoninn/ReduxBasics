import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import styles from './styles';

const HomeScreen = () => {
    // Read state from redux
    const isSignedIn = useSelector((state) => state.userData.isSignedIn);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Sign In Status: {isSignedIn ? "Yes" : "No"}</Text>

            {isSignedIn ? (
                <View>
                    <Text style={styles.text2}>Welcome to Home Screen</Text>
                </View>
            ) : (
                <View style={styles.signInView}>
                    <Text style={styles.text3}>Please Sign In To Continue</Text>
                </View>
            )}

            <Pressable style={styles.loginButton} onPress={() => dispatch(userActions.loginAction())}>
                <Text style={styles.text4}>Login</Text>
            </Pressable>

        </View>


    )
};

export default HomeScreen;