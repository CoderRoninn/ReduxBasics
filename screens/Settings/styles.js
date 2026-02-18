import { StyleSheet } from 'react-native';
import theme from '../../consts/design/theme';
import { responsive } from '../../utils/responsive';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: responsive.number(100)
    },
    text: {
        fontSize: responsive.fontSize(20),
        fontWeight: 'bold',
        color: theme.colors.black
    },
    loginButton: {
        backgroundColor: theme.colors.black,
        borderRadius: responsive.number(10),
        padding: responsive.number(10),
        marginTop: responsive.number(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text4: {
        fontSize: responsive.fontSize(20),
        fontWeight: 'bold',
        color: theme.colors.white,
        textAlign: 'center'
    }
});

export default styles;
