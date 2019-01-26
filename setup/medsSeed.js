// Initialize medicines
const db = require("../models")

module.exports = {

  initialize: function () {
    
    // Mongo documents array
    const medsSeed = [{
      name: "Acepromazine",
      alias: ["PromAce®"],
      hours: 12,
      days: 14,
      description: "Phenothiazine Sedative/Tranquilizer",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/InADFktnHk",
      controlled: false,
      injectable: {
        available: true,
        concentration: 1,
        doseCanine: 0,
        doseRangeCanine: [0.01, 0.2],
        doseFeline: 0,
        doseRangeFeline: [0.01, 0.2],
        routes: ["IV", "IM", "SQ"],
        alert: ""
      },
      tablet: {
        available: true,
        tabletSizes: [10, 25],
        doseCanine: 0,
        doseRangeCanine: [0.55, 2.2],
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
      name: "Polysulfated Glycosaminoglycan",
      alias: ["Adequan®"],
      hours: 0,
      days: 0,
      description: "Proteolytic Enzyme Inhibitor, Chondroprotectant",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/NKPPXPvMpI",
      controlled: false,
      injectable: {
        available: true,
        concentration: 100,
        doseCanine: 4.4,
        doseRangeCanine: [0],
        doseFeline: 0,
        doseRangeFeline: [0],
        routes: ["IM"],
        alert: "Twice weekly for up to 4 weeks."
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
      alias: ["Xanax®"],
      hours: 12,
      days: 14,
      description: "Benzodiazepine, Sedative/Tranquilizer",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/0NWIBWBwSo/",
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
        doseRangeCanine: [0.02, 0.1],
        doseFeline: 0,
        doseRangeFeline: [0.125, 0.25],
        alert: "Give 30-60 minutes before triggering event."
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
      alias: ["Amiglyde-V®"],
      hours: 12,
      days: 7,
      description: "Aminoglycoside Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/i4lS9zaIxk/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 250,
        doseCanine: 10,
        doseRangeCanine: [8, 12],
        doseFeline: 0,
        doseRangeFeline: [10, 15],
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
      name: "Aminophylline",
      alias: [""],
      hours: 12,
      days: 14,
      description: "Phosphodiesterase Inhibitor Bronchodilator",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/b2DgzPgtdP/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 25,
        doseCanine: 0,
        doseRangeCanine: [3, 11],
        doseFeline: 0,
        doseRangeFeline: [0],
        routes: ["IV", "IM"],
        alert: "Administer over at least several minutes or as an infusion."
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
      alias: ["Elavil®"],
      hours: 12,
      days: 14,
      description: "Tricyclic Behavior Modifier, Antipruritic, Neuropathic Pain Modifier",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/ZD52cH2F6D/",
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
        doseRangeCanine: [1, 2],
        doseFeline: 0,
        doseRangeFeline: [2.5, 12.5],
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
      alias: ["Amoxil®"],
      hours: 12,
      days: 14,
      description: "Aminopenicillin",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/OY3UkyA1JA/",
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
        capsuleSizes: [250, 500],
        doseCanine: 0,
        doseRangeCanine: [11, 15],
        doseFeline: 0,
        doseRangeFeline: [11, 15],
        alert: "Give with food."
      },
      suspension: {
        available: true,
        doseCanine: 0,
        doseRangeCanine: [11, 15],
        doseFeline: 0,
        doseRangeFeline: [11, 15],
        premade: [{ concentration: 50, volume: 15 }, { concentration: 50, volume: 30 }],
        alert: "Give with food."
      }
    }, {
      name: "Amoxicillin Clavulanate",
      alias: ["Clavamox®"],
      hours: 12,
      days: 14,
      description: "Potentiated Aminopenicillin",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/6v6zCQ9xHJ/",
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
        doseRangeCanine: [12.5, 25],
        doseFeline: 0,
        doseRangeFeline: [12.5, 25],
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
        doseRangeCanine: [12.5, 25],
        doseFeline: 0,
        doseRangeFeline: [12.5, 25],
        premade: [{ concentration: 62.5, volume: 15 }, { concentration: 62.5, volume: 30 }],
        alert: "Give with food. Keep refrigerated."
      }
    }, {
      name: "Ampicillin",
      alias: [""],
      hours: 8,
      days: 14,
      description: "Aminopenicillin",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/z3agzaIA7H/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 100,
        doseCanine: 0,
        doseRangeCanine: [20, 40],
        doseFeline: 0,
        doseRangeFeline: [20, 40],
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
      name: "Atipamezole",
      alias: ["Antisedan®"],
      hours: 0,
      days: 0,
      description: "Alpha-2 Adrenergic Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/0ZHDbLgl7W/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 5,
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
      name: "Apomorphine",
      alias: ["Apometic®"],
      hours: 12,
      days: 14,
      description: "Emetic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/9113HOC31W/",
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
        tabletSizes: [6.25],
        doseCanine: 0,
        doseRangeCanine: [0],
        doseFeline: 0,
        doseRangeFeline: [0],
        alert: "Dissolve 1 tablet in saline and instill into the conjunctival sac."
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
      description: "Anticholinergic, Antidote",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/hPMGRNTLxZ/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 0.54,
        doseCanine: 0,
        doseRangeCanine: [0.02, 0.04],
        doseFeline: 0,
        doseRangeFeline: [0.02, 0.04],
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
      alias: ["Zithromax®"],
      hours: 24,
      days: 7,
      description: "Macrolide Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/MkBhdO3gtm/",
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
        doseRangeCanine: [5, 10],
        doseFeline: 0,
        doseRangeFeline: [5, 10],
        premade: [{ concentration: 40, volume: 30 }],
        alert: ""
      }
    }, {
      name: "Benazapril",
      alias: [""],
      hours: 12,
      days: 14,
      description: "Angiotensin-Converting Enzyme (ACE) Inhibitor",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/PGVZkcnorQ/",
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
        doseRangeCanine: [0.25, 0.5],
        doseFeline: 0,
        doseRangeFeline: [0.25, 1],
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
      name: "Bupivacaine",
      alias: ["Marcaine®"],
      hours: 12,
      days: 14,
      description: "Local Anesthetic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/Ljf37PSR3g/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 5,
        doseCanine: 0,
        doseRangeCanine: [1, 2],
        doseFeline: 1,
        doseRangeFeline: [0],
        routes: ["ID"],
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
      alias: ["Buprenex®"],
      hours: 12,
      days: 14,
      description: "Opiate Partial Agonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/8r3dFe6zhm/",
      controlled: true,
      injectable: {
        available: true,
        concentration: 0.3,
        doseCanine: 1.5,
        doseRangeCanine: [0.005, 0.03],
        doseFeline: 0,
        doseRangeFeline: [0.01, 0.03],
        routes: ["IV", "IM", "SQ", "PO"],
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
      alias: ["Torbugesic®", "Torbutrol®"],
      hours: 12,
      days: 7,
      description: "Opiate Partial Agonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/qZ8Rb9KuWc/",
      controlled: true,
      injectable: {
        available: true,
        concentration: 10,
        doseCanine: 0.2,
        doseRangeCanine: [0.1, 0.5],
        doseFeline: 0.4,
        doseRangeFeline: [0.1, 0.5],
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
      alias: ["Entyce®"],
      hours: 24,
      days: 4,
      description: "Appetite Stimulant",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/GxKEBGhNqK/",
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
        doseCanine: 3,
        doseRangeCanine: [0],
        doseFeline: 0,
        doseRangeFeline: [1, 3],
        premade: [{ concentration: 30, volume: 10 }, { concentration: 30, volume: 30 }],
        alert: ""
      }
    }, {
      name: "Carprofen",
      alias: ["Rimadyl®", "Rovera®"],
      hours: 24,
      days: 14,
      description: "Nonsteroidal Anti-Inflammatory Agent",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/pnIL0k8dzD/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 50,
        doseCanine: 4.4,
        doseRangeCanine: [0],
        doseFeline: 0,
        doseRangeFeline: [0],
        routes: ["SQ"],
        alert: ""
      },
      tablet: {
        available: true,
        tabletSizes: [25, 75, 100],
        doseCanine: 4.4,
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
      name: "Cephalexin",
      alias: ["Keflex®"],
      hours: 12,
      days: 14,
      description: "First-Generation Cephalosporin",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/uW02zxOqcV/",
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
        doseCanine: 22,
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
      alias: ["Ancef®", "Kefzol®", "Zolicef®"],
      hours: 12,
      days: 14,
      description: "1st-Generation Cephalosporin",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/cGmiMsgFjh/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 100,
        doseCanine: 20,
        doseRangeCanine: [15, 35],
        doseFeline: 0,
        doseRangeFeline: [0],
        routes: ["SQ", "IV", "IM"],
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
      alias: ["Convenia®"],
      hours: 12,
      days: 14,
      description: "Third-Generation Cephalosporin",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/B97y0UeIRi/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 80,
        doseCanine: 8,
        doseRangeCanine: [0],
        doseFeline: 8,
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
      alias: ["Simplicef®"],
      hours: 24,
      days: 7,
      description: "Third-Generation Cephalosporin",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/csB00JGcUF/",
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
        doseRangeCanine: [5, 10],
        doseFeline: 0,
        doseRangeFeline: [5, 10],
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
      alias: ["Chloromycetin®"],
      hours: 6,
      days: 14,
      description: "Broad-Spectrum Antibacterial",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/YN0OIXddU2/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 20,
        doseCanine: 0,
        doseRangeCanine: [40, 50],
        doseFeline: 0,
        doseRangeFeline: [10, 20],
        routes: ["IV", "SQ", "IM"],
        alert: ""
      },
      tablet: {
        available: true,
        tabletSizes: [500, 1000],
        doseCanine: 55,
        doseRangeCanine: [0],
        doseFeline: 0,
        doseRangeFeline: [10, 20],
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
      alias: ["Chlor-Trimetron®"],
      hours: 12,
      days: 14,
      description: "1st-Generation Antihistamine",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/5ZVW1yX3ea/",
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
        doseRangeCanine: [0.2, 0.5],
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
      alias: ["Antirobe®", "Cleocin®"],
      hours: 12,
      days: 14,
      description: "Lincosamide Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/wzgsE03T5n/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 150,
        doseCanine: 0,
        doseRangeCanine: [10, 15],
        doseFeline: 0,
        doseRangeFeline: [10, 15],
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
        doseRangeCanine: [5.5, 33],
        doseFeline: 0,
        doseRangeFeline: [11, 33],
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
      alias: ["Clomicalm®"],
      hours: 24,
      days: 14,
      description: "Tricyclic Antidepressant",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/8lUxQzYRPp/",
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
        doseRangeCanine: [2, 4],
        doseFeline: 0,
        doseRangeFeline: [0.25, 1],
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
      alias: ["Atopica®"],
      hours: 24,
      days: 30,
      description: "Immunosuppressive",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/b2qDVutWDR/",
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
        doseCanine: 5,
        doseRangeCanine: [3.3, 6.7],
        doseFeline: 0,
        doseRangeFeline: [0],
        alert: ""
      },
      suspension: {
        available: true,
        doseCanine: 5,
        doseRangeCanine: [3.3, 6.7],
        doseFeline: 7,
        doseRangeFeline: [0],
        premade: [{ concentration: 100, volume: 5 }],
        alert: ""
      }
    }, {
      name: "Cyproheptadine",
      alias: ["Periactin®"],
      hours: 12,
      days: 14,
      description: "First-Generation Antihistamine",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/ik3d544UkK/",
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
        doseRangeCanine: [0.5, 2],
        doseFeline: 0,
        doseRangeFeline: [2, 4],
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
      name: "Methylprednisolone",
      alias: ["Depo-Medrol®"],
      hours: 12,
      days: 14,
      description: "Glucocorticoid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/WKIacBZAgl/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 20,
        doseCanine: 20,
        doseRangeCanine: [2, 120],
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
      name: "Dexmedetomidine",
      alias: ["Dexdomitor®"],
      hours: 12,
      days: 14,
      description: "Alpha-2 Adrenergic Agonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/2ZRdK5kAcz/",
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
      hours: 24,
      days: 14,
      description: "Glucocorticoid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/uXRbPgQQYj/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 2,
        doseCanine: 0,
        doseRangeCanine: [0.07, 0.14],
        doseFeline: 0,
        doseRangeFeline: [0.14, 0.28],
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
      hours: 24,
      days: 14,
      description: "Glucocorticoid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/uXRbPgQQYj/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 4,
        doseCanine: 0.25,
        doseRangeCanine: [0.07, 0.14],
        doseFeline: 0,
        doseRangeFeline: [0.14, 0.28],
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
      alias: ["Valium®"],
      hours: 12,
      days: 14,
      description: "Benzodiazepine",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/x9Kt8MPnT1/",
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
      alias: ["Benadryl®"],
      hours: 12,
      days: 14,
      description: "First-Generation Antihistamine",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/tDYQtMqVRG/",
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
      alias: ["Intropin®"],
      hours: 12,
      days: 14,
      description: "Adrenergic/Dopaminergic Inotropic Agent",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/qeuRpielfJ/",
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
      alias: ["Dopram-V®"],
      hours: 12,
      days: 14,
      description: "CNS/Respiratory Stimulant",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/3Bixh0K81N/",
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
      alias: ["Vibramycin®"],
      hours: 12,
      days: 14,
      description: "Tetracycline Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/cqWG1Kqvh9/",
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
      alias: ["Enacard®"],
      hours: 12,
      days: 14,
      description: "Angiotensin-Converting Enzyme (ACE) Inhibitor",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/bXHR68GoUz/",
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
      alias: ["Baytril®"],
      hours: 12,
      days: 14,
      description: "Fluoroquinolone Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/ajastQOmuU/",
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
      alias: ["Adrenalin®"],
      hours: 12,
      days: 14,
      description: "Alpha- & Beta-Adrenergic Agonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/yTTIqZPq6H/",
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
      alias: ["Incurin®"],
      hours: 12,
      days: 14,
      description: "Hormonal Agent (Estrogen)",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/644PuhOUnX/",
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
      alias: ["Famvir®"],
      hours: 12,
      days: 14,
      description: "Antiviral (Herpes)",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/WvQAfRA0Tv/",
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
      alias: ["Pepcid®"],
      hours: 12,
      days: 14,
      description: "H2-Receptor Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/9h9AS93L6I/",
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
      alias: ["Panacur®"],
      hours: 12,
      days: 14,
      description: "Antiparasitic Agent",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/luWztPs06N/",
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
      alias: ["Romazicon®"],
      hours: 12,
      days: 14,
      description: "Benzodiazepine Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/uhVYi3nn8c/",
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
      alias: ["Lasix®"],
      hours: 12,
      days: 14,
      description: "Loop Diuretic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/mbPAOQoO7D/",
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
      alias: ["Neurontin®"],
      hours: 12,
      days: 14,
      description: "Anticonvulsant, Neuropathic Pain Analgesic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/CSJtfV8dnf/",
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
      alias: ["Gentocin®"],
      hours: 12,
      days: 14,
      description: "Aminoglycoside Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/FWuAk8l86N/",
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
      alias: ["Galliprant®"],
      hours: 12,
      days: 14,
      description: "Prostaglandin E2, EP4-Receptor Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/rThuMgYujA/",
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
      alias: ["Tussigon®"],
      hours: 12,
      days: 14,
      description: "Opiate",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/sdBMJSbkwo/",
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
      alias: ["Dilaudid®"],
      hours: 12,
      days: 14,
      description: "Opiate Agonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/UvzrLrOaaC/",
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
      alias: ["Atarax®", "Vistaril®"],
      hours: 12,
      days: 14,
      description: "1st Generation Antihistamine",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/J0INpFLgZE/",
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
      description: "Injectable Hematinic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/7MNfaeTvcz/",
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
      alias: ["Itrafungol®"],
      hours: 12,
      days: 14,
      description: "Antifungal",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/yB1yAq7aNT/",
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
      name: "Triamcinolone Acetonide",
      alias: ["Vetalog®", "Kenalog®"],
      hours: 12,
      days: 14,
      description: "Glucocorticoid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/bxThYXphcj/",
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
      alias: ["Ketaset®"],
      hours: 12,
      days: 14,
      description: "Dissociative General Anesthetic, NMDA-Receptor Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/imxUTZ1jdB/",
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
      alias: ["Nizoral®"],
      hours: 12,
      days: 14,
      description: "Azole Antifungal",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/YlbeliBGEQ/",
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
      alias: ["Cephulac®"],
      hours: 12,
      days: 14,
      description: "Disaccharide Laxative, Ammonia Reducer",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/Jst8QaYCxf/",
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
      alias: ["Soloxine®"],
      hours: 12,
      days: 14,
      description: "Thyroid Hormone",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/CEWcOGBgRE/",
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
      alias: ["Xylocaine®"],
      hours: 12,
      days: 14,
      description: "Antiarrhythmic, Analgesic, Prokinetic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/j26OaOklr5/",
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
      alias: ["Osmitrol®"],
      hours: 12,
      days: 14,
      description: "Osmotic Diuretic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/kJbZqNUFKO/",
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
      alias: ["Zeniquin®"],
      hours: 12,
      days: 14,
      description: "Fluoroquinolone Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/G6dqDvtnJi/",
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
      alias: ["Cerenia®"],
      hours: 24,
      days: 4,
      description: "Neurokinin (NK-1) Receptor Antagonist Antiemetic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/ufI3PM2LJI/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 10,
        doseCanine: 1,
        doseRangeCanine: [0],
        doseFeline: 1,
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
      alias: ["Antivert®"],
      hours: 12,
      days: 14,
      description: "Antihistamine, Antiemetic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/xTLKnRkrtQ/",
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
      alias: ["Metacam®", "Meloxidyl®"],
      hours: 12,
      days: 14,
      description: "Nonsteroidal Anti-Inflammatory Agent (NSAID)",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/QKyHusjUbe/",
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
        doseCanine: 0.1,
        doseRangeCanine: [0],
        doseFeline: 0,
        doseRangeFeline: [0],
        premade: [{ concentration: 1.5, volume: 10 }, { concentration: 1.5, volume: 32 }, { concentration: 1.5, volume: 100 }],
        alert: "Give with food."
      }
    }, {
      name: "Methimazole",
      alias: ["Tapazole®"],
      hours: 12,
      days: 14,
      description: "Antithyroid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/RMkR7BGrPo/",
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
      alias: ["Robaxin®"],
      hours: 12,
      days: 14,
      description: "Muscle Relaxant",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/HcPJUBzmSg/",
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
      alias: ["Reglan®"],
      hours: 12,
      days: 14,
      description: "GI Prokinetic Agent",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/x3e7rB4LS5/",
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
      alias: ["Flagyl®"],
      hours: 12,
      days: 14,
      description: "Antibiotic, Antiparasitic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/qwJQlPmivi/",
      controlled: false,
      injectable: {
        available: true,
        concentration: 250,
        doseCanine: 15,
        doseRangeCanine: [0],
        doseFeline: 0,
        doseRangeFeline: [0],
        routes: [],
        alert: ""
      },
      tablet: {
        available: true,
        tabletSizes: [250, 500],
        doseCanine: 25,
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
        doseCanine: 25,
        doseRangeCanine: [0],
        doseFeline: 0,
        doseRangeFeline: [0],
        premade: [{ concentration: 50, volume: 0 }],
        alert: ""
      }
    }, {
      name: "Midazolam",
      alias: ["Versed®"],
      hours: 12,
      days: 14,
      description: "Parenteral Benzodiazepine",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/4yqiVGLueS/",
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
      alias: ["Minocin®"],
      hours: 12,
      days: 14,
      description: "Tetracycline Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/nUq8Rwks31/",
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
      alias: ["Remeron®"],
      hours: 12,
      days: 14,
      description: "Tetracyclic Antidepressant; 5-HT3 Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/TVaxA1tGB5/",
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
      alias: ["Narcan®"],
      hours: 12,
      days: 14,
      description: "Antidote, Opiate Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/OoTGJbg80T/",
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
      alias: ["Nicotinamide"],
      hours: 12,
      days: 14,
      description: "Immunomodulator; Nutritional",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/NBGZsjNMfi/",
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
      alias: ["Apoquel®"],
      hours: 12,
      days: 14,
      description: "Janus Kinase (JAK) Inhibitor, Antipruritic, Anti-Inflammatory",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/ooIQfS2sVC/",
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
        doseRangeCanine: [0.4, 0.6],
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
      alias: ["Zofran®"],
      hours: 12,
      days: 14,
      description: "5-HT3 Receptor Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/HaMjUv5DhL/",
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
      alias: ["Protonix®", "Pantoloc®"],
      hours: 12,
      days: 14,
      description: "Proton Pump Inhibitor",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/D4ONiyuzIq/",
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
      name: "Desoxycorticosterone Pivalate",
      alias: ["Percorten-V®", "Zycortal®"],
      hours: 12,
      days: 14,
      description: "Mineralocorticoid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/vDTVjymouk/",
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
      description: "Barbiturate",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/8YXk71VSMD/",
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
      alias: ["Proin®"],
      hours: 12,
      days: 14,
      description: "Sympathomimetic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/qH2f6709Sb/",
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
      alias: ["Feldene®"],
      hours: 12,
      days: 14,
      description: "Nonsteroidal Anti-Inflammatory (NSAID), Anti-Tumor",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/mbT3YecrKA/",
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
      alias: ["Veraflox®"],
      hours: 12,
      days: 14,
      description: "Fluoroquinolone Antibiotic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/XBe74rmYr8/",
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
      alias: ["Droncit®", "Drontal®"],
      hours: 12,
      days: 14,
      description: "Anticestodal Antiparasitic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/07U5OlaMHV/",
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
      alias: ["Minipress®"],
      hours: 12,
      days: 14,
      description: "Alpha-1 Adrenergic Blocker",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/U5r7uX5uea/",
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
      days: 5,
      description: "Glucocorticoid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/sShl11M9aP/",
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
        doseRangeFeline: [2, 8],
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
      days: 5,
      description: "Glucocorticoid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/sShl11M9aP/",
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
        doseRangeCanine: [0.5,2],
        doseFeline: 0,
        doseRangeFeline: [],
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
      alias: ["Diprivan®"],
      hours: 12,
      days: 14,
      description: "Injectable Anesthetic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/RJ86WnI9L8/",
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
      alias: ["Strongid T®", "Nemex®"],
      hours: 12,
      days: 14,
      description: "Antiparasitic",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/q21WnXeZ3X/",
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
      alias: ["Onsior®"],
      hours: 12,
      days: 14,
      description: "NSAID",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/4q64hZacBm/",
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
      name: "S-Adenosyl-Methionine (SAMe) + Silybin",
      alias: ["Denamarin®"],
      hours: 12,
      days: 14,
      description: "Hepatoprotectant",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/xjkR4SUPqH/",
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
      name: "Prednisolone Sodium Succinate",
      alias: ["Solu-Delta-Cortef®"],
      hours: 12,
      days: 14,
      description: "Glucocorticoid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/sShl11M9aP/",
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
      name: "Spironolactone",
      alias: ["Aldactone®"],
      hours: 12,
      days: 14,
      description: "Aldosterone Antagonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/3TyfZRCbI1/",
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
      alias: ["Carafate®"],
      hours: 12,
      days: 14,
      description: "GI-mucosal Protectant",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/izfzRjbdYh/",
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
      alias: ["Albon®"],
      hours: 12,
      days: 14,
      description: "Sulfonamide Antimicrobial",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/SmEZcejqP5/",
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
      alias: ["Co-trimoxazole", "Tribrissen®"],
      hours: 12,
      days: 14,
      description: "Potentiated Sulfonamide Antimicrobial",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/nf1vK8vdaA/",
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
      alias: ["Ultram®"],
      hours: 12,
      days: 14,
      description: "Opioid (mu-Receptor) Agonist",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/7e1DpW9m56/",
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
      alias: ["Desyrel®"],
      hours: 12,
      days: 14,
      description: "Serotonin 2a Antagonist/Reuptake Inhibitor",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/ba9xQv20CJ/",
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
      alias: ["Vetoryl®"],
      hours: 12,
      days: 14,
      description: "Adrenal Steroid Synthesis Inhibitor",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/B63WMMEz5k/",
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
      name: "Trimeprazine Tartrate with Prednisolone",
      alias: ["Temaril-P"],
      hours: 12,
      days: 14,
      description: "Phenothiazine Antihistamine with Corticosteroid",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/nveMMKI4i9/",
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
      name: "Cyanocobalamin",
      alias: ["Vitamin B12"],
      hours: 12,
      days: 14,
      description: "Vitamin/Nutritional",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/bw326rE9VM/",
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
      name: "Phytonadione",
      alias: ["Vitamin K1"],
      hours: 12,
      days: 14,
      description: "Antidote, Fat Soluble Vitamin",
      link: "https://www.plumbsveterinarydrugs.com/#!/monograph/gHNMY88Kcn/",
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
    // Add to database
    db.Meds
      .remove({})
      .then(() => db.Meds.collection.insertMany(medsSeed))
      .then(data => {
        console.log(`APP-SETUP: ${data.result.n} documents inserted in Medications collection!`)
      })
      .catch(err => {
        console.error(err);
      })
  }
}