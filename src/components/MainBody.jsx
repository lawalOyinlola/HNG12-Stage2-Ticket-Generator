/* eslint-disable react/prop-types */
import { useState } from "react";
import TicketSelection from "./TicketSelection";
import UserDetails from "./UserDetails";
import TicketReceipt from "./TicketReceipt";

function MainBody() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <>
      {step === 1 && (
        <TicketSelection setStep={setStep} setFormData={setFormData} />
      )}
      {step === 2 && (
        <UserDetails
          setStep={setStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <TicketReceipt
          setStep={setStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
    </>
  );
}

export default MainBody;
