# Event Ticketing App

## 🚀 Overview

This is an accessible and user-friendly event ticketing application built with **React and TypeScript**. The app allows users to select a ticket type, enter personal details, upload a profile picture using **Cloudinary**, and generate a downloadable event ticket.

## 🎯 Features

- **Step-by-Step Ticket Booking**
  - Step 1: Select Ticket Type & Quantity
  - Step 2: Enter Attendee Details & Upload Profile Photo
  - Step 3: Review & Download Ticket
- **Cloudinary Integration** for Image Uploads
- **Local Storage Persistence** for User Data
- **Form Validation** (Email format, required fields, etc.)
- **Keyboard & Screen Reader Accessibility**
- **Responsive Design** for Mobile & Desktop Users

## 🛠️ Technologies Used

- **React** with Vanilla JavaScript
- **React Hook Form** for Form Validation
- **Cloudinary** for Image Upload
- **LocalStorage** for State Persistence
- **ARIA & Semantic HTML** for Accessibility

## 📦 Installation

### Clone the Repository

```sh
git clone https://github.com/your-username/event-ticketing-app.git
cd event-ticketing-app
```

### Install Dependencies

```sh
npm install
```

### Set Up Cloudinary

1. Create a **Cloudinary** account at [cloudinary.com](https://cloudinary.com/).
2. Navigate to the **Dashboard** and find your **Cloud Name**.
3. Create an **Upload Preset** (unsigned) and name it (update the code with your preset name).

### Start the App

```sh
npm start
```

The app will be available at `http://localhost:3000/`

## ⚡ Usage

1. **Select Ticket Type** → Choose a ticket and quantity.
2. **Enter User Details** → Fill in your name, email, and special requests.
3. **Upload Profile Picture** → Click to upload or drag and drop an image.
4. **Download Your Ticket** → Receive a barcode ticket and download it as a PDF.

## 🛡️ Accessibility Features

- **Keyboard Navigation:** Users can navigate using `Tab`, `Enter`, and `Space` keys.
- **Screen Reader Support:** ARIA attributes and proper labeling ensure clear announcements.
- **High Contrast & Readable Fonts:** Ensures visibility for all users.

## 📌 To-Do

- [ ] Add QR Code for Ticket Verification
- [ ] Implement Email Ticket Delivery
- [ ] Improve Ticket Styling & PDF/PNG Export

## 🤝 Contributing

1. Fork the project.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License.
