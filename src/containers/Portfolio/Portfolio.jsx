import React from "react";
import Card from "../../components/Card/Card";
import "../../styles/style.css";
import Insp from "../../assets/tinyinspirator.gif";
import Wa from "../../assets/tinyweather-api.gif";
import Workout from "../../assets/workout.png";
import Tungsten from "../../assets/tungsten.png";
import Directory from "../../assets/employee.png";
import Burger from "../../assets/burger.png";

const Portfolio = () => {
  return (
    <div className="container cont">
      <div className="row">
        <div className="col">
          <h1>Portfolio</h1>
          <Card
            image={Insp}
            title="The Inspirator"
            description="The Inspirator is an application to help unlock creativity for persons needing a fresh approach. This site provides a different perspective to help continue or initiate a project, from writing a song to plotting a story. "
            github="https://github.com/martintara117/GT-Project1"
            deployedSite="https://martintara117.github.io/GT-Project1/"
          />
          <Card
            image={Tungsten}
            title="Tungsten Tools"
            description="Tungsten Tools is an application where users can rent tools from other people in their area by searching by zip code and tool category."
            github="https://github.com/martintara117/project-tungsten"
            deployedSite="https://floating-crag-67869.herokuapp.com/"
          />
          <Card
            image={Wa}
            title="The Weather Dashboard"
            description="This weather app allows the user to search for a city and get a five day weather forecast."
            github="https://github.com/martintara117/weather_api"
            deployedSite="https://martintara117.github.io/weather_api/"
          />
          <Card
            image={Workout}
            title="Fitness Tracker"
            description="This workout app lets users track and save their daily workouts. It has a stats page that shows users the progress in graphs and tables."
            github="https://github.com/martintara117/workout_tracker"
            deployedSite="https://git.heroku.com/mighty-brushlands-74381.git"
          />
          <Card
            image={Burger}
            title="The Eat Da Burger App"
            description="This app lets users create a burger and then consume the burger."
            github="https://github.com/martintara117/burger"
            deployedSite="https://salty-plains-85711.herokuapp.com/"
          />
          <Card
            image={Directory}
            title="Employee Directory"
            description="This app allows you to search for people in the employee directory. Type their first or last name and the employee will appear."
            github="https://github.com/martintara117/employee_directory-"
            deployedSite="https://martintara117.github.io/employee_directory-/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
