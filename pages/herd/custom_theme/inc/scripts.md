---
title: Scripts.php
---
Let's start with the `Inc/scripts.php` file and build our understanding of the theme component by component.

---

This file is responsible for loading JavaScript files needed for the theme's interactive features.

### Key Functions:

- **`load_custom_scripts()`**: Registers and enqueues the necessary JavaScript files
  - Loads `fits-my-vehicle.js` for the vehicle selector functionality (more on this later).
  - Loads `makes-models.js` for the product filtering system (more on this later).
  - Localizes both scripts with the WordPress AJAX URL, making AJAX calls possible

The file uses WordPress's `wp_enqueue_scripts` action hook to properly integrate these scripts into the theme.

more on that [here](https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/)

### Scripts Purpose:

1. **fits-my-vehicle.js**: Handles the vehicle selection interface, including:
   - Saving vehicle selections to cookies
   - Managing the display of selected vehicles
   - Facilitating the "active vehicle" concept

2. **makes-models.js**: Manages the product filtering system, including:
   - Filtering products by make/model
   - Updating the UI based on selected filters
   - Sending AJAX requests to fetch filtered products

**TO DO: link files to proper documentation files for better navigation.**