/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function TicketSelection({ setStep, setFormData }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      ticketType: "regular",
      quantity: "1",
    },
  });

  useEffect(() => {
    const storedTicket = localStorage.getItem("ticketType");
    const storedQuantity = localStorage.getItem("quantity");
    if (storedTicket) setValue("ticketType", storedTicket);
    if (storedQuantity) setValue("quantity", storedQuantity);
  }, [setValue]);

  const onSubmit = (data) => {
    localStorage.setItem("ticketType", data.ticketType);
    localStorage.setItem("quantity", data.quantity);
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleCancel = () => {
    localStorage.removeItem("ticketType");
    localStorage.removeItem("quantity");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("request");
    localStorage.removeItem("imageUrl");
    reset();
  };

  return (
    <main className="main-body">
      <div>
        <div className="headings">
          <h1>Ticket Selection</h1>
          <p aria-live="polite">Step 1/3</p>
        </div>
        <progress className="custom-progress" value="34" max="100"></progress>
      </div>

      <section className="container selection">
        <div className="ticket-info">
          <h2>Techember Fest ”25</h2>
          <p>
            Join us for an unforgettable experience at Techember Fest! Secure
            your spot now.
          </p>
          <p className="venue">
            <span role="img" aria-label="Location">
              📍
            </span>
            &nbsp; Freetown, SierraLeone
            <span className="divider">| |</span>
            <time dateTime="2025-03-15T19:00">
              &nbsp;March 15, 2025 | 7:00 PM
            </time>
          </p>
        </div>

        <hr />

        <form
          className="ticket-form"
          onSubmit={handleSubmit(onSubmit)}
          aria-labelledby="ticket-title"
        >
          <fieldset aria-labelledby="ticket-type-label">
            <legend id="ticket-type-label" className="label">
              Select Ticket Type:
            </legend>
            <div className="ticket-options">
              <label
                htmlFor="regular"
                className="ticket-card"
                aria-describedby="ticket-type-error"
              >
                <input
                  type="radio"
                  value="regular"
                  {...register("ticketType", {
                    required: "Please select a ticket type",
                  })}
                />
                <span className="ticket-price">Free</span>
                <p className="ticket-type">
                  REGULAR ACCESS
                  <span className="ticket-availability">20/52</span>
                </p>
              </label>

              <label
                htmlFor="vip"
                className="ticket-card"
                aria-describedby="ticket-type-error"
              >
                <input
                  type="radio"
                  value="VIP"
                  {...register("ticketType", {
                    required: "Please select a ticket type",
                  })}
                />
                <span className="ticket-price">$150</span>
                <p className="ticket-type">
                  VIP ACCESS <span className="ticket-availability">7/30</span>
                </p>
              </label>

              <label
                htmlFor="vvip"
                className="ticket-card"
                aria-describedby="ticket-type-error"
              >
                <input
                  type="radio"
                  value="VVIP"
                  {...register("ticketType", {
                    required: "Please select a ticket type",
                  })}
                />
                <span className="ticket-price">$350</span>
                <p className="ticket-type">
                  VVIP ACCESS <span className="ticket-availability">9/11</span>
                </p>
              </label>
            </div>
            {errors.ticketType && (
              <div className="error" id="ticket-type-error" role="alert">
                {errors.ticketType.message}
              </div>
            )}
            <div>{}</div>
          </fieldset>

          <div>
            <label htmlFor="quantity" className="label">
              Number of Tickets
            </label>
            <select
              id="quantity"
              {...register("quantity", {
                required: "Select a quantity",
              })}
              aria-describedby="quantity-error"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.quantity && (
              <div className="error" id="quantity-error" role="alert">
                {errors.quantity.message}
              </div>
            )}
          </div>

          <div className="buttons selection">
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Next"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default TicketSelection;
