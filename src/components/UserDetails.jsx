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
      fullName: localStorage.getItem("fullName") || "",
      email: localStorage.getItem("email") || "",
      specialRequest: localStorage.getItem("request") || "",
      imageUrl: localStorage.getItem("imageUrl") || "",
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
              {...register("fullName", { required: "Full name is required" })}
              type="text"
              aria-describedby="name-error"
            />
            {errors.fullName && (
              <div id="name-error" className="error">
                {errors.fullName.message}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="name" className="label">
              Enter your email *
            </label>
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
              aria-describedby="email-error"
            />
            {errors.email && (
              <div id="email-error" className="error">
                {errors.email.message}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="specialRequest" className="label">
              Special Request?
            </label>
            <textarea
              {...register("specialRequest")}
              id="specialRequest"
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
