export enum Color {
    header = 'headerColor',
    text = 'textColor',
    background = 'backgroundColor',
    second = 'secondColor',
    additional = 'additional'
}

export enum DeviceType {
    PC = "PC",
    TABLET = "Tablet",
    MOBILE = "Mobile",
}

export interface Size {
    mobile: number;
    desktop: number;
}

export enum FontStyle {
    regular = "regular",
    semibold = "SemiBold",
    medium = "Medium"
}

export enum Font {
    Raleway = 'Raleway',
    New_YorkerC = 'New-YorkerC'
}

export enum Weight {
    smallmedium = "smallMediumWeight",
    medium = "middleWeight"
}

export enum ElementType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    P1 = 'p1',
    P2 = 'p2',
    P3 = 'p3',
    BUTTON = 'button',
    MENU = 'menu'
}

interface TypographyInterface {
    element: ElementType;
    font: Font;
    font_style: FontStyle;
    size: Size;
    weight: Weight;
    color: Color;
}

export class TypographyClass implements TypographyInterface {
    element: ElementType;
    font: Font;
    font_style: FontStyle;
    size: Size;
    weight: Weight;
    content: string;
    color: Color;

    constructor(element: ElementType, font: Font, fontStyle: FontStyle, size: Size, content: string, color: Color, weight: Weight) {
        this.element = element;
        this.font = font;
        this.font_style = fontStyle;
        this.size = size;
        this.weight = weight;
        this.content = content;
        this.color = color;
    }
}

export function TypographyStyle(elementType: ElementType, content: string, color: Color): TypographyClass {
    switch (elementType) {
        case ElementType.H1:
            return new TypographyClass(ElementType.H1, Font.New_YorkerC, FontStyle.regular, { mobile: 48, desktop: 84 }, content, color, Weight.medium)
        case ElementType.H2:
            return new TypographyClass(ElementType.H2, Font.New_YorkerC, FontStyle.regular, { mobile: 26, desktop: 48 }, content, color, Weight.medium)
        case ElementType.H3:
            return new TypographyClass(ElementType.H3, Font.Raleway, FontStyle.semibold, { mobile: 15, desktop: 20 }, content, color, Weight.medium)
        case ElementType.H4:
            return new TypographyClass(ElementType.H4, Font.Raleway, FontStyle.regular, { mobile: 84, desktop: 20 }, content, color, Weight.medium)
        case ElementType.P1:
            return new TypographyClass(ElementType.P1, Font.Raleway, FontStyle.regular, { mobile: 16, desktop: 16 }, content, color, Weight.medium)
        case ElementType.P2:
            return new TypographyClass(ElementType.P2, Font.Raleway, FontStyle.regular, { mobile: 13, desktop: 14 }, content, color, Weight.medium)
        case ElementType.P3:
            return new TypographyClass(ElementType.P3, Font.Raleway, FontStyle.regular, { mobile: 10, desktop: 10 }, content, color, Weight.medium)
        case ElementType.BUTTON:
            return new TypographyClass(ElementType.BUTTON, Font.Raleway, FontStyle.regular, { mobile: 15, desktop: 15 }, content, color, Weight.medium)
        case ElementType.MENU:
            return new TypographyClass(ElementType.MENU, Font.Raleway, FontStyle.regular, { mobile: 13, desktop: 13 }, content, color, Weight.medium)
        default:
            return new TypographyClass(ElementType.P1, Font.Raleway, FontStyle.regular, { mobile: 16, desktop: 16 }, content, color, Weight.medium)
    }
}

/*

*/