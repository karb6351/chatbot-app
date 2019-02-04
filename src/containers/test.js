import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'


// const ppl = [
//     {
//         name: "david"
//     },
//     {
//         name: "billy"
//     },
//     {
//         name: "tony"
//     }
// ]

class Test extends Component {

    constructor(props){
        super(props)
        this.state = {
            myMargin: 0,
            padding: 15
        }

    }

    handler(){
        this.setState({
            ...this.state,
            myMargin: 15
        })
    }

    render(){
        const p = this.props.people

        const test = p.map((item, index) => {
            return (<Text style={styles.tryText} key={index}>{item.name}</Text>);
        })
        // const test = [<Text>0</Text>, <Text>1</Text>, <Text>2</Text>]
        return (
            <View style={styles.container} onPress={() => this.handler}>
                {test}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 5
        
    },
    tryText:{
        margin: 5
    }
})

export default Test