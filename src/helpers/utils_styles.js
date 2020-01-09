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
  },
  getColors: function() {
    return Object.getOwnPropertyNames(this).map((key, index) =>
      console.log(Object.getOwnPropertyNames(this[key]))
    );
  }
};

const { FLATS, MAINS, BLUEGREYS } = THEME_COLORS;

const ADL_COLORS = {
  Ambulation: MAINS.mainBlue,
  Bathing: MAINS.mainGreen,
  Dressing: MAINS.mainYellow,
  Grooming: MAINS.mainRed,
  SpecialCare: MAINS.main,
  Laundry: MAINS.mainBlackBlue,
  Meals: MAINS.mainMustard,
  MedAssist: MAINS.mainPink,
  Psychosocial: MAINS.mainViolet,
  StatusChecks: MAINS.mainTeal,
  Toileting: MAINS.mainGreen,
  Transfers: FLATS.red,
  getColors: function() {
    return console.log(Object.getOwnPropertyNames(this)); // for DEV MODE ONLY
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
  caretRight: "caret-right",
  getIcons: function() {
    return console.log(Object.getOwnPropertyNames(this));
  }
};

const statusReducer = status => {
  switch (status) {
    case "COMPLETE":
      return { backgroundColor: MAINS.mainGreen }; // "hsla(170, 100%, 39%, 1)"
    case "NOT-COMPLETE":
      return { backgroundColor: MAINS.mainCharcoal }; // "hsla(268, 10%, 30%, 1)"
    case "IN-PROGRESS":
      return { backgroundColor: MAINS.mainMustard }; // "hsla(39, 100%, 70%, 1)"
    case "PENDING":
      return { backgroundColor: MAINS.mainOrange }; // "hsla(11, 100%, 75%, 1)"
    case "MISSED-EVENT":
      return { backgroundColor: MAINS.mainRed }; // "hsla(352, 70%, 50%, 1)"
    default:
      return { backgroundColor: MAINS.mainCharcoal }; // "hsla(268, 10%, 30%, 1)"
  }
};

const iconsReducer = type => {
  switch (true) {
    case type === "Dressing" || type === "Dress": {
      return {
        icon: "dry_cleaning",
        styles: {
          fill: "hsla(268, 10%, 30%, .2)"
        }
      };
    }
    case type === "Grooming" || type === "Groom": {
      return {
        icon: "face",
        styles: {
          fill: "hsla(144, 69%, 63%, .4)"
        }
      };
    }
    case type === "Bathing" || type === "Bath": {
      return {
        icon: "bathtub",
        styles: {
          fill: "hsla(222, 89%, 64%, .3)"
        }
      };
    }
    case type === "MedAssist" || type === "Meds": {
      return {
        icon: "sentiment_very_dissatisfied",
        styles: {
          fill: "hsla(330, 100%, 41%, .22)"
        }
      };
    }
    case type === "Psychosocial" || type === "Mental": {
      return {
        icon: "news",
        styles: {
          fill: "hsla(11, 100%, 75%, .4)"
        }
      };
    }
    case type === "StatusChecks" || type === "Health": {
      return {
        icon: "timer",
        styles: {
          fill: "hsla(259, 77%, 64%, .4)"
        }
      };
    }
    case type === "Toileting" || type === "Toilet": {
      return {
        icon: "new_releases",
        styles: {
          fill: "hsla(268, 10%, 30%, .2)"
        }
      };
    }
    case type === "SpecialCare" || type === "Care": {
      return {
        icon: "new_releases",
        styles: {
          fill: "hsla(144, 69%, 63%, .4)"
        }
      };
    }
    case type === "Ambulation" || type === "Ambulate": {
      return {
        icon: "bus_alert",
        styles: {
          fill: "hsla(330, 100%, 41%, .22)"
        }
      };
    }
    case type === "Transfers": {
      return {
        icon: "transfer_within_a_station",
        styles: {
          fill: "hsla(268, 10%, 30%, .2)"
        }
      };
    }
    case type === "Laundry": {
      return {
        icon: "local_laundry_service",
        styles: {
          fill: "hsla(197, 100%, 50%, .3)"
        }
      };
    }
    case type === "Meals": {
      return {
        icon: "restaurant",
        styles: {
          fill: "hsla(259, 77%, 64%, .4)"
        }
      };
    }
    case type === "All": {
      return {
        icon: "perm_contact_calendar",
        styles: {
          fill: "hsla(218, 17, 65, 1)"
        }
      };
    }
    case type === "Other": {
      return {
        icon: "assignment_ind",
        styles: {
          fill: "hsla(218, 17, 65, 1)"
        }
      };
    }
    default:
      return new Error("Category type not recognized");
  }
};

export {
  THEME_COLORS,
  FLATS,
  MAINS,
  BLUEGREYS,
  ADL_COLORS,
  ICON_CHART,
  statusReducer,
  iconsReducer
};
