import KUTE from '../objects/kute.js'
import coords from '../interpolation/coords.js'

// const SVGMorph = { property : 'path', defaultValue: [], interpolators: {numbers,coords} }, functions = { prepareStart, prepareProperty, onStart, crossCheck }

// Component functions
export function onStartSVGMorph(tweenProp){
  if (!KUTE[tweenProp] && this.valuesEnd[tweenProp]) {
    KUTE[tweenProp] = (elem, a, b, v) => {
      let path1 = a.pathArray, path2 = b.pathArray, len = path2.length;
      elem.setAttribute("d", (v === 1 ? b.original : `M${coords( path1, path2, len, v ).join('L')}Z`) );
    }
  }
}

// Component Base
const baseSVGMorph = {
  component: 'baseSVGMorph',
  property: 'path',
  Interpolate: coords,
  functions: {onStart:onStartSVGMorph}
}

export default baseSVGMorph