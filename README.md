GSA-Prototype - Link to publicly accessible prototype - http://52.11.38.94/

The AECOM Team used a combination of Agile Scrum and DevOps engineering techniques to facilitate a 1-week sprint to coordinate the prototype project, including initial project setup and elaboration of requirements, design, development, testing, user acceptance testing, and installation activities.

We quickly assembled a Scrum team and had them work closely together (mostly collocated, but some distributed). The following team was created to support the prototype project, which incorporated many of the labor categories required under labor pool three (full stack):

Product Manager, Technical Architect, Back End Web Developer, Front End Web Developer, Front End Web Developer, Interaction Designer, DevOps Engineer

Through an iterative process we identified the best fit open-source technology tool chain to support development, focusing on automation and continuous integration. The following tool chain was set up for the prototype project:

•	WebStorm IDE for JavaScript, CSS & HTML prototype development
•	Leaflet/Mapbox as an open source mapping API
•	Angular JS for application framework
•	SASS as the CSS precompiler
•	Angular UI router, angular-toastr, angular-bootstrap, and lodash for web development libraries
•	Jenkins for continuous integration
•	Gulp for compilation and builds
•	Karma, Jasmine, Sinon, and Protractor as a set of automated unit testing for JavaScript and Angular
•	Github repository with a stream setup based on GitFlow
•	Ubuntu web server running Nginx on AWS
•	Monitor.US for continuous application monitoring
•	Vagrant as the application container
•	Bower & NPM as the Web Package Manager

The 1-week sprint to build the prototype proceeded as follows:

Day 1: Initial kick-off meeting with team to discuss scope of work and initial ideas, materials to review, etc. Held formal planning meeting, set up scrum board and reviewed open-source visual data-driven options (map, charts, etc.). Reviewed openFDA API data sets for consistency and reliable data points to be used to relate the information in a usable format that would benefit the end user. Began to set up user stories based on ideas identified during brainstorming planning session.

Day 2: Created design comp and style guide based on options discussed in planning session. Initial dev mockup was done in real-time, with paired programming techniques to share ideas and implement changes. Backend developers created algorithms to pull necessary content from openFDA API for food, drugs, and devices. Implemented changes in first draft of heat map design.

Day 3: Reviewed latest version of prototype. Completed environment setup with Jenkins and Nginx to host site. Published publically accessible link. Set up Google Analytics to support UAT and collect feedback on user navigation. Refined initial site design based on limitations identified with API datasets and simplified the search function.

Day 4: Updated mapping design and color scheme based on iterative design comp. Drafted installation steps for server and deploying web site.

Day 5: Incorporated openFDA API data set and counts by state for recalls in heat map. Fine-tuned the application for mobile devices and responsive design. Reviewed latest prototype functionality and shared ideas on minor changes to zooming functionality.

Day 6: Conducted usability tests with new site users on both laptop and mobile devices. Reviewed feedback and incorporated minor changes into initial design.

Day 7: Final product review and Product Owner acceptance. Completed RFQ requirements and submitted proposal.

AECOM Criteria/Evidence:
1) AECOM dedicated a Product Manager to the prototype project
2) Formed Agile Scrum team with seven of the LCATs in labor pool three (full stack)
3) Held brainstorming sessions with Product Owner to define initial user stories; conducted usability testing on laptops and mobile devices.
4) Responsive design for multiple users, developed design comps for usability, conducted multiple rounds of usability testing.
5) Design style guide (GSA_FDA_Proto_StyleGuide_v.1.pdf) is located in the prototype_comps folder in GitHub repo.
6) Held usability testing on multiple devices with open-ended steps.
7) Applied Agile Scrum with daily demos where Product Owner and team provide input on changes.
8) Prototype is responsive and works on multiple devices
9) Jenkins, WebStorm IDE, Gulp, Vagrant, Angular JS. See full list in Read.me introduction.
10) Deployed on Nginx server hosted in AWS cloud
11) Unit tests were scripted in Karma/Jasmine/Sinon/Protractor
12) Setup Jenkins with updates deployed to Nginx server hosted in AWS cloud.
13) Used GitHub repo for merging changes and tracked user stories through GitHub issues
14) Monitor.US for continuous application monitoring
15) Vagrant as application container
16) Leaflet mapping API
17) Agile Scrum, conducted daily demos to review and incorporate improvements
18) See Installation Guide in GitHub repo
19) All tools AECOM used to build prototype are open-source and freely available
