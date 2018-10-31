import Vue from 'vue'

/* 在此注册自定义组件 */

import LoginBox from './LoginBox'
import PrettyTips from './PrettyTips'
import IdentifyCode from './IdentifyCode'
import PureNavMenu from './PureNavMenu'
import QuillEditor from './QuillEditor'

Vue.component(LoginBox.name, LoginBox)
Vue.component(PrettyTips.name, PrettyTips)
Vue.component(IdentifyCode.name, IdentifyCode)
Vue.component(PureNavMenu.name, PureNavMenu)
Vue.component(QuillEditor.name, QuillEditor)
