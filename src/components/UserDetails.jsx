/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UploadWidget from "./UploadWidget";

function UserDetails({ setStep, setFormData, formData }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      specialRequest: "",
      imageUrl: "",
    },
  });

  const [imageUrl, setImageUrl] = useState(
    localStorage.getItem("imageUrl") || ""
  );

  useEffect(() => {
    const storedData = {
      fullName: localStorage.getItem("fullName"),
      email: localStorage.getItem("email"),
      specialRequest: localStorage.getItem("request"),
      imageUrl: localStorage.getItem("imageUrl"),
    };

    Object.entries(storedData).forEach(([key, value]) => {
      if (value) setValue(key, value);
    });
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem("imageUrl", imageUrl);
    setValue("imageUrl", imageUrl);
  }, [imageUrl, setValue]);

  const onSubmit = (data) => {
    Object.entries(data).forEach(([key, value]) =>
      localStorage.setItem(key, value)
    );
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  return (
    <main className="main-body">
      <div>
        <div className="headings">
          <h1>Attendee Details</h1>
          <p aria-live="polite">Step 2/3</p>
        </div>
        <progress className="custom-progress" value="67" max="100"></progress>
      </div>

      <section className="container selection">
        <div className="upload-info">
          <p>Upload Profile Photo</p>

          <UploadWidget setImageUrl={setImageUrl} />
        </div>

        <hr />

        <form className="ticket-form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="label">
              Enter your name
            </label>
            <input
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 4,
                  message: "Full name must be at least 4 characters long",
                },
              })}
              type="text"
              className={errors.fullName ? "input-error" : ""}
              aria-describedby="name-error"
              placeholder="John Snow"
            />
            {errors.fullName && (
              <span id="name-error" className="error">
                ⚠️ {errors.fullName.message}
              </span>
            )}
          </div>

          <div className="email-container">
            <label htmlFor="name" className="label">
              Enter your email *
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="email-icon"
            >
              <path
                d="M20 4.00012H4C2.897 4.00012 2 4.89712 2 6.00012V18.0001C2 19.1031 2.897 20.0001 4 20.0001H20C21.103 20.0001 22 19.1031 22 18.0001V6.00012C22 4.89712 21.103 4.00012 20 4.00012ZM20 6.00012V6.51112L12 12.7341L4 6.51212V6.00012H20ZM4 18.0001V9.04412L11.386 14.7891C11.5611 14.9267 11.7773 15.0014 12 15.0014C12.2227 15.0014 12.4389 14.9267 12.614 14.7891L20 9.04412L20.002 18.0001H4Z"
                fill="white"
              />
            </svg>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="hello@avioflagos.io"
              className={errors.email ? "input-error" : ""}
              aria-describedby="email-error"
            />
            {errors.email && (
              <span id="email-error" className="error">
                ⚠️ {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="specialRequest" className="label">
              Special Request?
            </label>
            <textarea
              {...register("specialRequest")}
              id="specialRequest"
              placeholder="Make a special request"
              rows={3}
            ></textarea>
          </div>

          <div className="buttons selection">
            <button type="button" onClick={() => setStep(1)}>
              Back
            </button>
            <button type="submit">
              Get My {formData.ticketType} Ticket
              {formData.quantity > 1 && "s"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default UserDetails;
