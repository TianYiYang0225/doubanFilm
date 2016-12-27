
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    Component,
} from 'react';

import {
    Image,
    AppRegistry ,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';


var REQUEST_URL = 'https://api.douban.com/v2/movie/top250';


class Movie4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
                    loaded: true,
                });
            });
    }
    render() {

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View>
                <Text style={styles.Top}>Top榜</Text>
            <ListView    style={styles.listView}
                         dataSource={this.state.dataSource}
                         renderRow={this.renderMovie}
            />
            </View>
        );

    }



    renderLoadingView() {
        return (
            <Image source={require('image!a')} style={styles.loading}>
            </Image>
        );
    }


    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.images.small}}
                    style={styles.small}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.original_title}>{movie.original_title}</Text>
                    <Text style={styles.average}>{"评分:"+movie.rating.average}</Text>
                    <Text style={styles.genres}>{"类型:"+movie.genres}</Text>
                    <Text style={styles.year}>{"年份:"+movie.year}</Text>
                </View>
            </View>
        );
    }

}






var styles = StyleSheet.create({
    loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:null,
        width:null,
        backgroundColor:'rgba(0,0,0,0)',
    },
    Top:{
        textAlign: 'center',
        fontSize:20,
        alignItems: 'center',
        color:'#FFFFFF',
        paddingTop:15,
        justifyContent: 'center',
        height: 50,
        backgroundColor:'#00FFFF',
    },
    content:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#EBEBEB',
        flex:1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderBottomWidth:1,
    },

    rightContainer: {
        flex: 1,

    },


    title: {
        //marginTop:-25,
        fontFamily:'Zocial',
        marginTop:-10,
        fontSize: 28,
        marginBottom: 8,
        textAlign:'center',

    },
    original_title:{
        textAlign:'center',
    },
    average:{
        marginTop:30,
        textAlign:'center',
    },
    genres:{
        textAlign:'center',
    },
    year: {
        textAlign:'center',
    },

    small: {
        width: 120,
        height: 150,
        marginTop:10,
        marginBottom:10,
    },
    listView: {
        paddingTop: 0,
        backgroundColor: '#F5FCFF',
    },

});



export default Movie4;