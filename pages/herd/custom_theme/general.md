---
 title: Core Features of the Herd Theme
---
## 1. Vehicle Selector System

A comprehensive vehicle selection system that allows users to:
- Select their vehicle by year, make, model, and style
- Save multiple vehicles to their profile
- Set an active vehicle
- Filter products compatible with their selected vehicle

**Key Files:**
- `Inc/shortcodes/fits_my_vehicle.php`: Shortcodes for the vehicle selector interface
- `src/js/fits-my-vehicle.js`: Frontend functionality for the vehicle selector
- `src/css/vehicle-selector-styles.css`: Styling for the vehicle selector

## 2. Makes & Models Filter

A filtering system for WooCommerce products based on vehicle makes and models:
- Displays makes and models applicable to the current product category
- Allows customers to filter products by make and model
- Integrates with the active vehicle system

**Key Files:**
- `Inc/shortcodes/makes_models_filter.php`: Shortcode to generate the filter interface
- `src/js/makes-models.js`: Frontend functionality for the filter
- `src/css/facets.css`: Styling for the filter interface

## 3. Utility Class

A central utility class that handles:
- Vehicle compatibility checks
- User role determination (dealer vs. regular customer)
- Price calculation based on currency and user role
- Discount calculations

**Key File:**
- `Inc/classes/class-wc-eb-utility.php`: Core utility functions

## 4. Product Display & Pricing

Custom product display functionality:
- Dynamic pricing based on user role and currency
- Support for product add-ons with role-based pricing
- Compatibility indicators for vehicles

**Key Files:**
- `Inc/shortcodes/products.php`: Shortcodes for product display
- `Inc/functions/product_configurator.php`: Add-on price management

## 5. Custom Checkout Fields

Enhanced checkout experience with:
- VIN number field
- Product serial field (for replacement parts)
- Dealer purchase order field (for dealer accounts)
- File upload capability

**Key File:**
- `Inc/checkout.php`: Checkout customizations

## Template Pages

The theme includes custom template pages:
- `compatible-products.php`: Template for displaying products compatible with selected vehicle

## JavaScript Components

The theme includes JavaScript that handles:
- Vehicle selection and storage (using cookies)
- Dynamic filtering of products
- AJAX requests for vehicle data

## CSS Components

Custom styling for:
- Vehicle selector interface
- Filtering facets
- Product compatibility indicators

## Integration Points

The theme integrates with:
- WooCommerce
- Elementor
- Product Add-Ons
- Currency Switcher

## Usage Notes

- The vehicle selector is implemented through the `[vehicle_selector]` shortcode
- The makes/models filter is implemented through the `[makes_models_filter]` shortcode
- Product compatibility is shown via the `[compatible_product_tag]` shortcode
- Custom product information can be displayed using various `eb_product_*` shortcodes

This theme supports multi-currency pricing and special dealer pricing logic through the WC_EB_Utility class.