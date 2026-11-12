(function () {
  "use strict";

  // Additional info that an entry can reference.
  var PRE_CRUISE_HOTEL = {
    title: "Pre-cruise hotel",
    address: [
      "Home 2 Suites by Hilton, Downtown Fort Lauderdale",
      "315 NW 1st Ave, Fort Lauderdale, FL 33301"
    ],
    telephone: "954-769-9982",
    links: [
      {
        text: "Hotel website",
        url: "https://www.hilton.com/en/hotels/fllhtht-home2-suites-fort-lauderdale-downtown/?SEO_id=GMB-AMER-HT-FLLHTHT"
      }
    ],
    // Small map image that links to Google Maps directions.
    thumbnail: {
      src: "Map-host-hotel.png",
      alt: "Map of the pre-cruise hotel. Click to open in Google Maps.",
      url: "https://www.google.com/maps/dir//Home2+Suites+by+Hilton+Fort+Lauderdale+Downtown,+315+NW+1st+Ave,+Fort+Lauderdale,+FL+33301/@26.125778,-80.1447232,17z/data=!4m19!1m10!3m9!1s0x88d900ffa230b571:0xb477947ef7f543bb!2sHome2+Suites+by+Hilton+Fort+Lauderdale+Downtown!5m2!4m1!1i2!8m2!3d26.125778!4d-80.1447232!16s%2Fg%2F11jqp6kvl9!4m7!1m0!1m5!1m1!1s0x88d900ffa230b571:0xb477947ef7f543bb!2m2!1d-80.1447232!2d26.125778?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"
    }
  };

  var PORT_OF_MIAMI_DEPARTURE = {
    title: "Port of Miami departure",
    address: [
      "Terminal V - Virgin Voyages",
      "718 N Cruise Blvd, Miami, FL 33132"
    ],
    telephone: "954-488-2955",
    links: [],
    // Small map image that links to Google Maps directions.
    thumbnail: {
      src: "Map-Port-of-Miami.png",
      alt: "Map for Port of Miami departure. Click to open in Google Maps.",
      url: "https://www.google.com/maps/dir/Terminal+V+-+Virgin+Voyages.,+718+N+Cruise+Blvd,+Miami,+FL+33132//@25.7797521,-80.1800384,16.98z/data=!4m8!4m7!1m5!1m1!1s0x88d9b5b26c3b543b:0xd77c13c6da5e31ca!2m2!1d-80.1799906!2d25.779799!1m0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"
    }
  };

  var PORT_OF_MIAMI_ARRIVAL = {
    title: "Port of Miami arrival",
    address: [
      "Terminal V - Virgin Voyages",
      "718 N Cruise Blvd, Miami, FL 33132"
    ],
    telephone: "954-488-2955",
    links: [],
    // Small map image that links to Google Maps directions.
    thumbnail: {
      src: "Map-Port-of-Miami.png",
      alt: "Map for Port of Miami arrival. Click to open in Google Maps.",
      url: "https://www.google.com/maps/dir//Terminal+V+-+Virgin+Voyages.,+718+N+Cruise+Blvd,+Miami,+FL+33132/@25.7797521,-80.1800384,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9b5b26c3b543b:0xd77c13c6da5e31ca!2m2!1d-80.1799906!2d25.779799?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D"
    }
  };

  // All schedule data is hard-coded; extracted from 2026/27 Scarlet Lady New Year's BearCruise Itinerary.
  // An empty time means the entry has no specific time. "location", "details", and "info" are optional.
  var SCHEDULE = [
    // Tuesday, December 29, 2026 - Fort Lauderdale
    {
      date: "Tuesday, December 29, 2026",
      time: "4:00 pm",
      description: "Host Hotel Check-In",
      location: "Home2 / Tru By Hilton, 315 NW 1st Ave, Fort Lauderdale, FL 33301",
      details: "Check into host hotel (Hotel Phone: 954-769-9982).",
      info: PRE_CRUISE_HOTEL
    },
    {
      date: "Tuesday, December 29, 2026",
      time: "5:00 pm – 7:00 pm",
      description: "Precruise Meet & Greet Cocktail Party",
      location: "Hotel Bar – 5th Floor, Home2 / Tru By Hilton",
      details: "Join fellow cruisers for cocktails! For evening activities, we recommend a Lyft or Uber to Wilton Manors (Wilton Drive) to the bars and restaurants in that fabulously gay area of town."
    },

    // Wednesday, December 30, 2026 - Fort Lauderdale to Miami
    {
      date: "Wednesday, December 30, 2026",
      time: "10:45 am",
      description: "Hotel Checkout & Lobby Meetup",
      location: "Host Hotel Lobby",
      details: "Checkout and meet in the lobby of the host hotel."
    },
    {
      date: "Wednesday, December 30, 2026",
      time: "11:00 am",
      description: "Depart for Port of Miami",
      location: "Host Hotel to Port of Miami",
      details: "Depart Fort Lauderdale for Port of Miami by bus."
    },
    {
      date: "Wednesday, December 30, 2026",
      time: "Boarding",
      description: "Ship Boarding & Luggage Drop-Off",
      location: "Terminal V - Virgin Voyages, Port of Miami",
      details: "Line up and board at your assigned time (or early if you have Splash of Romance, Rock Star Suite, or Deep Blue Extra Virgin status). Give tagged bags to porters upon arrival. Do not check bags containing medications, passport, or wallet.",
      info: PORT_OF_MIAMI_DEPARTURE
    },
    {
      date: "Wednesday, December 30, 2026",
      time: "3:00 pm – 4:30 pm",
      description: "BearCruise Hospitality Desk",
      location: "On the Rocks, Deck 6 midship",
      details: "Come check in with us if you did not check in with us on the bus or at the hotel."
    },
    {
      date: "Wednesday, December 30, 2026",
      time: "4:00 pm – 4:30 pm",
      description: "Solo Cruisers Meet Up",
      location: "Sip Bar, Deck 7 forward",
      details: "Come meet the other solo cruisers in the group."
    },
    {
      date: "Wednesday, December 30, 2026",
      time: "5:00 pm",
      description: "Sail Away Party",
      location: "Sun Club Bar, Deck 16 port side (Above the Pool Deck)",
      details: "Wear a hat and/or t-shirt with a bear on it to help us find you in the crowd! Alternate location in event of inclement weather: The Dock House Bar, Deck 7."
    },
    {
      date: "Wednesday, December 30, 2026",
      time: "6:30 pm – 8:30 pm",
      description: "Pre-Dinner Cocktail Hour",
      location: "The Dock House Bar / The Dock, Deck 7 aft",
      details: "We meet here for cocktails every night before dinner. There is an outside bar that is generally less busy than the indoor bar."
    },
    {
      date: "Wednesday, December 30, 2026",
      time: "8:30 pm",
      description: "Group Dinner at Lucky Lotus",
      location: "Lucky Lotus (formerly Razzle Dazzle), Deck 5 midship",
      details: "To kick off our cruise, we've arranged a group dinner at Virgin's Asian Restaurant on board."
    },
    {
      date: "Wednesday, December 30, 2026",
      time: "10:45 pm",
      description: "PJ Party & Night Activities",
      location: "The Athletic Club, Deck 16",
      details: "Enjoy ship shows and activities after dinner, then join the PJ Party at The Athletic Club."
    },

    // Thursday, December 31, 2026 - New Year's Eve - Day at Sea
    {
      date: "Thursday, December 31, 2026",
      time: "10:00 am",
      description: "Coffee Klatch",
      location: "The Grounds Club, Deck 7 starboard, midship",
      details: "For you early risers with caffeine additions, meet at The Grounds Club for a cup or two of your favorite specialty coffee. OR sleep in. You do you!"
    },
    {
      date: "Thursday, December 31, 2026",
      time: "12:00 pm",
      description: "Bear Lunch",
      location: "The Galley Food Hall, Deck 15 aft",
      details: "Join others for lunch at The Galley Food Hall. Also open for lunch: Razzle Dazzle, The Wake, The Dock / Dock House (reservations required for first three), The Social Club, The Pizza Place, and The Sun Club."
    },
    {
      date: "Thursday, December 31, 2026",
      time: "4:00 pm",
      description: "Pool & Hot Tub Takeover",
      location: "Deck 15 (Pool Deck)",
      details: "We will take over the large round pool near the bar."
    },
    {
      date: "Thursday, December 31, 2026",
      time: "6:00 pm – 7:00 pm",
      description: "Cocktail Hour",
      location: "The Dock House Bar / The Dock, Deck 7 aft",
      details: "Pre-dinner cocktail hour."
    },
    {
      date: "Thursday, December 31, 2026",
      time: "Night",
      description: "New Year's Eve Celebrations",
      location: "The Manor (2nd Floor) & Pool Deck (Deck 15)",
      details: "The ship will have a host of activities going on for New Year's Eve, including big parties in The Manor club and up on the pool deck!"
    },

    // Friday, January 1, 2027 - Puerto Plata, Dominican Republic
    {
      date: "Friday, January 1, 2027",
      time: "10:00 am – 7:00 pm",
      description: "In Port – Puerto Plata, Dominican Republic",
      location: "Puerto Plata, Dominican Republic",
      details: "In port 10:00 am to 7:00 pm. Be back on board 30 minutes prior to sailing (All Aboard at 6:30 pm)."
    },
    {
      date: "Friday, January 1, 2027",
      time: "10:30 am – 2:30 pm",
      description: "Shore Excursion: Private Damajagua Waterfalls Adventure",
      location: "Puerto Plata (Meeting info on voucher)",
      details: "Exit the ship as quickly as possible after it docks and follow the meeting instructions in your voucher."
    },
    {
      date: "Friday, January 1, 2027",
      time: "10:30 am – 2:45 pm",
      description: "Shore Excursion: Private Waterfall Trek & Swim",
      location: "Puerto Plata (Meeting info on voucher)",
      details: "Exit the ship as quickly as possible after it docks and follow the meeting instructions in your voucher."
    },
    {
      date: "Friday, January 1, 2027",
      time: "4:00 pm",
      description: "Pool & Hot Tub Takeover",
      location: "Deck 15 (Pool Deck)",
      details: "Pool and hot tub takeover for those who are back on board."
    },
    {
      date: "Friday, January 1, 2027",
      time: "6:00 pm – 7:00 pm",
      description: "Cocktail Hour",
      location: "The Dock House Bar / The Dock, Deck 7 aft",
      details: "Meet for cocktails before dinner."
    },
    {
      date: "Friday, January 1, 2027",
      time: "6:30 pm",
      description: "All Aboard – Puerto Plata",
      location: "Ship Gangway",
      details: "All aboard! Departure at 7:00 pm. Enjoy ship shows and activities after dinner."
    },

    // Saturday, January 2, 2027 - Day at Sea
    {
      date: "Saturday, January 2, 2027",
      time: "10:00 am",
      description: "Coffee Klatch",
      location: "The Grounds Club, Deck 7 starboard, midship",
      details: "For you early risers with caffeine additions, meet at The Grounds Club for specialty coffee. OR sleep in!"
    },
    {
      date: "Saturday, January 2, 2027",
      time: "12:00 pm",
      description: "Bear Lunch",
      location: "The Galley Food Hall, Deck 15 aft",
      details: "Join others for lunch at The Galley Food Hall (or try Razzle Dazzle, The Wake, The Dock / Dock House, The Social Club, The Pizza Place, or The Sun Club)."
    },
    {
      date: "Saturday, January 2, 2027",
      time: "4:00 pm",
      description: "Pool & Hot Tub Takeover",
      location: "Deck 15 (Pool Deck)",
      details: "We will take over the large round hot tub near the bar."
    },
    {
      date: "Saturday, January 2, 2027",
      time: "6:00 pm – 7:00 pm",
      description: "Cocktail Hour",
      location: "The Dock House Bar / The Dock, Deck 7 aft",
      details: "Pre-dinner cocktail hour, followed by ship shows and activities after dinner."
    },

    // Sunday, January 3, 2027 - Bimini Beach Club, Bahamas
    {
      date: "Sunday, January 3, 2027",
      time: "9:00 am – 6:00 pm",
      description: "Bimini Beach Club Day",
      location: "Bimini Beach Club, Bahamas",
      details: "Exit the ship and take the free tram to the beach club. Pro Tip: Go early for the best lounge chair locations. Turn left at the pool for the quieter side; the DJ is to the right."
    },
    {
      date: "Sunday, January 3, 2027",
      time: "4:00 pm",
      description: "Pool & Hot Tub Takeover",
      location: "Deck 15 (Pool Deck)",
      details: "Pool and hot tub gathering on the pool deck."
    },
    {
      date: "Sunday, January 3, 2027",
      time: "6:00 pm – 7:00 pm",
      description: "Cocktail Hour",
      location: "The Dock House Bar / The Dock, Deck 7 aft",
      details: "Pre-dinner cocktail hour."
    },
    {
      date: "Sunday, January 3, 2027",
      time: "6:30 pm",
      description: "All Aboard – Bimini",
      location: "Ship Gangway",
      details: "All aboard! Departure from Bimini. Enjoy ship shows and activities after dinner."
    },

    // Monday, January 4, 2027 - Miami
    {
      date: "Monday, January 4, 2027",
      time: "6:30 am",
      description: "Port of Miami Arrival & Disembarkation",
      location: "Terminal V - Port of Miami",
      details: "Arrive in Miami. For those who want to make a quick get-away, you may walk off the ship with your own luggage as soon as the first announcement is made. Thank you for sailing with BearCruise! Have a safe trip home.",
      info: PORT_OF_MIAMI_ARRIVAL
    }
  ];

  var select = document.getElementById("day-select");
  var scheduleEl = document.getElementById("schedule");

  // Unique dates, preserving schedule order.
  var days = SCHEDULE.reduce(function (list, entry) {
    if (list.indexOf(entry.date) === -1) {
      list.push(entry.date);
    }
    return list;
  }, []);

  // Formats today's date like "Thursday, November 5, 2026".
  function formatToday() {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function createElement(tag, className, text) {
    var el = document.createElement(tag);
    if (className) {
      el.className = className;
    }
    if (text !== undefined) {
      el.textContent = text;
    }
    return el;
  }

  function createLink(text, url) {
    var link = createElement("a", "", text);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }

  // Builds the additional info block shown below an entry's details.
  function renderInfo(info) {
    var box = createElement("div", "entry-info");
    box.appendChild(createElement("h3", "entry-info-title", info.title));

    // A simple list (no bullets) holding each piece of info.
    var list = createElement("ul", "entry-info-list");

    var addressItem = createElement("li", "entry-info-address");
    info.address.forEach(function (line, index) {
      if (index > 0) {
        addressItem.appendChild(document.createElement("br"));
      }
      addressItem.appendChild(document.createTextNode(line));
    });
    list.appendChild(addressItem);

    var phoneItem = createElement("li", "entry-info-phone", "Telephone: ");
    phoneItem.appendChild(createLink(info.telephone, "tel:" + info.telephone.replace(/[^0-9]/g, "")));
    list.appendChild(phoneItem);

    if (info.thumbnail) {
      var figure = createElement("figure", "entry-info-thumb-figure");

      // Only the image is a link; the caption below it is plain text.
      var thumbLink = createLink("", info.thumbnail.url);
      thumbLink.className = "entry-info-thumb-link";
      var img = createElement("img", "entry-info-thumb");
      img.src = info.thumbnail.src;
      img.alt = info.thumbnail.alt;
      thumbLink.appendChild(img);

      figure.appendChild(thumbLink);
      figure.appendChild(createElement("figcaption", "entry-info-thumb-caption", "Tap to open in Google Maps"));

      var thumbItem = document.createElement("li");
      thumbItem.appendChild(figure);
      list.appendChild(thumbItem);
    }

    info.links.forEach(function (item) {
      var linkItem = document.createElement("li");
      linkItem.appendChild(createLink(item.text, item.url));
      list.appendChild(linkItem);
    });

    box.appendChild(list);
    return box;
  }

  function renderDay(day) {
    scheduleEl.textContent = "";
    SCHEDULE.filter(function (entry) { return entry.date === day; })
      .forEach(function (entry) {
        var card = createElement("article", "entry");

        var when = createElement("div", "entry-when");
        when.appendChild(createElement("span", "entry-date", entry.date));
        if (entry.time) {
          when.appendChild(createElement("span", "entry-time", entry.time));
        }

        var body = createElement("div", "entry-body");
        body.appendChild(createElement("h2", "entry-description", entry.description));
        if (entry.location) {
          body.appendChild(createElement("p", "entry-location", entry.location));
        }
        if (entry.details) {
          body.appendChild(createElement("p", "entry-details", entry.details));
        }

        card.appendChild(when);
        card.appendChild(body);
        if (entry.info) {
          card.appendChild(renderInfo(entry.info));
        }
        scheduleEl.appendChild(card);
      });
  }

  days.forEach(function (day) {
    var option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    select.appendChild(option);
  });

  // Preselect today; default to the first day when today is not in the data.
  var today = formatToday();
  select.value = days.indexOf(today) !== -1 ? today : days[0];

  select.addEventListener("change", function () {
    renderDay(select.value);
  });

  renderDay(select.value);
})();
