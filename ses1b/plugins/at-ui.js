import Vue from 'vue'
import AtComponent from 'at-ui'
import 'at-ui-style' // import css

import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

Vue.use(AmplifyPlugin, AmplifyModules);


//import ui-style or import the unbuilt version of SCSS
Vue.use(AtComponent)