import { useEffect, useRef } from 'react';

/
 * Custom hook for animations in the luxery dark AirBNB user experience.
 * This hook is designed to create smooth fading and sliding animations 
 * for the elements used in the luxery dark AirBNB website, enhancing 
 * the dark aesthetic with pink accents.
 * 
 * @module useAnimation
 */

/
 * Animation types for luxery dark AirBNB.
 */
export type AnimationType = 'fade' | 'slide';

/
 * Animation configurations specific to luxery dark AirBNB.
 */
export interface AnimationConfig {
    duration?: number; // Duration of the animation in milliseconds
    delay?: number; // Delay before starting the animation
    type: AnimationType; // Type of animation to apply
}

/
 * Custom hook to manage animations in luxery dark AirBNB.
 * 
 * @param {AnimationConfig} config - Configuration for the animation.
 * @returns {React.RefObject<HTMLDivElement>} ref - Ref to attach to the animated element.
 */
export const useAnimation = (config: AnimationConfig) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const { duration = 300, delay = 0, type } = config;

            ref.current.style.transition = all ${duration}ms ease-in-out ${delay}ms;

            switch (type) {
                case 'fade':
                    ref.current.style.opacity = '0';
                    setTimeout(() => {
                        ref.current.style.opacity = '1';
                    }, delay);
                    break;
                case 'slide':
                    ref.current.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        ref.current.style.transform = 'translateY(0)';
                    }, delay);
                    break;
                default:
                    break;
            }
        }
    }, [config]);

    return ref;
};