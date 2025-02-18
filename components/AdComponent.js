import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log("AdSense Error: ", err);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXX" // Apna AdSense Client ID lagao
        data-ad-slot="XXXXXXXXX" // Apna Ad Slot ID lagao
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdComponent;
