/**
 * Created by TYY on 2016/12/15.
 */
import React, {
    Component,
} from 'react';
import {
    View,
    Navigator
} from 'react-native';
import Movie from './movie';
class SampleComponent extends React.Component {
    render() {
        let defaultName = 'movie';
        let defaultComponent = Movie;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}
export default SampleComponent