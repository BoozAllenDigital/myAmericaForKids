#Fed Biz Opps



This repository contains Booz Allen Hamiltons's Fed Biz Opps website.  Federal Business Opportunities (FedBizOpps) believes in empowering industry partners to identify bidding opportunities to foster meaningful solutions in support of our nations vast missions.  Our vision for the site was to lower the barrier to entry for the user to be able to find relevant opportunities and therefore to increase competition and fairness of the government procurement process.

The site is accessible at the link below.
[http://fedboozops.com](http://fedboozops.com)

Outline:
* [How to Build and Contribute](https://github.com/booz-allen-agile-delivery/dryrun2#how-to-build-and-contribute)
* [Technical Solution](https://github.com/booz-allen-agile-delivery/dryrun2#technical-solution)
  * [Open Source usage] (https://github.com/booz-allen-agile-delivery/dryrun2#open-source-usage)
  * [Agile Architecture robustness] (https://github.com/booz-allen-agile-delivery/dryrun2#architecture-robustness)
  * [Front-end Development] (https://github.com/booz-allen-agile-delivery/dryrun2#front-end-development)
  * [Back-end Development] (https://github.com/booz-allen-agile-delivery/dryrun2#back-end-development)
  * [Differentiation] (https://github.com/booz-allen-agile-delivery/dryrun2#technical-differentiation)
* [Technical and Management Approach](https://github.com/booz-allen-agile-delivery/dryrun2#technical-and-management-approach)
  *  [Agile Software Development LifeCycle](https://github.com/booz-allen-agile-delivery/dryrun2#agile-software-development-lifecycle)
  *  [User-Centric Design](https://github.com/booz-allen-agile-delivery/dryrun2#user-centric-design)
  *  [Diversity of Roles](https://github.com/booz-allen-agile-delivery/dryrun2#diversity-of-roles)
  *  [Differentiation](https://github.com/booz-allen-agile-delivery/dryrun2#management-differentiation)
* [Benefits](https://github.com/booz-allen-agile-delivery/dryrun2#benefits)
* [Links to Artifacts](https://github.com/booz-allen-agile-delivery/dryrun2#links-to-artifacts)

##How to Build and Contribute

#### Instructions to contribute

- Clone the rep
- make the code change
- use vagrant up to test it
- submit pull request

#### Instructions to setup front end:

1.) Navigate to app/client/practice.

2.) Install nodeJS, bower, compass, grunt, and grunt-cli:

``` bash
sudo -s
npm install nodejs -g
npm install bower -g
npm install compass -g
npm install grunt -g
npm install grunt-cli -g
npm install
exit
```

3.) Run installs for bower:

``` bash
bower install
```

4.) Finally, serve that grunt:

```bash
grunt serve
```

### Instructions for Sinatra API

1. To (re)generate Swagger's api-docs, run *rake* from the api root directory

2. To startup Sinatra, run /api/start.sh

Currently, the application only has a single Mongoid configuration in the mongoid.yml file - set to development.
It uses the default Mongo configuration, i.e. localhost/27017 and a database named sinatradb that you will probably
want to change. Add or include additional environments as needed - refer to http://mongoid.org/en/mongoid/docs/installation.html
for more information.

##Technical Solution

### Open Source Usage

The FedBizOpps app uses all open source frameworks.  The open source license for the included in the [LICENSE](LICENSE) file.

###  Front-End:

We selected Bootstrap CSS and Charts.JS for front-end becuase of their widespread adoption in open source and ability to support responsive-web design for mobile and desktop browsers. Angular provides us the ability to easily create interactive applications.

### Back-end:

We selected MongoDB because it allows for faster agile development through rapid schema creation and modification.
We chose ruby because we could quickly create and modify routes and deploy changes to support the dependencies of front-end developers.   

**API Design**

Our API was based on REST design principles.  We use google docs to collaboratively build out the API documentation and API mocks.  The team followed REST API design best practices such as naming conventions for URLs and limiting the number of levels of depth for API calls.

#### Technical Differentiation

* Ability to stand-up full DevOps stack based on Docker and Chef and reduced time to deploy builds to seconds.
* Ability to rapidly ingest dataset and describe to product owners.
* Decoupled front-end and API to provide value to those that don't want to integrate with the front-end.
* Humans.txt
* API Documentation
* Rich front-end capabilities
* Data exploration and aggregation

## Technical and Management Approach

### Agile Software Development Lifecycle

#### Agile Process

For a 24 hour challenge, across 3 days, we created a microcosm of a real agile project. We timeboxed ourselves to four 2-hour iterations per day, with an agile coach facilitating a cross-functional team through product development.

Viewing each day’s 5pm output as a release, we conducted 10-15 minutes of Release Planning each morning. 

For maximum efficiency, we co-located our team to one room, where communication could flow easily — and noise served as information. 

We had many information radiators posted throughout the room: Our Kanban board, Iteration plans, Release plans, Personas, Wireframes, Blocking issues, Completed work, Retrospective output from previous days, and an Iteration timer projected onto the wall.

We elected one person to serve as a product owner, who shaped and shared a vision, and decided among priorities.

We demoed at the end of each 2 hour iteration, with each day’s final output as a Release Review. We adjusted the day’s priorities after each demo, based on the state of the product, and feedback from our Product Owner.

Our cross-functional team consisted of generalizing specialists, with emphases in front end, API, design, and data skills.

To reduce the size of the main repository, we elected to store the artifacts produced by the Agile process in a separate repository linked below.

#### User-Centric Design


### Diversity of Roles

Our team members on the challenge spanned a total of ten different labor categories.  A complete listing of the team can be found in our humans.txt file hosted on the website.

[http://52.0.46.33:9000/humans.txt](http://52.0.46.33:9000/humans.txt)

### Management Differentiation

* Ability to create product vision and refine throughtout the challenge
* User-Centric focus through product owners, personas, and user journey exercises.
* Robust Agile approach that maximizes collaboration throughout the 24 hour challenge.

## Demonstrated Value

### Business value demonstrated

In evaluating the parameters of the Agile Delivery Services challenge, we decided that the true value proposition of a skills management platform is the ability to maintain up-to-date and accurate information about occupational skills. 

* Better understand the landscape of opportunities
* Analytics and data visualization 
* Guided search 
* Intuitive interface

### DevOps value demonstrated

* Separate builds for front-end and backend-end
* Builds and Deploy in less than 30 seconds
* Jenknins, Docker, and Chef integration / automation

### Quality Demonstrated

Update with link to Quality Control File here.

## About this Readme.md

The word count of this readme.md was measured using the following unix command:

```
wc -w readme.md
```

## Artifacts Collected.

The following artifacts were captured throughout the three days as reflected here.

* [https://github.com/booz-allen-agile-delivery/dryrun1-artifacts](https://github.com/booz-allen-agile-delivery/dryrun1-artifacts)
* [https://github.com/booz-allen-agile-delivery/dryrun1-artifacts/](https://github.com/booz-allen-agile-delivery/dryrun1-artifacts/)
* [Design Strategy](STRATEGYDOC.md)
