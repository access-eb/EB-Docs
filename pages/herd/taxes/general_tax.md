# General Taxes

Herd uses two different approaches for tax calculation, depending on the customer's location:

1. Native WooCommerce tax features for Canada
2. Avalara platform for US taxes

## Native Tax Functionality

Herd uses WooCommerce's built-in tax features to handle Canadian orders.

### Accessing Tax Settings

You can access the tax settings through:
- Direct URL: [Tax settings](https://herd.com/wp-admin/admin.php?page=wc-settings&tab=tax)
- WordPress Admin Panel: **WooCommerce** > **Settings** > **Tax**

Canadian tax rates are stored in Acumatica and synchronized with Herd.com using WooCommerce endpoints. This ensures that the website always has the most up-to-date tax information.

### Enhanced Functionality

The theme adds custom functionality for handling pickup shipping methods:
- Traditional WooCommerce calculates pickup taxes based on the store location
- Herd's customization allows pickup taxes to be calculated based on the customer's billing and shipping addresses at checkout

on **apparences** > **theme file editor** > **functions.php**
```php
add_filter( 'woocommerce_apply_base_tax_for_local_pickup', '__return_false' );
```

### Documentation Resources

- [WooCommerce tax documentation](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/) - For general tax setup information
- [WooCommerce API Documentation](https://woocommerce.github.io/woocommerce-rest-api-docs/?php#tax-rates) - For information about tax rate endpoints