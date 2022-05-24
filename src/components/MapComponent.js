import React from "react";
import { WebView } from "react-native-webview";
import { View } from "react-native";

export default function Map() {
  return (
      <View style={{width:250, height:250, justifyContent:'center', borderWidth:2, borderColor:'black', borderRadius:3}}>
    <WebView
      originWhitelist={["*"]}
      source={{
        html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.563321650599!2d0.1135247!3d49.49275519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e02f1949becc93%3A0xdf76d5616f1c835!2s10%20Pl.%20L%C3%A9on%20Meyer%2C%2076600%20Le%20Havre!5e0!3m2!1sfr!2sfr!4v1653393015740!5m2!1sfr!2sfr" width="1200" height="1200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      }}
    />
    </View>
  );
}
