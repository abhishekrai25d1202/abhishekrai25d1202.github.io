/* =====================================================================
   YOUR WEBSITE CONTENT
   This is the ONLY file you ever need to edit.
   ---------------------------------------------------------------------
   THREE RULES
   1. Change only the words BETWEEN the quote marks "like this".
   2. Keep the comma , at the end of every line, exactly as you see it.
   3. Don't want something to show? Leave it empty, like this: ""
      Anything empty is simply hidden on the website.

   TO ADD A NEW ENTRY (a news item, a publication, an activity):
   copy one whole existing line, from { to },  paste it on a new line
   just below the [ and change the words inside the quotes.

   IF YOU MAKE A MISTAKE: the website shows a red box telling you the
   line number. Fix that line (usually a missing comma or quote mark).
   ===================================================================== */

const SITE = {

/* ---------- 1. ABOUT YOU (Home page) --------------------------------- */

  name:         "Abhishek Kumar Rai",
  nameInPapers: "Rai, A. K.",    // how your name is written in author lists (shown in bold)
  titleLines:   ["PhD Scholar (UGC-JRF)", "Centre for Educational Technology", "IIT Bombay"],

  // DRAFT: I wrote these from your publications. Rewrite them in your own words.
  tagline: "Exploring how technology and AI can strengthen teaching, learning and teacher education.",
  bio:     "I am a PhD scholar and UGC Junior Research Fellow at the Centre for Educational Technology, IIT Bombay. My work so far has examined teacher education in India and how AI-based tools can support assessment and learning. I hold an M.Ed. in Educational Technology from Pondicherry University, and a B.Ed. and B.Sc. from Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj.",
  interests: ["Educational technology", "AI in education", "Teacher education", "Educational assessment"],


/* ---------- 2. GET IN TOUCH (Contact page) ----------------------------
   >>> PASTE YOUR DETAILS HERE, BETWEEN THE QUOTE MARKS <<<
   Same order as on the Contact page. Web links must start with https://
   Anything you leave empty "" is hidden on the website.                 */

  email:          "abhishek.rai@iitb.ac.in",      // your main email, e.g. "name@iitb.ac.in"
  alternateEmail: "abhi05326@gmail.com",      // your second email, e.g. "name@gmail.com"
  address:        "Centre for Educational Technology, IIT Bombay, Powai, Mumbai 400076",
  links: {
    scholar:   "https://scholar.google.com/citations?user=AHM1ChQAAAAJ&hl=en",         // Google Scholar: open your profile and copy the whole web address
    orcid:     "https://orcid.org/0009-0002-7932-7374",         // ORCID: looks like "https://orcid.org/0000-0000-0000-0000"
    linkedin:  "https://www.linkedin.com/in/rai-abhishek-kumar/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPKxF6ZAeRHq3RJZ6NTH2%2Fg%3D%3D",         // LinkedIn: looks like "https://www.linkedin.com/in/your-name"
    instagram: "https://www.instagram.com/foto_chemistry/",         // Instagram (your photography): "https://www.instagram.com/your-handle"
  },


/* ---------- 3. QUOTE in the top banner (shown on every page) ----------
   To remove it, empty all three lines: ""                              */

  quote: {
    sanskrit: "“सा विद्या या विमुक्तये”",
    english:  "Knowledge is that which liberates",
    source:   "Vishnu Purana · Book 1, Chapter 19, Verse 41",
  },


/* ---------- 4. PICTURES ----------------------------------------------
   Upload each picture to GitHub (next to index.html), then write its
   exact file name here. Capital letters matter: photo.JPG is not photo.jpg */

  photo: "main_image.jpg",       // your photo on the Home page
  banner: "",                    // optional: a wide picture for the top strip. Empty = the current pattern

  /* PHOTO CAROUSEL on the Contact page
     Upload up to 5 photos named exactly:
        gallery1.jpg   gallery2.jpg   gallery3.jpg   gallery4.jpg   gallery5.jpg
     (.jpeg and .png also work). gallery1 is shown first.
     To change a photo: upload a new one with the SAME name. It replaces the old one.
     Fewer than 5 photos? The missing ones are simply skipped.               */
  galleryCaptions: [
    "",    // caption for gallery1 (optional)
    "",    // caption for gallery2
    "",    // caption for gallery3
    "",    // caption for gallery4
    "",    // caption for gallery5
  ],
  photoCredit: "Photo: Abhishek Kumar Rai",   // small line under every photo
  galleryShowWhole: false,       // false = photos fill the frame (edges may be trimmed)
                                 // true  = whole photo always shows, with dark bands at the sides


/* ---------- 5. BOTTOM OF THE HOME PAGE --------------------------------
   Both are switched OFF for now. To bring one back later,
   change false to true. Your news items below are kept safe.          */

  showNews: false,
  showLatestPublications: false,   // your publications still show on the Research page

  // News — put the newest at the TOP
  news: [
    { date: "Autumn 2026", text: "Teaching Assistant for ET-610: Learning Analytics and Educational Data Mining." },
    { date: "Aug 2026",    text: "Took on the role of Photography Convenor, PG Culturals, IIT Bombay." },
    { date: "Dec 2025",    text: "Volunteered at the ICCE and T4E conferences." },
    { date: "Jul 2025",    text: "Joined the PhD programme at the Centre for Educational Technology, IIT Bombay." },
    { date: "Mar 2025",    text: "Received the Best Paper Presenter award at an ICSSR-sponsored national seminar, Bankura University." },
  ],


/* ---------- 6. RESEARCH THEMES (Research page) ---------------------- */

  research: [
    { title: "Teacher education in India", text: "How teacher education in India is shifting from training towards holistic development, and what this means for policy and practice." },
    { title: "AI in assessment and learning", text: "How AI-based tools can support educational assessment in higher education and reduce cognitive load in online learning." },
    // Add your PhD theme here by copying a line above.
  ],


/* ---------- 7. PUBLICATIONS (Research page) -------------------------
   type   = the heading it appears under. Use the same words each time:
            "Journal articles", "Conference proceedings", "Book chapters"
   link   = DOI or web address (starting with https://), or ""
   pdf    = file name of a PDF you uploaded, or ""                     */

  publications: [
    { type: "Journal articles", year: 2025, title: "Teacher Education in India: Tracing the Shift from Training to Holistic Development", authors: "Rai, A. K. & K., Chellamani", venue: "i-manager's Journal on School Educational Technology, 20(4)", link: "https://doi.org/10.26634/jsch.20.4.21797", pdf: "" },
    { type: "Conference proceedings", year: 2025, title: "The Role of Artificial Intelligence in Reducing Cognitive Load in Online Learning Environments: A Literature Review", authors: "Rai, A. K. & Devendar, B.,", venue: "International Conference on Cognitive Science: Evidence for Teacher Education. ISBN 978-93-5945-485-6", link: "", pdf: "" },
    { type: "Book chapters", year: "2025", title: "Chapter titled 'Research in Teacher Education Global & Indian Context: Teacher Education in India' in the book Teacher Education in India Perspectives, Policies and Operation", authors: "", venue: "K. Chellamani (Ed.). Neelkamal Publication. ISBN 978-93-48366-60-3", link: "", pdf: "" },
  ],


/* ---------- 8. ACTIVITIES (Activities page) -------------------------
   Shown year by year, newest first, numbered [1], [2], [3] ...
   Put each new entry at the TOP of the list.

   type  = one of these four (copy the spelling exactly):
           "Teaching"       teaching assistantships, guest lectures
           "Student role"   hostel, cultural, department positions
           "Presentation"   paper presentations, talks
           "Volunteering"   volunteering, organising committees
   year  = the year it started (decides which year heading it goes under)
   date  = shown as written, e.g. "Aug 2026 – present"
   note  = optional, e.g. "Best Paper Presenter award"
   link  = optional web address                                        */

  activities: [
    { year: 2026, type: "Teaching",     title: "ET-610: Learning Analytics and Educational Data Mining", place: "Centre for Educational Technology, IIT Bombay", date: "Autumn 2026", role: "Teaching Assistant", note: "", link: "" },
    { year: 2026, type: "Student role", title: "PG Culturals", place: "IIT Bombay", date: "Aug 2026 – present", role: "Photography Convenor", note: "", link: "" },
    { year: 2026, type: "Student role", title: "Department Equipment Manager", place: "Centre for Educational Technology, IIT Bombay", date: "Jan 2026 – present", role: "", note: "", link: "" },
    { year: 2025, type: "Volunteering", title: "International Conference on Computers in Education (ICCE)", place: "", date: "Dec 2025", role: "Volunteer", note: "", link: "" },
    { year: 2025, type: "Volunteering", title: "IEEE International Conference on Technology for Education (T4E)", place: "", date: "Dec 2025", role: "Volunteer", note: "", link: "" },
    { year: 2025, type: "Student role", title: "8th Inter-IIT Cultural Meet", place: "IIT Kanpur", date: "Dec 2025", role: "Member, Cultural Contingent (Photography)", note: "", link: "" },
    { year: 2025, type: "Student role", title: "PG Culturals", place: "IIT Bombay", date: "Aug 2025 – May 2026", role: "Photography Coordinator", note: "", link: "" },
    { year: 2025, type: "Presentation", title: "\"Transforming Educational Assessment: The Role of AI-Based Tools in Higher Education\"", place: "ICSSR-sponsored National Seminar on AI and Related Technologies in Education, Department of Education, Bankura University (online)", date: "25–26 Mar 2025", role: "Paper Presenter", note: "Best Paper Presenter award", link: "" },
    { year: 2025, type: "Volunteering", title: "NEP 2020 Regional Consultative Workshop on Transforming Teacher Education (Southern Region), conducted by NIEPA", place: "School of Education, Pondicherry University", date: "27–28 Feb 2025", role: "Organising Committee Member", note: "", link: "" },
    { year: 2024, type: "Student role", title: "Resident Management Committee, Tagore Hostel", place: "Pondicherry University", date: "2024–25", role: "Student Representative", note: "", link: "" },
  ],


/* ---------- 9. CV PAGE ---------------------------------------------- */

  cvFile: "",                    // later: upload your CV and write "cv.pdf" here. Empty = no download button

  education: [
    { when: "Jul 2025 – present", title: "PhD, Educational Technology", where: "Centre for Educational Technology, IIT Bombay", text: "UGC Junior Research Fellow." },
    { when: "2023 – 2025", title: "M.Ed., Educational Technology", where: "Pondicherry University, Puducherry", text: "" },
    { when: "2021 – 2023", title: "B.Ed.", where: "Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj", text: "" },
    { when: "2018 – 2021", title: "B.Sc.", where: "Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj", text: "" },
  ],

  awards: [   // fellowships, qualifying exams and awards
    { when: "Mar 2025", title: "UGC NET-JRF (Education)", where: "University Grants Commission", text: "Junior Research Fellowship for doctoral research." },
    { when: "Mar 2025", title: "Best Paper Presenter", where: "ICSSR-sponsored National Seminar, Bankura University", text: "For the paper \"Transforming Educational Assessment: The Role of AI-Based Tools in Higher Education\"." },
    { when: "Mar 2023", title: "Central Teacher Eligibility Test (CTET)", where: "Central Board of Secondary Education", text: "" },
  ],

  experience: [   // teaching and work experience
    { when: "Autumn 2026", title: "Teaching Assistant, ET-610: Learning Analytics and Educational Data Mining", where: "IIT Bombay", text: "" },
  ],

};
