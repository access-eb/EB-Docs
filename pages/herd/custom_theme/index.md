# Custom Theme for Herd

For Herd development, we created a custom theme that uses Elementor's theme as its parent. This approach allows us to leverage all of Elementor's functionalities while adding our own customizations.

## Creating a Child Theme

Creating a child theme is a simple process. You only need to create two files:
1. `functions.php`
2. `style.css`

### Setting up style.css

Your `style.css` file should include the following header information:

```css
/*
Theme Name: Hello Elementor Child
Theme URI:
Description: Hello Elementor Child is a child theme of Hello Elementor
Author: Your name
Author URI:
Template: hello-elementor
Version: 1.0.0
Text Domain: hello-elementor-child
License: GNU General Public License v3 or later.
License URI: https://www.gnu.org/licenses/gpl-3.0.html
*/
```

**Important notes about the header:**
- `Template: hello-elementor` specifies that we're using Hello Elementor as the parent theme
- You can replace this with any theme you want to use as a parent
- The `Text Domain` should be the name of your theme for translation purposes

More info on creating a wordpress child theme on: [elementor blog](https://elementor.com/blog/wordpress-child-theme/)

## Understanding Our Custom Theme

The `functions.php` file holds all our custom code snippets. For better organization, we created multiple folders and use `require_once` to include each file.

The `require_once` expression is identical to `require` except PHP will check if the file has already been included, and if so, will not include it again.

for more info you can check the PHP documentation [PHP doc](https://www.php.net/manual/en/function.require-once.php)

Example usage:
```php
require_once get_stylesheet_directory() . '/folder/file.php';
```

An example output of `get_stylesheet_directory()` would be:
```
/home/user/public_html/wp-content/themes/my_theme
```
more info on wfor wordpres check [wordpress doc](https://developer.wordpress.org/reference/functions/get_stylesheet_directory/)


This structure helps us maintain a clean codebase while working with our combination of WooCommerce, WordPress, and PHP.`

---

:::tip
Here is a breakdown of the folder structure
:::

```
hello-elementor-child/
├── style.css
├── functions.php
├── Inc/
│   ├── scripts.php
│   ├── classes/
│   │   └── class-wc-eb-utility.php
│   ├── functions/
│   │   ├── parent_functions.php
│   │   ├── query_functions.php
│   │   └── product_configurator.php
│   ├── shortcodes/
│   │   ├── fits_my_vehicle.php
│   │   ├── makes_models_filter.php
│   │   └── products.php
│   └── ajax/
│       ├── fits-my-vehicles-products.php
│       └── makes_models_products.php
└── src/
    ├── js/
    │   ├── fits-my-vehicle.js
    │   └── makes-models.js
    └── css/
        ├── facets.css
        └── vehicle-selector-styles.css
```
