import { CSSProperties } from 'react';

/
 * Utility functions for luxery dark AirBNB application.
 * This file contains common utility functions and types used throughout the application.
 */

/
 * Represents the configuration for a styled component in luxery dark AirBNB.
 */
export interface StyledComponentConfig {
  color?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
}

/
 * Custom type for the luxery dark AirBNB brand.
 */
export type LuxeryDarkAirbnbBrand = 'luxery dark AirBNB';

/
 * Generates a class name string based on the provided conditions.
 * 
 * @param baseClass - The base class name to start with.
 * @param conditions - An object representing class name conditions.
 * @returns A string of concatenated class names based on the conditions.
 * 
 * @example
 * const className = cn('button', { active: isActive, disabled: isDisabled });
 */
export function cn(baseClass: string, conditions: Record<string, boolean>): string {
  const conditionClasses = Object.keys(conditions)
    .filter((key) => conditions[key])
    .join(' ');
  return ${baseClass} ${conditionClasses}.trim();
}

/
 * Formats a price string for luxery dark AirBNB listings.
 * 
 * @param price - The price to format.
 * @returns A string representing the formatted price.
 * 
 * @example
 * const formattedPrice = formatPrice(150);
 */
export function formatPrice(price: number): string {
  return $${price.toFixed(2)};
}

/
 * Generates a style configuration for dark-themed components in luxery dark AirBNB.
 * 
 * @returns A CSSProperties object representing the dark theme styles.
 */
export function darkThemeStyles(): CSSProperties {
  return {
    color: 'pink',
    backgroundColor: 'black',
    transition: 'background-color 0.3s, color 0.3s',
  };
}

/
 * A utility function to create a luxurious dark design for buttons.
 * 
 * @param config - The configuration for the button style.
 * @returns A CSSProperties object for button styling.
 */
export function luxuriousButtonStyles(config: StyledComponentConfig): CSSProperties {
  return {
    color: config.color || 'pink',
    backgroundColor: config.backgroundColor || 'black',
    padding: config.padding || '12px 24px',
    margin: config.margin || '8px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.3s, transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };
}