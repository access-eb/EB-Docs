# 📦 Phenom Content Sync System

## Overview
This system synchronizes content from external platforms (AWeber, Beehiiv, YouTube) into WordPress using a shared architecture built on an abstract base class.

---

## ✅ Architecture

### Shared Abstract Class
All platforms extend `AbstractContentPlatform`, which provides:
- `syncToWordPress()` — handles fetching and inserting posts
- `createOrUpdatePost()` — inserts or updates posts
- `preparePostMetadata()` — hook for custom post meta
- `getPostCategories()` — hook for assigning terms
- `makeApiRequest()` — wrapper around `wp_remote_get`
- `processDate()` — handles ISO, timestamp, or custom date strings

### Per-Platform Classes
Each platform only overrides what’s unique:
- `AweberPlatform`
- `BeehiivPlatform`
- `YouTubePlatform`

---

## 🔐 AWeber OAuth Integration

### Problem:
AWeber uses short-lived `access_token` + a rotating `refresh_token` via PKCE flow.

### Solution:
- Use admin interface to save `client_id` and `refresh_token` (once)
- System handles auto-refresh and token rotation
- Stores tokens in `wp_options` under `aweber_tokens`

### Admin UI:
- Accessible via **Tools → AWeber Tokens**
- Allows manual update of client ID or refresh token

### Token Lifecycle:
- `getAccessToken()` refreshes tokens if needed
- `access_token` used for each API call

---

## 🔁 CRON Jobs

### 🐝 Beehiiv Cron
```php
add_action('content_integration_cron_beehiiv_sync', function () {
    $config = PlatformConfig::get('beehiiv');
    (new BeehiivPlatform($config))->syncToWordPress();
});
```

### 📧 AWeber Cron
```php
add_action('content_integration_cron_aweber_sync', function () {
    $config = PlatformConfig::get('aweber');
    (new AweberPlatform($config))->syncToWordPress();
});
```

### Schedule Hook
```php
add_action('init', function () {
    if (!wp_next_scheduled('content_integration_cron_aweber_sync')) {
        wp_schedule_event(time(), 'weekly', 'content_integration_cron_aweber_sync');
    }
    if (!wp_next_scheduled('content_integration_cron_beehiiv_sync')) {
        wp_schedule_event(time(), 'weekly', 'content_integration_cron_beehiiv_sync');
    }
});
```

---

## 🛠 Development Notes

### PlatformConfig
Stores per-platform configuration (`endpoint`, `post_type`, etc.).
- AWeber no longer uses `headers` — access token is dynamic

### Category Assignment
Use `get_category_by_slug()` and return term IDs for reliability:
```php
$term = get_category_by_slug('beehiiv');
return $term ? [$term->term_id] : [];
```
---
