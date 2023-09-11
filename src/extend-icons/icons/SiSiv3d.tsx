import BaseIcon from '../baseIcon'

export const SiSiv3d = ({
  color = 'currentColor',
  size = 24,
  ...others
}: IconProps) => {
  return (
    <BaseIcon
      iconTitle={'Siv3d'}
      iconPath={
        'M177.86 168.87c10-9.06 19.63-18.1 25.12-30.27 7.37-16.35 6.74-32.94-2.5-48.24-5.8-9.6-23.91-19.63-37.5-14.62-4.05 1.5-7.01 4.26-9.61 8.12 5.4 1.96 10.12 4.35 14.13 8.34a22.42 22.42 0 0 1 4.95 25.05c-3.57 8.32-10.14 12.28-18.55 12.97-9.41.76-16.42-4.05-22.02-11.34-8.43-10.96-4.09-23.63 4.81-33.78 15.58-17.76 35.58-19.71 56.55-13.7 18.56 5.32 31.02 18.16 38.1 36.37a63.55 63.55 0 0 1 2.81 38.13c-3.98 16.9-13.87 30.45-27.2 41.82-7.6 6.48-16.13 11.14-24.83 15.48-7.84 3.91-16.71 5.22-25.3 7.1a128.87 128.87 0 0 1-27.13 2.82c-20.3.05-40.34-2.95-59.52-9.91-7.45-2.7-14.49-6.57-21.68-9.98-1.78-.84-4.18-2.02-3.09-4.3 1.3-2.73 3.4-.7 5.05.22 8.6 4.82 18.2 6.09 27.7 7.37a138.3 138.3 0 0 0 25.87 1.1c11.1-.59 22.22-1.63 32.76-5.28a127.82 127.82 0 0 0 41.08-23.47z M101.73 122.4c15.33-2.33 32.5 11.82 27.32 30.92-4.98 18.33-22.8 33.07-41.97 34.12-9.8.54-19.5.69-28.84-2.82-11.4-4.29-20.28-11.7-26.96-21.87-11.7-17.8-11-37.09-4.88-56 5-15.45 15.8-27.5 29.14-37.02 18.73-13.36 39.51-19.85 62.53-21.38 16.78-1.12 33.17.1 49.36 3.48 11.96 2.5 23.57 6.76 34.77 11.84 1.91.87 4.4 1.8 3.8 4.66-1.64 1.37-2.92.36-4.01-.09-18.9-7.83-38.51-8.4-58.63-7.15-15.7.98-29.87 5.98-43.35 13.19-11.97 6.4-22.9 14.28-32.07 24.7-5.3 6.03-10.25 12-14.15 19.08-7.76 14.06-8.15 38.33 4.84 51.2 6.05 5.98 13.07 10.7 21.81 12.2 7.27 1.23 18.45-4.02 22.76-11.16-13.1-4.36-22.4-12.2-21.3-27.2.63-8.42 7.75-19.21 19.83-20.7z'
      }
      hex={color}
      size={size}
      {...others}
    />
  )
}
