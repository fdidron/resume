import React from 'react';
import Command from '../Command.js';
import Footer from '../Footer.js';

const SkillsContent = () => (
  <div>
    <p>
      My development expertise revolves around micro services or monolithic APIs
      built with Node.js (5 years) and front end apps built with React / React
      native (3years). I shipped apps using both GraphQL and RestFul services.
    </p>
    <p>
      <strong className="green">Javascript: </strong>
      This is the language I'm the most comfortable with, including the latest
      ES6/ES7 features such as async/await, arrow functions, ... on both the
      server and the browser.
    </p>
    <p>
      I built Restful and GraphQL services using Express, Koa and Hapi.
      Interfaced with several databases such as MySQL, PostGres, MongoDB, Redis
      or ElasticSearch using an ORM or building raw queries.
    </p>
    <p>
      On the browser I built SPA applications using React with both Redux and
      Mobx (which I favor). I'm comfortable with the Component model as well as
      with the Flux application architecture. I also have experience rolling out
      my own webpack configs with custom plugins and more advanced React
      concepts such as performance profiling and the context API and Server Side
      Rendering. I also built a couple of SPA using Angular 1.x .
    </p>
    <p>
      <strong className="green">PHP: </strong>
      I started building dynamic websites using PHP back in 2003. Since then I
      built websites using MVC frameworks such as Laravel or CodeIgniter. I'm
      comfortable with OOP, templating and Composer.
    </p>
    <p>
      <strong className="green">Go: </strong>
      I recently picked interest in Go. I have been using it since then to build
      batch jobs used to analyse large sets of data for statistics.
    </p>
    <p>
      <strong className="green">Databases: </strong>
      I'm familiar with setting up several databases manually or using managed
      services (Mongo Atlas, AWS RDS, ...), including setting up PostGres, MySQL
      and MongoDB clusters.
    </p>
    <p>
      <strong className="green">Devops: </strong>
      I'm a Linux enthusiast and have experience deploying scalable Node.JS
      applications on AWS and GCE, using VMs or Docker containers. I'm also
      comfortable with Email servers, DNS servers, Field servers setup.
    </p>
    <p>
      <strong className="green">Process: </strong>
      While building engineering teams I implemented several work processes
      including git flow, TDD (Experience with Gherkin and Jest), and CI/CD
      (Travis, Jenkins or CircleCI).
    </p>
    <Footer />
  </div>
);
export default () => (
  <div>
    <Command command="cat content/skills.md" output={<SkillsContent />} />
  </div>
);
