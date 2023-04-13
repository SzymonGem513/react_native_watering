import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaffed",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    letterSpacing: 0.8,
  },
  sensorContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plantName: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#213d1d",
  },
  plantTime: {
    fontSize: 20,
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    position: "absolute",
    top: 0,
    left: 0,
    margin: 40,

    width: 45,
    height: 45,
    borderColor: "#5e8c61",
    borderWidth: 3,
    zIndex: 999,
  },
  backButtonText: {
    fontSize: 20,
    marginLeft: 2,
    fontWeight: "700",
    color: "#5e8c61",
    lineHeight: 17,
  },
  waterButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },

  waterButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    backgroundColor: "#5e8c61",
    color: "#fff",
  },
  manualButton: {
    color: "#fff",
    borderColor: "#5e8c61",
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  manualButtonText: {
    color: "#5e8c61",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  header: {
    display: "flex",
  },
  sensorInfoContainer: {
    marginTop: 35,
    // borderWidth: 1,
    // borderRadius: 20,
    // borderColor: "#c2e0be",

    padding: 30,
  },
  sectionTitle: {
    color: "#213d1d",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10,
  },
  careInfoItem: {
    margin: 10,
  },
  careInfoItemTitle: {
    fontWeight: 700,
    marginVertical: 5,
    color: "#213d1d",
  },
  careInfoItemText: {
    fontWeight: 400,
  },
});
