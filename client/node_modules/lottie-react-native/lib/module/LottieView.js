function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { Image, processColor } from 'react-native';
import NativeLottieAnimationView, { Commands } from './specs/LottieAnimationViewNativeComponent';
const defaultProps = {
  source: undefined,
  progress: 0,
  speed: 1,
  loop: true,
  autoPlay: false,
  enableMergePathsAndroidForKitKatAndAbove: false,
  cacheComposition: true,
  useNativeLooping: false,
  resizeMode: 'contain',
  colorFilters: [],
  textFiltersAndroid: [],
  textFiltersIOS: []
};
export class LottieView extends React.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "onAnimationFinish", evt => {
      var _this$props$onAnimati, _this$props;
      (_this$props$onAnimati = (_this$props = this.props).onAnimationFinish) === null || _this$props$onAnimati === void 0 ? void 0 : _this$props$onAnimati.call(_this$props, evt.nativeEvent.isCancelled);
    });
    _defineProperty(this, "onAnimationFailure", evt => {
      var _this$props$onAnimati2, _this$props2;
      (_this$props$onAnimati2 = (_this$props2 = this.props).onAnimationFailure) === null || _this$props$onAnimati2 === void 0 ? void 0 : _this$props$onAnimati2.call(_this$props2, evt.nativeEvent.error);
    });
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.onAnimationFinish = this.onAnimationFinish.bind(this);
    this.captureRef = this.captureRef.bind(this);
  }
  play(startFrame, endFrame) {
    Commands.play(this.lottieAnimationViewRef, startFrame ?? -1, endFrame ?? -1);
  }
  reset() {
    Commands.reset(this.lottieAnimationViewRef);
  }
  pause() {
    Commands.pause(this.lottieAnimationViewRef);
  }
  resume() {
    Commands.resume(this.lottieAnimationViewRef);
  }
  captureRef(ref) {
    if (ref === null) {
      return;
    }
    this.lottieAnimationViewRef = ref;
    if (this.props.autoPlay === true) {
      this.play();
    }
  }
  parsePossibleSources() {
    const {
      source
    } = this.props;
    if (typeof source === 'string') {
      return {
        sourceName: source
      };
    }
    if (typeof source === 'object' && !source.uri) {
      return {
        sourceJson: JSON.stringify(source)
      };
    }
    if (typeof source === 'object' && source.uri) {
      // uri contains .lottie extension return sourceDotLottieURI
      if (source.uri.includes('.lottie')) {
        return {
          sourceDotLottieURI: source.uri
        };
      }
      return {
        sourceURL: source.uri
      };
    }
    if (typeof source === 'number') {
      return {
        sourceDotLottieURI: Image.resolveAssetSource(source).uri
      };
    }
    return undefined;
  }
  render() {
    var _this$props$colorFilt;
    const {
      style,
      source,
      autoPlay,
      duration,
      textFiltersAndroid,
      textFiltersIOS,
      resizeMode,
      ...rest
    } = this.props;
    const sources = this.parsePossibleSources();
    const speed = duration && sources.sourceJson && source.fr ? Math.round(source.op / source.fr * 1000 / duration) : this.props.speed;
    const colorFilters = (_this$props$colorFilt = this.props.colorFilters) === null || _this$props$colorFilt === void 0 ? void 0 : _this$props$colorFilt.map(colorFilter => ({
      ...colorFilter,
      color: processColor(colorFilter.color)
    }));
    return /*#__PURE__*/React.createElement(NativeLottieAnimationView, _extends({
      ref: this.captureRef
    }, rest, {
      colorFilters: colorFilters,
      textFiltersAndroid: textFiltersAndroid,
      textFiltersIOS: textFiltersIOS,
      speed: speed,
      style: style,
      onAnimationFinish: this.onAnimationFinish,
      onAnimationFailure: this.onAnimationFailure,
      autoPlay: autoPlay,
      resizeMode: resizeMode
    }, sources));
  }
}
_defineProperty(LottieView, "defaultProps", defaultProps);
//# sourceMappingURL=LottieView.js.map