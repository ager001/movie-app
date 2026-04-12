/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import TabIcon from '@/components/TabIcon';
import { icons } from '@/constants/icons';

const _layout = () => {
  return (
    <Tabs
      // Inside your _layout.tsx <Tabs> screenOptions:
screenOptions={{
  tabBarShowLabel: false,
  headerShown: false,
  tabBarItemStyle: {
    flex: 1, // This allows items to distribute space better
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: "#0F0D23",
    borderRadius: 50,
    marginHorizontal: 16, // Reduced from 20 to give icons more horizontal room
    marginBottom: 30,
    height: 64, // Increase this! 52 is too cramped for pills + text
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    paddingBottom: 0, // Prevents iOS bottom padding from pushing icons up
  }
}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#16142E", // Slightly lighter than pure black for depth
    borderRadius: 30,
    marginHorizontal: 24,
    marginBottom: Platform.OS === 'ios' ? 30 : 20,
    height: 64,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)", // Subtle "glass" border
    
    // Shadow/Elevation for the premium "floating" look
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  tabItem: {
    paddingVertical: 10,
  }
});

export default _layout;