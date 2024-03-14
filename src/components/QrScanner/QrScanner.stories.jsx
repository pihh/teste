import {  View } from "react-native";
import QrScanner from "./QrScanner";

const QrScannerComponent = () => (
  <View style={{ padding: 16 }}>
   
    <QrScanner />
  </View>
);

const meta = {
  title: "Helpers/Qr Scanner",
  component: QrScannerComponent,
};

export default meta;

export const Default = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
