---
title: Directory Functionality
---

ISS A asked for updates to a custom form that filters a custom post. Their requests were:

* **Add WSA Members to the Directory** with a new category for Office Product Dealers

  * Create the new category in WordPress
  * Update the report to include the new data
  * URL: [https://access.issa.com/dir](https://access.issa.com/dir)
  * Redirect URL after submission: [https://access.issa.com/dir/search-results](https://access.issa.com/dir/search-results)

## The Issue

When inspecting the `/dir` page in WordPress, it was using a shortcode, but its source was not immediately obvious. The shortcode is defined in the theme files under `includes/shortcodes.php`:

```php
// Displays Directory Search shortcode
function directory_search_shortcode() {
    ob_start();
    get_template_part('template-parts/modules/directory-search');
    return ob_get_clean();
}
add_shortcode('directory-search', 'directory_search_shortcode');
```

The template part `template-parts/modules/directory-search.php` handles the form. After form submission, users are redirected to `/dir/search-results`, which is a custom page rendered by `search-results.php` in the theme folder.

\## Steps to Properly Filter Directory Posts

### 1. Update ACF Fields

1. In the WordPress admin, go to **Custom Fields › Field Groups** and open the **Directory** field group ([direct link](https://access.issa.com/wp-admin/post.php?post=2285&action=edit)).
2. Locate the **Class Code** field and click **Edit**.
3. In the **Choices** textarea, add the new category using this format:

   ```
   WM : WSA Member
   ```
4. Save the field group.

### 2. Modify the directory-search.php Template

1. In your theme folder, open `template-parts/modules/directory-search.php`.
2. Around line 16, confirm the post‑count variables include the new `WM` code:

   ```php
   $d_count  = get_post_count_by_meta('class_code', 'D',  'directory');
   $w_count  = get_post_count_by_meta('class_code', 'W',  'directory');
   // ... other codes ...
   $wm_count = get_post_count_by_meta('class_code', 'WM', 'directory');
   ```
3. Scroll down to where the checkboxes are rendered (around line 85). After the last existing `<div class="form-group nowrap">`, insert this block:

   ```html
   <div class="form-group nowrap">
     <label class="checkbox-label">
       <input
         type="checkbox"
         name="class_code[]"
         class="searchChkItem"
         id="csearch_form_type_wm"
         data-type="WM"
         description="WSA Member"
       >
       WSA Member
       <span class="counter">(<?php echo number_format($wm_count); ?>)</span>
       <span class="icon-info htooltip normalwrap">
         &nbsp;<span class="gray-tooltip"></span>
       </span>
     </label>
   </div>
   ```
4. Update the `name`, `id`, `data-type`, and `description` attributes to match the recentrly created `class_code`.
5. Save the file and test the directory page to verify that the “WSA Member” filter appears and its count displays correctly.
6. Test by creating / updating directory post `class_code`.
