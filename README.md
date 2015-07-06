GSA-Prototype - Link to publicly accessible prototype - http://52.11.38.94/
Link to GitHub Repository - https://github.com/AECOMGermantown/AECOMGermantown.github.io

The AECOM Team used a combination of Agile Scrum and DevOps engineering techniques to facilitate a 1-week sprint to coordinate the prototype project. Major activities included initial project setup and elaboration of requirements, design, development, testing, user acceptance testing, and deployment of the prototype. 

We quickly assembled a Scrum team and had them work closely together (mostly collocated, but some distributed). The following team was created to support the prototype project, which incorporated many of the labor categories required under labor pool three (full stack):

Product Manager, Technical Architect, Back End Web Developer, Front End Web Developer, Front End Web Developer, Interaction Designer, DevOps Engineer

Through an iterative process we identified the best fit open-source technology tool chain to support development, with a heavy focus on automation and continuous integration. The following tool chain was set up for the prototype project:
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
•	Docker as the application container  
•	Bower & NPM as the Web Package Manager
• Google Analytics for user and site behavior 

Sprint Lifecycle – 
The 1-week sprint to build the prototype proceeded as follows:

Day 1: We held an initial kick-off meeting with team to discuss the scope of work and share ideas, materials to review, etc. Later in the afternoon we conducted a formal sprint planning meeting, and set up our scrum board and reviewed open-source visual data-driven options (map, charts, etc.). In addition, we reviewed the openFDA API data sets for consistency and reliable data points to be used to relate the information in a usable format that would most benefit the end user. We then began to flush our high level epics and decomposed them into user stories and tasks based on ideas identified from the brainstorming processes planning session.

Day 2: Created design comp and style guide based on options discussed in planning session. Initial dev mockup was done in real-time, with paired programming techniques to share ideas and implement changes. Backend developers created algorithms to pull necessary content from openFDA API for food recalls. We then implemented initial changes in first draft of heat map design using Leaflet, an open-source mapping API.

Day 3: Reviewed latest version of prototype. Completed environment setup with Jenkins and Nginx to host site. Published publically accessible link. Set up Google Analytics to support UAT and collect feedback on user navigation. Refined initial site design based on limitations identified with API datasets and simplified the search function.

Day 4: Updated mapping design and color scheme based on iterative design comp. Drafted installation steps for server and deploying web site.

Day 5: Incorporated openFDA API data set and counts by state for recalls in heat map. Fine-tuned the application for mobile devices and responsive design. We tested the prototype application using mobile and tablet based OS simulators. Reviewed latest prototype functionality and shared ideas on minor changes to zooming functionality.

Day 6: Conducted usability tests with new site users on both laptop and mobile devices. Reviewed feedback and incorporated minor changes into initial design.

Day 7: Final product review and Product Owner acceptance. Completed RFQ requirements and submitted proposal.

Result: 
The end result of our openFDA prototype development effort was a sophisticated heat map design that used a broad base of open source tools, technologies, and API’s. Our Scrum team was able to combine a comprehensive tool set along with our Agile lightweight processes, to quickly collaborate and build working functionality that is readily available to benefit public users of FDA food recall information. 

Our ability to integrate and deploy an open-source tool set fully demonstrated our technical expertise around CI/CD, which will translate directly to any future projects supported under the 18F BPA. 
