import React from "react";
import styled from "styled-components";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const IntroContainer = styled.div`
  width: 76%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const H1 = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: #333333;
  text-align: center;
`;

const P = styled.p`
  font-size: 18px;
  color: #666666;
  text-align: center;
`;

const FindContainer = styled.div`
  width: 76%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const H2 = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333333;
  text-align: start;
  display: flex;
`;

const Strong = styled.strong`
  font-size: 18px;
  font-weight: bold;
  color:rgba(0, 130, 252, 0.82);
  text-align: start;
  margin-right: 10px;
`;

const Ul = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  padding-left: 20px;
  font-size: 18px;
  color: #666666;
  text-align: start;
`;

const Li = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  color: #666666;
  text-align: start;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  width: calc(33.33% - 20px);
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
    text-align: center;
    color:rgba(0, 114, 220, 0.89);
  }

  p {
    font-size: 16px;
    margin: 10px;
    text-align: center;
    color: #666666;
  }
`;

export const BlogsIntro = () => {
  return (
    <Intro>
      <IntroContainer>
        <H1>Welcome to My <span style={{ color: "#0082fc" }}>Tech Blog</span>: Exploring Modern Web Development</H1>
        <P>
          Welcome to my blog, where I dive into the world of modern web
          development! Whether you're a beginner or an experienced developer,
          this blog is designed to help you learn, explore, and stay updated
          with the latest technologies and best practices in the industry.
        </P>
      </IntroContainer>
      <FindContainer>
        <H2>What You'll Find Here:</H2>
        <P className="text-start">
          Here, you'll find in-depth tutorials, tips, and insights on popular
          frameworks and tools like ReactJS, NodeJS, NextJS, Tailwind CSS, and
          more. Each blog post is crafted to provide you with practical
          knowledge, real-world examples, and actionable steps to enhance your
          skills and build amazing projects.
        </P>
        <Ul>
          <Li>
            <P className="text-start">
              <Strong>ReactJS:</Strong>
              Learn how to build dynamic and interactive user interfaces with
              React. From components and props to hooks and state management,
              we've got you covered.
            </P>
          </Li>
          <Li>
            <P className="text-start">
              <Strong>NodeJS:</Strong>
              Explore the backend world with NodeJS. Discover how to build
              scalable and efficient server-side applications.
            </P>
          </Li>
          <Li>
            <P className="text-start">
              <Strong>NextJS:</Strong>
              Take your React skills to the next level with NextJS. Learn about
              server-side rendering (SSR), static site generation (SSG), and API
              routes.
            </P>
          </Li>
          <Li>
            <P className="text-start">
              <Strong>HTML & CSS:</Strong>
              Brush up on the fundamentals of web development with HTML and CSS.
              Perfect for beginners and a great refresher for experienced
              developers.
            </P>
          </Li>
          <Li>
            <P className="text-start">
              <Strong>Tailwind CSS:</Strong>
              Master the art of utility-first CSS with Tailwind. Create
              responsive and beautiful designs without writing custom CSS.
            </P>
          </Li>
        </Ul>
      </FindContainer>
      <FindContainer>
        <H2>Why This Blog?</H2>
        <Cards>
          <Card>
            <h3>Hands-On Learning</h3>
            <p>
              Every blog post includes practical examples and code snippets to
              help you apply what you learn.
            </p>
          </Card>
          <Card>
            <h3>Beginner-Friendly</h3>
            <p>
              Clear explanations and step-by-step guides make complex topics
              easy to understand.
            </p>
          </Card>
          <Card>
            <h3>Stay Updated</h3>
            <p>
              Keep up with the latest trends and updates in the web development
              world.
            </p>
          </Card>
        </Cards>
      </FindContainer>
    </Intro>
  );
};
