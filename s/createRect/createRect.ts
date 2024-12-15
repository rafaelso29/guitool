import GUI from "babylonjs-gui"
const { Rectangle } = GUI
import { ADTextureOrParentUI } from "../types.js"

export function createRect(_childUI: any[], _defWidthInNum: number, _defHeightInNum: number, 
    _ADTexture: ADTextureOrParentUI, _cornerRadius: number, _background: string) {
        
    const rect = new Rectangle("rectangle")

    let width = _defWidthInNum ? _defWidthInNum : .8
    let height = _defHeightInNum ? _defHeightInNum : .5
    let defBackgroundC = "#27282a";

    if (_childUI) {
        if (_childUI.length) {
            _childUI.forEach(chld => rect.addControl(chld))
        } else {
            rect.addControl(_childUI)
        }
    }

    rect.width = width
    rect.height = height
    rect.background = _background ? _background : defBackgroundC
    rect.cornerRadius = _cornerRadius ? _cornerRadius : 3

    if (_ADTexture) _ADTexture.addControl(rect)

    return rect
}