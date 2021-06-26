const client = require("./client");

module.exports = {
  exportPathMap: async function (defaultPathMap) {
    const paths = await client
      .fetch('*[_type == "post" && defined(slug)].slug.current')
      .then((data) =>
        data.reduce(
          (acc, slug) => ({
            "/": { page: "/" },
            ...acc,
            [`/${slug}`]: { page: "/[slug]", query: { slug } },
          }),
          defaultPathMap
        )
      )
      .catch(console.error);
    return paths;
  },
  async redirects() {
    return [
      {
        source: "/futura/google-font-alternative-to-Futura",
        destination: "/3-google-fonts-similar-to-futura",
        permanent: true,
      },
      {
        source: "/avenir/google-font-alternative-to-Avenir",
        destination: "/2-google-fonts-similar-to-avenir",
        permanent: true,
      },
      {
        source: "/gotham/google-font-alternative-to-Gotham",
        destination: "/3-google-fonts-similar-to-gotham",
        permanent: true,
      },
      {
        source: "/proxima%20nova/google-font-alternative-to-Proxima%20Nova",
        destination: "/4-google-fonts-similar-to-proxima-nova",
        permanent: true,
      },
      {
        source: "/neue%20helvetica/google-font-alternative-to-Neue%20Helvetica",
        destination: "/3-google-fonts-similar-to-neue-helvetica",
        permanent: true,
      },
      {
        source: "/gill%20sans/google-font-alternative-to-Gill%20Sans",
        destination: "/2-google-fonts-similar-to-gill-sans",
        permanent: true,
      },
      {
        source: "/century%20gothic/google-font-alternative-to-Century%20Gothic",
        destination: "/3-google-font-similar-to-century-gothic",
        permanent: true,
      },
      {
        source: "/bebas%20neue/google-font-alternative-to-Bebas%20Neue",
        destination: "/1-google-font-similar-to-bebas-neue",
        permanent: true,
      },
      {
        source: "/calibri/google-font-alternative-to-Calibri",
        destination: "/2-google-fonts-similar-to-calibri",
        permanent: true,
      },
      {
        source: "/helvetica/google-font-alternative-to-Helvetica",
        destination: "/1-google-font-similar-to-helvetica",
        permanent: true,
      },
      {
        source: "/museo%20sans/google-font-alternative-to-Museo%20Sans",
        destination: "/3-google-fonts-similar-to-museo-sans",
        permanent: true,
      },
      {
        source: "/museo%20slab/google-font-alternative-to-Museo%20Slab",
        destination: "/2-google-fonts-similar-to-museo-slab",
        permanent: true,
      },
      {
        source: "/benton%20sans/google-font-alternative-to-Benton%20Sans",
        destination: "/3-google-fonts-similar-to-benton-sans",
        permanent: true,
      },
      {
        source: "/avenir%20next/google-font-alternative-to-Avenir%20Next",
        destination: "/3-google-fonts-similar-to-avenir-next",
        permanent: true,
      },
      {
        source: "/trade%20gothic/google-font-alternative-to-Trade%20Gothic",
        destination: "/1-google-font-similar-to-trade-gothic",
        permanent: true,
      },
      {
        source: "/myraid%20pro/google-font-alternative-to-Myraid%20Pro",
        destination: "/2-google-fonts-similar-to-myraid-pro",
        permanent: true,
      },
      {
        source: "/din/google-font-alternative-to-DIN",
        destination: "/3-google-fonts-similar-to-din",
        permanent: true,
      },
      {
        source: "/segoe%20ui/google-font-alternative-to-Segoe%20UI",
        destination: "/2-google-fonts-similar-to-segoe-ui",
        permanent: true,
      },
      {
        source: "/gilroy/google-font-alternative-to-Gilroy",
        destination: "/2-google-fonts-similar-to-gilroy",
        permanent: true,
      },
      {
        source: "/verdana/google-font-alternative-to-Verdana",
        destination: "/2-google-fonts-similar-to-verdana",
        permanent: true,
      },
      {
        source: "/arial/google-font-alternative-to-Arial",
        destination: "/2-google-fonts-similar-to-arial",
        permanent: true,
      },
      {
        source: "/sofia%20pro/google-font-alternative-to-Sofia%20Pro",
        destination: "/2-google-fonts-similar-to-sofia-pro",
        permanent: true,
      },
      {
        source:
          "/brandon%20grotesque/google-font-alternative-to-Brandon%20Grotesque",
        destination: "/2-google-fonts-similar-to-brandon-grotesque",
        permanent: true,
      },
      {
        source: "/circular/google-font-alternative-to-Circular",
        destination: "/2-google-fonts-similar-to-circular",
        permanent: true,
      },
      {
        source: "/maison%20neue/google-font-alternative-to-Maison%20Neue",
        destination: "/2-google-fonts-similar-to-maison-neue",
        permanent: true,
      },
      {
        source: "/trajan/google-font-alternative-to-Trajan",
        destination: "/2-google-fonts-similar-to-trajan",
        permanent: true,
      },
      {
        source: "/bondoni/google-font-alternative-to-Bondoni",
        destination: "/3-google-fonts-similar-to-bodoni",
        permanent: true,
      },
      {
        source: "/cerebri%20sans/google-font-alternative-to-Cerebri%20Sans",
        destination: "/2-google-fonts-similar-to-cerebri-sans",
        permanent: true,
      },
      {
        source: "/impact/google-font-alternative-to-Impact",
        destination: "/2-google-fonts-similar-to-impact",
        permanent: true,
      },
      {
        source:
          "/franklin%20gothic/google-font-alternative-to-Franklin%20Gothic",
        destination: "/2-google-fonts-similar-to-franklin-gothic",
        permanent: true,
      },
      {
        source: "/aktiv%20grotesk/google-font-alternative-to-Aktiv%20Grotesk",
        destination: "/2-google-fonts-similar-to-aktiv-grotesk",
        permanent: true,
      },
      {
        source:
          "/itc%20avant%20garde%20gothic/google-font-alternative-to-ITC%20Avant%20Garde%20Gothic",
        destination: "/2-google-fonts-similar-to-itc-avant-garde-gothic",
        permanent: true,
      },
      {
        source: "/lucida%20grande/google-font-alternative-to-Lucida%20Grande",
        destination: "/2-google-fonts-similar-to-lucida-grande",
        permanent: true,
      },
      {
        source: "/minion%20pro/google-font-alternative-to-Minion%20Pro",
        destination: "/2-google-fonts-similar-to-minion-pro",
        permanent: true,
      },
      {
        source: "/acumin%20pro/google-font-alternative-to-Acumin%20Pro",
        destination: "/2-google-fonts-similar-to-acumin-pro",
        permanent: true,
      },
      {
        source: "/campton/google-font-alternative-to-Campton",
        destination: "/2-google-fonts-similar-to-campton",
        permanent: true,
      },
      {
        source: "/interstate/google-font-alternative-to-Interstate",
        destination: "/1-google-font-similar-to-interstate",
        permanent: true,
      },
      {
        source: "/effra/google-font-alternative-to-Effra",
        destination: "/2-google-fonts-similar-to-effra",
        permanent: true,
      },
      {
        source: "/georgia/google-font-alternative-to-Georgia",
        destination: "/1-google-font-similar-to-georgia",
        permanent: true,
      },
      {
        source:
          "/droid%20serif%20pro/google-font-alternative-to-Droid%20Serif%20Pro",
        destination: "/1-google-font-similar-to-georgia",
        permanent: true,
      },
      {
        source: "/optima/google-font-alternative-to-Optima",
        destination: "/1-google-font-similar-to-optima",
        permanent: true,
      },
      {
        source: "/tt%20norms%20pro/google-font-alternative-to-TT%20Norms%20Pro",
        destination: "/1-google-font-similar-to-optima",
        permanent: true,
      },
    ];
  },
};
