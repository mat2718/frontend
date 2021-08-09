import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


export const DrawerContent: React.FC = (props: any) => {
    const navigation = useNavigation();

    const signOut = () => {
      console.log("SIGNED OUT")
        // dispatch({
        //     type: AppAction.LOGOUT,
        //     payload: {}
        // })
    }

    //the onPress is the navigationing so if you need to change it to get to your screens change it to what you named your screens. these are placeholders for now- Kai

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={require('../assets/images/revatureFav.png')}
                                size={60}
                                style={{ marginTop: 8 }}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>{"Revature Manager"}</Title>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate("Root") }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {navigation.navigate('Profile') }}
                        />
                        <DrawerItem labelStyle={styles.label}
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {navigation.navigate("Settings") }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="search-web"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Search"
                            onPress={() => {navigation.navigate("Search") }}
                        />
                    </Drawer.Section>
                </View>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>

            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    
    label:{

    }
});