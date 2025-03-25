---
title: Avalara Avatax Configuration Guide
---
## Overriding Tax Generation

The Avalara Tax plugin may override all tax generation from the standard WooCommerce tax interface. To modify this behavior:

1. Navigate to the plugin folder
2. Open `src/class-wc-avatax-tax-handler.php`
3. Locate the constructor method:

```php
public function __construct() {
    if ( $this->is_available() ) {
       // ensure tax-inclusive prices are displayed properly
       add_filter( 'woocommerce_adjust_non_base_location_prices', '__return_false' );

       // This line overrides all WooCommerce taxes
       // Comment it out to use standard WooCommerce tax calculations
       if ( $this->override_wc_rates() ) {
          add_filter( 'woocommerce_matched_tax_rates', '__return_empty_array' );
       }
       // more stuff
    }
}
```

## Fixing Double Shipping Tax Issues

To prevent shipping taxes from being added to the total amount twice:

1. In the same directory, open `class-wc-avatax-checkout-handler.php`
2. Go to line 83
3. Modify the `calculate_taxes()` function to only process US orders:

```php
function calculate_taxes( $cart ) {
    // Get the customer's destination country
    $destination = WC()->customer->get_shipping_country();

    // Only calculate a full tax transaction when the country is US
    if ($destination !== 'US') {
        return;
    }
    // rest of the code
}
```