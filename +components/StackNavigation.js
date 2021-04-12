import WPP from '../screens/WebPayPal'
import Payment from '../screens/Payment'
import {createStackNavigator} from 'react-navigation-stack'

export const StackNavigator = createStackNavigator ({
    Payment:{screen:Payment},
    WPP:{screen:WPP},
},{
    initialRouteName:'Payment'
}
)