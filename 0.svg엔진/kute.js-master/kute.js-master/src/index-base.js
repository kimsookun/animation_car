import {version as Version} from './../package.json'
import Render from './core/render.js'
import Interpolate from './objects/interpolate.js'
import Objects from './objects/objectsBase.js'
import Util from './objects/util.js'
import Easing from './easing/easing-base.js'
import Internals from './core/internals.js'
import Selector from './util/selector.js'

import Animation from './animation/animationBase.js'

// TweenConstructor
import TweenBase from './tween/tweenBase.js'
// Interface only fromTo
import fromTo from './interface/fromTo.js'

// import baseTransform from './components/transformFunctionsBase.js'
import baseTransformMatrix from './components/transformMatrixBase.js'
import baseBoxModel from './components/boxModelBase.js'
import baseOpacity from './components/opacityPropertyBase.js'
// import {baseCrossBrowserMove} from './components/crossBrowserMove.js'

// const Transform = new Animation(baseTransform)
const Transform = new Animation(baseTransformMatrix)
const BoxModel = new Animation(baseBoxModel)
const Opacity = new Animation(baseOpacity)
// const Move = new Animation(baseCrossBrowserMove)
// support for kute-base.js ends here

export default {
  Animation,
  Components: {
    Transform,
    BoxModel,
    Opacity,
    // Move
  },

  TweenBase,
  fromTo, 

  Objects,
  Easing,
  Util,
  Render,
  Interpolate,
  Internals,
  Selector,
  Version
}