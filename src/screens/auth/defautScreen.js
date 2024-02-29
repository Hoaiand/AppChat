import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';

export default function DefautScreen() {

    const navigation = useNavigation();


    const [selectedLanguage, setSelectedLanguage] = useState('Tiếng việt');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    return (

        <SafeAreaView style={styles.container} >
            <View>
                <Text style={{ fontSize: 50, fontWeight: 700, color: '#1877f2' }}>Zalo</Text>
            </View>

            <View style={{ height: 300 }}>
                <Text>IMGS</Text>
            </View>

            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.blueZalo,
                        width: 300,
                        height: 50,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => { navigation.navigate(ROUTES.LOGIN) }
                    }
                >
                    <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 700 }}>Đăng nhập</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.grayZalo,
                        width: 300,
                        height: 50,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                    onPress={() => { navigation.navigate(ROUTES.REGISTION) }}
                >
                    <Text style={{ color: COLORS.black, fontSize: 20, fontWeight: 700 }}>Đăng ký</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity
                        onPress={() => handleLanguageChange('Tiếng việt')}
                        style={{
                            borderBottomWidth: selectedLanguage === 'Tiếng việt' ? 2 : 0,
                            borderBottomColor: '#000',
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: selectedLanguage === 'Tiếng việt' ? 'bold' : '500' }}>
                            Tiếng việt
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity
                        onPress={() => handleLanguageChange('English')}
                        style={{
                            borderBottomWidth: selectedLanguage === 'English' ? 2 : 0,
                            borderBottomColor: '#000',
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: selectedLanguage === 'English' ? 'bold' : '500' }}>
                            English
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
