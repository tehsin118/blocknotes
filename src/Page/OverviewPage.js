import React from "react";
import Footer from "../components/Footer/Footer";
import OverviewHead from "../components/Header/Hero/OverviewHead";
import Problems from "../components/Problems/Problems";
import Fquestions from "../components/questions/Fquestions";
import Solutions from "../components/Solutions/Solutions";
import { useEffect } from "react";

function OverviewPage() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg">
      <OverviewHead />
      <Problems />
      <Solutions />
      <Fquestions />
      <Footer />
    </div>
  );
}

export default OverviewPage;
