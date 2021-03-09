import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import "../styles/grid.css";
import "../styles/LinkBox.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/searchBar.css";
import "../styles/home-page.css";
import "../styles/message.css";
import "../styles/button.css";
import "../styles/post.css";
import "../styles/authorBox.css";
import "../styles/bootstrap-reboot.scss";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default App;
