//import liraries
import { images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// create a component
const CartButton = () => {
  const totalItems = 10;
  return (
    <TouchableOpacity className='cart-btn' onPress={() => {}}>
      <Image source={images.bag} className='size-5' resizeMode='contain' />
      {totalItems > 0 && (
        <View className='cart-badge'>
          <Text className='small-bold text-white'>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#2c3e50",
//   },
// });

//make this component available to the app
export default CartButton;
