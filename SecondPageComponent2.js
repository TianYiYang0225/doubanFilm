/**
 * Created by TYY on 2016/12/14.
 */
import React, {
    Component
} from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
class SecondPageComponent2 extends React.Component {

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
                    <Text style={styles.backSecond}>返回即将上映</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    backSecond:{
        width: 100,
        height: 50,
        marginTop: 50,
        paddingTop:15,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flex:1,
        color: '#FFFFFF',
        backgroundColor: '#00FF00',
    },
});
export default SecondPageComponent2;