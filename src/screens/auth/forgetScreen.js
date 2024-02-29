import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ForgetScreen() {
    const [isFocused, setIsFocused] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleRemoveIconPress = () => {
        setPhoneNumber(''); // Clear the text when the "remove" icon is pressed
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: COLORS.grayZalo, padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: '400' }}>Nhập số điện thoại để lấy lại mật khẩu</Text>
            </View>

            <View style={{ alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                <View
                    style={{
                        width: '90%',
                        borderBottomWidth: 1,
                        padding: 10,
                        borderBottomColor: isFocused ? 'red' : 'black', // Set red color when focused
                    }}
                >
                    <TextInput
                        placeholder="Số điện thoại"
                        style={{ width: '90%', fontSize: 25 }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                </View>
                <TouchableOpacity onPress={handleRemoveIconPress}>
                    <Icon name="remove" size={20} color={COLORS.black} style={{ width: '10%' }} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 20 }}>
                <TouchableOpacity style={{ backgroundColor: COLORS.lightblue, borderRadius: 50, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="arrow-right" size={20} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
