const size = {
  mobileS: '321px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '769px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const device = {
  // mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileM})`,
  tabletP: `(min-width: ${size.mobileL}) and (orientation: portrait)`,
  tabletL: `(min-width: ${size.mobileL}) and (orientation: landscape)`,
  laptop: `(min-width: ${size.tablet})`,
  laptopL: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.laptopL})`,
  desktopL: `(min-width: ${size.desktop})`
};

export default device;