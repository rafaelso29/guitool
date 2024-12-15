import GUI from "babylonjs-gui"
const { AdvancedDynamicTexture, Control, Grid } = GUI
import { log } from "../logger.js"
import { ADTextureOrParentUI } from "../types.js"

export function createGrid(parentUI: ADTextureOrParentUI, rowsSizesArray: number[] | false, columnSizesArray: number[] | false) {
    const grid = new Grid("grid")

    if (rowsSizesArray) {
        if (!rowsSizesArray.length) return log("rowSizeArray must be an array of sizes ex. [.1,.2,.5]")
        rowsSizesArray.forEach(size => {
            grid.addRowDefinition(size)
        })
    }
    if (columnSizesArray) {
        if (!columnSizesArray.length) return log("columnSizesArray must be an array of sizes ex. [.1,.2,.5]")
        columnSizesArray.forEach(size => {
            grid.addColumnDefinition(size)
        })
    }
    if (parentUI) parentUI.addControl(grid) // could be a rectangle or another grid
    return grid
}