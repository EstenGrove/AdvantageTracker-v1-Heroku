const THEME_COLORS = {
  FLATS: {
    blue: "hsla(197, 100%, 50%, .3)",
    purple: "hsla(222, 89%, 64%, .3)",
    vibe: "hsla(259, 77%, 64%, .4)",
    green: "hsla(144, 69%, 63%, .4)",
    red: "hsla(330, 100%, 41%, .22)",
    yellow: "hsla(60, 92%, 71%, .7)",
    orange: "hsla(11, 100%, 75%, .4)"
  },
  MAINS: {
    main: "hsla(242, 89%, 64%, 1)",
    mainBlue: "hsla(197, 100%, 50%, 1)",
    mainGreen: "hsla(170, 100%, 39%, 1)",
    mainRed: "hsla(352, 70%, 50%, 1)",
    mainOrange: "hsla(11, 100%, 75%, 1)",
    mainYellow: "hsla(60, 92%, 71%, 1)",
    mainMustard: "hsla(46, 100%, 50%, 1)",
    mainCharcoal: "hsla(268, 10%, 30%, 1)",
    mainGrey: "hsla(216, 14%, 93%, 1)",
    mainBlackBlue: "hsla(220, 18%, 20%, 1)",
    mainViolet: "hsla(292, 65%, 68%, 1)",
    mainTeal: "hsla(186, 100%, 50%, 1)",
    mainPink: "hsla(332, 100%, 74%, 1)",
    neonGreen: "hsla(151, 100%, 45%, 1)",
    altYellow: "hsla(39, 100%, 70%, 1)",
    altRed: "hsla(352, 70%, 60%, 1)"
  },
  BLUEGREYS: {
    main: "hsla(214, 32%, 91%, 1)",
    saturated: "hsla(211, 25%, 84%, 1)",
    text: "hsla(216, 15%, 52%, 1)",
    headings: "hsla(218, 17%, 35%, 1)",
    subheadings: "hsla(218, 17, 65, 1)",
    light: "hsla(204, 46%, 98%, 1)",
    lightened: "hsla(234, 32%, 91%, 0.4)"
  }
};

const { FLATS, MAINS, BLUEGREYS } = THEME_COLORS;

const ADL_COLORS = {
  Ambulation: MAINS.mainBlue,
  Bathing: MAINS.mainGreen,
  Dressing: MAINS.mainYellow,
  Grooming: MAINS.mainRed,
  SpecialCare: MAINS.main,
  Laudnry: MAINS.mainBlackBlue,
  Meals: MAINS.mainMustard,
  MedAssist: MAINS.mainPink,
  Psychosocial: MAINS.mainViolet,
  StatusChecks: MAINS.mainTeal,
  Toileting: MAINS.mainGreen,
  Transfers: FLATS.red,
  getColors: function() {
    return console.log(Object.getOwnPropertyNames(this));
  }
};

const ICON_CHART = {
  stopwatch: "access_alarmalarm",
  close: "clearclose",
  comments: "comments2",
  settings: "cog2",
  caretDown: "caret-down",
  caretUp: "caret-up",
  caretLeft: "caret-left",
  caretRight: "caret-right"
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

export {
  THEME_COLORS,
  FLATS,
  MAINS,
  BLUEGREYS,
  ADL_COLORS,
  ICON_CHART,
  statusReducer
};
