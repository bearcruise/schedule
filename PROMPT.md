# BearCruise Schedule

## Background

* You are a developer creating a web-based UI.
* You use industry standard techniques and best practices.
* You create files that are easy to understand.


## App details

* The app is a schedule of events.
* User will go to the site and be presented with a drop-down to select a day.
* The current day will already be selected.
    * If the current day is not in the data, then default to the first day in the data.
* Displayed dates are formatted like:
    * Thursday, November 5, 2026
    * Monday, November 16, 2026
* When a date is selected, that day's schedule is presented to th user.
* The day's schedule consists of one or more entires for that day.
* An entry includes a date, time, short description, details.
* The app is a self-contained HTML file (or files) so that no backend services are needed.
* All data is hard-coded within the generated app.
* Display the data in a modern style UI.
* Use standard CSS styling conventions.
* Use a publicly available HTML widget library only if it's available for free from a public CDN URL.
* The app should be formatted for mobile phones and tablets but still look good if used on a laptop's web browser.
* Title the app "BearCruise".
* In the generated `index.html` file:
    * In the `<head>` tag:
        * Include the favicon definition:
            ```html
            <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
            <link rel="manifest" href="favicon_io/site.webmanifest">
            ```
        * Include the custom font font definition:
            ```html
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&display=swap" rel="stylesheet">
            ```
* In the generated `styles.css` file:
    * Define the custom font font:
    ```css
    .bevan-regular {
        font-family: "Bevan", serif;
        font-weight: 400;
        font-style: normal;
    }

    .bevan-regular-italic {
        font-family: "Bevan", serif;
        font-weight: 400;
        font-style: italic;
    }
    ```


## Design

* When choosing colors, use the following color scheme:  dark brown, tan, orange, yellow, light grey, dark gray
* Display all headings and subheadings in the custom font.


## Header
* Display file `images/BearCruiseLogo-bearpaw.jpg` at the top of the page.  Size the image as needed.
* Headings to display after the logo:
    * Heading:  Scarlet New Years BearCruise Ahoy!
    * Subheading:  5-nights, December 30, 2026 – January 4, 2027
* As a background to the header, display image `2026-12-Scarlet-New-Years/2027-Web-Page-Background.jpg`.


## App data

### Sailing on

* Ship info:
    * Image:  `virgin-voyages/VV-Logo.jpg`.  Scale the image to 15% of the original size.
    * Image:  `virgin-voyages/ScarletLady-icon.jpg`.  Scale the image to 50% of the original size.
    * Display both images side by side with no wrap.
    * Below the images in small text, include caption:  Tap for ship details
        * This is plain text and not a link.
        * When clicked/tapped, display the "The Ship" page.
* Display the "Ship info" in the same rounded box used for the header.

### Schedule

* The schedule data for each day is extracted from `2026-12-Scarlet-New-Years/2026 27 BearCruise Scarlet New Years Itinerary.docx`:

| Date                         | Time               | Description                                             | Location                                                         | Details                                                                                                                                                                                                                                       | Additional Info                       |
|------------------------------|--------------------|---------------------------------------------------------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| Tuesday, December 29, 2026   | 4:00 pm            | Host Hotel Check-In                                     | Home2 / Tru By Hilton, 315 NW 1st Ave, Fort Lauderdale, FL 33301 | Check into host hotel (Hotel Phone: 954-769-9982).                                                                                                                                                                                            | See section "Pre-cruise hotel"        |
| Tuesday, December 29, 2026   | 5:00 pm – 7:00 pm  | Precruise Meet & Greet Cocktail Party                   | Hotel Bar – 5th Floor, Home2 / Tru By Hilton                     | Join fellow cruisers for cocktails! For evening activities, we recommend a Lyft or Uber to Wilton Manors (Wilton Drive) to the bars and restaurants in that fabulously gay area of town.                                                      |                                       |
| Wednesday, December 30, 2026 | 10:45 am           | Hotel Checkout & Lobby Meetup                           | Host Hotel Lobby                                                 | Checkout and meet in the lobby of the host hotel.                                                                                                                                                                                             |                                       |
| Wednesday, December 30, 2026 | 11:00 am           | Depart for Port of Miami                                | Host Hotel to Port of Miami                                      | Depart Fort Lauderdale for Port of Miami by bus.                                                                                                                                                                                              |                                       |
| Wednesday, December 30, 2026 | Boarding           | Ship Boarding & Luggage Drop-Off                        | Terminal V - Virgin Voyages, Port of Miami                       | Line up and board at your assigned time (or early if you have Splash of Romance, Rock Star Suite, or Deep Blue Extra Virgin status). Give tagged bags to porters upon arrival. Do not check bags containing medications, passport, or wallet. | See section "Port of Miami departure" |
| Wednesday, December 30, 2026 | 3:00 pm – 4:30 pm  | BearCruise Hospitality Desk                             | On the Rocks, Deck 6 midship                                     | Come check in with us if you did not check in with us on the bus or at the hotel.                                                                                                                                                             |                                       |
| Wednesday, December 30, 2026 | 4:00 pm – 4:30 pm  | Solo Cruisers Meet Up                                   | Sip Bar, Deck 7 forward                                          | Come meet the other solo cruisers in the group.                                                                                                                                                                                               |                                       |
| Wednesday, December 30, 2026 | 5:00 pm            | Sail Away Party                                         | Sun Club Bar, Deck 16 port side (Above the Pool Deck)            | Wear a hat and/or t-shirt with a bear on it to help us find you in the crowd! Alternate location in event of inclement weather: The Dock House Bar, Deck 7.                                                                                   |                                       |
| Wednesday, December 30, 2026 | 6:30 pm – 8:30 pm  | Pre-Dinner Cocktail Hour                                | The Dock House Bar / The Dock, Deck 7 aft                        | We meet here for cocktails every night before dinner. There is an outside bar that is generally less busy than the indoor bar.                                                                                                                |                                       |
| Wednesday, December 30, 2026 | 8:30 pm            | Group Dinner at Lucky Lotus                             | Lucky Lotus (formerly Razzle Dazzle), Deck 5 midship             | To kick off our cruise, we've arranged a group dinner at Virgin's Asian Restaurant on board.                                                                                                                                                  |                                       |
| Wednesday, December 30, 2026 | 10:45 pm           | PJ Party & Night Activities                             | The Athletic Club, Deck 16                                       | Enjoy ship shows and activities after dinner, then join the PJ Party at The Athletic Club.                                                                                                                                                    |                                       |
| Thursday, December 31, 2026  | 10:00 am           | Coffee Klatch                                           | The Grounds Club, Deck 7 starboard, midship                      | For you early risers with caffeine additions, meet at The Grounds Club for a cup or two of your favorite specialty coffee. OR sleep in. You do you!                                                                                           |                                       |
| Thursday, December 31, 2026  | 12:00 pm           | Bear Lunch                                              | The Galley Food Hall, Deck 15 aft                                | Join others for lunch at The Galley Food Hall. Also open for lunch: Razzle Dazzle, The Wake, The Dock / Dock House (reservations required for first three), The Social Club, The Pizza Place, and The Sun Club.                               |                                       |
| Thursday, December 31, 2026  | 4:00 pm            | Pool & Hot Tub Takeover                                 | Deck 15 (Pool Deck)                                              | We will take over the large round pool near the bar.                                                                                                                                                                                          |                                       |
| Thursday, December 31, 2026  | 6:00 pm – 7:00 pm  | Cocktail Hour                                           | The Dock House Bar / The Dock, Deck 7 aft                        | Pre-dinner cocktail hour.                                                                                                                                                                                                                     |                                       |
| Thursday, December 31, 2026  | Night              | New Year's Eve Celebrations                             | The Manor (2nd Floor) & Pool Deck (Deck 15)                      | The ship will have a host of activities going on for New Year's Eve, including big parties in The Manor club and up on the pool deck!                                                                                                         |                                       |
| Friday, January 1, 2027      | 10:00 am – 7:00 pm | In Port – Puerto Plata, Dominican Republic              | Puerto Plata, Dominican Republic                                 | In port 10:00 am to 7:00 pm. Be back on board 30 minutes prior to sailing (All Aboard at 6:30 pm).                                                                                                                                            |                                       |
| Friday, January 1, 2027      | 10:30 am – 2:30 pm | Shore Excursion: Private Damajagua Waterfalls Adventure | Puerto Plata (Meeting info on voucher)                           | Exit the ship as quickly as possible after it docks and follow the meeting instructions in your voucher.                                                                                                                                      |                                       |
| Friday, January 1, 2027      | 10:30 am – 2:45 pm | Shore Excursion: Private Waterfall Trek & Swim          | Puerto Plata (Meeting info on voucher)                           | Exit the ship as quickly as possible after it docks and follow the meeting instructions in your voucher.                                                                                                                                      |                                       |
| Friday, January 1, 2027      | 4:00 pm            | Pool & Hot Tub Takeover                                 | Deck 15 (Pool Deck)                                              | Pool and hot tub takeover for those who are back on board.                                                                                                                                                                                    |                                       |
| Friday, January 1, 2027      | 6:00 pm – 7:00 pm  | Cocktail Hour                                           | The Dock House Bar / The Dock, Deck 7 aft                        | Meet for cocktails before dinner.                                                                                                                                                                                                             |                                       |
| Friday, January 1, 2027      | 6:30 pm            | All Aboard – Puerto Plata                               | Ship Gangway                                                     | All aboard! Departure at 7:00 pm. Enjoy ship shows and activities after dinner.                                                                                                                                                               |                                       |
| Saturday, January 2, 2027    | 10:00 am           | Coffee Klatch                                           | The Grounds Club, Deck 7 starboard, midship                      | For you early risers with caffeine additions, meet at The Grounds Club for specialty coffee. OR sleep in!                                                                                                                                     |                                       |
| Saturday, January 2, 2027    | 12:00 pm           | Bear Lunch                                              | The Galley Food Hall, Deck 15 aft                                | Join others for lunch at The Galley Food Hall (or try Razzle Dazzle, The Wake, The Dock / Dock House, The Social Club, The Pizza Place, or The Sun Club).                                                                                     |                                       |
| Saturday, January 2, 2027    | 4:00 pm            | Pool & Hot Tub Takeover                                 | Deck 15 (Pool Deck)                                              | We will take over the large round hot tub near the bar.                                                                                                                                                                                       |                                       |
| Saturday, January 2, 2027    | 6:00 pm – 7:00 pm  | Cocktail Hour                                           | The Dock House Bar / The Dock, Deck 7 aft                        | Pre-dinner cocktail hour, followed by ship shows and activities after dinner.                                                                                                                                  |                                       |
| Sunday, January 3, 2027      |                    | Happy Birthday to Gillyano Neves!                       |                                                                  |                                                                                                                                                                                                               |                                       |
| Sunday, January 3, 2027      | 9:00 am – 6:00 pm  | Bimini Beach Club Day                                   | Bimini Beach Club, Bahamas                                       | Exit the ship and take the free tram to the beach club. Pro Tip: Go early for the best lounge chair locations. Turn left at the pool for the quieter side; the DJ is to the right.                                                            |                                       |
| Sunday, January 3, 2027      | 4:00 pm            | Pool & Hot Tub Takeover                                 | Deck 15 (Pool Deck)                                              | Pool and hot tub gathering on the pool deck.                                                                                                                                                                                                  |                                       |
| Sunday, January 3, 2027      | 6:00 pm – 7:00 pm  | Cocktail Hour                                           | The Dock House Bar / The Dock, Deck 7 aft                        | Pre-dinner cocktail hour.                                                                                                                                                                                                                     |                                       |
| Sunday, January 3, 2027      | 6:30 pm            | All Aboard – Bimini                                     | Ship Gangway                                                     | All aboard! Departure from Bimini. Enjoy ship shows and activities after dinner.                                                                                                                                                              |                                       |
| Monday, January 4, 2027      | 6:30 am            | Port of Miami Arrival & Disembarkation                  | Terminal V - Port of Miami                                       | Arrive in Miami. For those who want to make a quick get-away, you may walk off the ship with your own luggage as soon as the first announcement is made. Thank you for sailing with BearCruise! Have a safe trip home.                        | See section "Port of Miami arrival"   |

### Pre-cruise hotel

* Address
    Home 2 Suites by Hilton, Downtown Fort Lauderdale
    315 NW 1st Ave, Fort Lauderdale, FL 33301
* Telephone:  954-769-9982
* Map thumbnail:  `thumbnails/Map-Hilton-FLL-host-hotel.png`
    * Display a small thumbnail version of `thumbnails/Map-Hilton-FLL-host-hotel.png`.
    * When clicked, go to https://www.google.com/maps/dir//Home2+Suites+by+Hilton+Fort+Lauderdale+Downtown,+315+NW+1st+Ave,+Fort+Lauderdale,+FL+33301/@26.125778,-80.1447232,17z/data=!4m19!1m10!3m9!1s0x88d900ffa230b571:0xb477947ef7f543bb!2sHome2+Suites+by+Hilton+Fort+Lauderdale+Downtown!5m2!4m1!1i2!8m2!3d26.125778!4d-80.1447232!16s%2Fg%2F11jqp6kvl9!4m7!1m0!1m5!1m1!1s0x88d900ffa230b571:0xb477947ef7f543bb!2m2!1d-80.1447232!2d26.125778?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D
    * Below the thumbnail image in very small text, include caption:  Tap to open in Google Maps
        * This is plain text and not a link.
* [Hotel website](https://www.hilton.com/en/hotels/fllhtht-home2-suites-fort-lauderdale-downtown/?SEO_id=GMB-AMER-HT-FLLHTHT)
* Do not include any bullets when displaying this info.  Use HTML simple lists instead.

### Port of Miami departure

* Address:
    Terminal V - Virgin Voyages
    718 N Cruise Blvd, Miami, FL 33132
* Telephone:  954-488-2955
* Map thumbnail:  `thumbnails/Map-Virgin-Port-of-Miami.png`
    * Display a small thumbnail version of `thumbnails/Map-Virgin-Port-of-Miami.png`.
    * When clicked, go to https://www.google.com/maps/dir/Terminal+V+-+Virgin+Voyages.,+718+N+Cruise+Blvd,+Miami,+FL+33132//@25.7797521,-80.1800384,16.98z/data=!4m8!4m7!1m5!1m1!1s0x88d9b5b26c3b543b:0xd77c13c6da5e31ca!2m2!1d-80.1799906!2d25.779799!1m0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D
    * Below the thumbnail image in very small text, include caption:  Tap to open in Google Maps
        * This is plain text and not a link.
* Do not include any bullets when displaying this info.  Use HTML simple lists instead.

### Port of Miami arrival

* Address:
    Terminal V - Virgin Voyages
    718 N Cruise Blvd, Miami, FL 33132
* Telephone:  954-488-2955
* Map thumbnail:  `thumbnails/Map-Virgin-Port-of-Miami.png`
    * Display a small thumbnail version of `thumbnails/Map-Virgin-Port-of-Miami.png`.
    * When clicked, go to https://www.google.com/maps/dir//Terminal+V+-+Virgin+Voyages.,+718+N+Cruise+Blvd,+Miami,+FL+33132/@25.7797521,-80.1800384,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9b5b26c3b543b:0xd77c13c6da5e31ca!2m2!1d-80.1799906!2d25.779799?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D
    * Below the thumbnail image in very small text, include caption:  Tap to open in Google Maps
        * This is plain text and not a link.
* Do not include any bullets when displaying this info.  Use HTML simple lists instead.


## The Ship

### Virgin Voyages Scarlet Lady

* Image:  `virgin-voyages/ScarletLady-ship.jpg`

### Deck plans

* Link to `virgin-voyages/ScarletLadyDeckPlans_V7.pdf`
    * Open link in a new browser tab.

### Ship stats

* Text:  If you find yourself competing in one the ship's trivia events, here are some Virgin Voyages cruise ship stats that could win you the champion title.
* Image:  `virgin-voyages/Ship-facts.jpg`
    * Horizontally center the image on the screen.

### Mobile app

* [Apple iOS mobile app](https://apps.apple.com/us/app/virgin-voyages/id6741017368) in Apple App Store
* [Google Android mobile app](https://play.google.com/store/apps/details?id=com.virginvoyages.sailor.prod) in Google Play

### Official website

* Link to https://www.virginvoyages.com.
    * Open the link in a new browser tab.
    * Use "virginvoyages.com" for the link text.


## Closing

* Add text:  BearCruise.com The most trusted name in gay travel.&#8480;
    * Between "BearCruise.com" and "The", insert image `images/bearpaw.png`.


## Footer

* Links
    * [BearCruise.com](https://www.bearcruise.com)
    * [Facebook group](https://www.facebook.com/groups/24653056584369510)
    * [Telegram channel](https://t.me/+3h3e7zQrebdjYTZh)
    * About:  Link to About.
* Copyright:
    * &copy; Copyright 2026 BearCruise.com


## About

### Apple iOS

**Add web page to home screen**

* In Safari, tap the **page menu icon** to the left of the web address.
* Tap **Share**.
* Scroll down and tap **Add to Home Screen**.
* Tap **Add**.

### Google Android

**Add web page to home screen**

* In Google Chrome, tap the **three vertical dots** in the top-right corner.
* Tap **Add to home screen** or **Install and create shortcut** (depending on your Chrome version).
* Tap **Add** or **Install**.
* If the shortcut does not appear on your home screen immediately, swipe up to open your App Drawer, press and hold the new icon, and drag it onto your home screen

### Copyright

* &copy; Copyright 2026 BearCruise.com
* Other images, copyrights, trademarks, and service marks are the property of the respective owners.
* All content is protected by copyright, trademark, and other laws of the United States and/or other jurisdictions.

### Last update

* Include a static timestamp:
    * Use the current time of when any page or file was last generated.
    * Display the timestamp like "Friday, November 13, 2026 at 13:15:23 UTC".
    * Be sure that the timestamp value is correct for the UTC timezone regardless of the current timezone in the system.


## App layout

* Layout the app in this order
    * Header
    * App data
        * If a date has additional info, display the info below the date details.
    * Closing
    * Footer
