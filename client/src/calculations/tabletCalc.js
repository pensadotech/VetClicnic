const calcTablet = (medication, patient) => {
    let med = medication.tablet
    let kg = patient.weight / 2.2
    let returnedDose = []

    //use only dosing specific to canines
    if (patient.species === "Canine") {
        //checks if the medication has a specific dosage as opposed to a range
        if (med.doseRangeCanine[0] !== 0) {
            //checks the mg/kg of all whole tablets - 1 tablet
            for (let i = 0; i < med.tabletSizes.length; i++)
                if (med.tabletSizes[i] / kg >= med.doseRangeCanine[0] && med.tabletSizes[i] / kg <= med.doseRangeCanine[1]) {
                    let goodDose = {
                        medication: medication,
                        patient: patient,
                        tabSize: med.tabletSizes[i],
                        numTabs: 1,
                        mgkg: (med.tabletSizes[i] / kg)
                    }
                    returnedDose.push(goodDose)
                }
            //checks the mg/kg of all half tablets - 1/2 tablet
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores duplicate sizes where 1/2 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] / 2 !== med.tabletSizes[i - 1]) {
                    if (med.tabletSizes[i] / kg / 2 >= med.doseRangeCanine[0] && med.tabletSizes[i] / kg / 2 <= med.doseRangeCanine[1]) {
                        let goodDose = {
                            medication: medication,
                            patient: patient,
                            tabSize: med.tabletSizes[i],
                            numTabs: 0.5,
                            mgkg: (med.tabletSizes[i] / 2 / kg)
                        }
                        returnedDose.push(goodDose)
                    }
                }
            }
            //checks the mg/kg of all quarter tablets - 1/4 tablet
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores duplicate sizes where 1/4 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] / 4 !== med.tabletSizes[i - 2]) {
                    if (med.tabletSizes[i] / kg / 4 >= med.doseRangeCanine[0] && med.tabletSizes[i] / kg / 4 <= med.doseRangeCanine[1]) {
                        let goodDose = {
                            medication: medication,
                            patient: patient,
                            tabSize: med.tabletSizes[i],
                            numTabs: 0.25,
                            mgkg: (med.tabletSizes[i] / 4 / kg)
                        }
                        returnedDose.push(goodDose)
                    }
                }
            }
            //checks the mg/kg of all one and a half tablets - 1.5 tablets
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //check for "Apoquel" tablet sizes - 1.5 tablets of 3.6mg will use 5.4mg tablets instead
                if (med.tabletSizes[0] !== 3.6 ) {
                    //ignores duplicate sizes where 1.5 tablets is equal to 1 whole tablet of another size
                    if (med.tabletSizes[i] * 1.5 !== med.tabletSizes[i + 1]) {
                        //ignores duplicate sizes where 1.5 tablets is equal to 1 whole tablet of another size
                        if (med.tabletSizes[i] * 1.5 !== med.tabletSizes[i + 2] / 2) {
                            if (med.tabletSizes[i] / kg * 1.5 >= med.doseRangeCanine[0] && med.tabletSizes[i] / kg * 1.5 <= med.doseRangeCanine[1]) {
                                let goodDose = {
                                    medication: medication,
                                    patient: patient,
                                    tabSize: med.tabletSizes[i],
                                    numTabs: 1.5,
                                    mgkg: (med.tabletSizes[i] * 1.5 / kg)
                                }
                                returnedDose.push(goodDose)
                            }
                        }
                    }
                }
            }
            //checks the mg/kg of all 2x tablets - 2 tablets
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores duplicate sizes where 2 tablets is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] * 2 !== med.tabletSizes[i + 1]) {
                    if (med.tabletSizes[i] / kg * 2 >= med.doseRangeCanine[0] && med.tabletSizes[i] / kg * 2 <= med.doseRangeCanine[1]) {
                        let goodDose = {
                            medication: medication,
                            patient: patient,
                            tabSize: med.tabletSizes[i],
                            numTabs: 2,
                            mgkg: (med.tabletSizes[i] * 2 / kg)
                        }
                        returnedDose.push(goodDose)
                    }
                }
            }
            //checks the mg/kg of all 3x tablets - 3 tablets
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores "apoquel" 
                if (medication.name !== "Apoquel") {
                    //ignores duplicate sizes where 3 tablets is equal to 1 whole tablet of another size
                    if (med.tabletSizes[i] * 3 !== med.tabletSizes[i + 2]) {
                        //ignores duplicate sizes where 3 tablets is equal to 2 whole tablets of another size
                        if (med.tabletSizes[i] * 3 !== med.tabletSizes[i + 1] * 2) {
                            //ignores duplicate sizes where 3 tablets is equal to 2 whole tablets of another size
                            if (med.tabletSizes[i] * 3 !== med.tabletSizes[i + 1] * 1.5) {
                                if (med.tabletSizes[i] / kg * 3 >= med.doseRangeCanine[0] && med.tabletSizes[i] / kg * 3 <= med.doseRangeCanine[1]) {
                                    let goodDose = {
                                        medication: medication,
                                        patient: patient,
                                        tabSize: med.tabletSizes[i],
                                        numTabs: 3,
                                        mgkg: (med.tabletSizes[i] * 3 / kg)
                                    }
                                    returnedDose.push(goodDose)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //use only dosing specific to fenines
    if (patient.species === "Feline") {
        //checks if the medication has a specific dosage as opposed to a range
        if (med.doseRangeFeline[0] !== 0) {
            //checks the mg/kg of all whole tablets - 1 tablet
            for (let i = 0; i < med.tabletSizes.length; i++)
                if (med.tabletSizes[i] / kg >= med.doseRangeFeline[0] && med.tabletSizes[i] / kg <= med.doseRangeFeline[1]) {
                    let goodDose = {
                        medication: medication,
                        patient: patient,
                        tabSize: med.tabletSizes[i],
                        numTabs: 1,
                        mgkg: (med.tabletSizes[i] / kg)
                    }
                    returnedDose.push(goodDose)
                }
            //checks the mg/kg of all half tablets - 1/2 tablet
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores duplicate sizes where 1/2 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] / 2 !== med.tabletSizes[i - 1]) {
                    if (med.tabletSizes[i] / kg / 2 >= med.doseRangeFeline[0] && med.tabletSizes[i] / kg / 2 <= med.doseRangeFeline[1]) {
                        let goodDose = {
                            medication: medication,
                            patient: patient,
                            tabSize: med.tabletSizes[i],
                            numTabs: 0.5,
                            mgkg: (med.tabletSizes[i] / 2 / kg)
                        }
                        returnedDose.push(goodDose)
                    }
                }
            }
            //checks the mg/kg of all quarter tablets - 1/4 tablet
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores duplicate sizes where 1/4 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] / 4 !== med.tabletSizes[i - 2]) {
                    if (med.tabletSizes[i] / kg / 4 >= med.doseRangeFeline[0] && med.tabletSizes[i] / kg / 4 <= med.doseRangeFeline[1]) {
                        let goodDose = {
                            medication: medication,
                            patient: patient,
                            tabSize: med.tabletSizes[i],
                            numTabs: 0.25,
                            mgkg: (med.tabletSizes[i] / 4 / kg)
                        }
                        returnedDose.push(goodDose)
                    }
                }
            }
            //checks the mg/kg of all one and a half tablets - 1.5 tablets
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //check for "Apoquel" tablet sizes - 1.5 tablets of 3.6mg will use 5.4mg tablets instead
                if (med.tabletSizes[0] !== 3.6) {
                    //ignores duplicate sizes where 1.5 tablets is equal to 1 whole tablet of another size
                    if (med.tabletSizes[i] * 1.5 !== med.tabletSizes[i + 1]) {
                        //ignores duplicate sizes where 1.5 tablets is equal to 1 whole tablet of another size
                        if (med.tabletSizes[i] * 1.5 !== med.tabletSizes[i + 2] / 2) {
                            if (med.tabletSizes[i] / kg * 1.5 >= med.doseRangeFeline[0] && med.tabletSizes[i] / kg * 1.5 <= med.doseRangeFeline[1]) {
                                let goodDose = {
                                    medication: medication,
                                    patient: patient,
                                    tabSize: med.tabletSizes[i],
                                    numTabs: 1.5,
                                    mgkg: (med.tabletSizes[i] * 1.5 / kg)
                                }
                                returnedDose.push(goodDose)
                            }
                        }
                    }
                }
            }
            //checks the mg/kg of all 2x tablets - 2 tablets
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores duplicate sizes where 2 tablets is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] * 2 !== med.tabletSizes[i + 1]) {
                    if (med.tabletSizes[i] / kg * 2 >= med.doseRangeFeline[0] && med.tabletSizes[i] / kg * 2 <= med.doseRangeFeline[1]) {
                        let goodDose = {
                            medication: medication,
                            patient: patient,
                            tabSize: med.tabletSizes[i],
                            numTabs: 2,
                            mgkg: (med.tabletSizes[i] * 2 / kg)
                        }
                        returnedDose.push(goodDose)
                    }
                }
            }
            //checks the mg/kg of all 3x tablets - 3 tablets
            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores "apoquel" 
                if (medication.name !== "Apoquel") {
                    //ignores duplicate sizes where 3 tablets is equal to 1 whole tablet of another size
                    if (med.tabletSizes[i] * 3 !== med.tabletSizes[i + 2]) {
                        //ignores duplicate sizes where 3 tablets is equal to 2 whole tablets of another size
                        if (med.tabletSizes[i] * 3 !== med.tabletSizes[i + 1] * 2) {
                            //ignores duplicate sizes where 3 tablets is equal to 2 whole tablets of another size
                            if (med.tabletSizes[i] * 3 !== med.tabletSizes[i + 1] * 1.5) {
                                if (med.tabletSizes[i] / kg * 3 >= med.doseRangeFeline[0] && med.tabletSizes[i] / kg * 3 <= med.doseRangeFeline[1]) {
                                    let goodDose = {
                                        medication: medication,
                                        patient: patient,
                                        tabSize: med.tabletSizes[i],
                                        numTabs: 3,
                                        mgkg: (med.tabletSizes[i] * 3 / kg)
                                    }
                                    returnedDose.push(goodDose)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    //end specific dose calcs
    //check for medications with a specific dose
    //check for canines
    if (patient.species === "Canine") {
        if (med.doseCanine !== 0) {
            // variables to hold one higher dose and one lower dose
            let mgKg = med.doseCanine;
            let mgKgLow, mgKgHi; //mg/kg of closest dose
            let tabLow = 0, tabHi = 0; //tablet size in mgs
            let numLow = 0, numHi = 0; //number of tablets
            let low = 10000, hi = -10000; //variables for threshold value comparison

            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores duplicate sizes where 3 tablets is equal to 1 whole tablets of another size
                if (med.tabletSizes[i] * 3 !== med.tabletSizes[i + 2] || med.tabletSizes[i] * 3 !== med.tabletSizes[i + 1]) {
                    //checks the mg/kg of all 3x tablets - 3 tablets -- sets variables to closest hi dose
                    if ((mgKg - med.tabletSizes[i] / kg * 3) <= 0 && (mgKg - med.tabletSizes[i] / kg * 3) >= hi) {
                        hi = mgKg - med.tabletSizes[i] / kg * 3;
                        mgKgHi = med.tabletSizes[i] / kg * 3;
                        tabHi = med.tabletSizes[i];
                        numHi = 3;
                    }
                    //checks the mg/kg of all 3x tablets - 3 tablets -- sets variables to closest low dose
                    if ((mgKg - med.tabletSizes[i] / kg * 3) >= 0 && (mgKg - med.tabletSizes[i] / kg * 3) <= low) {
                        low = mgKg - med.tabletSizes[i] / kg * 3;
                        mgKgLow = med.tabletSizes[i] / kg * 3;
                        tabLow = med.tabletSizes[i];
                        numLow = 3;
                    }
                }
                //ignores duplicate sizes where 2 tablets is equal to 1/2 tablet of another size
                if (med.tabletSizes[i] * 2 !== med.tabletSizes[i + 2] / 2) {
                    //ignores duplicate sizes where 2 tablets is equal to 1 whole tablet of another size
                    if (med.tabletSizes[i] * 2 !== med.tabletSizes[i + 1]) {
                        //ignores duplicate sizes where 2 tablets is equal to 1 and 1/2 tablets of another size
                        if (med.tabletSizes[i] * 2 !== med.tabletSizes[i + 1] * 1.5) {
                            //checks the mg/kg of all 2x tablets - 2 tablets -- sets variables to closest hi dose
                            if ((mgKg - med.tabletSizes[i] / kg * 2) <= 0 && (mgKg - med.tabletSizes[i] / kg * 2) >= hi) {
                                hi = mgKg - med.tabletSizes[i] / kg * 2;
                                mgKgHi = med.tabletSizes[i] / kg * 2;
                                tabHi = med.tabletSizes[i];
                                numHi = 2;
                            }
                            //checks the mg/kg of all 2x tablets - 2 tablets -- sets variables to closest low dose
                            if ((mgKg - med.tabletSizes[i] / kg * 2) >= 0 && (mgKg - med.tabletSizes[i] / kg * 2) <= low) {
                                low = mgKg - med.tabletSizes[i] / kg * 2;
                                mgKgLow = med.tabletSizes[i] / kg * 2;
                                tabLow = med.tabletSizes[i];
                                numLow = 2;
                            }
                        }
                    }
                }
                //ignores duplicate sizes where 1/4 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] / 4 !== med.tabletSizes[i - 2]) {
                    //checks the mg/kg of all 1/4 tablet - sets variables to closest hi dose
                    if ((mgKg - med.tabletSizes[i] / kg / 4) <= 0 && (mgKg - med.tabletSizes[i] / kg / 4) >= hi) {
                        hi = mgKg - med.tabletSizes[i] / kg / 4;
                        mgKgHi = med.tabletSizes[i] / kg / 4;
                        tabHi = med.tabletSizes[i];
                        numHi = 0.25;
                    }
                    //checks the mg/kg of all 1/4 tablets - sets variables to closest low dose
                    if ((mgKg - med.tabletSizes[i] / kg / 4) >= 0 && (mgKg - med.tabletSizes[i] / kg / 4) <= low) {
                        low = mgKg - med.tabletSizes[i] / kg / 4;
                        mgKgLow = med.tabletSizes[i] / kg / 4;
                        tabLow = med.tabletSizes[i];
                        numLow = 0.25;
                    }
                }
                //ignores duplicate sizes where 1.5 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] * 1.5 !== med.tabletSizes[i + 1]) {
                    if ((mgKg - med.tabletSizes[i] / kg * 1.5) <= 0 && (mgKg - med.tabletSizes[i] / kg * 1.5) >= hi) {
                        hi = mgKg - med.tabletSizes[i] / kg * 1.5;
                        mgKgHi = med.tabletSizes[i] / kg * 1.5;
                        tabHi = med.tabletSizes[i];
                        numHi = 1.5;
                    }

                    if ((mgKg - med.tabletSizes[i] / kg * 1.5) >= 0 && (mgKg - med.tabletSizes[i] / kg * 1.5) <= low) {
                        low = mgKg - med.tabletSizes[i] / kg * 1.5;
                        mgKgLow = med.tabletSizes[i] / kg * 1.5;
                        tabLow = med.tabletSizes[i];
                        numLow = 1.5;
                    }
                }
                //ignores duplicate sizes where 1/2 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] / 2 !== med.tabletSizes[i - 1]) {
                    //checks the mg/kg of all 1/2 tablets - sets variables to closest hi dose
                    if ((mgKg - med.tabletSizes[i] / kg / 2) <= 0 && (mgKg - med.tabletSizes[i] / kg / 2) >= hi) {
                        hi = mgKg - med.tabletSizes[i] / kg / 2;
                        mgKgHi = med.tabletSizes[i] / kg / 2;
                        tabHi = med.tabletSizes[i];
                        numHi = 0.5;
                    }
                    //checks the mg/kg of all 1/2 tablets - sets variables to closest low dose
                    if ((mgKg - med.tabletSizes[i] / kg / 2) >= 0 && (mgKg - med.tabletSizes[i] / kg / 2) <= low) {
                        low = mgKg - med.tabletSizes[i] / kg / 2;
                        mgKgLow = med.tabletSizes[i] / kg / 2;
                        tabLow = med.tabletSizes[i];
                        numLow = 0.5;
                    }
                }
                //checks the mg/kg of all whole tablets - sets variables to closest hi dose
                if ((mgKg - med.tabletSizes[i] / kg) <= 0 && (mgKg - med.tabletSizes[i] / kg) >= hi) {
                    hi = mgKg - med.tabletSizes[i] / kg;
                    mgKgHi = med.tabletSizes[i] / kg;
                    tabHi = med.tabletSizes[i];
                    numHi = 1;
                }
                //checks the mg/kg of all whole tablets - sets variables to closest low dose
                if ((mgKg - med.tabletSizes[i] / kg) >= 0 && (mgKg - med.tabletSizes[i] / kg) <= low) {
                    low = mgKg - med.tabletSizes[i] / kg;
                    mgKgLow = med.tabletSizes[i] / kg;
                    tabLow = med.tabletSizes[i];
                    numLow = 1;
                }
            }
            if(tabLow !== 0 ) {
                let goodDoseLow = {
                    medication: medication,
                    patient: patient,
                    tabSize: tabLow,
                    numTabs: numLow,
                    mgkg: mgKgLow
                }
                returnedDose.push(goodDoseLow)
            }
            let goodDoseHi = {
                medication: medication,
                patient: patient,
                tabSize: tabHi,
                numTabs: numHi,
                mgkg: mgKgHi
            }
            returnedDose.push(goodDoseHi)
        }
    }
    //feline specific dosages
    if (patient.species === "Feline") {
        if (med.doseFeline !== 0) {
            // variables to hold one higher dose and one lower dose
            let mgKg = med.doseFeline;
            let mgKgLow, mgKgHi; //mg/kg of closest dose
            let tabLow = 0, tabHi = 0; //tablet size in mgs
            let numLow = 0, numHi = 0; //number of tablets
            let low = 10000, hi = -10000; //variables for threshold value comparison

            for (let i = 0; i < med.tabletSizes.length; i++) {
                //ignores duplicate sizes where 3 tablets is equal to 1 whole tablets of another size
                if (med.tabletSizes[i] * 3 !== med.tabletSizes[i + 2] || med.tabletSizes[i] * 3 !== med.tabletSizes[i + 1]) {
                    //checks the mg/kg of all 3x tablets - 3 tablets -- sets variables to closest hi dose
                    if ((mgKg - med.tabletSizes[i] / kg * 3) <= 0 && (mgKg - med.tabletSizes[i] / kg * 3) >= hi) {
                        hi = mgKg - med.tabletSizes[i] / kg * 3;
                        mgKgHi = med.tabletSizes[i] / kg * 3;
                        tabHi = med.tabletSizes[i];
                        numHi = 3;
                    }
                    //checks the mg/kg of all 3x tablets - 3 tablets -- sets variables to closest low dose
                    if ((mgKg - med.tabletSizes[i] / kg * 3) >= 0 && (mgKg - med.tabletSizes[i] / kg * 3) <= low) {
                        low = mgKg - med.tabletSizes[i] / kg * 3;
                        mgKgLow = med.tabletSizes[i] / kg * 3;
                        tabLow = med.tabletSizes[i];
                        numLow = 3;
                    }
                }
                //ignores duplicate sizes where 2 tablets is equal to 1/2 tablet of another size
                if (med.tabletSizes[i] * 2 !== med.tabletSizes[i + 2] / 2) {
                    //ignores duplicate sizes where 2 tablets is equal to 1 whole tablet of another size
                    if (med.tabletSizes[i] * 2 !== med.tabletSizes[i + 1]) {
                        //ignores duplicate sizes where 2 tablets is equal to 1 and 1/2 tablets of another size
                        if (med.tabletSizes[i] * 2 !== med.tabletSizes[i + 1] * 1.5) {
                            //checks the mg/kg of all 2x tablets - 2 tablets -- sets variables to closest hi dose
                            if ((mgKg - med.tabletSizes[i] / kg * 2) <= 0 && (mgKg - med.tabletSizes[i] / kg * 2) >= hi) {
                                hi = mgKg - med.tabletSizes[i] / kg * 2;
                                mgKgHi = med.tabletSizes[i] / kg * 2;
                                tabHi = med.tabletSizes[i];
                                numHi = 2;
                            }
                            //checks the mg/kg of all 2x tablets - 2 tablets -- sets variables to closest low dose
                            if ((mgKg - med.tabletSizes[i] / kg * 2) >= 0 && (mgKg - med.tabletSizes[i] / kg * 2) <= low) {
                                low = mgKg - med.tabletSizes[i] / kg * 2;
                                mgKgLow = med.tabletSizes[i] / kg * 2;
                                tabLow = med.tabletSizes[i];
                                numLow = 2;
                            }
                        }
                    }
                }
                //ignores duplicate sizes where 1/4 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] / 4 !== med.tabletSizes[i - 2]) {
                    //checks the mg/kg of all 1/4 tablet - sets variables to closest hi dose
                    if ((mgKg - med.tabletSizes[i] / kg / 4) <= 0 && (mgKg - med.tabletSizes[i] / kg / 4) >= hi) {
                        hi = mgKg - med.tabletSizes[i] / kg / 4;
                        mgKgHi = med.tabletSizes[i] / kg / 4;
                        tabHi = med.tabletSizes[i];
                        numHi = 0.25;
                    }
                    //checks the mg/kg of all 1/4 tablets - sets variables to closest low dose
                    if ((mgKg - med.tabletSizes[i] / kg / 4) >= 0 && (mgKg - med.tabletSizes[i] / kg / 4) <= low) {
                        low = mgKg - med.tabletSizes[i] / kg / 4;
                        mgKgLow = med.tabletSizes[i] / kg / 4;
                        tabLow = med.tabletSizes[i];
                        numLow = 0.25;
                    }
                }
                //ignores duplicate sizes where 1.5 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] * 1.5 !== med.tabletSizes[i + 1]) {
                    if ((mgKg - med.tabletSizes[i] / kg * 1.5) <= 0 && (mgKg - med.tabletSizes[i] / kg * 1.5) >= hi) {
                        hi = mgKg - med.tabletSizes[i] / kg * 1.5;
                        mgKgHi = med.tabletSizes[i] / kg * 1.5;
                        tabHi = med.tabletSizes[i];
                        numHi = 1.5;
                    }

                    if ((mgKg - med.tabletSizes[i] / kg * 1.5) >= 0 && (mgKg - med.tabletSizes[i] / kg * 1.5) <= low) {
                        low = mgKg - med.tabletSizes[i] / kg * 1.5;
                        mgKgLow = med.tabletSizes[i] / kg * 1.5;
                        tabLow = med.tabletSizes[i];
                        numLow = 1.5;
                    }
                }
                //ignores duplicate sizes where 1/2 tablet is equal to 1 whole tablet of another size
                if (med.tabletSizes[i] / 2 !== med.tabletSizes[i - 1]) {
                    //checks the mg/kg of all 1/2 tablets - sets variables to closest hi dose
                    if ((mgKg - med.tabletSizes[i] / kg / 2) <= 0 && (mgKg - med.tabletSizes[i] / kg / 2) >= hi) {
                        hi = mgKg - med.tabletSizes[i] / kg / 2;
                        mgKgHi = med.tabletSizes[i] / kg / 2;
                        tabHi = med.tabletSizes[i];
                        numHi = 0.5;
                    }
                    //checks the mg/kg of all 1/2 tablets - sets variables to closest low dose
                    if ((mgKg - med.tabletSizes[i] / kg / 2) >= 0 && (mgKg - med.tabletSizes[i] / kg / 2) <= low) {
                        low = mgKg - med.tabletSizes[i] / kg / 2;
                        mgKgLow = med.tabletSizes[i] / kg / 2;
                        tabLow = med.tabletSizes[i];
                        numLow = 0.5;
                    }
                }
                //checks the mg/kg of all whole tablets - sets variables to closest hi dose
                if ((mgKg - med.tabletSizes[i] / kg) <= 0 && (mgKg - med.tabletSizes[i] / kg) >= hi) {
                    hi = mgKg - med.tabletSizes[i] / kg;
                    mgKgHi = med.tabletSizes[i] / kg;
                    tabHi = med.tabletSizes[i];
                    numHi = 1;
                }
                //checks the mg/kg of all whole tablets - sets variables to closest low dose
                if ((mgKg - med.tabletSizes[i] / kg) >= 0 && (mgKg - med.tabletSizes[i] / kg) <= low) {
                    low = mgKg - med.tabletSizes[i] / kg;
                    mgKgLow = med.tabletSizes[i] / kg;
                    tabLow = med.tabletSizes[i];
                    numLow = 1;
                }
            }
            if (tabLow !== 0) {
            let goodDoseLow = {
                medication: medication,
                patient: patient,
                tabSize: tabLow,
                numTabs: numLow,
                mgkg: mgKgLow
            }
            returnedDose.push(goodDoseLow)
        }
            let goodDoseHi = {
                medication: medication,
                patient: patient,
                tabSize: tabHi,
                numTabs: numHi,
                mgkg: mgKgHi
            }
            returnedDose.push(goodDoseHi)
        }
    }
    return returnedDose
}

module.exports = calcTablet;