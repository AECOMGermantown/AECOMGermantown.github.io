# GSA-Prototype - Link to publicly accessible prototype - http://52.11.38.94/

The AECOM team used a combination of Agile Scrum ad DevOps engineering techniques to facilitate a 1-week sprint to coordinate the prototype project. This included initial project setup and elaboration of requirements, design, development, testing, user acceptance testing, and installation activities. 

We quickly assembled a Scrum team and had them work closely together (mostly collocated, but some distributed). The following team was created to support the prototype project, which incorporated many of the labor categories required under labor pool three (full stack). 

Product Manager,
Technical Architect,
Back End Web Developer, 
Front End Web Developer,
Front End Web Developer,
Interaction Designer,
DevOps Engineer

Through an iterative process we identified the best fit open-source technology tool chain to support development, with a focus on automation and continuous integration. The following tool chain was setup for the prototype project:

- WebStorm IDE for JavaScript, CSS & HTML prototype development
- Leaflet/Mapbox as an open source mapping API
- Angular JS for the applicaiton framework
- SASS as the CSS precompiler
- Angualr UI router, angular-toastr, angular-bootstrap, and lodash for web development libraries
- Jenkins for continous integration 
- Gulp for compilation and builds 
- Karma, Jasmine, Sinon, and Protractor as a set of automated unit testing for JavaScript and Angular
- Github repository with a stream setup based on GitFlow
- Ubuntu web server running Nginx on AWS
- Zabbix for continuous applicaiton monitoring
- Docker as the application container
- Bower & NPM as the Web Package Manager 

The 1-week sprint to build the prototype proceeded as follows: 

Sprint Day 1: 
Initial kick-off meeting with team to discuss the scope of work and initial ideas, materials to review, etc. 
Held formal planning meeting, setup scrum board and reviewed open-source visual data driven options (map, charts, etc.). Reviewed openFDA API data sets for consistency and realible data points that we could use to relate the information in a usable format that would benefit the end user. Began to setup user stories based on ideas idenitified during brainstorming planning session.  

Sprint Day 2:
Created design comp and sytle guide based on options discussed in planning session. Initial dev mockup was done in real-time, with paired programming techniques to share ideas and implement changes. Backend developers created algorithms to pull necessary content from openFDA API for food, drugs, and devices. Implemented changes in first draft of the heat map design. 

Sprint Day 3:
Reviewed latest version of the prototype. Completed envrionment setup with Jenkins and Nginx to host the site. Published publically accessbile link. Setup Google Analystics to support UAT and collect feeback on user nagivation. Refined initial site design based on limitations identified with API data sets and simplified the search function. 

Day 4: 
Updated mapping design and color scheme based on iterative design comp. Drafted installation steps for server and deploying the web site. 

Day 5: 
Incorporated openFDA API data set and counts by state for recalls in the heat map. Fined tuned the application for mobile devices and responsive design. Reviewed latest prototype functionality and shared ideas on minor changes to zooming functionality. 

Day 6: 
Conducted usability tests with new site users on both laptop and mobile devices. Reviewed feedback and incorporate minor changes to the initial design. 

Day 7: 
Final product review and Product Owner acceptance. Completed RFQ requirements and submitted proposal. 

AECOM Criteria/Evidence: 

1)AECOM dedicated a Product Manager to the prototype project

2)Formed an Agile Scrum team with 7 of the LCAT's in labor pool three (full stack)

3)Held brainstorming sessions with the Product Owner to define initial user stories; conducated usability testing on laptops and mobile devices.  

4)Responsive design, Photoshop for design comps, Visio for wireframes

5) Design style guide (GSA_FDA_Proto_StyleGuide_v.1.pdf) is located in the prototype_comps folder in the GitHub repo

6) Held usability testing with open-ended steps for users to follow. Conducted usability tesitng on laptops and mobile devices. 
Evidence- 

7) Applied Agile Scrum with daily demonstrations where the Product Owner and team provide input on changes. 

8) Prototype is responsive and works on multiple devices

9) Jenkins, WebStorm IDE, Gulp, Docker, Angular JS. See full list in Read.me introduction. 

10) Deployed on Nginx server hosted in AWS cloud

11) Unit tests were scripted in Karma, Jasmine, Sinon, and Protractor 

12) Setup Jenkins as the continuous deployment server that pushed updates to Nginx server in AWS cloud. 

13) Used GitHub repo for merging changes and tracked user stories through GitHub issues 

14) Zabbix for continuous applicaiton monitoring

15) Docker as the application container 

16) openFDA API, Leaflet open-source mapping API

17) Agile Scrum, conducted daily demonstrations to review and incorporate improvements 

18) provided sufficient documentation to install and run their prototype on another machine
 
19) All the tools AECOM used in building the prototype are open-source and freely available


















