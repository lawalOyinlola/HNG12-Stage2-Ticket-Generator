/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";

function TicketReceipt({ setStep, formData }) {
  const { reset } = useForm();

  const handleCancel = () => {
    reset();
    localStorage.removeItem("ticketType");
    localStorage.removeItem("quantity");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("request");
    localStorage.removeItem("imageUrl");
    setStep(1);
  };

  return (
    <main className="main-body">
      <div>
        <div className="headings">
          <h1>Ready</h1>
          <p aria-live="polite">Step 3/3</p>
        </div>
        <progress className="custom-progress" value="100" max="100"></progress>
      </div>

      <div>
        <div className="headings booked">
          <h1>Your Ticket is Booked!</h1>
          <p aria-live="polite">
            Check your email for a copy or you can download
          </p>
        </div>
      </div>

      <section className="container booked">
        <div className="ticket">
          <div className="ticket-details">
            <div className="event-info">
              <h2>Techember Fest ”25</h2>
              <p className="event-time">
                📍 Freetown, Sierra Leone
                <time dateTime="2025-03-15T19:00">
                  March 15, 2025 | 7:00 PM
                </time>
              </p>
            </div>
            <div
              className="user-img"
              role="img"
              aria-label={`Profile picture of ${formData.fullName}`}
              style={{
                background: `url(${formData.imageUrl}) lightgray 50% / cover no-repeat`,
              }}
            ></div>
            <div className="user-details">
              <div>
                <h3 className="title">Enter your name</h3>
                <p className="value">{formData.fullName} </p>
              </div>
              <div className="no-border-right">
                <h3 className="title ">Enter your email *</h3>
                <p className="value">{formData.email} </p>
              </div>
              <div>
                <h3 className="title">Ticket Type:</h3>
                <p className="ticket-value">{formData.ticketType}</p>
              </div>
              <div className="no-border-right">
                <h3 className="title">Ticket for :</h3>
                <p className="ticket-value">{formData.quantity} </p>
              </div>
              <div className="special-request no-border-right">
                <h3 className="title">Special request?</h3>
                <p className="request-value">{formData.specialRequest} </p>
              </div>
            </div>
          </div>
          <img
            src="./Barcode.svg"
            alt={`Barcode for ${formData.ticketType} event ticket`}
          />
        </div>
      </section>
      <div className="buttons">
        <button type="button" onClick={handleCancel}>
          Book another ticket
        </button>
        <button type="button" aria-label="Download your event ticket as a PDF">
          Download Ticket
        </button>
      </div>
    </main>
  );
}

export default TicketReceipt;
