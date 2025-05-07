# 📘 `[fusion_recent_posts_cpt]` Shortcode Guide (Avada Builder)

This shortcode is part of the **Avada Builder (formerly Fusion Builder)** and is used to display recent posts from a **custom post type (CPT)** with various filtering and styling options.

---

## 🔧 Basic Structure

Below is an example of the shortcode structure:

```shortcode
[fusion_recent_posts_cpt
  layout="default"
  cpt_post_type="trade_shows"
  cus_taxonomy="trade_shows__trade_show_years"
  cus_terms="..."
  cus_terms_exclude=""
  meta_terms1="xxx__select_taxonomy"
  meta_terms2="xxx__select_taxonomy"
  cpt_cfield1="select_cfield"
  key_text1=""
  cpt_cfield2="trade_show_logo"
  key_text2=""
  picture_size="auto"
  hover_type="none"
  columns="1"
  number_posts="12"
  offset="0"
  pull_by="tag"
  cat_slug=""
  exclude_cats=""
  tag_slug=""
  exclude_tags=""
  thumbnail="no"
  title="no"
  meta="no"
  meta_author="no"
  meta_categories="no"
  meta_date="yes"
  meta_comments="yes"
  meta_tags="no"
  content_alignment=""
  excerpt="full"
  excerpt_length="35"
  strip_html="yes"
  scrolling="no"
  hide_on_mobile="small-visibility,medium-visibility,large-visibility"
  class="trade-show-cards"
  id=""
  animation_type=""
  animation_direction="left"
  animation_speed="0.3"
  animation_offset=""
/]
```

---

## 🧩 Key Parameters

| Parameter         | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `cpt_post_type`   | The custom post type to display (e.g., `trade_shows`).                      |
| `cus_taxonomy`    | The custom taxonomy to filter by (e.g., `trade_show_years`).                |
| `cus_terms`       | The terms within the taxonomy used for filtering.                         |
| `number_posts`    | Maximum number of posts to display.                                         |
| `columns`         | Number of columns in the layout.                                            |
| `thumbnail`       | Display post thumbnail (`yes` or `no`).                                     |
| `meta_date`       | Display the post date (`yes` or `no`).                                      |
| `class`           | CSS class for custom styling of the element.                              |

---

## ⚖️ Difference Between Two Shortcodes

### 1. Filter by **Years**

```shortcode
cus_terms="trade_show_years__2025,trade_show_years__trade-show-2024,trade_show_years__2026,trade_show_years__2027"
```

- **Filter Focus:** Uses year-based terms.
- **Usage:** Displays trade shows tagged with the years **2024, 2025, 2026,** and **2027**.
- **Purpose:** To showcase events from specific years.

---

### 2. Filter by **Region (e.g., LATAM)**

```shortcode
cus_terms="trade_show_years__latam"
```

- **Filter Focus:** Uses a region-based term.
- **Usage:** Displays only trade shows tagged with **"latam"**.
- **Purpose:** To show region-specific content.

---

## 🔄 Comparison Table

| Shortcode Version      | Filters by       | Description                            |
|------------------------|------------------|----------------------------------------|
| Years (2024–2027)      | Time (Years)     | Shows events for the specified years.  |
| Region (latam)         | Region           | Shows events for the LATAM region.     |

---

## 🧠 Notes

- Although the taxonomy is named `trade_show_years`, it is used for both **year-based** and **region-based** filtering.
- Ensure that your custom post types and taxonomy terms are properly registered in WordPress.

---

## 📚 More Resources

- [Avada Official Documentation](https://avada.com/documentation/)