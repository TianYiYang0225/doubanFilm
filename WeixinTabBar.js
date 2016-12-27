/**
 * Created by TYY on 2016/12/4.
 */

import React,{
    Component
} from 'react';
import {
StyleSheet,
View,
TouchableOpacity,
Text,
}from 'react-native';

import Icon from  'react-native-vector-icons';


class  WeixinTabBar extends Component{

    propTypes={
        goToPage:React.PropTypes.func,
        activeTab:React.PropTypes.number,
        tabNames:React.propTypes.array,
        tabIconNames:React.propTypes.array,
    }

    setAnimationValue({value}){
        console.log(value);
    }

    componentDidMount(){
        this.props.scrollValue.addListener(this.setAnimationValue());
    }

    renderTabOption(tab,i){
        let  color=this.props.activeTab== i ? '#6B8E23':'#ADADAD';
        return(
            <TouchableOpacity onPress={()=>this.props.goToPage(i) } style={style.tab}>

                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]}
                        size={30}
                        color={color}/>
                    <Text style={{color:color}}>
                        {this.props.tabNames[i]}
                        </Text>
                    </View>
                </TouchableOpacity>
        );
    }
    render(){
        return(
            <View style={styles.tabs}>
                {this.props.tabs.map((tab,i)=>this.renderTabOption(tab,i))}
                </View>
        );
    }
}


const  styles= StyleSheet.create({
    tabs:{
        flexDirection:'row',
        height:50,
    },

    tab:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});


export default WeixinTabBar;