import React, { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import axios from 'axios';




export default function LoginScreen() {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                phoneNumber,
                password,
            });

            if (response.status === 200) {
                // Đăng nhập thành công, xử lý logic tiếp theo
                navigation.navigate(ROUTES.CHAT);
                console.log("Đăng nhập thành công", response.data.message);
            } else if (response.status === 401) {
                // Đăng nhập thất bại
                setErrorMessage(response.data.message || 'Đăng nhập thất bại, vui lòng thử lại');
                console.log("Đăng nhập thất bại", response.data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage('Đã xảy ra lỗi, vui lòng thử lại');
        }
    };


    const handlePhoneNumberFocus = () => {
        setPhoneNumberFocus(true);
    };

    const handlePhoneNumberBlur = () => {
        setPhoneNumberFocus(false);
    };

    const handlePasswordFocus = () => {
        setPasswordFocus(true);
    };

    const handlePasswordBlur = () => {
        setPasswordFocus(false);
    };

    const handleRemovePhoneNumber = () => {
        setPhoneNumber('');
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: COLORS.grayZalo, width: '100%', padding: 10 }}>
                <Text style={{ fontSize: 15 }}>Vui lòng nhập số điện thoại và mật khẩu để đăng nhập</Text>
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <View
                    style={{
                        borderBottomWidth: 1,
                        width: '90%',
                        marginVertical: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomColor: phoneNumberFocus ? COLORS.red : COLORS.black,
                    }}
                >
                    <TextInput
                        placeholder="Số điện thoại"
                        placeholderTextColor={COLORS.gray}
                        style={{ fontSize: 25, width: '90%' }}
                        onFocus={handlePhoneNumberFocus}
                        onBlur={handlePhoneNumberBlur}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />

                    <Pressable onPress={handleRemovePhoneNumber} >
                        <Icon name="remove" size={20} color={COLORS.black} />
                    </Pressable>
                </View>

                <View
                    style={{
                        borderBottomWidth: 1,
                        width: '90%',
                        flexDirection: 'row',
                        borderBottomColor: passwordFocus ? COLORS.red : COLORS.black,
                    }}
                >
                    <TextInput
                        placeholder="Mật khẩu"
                        placeholderTextColor={COLORS.gray}
                        style={{ fontSize: 25, width: '90%' }}
                        secureTextEntry={!showPassword}
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordBlur}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Pressable onPress={handleShowPassword}>
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>{showPassword ? 'ẨN' : 'HIỆN'}</Text>
                    </Pressable>
                </View>
            </View>


            {errorMessage ? (
                <View style={{ marginVertical: 10, paddingLeft: 20 }}>
                    <Text style={{ color: COLORS.red }}>{errorMessage}</Text>
                </View>
            ) : null
            }

            <View style={{ marginVertical: 20, paddingLeft: 20 }}>
                <Pressable onPress={() => { navigation.navigate(ROUTES.FORGET) }}>
                    <Text style={{ fontSize: 15, fontWeight: 500, color: COLORS.blueZalo }}>Lấy lại mật khẩu</Text>
                </Pressable>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 20 }}>
                <TouchableOpacity style={{
                    backgroundColor: COLORS.lightblue,
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={handleLogin} > {/*onPress={() => { navigation.navigate(ROUTES.CHAT) }} */}
                    <Icon name="arrow-right" size={20} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
};
