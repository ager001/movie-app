import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { images } from '@/constants/images';
import React from 'react';

// Define the shape of the props for the TabIcon component
type TabIconProps = {
  focused: boolean;
  icon: any;
  title: string;
};

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  // Render the active state with a pill-shaped background and label
  if (focused) {
    return (
      <View style={styles.activeWrapper}>
        <ImageBackground
          source={images.highlight}
          style={styles.pill}
          imageStyle={{ borderRadius: 30 }}
          resizeMode="stretch"
        >
          {/* Active icon with a darker tint for contrast against the highlight */}
          <Image
            source={icon}
            tintColor="#151312"
            style={styles.iconStyle}
          />
          {/* Active title text displayed next to the icon */}
          <Text 
            numberOfLines={1} 
            style={styles.textStyle}
          >
            {title}
          </Text>
        </ImageBackground>
      </View>
    );
  }

  // Render the inactive state with only a muted icon
  return (
    <View style={styles.inactiveWrapper}>
      <Image
        source={icon}
        tintColor="#A8B5DB"
        style={styles.inactiveIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeWrapper: {
    // Parent container ensuring horizontal alignment and centering
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pill: {
    // Pill shape container using flexDirection row to keep items on the same line
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16, // Horizontal padding for better spatial balance
    paddingVertical: 8,
    height: 44,
    borderRadius: 30,
    // Prevents the pill from shrinking too much on short titles
    minWidth: 80, 
  },
  iconStyle: {
    width: 18,
    height: 18,
  },
  textStyle: {
    color: '#151312',
    fontWeight: '700',
    fontSize: 12,
    marginLeft: 8, // Spacing between icon and title
    includeFontPadding: false, // Fixes vertical alignment inconsistencies on Android
  },
  inactiveWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveIcon: {
    width: 24,
    height: 24,
  }
});

export default TabIcon;
  
