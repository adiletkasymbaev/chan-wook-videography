import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({tab, focused}: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center rounded-full
                items-center overflow-hidden" 
            >
                <Image source={tab.icon} tintColor="#151312" className="size-5" />
                <Text
                    className="text-secondary text-base font-semibold ml-2"
                >
                    {tab.title}
                </Text>
            </ImageBackground>  
        )
    } else {
        return (
            <View
                className="size-full justify-center items-center mt-4 rounded-full"
            >
                <Image
                    source={tab.icon}
                    tintColor="#A8B5DB"
                    className="size-5"
                />
            </View>
        )
    }
}

const _Layout = () => {
    const tabs = [
        {title: 'Home', name: 'index', icon: icons.home},
        {title: 'Search', name: 'search', icon: icons.search},
        {title: 'Saved', name: 'saved', icon: icons.save},
        {title: 'Profile', name: 'profile', icon: icons.person},
    ]

  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarStyle: {
                backgroundColor: '#0F0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#0F0D23'
            }
        }}
    >
        {tabs.map(tab => {
            return (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <>
                                <TabIcon focused={focused} tab={tab}/>
                            </>
                        )
                    }}
                />
            )
        })}
    </Tabs>
  )
}

export default _Layout