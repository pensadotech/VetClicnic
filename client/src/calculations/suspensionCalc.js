const calcSuspension = (medication, patient) => {
    let med = medication.suspension
    let kg = patient.weight / 2.2
    let returnedDose = []



    if (patient.species === "Canine") {
        let ml = med.doseCanine * kg / med.premade[0].concentration;
        let mlLow = med.doseRangeCanine[0] * kg / med.premade[0].concentration;
        let mlHi = med.doseRangeCanine[1] * kg / med.premade[0].concentration;
        if (med.premade[0].concentration !== 0) {
            if (med.doseCanine !== 0) {
                for (let i = 0; i < med.premade.length; i++) {

                    let goodDose = {
                        medication: medication,
                        patient: patient,
                        daysWillLast: med.premade[i].volume / ml / (24 / medication.hours),
                        boxSize: med.premade[i].volume,
                        mgkg: (med.premade[i].concentration / kg).toFixed(2),
                        mL: ml

                    }
                    returnedDose.push(goodDose)
                }

            }
            if (med.doseRangeCanine[0] !== 0) {
                for (let i = 0; i < med.premade.length; i++) {

                    let goodDose = {
                        medication: medication,
                        patient: patient,
                        daysWillLast: med.premade[i].volume / ml / (24 / medication.hours),
                        boxSize: med.premade[i].volume,
                        mgkg: (med.premade[i].concentration / kg).toFixed(2),
                        mL: ml,
                        low: mlLow,
                        hi: mlHi,

                    }
                    returnedDose.push(goodDose)
                }
            }
        }
    }
    if (patient.species === "Feline") {
        let ml = med.doseFeline * kg / med.premade[0].concentration;
        let mlLow = med.doseRangeFeline[0] * kg / med.premade[0].concentration;
        let mlHi = med.doseRangeFeline[1] * kg / med.premade[0].concentration;
        if (med.premade[0].concentration !== 0) {
            if (med.doseFeline !== 0) {
                for (let i = 0; i < med.premade.length; i++) {

                    let goodDose = {
                        medication: medication,
                        patient: patient,
                        daysWillLast: med.premade[i].volume / ml / (24 / medication.hours),
                        boxSize: med.premade[i].volume,
                        mgkg: (med.premade[i].concentration * ml / kg).toFixed(2),
                        mL: ml,
                        low: mlLow,
                        hi: mlHi
                    }
                    returnedDose.push(goodDose)
                }

            }
            if (med.doseRangeFeline[0] !== 0) {
                for (let i = 0; i < med.premade.length; i++) {

                    let goodDose = {
                        medication: medication,
                        patient: patient,
                        dose: {
                            daysWillLast: med.premade[i].volume / ml / (24 / medication.hours),
                            boxSize: med.premade[i].volume,
                            mgkg: (med.premade[i].concentration* ml / kg).toFixed(2),
                            mL: ml,
                            low: mlLow,
                            hi: mlHi,
                        }
                    }
                    returnedDose.push(goodDose)
                }
            }
        }
    }
        return returnedDose;
    }
module.exports = calcSuspension