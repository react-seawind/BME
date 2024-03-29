import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Event from "../Components/Pages/Events";
import EventBook from "../Components/Pages/EventBook";
import ListYourShow from "../Components/Pages/ListYourShow";
import SignUp from "../Components/DoItYourSelf/Signup";
import Signin from "../Components/DoItYourSelf/Signin";
import ForgotPassword from "../Components/DoItYourSelf/ForgotPassword";
import Offers from "../Components/Pages/Offers";
import OfferInnerPage from "../Components/Pages/OfferInnerPage";
import GiftCards from "../Components/Pages/GiftCards";
import GiftCardInnerPage from "../Components/Pages/GiftCardInnerPage";
import BookingSteps from "../Components/Pages/BookingSteps";
import OTP from "../Components/DoItYourSelf/OTP";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import FAQ from "../Components/Pages/FAQ";
import Kyc1 from "../Components/Pages/Kyc1";
import Kyc2 from "../Components/Pages/Kyc2";
import Kyc3 from "../Components/Pages/Kyc3";
import Artistdetail from "../Components/Pages/Artistdetail";
import Artist from "../Components/Pages/Artist";
import Bookingview from "../Components/Pages/Bookingview";
import Ticket from "../Components/Pages/Ticket";
import Profile from "../Components/Pages/Profile";
import Stream from "../Components/Pages/Stream";
import YourBooking from "../Components/Pages/YourBooking";
import YourListing from "../Components/Pages/YourListing";
import ListShow from "../Components/Pages/ListShow";
import Kyc from "../Components/Pages/Kyc";

const Router = () => {
  return (
    <Routes>
      <Route path="/BME" element={<Home />} />
      <Route path="/BME/event" element={<Event />} />
      <Route path="/BME/eventbook" element={<EventBook />} />
      <Route path="/BME/listyourshow" element={<ListYourShow />} />
      <Route path="/BME/doitsignup" element={<SignUp />} />
      <Route path="/BME/doitsignin" element={<Signin />} />
      <Route path="/BME/doitotp" element={<OTP />} />
      <Route path="/BME/doitsignin/forgotpass" element={<ForgotPassword />} />

      <Route path="/BME/offers" element={<Offers />} />
      <Route path="/BME/offerinnerpage" element={<OfferInnerPage />} />
      <Route path="/BME/giftcard" element={<GiftCards />} />
      <Route path="/BME/giftcardinnerpage" element={<GiftCardInnerPage />} />
      <Route path="/BME/bookingsteps" element={<BookingSteps />} />

      <Route path="/BME/about" element={<About />} />
      <Route path="/BME/contact" element={<Contact />} />
      <Route path="/BME/faq" element={<FAQ />} />

      <Route path="/BME/kyc-1" element={<Kyc1 />} />
      <Route path="/BME/kyc-2" element={<Kyc2 />} />
      <Route path="/BME/kyc-3" element={<Kyc3 />} />

      <Route path="/BME/artistdetail" element={<Artistdetail />} />
      <Route path="/BME/artist" element={<Artist />} />

      <Route path="/BME/bookingview" element={<Bookingview />} />

      <Route path="/BME/ticket" element={<Ticket />} />

      <Route path="/BME/profile" element={<Profile />} />
      <Route path="/BME/stream" element={<Stream />} />
      <Route path="/BME/your-booking" element={<YourBooking />} />
      <Route path="/BME/your-listing" element={<YourListing />} />
      <Route path="/BME/list-show" element={<ListShow />} />
      <Route path="/BME/kyc" element={<Kyc />} />
    </Routes>
  );
};

export default Router;
