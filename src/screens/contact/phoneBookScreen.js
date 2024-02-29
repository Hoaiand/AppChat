import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants';





export default function phoneBookScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 10, backgroundColor: COLORS.white }}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ backgroundColor: COLORS.blueZalo, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                        <Ionicons name='person-add' size={20} color={COLORS.white} />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: 500, paddingLeft: 10 }}>Lời mời kết bạn</Text>
                </Pressable>


                <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ backgroundColor: COLORS.blueZalo, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                        <Ionicons name='person-add' size={20} color={COLORS.white} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, fontWeight: 500, paddingLeft: 10 }}>Danh bạ máy</Text>
                        <Text style={{ fontSize: 13, fontWeight: 300, paddingLeft: 10 }}>Các liên hệ có cùng zalo</Text>
                    </View>
                </Pressable>



                <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ backgroundColor: COLORS.blueZalo, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                        <Ionicons name='person-add' size={20} color={COLORS.white} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, fontWeight: 500, paddingLeft: 10 }}>Lịch sinh nhật</Text>
                        <Text style={{ fontSize: 13, fontWeight: 300, paddingLeft: 10 }}>Theo dõi sinh nhật của bạn bè</Text>
                    </View>
                </Pressable>
            </View>


            <View style={{ marginTop: 5, backgroundColor: COLORS.white, flexDirection: 'row', padding: 10 }}>
                <View style={{ borderRadius: 15, borderWidth: 1, width: 100, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Tất cả</Text>
                    <Text></Text>
                </View>

                <View style={{ borderRadius: 15, borderWidth: 1, width: 150, height: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                    <Text>Mới truy cập</Text>
                    <Text></Text>
                </View>
            </View>

            <View>

            </View>


        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.grayLight,

    },
});
