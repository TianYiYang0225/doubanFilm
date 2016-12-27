/**
 * Created by TYY on 2016/12/14.
 */
import React, {
    Component,
} from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
 class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.backFirst}>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
backFirst:{
    flex:1,
    paddingTop:15,
    textAlign: 'center',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    marginTop: 30,
    backgroundColor: '#00FFCC',
},
});
export default SecondPageComponent;