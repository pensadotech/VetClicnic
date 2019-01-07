const mongoose = require("mongoose")
const db = require("../models")

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/vetclinic"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })


const medsSeed = [{
  name: "Acepromazine",
  alias: [""],
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
    routes: ["IV", "IM", "SQ"]
  },
  tablet: {
    available: true,
    tabletSizes: [10, 25],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Adequan",
  alias: [""],
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
    routes: ["IM"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Amikacin",
  alias: [""],
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
    routes: [""]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Aminophylline",
  alias: [""],
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
    routes: ["IV"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Amoxicillin",
  alias: [""],
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
    routes: ["IV"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: true,
    capsuleSizes: [500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: true,
    doseCanine: 11,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 50, volume: 15 }, { concentration: 50, volume: 30 }]
  }
}, {
  name: "Ampicillin",
  alias: [""],
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
    routes: ["IV"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: true,
    capsuleSizes: [500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Antesedan",
  alias: [""],
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
    routes: ["IV", "IM", "SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Apomorphine",
  alias: [""],
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
    routes: ["IV"]
  },
  tablet: {
    available: true,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Atropine",
  alias: [""],
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
    routes: ["IV", "IM", "SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Bupivicaine",
  alias: [""],
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
    routes: ["IM", "ID"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Buprenorphine",
  alias: ["Buprenex"],
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
    routes: ["IV", "IM", "SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Butorphanol",
  alias: ["Tobugesic"],
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
    routes: ["IV", "IM", "SQ"]
  },
  tablet: {
    available: true,
    tabletSizes: [5],
    doseCanine: 0.55,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Cefazolin",
  alias: [""],
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
    routes: ["SQ", "IV"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Cerenia",
  alias: [""],
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
    routes: ["IV", "SQ"]
  },
  tablet: {
    available: true,
    tabletSizes: [16, 24, 60, 160],
    doseCanine: 4,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Clindamycin",
  alias: [""],
  description: "bupivi thingy",
  link: "plumbs/bupivicaine",
  controlled: false,
  injectable: {
    available: true,
    concentration: 150,
    doseCanine: 12.5,
    doseRangeCanine: [10, 15],
    doseFeline: 0,
    doseRangeFeline: [0],
    routes: ["IV", "SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [5.5, 10],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 25, volume: 15 }, { concentration: 25, volume: 30 }]
  }
}, {
  name: "Convenia",
  alias: [""],
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
    routes: ["SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Depo-Medrol",
  alias: [""],
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
    routes: ["IM"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Dexdomitor",
  alias: [""],
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
    routes: ["IM", "IV"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Dexamethasone",
  alias: [""],
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
    routes: ["IM", "IV", "SQ"]
  },
  tablet: {
    available: true,
    tabletSizes: [0.5],
    doseCanine: 0,
    doseRangeCanine: [0.25, 1.25],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Dexamethasone Sodium Phosphate",
  alias: [""],
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
    routes: ["IM", "IV", "SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Diazepam",
  alias: ["Valium"],
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
    routes: ["IM", "IV", "SQ"]
  },
  tablet: {
    available: true,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Diphenhydramine",
  alias: ["Benadryl"],
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
    routes: ["IM", "SQ"]
  },
  tablet: {
    available: true,
    tabletSizes: [25],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Dopamine",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Doxapram",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Enrofloxacin",
  alias: ["Baytril"],
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
    routes: ["IM", "ID"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Epinephrine",
  alias: ["Adrenaline"],
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
    routes: ["IM", "ID"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Famotidine",
  alias: ["Pepcid"],
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
    routes: ["IV"]
  },
  tablet: {
    available: true,
    tabletSizes: [10],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Flumazenil",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Furosemide",
  alias: ["Lasix"],
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
    routes: ["IV"]
  },
  tablet: {
    available: true,
    tabletSizes: [12.5, 25, 50],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Genatmicin",
  alias: [""],
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
    routes: ["IV"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Hydromorphone",
  alias: ["Dilated"],
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
    routes: ["IM", "IV", "SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Iron Dextran",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Kenalog",
  alias: [""],
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
    routes: ["IM"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Ketamine",
  alias: [""],
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
    routes: ["IV"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Lidocaine",
  alias: [""],
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
    routes: ["IV", "IM", "SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Mannitol",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Meloxicam",
  alias: [""],
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
    routes: ["SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0.5, volume: 10 }, { concentration: 1.5, volume: 10 }, { concentration: 1.5, volume: 32 }, { concentration: 1.5, volume: 100 }]
  }
}, {
  name: "Methocarbamol",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Metoclopramide",
  alias: ["Reglan"],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Metronidazole",
  alias: ["Flagyl"],
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
    routes: []
  },
  tablet: {
    available: true,
    tabletSizes: [250, 500],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: true,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 50, volume: 0 }]
  }
}, {
  name: "Midazolam",
  alias: [""],
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
    routes: ["IV", "IM", "SQ"]
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
},{
  name: "Naloxone",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Ondansetron",
  alias: [""],
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
    routes: ["IV"]
  },
  tablet: {
    available: true,
    tabletSizes: [4, 8],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Pantoprozole",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
}, {
  name: "Percorten-V",
  alias: [""],
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
    routes: []
  },
  tablet: {
    available: false,
    tabletSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  capsule: {
    available: false,
    capsuleSizes: [0],
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0]
  },
  suspension: {
    available: false,
    doseCanine: 0,
    doseRangeCanine: [0],
    doseFeline: 0,
    doseRangeFeline: [0],
    premade: [{ concentration: 0, volume: 0 }]
  }
},{
    name: "Praziquantel",
    alias: [""],
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
      routes: []
    },
    tablet: {
      available: false,
      tabletSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    capsule: {
      available: false,
      capsuleSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    suspension: {
      available: false,
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0],
      premade: [{ concentration: 0, volume: 0 }]
    }
  }, {
    name: "Propofol",
    alias: [""],
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
      routes: []
    },
    tablet: {
      available: false,
      tabletSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    capsule: {
      available: false,
      capsuleSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    suspension: {
      available: false,
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0],
      premade: [{ concentration: 0, volume: 0 }]
    }
  }, {
    name: "Solu-Delta-Cortef",
    alias: [""],
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
      routes: []
    },
    tablet: {
      available: false,
      tabletSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    capsule: {
      available: false,
      capsuleSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    suspension: {
      available: false,
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0],
      premade: [{ concentration: 0, volume: 0 }]
    }
  },{
    name: "Solu-Medrol",
    alias: [""],
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
      routes: []
    },
    tablet: {
      available: false,
      tabletSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    capsule: {
      available: false,
      capsuleSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    suspension: {
      available: false,
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0],
      premade: [{ concentration: 0, volume: 0 }]
    }
  }, {
    name: "Vitamin B 12",
    alias: [""],
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
      routes: []
    },
    tablet: {
      available: false,
      tabletSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    capsule: {
      available: false,
      capsuleSizes: [0],
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0]
    },
    suspension: {
      available: false,
      doseCanine: 0,
      doseRangeCanine: [0],
      doseFeline: 0,
      doseRangeFeline: [0],
      premade: [{ concentration: 0, volume: 0 }]
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