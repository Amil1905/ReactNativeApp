import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack'
import SecondPage from './Navigator/SecondPage';
import Login from './Navigator/Login';
import ThirdPage from './Navigator/AppUsers/ThirdPage';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Welcome !',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignItems:'center',
            justifyContent:'center',
            marginLeft:135          
          },
        }} />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{
          title: 'Home Page',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignItems:'center',
            justifyContent:'center',
            marginLeft:80           
          },
        }} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} options={({ route }) => ({ title: route.params.item.title, headerStyle: {
            backgroundColor: '#f4511e',  
          }, headerTintColor:'#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'#fff'
          },}) } />       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
