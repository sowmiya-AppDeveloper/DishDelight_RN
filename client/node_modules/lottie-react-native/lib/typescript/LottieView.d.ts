import React from 'react';
import { ViewProps } from 'react-native';
import type { LottieViewProps } from './LottieView.types';
type Props = LottieViewProps & {
    containerProps?: ViewProps;
};
export declare class LottieView extends React.PureComponent<Props, {}> {
    static defaultProps: Props;
    private lottieAnimationViewRef;
    constructor(props: Props);
    play(startFrame?: number, endFrame?: number): void;
    reset(): void;
    pause(): void;
    resume(): void;
    private onAnimationFinish;
    private onAnimationFailure;
    private captureRef;
    private parsePossibleSources;
    render(): React.ReactNode;
}
export {};
//# sourceMappingURL=LottieView.d.ts.map