import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function registion_name() {
    const [name, setName] = useState('');
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const handleNameFocus = () => {
        setPhoneNumberFocus(true);
    };

    const handleNameBlur = () => {
        setPhoneNumberFocus(false);
    };

    const handleRemovePhoneNumber = () => {
        setName('');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingLeft: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tên zalo</Text>
            </View>


            <View style={{ padding: 20 }}>
                <View
                    style={{
                        borderBottomWidth: 1,
                        width: '90%',

                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomColor: phoneNumberFocus ? COLORS.red : COLORS.black,
                    }}
                >
                    <TextInput
                        placeholder="Tên zalo"
                        placeholderTextColor={COLORS.gray}
                        style={{ fontSize: 25, width: '90%' }}
                        onFocus={handleNameFocus}
                        onBlur={handleNameBlur}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />

                    <Pressable onPress={handleRemovePhoneNumber} >
                        <Icon name="remove" size={20} color={COLORS.black} />
                    </Pressable>
                </View>
            </View>

            <View style={{ paddingLeft: 20 }}>
                <Text>Lưu ý khi đặt tên:</Text>
                <Text>Không vi phạm Quy phạm đặt tên của Zalo</Text>
                <Text>Nên sử dụng tên thật để giúp bạn bè dễ nhận ra bạn</Text>
            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 20 }}>
                <TouchableOpacity style={{
                    backgroundColor: COLORS.lightblue,
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <Icon name="arrow-right" size={20} color={COLORS.white} />
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
});