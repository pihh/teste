import { Linking, Text, View } from "react-native";
import { Button } from "./Button";
import { AntDesign } from "@expo/vector-icons";

const ButtonComponent = () => {
  const ButtonLeft = ({ children }) => <Text className="left">{children}</Text>;
  const ButtonRight = ({ children }) => (
    <Text className="right">{children}</Text>
  );

  Button.Right = ButtonRight;
  Button.Left = ButtonLeft;

  return (
    <View style={{ padding: 16 }}>
      <Text>
        Thanks for trying out Storybook, follow the{" "}
        <Text
          style={{
            color: "blue",
            textDecorationLine: "underline",
            textDecorationColor: "blue",
          }}
          onPress={() =>
            Linking.openURL(
              "https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/"
            )
          }
        >
          tutorial
        </Text>{" "}
        to learn how to create your own stories

                 
        <Button width="fit" height="sm" loading={true}>
         
          <View>
            <Text>Small button with loading</Text>
          </View>
      
        </Button>
        <Button width="fit" height="sm" loading={false}>
         
          <View>
            <Text>Small button with loading</Text>
          </View>
      
        </Button>
        <Button >
         
          <View>
            <Text>xxx</Text>
          </View>
      
        </Button>
        <Button>
          <Button.Left>
            <AntDesign name="plus" size={16}  />
          </Button.Left>
          <View>
            <Text>xxx</Text>
          </View>
          <Button.Right>
            <AntDesign name="minus" size={16}  />
          </Button.Right>
        </Button>
    
        <Button color="error">
          <Button.Left>
            <AntDesign name="plus" size={16}  />
          </Button.Left>
          <View>
            <Text>xxx</Text>
          </View>
          <Button.Right>
            <AntDesign name="minus" size={16}  />
          </Button.Right>
        </Button>
        <Button color="warning">
          <Button.Left>
            <AntDesign name="plus" size={16}  />
          </Button.Left>
          <View>
            <Text>xxx</Text>
          </View>
          <Button.Right>
            <AntDesign name="minus" size={16}  />
          </Button.Right>
        </Button>
        <Button color="success">
          <Button.Left>
            <AntDesign name="plus" size={16}  />
          </Button.Left>
          <View>
            <Text>xxx</Text>
          </View>
          <Button.Right>
            <AntDesign name="minus" size={16}  />
          </Button.Right>
        </Button>
        <Button color="neutral">
          <Button.Left>
            <AntDesign name="plus" size={16}  />
          </Button.Left>
          <View>
            <Text>xxx</Text>
          </View>
          <Button.Right>
            <AntDesign name="minus" size={16}  />
          </Button.Right>
        </Button>
        
        <Button>
          <Button.Left>
            <AntDesign name="plus" size={16}  />
          </Button.Left>
          <View>
            <Text>xxx</Text>
          </View>
          <Button.Right>
            <AntDesign name="minus" size={16}  />
          </Button.Right>
        </Button>
      </Text>
    </View>
  );
};

const meta = {
  title: "Components/Button",
  component: ButtonComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
