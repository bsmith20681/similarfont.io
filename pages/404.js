import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Custom404() {
  const router = useRouter();

  switch (router.asPath || location.pathname) {
    case "/futura/google-font-alternative-to-Futura":
      router.push("/3-google-fonts-similar-to-futura");
      break;

    case "/avenir/google-font-alternative-to-Avenir":
      router.push("/2-google-fonts-similar-to-avenir");
      break;

    case "/gotham/google-font-alternative-to-Gotham":
      router.push("/3-google-fonts-similar-to-gotham");
      break;

    case "/proxima%20nova/google-font-alternative-to-Proxima%20Nova":
      router.push("/4-google-fonts-similar-to-proxima-nova");
      break;

    case "/neue%20helvetica/google-font-alternative-to-Neue%20Helvetica":
      router.push("/3-google-fonts-similar-to-neue-helvetica");
      break;

    case "/gill%20sans/google-font-alternative-to-Gill%20Sans":
      router.push("/2-google-fonts-similar-to-gill-sans");
      break;

    case "/century%20gothic/google-font-alternative-to-Century%20Gothic":
      router.push("/3-google-font-similar-to-century-gothic");
      break;

    case "/bebas%20neue/google-font-alternative-to-Bebas%20Neue":
      router.push("/1-google-font-similar-to-bebas-neue");
      break;

    case "/calibri/google-font-alternative-to-Calibri":
      router.push("/2-google-fonts-similar-to-calibri");
      break;

    case "/helvetica/google-font-alternative-to-Helvetica":
      router.push("/1-google-font-similar-to-helvetica");
      break;

    case "/museo%20sans/google-font-alternative-to-Museo%20Sans":
      router.push("/3-google-fonts-similar-to-museo-sans");
      break;

    case "/museo%20slab/google-font-alternative-to-Museo%20Slab":
      router.push("/2-google-fonts-similar-to-museo-slab");
      break;

    case "/benton%20sans/google-font-alternative-to-Benton%20Sans":
      router.push("/3-google-fonts-similar-to-benton-sans");
      break;

    case "/avenir%20next/google-font-alternative-to-Avenir%20Next":
      router.push("/3-google-fonts-similar-to-avenir-next");
      break;

    case "/trade%20gothic/google-font-alternative-to-Trade%20Gothic":
      router.push("/1-google-font-similar-to-trade-gothic");
      break;

    case "/myraid%20pro/google-font-alternative-to-Myraid%20Pro":
      router.push("/2-google-fonts-similar-to-myraid-pro");
      break;

    case "/din/google-font-alternative-to-DIN":
      router.push("/3-google-fonts-similar-to-din");
      break;

    case "/segoe%20ui/google-font-alternative-to-Segoe%20UI":
      router.push("/2-google-fonts-similar-to-segoe-ui");
      break;

    case "/gilroy/google-font-alternative-to-Gilroy":
      router.push("/2-google-fonts-similar-to-gilroy");
      break;

    case "/verdana/google-font-alternative-to-Verdana":
      router.push("/2-google-fonts-similar-to-verdana");
      break;

    case "/arial/google-font-alternative-to-Arial":
      router.push("/2-google-fonts-similar-to-arial");
      break;

    case "/sofia%20pro/google-font-alternative-to-Sofia%20Pro":
      router.push("/2-google-fonts-similar-to-sofia-pro");
      break;

    case "/brandon%20grotesque/google-font-alternative-to-Brandon%20Grotesque":
      router.push("/2-google-fonts-similar-to-brandon-grotesque");
      break;

    case "/circular/google-font-alternative-to-Circular":
      router.push("/2-google-fonts-similar-to-circular");
      break;

    case "/maison%20neue/google-font-alternative-to-Maison%20Neue":
      router.push("/2-google-fonts-similar-to-maison-neue");
      break;

    case "/trajan/google-font-alternative-to-Trajan":
      router.push("/2-google-fonts-similar-to-trajan");
      break;

    case "/bondoni/google-font-alternative-to-Bondoni":
      router.push("/3-google-fonts-similar-to-bodoni");
      break;

    case "/cerebri%20sans/google-font-alternative-to-Cerebri%20Sans":
      router.push("/2-google-fonts-similar-to-cerebri-sans");
      break;

    case "/impact/google-font-alternative-to-Impact":
      router.push("/2-google-fonts-similar-to-impact");
      break;

    case "/franklin%20gothic/google-font-alternative-to-Franklin%20Gothic":
      router.push("/2-google-fonts-similar-to-franklin-gothic");
      break;

    case "/aktiv%20grotesk/google-font-alternative-to-Aktiv%20Grotesk":
      router.push("/2-google-fonts-similar-to-aktiv-grotesk");
      break;

    case "/itc%20avant%20garde%20gothic/google-font-alternative-to-ITC%20Avant%20Garde%20Gothic":
      router.push("/2-google-fonts-similar-to-itc-avant-garde-gothic");
      break;

    case "/lucida%20grande/google-font-alternative-to-Lucida%20Grande":
      router.push("/2-google-fonts-similar-to-lucida-grande");
      break;

    case "/minion%20pro/google-font-alternative-to-Minion%20Pro":
      router.push("/2-google-fonts-similar-to-minion-pro");
      break;

    case "/acumin%20pro/google-font-alternative-to-Acumin%20Pro":
      router.push("/2-google-fonts-similar-to-acumin-pro");
      break;

    case "/campton/google-font-alternative-to-Campton":
      router.push("/2-google-fonts-similar-to-campton");
      break;

    case "/interstate/google-font-alternative-to-Interstate":
      router.push("/1-google-font-similar-to-interstate");
      break;

    case "/effra/google-font-alternative-to-Effra":
      router.push("/2-google-fonts-similar-to-effra");
      break;

    case "/georgia/google-font-alternative-to-Georgia":
      router.push("/1-google-font-similar-to-georgia");
      break;

    case "/droid%20serif%20pro/google-font-alternative-to-Droid%20Serif%20Pro":
      router.push("/1-google-font-similar-to-georgia");
      break;

    case "/optima/google-font-alternative-to-Optima":
      router.push("/1-google-font-similar-to-optima");
      break;

    case "/tt%20norms%20pro/google-font-alternative-to-TT%20Norms%20Pro":
      router.push("/1-google-font-similar-to-optima");
      break;
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>We are updating our links currently</h1>
        <a href="/" style={{ textDecoration: "underline" }}>
          Click Here to go to homepage and search for a font
        </a>
      </div>
    </Layout>
  );
}
