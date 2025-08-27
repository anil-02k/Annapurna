"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineSpendingAndRevenue = exports.determineWaterUsageAndYield = exports.sqftToAcre = exports.cleanMonth = exports.seasonToMonth = exports.monthToSeason = exports.Month = exports.SeasonToIdx = exports.Season = exports.findAlternateCrop = exports.dataForCrop = exports.data = void 0;
const earthData_json_1 = __importDefault(require("./data/earthData.json"));
exports.data = earthData_json_1.default;
const dataForCrop = (crop) => {
    return earthData_json_1.default.find(candidate => {
        return candidate.name == crop;
    });
};
exports.dataForCrop = dataForCrop;
const findAlternateCrop = (crop) => {
    return earthData_json_1.default.find(candidate => {
        return candidate.name !== crop.name && candidate.state === crop.state;
    });
};
exports.findAlternateCrop = findAlternateCrop;
var Season;
(function (Season) {
    Season["Spring"] = "Spring";
    Season["Summer"] = "Summer";
    Season["Fall"] = "Fall";
    Season["Winter"] = "Winter";
})(Season || (exports.Season = Season = {}));
const SeasonToIdx = (season) => {
    switch (season) {
        case Season.Spring: return 0;
        case Season.Summer: return 1;
        case Season.Fall: return 2;
        case Season.Winter: return 3;
    }
};
exports.SeasonToIdx = SeasonToIdx;
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (exports.Month = Month = {}));
const monthToSeason = (month) => {
    if (month >= 2 && month < 5) {
        return Season.Spring;
    }
    else if (month >= 5 && month < 8) {
        return Season.Summer;
    }
    else if (month >= 8 && month < 11) {
        return Season.Fall;
    }
    else {
        return Season.Winter;
    }
};
exports.monthToSeason = monthToSeason;
const seasonToMonth = (season) => {
    switch (season) {
        case Season.Spring:
            return Month.March;
        case Season.Summer:
            return Month.June;
        case Season.Fall:
            return Month.September;
        case Season.Winter:
            return Month.December;
    }
};
exports.seasonToMonth = seasonToMonth;
const cleanMonth = (month) => {
    // somehow normalize month to be within 0 and 11
    return (month + 12) % 12;
};
exports.cleanMonth = cleanMonth;
const sqftToAcre = (sqft) => {
    // https://www.thecalculatorsite.com/conversions/area/square-feet-to-acres.php
    return 0.000022956841138659 * sqft;
};
exports.sqftToAcre = sqftToAcre;
const determineWaterUsageAndYield = (array) => {
    const output = {
        waterUsage: [0, 0, 0, 0],
        yield: [0, 0, 0, 0],
    };
    for (const item of array) {
        const cropData = (0, exports.dataForCrop)(item.crop);
        const season = cropData.state;
        const endMonth = (0, exports.seasonToMonth)(season);
        const numOfMonths = cropData.daysToGrow / 30;
        const startMonth = (0, exports.cleanMonth)(endMonth - numOfMonths);
        console.log(`for ${item.crop}, startMonth: ${startMonth}, endMonth: ${endMonth}`);
        for (let j = 0; j <= numOfMonths; j++) {
            const month = (0, exports.cleanMonth)(startMonth + j);
            const season = (0, exports.monthToSeason)(month);
            const idx = (0, exports.SeasonToIdx)(season);
            output.waterUsage[idx] += cropData.waterUsed * 91.25;
        }
        output.yield[(0, exports.SeasonToIdx)(season)] += cropData.lbsPerAcre * item.acre;
    }
    return output;
};
exports.determineWaterUsageAndYield = determineWaterUsageAndYield;
const determineSpendingAndRevenue = (array) => {
    const output = {
        spending: [0, 0, 0, 0],
        revenue: [0, 0, 0, 0],
    };
    for (const item of array) {
        const cropData = (0, exports.dataForCrop)(item.crop);
        console.log(item.crop);
        const season = cropData.state;
        const endMonth = (0, exports.seasonToMonth)(season);
        const numOfMonths = cropData.daysToGrow / 30;
        const startMonth = (0, exports.cleanMonth)(endMonth - numOfMonths);
        for (let j = 0; j <= numOfMonths; j++) {
            const month = (0, exports.cleanMonth)(startMonth + j);
            const season = (0, exports.monthToSeason)(month);
            const idx = (0, exports.SeasonToIdx)(season);
            const cost = cropData.costPerAcre * item.acre;
            console.log(cropData.costPerAcre);
            console.log(item.acre);
            console.log(cost);
            const revenue = cropData.valuePerAcre * item.acre;
            output.spending[idx] += cost;
            output.revenue[idx] += revenue;
        }
    }
    return output;
};
exports.determineSpendingAndRevenue = determineSpendingAndRevenue;
