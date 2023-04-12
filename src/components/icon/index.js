import { Image, Text } from "react-native";
import React from "react";

//  COMO USAR:
//  <Icon name="home"          mode="dark"  pressed={true} size={36} />
//  <Icon name="explore"       mode="light" pressed={false} />
//  <Icon name="library"       mode="dark"  size={24} />
//  <Icon name="library-heart" mode="light"/>

export function Icon({ name, mode, pressed, size }) {
    if (mode !== "dark" && mode !== "light") return <Text>-[-ERRO | Modo inválido (dark ou light) -]-</Text>
    if (!name) return <Text>-[-ERRO | Nome não informado -]-</Text>
    if(pressed !== "") {
        if (pressed !== false && pressed !== true) return <Text>-[-ERRO | Valor "pressed" inválido (true ou false) -]-</Text>
    }

    let typePressed = ""
    if(pressed !== "") {
        if(pressed === false) typePressed = "noPrass"
        if(pressed === true) typePressed = "yesPrass"
    }

    let fileName = `../../imgs/icons/${mode}/${name}_${typePressed}.png`
    console.log(fileName)
    //var iconSRC = fileName

    var iconSRC = require("../../imgs/icons/dark/play.png")
    //console.log(iconSRC)
    //let iconSRC = require(`../../imgs/icons/${mode}/${name}_${typePressed}.png`)

    let sizeIcon = size || 30

    return (
        <Image source={iconSRC} style={{
            height: sizeIcon,
            width: sizeIcon,
        }} />
    )
}

