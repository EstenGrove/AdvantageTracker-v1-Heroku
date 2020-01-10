const themeColors = {
  brand: {
    lightBlue: "hsla(192, 100%, 46%, 1)",
    darkBlue: "hsla(210, 83%, 34%, 1)",
    altLightBlue: "hsla(210, 52%, 47%, 1)",
    lightGrey: "hsla(204, 12%, 92%, 1)",
    altLightGrey: "hsla(210, 45%, 96%, 1)",
    mainWhite: "hsla(0, 0%, 100%, 1)",
    mainGreen: "hsla(79, 71%, 48%, 1)",
    lightGreen: "hsla(89, 54%, 85%, 1)",
    getBrands: function() {
      return console.log(Object.getOwnPropertyNames(this));
    }
  },
  main: {
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
    altRed: "hsla(352, 70%, 60%, 1)",
    getMains: function() {
      return console.log(Object.getOwnPropertyNames(this));
    }
  },
  flat: {
    blue: "hsla(197, 100%, 50%, .3)",
    purple: "hsla(222, 89%, 64%, .3)",
    vibe: "hsla(259, 77%, 64%, .4)",
    green: "hsla(144, 69%, 63%, .4)",
    red: "hsla(330, 100%, 41%, .22)",
    yellow: "hsla(60, 92%, 71%, .7)",
    orange: "hsla(11, 100%, 75%, .4)",
    getFlats: function() {
      return console.log(Object.getOwnPropertyNames(this));
    }
  },
  blueGreys: {
    main: "hsla(214, 32%, 91%, 1)",
    saturated: "hsla(211, 25%, 84%, 1)",
    text: "hsla(216, 15%, 52%, 1)",
    headings: "hsla(218, 17%, 35%, 1)",
    subheadings: "hsla(218, 17, 65, 1)",
    light: "hsla(204, 46%, 98%, 1)",
    lightened: "hsla(234, 32%, 91%, 0.4)",
    getBlueGreys: function() {
      return console.log(Object.getOwnPropertyNames(this));
    }
  },
  greys: {
    getGreys: function() {
      return console.log(Object.getOwnPropertyNames(this));
    }
  }
};

const { brand, main, flat, blueGreys, greys } = themeColors;

const adlColors = {
  Ambulation: themeColors.main.mainBlue,
  Bathing: themeColors.main.mainGreen,
  Dressing: themeColors.main.mainYellow,
  Grooming: themeColors.main.mainRed,
  SpecialCare: themeColors.main.main,
  Laundry: themeColors.main.mainBlackBlue,
  Meals: themeColors.main.mainMustard,
  MedAssist: themeColors.main.mainPink,
  Psychosocial: themeColors.main.mainViolet,
  StatusChecks: themeColors.main.mainTeal,
  Toileting: themeColors.main.mainGreen,
  Transfers: themeColors.flat.red,
  getColors: function() {
    return console.log(Object.getOwnPropertyNames(this));
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
  caretRight: "caret-right",
  getIcons: function() {
    return console.log(Object.getOwnPropertyNames(this));
  }
};

const statusReducer = status => {
  switch (status) {
    case "COMPLETE":
      return { backgroundColor: themeColors.main.mainGreen }; // "hsla(170, 100%, 39%, 1)"
    case "NOT-COMPLETE":
      return { backgroundColor: themeColors.main.mainCharcoal }; // "hsla(268, 10%, 30%, 1)"
    case "IN-PROGRESS":
      return { backgroundColor: themeColors.main.mainMustard }; // "hsla(39, 100%, 70%, 1)"
    case "PENDING":
      return { backgroundColor: themeColors.main.mainOrange }; // "hsla(11, 100%, 75%, 1)"
    case "MISSED-EVENT":
      return { backgroundColor: themeColors.main.mainRed }; // "hsla(352, 70%, 50%, 1)"
    default:
      return { backgroundColor: themeColors.main.mainCharcoal }; // "hsla(268, 10%, 30%, 1)"
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
  themeColors,
  adlColors,
  brand,
  main,
  flat,
  blueGreys,
  greys,
  iconChart,
  statusReducer,
  iconsReducer
};
