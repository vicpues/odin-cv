# To-do list

- [_] Components
  - [x] Basic ipnut. Props:
    - [x] Label
    - [x] Icon
  - [_] Form wrapper
    - [_] Switch between edit/display with a submit button (this could be a navbar thingy)
  - [_] Display CV (`<output>` element)

- [_] Functionality
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

- [_] Styling (!!)
  - [_] Maaaaaybe create a design file in figma
  - [_] General layout (mobile first!)
  - [_] Style components individually
  - [_] Make that sucker responsive

- [_] Optional features (put extra ideas in here)
  - [_] Lazy load sections of the page and add loading icon
  - [_] Drag n' drop to change the order of Input Groups
  - [x] Fix: make To: date input min="" equal to From: (a.k.a: make it so you can't have nonsensical dates such as 2025-2018)
  - [x] Fix: Disable To: input unless From: has been set (so you can't have something like "(empty)- 2025")
  - [x] Fix: When first interacting with "From", insert the current year instead of 1900
  - [_] Fix: Update To: when From: is set to a smaller value
  - [_] Make it so, when To: and From: are the same, they output "2023" instead of "2023 - 2023"
  - [_] Make it so empty To: date outputs something like "2023 - Current"
  - [_] Save latest version in localStorage and load data if it exists
  - [_] Reset whole form
  - [_] Reset section? (debatable)
  - [_] Download as pdf
  - [_] Change output layout (choose between setups)
  - [_] Add photo
  - [_] Dark/light mode

- [_] Final touches:
  - [_] Links to source files/github
  - [_] Favicon
  - [_] Set up publish toolchain
  - [_] Deploy!
  - [_] Make sure CREDITS.md is correct
  - [_] Github description

  - [_] README
    - [_] Intro with description and links
    - [_] Cool screenshot ^\_^
    - [_] How to use
    - [_] After-action report
      - [_] Mention that I used my own template to get going
    - [_] Technologies used
    - [_] Contributing
    - [_] License
