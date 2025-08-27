"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrade = exports.numToGrade = void 0;
var Score;
(function (Score) {
    Score[Score["F"] = 0] = "F";
    Score[Score["D"] = 1] = "D";
    Score[Score["D+"] = 2] = "D+";
    Score[Score["C"] = 3] = "C";
    Score[Score["C+"] = 4] = "C+";
    Score[Score["B"] = 5] = "B";
    Score[Score["B+"] = 6] = "B+";
    Score[Score["A"] = 7] = "A";
    Score[Score["A+"] = 8] = "A+";
})(Score || (Score = {}));
const scoreToDescription = (score) => {
    switch (score) {
        case Score.A, Score["A+"]: return "Air quality is satisfactory, and air pollution poses little or no risk.";
        case Score.B, Score["B+"]: return "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.";
        case Score.C, Score["C+"]: return "Members of sensitive groups may experience health effects. The general public is less likely to be affected.";
        case Score.D, Score["D+"]: return "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.";
        case Score.F: return "Health alert: The risk of health effects is increased for everyone.";
    }
    return "Air quality is satisfactory, and air pollution poses little or no risk.";
};
const numToGrade = (score) => {
    score = Math.round(score);
    return {
        score: score,
        description: scoreToDescription(score)
    };
};
exports.numToGrade = numToGrade;
const getGrade = (aqi) => {
    if (aqi < 37.5)
        return Score["A+"];
    else if (aqi < 75)
        return Score["A"];
    else if (aqi < 112.5)
        return Score["B+"];
    else if (aqi < 150)
        return Score["B"];
    else if (aqi < 187.5)
        return Score["C+"];
    else if (aqi < 225)
        return Score["C"];
    else if (aqi < 262.5)
        return Score["D+"];
    else if (aqi < 300)
        return Score["D"];
    else
        return Score["F"];
};
exports.getGrade = getGrade;
