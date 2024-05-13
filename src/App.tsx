import "../src/styles/style.css";
import "../src/styles/columns.css";
import Home from './pages/Home';

function App() {

  return <Home/>;
}

export default App;

// <Typography fontstyle={TypographyStyle(ElementType.H1)} />

/*

<>
    {
      (width > 768)
        ?
        <>
          <Typography fontstyle={TypographyStyle(ElementType.H1, "Текст", Color.text)} devicetype={DeviceType.PC} />
          <Typography fontstyle={TypographyStyle(ElementType.H2, "Текст", Color.text)} devicetype={DeviceType.PC} />
          <Typography fontstyle={TypographyStyle(ElementType.H3, "Текст", Color.text)} devicetype={DeviceType.PC} />
          <Typography fontstyle={TypographyStyle(ElementType.P1, "Текст", Color.text)} devicetype={DeviceType.PC} />
          <Typography fontstyle={TypographyStyle(ElementType.P2, "Текст", Color.text)} devicetype={DeviceType.PC} />
          <Typography fontstyle={TypographyStyle(ElementType.P3, "Текст", Color.text)} devicetype={DeviceType.PC} />
          <Typography fontstyle={TypographyStyle(ElementType.H4, "Текст", Color.text)} devicetype={DeviceType.PC} />
          <Typography fontstyle={TypographyStyle(ElementType.BUTTON, "Текст", Color.text)} devicetype={DeviceType.PC} />
          <Typography fontstyle={TypographyStyle(ElementType.MENU, "Текст", Color.text)} devicetype={DeviceType.PC} />
        </>
        :
        (width > 450)
          ?
          <>
            <Typography fontstyle={TypographyStyle(ElementType.H1, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
            <Typography fontstyle={TypographyStyle(ElementType.H2, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
            <Typography fontstyle={TypographyStyle(ElementType.H3, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
            <Typography fontstyle={TypographyStyle(ElementType.P1, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
            <Typography fontstyle={TypographyStyle(ElementType.P2, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
            <Typography fontstyle={TypographyStyle(ElementType.P3, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
            <Typography fontstyle={TypographyStyle(ElementType.H4, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
            <Typography fontstyle={TypographyStyle(ElementType.BUTTON, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
            <Typography fontstyle={TypographyStyle(ElementType.MENU, "Текст", Color.text)} devicetype={DeviceType.TABLET} />
          </>
          :
          <>
            <Typography fontstyle={TypographyStyle(ElementType.H1, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
            <Typography fontstyle={TypographyStyle(ElementType.H2, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
            <Typography fontstyle={TypographyStyle(ElementType.H3, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
            <Typography fontstyle={TypographyStyle(ElementType.P1, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
            <Typography fontstyle={TypographyStyle(ElementType.P2, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
            <Typography fontstyle={TypographyStyle(ElementType.P3, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
            <Typography fontstyle={TypographyStyle(ElementType.H4, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
            <Typography fontstyle={TypographyStyle(ElementType.BUTTON, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
            <Typography fontstyle={TypographyStyle(ElementType.MENU, "Текст", Color.text)} devicetype={DeviceType.MOBILE} />
          </>
    }
  </>

*/