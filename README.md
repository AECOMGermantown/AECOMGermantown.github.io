GSA-Prototype - Link to publicly accessible prototype - http://52.11.38.94/

Link to GitHub Repository (master branch release tag  v1.0)
-https://github.com/AECOMGermantown/AECOMGermantown.github.io

The URS Federal Services, Inc., an AECOM Company (AECOM) team used a combination of Agile Scrum and DevOps engineering techniques to facilitate a 1-week sprint to coordinate the openFDA prototype project. Major activities included initial project setup and elaboration of requirements, design, development, testing, user acceptance testing, and deployment of the prototype.

We quickly assembled a Scrum team and had them work closely together (mostly collocated, but some distributed). The following team was created to support the prototype project, which incorporated many of the labor categories required under labor pool three (full stack):

Product Manager, Technical Architect, Back End Web Developer, (2) Front End Web Developer, Interaction Designer, DevOps Engineer

Through an iterative process we identified the best fit open-source technology tool chain to support development, with a heavy focus on automation and continuous integration. The following tool chain was set up for the prototype project:
• WebStorm IDE for JavaScript, CSS & HTML for prototype development 
• Leaflet/Mapbox as an open source mapping API that was the bases for the heat map implementation 
• Angular JS for application framework • LESS as the CSS precompiler 
• Angular-toastr, angular-bootstrap, and lodash for web development libraries 
• Jenkins for continuous integration 
• Gulp for compilation and builds 
• Karma, Jasmine, Sinon, and Protractor as a suite of automated unit testing for JavaScript and Angular 
• Github repository with a stream setup based on GitFlow 
• Multiple Ubuntu web servers running Nginx on Amazon Web Services (AWS) 
• OSSEC for application sercurity monitoring & Monitor.US for continuous application monitoring 
• Docker as the application container • Bower & NPM as the Web Package Manager 
• Google Analytics for user and site behavior reports that were factored into overall usability improvements

Sprint Lifecycle – The 1-week sprint to build the prototype proceeded as follows:

Day 1: We held an initial kick-off meeting with team to discuss the scope of work and share ideas, along with materials to review. Later in the afternoon we conducted a formal sprint planning meeting, and set up our scrum board and reviewed various open-source visual data-driven options (map, charts, etc.). In addition, we reviewed the openFDA API data sets for consistency and identified reliable data points that we could use to remix the information in a usable format that would be most beneficial to end users. We then began to flush our high level epics and decomposed them into user stories and tasks based on ideas identified from the brainstorming process and planning session.

Day 2: Based on the ideas that came out of our planning session, our Usability Designer created an initial design comp and style guide based on several options. We reviewed as a team and began developing an initial dev mockup in real-time, with paired programming techniques to share ideas and implement changes. Our backend developers created algorithms to pull necessary content from openFDA API for food recalls. This information was then used to create an array of food recalls by state that could be called by the Leaflet heat map API. We then implemented initial changes in first draft of heat map design.

Day 3: We conducted an early demo with the Product Owner to review the latest version of prototype. We further refined the initial site design based on limitations we identified with API datasets, mostly related to inconsistencies in recall formats from free form data entry. Additional suggestions were made regarding how the heat map should function on a mobile device and overall responsive design for the site. While development continued, we completed in parallel the continuous environment setup with Jenkins and Nginx. We published a publically accessible link version of the site after creating a Ubuntu web server in AWS. In addition our team set up Google Analytics to support UAT and collect feedback on site navigation and event activities. 
Day 4: We further updated the map design and site color scheme based on an iterative design comp. We selected a pink and purple gradient scale based on user feedback of various color options. We also drafted installation steps for configuring the server and deploying web site in the container.

Day 5: We fully integrated the food recall information from the openFDA API data set into the heat map. We also fine-tuned the application for mobile devices and responsive design after testing the prototype application using mobile and tablet based OS simulators. In addition, we tested on physical mobile devices to ensure proper layout and functionality. Another demo has held with the Product Owner to review the latest prototype functionality and shared ideas on minor changes to zooming functionality. We ultimately removed zooming in and out of the heat map as it caused scaling issues on smaller devices.

Day 6: Conducted usability tests with new site users on both laptop and mobile devices. Feedback was shared in the GitHub repo, which the Scrum team reviewed and incorporated minor changes into the initial design. We fully scripted out all our of unit tests to allow for complete code coverage and finalized all changes to the application.

Day 7: The team conducted a sprint review with the Product Owner for a final demonstration of the prototype. Once acceptance was confirmed the team tagged the master branch in GitHub, including a timestamp that finalized all changes to the openFDA prototype.

Result: 

The end result of our openFDA prototype development effort was a sophisticated heat map design that used a broad base of open source tools, technologies, and API’s. Our Scrum team was able to combine a comprehensive tool set along with our Agile lightweight processes, to quickly collaborate and build working functionality that is readily available to benefit public users of FDA food recall information.
Our ability to integrate and deploy an open-source tool set fully demonstrated our technical expertise around CI/CD, which will translate directly to any future projects supported under the GSA ADS I BPA in support of the 18F Organization.
 
