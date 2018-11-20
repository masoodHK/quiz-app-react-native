import React, { Component } from 'react'
import { Camera, Permissions, FaceDetector } from 'expo'
import { Text, View } from 'react-native'

export class CameraScreen extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
    };

    async componentDidMount() {
        const res = await Permissions.getAsync(Permissions.CAMERA);
        if(res.status !== "granted") {
            const askPermission = await Permissions.askAsync(Permissions.CAMERA);
            if(askPermission.status === 'granted') {
                this.setState({ hasCameraPermission: "granted"})
            }
        }
        else {
            this.setState({ hasCameraPermission: "granted"})
        }
    }

    render() {
        const { hasCameraPermission, type } = this.state
        if(hasCameraPermission === null) {
            return <View />
        }
        else if(hasCameraPermission === false) {
            return <Text style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>No access to camera</Text>
        }
        else {
            return (<View style={ {flex: 1} }>
                <Camera type={type}
                    style={ {flex: 1} }
                    onFacesDetected={(e) => {
                        console.log(e);
                        if(e.faces.length === 1) {
                            console.log("it should work now");
                            this.props.navigation.navigate("Home");
                        }
                    }}
                    faceDetectorSettings={{
                        mode: FaceDetector.Constants.Mode.fast,
                        detectLandmarks: FaceDetector.Constants.Mode.none,
                        runClassifications: FaceDetector.Constants.Mode.none
                    }}>
                </Camera>
            </View>)
        }
    }
}

export default CameraScreen
