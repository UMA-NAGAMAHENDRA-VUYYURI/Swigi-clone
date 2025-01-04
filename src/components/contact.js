<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swigi Clone - Contact Us</title>
    <style>
        /* General Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }

        /* Contact Us Section Styles */
        #contact-us {
            background-color: #fff;
            padding: 50px 0;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }

        #contact-us h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #333;
        }

        #contact-us p {
            font-size: 1.2em;
            margin-bottom: 30px;
            color: #555;
        }

        /* Form Styles */
        #contact-form {
            max-width: 600px;
            margin: 0 auto;
        }

        .input-group {
            margin-bottom: 20px;
            text-align: left;
        }

        .input-group label {
            font-size: 1em;
            margin-bottom: 5px;
            display: block;
            color: #333;
        }

        .input-group input,
        .input-group textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1em;
        }

        .input-group textarea {
            resize: vertical;
            min-height: 150px;
        }

        /* Submit Button Styles */
        #submit-btn {
            background-color: #FF6F61; /* Swiggy-like color */
            color: #fff;
            padding: 15px 25px;
            border: none;
            border-radius: 5px;
            font-size: 1.2em;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        #submit-btn:hover {
            background-color: #E65C52;
        }

        /* Error Message Styles */
        .error {
            color: red;
            font-size: 0.9em;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            #contact-us {
                padding: 30px 0;
            }

            #contact-form {
                width: 90%;
            }
        }
    </style>
</head>
<body>
    <!-- Contact Us Section -->
    <section id="contact-us">
        <div class="container">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us!</p>
            
            <form id="contact-form">
                <div class="input-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required>
                    <span class="error" id="name-error"></span>
                </div>
                <div class="input-group">
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                    <span class="error" id="email-error"></span>
                </div>
                <div class="input-group">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" placeholder="Write your message" required></textarea>
                    <span class="error" id="message-error"></span>
                </div>
                <button type="submit" id="submit-btn">Submit</button>
            </form>
        </div>
    </section>

    <script>
        // JavaScript to validate the form
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission to validate

            // Reset error messages
            document.getElementById('name-error').textContent = '';
            document.getElementById('email-error').textContent = '';
            document.getElementById('message-error').textContent = '';

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            let formValid = true;

            // Name validation
            if (name.trim() === '') {
                formValid = false;
                document.getElementById('name-error').textContent = 'Name is required.';
            }

            // Email validation
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                formValid = false;
                document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            }

            // Message validation
            if (message.trim() === '') {
                formValid = false;
                document.getElementById('message-error').textContent = 'Message cannot be empty.';
            }

            // If form is valid, you can submit or send data
            if (formValid) {
                alert('Form submitted successfully!');
                // You can handle form submission here, like sending data to the server
                // Example: using fetch or XMLHttpRequest to send data to server
                // document.getElementById('contact-form').submit(); // Uncomment if you want to submit the form
            }
        });
    </script>
</body>
</html>








