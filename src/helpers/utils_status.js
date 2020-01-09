const flatColors = {
  blue: "hsla(197, 100%, 50%, .3)",
  purple: "hsla(222, 89%, 64%, .3)",
  vibe: "hsla(259, 77%, 64%, .4)",
  green: "hsla(144, 69%, 63%, .4)",
  red: "hsla(330, 100%, 41%, .22)",
  yellow: "hsla(60, 92%, 71%, .7)",
  orange: "hsla(11, 100%, 75%, .4)"
};
const themeColors = {
  main: "hsla(242, 89%, 64%, 1)",
  mainBlue: "hsla(197, 100%, 50%, 1)",
  mainGreen: "hsla(170, 100%, 39%, 1)",
  mainRed: "hsla(352, 70%, 50%, 1)",
  mainOrange: "hsla(11, 100%, 75%, 1)",
  mainYellow: "hsla(60, 92%, 71%, 1)",
  mainCharcoal: "hsla(268, 10%, 30%, 1)",
  mainBlackBlue: "hsla(220, 18%, 20%, 1)",
  altYellow: "hsla(39, 100%, 70%, 1)",
  altRed: "hsla(352, 70%, 60%, 1)",
  blueGreys: {
    main: "hsla(214, 32%, 91%, 1)",
    saturated: "hsla(211, 25%, 84%, 1)",
    text: "hsla(216, 15%, 52%, 1)",
    headings: "hsla(218, 17%, 35%, 1)",
    subheadings: "hsla(218, 17, 65, 1)",
    light: "hsla(204, 46%, 98%, 1)",
    lightened: "hsla(234, 32%, 91%, 0.4)"
  }
};

const colorsMap = {
  blue: "hsla(197, 100%, 50%, 1)",
  red: "hsla(352, 70%, 50%, 1)",
  green: "hsla(170, 100%, 39%, 1)",
  orange: "hsla(39, 100%, 70%, 1)",
  purple: "hsla(242, 89%, 64%, 1)",
  blackBlue: "hsla(220, 18%, 20%, 1)",
  yellow: "hsla(60, 92%, 71%, 1)",
  grey: "hsla(216, 14%, 93%, 1)",
  violet: "hsla(292, 65%, 68%, 1)",
  pink: "hsla(332, 100%, 74%, 1)",
  mustard: "hsla(46, 100%, 50%, 1)",
  teal: "hsla(186, 100%, 50%, 1)",
  neonGreen: "hsla(151, 100%, 45%, 1)",
  fadedRed: "hsla(352, 70%, 60%, 1)"
};

const ADL_COLOR_MAP = {
  Ambulation: colorsMap.blue,
  Bathing: colorsMap.green,
  Dressing: colorsMap.yellow,
  Grooming: colorsMap.red,
  SpecialCare: colorsMap.purple,
  Laundry: colorsMap.blackBlue,
  Meals: colorsMap.mustard,
  MedAssist: colorsMap.pink,
  Psychosocial: colorsMap.violet,
  StatusChecks: colorsMap.teal,
  Toileting: colorsMap.neonGreen,
  Transfers: colorsMap.fadedRed
};

const adlColors = {
  Ambulation: {
    borderTop: `2px solid ${colorsMap.blue}`
  },
  Bathing: {
    borderTop: `2px solid ${colorsMap.green}`
  },
  Dressing: {
    borderTop: `2px solid ${colorsMap.yellow}`
  },
  Grooming: {
    borderTop: `2px solid ${colorsMap.red}`
  },
  SpecialCare: {
    borderTop: `2px solid ${colorsMap.purple}`
  },
  Laundry: {
    borderTop: `2px solid ${colorsMap.blackBlue}`
  },
  Meals: {
    borderTop: `2px solid ${colorsMap.mustard}`
  },
  MedAssist: {
    borderTop: `2px solid ${colorsMap.pink}`
  },
  Psychosocial: {
    borderTop: `2px solid ${colorsMap.violet}`
  },
  StatusChecks: {
    borderTop: `2px solid ${colorsMap.teal}`
  },

  Toileting: {
    borderTop: `2px solid ${colorsMap.neonGreen}`
  },
  Transfers: {
    borderTop: `2px solid ${colorsMap.fadedRed}`
  }
};

const borders = {
  blue: {
    borderTop: `2px solid ${colorsMap.blue}`
  },
  green: {
    borderTop: `2px solid ${colorsMap.green}`
  },
  orange: {
    borderTop: `2px solid ${colorsMap.orange}`
  },
  red: {
    borderTop: `2px solid ${colorsMap.red}`
  },
  purple: {
    borderTop: `2px solid ${colorsMap.purple}`
  },
  blackBlue: {
    borderTop: `2px solid ${colorsMap.blackBlue}`
  }
};

const statusReducer = status => {
  switch (status) {
    case "COMPLETE":
      return { backgroundColor: "hsla(170, 100%, 39%, 1)" };
    case "NOT-COMPLETE":
      return { backgroundColor: "hsla(268, 10%, 30%, 1)" };
    case "IN-PROGRESS":
      return { backgroundColor: "hsla(39, 100%, 70%, 1)" };
    case "PENDING":
      return { backgroundColor: "hsla(11, 100%, 75%, 1)" };
    case "MISSED-EVENT":
      return { backgroundColor: "hsla(352, 70%, 50%, 1)" };
    default:
      return;
  }
};

const iconChart = {
  stopwatch: "access_alarmalarm",
  close: "clearclose",
  comments: "comments2",
  settings: "cog2",
  caretDown: "caret-down",
  caretUp: "caret-up",
  caretLeft: "caret-left",
  caretRight: "caret-right"
};

export {
  iconChart,
  ADL_COLOR_MAP,
  adlColors,
  colorsMap,
  borders,
  statusReducer
};

export { flatColors, themeColors };
