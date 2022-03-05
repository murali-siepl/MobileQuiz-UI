import DropDownPicker from "react-native-dropdown-picker";

import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";
import { ErrorMessage } from "./ErrorModal";

const Dropdown = ({
  open,
  setOpen,
  items,
  setValue,
  value,
  setItems,
  holder,
  label,
  onChangeText,
  error,
}) => {
  const [touched, setToched] = useState(false);
  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        defaultIndex={0}
        onChangeItem={(item) => console.log(item.label, item.value)}
        onChangeValue={onChangeText}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={holder}
        placeholderStyle={styles.placeholder}
        containerStyle={styles.dropdown}
        labelStyle={styles.placeholder}
        style={styles.container}
        dropDownContainerStyle={styles.dropdownContainer}
        selectedItemContainerStyle={{
          backgroundColor: "#FFC83D",
        }}
        onPress={() => {
          setToched(true);
        }}
        ArrowUpIconComponent={() => (
          <Image
            source={require("../../assets/images/Feedback/dropdownUp.png")}
          />
        )}
        ArrowDownIconComponent={() => (
          <Image
            source={require("../../assets/images/Feedback/dropdownDown.png")}
          />
        )}
        showTickIcon={false}
      />
      {error && touched && (
        <ErrorMessage style={{ marginLeft: 10 }} error={error} />
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  view: {
    marginBottom: 20,
  },

  label: {
    color: "#BBBBBB",
    fontWeight: "600",
    marginBottom: 5,
    fontWeight: "700",
  },
  container: {
    backgroundColor: "#23313C",
    borderColor: "#2E4150",
    borderWidth: 1,
    height: 40,
  },
  dropdown: {
    borderRadius: 10,
  },
  placeholder: { color: "#999999", fontSize: 12 },
  dropdownContainer: {
    backgroundColor: "#23313C",
    borderColor: "white",
    borderWidth: 0.1,
    zIndex: 100,
  },
});
