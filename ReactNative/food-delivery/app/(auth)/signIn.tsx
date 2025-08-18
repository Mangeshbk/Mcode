import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { signIn } from "@/lib/appwrite";
import * as Sentry from "@sentry/react-native";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function SignIn() {
  const [isSubmitting, setIsSubmmiting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const { email, password } = form;
    if (!email || !password)
      return Alert.alert("Error", "Please enter valid email & password");

    setIsSubmmiting(true);
    try {
      await signIn({ email, password });
      // Alert.alert("Sucsses", "User Signed in successfully");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
      Sentry.captureEvent(error);
    } finally {
      setIsSubmmiting(false);
    }
  };
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <CustomInput
        placeholder='Enter your email'
        value={form.email}
        onChangeText={(text) =>
          setForm((prev) => ({
            ...prev,
            email: text,
          }))
        }
        label='Email'
        keyboardType='email-address'
      />
      <CustomInput
        placeholder='Enter your password'
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({
            ...prev,
            password: text,
          }))
        }
        label='Password'
        secureTextEntry={true}
      />
      <CustomButton title='SignUp' isLoading={isSubmitting} onPress={submit} />
      {/* <Button title='SignUp' onPress={() => router.push("/signUp")} /> */}

      <View className='flex justify-center mt-5 flex-row gap-2'>
        <Text className='base-regular text-grey-100'>
          Don&apos;t have an account?
        </Text>
        <Link href={"/signUp"} className='base-bold text-primary'>
          Sign Up
        </Link>
      </View>
    </View>
  );
}
