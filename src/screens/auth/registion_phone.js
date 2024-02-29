// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import COLORS from '../../constants/colors';
// import { useNavigation } from '@react-navigation/native';
// import { useState } from 'react';
// import PhoneInput from 'react-native-phone-input'

// export default function registion_phone() {





//     return (
//         <SafeAreaView style={styles.container}>

//             <View style={{ backgroundColor: COLORS.grayZalo, padding: 20 }}>
//                 <Text style={{ fontSize: 15, fontWeight: 500 }}>Nhập số điện thoại của bạn để tạo tài khoản mới</Text>
//             </View>

//             <View>
//                 <View style={styles.container}>
//                     <PhoneInput
//                         ref={(ref) => { this.phone = ref; }}
//                         onPressFlag={this.onPressFlag}
//                         initialCountry={'us'}
//                         initialValue="13178675309"
//                         textProps={{
//                             placeholder: 'Enter a phone number...'
//                         }}
//                     />

//                     <ModalPickerImage
//                         ref={(ref) => { this.myCountryPicker = ref; }}
//                         data={this.state.pickerData}
//                         onChange={(country) => { this.selectCountry(country) }}
//                         cancelText='Cancel'
//                     />
//                 </View>
//             </View>


//             <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 20 }}>
//                 <TouchableOpacity style={{
//                     backgroundColor: COLORS.lightblue,
//                     borderRadius: 50,
//                     width: 50,
//                     height: 50,
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }} >
//                     <Icon name="arrow-right" size={20} color={COLORS.white} />
//                 </TouchableOpacity>
//             </View>

//         </SafeAreaView >
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',


//     },
// });