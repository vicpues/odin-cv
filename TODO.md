# To-do list

- [x] Components
  - [x] Basic ipnut. Props:
    - [x] Label
    - [x] Icon
  - [x] Display CV (`<output>` element)

- [x] Functionality
  - [x] Update data module to include _only_ default example data
  - [x] Abstract To/From inputs to own component (for linked validation and reusability)
  - [x] Actually implement state (maybe by bubbling it up with multiple setState functions)
  - [x] Delete group button
  - [x] Add input/group button
    - [x] Use templates in each section
    - [x] Prevent collisions by regenerating ID if it already exists in group

- [x] Fields
  - [x] General info section
    - [x] Name
    - [x] Email
    - [x] Phone number
    - [x] Address/city

  - [x] Educational experience (customisable)
    - [x] School name
    - [x] Degree/title
    - [x] Dates
    - [x] Relevant courses

  - [x] Work experience (customisable)
    - [x] Company name
    - [x] Position
    - [x] Dates
    - [x] Responsibilities

- [_] Go over aaaall the jsx and make sure it's semantic

- [_] Styling (!!)
  - [x] General layout
  - [x] Style output ([idea](https://www.scribd.com/document/660775539/academic-word-resume-template))
    - [x] Style each individual education/work datapoint
    - [x] Maybe use variables in the output file for font/spacing like we did on [index.css](./src/index.css) cause it's getting pretty messy in that css file
      - [x] whoa I didn't know you could use dir links in markdown
  - [x] Put To/From inputs side by side with a container or smn
  - [x] Tweak dark mode colors
  - [x] Remove unused dependencies and add mdi icons
  - [x] Icons
    - [x] Use mdi icons in add/delete buttons
    - [x] Add mdi icons to output
    - [x] Preprocess email address to include soft breaks
    - [x] See if icons would look good anywhere else (though it looks pretty good as is)
  - [x] Make that sucker responsive
    - [x] Tablet (>1000px)
    - [x] Mobile (>550px)

- [_] Optional features (put extra ideas in here)
  - [_] Improve dark mode toggle logic
  - [_] Drag n' drop to change the order of Input Groups
  - [x] Fix: make To: date input min="" equal to From: (a.k.a: make it so you can't have nonsensical dates such as 2025-2018)
  - [x] Fix: Disable To: input unless From: has been set (so you can't have something like "(empty)- 2025")
  - [x] Fix: When first interacting with "From", insert the current year instead of 1900
  - [x] Fix: Update To: when From: is set to a smaller value
  - [x] Make it so, when To: and From: are the same, they output "2023" instead of "2023 - 2023"
  - [x] Make it so empty To: date outputs something like "2023 - Current"
  - [_] Look at (idea) and see if we should add more datapoints
  - [_] Reset whole form
  - [_] Reset section? (debatable)
  - [_] Download as pdf
  - [_] Change output layout (choose between setups)
  - [_] Add photo
  - [_] Dark/light mode
  - [_] Lazy load sections of the page and add loading icon (only if loading times become an issue)
  - [_] Lazy load icons to minimize bundle size
  - [_] Save any résumé to localStorage with a name
  - [_] Save latest version in localStorage anonymously if not named, and load it if it exists
  - [_] Localization json file (language). Use user default, or last selected from localStorage

- [_] A11y
  - [_] Test for 200% zoom on desktop, tablet & mobile
  - [_] Set output element aria-live assertiveness to polite
  - [_] Add alternatives for prefers-reduced-motion
  - [_] Test keyboard interaction

- [_] Final touches:
  - [x] Give app a catchy name
  - [x] Links to source files/github
  - [x] Favicon
  - [x] Rename repo / package (this might require renaming through github, re-cloning, reinstalling with yarn, and then "yarn rename")
  - [x] Set up publish toolchain
  - [x] Deploy!
  - [_] Make sure CREDITS.md is correct
  - [x] Github description

  - [_] README
    - [_] Intro with description and links
    - [x] Link live view
    - [_] Cool screenshot ^\_^
    - [_] How to use
    - [_] After-action report
      - [_] Mention that I used my own template to get going
    - [_] Technologies used
    - [_] Contributing
    - [_] License
