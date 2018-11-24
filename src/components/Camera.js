//Not using this anymore using the default camera

// import React, { Component } from "react";
// import {
//   PermissionsAndroid,
//   Alert,
//   TouchableOpacity,
//   StyleSheet,
//   CameraRoll,
//   Text,
//   View
// } from "react-native";
// import { RNCamera } from "react-native-camera";
// import { Button, Icon } from 'native-base';

// export default class Camera extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cameraType: 'front'
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={styles.preview}
//           ref={ref => {
//             this.camera = ref;
//           }}
//           type={this.state.cameraType === 'front' ? RNCamera.Constants.Type.front :RNCamera.Constants.Type.back }
//           permissionDialogTitle={"Permission to use camera"}
//           permissionDialogMessage={
//             "We need your permission to use your camera phone"
//           }
//         />
//         <View
//           style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
//         >
//         <Button info style={{width:80}}>
//         <Icon name="flash-off" type="MaterialIcons" />
//         </Button>
//           {/* <TouchableOpacity
//             onPress={this.changeCameraType}
//             style={styles.capture}
//           >
//             <Text style={{ fontSize: 14 }}> SNAP </Text>
//           </TouchableOpacity> */}
//         </View>
//       </View>
//     );
//   }
  
//   changeCameraType = () => {
//     this.state.cameraType === 'front'? this.setState({cameraType: 'back'}) : this.setState({cameraType: 'front'})
//    }
   
//   requestExternalStoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: "My App Storage Permission",
//           message:
//             "My App needs access to your storage " +
//             "so you can save your photos"
//         }
//       );
//       return granted;
//     } catch (err) {
//       console.error("Failed to request permission ", err);
//       return null;
//     }
//   };

//   takePicture = async function() {
//     try {
//       if (this.camera) {
//         const options = { quality: 0.5, base64: true };
//         const data = await this.camera.takePictureAsync(options);
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: "My App Storage Permission",
//             message:
//               "My App needs access to your storage " +
//               "so you can save your photos"
//           }
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           CameraRoll.saveToCameraRoll(data.uri);
//           Alert.alert("saved at", data.uri);
//         } else {
//           Alert.alert("Denied", "Permissions Denied");
//         }
//       }
//     } catch (err) {
//       Alert.alert("Error", err);
//     }
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "black"
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: "center",
//     margin: 20
//   },
//   preview: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   }
// });
