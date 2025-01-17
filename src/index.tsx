import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18+
import "./index.css";
import { HomePage } from "./components/nuStartz/HomePage";
import { WhoWeAre } from "./components/whoWeAre/WhoWeAre";
import { TestimonialsSection } from "./components/testimonials/TestimonialSection";
import { ImageGallery } from "./components/imageGallery/ImageGallery";
import { Gallery } from "./components/gallery/Gallery";
import { DeliveryProcess } from "./components/delivery/DeliveryProcess";
import { Footer } from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HomePage />
    <DeliveryProcess />
    <WhoWeAre />
    <TestimonialsSection />
    <ImageGallery />
    <Gallery />
    <Footer />
  </React.StrictMode>
);
