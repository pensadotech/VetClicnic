// Manual Meds initialization
// Type in terminal: node scripts/medSeed.js

const mongoose = require("mongoose")
const db = require("../models")

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/vetclinic"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })


const medsSeed = [{
  name: "Acepromazine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "Sedative thingy",
  link: "plumbs/ace",
  controlled: false,
  injectable: {
    available: true,
    concentration: 1,
    doseCanine: 0.05,
    doseRangeCanine: [0.03, 0.1],
    doseFeline: 0.05,
    doseRangeFeline: [0.03, 0.1],
    routes: ["IV", "IM", "SQ"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [10, 25],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Adequan",
  alias: [""],
  hours: 12,
  days: 14,
  description: "Arthritis thingy",
  link: "plumbs/adequan",
  controlled: false,
  injectable: {
    available: true,
    concentration: 100,
    doseCanine: 4.4,
    doseRangeCanine: [4, 5],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Alprazolam",
  alias: ["Xanax"],
  hours: 12,
  days: 14,
  description: "xanax thingy",
  link: "plumbs/xanax",
  controlled: true,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [0.5, 1],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Amikacin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "other thingy",
  link: "plumbs/amikacin",
  controlled: false,
  injectable: {
    available: true,
    concentration: 250,
    doseCanine: 10,
    doseRangeCanine: [8, 12],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Aminophylline",
  alias: [""],
  hours: 12,
  days: 14,
  description: "amino thingy",
  link: "plumbs/aminophylline",
  controlled: false,
  injectable: {
    available: true,
    concentration: 25,
    doseCanine: 7,
    doseRangeCanine: [3, 11],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Amitryptyline",
  alias: [""],
  hours: 12,
  days: 14,
  description: "amitrypo thingy",
  link: "plumbs/amitryptop",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [10],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Amoxicillin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "amoxi thingy",
  link: "plumbs/amoxicillin",
  controlled: false,
  injectable: {
    available: true,
    concentration: 50,
    doseCanine: 22,
    doseRangeCanine: [18, 24],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: "Give with food."
  },
  suspension: {
    available: true,
    doseCanine: 11,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 50, volume: 15 }, { concentration: 50, volume: 30 }],
    alert: "Give with food."
  }
}, {
  name: "Amoxicillin Clavulanate",
  alias: [""],
  hours: 12,
  days: 14,
  description: "clavamox thingy",
  link: "plumbs/clavamox",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [62.5, 125, 250, 375],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: "Give with food."
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 62.5, volume: 15 }, { concentration: 62.5, volume: 30 }],
    alert: "Give with food. Keep refrigerated."
  }
}, {
  name: "Ampicillin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "ampi thingy",
  link: "plumbs/ampicillin",
  controlled: false,
  injectable: {
    available: true,
    concentration: 100,
    doseCanine: 22,
    doseRangeCanine: [18, 24],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: "Give with food."
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Antesedan",
  alias: [""],
  hours: 12,
  days: 14,
  description: "anti thingy",
  link: "plumbs/antesedan",
  controlled: false,
  injectable: {
    available: true,
    concentration: 5,
    doseCanine: 1,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "IM", "SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Apomorphine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "apo thingy",
  link: "plumbs/antesedan",
  controlled: false,
  injectable: {
    available: true,
    concentration: 3,
    doseCanine: 0.03,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Atropine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "atro thingy",
  link: "plumbs/atropine",
  controlled: false,
  injectable: {
    available: true,
    concentration: 0.54,
    doseCanine: 0.05,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "IM", "SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Azithromycin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "azithro thingy",
  link: "plumbs/azithromycin",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 40, volume: 30 }],
    alert: ""
  }
}, {
  name: "Benazapril",
  alias: [""],
  hours: 12,
  days: 14,
  description: "benaza thingy",
  link: "plumbs/benaza",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [5],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Bupivicaine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "bupivi thingy",
  link: "plumbs/bupivicaine",
  controlled: false,
  injectable: {
    available: true,
    concentration: 5,
    doseCanine: 1.5,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "ID"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Buprenorphine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "bup thingy",
  link: "plumbs/buprenorphine",
  controlled: true,
  injectable: {
    available: true,
    concentration: 0.3,
    doseCanine: 1.5,
    doseRangeCanine: [1, 2],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "IM", "SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Butorphanol",
  alias: [""],
  hours: 12,
  days: 14,
  description: "anti thingy",
  link: "plumbs/butorphanol",
  controlled: true,
  injectable: {
    available: true,
    concentration: 10,
    doseCanine: 0.4,
    doseRangeCanine: [0.2, 0.6],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "IM", "SQ"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [5],
    doseCanine: 0.55,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Capromorelin",
  alias: ["Entyce"],
  hours: 12,
  days: 14,
  description: "entyce thingy",
  link: "plumbs/entyce",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 30, volume: 15 }, { concentration: 30, volume: 30 }],
    alert: ""
  }
}, {
  name: "Carprofen",
  alias: ["Rimadyl", "Rovera"],
  hours: 12,
  days: 14,
  description: "rimadyl thingy",
  link: "plumbs/rimady",
  controlled: false,
  injectable: {
    available: true,
    concentration: 50,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [25, 75, 100],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Cefalexin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "cefalexin thingy",
  link: "plumbs/cefalexin",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [250, 500],
    doseCanine: 25,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Cefazolin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "cefaz thingy",
  link: "plumbs/cefazolin",
  controlled: false,
  injectable: {
    available: true,
    concentration: 100,
    doseCanine: 22,
    doseRangeCanine: [18, 26],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["SQ", "IV"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Cefovecin",
  alias: ["Convenia"],
  hours: 12,
  days: 14,
  description: "conve thingy",
  link: "plumbs/convenia",
  controlled: false,
  injectable: {
    available: true,
    concentration: 80,
    doseCanine: 8,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Cefpodoxime",
  alias: ["Simplicef"],
  hours: 12,
  days: 14,
  description: "simpli  thingy",
  link: "plumbs/csimply",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [100, 200],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Chloramphenicol",
  alias: [""],
  hours: 12,
  days: 14,
  description: "chlorfieind  thingy",
  link: "plumbs/chloram",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [500, 1000],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Chlorpheniramine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "chlorp thingy",
  link: "plumbs/cchlorp",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [4],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Clindamycin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "clinda thingy",
  link: "plumbs/clindamycin",
  controlled: false,
  injectable: {
    available: true,
    concentration: 150,
    doseCanine: 12.5,
    doseRangeCanine: [10, 15],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [75, 150],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [5.5, 10],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 25, volume: 20 }],
    alert: ""
  }
}, {
  name: "Clomipramine",
  alias: ["Clomicalm"],
  hours: 12,
  days: 14,
  description: "comaa thingy",
  link: "plumbs/cloma",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [20],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Cyclosporine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "cyclo",
  link: "plumbs/cyclosporine",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [10, 25, 100],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 100, volume: 5 }],
    alert: ""
  }
}, {
  name: "Cyproheptadine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "cyprothihngg",
  link: "plumbs/cyprthin",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [4],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Depo-Medrol",
  alias: [""],
  hours: 12,
  days: 14,
  description: "depom thingy",
  link: "plumbs/depomedrol",
  controlled: false,
  injectable: {
    available: true,
    concentration: 20,
    doseCanine: 1,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Dexdomitor",
  alias: [""],
  hours: 12,
  days: 14,
  description: "dexdom thingy",
  link: "plumbs/dexdomitor",
  controlled: false,
  injectable: {
    available: true,
    concentration: 0.5,
    doseCanine: 1,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "IV"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Dexamethasone",
  alias: [""],
  hours: 12,
  days: 14,
  description: "dex thingy",
  link: "plumbs/dexamethasone",
  controlled: false,
  injectable: {
    available: true,
    concentration: 2,
    doseCanine: 0.1,
    doseRangeCanine: [0.05, 0.15],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "IV", "SQ"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [0.5],
    doseCanine: 0,
    doseRangeCanine: [0.25, 1.25],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Dexamethasone Sodium Phosphate",
  alias: [""],
  hours: 12,
  days: 14,
  description: "dexsp thingy",
  link: "plumbs/dexsp",
  controlled: false,
  injectable: {
    available: true,
    concentration: 4,
    doseCanine: 0.25,
    doseRangeCanine: [0.2, 0.3],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "IV", "SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Diazepam",
  alias: [""],
  hours: 12,
  days: 14,
  description: "val thingy",
  link: "plumbs/diazepam",
  controlled: true,
  injectable: {
    available: true,
    concentration: 5,
    doseCanine: 0.2,
    doseRangeCanine: [0.1, 0.4],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "IV", "SQ"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Diphenhydramine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "diph thingy",
  link: "plumbs/diphenhydramine",
  controlled: false,
  injectable: {
    available: true,
    concentration: 50,
    doseCanine: 2.2,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "SQ"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [25],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Dopamine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "dopey thingy",
  link: "plumbs/dopamine",
  controlled: false,
  injectable: {
    available: true,
    concentration: 40,
    doseCanine: 1,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Doxapram",
  alias: [""],
  hours: 12,
  days: 14,
  description: "doxa thingy",
  link: "plumbs/doxapram",
  controlled: false,
  injectable: {
    available: true,
    concentration: 20,
    doseCanine: 5.5,
    doseRangeCanine: [1, 11],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Doxycycline",
  alias: [""],
  hours: 12,
  days: 14,
  description: "doxi thingy",
  link: "plumbs/doxycycline",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [100],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [100],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Enalapril",
  alias: [""],
  hours: 12,
  days: 14,
  description: "enala thingy",
  link: "plumbs/enalapril",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [2.5, 5, 10, 20],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Enrofloxacin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "bae thingy",
  link: "plumbs/enrofloxacin",
  controlled: false,
  injectable: {
    available: true,
    concentration: [22.7, 68],
    doseCanine: 1.5,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "ID"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Epinephrine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "epi thingy",
  link: "plumbs/epinephrine",
  controlled: false,
  injectable: {
    available: true,
    concentration: 1,
    doseCanine: 0.2,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "ID"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Estriol",
  alias: ["Incurin"],
  hours: 12,
  days: 14,
  description: "incuri thingy",
  link: "plumbs/incurin",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [1],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Famciclovir",
  alias: [""],
  hours: 12,
  days: 14,
  description: "fami thingy",
  link: "plumbs/fami",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [125, 250],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Famotidine",
  alias: ["Pepcid"],
  hours: 12,
  days: 14,
  description: "fam thingy",
  link: "plumbs/famotidine",
  controlled: false,
  injectable: {
    available: true,
    concentration: 10,
    doseCanine: 0.5,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [10],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Fenbendazole",
  alias: ["Panacur"],
  hours: 12,
  days: 14,
  description: "giardia cocaine",
  link: "plumbs/fenbendazole",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 100, volume: 0 }],
    alert: ""
  }
}, {
  name: "Flumazenil",
  alias: [""],
  hours: 12,
  days: 14,
  description: "fluma thingy",
  link: "plumbs/flumazenil",
  controlled: false,
  injectable: {
    available: true,
    concentration: 1,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Furosemide",
  alias: [""],
  hours: 12,
  days: 14,
  description: "furo thingy",
  link: "plumbs/furosemide",
  controlled: false,
  injectable: {
    available: true,
    concentration: 50,
    doseCanine: 2.2,
    doseRangeCanine: [2, 2.4],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [12.5, 25, 50],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Gabapentin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "yogabagaba thingy",
  link: "plumbs/gabapentin",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [100, 300],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 50, volume: 0 }],
    alert: ""
  }
}, {
  name: "Genatmicin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "genta thingy",
  link: "plumbs/gentamicin",
  controlled: false,
  injectable: {
    available: true,
    concentration: 100,
    doseCanine: 10.5,
    doseRangeCanine: [9, 12],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Grapiprant",
  alias: ["Galliprant"],
  hours: 12,
  days: 14,
  description: "galla thingy",
  link: "plumbs/galla",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [20, 60, 100],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Hydrocodone",
  alias: [""],
  hours: 12,
  days: 14,
  description: "hydro thingy",
  link: "plumbs/galla",
  controlled: true,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [5],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 6.5, volume: 0 }],
    alert: ""
  }
}, {
  name: "Hydromorphone",
  alias: [""],
  hours: 12,
  days: 14,
  description: "hydro thingy",
  link: "plumbs/hydromorphone",
  controlled: true,
  injectable: {
    available: true,
    concentration: 2,
    doseCanine: 0.075,
    doseRangeCanine: [0.05, 0.1],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM", "IV", "SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Hydroxyzine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "hydroxy thingy",
  link: "plumbs/hydroxy",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [25],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [25, 50],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Iron Dextran",
  alias: [""],
  hours: 12,
  days: 14,
  description: "iron thingy",
  link: "plumbs/irondextran",
  controlled: false,
  injectable: {
    available: true,
    concentration: 100,
    doseCanine: 15,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Itraconazole",
  alias: ["Itrafungol"],
  hours: 12,
  days: 14,
  description: "fungal thingy",
  link: "plumbs/itraconazol",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 10, volume: 52 }],
    alert: ""
  }
}, {
  name: "Kenalog",
  alias: [""],
  hours: 12,
  days: 14,
  description: "kena thingy",
  link: "plumbs/kenelog",
  controlled: false,
  injectable: {
    available: true,
    concentration: 10,
    doseCanine: 0.16,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IM"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Ketamine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "keta thingy",
  link: "plumbs/ketamine",
  controlled: true,
  injectable: {
    available: true,
    concentration: 100,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Ketoconazole",
  alias: [""],
  hours: 12,
  days: 14,
  description: "keto thingy",
  link: "plumbs/ketocon",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [200],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Lactulose",
  alias: [""],
  hours: 12,
  days: 14,
  description: "lacta thingy",
  link: "plumbs/lactulose",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 666.66, volume: 0 }],
    alert: ""
  }
}, {
  name: "Levothyroxine",
  alias: ["Soloxine"],
  hours: 12,
  days: 14,
  description: "thyroid thingy",
  link: "plumbs/greyhounds",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Lidocaine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "lido thingy",
  link: "plumbs/lidocaine",
  controlled: false,
  injectable: {
    available: true,
    concentration: 20,
    doseCanine: 2,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "IM", "SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Mannitol",
  alias: [""],
  hours: 12,
  days: 14,
  description: "mann thingy",
  link: "plumbs/mannitol",
  controlled: false,
  injectable: {
    available: true,
    concentration: 200,
    doseCanine: 550,
    doseRangeCanine: [250, 1000],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Marbofloxacin",
  alias: ["Zeniquin"],
  hours: 12,
  days: 14,
  description: "zeni thingy",
  link: "plumbs/zenzen",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [25, 50, 100],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Maropitant",
  alias: ["Cerenia"],
  hours: 12,
  days: 14,
  description: "cerenia thingy",
  link: "plumbs/cerenia",
  controlled: false,
  injectable: {
    available: true,
    concentration: 10,
    doseCanine: 1,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "SQ"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [16, 24, 60, 160],
    doseCanine: 4,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Meclizine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "mecli thingy",
  link: "plumbs/mecliz",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [12.5],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Meloxicam",
  alias: [""],
  hours: 12,
  days: 14,
  description: "moxi thingy",
  link: "plumbs/meloxicam",
  controlled: false,
  injectable: {
    available: true,
    concentration: 5,
    doseCanine: 0.2,
    doseRangeCanine: [0.1, 0.3],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0.5, volume: 10 }, { concentration: 1.5, volume: 10 }, { concentration: 1.5, volume: 32 }, { concentration: 1.5, volume: 100 }],
    alert: ""
  }
}, {
  name: "Methimazole",
  alias: [""],
  hours: 12,
  days: 14,
  description: "methy thingy",
  link: "plumbs/methy",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [5],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Methocarbamol",
  alias: [""],
  hours: 12,
  days: 14,
  description: "meth thingy",
  link: "plumbs/methocarbamol",
  controlled: false,
  injectable: {
    available: true,
    concentration: 100,
    doseCanine: 0,
    doseRangeCanine: [],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Metoclopramide",
  alias: [""],
  hours: 12,
  days: 14,
  description: "meto thingy",
  link: "plumbs/metoclopramide",
  controlled: false,
  injectable: {
    available: true,
    concentration: 5,
    doseCanine: 0.3,
    doseRangeCanine: [0.2, 0.4],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [5],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 1, volume: 0 }],
    alert: ""
  }
}, {
  name: "Metronidazole",
  alias: [""],
  hours: 12,
  days: 14,
  description: "metro thingy",
  link: "plumbs/metronidazole",
  controlled: false,
  injectable: {
    available: true,
    concentration: 250,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [250, 500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 50, volume: 0 }],
    alert: ""
  }
}, {
  name: "Midazolam",
  alias: [""],
  hours: 12,
  days: 14,
  description: "midaz thingy",
  link: "plumbs/midazolam",
  controlled: true,
  injectable: {
    available: true,
    concentration: 5,
    doseCanine: 0.2,
    doseRangeCanine: [0.1, 0.3],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "IM", "SQ"],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Minocycline",
  alias: [""],
  hours: 12,
  days: 14,
  description: "mino thingy",
  link: "plumbs/minocycline",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [100],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Mirtazapine",
  alias: [""],
  hours: 12,
  days: 14,
  description: "mirtaz thingy",
  link: "plumbs/mirtazy",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [""],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [15],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Naloxone",
  alias: [""],
  hours: 12,
  days: 14,
  description: "nalox thingy",
  link: "plumbs/naloxone",
  controlled: false,
  injectable: {
    available: true,
    concentration: 0.4,
    doseCanine: 0.25,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Niacinamide",
  alias: [""],
  hours: 12,
  days: 14,
  description: "niacin thingy",
  link: "plumbs/niacin",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Oclacitinib",
  alias: ["Apoquel"],
  hours: 12,
  days: 14,
  description: "apoquel thingy",
  link: "plumbs/apoquel",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [3.6, 5.4, 16],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Ondansetron",
  alias: [""],
  hours: 12,
  days: 14,
  description: "onda thingy",
  link: "plumbs/ondansetron",
  controlled: false,
  injectable: {
    available: true,
    concentration: 2,
    doseCanine: 0.75,
    doseRangeCanine: [0.5, 1],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV"],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [4, 8],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Pantoprozole",
  alias: [""],
  hours: 12,
  days: 14,
  description: "pants thingy",
  link: "plumbs/pantoprozole",
  controlled: false,
  injectable: {
    available: true,
    concentration: 1,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Percorten-V",
  alias: [""],
  hours: 12,
  days: 14,
  description: "percort thingy",
  link: "plumbs/percortenV",
  controlled: false,
  injectable: {
    available: true,
    concentration: 25,
    doseCanine: 1.8,
    doseRangeCanine: [1.65, 2.2],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Phenobarbital",
  alias: [""],
  hours: 12,
  days: 14,
  description: "pheno thingy",
  link: "plumbs/phenobarb",
  controlled: true,
  injectable: {
    available: true,
    concentration: 65,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [16.2, 32.4, 64.8, 97.2],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
    name: "Phenylpropanolamine",
  alias: ["Proin"],
  hours: 12,
  days: 14,
  description: "peepee thingy",
  link: "plumbs/peepee",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [25, 50, 75],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Piroxicam",
  alias: [""],
  hours: 12,
  days: 14,
  description: "pirox thingy",
  link: "plumbs/piroxi",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [10],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Pradofloxacin",
  alias: ["Veraflox"],
  hours: 12,
  days: 14,
  description: "veraf thingy",
  link: "plumbs/veraflox",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 25, volume: 15 }, { concentration: 25, volume: 30 }],
    alert: ""
  }
}, {
  name: "Praziquantel",
  alias: [""],
  hours: 12,
  days: 14,
  description: "prazi thingy",
  link: "plumbs/praziquantel",
  controlled: false,
  injectable: {
    available: true,
    concentration: 56.8,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [18.2, 22.7, 68, 136],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Prazosin",
  alias: [""],
  hours: 12,
  days: 14,
  description: "prazo thingy",
  link: "plumbs/prazosin",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [0.5],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [1],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Prednisolone",
  alias: [""],
  hours: 12,
  days: 14,
  description: "cat pred thingy",
  link: "plumbs/cat pred",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [5],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 3, volume: 0 }],
    alert: ""
  }
}, {
  name: "Prednisone",
  alias: [""],
  hours: 12,
  days: 14,
  description: "pred thingy",
  link: "plumbs/pred",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [5, 10, 20],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Propofol",
  alias: [""],
  hours: 12,
  days: 14,
  description: "prop thingy",
  link: "plumbs/propofol",
  controlled: false,
  injectable: {
    available: true,
    concentration: 10,
    doseCanine: 4,
    doseRangeCanine: [2, 6],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Pyrantel Pamoate",
  alias: ["Nemex"],
  hours: 12,
  days: 14,
  description: "pyrantel thingy",
  link: "plumbs/pyrantel",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 50, volume: 0 }],
    alert: ""
  }
}, {
  name: "Robenacoxib",
  alias: ["Onsior"],
  hours: 12,
  days: 14,
  description: "onsior thingy",
  link: "plumbs/onsior",
  controlled: false,
  injectable: {
    available: true,
    concentration: 20,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 2,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [6],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 1,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Silybin-Adenosylmethionine",
  alias: ["Denamarin"],
  hours: 12,
  days: 14,
  description: "retarded name thingy",
  link: "plumbs/^",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [90, 225, 425],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Solu-Delta-Cortef",
  alias: [""],
  hours: 12,
  days: 14,
  description: "cortef thingy",
  link: "plumbs/soludeltacortef",
  controlled: false,
  injectable: {
    available: true,
    concentration: 1,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Solu-Medrol",
  alias: [""],
  hours: 12,
  days: 14,
  description: "medrol thingy",
  link: "plumbs/medrol",
  controlled: false,
  injectable: {
    available: true,
    concentration: 62.5,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Spironolactone",
  alias: [""],
  hours: 12,
  days: 14,
  description: "spirit thingy",
  link: "plumbs/spironononon",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [25],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Sucralfate",
  alias: [""],
  hours: 12,
  days: 14,
  description: "sucral thingy",
  link: "plumbs/sucralfate",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [1000],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 100, volume: 0 }],
    alert: ""
  }
}, {
  name: "Sufladimethoxine",
  alias: ["Albon"],
  hours: 12,
  days: 14,
  description: "albo thingy",
  link: "plumbs/albon",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [125, 250, 500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 50, volume: 0 }],
    alert: ""
  }
}, {
  name: "Suflamethoxazole Trimethoprim",
  alias: ["Bactrim"],
  hours: 12,
  days: 14,
  description: "sulfa thingy",
  link: "plumbs/sulfa",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [480],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 48, volume: 0 }],
    alert: ""
  }
}, {
  name: "Tramadol",
  alias: [""],
  hours: 12,
  days: 14,
  description: "trama thingy",
  link: "plumbs/trama",
  controlled: true,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [50],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Trazodone",
  alias: [""],
  hours: 12,
  days: 14,
  description: "trazything",
  link: "plumbs/trazodone",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [50, 100],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Trilostane",
  alias: ["Vetoryl"],
  hours: 12,
  days: 14,
  description: "vetoryl thingy",
  link: "plumbs/vetoryl",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [5, 10, 30, 60],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Trimeprazine with Prednisolone",
  alias: ["Temaril-P"],
  hours: 12,
  days: 14,
  description: "temaril thingy",
  link: "plumbs/temaril",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: true,
    tabletSizes: [7],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Vitamin B 12",
  alias: [""],
  hours: 12,
  days: 14,
  description: "b12 thingy",
  link: "plumbs/b12",
  controlled: false,
  injectable: {
    available: true,
    concentration: 1,
    doseCanine: 0.025,
    doseRangeCanine: [0.02, 0.03],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}, {
  name: "Vitamin K",
  alias: [""],
  hours: 12,
  days: 14,
  description: "K thingy",
  link: "plumbs/vitK",
  controlled: false,
  injectable: {
    available: false,
    concentration: 0,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: [],
    alert: ""
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  capsule: {
    available: true,
    capsuleSizes: [25],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    alert: ""
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }],
    alert: ""
  }
}]

db.Meds
  .remove({})
  .then(() => db.Meds.collection.insertMany(medsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })