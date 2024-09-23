const light = {
  brand: {
    primary: {
      main: '#C73B0F',
      hover: '#952C0B'
    }
  },
  base: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#4B6A9B'
    },
    tertiary: {
      main: '#2B3442'
    },
    quaternary: {
      main: '#FFFFFF'
    }
  },
  bg: {
    primary: {
      main: '#FEFEFE',
    },
    secondary: {
      main: '#F6F8FF',
    },
  },
  error: {
    main: '#F74646'
  }
}

const dark = {...light}

export default ({ light, dark })
