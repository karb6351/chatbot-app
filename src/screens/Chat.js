import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import {ScrollView} from 'react-native'

/*import Example  from '../containers/testchat'*/
import TestHome  from '../containers/TestHome'
import Testscroll from'../containers/testscroll'

const ppl = [
  {
      name: "david"
  },
  {
      name: "billy"
  },
  {
      name: "tony"
  }
]

export default class Chat extends Component {
  
  render() {
    return (
      /*<SafeAreaView>
        <Test people={ppl} />
      </SafeAreaView>*/
      <SafeAreaView>
        <TestHome/>
          <ScrollView>
            <Testscroll routeName={"Try"} title={"MotherFucker"}/>
            <Testscroll title={"Samsuel L Jackson"}/>
            <Testscroll title={"Nick Fury"}/>
          </ScrollView>
      </SafeAreaView>
        
      
    )
  }
}
