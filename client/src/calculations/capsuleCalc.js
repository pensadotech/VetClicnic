const calcCapsule = (medication, patient) => {
    let med = medication.capsule
    let kg = patient.weight / 2.2
    let returnedDose = []

    //use only dosing specific to canines
    if (patient.species === "Canine") {
        //checks if the medication has a specific dosage as opposed to a range
        if (med.doseCanine !== 0) {
            //checks the mg/kg of all whole capsules - 1 capsule
            for (let i = 0; i < med.capsuleSizes.length; i++)
                if (med.capsuleSizes[i] / kg >= med.doseRangeCanine[0] && med.capsuleSizes[i] / kg <= med.doseRangeCanine[1]) {
                    let goodDose = {
                        medication: medication,
                        patient: patient,
                        capSize: med.capsuleSizes[i],
                        numCaps: 1,
                        mgkg: (med.capsuleSizes[i] / kg).toFixed(2)
                    }
                    returnedDose.push(goodDose)
                }
            //checks the mg/kg of all 2x capsules - 2 capsules
            for (let i = 0; i < med.capsuleSizes.length; i++) {
                //ignores duplicate sizes where 2 capsules is equal to 1 whole capsule of another size
                if (med.capsuleSizes[i] * 2 !== med.capsuleSizes[i + 1]) {
                    if (med.capsuleSizes[i] / kg * 2 >= med.doseRangeCanine[0] && med.capsuleSizes[i] / kg * 2 <= med.doseRangeCanine[1]) {
                        let goodDose = {
                            medication: medication,
                            patient: patient,
                            capSize: med.capsuleSizes[i],
                            numCaps: 2,
                            mgkg: (med.capsuleSizes[i] * 2 / kg).toFixed(2)
                        }
                        returnedDose.push(goodDose)
                    }
                }
            }
            //checks the mg/kg of all 3x capsules - 3 capsules
            for (let i = 0; i < med.capsuleSizes.length; i++) {
                //ignores "apoquel" 
                if (medication.name !== "Apoquel") {
                    //ignores duplicate sizes where 3 capsules is equal to 1 whole capsule of another size
                    if (med.capsuleSizes[i] * 3 !== med.capsuleSizes[i + 2]) {
                        //ignores duplicate sizes where 3 capsules is equal to 2 whole capsules of another size
                        if (med.capsuleSizes[i] * 3 !== med.capsuleSizes[i + 1] * 2) {
                            if (med.capsuleSizes[i] / kg * 3 >= med.doseRangeCanine[0] && med.capsuleSizes[i] / kg * 3 <= med.doseRangeCanine[1]) {
                                let goodDose = {
                                    medication: medication,
                                    patient: patient,
                                    capSize: med.capsuleSizes[i],
                                    numCaps: 3,
                                    mgkg: (med.capsuleSizes[i] * 3 / kg).toFixed(2)
                                }
                                returnedDose.push(goodDose)
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
        if (med.doseFeline !== 0) {
            //checks the mg/kg of all whole capsules - 1 capsule
            for (let i = 0; i < med.capsuleSizes.length; i++)
                if (med.capsuleSizes[i] / kg >= med.doseRangeFeline[0] && med.capsuleSizes[i] / kg <= med.doseRangeFeline[1]) {
                    let goodDose = {
                        medication: medication,
                        patient: patient,
                        capSize: med.capsuleSizes[i],
                        numCaps: 1,
                        mgkg: (med.capsuleSizes[i] / kg).toFixed(2)
                    }
                    returnedDose.push(goodDose)
                }
            //checks the mg/kg of all 2x capsules - 2 capsules
            for (let i = 0; i < med.capsuleSizes.length; i++) {
                //ignores duplicate sizes where 2 capsules is equal to 1 whole capsule of another size
                if (med.capsuleSizes[i] * 2 !== med.capsuleSizes[i + 1]) {
                    if (med.capsuleSizes[i] / kg * 2 >= med.doseRangeFeline[0] && med.capsuleSizes[i] / kg * 2 <= med.doseRangeFeline[1]) {
                        let goodDose = {
                            medication: medication,
                            patient: patient,
                            capSize: med.capsuleSizes[i],
                            numCaps: 2,
                            mgkg: (med.capsuleSizes[i] * 2 / kg).toFixed(2)
                        }
                        returnedDose.push(goodDose)
                    }
                }
            }
            //checks the mg/kg of all 3x capsules - 3 capsules
            for (let i = 0; i < med.capsuleSizes.length; i++) {
                //ignores "apoquel" 
                if (medication.name !== "Apoquel") {
                    //ignores duplicate sizes where 3 capsules is equal to 1 whole capsule of another size
                    if (med.capsuleSizes[i] * 3 !== med.capsuleSizes[i + 2]) {
                        //ignores duplicate sizes where 3 capsules is equal to 2 whole capsules of another size
                        if (med.capsuleSizes[i] * 3 !== med.capsuleSizes[i + 1] * 2) {
                            if (med.capsuleSizes[i] / kg * 3 >= med.doseRangeFeline[0] && med.capsuleSizes[i] / kg * 3 <= med.doseRangeFeline[1]) {
                                let goodDose = {
                                    medication: medication,
                                    patient: patient,
                                    capSize: med.capsuleSizes[i],
                                    numCaps: 3,
                                    mgkg: (med.capsuleSizes[i] * 3 / kg).toFixed(2)
                                }
                                returnedDose.push(goodDose)
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
            let capLow = 0, capHi = 0; //capsule size in mgs
            let numLow = 0, numHi = 0; //number of capsules
            let low = 10000, hi = -10000; //variables for threshold value comparison

            for (let i = 0; i < med.capsuleSizes.length; i++) {
                //ignores duplicate sizes where 3 capsules is equal to 1 whole capsules of another size
                if (med.capsuleSizes[i] * 3 !== med.capsuleSizes[i + 2] || med.capsuleSizes[i] * 3 !== med.capsuleSizes[i + 1]) {
                    //checks the mg/kg of all 3x capsules - 3 capsules -- sets variables to closest hi dose
                    if ((mgKg - med.capsuleSizes[i] / kg * 3) <= 0 && (mgKg - med.capsuleSizes[i] / kg * 3) >= hi) {
                        hi = mgKg - med.capsuleSizes[i] / kg * 3;
                        mgKgHi = med.capsuleSizes[i] / kg * 3;
                        capHi = med.capsuleSizes[i];
                        numHi = 3;
                    }
                    //checks the mg/kg of all 3x capsules - 3 capsules -- sets variables to closest low dose
                    if ((mgKg - med.capsuleSizes[i] / kg * 3) >= 0 && (mgKg - med.capsuleSizes[i] / kg * 3) <= low) {
                        low = mgKg - med.capsuleSizes[i] / kg * 3;
                        mgKgLow = med.capsuleSizes[i] / kg * 3;
                        capLow = med.capsuleSizes[i];
                        numLow = 3;
                    }
                }
                //ignores duplicate sizes where 2 capsules is equal to 1/2 capsule of another size
                if (med.capsuleSizes[i] * 2 !== med.capsuleSizes[i + 2] / 2) {
                    //ignores duplicate sizes where 2 capsules is equal to 1 whole capsule of another size
                    if (med.capsuleSizes[i] * 2 !== med.capsuleSizes[i + 1]) {

                        //checks the mg/kg of all 2x capsules - 2 capsules -- sets variables to closest hi dose
                        if ((mgKg - med.capsuleSizes[i] / kg * 2) <= 0 && (mgKg - med.capsuleSizes[i] / kg * 2) >= hi) {
                            hi = mgKg - med.capsuleSizes[i] / kg * 2;
                            mgKgHi = med.capsuleSizes[i] / kg * 2;
                            capHi = med.capsuleSizes[i];
                            numHi = 2;
                        }
                        //checks the mg/kg of all 2x capsules - 2 capsules -- sets variables to closest low dose
                        if ((mgKg - med.capsuleSizes[i] / kg * 2) >= 0 && (mgKg - med.capsuleSizes[i] / kg * 2) <= low) {
                            low = mgKg - med.capsuleSizes[i] / kg * 2;
                            mgKgLow = med.capsuleSizes[i] / kg * 2;
                            capLow = med.capsuleSizes[i];
                            numLow = 2;
                        }

                    }
                }
                //checks the mg/kg of all whole capsules - sets variables to closest hi dose
                if ((mgKg - med.capsuleSizes[i] / kg) <= 0 && (mgKg - med.capsuleSizes[i] / kg) >= hi) {
                    hi = mgKg - med.capsuleSizes[i] / kg;
                    mgKgHi = med.capsuleSizes[i] / kg;
                    capHi = med.capsuleSizes[i];
                    numHi = 1;
                }
                //checks the mg/kg of all whole capsules - sets variables to closest low dose
                if ((mgKg - med.capsuleSizes[i] / kg) >= 0 && (mgKg - med.capsuleSizes[i] / kg) <= low) {
                    low = mgKg - med.capsuleSizes[i] / kg;
                    mgKgLow = med.capsuleSizes[i] / kg;
                    capLow = med.capsuleSizes[i];
                    numLow = 1;
                }
            }
            if(capLow !== 0){
                let goodDoseLow = {
                    medication: medication,
                    patient: patient,
                    capSize: capLow,
                    numCaps: numLow,
                    mgkg: mgKgLow
                }
                returnedDose.push(goodDoseLow)
            }
            
            let goodDoseHi = {
                medication: medication,
                patient: patient,
                capSize: capHi,
                numCaps: numHi,
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
            let capLow = 0, capHi = 0; //capsule size in mgs
            let numLow = 0, numHi = 0; //number of capsules
            let low = 10000, hi = -10000; //variables for threshold value comparison

            for (let i = 0; i < med.capsuleSizes.length; i++) {
                //ignores duplicate sizes where 3 capsules is equal to 1 whole capsules of another size
                if (med.capsuleSizes[i] * 3 !== med.capsuleSizes[i + 2] || med.capsuleSizes[i] * 3 !== med.capsuleSizes[i + 1]) {
                    //checks the mg/kg of all 3x capsules - 3 capsules -- sets variables to closest hi dose
                    if ((mgKg - med.capsuleSizes[i] / kg * 3) <= 0 && (mgKg - med.capsuleSizes[i] / kg * 3) >= hi) {
                        hi = mgKg - med.capsuleSizes[i] / kg * 3;
                        mgKgHi = med.capsuleSizes[i] / kg * 3;
                        capHi = med.capsuleSizes[i];
                        numHi = 3;
                    }
                    //checks the mg/kg of all 3x capsules - 3 capsules -- sets variables to closest low dose
                    if ((mgKg - med.capsuleSizes[i] / kg * 3) >= 0 && (mgKg - med.capsuleSizes[i] / kg * 3) <= low) {
                        low = mgKg - med.capsuleSizes[i] / kg * 3;
                        mgKgLow = med.capsuleSizes[i] / kg * 3;
                        capLow = med.capsuleSizes[i];
                        numLow = 3;
                    }
                }
                //ignores duplicate sizes where 2 capsules is equal to 1/2 capsule of another size
                if (med.capsuleSizes[i] * 2 !== med.capsuleSizes[i + 2] / 2) {
                    //ignores duplicate sizes where 2 capsules is equal to 1 whole capsule of another size
                    if (med.capsuleSizes[i] * 2 !== med.capsuleSizes[i + 1]) {
                        //ignores duplicate sizes where 2 capsules is equal to 1 and 1/2 capsules of another size
                        if (med.capsuleSizes[i] * 2 !== med.capsuleSizes[i + 1] * 1.5) {
                            //checks the mg/kg of all 2x capsules - 2 capsules -- sets variables to closest hi dose
                            if ((mgKg - med.capsuleSizes[i] / kg * 2) <= 0 && (mgKg - med.capsuleSizes[i] / kg * 2) >= hi) {
                                hi = mgKg - med.capsuleSizes[i] / kg * 2;
                                mgKgHi = med.capsuleSizes[i] / kg * 2;
                                capHi = med.capsuleSizes[i];
                                numHi = 2;
                            }
                            //checks the mg/kg of all 2x capsules - 2 capsules -- sets variables to closest low dose
                            if ((mgKg - med.capsuleSizes[i] / kg * 2) >= 0 && (mgKg - med.capsuleSizes[i] / kg * 2) <= low) {
                                low = mgKg - med.capsuleSizes[i] / kg * 2;
                                mgKgLow = med.capsuleSizes[i] / kg * 2;
                                capLow = med.capsuleSizes[i];
                                numLow = 2;
                            }
                        }
                    }
                }
                //ignores duplicate sizes where 1/4 capsule is equal to 1 whole capsule of another size
                if (med.capsuleSizes[i] / 4 !== med.capsuleSizes[i - 2]) {
                    //checks the mg/kg of all 1/4 capsule - sets variables to closest hi dose
                    if ((mgKg - med.capsuleSizes[i] / kg / 4) <= 0 && (mgKg - med.capsuleSizes[i] / kg / 4) >= hi) {
                        hi = mgKg - med.capsuleSizes[i] / kg / 4;
                        mgKgHi = med.capsuleSizes[i] / kg / 4;
                        capHi = med.capsuleSizes[i];
                        numHi = 0.25;
                    }
                    //checks the mg/kg of all 1/4 capsules - sets variables to closest low dose
                    if ((mgKg - med.capsuleSizes[i] / kg / 4) >= 0 && (mgKg - med.capsuleSizes[i] / kg / 4) <= low) {
                        low = mgKg - med.capsuleSizes[i] / kg / 4;
                        mgKgLow = med.capsuleSizes[i] / kg / 4;
                        capLow = med.capsuleSizes[i];
                        numLow = 0.25;
                    }
                }
                //ignores duplicate sizes where 1.5 capsule is equal to 1 whole capsule of another size
                if (med.capsuleSizes[i] * 1.5 !== med.capsuleSizes[i + 1]) {
                    if ((mgKg - med.capsuleSizes[i] / kg * 1.5) <= 0 && (mgKg - med.capsuleSizes[i] / kg * 1.5) >= hi) {
                        hi = mgKg - med.capsuleSizes[i] / kg * 1.5;
                        mgKgHi = med.capsuleSizes[i] / kg * 1.5;
                        capHi = med.capsuleSizes[i];
                        numHi = 1.5;
                    }

                    if ((mgKg - med.capsuleSizes[i] / kg * 1.5) >= 0 && (mgKg - med.capsuleSizes[i] / kg * 1.5) <= low) {
                        low = mgKg - med.capsuleSizes[i] / kg * 1.5;
                        mgKgLow = med.capsuleSizes[i] / kg * 1.5;
                        capLow = med.capsuleSizes[i];
                        numLow = 1.5;
                    }
                }
                //ignores duplicate sizes where 1/2 capsule is equal to 1 whole capsule of another size
                if (med.capsuleSizes[i] / 2 !== med.capsuleSizes[i - 1]) {
                    //checks the mg/kg of all 1/2 capsules - sets variables to closest hi dose
                    if ((mgKg - med.capsuleSizes[i] / kg / 2) <= 0 && (mgKg - med.capsuleSizes[i] / kg / 2) >= hi) {
                        hi = mgKg - med.capsuleSizes[i] / kg / 2;
                        mgKgHi = med.capsuleSizes[i] / kg / 2;
                        capHi = med.capsuleSizes[i];
                        numHi = 0.5;
                    }
                    //checks the mg/kg of all 1/2 capsules - sets variables to closest low dose
                    if ((mgKg - med.capsuleSizes[i] / kg / 2) >= 0 && (mgKg - med.capsuleSizes[i] / kg / 2) <= low) {
                        low = mgKg - med.capsuleSizes[i] / kg / 2;
                        mgKgLow = med.capsuleSizes[i] / kg / 2;
                        capLow = med.capsuleSizes[i];
                        numLow = 0.5;
                    }
                }
                //checks the mg/kg of all whole capsules - sets variables to closest hi dose
                if ((mgKg - med.capsuleSizes[i] / kg) <= 0 && (mgKg - med.capsuleSizes[i] / kg) >= hi) {
                    hi = mgKg - med.capsuleSizes[i] / kg;
                    mgKgHi = med.capsuleSizes[i] / kg;
                    capHi = med.capsuleSizes[i];
                    numHi = 1;
                }
                //checks the mg/kg of all whole capsules - sets variables to closest low dose
                if ((mgKg - med.capsuleSizes[i] / kg) >= 0 && (mgKg - med.capsuleSizes[i] / kg) <= low) {
                    low = mgKg - med.capsuleSizes[i] / kg;
                    mgKgLow = med.capsuleSizes[i] / kg;
                    capLow = med.capsuleSizes[i];
                    numLow = 1;
                }
            }
            if(capLow !== 0){
                let goodDoseLow = {
                    medication: medication,
                    patient: patient,
                    capSize: capLow,
                    numCaps: numLow,
                    mgkg: mgKgLow
                }
                returnedDose.push(goodDoseLow)
            }
            let goodDoseHi = {
                medication: medication,
                patient: patient,
                capSize: capHi,
                numCaps: numHi,
                mgkg: mgKgHi
            }
            returnedDose.push(goodDoseHi)
        }
    }
    return returnedDose;
}

module.exports = calcCapsule;