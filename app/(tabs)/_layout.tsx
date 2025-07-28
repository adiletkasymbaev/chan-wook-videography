import { Tabs } from 'expo-router'
import React from 'react'

const _Layout = () => {
    const tabs = [
        {title: 'Home', name: 'index'},
        {title: 'Search', name: 'search'},
        {title: 'Saved', name: 'saved'},
        {title: 'Profile', name: 'profile'},
    ]

  return (
    <Tabs>
        {tabs.map(tab => {
            return (
                <Tabs.Screen
                    name={tab.name}
                    options={{
                        title: tab.title,
                        headerShown: false
                    }}
                />
            )
        })}
    </Tabs>
  )
}

export default _Layout