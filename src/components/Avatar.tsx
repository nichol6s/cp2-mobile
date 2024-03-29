import { forwardRef, useState } from "react";

import { View, StyleSheet, Image } from "react-native";

const Avatar = forwardRef< React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>(({ style, ...props }, ref) => (
    <View
        ref={ref}
        style={[styles.avatar,  style]}
        {...props}
    />
));

Avatar.displayName = 'Avatar';

const AvatarImage = forwardRef<React.ElementRef<typeof Image>, React.ComponentPropsWithoutRef<typeof Image>>(({ style, ...props }, ref) => {
  return (
    <Image
      ref={ref}
      style={[styles.avatarImg, style]}
      {...props}
    />
  );
});

AvatarImage.displayName = 'AvatarImage';

export { Avatar, AvatarImage };

const styles = StyleSheet.create({
    avatar: {
        display: "flex",
        position: "relative",
        height: 40,
        width: 40,
        flexShrink: 0,
        overflow: "hidden",
        borderRadius: 360,
    },
    avatarImg: {
        aspectRatio: 1,
        height: "100%",
        width: "100%",
    }
});