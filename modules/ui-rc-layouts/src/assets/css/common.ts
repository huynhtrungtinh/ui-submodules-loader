import { hexToRgb } from '@material-ui/core';
import { infoColor, whiteColor, blackColor } from './material-dashboard-react';

function getBlueTheme() {
    return {
        color: whiteColor,
        backgroundColor: infoColor[0],
        boxShadow:
            "0 12px 20px -10px rgba(" +
            hexToRgb(infoColor[0]) +
            ",.28), 0 4px 20px 0 rgba(" +
            hexToRgb(blackColor) +
            ",.12), 0 7px 8px -5px rgba(" +
            hexToRgb(infoColor[0]) +
            ",.2)",
        "&:hover,&:focus": {
            // backgroundColor: infoColor[2],
            boxShadow:
                "0 12px 20px -10px rgba(" +
                hexToRgb(infoColor[0]) +
                ",.28), 0 4px 20px 0 rgba(" +
                hexToRgb(blackColor) +
                ",.12), 0 7px 8px -5px rgba(" +
                hexToRgb(infoColor[0]) +
                ",.2)"
        }
    }
}
function getATagStyle() {
    return {
        "&:hover,&:focus": {
            color: whiteColor
        }
    }
}

export { getBlueTheme, getATagStyle }