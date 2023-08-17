# Forbidden Media Website

Welcome to Forbidden Media's first iteration Website! This web application serves as a portfolio platform for the photographer, allowing them to showcase their work, interact with clients, and manage photoshoot orders seamlessly.

## Features

- **Request a Photoshoot**: Clients can easily request a personalized photoshoot or videography session through the website. They can choose from a list of pre-approved locations that fit the subject of the shoot, powered by the Google Maps API.

- **Client Account Page**:
  - Direct Chat: Clients have access to a real-time chat feature to communicate directly with the photographer, enabled by websockets.
  - Secure Payments: Clients can make payments for their photoshoot orders through a user-friendly form powered by the Stripe API.
  - Gallery Access: Clients can view and access their previous photo and videoshoot albums, providing a comprehensive view of their photographer's work.

- **Photographer Account Page**:
  - Order Management: Photographers can view all submitted orders, adjust payment amounts, and manage the status of each photoshoot request.
  - Image Upload: Photographers can effortlessly upload images from completed photoshoots to share with their clients.

- **Location Management**: Photographers can maintain an up-to-date list of shoot locations, ensuring clients have relevant options when making a request.

- **Contact Form**: The website includes a contact form that utilizes the emailJS service to send inquiries directly to the photographer's email.

## Technologies Used

- Frontend: React
- Backend: Spring Framework
- Database: MySQL
