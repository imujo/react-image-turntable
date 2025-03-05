import * as react from 'react';
import { RefObject, HtmlHTMLAttributes } from 'react';

interface ReactImageTurntableAutoRotateProps {
    /**
     * Whether to automatically rotate the turntable.
     * @default false
     */
    enabled?: boolean;
    /**
     * The speed in ms at which the turntable autorotates.
     * @default 200
     */
    interval?: number;
}
interface UseReactImageTurntableProps {
    /** Autorotation configuration. */
    autoRotate?: ReactImageTurntableAutoRotateProps;
    /** The array index of the image to show on first load. */
    initialImageIndex?: number;
    /** List of image `src` attributes. */
    images: string[];
    /** The amount a "drag" has to move before an image changes to next or previous. */
    movementSensitivity?: number;
    /** Callback to trigger whenever the active index changes. */
    onIndexChange?: (index: number) => void;
    setActiveImageIndex?: React.Dispatch<React.SetStateAction<number>>;
    activeImageIndex?: number;
}
interface UseReactImageTurntableReturn extends Pick<UseReactImageTurntableProps, 'images'> {
    /** Array index of the current image. */
    activeImageIndex: number;
    /** Set the active image index. */
    setActiveImageIndex: (index: number) => void;
    /** The ref of the root turntable element. */
    ref: RefObject<HTMLDivElement>;
}
/** Base props *and* all available HTML element props. */
type ReactImageTurntableProps = HtmlHTMLAttributes<HTMLDivElement> & UseReactImageTurntableReturn;

/** Base `className` for images. */
declare const CLASS_NAME_IMG = "__react-image-turntable-img";
/** `className` of first rendered image (sets the size of the main component). */
declare const CLASS_NAME_IMG_PRIMARY = "__react-image-turntable-img--primary";
/** `className` of subsequent images. */
declare const CLASS_NAME_IMG_SECONDARY = "__react-image-turntable-img--secondary";
declare const ReactImageTurntable: react.ForwardRefExoticComponent<Omit<ReactImageTurntableProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const useReactImageTurntable: ({ initialImageIndex, autoRotate, images, movementSensitivity, onIndexChange, setActiveImageIndex, activeImageIndex, }: UseReactImageTurntableProps) => UseReactImageTurntableReturn;

export { CLASS_NAME_IMG, CLASS_NAME_IMG_PRIMARY, CLASS_NAME_IMG_SECONDARY, ReactImageTurntable, type ReactImageTurntableAutoRotateProps, type ReactImageTurntableProps, type UseReactImageTurntableProps, type UseReactImageTurntableReturn, useReactImageTurntable };
