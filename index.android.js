import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import WeixinTabBar from './tab';
import Movie2 from './movie2'
import Movie3 from './movie3'
import Movie4 from './movie4'
import SampleComponent from './SampleComponent'


class SampleAppMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['正在上映', '即将上映', '北美票房榜', 'Top榜'],
            tabIconNames: ['md-flame', 'md-videocam', 'logo-usd', 'md-thumbs-up'],
        };
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                renderTabBar={() => <WeixinTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'>

                <SampleComponent style={styles.content} tabLabel='key1'/>

                <Movie2 style={styles.content} tabLabel='key2'/>

                <Movie3 style={styles.content} tabLabel='key3'/>

                <Movie4 style={styles.content} tabLabel='key4'/>

            </ScrollableTabView>

        );
    }
}



const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        flex: 1
    }
});

AppRegistry.registerComponent('SampleAppMovies', () => SampleAppMovies);