---
title: Shipping System
---
Herd offers different shipping options tailored to product weight and destination. The system utilizes two primary shipping methods:

## Easy Post Shipping

- Used for lightweight products (under 80lbs)
- Managed through the Easy Post shipping plugin
- Provides standard shipping options for smaller items

## Custom Herd Shipping

For heavier products (80lbs and above), Herd uses a custom shipping method developed specifically for their needs.

### Key Features

- **Weight-Based Calculation**: Automatically activates for cart contents weighing 80lbs or more
- **Multi-Carrier Support**: Offers shipping through multiple carriers including:
  - Manitoulin
  - Rosenau
- **Smart Pallet Calculation**: Calculates appropriate pallet sizes and weights based on:
  - Product weight
  - Product quantity
  - Maximum weight capacity
  - Special box/pallet requirements
- **Geographic Coverage**:
  - Available for both US and Canadian shipments
  - Uses different zone calculation methods for each country
  - US zones based on postal code (first 3 digits)
  - Canadian zones based on province code + city
- **Currency Conversion**: Automatically handles currency conversion for cross-border shipping
- **Customizable Settings**:
  - Minimum weight threshold (default 80lbs)
  - Freight cost markup (default 1.3×)
  - Carrier selection
  - Shipping title display

### Shipping Rate Calculation

The system calculates shipping rates by:
1. Determining the total weight of all products in the cart
2. Adding appropriate pallet weights based on product quantities
3. Looking up appropriate zone-based shipping rates
4. Applying currency conversion when needed
5. Adding freight cost markup

### Currency Rates

Currency rates are a critical component of the shipping calculation system, especially for cross-border shipments:

- Currency data is stored in the `wpbs_exit_acu_currencyrates` table in the Herd.com database
- When shipping the the differnet destinations, the system automatically applies the appropriate currency conversion
- The system selects the most recent currency rate data available before the current date
- Currency conversion is applied using the `RateReciprocal` value from the database

### Shipping Zones and Rates

Shipping rates are determined by:

- Data stored in the `wpbs_exit_acu_shipviarates` table with the following structure:
  - `id`: Unique identifier
  - `Description`: Text description
  - `Weight`: Maximum weight for this rate tier
  - `ZoneID`: Destination zone identifier
  - `Rate`: Shipping rate per unit weight
  - `CarrierID`: Carrier identifier (e.g., MANITOULIN, ROSENAU)
  - `LineNbr`: Line number

The system queries this table to find the appropriate rate based on:
- The destination zone (derived from shipping address)
- The total weight of the order (pallet weight added)
- The selected carrier

### Excluded Regions

- Alaska is excluded from the shipping states for US destinations
- Shipping methods are filtered based on weight and destination country

This custom shipping implementation allows Herd to provide accurate shipping costs for heavier items that require special handling and freight services, with proper currency conversion for international orders.

---
### Endpoints we use for the calculation

- currency rates: **/wp-json/wc-exit_acu/v1/currencyrates**
- shipvia rates: **/wp-json/wc-exit_acu/v1/currencyrates**
- boxes: **/wp-json/wc-exit_acu/v1/box/**
- initem box: **/wp-json/wc-exit_acu/v1/box/**


