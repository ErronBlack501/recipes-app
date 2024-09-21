import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function CustomDrawerContent(props: any) {
  const router = useRouter();
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ backgroundColor: "#dde3fe" }}
    >
      <DrawerItemList {...props} />
      <DrawerItem label={"Logout"} onPress={() => router.replace("/")} />
    </DrawerContentScrollView>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ drawerHideStatusBarOnOpen: true }}
        drawerContent={CustomDrawerContent}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="recipes"
          options={{
            title: "Recipes",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="categories"
          options={{
            title: "Categories",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
