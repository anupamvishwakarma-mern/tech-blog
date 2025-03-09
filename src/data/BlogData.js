import { ExpressJSInstallation } from "../Components/topics/expressjs/Intallation";
import { ExpressJSIntroduction } from "../Components/topics/expressjs/Introduction";
import { HTMLCSSJSInstallation } from "../Components/topics/web-developement/Installation";
import { NextJSInstallation } from "../Components/topics/nextjs/Installation";
import { NextJSIntroduction } from "../Components/topics/nextjs/Introduction";
import { NodeJSInstallation } from "../Components/topics/nodejs/Installation";
import { Installation } from "../Components/topics/reactjs/Installation";
import { Introduction } from "../Components/topics/reactjs/Introduction";
import { HTMLTagsIntroduction } from "../Components/topics/web-developement/html/Introduction";
import { HTMLAttributesIntroduction } from "../Components/topics/web-developement/html/Attributes";
import { CSSSelectorsIntroduction } from "../Components/topics/web-developement/css/Selectors";
import { CSSPseudoIntroduction } from "../Components/topics/web-developement/css/Psudo";
import { JSVariablesIntroduction } from "../Components/topics/web-developement/javascript/Variables";
import { JSFunctionsIntroduction } from "../Components/topics/web-developement/javascript/Functions";
import { JSDOMIntroduction } from "../Components/topics/web-developement/javascript/Dom";
import { HTMLCSSJSIntroduction } from "../Components/topics/web-developement/Introduction";
import { BootstrapInstallation } from "../Components/topics/bootstrap/Installation";
import { BootstrapIntroduction } from "../Components/topics/bootstrap/Introduction";
import { PythonInstallation } from "../Components/topics/python/Installation";
import { PythonIntroduction } from "../Components/topics/python/Introduction";
import { PHPInstallation } from "../Components/topics/php/Installation";
import { PHPIntroduction } from "../Components/topics/php/Introduction";
import { MongoDBInstallation } from "../Components/topics/database/mongodb/Installation";
import { MongoDBIntroduction } from "../Components/topics/database/mongodb/Introduction";
import { MySQLInstallation } from "../Components/topics/database/mysql/Installation";
import { MySQLIntroduction } from "../Components/topics/database/mysql/Introduction";
import { SQLInstallation } from "../Components/topics/database/sql/Installation";
import { SQLIntroduction } from "../Components/topics/database/sql/Introduction";
import { SQLiteInstallation } from "../Components/topics/database/sqlite/Installation";
import { SQLiteIntroduction } from "../Components/topics/database/sqlite/Introduction";
import { NoSQLInstallation } from "../Components/topics/database/nosql/Installation";
import { NoSQLIntroduction } from "../Components/topics/database/nosql/Introduction";
import { PostgreSQLInstallation } from "../Components/topics/database/postgresql/Installation";
import { PostgreSQLIntroduction } from "../Components/topics/database/postgresql/Introduction";
import { DatabaseIntroduction } from "../Components/topics/database/Introduction";
import { GitInstallation } from "../Components/topics/git/Installation";
import { GitIntroduction } from "../Components/topics/git/Introduction";
import { DockerInstallation } from "../Components/topics/docker/Intallation";
import { DockerIntroduction } from "../Components/topics/docker/Introduction";
import { AWSIntroduction } from "../Components/topics/aws/Introduction";
import { AWSInstallation } from "../Components/topics/aws/Installation";
import { aws, database, docker, next, node, php, react } from "./assets/imageProvider";


export const blogData = [
    {
        id: 1,
        image: react,
        nav: "react-js",
        title: "React JS",
        points: ["Installation", "Introduction"],
        content: [
            Installation, Introduction,
        ],
    },
    {
        id: 2,
        image: node,
        nav: "node-js",
        title: "Node JS",
        points: ["Installation"],
        content: [
            NodeJSInstallation,
        ],
    },
    {
        id: 3,
        image: next,
        nav: "next-js",
        title: "Next JS",
        points: ["Installation", "Introduction"],
        content: [
            NextJSInstallation, NextJSIntroduction,
        ],
    },
    {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        nav: "express-js",
        title: "Express JS",
        points: ["Installation", "Introduction"],
        content: [
            ExpressJSInstallation, ExpressJSIntroduction,
        ],
    },
    {
        id: 5,
        image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        nav: "web-dev",
        title: "Web Development",
        points: ["Installation", "Introduction"],
        dropdowns: [{
            title: "HTML",
            points: ["Tags", "Attributes"],
            content: [
                HTMLTagsIntroduction, HTMLAttributesIntroduction
            ]
        },
        {
            title: "CSS",
            points: ["Selectors", "Pseudo-Classes"],
            content: [
                CSSSelectorsIntroduction, CSSPseudoIntroduction,
            ]
        },
        {
            title: "JavaScript",
            points: ["Variables", "Functions", "DOM"],
            content: [
                JSVariablesIntroduction, JSFunctionsIntroduction, JSDOMIntroduction
            ]
        },
        ],

        content: [
            HTMLCSSJSInstallation, HTMLCSSJSIntroduction
        ],
    },
    {
        id: 8,
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        nav: "bootstrap",
        title: "Bootstrap",
        points: ["Installation", "Introduction"],
        content: [
            BootstrapInstallation, BootstrapIntroduction,
        ],
    },
    {
        id: 9,
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        nav: "python",
        title: "Python",
        points: ["Installation", "Introduction"],
        content: [
            PythonInstallation, PythonIntroduction
        ],
    },
    {
        id: 10,
        image: php,
        nav: "php",
        title: "PHP",
        points: ["Installation", "Introduction"],
        content: [
            PHPInstallation, PHPIntroduction
        ],
    },
    {
        id: 11,
        image: database,
        nav: "database",
        title: "Database",
        points: ["Introduction"],
        content: [DatabaseIntroduction],
        dropdowns: [{
            title: "MongoDB",
            points: ["Installation", "Introduction"],
            content: [
                MongoDBInstallation, MongoDBIntroduction
            ]
        },
        {
            title: "MySQL",
            points: ["Installation", "Introduction"],
            content: [
                MySQLInstallation, MySQLIntroduction
            ]
        },
        {
            title: "SQL",
            points: ["Installation", "Introduction"],
            content: [
                SQLInstallation, SQLIntroduction
            ]
        },
        {
            title: "SQLite",
            points: ["Installation", "Introduction"],
            content: [
                SQLiteInstallation, SQLiteIntroduction
            ]
        },
        {
            title: "NoSQL",
            points: ["Installation", "Introduction"],
            content: [
                NoSQLInstallation, NoSQLIntroduction
            ]
        },
        {
            title: "PostgreSQL",
            points: ["Installation", "Introduction"],
            content: [
                PostgreSQLInstallation, PostgreSQLIntroduction
            ]
        },
        ]
    },
    {
        id: 13,
        image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        nav: "git",
        title: "Git",
        points: ["Installation", "Introduction"],
        content: [
            GitInstallation, GitIntroduction
        ],
    },
    {
        id: 14,
        image: docker,
        nav: "docker",
        title: "Docker",
        points: ["Installation", "Introduction"],
        content: [
            DockerInstallation, DockerIntroduction
        ],
    },
    {
        id: 15,
        image: aws,
        nav: "aws",
        title: "AWS",
        points: ["Installation", "Introduction"],
        content: [
            AWSInstallation, AWSIntroduction
        ],
    },
];
