# Setup Guide for Marketstore

## Complete Setup Guide
Follow the instructions below to set up the Marketstore application.

## Database Schema
1. **Users Table**: Store user information including authentication details.
2. **Products Table**: Contains details about products, including pricing and descriptions.
3. **Orders Table**: Used to manage user orders and transaction records.

## Configuration Instructions for Supabase
1. Create a new project in Supabase.
2. Configure your database according to the schema outlined above.
3. Set up authentication settings in the Supabase dashboard.
4. Copy the API keys to your environment configuration.

## Currency Support
- The application supports multiple currencies, including USD, EUR, and BTC.
- Currency conversion is handled through the selected payment gateway.

## File Structure
```
marketstore/
|-- src/
|   |-- components/
|   |-- pages/
|   |-- services/
|-- public/
|-- .env
|-- package.json
```

## Authentication Features
- Users can sign up using email and password.
- Social login options are available with OAuth providers.

## Marketplace Functionality
- Users can browse, purchase, and sell products.
- Seller profiles and product ratings are part of the marketplace experience.

## WhatsApp Integration
- Notifications and order updates are sent via WhatsApp.
- Users can contact sellers directly through WhatsApp.

## Personalization Options
- Users can customize their profiles and preferences.
- Recommended products based on browsing history.

## Troubleshooting Guide
- If you encounter issues, check the console for errors.
- Ensure all environment variables are set correctly in your .env file.

## Support Information
- For support, reach out to support@marketstore.com.
- Our support team is available 24/7.

## License Information
- The project is licensed under the MIT License.

## Contribution Guidelines
- Contributions are welcome through Pull Requests.
- Please check our contributing.md for more details on how to contribute.

## Next Steps
- Once set up, explore the app functionality and provide feedback!