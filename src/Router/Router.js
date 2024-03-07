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
import EditProfile from "../Components/Pages/EditProfile";
import OTP from "../Components/DoItYourSelf/OTP";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/eventbook" element={<EventBook />} />
      <Route path="/listyourshow" element={<ListYourShow />} />
      <Route path="/doitsignup" element={<SignUp />} />
      <Route path="/doitsignin" element={<Signin />} />
      <Route path="/doitotp" element={<OTP />} />
      <Route path="/doitsignin/forgotpass" element={<ForgotPassword />} />

      <Route path="/offers" element={<Offers />} />
      <Route path="/offerinnerpage" element={<OfferInnerPage />} />
      <Route path="/giftcard" element={<GiftCards />} />
      <Route path="/giftcardinnerpage" element={<GiftCardInnerPage />} />
      <Route path="/bookingsteps" element={<BookingSteps />} />
      <Route path="/editprofile" element={<EditProfile />} />
    </Routes>
  );
}

export default Router;
