# Abhijeet & Sakshi — Premium Wedding Invitation Website

A luxury, bespoke wedding website crafted for the wedding ceremony (Shubh Vivah Sohala) of **Abhijeet & Sakshi**, inspired by visual elegance, opening envelope animation, name stamp, and stationery presentation.

---

## ✦ Wedding Information

- **Auspicious Invocation:** ॥ Shri Gajanan Prasanna ॥
- **Ceremony:** Wedding Ceremony (Shubh Vivah Sohala)
- **Groom:** Abhijeet
  - Parents: Mrs. Sandhya and Mr. Bala V. Salve
  - Family Location: Almasahade, currently residing in Wardha
- **Bride:** Sakshi
  - Parents: Mrs. Priya and Late Mr. Dinesh M. Thakre
  - Address: Narendra Nagar, Nagpur
- **Day & Date:** Saturday, 5 December 2026
- **Time & Muhurat:** 12:04 PM • Abhijit Muhurat
- **Venue:** Imperial Garden
- **Location:** Patansawangi, Nagpur, Maharashtra
- **Invitation From:** The Salve Family (Samast Salve Parivar)
- **Invitation Message:** "We have joyfully arranged this wedding ceremony and cordially request your gracious presence and blessings on this auspicious occasion."

---

## ✦ Architecture & Screens Recreated

1. **Screen 1 — Initial Name Stamp & Luxury Envelope Opening (`EnvelopeOpening.tsx`):**
   - Full-screen deep navy canvas with floating gold particle shimmer.
   - Textured navy and champagne gold stationery envelope with gold corner filigree.
   - A&S Monogram stamp with dynamic spring scale-down stamping animation.
   - Wax seal with embossed "A&S" seal.
   - "ABHIJEET & SAKSHI — WEDDING CEREMONY — 5 · DECEMBER · 2026".
   - "TAP TO BEGIN THE CELEBRATION" pulse-glow button.
   - Cinematic 3D perspective fold opening when tapped, sliding the invitation card out and transitioning smoothly into the full celebration website.

2. **Screen 2 — Hero Invitation (`HeroInvitation.tsx`):**
   - Elegant navy radial gradient with subtle background Dharma Chakra watermark.
   - Animated drawing gold border frame with ornate corner accents.
   - Staggered entrance for Abhijeet & Sakshi typography, date, time, and venue.
   - Floating gold dust particles.
   - Animated scroll chevron prompt.

3. **Screen 3 — Family Blessings (`FamilyBlessings.tsx`):**
   - Ivory/cream stationery theme with rich navy and gold typography.
   - Groom's family: Mrs. Sandhya and Mr. Bala V. Salve (Almasahade, currently residing in Wardha).
   - Bride's family: Mrs. Priya and Late Mr. Dinesh M. Thakre (Narendra Nagar, Nagpur).
   - Central "with" in Great Vibes calligraphy script with Dharma Chakra motif.
   - Invitation From: The Salve Family (Samast Salve Parivar).

4. **Screen 4 — Couple Introduction (`CoupleIntroduction.tsx`):**
   - Prominent presentation of ABHIJEET & SAKSHI.
   - Elegant 3:4 portrait photo placeholders with gold borders, hover glows, and lotus motifs.
   - Romantic proverb on rising together like lotus blossoms toward the light.

5. **Screen 5 — Wedding Celebration / Events (`WeddingEvents.tsx`):**
   - Horizontal touch/swipe event carousel.
   - Confirmed event: **Wedding Ceremony (Shubh Vivah Sohala)** on Saturday, 5 December 2026 at 12:04 PM (Abhijit Muhurat) at Imperial Garden, Patansawangi, Nagpur.
   - Interactive "View on Map" button linking directly to Google Maps.
   - Extensible structure for future pre-wedding celebrations.
   - **Live Countdown Timer** updating in real time down to the second for 5 December 2026, 12:04 PM IST.

6. **Screen 6 — Wardrobe Planner (`WardrobeInspiration.tsx`):**
   - "A LITTLE STYLE INSPIRATION" — curated complementary color palette swatches:
     - Deep Navy Blue (`#0F1B3D`)
     - Champagne Gold (`#D4A547`)
     - Warm Ivory (`#FAF3E5`)
     - Dusty Rose (`#C48B8B`)
     - Sage Green (`#7A9A7A`)
     - Burgundy (`#6B1D2E`)
     - Soft Lavender (`#9B8EC4`)
     - Pewter Slate (`#5C6B7D`)
   - Gentle attire guidance for gentlemen and ladies.
   - Courteous disclaimer emphasizing guest comfort.

7. **Screen 7 — Photo Gallery (`PhotoGallery.tsx`):**
   - Filterable luxury photo grid with category pills (Ceremony, Details, Venue, Aesthetics, Portraits).
   - Interactive full-screen lightbox modal with previous/next navigation and mobile touch dismissal.
   - Refined aesthetic placeholder cards with handcrafted SVG icons.

8. **Screen 8 — With Love & Blessings (`LoveAndBlessings.tsx`):**
   - Dedicated family gratitude card:
     *"Our families, with joy in their hearts, await your gracious presence and blessings as we begin this beautiful new journey together."*
   - SUJITH & PRATIKSHA — 21 DECEMBER 2026.

9. **Screen 9 — RSVP (`RsvpSection.tsx`):**
   - Guest Name, Mobile Number (with regex validation), Number of Guests selector (1–10), Attendance choice, and Personal message.
   - Two distinct actions: **ACCEPT INVITATION** / **REGRETFULLY DECLINE**.
   - Form validation, instant feedback, persistent local storage database, and an animated confirmation reference receipt screen.
   - Ready for Supabase or REST API connection.

10. **Screen 10 — Final Wedding Message (`FinalMessage.tsx`):**
    - "WE WOULD LOVE TO CELEBRATE THIS SPECIAL DAY WITH YOU."
    - "WITH LOVE, SUJITH & PRATIKSHA"
    - Closing 360° slow-rotating S&P Monogram Stamp.
    - WhatsApp instant invitation sharing.
    - One-click Google Maps directions.
    - "Add to Calendar" button (Google Calendar / iCal).

11. **Interactive Global Enhancements:**
    - **Ambient Music Player (`MusicPlayer.tsx`):** Web Audio API-synthesized harmonious ambient chimes with animated sound wave equalizer bars.
    - **Navigation (`Navigation.tsx`):** Sticky translucent top bar with S&P monogram, smooth scrolling links, and mobile drawer.
    - **Responsive Design:** Mobile-first layout tested across viewport sizes with zero horizontal overflow.

---

## ✦ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
The preview will be available at `http://localhost:4173/`.

---

## ✦ Connecting Supabase (Optional)

To stream RSVPs directly into a remote Supabase table:
1. Create a table named `rsvps` in your Supabase dashboard with columns:
   - `id` (text, primary key)
   - `full_name` (text)
   - `mobile` (text)
   - `guest_count` (integer)
   - `attendance` (text)
   - `message` (text)
   - `created_at` (timestamp with time zone)
2. Add your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to a `.env.local` file.

