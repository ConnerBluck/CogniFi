/* eslint-disable react/prop-types */
import * as React from 'react';
import Achievements from "../components/Achievements";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';
import PageContainer from '../components/PageContainer';
import OverviewStatusContainer from '../components/OverviewStatusContainer';
import useCurrentUser from "../utils/UseCurrentUser";


//navigation prop needed to move between pages
const Overview = ({navigation}) => {
  const [user, setUser] = useCurrentUser();
  if(user === null){
    return(<Text>loading</Text>)
  }
  return(
    <PageContainer>
      <View style={{flex: 1}}>
        <OverviewStatusContainer user={user}/>
        <Achievements user={user} />
      </View>
    </PageContainer>
  )
}
export default Overview;