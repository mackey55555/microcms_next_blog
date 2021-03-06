/**
 * common/icons/FaceBookIcon
 * @package Component
 */
import React from 'react'

/**
 * props
 */
export type FaceBookIconProps = {
  size?: number
  color?: string
}

/**
 * FaceBookIcon
 * @param {FaceBookIconProps} props
 * @returns
 */
export const FaceBookIcon: React.FC<FaceBookIconProps> = (
  props: FaceBookIconProps
) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.0389 0H1.63368C1.23915 0 0.92041 0.314992 0.92041 0.704877V16.9171C0.92041 17.3069 1.23915 17.6219 1.63368 17.6219H18.0389C18.4335 17.6219 18.7522 17.3069 18.7522 16.9171V0.704877C18.7522 0.314992 18.4335 0 18.0389 0ZM15.9794 5.1434H14.5551C13.4383 5.1434 13.2221 5.66765 13.2221 6.43861V8.13693H15.888L15.5403 10.7956H13.2221V17.6219H10.4426V10.7978H8.11777V8.13693H10.4426V6.17649C10.4426 3.90105 11.8491 2.66091 13.9042 2.66091C14.8894 2.66091 15.7342 2.7336 15.9816 2.76664V5.1434H15.9794Z"
      fill={props.color || '#423a57'}
    />
  </svg>
)
